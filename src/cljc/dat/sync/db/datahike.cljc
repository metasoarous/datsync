(ns dat.sync.db.datahike
  (:require
    [taoensso.timbre :as log]
    [dat.sync.db :as db]
    [datahike.core :as d]
    [datahike.middleware :as mw]
    [dat.sync.datascript-pr :as ds-pr]
    #?(:clj [net.cgrand.macrovich :as macros]))
  #?(:cljs
     (:require-macros [net.cgrand.macrovich :as macros]
                      [dat.sync.db.datahike :refer [install-dbfn!]])))

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

(def tx-meta {:datahike.db/tx-middleware (comp fn-mw mw/schema-middleware)})

(def db-api
  {:dat.sync.db/datoms    d/datoms
   :dat.sync.db/with      #(d/with %1 %2 tx-meta)
   :dat.sync.db/entity    d/entity
   :dat.sync.db/pull      d/pull
   :dat.sync.db/pull-many d/pull-many
   :dat.sync.db/q         d/q
   :dat.sync.db/tempid    ds-pr/tempid
   :dat.sync.db/kind      ::db})

(def conn-api
  {:dat.sync.db/deref     #(db/inject-db-api @% db-api)
   :dat.sync.db/transact! #(d/transact! %1 %2 tx-meta)
   :dat.sync.db/kind      ::conn})

(defn create-conn 
  ([] (create-conn nil))
  ([url & {:as options :keys [keep?] :or {keep? false}}]
   (when keep?
     nil) ;; TODO persistent datahike
     
   (-> 
     (mw/create-schema-conn)
     (db/inject-conn-api conn-api))))

(defn empty-db []
  (-> 
    (mw/schema-db)
    (db/inject-db-api db-api)))

(macros/deftime
  (defmacro install-dbfn! [conn {:keys [f params]}]
    `(db/transact!
        ~conn
        [{:db/fn (dat.sync.db/dbfn-with-api ~(symbol (namespace f) (name f)) db-api)
          :db/ident ~(keyword (namespace f) (name f))}])))
