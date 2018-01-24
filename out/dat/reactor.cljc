(ns dat.reactor
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            ;#?(:clj [clojure.tools.logging :as log])
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            [dat.spec.protocols :as protocols]
            ;[dat.reactor.utils :as utils]
            [dat.reactor.dispatcher :as dispatcher]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            [datascript.core :as d]
            [com.stuartsierra.component :as component]))

;; This part of the application is still a rough work in progress
;; The overall idea is that we have a Re-frame style event processor, into which we pipe all of our websocket events
;; We also have a dispatch! function which is part of the public API.
;; Events from these and other potential event sources are sent into a core.async mix and processed in sequence.

;; Tihs is effectively the implementation of the reactor; The following reducer fn we extend with multimethods
(defmulti handle-event!
  (fn [_ _ [event-id _]] event-id))

;; # Reactor specific API

;; Wrap our dispatchers dispatch fns, for convenience

(defn dispatch!
  ([reactor message level]
   (dispatcher/dispatch! (:dispatcher reactor) message level))
  ([reactor message]
   (dispatcher/dispatch! (:dispatcher reactor) message)))

(defn dispatch-error!
  ([reactor message]
   (dispatcher/dispatch-error! (:dispatcher reactor) message)))

;; Next we're going to define the following function, which you can use in you own custom reactors to initiate
;; the recuction/transaction process (call in your component start implementation).

;; Be careful with this to avoid infinite loops
(defn resolve-to
  "Within a handle-event method implementation, you can call this function to resolve a single event to
  some sequence of more atomic (presumably; thought you could get recursive...) events. This is a little bit
  experimental at the moment, as there might be some gotchas with error handling flow. But for right now, you
  have the option of specifying :datview.resolver/catch?, which lets you decide whether events should continue
  getting processed if one of the events errors (if set to truthy, skips over the errored event). Note that
  presently, errors do not bubble up. The last successful state of the db will be returned. Errors will be passed
  through to the :datview/error."
  ([app db events {:as options :keys [datview.resolver/catch?]}]
   (reduce
     (fn [db' event]
       ;; Handles all the expanded events and at the very end ends up transacting the final state
       ;; DB state is atomic under resolution, so you won't get any weird partial states affecting the UI by
       ;; doing resolution expansion
       (try
         (handle-event! app db' event)
         (catch #?(:clj Exception :cljs :default) e
           ;; Be warry of unhalting recurs here:
           ;(dispatcher/dispatch-error! (:dispatcher app) [:dat.reactor.resolver/error {:dat.error/event event :datview.js/error e}])
           (log/error e "Resolver exception:")
           #?(:cljs (js/console.log (.-stack e)))
           (if catch?
             db'
             ;; Should we try merging in the error as metadata? Am I crazy like a fox?
             (reduced (with-meta db' (merge (meta db') {:datview.resolver/error e})))))))
     db
     ;; So we can do (when ...) in our blocks
     (remove nil? events)))
   ;; This should raise, but doesn't
  ([app db events]
   (resolve-to app db events {})))


;; TODO Should be able to "register" error subtypes/idents for general purpose error handling


;; FWIW; I think we need a separate notion of effects in this framework.
;; But in general there needs to be a lot of careful thought about how we synchronize state and side effects.


;; This thing should be state local to the datsync component, for the sake of running multiple systems,
;; methinks. Just don't want to have to bother writing the abstractions right now. Could use help on this TODO

(defn preserve-meta
  [handler-fn]
  (fn [app db event]
    (let [new-db (handler-fn app db event)]
      (if (meta new-db)
        new-db
        (with-meta new-db (meta db))))))

(defn register-handler
  "Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
  Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
  that actually returns the final value. Except... We have some default handlers (see implementation, for now, till
  we spec this out)."
  ([event-id handler-fn]
   (register-handler event-id [] handler-fn))
  ;; Should also look at the arity of the fn to decide whether or not to pass through app; But always passes
  ;; through purely and statically from above; No reducing...
  ([event-id middleware-fn handler-fn]
   (let [post-middleware [preserve-meta] ;; make sure we pass through original metadata if anything weird happens to it
         pre-middleware [] ;; nothing for now
         middleware-fns (vec (concat post-middleware
                                     (if (sequential? middleware-fn) middleware-fn [middleware-fn])
                                     pre-middleware))
         middleware-fn (apply comp middleware-fns)
         handler-fn (middleware-fn handler-fn)]
     (defmethod handle-event! event-id
       [app db event] (handler-fn app db event)))))



;; The current implementation of effects is only gonna support firing effects based on the db at the end of a
;; transaction (commit).

(defmulti execute-effect!
  (fn [_ _ [effect-id _]]
    effect-id))

(def concatv
  (comp vec concat))

(defn with-effects
  "Registers effects on the database value. This is the mode of communication for effect message which need to get processed."
  [effects db]
  (log/debug "Adding effects for effect-ids:" (map first effects))
  (with-meta
    db
    (update (meta db)
            ::effects
            concatv
            ;; This should hopefully let us run effects on the db values from whence they triggered
            (map (fn [effect] (with-meta effect {:db db}))
                 effects))))

(defn with-effect
  "Registers effect on the database value. This is the mode of communication for effect message which need to get processed."
  [effect db]
  (with-effects [effect] db))


;; Would be nice if registering an effect also created an event handler by the same id that just triggers that
;; effect... (This happens now, but see caveat in definition below)
;; Should also have errors in effect handlers logged and handled. TODO
;; Need to think about effect handlers in general as well. TODO
;; Should we have doc strings for register functions? That would be nice... TODO
(defn register-effect
  "Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
  Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
  we spec this out). Also, calling this function registers an _event_ handler by the same effect-id; This should
  eventually act as a default, but not override any event handler already set up with the same id, but for now avoid
  collisions between event and effect ids."
  ([effect-id effect-fn]
   (register-effect effect-id [] effect-fn))
  ;; Should also look at the arity of the fn to decide whether or not to pass through app; But always passes
  ;; through purely and statically from above; No reducing...
  ([effect-id middleware-fn effect-fn]
   (let [post-middleware [] ;; make sure we pass through original metadata if anything weird happens to it
         pre-middleware [] ;; nothing for now
         middleware-fns (vec (concat post-middleware
                                     (if (sequential? middleware-fn) middleware-fn [middleware-fn])
                                     pre-middleware))
         middleware-fn (apply comp middleware-fns)
         effect-fn (middleware-fn effect-fn)]
     (defmethod execute-effect! effect-id
       [app db effect]
       (try
         (effect-fn app db effect)
         (catch #?(:clj Exception :cljs :default) e
           (log/error "Error executing effect:" effect e))))
     ;; TODO Should try to only do this if there isn't already one set, so that this just behaves like a default...
     (defmethod handle-event! effect-id
       [app db effect]
       (with-effect effect db)))))



;; This is our handler registration system; We register handlers under event-id, and can optionally specify
;; middleware functions applied to the handler-fn.


;; Events (default tx handling)

(register-handler ::resolve-tx-report
  (fn [_ db [_ tx-report]]
    (log/debug "Handler :dat.reactor/resolve-tx-report called.")
    (:db-after tx-report)))


(register-handler ::local-tx
  (fn [app db [_ tx-forms tx-meta]]
    (log/debug "Handler :dat.reactor/local-tx called.")
    (let [tx-report (d/with db tx-forms tx-meta)]
      (with-effect
        [::execute-tx-report-handlers! tx-report]
        (resolve-to app db [[::resolve-tx-report tx-report]])))))

;; Effects

;; For compatibility with DataScript handlers...
(register-effect ::execute-tx-report-handlers!
  (fn [app db [_ tx-report]]
    ;; Hmm... would be nice to get hese from where they happen
    (log/debug "Effect handler :dat.reactor/fire-tx-report-handlers! called.")
    (doseq [[_ callback] @(:listeners (meta (:conn app)))]
      (callback tx-report))))

;; For registering effects which should dispatch after the
(register-effect ::dispatch!
  (fn [app db [_ dispatch-message]]
    ;; Hmm... would be nice to get hese from where they happen
    (log/debug "Calling dispatch after effect for dispatch id:" (first dispatch-message))
    (dispatcher/dispatch! (:dispatcher app) dispatch-message)))

;(register-effect :dat/console-log
  ;(fn [app db effect]
    ;(log/info "Logging:" effect)))

;; Defaults

(register-effect :default
  (fn [app db event]
    (log/error "No effect definition for event:" event "You should probably go add one in your events ns")
    db))

(register-handler :default
  (fn [app db event]
    (log/error "No handler definition for event:" event "You should probably go add one in your events ns")
    db))


;; ## Component

;; Now for our actual component

(defn go-react!
  "Starts a go loop that processes events and effects using the handle-event! and
  execute-effect! fns. Effects are executed in sequence after the transaction commits.
  If a handler fails, the effects will not fire (will eventually support control over
  this behavior)."
  [reactor app]
  (let [event-chan (protocols/dispatcher-event-chan (:dispatcher reactor))
        conn (:conn reactor)
        kill-chan (async/chan)]
    (go-loop []
      ;; Should probably use dispatcher api's version of event-chan here...
      (let [[event port] (async/alts! [kill-chan event-chan] :priority true)
            final-meta (atom nil)]
        ;(log/debug "Reactor recieved event with id:" (first event))
        (try
          (when-not (= port kill-chan)
            (swap!
              conn
              (fn [current-db]
                (try
                  (let [new-db (handle-event! reactor current-db event)]
                    (reset! final-meta (meta new-db))
                    ;; Here we dissoc the effects, because we need to not let them stack up
                    (with-meta new-db (dissoc (meta new-db) ::effects)))
                  ;; We might just want to have our own error channel here, and set an option in the reactor
                  (catch #?(:clj Exception :cljs :default) e
                    (log/error e "Exception in reactor swap for event: " event)
                    #?(:clj (.printStackTrace e) :cljs (js/console.log (.-stack e)))
                    ;(dispatch-error! reactor [::error {:error e :event event}])
                    current-db))))
            (when-let [effects (seq (::effects @final-meta))]
              (doseq [effect effects]
                ;; Not sure if the db will pass through properly here so that effects execute on the db values
                ;; immediately following their execution trigger
                (execute-effect! app (or (:db (meta effect)) @conn) effect))))
          (catch #?(:cljs :default :clj Exception) e
            (log/error e "Exception in reactor go loop")
            #?(:clj (.printStackTrace e) :cljs (js/console.log (.-stack e)))))
        (if (= port kill-chan)
          (log/info "go-react! process recieved kill-chan signal")
          (recur))))
    kill-chan))


(defrecord SimpleReactor [app dispatcher reactor conn kill-chan]
  component/Lifecycle
  (start [reactor]
    (log/info "Starting SimpleReactor Component")
    (try
      (let [conn (or conn (:conn app) (d/create-conn))
            app (or app {:conn conn :reactor reactor :dispatcher dispatcher})
            reactor (assoc reactor
                      :app app
                      :conn conn)
            ;; Start transaction process, and stash kill chan
            kill-chan (go-react! reactor app)
            reactor (assoc reactor
                           :kill-chan kill-chan)]
        reactor)
      (catch #?(:clj Exception :cljs :default) e
        (log/error "Error starting SimpleReactor:" e)
        #?(:clj (.printStackTrace e)
           :cljs (js/console.log (.-stack e)))
        reactor)))
  (stop [reactor]
    (when kill-chan (async/put! kill-chan :kill))
    reactor))

(defn new-simple-reactor
  "If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}"
  ([options]
   (map->SimpleReactor options))
  ([]
   (new-simple-reactor {})))


