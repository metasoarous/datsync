(ns dat.sync.test.runner
  (:require
    [doo.runner :refer-macros [doo-tests]]
    [dat.sync.test.core]
    [dat.sync.test.datascript-pr]
    [dat.sync.test.db]))

(enable-console-print!)

(doo-tests 'dat.sync.test.core
           'dat.sync.test.datascript-pr
           'dat.sync.test.db)
