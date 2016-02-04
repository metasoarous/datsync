# datsync

Datomic &lt;-> DataScript syncing/replication utilities

(AKA Datalog all the way down)


## TLDR

You want to have Datomic on the back end and DataScript on the server?
These are some utilities for (we hope) managing that sanely.


## The vision

This is really just a peice of the vision.
But I'll put it here until there's another place for the vision as a whole.

### Re-frame and Derived Data All The Way Down

Stop right now and go do two things:
Read the re-frame README, then watch the video the author keeps going on about (Turning the database inside
out with apache samsa).

From the re-frame README (discussing the qualification of describing re-frame as FRP-like in nature):

> But, these days, FRP seems to have become a "big tent" (a broad church?). Broad enough perhaps that re-frame
> can be in the far, top, left paddock of the tent, via a series of qualifications: re-frame has "discrete,
> dynamic, asynchronous, push FRP-ish-nature" without "glitch free" guarantees. (Surprisingly, "glitch" has
> specific meaning in FRP).

This application architecture is based around these ideas.

It picks up where they left off and says:

* If we like servers and database architectures that look like one distributed persistent log structure
  being streamed into materialized views of the data (al a Samsa)
* And we like mimicking this in a FRP-ish "Reactive-Atom Component Event Subscription" (RACES, to quote
  re-frame again) framework on the front end (al a re-frame)

Then we like systems that look like this "all the way down"


### Enter Datalog (Dat(aScript|omic))

In this paradigm of FRP that has emerged here (and elsewhere actually), there is the recurring theme of
looking at a centralized state store on the client as a database.
This way, everything in the UI is transactional, which is good.

However, when we do this we sort of wave our hands and say "think of the atom as a db!"
But an atom is sort of an ad-hoc db.
It has (limited but sufficient) transaction semantics, but doesn't care about the data inside.
If we have complex data, being able to draw relations between the data becomes hugely advantageous.
And this has to do with the structure of the data we put inside.

But DataScript is an actual database.
The structure of the (DataScript) database value we put in a DataScript `conn` object (which is really just a
gussied (read: listener-metadata-laden) up atom) has the semantics we'd want from thinking relationally about
a database of datoms.
So why mess with cursors and lenses into ad hoc databases (which is error prone and performance troubled) when
we can  ...
Re-frame gets around cursors and lenses with an event log and reactions.
We just make things more direct by making the log queryable with Datalog.
And we can still trigger things reactively based on queries with posh (link pending XXX; look it up, it's so
good), giving us the best of both worlds.

### The database of tomorrow (or whatever it's called XXX)

Tonsky's talk... find link.

### Is this the thing?

I don't know.
Maybe.

I know other smart people have thought about this problem.
I think I just happened to be able to build out the basic building blocks in such a way that we have something
to build around, in dialogue, idea and implementation.

If this is the thing, it's gonna be awesome once it's built.


## The model

The overall model is that we would like to have front end DataScript databases which are a materialized view
(al a Re-frame/Turning the DB inside out terminology) of a master Datomic database.
There are multiple approaches to accomplishing this, and the tradeoffs between them depend on the situation.
A lot of these tradeoffs are classical distributed systems PAC Theorem tradeoffs.

### Strong consistency

The simplest model, and the first (and at present only) one implemented, is one where transactions from
clients get sent directly to the server and transacted there, with datoms from those transactions being sent
to the clients.
In the simplest version of the simplest model, clients get all datoms from all transactions and have all data
in the database locally cached.
We can deviate from this model, but it helps to conceptually separate it from the main workings of Datsync.

In this model, because clients/secondaries are listening to transaction datoms, they get notifications about
the transaction messages they sent.
If a transaction fails, due to conflicts, the client is notified and (presumably) an error message is
rendered.

### Strong Eventual consistency

It's the goal of Datsync to support strong eventual consistency, enabling optimistic updates and offline work on
clients.
The general model here is that a diffing system will be implemented which allows for in DB (ideally; there are
other approaches here...) tracking of different versions of an entity.
This work also feeds into transaction commit systems, where form views can persist "WIP" changes which then show up
in any one else's forms (allowing for collaborative editing), but don't show up in main views of data which
has been assumed "committed" or "confirmed" somehow by the user;
"Oh... I didn't meant to type that..."

The main obstacle towards satisfying these ideas is that DataScript does not keep transaction history.
Datoms in DataScript are defined such that eq and hash ignore tx and added, ensuring that db memory footprint
is kept down.
While this is a reasonable default client side, it hinders our ability to reason about time the way we can
in Datomic.
This is especially unfortunate considering that these issues around distributed systems tend to come down to
notions of time, and add only log based distributed systems have nice advantages in terms of their distributed
properties.
Ideally, we'd be able to "opt-in" to a DataSCript db value that did history, and tooling around
garbage collection mechanism to deal with the memory footprint problem.


## Restricting server -> client notifications

There are situations where syncing an entire database is fine (when there are few clients and the data is
relatively small).
But in general, this is not a safe assumption for scalability.
We need some way to restrict the data which gets sent to each client.
This is important not only for performance and scalability, but also for security;
We shouldn't be sending data where it's not supposed to go.

### Security

The idea for security has already been discussed in the community.
Datomic allows you to create db filters that only contain datoms for which certain predicates are true.
Using predicates which filter out all entities for which a specific user does not have read authorization
solves the read problem.
Similarly, transactions can be tested against write authorization predicates, creating a safety net around the
central server database.
More pertinently to the discussion at hand though, is the issue of space.

### Scope

As long as the data pertinent to any given user is relatively small, you can probably get away with just doing
security filters.
However, the problem becomes more challenging when users should be expected to have access to more data than could fit
(comfortably even) in their client's memory.
When this becomes a problem, our strategy will be to compose reactive streams of the data.

What this looks like is the client will specify the scope of data they wish to have "checked out".
There might be categorical things which should just always be kept in sync for convenience, like perhaps tag or user
preference data.
There might be other data -- like collections of some sort relevant to the domain model -- which you want to
selectively view based on some more restricted scope definition.

### Query scopes (aka let the client components decide what data they need)

Ideally, this scope definition would just be composed of Dat(sScript|omic) query or pull expressions.
Some of these could be marked `:remote true`, indicating that the expression should be tracked on the server
to see if any transactions there change the results of the collection.
Maybe even for this there would have to be some gating of updates for situations where perfect real time
could be sacrificed for scalability.

On the horizon for scalability though: If you had chains of progressive filters, you could potentially build
an onyx workflow programatically which ran the scope definitions in stages, pushing changes through at the
very end out to clients.
This will take some time to implement, and will come after in process server side reaction workflow.
But think about it as on the horizon potentially.

For the nearer future, reactive queries operating on Datomic peers is a reasonable assumption for some basic
building blocks with which to begin testing this design pattern.
And it keeps us within out cozy "data streams all the way down" paradigm we love from re-frame.


## How we get around not having transaction history

I think eventually we'll find a way of coming up with something that let's us have transaction history.
Like maybe a version of a DataScript db that has different equality and hashing semantics for its datoms (see
above).
But until then, we'll just use more reactive queries (all a posh).
We can create a db which is just a filter of another, and modify their transaction functions (need
DataScript DBRef protocol for this) such that transactions passing into one get analyzed and sent to another.
This is the solution I'll be taking for commit functionality.
This should get us moving for now, and may actually give us the tools we need to solve the distributed systems
problem of strong eventual consistency as well.


## Alpha Disclaimer

Not all of the code here is the cleanest yet, and things should be considered highly unstable for the moment.
This was just extracted from an application and needs time to settle before I can even call this beta.
But if you want to help develop this tooling, we'd greatly welcome your contributations.

We'll post to the Clojure mailing list and twitter to let you know when there's somethihng that could be
considered for beta usage.



