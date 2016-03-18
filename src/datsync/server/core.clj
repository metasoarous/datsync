(ns datsync.server.core
  (:require [datomic.api :as d]))


;; ## Applying changes from clients

;; Multimethod dispatch on op is perfect for securing what transaction functions are possible.
;; Nothing gets called unless you said it can.

;; We need a function we can call to transact a tx-message from the client

(defmulti translate-tx-form
  (fn [db tempid-map [op]] op))

(defmethod translate-tx-form :db/add
  [db tempid-map [op e a v]]
  [op (tempid-map e) a (tempid-map db a v)])

(defmethod translate-tx-form :db/retract
  [db tempid-map [op e a v]]
  [op (tempid-map e) a (tempid-map db a v)])

(defmethod translate-tx-form :db.fn/retractEntity
  [db tempid-map [op e]]
  [op (tempid-map e)])

;; Should build a transaction function to do this thing but make it optional (performance concerns; don't want
;; to have to restrict all to go through transaction; should do reactions or something here to acheive an
;; alternate approach to consistency?)
(def remote-tx-schema
  [{:db/id -1
    :db/ident :datsync/remote-tx
    :db/fn #db/fn {:lang "clojure"
                   :params [db tx]
                   :code '()}}])


;; Custom tx functions can be added by completing associated multimethod definitions.

;;     (defmethod datsync/translate-tx-form :your.app.tx/function-name
;;       [tempid-map [op arg1 arg2]
;;       [op (tempid-map arg1) arg2])

;; The first arg will be a map of the foreign ids to the local datomic ids. This can be used to translate eid
;; args in the tx call.


(defn reverse-ref-attribute?
  [attr-kw]
  (= \_ (first (name attr-kw))))

(defn tempid-map
  ([e]
   (if (and (integer? e) (< e 0)) (d/tempid :db.part/user e) e))
  ([db a e]
   (if (and (keyword? a)
            ;; Note; this doesn't cover reverse reference attributes...
            (or (reverse-ref-attribute? a)
                (d/q '[:find ?a . :in $ ?a-ident :where [?a :db/ident ?a-ident] [?a :db/valueType :db.type/ref]] db a))
            ;; for the attribute...
            (integer? e)
            (< e 0))
     (d/tempid :db.part/user e)
     e)))

;; Could maybe do something more efficient here for the tempid-map in the future.
;; Like preload all of tempid mappings in a relation that we put into a map, and pass around.
;; For now though, just separate queries to keep things simple.

(defn transact-from-client!
  [db-conn tx]
  ;; This is where we'd want to put security measures in place;
  ;; What other translation things do we need to do here?
  (let [db (d/db db-conn)
        tx' (mapv (partial translate-tx-form db tempid-map) tx)]
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


