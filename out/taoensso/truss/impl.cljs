(ns taoensso.truss.impl
  "Private implementation details"
  (:require [clojure.set :as set])
  (:refer-clojure :exclude (some?))
         (:require-macros
          [taoensso.truss.impl :as impl-macros
           :refer (compile-if catching -invar)]))

(comment (require '[taoensso.encore :as enc :refer (qb)]))

;;;; TODO
;; * Explore adding a namespaced kw registry concept, ala clojure.spec
;;   (truss/def <kw> <pred>)
;; * Explore strategies for easier sharing of composed preds
;; * Add some spec-like preds for easier transition between the two

;;;; Manual Encore imports
;; A bit of a nuisance but:
;;   * Allows Encore to depend on Truss (esp. nb for back-compatibility wrappers)
;;   * Allows Truss to be entirely dependency free

                                                        
                                     
                                                                           

                                                      
                                                                             
                                                                                  
                                                                 
                                  
            
                                                              
                                                                
                                               
            
                                                                                      
                                                                                         

(defn rsome   [pred coll] (reduce (fn [acc in] (when-let [p (pred in)] (reduced p))) nil coll))
(defn revery? [pred coll] (reduce (fn [acc in] (if (pred in) true (reduced nil))) true coll))

       (defn ^boolean some? [x] (if (nil? x) false true))
     
           
                                                         
                                         

(compile-if (completing (fn [])) ; Clojure 1.7+
  (def  set* set)
  (defn set* [x] (if (set? x) x (set x))))

(do
  (defn                       ^boolean ks=      [ks m] (=             (set (keys m)) (set* ks)))
  (defn                       ^boolean ks<=     [ks m] (set/subset?   (set (keys m)) (set* ks)))
  (defn                       ^boolean ks>=     [ks m] (set/superset? (set (keys m)) (set* ks)))
  (defn                       ^boolean ks-nnil? [ks m] (revery?     #(some? (get m %))     ks)))

;;;; Truss

(defn default-error-fn [data_]
  (let [data @data_]
    (throw (ex-info @(:msg_ data) (dissoc data :msg_)))))

(def ^:dynamic *?data* nil)
(def ^:dynamic *error-fn* default-error-fn)

(defn  non-throwing [pred] (fn [x] (catching (pred x))))
(defn- non-throwing?
  "Returns true for some common preds that are naturally non-throwing"
  [p]
         false ; Would need `resolve`; other ideas?
       
     
                
                
                
            
                                                                      
                                                                          
                                                                        
                                                           )

(defn -xpred
  "Expands any special predicate forms and returns [<expanded-pred> <non-throwing?>]"
  [pred]
  (if-not (vector? pred)
    [pred (non-throwing? pred)]
    (let [[type a1 a2 a3] pred]
      (assert a1 "Special predicate [<special-type> <arg>] form w/o <arg>")
      (case type
        :set=             [`(fn [~'x] (=             (set* ~'x) (set* ~a1))) false]
        :set<=            [`(fn [~'x] (set/subset?   (set* ~'x) (set* ~a1))) false]
        :set>=            [`(fn [~'x] (set/superset? (set* ~'x) (set* ~a1))) false]
        :ks=              [`(fn [~'x] (ks=      ~a1 ~'x)) false]
        :ks<=             [`(fn [~'x] (ks<=     ~a1 ~'x)) false]
        :ks>=             [`(fn [~'x] (ks>=     ~a1 ~'x)) false]
        :ks-nnil?         [`(fn [~'x] (ks-nnil? ~a1 ~'x)) false]
        (    :el     :in) [`(fn [~'x]      (contains? (set* ~a1) ~'x))  false]
        (:not-el :not-in) [`(fn [~'x] (not (contains? (set* ~a1) ~'x))) false]

        ;; Pred composition
        (let [self (fn [?pred] (when ?pred (-xpred ?pred)))

              ;; Support recursive expansion:
              [[a1 nt-a1?] [a2 nt-a2?] [a3 nt-a3?]] [(self a1) (self a2) (self a3)]

              nt-a1    (when a1 (if nt-a1? a1 `(non-throwing ~a1)))
              nt-a2    (when a2 (if nt-a2? a2 `(non-throwing ~a2)))
              nt-a3    (when a3 (if nt-a3? a3 `(non-throwing ~a3)))
              nt-comp? (cond a3 (and nt-a1? nt-a2? nt-a3?)
                             a2 (and nt-a1? nt-a2?)
                             a1 nt-a1?)]

          (case type
            :and ; all-of
            (cond
              a3 [`(fn [~'x] (and (~a1 ~'x) (~a2 ~'x) (~a3 ~'x))) nt-comp?]
              a2 [`(fn [~'x] (and (~a1 ~'x) (~a2 ~'x))) nt-comp?]
              a1 [a1 nt-a1?])

            :or  ; any-of
            (cond
              a3 [`(fn [~'x] (or (~nt-a1 ~'x) (~nt-a2 ~'x) (~nt-a3 ~'x))) true]
              a2 [`(fn [~'x] (or (~nt-a1 ~'x) (~nt-a2 ~'x))) true]
              a1 [a1 nt-a1?])

            :not ; complement/none-of
            ;; Note that it's a little ambiguous whether we'd want non-throwing
            ;; behaviour here or not so choosing to interpret throws as
            ;; undefined to minimize surprise
            (cond
              a3 [`(fn [~'x] (not (or (~a1 ~'x) (~a2 ~'x) (~a3 ~'x)))) nt-comp?]
              a2 [`(fn [~'x] (not (or (~a1 ~'x) (~a2 ~'x)))) nt-comp?]
              a1 [`(fn [~'x] (not     (~a1 ~'x))) nt-a1?])))))))

(comment
  (-xpred string?)
  (-xpred [:or string? integer? :foo]) ; t
  (-xpred [:or string? integer? seq])  ; f
  (-xpred [:or string? integer? [:and number? integer?]]) ; t
  (-xpred [:or string? integer? [:and number? pos?]])     ; f
  )

(defn- fmt-err-msg [x1 x2 x3 x4]
  ;; Cider unfortunately doesn't seem to print newlines in errors
  (str "Invariant violation in `" x1 ":" x2 "`. Test form: `" x3 "` with failing input: `" x4 "`"))

(deftype WrappedError [val])
(defn -assertion-error [msg]                                    (js/Error. msg))
(def  -dummy-val                          (js-obj))
(def  -dummy-error                        (js-obj))
(defn -invar-violation!
  ;; * http://dev.clojure.org/jira/browse/CLJ-865 would be handy for line numbers
  ;; * Clojure 1.7+'s `pr-str` dumps a ton of error info that we don't want here
  [elidable? ns-str ?line form val ?err ?data-fn]
  (when-let [error-fn *error-fn*]
    (error-fn ; Nb consumer must deref while bindings are still active
     (delay
      (let [instant                                    (js/Date.)
            line-str    (or ?line "?")
            form-str    (str form)
            undefn-val? (identical? val -dummy-val)
            val-str
            (cond
              undefn-val? "<undefined>"
              (nil? val)  "<nil>"
              :else       (str val) #_(pr-str val))

            ?err
            (cond
              (identical? -dummy-error ?err) nil
              (instance?  WrappedError ?err)
              (.-val     ^WrappedError ?err)
              :else                    ?err)

            msg_
            (delay
             (let [?err-str (when-let [e ?err] (str ?err) #_(pr-str ?err))
                   msg (fmt-err-msg ns-str line-str form-str val-str)]
               (cond
                 (not ?err)       msg
                 undefn-val? (str msg       "\n`val` error: " ?err-str)
                 :else       (str msg "\n`pred-form` error: " ?err-str))))

            ?data
            (when-let [data-fn ?data-fn]
              (catching (data-fn) e {:data-error e}))]

        {:dt        instant
         :msg_      msg_
         :ns-str    ns-str
         :?line     ?line
         ;; :?form  (when-not (string? form) form)
         :form-str  form-str
         :val       (if undefn-val? 'undefined/threw-error val)
         :val-type  (if undefn-val? 'undefined/threw-error (type val))
         :?data      ?data  ; Arbitrary user data, handy for debugging
         :*?data*   *?data* ; ''
         :?err      ?err
         :*assert*  *assert*
         :elidable? elidable?})))))

                
                                                                               
                                          
                                                                            
                                                                     
                                                 

                                     
                                          
                        
                               
                                                                                   

                                                                        
                         
                                 
                                                                                       

                            
                                                        
                                                   
                        
                                                         

                         
                                  
                                                                                       

                                                        
                            
                                                    
                         
                                                                   

                         
                                  
                                                                                           

(comment
  (macroexpand '(-invar true false 1      string?    "foo"             nil)) ; Type 0
  (macroexpand '(-invar true false 1 [:or string?]   "foo"             nil)) ; Type 0
  (macroexpand '(-invar true false 1    #(string? %) "foo"             nil)) ; Type 1
  (macroexpand '(-invar true false 1      string?    (str "foo" "bar") nil)) ; Type 2
  (macroexpand '(-invar true false 1    #(string? %) (str "foo" "bar") nil)) ; Type 3
  (qb 1000000
    (string? "foo")                                          ; Baseline
    (-invar true false 1   string?    "foo"             nil) ; Type 0
    (-invar true false 1 #(string? %) "foo"             nil) ; Type 1
    (-invar true false 1   string?    (str "foo" "bar") nil) ; Type 2
    (-invar true false 1 #(string? %) (str "foo" "bar") nil) ; Type 3
    (try
      (string? (try "foo" (catch Throwable _ nil)))
      (catch Throwable _ nil)))
  ;; [41.86 50.43 59.56 171.12 151.2 42.0]

  (-invar false false 1 integer? "foo"   nil) ; Pred failure example
  (-invar false false 1 zero?    "foo"   nil) ; Pred error example
  (-invar false false 1 zero?    (/ 5 0) nil) ; Form error example
  )

                                                    
                                                                             
                                              
                                                 
                                              
                                                                      
                                                                 

                                                                          
                                                        
                                                     
                                                           

                                                                     
                                                                          
                                 
                                       
                                                                             
                             
                              
                                                 
                                         

              
                                  

                 

                     
                               
                                                                  

                                                 
                                                                                     

                     
                                      
                                        
                   
                                                              
                                                                               

                                                        
                                                        
               
                    
                       
                                                                                        
                      
                     

;;;;;;;;;;;; This file autogenerated from src/taoensso/truss/impl.cljx
