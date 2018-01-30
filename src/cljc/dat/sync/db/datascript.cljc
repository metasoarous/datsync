(ns dat.sync.db.datascript
  (:require
    [taoensso.timbre :as log]
    [dat.sync.db :as db]
    [datascript.core :as d]
    [dat.sync.datascript-pr :as ds-pr]
    [datascript.db]
    [com.rpl.specter :as specter]
    [dat.spec.utils :refer [deep-merge cat-into]]
    [onyx.static.util :refer [kw->fn]]
    #?(:clj [taoensso.nippy :as nippy])
    #?(:clj [clojure.java.io :as io]))
  #?(:clj
      (:import [java.io DataInputStream DataOutputStream])))

(def db-ops #{:db/add :db/retract :db/retractEntity :db/retractAttribute :db/cas})

(defn call [db [op & args :as tx]]
  (let [[f args] 
        (if (= :db.fn/call op)
          [(first args) (rest args)]
          [(:db/fn (d/entity db [:db/ident op])) args])]
    (if f
      (apply f db args)
      (throw (ex-info "db/fn not found in database" {:op op
                                                     :args args})))))

(defn fn-expand [db txs]
  (loop [processed []
         txs txs]
;;     (log/debug "p t" processed txs)
    (if (empty? txs)
      processed
      (let [tx (first txs)
            the-rest (rest txs)]
        (if-not (sequential? tx) 
          (recur (conj processed tx) the-rest)
          (let [[op & args] tx]
            (if (contains? db-ops op)
              (recur (conj processed tx) the-rest)
              (recur processed (into (or (call db tx) []) the-rest)))))))))

(defn fn-mw [transact]
  (fn [report txs]
    (let [txs (fn-expand (:db-before report) txs) 
          report (transact report txs)]
      report)))

(defmethod db/conn? ::conn [{:keys [dat.sync.db/conn]}]
  (d/conn? conn))

(defmethod db/db? ::db [{:keys [dat.sync.db/db]}]
  (d/db? db))

(def tx-meta {:datascript.db/tx-middleware (comp fn-mw ds-pr/schema-middleware)})

(def db-api
  {:dat.sync.db/datoms    d/datoms
   :dat.sync.db/with      #(ds-pr/with %1 %2 tx-meta)
   :dat.sync.db/entity    ds-pr/entity
   :dat.sync.db/pull      d/pull
   :dat.sync.db/pull-many d/pull-many
   :dat.sync.db/q         d/q
   :dat.sync.db/tempid    ds-pr/tempid
   :dat.sync.db/kind ::db})

(def conn-api
  {:dat.sync.db/deref     #(db/inject-db-api @% db-api)
   :dat.sync.db/transact! #(ds-pr/transact! %1 %2 tx-meta)
   :dat.sync.db/kind ::conn})

#?(:clj
(defn db-persister [url]
;;   (log/debug "nippy freezing")
  (fn [{:as report :keys [db-after]}]
    (with-open [out (clojure.java.io/output-stream url)]
        (nippy/freeze-to-out! (DataOutputStream. out) {:datoms (d/datoms db-after :eavt)
                                                       :schema (:schema db-after)})))))

(defn create-conn
  ([] (create-conn nil))
  ([url & {:as options :keys [keep? persistent] :or {keep? false persistent false}}]
   (let [conn-from-storage 
         #?(:cljs nil
            :clj
             (when persistent 
               (when keep?
                 (try
                   (with-open [in (io/input-stream url)]
                     (let [{:keys [datoms schema]} (nippy/thaw-from-in! (DataInputStream. in))]
                       (when datoms
                         (log/debug "nippy thawing")
                         (d/conn-from-datoms datoms schema))))
                   (catch Exception e)))))
         conn (or 
                conn-from-storage 
                (-> 
                  (ds-pr/create-schema-conn)
                  (db/inject-conn-api conn-api)))]
     #?(:clj
         (when persistent
           (d/listen! conn ::persist (db-persister url))))
     conn)))

(defn destroy-conn! [conn]
  (d/unlisten! conn ::persist))

(defn empty-db []
  (-> 
    (ds-pr/schema-db)
    (db/inject-db-api db-api)))


;;;
;;; Experimental
;;;

(defn- ^:export kw-call [db f-ident & args]
  (log/debug "kw-calling...")
  [(into
     [:db.fn/call
      (kw->fn f-ident)
      ;;(:db/fn (ds-pr/entity db f-ident))
      ]
     args)])

(defn call-vec [& args]
  [(into
     [:db.fn/call kw-call]
     args)])



;;;
;;; Middleware
;;;


(defn datomic-tempids->ints [txs]
  ;; TODO: handle datomic partitions
  (let [txs-after (specter/transform
                    (specter/walker #(instance? datomic.db.DbId %))
                    #(:idx %)
                    txs)]
    txs-after))

(defn mw-datomic-tempid [transact]
  (fn [{:as report :keys [db-after]} txs]
    (let [txs (datomic-tempids->ints txs)]
;;       (log/debug "txs-post-id" txs)
      (transact report txs))))

(defn uuid-all-the-things* [db datoms]
  (into
    []
    (comp
      (map (fn [[eid _ _ _ _]] eid))
      (distinct)
      (map (partial d/entity db))
      (remove :db/ident) ;; TODO: needs to match identer being used
      (remove :dat.sync/uuid)
      (map (fn [{:keys [db/id]}]
;;              (log/debug "uuid-for" id)
             [:db/add id :dat.sync/uuid (db/gen-uuid)])))
    datoms))

(defn mw-uuid-all-the-things
  "tx-middleware to add uuids to any fresh entity that didn't get one assigned during the transaction."
  [transact]
  (fn [report txs]
    (let [{:as report :keys [db-after tx-data]} (transact report txs)
          uuids (uuid-all-the-things* db-after tx-data)]
      (transact report uuids))))

(defn compatability-meta [tx-meta]
  (update-in
    (or tx-meta {})
    [:datascript.db/tx-middleware]
    #(comp
       #?(:clj mw-datomic-tempid)
       (or % identity)
       mw-uuid-all-the-things
       ds-pr/schema-middleware)))
;;;
;;; Experimental
;;;

(defn fn-entity? [db eid]
    (-> (d/entity db eid)
        :db/fn
        boolean))

(defn- eid [db e]
  (:db/id (d/entity db e)))

(defn unique? [db attr]
  (-> (d/entity db attr)
      :db/unique
      boolean))

(defn ref? [db attr]
  (-> (d/entity db attr)
      :db/valueType
      :db/id
      (= (eid db :db.type/ref))))

(defn cardinality-many? [db attr]
  (-> (d/entity db attr)
      :db/cardinality
      :db/id
      (= (eid db :db.cardinality/many))))

(defn fn-datom? [db [eid _ _ _ _]]
  (fn-entity? db eid))

;; #?(:clj
;; (defmacro function
;;   "For cljs your requires should match your ns. You can have less requires, but not different"
;;   [{:as form :keys [params code]}]
;;   `(macros/case
;;      :cljs (fn ~params ~code)
;;      :clj ;;(fn ~params ~code)
;;      (dapi/function '~form))))

;; #?(:clj
;; (defmacro call
;;   "Function name and :db/ident must match"
;;   [conn-or-db [kw & args]]
;;   `(case (db-kind ~conn-or-db)
;;      :datascript ~(into [:db.fn/call (symbol (namespace kw) (name kw))] args)
;;      (:datomic :wrapped-datomic) ~(into [(keyword (namespace kw) (name kw))] args))))

;;;
;;; conforming
;;;
(defn- resolve-ref
  "Resolve ref ourselves to handle keyword refs in datascript"
  [db [attr value]]
  (if (ref? db attr)
    (do
      (log/debug "resolving...")
      (if (cardinality-many? db attr)
        [attr (mapv (partial eid db) value)]
        [attr (eid db value)]))
    [attr value]))

(defn ^:export resolve-refs [db entity]
  (into
    {}
    (map (partial resolve-ref db))
    entity))

(defn ^:export keyword-ref-safely [db entities]
  (mapv
    (partial resolve-refs db)
    entities))

(defn ^:export papers-please
  "Makes sure all entities are assigned a local id based on unique attributes"
  [db entities]
  (log/debug "entities->identities")
  (let [identities (for [e entities]
                     (into
                       {}
                       (filter (fn [[a v]]
                                 (unique? db a)))
                       e))]
    identities))

(defn schema-entity? [entity]
  (and (contains? entity :db/ident)
       (contains? entity :db/cardinality)
       (contains? entity :db/valueType)))

(defn ^:export just-the-schema
  "Makes sure all the schema is available for the rest of the transactions"
  [db entities]
  (log/debug "entities->schema")
  (into
    []
    (comp
      (filter schema-entity?)
      (map
        (fn [entity]
          (select-keys entity #{:db/ident :db/cardinality :db/unique :db/valueType :db/index :db/fulltext :dat.sync/part})))
      (map (partial resolve-refs db)))
    entities))

(defn norms->txes [db norms]
  (let [{::keys [call db]} db
        schema-txs (call ::just-the-schema norms)
        ident-txs (call ::papers-please norms)
        other-txs (call ::keyword-ref-safely norms)]
    [schema-txs ident-txs other-txs]))

(defn- conj-snap
  ([] {::add {}
       ::retract {}})
  ([snap] (-> snap
              (update-in [::add]     (partial map second))
              (update-in [::retract] (partial map second))))
  ([snap [e a v tx add? :as datom]]
   ;; TODO: check v for refs
   (assoc-in
     snap
     [(if add? ::add ::retract) e a]
     v)))

(defn datoms->snapshot [datoms]
  (transduce
    (filter fn-datom?)
    conj-snap
    datoms))

(defn db->snapshot [db]
  ;; !!!: what's this doing
  (let [{::keys [datoms]} db]
    (datoms->snapshot (datoms db))))

(def verify-core
  [{:db/ident :db.cardinality/many}
   {:db/ident :db.cardinality/one}

   {:db/ident :db.unique/identity}
   {:db/ident :db.unique/value}

   {:db/ident :db.type/keyword}
   {:db/ident :db.type/string}
   {:db/ident :db.type/boolean}
   {:db/ident :db.type/long}
   {:db/ident :db.type/bigint}
   {:db/ident :db.type/float}
   {:db/ident :db.type/double}
   {:db/ident :db.type/bigdec}
   {:db/ident :db.type/ref}
   {:db/ident :db.type/instant}
   {:db/ident :db.type/uuid}
   {:db/ident :db.type/uri}
   {:db/ident :db.type/bytes}

   {:db/ident :db.part/db}
   {:db/ident :db.part/user}
   {:db/ident :db.part/tx}

   {:db/ident :db/ident}
   {:db/ident :db/cardinality}
   {:db/ident :db/unique}
   {:db/ident :db/valueType}
   {:db/ident :db/doc}
   {:db/ident :db/index}
   {:db/ident :db/fulltext}
   {:db/ident :db/isComponent}
   {:db/ident :db/noHistory}
   
   {:db/ident :db.install/attribute}
   {:db/ident :db.alter/attribute}
   {:db/ident :db.install/partition}

   {:db/ident :dat.sync/part}
   {:db/ident :dat.sync/uuid}])

(def verify-core-schema
  [{:db/id          [:db/ident :db/ident]
    ;; TODO: db/ident has a special cardinality/uniqueness. more than one :db/ident can refer to the same eid enabling aliases.
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/keyword]
    :db/unique      [:db/ident :db.unique/identity]}
   {:db/id          [:db/ident :db/cardinality]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/ref]}
   {:db/id          [:db/ident :db/unique]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/ref]}
   {:db/id          [:db/ident :db/valueType]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/ref]}
   {:db/id          [:db/ident :db/doc]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/string]}
   {:db/id          [:db/ident :db/index]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/boolean]}
   {:db/id          [:db/ident :db/fulltext]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/boolean]}
   {:db/id          [:db/ident :db/isComponent]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/boolean]}
   {:db/id          [:db/ident :db/noHistory]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/boolean]}

   {:db/id          [:db/ident :db.install/attribute]
    :db/valueType   [:db/ident :db.type/ref]
    :db/cardinality [:db/ident :db.cardinality/many]}
   {:db/id          [:db/ident :db.alter/attribute]
    :db/valueType   [:db/ident :db.type/ref]
    :db/cardinality [:db/ident :db.cardinality/many]}
   {:db/id          [:db/ident :db.install/partition]
    :db/valueType   [:db/ident :db.type/ref]
    :db/cardinality [:db/ident :db.cardinality/many]}

   {:db/id          [:db/ident :dat.sync/part]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/ref]}
   {:db/id          [:db/ident :dat.sync/uuid]
    :db/cardinality [:db/ident :db.cardinality/one]
    :db/valueType   [:db/ident :db.type/uuid]
    :db/unique      [:db/ident :db.unique/identity]}])

(defn verify-conn! [conn]
  (doseq [tx [verify-core verify-core-schema]]
    (log/info "verifying" conn)
    (ds-pr/transact! conn tx)))
