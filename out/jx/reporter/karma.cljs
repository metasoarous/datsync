(ns jx.reporter.karma
  (:require [cljs.test]))

(def karma (volatile! nil))

(defn karma? [] (not (nil? @karma)))

(defn- karma-info! [m]
  (.info @karma (clj->js m)))

(defn- karma-result! [m]
  (.result @karma (clj->js m)))

(defn- karma-complete! []
  (.complete @karma (clj->js {})))

(defn- now []
  (.getTime (js/Date.)))

(def test-var-result (volatile! []))

(def test-var-time-start (volatile! (now)))

(defmethod cljs.test/report :karma [m])

(defmethod cljs.test/report [::karma :begin-test-var] [m]
  (vreset! test-var-result []))

(defmethod cljs.test/report [::karma :end-test-var] [m]
  (let [var-meta (meta (:var m))
        result   {"suite"       [(:ns var-meta)]
                  "description" (:name var-meta)
                  "success"     (zero? (count @test-var-result))
                  "skipped"     nil
                  "time"        (- (now) @test-var-time-start)
                  "log"         (map #(str
                                       "Fail " (cljs.test/testing-vars-str %) "\n"
                                       "Expected " (pr-str (:expected %)) "\n"
                                       "Actual: " (pr-str (:actual %)) "\n")
                                     @test-var-result)}]
    (when (karma?) (karma-result! result))))

(defmethod cljs.test/report [::karma :fail] [m]
  (cljs.test/inc-report-counter! :fail)
  (vswap! test-var-result conj m))

(defmethod cljs.test/report [::karma :error] [m]
  (cljs.test/inc-report-counter! :error)
  (vswap! test-var-result conj m))

(defmethod cljs.test/report [::karma :end-run-tests] [m]
  (when (karma?) (karma-complete!)))

(defn start [tc total-count]
  (do (vreset! karma tc)
      (when (karma?) (karma-info! {:total total-count}))))
