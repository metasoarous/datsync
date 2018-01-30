(ns dat.sync.db.posh
  (:require
    [taoensso.timbre :as log]
    [datascript.core :as d]
    [dat.sync.db :as db]
    [posh.reagent :as posh]))

(def posh-api
  (into
    ds/datascript-api
    {:kind ::posh
     :predicate #(-> % posh/get-posh-atom boolean)
     :before [(:kind db/datascript-api)]

     :entity #(ds-pr/entity (deref %1) %2)
     :pull posh/pull
     :pull-many #(d/pull-many (deref %1) %2 %3)
     :q posh/q
     :db identity
     :with #(ds-pr/with (deref %1) %2)
     :transact! ds-pr/transact!
     :datoms #(apply d/datoms (deref %1) %&)}))

(defmethod db/api ::posh [_]
  posh-api)

(defn posh->ds
  "Returns a db that will use the datascript api rather than the posh api. You can use this conn to do safe, non-reactive queries."
  [dat-conn]
  (db/map->DatsyncConn {:kind ::datascript
                        :conn (:conn dat-conn)}))
