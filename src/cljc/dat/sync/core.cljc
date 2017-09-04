(ns dat.sync.core
  "# Datsync client API"
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require [clojure.core.async :as async
             :refer [>! <! #?@(:clj [go go-loop])]]
            [dat.remote :as remote]
            [datascript.db]
            [dat.reactor :as reactor]
            [dat.reactor.onyx :as oreactor]
            [dat.reactor.dispatcher :as dispatcher]
            [datascript.core :as ds]
            [dat.spec.protocols :as protocols]
            #?(:clj [datomic.api :as dapi])
            [com.stuartsierra.component :as component]
            [dat.spec.utils :refer [deep-merge cat-into deref-or-value]]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))

;; TODO: 8hrs get figwheel loading onyx compiled fns
;; TODO: 8hrs tx-cycle protection
;; TODO: 12hrs dirty peer
;; TODO: 8hrs persistent datascript replacement
;; TODO: 8hrs race condition debugging (async delay
;; TODO: 40hrs ios compatability
;; TODO: 40hrs datview onyx integration
;; TODO: 4hrs refactor/clean
;; TODO: 4hrs debug slf4j logging
;; ???: macro to register db function that works in both datascript and datomic. Also passes the api.
;; ???: make transaction fn calls compatible between datascript datomic

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Knowledge Base API
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; ???: are these still usefull?
(defn pull [{:as kb :keys [api db]} pull-expr eid]
  ((:pull api) db pull-expr eid))

(defn pull-many [{:as kb :keys [api db]} pull-expr eids]
  ((:pull-many api) db pull-expr eids))

(defn q [q-expr {:as kb :keys [api db]} & inputs]
  ;; ???: check :in for extra dbs and rulesets
  (apply (:q api) q-expr db inputs))

(defn entity [{:as kb :keys [api db]} eid]
  ((:entity api) db eid))

(defn with [{:as kb :keys [api db]} txs]
  ((:with api) db txs))

(defn transact! [{:as kb :keys [api conn]} txs]
  ((:transact! api) conn txs))

;; (defn listen! [{:as kb :keys [api]} & args]
;;   ;; ???: protocol instead
;;   (apply (:listen! api) args))

;; (defn filter* [{:as kb :keys [api db]} & args]
;;   ;; TODO: change to name filter, fix clash with clojure.core
;;   (apply (:filter api) db args))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; UNIFIED - treating server and client as peers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn gen-uuid []
  (ds/squuid))

(defn uuident-datom? [[_ a _ _ _]]
  (= a :dat.sync/uuident))

(defn identity-gdatom? [[[ident-attr _] attr _ _ _]]
  (= ident-attr attr))

;; (defn globalize-uuident [db eid]
;;   (:dat.sync/uuident (ds/entity db eid)))

(defn globalize-uuident2 [{:keys [entity]} db eid]
  (:dat.sync/uuident (entity db eid)))

(defn globalize-uuident3 [{:keys [entity]} db eid]
  (let [it (entity db eid)
        dbident (:db/ident it)]
    ;; TODO: support for all kinds of idents
    (if dbident
      [:db/ident dbident]
      [:dat.sync/uuident (:dat.sync/uuident it)])))

;; (defn localize-uuident [db euuid]
;;   [:dat.sync/uuident euuid])

(defn localize-uuident2 [{:keys [entity]} db euuid]
  [:dat.sync/uuident euuid])

(defn datom->tx [[e a v t add?]]
  [(if add? :db/add :db/retract) e a v t])

(defn datom><tx []
  (map datom->tx))

(defn ref? [{:keys [q]} db attr-ident]
  (or (#{:db/cardinality :db/valueType :db/unique} attr-ident) ;; so we know base-schema are refs before the base-schema is transacted into the db.
      ;;???: maybe have base-schema tied to a built in uuident we know at compile time (slower)? maybe have schema datoms fully integrated one datom at a time?
      (q
        '[:find ?attr .
          :in $ ?ident
          :where
          [?attr :db/ident ?ident]
          [?attr :db/valueType ?ref-enum]
          [?ref-enum :db/ident :db.type/ref]]
        db attr-ident)))

(defn many? [{:keys [q]} db attr-ident]
  (q
    '[:find ?attr .
      :in $ ?ident
      :where
       [?attr :db/ident ?ident]
       [?attr :db/cardinality ?many-enum]
       [?many-enum :db/ident :db.cardinality/many]]
    db attr-ident))

;; (defn datoms-identer [{:as local-db :keys [schema]} uuident]
;;   ;; ???: should be using rschema here or attrs-by?
;;   (map
;;     (fn [[e a v t add?]]
;;       (let [many? (= :db.cardinality/many (get-in schema [a :db/cardinality]))
;;             ref? (= :db.type/ref (get-in schema [a :db/valueType]))]
;;         [(uuident local-db e)
;;          a
;;          (if-not ref?
;;            v
;;            (if (and many? (coll? v))
;;              (map (partial uuident local-db) v)
;;              (uuident local-db v)))
;;          t
;;          add?]))))

;; (defn datom-identer2 [{:as api :keys [db conn]} uuident]
;;   (let [db-snap (db conn)] ;; !!!: for efficiency. may cause race conditions if used without care.
;;     (fn [[e a v t add?]]
;;       [(uuident api db-snap e)
;;        a
;;        (if-not (ref? api db-snap a)
;;          v
;;          (if (and (many? api db-snap a) (coll? v))
;;            (map (partial uuident api db-snap) v)
;;            (uuident api db-snap v)))
;;        t
;;        add?])))

(defn datom-identer3 [api db uuident]
  (fn [[e a v t add?]]
    [(uuident api db e)
     a
     (if-not (ref? api db a)
       v
       (if (and (many? api db a) (coll? v)) ;; ???: overkill? in datom for no coll as v i think
         (map (partial uuident api db) v)
         (uuident api db v)))
     t
     add?]))

(defn datom-attr-resolver3 [{:keys [entity]} db]
  (fn [[e a v t add?]]
    [e
     (if (keyword? a)
       a
       (:db/ident (entity db a)))
     v
     t
     add?]))

;; (defn datom><gdatom [db-or-conn]
;;   (datoms-identer (deref-or-value db-or-conn) globalize-uuident))

;; (defn datom><gdatom2 [datom-api]
;;   (comp
;;     (map (datom-attr-resolver2 datom-api))
;;     (map (datom-identer2 datom-api globalize-uuident2))))

(defn datom><gdatom3 [datom-api db]
  (comp
    (map (datom-attr-resolver3 datom-api db))
    (map (datom-identer3 datom-api db globalize-uuident2))))

(defn datom><gdatom4 [datom-api db]
  (comp
    (map (datom-attr-resolver3 datom-api db))
    (map (datom-identer3 datom-api db globalize-uuident3))))


;; (defn gdatom><datom [db-or-conn]
;;   (datoms-identer (deref-or-value db-or-conn) localize-uuident))

;; (defn gdatom><datom2 [datom-api]
;;   (map (datom-identer2 datom-api localize-uuident2)))

(defn gdatom><datom3 [datom-api db]
  (map (datom-identer3 datom-api db localize-uuident2)))

(defn datom><tx-uuidents []
  (comp
    (filter (fn [[_ a _ _ _]]
              (= a :dat.sync/uuident)))
    (filter (fn [[e _ v _ _]]
              (= e v)))
    (map (fn [[e a v t add?]]
           {;;???: :db/id #db/id[:db.part/user]
            :dat.sync/uuident v}))))

(defn datom><tx-uuidents2 []
  (comp
    (filter identity-gdatom?)
    (map (fn [[[ident-attr ident-value] a v t add?]]
           {;;???: :db/id #db/id[:db.part/user]
            ident-attr ident-value}))))

(defn middle-with [db tx-data {:as tx-meta :keys [datascript.db/tx-middleware]}]
  {:pre [(datascript.db/db? db)]}
  ;; ???: skipping filtered db check
  ((if tx-middleware (tx-middleware datascript.db/transact-tx-data) datascript.db/transact-tx-data)
   (datascript.db/map->TxReport
     {:db-before db
      :db-after  db
      :tx-data   []
      :tempids   {}
      :tx-meta   tx-meta})
   tx-data))



#?(:clj
(defn uuident-all-the-things* [db]
  (comp
    (map (fn [[eid _ _ _ _]] eid))
    (distinct)
    (map (partial dapi/entity db))
    (remove :db/ident)
    (remove :dat.sync/uuident)
    (map (fn [{:keys [db/id]}]
           [:db/add id :dat.sync/uuident (gen-uuid)])))))

(defn uuident-all-the-things
  "tx-middleware to add uuidents to any fresh entity that didn't get one assigned during the transaction."
  [transact]
  (fn [report txs]
    (let [{:as report :keys [db-after tx-data]} (transact report txs)]
      (log/debug "middling")
      (transact
        report
        (into
          []
          (comp
            (map (fn [[eid _ _ _ _]] eid))
            (distinct)
            (remove #(:dat.sync/uuident (ds/entity db-after %)))
            (map (fn [eid]
                   [:db/add eid :dat.sync/uuident (gen-uuid)])))
          tx-data)))))

(defn ^:export snap-transact [{:keys [txs dat.sync/db-snap]}]
  (assoc
    (middle-with
      db-snap
      txs
      (assoc (meta txs)
        :datascript.db/tx-middleware uuident-all-the-things))
    :dat.sync/event :dat.sync/tx-report))

(defn ^:export tx-report->gdatoms [api {:as seg :keys [tx-data db-after]}]
  {:dat.sync/event :dat.sync/gdatoms
   :datoms (into [] (datom><gdatom4 api db-after) tx-data)})

(defn hmmm-uuidents [db datoms]
  (let [[uuidatoms otherdatoms] (split-with identity-gdatom? datoms)]
    (into
      (map
        (fn [[_ _ uuident _ _]]
          {:db/id #db/id [:db.part/user]
           :dat.sync/uuident uuident})
        uuidatoms)
      (comp
           (remove (fn [[[_ ident-value] _ _ _ _]] (nil? ident-value))) ;; ???: why is there nils in here?
           (remove
             (fn [[e a v _ _]]
               (and (= a :dat.sync/uuident)
                    (= e v))))
;;            (gdatom><datom3 {:entity ds/entity
;;                             :q ds/q} %)
           (datom><tx))
      otherdatoms)))

(defn ^:export gdatoms->local-ds-txs [{:as seg :keys [datoms datomses]}]
  (for [datoms (or datomses [datoms])]
    (into seg
      {:dat.sync/event :dat.sync/local-txs
       :txs
       [[:db.fn/call
       #(into
         (into
           []
           (datom><tx-uuidents2)
           datoms) ;; ???: use partition probably, rather than into twice
         (comp
           (remove (fn [[[_ ident-value] _ _ _ _]] (nil? ident-value))) ;; ???: why is there nils in here?
           (remove identity-gdatom?)
;;            (remove
;;              (fn [[e a v _ _]]
;;                (and (= a :dat.sync/uuident)
;;                     (= e v))))
;;            (gdatom><datom3 {:entity ds/entity
;;                             :q ds/q} %)
           (datom><tx))
         datoms)]]})))

(def schema-uuident-query
  '[:find [?attr-uuid ...]
    :where
    [?attr-eid :db/ident]
    [?attr-eid :dat.sync/uuident ?attr-uuid]])

(def schema-map-query
  '[:find ?attr (pull ?attr-eid [*])
    :where
    [?attr-eid :db/ident ?attr]])

(def schema-eid-query
  '[:find [?attr-eid ...]
    :where
    [?attr-eid :db/ident ?attr-ident]])

(defn replace-schema
  [db schema]
  (ds/init-db (ds/datoms db :eavt) schema))

(def global-schema
  {:dat.sync/uuident {:db/ident :dat.sync/uuident
;;                      :db/valueType :db.type/uuid
                     :db/unique :db.unique/identity}})

(def schema-schema
  ;; TODO: :db/doc (maybe others) shouldn't really be considered a schema trait. It has no effect on schema capabilities.
  ;; TODO: add tools for accreting schema like attr aliasing, attr deprecation, etc.
  ;; TODO: handle differences in values allowed for :db/valueType and the like which datascript does not support. (maybe warn instead of error)
  {:db/ident {:db/ident :db/ident
;;               :db/valueType :db.type/keyword
              :db/unique :db.unique/identity}
   :db/cardinality {:db/ident :db/cardinality
                    :db/valueType :db.type/ref ;; enum
                    }
   :db/unique {:db/ident :db/unique
               :db/valueType :db.type/ref ;; enum
               }
   :db/valueType {:db/ident :db/valueType
                  :db/valueType :db.type/ref ;; enum
                  }
   :db/doc {:db/ident :db/doc
;;             :db/valueType :db.type/string
            }
   :db/index {:db/ident :db/index
;;               :db/valueType :db.type/boolean
              }
   :db/fulltext {:db/ident :db/fulltext
;;                  :db/valueType :db.type/boolean
                 }
   :db/isComponent {:db/ident :db/isComponent
;;                  :db/valueType :db.type/boolean
                    }
   :db/noHistory {:db/ident :db/noHistory
;;                  :db/valueType :db.type/boolean
                  }})

(defn test-schema-middleware []
  (let [conn (ds/create-conn)]
    (ds/transact!
      conn
      [{:db/ident :test
        :db/cardinality :db.cardinality/many}]
      {:datascript.db/tx-middleware datascript.db/schema-middleware})
    (ds/transact!
      conn
      [{:db/id -1
        :test :a}
       {:db/id -1
        :test :b}])
    @conn))

;;
;; ## Dataflow predicates
;;
(defn ^:export transaction?
  [event old-seg seg all-new]
  (contains? seg :txs))

(defn ^:export localize?
  [event old-seg seg all-new]
  ;; TODO: decide which segments get sent to server
  ;; TODO: handle all peers not just server
  (= (:dat.reactor/event seg) :dat.sync/gdatoms))

(defn ^:export legacy?
  [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.reactor/legacy))

(defn ^:export snapshot?
  [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.sync/snapshot))

(defn ^:export request-snapshot?
  [event old-seg seg all-new]
  (= (:dat.reactor/event seg) :dat.sync/request-snapshot))

(defn ^:export source-from-transactor?
[event old-seg seg all-new]
  (= (:dat.reactor/input seg) :dat.sync/tx-report))

(defn ^:export source-from-remote?
[event old-seg seg all-new]
  (= (:dat.reactor/input seg) :dat.sync/remote))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; SERVER - from server.clj
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
#?(:clj
(def remote-tx-schema
  [{:db/id -1
    :db/ident :dat.sync/remote-tx
    :db/fn #db/fn {:lang "clojure"
                   :params [db tx]
                   :code '()}}]))


;; Custom tx functions can be added by completing associated multimethod definitions.

;;     (defmethod dat.sync/translate-tx-form :your.app.tx/function-name
;;       [tempid-map [op arg1 arg2]
;;       [op (tempid-map arg1) arg2])

;; The first arg will be a map of the foreign ids to the local datomic ids. This can be used to translate eid
;; args in the tx call.

#?(:clj
(defn reverse-ref-attribute?
  [attr-kw]
  (= \_ (first (name attr-kw)))))

#?(:clj
(defn tempid-map
  ;; TODO Need to be able to customize partition here...
  ([e]
   (if (and (integer? e) (< e 0)) (dapi/tempid :db.part/user e) e))
  ([db a e]
   (if (and (keyword? a)
            ;; TODO Note; this doesn't cover reverse reference attributes...
            (or (reverse-ref-attribute? a)
                (dapi/q '[:find ?a . :in $ ?a-ident :where [?a :db/ident ?a-ident] [?a :db/valueType :db.type/ref]] db a))
            ;; for the attribute...
            (integer? e)
            (< e 0))
     (dapi/tempid :db.part/user e)
     e))))

;; Could maybe do something more efficient here for the tempid-map in the future.
;; Like preload all of tempid mappings in a relation that we put into a map, and pass around.
;; For now though, just separate queries to keep things simple.
#?(:clj
(defn apply-remote-tx!
  "Takes a client transaction and transacts it"
  [db-conn tx]
  ;; This is where we'd want to put security measures in place;
  ;; What other translation things do we need to do here?
  (let [db (dapi/db db-conn)
        tx' (mapv (partial translate-tx-form db tempid-map) tx)]
    (dapi/transact db-conn tx'))))

#?(:clj
(defn as-transaction
  "Translates a collection of datoms into a collection of :db/add & :db/retract statements, suitable for transaction.
  Leaves negative int -> dapi/tempid translation up to apply-remote-tx (XXX this should be modified)."
  ;; TODO Think about how we pass in partition here?
  ;; TODO Move over all negative int -> dapi/tempid translation here
  [datoms]
  (map
    (fn [[e a v _ b]]
      ;; Hmm... should we do something with the tx eid; save as tx-meta?
      ;; Maybe this should be upstream...
      [(if b :db/add :db/retract) e a v])
    datoms)))

#?(:clj
(defn apply-remote-datoms!
  {:todo "Handle errors inside the transaction function. Should trust datomic, but fallback is a good idea."}
  [conn datoms]
  (apply-remote-tx! conn (as-transaction datoms))))

;; If you're using regular http requests, you can just call this in your handler functions as you might
;; normally handle a form submission.
;; In sente, you might do something like:
;;
;;    (defmethod event-msg-handler :dat.sync.client/tx
;;      [{:as app :keys [datomic ws-connection]} {:as ev-msg :keys [id ?data]}]
;;      (let [tx-report @(dat.sync/apply-remote-tx! datomic ?data)]
;;        (println "Do something with:" tx-report)))



;; ## Pushing changes to client

;; Every time we get a transaction, we want to send the results of that transaction to every client.
;; Eventually we can get fancy with installing subscription middleware, so for each client we have a
;; specification of what they have "checked out", but this is just a starting point.

;; The easiest thing to do here is take the tx-data (datoms) produced by each transaction and convert those to
;; :db/add and :db/retract statements which we can send to clients.
(defn tx-report-deltas
  [{:as tx-report :keys [db-after tx-data]}]
  #?(:clj
      (->> tx-data
       (dapi/q '[:find ?e ?aname ?v ?t ?added
              :in $ [[?e ?a ?v ?t ?added]]
              :where [?a :db/ident ?aname]]
           db-after)
       (map (fn [[e a v t b]] [({true :db/add false :db/retract} b) e a v])))
      :cljs (throw "tx-report-deltas not supported in cljs")))


;; For synchronous request/resonse cycle, the above should be enough to craft a response from the tx results.
;; For push architecture where we keep everything constantly up to date, we can subscribe to Datomic's tx
;; report queue, and fire off changes as we see fit.
#?(:clj
(defn start-transaction-listener!
  [datomic-report-queue handler-function]
  (future
    (loop []
      ;; TODO Assumes queue is a java blocking queue; should dispatch to work with a core.async tap/chan for multiple queue consumers
      ;; Where should we try catch if at all?
      (let [tx-report (.take datomic-report-queue)]
        ;; Will our handler ever need the full tx-report?
        (handler-function (tx-report-deltas tx-report))
        (recur))))))


;; In sente, you might write a function like this as a handler:

;;     (defn handle-transaction-report!
;;       [tx-deltas]
;;       ;; This handler is where you would eventually set up subscriptions
;;       (try
;;         (ws/broadcast! ws-connection [:dat.sync/tx-data tx-deltas])
;;         (catch Exception e
;;           (log/error "Failed to send transaction report to clients!")
;;           (.printStackTrace e))))
;;
;;     (start-transaction-listener! (dapi/tx-report-queue conn) handle-transaction-report!)


;;


(def filter-tx-deltas identity)

(defn ^:export handle-legacy-tx-report [tx-report]
  (try
    (let [tx-deltas (filter-tx-deltas (tx-report-deltas tx-report))]
      (oreactor/legacy-event->seg [:dat.sync.client/recv-remote-tx tx-deltas]))
    (catch #?(:clj Exception :cljs :default) e
      (log/error "Failed to send transaction report to clients!")
      #?(:clj (.printStackTrace e)
         :cljs (.-stack e)))))

#?(:clj
(defn go-tx-report! [datomic-report-queue tx-chan]
  (future
    (loop []
      (let [tx-report (.take datomic-report-queue)]
        (async/put! tx-chan tx-report)
        (recur))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; CLIENT - from client.cljc
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;; Datsync let's us transparently mirror and syncronize a client side DataScript database with a server side
;; Datascript database.


;; ## Transaction normalization
;; ----------------------------

;; Maybe we should scrap this and assume we always have datoms? XXX

;; We need some ability to normalize our transactions so they make sense in DataScript and are fully queryable.
;; We can do this recursively as below.

(declare normalized-tx-list-form)

(defn normalized-tx-map-form
  "Takes a transaction map form and translates it into a collection of list forms"
  [m]
  ;; Ensure there is a :db/id key in the map
  ;{:pre [(:db/id m)]}
  (if-let [m-id (:db/id m)]
    (mapcat
      (fn [[k v]]
        (normalized-tx-list-form :db/add m-id k v))
      (dissoc m :db/id))
    (do
      (log/error "Tx map form does not have a :db/id:" m)
      (let [message "Tx map form doesn't not have a :db/id"]
        (throw
          #?(:clj  (IllegalArgumentException. message)
             :cljs (js/Error. message)))))))

(defn normalized-tx-list-form
  "Takes a transaction list form and normalizes it's values, such that any maps or collections are expanded
  into list forms and concat'd onto the argument list form."
  ([op e a v]
   (cond (map? v) (conj (normalized-tx-map-form v)
                        [op e a (:db/id v)])
         (coll? v) (mapcat (partial normalized-tx-list-form op e a) v)
         :else [[op e a v]]))
  ([[op e a v]] (normalized-tx-list-form op e a v)))

(defn normalized-tx-form
  [tx-form]
  (cond (map? tx-form) (normalized-tx-map-form tx-form)
        (coll? tx-form) (normalized-tx-list-form tx-form)))

;; This will be the main entry point for this functionality, and can be used as a safety measure on all the
;; functions below that operate on transactions.

(defn normalize-tx
  "Normalizes a transaction specification such that any map or :db.cardinality/many collection forms are expanded into list form"
  [tx]
  (mapcat normalized-tx-form tx))



;; ## Extracting schema
;; --------------------

;; We would like to be able to automatically extract the relevant schema datoms and translate them into a
;; DataScript compatible schema representation to get what aspects of the schema are supported.
;; However, we'll still keep this data as datoms as well, for queryability.

(def base-schema
  "The base satsync schema"
  ;; So we can use idents more effectively
  {:dat.sync.tx/origin {:db/doc "The origin of the transaction. Should be either :dat.sync.tx.origin/remote or .../local"}
   :dat.sync.remote.db/id {:db/unique :db.unique/identity
                           :db/doc "The eid of the entity on the remote."}
   :dat.sync/diff {:db/valueType :db.type/ref
                   :db/doc "An entity that represents all of the persisted changes to an entity that have not been confirmed yet."}
   :db/valueType {:db/valueType :db.type/ref}
   :db/unique {:db/valueType :db.type/ref}
   :db/cardinality {:db/valueType :db.type/ref}
   :e/type {:db/valueType :db.type/ref}
   :attribute.ref/types {:db/valueType :db.type/ref
                         :db/cardinality :db.cardinality/many}
   ;; Navigration on the client; I guess the server may need to know this as well for it's scope... Maybe
   ;; redundant...
   :dat.sync/route {}})

;; Going to rewrite this function; Wanted to make it more of a straight execution of a query for the new
;; schema based on a (ds/q '[:find (pull ...)]) & ds/with.
;; To that end

(def schema-idents [:db/valueType :db/cardinality :db/unique :e/type :attribute.ref/types])

(def ident-pulls
  (into {} (map (fn [ident] [ident [:db/ident]]) schema-idents)))

(def schema-query [:find [(list 'pull '?e ['* ident-pulls]) '...]
                   :where '[?e :db/ident]])

(defn replace-ident
  [entity attr]
  (update entity attr :db/ident))

(defn schema
  [db]
  ;; Why doesn't this query work? XXX Very strange; Pickup.
  (let [schema (ds/q schema-query db)]
    (into
      {}
      (map
        (fn [schema-entity]
          [(:db/ident schema-entity)
           ;; Fix up schema entry; First clean idents
           (-> (reduce replace-ident schema-entity schema-idents)
               ;; Then save the real valueType so we have it cached
               (assoc :dat.sync.remote.db/valueType (:db/valueType schema-entity))
               (update :db/valueType (fn [value-type-ident] (when (= value-type-ident :db.type/ref) value-type-ident))))])
        schema))))

(defn tx-schema-changes
  "Extracts the schema (presently defined as anything with an :db/ident attribute) from the translation tx, or if a db is specified,
  it's schema is used. It's assumed here the "
  ;; TODO Maybe this and other functions need to use the translation here, so they can be used as a more composable API
  ([db tx]
   (let [new-ident-changes (tx-schema-changes tx)
         old-ident-eids (set (ds/q '[:find [?e ...] :where [?e :db/ident]]))
         changes-to-old-eids (filter
                               (fn [[op e a v :as datom]]
                                 (try
                                   (old-ident-eids e)
                                   (catch #?(:clj Exception :cljs :default) e
                                     (log/error e "Failed to grok datom in tx-schema-changes"))))
                               tx)
         tx
         (->> changes-to-old-eids
              (concat new-ident-changes)
              distinct
              vec)]
     tx))
  ([tx]
   (let [schema-eids (set (map second (filter (comp (partial = :db/ident) #(nth % 2)) tx)))]
     (filter (comp schema-eids second) tx))))


(defn ref-ident-or-value
  [db attr v]
  (or
    (and (integer? v)
         (ds/q '[:find ?attr .
                :where [?attr :db/ident ?attr-ident]
                       [?attr :db/valueType ?attr-value-type]
                       [?attr-value-type :db/ident :db.type/ref]
                :in $ ?attr-ident]
              db attr)
         (ds/q '[:find ?val-ident . :where [?val :db/ident ?val-ident] :in $ ?val] db v))
    v))


;; what info do we need:
;; * for each schema entity attribute/val pair:
;;   * what is the db/valueType of the attribute
;;   * if a ref, get the ref entity
;;   * if an ident, get that ident and replace as the origin value


(defn schema-with-changes
  "Takes the schema related tx-forms from an import tx (as given to us via the output of tx-schema-changes) and returns
  the merge of this schema data into the db's existing schema definition."
  ;; TODO Implement ability to process/consider schema changes after database has already been set up
  [db tx]
  (log/info "Calling schema-with-changes")
  (let [tx (normalize-tx tx) ;; all non public functions should assume this already...
        db' (ds/db-with db tx)
        _ (log/info "With db")
        new-schema (schema db')]
    (log/info "Done with schema-with-changes")
    (log/info "Some schema changes..." (:optiq/last new-schema))
    (merge-with merge (:schema db) new-schema)))
    ;; Replaced all of this; Total nightmare
    ;(->> tx
         ;(group-by second)
         ;(reduce
           ;(fn [schema-map [ident-eid ident-eid-tx]]
             ;(let [ident-keyword (some (fn [[op eid attr v]] (when (= attr :db/ident) v)) ident-eid-tx)]
               ;(reduce
                 ;;; Should be taking into account op here; this assumes always add XXX
                 ;(fn [schema-map' [op eid attr v]]
                   ;(let [value (ref-ident-or-value db' attr v)]
                     ;;; We can't assoc in any non ref valueType since DataScript will error (doesn't support)
                     ;(if-not (and (= attr :db/valueType) (not= value :db.type/ref))
                       ;(assoc-in schema-map' [ident-keyword attr] value)
                       ;schema-map')))
                 ;schema-map
                 ;ident-eid-tx)))
           ;(:schema db)))))



;; ## Transaction middleware
;; -------------------------

;; We need some special magick transaction function that updates the datascript schema and applies middleware
;; to the transactions. The latter bit could probably be better served by transaction functions (didn't
;; realize they are supported in DataScript, just differently when I wrote this...). It's possible we could
;; tease the latter concern to actually use transaction functions, but for now this does the trick.

(defn comp-tx-middleware
  [db fns]
  (if (seq? fns)
    (apply comp (map #(partial % db) fns))
    identity))

;; deprecating...
(defn -transact-with-middleware!
  [conn middleware-fn tx-data tx-meta]
  {:pre [(ds/conn? conn)]}
  (let [normalized-tx (normalize-tx tx-data)
        report (atom nil)]
    (swap! conn (fn [db]
                  (let [db (if-let [schema-changes (seq (tx-schema-changes normalized-tx))]
                             ;; Handle case where we change the schema; to have indexes and stuff correct, we have to
                             ;; create a new database with the new schema and load in all the old data
                             (let [new-schema (schema-with-changes db schema-changes)
                                   new-db (replace-schema db new-schema)]
                               new-db)
                             ;; Otherwise, just use existing db...
                             db)
                        r (ds/with db (middleware-fn db normalized-tx tx-meta) tx-meta)]
                      (reset! report r)
                      (:db-after r))))
    ;; Should possibly cull this together manually, since the db-before will contain the new schema... XXX
    @report))

;; ## datasync/transact! ?

;; This is really just a more general uber-transact thing; or some more general/powerful transaction behaviour
;; specification mechanism. We're also adding schema changes to
;; Should deprecate or clean up
(defn ^:export transact-with-middleware!
  "We need to override the ds/transact! function so we can insert transaction middleware that automatically adds
  our tx metadata for us. We shouldn't have to think about this; it should be transparent, and we should be keeping
  track of where data originated from, etc."
  ([conn middleware-fn tx-data]
   (transact-with-middleware! conn middleware-fn tx-data nil))
  ([conn middleware-fn tx-data tx-meta]
   {:pre [(ds/conn? conn)]}
   (let [report (-transact-with-middleware! conn middleware-fn tx-data tx-meta)]
     (doseq [[_ callback] @(:listeners (meta conn))]
       (callback report))
     report)))


;; ## Transaction metadata
;; -----------------------

;; We'll be using first class transaction metadata to track what transactions need to be validated on the
;; server, which have been validated, which need to be retracted, and which should remain local without
;; sending to the server. At least eventually... nothing like that yet.

(defn tx-metadata
  "Given a tx-report, return transaction representing metadata about the transaction"
  [{:as tx-report :keys [db-before db-after tx-data tempids tx-meta]}]
  (let [tx-id (:db/current-tx tempids)]
    ;; First we add the transaction datoms
    (concat (map (fn [[k v]] [:db/add tx-id k v]) tx-meta)
            [[:db/add tx-id :dat.sync/sync? false]])))

;; XXX Mark the incoming bootstrap transaction as :in-sync

;; One way to speed things up would be to not try and keep ids the same
;; Would make a lot easier.
;; In short though, we're doing a ton of querying here.
;; Should see if there's a nice elegant way we can do all this stuff at once with just a query (or two)

(defn get-or-assign-local-eid
  [db current-mapping eid]
  ;; If we already have a mapping in current-mappings use that
  (if-let [local-eid (current-mapping eid)]
    local-eid
    ;; If we don't, find out if we already have a mapping in the db
    (if-let [local-eid (ds/q '[:find ?e . :where [?e :dat.sync.remote.db/id ?id] :in $ ?id] db eid)]
      ;; Then map that eid in the transaction with the local eid
      local-eid
      ;; Used to: If not, then make a new id, attempting to preserve ids wherever possible
      ;; Now; Always generate new (tempid), since otherwise, our identity assignments won't work out properly
      (ds/tempid nil))))


;; This is terribly broken... It makes all sorts of bad assumptions about things that are chainging in the P2P/identifiers
;; based approach. Will need to seriously rewrite and rethink this whole section. I think it's going to put a lot more of
;; the onux on tracking the

(defn get-ref-attrs-for-mapping
  "Returns all reference attribute idents that exist in database ..."
  [db tx]
  ;; The valueType is a ref type; so it's pointing to an entity with :db/ident :db.type/ref
  (let [db-ref-type-remote-eid (or ;; XXX Uhh... shouldn't there be something else in this or?
                                   ;; Specifically we should have here something that gets the...
                                   ;; Wait... maybe we don't need this in the identities version because we'll only have
                                   ;; eids on first payload (bootstrap). Everything else will resolve with lookups...
                                   ;(???)
                                   ;; If we don't already have something in the db, look for an (:db/ident
                                   ;; :db.type/ref) pair in tx-forms. (note: this means we have to note that
                                   ;; refs need to be references as value types based on an attribute in
                                   ;; schema transaction application, till fixed XXX)
                                   (some (fn [[eid tx-forms]]
                                           (when (some (fn [[op e a v t :as tx-form]]
                                                         (and (= a :db/ident)
                                                              (= v :db.type/ref)))
                                                       tx-forms)
                                             eid))
                                         (group-by second tx)))
        tx-attr-idents (set (map #(nth % 2) tx))]
    (set
      ;; There is an assumption here that references attributes must be specified as complete transactions,
      ;; and can't be build up in separate transactions... So no changing to/from ref types XXX
      (concat
        ;; Anything that looks like a reference attribute in the existing db
        ;; TODO Should get this from the (:schema db) instead, since this is more general, and doesn't force persisting of schema;
        ;; Though maybe this is necessary elsewhere? Need to at least consider doing this...
        (ds/q '[:find [?attr-ident ...]
               :in $ [?attr-ident ...] ?ref-type-remote-eid
               :where [?attr :db/ident ?attr-ident]
                      [?attr :db/valueType ?ref-type]
                      [?ref-type :dat.sync.remote.db/id ?ref-type-remote-eid]]
             db
             tx-attr-idents
             db-ref-type-remote-eid)
        ;; Anything that looks like a reference attribute in the new tx
        (->> tx
             (group-by second)
             (keep
               (fn [[eid tx-forms]]
                 ;; some transaction form for an entity that looks like it's defining a reference attribute
                 (when (some
                         (fn [[op e a v :as tx-form]]
                           (and (= a :db/valueType)
                                (= v db-ref-type-remote-eid)))
                         tx-forms)
                   ;; given we think this is a reference attribute, lets get the ident;
                   ;; Regarding above comment about reference attributes; this is where we need
                   ;; :db/ident in part of the tx... unless we want to fix it... XXX
                   (some
                     (fn [[op e a v :as tx-form]]
                       ;; returns the :db/ident, which passes up through the somes and keeps
                       ;; above
                       (when (= a :db/ident) v))
                     tx-forms)))))))))


(defn make-eid-mapping
  "Creates a map of remote eids to local eids for any id in the tx, providing consistent tempids where needed"
  [db tx]
  ;; First translate the main eids of the transactions
  (let [m (reduce
            (fn [m [eid eid-tx]]
              (assoc m eid (get-or-assign-local-eid db m eid)))
              ;; Group positionally by eids in tx forms
            {}
            (group-by second tx))
        ;; Then get this for translating reference values below
        ref-attribute-idents (get-ref-attrs-for-mapping db tx)]
    ;; Now translate reference values
    (->> tx
         ;; First, filter to just the tx-forms for attributes which are in ref-attribute-idents
         (filter (fn [[op e a v :as tx-form]]
                   (ref-attribute-idents a)))
         ;; Next we reduce over those forms, making local eid assignments for those values
         (reduce (fn [m' [op e a v :as tx-form]]
                   (assoc m' v (get-or-assign-local-eid db m' v)))
                 m))))


;; Translate eids in the system
(defn translate-eids
  "Takes a tx in canonical form and changes any incoming eids (including reference ids (WIP XXX)) to equivalents consistent with the local db. It does this
  by looking for a match to an existing :dat.sync.remote.db/id. If it doesn't find one, it matches it with a negative one
  and adds an [:db/add eid :dat.sync.remote.db/id _] statement to the tx."
  [db tx]
  (log/debug "Calling translate-eids")
  (let [eid-mapping (make-eid-mapping db tx)
        ref-attribute-idents (get-ref-attrs-for-mapping db tx)]
    (vec (concat
           ;; First map over all the tx-forms and modify any eids
           (mapv
             (fn [[op e a v :as tx-form]]
               [op (eid-mapping e) a (if (ref-attribute-idents a) (eid-mapping v) v)])
             tx)
           ;; Then go in and add :dat.sync.remote.db/id attributes for new eids
           ;; First get all local eids involved in the transaction, and see which ones don't have the
           ;; :dat.sync.remote.db/id attr
           (let [local-tx-eids (vals eid-mapping)
                 local-tx-eids-w-remote (set (ds/q '[:find [?e ...] :in $ [?e ...] :where [?e :dat.sync.remote.db/id _]] db local-tx-eids))
                 local-tx-eids-wo-remote (filter (comp not local-tx-eids-w-remote) local-tx-eids)
                 reverse-mapping (into {} (map (fn [[k v]] [v k]) eid-mapping))]
             (log/debug "n local eids w remote" (count local-tx-eids-w-remote))
             (log/debug "n local eids w/o remote" (count local-tx-eids-wo-remote))
             (mapv
               (fn [eid]
                 [:db/add eid :dat.sync.remote.db/id (reverse-mapping eid)])
               local-tx-eids-wo-remote))))))


;; Oh; we track what needs to get sent as novelty by what does not have a :dat.sync.remote.db/id yet, and what
;; is not flagged as :dat.sync/sync? false.

(defn wrap-remote-tx
  "Here we add data we need to track the origin of the data (that we don't need to )"
  ([db tx other-tx-meta]
   (let [tx (->> tx
                 normalize-tx
                 (translate-eids db))]
         ;tx-report (ds/with db tx (merge remote-tx-meta other-tx-meta))
     tx)))
     ;(concat tx
             ;(tx-metadata tx-report)))))

(defn apply-remote-tx!
  {:todo "Handle errors inside the transaction function. Should trust datomic, but fallback is a good idea."}
  ([conn tx]
   (apply-remote-tx! conn tx))
  ([conn tx tx-meta]
   (let [remote-tx-meta {:dat.sync.prov/agent :dat.sync/remote}
         tx-meta (merge remote-tx-meta tx-meta)]
     (transact-with-middleware! conn wrap-remote-tx tx tx-meta))))

;; So... if we want local schema, we have to decide whether or not we want it to be queryable.
;; If we do then we must use apply-schema-tx! below.
;; However, for queryability and consistency, this requires that instead of using keywords like
;; :db.cardinality/one and :db.type/ref, we use the entity ids representing those idents :-/
;; The way around this is to just transact to the :schema attribute of the conn directly.
;; The only cost of this is queryability of the local schema.
;; For now this is probably fine, but we'll eventually want to add some functionality that would perhaps let
;; us translate from the idents we know and love automatically to entity stubs which get filled in from the
;; datomic db.
;; A problem with this currently is that we're making some strong assumptions about the way that schema
;; related attributes are handled in transactions (specifically with refs; see comments above).
;; These problems will need to be solved in order for us to make things nicer here.

(defn apply-schema-tx!
  [conn schema-tx]
  (transact-with-middleware! conn (constantly schema-tx) schema-tx))

(defn update-schema!
  "Update schema using a DataScript friendly schema-spec"
  [conn schema-spec]
  ;; Don't have to worry about triggering listeners here as much
  (swap! conn
         (fn [{:as db :keys [schema]}]
           (replace-schema db (deep-merge schema schema-spec)))))

(defn datom-tx-form
  [datom]
  (let [[e a v t b] datom]
    [({true :db/add, false :db/retract} b) e a v]))

(defn datoms-as-tx
  [datoms]
  (map datom-tx-form datoms))

(defn apply-tx-data!
  ;; XXX This should really be apply-tx-datoms! or something; and we need to think clearly about how we
  ;; specify what goes in and comes out for the lib.
  "Apply tx-data datom vectors in [e a v t b] form. Wraps in wrap-remote-tx middleware via apply-remote-tx!"
  [conn tx-data]
  (apply-remote-tx!
    conn
    (datoms-as-tx tx-data)))




;; ## Sending data back
;; --------------------

;; Note that this doesn't currently deal well with (for example) having a tx entry where the eid is an ident,
;; because of what seems to be a bug in DataScript get-else. So you have to do that translation yourself to
;; get the local eid if you want to use this function.

;; This should be reworked in terms of multimethods, so you can create translations for your own tx functions,
;; just like you can for the client XXX
;; Needs to be reworked overall as well

;; TODO This should probably probably either be deprecated or rewritten to use our globalize fn

(defn remote-tx
  [db tx]
  (let [tx (->> (normalize-tx tx)
                (remove
                  (fn [[_ _ a]]
                    ;; This is something that should never exist on the server
                    (#{:dat.sync.remote.db/id :db/id} a))))
        translated-tx (ds/q '[:find ?op ?dat-e ?a ?dat-v
                             :in % $ [[?op ?e ?a ?v]]
                             :where [(get-else $ ?e :dat.sync.remote.db/id ?e) ?dat-e]
                             (remote-value-trans ?v ?a ?dat-v)]
                           ;; Really want to be able to do an or clause here to get either the value back
                           ;; unchanged, or the reference :dat.sync.remote.db/id if a ref attribute
                           ;; Instead I'll use rules...
                           '[[(attr-type-ident ?attr-ident ?type-ident)
                              [?attr :db/ident ?attr-ident]
                              [?attr :db/valueType ?vt]
                              [?vt :db/ident ?type-ident]]
                             [(is-ref ?attr-ident)
                              (attr-type-ident ?attr-ident :db.type/ref)]
                             [(remote-value-trans ?ds-v ?attr-ident ?remote-v)
                              (is-ref ?attr-ident)
                              (> ?ds-v 0)
                              [?ds-v :dat.sync.remote.db/id ?remote-v]]
                             [(remote-value-trans ?ds-v ?attr-ident ?remote-v)
                              (is-ref ?attr-ident)
                              (< ?ds-v 0)
                              [(ground ?ds-v) ?remote-v]]
                             ;; Shit... really want to be able to use (not ...) here...
                             [(remote-value-trans ?ds-v ?atrr-ident ?remote-v)
                              (attr-type-ident ?attr-ident ?vt-ident)
                              (not= ?vt-ident :db.type/ref)
                              [(ground ?ds-v) ?remote-v]]]
                           db tx)]
    (vec translated-tx)))


(defn ^:deprecated datomic-tx
  "Calls out to the remote-tx function; Deprecated."
  [db tx]
  (remote-tx db tx))


;; Now for our P2P/offline available/local first translation function
;; This will operate by translating eids from the datoms of a tx-report (tx-data) into lookup references, or into tempids
;; where app approapriate, based on the novelty relative to the db argument.

;; Relevant differences between Datomic/DataScript:
;; * Datomic needs a :db/id in transactions, but DataScript does not (both still resolve entities given identities though)
;; * We have to query for attr type differently in the two cases
;; * We can still query by attr-ident passed in as an arg in both cases
;; * Pulling :db/id on a nonexistent db id gives different results in datascript than it does in datomic
;;   * (ds/pull [:db/id :db/ident] x) -> {:db/id x}
;;   * (ds/pull [:db/ident] x) -> nil
;;   * (ds/pull [:db/id :db/ident] x) -> nil
;; * In DS You can transact a refid that isn't in any other datoms; will pull out, however not in Datomic
;; * You can call first on #datascript/Datoms but not datomic #datoms

;; Have to be careful changing the identifying attr of an entity; I think this necessitates transactionality
;; However, this is something that shouldn't really be frequently happening anyway... ids are ids

(defn schema-attrs-by
  [db attr-or-fn value]
  (->> db
       :schema
       (filter (fn [[_ attr-schema]]
                 (= value (attr-or-fn attr-schema))))
       (map first)
       set))


(defn globalize-datoms
  [db-before datoms {:keys [identity-attrs]}]
  "Given the state of the database before a set of datoms were asserted (as given by `(:db-before tx-report)`),
  translate the datoms such that local eids are replaced with lookup refs, or for new entities, tempids.

  By default, any `:db.unique/identity` attribute found associated with the eids in question is eligible to be selected.
  However, you can pass a final options hash argument with `:identity-attrs` mapping to a collection of attribute keywords
  (order asserts precedence) corresponding to desired identity attributes.

  Note that (for now) it is assumed that new entities (relative to db-before) assert some identity attribute other than
  the local id. This will soon be either validated, or 'fixed' via submission of a transaction which generates ids where
  needed, and submits a transaction which fixes these issues. Note that it is also assumed that whatever client receives
  this payload already has identity mappings for all data up to db-before. Otherwise, lookups may fail to resolve remotely."
  (log/info "Calling globalize datoms")
  (let [;; Figure out what our ref attributes are
        ref-attrs (schema-attrs-by db-before :db/valueType :db.type/ref)
        ;; Figure out what identity attributes we'll be looking for
        identity-attrs (or identity-attrs
                           ;; XXX Need to think properly about role of remote.db/id in light of all this...
                           (disj (schema-attrs-by db-before :db/unique :db.unique/identity) :dat.sync.remote.db/id))
        ;; Figure out all the eids needed in our translation
        eids (reduce
               (fn [eids [e a v]]
                 (let [eids (conj eids e)]
                   (if (get ref-attrs a)
                     (conj eids v)
                     eids)))
               #{}
               datoms)
        ;; Figure out our lookups
        eid-identities (->> eids
                            ;; XXX Could look for remote.db/id here as well, but for now...
                            (ds/pull-many db-before (into [:db/id] identity-attrs))
                            (map (fn [pull-data]
                                   [(:db/id pull-data)
                                    ;; return nil if no identity for eid (should either assert or fix downstream)
                                    (when-let [identity-attr
                                               (->> identity-attrs
                                                    (filter (partial get pull-data))
                                                    first)]
                                      [identity-attr (get pull-data identity-attr)])]))
                            (into {}))
        ;; Use our lookup if we have it, and a tempid (- eid) if we don't
        ;; The assumption is that only things that have ids can have been synced meaningfully with the server
        translate-eid (fn [e] (or (get eid-identities e) (- e)))
        translate-val (fn [a v] (if (ref-attrs a) (translate-eid v) v))
        datoms (map
                 (fn [[e a v t b]]
                   [(translate-eid e) a (translate-val a v) t b])
                 datoms)]
    ;; Can optionally go through either a process to fix or throw on missing lookups/identities
    ;; But for now...
    ;; Wait... have to review logic; do we need to do this after all?
    ;new-eids (->> eid-identities
    ;              (remove second)
    ;              (map first)
    ;              set
    datoms))

;; Note that the "fix" transaction in the docstring above needs to be a transaction function to avoid race conditions,
;; and the unlikely possibility of the round trip to Datomic taking longer than the local transaction (unlikely, but hey).
;; If that happened we would need to "merge" the entities (the local, and the one from Datomic with the identity)


(defn globalize-tx-report
  "Convenience function for globalizing a set of datoms from a tx report"
  ([tx-report]
   (globalize-tx-report tx-report {}))
  ([{:keys [db-before tx-data]} opts]
    ;; Note that here we ignore eids that are refs only (don't have their own datoms), since these are allowed in
    ;; Datomic anyway, and since downstream in globalize-datoms, we'll either end up throwing because of lack of
    ;; identity attr, or we'll generate one. Also, note that we are descructuring on [eid] for DS/Datomic compat.
   (globalize-datoms db-before tx-data opts)))



;; ## Staging changes and commits
;; ------------------------------

;; We'll eventually need to build staging into the datsync application stack.
;; Say someone opens a form for an entity and starts editing, but hasn't explicitly confirmed their changes.
;; We'd like for the data to be instantly accessible to any other forms open for the same entity on other
;; secondaries (client datascript dbs).
;; However, we'd like these changes not to affect what others are doing.
;; Maybe we forgo this for now...


;; We need to build in transactions...
;; So we can query across them for most recently committed datoms



;; ## Distributed checksum
;; -----------------------

;; We'd like a simple method for ensuring we haven't missed any transactions, and that everything is
;; consistent.
;; I think we can do this with a simple hashing function that takes some key k (perhaps the client id)
;; and computes k' = (hash [k :hash]).
;; The next member of the checksum sequence would be (hash [k' :hash]), etc.
;; This gives us a sequence of hash values which should let us simply ensure consistency.



;; ## Putting it all together?
;; ---------------------------


;; We put this all together with a few handler registrations so dat.reactor will do the right
;; thing, if being used in your system.

;; Sidenote: Should be careful about :db/retract above (assumes all :db/add)

(reactor/register-handler
  :dat.sync.client/apply-schema-changes
  (fn [_ db [_ schema-tx]]
    ;; Have to make sure schema with changes and replace schema don't need the :ident
    ;; Would be nice to log idents
    (log/info "Applying schema changes!")
    (let [new-schema (schema-with-changes db schema-tx)
          new-db (replace-schema db new-schema)]
      new-db)))

(reactor/register-handler
  :dat.sync.client/merge-schema
  (fn [_ db [_ schema]]
    ;; Have to make sure schema with changes and replace schema don't need the :ident
    ;; Would be nice to log idents
    (log/info "Applying schema changes!")
    (let [new-schema (deep-merge (:schema db) schema)
          new-db (replace-schema db new-schema)]
      new-db)))

;; May need to separate the schema and the "other" data, but for now, we'll leave it at this
(reactor/register-handler
  :dat.sync.client/recv-remote-tx
  (fn [app db [_ tx-data]]
    (log/info "Running remote-tx in :dat.sync/recv-remote-tx.")
    (let [normalized-tx (normalize-tx tx-data)
          translated-tx (translate-eids db normalized-tx)
          schema-changes (tx-schema-changes db translated-tx)
          remote-tx-meta {:dat.sync.prov/agent :dat.sync/remote}
          ]
      (reactor/resolve-to app db
        [(when (seq schema-changes) [:dat.sync.client/apply-schema-changes schema-changes])
         [:dat.reactor/local-tx translated-tx remote-tx-meta]]))
    ))

;; Triggers
(reactor/register-handler
  :dat.sync.client/send-remote-tx
  (fn [app db [_ tx tx-meta]]
    (let [translated-tx (remote-tx db tx)]
      ;; log directly in handler function to make sure a failure doesn't preclude log execution
      (log/info "Sending tx:" (pr-str (take 100 translated-tx)) "...")
      (reactor/resolve-to app db
        [[:dat.remote/send-event! [:dat.sync.remote/tx translated-tx tx-meta]]]))))

(reactor/register-handler
  :dat.remote/connected
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[:dat.sync.client/request-bootstrap true]])))

(reactor/register-handler
  :dat.sync.client/request-bootstrap
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Sending bootstrap request!")
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[:dat.remote/send-event! [:dat.sync.client/bootstrap true]]])))

(reactor/register-handler
  :dat.sync.client/bootstrap
  (fn [app db [_ tx-data]]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Received bootstrap!" (take 10 tx-data))
    (reactor/with-effect
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [:dat.reactor/dispatch! [:dat.sync.client.bootstrap/complete? true]]
      (reactor/resolve-to app db
        [[:dat.sync.client/recv-remote-tx tx-data]]))))


(defmulti event-msg-handler
  ; Dispatch on event-id
  (fn [app {:as event-msg :keys [id]}] id))

;; ## Event handlers

;; don't really need this... should delete
(defmethod event-msg-handler :chsk/ws-ping
  [_ _]
;;   (log/debug "Ping")
  )

;; Setting up our two main dat.sync hooks

;; General purpose transaction handler
(defmethod event-msg-handler :dat.sync.remote/tx
  [{:as app :keys [datom-api]} {:as event-msg :keys [id ?data]}]
  (log/info "tx recieved from client: " id)
  (let [tx-report @(apply-remote-tx! (:conn datom-api) ?data)]
    (println "Do something with:" tx-report)))


;; (defn datom->has-ident? [{:keys [entity]} db]
;;   (fn [[e _ _ _ _]]
;;     (:db/ident (entity db [:dat.sync/uuident e]))))

(defn datom->has-ident2? [{:keys [entity]} db]
  (fn [[e _ _ _ _]]
    (:db/ident (entity db e))))

(defn snapshot [{:as app :keys [transactor datom-api]}
                {:as event-msg :keys [dat.remote/peer-id]}]
  (log/info "Sending bootstrap message" peer-id)
  (let [db ((:db datom-api) (:conn datom-api))
        entity (:entity datom-api)
        snap (protocols/snapshot transactor)
        has-ident? (datom->has-ident2? datom-api db)
        datoms (into
                 []
                 (datom><gdatom4 datom-api db)
                 snap)
        uuidents (filter identity-gdatom? datoms)
        ident-datoms (filter has-ident? datoms)
        core-schema-datoms (filter (fn [[_ a _ _ _]] (#{:db/cardinality :db/valueType :db/unique :db/ident} a)) ident-datoms) ;; swap order w ident-datoms for more efficient algo
        other-schema-datoms (remove (fn [[_ a _ _ _]] (#{:db/cardinality :db/valueType :db/unique :db/ident} a)) ident-datoms)
;;         schema-datoms (filter datascript.db/schema-datom? datoms)
        other-datoms (remove #(or ;;(datascript.db/schema-datom? %)
                                  (identity-gdatom? %)
                                  (has-ident? %))
                             datoms)
;;         {:keys [uuidents schema-datoms other-datoms]}
;;         (group-by
;;           #(cond
;;               :uuidents
;;              (datascript.db/schema-datom? %) :schema-datoms
;;              :else :other-datoms)
;;           datoms)
        ;; ???: preserve some sort of datom order for datascript sake?
        ]
;;     (log/debug "nil-id-datoms:" (into [] (filter (fn [[[_ iv] _ _ _ _]]
;;                                                     (nil? iv))) datoms))
;;     (log/debug "cardinalities"
;;                (into
;;                  []
;;                  (comp
;;                    (filter
;;                      (fn [[_ a _ _ _]]
;;                        (= :db/cardinality a)))
;;                      (map (fn [[e _ v _ _]]
;;                             [(:db/ident (entity db e))
;;                              (:db/ident (entity db v))])))
;;                ident-datoms))
    ;; ???: snapshot gives sequence. what's the right way to handle this. where should batching occur?
;;     (log/debug "SNAP!!!"(vec (take 10 snap)))
;;     (log/debug "->" (vec (take 10 datoms)))
    (let [seg {:dat.remote/peer-id peer-id
               :dat.reactor/event :dat.sync/snapshot
               :datomses [uuidents core-schema-datoms other-schema-datoms other-datoms]
               }]
;;       (log/debug "snap-seg" seg)
      seg
        )))[:test
            []]

#?(:clj
;; We handle the bootstrap message by simply sending back the bootstrap data
(defmethod event-msg-handler :dat.sync.client/bootstrap
  ;; What is send-fn here? Does that wrap the uid for us? (0.o)
  [{:as app :keys [transactor remote datom-api]} {:as event-msg :keys [dat.remote/peer-id]}]
  (async/put!
    (protocols/send-chan remote)
    (snapshot app event-msg))))

;; Fallback handler; should send message saying I don't know what you mean
(defmethod event-msg-handler :default ; Fallback
  [app {:as event-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (log/warn "Unhandled event:" id))

(defn legacy-server-segment! [app seg]
  (event-msg-handler app seg))

;; (defn ^:export legacy-localize-txs [{:keys [txs]}]
;;   (let [normalized-tx (normalize-tx txs)
;;         translated-tx (translate-eids db normalized-tx)
;;         schema-changes (tx-schema-changes db translated-tx)
;;         remote-tx-meta {:dat.sync.prov/agent :dat.sync/remote}
;;         ]
;; ;;     (reactor/resolve-to app db
;; ;;                         [(when (seq schema-changes) [:dat.sync.client/apply-schema-changes schema-changes])
;;     ;; TODO: make a schema changes wire
;;   [{:dat.reactor/event :dat.reactor/legacy
;;     :event [:dat.sync.client/apply-schema-changes schema-changes]
;;     :id schema-changes}
;;   {:dat.reactor/event :dat.sync/local-tx
;;    :txs (with-meta translated-tx remote-tx-meta)}]))

(defn ^:export could-update-schema [seg]
  (let [seg (update-in seg
                       [:tx-meta :datascript.db/tx-middleware]
                       #(comp datascript.db/schema-middleware (or % identity)))]
    seg))

(defn transact-segment! [transactor {:as seg :keys [txs tx-meta]}]
;;   (log/info "transacting" seg)
  (protocols/transact! transactor txs tx-meta)
  (log/info "db-after" @(:conn transactor))
  )

;; This is just a little glue; A system component that plugs in to pipe messages from the remote to the
;; dispatch chan

(defrecord Datsync [dispatcher remote]
  component/Lifecycle
  (start [component]
      (log/info "Starting Datsync component")
;;       (dispatcher/dispatch! dispatcher [:dat.sync.client/merge-schema base-schema])
      ;; This should get triggered by successful connection to the websocket
      (log/info "Dispatched schema changes")
      (async/pipeline
        1
        (protocols/send-chan dispatcher)
        ;; FIXME: conform to re-frame
;;         (map (fn [ev] [:dat.remote.impl.sente/event (:event ev)]))
        (map #(assoc %
                :dat.reactor/event :dat.reactor/legacy
                :dat.sync/event-source :dat.sync/remote))
        (protocols/recv-chan remote))
      component)
  (stop [component]
    component))

(defn new-datsync []
  (map->Datsync {}))


(def onyx-batch-size 20)

(def base-catalog
  [{:onyx/type :function
    :onyx/name :dat.sync/snap-transact
    :onyx/fn ::snap-transact
    :onyx/batch-size onyx-batch-size}
   {:onyx/type :function
    :onyx/name ::snapshot
    :onyx/fn ::snapshot
    :onyx/batch-size onyx-batch-size}
    ])

(defrecord DatsyncClient [dispatcher remote reactor transactor datom-api conn]
  component/Lifecycle
  (start [component]
    (let [component (assoc component :conn (or conn (:conn datom-api))) ;; FIXME: handlers should get the conn from db themselves
          onyx-batch-size 20]
      (log/info "Starting Datsync component")
;;       (dispatcher/dispatch! dispatcher [:dat.sync.client/merge-schema base-schema])
      (oreactor/expand-job!
        reactor
        ::base-job
        {:catalog base-catalog})
         (oreactor/expand-job!
        reactor
        ::job
        {:catalog
           [{:onyx/type :output
             :onyx/name :dat.reactor/legacy
             :dat.reactor/chan (oreactor/handler-chan!
                                 component
                                oreactor/legacy-segment!) ;; ???: idempotent
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan dispatcher)
             :onyx/name :dat.view.dom/event}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan dispatcher)
             :onyx/name :dat.view.dom/render}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan remote)
             :onyx/name :dat.remote/recv}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan remote)
             :onyx/name :dat.remote/send}
;;            FIXME: looping txes {:onyx/type :input
;;              :onyx/batch-size onyx-batch-size
;;              :dat.reactor/chan (protocols/recv-chan transactor)
;;              :onyx/name :dat.sync/tx-report}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (oreactor/handler-chan! transactor transact-segment!) ;;(protocols/send-chan transactor)
             :onyx/name :dat.sync/transact}
            {:onyx/type :function
             :onyx/name :dat.sync/localize
             :onyx/fn ::gdatoms->local-ds-txs
             :onyx/batch-size onyx-batch-size}
             {:onyx/type :function
              :onyx/name ::could-update-schema
              :onyx/fn ::could-update-schema
              :onyx/batch-size onyx-batch-size}
;;             {:onyx/type :function
;;              :onyx/name :dat.sync/legacy-localize-txs
;;              :onyx/fn ::legacy-localize-txs
;;              :onyx/batch-size onyx-batch-size}
            {:onyx/type :function
             :onyx/name :dat.sync/globalize
             :onyx/fn ::tx-report->gdatoms
             :onyx/batch-size onyx-batch-size
             ::api datom-api
             :onyx/params [::api]}
             ]
         :workflow
           [
            [:dat.view.dom/event :dat.reactor/legacy]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
             [:dat.remote/recv ::could-update-schema] [::could-update-schema :dat.sync/localize]
;;             FIXME: stop tx looping [:dat.sync/tx-report :dat.sync/handle-legacy-tx-report] [:dat.sync/handle-legacy-tx-report :dat.remote/send]
            [:dat.view.dom/event :dat.sync/snap-transact] [:dat.sync/snap-transact :dat.sync/globalize] [:dat.sync/globalize :dat.remote/send]
;;              [:dat.remote/recv :dat.sync/legacy-localize-txs]
;;              [:dat.sync/legacy-localize-txs :dat.reactor/legacy]
;;              [:dat.sync/legacy-localize-txs :dat.sync/transact]
;;              [:dat.remote/recv :dat.reactor/log]
            ]
           :flow-conditions
           [{:flow/from :dat.view.dom/event
             :flow/to [:dat.sync/snap-transact]
             :flow/predicate ::source-from-transactor?}
            {:flow/from :dat.remote/recv
             :flow/to [::could-update-schema]
             :flow/predicate ::snapshot?}
;;             {:flow/from :dat.remote/recv
;;              :flow/to [:dat.sync/legacy-localize-txs :dat.reactor/log]
;;              :flow/predicate ::snapshot?}
;;             {:flow/from :dat.sync/legacy-localize-txs
;;              :flow/to [:dat.reactor/legacy]
;;              :flow/predicate ::legacy?}
;;             {:flow/from :dat.sync/legacy-localize-txs
;;              :flow/to [:dat.sync/transact]
;;              :flow/predicate ::transaction?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.sync/localize]
             :flow/predicate ::localize?}
            {:flow/from :dat.view.dom/event
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            ]
         })
      ;; This should get triggered by successful connection to the websocket
;;       (log/info "Dispatched schema changes")
;;       (async/pipeline
;;         1
;;         (protocols/send-chan dispatcher)
;;         ;; FIXME: conform to re-frame
;; ;;         (map (fn [ev] [:dat.remote.impl.sente/event (:event ev)]))
;;         (map #(assoc %
;;                 :dat.reactor/event :dat.reactor/legacy
;;                 :dat.sync/event-source :dat.sync/remote))
;;         (protocols/recv-chan remote))
      component))
  (stop [component]
    (assoc component :conn nil)))

(defn new-datsync-client []
  (map->DatsyncClient {}))

(defrecord DatsyncServer [dispatcher remote transactor datom-api reactor]
  component/Lifecycle
  (start [component]
    (let [] ;; ???: kill-chan
      (log/info "Starting Datsync Server component")
      (oreactor/expand-job!
        reactor
        ::base-job
        {:catalog base-catalog})
      (oreactor/expand-job!
        reactor
        ::job
        {:catalog
           [{:onyx/type :output
             :onyx/name :dat.reactor/legacy
             :dat.reactor/chan (oreactor/handler-chan!
                                 component
                                legacy-server-segment!) ;; ???: idempotent
             :onyx/batch-size onyx-batch-size}

            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan dispatcher)
             :onyx/name :dat.view.dom/event}
;;             {:onyx/type :output
;;              :onyx/batch-size onyx-batch-size
;;              :dat.reactor/chan (protocols/send-chan dispatcher)
;;              :onyx/name :dat.view.dom/render}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan remote)
             :onyx/name :dat.remote/recv}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/send-chan remote)
             :onyx/name :dat.remote/send}
            {:onyx/type :input
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (protocols/recv-chan transactor)
             :onyx/name :dat.sync/tx-report}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (oreactor/handler-chan! transactor transact-segment!) ;; not implemented: (protocols/send-chan transactor)
             :onyx/name :dat.sync/transact}
            {:onyx/type :function
             :onyx/name :dat.sync/localize
             :onyx/fn ::gdatoms->local-ds-txs
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :function
             :onyx/name :dat.sync/globalize
             :onyx/fn ::tx-report->gdatoms
             :onyx/batch-size onyx-batch-size
             ::api datom-api
             :onyx/params [::api]}
            {:onyx/type :function
             :onyx/name :dat.sync/handle-legacy-tx-report
             :onyx/fn ::handle-legacy-tx-report
             :onyx/batch-size onyx-batch-size}
             ]
           :workflow
           [
            [:dat.view.dom/event :dat.reactor/legacy]
            [:dat.remote/recv :dat.reactor/legacy]
            [:dat.remote/recv ::snapshot] [::snapshot :dat.remote/send]
            [:dat.remote/recv :dat.sync/localize] [:dat.sync/localize :dat.sync/transact]
            [:dat.sync/tx-report :dat.sync/handle-legacy-tx-report] [:dat.sync/handle-legacy-tx-report :dat.remote/send]
            [:dat.view.dom/event :dat.sync/snap-transact] [:dat.sync/snap-transact :dat.sync/globalize] [:dat.sync/globalize :dat.remote/send]
            ]
           :flow-conditions
           [{:flow/from :dat.remote/recv
             :flow/to [::snapshot]
             :flow/predicate ::request-snapshot?}
            {:flow/from :dat.view.dom/event
             :flow/to [:dat.sync/snap-transact]
             :flow/predicate ::source-from-transactor?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.sync/localize]
             :flow/predicate ::localize?}
            {:flow/from :dat.view.dom/event
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}
            {:flow/from :dat.remote/recv
             :flow/to [:dat.reactor/legacy]
             :flow/predicate ::legacy?}]
           })
      component))
  (stop [component]
    component))

(defn new-datsync-server []
  (map->DatsyncServer {}))

;; RACE_CONDITON:
;; This seems to occur on the server mostly when you start the client in the middle of the server start cycle
;; ???: need blocking async in clojure?
;; Exception in thread "async-dispatch-4" java.lang.RuntimeException: java.lang.Exception: Not supported: class clojure.lang.Delay
;; 	at com.cognitect.transit.impl.WriterFactory$1.write(WriterFactory.java:60)
;; 	at cognitect.transit$write.invokeStatic(transit.clj:149)
;; 	at cognitect.transit$write.invoke(transit.clj:146)
;; 	at taoensso.sente.packers.transit$fn__38621$fn__38622$fn__38623$fn__38624.invoke(transit.cljc:58)
;; 	at taoensso.sente.packers.transit.TransitPacker.pack(transit.cljc:94)
;; 	at taoensso.sente$pack.invokeStatic(sente.cljc:223)
;; 	at taoensso.sente$pack.invoke(sente.cljc:219)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$flush_buffer_BANG___36639.invoke(sente.cljc:437)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$fn__36983$state_machine__9551__auto____37050$fn__37052.invoke(sente.cljc:491)
;; 	at taoensso.sente$make_channel_socket_server_BANG_$send_fn__36632$fn__36983$state_machine__9551__auto____37050.invoke(sente.cljc:489)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine.invokeStatic(ioc_macros.clj:973)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine.invoke(ioc_macros.clj:972)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine_wrapped.invokeStatic(ioc_macros.clj:977)
;; 	at clojure.core.async.impl.ioc_macros$run_state_machine_wrapped.invoke(ioc_macros.clj:975)
;; 	at clojure.core.async.impl.ioc_macros$take_BANG_$fn__9569.invoke(ioc_macros.clj:986)
;; 	at clojure.core.async.impl.channels.ManyToManyChannel$fn__4501.invoke(channels.clj:265)
;; 	at clojure.lang.AFn.run(AFn.java:22)
;; 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
;; 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
;; 	at java.lang.Thread.run(Thread.java:748)
;; Caused by: java.lang.Exception: Not supported: class clojure.lang.Delay
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:176)
;; 	at com.cognitect.transit.impl.JsonEmitter.emitMap(JsonEmitter.java:158)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitMap(AbstractEmitter.java:70)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:166)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:87)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitTagged(AbstractEmitter.java:34)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitEncoded(AbstractEmitter.java:59)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:169)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.JsonEmitter.emitMap(JsonEmitter.java:158)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitMap(AbstractEmitter.java:70)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:166)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.emitArray(AbstractEmitter.java:82)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshal(AbstractEmitter.java:164)
;; 	at com.cognitect.transit.impl.AbstractEmitter.marshalTop(AbstractEmitter.java:193)
;; 	at com.cognitect.transit.impl.JsonEmitter.emit(JsonEmitter.java:28)
;; 	at com.cognitect.transit.impl.WriterFactory$1.write(WriterFactory.java:57)
;; 	... 19 more



