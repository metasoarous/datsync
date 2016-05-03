
![Datsync](datsync.jpg)

Datomic &lt;-> DataScript syncing/replication utilities

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/metasoarous/datsync?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



## Introduction

This library offers tools for building DataScript databases as materialized views (very much in the re-frame/samsa sense) of some master Datomic database.

It is hoped that we'll also eventually be able to provide tools for doing bidirectional syncing, giving us optimistic updates and offline functionality on clients.
For now, I hope this restricted scope will be something we can build upon.

From here:

* Clojure/West 2016 talk: [Datalog all the way down](https://www.youtube.com/watch?v=aI0zVzzoK_E)
* For an example datsync application and a look at the patterns datsync facilitates, see [Catalysis](https://github.com/metasoarous/catalysis) and its [chatroom](https://gitter.im/metasoarous/catalysis)
* For more in depth documentation (including the [big picture system vision](http://github.com/metasoarous/datsync/wiki/The-Vision) and this library's [current limitations and future directions](http://github.com/metasoarous/datsync/wiki/Current-limitations-and-future-directions)), see the [datsync GitHub wiki](https://github.com/metasoarous/datsync/wiki).
* If you'd like to chat, join us in the [datsync chatroom](https://gitter.im/metasoarous/datsync).
* If you're more interested in a quickstart and API tour, read on.
* The source is also heavily documented (though there's need of some cleanup there).


## Quickstart

First, add the following to your `project.clj`:

```
[datsync "0.0.1-SNAPSHOT"]
```

### On the client

First, the namespace:

```clojure
(require '[datsync.client :as datsync]
         '[datascript.core :as d])
```

Next we'll create our database connection, and load it with some datsync specific schema:

```clojure
(def conn (d/create-conn datsync/base-schema))
```

While there are no restrictions presently as to what methods you may use for sending messages between client
and server, we'll show you roughly how you'd set things up using [Sente](https://github.com/ptaoussanis/sente).

#### Getting data into the client db

You'll need the client to receive data from the server as transactions.

Assuming we have a `push-msg-handler` multimethod set up which dispatches on the message id, we can intercept
messages with an id of (e.g.) `:datsync/tx-data`, and handle them as follows:

```clojure
(defmethod push-msg-handler :datsync/tx-data
  [[_ tx-data]]
  (datsync/apply-remote-tx! conn tx-data))
```

The `datsync/apply-remote-tx!` function takes your DataScript `conn` and a collection of transaction forms
(should be compatible with any Datomic transaction form), and applies that to the `conn`.

It's worth noting a few things about this function:

* It expands nested maps, so inner maps aren't just treated as single values in the DataScript db
* Every entity gets a `:datsync.remote.db/id` mapping to the Datomic id
* Local ids try to match remote ids when possible
* Any entity specified in the transaction which has a `:db/ident` attribute will be treated as part of the
  schema for the local `conn`'s db, and `assoc`'d into the db's `:schema` in a DataScript compatible manner
    * Any `:db/valueType` other than `:db.type/ref` will be removed, since DataScript errors on anything other
      than `:db.type/ref`
    * This operation updates the db indices by creating a new database with the new schema, and moving all the
      datoms over into it.
    * Schema entities are included as datoms in the db, not just as `:schema`
        * Because DataScript doesn't support idents, if you want to use this data, you'll have to jump through
          some hoops to reference attribute metadata via the schema attribute entity
        * This can facilitate really powerful UI patterns based on schema metadata which direct the composition
          of UI components (in an overrideable fashion); have some WIP on this I might put in another lib eventually
    * We can also apply schema changes to an existing database using the `datsync/update-schema!` function

#### Sending transactions to the server

When we send transactions to the server, we need to translate their entity ids to the corresponding `:datsync.remote.db/id` values.
The `datsync/datomic-tx` utility function does this for us.
In sente you could write a little function that wraps this as follows.

```clojure
(defn send-tx! [tx]
  (ws/chsk-send! [:datsync.client/tx (datsync/datomic-tx conn tx)]))
```

### On the server

Here things look pretty similar; we need to send and receive transactions.
However, in general, things are much simpler here, since a lot of the translational work between DataScript and Datomic is set up to happen on the client side.

To start, let's require the `datsync.server.core` namespace.

```clojure
(require '[datsync.server :as datsync])
```

#### Receiving transactions

For this we'll have to set up a listener for the `:datsync.client/tx` messages that we sent from the client.
If you're using regular http requests, you can just call this in your handler functions as you might normally handle a form submission and send a respond indicating whether the transaction went through.
In sente, you might do something like:


```clojure
(defmethod event-msg-handler :datsync.client/tx
  [{:as app :keys [datomic ws-connection]} {:as ev-msg :keys [id ?data]}]
  (let [tx-report @(datsync/apply-remote-tx! datomic ?data)]
    (println "Do something with:" tx-report)))
```

#### Sending transactions to clients

Every time we get a transaction, we want to send the results of that transaction to any client that needs to be notified.
Eventually we can get fancy with installing subscription middleware, so for each client we have a specification of what they have "checked out", but this is just a starting point.

Assuming we just send all changes to all clients using sente, you might write a function like this as a handler:

```clojure
(defn handle-transaction-report!
  [tx-deltas]
  ;; This handler is where you would eventually set up subscriptions
  (try
    (ws/broadcast! ws-connection [:datsync/tx-data tx-deltas])
    (catch Exception e
      (log/error "Failed to send transaction report to clients!")
      (.printStackTrace e))))
```

This handler function should take a collection `tx-deltas` of `:db/add` and `:db/retract` tx forms which will automatically get computed from the datoms created in the transaction.
This handler function is also where you could implement your own scope restriction functionality and read authorization security protocols if needed.

We apply this handler function using the `datsync/start-transaction-listener!` function:

```clojure
(datsync/start-transaction-listener! (d/tx-report-queue conn) handle-transaction-report!)
```

This function currently takes the Java blocking queue returned by `d/tx-report-queue` and consumes all changes placed on that queue.
We'll eventually make it possible to pass in a `core.async` channel as well, so you can pull messages off Datomic's single `tx-report-queue` and mult them out to various processes that needed these notifications as well.


### Bootstrapping

Depending on how you set things up, you may also want to set up some bootstrap message functionality on client and server to initialize the data on the front end.
Once we have scoping functionality (as described below), we may be able to do without this (since the client will automatically be specifying what data it needs), so we won't spend to much energy on this at this point.


## Alpha Disclaimer

Not all of the code here is the cleanest yet, and things should be considered highly unstable for the moment.
This was just extracted from an application and needs time to settle before I can call it beta.
But if you want to help develop this tooling, we'd greatly welcome your contributions.

We'll post to the Clojure mailing list and twitter to let you know when we have something beta ready.


## License

Copyright © 2016 Christopher Small

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.

