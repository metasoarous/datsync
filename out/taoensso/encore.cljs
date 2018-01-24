(ns taoensso.encore
  "Extended core library for Clojure/Script that emphasizes:
    * Cross platform API compatibility
    * Flexibility
    * Performance
    * Backwards compatibility

  This lib's mostly for my own use and for advanced users that feel
  comfortable reading this source. Not providing much beginner-oriented
  documentation for this, sorry.

  Quick Taoensso naming conventions:
    **foo** - Dynamic var.
    foo!    - Fn with side effects, or that should otherwise be used cautiously.
    foo?    - Truthy val or fn that returns truthy val.
    foo!?   - Fn that has side effects (or requires caution) and that returns
              a truthy val. Note: !?, not ?!.
    foo$    - Fn that's notably expensive to compute (e.g. hits db).
    foo_    - Dereffable val (e.g. atom, volatile, delay, etc.).
    _       - Unnamed val.
    _foo    - Named but unused val.
    ?foo    - Optional val (emphasize that val may be nil).
    foo*    - A variation of `foo` (e.g. `foo*` macro vs `foo` fn).
    -foo    - Public implementation detail or intermediate (e.g. uncoerced) val.
    >foo    - Val \"to foo\" (e.g. >sender, >host), or fn to put/coerce/transform.
    <foo    - Val \"from foo\" (e.g. <sender, <host), or fn to take/coerce/transform.
    ->foo   - Fn to put/coerce/transform."

  {:author "Peter Taoussanis (@ptaoussanis)"}

  (:refer-clojure :exclude
   [if-let if-some if-not when when-not when-some when-let cond defonce
    run! some? ident? float? boolean? uri? indexed? bytes?
    int? pos-int? neg-int? nat-int?
    simple-ident?   qualified-ident?
    simple-symbol?  qualified-symbol?
    simple-keyword? qualified-keyword?
    format update-in merge merge-with])

       
           
                            
                            
                           
                                                      
                                         
                                       
                                     
                              

       
          
                                   
                               
                                        
                                              
    

        
  (:require
   [clojure.string      :as str]
   [clojure.set         :as set]
   ;; [cljs.core.async  :as async]
   [cljs.reader]
   [cljs.tools.reader.edn :as edn]
   [cljs.test             :as test :refer-macros [is]]
   ;;[goog.crypt.base64 :as base64]
   [goog.object         :as gobj]
   [goog.string         :as gstr]
   [goog.string.format]
   [goog.string.StringBuffer]
   [goog.events         :as gevents]
   [goog.net.XhrIo      :as gxhr]
   [goog.net.XhrIoPool  :as gxhr-pool]
   [goog.Uri.QueryData  :as gquery-data]
   [goog.structs        :as gstructs]
   [goog.net.EventType]
   [goog.net.ErrorCode]
   [taoensso.truss :as truss])

        
  (:require-macros
   [taoensso.encore :as enc-macros :refer
    [have have! have? compile-if
     if-let if-some if-not when when-not when-some when-let cond defonce
     cond! catching -cas! now-dt* now-udt* now-nano* -gc-now?
     name-with-attrs -vol! -vol-reset! -vol-swap! deprecated new-object]]))

(def encore-version [2 88 2])

(comment "ℕ ℤ ℝ ∞ ≠ ∈ ∉"
  (set! *unchecked-math* :warn-on-boxed)
  (set! *unchecked-math* false))

(do ; Bootstrap Truss aliases
                                                          
                                                          )

;;;; Core macros

     
                    
                                                                            
                                          
                                                                       
                   
                                                  
                
                   

                                                                               

     
                                
                              
                                

     
                                                   
                             
                               

;;; (:ns &env) is nnil iff compiling for ClojureScript, giving us a way to
;;; write macros that produce different Clj/Cljs code (not something that
;;; .cljx or .cljc currently provide support for):
                                                            
                                                            

                
                                                                           
                                         
                                                      
                       
                          
                                           
                               
                        
                                                             
                          
                     
                              
                                                    
                         
               

                 
                                                                            
                                          
                                                  
                       
                          
                                            
                               
                        
                                                              
                          
                            
                     
                              
                                                         
               

                
                                                                        
                
                                         
                          
                                 
                                          
                                            

                               
                                 
                                            
                                               

              
                                                                        
                
                           
                                
                                               
                                                 

                  
                                                                            
                
                           
                                
                                               
                                                 

                   
                           
                                
                                                       
                                                         

                  
                                                                             
                                         
                                            
                                                    

(comment
  (if-let   [a :a b (= a :a)] [a b] "else")
  (if-let   [a :a b (= a :b)] [a b] "else")
  (if-some  [a :a b (= a :b)] [a b] "else")
  (when-let [a :a b nil] "true")
  (when-let [:let [a :a b :b] c (str a b)] c))

              
                                                                            
                                                                
                                                                     
                                                   
             
                                              
                          
                          
                
                                                                                  
                                                                                  
                                                   
                                                   
                                                   
                                                   
                                                   
                           
                                                                            
                                                                          
                                                 

                                           
                                               

                                                        
                                                        
                                                      
                                                       

(comment
  [(macroexpand-all '(clojure.core/cond nil "a" nil "b" :else "c"))
   (macroexpand-all '(cond nil "a" nil "b" :else "c"))
   (macroexpand-all '(cond nil "a" nil "b" (println "bar")))
   (macroexpand-all '(cond :when true :let [x "x"] :else x))
   (macroexpand-all '(cond false 0 (not false) 1 2))])

(defn name-with-attrs
  "Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
  support for `defn` style `?docstring` and `?attrs-map`."
  ([sym args            ] (name-with-attrs sym args nil))
  ([sym args attrs-merge]
   (let [[?docstring args] (if (and (string? (first args)) (next args)) [(first args) (next args)] [nil args])
         [attrs      args] (if (and (map?    (first args)) (next args)) [(first args) (next args)] [{}  args])
         attrs (if ?docstring (assoc attrs :doc ?docstring) attrs)
         attrs (if (meta sym) (conj (meta sym) attrs) attrs)
         attrs (conj attrs attrs-merge)]
     [(with-meta sym attrs) args])))

                 
                                                                      
              
                                              
             
                                         
                                            

;;;; Core fns we'll redefine but need in this ns

(def -core-merge                                         cljs.core/merge)
(def -core-update-in                                     cljs.core/update-in)
(declare merge update-in)

;;;; Secondary macros

               
                                                                
             
                            
                                                
                                                                                      

(comment [(cond false "false") (cond! false "false")])

     
                   
                                                                      
                  
                                                            
                                                       
                
                                                                                 
                                 

(do
                                               
                                                 
                                                )

                                                                
                     
                                  
                  
                                    
                                                             
                 
                                          
            

                        
                                                                       
                         
          
                               
                       
                                        
                                        
                                         
                                               
                                                                     
                                          

                                                       
                                                                         
                                                             
                                                             
                  
                                                                            
                               
                                                       
                             
                         
                                                                         
                     
                    

;;;; Truss aliases (for back compatibility, convenience)

     
   
                                                            
                                                             
                                                             
                                                              
                                                                                  
                                                                                    

;;;; Edn

(declare map-keys kw-identical?)

(defn read-edn
  "Attempts to pave over differences in:
    `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
    `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
   `cljs.reader` in particular can be a pain."

  ([     s] (read-edn nil s))
  ([opts s]
   ;; First normalize behaviour for unexpected inputs:
   (if (or (nil? s) (identical? s ""))
     nil
     (if-not (string? s)
       (throw (ex-info "`read-edn` attempt against non-nil, non-string arg"
                {:given s :type (type s)}))

       (let [readers (get opts :readers ::dynamic)
             default (get opts :default ::dynamic)

             ;; Nb we ignore as implementation[1] detail:
             ;;  *.tools.reader/*data-readers*,
             ;;  *.tools.reader/default-data-reader-fn*
             ;;
             ;; [1] Lib consumer doesn't care that we've standardized to
             ;;     using tools.reader under the covers

             readers
             (if-not (kw-identical? readers ::dynamic)
               readers
                                                 
               ;; Unfortunate (slow), but faster than gc'd memoization in most cases:
                      (map-keys symbol @cljs.reader/*tag-table*))

             default
             (if-not (kw-identical? default ::dynamic)
               default
                                                           
                      @cljs.reader/*default-data-reader-fn*)

             opts (assoc opts :readers readers :default default)]

                                                             
                   (cljs.tools.reader.edn/read-string opts s))))))

(defn pr-edn
  "Prints arg to an edn string readable with `read-edn`."
  ([      x] (pr-edn nil x))
  ([_opts x]
          (binding [*print-level* nil, *print-length* nil] (pr-str x))
        
                                    
                                                     
                                             
                
                
                                                      
                       ))

;;;; Errors

(defn error-data
  "Returns data map iff `x` is an error of any type on platform."
  ;; Note that Clojure 1.7+ now also has `Throwable->map`
  [x]
  (when-let [data-map
             (or (ex-data x) ; ExceptionInfo
                                                       
                      (when (instance? js/Error  x) {}))]
    (conj
                                                              
                                                    
                                                    
                                                      
             (let [err x] ; (catch :default t <...)
               {:err-type  (type      err)
                :err-msg   (.-message err)
                :err-cause (.-cause   err)})
      data-map)))

(comment
  (error-data (Throwable. "foo"))
  (error-data (Exception. "foo"))
  (error-data (ex-info    "foo" {:bar :baz})))

                                                      
                                                                             
                                                                                  
                                                                 
                                  
            
                                                              
                                                                
                                               
            
                                                                                      
                                                                                         

(comment
  (macroexpand '(catching (do "foo") e e (println "finally")))
  (catching (zero? "9")))

                                                                  
                                                          

(comment (caught-error-data (/ 5 0)))

;;;; Type preds, etc.
;; - TODO Could really do with a portable ^boolean hint
;; - Some of these have slowly been getting added to Clojure core; make sure
;;   to :exclude any official preds using the same name

     
   
             
                                                           
                                           

                                                      
                                                      
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       
                                                                       

                                                                       
                                                                           
                                                                       
                                                                           
                                                                       
                                                                           

                                                                     
                                                               
                                                              
                                                          
                                                           

      
(do
  (defn ^boolean some?       [x] (if (nil? x) false true))
  (defn ^boolean stringy?    [x] (or (keyword? x) (string? x)))
  (defn ^boolean ident?      [x] (or (keyword? x) (symbol? x)))
  (defn ^boolean boolean?    [x] (or (true?    x) (false?  x)))
  ;; (defn uri?              [x])
  (defn ^boolean indexed?    [x] (satisfies?  IIndexed            x))
  (defn ^boolean named?      [x] (implements? INamed              x))
  (defn ^boolean editable?   [x] (implements? IEditableCollection x))
  (defn ^boolean derefable?  [x] (satisfies?  IDeref              x))
  ;; (defn throwable?        [x])
  ;; (defn exception?        [x])
  (defn ^boolean      error? [x] (instance?   js/Error            x))
  (defn ^boolean       atom? [x] (instance?   Atom                x))
  (defn ^boolean   lazy-seq? [x] (instance?   LazySeq             x))
  (defn ^boolean re-pattern? [x] (instance?   js/RegExp           x))

  (defn ^boolean simple-ident?      [x] (and (ident?   x) (nil? (namespace x))))
  (defn ^boolean qualified-ident?   [x] (and (ident?   x)       (namespace x) true))
  (defn ^boolean simple-symbol?     [x] (and (symbol?  x) (nil? (namespace x))))
  (defn ^boolean qualified-symbol?  [x] (and (symbol?  x)       (namespace x) true))
  (defn ^boolean simple-keyword?    [x] (and (keyword? x) (nil? (namespace x))))
  (defn ^boolean qualified-keyword? [x] (and (keyword? x)       (namespace x) true))

  (defn ^boolean nempty-str? [x] (and (string? x) (not (= x ""))))
  (defn ^boolean nblank-str? [x] (and (string? x) (not (str/blank? x))))
  (defn ^boolean nblank?     [x]                  (not (str/blank? x)))
  (defn ^boolean vec2?       [x] (and (vector? x) (= (count x) 2)))
  (defn ^boolean vec3?       [x] (and (vector? x) (= (count x) 3))))

     
   
                                           
                                    
                            

                                                                 
                  
       
                           
                           
                                          
                                          
                         
                           

                                                        
                                                       
                                                       

                                                     
                                                    
                                                    

                                                       
                                                      
                                                      

                                                     

                 
                    
                                                         

      
(do
  (defn ^boolean nneg?        [x] (not (neg? x)))
  (defn ^boolean zero-num?    [x] (= x 0))
  (defn ^boolean regular-num? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))))

    (defn ^boolean float? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))
      (not (== (js/parseFloat x) (js/parseInt x 10)))))

  (defn ^boolean int? [x]
    (and
      (number? x)
      (not ^boolean (js/isNaN x))
      (not (identical? x js/Infinity))
      (== (js/parseFloat x) (js/parseInt x 10))))

  (defn ^boolean nat-num?   [x] (and (number? x) (not (neg? x))))
  (defn ^boolean pos-num?   [x] (and (number? x)      (pos? x)))
  (defn ^boolean neg-num?   [x] (and (number? x)      (neg? x)))

  (defn ^boolean nat-int?   [x] (and (int? x) (not (neg? x))))
  (defn ^boolean pos-int?   [x] (and (int? x)      (pos? x)))
  (defn ^boolean neg-int?   [x] (and (int? x)      (neg? x)))

  (defn ^boolean nat-float? [x] (and (float? x) (not (neg? x))))
  (defn ^boolean pos-float? [x] (and (float? x)      (pos? x)))
  (defn ^boolean neg-float? [x] (and (float? x)      (neg? x)))

  (defn ^boolean udt?       [x] (and (int? x) (not (neg? x))))

  (defn ^boolean pval? [x]
    (and (number? x)
      (let [n (double x)] (and (>= n 0.0) (<= n 1.0))))))

(compile-if have-core-async?
                                                                                                   
         (defn ^boolean chan? [x] (instance?    cljs.core.async.impl.channels.ManyToManyChannel x))
         (defn          chan? [x] nil))

(do
  ;; ClojureScript keywords aren't `identical?` and Clojure doesn't have
  ;; `keyword-identical?`. This util helps alleviate the pain of writing
  ;; cross-platform code, Ref. http://goo.gl/be8CGP
                                                        
         (def ^boolean kw-identical? keyword-identical?))

;;;; Type coercions

(do
  ;; (defn not-blank     [s] (if (str/blank? s) nil s))
  ;; (defn not-empty-str [s] (if #+clj (.isEmpty ^String s) #+cljs (= s "") nil s))

  (defn as-?nzero  [x] (when (number?  x) (if (zero? x)      nil x)))
  (defn as-?nblank [x] (when (string?  x) (if (str/blank? x) nil x)))
  (defn as-?kw     [x] (cond (keyword? x)       x  (string? x) (keyword x)))
  (defn as-?name   [x] (cond (named?   x) (name x) (string? x)          x))
  (defn as-?qname  [x]
    (cond
      (named?  x) (let [n (name x)] (if-let [ns (namespace x)] (str ns "/" n) n))
      (string? x) x))

  (defn as-?nempty-str [x]
    (when (string? x)
      (if                                   (= x "") nil x)))

  (defn as-?int #_as-?long [x]
    (cond (number? x) (long x)
          (string? x)
                 (let [x (js/parseInt x 10)] (when-not (js/isNaN x) x))
                                        
                                                    
                                                        
                                                                   ))

  (defn as-?float #_as-?double [x]
    (cond (number? x) (double x)
          (string? x)
                 (let [x (js/parseFloat x)] (when-not (js/isNaN x) x))
                                            
                                                          ))

  (defn as-?udt       [x] (when-let [n (as-?int   x)] (when-not (neg? ^long   n) n)))
  (defn as-?nat-int   [x] (when-let [n (as-?int   x)] (when-not (neg? ^long   n) n)))
  (defn as-?pos-int   [x] (when-let [n (as-?int   x)] (when     (pos? ^long   n) n)))
  (defn as-?nat-float [x] (when-let [n (as-?float x)] (when-not (neg? ^double n) n)))
  (defn as-?pos-float [x] (when-let [n (as-?float x)] (when     (pos? ^double n) n)))
  (defn as-?pval      [x] (when-let [^double f (as-?float x)]
                            (if (> f 1.0) 1.0 (if (< f 0.0) 0.0 f))))
  (defn as-?bool [x]
    (cond
      (nil? x) nil
      (or (true? x) (false? x)) x
      (or (= x 0) (= x "false") (= x "FALSE") (= x "0")) false
      (or (= x 1) (= x "true")  (= x "TRUE")  (= x "1")) true))

  ;; Uses simple regex to test for basic "x@y.z" form:
  (defn as-?email  [?s] (when ?s (re-find #"^[^\s@]+@[^\s@]+\.\S*[^\.]$" (str/trim ?s))))
  (defn as-?nemail [?s] (when-let [email (as-?email ?s)] (str/lower-case email)))
  (comment (mapv as-?nemail ["foo" "foo@" "foo@bar" "Foo@BAR.com"
                             "foo@@bar.com" "foo@bar.com." "foo.baz@bar.com"])))

(defn- try-pred [pred x] (catching (pred x) _ false))
(defn                    ^boolean when? [pred x] (when (try-pred pred x) x))
(defn is! "Cheaper `have!` that provides less diagnostic info."
  ([     x           ] (is! identity x nil)) ; Nb different to single-arg `have`
  ([pred x           ] (is! identity x nil))
  ([pred x fail-?data]
   (if (try-pred pred x)
     x
     (throw
       (ex-info (str "`is!` " (str pred) " failure against arg: " (pr-str x))
         {:given x :type (type x) :fail-?data fail-?data})))))

(comment [(is! false) (when-let [n (when? nneg? (as-?int 37))] n)])

(defn -as-throw [as-name x]
  (throw (ex-info (str "`as-" (name as-name) "` failed against: `" (pr-str x) "`")
           {:given x :type (type x)})))

(do
  (defn as-nzero             [x] (or (as-?nzero      x) (-as-throw :nzero      x)))
  (defn as-nblank            [x] (or (as-?nblank     x) (-as-throw :nblank     x)))
  (defn as-nempty-str        [x] (or (as-?nempty-str x) (-as-throw :nempty-str x)))
  (defn as-kw                [x] (or (as-?kw         x) (-as-throw :kw         x)))
  (defn as-name              [x] (or (as-?name       x) (-as-throw :name       x)))
  (defn as-qname             [x] (or (as-?qname      x) (-as-throw :qname      x)))
  (defn as-email             [x] (or (as-?email      x) (-as-throw :email      x)))
  (defn as-nemail            [x] (or (as-?nemail     x) (-as-throw :nemail     x)))
  (defn as-udt         ^long [x] (or (as-?udt        x) (-as-throw :udt        x)))
  (defn as-int         ^long [x] (or (as-?int        x) (-as-throw :int        x)))
  (defn as-nat-int     ^long [x] (or (as-?nat-int    x) (-as-throw :nat-int    x)))
  (defn as-pos-int     ^long [x] (or (as-?pos-int    x) (-as-throw :pos-int    x)))
  (defn as-float     ^double [x] (or (as-?float      x) (-as-throw :float      x)))
  (defn as-nat-float ^double [x] (or (as-?nat-float  x) (-as-throw :nat-float  x)))
  (defn as-pos-float ^double [x] (or (as-?pos-float  x) (-as-throw :pos-float  x)))
  (defn as-pval      ^double [x] (or (as-?pval       x) (-as-throw :pval       x)))
  (defn as-bool              [x] (let [?b (as-?bool  x)] (if-not (nil? ?b) ?b (-as-throw :bool x)))))

;;;; Validation

                    
                                                                      
                                                                                
                
                                                             
                                                                
                                                                

                   
                                                                       
                                     
                
                                   
                                                                                
                            

(comment
  (check-some false [:bad-type (string? 0)] nil [:blank (str/blank? 0)])
  (check-all  false [:bad-type (string? 0)] nil [:blank (str/blank? 0)]))

;;;; Keywords

(defn explode-keyword [k] (str/split (as-qname k) #"[\./]"))
(comment (explode-keyword :foo.bar/baz))

(defn merge-keywords
  ([ks            ] (merge-keywords ks false))
  ([ks omit-slash?]
   (when (seq ks)
     (let [parts
           (reduce
             (fn [acc in]
               (if (nil? in)
                 acc
                 (reduce conj acc (explode-keyword in))))
             [] ks)]

       (when (seq parts)
         (if omit-slash?
           (keyword (str/join "." parts))
           (let [ppop (pop parts)]
             (keyword (when (seq ppop) (str/join "." ppop))
               (peek parts)))))))))

(comment (merge-keywords [:foo.bar nil "d.e/k" :baz.qux/end nil] true))

;;;; Bytes

     
   
                                                
                                                                                       
                                                              

                                                
                           
                           
                                     
                                        
                                        
           

                                      
                   
              
                           
                       
                                                
                                                       

          
                                                             
                                                                               

;;;; Volatiles

(do
  ;; Back-compatible volatiles, private for now
  ;; Note: benching seems to consistently show that atoms are actually no
  ;; slower than volatiles when used in the same way (i.e. w/o contention
  ;; or watches)?
  (compile-if (volatile! nil)
    (do
                                                                  
                                                                  
                                                                       )
    (do
                                                                 
                                                                 
                                                                      )))

;;;; Reduce

;; (defn ensure-reduced [x] (if (reduced? x) x (reduced x)))
(defn preserve-reduced "As `core/preserving-reduced`."
  [rf]
  (fn [acc in]
    (let [result (rf acc in)]
      (if (reduced? result)
        (reduced result)
        result))))

(compile-if have-transducers?
  (defn reduce-kvs
    "Like `reduce-kv` but takes a flat sequence of kv pairs."
    [rf init kvs]
    (transduce (partition-all 2)
      (completing (fn [acc [k v]] (rf acc k v))) init kvs))

  (defn reduce-kvs [rf init kvs]
    (reduce (fn [acc [k v]] (rf acc k v)) init (partition-all 2 kvs))))

(compile-if clojure.lang.LongRange ; Clojure 1.7+ (no Cljs support yet)
  (defn reduce-n [rf init ^long n] (reduce rf init (range n)))
  (defn reduce-n [rf init ^long n]
    (loop [acc init idx 0]
      (if (== idx n)
        acc
        (let [acc (rf acc idx)]
          (if (reduced? acc)
            @acc
            (recur acc (unchecked-inc idx))))))))

(comment (reduce-n conj [] 100))

(let [inc (fn [n] (inc ^long n))] ; For var deref, boxing
  (defn reduce-indexed
    "Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`."
    [rf init coll]
    (let [i (-vol! -1)]
      (reduce (fn [acc in] (rf acc (-vol-swap! i inc) in)) init coll))))

(comment (reduce-indexed (fn [acc idx in] (assoc acc idx in)) {} [:a :b :c]))

      
(defn reduce-obj "Like `reduce-kv` but for JavaScript objects."
  [f init o]
  (reduce (fn [acc k] (f acc k (gobj/get o k nil))) init (js-keys o)))

(do
         (defn run!     [proc coll] (reduce     #(proc %2)    nil coll) nil)
         (defn run-kv!  [proc    m] (reduce-kv  #(proc %2 %3) nil    m) nil)
         (defn run-kvs! [proc  kvs] (reduce-kvs #(proc %2 %3) nil  kvs) nil)
         (defn run-obj! [proc  obj] (reduce-obj #(proc %2 %3) nil  obj) nil))

(do ; Faster `reduce`-based variants
  (defn rsome      [pred coll] (reduce    (fn [acc in]  (when-let [p (pred in)]  (reduced p)))     nil coll))
  (defn rsome-kv   [pred coll] (reduce-kv (fn [acc k v] (when-let [p (pred k v)] (reduced p)))     nil coll))
  (defn rfirst     [pred coll] (reduce    (fn [acc in]  (when        (pred in)   (reduced in)))    nil coll))
  (defn rfirst-kv  [pred coll] (reduce-kv (fn [acc k v] (when        (pred k v)  (reduced [k v]))) nil coll))
  (defn revery?    [pred coll] (reduce    (fn [acc in]  (if (pred in)  true (reduced false))) true coll))
  (defn revery-kv? [pred coll] (reduce-kv (fn [acc k v] (if (pred k v) true (reduced false))) true coll))
  (defn revery     [pred coll] (reduce    (fn [acc in]  (if (pred in)  coll (reduced nil))) coll coll))
  (defn revery-kv  [pred coll] (reduce-kv (fn [acc k v] (if (pred k v) coll (reduced nil))) coll coll)))

(comment
  ;; Note that `(every? even? nil)` ≠ `(revery even? nil)`
  [(every? even? nil) (revery even? nil)]
  (qb 1e4
    (rsome #(when (string? %) %) [:a :b :c :d "boo"])
    (rfirst        string?       [:a :b :c :d "boo"])))

;;;; Math

(let [inc (fn [n] (inc ^long n))]
  (defn idx-fn
    "Returns a new stateful index fn that returns: 0, 1, 2, ..."
    []
           (let [idx_ (-vol! -1)] (fn [] (-vol-swap! idx_ inc)))
                                                                
                                             ))

(def ^:const max-long                              9007199254740991)
(def ^:const min-long                             -9007199254740991)

(defn                       ^boolean approx==
  ([      x y] (< (Math/abs (- (double x) (double y))) 0.001))
  ([signf x y] (< (Math/abs (- (double x) (double y))) (double signf))))

(comment (qb 1e5 (approx== 0.01 3.141592 (/ 22 7))))

;; This must reflect to output correct long/double types:
(defn clamp [nmin nmax n] (if (< n nmin) nmin (if (> n nmax) nmax n)))

(do ; These will pass primitives through w/o reflection
                                                                            
                                                                            
                                                                            
                                                                            
                                                                                   
                                                                                   
                                                                      
                                                                                        )

(defn pow [n exp] (Math/pow n exp))
(defn abs [n]     (if (neg? n) (- n) n)) ; #+clj (Math/abs n) reflects
(defn round* ; round
  ([             n] (round* :round nil n))
  ([type         n] (round* type   nil n))
  ([type nplaces n]
   (let [n        (double n)
         modifier (when nplaces (Math/pow 10.0 nplaces))
         n*       (if-not modifier n (* n ^double modifier))
         rounded
         (case type
           ;;; Note same API for both #+clj, #+cljs:
           :round (Math/round n*) ; Round to nearest int or nplaces
           :floor (Math/floor n*) ; Round down to -inf
           :ceil  (Math/ceil  n*) ; Round up to +inf
           :trunc (long n*)       ; Round up/down toward zero
           (throw (ex-info "Unrecognized round type" {:given type})))]
     (if-not modifier
       (long rounded)                        ; Returns long
       (/ (double rounded) ^double modifier) ; Returns double
       ))))

(comment
  [(round* :floor -1.5)
   (round* :trunc -1.5)
   (round* :floor 5 1.1234567)
   (round* :round 5 1.1234567)])

(do ; Optimized common cases
  (defn round0   ^long [n]            (Math/round    (double n)))
  (defn round1 ^double [n] (/ (double (Math/round (* (double n)  10.0)))  10.0))
  (defn round2 ^double [n] (/ (double (Math/round (* (double n) 100.0))) 100.0)))

(defn exp-backoff "Returns binary exponential backoff value for n<=36."
  ([^long n-attempt] (exp-backoff n-attempt nil))
  ([^long n-attempt {:keys [min max factor] :or {factor 1000}}]
   (let [n (if (> n-attempt 36) 36 n-attempt) ; >2^36 excessive
         b (Math/pow 2 n)
         t (long (* (+ b ^double (rand b)) 0.5 (double factor)))
         t (long (if min (if (< t ^long min) min t) t))
         t (long (if max (if (> t ^long max) max t) t))]
     t)))

(comment (exp-backoff 128))

;;;; Misc

;; js/foo      - `foo` in global object/ns (depends on *target*)
;; js/window   - `window` object: global ns in browsers
;; js/global   - `global` object: global ns in Node.js, etc.?
;; goog/global - Closure's environment-agnostic global object
;;
       (def node-target? (= *target* "nodejs"))
       (def js-?win (when (exists? js/window) js/window))

(defn force-ref "Like `force` for refs." [x] (if (derefable? x) (deref x) x))
(defn merge-meta   [x m] (with-meta x (merge (meta x) m)))
(defn without-meta [x] (if (meta x) (with-meta x nil) x))

(defn                    ^boolean some=
  ([x y]        (and (some? x) (= x y)))
  ([x y & more] (and (some? x) (= x y) (revery? #(= % x) more))))

(comment (some= :foo :foo nil))

(defn nnil "Returns first non-nil arg, or nil."
  ([            ] nil)
  ([x           ] x)
  ([x y         ] (if (nil? x) y x))
  ([x y z       ] (if (nil? x) (if (nil? y) z y) x))
  ([x y z & more] (if (nil? x) (if (nil? y) (if (nil? z) (rfirst some? more) z) y) x)))

(comment
  (qb 1e6
    (or   nil nil nil false :a)
    (nnil nil nil nil false :a)))

(defn parse-version [x]
  (let [[s-version ?s-qualifier] (str/split (str x) #"-" 2)]
    {:version   (when-let [s (re-seq #"\d+" s-version)] (mapv as-?int s))
     :qualifier (when-let [s ?s-qualifier] (str/lower-case s))}))

(comment [(parse-version "40.32.34.8-foo") (parse-version 10.3)])

(defn assert-min-encore-version
  "Version check for dependency conflicts, etc."
  [min-version]
  (let [[xc yc zc] encore-version
        [xm ym zm] (if (vector? min-version) min-version (:version (parse-version min-version)))
        [xm ym zm] (mapv #(or % 0) [xm ym zm])]

    (when-not (or (> xc xm) (and (= xc xm) (or (> yc ym) (and (= yc ym) (>= zc zm)))))
      (throw
        (ex-info "Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions."
          {:min-version  (str/join "." [xm ym zm])
           :your-version (str/join "." [xc yc zc])})))))

(comment (assert-min-encore-version 3.10))

;;;; Collections

                                                                            
       (defn ^boolean queue? [x] (instance?    cljs.core.PersistentQueue x))
(defn queue "Returns a PersistentQueue."
  ([coll] (into (queue) coll))
  ([]                                          
                cljs.core.PersistentQueue.EMPTY))

(defn queue* [& items] (queue items))

(compile-if have-transducers?
  (do ; Clojure 1.7-alpha5+ introduced similar native behaviour
    (def vec* vec)
    (def set* set))
  (do
    (defn vec* [x] (if (vector? x) x (vec x)))
    (defn set* [x] (if (set?    x) x (set x)))))

      
(defn oget "Like `get` for JS objects, Ref. https://goo.gl/eze8hY."
  ([o k          ] (gobj/get o k nil))
  ([o k not-found] (gobj/get o k not-found)))

      
(let [sentinel (js-obj)]
  (defn oget-in "Like `get-in` for JS objects."
    ([o ks] (oget-in o ks nil))
    ([o ks not-found]
     (loop [o o
            ks (seq ks)]
       (if ks
         (let [o (gobj/get o (first ks) sentinel)]
           (if (identical? o sentinel)
             not-found
             (recur o (next ks))))
         o)))))

(do
  (defn conj-some "Conjoins each non-nil value."
    ([             ] [])
    ([coll         ] coll)
    ([coll x       ] (if (nil? x) coll (conj coll x)))
    ([coll x & more] (reduce conj-some (conj-some coll x) more)))

  (defn conj-when "Conjoins each truthy value."
    ([             ] [])
    ([coll         ] coll)
    ([coll x       ] (if x (conj coll x) coll))
    ([coll x & more] (reduce conj-when (conj-when coll x) more))))

(comment (conj-some [] :a :b nil :c :d nil false :e))

(do
  (defn assoc-some "Assocs each kv iff its value is not nil."
    ([m k v      ] (if (nil? v) (if (nil? m) {} m) (assoc m k v)))
    ([m k v & kvs]
     (reduce-kvs
       (fn [m k v] (if (nil? v) m (assoc m k v)))
       (assoc-some m k v)
       kvs))

    ([m kvs]
     (reduce-kv
       (fn [m k v] (if (nil? v) m (assoc m k v)))
       (if (nil? m) {} m)
       kvs)))

  (defn assoc-when "Assocs each kv iff its val is truthy."
    ([m k v      ] (if-not v (if (nil? m) {} m) (assoc m k v)))
    ([m k v & kvs]
     (reduce-kvs
       (fn [m k v] (if-not v m (assoc m k v)))
       (assoc-when m k v)
       kvs))

    ([m kvs]
     (reduce-kv
       (fn [acc k v] (if-not v m (assoc m k v)))
       (if (nil? m) {} m)
       kvs)))

  ;; Handy as l>r merge
  (defn assoc-nx "Assocs each kv iff its key doesn't already exist."
    ([m k v] (if (contains? m k) m (assoc m k v)))
    ([m k v & kvs] (reduce-kvs assoc-nx (assoc-nx m k v) kvs))
    ([m kvs]
     (reduce-kv
       (fn [m k v] (if (contains? m k) m (assoc m k v)))
       (if (nil? m) {} m)
       kvs))))

(comment
  (assoc-some {:a :A} :b nil :c :C :d nil :e :E)
  (assoc-some {:a :A} {:b :B :c nil :d :D :e false})
  (reduce-kv assoc-nx {:a :A} {:a :a :b :b}))

(defn get-subvec
  "Like `subvec` but never throws (snaps to valid start and end indexes)."
  ([v ^long start]
   (let [start (if (< start 0) 0 start)
         vlen  (count v)]
     (if (>= start vlen)
       []
       (subvec v start vlen))))

  ([v ^long start ^long end]
   (let [start (if (< start 0) 0 start)
         vlen  (long (count v))
         end   (if (> end vlen) vlen end)]
     (if (>= start end)
       []
       (subvec v start end)))))

(defn get-subvector
  "Like `get-subvec` but:
    - Takes `length` instead of `end` (index).
    - -ive `start` => index from right of vector."
  ([v ^long start]
   (let [vlen (count v)]
     (if (< start 0)
       (let [start (+ start vlen)
             start (if (< start 0) 0 start)]
         (subvec v start vlen))
       (if (>= start vlen)
         []
         (subvec v start vlen)))))

  ([v ^long start ^long length]
   (if (<= length 0)
     []
     (let [vlen (long (count v))]
       (if (< start 0)
         (let [start (+ start vlen)
               start (if (< start 0) 0 start)
               end   (+ start length)
               end   (if (> end vlen) vlen end)]
           (subvec v start end))

         (let [end (+ start length)
               end (if (> end vlen) vlen end)]
           (if (>= start end)
             []
             (subvec v start end))))))))

(comment
  [(get-subvec    nil 2)
   (get-subvector nil 2)]

  (qb 1e6
    (subvec        [:a :b :c] 1)
    (get-subvec    [:a :b :c] 1)
    (get-subvector [:a :b :c] 1))
  ;; [60.01 63.91 58.6]
  )

(defn vnext        [v] (when (> (count v) 1) (subvec v 1)))
(defn vrest        [v] (if   (> (count v) 1) (subvec v 1) []))
(defn vsplit-last  [v] (let [c (count v)] (when (> c 0) [(when (> c 1) (pop v)) (peek v)])))
(defn vsplit-first [v] (let [c (count v)] (when (> c 0) (let [[v1] v] [v1 (when (> c 1) (subvec v 1))]))))

(comment
  (vsplit-first [:a :b :c])
  (vsplit-last  [:a :b :c]))

(defn- fsplit-last
  "Faster (f (vec (butlast xs)) (last x))."
  [f xs]
  (loop [butlast [] xs xs]
    (let [[x1 & xn] xs]
      (if xn
        (recur (conj butlast x1) xn)
        (f butlast x1)))))

(comment (let [v [:a :b]] (qb 1e6 (fsplit-last vector v) [(butlast v) (last v)])))

(compile-if have-transducers?
  (defn takev [n coll] (if (vector? coll) (get-subvector coll 0 n) (into [] (take n) coll)))
  (defn takev [n coll] (if (vector? coll) (get-subvector coll 0 n) (vec (take n coll)))))

(defn                                 ^boolean distinct-elements?
  [x] (or (set? x) (= (count x) (count (set* x)))))

(def seq-kvs "(seq-kvs {:a :A}) => (:a :A)." (partial reduce concat))
(defn mapply "Like `apply` but calls `seq-kvs` on final arg."
  [f & args] (apply f (fsplit-last (fn [xs lx] (concat xs (seq-kvs lx))) args)))

(comment [(seq-kvs {:a :A :b :B}) (mapply str 1 2 3 {:a :A})])

(defn into-all "Like `into` but supports multiple \"from\"s."
  ([to from       ] (into to from))
  ([to from & more]
   (persistent!
     (reduce (fn [acc in] (reduce conj! acc in))
       (transient to)
       (cons from more)))))

(defn repeatedly-into
  "Like `repeatedly` but faster and `conj`s items into given collection."
  [coll ^long n f]
  (if (and (> n 10) (editable? coll))
    (persistent! (reduce-n (fn [acc _] (conj! acc (f))) (transient coll) n))
    (do          (reduce-n (fn [acc _] (conj  acc (f)))            coll  n))))

(comment (repeatedly-into [] 100 (partial rand-nth [1 2 3 4 5 6])))

(compile-if have-transducers?
  (defn into!
       ([to       from] (reduce          conj! to from))
       ([to xform from] (transduce xform conj! to from)))
  (defn into! [to from] (reduce          conj! to from)))

(compile-if have-transducers?
  (defn xdistinct
    ([] (distinct)) ; core now has a distinct transducer
    ([keyfn]
     (fn [rf]
       (let [seen_ (volatile! #{})]
         (fn
           ([]    (rf))
           ([acc] (rf acc))
           ([acc input]
            (let [k (keyfn input)]
              (if (contains? @seen_ k)
                acc
                (do (vswap! seen_ conj k)
                    (rf acc input)))))))))))

(comment (into [] (xdistinct) [1 2 3 1 4 5 2 6 7 1]))

(do ; Note `mapv`-like nil->{} semantics, no transients
  (defn map-vals       [f m] (if (nil? m) {} (reduce-kv (fn [m k v] (assoc m k (f v))) m m)))
  (defn map-keys       [f m] (if (nil? m) {} (reduce-kv (fn [m k v] (assoc m (f k) v)) {} m)))
  (defn filter-keys [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k) m (dissoc m k))) m m)))
  (defn filter-vals [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred v) m (dissoc m k))) m m)))
  (defn remove-keys [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k) (dissoc m k) m)) m m)))
  (defn remove-vals [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred v) (dissoc m k) m)) m m))))

(do
  (defn                       ^boolean ks=      [ks m] (=             (set (keys m)) (set* ks)))
  (defn                       ^boolean ks<=     [ks m] (set/subset?   (set (keys m)) (set* ks)))
  (defn                       ^boolean ks>=     [ks m] (set/superset? (set (keys m)) (set* ks)))
  (defn                       ^boolean ks-nnil? [ks m] (revery?     #(some? (get m %))     ks)))

(comment
  (ks=      #{:a :b} {:a :A :b :B  :c :C})
  (ks<=     #{:a :b} {:a :A :b :B  :c :C})
  (ks>=     #{:a :b} {:a :A :b :B  :c :C})
  (ks-nnil? #{:a :b} {:a :A :b :B  :c nil})
  (ks-nnil? #{:a :b} {:a :A :b nil :c nil}))

(defn update-in
  "Like `core/update-in` but resolves an ambiguity with empty `ks`,
  adds support for `not-found`, `:swap/dissoc` vals."
  ;; Recall no `korks` support due to ambiguity: nil => [] or [nil]
  ([m ks           f] (update-in m ks nil f))
  ([m ks not-found f]
   (if-let [ks-seq (seq ks)]
     (let [k (nth ks 0)]
       (if-let [ks (next ks-seq)]
         (assoc m k (update-in (get m k) ks not-found f))
         (if (kw-identical? f :swap/dissoc)
           (dissoc m k)
           (let [v (f (get m k not-found))]
             (if (kw-identical? v :swap/dissoc)
               (dissoc m k)
               (assoc  m k v))))))
     ;; Resolve nil => [nil] ambiguity in `core/update-in`, `assoc-in`, etc.:
     (f m))))

(comment (update-in {:a :A :b :B} [:a] (fn [_] "boo")))

(defn                           ^boolean contains-in?
  ([coll ks k] (contains? (get-in coll ks) k))
  ([coll ks  ]
   (if (seq ks)
     (fsplit-last (fn [ks lk] (contains-in? coll ks lk)) ks)
     false)))

(defn dissoc-in
  ([m ks dissoc-k]        (update-in m ks nil (fn [m]       (dissoc m dissoc-k))))
  ([m ks dissoc-k & more] (update-in m ks nil (fn [m] (apply dissoc m dissoc-k more)))))

(comment
  [(dissoc-in    {:a :A} [] :a)
   (dissoc-in    {:a {:b {:c :C :d :D :e :E}}} [:a :b] :c :e)
   (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a :b :c])
   (contains-in? {:a {:b {:c :C :d :D :e :E}}} [:a])])

(defn interleave-all "Greedy version of `interleave`."
  ([     ] '())
  ([c1   ] (lazy-seq c1))
  ([c1 c2]
     (lazy-seq
      (let [s1 (seq c1) s2 (seq c2)]
        (cond
         (and s1 s2)
         (cons (first s1) (cons (first s2)
                                (interleave-all (rest s1) (rest s2))))
         s1 s1
         s2 s2))))
  ([c1 c2 & colls]
   (lazy-seq
      (let [ss (filter identity (map seq (conj colls c2 c1)))]
        (concat (map first ss)
                (apply interleave-all (map rest ss)))))))

(comment (interleave-all [:a :b :c] [:A :B :C :D :E] [:1 :2]))

(defn vinterleave-all [c1 c2]
  (loop [v (transient []) s1 (seq c1) s2 (seq c2)]
    (cond
      (and s1 s2)
      (recur (conj! (conj! v (first s1)) (first s2)) (next s1) (next s2))
      s1    (persistent! (reduce conj! v s1))
      s2    (persistent! (reduce conj! v s2))
      :else (persistent! v))))

(comment
  (qb 1e5
    (vec (interleave-all [:a :b :c :d] [:a :b :c :d :e]))
        (vinterleave-all [:a :b :c :d] [:a :b :c :d :e])))

                                                                

(let [not-found (new-object)]
  (defn -merge-with [nest? f maps]
    (reduce
      (fn [acc in]
        (if (nil? in)
          acc
          (reduce-kv
            (fn rf2 [acc k rv]
              (let [lv (get acc k not-found)]
                (cond
                  (identical? lv not-found)
                  (assoc acc k rv)

                  (kw-identical? rv :swap/dissoc)
                  (dissoc acc k)

                  (and nest? (map? rv) (map? lv))
                  (assoc acc k (reduce-kv rf2 lv rv))

                  :else
                  (let [new-rv (f lv rv)]
                    (if (kw-identical? new-rv :swap/dissoc)
                      (dissoc acc k)
                      (assoc  acc k new-rv))))))
            (or acc {})
            in)))
      nil
      maps)))

(do
  (defn merge "Like `core/merge` but faster, supports `:swap/dissoc` rvals."
    [& maps] (-merge-with false (fn [x y] y) maps))

  (defn merge-with "Like `core/merge-with` but faster, supports `:swap/dissoc` rvals."
    [f & maps] (-merge-with false f maps))

  (defn nested-merge "Like `merge` but does nested merging."
    [& maps] (-merge-with :nest (fn [x y] y) maps))

  (defn nested-merge-with "Like `merge-with` but does nested merging."
    [f & maps] (-merge-with :nest f maps)))

(comment
  [(nested-merge nil nil nil)
   (nested-merge nil nil {})
   (nested-merge
     {:a1 :A1 :b1 :B1  :c1 {:a2 :A2 :b2 {:a3 :A3 :b3 :B3  :d1 :D1 :e1 :E1}}}
     {        :b1 :B1* :c1 {        :b2 {        :b3 :B3* :d1 nil :e1 :swap/dissoc}}}
     nil
     {})]
  [nil {} {:a1 :A1, :b1 :B1*, :c1 {:a2 :A2, :b2 {:a3 :A3, :b3 :B3*, :d1 nil}}}])

;;;; Swap stuff

(do
  (deftype Swapped [newv returnv])
                                                           
         (defn ^boolean swapped? [x] (instance? Swapped x))
  (defn swapped ^Swapped [new-val return-val] (Swapped. new-val return-val))
  (defn swapped-vec [x]
    (if (instance? Swapped x)
      [(.-newv ^Swapped x) (.-returnv ^Swapped x)]
      [x x]))

  (comment (qb 1e6 (.-newv (swapped "foo")))))

(compile-if clojure.lang.IAtom
  (def ^:private ^:const atom-tag 'clojure.lang.IAtom)
  (def ^:private ^:const atom-tag  'clojure.lang.Atom))

                                     
                         
           
                                                                      
                                                       
                           

(defn -swap-val!
  "Used internally by memoization utils."
  [atom_ k f]
  (loop []
    (let [m0 @atom_
          v1 (f (get m0 k))
          m1 (assoc  m0 k v1)]
      (if (-cas! atom_ m0 m1)
        v1
        (recur)))))

(do
  (defn- -swap-k0! [return atom_ f]
    (loop []
      (let [v0  @atom_
            s1  (f v0)
            sw? (instance? Swapped s1)
            v1  (if sw? (.-newv ^Swapped s1) s1)]
        (if (-cas! atom_ v0 v1)
          (if sw?
            (.-returnv ^Swapped s1)
            (return v0 v1))
          (recur)))))

  (defn- -reset-k0! [return atom_ v1]
    (loop []
      (let [v0 @atom_]
        (if (-cas! atom_ v0 v1)
          (return v0 v1)
          (recur)))))

  (defn- -swap-k1! [return atom_ k not-found f]
    (if (kw-identical? f :swap/dissoc)
      (loop []
        (let [m0 @atom_
              m1 (dissoc m0 k)]
          (if (-cas! atom_ m0 m1)
            (return (get m0 k not-found) :swap/dissoc)
            (recur))))

      (loop []
        (let [m0  @atom_
              v0  (get m0 k not-found)
              s1  (f v0)
              sw? (instance? Swapped s1)
              v1  (if sw? (.-newv ^Swapped s1) s1)
              m1  (if (kw-identical? v1 :swap/dissoc)
                    (dissoc m0 k)
                    (assoc  m0 k v1))]
          (if (-cas! atom_ m0 m1)
            (if sw?
              (.-returnv ^Swapped s1)
              (return v0 v1))
            (recur))))))

  (defn- -reset-k1! [return atom_ k not-found v1]
    (loop []
      (let [m0 @atom_
            m1 (assoc m0 k v1)]
        (if (-cas! atom_ m0 m1)
          (return (get m0 k not-found) v1)
          (recur)))))

  (defn- -swap-kn! [return atom_ ks not-found f]
    (if-let [ks-seq (seq ks)]
      (if (next ks-seq)

        (if (kw-identical? f :swap/dissoc)
          (loop []
            (let [m0 @atom_
                  m1 (fsplit-last (fn [ks lk] (dissoc-in m0 ks lk)) ks)]
              (if (-cas! atom_ m0 m1)
                (return (get-in m0 ks not-found) :swap/dissoc)
                (recur))))

          (loop []
            (let [m0  @atom_
                  v0  (get-in m0 ks not-found)
                  s1  (f v0)
                  sw? (instance? Swapped s1)
                  v1  (if sw? (.-newv ^Swapped s1) s1)
                  m1  (if (kw-identical? v1 :swap/dissoc)
                        (fsplit-last (fn [ks lk] (dissoc-in m0 ks lk)) ks)
                        (do                     (assoc-in  m0 ks v1)))]
              (if (-cas! atom_ m0 m1)
                (if sw?
                  (.-returnv ^Swapped s1)
                  (return v0 v1))
                (recur)))))

        (-swap-k1! return atom_ (nth ks 0) not-found f))
      (-swap-k0!   return atom_                      f)))

  (defn- -reset-kn! [return atom_ ks not-found v1]
    (if-let [ks-seq (seq ks)]
      (if (next ks-seq)
        (loop []
          (let [m0 @atom_
                m1 (assoc-in m0 ks v1)]
            (if (-cas! atom_ m0 m1)
              (return (get-in m0 ks not-found) v1)
              (recur))))

        (-reset-k1! return atom_ (nth ks 0) not-found v1))
      (-reset-k0!   return atom_                      v1))))

(let [return (fn [v0 v1] v1)]
  (defn swap-val!
    "Low-level util, returns <new-key-val> or <swapped-return-val>."
    ([atom_ k           f] (-swap-k1! return atom_ k nil       f))
    ([atom_ k not-found f] (-swap-k1! return atom_ k not-found f))))

(let [return (fn [v0 v1] v0)]
  (defn reset-val!
    "Low-level util, returns <old-key-val>."
    ([atom_ k           val] (-reset-k1! return atom_ k nil       val))
    ([atom_ k not-found val] (-reset-k1! return atom_ k not-found val))))

(let [return (fn [v0 v1] [v0 v1])]
  (defn swap-val!*
    "Low-level util, returns [<old-key-val> <new-key-val>]."
    ([atom_ k           f] (-swap-k1! return atom_ k nil       f))
    ([atom_ k not-found f] (-swap-k1! return atom_ k not-found f))))

(defn pull-val!
  "Removes and returns value mapped to key."
  ([atom_ k          ] (pull-val! atom_ k nil))
  ([atom_ k not-found]
   (let [[v0] (swap-val!* atom_ k not-found :swap/dissoc)]
     v0)))

(let [not-found (new-object)]
  (defn reset-val!?
    "Maps value to key and returns true iff the mapped value changed or
    was created."
    [atom_ k new-val]
    (let [v0 (reset-val! atom_ k not-found new-val)]
      (if (= v0 new-val) false true))))

;;

(let [return (fn [v0 v1] v1)]
  (defn swap-in!
    "Like `swap!` but supports `update-in` semantics,
    returns <new-key-val> or <swapped-return-val>."
    ([atom_              f] (-swap-k0! return atom_              f))
    ([atom_ ks           f] (-swap-kn! return atom_ ks nil       f))
    ([atom_ ks not-found f] (-swap-kn! return atom_ ks not-found f))))

(let [return (fn [v0 v1] v0)]
  (defn reset-in!
    "Like `reset!` but supports `update-in` semantics,
    returns <old-key-val>."
    ([atom_              val] (-reset-k0! return atom_              val))
    ([atom_ ks           val] (-reset-kn! return atom_ ks nil       val))
    ([atom_ ks not-found val] (-reset-kn! return atom_ ks not-found val))))

(let [return (fn [v0 v1] [v0 v1])]
  (defn swap-in!*
    "Like `swap!` but supports `update-in` semantics,
    returns [<old-key-val> <new-key-val>]."
    ([atom_              f] (-swap-k0! return atom_              f))
    ([atom_ ks           f] (-swap-kn! return atom_ ks nil       f))
    ([atom_ ks not-found f] (-swap-kn! return atom_ ks not-found f))))

(comment
  [(let [a_ (atom {:a :A :b :B})] [(swap-in! a_ [] (fn [m] (assoc m :c :C))) @a_])
   (let [a_ (atom {:a :A :b :B})] [(swap-in! a_ [] (fn [m] (swapped (assoc m :c :C) m))) @a_])
   (let [a_ (atom {:a {:b :B}})]  [(swap-in! a_ [:a] (fn [m] (assoc m :c :C))) @a_])
   (let [a_ (atom {:a {:b :B}})]  [(swap-in! a_ [:a] (fn [m] (swapped (assoc m :c :C) m))) @a_])
   (let [a_ (atom {:a {:b 100}})]  (swap-in! a_ [:a :b] inc)) ; => 101
   (let [a_ (atom {:a {:b :b1 :c :c1} :d :d1})] (swap-in! a_ [:a :c] :swap/dissoc) @a_)]

  [[{:a :A, :b :B, :c :C} {:a :A, :b :B, :c :C}]
   [{:a :A, :b :B} {:a :A, :b :B, :c :C}]
   [{:b :B, :c :C} {:a {:b :B, :c :C}}]
   [{:b :B} {:a {:b :B, :c :C}}]
   101
   {:a {:b :b1}, :d :d1}])

;;;; Instants

(do
                                                                            
                                                                                     
  (defn  now-dt       [] (now-dt*))
  (defn now-udt ^long [] (now-udt*))

                                                  
        
  (def now-nano "Uses window context as epoch, Ref. http://goo.gl/mWZWnR"
    (if-let [perf (and (oget js-?win "performance"))]
      ;; Ref. http://goo.gl/fn84us
      (if-let [f (or (oget perf "now")  (oget perf "mozNow") (oget perf "msNow")
                     (oget perf "oNow") (oget perf "webkitNow"))]
        ;; JS call returns millisecs double, accurate to 1/1000th of a ms:
        (fn [] (* 1000000 (long (.call f perf))))
        (fn [] (* 1000000 (now-udt*))))
      (fn []   (* 1000000 (now-udt*)))))

                                                                 )

;;;; Memoization

(defn memoize_
  "Like `core/memoize` but faster, non-racy, and supports invalidation."
  [f]
        
  (let [cache_ (volatile! {})
        get-sentinel (js-obj)]

    (fn [& xs]
      (let [x1 (first xs)]

        (cond
          (kw-identical? x1 :mem/del)
          (let [xn (next  xs)
                x2 (first xn)]
            (if (kw-identical? x2 :mem/all)
              (vreset! cache_ {})
              (vswap!  cache_ dissoc xn))
            nil)

          (kw-identical? x1 :mem/fresh)
          (let [xn (next xs)
                v  (apply f xn)] (vswap! cache_ assoc xn v) v)

          :else
          (let [v (get @cache_ xs get-sentinel)]
            (if (identical? v get-sentinel)
              (let [v (apply f xs)] (vswap! cache_ assoc xs v) v)
              v))))))

       
                              
                                                         

       
                                          
                                     
                                                                  

             
                           

             
                                     
                             
                              
                                           
                              
                                                    
                

                                       
                             
                                                                                   

               
                               
                                             
                                                           )

(comment
  (do
    (def foo (memoize_ (fn [& args] [(rand) args])))
    (def f0  (memoize  (fn [])))
    (def f0_ (memoize_ (fn [])))
    (def f1  (memoize  (fn [x] x)))
    (def f1_ (memoize_ (fn [x] x))))

  (qb 1e5 (f0   ) (f0_   )) ; [ 5.53  4.85]
  (qb 1e5 (f1 :x) (f1_ :x)) ; [23.99 17.56]
  )

(defn memoize-last
  "Like `memoize` but only caches the fn's most recent call.
  Great for Reactjs render op caching on mobile devices, etc."
  [f]
  (let [cache_ (atom {})]
    (fn [& args]
      @(or (get @cache_ args)
           (get (swap! cache_
                  (fn [cache]
                    (if (get cache args)
                      cache
                      {args (delay (apply f args))})))
             args)))))

                     
          
                                                
                                                  

(comment (macroexpand '(-gc-now?)))

(deftype SimpleCacheEntry [delay ^long udt])
(deftype TickedCacheEntry [delay ^long udt ^long tick-lru ^long tick-lfu])

(declare top)
(defn memoize*
  "Like `core/memoize` but:
    * Often faster, depending on opts.
    * Prevents race conditions on writes.
    * Supports auto invalidation & gc with `ttl-ms` opt.
    * Supports cache size limit & gc with `cache-size` opt.
    * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`."

  ([f] (memoize_ f)) ; De-raced, commands

  ;; De-raced, commands, ttl, gc
  ([ttl-ms f]
   (have? pos-int? ttl-ms)
   (let [cache_ (atom nil) ; {<args> <SimpleCacheEntry>}
         latch_ (atom nil) ; Used to pause writes during gc
         ttl-ms (long ttl-ms)]

     (fn [& args]
       (let [a1 (first args)]
         (cond
           (kw-identical? a1 :mem/del)
           (let [argn (next  args)
                 a2   (first argn)]
             (if (kw-identical? a2 :mem/all)
               (reset! cache_ nil)
               (swap!  cache_ dissoc argn))
             nil)

           :else
           (let [instant (now-udt*)]

             (when (-gc-now?)
               (let [latch                                  nil]
                 (when (-cas! latch_ nil latch)
                   (swap! cache_
                     (fn [m]
                       (persistent!
                         (reduce-kv
                           (fn [acc k ^SimpleCacheEntry e]
                             (if (> (- instant (.-udt e)) ttl-ms)
                               (dissoc! acc k)
                               acc))
                           (transient (or m {}))
                           m))))

                                           
                                            )))

             (let [fresh? (kw-identical? a1 :mem/fresh)
                   args   (if fresh? (next args) args)
                   ^SimpleCacheEntry e
                   (-swap-val! cache_ args
                     (fn [?e]
                       (if (or (nil? ?e) fresh?
                               (> (- instant (.-udt ^SimpleCacheEntry ?e)) ttl-ms))
                         (do
                                                                                      
                           (SimpleCacheEntry. (delay (apply f args)) instant))
                         ?e)))]
               @(.-delay e))))))))

  ;; De-raced, commands, ttl, gc, max-size
  ([cache-size ttl-ms f]
   (have? [:or nil? pos-int?] ttl-ms)
   (have? pos-int? cache-size)
   (let [tick_      (atom 0)
         cache_     (atom nil) ; {<args> <TickedCacheEntry>}
         latch_     (atom nil) ; Used to pause writes during gc
         ttl-ms     (long (or ttl-ms 0))
         ttl-ms?    (not (zero? ttl-ms))
         cache-size (long cache-size)]

     (fn [& args]
       (let [a1 (first args)]
         (cond
           (kw-identical? a1 :mem/del)
           (let [argn (next args)
                 a2   (first argn)]
             (if (kw-identical? a2 :mem/all)
               (reset! cache_ nil)
               (swap!  cache_ dissoc argn))
             nil)

           :else
           (let [instant (if ttl-ms? (now-udt*) 0)]
             (when (-gc-now?)
               (let [latch                                  nil]
                 (when (-cas! latch_ nil latch)
                   ;; First prune ttl-expired stuff
                   (when ttl-ms?
                     (swap! cache_
                       (fn [m]
                         (persistent!
                           (reduce-kv
                             (fn [acc k ^TickedCacheEntry e]
                               (if (> (- instant (.-udt e)) ttl-ms)
                                 (dissoc! acc k)
                                 acc))
                             (transient (or m {}))
                             m)))))

                   ;; Then prune by ascending (worst) tick-sum:
                   (let [snapshot @cache_
                         n-to-gc  (- (count snapshot) cache-size)]

                     (when (> n-to-gc 64)
                       (let [ks-to-gc
                             (top n-to-gc
                               (fn [k]
                                 (let [e ^TickedCacheEntry (get snapshot k)]
                                   (+ (.-tick-lru e) (.-tick-lfu e))))
                               (keys snapshot))]

                         (swap! cache_
                           (fn [m]
                             (persistent!
                               (reduce (fn [acc in] (dissoc! acc in))
                                 (transient (or m {})) ks-to-gc)))))))

                                           
                                            )))

             (let [fresh?(kw-identical? a1 :mem/fresh)
                   args  (if fresh? (next args) args)

                   ;;; We always adjust counters, even on reads:
                   ^long tick (swap! tick_ (fn [^long n] (inc n)))
                   ^TickedCacheEntry e
                   (-swap-val! cache_ args
                     (fn [?e]
                                                                                  
                       (if (or (nil? ?e) fresh?
                               (> (- instant (.-udt ^TickedCacheEntry ?e)) ttl-ms))
                         (TickedCacheEntry. (delay (apply f args)) instant tick 1)
                         (let [e ^TickedCacheEntry ?e]
                           (TickedCacheEntry. (.-delay e) (.-udt e)
                             tick (inc (.-tick-lfu e)))))))]

               @(.-delay e)))))))))

(comment
  (do
    (def f0 (memoize         (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f1 (memoize*        (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f2 (memoize* 5000   (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f3 (memoize* 2 nil  (fn [& [x]] (if x x (Thread/sleep 600)))))
    (def f4 (memoize* 2 5000 (fn [& [x]] (if x x (Thread/sleep 600))))))

  (qb 1e5 (f0 :x) (f1 :x) (f2 :x) (f3 :x) (f4 :x))
  ;; [22.43 17.42 62.45 61.78 68.23]

  (let [f0 (memoize  (fn [] (Thread/sleep 5) (print "f0\n")))
        f1 (memoize* (fn [] (Thread/sleep 5) (print "f1\n")))]
    (println "---")
    (dotimes [_ 10]
      (future (f1)) ; Never prints >once
      (future (f0)))))

;;;; Rate limits

(deftype LimitSpec  [^long n ^long ms])
(deftype LimitEntry [^long n ^long udt0])
(deftype LimitHits  [m worst-sid ^long worst-ms])

(let [limit-spec (fn [n ms] (have? pos-int? n ms) (LimitSpec. n ms))]
  (defn- coerce-limit-specs [x]
    (cond!
      (map?    x) (reduce-kv (fn [acc sid [n ms]] (assoc acc sid (limit-spec n ms))) {} x)
      (vector? x)
      (let [i (-vol! -1)]
        (reduce
          (fn [acc [n ms ?id]] ; ?id for back compatibility
            (assoc acc (or ?id (-vol-swap! i (fn [i] (inc ^long i))))
              (limit-spec n ms))) {} x)))))

(comment (qb 1e5 (coerce-limit-specs [[10 1000] [20 2000]])))

(defn limiter*
  "Experimental. Like `limiter` but returns [<limiter> <state_>]."
  [specs]
  (if (empty? specs)
    [nil (constantly nil)]
    (let [latch_ (atom nil) ; Used to pause writes during gc
          reqs_  (atom nil) ; {<rid> {<sid> <LimitEntry>}}
          specs  (coerce-limit-specs specs) ; {<sid> <LimitSpec>}
          f1
          (fn [rid peek?]
            (let [instant (now-udt*)]

              (when (and (not peek?) (-gc-now?))
                (let [latch                                  nil]
                  (when (-cas! latch_ nil latch)

                    (swap! reqs_
                      (fn [reqs] ; {<rid> <entries>}
                        (persistent!
                          (reduce-kv
                            (fn [acc rid entries]
                              (let [new-entries
                                    (reduce-kv
                                      (fn [acc sid ^LimitEntry e]
                                        (if-let [^LimitSpec s (get specs sid)]
                                          (if (>= instant (+ (.-udt0 e) (.-ms s)))
                                            (dissoc acc sid)
                                            acc)
                                          (dissoc acc sid)))
                                      entries ; {<sid <LimitEntry>}
                                      entries)]
                                (if (empty? new-entries)
                                  (dissoc! acc rid)
                                  (assoc!  acc rid new-entries))))
                            (transient (or reqs {}))
                            reqs))))

                                            
                                             )))

              ;; Need to atomically check if all limits pass before
              ;; committing to any n increments:
              (loop []
                (let [reqs        @reqs_     ; {<sid> <entries>}
                      entries (get reqs rid) ; {<sid> <LimitEntry>}
                      ?hits                  ; ?LimitHits
                      (if (nil? entries)
                        nil
                        (reduce-kv
                          (fn [^LimitHits acc sid ^LimitEntry e]
                            (if-let [^LimitSpec s (get specs sid)]
                              (if (< (.-n e) (.-n s))
                                acc
                                (let [tdelta (- (+ (.-udt0 e) (.-ms s)) instant)]
                                  (if (<= tdelta 0)
                                    acc
                                    (cond
                                      (nil? acc) (LimitHits. {sid tdelta} sid tdelta)

                                      (> tdelta (.-worst-ms acc))
                                      (LimitHits. (assoc (.-m acc) sid tdelta) sid tdelta)

                                      :else
                                      (LimitHits. (assoc (.-m acc) sid tdelta)
                                        (.-worst-sid acc)
                                        (.-worst-ms  acc))))))
                              acc))
                          nil
                          entries))]

                  (if (or peek? ?hits)
                    ;; No action (peeking, or hit >= 1 spec)
                    (when-let [^LimitHits h ?hits]
                      [(.-worst-sid h) (.-worst-ms h) (.-m h)])

                    ;; Passed all limit specs, ready to commit increments:
                    (if-let [l @latch_]
                                                                           nil
                      (let [new-entries
                            (reduce-kv
                              (fn [acc sid ^LimitSpec s]
                                (assoc acc sid
                                  (if-let [^LimitEntry e (get entries sid)]
                                    (let [udt0 (.-udt0 e)]
                                      (if (>= instant (+ udt0 (.-ms s)))
                                        (LimitEntry. 1 instant)
                                        (LimitEntry. (inc (.-n e)) udt0)))
                                    (LimitEntry. 1 instant))))
                              entries
                              specs)]

                        (if (-cas! reqs_ reqs (assoc reqs rid new-entries))
                          nil
                          (recur)))))))))]

      [reqs_
       (fn check-limits!
         ([          ] (f1 nil    false))
         ([    req-id] (f1 req-id false))
         ([cmd req-id]
          (cond
            (kw-identical? cmd :rl/reset)
            (do
              (if (kw-identical? req-id :rl/all)
                (reset! reqs_ nil)
                (swap!  reqs_ dissoc req-id))
              nil)

            (kw-identical? cmd :rl/peek)
            (f1 req-id true)

            :else
            (throw
              (ex-info "Unrecognized rate limiter command"
                {:given cmd :req-id req-id})))))])))

(defn limiter ; rate-limiter
  "Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
  limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
  [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].

  Limiter fn commands:
    :rl/peek  <req-id> - Check limits w/o side effects.
    :rl/reset <req-id> - Reset all limits for given req-id."
  [specs]
  (let [[_ f] (limiter* specs)]
    f))

(comment
  (def rl1
    (limiter
      {:2s [1 2000]
       :5s [2 5000]
       :1d [5 (ms :days 1)]}))

  (qb 1e6 (rl1)) ; 266.58
  )

;;;; Strings

                                                                              
       (defn ^boolean str-builder? [x] (instance? goog.string.StringBuffer x))

(def str-builder "For cross-platform string building"
                                                       
                                                                      
         (fn ([]       (goog.string.StringBuffer.))
            ([s-init] (goog.string.StringBuffer. s-init))))

(defn sb-append "For cross-platform string building"
                                                                                        
         (               [               str-builder         s] (.append str-builder s))
  ([str-builder s & more]
   (sb-append str-builder s)
   (reduce (fn [acc in] (sb-append acc in)) str-builder more)))

(comment (str (sb-append (str-builder "foo") "bar")))

(def str-rf "String builder reducing fn"
  (fn
    ([]       (str-builder))
    ([acc]               (if (str-builder? acc) acc (str-builder (str acc)))) ; cf
    ([acc in] (sb-append (if (str-builder? acc) acc (str-builder (str acc))) (str in)))))

(comment
  (qb 1e3 ; [358.45 34.6]
         (reduce str    (range 512))
    (str (reduce str-rf (range 512)))))

(compile-if have-transducers?
  (defn str-join
    "Faster, transducer-based generalization of `clojure.string/join` with `xform`
    support"
    ([                coll] (str-join nil       nil coll))
    ([separator       coll] (str-join separator nil coll))
    ([separator xform coll]
     (if (and separator (not= separator ""))
       (let [sep-xform (interpose separator)
             str-rf*   (completing str-rf str)]
         (if xform
           (transduce (comp xform sep-xform) str-rf* coll)
           (transduce             sep-xform  str-rf* coll)))
       (if xform
         (transduce xform (completing str-rf str) coll)
         (str (reduce str-rf coll)))))))

(comment
  (qb 1e5
    (str/join "," ["a" "b" "c" "d"])
    (str-join "," ["a" "b" "c" "d"])
    (str-join ""  ["a" "b" "c" "d"])) ; [29.37 23.63 13.34]
  (str-join "," (comp (filter #{"a" "c"}) (map str/upper-case)) ["a" "b" "c"]))

(defn                            ^boolean str-contains?
  [s substr]
                                             
         (not= -1 (.indexOf s substr)))

(defn                               ^boolean str-starts-with?
  [s substr]
                                               
         (zero? (.indexOf s substr)))

(defn                             ^boolean str-ends-with?
  [s substr]
                                             
         (let [s-len      (.-length s)
               substr-len (.-length substr)]
           (when (>= s-len substr-len)
             (not= -1 (.indexOf s substr (- s-len substr-len))))))

(defn str-?index
  ([s substr          ] (str-?index s substr 0         false))
  ([s substr start-idx] (str-?index s substr start-idx false))
  ([s substr start-idx last?]
   (let [result
         (if last?
                                                                         
                  (.lastIndexOf         s         substr       start-idx)
                                                                         
                  (.indexOf             s         substr       start-idx))]

     (when (not= result -1) result))))

(comment (qb 1000 (str-?index "hello there" "there")))

(defn get-substr
  "Like `subs` but provides consistent clj/s behaviour and never throws
  (snaps to valid start and end indexes)."
  ([s ^long start]
          (.substring s start)
        
                                       
                                   
                        
         
                                          )

  ([s ^long start ^long end]
          (if (>= start end) "" (.substring s start end))
        
                                       
                                         
                                          
                       
         
                                         ))

(comment
  (get-substr "foo" 1)
  (get-substr "hello world" -10)
  (get-substr "hello world" 100)
  (get-substr "hello world" -10 100)
  (get-substr "hello world" 100 -10)
  (qb 1e5
    (subs       "hello world"   0  11)
    (get-substr "hello world" -10 100)))

(defn get-substring
  "Like `get-substr` but:
    - Takes `length` instead of `end` (index).
    - -ive `start` => index from right of string."
  ([s ^long start]
          (as-?nempty-str (.substr s start))
        
                                  
                    
                                 
                                            
                                           
                          
            
                                             )

  ([s ^long start ^long length]
          (as-?nempty-str (.substr s start length))
        
                    
        
                                           
                      
                                   
                                             
                                     
                                                
                                            

                                   
                                              
                             
                
                                                  ))

(comment
  (get-substring "hello world" -8)
  (get-substring "hello world" -8 2)
  (get-substring "hello world" 2 2))

(defn str-replace
  "Like `str/replace` but provides consistent clj/s behaviour.

  Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
                 http://dev.clojure.org/jira/browse/CLJS-911.

  Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
  A full fix could unfortunately not be introduced w/o breaking compatibility
  with the previously incorrect behaviour. CLJS-794 also remains unresolved."
  [s match replacement]
                                         
        
  (cond
    (string? match) ; string -> string replacement
    (.replace s (js/RegExp. (gstr/regExpEscape match) "g") replacement)
    ;; (.hasOwnProperty match "source") ; No! Ref. http://goo.gl/8hdqxb

    (instance? js/RegExp match) ; pattern -> string/fn replacement
    (let [flags (str "g" (when (.-ignoreCase match) "i")
                         (when (.-multiline  match) "m")) ; Fix CLJS-794
          replacement ; Fix CLJS-911
          (if (string? replacement)
            replacement
            ;; Note that the merged CLJS-911 fix actually tries to vary
            ;; behaviour here based on the number of matches(!)
            (fn [& args] (replacement (vec args))))]
      (.replace s (js/RegExp. (.-source match) flags) replacement))
    :else (throw (str "Invalid match arg: " match))))

(do
  (defn nil->str "nil/undefined -> \"nil\"" [x]
                                                    
           (if (or (undefined? x) (nil? x)) "nil" x))

  (defn format*
                            
                  [fmt args]
    (let [fmt  (or fmt "") ; Prevent NPE
          args (mapv nil->str args)]
                                                    
             (apply gstr/format fmt           args)))

  (defn format
    "Like `core/format` but:
      * Returns \"\" when fmt is nil rather than throwing an NPE.
      * Formats nil as \"nil\" rather than \"null\".
      * Provides ClojureScript support via goog.string.format (this has fewer
        formatting options than Clojure's `format`!)."
    [fmt & args] (format* fmt args)))

(defn str-join-once
  "Like `string/join` but skips duplicate separators."
  [separator coll]
  (let [sep separator]
    (if (str/blank? sep)
      (str (reduce str-rf "" coll))
      (let [acc-ends-with-sep?_ (-vol! false)
            acc-empty?_         (-vol! true)]
        (str
          (reduce
            (fn [acc in]
              (let [in (str in)
                    in-empty? (= in "")
                    in-starts-with-sep? (str-starts-with? in sep)
                    in-ends-with-sep?   (str-ends-with?   in sep)
                    acc-ends-with-sep?  @acc-ends-with-sep?_
                    acc-empty?          @acc-empty?_]

                (-vol-reset! acc-ends-with-sep?_ in-ends-with-sep?)
                (when acc-empty? (-vol-reset! acc-empty?_ in-empty?))

                (if acc-ends-with-sep?
                  (if in-starts-with-sep?
                    (sb-append acc (.substring in 1))
                    (sb-append acc in))

                  (if in-starts-with-sep?
                    (sb-append acc in)
                    (if (or acc-empty? in-empty?)
                      (sb-append acc in)
                      (do (sb-append acc sep)
                          (sb-append acc in)))))))
            (str-builder)
            coll))))))

(defn path [& parts] (str-join-once "/" parts))
(comment (path "foo/" nil "/bar" "baz/" "/qux/"))

(defn norm-word-breaks
  "Converts all word breaks of any form and length (including line breaks of any
  form, tabs, spaces, etc.) to a single regular space."
  [s] (str/replace (str s) #"\s+" \space))

(defn count-words [s] (if (str/blank? s) 0 (count (str/split s #"\s+"))))
(comment (count-words "Hello this is a    test"))

(defn uuid-str
  "Returns a UUIDv4 string of form \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".
  Ref. http://www.ietf.org/rfc/rfc4122.txt,
       https://gist.github.com/franks42/4159427"
  ([max-length] (get-substring (uuid-str) 0 max-length))
  ([]
                                          
         
   (let [hex  (fn [] (.toString (rand-int 16) 16))
         rhex (.toString (bit-or 0x8 (bit-and 0x3 (rand-int 16))) 16)]
     (str (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex) "-"
          (hex) (hex) (hex) (hex) "-"
          "4"   (hex) (hex) (hex) "-"
          rhex  (hex) (hex) (hex) "-"
          (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex)
          (hex) (hex) (hex) (hex)))))

(comment (qb 1e4 (uuid-str 5)))

(defn into-str
  "Simple Hiccup-like string templating to complement Tempura."
  [& xs]
  (str
    (reduce
      (fn rf [acc in]
        (if (sequential? in)
          (reduce rf acc in)
          (sb-append acc (str in))))
      (str-builder)
      xs)))

(comment
  (let [br "\n\n"]
    (into-str :a :b br :c (for [n (range 5)] [n br])
      (when true [:d :e [:f :g]]))))

;;;; Sorting

       (defn rcompare "Reverse comparator." [x y] (compare y x))
                                           
                                                                  
                             

(let [sentinel (new-object)
      nil->sentinel (fn [x] (if (nil? x) sentinel x))
      sentinel->nil (fn [x] (if (identical? x sentinel) nil x))]

  (defn reduce-top
    "Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
    For comparsion, (take n (sort-by ...)) is O(N.logN)."
    ([n           rf init coll] (reduce-top n identity compare rf init coll))
    ([n keyfn     rf init coll] (reduce-top n keyfn    compare rf init coll))
    ([n keyfn cmp rf init coll]
     (let [coll-size (count coll)
           n (long (min coll-size (long n)))]

       (if-not (pos? n)
         init
                ; TODO Real impl.
         (transduce (take n) (completing rf) init
           (sort-by keyfn cmp coll))

              
                                                     
                                                            
                                                            

                                                     
                                                                     
                     )))))

(defn top-into
  "Conjoins the top `n` items from `coll` into `to` using `reduce-top`."
  ([to n           coll] (top-into to n identity compare coll))
  ([to n keyfn     coll] (top-into to n keyfn    compare coll))
  ([to n keyfn cmp coll]
   (if (editable? to)
     (persistent! (reduce-top n keyfn cmp conj! (transient to) coll))
     (do          (reduce-top n keyfn cmp conj             to  coll)))))

(defn top
  "Returns a sorted vector of the top `n` items from `coll` using `reduce-top`."
  ([n           coll] (top-into [] n identity compare coll))
  ([n keyfn     coll] (top-into [] n keyfn    compare coll))
  ([n keyfn cmp coll] (top-into [] n keyfn    cmp     coll)))

(comment [(top 20 [2 3 5 3 88 nil]) (sort [2 3 5 3 88 nil])])

;;;; Date & time

(defn secs->ms ^long [secs] (* (long secs)  1000))
(defn ms->secs ^long [ms]   (quot (long ms) 1000))
(defn ms "Returns ~number of milliseconds in period defined by given args."
  [& {:as opts :keys [years months weeks days hours mins secs msecs ms]}]
  (have? #{:years :months :weeks :days :hours :mins :secs :msecs :ms}
    :in (keys opts))
  (round0
    (+
      (if years  (* (double years)  #=(* 1000 60 60 24 365))    0.0)
      (if months (* (double months) #=(* 1000 60 60 24 29.53))  0.0)
      (if weeks  (* (double weeks)  #=(* 1000 60 60 24 7))      0.0)
      (if days   (* (double days)   #=(* 1000 60 60 24))        0.0)
      (if hours  (* (double hours)  #=(* 1000 60 60))           0.0)
      (if mins   (* (double mins)   #=(* 1000 60))              0.0)
      (if secs   (* (double secs)   1000)                       0.0)
      (if msecs     (double msecs)                              0.0)
      (if ms        (double ms)                                 0.0))))

(def secs (comp ms->secs ms))
(comment #=(ms   :years 88 :months 3 :days 33)
         #=(secs :years 88 :months 3 :days 33))

                            
                                                                   

     
                                  
                                                 
           
                                 
                   
                         
                                                 
                                                    
                      

                  
                                                   
                                       
                     

                    
                                                     
                                         
                                               
                                            
                           

                           
                                     
                          
                                                                    
                                                       
                                                                 
                     

     
                         
                                                       
                                                                    

     
                                                                               
                                                                              
                                                                    

(comment (qb 1e5 (.format (simple-date-format "yyyy-MMM-dd") (Date.))))

;;;; Macro env

                    
                  
                         
                                                                    
                                                                   
                                               
                             
                        

(comment [(let [x :x] (get-env)) ((fn [^long x] (get-env)) 0)])

;;;; IO

                                                                              
                                                                           

     
                    
                                                                                
         
                                   
        
                           
                        
                                                                         

     
                                      
                                                                           
                         
         
                                                                            
                                        

     
                             
                                                                            
                   
                                                  
                                                                                        
                                                                          
                        
                                           
                                                                               

     
                        
                                                                             
                                                     
                         
               
                                                                      
              
                                  
                                                   
                                        
                                           
                                                              
                                                                 

(comment (slurp-file-resource "log4j.properties"))

     
                     
                                                                  
           
                                                                       
                                      
                                       
                               
                                        
                                                 
                                                                  
                                             

(comment (get-pom-version 'com.taoensso/encore))

     
                                                           
    
                                                         
                                                    

(comment (get-hostname))

;;;; Async

     
                 
                                                                        
                     
       
                                                                         
                                                                          
                                                                    
                                      
                                                      
     
                     
                                                
                                                        
               
               
                     
                                                     
               
                          
                                                                        

          
                                              
                                    

                                     
                                             
                                 
                      

                                       
                                           
                    
                         

(comment
  (time
    (let [fp (future-pool 2)]
      [(fp (fn [] (Thread/sleep 2000) (println "2000")))
       (fp (fn [] (Thread/sleep 500)  (println "500")))
       (fp 200 "timeout" (fn [] (Thread/sleep 900) (println "900")))
       (fp (fn [] (Thread/sleep 3000) (println "3000")))
       (fp)])))

;;;; Benchmarking

                                                                           
                                                             

                                                                          
                                                               

                                                                                   
                                                                                       
               
                       
                                           
                                                                 
                                                        
             
                  
                        
                                       
                                                              
                  

                                             ; Alias
(comment (qb [4 1e6] (first [:a]) (nth [:a] 0)))

     
            
                                                                        
                                              
                               
                                    
      
                                  
                  
                            
                                             
                                                      
                      
                                                          
                                                                                     
                                           
                                                     
                      
                                                       
           

                                                                          

;;;; Browser stuff

      
(do ; Basic browser logging
  (def ^:private console-log
    (if-not (exists? js/console)
      (fn [& xs] nil)
      (fn [& xs] (when-let [f js/console.log]
                  (.apply f js/console (into-array xs))))))

  (def  log console-log) ; Raw args
  (defn logp [    & xs] (console-log (str-join " " (map nil->str) xs)))
  (defn sayp [    & xs] (js/alert    (str-join " " (map nil->str) xs)))
  (defn logf [fmt & xs] (console-log (format* fmt xs)))
  (defn sayf [fmt & xs] (js/alert    (format* fmt xs))))

      
(defn get-win-loc "Returns `js/window`'s current location as a map."
  []
  (when-let [js-win js-?win]
    (when-let [loc (.-location js-win)]
      {;; Ref. http://bl.ocks.org/abernier/3070589
       :href     (.-href     loc) ; "http://www.example.org:80/foo/bar?q=baz#bang"
       :protocol (.-protocol loc) ; "http:" ; Note the :
       :hostname (.-hostname loc) ; "example.org"
       :host     (.-host     loc) ; "example.org:80"
       :pathname (.-pathname loc) ; "/foo/bar"
       :search   (.-search   loc) ; "?q=baz"
       :hash     (.-hash     loc) ; "#bang"
       })))

      
(do
  (def ^:private xhr-pool_ (delay (goog.net.XhrIoPool.)))
  (defn- get-pooled-xhr!
    "Returns an immediately available XhrIo instance, or nil. The instance must
    be released back to pool manually."
    [] (let [result (.getObject @xhr-pool_)] (if (undefined? result) nil result)))

  (def ^:private js-form-data? (if (exists? js/FormData) (fn [x] (instance? js/FormData x)) (fn [x] nil)))
  (def ^:private js-file?      (if (exists? js/File)     (fn [x] (instance? js/File     x)) (fn [x] nil)))
  (def ^:private coerce-xhr-params "Returns [<uri> <?data>]"
    (let [url-encode
          (fn url-encode
            ([params]
             (when (seq params)
               (-> params clj->js gstructs/Map. gquery-data/createFromMap .toString)))

            ([uri params]
             (let [qstr (url-encode params)
                   uri-with-query (if (str/blank? qstr) uri (str uri "?" qstr))]
               [uri-with-query nil])))

          adaptive-encode
          (fn [uri params]
            (cond
              (js-form-data? params) [uri params]
              :do (have? map? params)

              (and    (exists? js/FormData) (rsome js-file? (vals params)))
              (let [form-data (js/FormData.)]
                (doseq [[k v] params] (.append form-data (name k) v))
                [uri form-data])

              ;; Avoiding FormData as default since default Compojure
              ;; middleware doesn't seem to keywordize FormData keys?
              :else [uri (url-encode params)]))]

      (fn [uri method params]
        (have? [:or nil? map?] params)
        (case method
          :get  (url-encode      uri params)
          :post (adaptive-encode uri params)
          :put  (adaptive-encode uri params))))))

      
(defn ajax-lite
  "Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
  Returns the resulting XhrIo[1] instance, or nil.

  (ajax-lite \"/my-post-route\"
    {:method     :post
     :params     {:username \"Rich Hickey\" :type \"Awesome\"}
     :headers    {\"Foo\" \"Bar\"}
     :resp-type  :text
     :timeout-ms 7000
     :with-credentials? false ; Enable if using CORS (requires xhr v2+)
    }
    (fn async-callback-fn [resp-map]
      (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
        ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
        ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
                           :abort :http-error :exception :xhr-pool-depleted}
        (js/alert (str \"Ajax response: \" resp-map)))))

  [1] Ref. https://developers.google.com/closure/library/docs/xhrio"

  [uri {:keys [method params headers timeout-ms resp-type with-credentials?] :as opts
        :or   {method :get timeout-ms 10000 resp-type :auto}}
   callback-fn]

  (have? [:or nil? nat-int?] timeout-ms)

  (if-let [xhr (get-pooled-xhr!)]
    (catching
      (let [timeout-ms (or (:timeout opts) timeout-ms) ; Deprecated opt
            xhr-method (case method :get "GET" :post "POST" :put "PUT")

            [xhr-uri xhr-?data]
            (coerce-xhr-params uri method params)

            xhr-headers
            (let [headers (map-keys #(str/lower-case (name %)) headers)
                  headers (assoc-some headers "x-requested-with"
                                 (get headers "x-requested-with" "XMLHTTPRequest"))]
              ;; `x-www-form-urlencoded`/`multipart/form-data` content-type
              ;; will be added by Closure if a custom content-type isn't provided
              (clj->js headers))]

        (doto xhr
          (gevents/listenOnce goog.net.EventType/READY
            (fn [_] (.releaseObject @xhr-pool_ xhr)))

          (gevents/listenOnce goog.net.EventType/COMPLETE
            (fn wrapped-callback-fn [resp]
              (let [success? (.isSuccess xhr) ; true iff no error or timeout
                    -status  (.getStatus xhr) ; -1, 200, etc.

                    [?status ?content-type ?content]
                    (when (not= -status -1) ; Got a response from server
                      (let [;; Case insensitive get:
                            ?content-type (.getResponseHeader xhr "content-type")
                            ?content
                            (let [resp-type
                                  (cond
                                    (not= resp-type :auto) resp-type
                                    (nil? ?content-type)   :text
                                    :else
                                    (let [cts (str/lower-case (str ?content-type))
                                          match? (fn [s] (str-contains? cts s))]
                                      (cond
                                        (match? "/edn")     :edn
                                        (match? "/json")    :json
                                        (match? "/xml")     :xml
                                        ;; (match? "/html") :text
                                        :else               :text)))]

                              (catching
                                (case resp-type
                                  :edn  (read-edn (.getResponseText xhr))
                                  :json           (.getResponseJson xhr)
                                  :xml            (.getResponseXml  xhr)
                                  :text           (.getResponseText xhr))

                                _e ; Undocumented, subject to change:
                                {:ajax/bad-response-type resp-type
                                 :ajax/resp-as-text (.getResponseText xhr)}))]

                        [-status ?content-type ?content]))]

                (callback-fn
                  {:raw-resp      resp
                   :xhr           xhr ; = (.-target resp)
                   :success?      success?
                   :?status       ?status
                   :?content-type ?content-type
                   :?content      ?content
                   :?error
                   (if success?
                     nil
                     (cond
                       ?status ?status ; Http error status code (e.g. 404)
                       :else
                       (get {goog.net.ErrorCode/NO_ERROR   nil
                             goog.net.ErrorCode/EXCEPTION  :exception
                             goog.net.ErrorCode/HTTP_ERROR :http-error
                             goog.net.ErrorCode/ABORT      :abort
                             goog.net.ErrorCode/TIMEOUT    :timeout}
                         (.getLastErrorCode xhr)
                         :unknown)))})))))

        ;; Experimental, untested, undocumented opt
        (when-let [pf (:progress-fn opts)]
          (gevents/listen xhr goog.net.EventType/PROGRESS
            (fn [ev]
              (let [length-computable? (.-lengthComputable ev)
                    loaded (.-loaded ev)
                    total  (.-total  ev)
                    ?ratio (when (and length-computable? (not= total 0))
                             (/ loaded total))]
                (pf
                  {:?ratio ?ratio
                   :length-computable? length-computable?
                   :loaded loaded
                   :total  total
                   :ev     ev})))))

        (.setTimeoutInterval xhr (or timeout-ms 0)) ; nil = 0 = no timeout
        (when with-credentials?
          (.setWithCredentials xhr true)) ; Requires xhr v2+

        (.send xhr xhr-uri xhr-method xhr-?data xhr-headers)
        xhr)

      e
      (do
        (.releaseObject @xhr-pool_ xhr)
        (callback-fn {:?error e})
        nil))

    (do ; Pool failed to return an available xhr instance
      (callback-fn {:?error :xhr-pool-depleted})
      nil)))

;;;; Ring

     
                  
                                                                              
                                                                                
                                         
                     
            
                                                     
                                                             
                                          

     
                                     
                   
                                                                                   

(comment (normalize-headers {:headers {"Foo1" "bar1" "FOO2" "bar2" "foo3" "bar3"}}))

     
                                                                    
                                                                                   
                                                                                   
                                                                               
                                                                    

(comment (merge-headers {:body "foo"} {"BAR" "baz"})
         (merge-headers "foo"         {"bar" "baz"}))

     
                   
                                       
                       
                                                        
                                                         
                               
                  
                       

(comment (redirect-resp :temp "/foo" "boo!"))

(defn url-encode "Stolen from http://goo.gl/99NSR1"
                         
         [s]
  (when s
                      
                                                                 
                                      
                                       
           (-> (str s)
               (js/encodeURIComponent s)
               (str/replace "*" "%2A")
               (str/replace "'" "%27"))))

(comment (mapv url-encode ["foo+bar" 47]))

(defn url-decode "Stolen from http://goo.gl/99NSR1"
  [s & [encoding]]
  (when s
                                                               
           (js/decodeURIComponent s)))

(comment (url-decode (url-encode "Hello there~*+")))

(defn format-query-string [m]
  (let [param (fn [k v]  (str (url-encode (as-qname k)) "="
                             (url-encode (or (as-?qname v) (str v)))))
        join  (fn [strs] (str/join "&" strs))]
    (if (empty? m)
      ""
      (join
        (for [[k v] m :when (some? v)]
          (if (sequential? v)
            (join (mapv (partial param k) (or (seq v) [""])))
            (param k v)))))))

(comment
  (format-query-string {})
  (format-query-string {:k1 "v1" :k2 "v2" :k3 nil :k4 "" :k5 ["v4a" "v4b" 7] :k6 []})
  (format-query-string {:a/b :c/d})
  (format-query-string {:k nil}) ; Nb to allow removing pre-existing params, etc.
  )

(defn- assoc-conj [m k v]
  (assoc m k (if-let [cur (get m k)] (if (vector? cur) (conj cur v) [cur v]) v)))

(comment (assoc-conj {:a "a"} :a "b"))

(defn parse-query-params "Based on `ring-codec/form-decode`."
  [s & [keywordize? encoding]]
  (if (or (str/blank? s) (not (str-contains? s "=")))
    {}
    (let [;; For convenience (e.g. JavaScript win-loc :search)
          s (if (str-starts-with? s "?") (subs s 1) s)
          m (reduce
              (fn [m param]
                (if-let [[k v] (str/split param #"=" 2)]
                  (assoc-conj m (url-decode k encoding) (url-decode v encoding))
                  m))
              {}
              (str/split s #"&"))]
      (if-not keywordize?
        m
        (map-keys keyword m)))))

(comment
  (parse-query-params nil)
  (parse-query-params "?foo=bar" :keywordize)
  (-> {:k1 "v1" :k2 "v2" :k3 nil :k4 "" :k5 ["v4a" "v4b"] :k6 [] :k7 47}
      (format-query-string)
      (parse-query-params)))

(defn merge-url-with-query-string [url m]
  (let [[url ?qstr] (str/split (str url) #"\?" 2)
        qmap  (merge
                (when ?qstr (map-keys keyword (parse-query-params ?qstr)))
                (map-keys keyword m))
        ?qstr (as-?nblank (format-query-string qmap))]
    (if-let [qstr ?qstr] (str url "?" qstr) url)))

(comment
  (merge-url-with-query-string "/" nil)
  (merge-url-with-query-string "/?foo=bar" nil)
  (merge-url-with-query-string "/?foo=bar" {"foo" "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo  "overwrite"})
  (merge-url-with-query-string "/?foo=bar" {:foo  nil})
  (merge-url-with-query-string "/?foo=bar" {:foo2 "bar2" :num 5 :foo nil}))

;;;; Stubs

(do
         (defn -new-stubfn_ [name] (-vol! (fn [& args]   (throw (ex-info "Attempting to call uninitialized stub fn" {:stub name :args args})))))
         (defn -assert-unstub-val [f] (if (fn?     f) f (throw (ex-info "Unstub value must be a fn"     {:given f :type (type f)}))))
                                                                                                                                     
       
                                                   
                            
                              
                             
                    
                 
                                                           
                                                             
                                                    
                                  )

     
                 
                                                                     
                                                                    
                                                                         
                                                          
       
                       
                                                            
                                         
                                                       
                                                                       
                                                                                          
                                                                     
                                                                                                    
                  
                    
                                                               
                                                              
                                        

(comment
  (defn- -foo ^long [y] (* y y))
  (macroexpand '(defstub foo))
  (defstub foo)
  (unstub-foo -foo)
  (qb 1e6 (-foo 5) (foo 5)) ; [68.49 71.88]
  (meta (first (:arglists (meta #'foo)))))

;;;; ns filter

(def compile-ns-filter "Returns (fn [?ns]) -> truthy."
  (let [compile1
        (fn [x] ; ns-pattern
          (cond
            (re-pattern? x) (fn [ns-str] (re-find x ns-str))
            (string? x)
            (if (str-contains? x "*")
              (let [re
                    (re-pattern
                      (-> (str "^" x "$")
                          (str/replace "." "\\.")
                          (str/replace "*" "(.*)")))]
                (fn [ns-str] (re-find re ns-str)))
              (fn [ns-str] (= ns-str x)))

            :else (throw (ex-info "Unexpected ns-pattern type"
                           {:given x :type (type x)}))))]

    (fn self
      ([ns-pattern] ; Useful for user-level matching
       (let [x ns-pattern]
         (cond
           (map? x) (self (:whitelist x) (:blacklist x))
           (or (vector? x) (set? x)) (self x nil)
           (= x "*") (fn [?ns] true)
           :else
           (let [match? (compile1 x)]
             (fn [?ns] (if (match? (str ?ns)) true))))))

      ([whitelist blacklist]
       (let [white
             (when (seq whitelist)
               (let [match-fns (mapv compile1 whitelist)
                     [m1 & mn] match-fns]
                 (if mn
                   (fn [ns-str] (rsome #(% ns-str) match-fns))
                   (fn [ns-str] (m1 ns-str)))))

             black
             (when (seq blacklist)
               (let [match-fns (mapv compile1 blacklist)
                     [m1 & mn] match-fns]
                 (if mn
                   (fn [ns-str] (not (rsome #(% ns-str) match-fns)))
                   (fn [ns-str] (not (m1 ns-str))))))]
         (cond
           (and white black)
           (fn [?ns]
             (let [ns-str (str ?ns)]
               (if (white ns-str)
                 (if (black ns-str)
                   true))))

           white (fn [?ns] (if (white (str ?ns)) true))
           black (fn [?ns] (if (black (str ?ns)) true))
           :else (fn [?ns] true) ; Common case
           ))))))

(comment
  (def nsf? (compile-ns-filter #{"foo.*" "bar"}))
  (qb 1e5 (nsf? "foo")) ; 20.44
  )

;;;; Scheduling
;; Considered also adding `call-at-interval` but decided against it since the
;; API we'd want for that would be less interesting and more impl specific;
;; i.e. the cost/benefit would be poor.

(do
  (defprotocol   ITimeoutImpl (-schedule-timeout [_ msecs f]))
  (deftype DefaultTimeoutImpl [                            ]
                 ITimeoutImpl
    (-schedule-timeout [_ msecs f]
             (.setTimeout js/window f msecs)
                                                     
                                                 
                                                 ))

  (defonce default-timeout-impl_
    "Simple one-timeout timeout implementation provided by platform timer.
    O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
    Similar efficiency to core.async timers (binary heap vs DelayQueue)."
    (delay
      (DefaultTimeoutImpl.
                                                    )))

  (def ^:private -tout-pending   (new-object))
  (def ^:private -tout-cancelled (new-object))
  (defn- tout-result [result_]
    (if (kw-identical? result_ -tout-pending)
      :timeout/pending
      (if (kw-identical? result_ -tout-cancelled)
        :timeout/cancelled
        @result_))))

(defprotocol ITimeoutFuture
  (tf-state      [_] "Returns a map of timeout's public state.")
  (tf-poll       [_] "Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.")
  (tf-done?      [_] "Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).")
  (tf-pending?   [_] "Returns true iff the timeout is pending.")
  (tf-cancelled? [_] "Returns true iff the timeout is cancelled.")
  (tf-cancel!    [_] "Returns true iff the timeout was successfully cancelled (i.e. was previously pending)."))

      
(deftype TimeoutFuture [f result__ udt]
  ITimeoutFuture
  (tf-state      [_] {:fn f :udt udt})
  (tf-poll       [_] (tout-result @result__))
  (tf-done?      [_] (not (kw-identical? @result__ -tout-pending)))
  (tf-pending?   [_]      (kw-identical? @result__ -tout-pending))
  (tf-cancelled? [_]      (kw-identical? @result__ -tout-cancelled))
  (tf-cancel!    [_] (compare-and-set! result__ -tout-pending -tout-cancelled))

  IPending (-realized?  [t] (tf-done? t))
  IDeref   (-deref      [t] (tf-poll  t)))

     
                      
                                                                   
                
                                      
                                             
                                                                   
                                                                  
                                                                    
                    
                                                                 
                                  
             

                                                      
                                                                                
                             
                                   
                                                                            
                             
                   

                             
                                       
                                       
                                        

                                                                      
       (defn ^boolean timeout-future? [x] (instance? TimeoutFuture x))

(defn call-after-timeout
  "Alpha, subject to change.
  Returns a TimeoutFuture that will execute `f` after given msecs.

  Does NOT do any automatic binding conveyance.

  Performance depends on the provided timer implementation (`impl_`).
  The default implementation offers O(logn) add, O(1) cancel, O(1) tick.

  See `ITimeoutImpl` for extending to arbitrary timer implementations."

  ;; Why no auto binding convyance? Explicit manual conveyance plays better
  ;; with cljs, and means less surprise with `future-fn`.
  ([      msecs f] (call-after-timeout default-timeout-impl_ msecs f))
  ([impl_ msecs f]
   (let [msecs (long msecs)
         udt   (+ (now-udt*) msecs) ; Approx instant to run
         result__ (atom -tout-pending)
                                                                   
         cas-f
         (fn []
           (let [result_ (delay (f))]
             (when (compare-and-set! result__ -tout-pending result_)
               @result_
                                       )))]

     (let [impl (force impl_)]
       (-schedule-timeout impl msecs cas-f))

     (TimeoutFuture. f result__ udt            ))))

                       
                            
                                                               
                                      
                                                             

(comment
  @(after-timeout 500 (println "foo") "bar")
  (def ^:dynamic *foo* nil)
  (binding [*foo* "bar"] ; Note no auto conveyance
    ((:fn (tf-state (after-timeout 200 (println *foo*) *foo*))))))

;;;; Testing utils

                
                                                          
                                                           
                                                             

(comment
  (expect-let [foo {:a :A}] :A (:a foo))
  (expect (thrown? Exception "foo")))

(defn- fixture-map->fn [{:keys [before after] :or {before 'do after 'do}}]
  `(fn [f#] (~before) (f#) (~after)))

                                                           
                           
                                           
                           
           
                                                         
                                                                                 

(comment (use-fixtures :each {:before (fn []) :after (fn [])}))

;;;; DEPRECATED

                    
                                                                   
          
                                                     
                  

(deprecated
         (def get-window-location get-win-loc)
  (def backport-run!   run!)
  (def fq-name         as-qname)
  (def qname           as-qname)
  (def merge-deep-with nested-merge-with)
  (def merge-deep      nested-merge)
  (def parse-bool      as-?bool)
  (def parse-int       as-?int)
  (def parse-float     as-?float)
  (def swapped*        swapped)
  (def memoize-a0_     memoize_)
  (def memoize-a1_     memoize_)
  (def a0-memoize_     memoize_)
  (def a1-memoize_     memoize_)
  (def memoize-1       memoize-last)
  (def memoize1        memoize-last)
  (def nnil?           some?)
  (def nneg-num?       nat-num?)
  (def nneg-int?       nat-int?)
  (def nneg-float?     nat-float?)
  (def uint?           nat-int?)
  (def pint?           pos-int?)
  (def nnil=           some=)
  (def as-?uint        as-?nat-int)
  (def as-?pint        as-?pos-int)
  (def as-?ufloat      as-?nat-float)
  (def as-?pfloat      as-?pos-float)
  (def as-uint         as-nat-int)
  (def as-pint         as-pos-int)
  (def as-ufloat       as-nat-float)
  (def as-pfloat       as-pos-float)
  (def run!*           run!)
  (def every           revery)
  (def ?subvec<idx     (comp not-empty      get-subvec))
  (def ?subvec<len     (comp not-empty      get-subvector))
  (def ?substr<idx     (comp as-?nempty-str get-substr))
  (def ?substr<len     (comp as-?nempty-str get-substring))
  (def dswap!          swap-in!*)
  (def nano-time       now-nano)
  (def swap!*          swap-in!*)
  (def -swap-cache!    -swap-val!)
  (def -unswapped      swapped-vec)
  (def -vswapped       swapped-vec)
  (def -swap-k!        -swap-val!)
  (def update-in*      update-in)

                                                                            
                                                                            
                                                                            
                                                                            
                                                                            
                                                                          
                                                                          
                                                                            
                                                                            
                                                                            
                                                                            
                                                                            
                                  
                                              

  ;;; Prefer `str-join` when possible (needs Clojure 1.7+)
         (defn undefined->nil [x] (if (undefined? x) nil x))
  (defn spaced-str-with-nils [xs] (str/join " " (mapv nil->str xs)))
  (defn spaced-str [xs] (str/join " "                 (mapv undefined->nil xs)))

  ;; Arg order changed for easier partials, etc.:
  (defn round [n & [type nplaces]] (round* (or type :round) nplaces n))
  (defn approx=
    ([x y      ] (approx==       x y))
    ([x y signf] (approx== signf x y)))

  ;; & coll changed to coll:
  (defn join-once [sep & coll] (str-join-once sep coll))

  ;; Used by Carmine <= v2.7.0
                                                                    
                                                                 
                                                               

  (defn nnil-set [x] (disj (set* x) nil))

  ;;; Arg order changed for easier partials
  (defn keys=      [m ks] (ks=      ks m))
  (defn keys<=     [m ks] (ks<=     ks m))
  (defn keys>=     [m ks] (ks>=     ks m))
  (defn keys=nnil? [m ks] (ks-nnil? ks m))

  (defn rate-limiter* "Deprecated, prefer `limiter`" [specs]
    (let [ids? (rsome (fn [[_ _ id]] id) specs)
          lfn  (limiter specs)]
      (fn [& args]
        (when-let [[worst-sid backoff-ms] (apply lfn args)]
          (if ids?
            [backoff-ms worst-sid]
             backoff-ms)))))

  (defn rate-limit [specs f]
    (let [rl (rate-limiter* specs)]
      (fn [& args]
        (if-let [backoff (rl)]
          [nil backoff]
          [(f) nil]))))

  ;; API changed for greater flexibility:
  (defn rate-limiter [ncalls-limit window-ms] (rate-limiter* [[ncalls-limit window-ms]]))
  (defn rate-limited [ncalls-limit window-ms f]
    (let [rl (rate-limiter* [[ncalls-limit window-ms]])]
      (fn [& args]
        (if-let [backoff-ms (rl)]
          {:backoff-ms backoff-ms}
          {:result     (f)}))))

  ;; Used by Sente <= v1.4.0-alpha2
  (def logging-level (atom :debug)) ; Just ignoring this now

         ; Used by Sente <= v1.1.0
  (defn set-exp-backoff-timeout! [nullary-f & [nattempt]]
    (when-let [js-win js-?win]
      (.setTimeout js-win nullary-f (exp-backoff (or nattempt 0)))))

        
  (do ; Level-based Cljs logging (prefer Timbre v4+)
    (defonce ^:dynamic *log-level* "DEPRECATED" :debug)
    (def ^:private log?
      (let [->n {:trace 1 :debug 2 :info 3 :warn 4 :error 5 :fatal 6 :report 7}]
        (fn [level] (>= (->n level) (->n *log-level*)))))

    (defn tracef  [fmt & xs] (when (log? :trace)  (apply logf fmt xs)))
    (defn debugf  [fmt & xs] (when (log? :debug)  (apply logf fmt xs)))
    (defn infof   [fmt & xs] (when (log? :info)   (apply logf fmt xs)))
    (defn warnf   [fmt & xs] (when (log? :warn)   (apply logf (str "WARN: "  fmt) xs)))
    (defn errorf  [fmt & xs] (when (log? :error)  (apply logf (str "ERROR: " fmt) xs)))
    (defn fatalf  [fmt & xs] (when (log? :fatal)  (apply logf (str "FATAL: " fmt) xs)))
    (defn reportf [fmt & xs] (when (log? :report) (apply logf fmt xs))))

  (defn greatest [coll & [?comparator]]
    (let [comparator (or ?comparator rcompare)]
      (reduce #(if (pos? (comparator %1 %2)) %2 %1) coll)))

  (defn least [coll & [?comparator]]
    (let [comparator (or ?comparator rcompare)]
      (reduce #(if (neg? (comparator %1 %2)) %2 %1) coll)))

  (defn clj1098 "Ref. http://goo.gl/0GzRuz" [x] (or x {}))

  (defn distinct-by "Deprecated, prefer `xdistinct`"
    [keyfn coll]
    (let [step (fn step [xs seen]
                 (lazy-seq
                   ((fn [[v :as xs] seen]
                      (when-let [s (seq xs)]
                        (let [v* (keyfn v)]
                          (if (contains? seen v*)
                            (recur (rest s) seen)
                            (cons v (step (rest s) (conj seen v*)))))))
                    xs seen)))]
      (step coll #{})))

  (defn distinctv "Deprecated, prefer `xdistinct`"
    ([      coll] (distinctv identity coll))
    ([keyfn coll]
     (let [tr (reduce (fn [[v seen] in]
                        (let [in* (keyfn in)]
                          (if-not (contains? seen in*)
                            [(conj! v in) (conj seen in*)]
                            [v seen])))
                [(transient []) #{}]
                coll)]
       (persistent! (nth tr 0)))))

  (defn map-kvs "Deprecated, prefer `reduce-kv`" [kf vf m]
    (if-not m {}
      (let [vf (cond (nil? vf) (fn [_ v] v) :else vf)
            kf (cond (nil? kf) (fn [k _] k)
                 (kw-identical? kf :keywordize) (fn [k _] (keyword k))
                 :else kf)]
        (persistent!
          (reduce-kv (fn [m k v] (assoc! m (kf k v) (vf k v)))
            (transient {}) m)))))

  (defn as-map "Deprecated, prefer `reduce-kvs`" [kvs & [kf vf]]
    (if (empty? kvs) {}
        (let [vf (cond (nil? vf) (fn [_ v] v) :else vf)
              kf (cond (nil? kf) (fn [k _] k)
                   (kw-identical? kf :keywordize) (fn [k _] (keyword k))
                   :else kf)]
          (persistent!
            (reduce-kvs
              (fn [m k v] (assoc! m (kf k v) (vf k v))) (transient {}) kvs)))))

  (defn keywordize-map [m] (map-keys keyword m))
  (defn removev [pred coll] (filterv (complement pred) coll))
  (defn nvec? [n x] (and (vector? x) (= (count x) n)))

  (defn memoized [cache f & args]
    (if-not cache ; {<args> <delay-val>}
      (apply f args)
      @(-swap-val! cache args (fn [?dv] (if ?dv ?dv (delay (apply f args)))))))

  (defn- translate-signed-idx [^long signed-idx ^long max-idx]
    (if (>= signed-idx 0)
      (min      signed-idx max-idx)
      (max 0 (+ signed-idx max-idx))))

  (comment (translate-signed-idx -3 5))

  (defn sub-indexes [x start-idx & {:keys [^long max-len ^long end-idx]}]
    (let [start-idx  ^long start-idx
          xlen       (count x) ; also = max-exclusive-end-idx
          ^long start-idx* (translate-signed-idx start-idx xlen)
          end-idx*   (long
                       (cond
                         max-len (                  enc-macros/min*
                                   (+ start-idx* max-len) xlen)
                         end-idx (inc ; Want exclusive
                                   ^long (translate-signed-idx end-idx xlen))
                         :else   xlen))]
      (if (> start-idx* end-idx*)
        ;; [end-idx* start-idx*] ; Allow wrapping
        [0 0] ; Disallow wrapping
        [start-idx* end-idx*])))

  (defn substr "Deprecated, prefer `get-substr` or `get-substring`"
    [s start-idx & [?max-len]]
    (let [[start-idx* end-idx*] (sub-indexes s start-idx :max-len ?max-len)]
                                                       
             (.substring         s start-idx* end-idx*)))

  (comment (substr "hello" -1 1))

  (defn subvec* "Deprecated, prefer `get-subvec` or `get-subvector`"
    [v start-idx & [?max-len]]
    (let [[start-idx* end-idx*] (sub-indexes v start-idx :max-len ?max-len)]
      (subvec v start-idx* end-idx*)))

  (def  sentinel (new-object))
  (defn sentinel?     [x] (identical? x sentinel))
  (defn nil->sentinel [x] (if (nil? x) sentinel x))
  (defn sentinel->nil [x] (if (sentinel? x) nil x))

  (defn   singleton? [coll] (if (counted? coll) (= (count coll) 1) (not (next coll))))
  (defn ->?singleton [coll] (when (singleton? coll) (let [[c1] coll] c1)))
  (defn ->vec [x] (cond (vector? x) x (sequential? x) (vec x) :else [x]))

  (defn fzipmap [ks vs]
    (loop [m  (transient {})
           ks (seq ks)
           vs (seq vs)]
      (if-not (and ks vs)
        (persistent! m)
        (recur (assoc! m (first ks) (first vs))
          (next ks)
          (next vs)))))

  (defn filter-kvs [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k v) m (dissoc m k))) m m)))
  (defn remove-kvs [pred m] (if (nil? m) {} (reduce-kv (fn [m k v] (if (pred k v) (dissoc m k) m)) m m)))

  (defn replace-in [m & ops]
    (reduce
      (fn [m ?op]
        (if-not ?op
          m ; Support conditional ops
          (let [[type ks valf] ?op
                f (if (kw-identical? type :reset) (fn [_] valf) valf)]
            (update-in m ks nil f))))
      m
      ops)))

;;;;;;;;;;;; This file autogenerated from src/taoensso/encore.cljx
