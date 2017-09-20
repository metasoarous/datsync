(ns dat.sync.db
  (:require
    [taoensso.timbre :as log :include-macros true]
    [datascript.core :as ds]
    [datascript.db]
    [dat.spec.protocols :as protocols]
    [dat.spec.utils :refer [deep-merge cat-into]]
    [com.rpl.specter :as specter]
    #?(:clj [datomic.api :as dapi])
    #?(:clj [net.cgrand.macrovich :as macros]))
  #?(:cljs
      (:require-macros [net.cgrand.macrovich :as macros]
        [dat.sync.db :refer [function call]])))

;;;
;;;
;;;
(defrecord DereffingDB [conn deref-fn kind]
  #?(:cljs IDeref
     :clj clojure.lang.IDeref)
  (#?@(:clj [deref] :cljs [-deref]) [this] ((or deref-fn deref) conn))
  ;; clojure.core.deref
;;   DatomConn
;;   (kind [this]
;;     (:dat.sync.db/kind this))
  )

;;;
;;; Dispatch
;;;
(defn datascript? [db-or-conn]
  (or
    (ds/conn? db-or-conn)
    (datascript.db/db? db-or-conn)))

(defn db-kind [db-or-conn]
  (cond
    (datascript? db-or-conn) :datascript
    (instance? DereffingDB db-or-conn) (:kind db-or-conn)
    :else :datomic))


;;;
;;; Datom API
;;;
(defn entity [db eid]
  (case (db-kind db)
    :datascript (ds/entity db eid)
    (:datomic :wrapped-datomic) #?(:clj (dapi/entity db eid))))

(defn pull [db pull-expr eid]
  (case (db-kind db)
    :datascript (ds/pull db pull-expr eid)
    (:datomic :wrapped-datomic) #?(:clj (dapi/pull db pull-expr eid))))

(defn pull-many [db pull-expr eids]
  (case (db-kind db)
    :datascript (ds/pull-many db pull-expr eids)
    (:datomic :wrapped-datomic) #?(:clj (dapi/pull-many db pull-expr eids))))

(defn q [q-expr db & ins]
  (case (db-kind db)
    :datascript (apply ds/q q-expr db ins)
    (:datomic :wrapped-datomic) #?(:clj (apply dapi/q q-expr db ins))))

(defn db [conn]
  (case (db-kind conn)
    (:datascript :wrapped-datomic) @conn
    :datomic #?(:clj (dapi/db conn))))

;;;
;;; Middleware
;;;
(defn gen-uuid []
  (ds/squuid))

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

(defn uuid-all-the-things* [db datoms]
  (into
    []
    (comp
      (map (fn [[eid _ _ _ _]] eid))
      (distinct)
      (map (partial entity db))
      (remove :db/ident)
      (remove :dat.sync/uuid)
      (map (fn [{:keys [db/id]}]
             [:db/add id :dat.sync/uuid (gen-uuid)])))
    datoms))

(defn mw-uuid-all-the-things
  "tx-middleware to add uuids to any fresh entity that didn't get one assigned during the transaction."
  [transact]
  (fn [report txs]
    (let [{:as report :keys [db-after tx-data]} (transact report txs)
          uuids (uuid-all-the-things* db-after tx-data)]
      (transact report uuids))))

(defn compatability-meta [tx-meta]
  (update-in
    tx-meta
    [:datascript.db/tx-middleware]
    #(comp
       #?(:clj mw-datomic-tempid)
       (or % identity)
       mw-uuid-all-the-things
       datascript.db/schema-middleware)))

;;;
;;; Transacting
;;;
(defn with
  ([db txs] (with db txs nil))
  ([db txs tx-meta]
  (case (db-kind db)
    :datascript (ds/with db txs (compatability-meta tx-meta))
    (:datomic :wrapped-datomic) #?(:clj (dapi/with db txs)))))

(defn transact!
  ([conn txs] (transact! conn txs nil))
  ([conn txs tx-meta]
  (case (db-kind conn)
    :datascript (ds/transact! conn txs (compatability-meta tx-meta))
    ;; ???: does always returning the report negatively affect datomic efficiency?
    :datomic #?(:clj @(dapi/transact conn txs))
    :wrapped-datomic #?(:clj @(dapi/transact (:conn conn) txs)))))

;;;
;;; Experimental
;;;
#?(:clj
(defmacro function
  "For cljs your requires should match your ns. You can have less requires, but not different"
  [{:as form :keys [params code]}]
  `(macros/case
     :cljs (fn ~params ~code)
     :clj ;;(fn ~params ~code)
     (dapi/function '~form))))

#?(:clj
(defmacro call
  "Function name and :db/ident must match"
  [conn-or-db [kw & args]]
  `(case (db-kind ~conn-or-db)
     :datascript ~(into [:db.fn/call (symbol (namespace kw) (name kw))] args)
     (:datomic :wrapped-datomic) ~(into [(keyword (namespace kw) (name kw))] args))))

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


(defn conn-from-conn [conn]
  (case (db-kind conn)
    :datascript conn
    (:datomic :wrapped-datomic) (DereffingDB. conn #?(:clj dapi/db :cljs nil) :wrapped-datomic)))
