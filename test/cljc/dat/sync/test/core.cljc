(ns dat.sync.test.core
  (:require
    [dat.sync.db            :as d]
    [dat.sync.db.datascript :as ds]
    [dat.sync.db.datahike   :as dh]
    #?(:clj [dat.sync.db.datomic    :as da])
    [dat.sync.core :as dat.sync]
    [dat.reactor.onyx :as oreactor]
    [clojure.spec.alpha :as s]
    ;;      #?(:cljs [cljs.test    :as t :refer-macros [is are deftest testing]]
    ;;        :clj  [clojure.test :as t :refer        [is are deftest testing]])
    [clojure.test :as t :refer [is are deftest testing]]))
    

;; ???: onyx-sim testing first?

;; TODO: expand job should now be done how? 
;;       - global namespaced vs attached to instance
;;       - who choses global names?
;;       - attached to instance vs attached to conn 


;; TODO: dispatch something
#?(:clj
   (deftest test-server
     (let [;;server (dat.sync/new-datsync-server {:knowbase })
           reactor (oreactor/new-onyx-reactor)]
        
;;     (oreactor/expand-job! 
;;       reactor 
;;       ::job
;;       {:catalog 
;;        []
;;        :workflow []
;;        :flow-conditions []
;;        })
                          
    
    ; (sim/submit-job peer-config job)
    
       (is true))))

;; TODO: test globalization
;; (deftest test-conform
;;   (let [conn (ds/create-conn)]
    
;;     ))

;; TODO: server, client, dirty peer
