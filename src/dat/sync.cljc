(ns dat.sync
  (:require [datascript.core :as ds]
            [dat.sync.utils :as utils]
            [taoensso.timbre :as log :include-macros true]))

(defn eav-to-datoms
  [ds-schema eav]
  (try
    (let [ref-idents (->> ds-schema
                          (filter (comp #{:db.type/ref} :db/valueType second))
                          (map first)
                          set)
          eids (->> eav
                    (mapcat (fn [[e a v]]
                              (if (ref-idents a) [e v] [e])))
                    set
                    sort)
          id-mapping (->> eids
                          (map (fn [i eid]
                                 [eid i])
                               (drop 1 (range)))
                          (into {}))]
      (map
        (fn [[e a v]]
          (ds/datom (id-mapping e)
                    a
                    (if (ref-idents a) (id-mapping v) v)))
        eav))
    (catch #?(:clj Exception :cljs :default) e
      (log/error "fucked up" e))))


(comment
  (let [schema {:foo/bar {:db/valueType :db.type/ref}}]
    (->> {:db/id 3
          :foo/crack :that
          :foo/snap [:4 :7]
          :foo/bar {:foo/peep :shucks
                    :db/id 4}}
      (pull-data-to-eav schema)
      (eav-to-datoms schema))))

(defn ds-value-type
  [value-type]
  (let [ident (:db/ident value-type)]
    (#{:db.type/ref} ident)))

(defn datascript-schema
  [db]
  (->> (ds/pull db
               '[* {:db.install/valueType [:db/id :db/ident]
                    :db.install/attribute [:db/ident * {:db/valueType [*]
                                                        :db/cardinality [*]
                                                        :db/unique [*]}]}]
               0)
       :db.install/attribute
       (map (fn [attr-entity]
              [(:db/ident attr-entity)
               (-> attr-entity
                   (update :db/valueType ds-value-type)
                   (update :db/cardinality :db/ident)
                   (update :db/unique :db/ident)
                   (->> (remove (comp nil? second))
                        (into {})))]))
       (into {})))

(defn pull-data-to-eav
  [ds-schema pull-data]
  (if (sequential? pull-data)
    (mapcat (partial pull-data-to-eav ds-schema) pull-data)
    (let [eid (:db/id pull-data)]
      (mapcat
        (fn entry-eav [[attr val]]
          (cond
            ;; todo this should really be dat.sync.origin/id dat.sync/origin-id?
            (= :db/id attr) [[eid :dat.sync.remote.db/id val]]
            (sequential? val) (mapcat #(entry-eav [attr %]) val)
            ;; handle the reference case (could just check map here implicitly...
            (and (map? val))
                 ;(-> (get ds-schema attr) :db/valueType (= :db.type/ref))) ;#=>
            (conj (pull-data-to-eav ds-schema val)
                  ;; what if no db/id? assuming it has one for now, but should create when not
                  [eid attr (:db/id val)])
            :else [[eid attr val]]))
        pull-data))))


;; TODO Generalize this from project

;(defn get-bootstrap
  ;;; TODO Add arity for subscriptions
  ;[db subscriptions]
  ;(let [db (ds/db conn)
        ;schema (datascript-schema db)
        ;eav (->> (bootstrap db subscriptions)
                 ;(pull-data-to-eav schema))
        ;eav-datoms (eav-to-datoms eav schema)]
    ;{:eav eav :schema schema}))


;(defn db-merge
  ;"Merge db2 into db1 as new entities, with no relation to existing entities, respecting db1's eids, and reassigning ids for db2.
  ;Better if db2 is small."
  ;[db1 db2]
  ;(let [schema ()
        ;tx (ds/datoms db2)]
    ;(ds/db-with db1 tx)))

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

(defn hydrate-bootstrap
  ([current-db {:keys [eav schema] :as bootstrap}]
   (log/info "some eavs:" (take 40 eav))
   (let [eav-datoms (eav-to-datoms schema eav)
         ;; merge in schema
         schema (utils/deep-merge base-schema (:schema current-db) schema)
         _ (log/info "some eav datoms:" (take 20 eav-datoms))
         ds-db (ds/init-db eav-datoms schema)]
     (log/info "done re-hydrating database")
     ds-db))
  ([bootstrap]
   (hydrate-bootstrap nil bootstrap)))



