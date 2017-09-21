(ns dat.sync.core
  "# Datsync client API"
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require [clojure.core.async :as async
             :refer [>! <! #?@(:clj [go go-loop])]]
            [dat.remote :as remote]
            [datascript.db]
            [dat.sync.db :as d]
            [com.rpl.specter :as specter]
            [dat.reactor :as reactor]
            [dat.reactor.onyx :as oreactor]
            [dat.reactor.dispatcher :as dispatcher]
            [datascript.core :as ds]
            [dat.spec.protocols :as protocols]
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component]
            [dat.spec.utils :refer [deep-merge cat-into deref-or-value]]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))

;; TODO: get figwheel loading onyx compiled fns
;; TODO: dirty peer
;; TODO: ios compatability (onyx uses js/eval to resolve tasks)
;; TODO: datview onyx integration
;; TODO: debug slf4j logging

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UNIFIED - treating server and client as peers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn identity-gdatom?
  "When an entity is setting it's own identity then we have an ident and we need a local eid to be assigned"
  [[[ident-attr _] attr _ _ _]]
  (= ident-attr attr))

(defn- ident-query
  "The way to get idents is currently different for datomic and datascript"
  [db]
  ;; TODO: datascript does not support eids as attrs and datomic does not support keywords as attrs from q
  ;; TODO: datascript does not support keywords as eid, when in q
  (case (d/db-kind db)
    :datascript

    '[:find [?ident-attr ?ident-value]
      :in $ ?e
      :where
      [?e ?ident-attr ?ident-value]
      [?ident :db/ident ?ident-attr]
      [?ident :db/unique ?unique-identity]
      [?unique-identity :db/ident :db.unique/identity]]

    (:datomic :wrapped-datomic)
    '[:find [?ident-attr ?ident-value]
      :in $ ?e
      :where
      [?e ?ident ?ident-value]
      [?ident :db/ident ?ident-attr]
      [?ident :db/unique :db.unique/identity]]))

(defn aquire-ident
  "Supports for all idents"
  [db eid]
  (d/q (ident-query db) db eid))

(defn globalize-ident
  "Only :dat.sync/uuid and :db/ident are valid idents"
  [db eid]
  (let [it (d/entity db eid)
        dbident (:db/ident it)]
    (cond
      dbident [:db/ident dbident]
      :else [:dat.sync/uuid (:dat.sync/uuid it)])))

(defn datom->tx
  [[e a v tx add?]]
  ;; TODO: ignoring tx for now. waiting until vector clock implemented.
  [(if add? :db/add :db/retract) e a v])

(defn ident-datom->eid-assignment-tx
  [[[ident-attr ident-value] a v tx add?]]
  ;; TODO: handle partitions
  {ident-attr ident-value})

(defn ref? [db attr-ident]
      (d/q
        '[:find ?attr .
          :in $ ?ident
          :where
          [?attr :db/ident ?ident]
          [?attr :db/valueType ?ref-enum]
          [?ref-enum :db/ident :db.type/ref]]
        db attr-ident))

(defn many? [db attr-ident]
  (d/q
    '[:find ?attr .
      :in $ ?ident
      :where
       [?attr :db/ident ?ident]
       [?attr :db/cardinality ?many-enum]
       [?many-enum :db/ident :db.cardinality/many]]
    db attr-ident))

(defn- mal-datom? [[[_ ident-value] _ _ _ _ :as datom]]
  ;; FIXME: why are there nils in some of the datoms? (maybe just one at this point)
  ;;     - the one comes from uuid-all-the-things* not assigning a uuid to the tx itself in import.clj
  ;;     - more come when there are race conditions
  ;;     - doesn't occur with datscript backend because no tx-instants and using middleware version
  (nil? ident-value))

(defn datom-identer
  "Converts all local eids to idents using the ident fn provided"
  [db ident]
  (fn [[e a v tx add?]]
    [(ident db e)
     a
     (if-not (ref? db a)
       v
       (if (and (many? db a) (coll? v))
         (map (partial ident db) v)
         (ident db v)))
     tx
     add?]))

(defn datom-attr-resolver
  "Globalizes attrs as keywords"
  [db]
  (fn [[e a v tx add?]]
    [e
     (if (keyword? a)
       a
       (:db/ident (d/entity db a)))
     v
     tx
     add?]))

(defn handle-mal-datoms []
  ;; TODO: capture local-eids at the identing phase for this error to be more helpful
  ;; TODO: give the option to ignore, warn, remove, or error
  ;; ???: use conditions/restarts or continuations? is that even an option in clojure? hara has something for this in clojure, but not cljs I think. Is there a transducer way of doing this kind of monad like?
  (map
    (fn [datom]
      (when (mal-datom? datom)
        (let [exception (ex-info "Datom not assigned ident" {::datom datom})]
          ;; (throw exception)
          (log/warn "nil-id-datoms:" exception)))
      datom)))

(defn datom><gdatom
  "Transducer for local-datom => global-datom"
  [db]
  ;; TODO: tx needs to be globalized and localized in some way. datascript does not resolve idents in the tx position. Even if it did that still may not be the right way to store them. We need some kind of vector clock.
  (comp
    (remove (partial d/fn-datom? db))
    (map (datom-attr-resolver db))
    (map (datom-identer db aquire-ident))
    (handle-mal-datoms)
    (remove mal-datom?)))

(defn gdatom><datom
  "Transducer for global-datom => local-datom"
  [db]
  ;; TODO: tx vector clock
  identity)

(defn datom><tx-idents []
  (comp
    (filter identity-gdatom?)
    (map ident-datom->eid-assignment-tx)))

;;;
;;; Tasks
;;;
(defn ^:export snap-transact
  "txs -> tx-report using a snapshot"
  [conn {:keys [txs tx-meta]}]
  (d/with (d/db conn) txs tx-meta))

(defn ^:export tx-report->gdatoms
  [{:as seg :keys [tx-data db-after]}]
  (let [gdatoms (into [] (datom><gdatom db-after) tx-data)]
;;   (log/info "tx-report->gdatoms" gdatoms)
  {:dat.reactor/event :dat.sync/gdatoms
   :datoms gdatoms}))

(defn gdatoms->local-txs [gdatoms]
  (into
    []
    (comp
;;       (remove mal-datom?)
;;       (gdatom><datom db)
      (map #(if (identity-gdatom? %)
              (ident-datom->eid-assignment-tx %)
              (datom->tx %))))
    gdatoms))

(defn ^:export gdatoms->local-ds-txs [{:as seg :keys [datoms datomses]}]
  (for [datoms (or datomses [datoms])]
    (let [local-txs (gdatoms->local-txs datoms)]
;;       (log/debug "txacting datoms" datoms)
      (log/debug "txacting" local-txs)
      (into seg
            {:dat.reactor/event :dat.sync/local-txs
             :txs (gdatoms->local-txs datoms)}))))

(defn ^:export split-id-datoms [{:as seg :keys [datoms]}]
  (let [local-id-assignments (filter identity-gdatom? datoms)
        other-datoms (remove identity-gdatom? datoms)]
    ;; ***FIXME: this is a hack. I thought we would only need to do this for the snapshot, but it appears to be an all the time problem. Is it even safe to split the transaction like this? Can we build a datomic fn that removes the need for this?
    (assoc
      seg
      :datoms nil
      :datomses [local-id-assignments other-datoms])))

(defn datom-has-ident? [db [e _ _ _ _]]
  (-> (d/entity db e)
      :db/ident
      boolean))

(defn core-schema-datom? [[_ attr _ _ _]]
  (#{:db/cardinality :db/unique :db/valueType} attr))

(defn safe-gdatom-grouping [db datoms]
  ;; ???: should we be doing it this way or conforming at every peer not just the server
  (let [{:keys [id-assignments core-schema extended-schema normies]}
        (group-by
          #(cond
             (identity-gdatom? %) :id-assignments
             (core-schema-datom? %) :core-schema
             (datom-has-ident? db %) :extended-schema
             :else :normies)
          datoms)]
    [id-assignments core-schema extended-schema normies]))

(defn snapshot [{:as knowbase :keys [conn]}
                {:as event-msg :keys [dat.remote/peer-id]}]
  (log/info "Sending bootstrap message" peer-id)
  (let [db @conn
        gdatoms (into [] (datom><gdatom db) (d/datoms db :eavt))
        seg {:dat.remote/peer-id peer-id
             :dat.reactor/event :dat.sync/gdatoms
             :dat.sync/snapshot true
             :datomses (safe-gdatom-grouping db gdatoms)}]
    ;; ???: batching for large data sets?
;;     (log/debug "snap!!!" seg)
    seg))

;;
;; ## Dataflow predicates
;;
(defn ^:export transaction?
  [event old-seg seg all-new]
  ;; TODO: better matching
  (contains? seg :txs))

(defn ^:export localize?
  [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.sync/gdatoms))

(defn ^:export legacy? [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.reactor/legacy))

(defn ^:export legacy-tx? [event old-seg seg all-new]
  (and
    (legacy? event old-seg seg all-new)
    (= (first (:event seg)) :dat.sync.client/send-remote-tx)))

(defmulti legacy->seg2 first)

(defmethod legacy->seg2 :dat.sync.client/send-remote-tx
  [[_ txs]]
  {:dat.reactor/event :dat.sync/tx
   :txs txs})

(defmethod legacy->seg2 :dat.remote/send-event!
  [[_ event]]

  )

(defn ^:export legacy-translator [{:keys [event]}]
  ;; TODO: replace legacy->seg at the source
  (legacy->seg2 event))

(defn ^:export snapshot? [event old-seg seg all-new]
  (boolean (:dat.sync/snapshot seg)))

(defn ^:export request-snapshot? [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.sync/request-snapshot))

(defn ^:export source-from-transactor? [event old-seg seg all-new]
  (= (:dat.reactor/input seg) :dat.sync/tx-report))

(defn ^:export source-from-remote? [event old-seg seg all-new]
  (= (:dat.reactor/input seg) :dat.sync/remote))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; SERVER - from server.clj
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
#?(:clj
(defn go-tx-report! [datomic-report-queue tx-chan]
  (future
    (loop []
      (let [tx-report (.take datomic-report-queue)]
        (async/put! tx-chan tx-report)
        (recur))))))

(defmulti event-msg-handler
  ; Dispatch on event-id
  (fn [app {:as event-msg :keys [id]}] id))

;; ## Event handlers

;; don't really need this... should delete
(defmethod event-msg-handler :chsk/ws-ping
  [_ _]
;;   (log/debug "Ping")
  )

;; Setting up our two main dat.sync hooks

;; General purpose transaction handler
;; (defmethod event-msg-handler :dat.sync.remote/tx
;;   [{:as app :keys [datom-api]} {:as event-msg :keys [id ?data]}]
;;   (log/info "tx recieved from client: " id)
;;   (let [tx-report @(apply-remote-tx! (:conn datom-api) ?data)]
;;     (println "Do something with:" tx-report)))

;; #?(:clj
;; (defn wait-delays-then-send! [send-chan msg wait]
;;   (let [delays (specter/select
;;               (specter/walker delay?)
;;               msg)]
;;     (log/debug "delays")
;;     (if-not delays
;;     (async/put! send-chan msg)
;;       (go-loop [delays delays]
;;                (if (empty? delays)
;;                  (>! send-chan msg)
;;                  (do
;;                    (log/debug "waiting for delays...")
;;                    (<! (async/timeout wait))
;;                    (recur (remove realized? delays)))))))))

#?(:clj
;; We handle the bootstrap message by simply sending back the bootstrap data
(defmethod event-msg-handler :dat.sync.client/bootstrap
  ;; What is send-fn here? Does that wrap the uid for us? (0.o)
  [{:as app :keys [knowbase remote datom-api]} {:as event-msg :keys [dat.remote/peer-id]}]
  (let [bootstrap (snapshot knowbase event-msg)]
      (async/put!
        (protocols/send-chan remote)
        bootstrap))))

;; Fallback handler; should send message saying I don't know what you mean
(defmethod event-msg-handler :default ; Fallback
  [app {:as event-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (log/warn "Unhandled event:" id))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; CLIENT - from client.cljc
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;; ***TODO: recv-remote-tx onyx style
;; ***TODO: connected onyx style

(reactor/register-handler
  :dat.remote/connected
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[:dat.sync.client/request-bootstrap true]])))

(reactor/register-handler
  :dat.sync.client/request-bootstrap
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Sending bootstrap request!")
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[:dat.remote/send-event! [:dat.sync.client/bootstrap true]]])))

(reactor/register-handler
  :dat.sync.client/bootstrap
  (fn [app db [_ tx-data]]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Received bootstrap!" (take 10 tx-data))
    (reactor/with-effect
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [:dat.reactor/dispatch! [:dat.sync.client.bootstrap/complete? true]]
      (reactor/resolve-to app db
        [[:dat.sync.client/recv-remote-tx tx-data]]))))

(defn legacy-server-segment! [app seg]
  (event-msg-handler app seg))

(defn transact-segment! [{:as knowbase :keys [conn]} {:as seg :keys [txs tx-meta]}]
  (let [report (d/transact! conn txs tx-meta)]
;;     (log/info "transacting:" (d/db conn))
    report))

;; This is just a little glue; A system component that plugs in to pipe messages from the remote to the
;; dispatch chan

(defrecord Datsync [dispatcher remote]
  component/Lifecycle
  (start [component]
      (log/info "Starting Datsync component")
;;       (dispatcher/dispatch! dispatcher [:dat.sync.client/merge-schema base-schema])
      ;; This should get triggered by successful connection to the websocket
      (log/info "Dispatched schema changes")
      (async/pipeline
        1
        (protocols/send-chan dispatcher)
        ;; FIXME: conform to re-frame
;;         (map (fn [ev] [:dat.remote.impl.sente/event (:event ev)]))
        (map #(assoc %
                :dat.reactor/event :dat.reactor/legacy
                :dat.sync/event-source :dat.sync/remote))
        (protocols/recv-chan remote))
      component)
  (stop [component]
    component))

(defn new-datsync []
  (map->Datsync {}))


(def onyx-batch-size 20)

(def base-catalog
  [{:onyx/type :function
    :onyx/name ::split-id-datoms
    :onyx/fn ::split-id-datoms
    :onyx/batch-size onyx-batch-size}
   {:onyx/type :function
    :onyx/name ::snapshot
    :onyx/fn ::snapshot
    :onyx/batch-size onyx-batch-size}
    ])

(defrecord DatsyncClient [dispatcher remote reactor knowbase conn]
  component/Lifecycle
  (start [component]
    (let [component (assoc component :conn (or conn (:conn knowbase))) ;; FIXME: handlers should get the conn from db themselves
          onyx-batch-size 20]
      (log/info "Starting Datsync component")
      (oreactor/expand-job!
        reactor
        ::base-job
        {:catalog base-catalog})
         (oreactor/expand-job!
        reactor
        ::job
        {:catalog
           [{:onyx/type :output
             :onyx/name :dat.reactor/legacy
             :dat.reactor/chan (oreactor/handler-chan!
                                 component
                                oreactor/legacy-segment!) ;; ???: idempotent
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan dispatcher)
             :onyx/name :dat.view.dom/event}
            {:onyx/type :function
             :onyx/name :dat.sync/snap-transact
             :onyx/fn ::snap-transact
             :conn (:conn knowbase)
             :onyx/params [:conn]
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan dispatcher)
             :onyx/name :dat.view.dom/render}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan remote)
             :onyx/name :dat.remote/recv}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan remote)
             :onyx/name :dat.remote/send}
;;            FIXME: looping txes {:onyx/type :input
;;              :onyx/batch-size onyx-batch-size
;;              :dat.reactor/chan (protocols/recv-chan knowbase)
;;              :onyx/name :dat.sync/tx-report}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (oreactor/handler-chan! knowbase transact-segment!) ;;(protocols/send-chan knowbase)
             :onyx/name :dat.sync/transact}
            {:onyx/type :function
             :onyx/name :dat.sync/localize
             :onyx/fn ::gdatoms->local-ds-txs
             :onyx/batch-size onyx-batch-size}
;;             {:onyx/type :function
;;              :onyx/name :dat.sync/legacy-localize-txs
;;              :onyx/fn ::legacy-localize-txs
;;              :onyx/batch-size onyx-batch-size}
            {:onyx/type :function
             :onyx/name :dat.sync/globalize
             :onyx/fn ::tx-report->gdatoms
             :onyx/batch-size onyx-batch-size}
             ]
         :workflow
           [[:dat.view.dom/event :dat.reactor/legacy]
;;             [:dat.view.dom/event :dat.sync/globalize] [:dat.sync/globalize :dat.remote/send]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
;;             FIXME: stop tx looping [:dat.sync/tx-report :dat.sync/handle-legacy-tx-report] [:dat.sync/handle-legacy-tx-report :dat.remote/send]
            [:dat.view.dom/event :dat.sync/snap-transact] [:dat.sync/snap-transact :dat.sync/globalize] [:dat.sync/globalize :dat.remote/send]
;;              [:dat.remote/recv :dat.sync/legacy-localize-txs]
;;              [:dat.sync/legacy-localize-txs :dat.reactor/legacy]
;;              [:dat.sync/legacy-localize-txs :dat.sync/transact]
;;              [:dat.remote/recv :dat.reactor/log]
            ]
           :flow-conditions
           [{:flow/from :dat.view.dom/event
             :flow/to [:dat.sync/snap-transact]
             :flow/predicate ::transaction?}
;;             {:flow/from :dat.remote/recv
;;              :flow/to [:dat.sync/legacy-localize-txs :dat.reactor/log]
;;              :flow/predicate ::snapshot?}
;;             {:flow/from :dat.sync/legacy-localize-txs
;;              :flow/to [:dat.reactor/legacy]
;;              :flow/predicate ::legacy?}
;;             {:flow/from :dat.sync/legacy-localize-txs
;;              :flow/to [:dat.sync/transact]
;;              :flow/predicate ::transaction?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.sync/localize]
             :flow/predicate ::localize?}
            {:flow/from :dat.view.dom/event
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            ]
         })
      ;; This should get triggered by successful connection to the websocket
;;       (log/info "Dispatched schema changes")
;;       (async/pipeline
;;         1
;;         (protocols/send-chan dispatcher)
;;         ;; FIXME: conform to re-frame
;; ;;         (map (fn [ev] [:dat.remote.impl.sente/event (:event ev)]))
;;         (map #(assoc %
;;                 :dat.reactor/event :dat.reactor/legacy
;;                 :dat.sync/event-source :dat.sync/remote))
;;         (protocols/recv-chan remote))
      component))
  (stop [component]
    (assoc component :conn nil)))

(defn new-datsync-client []
  (map->DatsyncClient {}))

(defrecord DatsyncServer [dispatcher remote knowbase reactor]
  component/Lifecycle
  (start [component]
    (let [] ;; ???: kill-chan
      (log/info "Starting Datsync Server component")
      (oreactor/expand-job!
        reactor
        ::base-job
        {:catalog base-catalog})
      (oreactor/expand-job!
        reactor
        ::job
        {:catalog
           [{:onyx/type :output
             :onyx/name :dat.reactor/legacy
             :dat.reactor/chan (oreactor/handler-chan!
                                 component
                                legacy-server-segment!) ;; ???: idempotent
             :onyx/batch-size onyx-batch-size}

            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan dispatcher)
             :onyx/name :dat.view.dom/event}
;;             {:onyx/type :output
;;              :onyx/batch-size onyx-batch-size
;;              :dat.reactor/chan (protocols/send-chan dispatcher)
;;              :onyx/name :dat.view.dom/render}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan remote)
             :onyx/name :dat.remote/recv}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan remote)
             :onyx/name :dat.remote/send}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan knowbase)
             :onyx/name :dat.sync/tx-report}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (oreactor/handler-chan! knowbase transact-segment!) ;; not implemented: (protocols/send-chan knowbase)
             :onyx/name :dat.sync/transact}
            {:onyx/type :function
             :onyx/name :dat.sync/localize
             :onyx/fn ::gdatoms->local-ds-txs
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :function
             :onyx/name :dat.sync/globalize
             :onyx/fn ::tx-report->gdatoms
             :onyx/batch-size onyx-batch-size}
             ]
           :workflow
           [[:dat.view.dom/event :dat.reactor/legacy]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv ::snapshot] [::snapshot :dat.remote/send]
            [:dat.remote/recv ::split-id-datoms] [::split-id-datoms :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
            [:dat.sync/tx-report :dat.sync/globalize]
            [:dat.sync/globalize :dat.remote/send]
            ]
           :flow-conditions
           [{:flow/from :dat.remote/recv
             :flow/to [::snapshot]
             :flow/predicate ::request-snapshot?}
            {:flow/from :dat.remote/recv
             :flow/to [::split-id-datoms]
             :flow/predicate ::localize?}
            {:flow/from :dat.view.dom/event
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}]
           })
      component))
  (stop [component]
    component))

(defn new-datsync-server []
  (map->DatsyncServer {}))

