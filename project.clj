(defproject datsync "0.0.1-alpha1-SNAPSHOT"
  :description "Datomic <-> DataScript syncing/replication utilities"
  :url "http://github.com/metasoarous/datsync"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0-alpha6"]
                 [org.clojure/clojurescript "1.9.36"]
                 [org.clojure/core.async "0.2.371"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 ;; Dat projects
                 [datspec "0.0.1-alpha1-SNAPSHOT"]
                 [datreactor "0.0.1-alpha1-SNAPSHOT"]
                 [com.stuartsierra/component "0.3.0"]
                 ;; Other stuff
                 [environ "1.0.1"]
                 [reagent "0.5.1"]
                 [datascript "0.15.0"]
                 ;; Server db (datomic)
                 [com.datomic/datomic-free "0.9.5327" :exclusions [joda-time]]
                 [io.rkn/conformity "0.4.0"]
                 [com.rpl/specter "0.9.1"]
                 [prismatic/plumbing "0.5.2"]
                 [com.taoensso/timbre "4.4.0"]
                 [com.taoensso/encore "2.56.0"]
                 [com.taoensso/sente "1.8.1" :exclusions [org.clojure/tools.reader]]]
  ;;
  ;; ## Snipped from DataScript's
  ;; ============================
  ;;
  ;; The following was taken from DataScript's project.clj; may need to clean up a bit
  ;;
  ;; Leaving this out for now
  ;:global-vars {*warn-on-reflection* true}
  :cljsbuild {:builds [{:id "release"
                        :source-paths ["src" "bench/src"]
                        :assert false
                        :compiler {:output-to     "release-js/datsync.bare.js"
                                   :optimizations :advanced
                                   :pretty-print  false
                                   :elide-asserts true
                                   :output-wrapper false 
                                   :parallel-build true}}]}
                        ;:notify-command ["release-js/wrap_bare.sh"]
  :profiles {:dev {:source-paths ["bench/src" "test" "dev" "src"]
                   :plugins [[lein-cljsbuild "1.1.2"]
                             [lein-typed "0.3.5"]]
                   :cljsbuild {:builds [{:id "advanced"
                                         :source-paths ["src" "bench/src" "test"]
                                         :compiler {
                                                     :output-to     "target/datsync.js"
                                                     :optimizations :advanced
                                                     :source-map    "target/datsync.js.map"
                                                     :pretty-print  true
                                                     :recompile-dependents false
                                                     :parallel-build true}}
                                        {id "none"
                                         :source-paths ["src" "bench/src" "test" "dev"]
                                         :compiler {:main          datsync.test
                                                    :output-to     "target/datsync.js"
                                                    :output-dir    "target/none"
                                                    :optimizations :none
                                                    :source-map    true
                                                    :recompile-dependents false
                                                    :parallel-build true}}]}}}
  :clean-targets ^{:protect false}
                 ["target"
                  "release-js/datsync.bare.js"
                  "release-js/datsync.js"]
  ;; ## Back to from extraction...
  ;; =============================
  ;; Once we're ready 
  ;:core.typed {:check []
               ;:check-cljs []}
  ;; Not sure if we need these either
  :resource-paths ["resources" "resources-index/prod"]
  :target-path "target/%s"
  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]})


