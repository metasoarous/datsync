(ns dat.sync.db
  (:require
    [taoensso.timbre :as log :include-macros true]
    [datascript.core :as ds]
    [clojure.spec.alpha :as s]))

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


