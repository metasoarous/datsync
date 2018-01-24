(ns dat.remote.impl.sente
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [dat.sync.client :as sync]
            [dat.reactor :as reactor]
            [dat.sync.utils :as utils :refer [cat-into]]
            [dat.spec.protocols :as protocols]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            #?(:clj [taoensso.sente.server-adapters.http-kit :as sente-http])
            ))


;; ## Implement the comms protocols using Sente


#?(:cljs
    (do
      ;; This is a hack to get the db/fn objects to not break on data load
      (defrecord DBFn [lang params code])
      ;(defn tagged-fn [:datsync.server/db-fn])
      (cljs.reader/register-tag-parser! 'db/fn pr-str)))

(defn recv-ev-msg->seg
  "In exchange for this overhead we get send/recv using the same universal-namespaced-segment-maps."
  [ev-msg]
  (let [ev-id (:id ev-msg)
        ev-data (:?data ev-msg)
        ring-req (:ring-req ev-msg)
        peer-id (:uid ev-msg)]
;;     (log/info "recv-ev-msg->seg" ev-id)
    (if (= ev-id ::segment)
      ;; This is important for security implications. Putting the data into a plain map to make sure some weird object that stops overwrite can't be the base segment. Make sure we overwrite :dat.remote specific vars so a remote connection can't choose their own peer-id, session, etc.
      (cat-into
        {}
        ev-data
        {:dat.remote/ring-req ring-req
         :dat.remote/peer-id peer-id})
      ;; handles sente events themselves
      (assoc ev-msg
        :dat.reactor/event :dat.reactor/legacy ;; :dat.remote/sente
        ))))

(defn send-ev->seg
  "Make sure all vector events are converted into universal-namespaced-segment-maps"
  [ev]
  ;; FIXME: merge with datsync function of same purpose
  (if (vector? ev)
    {:dat.reactor/event :dat.reactor/legacy
     :event ev
     :id (first ev)}
    ev))

(def default-sente-options
  {:chsk-route "/chsk"
   :user-id-fn :client-id ;; !!!: replace with user authentication function. client-id is provided by sente for convenience, but we'll want something more robust.
   :wrap-recv-evs? false ;; helps with symmetry between client and server
   :packer (sente-transit/get-transit-packer)})

(defn go-sente-send!
  ([send> sock] (go-sente-send! send> sock 100))
  ([send> {:as sente-sock :keys [send-fn connected-uids]} retries]
   (go-loop
     []
     (let [ev (async/<! send>)
           {:as seg :keys [dat.remote/peer-id]} (send-ev->seg ev)]
       ;; TODO: give send shared chan-control with recv
       ;; (log/debug "send event to peer:" peer-id (:dat.reactor/event seg) (:id seg))
       (if peer-id
         (send-fn peer-id [::segment (dissoc seg :dat.remote/peer-id)])
         (if connected-uids
           (doseq [uid (:any @connected-uids)]
             (send-fn uid [::segment seg]))
           (send-fn [::segment seg])))
       (recur)))))

(defrecord SenteRemote [sente-options send> recv> sente-sock stop-remote server?]
  component/Lifecycle
  (start [remote]
    (log/info "Starting SenteRemote Component")
    (let [send> (or send> (async/chan 100))
          recv> (or recv> (async/chan 100))
          sente-options (merge default-sente-options sente-options)
          sock-options (merge default-sente-options (dissoc sente-options :chsk-route))
          {:as sente-sock :keys [ch-recv send-fn connected-uids ajax-post-fn ajax-get-or-ws-handshake-fn]}
          (or sente-sock
              (if server?
                #?(:clj (sente/make-channel-socket! (sente-http/get-sch-adapter) sock-options)
                   :cljs (throw "Sente cannot run in server mode in cljs"))
                (sente/make-channel-socket! (:chsk-route sente-options) sock-options)))
          stop-remote (or stop-remote
                          (do
                            (go-sente-send! send> sente-sock)
                            (sente/start-chsk-router!
                              ch-recv
                              #(let [seg (recv-ev-msg->seg %)]
;;                                  (log/info "recv event from peer:" (:dat.reactor/event seg) (:id seg))
                                 (async/put! recv> seg)))))]
      (assoc remote
        :send> send>
        :recv> recv>
        :stop-remote stop-remote
        :sente-sock sente-sock
        :sente-options sente-options)))
  (stop [remote]
    (log/info "Stopping SenteRemote component")
    (try
      ;(when ch-recv (async/close! ch-recv))
      (log/debug "SenteRemote stopped successfully")
      (stop-remote)
      (assoc remote
        :send> nil
        :recv> nil
        :stop-remote nil
        :sente-options nil
        :sente-sock nil)
      (catch #?(:clj Exception :cljs :default) e
        (log/error "Error stopping SenteRemote:" e)
        remote)))
  protocols/Wire
  (recv-chan [remote]
    recv>)
  (send-chan [remote]
    send>)
  protocols/RingSock
  (sock-route [remote]
    (:chsk-route sente-options))
  (sock-get [remote]
    (:ajax-get-or-ws-handshake-fn sente-sock))
  (sock-post [remote]
    (:ajax-post-fn sente-sock))
  protocols/PRemoteSendEvent
  (send-event! [remote event]
    (async/put! send> event))
  (send-event! [remote peer-id event]
    ;; confirms segment before assoc
    (async/put! send> (assoc (send-ev->seg event) :dat.remote/peer-id peer-id)))
  protocols/PRemoteEventChan
  (remote-event-chan [remote]
    recv>))


(defn new-sente-remote
  "Options include `:sente-options`, which is passed as the second argument to `sente/make-channel-socket!`.
  Additionally, the `:chsk-route` option of the `:sente-options` map is passed as the first argument to
  `sente/make-channel-socket!`, assuming you don't want to use the default (`\"chsk\"`). You can see all
  datsync defaults for these options in `default-sente-options`.

  Additionally, note that you can specify via the options map your own `:event-chan`, which is the channel on which
  output messages get put (the result of calling `dat.spec.protocols/remote-event-chan` on this system component)."
  ([]
   (new-sente-remote {}))
  ([options]
   (map->SenteRemote options)))


;; ## Install handler hooks; Note that the component in question here is not the remote, but the app

;; Event handlers should be created and installed as data:


(reactor/register-handler
  ::event
  (fn [app db [_ sente-message]]
    (log/debug "Sente message recieved:" (first sente-message))
    (reactor/resolve-to app db [sente-message])))

(reactor/register-handler
  :chsk/state
  ;<<<<<<< buildable
  ;(fn [app db [_ [last-state curr-state]]]
  ;  (try
  ;    (log/info "in chsk/state handler for msg:" [last-state curr-state])
  ;    (if (or (:first-open? curr-state)
  ;            (and (:ever-opened? curr-state)
  ;                 (not (:ever-opened? last-state))))
  ;      (do
  ;        (log/info "Requesting bootstrap...")
  ;        (reactor/with-effect [:dat.remote/send-event! [:dat.sync.client/bootstrap nil]]
  ;          db))
  ;      (do
  ;        (log/info "Not the first open; no bootstrap needed")
  ;        db))
  (fn [app db [_ message]]
    (try
      ;; This or conditional takes care of different versions of sente
      (if (or (-> message second :first-open?) (:first-open? message))
        (do
          (log/info "First channel socket open; Sending bootstrap message")
          ;; Note: This needs to be a more explicit part of the dat.remote protocol/spec
          (reactor/resolve-to app db
            [[:dat.remote/connected true]]))
        db)
      (catch #?(:clj Exception :cljs :default) e
        (log/error "Exception handling :chsk/state:" e)))))

(reactor/register-handler
  :chsk/ws-ping
  (fn [app db _]
    db))

(reactor/register-handler
  :chsk/handshake
  (fn [app db [_ {:as ev-msg :keys [?data]}]]
;;     (log/warn "Calling :chsk/handshake! You should probably write something here! (reactor/register-handler :chsk/handshake (fn [app db [_ hs-msg]] ...))")
    db))

(reactor/register-handler
  :chsk/recv
  ;(fn [app db {:as ev-msg :keys [?data]}]
  (fn [app db [_ event]]
    ;; This is just to deal with how sente organizes things on it's chans; If we wanted though, we could
    ;; manually track things here
    (log/info ":chsk/recv for event-id:" (first event))
    (reactor/resolve-to app db
      [event])))

(defn ring-handlers [ws-connection]
  (:ring-handlers ws-connection))


