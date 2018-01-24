(ns konserve.memory
  "Address globally aggregated immutable key-value store(s)."
  (:require #?(:clj [clojure.core.async :refer [go]])
            [konserve.protocols :refer [PEDNAsyncKeyValueStore
                                        PBinaryAsyncKeyValueStore
                                        -update-in]])
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]])))

(defrecord MemoryStore [state read-handlers write-handlers locks]
  PEDNAsyncKeyValueStore
  (-exists? [this key] (go (if (@state key) true false)))
  (-get-in [this key-vec] (go (get-in @state key-vec)))
  (-update-in [this key-vec up-fn] (go [(get-in @state key-vec)
                                        (get-in (swap! state update-in key-vec up-fn) key-vec)]))
  (-assoc-in [this key-vec val] (-update-in this key-vec (fn [_] val)))
  (-dissoc [this key] (go (swap! state dissoc key) nil))

  PBinaryAsyncKeyValueStore
  (-bget [this key locked-cb]
    (go (locked-cb (get @state key))))
  (-bassoc [this key input]
    (go (swap! state assoc key {:input-stream input
                                :size :unknown})
        nil)))

#?(:clj
   (defmethod print-method MemoryStore
     [^MemoryStore store writer]
     (.write writer (str "MemoryStore[\"" (.hasheq store) "\"]"))))


(defn new-mem-store
  "Create in memory store. Binaries are not properly locked yet and
  the read and write-handlers are dummy ones for compatibility."
  ([] (new-mem-store (atom {})))
  ([init-atom]
   (go (map->MemoryStore {:state init-atom
                          :read-handlers (atom {})
                          :write-handlers (atom {})
                          :locks (atom {})}))))


(comment
  (require '[clojure.core.async :refer [<!! go <!]]
           '[konserve.protocols :refer [-bget -bassoc]]
           '[clojure.java.io :as io])
  (def store (<!! (new-mem-store)))

  (go (def foo (<! (new-mem-store))))


  (<!! (-bassoc store "foo" (io/input-stream (byte-array 10 (byte 42)))))
  (<!! (-bget store "foo" identity))

  )
