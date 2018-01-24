// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.spec.protocols');
goog.require('cljs.core');

/**
 * When no peer-id is provided, broadcast to all peers/clients/users or send to server if running as client. Otherwise send to a specific peer/client/user
 * @interface
 */
dat.spec.protocols.PRemoteSendEvent = function(){};

dat.spec.protocols.send_event_BANG_ = (function dat$spec$protocols$send_event_BANG_(var_args){
var args51154 = [];
var len__11440__auto___51157 = arguments.length;
var i__11441__auto___51158 = (0);
while(true){
if((i__11441__auto___51158 < len__11440__auto___51157)){
args51154.push((arguments[i__11441__auto___51158]));

var G__51159 = (i__11441__auto___51158 + (1));
i__11441__auto___51158 = G__51159;
continue;
} else {
}
break;
}

var G__51156 = args51154.length;
switch (G__51156) {
case 2:
return dat.spec.protocols.send_event_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.spec.protocols.send_event_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51154.length)].join('')));

}
});

dat.spec.protocols.send_event_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2(this$,event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.send_event_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,event);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.send_event_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteSendEvent.send-event!",this$);
}
}
}
});

dat.spec.protocols.send_event_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,peer_id,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$3 == null)))){
return this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$3(this$,peer_id,event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.send_event_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,peer_id,event);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.send_event_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,peer_id,event);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteSendEvent.send-event!",this$);
}
}
}
});

dat.spec.protocols.send_event_BANG_.cljs$lang$maxFixedArity = 3;



/**
 * Implement this on your Remote component if you want to handle events using a core.async channel (preferred for pipelining).
 * An implementation should return a single event chan on which events can be recieved.
 * @interface
 */
dat.spec.protocols.PRemoteEventChan = function(){};

dat.spec.protocols.remote_event_chan = (function dat$spec$protocols$remote_event_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1 == null)))){
return this$.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.remote_event_chan[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.remote_event_chan["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteEventChan.remote-event-chan",this$);
}
}
}
});


/**
 * Implement this on your Remote component if you want to handle events directly via the implementation of the handle-event! method.
 * @interface
 */
dat.spec.protocols.PRemoteEventHandler = function(){};

dat.spec.protocols.handle_remote_event_BANG_ = (function dat$spec$protocols$handle_remote_event_BANG_(this$,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteEventHandler$handle_remote_event_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$PRemoteEventHandler$handle_remote_event_BANG_$arity$2(this$,event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.handle_remote_event_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,event);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.handle_remote_event_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteEventHandler.handle-remote-event!",this$);
}
}
}
});


/**
 * This is where
 * @interface
 */
dat.spec.protocols.PDispatcher = function(){};

/**
 * Recieves data from calls to dispatch and pipes through to a channel, from which events can be taken.
 *  The semantics of how different levels and events are handled differently as far as priority is entire up to you.
 */
dat.spec.protocols.dispatch_BANG_ = (function dat$spec$protocols$dispatch_BANG_(var_args){
var args51161 = [];
var len__11440__auto___51164 = arguments.length;
var i__11441__auto___51165 = (0);
while(true){
if((i__11441__auto___51165 < len__11440__auto___51164)){
args51161.push((arguments[i__11441__auto___51165]));

var G__51166 = (i__11441__auto___51165 + (1));
i__11441__auto___51165 = G__51166;
continue;
} else {
}
break;
}

var G__51163 = args51161.length;
switch (G__51163) {
case 2:
return dat.spec.protocols.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.spec.protocols.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51161.length)].join('')));

}
});

dat.spec.protocols.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2(this$,event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.dispatch_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,event);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.dispatch_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"PDispatcher.dispatch!",this$);
}
}
}
});

dat.spec.protocols.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,event,level){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 == null)))){
return this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3(this$,event,level);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.dispatch_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,event,level);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.dispatch_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,event,level);
} else {
throw cljs.core.missing_protocol.call(null,"PDispatcher.dispatch!",this$);
}
}
}
});

dat.spec.protocols.dispatch_BANG_.cljs$lang$maxFixedArity = 3;


dat.spec.protocols.dispatcher_event_chan = (function dat$spec$protocols$dispatcher_event_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 == null)))){
return this$.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.dispatcher_event_chan[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.dispatcher_event_chan["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PDispatcher.dispatcher-event-chan",this$);
}
}
}
});


/**
 * Abstract representation of a wire.
 * @interface
 */
dat.spec.protocols.Wire = function(){};

dat.spec.protocols.recv_chan = (function dat$spec$protocols$recv_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$Wire$recv_chan$arity$1 == null)))){
return this$.dat$spec$protocols$Wire$recv_chan$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.recv_chan[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.recv_chan["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Wire.recv-chan",this$);
}
}
}
});

dat.spec.protocols.send_chan = (function dat$spec$protocols$send_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$Wire$send_chan$arity$1 == null)))){
return this$.dat$spec$protocols$Wire$send_chan$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.send_chan[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.send_chan["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Wire.send-chan",this$);
}
}
}
});


/**
 * Wires have state. Make it explicit.
 * @interface
 */
dat.spec.protocols.EventState = function(){};

dat.spec.protocols.snapshot = (function dat$spec$protocols$snapshot(var_args){
var args51168 = [];
var len__11440__auto___51174 = arguments.length;
var i__11441__auto___51175 = (0);
while(true){
if((i__11441__auto___51175 < len__11440__auto___51174)){
args51168.push((arguments[i__11441__auto___51175]));

var G__51176 = (i__11441__auto___51175 + (1));
i__11441__auto___51175 = G__51176;
continue;
} else {
}
break;
}

var G__51170 = args51168.length;
switch (G__51170) {
case 1:
return dat.spec.protocols.snapshot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.spec.protocols.snapshot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51168.length)].join('')));

}
});

dat.spec.protocols.snapshot.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$EventState$snapshot$arity$1 == null)))){
return this$.dat$spec$protocols$EventState$snapshot$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.snapshot[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.snapshot["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"EventState.snapshot",this$);
}
}
}
});

dat.spec.protocols.snapshot.cljs$core$IFn$_invoke$arity$2 = (function (this$,at_time){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$EventState$snapshot$arity$2 == null)))){
return this$.dat$spec$protocols$EventState$snapshot$arity$2(this$,at_time);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.snapshot[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,at_time);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.snapshot["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,at_time);
} else {
throw cljs.core.missing_protocol.call(null,"EventState.snapshot",this$);
}
}
}
});

dat.spec.protocols.snapshot.cljs$lang$maxFixedArity = 2;


dat.spec.protocols.events = (function dat$spec$protocols$events(var_args){
var args51171 = [];
var len__11440__auto___51178 = arguments.length;
var i__11441__auto___51179 = (0);
while(true){
if((i__11441__auto___51179 < len__11440__auto___51178)){
args51171.push((arguments[i__11441__auto___51179]));

var G__51180 = (i__11441__auto___51179 + (1));
i__11441__auto___51179 = G__51180;
continue;
} else {
}
break;
}

var G__51173 = args51171.length;
switch (G__51173) {
case 2:
return dat.spec.protocols.events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.spec.protocols.events.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51171.length)].join('')));

}
});

dat.spec.protocols.events.cljs$core$IFn$_invoke$arity$2 = (function (this$,from_time){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$EventState$events$arity$2 == null)))){
return this$.dat$spec$protocols$EventState$events$arity$2(this$,from_time);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.events[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,from_time);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.events["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,from_time);
} else {
throw cljs.core.missing_protocol.call(null,"EventState.events",this$);
}
}
}
});

dat.spec.protocols.events.cljs$core$IFn$_invoke$arity$3 = (function (this$,from_time,to_time){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$EventState$events$arity$3 == null)))){
return this$.dat$spec$protocols$EventState$events$arity$3(this$,from_time,to_time);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.events[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,from_time,to_time);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.events["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,from_time,to_time);
} else {
throw cljs.core.missing_protocol.call(null,"EventState.events",this$);
}
}
}
});

dat.spec.protocols.events.cljs$lang$maxFixedArity = 3;



/**
 * Alter the dom or more likely the vdom.
 * @interface
 */
dat.spec.protocols.Dom = function(){};

dat.spec.protocols.mount_BANG_ = (function dat$spec$protocols$mount_BANG_(this$,renderable){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$Dom$mount_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$Dom$mount_BANG_$arity$2(this$,renderable);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.mount_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,renderable);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.mount_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,renderable);
} else {
throw cljs.core.missing_protocol.call(null,"Dom.mount!",this$);
}
}
}
});


/**
 * This should probably become more generic and more like bidi.
 * @interface
 */
dat.spec.protocols.RingSock = function(){};

dat.spec.protocols.sock_route = (function dat$spec$protocols$sock_route(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$RingSock$sock_route$arity$1 == null)))){
return this$.dat$spec$protocols$RingSock$sock_route$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.sock_route[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.sock_route["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RingSock.sock-route",this$);
}
}
}
});

dat.spec.protocols.sock_get = (function dat$spec$protocols$sock_get(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$RingSock$sock_get$arity$1 == null)))){
return this$.dat$spec$protocols$RingSock$sock_get$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.sock_get[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.sock_get["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RingSock.sock-get",this$);
}
}
}
});

dat.spec.protocols.sock_post = (function dat$spec$protocols$sock_post(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$RingSock$sock_post$arity$1 == null)))){
return this$.dat$spec$protocols$RingSock$sock_post$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (dat.spec.protocols.sock_post[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (dat.spec.protocols.sock_post["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"RingSock.sock-post",this$);
}
}
}
});


/**
 * @interface
 */
dat.spec.protocols.PReactor = function(){};


//# sourceMappingURL=protocols.js.map