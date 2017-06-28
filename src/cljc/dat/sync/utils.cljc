(ns dat.sync.utils
  (:require #?@(:clj [[clojure.core.match :as match :refer [match]]]
                :cljs [[cljs.core.match :refer-macros [match]]
                       [cljs.pprint]])
            [taoensso.timbre :as log #?@(:cljs [:include-macros true])]))


(declare inner-merge)

(defn deref-or-value
  [val-or-atom]
  (if (satisfies? #?(:cljs IDeref :clj clojure.lang.IDeref) val-or-atom) @val-or-atom val-or-atom))

(defn deep-merge
  ([map1] map1)
  ([map1 map2]
   (merge-with inner-merge map1 map2)))

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

;;
;; cat-into takes a collection to merge into, any number of transducers, and at least one sequence. The sequences are treated as a single sequence back to back.
;;
;; args -
;;   coll [transucers ...]* [sequences ...]+
;;
(defn cat-into
  "Any number of transducers and sequences concatonated into one sequence."
  [coll & xfns-and-seqs]
  (let [{xfns true
         seqs false} (if (fn? (first xfns-and-seqs))
                       (group-by fn? xfns-and-seqs)
                       {false xfns-and-seqs}
                       )]
    (into coll
          (apply comp (into [cat] xfns))
          seqs)))



