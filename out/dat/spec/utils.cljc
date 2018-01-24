(ns dat.spec.utils)

;;
;; ???: should we support interleaving transducers and sequences so you can use different transducers on different sequences?
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

(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? #(or (map? %) (nil? %)) maps)
    (apply merge-with deep-merge maps)
    (last maps)))

(defn deref-or-value
  [val-or-atom]
  (if (satisfies? #?(:cljs IDeref :clj clojure.lang.IDeref) val-or-atom) @val-or-atom val-or-atom))
