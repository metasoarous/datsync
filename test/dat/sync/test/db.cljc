(ns dat.sync.test.db
  (:require
    [dat.sync.db            :as d]
    [dat.sync.db.datascript :as ds]
    [dat.sync.db.datahike   :as dh]
    [dat.sync.db.datomic    :as da]
    [clojure.spec.alpha :as s]
    ;;      #?(:cljs [cljs.test    :as t :refer-macros [is are deftest testing]]
    ;;        :clj  [clojure.test :as t :refer        [is are deftest testing]])
    [clojure.test :as t :refer [is are deftest testing]]
    ))

(s/check-asserts true)

(defn- ent->ident 
  "This function is only needed while keyword ident lookup does not work in datascript/datahike"
  [e]
  (if (keyword? e)
    e
    (:db/ident e)))

(defn- unique [db eid]
  (-> (d/entity db eid)
      :db/unique
      ent->ident))

(defn- with-monkeys [db]
  (-> 
    db
    (d/db-with [{:db/ident       ::friend
                 :db/valueType   [:db/ident :db.type/ref]
                 :db/cardinality [:db/ident :db.cardinality/many]}
                {:db/ident       ::name
                 :db/valueType   [:db/ident :db.type/string]
                 :db/unique      [:db/ident :db.unique/identity]
                 :db/cardinality [:db/ident :db.cardinality/one]}])
    (d/db-with [{:db/id [:db/ident ::friend]
                 :db/ident ::buddy}])
    (d/db-with [{::name "Spider Guy"}])
    (d/db-with [{::name "Mr Bosco"
                 ::friend [[::name "Spider Guy"]]}
                {::name "The Verve"}])))

(deftest test-conn
  (let [ds-conn (ds/create-conn!)
        dh-conn (dh/create-conn!)
        da-conn (da/create-conn!)]
    (is (d/conn? ds-conn))
    (is (d/conn? dh-conn))
    (is (d/conn? da-conn))
    
    (is (d/db? (d/db ds-conn)))
    (is (d/db? (d/db dh-conn)))
    (is (d/db? (d/db da-conn)))
    
    (is (d/db? (ds/empty-db)))
    (is (d/db? (dh/empty-db)))
    (is (d/db? (da/empty-db)))
    
    (is (d/db? (d/db-with (ds/empty-db) [])))
    (is (d/db? (d/db-with (dh/empty-db) [])))
    (is (d/db? (d/db-with (da/empty-db) [])))
    ))

(deftest test-base-schema
  (let [ds-db (ds/empty-db)
        dh-db (dh/empty-db)
        da-db (da/empty-db)]
    
    (is (= (unique ds-db [:db/ident :db/ident]) :db.unique/identity))
    (is (= (unique dh-db [:db/ident :db/ident]) :db.unique/identity))
    (is (= (unique da-db [:db/ident :db/ident]) :db.unique/identity))))

(deftest test-keyword-lookup-ref
  (let [ds-db (ds/empty-db)
        dh-db (dh/empty-db)
        da-db (da/empty-db)]
    (is (= (d/entity ds-db :db/ident) (d/entity ds-db [:db/ident :db/ident])))
    (is (= (d/entity dh-db :db/ident) (d/entity dh-db [:db/ident :db/ident])))
    (is (= (d/entity da-db :db/ident) (d/entity da-db [:db/ident :db/ident])))
    
    (is (= (d/pull ds-db '[*] :db/ident) (d/pull ds-db '[*] [:db/ident :db/ident])))
    (is (= (d/pull dh-db '[*] :db/ident) (d/pull dh-db '[*] [:db/ident :db/ident])))
    (is (= (d/pull da-db '[*] :db/ident) (d/pull da-db '[*] [:db/ident :db/ident])))
    ))

(deftest test-ident->keyword
  (let [ds-db (ds/empty-db)
        dh-db (dh/empty-db)
        da-db (da/empty-db)]
    (is (= (:db/unique (d/entity ds-db :db/ident)) :db.unique/identity))
    (is (= (:db/unique (d/entity dh-db :db/ident)) :db.unique/identity))
    (is (= (:db/unique (d/entity da-db :db/ident)) :db.unique/identity))
    ))

(deftest test-alias
  (let [ds-troop (-> (ds/empty-db) with-monkeys)
        dh-troop (-> (dh/empty-db) with-monkeys)
        da-troop (-> (da/empty-db) with-monkeys)
        mr-bosco [::name "Mr Bosco"]]
    (is (= (::friend (d/entity ds-troop mr-bosco))
           (::buddy  (d/entity ds-troop mr-bosco))))
    (is (= (::friend (d/entity dh-troop mr-bosco))
           (::buddy  (d/entity dh-troop mr-bosco))))
    (is (= (::friend (d/entity da-troop mr-bosco))
           (::buddy  (d/entity da-troop mr-bosco))))
    ))
