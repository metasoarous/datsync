(ns dat.reactor.dispatcher
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            ;[dat.reactor.utils :as utils]
            [com.stuartsierra.component :as component]
            [dat.spec.protocols :as protocols]))


;; # The Dispatcher

;; This should probably be it's own project as well
;; The Dispatcher.
;; This is the muscle of the bunch.
;; He'll knock ya lights out and leave ya swimmin with the fishes.
;; So don't mess around with him, ya hear?

;; The dispatcher is what gives us control over how events are processed.
;; For most applications, a pretty straightforward mechanism should work.
;; Events should get handled in the order they are fired in.
;; Simple.

;; But suppose you wanted more control over the situation?
;; Perhaps you want for error and/or warning events to be handled with higher priority than other queues of
;; events?
;; Perhaps you are sampling from an input device, and don't want for it's signal to swamp out other important
;; functionality?
;; Perhaps you want to be able to plug in your own crazy rube goldberg core.async pipeline for some malicious
;; scheme against humanity.
;; Perhaps you're mouthing these words as you read this...

;; Dispatchers are based on protocols, so as long as whatever you specify for a dispatcher satisties these
;; protocols (you should look at the DatProtocol github repo...), and you don't code it like a moron, it
;; should work fine.

;; However, we provide for you a few prepackaged dispatchers which should work for the 99%.


(defrecord StrictlyOrderedDispatcher [dispatch-chan]
  ;; Should make pluggable config options for the chan creation
  component/Lifecycle
  (start [dispatcher]
    (log/info "Starting StrictlyOrderedDispatcher")
    (assoc dispatcher
      :dispatch-chan (or dispatch-chan (async/chan 100))))
  (stop [dispatcher]
    (log/info "Stopping StrictlyOrderedDispatcher")
    (when dispatch-chan (async/close! dispatch-chan))
    (assoc dispatcher :dispatch-chan nil))
  protocols/Wire
  (recv-chan [dispatcher]
    dispatch-chan)
  (send-chan [dispatcher]
    dispatch-chan)
  protocols/PDispatcher
  (dispatch! [dispatcher event]
    (async/put! dispatch-chan event))
  (dispatch! [dispatcher event level]
    (async/put! dispatch-chan event))
  ;; Here, the event chan is just the dispatch chan...
  (dispatcher-event-chan [dispatcher]
    ;; Don't know if this will compile properly
    dispatch-chan))

(defn new-strictly-ordered-dispatcher
  "Creates a new strictly ordered dispatcher. This is fine for most cases, and ensures that all events are
  handled in the order they were dispatched (or should...). Can specify `{:dispatch-chan your-chan}` to customize
  the flow."
  ([options]
   (map->StrictlyOrderedDispatcher options))
  ([]
   (new-strictly-ordered-dispatcher {})))


;; Any events with level :error will get processed by the reactor before _any_ other dispatched events.
(defrecord ErrorPriorityDispatcher [default> error> ppub send> recv>]
  ;; Should make pluggable config options for the chan creation
  component/Lifecycle
  (start [dispatcher]
         (log/info "Starting ErrorPriorityDispatcher")
         (let [send> (or send> (async/chan 100))
               ppub (or ppub
                        (async/pub
                          send>
                          :dat.reactor/priority
                          ;; ???: how do buffers work here
                          {:default 99
                           :error 1}
                          ))
               recv> (or recv> (async/chan))
               default> (or default>
                            (let [chan> (async/chan)]
                              (async/sub ppub :default chan>)
                              chan>))
               error> (or error>
                          (let [chan> (async/chan)]
                            (async/sub ppub :error chan>)
                            chan>))]
      (go-loop []
        ;; ???: Hmm... this actually doesn't have the semantics we want, since 1 default chan event could get through before the event chan is ready to take yet
        (let [[event chan] (async/alts! [error> default>] :priority true)]
          (async/>! recv> event)))
      (assoc dispatcher
        :send> send>
        :recv> recv>
        :ppub ppub
        :default> default>
        :error> error>)))
  (stop [dispatcher]
    (log/info "Stopping ErrorPriorityDispatcher")
    (assoc dispatcher
      :send> nil
      :recv> nil
      :ppub nil
      :default> nil
      :error> nil))
  protocols/Wire
  (recv-chan [dispatcher]
    recv>)
  (send-chan [dispatcher]
    send>)
  protocols/PDispatcher
  (dispatch! [dispatcher event]
    (protocols/dispatch! dispatcher event :default))
  (dispatch!
    ;; !!!: Should really be [dispatcher level event] for consistency. This is how log* works. This is how remotes work.
    [dispatcher event level]
    (async/put! send> (assoc event :dat.reactor/priority level)))
  ;; Here, the event chan is just the dispatch chan...
  (dispatcher-event-chan [dispatcher]
    ;; Don't know if this will compile properly TODO
    recv>))

(defn new-error-priority-dispatcher
  "Creates a new ErroPriorityDispatcher. Can customize :default> and :error> through options.
  Idea is that Reactor will get error events before other queued events, but the mechanism is a little flawed.
  Currently, it's still possible for a non error event to get through before the reactor is ready to consume from the event-chan.
  May need to adjust the protocols."
  ([options]
   (map->ErrorPriorityDispatcher options))
  ([]
   (new-error-priority-dispatcher {})))


;; A signal sampler might have functions that let you plug in your own signal channels that you mix/merge/alt
;; whatever, to gate vs critical system control events.


;; ## Public API around dispatchers

(defn dispatch!
  "Dispatches event on the dispatcher component at the given level (:default if unspecified)."
  ([dispatcher event level]
   (protocols/dispatch! dispatcher event level))
  ([dispatcher event]
   (protocols/dispatch! dispatcher event :default)))

(defn dispatch-error!
  [datview event]
  (dispatch! datview event :error))


(defn event-chan [dispatcher]
  "Get the event channel for a dispatcher"
  (protocols/dispatcher-event-chan dispatcher))



