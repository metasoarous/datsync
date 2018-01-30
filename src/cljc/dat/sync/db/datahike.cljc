(ns dat.sync.db.datahike
  (:require
    [taoensso.timbre :as log]
    [dat.sync.db :as db]
    [datahike.core :as d]
    [datahike.middleware :as mw]
    [dat.sync.datascript-pr :as ds-pr]))

(defmethod db/conn? ::conn [{:keys [dat.sync.db/conn]}]
  (d/conn? conn))

(defmethod db/db? ::db [{:keys [dat.sync.db/db]}]
  (d/db? db))

(def db-api
  {:dat.sync.db/datoms    d/datoms
   :dat.sync.db/with      #(d/with %1 %2 mw/schema-meta)
   :dat.sync.db/entity    d/entity
   :dat.sync.db/pull      d/pull
   :dat.sync.db/pull-many d/pull-many
   :dat.sync.db/q         d/q
   :dat.sync.db/tempid    ds-pr/tempid
   :dat.sync.db/kind      ::db})

(def conn-api
  {:dat.sync.db/deref     #(db/inject-db-api @% db-api)
   :dat.sync.db/transact! #(d/transact! %1 %2 mw/schema-meta)
   :dat.sync.db/kind      ::conn})

(defn create-conn 
  ([] (create-conn nil))
  ([url & {:as options :keys [keep?] :or {keep? false}}]
   (when keep?
     nil ;; TODO persistent datahike
     )
   (-> 
     (mw/create-schema-conn)
     (db/inject-conn-api conn-api))))

(defn empty-db []
  (-> 
    (mw/schema-db)
    (db/inject-db-api db-api)))
