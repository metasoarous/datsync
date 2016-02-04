(ns datsync.server.core
  (:require [datomic.api :as d]))

(defn transact-from-client!
  [db-conn tx]
  ;; This is where we'd want to put security measures in place;
  ;; What other translation things do we need to do here?
  (let [tempid-map (fn [n] (if (and (integer? n) (< n 0)) (d/tempid :db.part/user n) n))
        tx' (mapv (fn [[op e a v]] [op (tempid-map e) a (tempid-map v)]) tx)]
    (d/transact db-conn tx')))


;; Install this in an event handler, like (in Sente, more or less)
;; 
;;    (defmethod event-msg-handler :datsync.client/tx
;;      [{:as app :keys [datomic ws-connection]} {:as ev-msg :keys [id ?data]}]
;;      (let [tx-report @(datsync/transact-from-client! datomic ?data)]
;;        (println "Tx report:" tx-report))


;; Can we make transactions ourselves?
;(require '[clojure.core.async :as async])

;(defn reaction
  ;[reaction-fn]
  ;(let [c (async/chan)]
    ;(async/go-loop []
      ;(let [


