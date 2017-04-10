
# Release notes & changelog


## 0.0.1-alpha2

* BREAKING CHANGE! Generalize implementation of the Sente remote component implementation, making it possible to control options passed to `sente/make-channel-socket!`
  However, because defaults are now more in line with Sente's defaults, the previous default Datsync behaviour (packers, etc) needs to be accounted for in updating.
* Fix bootstrap message initialization on chsk/state first-open for newer versions of Sente (new chsk message
  structure)
* On Sente connection, a [:dat.remote/connected true] message gets sente for triggering boostrapping and other
  events/effects that might need to wait for comms to be ready before initialization
* The :dat.sync.client/request-bootstrap handler is triggered by the above "connected" message, which in turn
  sends the :dat.sync.client/bootstrap message to the server over the remote


## 0.0.1-alpha1

* Some translation cleanup
* Ready made datsync and datremote system components, all pluggable with datreactor component for coordinating
  event handling/transaction
* Namespaces `datsync.*` -> `dat.sync.*`
* Event id changes


## 0.0.1-alpha0

Basic translation functionality; as released at Clojure West 2016.
