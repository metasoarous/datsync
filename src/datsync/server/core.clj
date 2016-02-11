(ns datsync.server.core
  (:require [datomic.api :as d]))


;; ## Applying changes from clients

;; We need a function we can call to transact a tx-message from the client

(defmulti translate-tx-form
  (fn [tempid-map [op]] op))

(defmethod translate-tx-form :db/add
  [tempid-map [op e a v]]
  [op (tempid-map e) a (tempid-map v)])

(defmethod translate-tx-form :db/retract
  [tempid-map [op e a v]]
  [op (tempid-map e) a (tempid-map v)])

(defmethod translate-tx-form :db.fn/retractEntity
  [tempid-map [op e]]
  [op (tempid-map e)])

(defn transact-from-client!
  [db-conn tx]
  ;; This is where we'd want to put security measures in place;
  ;; What other translation things do we need to do here?
  (let [tempid-map (fn [n] (if (and (integer? n) (< n 0)) (d/tempid :db.part/user n) n))
        tx' (mapv (partial translate-tx-form tempid-map) tx)]
    (d/transact db-conn tx')))


;; If you're using regular http requests, you can just call this in your handler functions as you might
;; normally handle a form submission.
;; In sente, you might do something like:
;; 
;;    (defmethod event-msg-handler :datsync.client/tx
;;      [{:as app :keys [datomic ws-connection]} {:as ev-msg :keys [id ?data]}]
;;      (let [tx-report @(datsync/transact-from-client! datomic ?data)]
;;        (println "Do something with:" tx-report)))



;; ## Pushing changes to client

;; Every time we get a transaction, we want to send the results of that transaction to every client.
;; Eventually we can get fancy with installing subscription middleware, so for each client we have a
;; specification of what they have "checked out", but this is just a starting point.

;; The easiest thing to do here is take the tx-data (datoms) produced by each transaction and convert those to
;; :db/add and :db/retract statements which we can send to clients.

(defn tx-report-deltas
  [{:as tx-report :keys [db-after tx-data]}]
  (->> tx-data
       (d/q '[:find ?e ?aname ?v ?t ?added
              :in $ [[?e ?a ?v ?t ?added]]
              :where [?a :db/ident ?aname]]
           db-after)
       (map (fn [[e a v t b]] [({true :db/add false :db/retract} b) e a v]))))


;; For synchronous request/resonse cycle, the above should be enough to craft a response from the tx results.
;; For push architecture where we keep everything constantly up to date, we can subscribe to Datomic's tx
;; report queue, and fire off changes as we see fit.

(defn start-transaction-listener!
  [datomic-report-queue handler-function]
  (future
    (loop []
      ;; Right now datomic-report-queue is a java blocking queue; would be nice to make this dispatch and work
      ;; with a core.async tap on datomic's report queue (note that a tap would be necessary if you wanted to
      ;; have multiple consumers of the queue...
      ;; Where should we try catch if at all?
      (let [tx-report (.take datomic-report-queue)]
        ;; Will our handler ever need the full tx-report?
        (handler-function (tx-report-deltas tx-report))
        (recur)))))


;; In sente, you might write a function like this as a handler:

;;     (defn handle-transaction-report!
;;       [tx-deltas]
;;       ;; This handler is where you would eventually set up subscriptions
;;       (try
;;         (ws/broadcast! ws-connection [:datsync/tx-data tx-deltas])
;;         (catch Exception e
;;           (log/error "Failed to send transaction report to clients!")
;;           (.printStackTrace e))))
;;
;;     (start-transaction-listener! (d/tx-report-queue conn) handle-transaction-report!)


