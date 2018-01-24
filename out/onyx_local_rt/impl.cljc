(ns ^:no-doc onyx-local-rt.impl
  (:require [com.stuartsierra.dependency :as dep]
            [onyx.static.util :refer [kw->fn exception?]]
            [onyx.lifecycles.lifecycle-compile :as lc]
            [onyx.flow-conditions.fc-compile :as fc]
            [onyx.flow-conditions.fc-routing :as r]
            [onyx.state.memory]
            [onyx.peer.grouping :refer [task-map->grouping-fn]]
            [onyx.state.protocol.db :as db]
            [onyx.windowing.window-compile :as wc]
            [onyx.windowing.window-extensions :as we]
            [onyx.peer.window-state :as ws]
            [onyx.windowing.aggregation]
            [onyx.refinements]
            [onyx.triggers]
            [onyx.types :refer [map->TriggerState]]
            [onyx.spec]))

(defn takev [k xs]
  (vec (take k xs)))

(defn dropv [k xs]
  (vec (drop k xs)))

(defn mapcatv [f xs]
  (vec (mapcat f xs)))

(defn curry-params [f params]
  (reduce partial f params))

(defn unqualify-map [m]
  (into {} (map (fn [[k v]] [(keyword (name k)) v]) m)))

(defn only [coll]
  (when (next coll)
    (throw (ex-info "More than one element in collection, expected count of 1" {:coll coll})))
  (if-let [result (first coll)]
    result
    (throw (ex-info "Downstream tasks are not healthy. Stopping here." {}))))

(defn find-task [catalog task-name]
  (let [matches (filter #(= task-name (:onyx/name %)) catalog)]
    (only matches)))

(defn make-uuid []
  #?(:clj (java.util.UUID/randomUUID))
  #?(:cljs (random-uuid)))

(defn resolve-var [v]
  #?(:clj (var-get v))
  #?(:cljs v))

(defn compile-before-task-start-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/before-task-start))

(defn compile-before-batch-task-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/before-batch))

(defn compile-after-read-batch-task-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/after-read-batch))

(defn compile-after-apply-fn-task-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/after-apply-fn))

(defn compile-after-batch-task-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/after-batch))

(defn compile-after-task-functions [lifecycles task-name]
  (lc/compile-lifecycle-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name} :lifecycle/after-task-stop))

(defn compile-handle-exception-functions [lifecycles task-name]
  (lc/compile-lifecycle-handle-exception-functions {:onyx.core/lifecycles lifecycles :onyx.core/task task-name}))

(defn lifecycles->event-map
  [{:keys [onyx.core/lifecycles onyx.core/task] :as event}]
  (try (update event
               :onyx.core/compiled
               (fn [compiled]
                 (-> compiled
                     (assoc :compiled-start-task-fn
                            (or (lc/compile-start-task-functions event) identity))
                     (assoc :compiled-before-task-start-fn
                            (or (compile-before-task-start-functions lifecycles task) identity))
                     (assoc :compiled-before-batch-fn
                            (or (compile-before-batch-task-functions lifecycles task) identity))
                     (assoc :compiled-after-read-batch-fn
                            (or (compile-after-read-batch-task-functions lifecycles task) identity))
                     (assoc :compiled-after-apply-fn
                            (or (compile-after-apply-fn-task-functions lifecycles task) identity))
                     (assoc :compiled-after-batch-fn
                            (or (compile-after-batch-task-functions lifecycles task) identity))
                     (assoc :compiled-after-task-fn
                            (or (compile-after-task-functions lifecycles task) identity))
                     (assoc :compiled-handle-exception-fn
                            (or (compile-handle-exception-functions lifecycles task) identity)))))
       (catch #?(:clj Throwable) #?(:cljs js/Error) e
         ;; Bail out if we can't compile the lifecycles. We can't do this
         ;; for plugins that extensively use the JVM, for example.
         event)))

(defn flow-conditions->event-map
  [{:keys [onyx.core/flow-conditions onyx.core/workflow onyx.core/task] :as event}]
  (assoc event
         :compiled-norm-fcs (fc/compile-fc-happy-path flow-conditions workflow task)
         :compiled-ex-fcs (fc/compile-fc-exception-path flow-conditions workflow task)))

(defn state-indices [windows triggers]
  (into {}
        (map (juxt identity identity)
             (into (vec (sort (map :window/id windows)))
                   (sort (map  (fn [{:keys [trigger/id trigger/window-id]}]
                                 [id window-id])
                              triggers))))))

(defn add-windows-states [{:keys [onyx.core/windows onyx.core/triggers onyx.core/task-map state-store] :as event}]
    (if-not (empty? windows) 
      (assoc event 
             :windows-states 
             (let [indices (state-indices windows triggers)]
               (mapv (fn [window]
                       (wc/build-window-executor window triggers state-store indices task-map))
                   windows)))
      (assoc event :windows-states [])))

(defn grouped-window-contents [{:keys [state-store onyx.core/windows]}]
  (reduce (fn [m {:keys [window/id]}]
            (assoc m 
                   id 
                   (reduce (fn [m group]
                             (let [group-id (db/group-id state-store group)]
                               (reduce (fn [m extent]
                                         (update m 
                                                 group 
                                                 (fn [g] 
                                                   (assoc (or g {}) 
                                                          extent 
                                                          (db/get-extent state-store id group-id extent)))))
                                       m
                                       (db/group-extents state-store id group-id))))
                           {}
                           (db/groups state-store))))
          {}
          windows))

(defn ungrouped-window-contents [{:keys [state-store onyx.core/windows]}]
  (reduce (fn [m {:keys [window/id]}]
            (assoc m 
                   id 
                   (let [group nil] 
                     (reduce (fn [m extent]
                               (assoc m
                                      extent 
                                      (db/get-extent state-store id group extent)))
                             {}
                             (db/group-extents state-store id group)))))
          {}
          windows))

(defn get-window-contents [{:keys [grouping-fn] :as event}]
  (if grouping-fn
    (grouped-window-contents event)
    (ungrouped-window-contents event)))

(defn add-state-store [event]
  (assoc event :state-store (db/create-db {:onyx.peer/state-store-impl :memory} :db {})))

(defn task-params->event-map [{:keys [onyx.core/task-map] :as event}]
  (let [params (mapv (fn [param] (get task-map param))
                     (:onyx/params task-map))]
    (assoc event :onyx.core/params params)))

(defn egress-tasks->event-map [event children]
  (assoc-in event [:egress-tasks] children))

(def action-sequence
  {:lifecycle/start-task? :lifecycle/before-task-start
   :lifecycle/before-task-start :lifecycle/before-batch
   :lifecycle/before-batch :lifecycle/read-batch
   :lifecycle/read-batch :lifecycle/after-read-batch 
   :lifecycle/after-read-batch :lifecycle/apply-fn
   :lifecycle/apply-fn :lifecycle/after-apply-fn
   :lifecycle/after-apply-fn :lifecycle/assign-windows
   :lifecycle/assign-windows :lifecycle/route-flow-conditions
   :lifecycle/route-flow-conditions :lifecycle/write-batch
   :lifecycle/write-batch :lifecycle/after-batch
   :lifecycle/after-batch :lifecycle/before-batch
   :lifecycle/after-task-stop :lifecycle/start-task?})

(defmulti apply-action
  (fn [env task action]
    action))

(defmethod apply-action :lifecycle/start-task?
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-start-task-fn])]
    {:task (assoc task :start-task? (f (:event task)))}))

(defmethod apply-action :lifecycle/before-task-start
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-before-task-start-fn])
        event (:event task)]
    {:task (assoc task :event (merge event (f event)))}))

(defmethod apply-action :lifecycle/before-batch
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-before-batch-fn])
        event (dissoc (:event task) :onyx.core/batch :onyx.core/results :onyx.core/triggered)]
    {:task (assoc task :event (merge event (f event)))}))

(defmethod apply-action :lifecycle/read-batch
  [env {:keys [inbox event] :as task} action]
  (if-let [size (:onyx/batch-size (:onyx.core/task-map event))]
    {:task
     (-> task
         (assoc-in [:event :onyx.core/batch] (takev size inbox))
         (assoc :inbox (dropv size inbox)))}
    {:task
     (-> task
         (assoc-in [:event :onyx.core/batch] inbox)
         (assoc :inbox []))}))

(defmethod apply-action :lifecycle/after-apply-fn
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-after-apply-fn])
        event (:event task)]
    {:task (assoc task :event (merge event (f event)))}))

(defmethod apply-action :lifecycle/after-read-batch
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-after-read-batch-fn])
        event (:event task)]
    {:task (assoc task :event (merge event (f event)))}))

(defn collect-next-segments [f input]
  (let [segments (try (f input)
                      (catch #?(:clj Throwable) #?(:cljs js/Error) e
                        (ex-info "Segment threw exception"
                                 {:exception e :segment input})))]
    (if (sequential? segments) segments (vector segments))))

(defmethod apply-action :lifecycle/apply-fn
  [env {:keys [event] :as task} action]
  (let [{:keys [onyx.core/batch onyx.core/params]} event]
    {:task
     (if (seq batch)
       (let [f (curry-params (:onyx.core/fn event) params)
             results (mapv
                      (fn [old]
                        (let [all-new (collect-next-segments f old)]
                          {:old old :all-new all-new}))
                      batch)]
         (assoc-in task [:event :onyx.core/results] results))
       task)}))

(defmethod apply-action :lifecycle/route-flow-conditions
  [env {:keys [event] :as task} action]
  (let [{:keys [onyx.core/results onyx.core/compiled onyx.core/triggered]} event
        reified-results
        (reduce
         (fn [all {:keys [old all-new] :as outgoing-message}]
           (let [leaves all-new
                 root old]
             (reduce
              (fn [all* new-msg]
                (let [routes (r/route-data event {:root root :leaves leaves} new-msg)
                      transformed-msg (r/flow-conditions-transform new-msg routes event)]
                  (when (and (exception? new-msg)
                             (not (seq (:flow routes))))
                    (throw new-msg))
                  (conj all* {:old old
                              :segment transformed-msg
                              :routes (:flow routes)})))
              all
              all-new)))
         []
         (conj results {:old nil :all-new triggered}))]
    {:task (assoc-in task [:event :onyx.core/results] reified-results)}))

(defn state-transition-fns [event state segment]
  (if-let [f (get-in event [:grouping-fn])]
    (let [group (f segment)]
      {:state* (get state group)
       :group group
       :ret-f (fn [v] (assoc state group v))})
    {:state* state
     :ret-f (fn [v] v)}))

(defmethod apply-action :lifecycle/assign-windows
  [env {:keys [event] :as task} action]
  (let [state-event (onyx.types/new-state-event :new-segment event)
        {:keys [grouping-fn onyx.core/results windows-states state-store]} event
        grouped? (not (nil? grouping-fn))
        state-event* (assoc state-event :grouped? grouped?)
        updated-states (reduce 
                        (fn [windows-state* segment]
                          (if (exception? segment)
                            windows-state*
                            (let [state-event** (if grouped?
                                                  (let [group-key (grouping-fn segment)]
                                                    (-> state-event* 
                                                        (assoc :segment segment)
                                                        (assoc :group-id (db/group-id state-store group-key))
                                                        (assoc :group-key group-key)))
                                                  (assoc state-event* :segment segment))]
                              (ws/fire-state-event windows-state* state-event**))))
                        windows-states
                        (mapcat :all-new results))
        emitted (doall (mapcat (comp deref :emitted) updated-states))]
    (run! (fn [w] (reset! (:emitted w) [])) updated-states)
    {:task (-> task
               (update :outputs into emitted)
               (assoc :event (-> event 
                                 (assoc :windows-states updated-states)
                                 (update :onyx.core/triggered into emitted))))}))

(defn route-to-children [results]
  (reduce
   (fn [result {:keys [segment routes]}]
     (reduce
      (fn [result* route]
        (update-in result* [route] (fnil conj []) segment))
      result
      routes))
   {}
   results))

(defmethod apply-action :lifecycle/write-batch
  [env {:keys [event children] :as task} action]
  (let [{:keys [onyx.core/results onyx.core/triggered]} event]
    (cond (not (seq children))
          {:task (update-in task [:outputs] into (mapv :segment results))
           :writes {}}

          (seq results)
          {:task task
           :writes (route-to-children results)}

          :else
          {:task task
           :writes {}})))

(defmethod apply-action :lifecycle/after-batch
  [env task action]
  (let [event (:event task)
        f (get-in event [:onyx.core/compiled :compiled-after-batch-fn])]
    {:task (assoc task :event (merge event (f event)))}))

(defmethod apply-action :lifecycle/after-task-stop
  [env task action]
  (let [f (get-in task [:event :onyx.core/compiled :compiled-after-task-fn])
        event (:event task)]
    {:task (assoc task :event (merge event (f event)))}))

(defn workflow->sierra-graph [workflow]
  (reduce
   (fn [result [src dst]]
     (dep/depend result dst src))
   (dep/graph)
   workflow))

(defn precompile-onyx-fn [catalog-entry]
  (if-let [f (:onyx/fn catalog-entry)]
    (kw->fn f)
    clojure.core/identity))

(defn init-task-state
  [{:keys [workflow catalog flow-conditions lifecycles windows triggers] :as job}
   graph task-name catalog-entry]
  (let [children (into #{} (dep/immediate-dependents graph task-name))
        base {:inbox []
              :start-task? false
              :children children
              :event (-> {:onyx.core/task task-name
                          :onyx.core/task-id task-name
                          :onyx.core/workflow workflow
                          :onyx.core/catalog catalog
                          :onyx.core/lifecycles lifecycles
                          :onyx.core/flow-conditions flow-conditions
                          :onyx.core/windows (filterv #(= (:window/task %) task-name) windows)
                          :onyx.core/triggers triggers
                          :onyx.core/task-map catalog-entry
                          :onyx.core/fn (precompile-onyx-fn catalog-entry)
                          :grouping-fn (task-map->grouping-fn catalog-entry)
                          :onyx.core/compiled {}}
                         (lifecycles->event-map)
                         (flow-conditions->event-map)
                         (add-state-store)
                         (add-windows-states)
                         (task-params->event-map)
                         (egress-tasks->event-map children))}]
    (if (seq children)
      {task-name base}
      {task-name (assoc base :outputs [])})))

(defn init-task-states [{:keys [workflow catalog] :as job} graph]
  (let [tasks (reduce into #{} workflow)]
    (apply merge
           (map
            (fn [task-name]
              (let [catalog-entry (find-task catalog task-name)]
                (init-task-state job graph task-name catalog-entry)))
            tasks))))

(defn integrate-task-updates [env action]
  (reduce
   (fn [result task-name]
     (let [task-state (get-in env [:tasks task-name])
           rets (apply-action env task-state action)
           merge-f (partial merge-with into)]
       (-> result
           (assoc-in [:tasks task-name] (:task rets))
           (update-in [:pending-writes] merge-f (:writes rets)))))
   env
   (:sorted-tasks env)))

(defn transfer-pending-writes [env]
  (let [writes (:pending-writes env)]
    (reduce-kv
     (fn [result task-name segments]
       (update-in result [:tasks task-name :inbox] into segments))
     (assoc env :pending-writes {})
     writes)))

(defn transition-action-sequence [env action]
  (if (and (= action :lifecycle/start-task?)
           (not (every? true? (map :start-task? (vals (:tasks env))))))
    (assoc env :next-action :lifecycle/start-task?)
    (assoc env :next-action (action-sequence action))))
