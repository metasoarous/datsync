(ns dat.sync.db
  (:require
    [taoensso.timbre :as log :include-macros true]
    [datascript.core :as ds]
    [datascript.db]
    [dat.spec.protocols :as protocols]
    [dat.spec.utils :refer [deep-merge cat-into]]
    [com.rpl.specter :as specter]
    #?(:clj [datomic.api :as dapi])
    ))

(defn datascript? [db-or-conn]
  (or
    (ds/conn? db-or-conn)
    (datascript.db/db? db-or-conn)))

(defn db-kind [db-or-conn]
  (if (datascript? db-or-conn)
    :datascript
    :datomic))

;; #?(:clj
;; (defmacro if-datascript [db-or-conn iff thenn]
;;   `(if-cljs
;;      (if (datascript? ~db-or-conn)
;;        ~iff
;;        (throw (ex-info "Datomic not supported in cljs")))
;;      (if (datascript? ~db-or-conn)
;;        ~iff
;;        ~thenn))))

(defn entity [db eid]
  (case (db-kind db)
    :datascript (ds/entity db eid)
    :datomic #?(:clj (dapi/entity db eid))))

(defn pull [db pull-expr eid]
  (case (db-kind db)
    :datascript (ds/pull db pull-expr eid)
    :datomic #?(:clj (dapi/pull db pull-expr eid))))

(defn pull-many [db pull-expr eids]
  (case (db-kind db)
    :datascript (ds/pull-many db pull-expr eids)
    :datomic #?(:clj (dapi/pull-many db pull-expr eids))))

(defn q [q-expr db & ins]
  (case (db-kind db)
    :datascript (apply ds/q q-expr db ins)
    :datomic #?(:clj (apply dapi/q q-expr db ins))))

(defn with
  ([db txs] (with db txs nil))
  ([db txs tx-meta]
  (case (db-kind db)
    :datascript (ds/with db txs tx-meta)
    :datomic #?(:clj (dapi/with db txs)))))

(defn snap [conn]
  (case (db-kind conn)
    :datascript @conn
    :datomic #?(:clj (dapi/db conn))))

(defn transact!
  ([conn txs] (transact! conn txs nil))
  ([conn txs tx-meta]
  (case (db-kind conn)
    :datascript (ds/transact! conn txs tx-meta)
    ;; ???: does always returning the report negatively affect datomic efficiency?
    :datomic #?(:clj @(dapi/transact conn txs)))))

#?(:clj
(defmacro function
  "For datascript your requires should match your ns. You can have less requires, but not different"
  [{:as form :keys [params code]}]
  ;; ???:
  `(case (db-kind db)
     :datascript (fn ~params ~code)
     :datomic ~(dapi/function form))))

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

(defn tempid!
  ([db part]
   (case (db-kind db)
     :datascript
     ;; ???: roll! is better than allowing tempids to be become positive and thrashing existing entities
     (- (roll! current-tempid))
     :datomic
     #?(:clj (dapi/tempid part))))
  ([db part n]
   (case (db-kind db)
     :datascript n
     :datomic
     #?(:clj (dapi/tempid part n)))))

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
