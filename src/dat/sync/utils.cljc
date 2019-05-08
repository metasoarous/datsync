(ns dat.sync.utils
  (:require #?@(:clj [[clojure.core.match :as match :refer [match]]]
                :cljs [[cljs.core.match :refer-macros [match]]
                       [cljs.pprint]])
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))


(declare inner-merge)

(defn deep-merge
  ([map1] map1)
  ([map1 map2 & maps]
   (reduce (partial merge-with inner-merge)
           (concat [map1 map2] maps))))

(defn inner-merge-dispatch-signature
  [x]
  {:seq? (seq? x) :map? (map? x)})

(defn merge-zip
  [xs ys]
  (mapv deep-merge xs ys))

(def default-inner-merge-opts
  {:coll-merge concat}) ;; other options; merge-zip


(defn inner-merge
  ([x y] (inner-merge default-inner-merge-opts x y))
  ([{:keys [coll-merge] :as opts} x y]
   (match (mapv inner-merge-dispatch-signature [x y])
     ;; Then merge the two maps
     [{:map? true} {:map? true}]
     (deep-merge x y)
     ;; Merge two maps of collections
     [{:col? true} {:col? true}]
     (coll-merge x y)
     ;; default to the second value in any other case
     :else y)))

(defn log [& args]
  #?(:cljs (apply js/console.log args)
     :clj (log/info (first args) (rest args))))


(defn tr
  ([message x]
   (log message (with-out-str (#?(:clj clojure.pprint/pprint :cljs cljs.pprint/pprint) x)))
   x)
  ([x]
   (tr "" x)))



