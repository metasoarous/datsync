(ns taoensso.timbre
  "Simple, flexible logging for Clojure/Script. No XML."
  {:author "Peter Taoussanis (@ptaoussanis)"}
       
           
                               
                                    
                                                      
                                                       

        
  (:require
   [clojure.string  :as str]
   [taoensso.encore :as enc :refer [] :refer-macros [have have?]]
   [taoensso.timbre.appenders.core :as core-appenders])

        
  (:require-macros
   [taoensso.timbre :as timbre-macros :refer []]))

(if (vector? taoensso.encore/encore-version)
  (enc/assert-min-encore-version [2 87 0])
  (enc/assert-min-encore-version  2.87))

;;;; Config

     
                           
                               
                                           
                                                    
                                                                                 

(declare stacktrace)
(defn default-output-fn
  "Default (fn [data]) -> string output fn.
  Use`(partial default-output-fn <opts-map>)` to modify default opts."
  ([     data] (default-output-fn nil data))
  ([opts data] ; For partials
   (let [{:keys [no-stacktrace? stacktrace-fonts]} opts
         {:keys [level ?err #_vargs msg_ ?ns-str ?file hostname_
                 timestamp_ ?line]} data]
     (str
                                         
                                         
       (str/upper-case (name level))  " "
       "[" (or ?ns-str ?file "?") ":" (or ?line "?") "] - "
       (force msg_)
       (when-not no-stacktrace?
         (when-let [err ?err]
           (str "\n" (stacktrace err opts))))))))

;;; Alias core appenders here for user convenience
(declare default-err default-out)
                                                             
                                                          
       (def println-appender core-appenders/println-appender)
       (def console-appender core-appenders/console-appender)

(def example-config
  "Example (+default) Timbre v4 config map.

  APPENDERS
    An appender is a map with keys:
      :min-level       ; Level keyword, or nil (=> no minimum level)
      :enabled?        ;
      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
      :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
      :output-fn       ; Optional override for inherited (fn [data]) -> string
      :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _} (clj only)
      :ns-whitelist    ; Optional, stacks with active config's whitelist
      :ns-blacklist    ; Optional, stacks with active config's blacklist
      :fn              ; (fn [data]) -> side effects, with keys described below

    An appender's fn takes a single data map with keys:
      :config          ; Entire config map (this map, etc.)
      :appender-id     ; Id of appender currently dispatching
      :appender        ; Entire map of appender currently dispatching
      :instant         ; Platform date (java.util.Date or js/Date)
      :level           ; Keyword
      :error-level?    ; Is level e/o #{:error :fatal}?
      :?ns-str         ; String,  or nil
      :?file           ; String,  or nil
      :?line           ; Integer, or nil ; Waiting on CLJ-865
      :?err            ; First-arg platform error, or nil
      :vargs           ; Vector of raw args
      :output_         ; Forceable - final formatted output string created
                       ; by calling (output-fn <this-data-map>)
      :msg_            ; Forceable - args as a string
      :timestamp_      ; Forceable - string (clj only)
      :hostname_       ; Forceable - string (clj only)
      :output-fn       ; (fn [data]) -> formatted output string
                       ; (see `default-output-fn` for details)
      :context         ; *context* value at log time (see `with-context`)

      **NB** - any keys not specifically documented here should be
      considered private / subject to change without notice.

  MIDDLEWARE
    Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
    transform the data map dispatched to appender fns. If any middleware
    returns nil, NO dispatch will occur (i.e. the event will be filtered).

  The `example-config` source code contains further settings and details.
  See also `set-config!`, `merge-config!`, `set-level!`."

  {:level :debug  ; e/o #{:trace :debug :info :warn :error :fatal :report}

   ;; TODO Consider switching to `:ns-pattern` to match Tufte?
   ;; Control log filtering by namespaces/patterns. Useful for turning off
   ;; logging in noisy libraries, etc.:
   :ns-whitelist  [] #_["my-app.foo-ns"]
   :ns-blacklist  [] #_["taoensso.*"]

   :middleware [] ; (fns [data]) -> ?data, applied left->right

                        
                                ; {:pattern _ :locale _ :timezone _}

   :output-fn default-output-fn ; (fn [data]) -> string

   :appenders
        
                                               
                                                         
     

         
   {;; :println (println-appender {})
    :console (console-appender {})}})

(comment
  (set-config! example-config)
  (infof "Hello %s" "world :-)"))

(enc/defonce ^:dynamic *config* "See `example-config` for info." example-config)
                                                                                  
                                            
                                                                   

(defn swap-config! [f & args]
         (set!                   *config* (apply f *config* args))
                                                 )

(defn   set-config! [m] (swap-config! (fn [_old] m)))
(defn merge-config! [m] (swap-config! (fn [old] (enc/nested-merge old m))))

(defn     set-level! [level] (swap-config! (fn [m] (assoc m :level level))))
                                   
                                                              

(comment (set-level! :info) *config*)

;;;; Levels
;; Note that for historical reasons we don't make a distinction
;; between form "level"s and config "min-level"s.

(def ^:const -levels-vec [:trace :debug :info :warn :error :fatal :report])
(def ^:const -levels-set (set    -levels-vec))
(def ^:const -levels-map (zipmap -levels-vec (next (range))))

(defn valid-level? [x] (if (-levels-set x) true false))
(defn valid-level  [x]
  (or (-levels-set x)
      (throw (ex-info "Invalid Timbre logging level" {:given x}))))

(defn level>= [x y]
  (>= ^long (-levels-map (valid-level x))
      ^long (-levels-map (valid-level y))))

(comment (qb 1e6 (level>= :info :debug))) ; 81.25

;;;; Namespace filtering

(def ^:private -compile-ns-filter (enc/memoize_ enc/compile-ns-filter))
(def ^:private          ns-filter
  "Returns true iff given ns passes white/black lists."
  (enc/memoize_
    (fn [whitelist blacklist ?ns]
      ((-compile-ns-filter whitelist blacklist) ?ns))))

(comment
  (qb 1e6 (ns-filter ["foo.*"] ["foo.baz"] "foo.bar")) ; 238.33
  (ns-filter nil nil "")
  (ns-filter nil nil nil))

;;;; Combo filtering

     
                                 
                                                        
                                                              
               
                                                                   
          

                               
                                                           
                            

     
                                     
                                                             
       
                 
                                                                               
            
                                      

                         
                                                                                      
                                                                                       
                                                                                               
                                                                                               
                                                 

                                           
                                      
      
        
                      
                                 
                                                                        
                                                

                          
                                                                     
                                                

(defn                       ^boolean may-log?
  "Runtime check: would Timbre currently log at the given logging level?
    * `?ns-str` arg required to support ns filtering
    * `config`  arg required to support non-global config"
  ([level                ] (may-log? level nil     nil))
  ([level ?ns-str        ] (may-log? level ?ns-str nil))
  ([level ?ns-str ?config]
   (let [config    (or  ?config *config*)
         min-level (get  config :level :report)]
     (and
       (level>= level min-level)
       (boolean ; Resolves #206 (issue with slf4j-timbre)
         (ns-filter
           (get config :ns-whitelist)
           (get config :ns-blacklist)
           ?ns-str))
       true))))

(comment (qb 1e5 (may-log? :info))) ; 34.13

;;;; Utils

(declare get-hostname)

(enc/compile-if (do enc/str-join true) ; Encore v2.29.1+ with transducers
  (defn- str-join [xs]
    (enc/str-join " "
      (map
        (fn [x]
          (let [x (enc/nil->str x)] ; Undefined, nil -> "nil"
            (cond
              (record?          x) (pr-str x)
              ;; (enc/lazy-seq? x) (pr-str x) ; Dubious?
              :else x))))
      xs))
  (defn- str-join [xs] (str/join " "                 (filter identity xs))))

(comment
  (defrecord MyRec [x])
  (str-join ["foo" (MyRec. "foo")]))

     
                                
                                                                      

(comment (get-agent :my-appender))

(defonce ^:private get-rate-limiter
  (enc/memoize_ (fn [appender-id specs] (enc/limiter specs))))

(comment (def rf (get-rate-limiter :my-appender [[10 5000]])))

;;;; Internal logging core

(def ^:dynamic *context* "General-purpose dynamic logging context" nil)
                       
                                                                     
                                                              

               
                                                                        
                             

                                                          

(defn- vrest [v] (if (> (count v) 1) (subvec v 1) []))
(defn- parse-vargs
  "vargs -> [?err ?meta ?msg-fmt api-vargs]"
  [?err msg-type vargs]
  (let [auto-error? (enc/kw-identical? ?err :auto)
        fmt-msg?    (enc/kw-identical? msg-type :f)
        [v0] vargs]

    (if (and auto-error? (enc/error? v0))
      (let [?err     v0
            ?meta    nil
            vargs    (vrest vargs)
            ?msg-fmt (if fmt-msg? (let [[v0] vargs] v0) nil)
            vargs    (if fmt-msg? (vrest vargs) vargs)]

        [?err ?meta ?msg-fmt vargs])

      (let [?meta    (if (and (map? v0) (:meta (meta v0))) v0 nil)
            ?err     (or (:err ?meta) (if auto-error? nil ?err))
            ?meta    (dissoc ?meta :err)
            vargs    (if ?meta (vrest vargs) vargs)
            ?msg-fmt (if fmt-msg? (let [[v0] vargs] v0) nil)
            vargs    (if fmt-msg? (vrest vargs) vargs)]

        [?err ?meta ?msg-fmt vargs]))))

(comment
  (let [ex (Exception. "ex")]
    (qb 10000
      (parse-vargs :auto :f ["fmt" :a :b :c])
      (parse-vargs :auto :p [ex    :a :b :c])
      (parse-vargs :auto :p [^:meta {:foo :bar} :a :b :c])
      (parse-vargs :auto :p [       {:foo :bar} :a :b :c])
      (parse-vargs :auto :p [ex])
      (parse-vargs :auto :p [^:meta {:err ex}   :a :b :c])))
  ;; [2.79 2.51 6.13 1.65 1.94 6.2]
  (infof                                 "Hi %s" "steve")
  (infof ^:meta {:hash :bar}             "Hi %s" "steve")
  (infof ^:meta {:err (Exception. "ex")} "Hi %s" "steve"))

(defn -log! "Core low-level log fn. Implementation detail!"

  ;; TODO Temp workaround for
  ;; https://github.com/fzakaria/slf4j-timbre/issues/20 and similar AOT tools
  ([config level ?ns-str ?file ?line msg-type ?err vargs_ ?base-data]
   ;; (throw (ex-info "Invalid internal Timbre call. Please try run `lein clean` to clear out-of-date build artifacts." {}))
   (-log! config level ?ns-str ?file ?line msg-type ?err vargs_
     ?base-data nil))

  ([config level ?ns-str ?file ?line msg-type ?err vargs_
    ?base-data callsite-id]

  (when (may-log? level ?ns-str config)
    (let [instant (enc/now-dt)
          context *context*
          vargs   @vargs_

          [?err ?meta ?msg-fmt vargs]
          (parse-vargs ?err msg-type vargs)

          data ; Pre-middleware
          (conj
            (or ?base-data {})
            {:instant instant
             :level   level
             :context context
             :config  config ; Entire config!
             :?ns-str ?ns-str
             :?file   ?file
             :?line   ?line
                                                          
             :error-level? (#{:error :fatal} level)
             :?err     ?err
             :?err_    (delay ?err) ; Deprecated
             :?meta    ?meta        ; Undocumented
             :?msg-fmt ?msg-fmt     ; Undocumented
             :vargs    vargs})

          ?data ; Post middleware
          (reduce ; Apply middleware: data->?data
            (fn [acc mf]
              (let [result (mf acc)]
                (if (nil? result)
                  (reduced nil)
                  result)))
            data
            (:middleware config))]

      (when-let [data ?data] ; Not filtered by middleware
        (let [{:keys [vargs]} data
              data (assoc data :vargs_ (delay vargs)) ; Deprecated
              data
              (enc/assoc-nx data
                :msg_
                (delay
                  (case msg-type
                    nil ""
                    :p  (str-join vargs)
                    :f  #_(enc/format* (have string? ?msg-fmt) vargs)
                    (do
                      (when-not (string? ?msg-fmt)
                        (throw
                          (ex-info "Timbre format-style logging call without a format pattern (string)"
                            #_data
                            {:level    level
                             :location (str (or ?ns-str ?file "?") ":"
                                            (or ?line         "?"))})))

                      (enc/format* ?msg-fmt vargs))))

                ;; Uniquely identifies a particular logging call for
                ;; rate limiting, etc.
                :hash_
                (delay
                  (hash
                    ;; Nb excl. instant
                    [callsite-id      ; Only useful for direct macro calls
                     ?msg-fmt
                     (get ?meta :hash ; Explicit hash provided
                       vargs)])))

              ;; Optimization: try maximize output+timestamp sharing
              ;; between appenders
              output-fn1 (enc/memoize_ (get config :output-fn default-output-fn))
                                                                                                    
                                   ; (fn [timestamp-opts]) -> Shared delay
                   
                           
                         
                       
                                                               
                            
                                                 
                                                                       
                                         ]

          (reduce-kv
           (fn [_ id appender]
             (when (and (:enabled? appender)
                        (level>= level (or (:min-level appender) :trace)))

               ;; Appender ns filter stacks with main config's ns filter:
               (when (ns-filter (:ns-whitelist appender)
                                (:ns-blacklist appender)
                                ?ns-str)

                 (let [rate-limit-specs (:rate-limit appender)
                       rate-limit-okay?
                       (or
                        (empty? rate-limit-specs)
                        (let [rl-fn (get-rate-limiter id rate-limit-specs)]
                          (not (rl-fn (force (:hash_ data))))))]

                   (when rate-limit-okay?
                     (let [{:keys [async?] apfn :fn} appender

                           output-fn
                           (let [f (:output-fn appender)]
                             (if (or (nil? f) (enc/kw-identical? f :inherit))
                               output-fn1
                               f))

                                           
                                
                                                                 
                                                                                   
                                                                     
                                                                             

                           output_
                           (delay
                            (output-fn
                                                                       
                                    data))

                           data
                           (conj data
                             {:appender-id id
                              :appender    appender
                              :output-fn   output-fn
                              :output_     output_
                                                                })

                           ?data ; Final data prep before going to appender
                           (if-let [mfn (:middleware-fn appender)]
                             (mfn data) ; Deprecated, undocumented
                             data)]

                       (when-let [data ?data] ; Not filtered by middleware

                         ;; NB Unless `async?`, we currently allow appenders
                         ;; to throw since it's not particularly obvious
                         ;; how/where we should report problems. Throwing
                         ;; early seems preferable to just silently dropping
                         ;; errors. In effect, we currently require appenders
                         ;;  to take responsibility over appropriate trapping.

                                (apfn data)
                              
                                   
                                                                         
                                       )))))))
           nil
           (:appenders config))))))
  nil))

(comment
  (-log! *config* :info nil nil nil :p :auto
    (delay [(do (println "hi") :x) :y]) nil "callsite-id"))

                                                      

                                              
                                                     

                                                     
                                                
                                                                             

                                                            
                                         
                                
                                                                   
                                                        
                                                
                                     
                                                       
                                                    
                                                            
                                 
                                             
                                               

                                                            

                                                                            
                                                                             
                                     
                       
                                                                     
                                                

                                                                     
                                                         

(comment
  (log! :info :p ["foo"])
  (macroexpand '(log! :info :p ["foo"]))
  (macroexpand '(log! :info :p ["foo"] {:?line 42})))

;;;; Benchmarking

(comment
  (set-level! :debug)
  (may-log? :trace)
  (with-level :trace (log? :trace))
  (qb 10000
    (may-log? :trace)
    (may-log? :trace "foo")
    (tracef "foo")
    (when false "foo"))
  ;; [1.38 1.42 2.08 0.26]

                                                
                                                                            

  (with-sole-appender {:enabled? true :fn (fn [data] nil)}
    (qb 10000 (info "foo"))) ; ~74.58 ; Time to delays ready

  (with-sole-appender {:enabled? true :fn (fn [data] (force (:output_ data)))}
    (qb 10000 (info "foo"))) ; ~136.68 ; Time to output ready
  )

;;;; Main public API-level stuff
;; TODO Have a bunch of cruft here trying to work around CLJ-865 to some extent

;;; Log using print-style args
                                                                                                      
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       

;;; Log using format-style args
                                                                                                      
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       
                                                                                       

(comment
  (infof "hello %s" "world")
  (infof (Exception.) "hello %s" "world")
  (infof (Exception.)))

                                    
                               
        
                             
                                               

                                                
                               
        
                             
                                            
                    

                                                                              

                                                                                           
                                                                                           
                                                                                           

     
                                     
                                                    
               
               
                   
                                        
                                                                
                                   

                                              
                                            
                                                                                  

(comment
  (log-errors             (/ 0))
  (log-and-rethrow-errors (/ 0))
  (logged-future          (/ 0))
  (handle-uncaught-jvm-exceptions!))

                                             
                                  
                         
                             
                                                            
                                                                           

                                 
                 

             
                                                                             
                                                                       
                                                                                
                                                                                
                                                                                
                                                                                 

                                    
(comment ((fn foo [x y] (get-env)) 5 10))

     
                  
                 
                                       
                                                                        
                                                                         
                                            
    
                                       
                                                                        
                                                                         
                                           

                                          
                                                    
                                             

;;;; Misc public utils

     
                            
                                        
                                                                   
                                                                   
                                                                   
                                    
                                                                 

                                                                
                                                                
                                    
                                                           

     
                    
                                                               
                                                           
                                                      

                                                                    
                                                                             
                                                                           
                                                           
                      
                                                            
         

                                                     
                                  
                                                                     

(comment (get-hostname))

     
                                       
                                                          
           

(defn stacktrace
  ([err     ] (stacktrace err nil))
  ([err opts]
          (str err) ; TODO Alternatives?
        
                                                       
                                                  
                                  
                                
                 
                         
                                     

                                     
                                        
                                              
                                               ))

(comment (stacktrace (Exception. "Boo") {:stacktrace-fonts {}}))

                                                     
                      
                                                                 
                                               

;;;; Deprecated

(enc/deprecated
         (def console-?appender core-appenders/console-appender)
  (def ordered-levels -levels-vec)
  (def log? may-log?)
  (defn logging-enabled? [level compile-time-ns] (may-log? level (str compile-time-ns)))
  (defn str-println      [& xs] (str-join xs))
                                                                              
                                                                              
                                        
                   
                                           
                                                  
                                                          
                                                                      )

;;;;;;;;;;;; This file autogenerated from src/taoensso/timbre.cljx
