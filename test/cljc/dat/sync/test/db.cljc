(ns dat.sync.test.db
  (:require
   [dat.sync.db            :as d]
   [dat.sync.db.datascript :as ds]
   [dat.sync.db.datahike   :as dh]
   #?(:clj [dat.sync.db.datomic    :as da])
   [clojure.spec.alpha :as s]
    ;;      #?(:cljs [cljs.test    :as t :refer-macros [is are deftest testing]]
    ;;        :clj  [clojure.test :as t :refer        [is are deftest testing]])
   [clojure.test :as t :refer [is are deftest testing]]))

;; TODO: once datahike is updated in clojars we can run cljs tests again. So need to remove reader conditionals for datahike tests.

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

(d/def-dbfn test-fn [db n]
  [{::name n}])

(d/def-dbfn indirection [db n]
  [[::test-fn n]])

(d/def-dbfn local-call
  {:requires [[dat.sync.test.db :refer [test-fn]]]}
  [db n]
  (test-fn db n))

(defn query-and-set-monkey [db]
  (let [entity (d/pull db '[*] [::name "Mr Bosco"])]
    [[:db/retract (:db/id entity) ::name "Mr Bosco"]
     [:db/add (:db/id entity) ::name "Bosco 2 Boogaloo"]]))

(defn- with-fns [db]
  (->
   db
   (d/db-with [{:db/ident ::name
                :db/valueType [:db/ident :db.type/string]
                :db/cardinality [:db/ident :db.cardinality/one]
                :db/unique [:db/ident :db.unique/identity]}])
   (d/db-with [{:db/ident ::test-fn
                :db/fn test-fn}
               {:db/ident ::indirection
                :db/fn indirection}
               {:db/ident ::local-call
                :db/fn local-call}])))

(defn- test-conn [conn db]
  (is (d/conn? conn))
  (is (d/db? (d/db conn)))
  (is (d/db? db))
  (is (d/db? (d/db-with db []))))

(deftest test-conn-datascript
  (let [conn (ds/create-conn)
        db (ds/empty-db)]
    (test-conn conn db)))

#?(:clj
   (deftest test-conn-datahike
     (let [conn (dh/create-conn)
           db (dh/empty-db)]
       (test-conn conn db))))

#?(:clj
   (deftest test-conn-datomic
     (let [conn (da/create-conn)
           db (da/empty-db)]
       (test-conn conn db))))

(defn- test-base-schema [db]
  (is (= (unique db [:db/ident :db/ident]) :db.unique/identity)))

(deftest test-base-schema-datascript
  (test-base-schema (ds/empty-db)))

#?(:clj
   (deftest test-base-schema-datahike
     (test-base-schema (dh/empty-db))))

#?(:clj
   (deftest test-base-schema-datomic
     (test-base-schema (da/empty-db))))

(defn- test-keyword-lookup-ref [db]
  (is (= (d/entity db :db/ident) (d/entity db [:db/ident :db/ident])))
  (is (= (d/pull db '[*] :db/ident) (d/pull db '[*] [:db/ident :db/ident]))))

(comment
  ;; FIXME: known failure
  (deftest test-keyword-lookup-ref-datascript
    (test-keyword-lookup-ref (ds/empty-db))))

#?(:clj
   (deftest test-keyword-lookup-ref-datahike
     (test-keyword-lookup-ref (dh/empty-db))))

#?(:clj
   (deftest test-keyword-lookup-ref-datomic
     (test-keyword-lookup-ref (da/empty-db))))

(defn- test-ident->keyword [db]
  (is (= (:db/unique (d/entity db :db/ident)) :db.unique/identity)))

(comment
  ;; FIXME: known failure
  (deftest test-ident->keyword-datascript
    (test-ident->keyword (ds/empty-db))))

(comment
  ;; FIXME: known failure
  #?(:clj
     (deftest test-ident->keyword-datahike
       (test-ident->keyword (dh/empty-db)))))

#?(:clj
   (deftest test-ident->keyword-datomic
     (test-ident->keyword (da/empty-db))))

(defn- test-alias [db]
  (let [troop (with-monkeys db)
        mr-bosco [::name "Mr Bosco"]]
    (is (= (::friend (d/entity troop mr-bosco))
           (::buddy  (d/entity troop mr-bosco))))))

(comment
  ;; FIXME: known failure
  (deftest test-alias-datascript
    (test-alias (ds/empty-db))))

(comment
  ;; FIXME: known failure
  (deftest test-alias-datahike
    (test-alias (dh/empty-db))))

#?(:clj
   (deftest test-alias-datomic
     (test-alias (da/empty-db))))

(deftest test-function
  (let []
    (is (= (test-fn    nil "name")  [{::name    "name"}]))
    (is (= (indirection nil "name") [[::test-fn "name"]]))
    (is (= (local-call nil "name")  [{::name    "name"}]))))

(defn test-function-indirection [db]
  (let [db (with-fns db)
        test-name "Jimmy"]
    (is (= test-name
           (-> db
               (d/db-with [[::indirection test-name]])
               (d/entity [::name test-name])
               ::name)))
    (is (= test-name
           (-> db
               (d/db-with [[::local-call test-name]])
               (d/entity [::name test-name])
               ::name)))))

(deftest test-function-indirection-datascript
  (test-function-indirection (ds/empty-db)))

#?(:clj
   (deftest test-function-indirection-datahike
     (test-function-indirection (dh/empty-db))))

#?(:clj
   (deftest test-function-indirection-datomic
     (test-function-indirection (da/empty-db))))

(defn test-function-with-queries [db]
  (is
   (-> db
       with-monkeys
       (d/db-with [[::query-and-set-monkey]])
       (d/entity [::name "Bosco 2 Boogaloo"]))))

(deftest test-function-with-queries-datascript
  (let [conn (ds/create-conn)]
    (ds/reg-dbfn! conn {:f ::query-and-set-monkey
                        :params [db]})
    (test-function-with-queries (d/db conn))))

#?(:clj
   (deftest test-function-with-queries-datahike
     (let [conn (dh/create-conn)]
       (dh/reg-dbfn! conn {:f ::query-and-set-monkey
                           :params [db]})
       (test-function-with-queries (d/db conn)))))

#?(:clj
   (deftest test-function-with-queries-datomic
     (let [conn (da/create-conn)]
       (da/reg-dbfn! conn {:f ::query-and-set-monkey
                           :params [db]})
       (test-function-with-queries (d/db conn)))))

