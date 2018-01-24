(ns hasch.core
  "Hashing functions for EDN."
  #?(:cljs (:refer-clojure :exclude [uuid]))
  (:require [hasch.benc :refer [PHashCoercion -coerce digest]]
            [hasch.platform :as platform]))

(def uuid4 platform/uuid4)
(def uuid5 platform/uuid5)
(def hash->str platform/hash->str)

(defn edn-hash
  "Hash an edn value with SHA-512 by default or a compatible hash function of choice."
  ([val] (edn-hash val {}))
  ([val write-handlers] (edn-hash val hasch.platform/sha512-message-digest write-handlers))
  ([val md-create-fn write-handlers]
   (map #(if (neg? %) (+ % 256) %) ;; make unsigned
        (digest (-coerce val md-create-fn (or write-handlers {})) md-create-fn))))

(defn uuid
  "Creates random UUID-4 without argument or UUID-5 for the argument value.

  Optionally an incognito-style write-handlers map can be supplied,
  which describes record serialization in terms of Clojure data
  structures."
  ([] (uuid4))
  ([val & {:keys [write-handlers]}] (-> val (edn-hash write-handlers) uuid5)))
