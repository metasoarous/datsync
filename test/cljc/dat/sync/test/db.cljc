(ns dat.sync.test.db
  (:require
   [dat.sync.db            :as d]
   [dat.sync.db.datascript :as ds]
   [dat.sync.db.datahike   :as dh]
   #?(:clj [dat.sync.db.datomic    :as da])
   [clojure.spec.alpha :as s]
   [clojure.test :as t :refer [is are deftest testing]]))

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

;;;
;;; dbfns
;;;
(defn entity-named
  "Creates a new entity with the given name."
  [db n]
  [{::name n}])

(defn indirect-dbfn-entity-named
  "Calls entity-named as a dbfn"
  [db n]
  [[::entity-named n]])

(defn indirect-fn-entity-named
  "Calls entity-named as a plain fn"
  [db n]
  (entity-named db n))

(defn query-and-set-monkey
  "Queries for entity named 'Mr Bosco' and changes his name to 'Bosco 2 Boogalooo' "
  [db]
  (let [entity (d/pull db '[*] [::name "Mr Bosco"])]
    [[:db/retract (:db/id entity) ::name "Mr Bosco"]
     [:db/add (:db/id entity) ::name "Bosco 2 Boogaloo"]]))

;;
;;
;;
(defn- test-conn
  "Make sure that the api's are hooked in properly and predicate multimethods are implemented"
  [conn db]
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

;;
;;
;;
(defn- test-base-schema
  "Make sure base-schema is present in the db"
  [db]
  (is (= (unique db [:db/ident :db/ident]) :db.unique/identity)))

(deftest test-base-schema-datascript
  (test-base-schema (ds/empty-db)))

#?(:clj
   (deftest test-base-schema-datahike
     (test-base-schema (dh/empty-db))))

#?(:clj
   (deftest test-base-schema-datomic
     (test-base-schema (da/empty-db))))

;;
;;
;;
(defn- test-keyword-lookup-ref
  "Can you refer to a :db/ident'd entity with a :keyword-name rather than an eid or [:lookup :ref]"
  [db]
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

;;
;;
;;
(defn- test-ident->keyword
  "When you use entity api on a schema ref like :db/unqique you should get back a :keyword instead of an eid"
  [db]
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

;;
;;
;;
(defn- test-alias 
  ":db/ident's have special properties. You can assign more than one :db/ident to the same attr to get an alias effect"
  [db]
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
    (is (= (entity-named    nil "name")  [{::name    "name"}]))
    (is (= (indirect-dbfn-entity-named nil "name") [[::entity-named "name"]]))
    (is (= (indirect-fn-entity-named nil "name")  [{::name    "name"}]))))

;;
;;
;;
(defn- test-dbfn 
  "Can you call dbfns"
  [db]
  (let [db (with-monkeys db)
        test-name "Jimmy"]
    (is (= test-name
           (-> db
               (d/db-with [[::indirect-dbfn-entity-named test-name]])
               (d/entity [::name test-name])
               ::name)))
    (is (= test-name
           (-> db
               (d/db-with [[::indirect-fn-entity-named test-name]])
               (d/entity [::name test-name])
               ::name)))))

(deftest test-dbfn-datascript
  (let [conn (ds/create-conn)]
    (ds/install-dbfn! conn {:f ::indirect-dbfn-entity-named
                            :params [db n]})
    (ds/install-dbfn! conn {:f ::entity-named
                            :params [db n]})
    (ds/install-dbfn! conn {:f ::indirect-fn-entity-named
                            :params [db n]})
    (test-dbfn (d/db conn))))

#?(:clj
   (deftest test-dbfn-datahike
     (let [conn (dh/create-conn)]
       (dh/install-dbfn! conn {:f ::indirect-dbfn-entity-named
                               :params [db n]})
       (dh/install-dbfn! conn {:f ::entity-named
                               :params [db n]})
       (dh/install-dbfn! conn {:f ::indirect-fn-entity-named
                               :params [db n]})
       (test-dbfn (d/db conn)))))

#?(:clj
   (deftest test-dbfn-datomic
     (let [conn (da/create-conn)]
       (da/install-dbfn! conn {:f ::indirect-dbfn-entity-named
                               :params [db n]})
       (da/install-dbfn! conn {:f ::entity-named
                               :params [db n]})
       (da/install-dbfn! conn {:f ::indirect-fn-entity-named
                               :params [db n]})
       (test-dbfn (d/db conn)))))

;;
;;
;;
(defn- test-dbfn-with-queries 
  "make sure you can use d/pull etc within a dbfn"
  [db]
  (is
   (-> db
       with-monkeys
       (d/db-with [[::query-and-set-monkey]])
       (d/entity [::name "Bosco 2 Boogaloo"]))))

(deftest test-dbfn-with-queries-datascript
  (let [conn (ds/create-conn)]
    (ds/install-dbfn! conn {:f ::query-and-set-monkey
                            :params [db]})
    (test-dbfn-with-queries (d/db conn))))

#?(:clj
   (deftest test-dbfn-with-queries-datahike
     (let [conn (dh/create-conn)]
       (dh/install-dbfn! conn {:f ::query-and-set-monkey
                               :params [db]})
       (test-dbfn-with-queries (d/db conn)))))

#?(:clj
   (deftest test-dbfn-with-queries-datomic
     (let [conn (da/create-conn)]
       (da/install-dbfn! conn {:f ::query-and-set-monkey
                               :params [db]})
       (test-dbfn-with-queries (d/db conn)))))

