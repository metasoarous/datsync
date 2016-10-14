
![Datsync](datsync.jpg)

Datomic &lt;-> DataScript syncing/replication utilities

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/metasoarous/datsync?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



## Introduction

This library offers tools for building DataScript databases as materialized views (very much in the re-frame/samsa sense) of some master/central Datomic database.
Eventually we hope to also handle optimistic updates, offline availability, scoped syncing, and security filters as well.

This library is also part of the [Datsys architecture](https://github.com/metasoarous/datspec).
As such, it offers a set of ready-made system components (a la Stuart Sierra) for plugging into a componentized system (client only right now; server coming soon).
For a look at how Datsync hooks up in this fashion see the Datsys README.

For more general information about Datsys and Datsync:

* Clojure/West 2016 talk: [Datalog all the way down](https://www.youtube.com/watch?v=aI0zVzzoK_E)
* If you'd like to chat, see the [Datsys chatroom](https://gitter.im/metasoarous/datsys) and [Datsync chatroom](https://gitter.im/metasoarous/datsync)
* For more in depth documentation (including the [big picture system vision](http://github.com/metasoarous/datsync/wiki/The-Vision) and this library's [current limitations and future directions](http://github.com/metasoarous/datsync/wiki/Current-limitations-and-future-directions)), see the [datsync GitHub wiki](https://github.com/metasoarous/datsync/wiki).
* For an API walkthrough, read on.
* The source is also heavily documented (though there's need for some cleanup).


## Quickstart

The easiest way to get Datsync running is to clone [Datsys](https://github.com/metasoarous/datsys).
It's a pretty minimal template, so it shouldn't be difficult to adapt it to your needs.

But for the sake of thoroughness, we'll cover here how you'd set things up.
First, add the following to your `project.clj`:

```
[datsync "0.0.1-alpha1-SNAPSHOT"]
```


### On the client (with system component)

Datsync comes with the following system components:

* `dat.remote.impl.sente/SenteRemote`: This component implements the `dat.spec.protocols/PRemoteSendEvent` and `dat.spec.protocols/PRemoteEventChan` protocols, making 

This component assumes a `datreactor` component for dispatching/handling messages to/from the server and a `datremote` for sending and recieving these messages.
You are welcome to ignore this functionality and directly hook up the translation functions yourself.
But we'll start with this setup, to see how automated things are.

```clj
(ns your-app
  (:require [dat.sync.client :as dat.sync]
            [dat.remote]
            [dat.remote.impl.sente :as sente]
            [datascript.core :as d]
            [dat.reactor.dispatcher :as dispatcher]))


(defn new-system []
  (-> (component/system-map
        ;; The default remote comms component
        :remote     (sente/new-sente-remote)
        ;; The dispatcher accepts messages from wherever (pluggable event streams?) and presents them to the reactor
        :dispatcher (dispatcher/new-strictly-ordered-dispatcher)
        ;; This is the system component around which you program your application. It needs to have a conn,
        ;; and should also have get the remote and the dispatcher
        :app        (component/using
                      (dat.view/new-datview)
                      [:remote :dispatcher])
        ;; Again, the reactor is what orchestrates the event processing and handles side effects
        :reactor    (component/using
                      (reactor/new-simple-reactor)
                      [:remote :dispatcher :app])
        ;; The Datsync component pipes data from the remote in to the reactor for processing, and registers
        ;; default handlers on the reactor for this data
        :datsync    (component/using
                      (dat.sync/new-datsync)
                      [:remote :dispatcher]))))
```

Because all of these pieces are designed and build around protocols and specs, the semantics of how you'd
swap-out/customize system components are relatively straight forward.


#### What's going on here?

Behind the scenes, Datsync hooks things up so that messages coming from the server with event id `:dat.sync.client/recv-remote-tx` get transacted into our local database subject to the following conditions:

* Nested maps are expanded, so inner maps aren't just treated as single values in the DataScript db (thinking of
  revising this; should maybe just require that nested maps satisfy `:db/isComponent true`).
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
    * We can also apply schema changes to an existing database using the `dat.sync.client/update-schema!` function, or by
      dispatching a `:dat.sync.client/apply-schema-changes` event.

Additionally, there is a `:dat.sync.client/send-remote-tx` event handler that takes transactions from the client and submits them to the server.
This function:

* Translates eids

### On the client (without system component)

If you're not into component, you can also set things manually using the helper functions defined in Datsync.

First create your database connection, and load it with some datsync specific schema:

```clj
(def conn (d/create-conn dat.sync/base-schema))
```

While there are no restrictions presently as to what methods you may use for sending messages between client
and server, we'll show you roughly how you'd set things up using [Sente](https://github.com/ptaoussanis/sente).

#### Getting data into the client db

You'll need the client to receive data from the server as transactions.

Assuming we have a `push-msg-handler` multimethod set up which dispatches on the message id, we can intercept
messages with an id of (e.g.) `:dat.sync/tx-data`, and handle them as follows:

```clj
(defmethod push-msg-handler :dat.sync/tx-data
  [[_ tx-data]]
  (dat.sync/apply-remote-tx! conn tx-data))
```

The `dat.sync/apply-remote-tx!` function takes your DataScript `conn` and a collection of transaction forms
(should be compatible with any Datomic transaction form), and applies that to the `conn`.

It's worth noting a few things about this function:

#### Sending transactions to the server

When we send transactions to the server, we need to translate their entity ids to the corresponding `:dat.sync.remote.db/id` values.
The `dat.sync/datomic-tx` utility function does this for us.
In sente you could write a little function that wraps this as follows.

```clj
(defn send-tx! [tx]
  (ws/chsk-send! [:dat.sync.client/tx (datsync/datomic-tx conn tx)]))
```

### On the server

Here things look pretty similar; we need to send and receive transactions.
However, as far as implementation goes, things are much simpler, since a lot of the translational work between DataScript and Datomic is set up to happen on the client side.

Eventually we'll add server-side system component protocols, specs and default implementations, so that this is all much more modular (as on the client).
But for now we'll focus on how you'd set things up with Sente.
(Though, we'd recommend just cloning [Datsys](https://github.com/metasoarous/datsys) and tweaking from there, even if you don't want the rest of Datsys)

To start, let's require the `dat.sync.server` namespace.

```clj
(require '[dat.sync.server :as dat.sync])
```

#### Receiving transactions

For this we'll have to set up a listener for the `:dat.sync.client/tx` messages that we sent from the client.
If you're using regular http requests, you can just call this in your handler functions as you might normally handle a form submission and send a response indicating whether the transaction went through.
In sente, you might do something like:


```clj
(defmethod event-msg-handler :dat.sync.client/tx
  [{:as app :keys [datomic ws-connection]} {:as ev-msg :keys [id ?data]}]
  (let [tx-report @(dat.sync/apply-remote-tx! datomic ?data)]
    (println "Do something with:" tx-report)))
```

#### Sending transactions to clients

Every time we get a transaction, we want to send the results of that transaction to any client that needs to be notified.
Eventually we can get fancy with installing subscription middleware, so for each client we have a specification of what they have "checked out", but this is just a starting point.

Assuming we just send all changes to all clients using sente, you might write a function like this as a handler:

```clj
(defn handle-transaction-report!
  [tx-deltas]
  ;; This handler is where you would eventually set up subscriptions
  (try
    (ws/broadcast! ws-connection [:dat.sync/tx-data tx-deltas])
    (catch Exception e
      (log/error "Failed to send transaction report to clients!")
      (.printStackTrace e))))
```

This handler function should take a collection `tx-deltas` of `:db/add` and `:db/retract` tx forms which will automatically get computed from the datoms created in the transaction.
This handler function is also where you could implement your own scope restriction functionality and read authorization security protocols if needed.

We apply this handler function using the `dat.sync/start-transaction-listener!` function:

```clj
(dat.sync/start-transaction-listener! (d/tx-report-queue conn) handle-transaction-report!)
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

