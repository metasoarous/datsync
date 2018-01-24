(ns dat.sync.db
  (:require
    [taoensso.timbre :as log :include-macros true]
    [datascript.core :as ds]
    [clojure.spec.alpha :as s]
    #?(:clj [datomic.api :as da])
    #?(:clj [net.cgrand.macrovich :as macros]))
   #?(:cljs
      (:require-macros [net.cgrand.macrovich :as macros]
                       [dat.sync.db :refer [function def-dbfn]])))

(s/def ::kind keyword?)

(s/def ::db        (complement nil?))
(s/def ::entity    fn?)
(s/def ::pull      fn?)
(s/def ::pull-many fn?)
(s/def ::q         fn?)
(s/def ::datoms    fn?)
(s/def ::with      fn?)
(s/def ::tempid    fn?)
(s/def ::DB (s/keys :req [::db ::entity ::pull-many ::pull ::q ::datoms ::with ::tempid ::kind]))

;;; datsync transactor
(s/def ::conn       (complement nil?))
(s/def ::transact!  fn?)
(s/def ::deref      fn?) ;; returns ::DB
(s/def ::CONN (s/keys :req [::conn ::transact! ::deref ::kind]))

(s/def ::SYNC (s/or ::DB ::CONN))


(defmulti conn? ::kind)
(defmulti db?   ::kind)
(defn sync? [dat-sync-db-or-conn] 
  (s/valid? ::SYNC dat-sync-db-or-conn))

(defn inject-db-api [db api]
  (assoc api ::db db))

(defn inject-conn-api [conn api]
  (assoc api ::conn conn))

(defn entity [db eid]
  (s/assert ::DB db)
  (let [{::keys [entity db]} db]
    (entity db eid)))

(defn pull [db pull-expr eid]
  (s/assert ::DB db)
  (let [{::keys [pull db]} db]
    (pull db pull-expr eid)))

(defn pull-many [db pull-expr eids]
  (s/assert ::DB db)
  (let [{::keys [pull-many db]} db]
    (pull-many db pull-expr eids)))

(defn q [q-expr db & inputs]
  (s/assert ::DB db)
  (let [{::keys [q db]} db]
    (apply q q-expr db inputs)))

(defn datoms [db & args]
  (s/assert ::DB db)
  (let [{::keys [datoms db]} db]
    (apply datoms db args)))

(defn with [db txs]
  (s/assert ::DB db)
  (let [{::keys [with db]} db]
    (with db txs)))

(defn db-with [db txs]
  (inject-db-api (:db-after (with db txs)) db))

(defn tempid [db part]
  (s/assert ::DB db)
  (let [{::keys [tempid]} db]
    (tempid part)))

(defn db [conn]
  (s/assert ::CONN conn)
  (let [{::keys [deref conn]} conn]
    (deref conn)))

(defn transact! [conn txs]
  (s/assert ::CONN conn)
  (let [{::keys [transact! conn]} conn]
    (transact! conn txs)))

(defn gen-uuid []
  (ds/squuid))

(defn destructure-fn-args [args]
  (cond
    (sequential? (first args))
    {:params (first args)
     :body   (rest args)}

    (sequential? (second args))
    (into
      {:params (second args)
       :body   (drop 2 args)}
      (if (string? (first args)) {:doc (first args)} (first args)))

    (sequential? (nth args 2))
    (into
      {:doc (first args)
       :params (nth args 2)
       :body (drop 3 args)}
      (second args))
    
    :else 
    (throw (ex-info "Could not destructure fn args" {:args args}))))

(macros/deftime
(defmacro function
  "For cljs your requires should match your ns. You can have less requires, but not different"
  [{:as form :keys [params code]}]
  `(macros/case
     :cljs (fn ~params ~code)
     :clj ;;(fn ~params ~code)
     (da/function '~form)))

(defmacro def-dbfn
  ""
  [sym & args]
  (let [{:keys [requires params doc body]} (destructure-fn-args args)]
    `(def ~sym
    (function
      {:lang "clojure"
       :requires ~requires
       :params ~params
       :code ~@body}))
    )))

