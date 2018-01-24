(ns dat.spec.protocols)

;; # System architecture

;; Datsync and datview (the pieces to Catalysis) are built around System Components (as in Stuart Sierra) which implment certain
;; protocols.
;; The goal is that these protocols be an appropriate target for your own implementations, making the
;; system/architecture as a whole more modular.
;; Hopefully, this will all then play nicely with things like Arachne as well :-)

;; Here's how the abstract system component dependencies break down:

;;                _Datsync _
;;               /    |     \
;;              /     |       \
;;             /   Datreactor   \
;;            /   /   |    \     \
;;            /  /    |     \     \
;;           /  /     |      \     \
;;          /  /  DatviewApp  \    \
;;         /  /   / /  \   \   \    \
;;         / /  /'  |  |    '\  \    \
;;        / / /'    |  |      '\ \   \
;;        ///'      |  History  '\\  \                 ;; history is future
;;        /'        \  |          '\ \
;;     Remote       Conn     Dispatcher

;; Datview has to expose the comms and the dispatcher to some extent.

;; DatSync is basically just a DatReactor implementation

;; Here's what these things are:

;; Datview: Explained in detail elsewhere (eventually).
;; For now, suffice it to say that Datview is a stitching together of all these pieces in order to render a UI.
;; Sort of like scaffolding where there isn't any code generation.
;; All functions.
;; But way more powerful than your average "template helpers", because the assumption of the DataScript
;; relational model gives us a lot of power in expressing these things.
;; There is an assumption here of some metadata around the base schema identifying how things relate (types).S

;; ## Datview

;; In any case, Datview exposes itself as a System Component we pass around our application code as `app` or
;; `datview`.
;; It behaves like a Reagent compatible version of a datascript conn (_mostly_ just an atom around a
;; DataScript DB state).
;; It also should be compatible with posh.
;; At least I think all this will be the case :-)
;; Haven't written that part yet; At worst case though, the `app` component will contain a `:conn` attribute
;; which is the thing you operate on with posh & datview.
;; Datview is the only peice to this picture that is not part of Datsync.

;; ## Reactor

;; The Reactor is where everything comes together.
;; It's like this mix between Skeletor and a Nuclear Reactor.
;; It would be so badass.
;; I've got these drawings...

;; Anyway, there is this common pattern to Re-frame, Elm and Redux, where all app state changes and (at least
;; with encouragement) side-effecting operations happen within the context of an event dispatching system.
;; This is a pretty good thing in my opinion, becase it means that we can think about the system as a whole
;; transactionally.

;; This is the core concern of Datsync.
;; And it's possible, nay probable, that it should be the concern of something else.
;; But for now, it's convenient to have it in the same place, since the relationship between these two things
;; is very important.
;; Once we get that right, if we design carefully, we should be able to abstract easily.

;; The second concern of datsync is specifically with relation to it


;; History


;; ## The Remote

;; The Remote is really just a Server.
;; Maybe it should be called Server.
;; But it's more than a Server.
;; It could also be signals you pipe in from your phone or an instrument.
;; Could maybe be a stylus signal.
;; Could be anything.
;; Anything which is a remote (as in, not from this program) stream of data or reciever of data.

;; Data is recieved as events
;; The structure of these events is entirely left up to you, but much of the default architecture is built
;; around all events having shape `[event-id event-data]`.
;; It is recommended you stick with this

;; ### Sending events

(defprotocol PRemoteSendEvent
  "When no peer-id is provided, broadcast to all peers/clients/users or send to server if running as client. Otherwise send to a specific peer/client/user"
  (send-event! [this event] [this peer-id event]))

;; ### Recieving events

;; Any given implementation of a Remote should satisfy only one of the following protocols (or none at all if
;; it's only data in):

(defprotocol PRemoteEventChan
  "Implement this on your Remote component if you want to handle events using a core.async channel (preferred for pipelining).
   An implementation should return a single event chan on which events can be recieved."
  (remote-event-chan [this]))

(defprotocol PRemoteEventHandler
  "Implement this on your Remote component if you want to handle events directly via the implementation of the handle-event! method."
  (handle-remote-event! [this event]))


;; ## Dispatcher

;; We need a way for events to get passed from various input streams into the transactor.
;; I think it's important that early on we have an abstraction for various streams we might want to handle.
;; It's totally possible that some of our streams have relatively high throughput, but that we have to
;; selectively decide when we need to sample data, and give preference to more important system tasks.
;; Imagine a drawing app for instance.
;; You might want to pipe the event handler for the mouse position through a channel with a sliding buffer, so
;; that you only ever handle as much as you can handle.
;; Then putting this with lower precedence in an alt will let you ensure that system critical events never
;; get swaped by signal data that may or may not be needed right away.

;; So... you can implement whatever cockamimie rube goldberg core.async gerbil tunnel your heart desires.
;; As long as you wrap it in a System protocol that implements the following.

(defprotocol PDispatcher
  "This is where"
  (dispatch! [this event] [this event level]
    "Recieves data from calls to dispatch and pipes through to a channel, from which events can be taken.
    The semantics of how different levels and events are handled differently as far as priority is entire up to you.")
  (dispatcher-event-chan [this]))

(defprotocol Wire
  "Abstract representation of a wire."
  (recv-chan [this])
  (send-chan [this]))

(defprotocol EventState
  "Wires have state. Make it explicit."
  (snapshot [this] [this at-time])
  (events [this from-time] [this from-time to-time]))

(defprotocol Dom
  "Alter the dom or more likely the vdom."
  (mount! [this renderable]))

(defprotocol RingSock
  "This should probably become more generic and more like bidi."
  (sock-route [this])
  (sock-get [this])
  (sock-post [this]))

;; This will be a requirement for both Datview and Datsync.
;; And both may abstract over the dependency behavior using this protocol as well.

;; ## Reactor

;; Now protocols for our Reactor, since we're going to want different configurations there.
;; Just a tag for now :-(

(defprotocol PReactor)


