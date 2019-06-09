(ns dat.sync.client
  "# Datsync client API"
  #?(:cljs (:require-macros [cljs.core.async.macros :as async-macros :refer [go go-loop]]))
  (:require #?@(:clj [[clojure.core.async :as async :refer [go go-loop]]]
                :cljs [[cljs.core.async :as async]])
            [dat.remote :as remote]
            [dat.reactor :as reactor]
            [dat.reactor.dispatcher :as dispatcher]
            [dat.sync.utils :as utils]
            [datascript.core :as d]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]))

(defrecord Datsync [dispatcher remote]
  component/Lifecycle
  (start [component]
    (let [remote-chan (remote/event-chan remote)]
      (log/info "Starting Datsync component")
      (dispatcher/dispatch! dispatcher [::merge-schema base-schema])
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