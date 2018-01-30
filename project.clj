(defproject datsync "0.0.1-alpha3-SNAPSHOT"
  :description "Datomic <-> DataScript syncing/replication utilities"
  :url "http://github.com/metasoarous/datsync"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"] ; match version needed by other dat* bits
                 [clojure-future-spec "1.9.0-alpha17"]
                 [org.clojure/clojurescript "1.9.542"]
                 [org.clojure/tools.reader "1.0.0-beta3"]
                 [org.clojure/tools.logging "0.3.1"]
                 [clojure-future-spec "1.9.0-alpha17"]
                 [commons-codec "1.10"]

                 [datreactor "0.0.1-alpha1-SNAPSHOT"]
                 [datspec "0.0.1-alpha1-SNAPSHOT"]

                 ;; Do we need this?
                 [org.clojure/core.async "0.3.442"]
                 [com.stuartsierra/component "0.3.2"]

                 [environ "1.1.0"]
;;                  [org.onyxplatform/onyx-local-rt "0.10.0.0-beta8"]

                 [reagent "0.6.0"]
                 ;[re-frame "0.9.1"]
                 [datascript "0.15.5"]
                 [io.replikativ/datahike "0.1.0-SNAPSHOT"]
                 [posh "0.5.5"]
                 [org.onyxplatform/onyx-spec "0.11.0.2"]
                 [org.onyxplatform/onyx-local-rt "0.11.0.0"]

                 [com.taoensso/timbre "4.8.0"]
                 [com.taoensso/sente "1.11.0"]
                 [com.taoensso/encore "2.88.2"]
                 [com.taoensso/nippy "2.13.0"]
                 [com.cognitect/transit-clj "0.8.297"]
                 [com.cognitect/transit-cljs "0.8.239"]

                 ;; Server db (datomic)
                 [com.datomic/datomic-free "0.9.5544" :exclusions [joda-time com.google.guava/guava]]

                 ;; Not sure if we need; probably not... XXX
                 [bidi "2.0.16"]
                 [net.cgrand/macrovich "0.2.0"]
;;                  [io.rkn/conformity "0.4.0"]
                 [com.rpl/specter "0.13.2"]
                 [prismatic/plumbing "0.5.3"]
                 [org.clojure/test.check "0.9.0"]]


  ;; ## Snipped from DataScript's
  ;; ============================
  ;;
  ;; The following was taken from DataScript's project.clj; may need to clean up a bit
  ;;
  ;; Leaving this out for now
  ;:global-vars {*warn-on-reflection* true}
  :source-paths ["src/cljc" "src/clj"]
  :test-paths   ["test/cljc" "test/clj"]
  :clojure.spec.check-asserts true

  :cljsbuild {
              :builds [
                       { :id "release"
                         :source-paths ["src/cljc" "src/cljs"]
                         :assert false
                         :compiler {:asset-path    "js/compiled/out"
                                    :output-to     "resources/public/js/compiled/datsync.bare.js"
                                    :output-dir    "resources/public/js/compiled/out"
                                    :optimizations :advanced
                                    :pretty-print  false
                                    :elide-asserts true
                                    :output-wrapper false
                                    :parallel-build true}
                        {:id "test"
                         :source-paths ["src/cljs" "test/cljs" "src/cljc" "test/cljc"]
                         :compiler {:asset-path "js/compiled/test"
                                    :output-to  "resources/public/js/compiled/testable.js"
                                    :output-dir "resources/public/js/compiled/test"
                                    :main dat.sync.test.runner
                                    ;;                            :target :nodejs
                                    :optimizations :none}}}]}
        ;:notify-command ["release-js/wrap_bare.sh"]
  
  :doo {:build "test"
        :alias {:default [:chrome-headless]}}

  :profiles {
             :dev {
                   :source-paths ["test" "dev" "src"]
                   :plugins [[lein-doo "0.1.8"]
                             [lein-cljsbuild "1.1.2"]
                             [lein-typed "0.3.5"]]}}

;;                    :cljsbuild {
;;                                :builds [
;;                                         { :id "advanced"
;;                                           :source-paths ["src/cljc" "src/cljs" "test"]
;;                                           :compiler {:asset-path    "js/compiled/out"
;;                                                      :output-to     "resources/public/js/compiled/datsync.js"
;;                                                      :output-dir    "resources/public/js/compiled/advanced"
;;                                                      :optimizations :advanced
;;                                                      :source-map    "target/datsync.js.map"
;;                                                      :pretty-print  true
;;                                                      :recompile-dependents false
;;                                                      :parallel-build true}}

;;                                         { :id "none"
;;                                           :source-paths ["src/cljc" "src/cljs" "test" "dev"]
;;                                           :compiler {:asset-path    "js/compiled/out"
;;                                                      :main          datsync.test
;;                                                      :output-to     "resources/public/js/compiled/datsync.js"
;;                                                      :output-dir    "resources/public/js/compiled/none"
;;                                                      :optimizations :none
;;                                                      :source-map    true
;;                                                      :recompile-dependents false
;;                                                      :parallel-build true}}]}
                    

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js"]

  ;; ## Back to from extraction...
  ;; =============================

  ;; Once we're ready
  ;:core.typed {:check []
               ;:check-cljs []}
  ;; Not sure if we need these either
  :resource-paths ["resources" "resources-index/prod"]
  :aliases {"package"
            ["with-profile" "prod" "do"
             "clean" ["cljsbuild" "once"]]})


