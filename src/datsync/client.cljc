(ns datsync.client
  "# Datsync client API"
  (:require [datascript.core :as d]
            [datsync.impl.utils :as utils]))


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
  {:pre [(:db/id m)]}
  (let [m-id (:db/id m)]
    (mapcat
      (fn [[k v]]
        (normalized-tx-list-form :db/add m-id k v))
      (dissoc m :db/id))))

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
  {:datsync.tx/origin {:db/doc "The origin of the transaction. Should be either :datsync.tx.origin/remote or .../local"} 
   :datsync.remote.db/id {:db/unique :db.unique/identity
                          :db/cardinality :db.cardinality/one
                          :db/doc "The eid of the entity on the remote."}
   :datsync/diff {:db/valueType :db.type/ref
                  :db/cardinality :db.cardinality/one
                  :db/doc "An entity that represents all of the persisted changes to an entity that have not been confirmed yet."}
   ;; Navigration on the client; I guess the server may need to know this as well for it's scope... Maybe
   ;; redundant...
   :datsync/route {}})


(defn tx-schema-changes
  "Extracts the schema (presently defined as anything with an :db/ident attribute) from the translation tx."
  {:todo "Maybe this and other functions need to use the translation here, so they can be used as a more composable API."}
  [tx]
  (let [schema-eids (set (map second (filter (comp (partial = :db/ident) #(nth % 2)) tx)))]
    (filter (comp schema-eids second) tx)))


(defn ref-ident-or-value
  [db attr v]
  (or
    (and (integer? v)
         (d/q '[:find ?attr .
                :where [?attr :db/ident ?attr-ident]
                       [?attr :db/valueType ?attr-value-type]
                       [?attr-value-type :db/ident :db.type/ref]
                :in $ ?attr-ident]
              db attr)
         (d/q '[:find ?val-ident . :where [?val :db/ident ?val-ident] :in $ ?val] db v))
    v))


;; what info do we need:
;; * for each schema entity attribute/val pair:
;;   * what is the db/valueType of the attribute
;;   * if a ref, get the ref entity
;;   * if an ident, get that ident and replace as the origin value

(defn schema-with-changes
  "Takes the schema related tx-forms from an import tx (as given to us via the output of tx-schema-changes) and returns
  the merge of this schema data into the db's existing schema definition."
  {:todo "Implement ability to process/consider schema changes after database has already been set up"}
  [db tx]
  (let [tx (normalize-tx tx) ;; all non public functions should assume this already...
        db' (d/db-with db tx)]
    (->> tx
         (group-by second)
         (reduce
           (fn [schema-map [ident-eid ident-eid-tx]]
             (let [ident-keyword (some (fn [[op eid attr v]] (when (= attr :db/ident) v)) ident-eid-tx)]
               (reduce
                 ;; Should be taking into account op here; this assumes always add XXX
                 (fn [schema-map' [op eid attr v]]
                   (let [value (ref-ident-or-value db' attr v)]
                     ;; We can't assoc in any non ref valueType since DataScript will error (doesn't support)
                     (if-not (and (= attr :db/valueType) (not= value :db.type/ref))
                       (assoc-in schema-map' [ident-keyword attr] value)
                       schema-map')))
                 schema-map
                 ident-eid-tx)))
           (:schema db)))))




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

(defn replace-schema
  [db schema]
  ;; Should probably write this in terms of d/init-db, directly passing in the datoms; probably much more
  ;; efficient. But right now just want to get this working...
  (d/init-db (d/datoms db :eavt) schema))

(defn -transact-with-middleware!
  [conn middleware-fn tx-data tx-meta]
  {:pre [(d/conn? conn)]}
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
                        r (d/with db (middleware-fn db normalized-tx tx-meta) tx-meta)]
                      (reset! report r)
                      (:db-after r))))
    ;; Should possibly cull this together manually, since the db-before will contain the new schema... XXX
    @report))

;; ## datasync/transact! ?

;; This is really just a more general uber-transact thing; or some more general/powerful transaction behaviour
;; specification mechanism. We're also adding schema changes to 
(defn ^:export transact-with-middleware!
  "We need to override the d/transact! function so we can insert transaction middleware that automatically adds
  our tx metadata for us. We shouldn't have to think about this; it should be transparent, and we should be keeping
  track of where data originated from, etc."
  ([conn middleware-fn tx-data]
   (transact-with-middleware! conn middleware-fn tx-data nil))
  ([conn middleware-fn tx-data tx-meta]
   {:pre [(d/conn? conn)]}
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
            [[:db/add tx-id :datsync/sync? false]])))

;; XXX Mark the incoming bootstrap transaction as :in-sync

(defn get-or-assign-local-eid
  [db current-mapping eid]
  ;; If we already have a mapping in current-mappings use that
  (if-let [local-eid (current-mapping eid)]
    local-eid
    ;; If we don't, find out if we already have a mapping in the db
    (if-let [local-eid (d/q '[:find ?e . :where [?e :datsync.remote.db/id ?id] :in $ ?id] db eid)]
      ;; Then map that eid in the transaction with the local eid
      local-eid
      ;; If not, then make a new id, attempting to preserve ids wherever possible
      (if (d/q '[:find ?e . :where [?e _ _] [(= ?e ?eid)] :in $ ?eid] db eid)
        ;; Then generate new tempid to avoid conflict
        (d/tempid nil)
        ;; Otherwise use the foreign id
        eid))))

(defn get-ref-attrs-for-mapping
  "Returns all reference attribute idents that exist in database ..."
  [db tx]
  ;; The valueType is a ref type; so it's pointing to an entity with :db/ident :db.type/ref
  (let [db-ref-type-remote-eid (or 
                                   ;; If we don't already have something in the db, look for an (:db/ident
                                   ;; :db.type/ref) pair in tx-forms. (note: this means we have to note that
                                   ;; refs need to be references as value types based on an attribute in
                                   ;; schema transaction application, till fixed XXX)
                                   (some (fn [eid tx-forms]
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
        (d/q '[:find [?attr-ident ...]
               :in $ [?attr-ident ...] ?ref-type-remote-eid
               :where [?attr :db/ident ?attr-ident]
                      [?attr :db/valueType ?ref-type]
                      [?ref-type :datsync.remote.db/id ?ref-type-remote-eid]]
             db
             tx-attr-idents
             db-ref-type-remote-eid)
        ;; Anything that looks like a reference attribute in the new tx
        (->> tx
             (group-by second)
             (keep
               (fn [[eid tx-forms]]
                 ;; some transaction form for an entity that looks like it's defining a reference attribute
                 (some (fn [[op e a v :as tx-form]]
                         (when (and (= a :db/valueType)
                                    (= v db-ref-type-remote-eid))
                           ;; given we think this is a reference attribute, lets get the ident;
                           ;; Regarding above comment about reference attributes; this is where we need
                           ;; :db/ident in part of the tx... unless we want to fix it... XXX
                           (some (fn [[op e a v :as tx-form]]
                                   ;; returns the :db/ident, which passes up through the somes and keeps
                                   ;; above
                                   (when (= a :db/ident)
                                     v))
                                 tx-forms)))
                       tx-forms))))))))


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
  by looking for a match to an existing :datsync.remote.db/id. If it doesn't find one, it matches it with a negative one
  and adds an [:db/add eid :datsync.remote.db/id _] statement to the tx."
  [db tx]
  (let [eid-mapping (make-eid-mapping db tx)
        ref-attribute-idents (get-ref-attrs-for-mapping db tx)
        replace-eids (fn [tx' new-eid] (map (fn [[op _ a v]] [op new-eid a v]) tx'))]
    (vec (concat
           ;; First map over all the tx-forms and modify any eids
           (mapv
             (fn [[op e a v :as tx-form]]
               [op (eid-mapping e) a (if (ref-attribute-idents a) (eid-mapping v) v)])
             tx)
           ;; Then go in and add :datsync.remote.db/id attributes for new eids
           ;; First get all local eids involved in the transaction, and see which ones don't have the :datsync
           ;; attr
           (let [local-tx-eids (vals eid-mapping)
                 local-tx-eids-w-remote (set (d/q '[:find [?e ...] :in $ [?e ...] :where [?e :datsync.remote.db/id _]] db local-tx-eids))
                 local-tx-eids-wo-remote (filter (comp not local-tx-eids-w-remote) local-tx-eids)
                 reverse-mapping (into {} (map (fn [[k v]] [v k]) eid-mapping))]
             (mapv
               (fn [eid]
                 [:db/add eid :datsync.remote.db/id (reverse-mapping eid)])
               local-tx-eids-wo-remote))))))


;; Oh; we track what needs to get sent as novelty by what does not have a :datsync.remote.db/id yet, and what
;; is not flagged as :datsync/sync? false.

(defn wrap-remote-tx
  "Here we add data we need to track the origin of the data (that we don't need to )"
  ([db tx other-tx-meta]
   (let [tx (->> tx
                 normalize-tx
                 (translate-eids db))]
         ;remote-tx-meta {:datasync.tx/origin :datsync.tx.origin/remote}
         ;tx-report (d/with db tx (merge remote-tx-meta other-tx-meta))
     tx)))
     ;(concat tx
             ;(tx-metadata tx-report)))))

(defn apply-remote-tx!
  {:todo "Handle errors inside the transaction function. Should trust datomic, but fallback is a good idea."}
  [conn tx]
  (transact-with-middleware! conn wrap-remote-tx tx))

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
           (replace-schema db (utils/deep-merge schema schema-spec)))))

(defn apply-tx-data!
  ;; XXX This should really be apply-tx-datoms! or something; and we need to think clearly about how we
  ;; specify what goes in and comes out for the lib.
  "Apply tx-data datom vectors in [e a v t b] form. Wraps in wrap-remote-tx middleware via apply-remote-tx!"
  [conn tx-data]
  (apply-remote-tx!
    conn
    (map (fn [[e a v t b]]
           [({true :db/add, false :db/retract} b) e a v])
         tx-data)))




;; ## Sending data back
;; --------------------

;; Note that this doesn't currently deal well with (for example) having a tx entry where the eid is an ident,
;; because of what seems to be a bug in DataScript get-else. So you have to do that translation yourself to
;; get the local eid if you want to use this function.

;; This should be reworked in terms of multimethods, so you can create translations for your own tx functions,
;; just like you can for the client XXX
;; Needs to be reworked overall as well

(defn datomic-tx
  [conn tx]
  (let [tx (normalize-tx tx)
        ids (map second tx)
        db @conn
        translated-tx (d/q '[:find ?op ?dat-e ?a ?dat-v
                             :in % $ [[?op ?e ?a ?v]]
                             :where [(get-else $ ?e :datsync.remote.db/id ?e) ?dat-e]
                                    (datomic-value-trans ?v ?a ?dat-v)]
                           ;; Really want to be able to do an or clause here to get either the value back
                           ;; unchanged, or the reference :datsync.remote.db/id if a ref attribute
                           ;; Instead I'll use rules...
                           '[[(attr-type-ident ?attr-ident ?type-ident)
                              [?attr :db/ident ?attr-ident]
                              [?attr :db/valueType ?vt]
                              [?vt :db/ident ?type-ident]]
                             [(is-ref ?attr-ident)
                              [attr-type-ident ?attr-ident :db.type/ref]]
                             [(datomic-value-trans ?ds-v ?attr-ident ?datomic-v)
                              (is-ref ?attr-ident)
                              (> ?ds-v 0)
                              [?ds-v :datsync.remote.db/id ?datomic-v]]
                             [(datomic-value-trans ?ds-v ?attr-ident ?datomic-v)
                              (is-ref ?attr-ident)
                              (< ?ds-v 0)
                              [(ground ?ds-v) ?datomic-v]]
                             ;; Shit... really want to be able to use (not ...) here...
                             [(datomic-value-trans ?ds-v ?atrr-ident ?datomic-v)
                              (attr-type-ident ?attr-ident ?vt-ident)
                              (not= ?vt-ident :db.type/ref)
                              [(ground ?ds-v) ?datomic-v]]]
                           db tx)]
    (vec (remove #(= (nth % 2) :db/id) translated-tx))))



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

;; Should be careful about :db/retract above (assumes all :db/add)



