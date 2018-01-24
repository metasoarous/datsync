(ns dat.sync.test.datascript-pr
  (:require
    [dat.sync.datascript-pr :as ds-pr]
    [datascript.core :as ds]
    [datahike.core :as dh]
    [clojure.test :as t :refer [is are deftest testing]]))

(deftest test-with
  (let [db (->
             (ds-pr/schema-db)
             (ds-pr/db-with [{:db/ident :test-attr
                              :db/cardinality [:db/ident :db.cardinality/many]}] ds-pr/schema-meta))]
    (is (=
          (->
            db
            :schema
            :test-attr
            :db/cardinality)
          :db.cardinality/many))))

