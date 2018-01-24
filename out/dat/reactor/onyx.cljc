(ns dat.reactor.onyx
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]
            [dat.spec.protocols :as protocols]
            [onyx-local-rt.api :as onyx-api]
            [datascript.core :as ds]
            [dat.reactor]
            [com.stuartsierra.component :as component]))

(defn conj-job
  ;; ???: should flow conditions be ordered completely by an order function
  ([] {:catalog #{}
       :workflow #{}
       :flow-conditions []})
  ([job]
   ;; TODO: validate job
   job)
  ([{:as job :keys [catalog workflow flow-conditions]} more-job]
   ;; ???: use deep merge? or single layer deep merge?
   ;; TODO: add other onyx job keys like windowing and triggers
   (assoc job
     :catalog (into (or catalog #{}) (:catalog more-job))
     :workflow (into (or workflow #{}) (:workflow more-job))
     :flow-conditions (into (or flow-conditions []) (:flow-conditions more-job)))))

(defn legacy-event->seg [event]
  (if (vector? event)
    {:dat.reactor/event :dat.reactor/legacy
     :event event}
    event))

(defn legacy-event><seg []
  (map legacy-event->seg))

(defn remove-outputs [env task-name]
  (assoc-in env [:tasks task-name :outputs] []))

(defn loopback-drain [env]
  (loop [env env]
    (let [drained-env (onyx-api/drain env)
          loop-segs (get-in drained-env [:tasks :dat.reactor/loopback :outputs])]
      ;; ???: check for infinite loop
      (if-not loop-segs
        drained-env
        (recur (-> drained-env
                   (remove-outputs :dat.reactor/loopback)
                   (onyx-api/new-segment :dat.reactor/loop-in loop-segs)))))))

(defn go-react! [{:keys [onyx-atom event-chan kill-chan]}]
  (go-loop []
    (let [[event port] (async/alts! [kill-chan event-chan] :priority true)]
      (if (= port kill-chan)
        (log/info "go-react! received kill-chan signal")
        (do
          (try
            (let [{:keys [env job]} @onyx-atom
                  env-after (-> env
                                (onyx-api/new-segment (:dat.reactor/input event) event)
                                (loopback-drain)
                                (onyx-api/stop))]
;;               (log/debug "reacting to event:"
;;                          [(:dat.reactor/event event)
;;                           (:id event) ;; for legacy events
;;                           ]
;;                          "from source:"
;;                          (:dat.reactor/input event))
              (doseq [{:as task :keys [dat.reactor/chan]}
                      (filter
                        #(= (:onyx/type %) :output)
                        (:catalog job))]
                (doseq [out-seg (get-in env-after [:tasks (:onyx/name task) :outputs])]
                  ;; ???: should callbacks be allowed?
                  (when out-seg ;; ???: quietly eat nils?
                    (async/>! chan out-seg)))))
            (catch #?(:cljs :default :clj Exception) e
              (log/error e "Exception in reactor go loop")
              #?(:clj (.printStackTrace e) :cljs (js/console.log (.-stack e)))))
          (recur))))))

;; ## Onyx Predicates
(def ^:export always (constantly true))

(defn ^:export not-nil?
  "flow-control - "
  [event old-seg seg all-new]
  (not (nil? seg)))


;; (defn +db-snap [conn]
;;   (map
;;     (fn [event]
;;       (assoc event
;;         :dat.sync/db-snap @conn))))

(defn handler-chan! [handler handler-fn & {:keys [chan]}]
  ;; ???: needs a kill-chan?
  ;; ???: could be implemented with async/pipeline maybe
  (let [chan (or chan (async/chan))]
    (go-loop []
      (let [seg (async/<! chan)]
        (handler-fn handler seg))
        (recur))
    chan))

(defn legacy-segment! [{:as app :keys [conn]} {:as seg :keys [event]}]
  (log/info "process legacy event" event)
  (let [final-meta (atom nil)]
    (swap!
      conn
      (fn [current-db]
        (try
          (let [new-db (dat.reactor/handle-event! app current-db event)]
            (reset! final-meta (meta new-db))
            ;; Here we dissoc the effects, because we need to not let them stack up
            (with-meta new-db (dissoc (meta new-db) :dat.reactor/effects)))
          ;; We might just want to have our own error channel here, and set an option in the reactor
          (catch #?(:clj Exception :cljs :default) e
            (log/error e "Exception in reactor swap for legacy event: " event)
            #?(:clj (.printStackTrace e) :cljs (js/console.log (.-stack e)))
            ;(dispatch-error! reactor [::error {:error e :event event}])
            current-db))))
    (when-let [effects (seq (:dat.reactor/effects  @final-meta))]
      (doseq [effect effects]
        ;; Not sure if the db will pass through properly here so that effects execute on the db values
        ;; immediately following their execution trigger
        (dat.reactor/execute-effect! app (or (:db (meta effect)) @conn) effect)))))

(defn go-new-inputs! [{:as onyx :keys [job running-chans]} event-chan]
  (log/debug "go-new-inputs")
  (let [new-input-tasks
        (sequence
          (comp
            (filter #(= (:onyx/type %) :input))
            (filter :dat.reactor/chan)
            (remove #(contains? running-chans (:dat.reactor/chan %))))
          (:catalog job))]
    (doseq [{:as task :keys [dat.reactor/chan]} new-input-tasks]
      (log/debug "listening for inputs task" (:onyx/name task))
      (go-loop []
        (let [event (async/<! chan)]
          (async/>! event-chan (assoc (legacy-event->seg event) :dat.reactor/input (:onyx/name task)))
          (recur))))
  (assoc onyx
    :running-chans
    (into
      (or running-chans #{})
      (map :dat.reactor/chan)
      new-input-tasks))))

(defn log-segment! [log-fn seg]
  ;; FIXME: debug not showing on client prints. using info for now
  (log/info "logging segment..." seg))

(defn expand-job!
  "Expands reactor's onyx job to include the given job fragment. The job-key is used to allow overwriting a job fragment previously registered. This function has side effects, but is semi-idempotent (you can safely call multiple times with the same fragment)."
  [{:as reactor :keys [event-chan onyx-atom]} job-key fragment]
  ;; ???: mechanism to give fragments/flow-control order?
  ;; ???: transducer middleware for conj-job?
  ;; TODO: ensure valid onyx spec
;;   (log/debug "expanding job")
  (swap!
    onyx-atom
    (fn [{:as onyx :keys [job-fragments]}]
      (let [fragments (assoc (or job-fragments {}) job-key fragment)
            job (transduce (map second) conj-job fragments)]
;;         (log/debug "full job" job)
        (-> onyx
            (assoc
              :job-fragments fragments
              :job job
              :env (onyx-api/init job) ;; ???: init job on only when needed?
              )
            (go-new-inputs! event-chan)
            )))))

(defrecord OnyxReactor [onyx-atom event-chan kill-chan]
  component/Lifecycle
  (start [reactor]
    (log/info "Starting OnyxReactor Component")
      (let [onyx-batch-size 20 ;; FIXME: move to config
            running? kill-chan ;; ???: move kill-chan creation back into the go-react! loop
            reactor (assoc reactor
                      :onyx-atom (or onyx-atom (atom {}))
                      :kill-chan (or kill-chan (async/chan))
                      :event-chan (or event-chan (async/chan))

            )]
        (expand-job!
          reactor
          ::base-job
          {:catalog
           [{:onyx/type :input
             :onyx/name :dat.reactor/loop-in
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :output
             :onyx/name :dat.reactor/loopback
             :onyx/batch-size onyx-batch-size}
            {:onyx/type :output
             :onyx/batch-size onyx-batch-size
             :dat.reactor/chan (handler-chan! ;; TODO: idempotent
                                 nil
                                 log-segment!)
             :onyx/name :dat.reactor/log}]
            ;; TODO: loopback cycle protection
           })
        (when (not running?)
          (go-react! reactor))
        reactor))
  (stop [reactor]
    (when kill-chan (async/put! kill-chan :kill))
    ;; ???: close kill-chan, event-chan, or running-chans inside the onyx-atom?
    (assoc reactor
      :event-chan nil
      :onyx-atom nil
      :kill-chan nil)))

(defn new-onyx-reactor
  "If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}"
  ([options]
   (map->OnyxReactor options))
  ([]
   (new-onyx-reactor {})))


