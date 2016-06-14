(ns dat.remote.impl.sente
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [dat.sync.client :as sync]
            [dat.reactor :as reactor]
            [dat.sync.utils :as utils]
            [dat.spec.protocols :as protocols]
            [com.stuartsierra.component :as component]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]))


;; ## Implement the comms protocols using Sente


#?(:cljs
    (do
      ;; This is a hack to get the db/fn objects to not break on data load
      (defrecord DBFn [lang params code])
      ;(defn tagged-fn [:datsync.server/db-fn])
      (cljs.reader/register-tag-parser! 'db/fn pr-str)))


(defrecord SenteRemote [chsk ch-recv out-chan send-fn state open?]
  component/Lifecycle
  (start [component]
    (println "Starting SenteRemote Component")
    (let [out-chan (or out-chan (async/chan 100))
          packer (sente-transit/get-flexi-packer :edn)
          sente-fns (sente/make-channel-socket! "/chsk" {:type :auto :packer packer})
          ch-recv (:ch-recv sente-fns)]
      ;; Set Sente to pipe it's events such that they all (at the top level) fit the standard re-frame shape
      (async/pipeline 1 out-chan (map (fn [x] [::event x])) ch-recv)
      ;; Return component with state assoc'd in
      (merge component
             sente-fns
             {:out-chan out-chan
              :open? (atom false)})))
  (stop [component]
    (when ch-recv (async/close! ch-recv))
    (when out-chan (async/close! out-chan))
    (utils/log "WebSocket connection stopped")
    component)
  protocols/PRemoteSendEvent
  (send-event! [component event]
    (send-fn event))
  protocols/PRemoteEventChan
  (remote-event-chan [component]
    out-chan))

(defn new-sente-remote []
  (map->SenteRemote {}))


;; ## Install handler hooks; Note that the component in question here is not the remote, but the app

;; Event handlers should be created and installed as data:


(reactor/register-handler
  ::event
  (fn [app db [_ sente-message]]
    (println "Message keys:" (keys sente-message))))

(reactor/register-handler
  :chsk/state
  (fn [app db [_ {:as ev-msg :keys [?data]}]]
    (utils/log "chsk/state data:" (pr-str ev-msg))
    (let [open? (:open? (:remote app))
          mark-open! (fn [& args] ())]
      (if (and (:first-open? ?data) (not @open?))
        (reactor/with-effects
          [[:dat.remote/opened]
           [:dat.reactor/console-log "Channel socket state change: %s" (pr-str ?data)]]
          (reactor/resolve-to app db
            [[:dat.reactor/console-log "Channel socket successfully established! Sending bootstrap request."]
             [:dat.remote/send-event! [:dat.sync.client/bootstrap nil]
               ;; Dev hack; Sets the open? state of the remote system; Should maybe put this in DB
               (reset! open? true)]]))))))

(reactor/register-handler
  :chsk/recv
  ;(fn [app db {:as ev-msg :keys [?data]}]
  (fn [app db [_ {:as ev-msg :keys [?data]}]]
    (println "XXX Anything here?" ev-msg)
    ;; This is just to deal with how sente organizes things on it's chans; If we wanted though, we could
    ;; manually track things here
    (reactor/resolve-to app db
      [?data
        db])))


