
# Release notes & changelog


## 0.0.1-alpha2

* BREAKING CHANGE! Generalizes implementation of the sente remote component implementation, making it possible to control options passed to `sente/make-channel-socket!`
  However, because defaults are now more in line with Sente's defaults, the previous default Datsync behaviour (packers, etc) needs to be accounted for in updating.
* Bootstrap now initialized automatically: Previously, users had to initiate a boostrap process on their own.


## 0.0.1-alpha1

* Some translation cleanup
* Ready made datsync and datremote system components, all pluggable with datreactor component for coordinating
  event handling/transaction
* Namespaces `datsync.*` -> `dat.sync.*`
* Event id changes


## 0.0.1-alpha0

Basic translation functionality; as released at Clojure West 2016.
