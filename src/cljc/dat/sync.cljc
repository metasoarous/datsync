(ns dat.sync
  (:require [clojure.spec.alpha :as s]
            [clojure.spec.gen.alpha :as gen]
            [clojure.pprint :as pp]
            [clojure.test.check.generators :as tc-gen]
            [clojure.set :as set]))


;; What follows is a grand excercise in spec driven development.
;; In particular, we start to spec out:

;; * q and pull
;; * datsync api
;; * onyx-job
;; * some of the solution space for a datalog implementation

;; Things are still fairly rough, but speccing out q and pull in particular has been very illuminating with
;; respect to how I think about the datalog implementation.
;; By speccing things out first, we will get:

;; * query parsing for free, via s/conform
;; * path towards generative testing
;; * profit

;; We can then write a function which translates this conformed query into an onyx topology, as a pure data
;; operation.
;; This pushes all resolution to underlying storage out to the implementation functions for the input/output nodes of
;; the onyx topology.



;; ## Some spec/gen helpers
;; ------------------------

;; These should really be implemented with the size scaling spec feature (see tc-gen/sized); Goal is to slow
;; down the growth of the query complexity in generated queries. also, there is already a vector-distinct that
;; should probably be used in stead of with-unique-gen, together with bind maybe?

(defn with-unique-gen
  [spec-or-gen]
  (if (tc-gen/generator? spec-or-gen)
    ;; If it's a gen
    (gen/fmap (comp vec set) spec-or-gen)
    ;; ow, assume it's a spec and has a gen already
    (s/with-gen
      spec-or-gen
      (fn [] (with-unique-gen (s/gen spec-or-gen))))))

(defn with-max-count
  [n spec-or-gen]
  (if (tc-gen/generator? spec-or-gen)
    ;; If it's a gen
    (gen/fmap (fn [xs]
                (let [n' (inc (rand-int (dec n)))]
                  (into
                    (if (map? xs) {} [])
                    (take n' xs))))
              spec-or-gen)
    ;; ow, assume it's a spec and has a gen already
    (s/with-gen
      spec-or-gen
      (fn [] (with-max-count n (s/gen spec-or-gen))))))


(defn with-max-distinct-count
  [n spec-or-gen]
  (with-max-count n (with-unique-gen spec-or-gen)))

(defn exercise
  ([spec n]
   (doseq [[x x-conformed] (s/exercise spec n)]
     (println "Value for" spec ":")
     (pp/pprint x)
     (println "=>")
     (pp/pprint x-conformed)
     (println "\n\n")))
  ([spec]
   (exercise spec 3)))
             
      
(s/spec?
  (s/cat :fn ::fn-sym
         :args (s/* ::fn-arg)))





;; # Query specs (q & pull)
;; # ======================


;; Starting with pull, since it's simpler and can fall within q


(s/def ::pull-recur-point #{'...})
(s/def ::pull-wild #{'*})


(def example-ref-attrs
  #{:person/father :person/mother :person/friend :person/boss})
(def example-nonref-attrs
  #{:person/name :person/age :person/wish :person/salary})
(def example-attrs (into example-ref-attrs example-nonref-attrs))

;; Should have a way of checking attr-ident against a conn?
(s/def ::attr-ident
  (s/with-gen keyword?
    #(s/gen example-attrs)))


;; Would be nice if ref and nonref attr ident were updated with schema changes

(s/def ::ref-attr-ident
  (s/with-gen ::attr-ident
    #(s/gen example-ref-attrs)))

(s/def ::nonref-attr-ident
  (s/with-gen ::attr-ident
    #(s/gen example-nonref-attrs)))

(s/def ::simple-pull-expression
  (with-max-count 5
    (with-unique-gen
      (s/coll-of 
        (s/or :wild ::pull-wild
              :attr ::attr-ident)))))

;(exercise ::simple-pull-expression)
  

(s/def ::pull-refs
  (with-max-count 5
    (s/map-of ::ref-attr-ident
              (s/with-gen
                (s/or :recur ::pull-recur-point :pull ::pull-expression)
                (fn []
                  (gen/frequency [[5 (s/gen ::simple-pull-expression)]
                                  [1 (s/gen ::pull-recur-point)]]))))))

;(exercise ::pull-refs)

(s/def ::pull-expression
  (with-max-count 5
    (with-unique-gen
      (s/coll-of
        (s/with-gen
          (s/or :wild ::pull-wild
                :attr ::ref-attr-ident
                :ref ::pull-refs)
          (fn []
            (gen/frequency [[18 (s/gen ::attr-ident)]
                            [1 (s/gen ::pull-wild)]
                            [2 (s/gen ::pull-refs)]])))))))

(s/def ::pull ::pull-expression)

;(exercise ::pull-expression)
                                              

(s/def ::var
  (s/with-gen
    ;; Should really validate on first char being ?; review semantics for ! (ungrounded?)
    symbol?
    #(s/gen '#{?a ?b ?c ?d ?e ?f ?g})))


(s/def ::pull-form
  (s/cat :pull #{'pull}
         :sym ::var
         :expr ::pull-expression))


(s/def ::find
  (with-max-distinct-count 5
    (s/coll-of
      (s/with-gen
        (s/or :var ::var :pull ::pull-form)
        (fn [] (gen/frequency [[4 (s/gen ::var)]
                               [1 (s/gen ::pull-form)]]))))))

;(exercise ::find)


(s/def ::fn-sym
  (s/with-gen
    symbol?
    #(s/gen '#{foo bar bizz buzz f g k})))

(s/def ::literal
  (s/with-gen
    any?
    #(s/gen #{:this :that "your" "momma" 24 23 "I lost" 34.56 873.4})))

(s/def ::value ::literal)

(s/def ::fn-arg
  (s/or :var ::var :literal ::literal))


(s/def ::function-call
  (with-max-count 5
    (s/cat :fn ::fn-sym
           :args (s/* ::fn-arg)))) 

;(exercise ::function-call)

(s/def ::function-filter-clause
  (s/cat :fn-call
         (s/and ::function-call
                #(> (count %) 1))))
                ;; hmm... can't get to work; need to have at least one var
                ;(partial some #(s/valid? ::var %)))))
(exercise ::function-filter-clause)

(s/def ::function-map-clause
  (s/cat :fn-call ::function-call
         :out-var ::var))
;(exercise ::function-filter-clause)


(s/def ::uuid
  uuid?)

(s/def ::lookup
  (s/cat :attr ::attr-ident
         :val ::literal))
;(exercise ::lookup)


(s/def ::eid
  (s/or :ident ::attr-ident
        :lookup ::lookup
        :uuid ::uuid))

(s/def ::entity-pattern-entry
  (s/or :eid ::eid
        :var ::var))
;(exercise ::entity-pattern-entry)

(s/def ::value-pattern-entry
  (s/or :uuid ::uuid
        :var ::var
        :ident ::attr-ident))
;(exercise ::value-pattern-entry)

(s/def ::tx-pattern-entry
  (s/or :uuid ::uuid
        :var ::var))
;(exercise ::tx-pattern-entry)

(s/def ::added-pattern-entry
  (s/or :boolean boolean?
        :var ::var))
;(exercise ::added-pattern-entry)

;; A pattern could be on something other than a conn, so should maybe decouple this
(s/def ::pattern
  (s/cat
    :e ::entity-pattern-entry
    :a (s/? ::entity-pattern-entry)
    :v (s/? ::value-pattern-entry)
    :t (s/? ::tx-pattern-entry)
    :b (s/? ::added-pattern-entry)))

(exercise ::pattern)

(s/def ::relation
  (s/or
    :filter ::function-filter-clause
    :map ::function-map-clause
    :pattern ::pattern))
    
(exercise ::relation)

(s/def ::where
  (with-unique-gen
    (s/coll-of ::relation)))

(exercise ::where)

(s/def ::db-in #{'$})
(s/def ::rules-in #{'%})

;; remember ::conn

(s/def ::in
  (s/and
    (with-max-distinct-count 5
      (s/coll-of
        (s/or :db-in ::db-in
              :rules-in ::rules-in
              :var-in ::var)))
      ; Better way to say "at least one of"?
    #(> (count %) 1)))
    ;; Not sure why neither of these:
    ;(partial some '#{$})
    ;#(some #{'$} %)))

(exercise ::in)


(s/def ::query
  (s/keys :req-un [::find ::where]
          :opt-un [::in]))


;; And now putting it all together!

(exercise ::query)


;; As you can see, we're able to excercise queries successfully.
;; Really need to:

;; * control size more sanely
;; * generalize and randomize our various generators
;; * higher level specs which validate queries against a conn/db/schema



(def example-query
  '{:find [?a (pull ?c [* {:this ...}])]
    :where [[?a :foo ?b]
            [(+ ?a 3) ?q]
            [?b :bar ?c]]
    :in [$ ?a]})

(s/explain ::query example-query)
(s/explain ::where (:where example-query))
(pp/pprint
  (s/conform ::query example-query))







;; # Datsync API
;; =============

;; A conn, however we abstract this
(s/def ::conn
  any?)

;; We can return reactions as something like an atom (or ratom?) of the onyx topology output
(s/def ::reaction
  ;; Should ask if derefable, but I recall this being hard
  any?)


(s/def ::read-pull ::pull)
(s/def ::write-pull ::pull)

(s/def ::eids
  (s/coll-of ::eid))

(s/def ::limit
  (s/and int? pos?))


;; Sync scope here is I think the real core concept to the next datsync api.
;; We have either a set of eids or a q for some set of eids, and (potentially) separate pull expressions for
;; which variables to read/write.
;; 

(s/def ::sync-scope
  (s/and
    (s/keys
      :opt [::query ::eids
            ::read-pull ::write-pull ::pull
            ::limit])
    ;; must have one of
    #(or (::query %) (::eids %))
    ;; must have one of
    #(or (::read-pull %) (::write-pull %) (::pull %))))


(s/fdef subscribe
        :args (s/cat :conn ::conn :query ::query :params (s/? coll?))
        :ret ::reaction)

(s/fdef unsubscribe
        :args (s/cat :conn ::conn :query ::query :params (s/? coll?))
        :ret any?)


(s/fdef unify
        :args (s/cat :conn ::conn :query ::query))

;; not sure what the ::remote will actually be yet
(s/def ::remote any?)

(s/fdef synchronize
        :args (s/cat :conn ::conn
                     :remote ::remote
                     :sync-scope ::sync-scope))






;; # Datalog query engine spec
;; # =========================

;; This is only very roughly sketched, based on what I think we might want to do for the eventual,
;; incrementally/differentially maintained, reactive datalog implementation.
;; My hope is that we can use the generic join strategy for


;; From Eve on generic joins:

;; > The core idea behind Generic Join is that instead of breaking a query down
;; > into a set of binary joins on relations, we look at each unique variable in
;; > the query and have all of the relations that might say something about that
;; > variable do an intersection. Let's look at an example:
;; >
;; >  people(person-id, name)
;; >  dogs(person-id, dog-name, dog-age)
;; >
;; > Here we have two relations we want to join together: "people" and "dogs".
;; > The people relation has two fields that are represented by the variables
;; > "person-id" and "name." The dogs relation has three fields: "person-id",
;; > "dog-name", and "dog-age." In postgres, we'd take these two relations and do
;; > a hash or merge join based on the first column of each. In generic join we
;; > look at all the variables we need to solve for, in this case four of them,
;; > and then ask each relation which variable they could propose values for.
;; > These proposals include not just what variable this relation could solve
;; > for, but also an estimate of how many values the variable would have. In the
;; > interest of doing the least amount of work possible, we select the proposal
;; > with the smallest estimate and then for each proposed value of the variable,
;; > we ask all the other relations if they "accept" the value.  If they do, we
;; > recursively solve for the rest of the variables in depth-first fashion.
;; >
;; > In this algorithm, each relation acts as a constraint on the space of
;; > valid solutions. We don't just look at every row in the people table or
;; > every row in the dogs table, but instead look at the unique values per
;; > variable given some set of already solved variables. We call that
;; > solved set of variables a "prefix". So when we ask a constraint to propose
;; > values, we hand it the prefix and ask it which variable it would solve for
;; > next. We then ask each constraint if they accept the new prefix and continue
;; > to solve for the rest of the variables. By selecting the proposal with the
;; > smallest estimate, we can make some interesting guarantees about the upper
;; > bound [2] of the work we will do to satisfy our join and we side step the
;; > need for the insanely complex query planners that exist in most commercial
;; > databases. An interesting aspect of this algorithm is that it's basically
;; > making planning decisions for every unique value of a variable, which means
;; > that it is resilient to the high skew you often end up with in real-world
;; > data.
;; >
;; > So the key parts of Generic Join are prefixes, constraints, and proposals...
;; >
;; > [1]: Generic Join is presented in "Skew Strikes Back: New Developments in
;; >                                  ;//      the Theory of Join Algorithms" https://arxiv.org/abs/1310.3314
;; > [2]: "Worst-case Optimal Join Algorithms "https://arxiv.org/abs/1203.1952


;; Some key elements to pull from this:
;; * pattern
;; * relation
;; * prefix (like context)
;; * constraint
;; * proposal


(s/def ::constraint ::relation)
;(exercise ::constraint)

(s/def ::values
  (s/coll-of ::value))
;(exercise ::values)

(s/def ::prefix
  (s/map-of ::var ::values))


;; This number is key; it's our representation of how many entities a particular var will be constrained to

(s/def ::restriction-estimate
  (s/and int? (comp not neg?)))
;(exercise ::restriction-estimate 10)

(s/def ::proposal
  (s/keys :req [::constraint ::var ::restriction-estimate]))

(s/def ::proposals
  (s/coll-of ::proposal))

(s/def ::projections
  (s/map-of ::var ::pull-form))

;; In this case the query plan is just the optimal sequence of proposals
(s/def ::query-plan
  (s/keys
    :req [::prefix ::proposals ::projections]))



;; Not sure this is exactly right, but should be close enough for now.
;; Ultimately should link out to onyx specs.
(s/def ::onyx-job
  (s/keys
    :req [:onyx/type
          :onyx.core/catalog
          :onyx.core/workflow]
    :opt [:onyx.core/lifecycles
          :onyx.core/flow-conditions]))


;; This is where a lot of the performance magic will lie, in the estimate-restriction function. For a given
;; ::constraint and ::var and ::prefix, we want to figure out how many entities we would estimate the
;; the var in question to be constrained to, again, given ::prefix.

;; For right now, we'll do this as a crude estimate based on looking at the how many variables are in the
;; pattern and maybe accounting for how many other positions in the other queries we get constrained to
;; Eventually, we can start maintaining a stats index that let's us learn simple models of the values
;; associated with a our constraints, which we learn on asynchronously. Further towards the moon still, we'll
;; be using machine learning to make highly accurate predictions.

;; Another trick in all this will be in translating 

(s/fdef estimate-restriction
  :args (s/cat :query ::query
               :constraint ::constraint
               :var ::var)
  :ret ::restriction-estimate)

(s/fdef propose
  :args (s/cat :query ::query
               :prefix ::prefix
               :constraint ::constraint)
  :ret ::proposal)

(s/fdef plan-query
  :args (s/cat :query ::query :prefix ::prefix)
  :ret ::query-plan)


;; For a query we need to figure out what the args are so we can sort through by restriction factor

(s/fdef query-vars
  :args (s/cat :query ::query)
  :ret (s/coll-of ::var))

(s/fdef compile-query-plan
  :args (s/cat :query ::query :query-plan ::query-plan)
  :ret ::onyx-job)


;; Have to figure out not only how to execute, but how to create output subscriptions to the values. Would be
;; great to have a reagent plugin for this, but wonder what the right abstraction is for not making that
;; assumption. Should maybe look again at how posh factored things out. What does execute really do?

;(s/fdef execute)


;; Now we just have to implement all the pieces sketched above

(s/conform ::query example-query)


;(defn estimate-restriction
  ;[query constraint var]
  ;(let [constraint-vars]))

;(defn propose
  ;[query prefix constraint]
  ;(let [query-plan (::query-plan)]))


;; Spec instance generation is the dual of static type checking

(s/fdef constraint-free-vars
  :args (s/cat :constraint ::constraint)
  :ret (s/coll-of ::var))

;(defn constraint-free-vars
  ;[constraint])


;; Here's where everything starts _really_ getting sketchy...
  

(defn free-vars
  [query prefix]
  (set/difference
    (-> query
        :where)
    (set (keys prefix))))

(defn plan-query
  [query prefix]
  (reduce
    (fn [query-plan vars]
      (let [proposals (map (partial propose query prefix)
                           (free-vars query prefix))]
        (if (seq proposals)
          (let [best-proposal (apply min-key ::restriction-estimate proposals)]
            (update query-plan
                    :best-proposal
                    conj
                    ()
              :req [::prefix ::proposals ::projections])))))))


;; example onyx topology
;(defn catalog
  ;([] (catalog 20))
  ;([onyx-batch-size]
   ;[{:onyx/name :treckdb/eav
     ;:onyx/doc "Input eav index"
     ;:onyx/type :input
     ;:onyx/batch-size onyx-batch-size}
    ;{:onyx/name :dat.view/dispatch
     ;:onyx/doc "Segments that are events to be dispatched and eventually transacted"
     ;:onyx/type :input
     ;:onyx/batch-size onyx-batch-size}

    ;{:onyx/name :dat.view.event/intent
     ;:onyx/doc "Matches events to handlers."
     ;:onyx/type :function
     ;:onyx/fn ::intent
     ;:onyx/batch-size onyx-batch-size}


    ;{:onyx/name :dat.view/mount
     ;:onyx/type :output
     ;:onyx.sim/render sim-render
     ;:onyt/batch-size onyx-batch-size}
    ;{:onyx/name :dat.sync/transact
     ;:onyx/type :output
     ;:onyx/batch-size onyx-batch-size}]))

;(def job
  ;{:onyx/type :onyx.core/job
   ;:onyx.core/catalog (catalog)

   ;:onyx.core/lifecycles
   ;[{:lifecycle/task :dat.view.sub/route
     ;:lifecycle/calls ::meta-lifecycle}
    ;{:lifecycle/task :dat.view.subscribe/pull
     ;:lifecycle/calls ::meta-lifecycle}]

   ;:onyx.core/workflow
   ;[[:dat.view/dispatch :dat.view.event/intent]
    ;[:dat.view.event/intent :dat.sync/transact]
    ;[:dat.view/render :dat.view.sub/route]
    ;[:dat.view.sub/route :dat.view.subscribe/query]
    ;[:dat.view.subscribe/query :dat.view.subscribe/pull]]

   ;:onyx.core/flow-conditions
   ;[{:flow/from :dat.view.subscribe/pull
     ;:flow/to [:dat.view.represent/box]
     ;:dat.view.rep/handler :dat.view.represent/box
     ;:flow/predicate [::represent? :dat.view.rep/handler]
     ;:flow/short-circuit? true}
    ;{:flow/from :dat.view.subscribe/pull
     ;:flow/to [:dat.view.represent/label]
     ;:dat.view.rep/handler :dat.view.represent/label
     ;:flow/predicate [::represent? :dat.view.rep/handler]
     ;:flow/short-circuit? true}]})


;(defn simulator [{:as resources :keys [dat.sync.db/conn onyx.sim/sim]}]
  ;(sim/make-sim
    ;:name :dat.view/sim
    ;:title "Dat View Simulator"
    ;:description "This will simulate the compute graph for dat view."
    ;:job (update-in
           ;job
           ;[:onyx.core/lifecycles]
           ;(fn [lifecycles]
             ;(for [lc lifecycles]
               ;(with-meta lc resources))))
    ;:transitions [{:event :onyx.sim.api/inputs
                   ;:inputs {:dat.view/render
                            ;[{:dat.view/route :dat.view.route/todos}
                             ;{:dat.view/route :dat.view.route/index}]}}]))


