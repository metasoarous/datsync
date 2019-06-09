(ns dat.sync.test.peer
  #? (:cljs (:require-macros [cljs.test :refer (is deftest testing)]))
  (:require 
    [datascript.core :as d]
    #?(:clj [clojure.test :refer :all]
       :cljs [cljs.test])))

(def schema {})

(deftest test-client
  (let [conn (d/create-conn schema)
        _ (sync! conn "server.uri")
        txes [[:db/add [:animal/name :bobo] :animal/mouth :teeth]]]
        (sync/transact! server-conn txes)
    (is conn)))