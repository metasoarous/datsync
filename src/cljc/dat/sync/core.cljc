(ns dat.sync.core
  "# Datsync client API"
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require [clojure.core.async :as async
             :refer [>! <! #?@(:clj [go go-loop])]]
            [dat.remote :as remote]
            [datascript.db]
            [dat.reactor :as reactor]
            [dat.reactor.onyx :as oreactor]
            [dat.reactor.dispatcher :as dispatcher]
            [datascript.core :as ds]
            [dat.spec.protocols :as protocols]
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component]
            [dat.spec.utils :refer [deep-merge cat-into deref-or-value]]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))

;; TODO: 8hrs get figwheel loading onyx compiled fns
;; TODO: 8hrs tx-cycle protection
;; TODO: 12hrs dirty peer
;; TODO: 8hrs persistent datascript replacement
;; TODO: 8hrs race condition debugging (async delay
;; TODO: 40hrs ios compatability
;; TODO: 40hrs datview onyx integration
;; TODO: 4hrs refactor/clean
;; TODO: 4hrs debug slf4j logging
;; ???: macro to register db function that works in both datascript and datomic. Also passes the api.
;; ???: make transaction fn calls compatible between datascript datomic
;; ???: add tools to datascript for accreting schema like attr aliasing, attr deprecation, etc. (closer to full ident support)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UNIFIED - treating server and client as peers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn gen-uuid []
  (ds/squuid))

(defn identity-gdatom? [[[ident-attr _] attr _ _ _]]
  (= ident-attr attr))

(defn globalize-uuident [{:keys [entity]} db eid]
  (let [it (entity db eid)
        dbident (:db/ident it)]
    ;; TODO: support for all kinds of idents
    (cond
      dbident [:db/ident dbident]
      :else [:dat.sync/uuident (:dat.sync/uuident it)])))

(defn localize-uuident-deprecated [{:keys [entity]} db euuid]
  [:dat.sync/uuident euuid])

(defn datom->tx [[e a v tx add?]]
  ;; FIXME: ignoring tx for now
  [(if add? :db/add :db/retract) e a v ;;tx
   ])

(defn datom><tx []
  (map datom->tx))

(defn ref? [{:keys [q]} db attr-ident]
  (or (#{:db/cardinality :db/valueType :db/unique} attr-ident) ;; so we know base-schema are refs before the base-schema is transacted into the db.
      ;;???: maybe have base-schema tied to a built in uuident we know at compile time (slower)? maybe have schema datoms fully integrated one datom at a time?
      (q
        '[:find ?attr .
          :in $ ?ident
          :where
          [?attr :db/ident ?ident]
          [?attr :db/valueType ?ref-enum]
          [?ref-enum :db/ident :db.type/ref]]
        db attr-ident)))

(defn many? [{:keys [q]} db attr-ident]
  (q
    '[:find ?attr .
      :in $ ?ident
      :where
       [?attr :db/ident ?ident]
       [?attr :db/cardinality ?many-enum]
       [?many-enum :db/ident :db.cardinality/many]]
    db attr-ident))

(defn datom-identer [api db uuident]
  (fn [[e a v tx add?]]
    [(uuident api db e)
     a
     (if-not (ref? api db a)
       v
       (if (and (many? api db a) (coll? v)) ;; ???: overkill? in datom for no coll as v i think
         (map (partial uuident api db) v)
         (uuident api db v)))
     ;; FIXME: I don't think this is resolving properly on the datascript side. It's also probably not the best way to store things anyways. Maybe tx and eid should be stored as plain uuids???
     tx;;(uuident api db tx)
     add?]))

(defn datom-attr-resolver [{:keys [entity]} db]
  (fn [[e a v tx add?]]
    [e
     (if (keyword? a)
       a
       (:db/ident (entity db a)))
     v
     tx
     add?]))

(defn datom><gdatom [datom-api db]
  (comp
    (map (datom-attr-resolver datom-api db))
    (map (datom-identer datom-api db globalize-uuident))))

(defn gdatom><datom [datom-api db]
  identity)

(defn gdatom><datom-deprecated [datom-api db]
  (map (datom-identer datom-api db localize-uuident-deprecated)))

(defn assign-ident [[[ident-attr ident-value] a v tx add?]]
  {;;???: :db/id #db/id[:db.part/user]
   ident-attr ident-value})

(defn datom><tx-idents []
  (comp
    (filter identity-gdatom?)
    (map assign-ident)))

(defn middle-with [db tx-data {:as tx-meta :keys [datascript.db/tx-middleware]}]
  {:pre [(datascript.db/db? db)]}
  ;; ???: skipping filtered db check
  ((if tx-middleware (tx-middleware datascript.db/transact-tx-data) datascript.db/transact-tx-data)
   (datascript.db/map->TxReport
     {:db-before db
      :db-after  db
      :tx-data   []
      :tempids   {}
      :tx-meta   tx-meta})
   tx-data))



#?(:clj
(defn uuident-all-the-things* [db]
  (comp
    (map (fn [[eid _ _ _ _]] eid))
    (distinct)
    (map (partial dapi/entity db))
    (remove :db/ident)
    (remove :dat.sync/uuident)
    (map (fn [{:keys [db/id]}]
           [:db/add id :dat.sync/uuident (gen-uuid)])))))

(defn uuident-all-the-things
  "tx-middleware to add uuidents to any fresh entity that didn't get one assigned during the transaction."
  [transact]
  (fn [report txs]
    (let [{:as report :keys [db-after tx-data]} (transact report txs)
          uuidents (into
                     []
                     (comp
                       (map (fn [[eid _ _ _ _]] eid))
                       (distinct)
                       (remove #(:dat.sync/uuident (ds/entity db-after %)))
                       (map (fn [eid]
                              [:db/add eid :dat.sync/uuident (gen-uuid)])))
                     tx-data)
          ]
;;       (log/debug "uuident-all-the-things" uuidents)
      (transact report uuidents))))

(defn ^:export snap-transact [{:keys [with snap]} conn {:keys [txs tx-meta]}]
  ;; ???: uuident-all-the-things middleware?
  (with (snap conn) txs
      (update-in (or tx-meta {})
        [:datascript.db/tx-middleware]
                 #(comp (or % identity) uuident-all-the-things))))

(defn ^:export tx-report->gdatoms [api {:as seg :keys [tx-data db-after]}]
  (let [gdatoms (into [] (datom><gdatom api db-after) tx-data)]
;;   (log/info "tx-report->gdatoms" gdatoms)
  {:dat.reactor/event :dat.sync/gdatoms
   :datoms gdatoms}))

(defn- weird-nil-ident? [[[_ ident-value] _ _ _ _]]
  ;; FIXME: why are there nils in some of the datoms? (maybe just one at this point)
  (nil? ident-value))

(defn gdatoms->local-txs [gdatoms]
  (into
    []
    (comp
      (remove weird-nil-ident?)
      (map #(if (identity-gdatom? %)
              (assign-ident %)
              (datom->tx %))))
    gdatoms))

(defn ^:export gdatoms->local-ds-txs [{:as seg :keys [datoms datomses]}]
  (for [datoms (or datomses [datoms])]
    (into seg
      {:dat.reactor/event :dat.sync/local-txs
       :txs (gdatoms->local-txs datoms)})))

(defn ^:export split-id-datoms [{:as seg :keys [datoms]}]
  (let [local-id-assignments (filter identity-gdatom? datoms)
        other-datoms (remove identity-gdatom? datoms)]
    ;; ***FIXME: this is a hack. I thought we would only need to do this for the snapshot, but it appears to be an all the time problem. Is it even safe to split the transaction like this? Can we build a datomic fn that removes the need for this?
    (assoc
      seg
      :datoms nil
      :datomses [local-id-assignments other-datoms])))

(def schema-uuident-query
  '[:find [?attr-uuid ...]
    :where
    [?attr-eid :db/ident]
    [?attr-eid :dat.sync/uuident ?attr-uuid]])

(def schema-map-query
  '[:find ?attr (pull ?attr-eid [*])
    :where
    [?attr-eid :db/ident ?attr]])

(def schema-eid-query
  '[:find [?attr-eid ...]
    :where
    [?attr-eid :db/ident ?attr-ident]])

(defn replace-schema
  [db schema]
  (ds/init-db (ds/datoms db :eavt) schema))

(def global-schema
  {:dat.sync/uuident {:db/ident :dat.sync/uuident
;;                      :db/valueType :db.type/uuid
                     :db/unique :db.unique/identity}})

;; (def schema-schema
;;   {:db/ident {:db/ident :db/ident
;; ;;               :db/valueType :db.type/keyword
;;               :db/unique :db.unique/identity}
;;    :db/cardinality {:db/ident :db/cardinality
;;                     :db/valueType :db.type/ref ;; enum
;;                     }
;;    :db/unique {:db/ident :db/unique
;;                :db/valueType :db.type/ref ;; enum
;;                }
;;    :db/valueType {:db/ident :db/valueType
;;                   :db/valueType :db.type/ref ;; enum
;;                   }
;;    :db/doc {:db/ident :db/doc
;; ;;             :db/valueType :db.type/string
;;             }
;;    :db/index {:db/ident :db/index
;; ;;               :db/valueType :db.type/boolean
;;               }
;;    :db/fulltext {:db/ident :db/fulltext
;; ;;                  :db/valueType :db.type/boolean
;;                  }
;;    :db/isComponent {:db/ident :db/isComponent
;; ;;                  :db/valueType :db.type/boolean
;;                     }
;;    :db/noHistory {:db/ident :db/noHistory
;; ;;                  :db/valueType :db.type/boolean
;;                   }})

;; (defn test-schema-middleware []
;;   (let [conn (ds/create-conn)]
;;     (ds/transact!
;;       conn
;;       [{:db/ident :test
;;         :db/cardinality :db.cardinality/many}]
;;       {:datascript.db/tx-middleware datascript.db/schema-middleware})
;;     (ds/transact!
;;       conn
;;       [{:db/id -1
;;         :test :a}
;;        {:db/id -1
;;         :test :b}])
;;     @conn))

(defn datom->has-ident? [{:keys [entity]} db]
  (fn [[e _ _ _ _]]
    (:db/ident (entity db e))))

(defn snapshot [{:as knowbase :keys [conn]
                 {:as datom-api :keys [snap entity]} :datom-api}
                {:as event-msg :keys [dat.remote/peer-id]}]
  (log/info "Sending bootstrap message" peer-id)
  (let [db (snap conn)
        has-ident? (datom->has-ident? datom-api db)
        datoms (into
                 []
                 (datom><gdatom datom-api db)
                 (protocols/snapshot knowbase))
        uuidents (filter identity-gdatom? datoms)
        ident-datoms (filter has-ident? datoms)
        core-schema-datoms (filter (fn [[_ a _ _ _]] (#{:db/cardinality :db/valueType :db/unique :db/ident} a)) ident-datoms) ;; swap order w ident-datoms for more efficient algo
        other-schema-datoms (remove (fn [[_ a _ _ _]] (#{:db/cardinality :db/valueType :db/unique :db/ident} a)) ident-datoms)
;;         schema-datoms (filter datascript.db/schema-datom? datoms)
        other-datoms (remove #(or ;;(datascript.db/schema-datom? %)
                                  (identity-gdatom? %)
                                  (has-ident? %))
                             datoms)]
;;     (log/debug "nil-id-datoms:" (into [] (filter (fn [[[_ iv] _ _ _ _]]
;;                                                     (nil? iv))) datoms))
    ;; ???: snapshot gives sequence. what's the right way to handle this. where should batching occur?
;;     (log/debug "SNAP!!!" (vec db))
;;     (log/debug "->" (vec (take 10 datoms)))
    (let [seg {:dat.remote/peer-id peer-id
               :dat.reactor/event :dat.sync/snapshot
               :datomses [uuidents core-schema-datoms other-schema-datoms other-datoms]
               }]
;;       (log/debug "snap-seg" seg)
      seg
        )))

;;
;; ## Dataflow predicates
;;
(defn ^:export transaction?
  [event old-seg seg all-new]
  ;; TODO: better matching
  (contains? seg :txs))

(defn ^:export localize?
  [event old-seg seg all-new]
  ;; TODO: decide which segments get sent to server
  ;; TODO: handle all peers not just server
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
  (= (:dat.reactor/event seg) :dat.sync/snapshot))

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

#?(:clj
;; We handle the bootstrap message by simply sending back the bootstrap data
(defmethod event-msg-handler :dat.sync.client/bootstrap
  ;; What is send-fn here? Does that wrap the uid for us? (0.o)
  [{:as app :keys [knowbase remote datom-api]} {:as event-msg :keys [dat.remote/peer-id]}]
  (async/put!
    (protocols/send-chan remote)
    (snapshot knowbase event-msg))))

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

(defn ^:export could-update-schema [seg]
  (let [seg (update-in seg
                       [:tx-meta :datascript.db/tx-middleware]
                       #(comp datascript.db/schema-middleware (or % identity)))]
    seg))

(defn transact-segment! [{:as knowbase :keys [datom-api conn]} {:as seg :keys [txs tx-meta]}]
;;   (log/info "transacting" seg)
  ((:transact! datom-api) conn txs tx-meta)
  (log/info "db-after" ((:snap datom-api) conn))
  )

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
             :datom-api (:datom-api knowbase)
             :conn (:conn knowbase)
             :onyx/params [:datom-api :conn]
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
            {:onyx/type :function
             :onyx/name ::could-update-schema
             :onyx/fn ::could-update-schema
             :onyx/batch-size onyx-batch-size}
;;             {:onyx/type :function
;;              :onyx/name :dat.sync/legacy-localize-txs
;;              :onyx/fn ::legacy-localize-txs
;;              :onyx/batch-size onyx-batch-size}
            {:onyx/type :function
             :onyx/name :dat.sync/globalize
             :onyx/fn ::tx-report->gdatoms
             :onyx/batch-size onyx-batch-size
             :datom-api (:datom-api knowbase)
             :onyx/params [:datom-api]}
             ]
         :workflow
           [[:dat.view.dom/event :dat.reactor/legacy]
;;             [:dat.view.dom/event :dat.sync/globalize] [:dat.sync/globalize :dat.remote/send]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
             [:dat.remote/recv ::could-update-schema] [::could-update-schema :dat.sync/localize]
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
            {:flow/from :dat.remote/recv
             :flow/to [::could-update-schema]
             :flow/predicate ::snapshot?}
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
             :onyx/batch-size onyx-batch-size
             :datom-api (:datom-api knowbase)
             :onyx/params [:datom-api]}
;;             {:onyx/type :function
;;              :onyx/name :dat.sync/handle-legacy-tx-report
;;              :onyx/fn ::handle-legacy-tx-report
;;              :onyx/batch-size onyx-batch-size}
             ]
           :workflow
           [[:dat.view.dom/event :dat.reactor/legacy]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv ::snapshot] [::snapshot :dat.remote/send]
            [:dat.remote/recv ::split-id-datoms] [::split-id-datoms :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
;;             [:dat.sync/tx-report :dat.sync/handle-legacy-tx-report] [:dat.sync/handle-legacy-tx-report :dat.remote/send]
            [:dat.sync/tx-report :dat.sync/globalize]
;;             [:dat.sync/globalize :dat.remote/send] ;; ***FIXME: process tx-report
;;             [:dat.view.dom/event :dat.sync/snap-transact] [:dat.sync/snap-transact :dat.sync/globalize]
            [:dat.sync/globalize :dat.remote/send]
            ]
           :flow-conditions
           [{:flow/from :dat.remote/recv
             :flow/to [::snapshot]
             :flow/predicate ::request-snapshot?}
;;             {:flow/from :dat.view.dom/event
;;              :flow/to [:dat.sync/snap-transact]
;;              :flow/predicate ::source-from-transactor?} ;; FIXME: deprecated
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

;; RACE_CONDITON:
;; This seems to occur on the server mostly when you start the client in the middle of the server start cycle
;; ???: need blocking async in clojure?
;; Exception in thread "async-dispatch-4" java.lang.RuntimeException: java.lang.Exception: Not supported: class clojure.lang.Delay
;; 	at com.cognitect.transit.impl.WriterFactory$1.write(WriterFactory.java:60)
;; 	at cognitect.transit$write.invokeStatic(transit.clj:149)
;; 	at cognitect.transit$write.invoke(transit.clj:146)
;; 	at taoensso.sente.packers.transit$fn__38621$fn__38622$fn__38623$fn__38624.invoke(transit.cljc:58)
;; 	at taoensso.sente.packers.transit.TransitPacker.pack(transit.cljc:94)
;; 	at taoensso.sente$pack.invokeStatic(sente.cljc:223)
;; 	at taoensso.sente$pack.invoke(sente.cljc:219)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$flush_buffer_BANG___36639.invoke(sente.cljc:437)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$fn__36983$state_machine__9551__auto____37050$fn__37052.invoke(sente.cljc:491)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$fn__36983$state_machine__9551__auto____37050.invoke(sente.cljc:489)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine.invokeStatic(ioc_macros.clj:973)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine.invoke(ioc_macros.clj:972)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine_wrapped.invokeStatic(ioc_macros.clj:977)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine_wrapped.invoke(ioc_macros.clj:975)
;; 	at clojure.core.async.impl.ioc_macros$take_BANG_$fn__9569.invoke(ioc_macros.clj:986)
;; 	at clojure.core.async.impl.channels.ManyToManyChannel$fn__4501.invoke(channels.clj:265)
;; 	at clojure.lang.AFn.run(AFn.java:22)
;; 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
;; 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
;; 	at java.lang.Thread.run(Thread.java:748)
;; Caused by: java.lang.Exception: Not supported: class clojure.lang.Delay
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:176)
;; 	at com.cognitect.transit.impl.JsonEmitter.emitMap(JsonEmitter.java:158)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitMap(AbstractEmitter.java:70)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:166)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:87)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitTagged(AbstractEmitter.java:34)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitEncoded(AbstractEmitter.java:59)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:169)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.JsonEmitter.emitMap(JsonEmitter.java:158)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitMap(AbstractEmitter.java:70)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:166)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshalTop(AbstractEmitter.java:193)
;; 	at com.cognitect.transit.impl.JsonEmitter.emit(JsonEmitter.java:28)
;; 	at com.cognitect.transit.impl.WriterFactory$1.write(WriterFactory.java:57)
;; 	... 19 more



