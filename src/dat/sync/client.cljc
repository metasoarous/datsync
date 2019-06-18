(ns dat.sync.client
  "# Datsync client API"
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [dat.remote :as remote]
            [dat.reactor :as reactor]
            [dat.reactor.dispatcher :as dispatcher]
            [dat.sync.utils :as utils]
            [dat.sync]
            [datascript.core :as d]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))


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


;; Going to rewrite this function; Wanted to make it more of a straight execution of a query for the new
;; schema based on a (d/q '[:find (pull ...)]) & d/with.
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
  (let [schema (d/q schema-query db)]
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
         old-ident-eids (set (d/q '[:find [?e ...] :where [?e :db/ident]]))
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
  ;; TODO Implement ability to process/consider schema changes after database has already been set up
  [db tx]
  (log/info "Calling schema-with-changes")
  (let [tx (normalize-tx tx) ;; all non public functions should assume this already...
        db' (d/db-with db tx)
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

(defn replace-schema
  [db schema]
  ;; Should probably write this in terms of d/init-db, directly passing in the datoms; probably much more
  ;; efficient. But right now just want to get this working...
  (d/init-db (d/datoms db :eavt) schema))

;; deprecating...
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
;; Should deprecate or clean up
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
    (if-let [local-eid (d/q '[:find ?e . :where [?e :dat.sync.remote.db/id ?id] :in $ ?id] db eid)]
      ;; Then map that eid in the transaction with the local eid
      local-eid
      ;; Used to: If not, then make a new id, attempting to preserve ids wherever possible
      ;; Now; Always generate new (tempid), since otherwise, our identity assignments won't work out properly
      (d/tempid nil))))


;; This is terribly broken... It makes all sorts of bad assumptions about things that are chainging in the P2P/identifiers
;; based approach. Will need to seriously rewrite and rethink this whole section. I think it's going to put a lot more of
;; the onux on tracking the

;(defn get-ref-attrs-for-mapping
  ;"Returns all reference attribute idents that exist in database ..."
  ;[db tx]
  ;;; The valueType is a ref type; so it's pointing to an entity with :db/ident :db.type/ref
  ;(let [db-ref-type-remote-eid (or ;; XXX Uhh... shouldn't there be something else in this or?
                                   ;;; Specifically we should have here something that gets the...
                                   ;;; Wait... maybe we don't need this in the identities version because we'll only have
                                   ;;; eids on first payload (bootstrap). Everything else will resolve with lookups...
                                   ;;(???)
                                   ;;; If we don't already have something in the db, look for an (:db/ident
                                   ;;; :db.type/ref) pair in tx-forms. (note: this means we have to note that
                                   ;;; refs need to be references as value types based on an attribute in
                                   ;;; schema transaction application, till fixed XXX)
                                   ;(some (fn [[eid tx-forms]]
                                           ;(when (some (fn [[op e a v t :as tx-form]]
                                                         ;(and (= a :db/ident)
                                                              ;(= v :db.type/ref)))
                                                       ;tx-forms)
                                             ;eid))
                                         ;(group-by second tx)))
        ;tx-attr-idents (set (map #(nth % 2) tx))]
    ;(set
      ;;; There is an assumption here that references attributes must be specified as complete transactions,
      ;;; and can't be build up in separate transactions... So no changing to/from ref types XXX
      ;(concat
        ;;; Anything that looks like a reference attribute in the existing db
        ;;; TODO Should get this from the (:schema db) instead, since this is more general, and doesn't force persisting of schema;
        ;;; Though maybe this is necessary elsewhere? Need to at least consider doing this...
        ;(d/q '[:find [?attr-ident ...]
               ;:in $ [?attr-ident ...] ?ref-type-remote-eid
               ;:where [?attr :db/ident ?attr-ident]
                      ;[?attr :db/valueType ?ref-type]
                      ;[?ref-type :dat.sync.remote.db/id ?ref-type-remote-eid]]
             ;db
             ;tx-attr-idents
             ;db-ref-type-remote-eid)
        ;;; Anything that looks like a reference attribute in the new tx
        ;(->> tx
             ;(group-by second)
             ;(keep
               ;(fn [[eid tx-forms]]
                 ;;; some transaction form for an entity that looks like it's defining a reference attribute
                 ;(when (some
                         ;(fn [[op e a v :as tx-form]]
                           ;(and (= a :db/valueType)
                                ;(= v db-ref-type-remote-eid)))
                         ;tx-forms)
                   ;;; given we think this is a reference attribute, lets get the ident;
                   ;;; Regarding above comment about reference attributes; this is where we need
                   ;;; :db/ident in part of the tx... unless we want to fix it... XXX
                   ;(some
                     ;(fn [[op e a v :as tx-form]]
                       ;;; returns the :db/ident, which passes up through the somes and keeps
                       ;;; above
                       ;(when (= a :db/ident) v))
                     ;tx-forms)))))

;; This is a much cleaner and simpler implementation of the above, but
;; * is specific to datascript, relying on `(:schema db)`
;; * does not take into account the possibility of new schema in tx
;;
;; For the latter, thinking it makes sense to move towards handling these changes explicitly as a separate part of the processing flow, so that by the time they get here, the db schema has already been updated
;; Generalization to other kind of dbs will have to come later as well
(defn get-ref-attrs-for-mapping
  [db]
  (->> db :schema (filter (fn [[ident schema]] (= (:db/valueType schema) :db.type/ref))) (map first) set))

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
        ref-attribute-idents (get-ref-attrs-for-mapping db)
        ref-attribute-idents (->> db :schema (filter (fn [[ident schema]] (= (:db/valueType schema) :db.type/ref))) (map first) set)]
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
        ref-attribute-idents (get-ref-attrs-for-mapping db)]
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
                 local-tx-eids-w-remote (set (d/q '[:find [?e ...] :in $ [?e ...] :where [?e :dat.sync.remote.db/id _]] db local-tx-eids))
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
         ;tx-report (d/with db tx (merge remote-tx-meta other-tx-meta))
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
           (replace-schema db (utils/deep-merge schema schema-spec)))))

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
        translated-tx (d/q '[:find ?op ?dat-e ?a ?dat-v
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
;;   * (d/pull [:db/id :db/ident] x) -> {:db/id x}
;;   * (d/pull [:db/ident] x) -> nil
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
  needed, and submits a transaction which fixes these issues. Note that it is also assumed that whatever client recieves
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
                            (d/pull-many db-before (into [:db/id] identity-attrs))
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
  ::apply-schema-changes
  (fn [_ db [_ schema-tx]]
    ;; Have to make sure schema with changes and replace schema don't need the :ident
    ;; Would be nice to log idents
    (log/info "Applying schema changes!")
    (let [new-schema (schema-with-changes db schema-tx)
          new-db (replace-schema db new-schema)]
      new-db)))

(reactor/register-handler
  ::merge-schema
  (fn [_ db [_ schema]]
    ;; Have to make sure schema with changes and replace schema don't need the :ident
    ;; Would be nice to log idents
    (log/info "Applying schema changes!")
    (let [new-schema (utils/deep-merge (:schema db) schema)
          new-db (replace-schema db new-schema)]
      new-db)))


;; May need to separate the schema and the "other" data, but for now, we'll leave it at this
(reactor/register-handler
  ::recv-remote-tx
  (fn [app db [_ tx-data]]
    (log/info "Running remote-tx in :dat.sync/recv-remote-tx.")
    (let [normalized-tx (normalize-tx tx-data)
          translated-tx (translate-eids db normalized-tx)
          schema-changes (tx-schema-changes db translated-tx)
          remote-tx-meta {:dat.sync.prov/agent :dat.sync/remote}]
      (reactor/resolve-to app db
        [(when (seq schema-changes) [::apply-schema-changes schema-changes])
         [:dat.reactor/local-tx translated-tx remote-tx-meta]]))))

;; Triggers
(reactor/register-handler
  ::send-remote-tx
  (fn [app db [_ tx]]
    (let [translated-tx (remote-tx db tx)]
      ;; log directly in handler function to make sure a failure doesn't preclude log execution
      (log/info "Sending tx:" (pr-str (take 100 translated-tx)) "...")
      (reactor/resolve-to app db
        [[:dat.remote/send-event! [:dat.sync.remote/tx translated-tx]]]))))

(reactor/register-handler
  :dat.remote/connected
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[::request-bootstrap true]])))

(reactor/register-handler
  ::request-bootstrap
  (fn [app db _]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Sending bootstrap request!")
    (reactor/resolve-to app db
      ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
      [[:dat.remote/send-event! [::bootstrap true]]])))


;; TODO This really needs some overhaul in the new system
;; * based on subscriptions
;; 




(reactor/register-handler
  ::bootstrap
  (fn [app db [_ data]]
    ;; Possibly flag some state somewhere saying bootstrap has taken place?
    (log/info "Recieved bootstrap!")
    (let [bootstrapped-db
          (cond
            ;; if it's a ds db, serialized with transit, then we can just return this
            (d/db? data) (do (log/info "got a fully-backed transit db") data)
            ;; If a map, treat it as map of {:schema :eav}
            ;; TODO Generalize this to keep the things we might have already created client side. Reapply the
            ;; indexing function?
            (map? data) (let [_ (log/info "processing map form bootstrap")
                              new-db (dat.sync/hydrate-bootstrap db data)
                              _ (log/info "bootstrap eav index ingested as db")]
                          new-db)
            ;; Otherwise treat it as a tx
            :else (do
                    (log/info "treating bootstrap as tx")
                    (reactor/resolve-to app db
                      [[::recv-remote-tx data]])))
          tx-report {:db-before db
                     :db-after bootstrapped-db
                     :tx-data (d/datoms bootstrapped-db :eavt)
                     :tempids {}
                     :tx-meta nil}]
      (reactor/with-effects
        ;; This message will fire once the reaction has complete (that is, once the data is bootstrapped; It' lets you decide how your application
        [[:dat.reactor/dispatch! [:dat.sync.client.bootstrap/complete? true]]
         [:dat.reactor/execute-tx-report-handlers! tx-report]]
        bootstrapped-db))))





;; This is just a little glue; A system component that plugs in to pipe messages from the remote to the
;; dispatch chan

(defrecord Datsync [dispatcher remote]
  component/Lifecycle
  (start [component]
    (let [remote-chan (remote/event-chan remote)]
      (log/info "Starting Datsync component")
      (dispatcher/dispatch! dispatcher [::merge-schema dat.sync/base-schema])
      ;; This should get triggered by successful connection to the websocket
      (log/info "Dispatched schema changes")
      (go-loop []
        (let [event (async/<! remote-chan)]
          (dispatcher/dispatch! dispatcher event)
          (recur)))
      component))
  (stop [component]
    component))


(defn new-datsync []
  (map->Datsync {}))


