(ns onyx-local-rt.api
  (:require [com.stuartsierra.dependency :as dep]
            [onyx-local-rt.impl :as i]
            [onyx.spec]))

(defn init
  "Takes an Onyx job and returns a new runtime instance."
  [{:keys [workflow] :as job}]
  (let [graph (i/workflow->sierra-graph workflow)]
    {:tasks (i/init-task-states job graph)
     :sorted-tasks (dep/topo-sort graph)
     :pending-writes {}
     :next-action :lifecycle/start-task?}))

(defn tick
  "Advances the runtime one step in the lifecycle forward for all tasks."
  ([env n]
   (nth (iterate tick env) n))
  ([env]
   (let [this-action (:next-action env)]
     (-> env
         (i/integrate-task-updates this-action)
         (i/transfer-pending-writes)
         (i/transition-action-sequence this-action)))))

(defn drained?
  "Returns true if there are no in-flight segments."
  [env]
  (let [task-states (vals (:tasks env))
        inboxes (map :inbox task-states)
        batches (map (comp :onyx.core/batch :event) task-states)]
    (and (every? (comp not seq) inboxes)
         (every? nil? batches))))

(defn drain
  "Calls `tick` until there are no more in-flight segments. Will only
  call `tick` 10,000 times, or a user-given number of times, to prevent
  an infinite-loop in the case of a problematic job."
  ([env] (drain env 10000))
  ([env max-ticks]
   (loop [env env
          i 0]
     (cond (> i max-ticks)
           (throw
            (ex-info
             (str
              "Ticked " max-ticks " times and never drained, runtime will not proceed with further execution.")
             {}))

           (drained? env) env

           :else (recur (tick env) (inc i))))))

(defn env-summary
  "Returns a subset of the runtime to explain where segments are currently located in the job."
  [env]
  {:next-action (:next-action env)
   :tasks
   (reduce
    (fn [result task-name]
      (let [tm (get-in env [:tasks task-name :event :onyx.core/task-map])
            windows (get-in env [:tasks task-name :event :onyx.core/windows])
            inbox (get-in env [:tasks task-name :inbox])]
        (cond-> result
          (or (= (:onyx/type tm) :input)
              (= (:onyx/type tm) :function))
          (update task-name merge {:inbox inbox})

          (= (:onyx/type tm) :output)
          (update task-name merge {:inbox inbox :outputs (get-in env [:tasks task-name :outputs])})

          (not (empty? windows))
          (update task-name merge {:window-contents (i/get-window-contents (get-in env [:tasks task-name :event]))}))))
    {}
    (keys (:tasks env)))})

(defmulti transition-env
  "Data-backed API for transitioning the environment."
  (fn [env action-data]
    (:event action-data)))

(defmethod transition-env :new-segment
  [env {:keys [task segment]}]
  (update-in env [:tasks task :inbox] conj segment))

(defmethod transition-env :stop
  [env action-data]
  (let [this-action :lifecycle/after-task-stop]
    (-> env
        (i/integrate-task-updates this-action)
        (i/transition-action-sequence this-action))))

(defn new-segment
  "Given a runtime, places the segment onto
   the inbox of the specified task. Does not call `tick`
   or advance the runtime in any way."
  [env input-task segment]
  (transition-env env {:event :new-segment
                       :task input-task
                       :segment segment}))

(defn stop
  "Stops and returns the runtime, simulating the behavior of a
   distributed peer stopping. It is valid to call `tick` after
   `stop` to simulate the job starting again."
  [env]
  (transition-env env {:event :stop}))
