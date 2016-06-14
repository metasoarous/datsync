(ns dat.remote
  (:require [dat.reactor :as reactor]
            #?(:clj [clojure.tools.logging :as log])
            [dat.spec.protocols :as protocols]))

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

;; Wish I had docs for this; Create event/effect hooks for sending events.
(reactor/register-effect
  ::send-event!
  (fn [app db [event-id server-event]]
    (send-event! (:remote app) server-event)))

(reactor/register-effect
  ::send-event!
  (fn [app db [event-id server-event]]
    (send-event! (:remote app) server-event)))

