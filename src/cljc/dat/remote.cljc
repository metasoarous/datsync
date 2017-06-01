(ns dat.remote
  (:require [dat.reactor :as reactor]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            [dat.spec.protocols :as protocols]))


;; Event handlers should actually just be transaction functions.
;; Most of the time.
;; But there are some operations for which this isn't quite right.
;; Maybe we just treat those separately and pass the rest through?
;; That might be the nicest way to handle things.
;; Since then, effects are just data that you accrue along with the unfolding transaction.

;; Just registering some handlers; Make sure to load this code!

(defn send-event!
  "Public API function wrapping dat.spec.protocols/send-event! of the PRemoteSendEvent protocol"
  [remote event]
  (protocols/send-event! remote event))

(defn event-chan
  "Public API function for returning the event chan of the remote; May remove ability to specify handler
  function via PRemoteSendEvent."
  [remote]
  (protocols/remote-event-chan remote))

(reactor/register-effect
  ::send-event!
  (fn [app db [event-id server-event]]
    (log/info "send-event! called")
    (send-event! (:remote app) server-event)))

