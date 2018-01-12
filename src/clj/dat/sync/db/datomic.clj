(ns dat.sync.db.datomic
  (:require
    [taoensso.timbre :as log]
    [dat.sync.db :as db]
    [datomic.api :as d]))

(defmethod db/conn? ::conn [{:keys [dat.sync.db/conn]}] 
  (isa? (type conn) datomic.Connection))

(defmethod db/db? ::db [{:keys [dat.sync.db/db]}]
  (isa? (type db) datomic.db.Db))

(def ^:private empty-conn 
  (let [url "datomic:mem://e9a192dc-9cde-45c6-8cdb-e89afdfb5529"]
    (d/create-database url)
    (d/connect url)))

(def db-api
  {:dat.sync.db/entity    d/entity
   :dat.sync.db/pull      d/pull
   :dat.sync.db/pull-many d/pull-many
   :dat.sync.db/q         d/q
   :dat.sync.db/with      d/with
   :dat.sync.db/datoms    d/datoms
   :dat.sync.db/tempid    d/tempid
   :dat.sync.db/kind      ::db})

(def conn-api
  {:dat.sync.db/deref     #(db/inject-db-api (d/db %) db-api)
   :dat.sync.db/transact! (comp deref d/transact)
   :dat.sync.db/kind      ::conn})

(defn create-conn! 
  ([] (create-conn! "datomic:mem://base"))
  ([url & {:as options :keys [keep?] :or {keep? false}}]
   (when-not keep? 
     (d/delete-database url))
   (d/create-database url)
   (-> (d/connect url)
       (db/inject-conn-api conn-api))))

(defn empty-db []
  (-> empty-conn
      d/db
      (db/inject-db-api db-api)))
