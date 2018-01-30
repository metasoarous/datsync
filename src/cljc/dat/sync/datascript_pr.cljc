(ns dat.sync.datascript-pr
  (:require
    [taoensso.timbre :as log]
    [datascript.core :as ds]
    [datahike.middleware :as mw]
    [datascript.db :as db :refer [-datoms -search init-db entid-strict empty-db]]
    #?(:cljs [datascript.db :refer [DB]])
    [com.rpl.specter :as specter])
  #?(:clj (:import [datascript.db DB])))

;;;;
;;;; !!!: EXPERIMENTAL file don't use outside of dat.* projects.
;;;; !!!: This entire file is a pending PR for datascript.db. A lot of code is copy pasted from datascript so watch out if the code changes over there.
;;;; NOTE: If we end up keeping this here, we can change things like -search to datascript.core calls to pull q and entity
;;;;

(defn poor-mans-kw-refs
  ([schema-entity] (poor-mans-kw-refs #{:db/valueType :db/cardinality :db/unique} schema-entity))
  ([pred? entity]
   (if-not (map? entity) entity
     (into
       {}
       (map
         (fn [[k v]]
           (if-not (pred? k) [k v]
               [k [:db/ident v]])))
       entity))))

(def ^{:private true} current-tempid (atom 0))
(defn- roll!
  "Default keeps clojurescript ints from overflowing"
  ([counter] (roll! counter 1 9007199254740991))
  ([counter lowest highest]
   (swap!
     counter
     #(let [nextt (inc %)]
        (if (= nextt highest)
         lowest
         nextt)))))

(defn tempid [part]
  (- (roll! current-tempid)))


(defn entity [db eid]
  (ds/entity
    db
    (if (keyword? eid) 
      [:db/ident eid]
      eid)))

(defn- transact-tx-data [{:as initial-report :keys [tx-meta]} initial-es]
  (let [middleware (or (:datascript.db/tx-middleware tx-meta) identity)]
    ;;     (log/debug "tx-middleware" middleware)
    ((middleware db/transact-tx-data)
     initial-report
     initial-es)))

(defn- validate-schema-change [db-before db-after]
  ;; TODO: insert optimized version of alexandergunnarson validation from posh
  ;; ???: should we call from full databases or schema and datoms?
  )

(defn- ^DB replace-schema
  [db schema & {:as options :keys [validate?] :or {validate? true}}]
  ;; ???: Can we make more performant by only updating :avet datom set when :db/index becomes active, rather than doing an entire init-db?
  ;;   (log/debug "replacing-schema" schema)
  (let [db-after (init-db (-datoms db :eavt []) schema)]
    (when validate?
      (validate-schema-change db db-after))
    db-after))

(defn- schema-datom? [[e a v tx add?]]
  ;; currently ignoring problematic valueTypes
  (#{:db/ident :db/cardinality :db/unique :db/index :db/isComponent :db/valueType} a))

(defn- supported-schema-value? [a v]
  (case a
    :db/valueType (= v :db.type/ref)
    true))

(defn- resolve-ident [db ident-eid]
  (let [resolved-eid (entid-strict db ident-eid)]
    (-> (-search db [resolved-eid :db/ident])
        first
        :v)))

(defn- resolve-enum [db attr value]
  ;; FIXME: hardcoded enums
  (if (#{:db/cardinality :db/unique :db/valueType} attr)
    (let [rident (resolve-ident db value)]
      ;;       (log/debug "resolving to " rident " from " value " for " attr)
      rident
      )
    value))

(defn- conj-schema-datom
  ;; TODO: handle retractions
  ([] (empty-db))
  ([db] db)
  ([db [eid attr value _ _]]
   (let [attr-ident (resolve-ident db eid)
         resolved-value (resolve-enum db attr value)]
     (if (supported-schema-value? attr resolved-value)
       (assoc-in
         db
         [:schema attr-ident attr]
         resolved-value)
       db))))

(defn schema-middleware [transact]
  (fn [report txs]
    (let [{:as report :keys [db-after tx-data]} (transact report txs)
          db-after' (transduce
                      (filter schema-datom?)
                      conj-schema-datom
                      db-after
                      tx-data)]
      (if (= (:schema db-after) (:schema db-after'))
        report
        (assoc report
          :db-after (replace-schema db-after (:schema db-after')))))))

(def schema-meta {:datascript.db/tx-middleware schema-middleware})

(defn with
  ([db tx-data] (with db tx-data nil))
  ([db tx-data tx-meta]
   {:pre [(db/db? db)]}
   (if (ds/is-filtered db)
     (throw (ex-info "Filtered DB cannot be modified" {:error :transaction/filtered}))
     (transact-tx-data
       (db/map->TxReport
         {:db-before db
          :db-after  db
          :tx-data   []
          :tempids   {}
          :tx-meta   tx-meta})
       tx-data))))

(defn db-with
  ([db tx-data] (db-with db tx-data nil))
  ([db tx-data tx-meta]
   (:db-after (with db tx-data tx-meta))))

(defn- -transact! [conn tx-data tx-meta]
  {:pre [(ds/conn? conn)]}
  (let [report (atom nil)]
    (swap! conn (fn [db]
                  (let [r (with db tx-data tx-meta)]
                    (reset! report r)
                    (:db-after r))))
    @report))

(defn transact!
  ([conn tx-data] (transact! conn tx-data nil))
  ([conn tx-data tx-meta]
   {:pre [(ds/conn? conn)]}
   (let [report (-transact! conn tx-data tx-meta)]
     (doseq [[_ callback] @(:listeners (meta conn))]
       (callback report))
     report)))

(defn schema-db []
  (-> (ds/empty-db mw/bare-bones-schema)
      (db-with mw/enum-idents schema-meta)
      (db-with (mapv poor-mans-kw-refs mw/schema-idents) schema-meta)))

(defn create-schema-conn
  "Creates a conn that has all the necessary base schema to be used with transactional schema. You should also use schema-meta whenever you use any of d/transact! d/with d/db-with"
  []
  (ds/conn-from-db (schema-db)))
