// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37282 = [];
var len__11440__auto___37288 = arguments.length;
var i__11441__auto___37289 = (0);
while(true){
if((i__11441__auto___37289 < len__11440__auto___37288)){
args37282.push((arguments[i__11441__auto___37289]));

var G__37290 = (i__11441__auto___37289 + (1));
i__11441__auto___37289 = G__37290;
continue;
} else {
}
break;
}

var G__37284 = args37282.length;
switch (G__37284) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37282.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37285 = (function (f,blockable,meta37286){
this.f = f;
this.blockable = blockable;
this.meta37286 = meta37286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37287,meta37286__$1){
var self__ = this;
var _37287__$1 = this;
return (new cljs.core.async.t_cljs$core$async37285(self__.f,self__.blockable,meta37286__$1));
});

cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37287){
var self__ = this;
var _37287__$1 = this;
return self__.meta37286;
});

cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37286","meta37286",111838568,null)], null);
});

cljs.core.async.t_cljs$core$async37285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37285";

cljs.core.async.t_cljs$core$async37285.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async37285");
});

cljs.core.async.__GT_t_cljs$core$async37285 = (function cljs$core$async$__GT_t_cljs$core$async37285(f__$1,blockable__$1,meta37286){
return (new cljs.core.async.t_cljs$core$async37285(f__$1,blockable__$1,meta37286));
});

}

return (new cljs.core.async.t_cljs$core$async37285(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37294 = [];
var len__11440__auto___37297 = arguments.length;
var i__11441__auto___37298 = (0);
while(true){
if((i__11441__auto___37298 < len__11440__auto___37297)){
args37294.push((arguments[i__11441__auto___37298]));

var G__37299 = (i__11441__auto___37298 + (1));
i__11441__auto___37298 = G__37299;
continue;
} else {
}
break;
}

var G__37296 = args37294.length;
switch (G__37296) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37294.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37301 = [];
var len__11440__auto___37304 = arguments.length;
var i__11441__auto___37305 = (0);
while(true){
if((i__11441__auto___37305 < len__11440__auto___37304)){
args37301.push((arguments[i__11441__auto___37305]));

var G__37306 = (i__11441__auto___37305 + (1));
i__11441__auto___37305 = G__37306;
continue;
} else {
}
break;
}

var G__37303 = args37301.length;
switch (G__37303) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37301.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37308 = [];
var len__11440__auto___37311 = arguments.length;
var i__11441__auto___37312 = (0);
while(true){
if((i__11441__auto___37312 < len__11440__auto___37311)){
args37308.push((arguments[i__11441__auto___37312]));

var G__37313 = (i__11441__auto___37312 + (1));
i__11441__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var G__37310 = args37308.length;
switch (G__37310) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37308.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37315 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37315);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37315,ret){
return (function (){
return fn1.call(null,val_37315);
});})(val_37315,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37316 = [];
var len__11440__auto___37319 = arguments.length;
var i__11441__auto___37320 = (0);
while(true){
if((i__11441__auto___37320 < len__11440__auto___37319)){
args37316.push((arguments[i__11441__auto___37320]));

var G__37321 = (i__11441__auto___37320 + (1));
i__11441__auto___37320 = G__37321;
continue;
} else {
}
break;
}

var G__37318 = args37316.length;
switch (G__37318) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37316.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__11240__auto___37323 = n;
var x_37324 = (0);
while(true){
if((x_37324 < n__11240__auto___37323)){
(a[x_37324] = (0));

var G__37325 = (x_37324 + (1));
x_37324 = G__37325;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37326 = (i + (1));
i = G__37326;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37330 = (function (flag,meta37331){
this.flag = flag;
this.meta37331 = meta37331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37332,meta37331__$1){
var self__ = this;
var _37332__$1 = this;
return (new cljs.core.async.t_cljs$core$async37330(self__.flag,meta37331__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37332){
var self__ = this;
var _37332__$1 = this;
return self__.meta37331;
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37331","meta37331",470654437,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37330";

cljs.core.async.t_cljs$core$async37330.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async37330");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37330 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37330(flag__$1,meta37331){
return (new cljs.core.async.t_cljs$core$async37330(flag__$1,meta37331));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37330(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37336 = (function (flag,cb,meta37337){
this.flag = flag;
this.cb = cb;
this.meta37337 = meta37337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37338,meta37337__$1){
var self__ = this;
var _37338__$1 = this;
return (new cljs.core.async.t_cljs$core$async37336(self__.flag,self__.cb,meta37337__$1));
});

cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37338){
var self__ = this;
var _37338__$1 = this;
return self__.meta37337;
});

cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37337","meta37337",-218010706,null)], null);
});

cljs.core.async.t_cljs$core$async37336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37336";

cljs.core.async.t_cljs$core$async37336.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async37336");
});

cljs.core.async.__GT_t_cljs$core$async37336 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37336(flag__$1,cb__$1,meta37337){
return (new cljs.core.async.t_cljs$core$async37336(flag__$1,cb__$1,meta37337));
});

}

return (new cljs.core.async.t_cljs$core$async37336(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37339_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37339_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37340_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37340_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10219__auto__ = wport;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37341 = (i + (1));
i = G__37341;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10219__auto__ = ret;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__10207__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__10207__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___37347 = arguments.length;
var i__11441__auto___37348 = (0);
while(true){
if((i__11441__auto___37348 < len__11440__auto___37347)){
args__11447__auto__.push((arguments[i__11441__auto___37348]));

var G__37349 = (i__11441__auto___37348 + (1));
i__11441__auto___37348 = G__37349;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37344){
var map__37345 = p__37344;
var map__37345__$1 = ((((!((map__37345 == null)))?((((map__37345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37345):map__37345);
var opts = map__37345__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37342){
var G__37343 = cljs.core.first.call(null,seq37342);
var seq37342__$1 = cljs.core.next.call(null,seq37342);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37343,seq37342__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37350 = [];
var len__11440__auto___37400 = arguments.length;
var i__11441__auto___37401 = (0);
while(true){
if((i__11441__auto___37401 < len__11440__auto___37400)){
args37350.push((arguments[i__11441__auto___37401]));

var G__37402 = (i__11441__auto___37401 + (1));
i__11441__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var G__37352 = args37350.length;
switch (G__37352) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37350.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37223__auto___37404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___37404){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___37404){
return (function (state_37376){
var state_val_37377 = (state_37376[(1)]);
if((state_val_37377 === (7))){
var inst_37372 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37378_37405 = state_37376__$1;
(statearr_37378_37405[(2)] = inst_37372);

(statearr_37378_37405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (1))){
var state_37376__$1 = state_37376;
var statearr_37379_37406 = state_37376__$1;
(statearr_37379_37406[(2)] = null);

(statearr_37379_37406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (4))){
var inst_37355 = (state_37376[(7)]);
var inst_37355__$1 = (state_37376[(2)]);
var inst_37356 = (inst_37355__$1 == null);
var state_37376__$1 = (function (){var statearr_37380 = state_37376;
(statearr_37380[(7)] = inst_37355__$1);

return statearr_37380;
})();
if(cljs.core.truth_(inst_37356)){
var statearr_37381_37407 = state_37376__$1;
(statearr_37381_37407[(1)] = (5));

} else {
var statearr_37382_37408 = state_37376__$1;
(statearr_37382_37408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (13))){
var state_37376__$1 = state_37376;
var statearr_37383_37409 = state_37376__$1;
(statearr_37383_37409[(2)] = null);

(statearr_37383_37409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (6))){
var inst_37355 = (state_37376[(7)]);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37376__$1,(11),to,inst_37355);
} else {
if((state_val_37377 === (3))){
var inst_37374 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37376__$1,inst_37374);
} else {
if((state_val_37377 === (12))){
var state_37376__$1 = state_37376;
var statearr_37384_37410 = state_37376__$1;
(statearr_37384_37410[(2)] = null);

(statearr_37384_37410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (2))){
var state_37376__$1 = state_37376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37376__$1,(4),from);
} else {
if((state_val_37377 === (11))){
var inst_37365 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
if(cljs.core.truth_(inst_37365)){
var statearr_37385_37411 = state_37376__$1;
(statearr_37385_37411[(1)] = (12));

} else {
var statearr_37386_37412 = state_37376__$1;
(statearr_37386_37412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (9))){
var state_37376__$1 = state_37376;
var statearr_37387_37413 = state_37376__$1;
(statearr_37387_37413[(2)] = null);

(statearr_37387_37413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (5))){
var state_37376__$1 = state_37376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37388_37414 = state_37376__$1;
(statearr_37388_37414[(1)] = (8));

} else {
var statearr_37389_37415 = state_37376__$1;
(statearr_37389_37415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (14))){
var inst_37370 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37390_37416 = state_37376__$1;
(statearr_37390_37416[(2)] = inst_37370);

(statearr_37390_37416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (10))){
var inst_37362 = (state_37376[(2)]);
var state_37376__$1 = state_37376;
var statearr_37391_37417 = state_37376__$1;
(statearr_37391_37417[(2)] = inst_37362);

(statearr_37391_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37377 === (8))){
var inst_37359 = cljs.core.async.close_BANG_.call(null,to);
var state_37376__$1 = state_37376;
var statearr_37392_37418 = state_37376__$1;
(statearr_37392_37418[(2)] = inst_37359);

(statearr_37392_37418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___37404))
;
return ((function (switch__37109__auto__,c__37223__auto___37404){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_37396 = [null,null,null,null,null,null,null,null];
(statearr_37396[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_37396[(1)] = (1));

return statearr_37396;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_37376){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37397){if((e37397 instanceof Object)){
var ex__37113__auto__ = e37397;
var statearr_37398_37419 = state_37376;
(statearr_37398_37419[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37420 = state_37376;
state_37376 = G__37420;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_37376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_37376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___37404))
})();
var state__37225__auto__ = (function (){var statearr_37399 = f__37224__auto__.call(null);
(statearr_37399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37404);

return statearr_37399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___37404))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37608){
var vec__37609 = p__37608;
var v = cljs.core.nth.call(null,vec__37609,(0),null);
var p = cljs.core.nth.call(null,vec__37609,(1),null);
var job = vec__37609;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37223__auto___37795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results){
return (function (state_37616){
var state_val_37617 = (state_37616[(1)]);
if((state_val_37617 === (1))){
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37616__$1,(2),res,v);
} else {
if((state_val_37617 === (2))){
var inst_37613 = (state_37616[(2)]);
var inst_37614 = cljs.core.async.close_BANG_.call(null,res);
var state_37616__$1 = (function (){var statearr_37618 = state_37616;
(statearr_37618[(7)] = inst_37613);

return statearr_37618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37616__$1,inst_37614);
} else {
return null;
}
}
});})(c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results))
;
return ((function (switch__37109__auto__,c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_37622 = [null,null,null,null,null,null,null,null];
(statearr_37622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__);

(statearr_37622[(1)] = (1));

return statearr_37622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1 = (function (state_37616){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37623){if((e37623 instanceof Object)){
var ex__37113__auto__ = e37623;
var statearr_37624_37796 = state_37616;
(statearr_37624_37796[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_37616;
state_37616 = G__37797;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = function(state_37616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1.call(this,state_37616);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results))
})();
var state__37225__auto__ = (function (){var statearr_37625 = f__37224__auto__.call(null);
(statearr_37625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37795);

return statearr_37625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___37795,res,vec__37609,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37626){
var vec__37627 = p__37626;
var v = cljs.core.nth.call(null,vec__37627,(0),null);
var p = cljs.core.nth.call(null,vec__37627,(1),null);
var job = vec__37627;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__11240__auto___37798 = n;
var __37799 = (0);
while(true){
if((__37799 < n__11240__auto___37798)){
var G__37630_37800 = type;
var G__37630_37801__$1 = (((G__37630_37800 instanceof cljs.core.Keyword))?G__37630_37800.fqn:null);
switch (G__37630_37801__$1) {
case "compute":
var c__37223__auto___37803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37799,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (__37799,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function (state_37643){
var state_val_37644 = (state_37643[(1)]);
if((state_val_37644 === (1))){
var state_37643__$1 = state_37643;
var statearr_37645_37804 = state_37643__$1;
(statearr_37645_37804[(2)] = null);

(statearr_37645_37804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (2))){
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37643__$1,(4),jobs);
} else {
if((state_val_37644 === (3))){
var inst_37641 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37643__$1,inst_37641);
} else {
if((state_val_37644 === (4))){
var inst_37633 = (state_37643[(2)]);
var inst_37634 = process.call(null,inst_37633);
var state_37643__$1 = state_37643;
if(cljs.core.truth_(inst_37634)){
var statearr_37646_37805 = state_37643__$1;
(statearr_37646_37805[(1)] = (5));

} else {
var statearr_37647_37806 = state_37643__$1;
(statearr_37647_37806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (5))){
var state_37643__$1 = state_37643;
var statearr_37648_37807 = state_37643__$1;
(statearr_37648_37807[(2)] = null);

(statearr_37648_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (6))){
var state_37643__$1 = state_37643;
var statearr_37649_37808 = state_37643__$1;
(statearr_37649_37808[(2)] = null);

(statearr_37649_37808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37644 === (7))){
var inst_37639 = (state_37643[(2)]);
var state_37643__$1 = state_37643;
var statearr_37650_37809 = state_37643__$1;
(statearr_37650_37809[(2)] = inst_37639);

(statearr_37650_37809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37799,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
;
return ((function (__37799,switch__37109__auto__,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_37654 = [null,null,null,null,null,null,null];
(statearr_37654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__);

(statearr_37654[(1)] = (1));

return statearr_37654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1 = (function (state_37643){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37655){if((e37655 instanceof Object)){
var ex__37113__auto__ = e37655;
var statearr_37656_37810 = state_37643;
(statearr_37656_37810[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37811 = state_37643;
state_37643 = G__37811;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = function(state_37643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1.call(this,state_37643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__;
})()
;})(__37799,switch__37109__auto__,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
})();
var state__37225__auto__ = (function (){var statearr_37657 = f__37224__auto__.call(null);
(statearr_37657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37803);

return statearr_37657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(__37799,c__37223__auto___37803,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
);


break;
case "async":
var c__37223__auto___37812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37799,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (__37799,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function (state_37670){
var state_val_37671 = (state_37670[(1)]);
if((state_val_37671 === (1))){
var state_37670__$1 = state_37670;
var statearr_37672_37813 = state_37670__$1;
(statearr_37672_37813[(2)] = null);

(statearr_37672_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (2))){
var state_37670__$1 = state_37670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37670__$1,(4),jobs);
} else {
if((state_val_37671 === (3))){
var inst_37668 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37670__$1,inst_37668);
} else {
if((state_val_37671 === (4))){
var inst_37660 = (state_37670[(2)]);
var inst_37661 = async.call(null,inst_37660);
var state_37670__$1 = state_37670;
if(cljs.core.truth_(inst_37661)){
var statearr_37673_37814 = state_37670__$1;
(statearr_37673_37814[(1)] = (5));

} else {
var statearr_37674_37815 = state_37670__$1;
(statearr_37674_37815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (5))){
var state_37670__$1 = state_37670;
var statearr_37675_37816 = state_37670__$1;
(statearr_37675_37816[(2)] = null);

(statearr_37675_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (6))){
var state_37670__$1 = state_37670;
var statearr_37676_37817 = state_37670__$1;
(statearr_37676_37817[(2)] = null);

(statearr_37676_37817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37671 === (7))){
var inst_37666 = (state_37670[(2)]);
var state_37670__$1 = state_37670;
var statearr_37677_37818 = state_37670__$1;
(statearr_37677_37818[(2)] = inst_37666);

(statearr_37677_37818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37799,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
;
return ((function (__37799,switch__37109__auto__,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_37681 = [null,null,null,null,null,null,null];
(statearr_37681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__);

(statearr_37681[(1)] = (1));

return statearr_37681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1 = (function (state_37670){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37682){if((e37682 instanceof Object)){
var ex__37113__auto__ = e37682;
var statearr_37683_37819 = state_37670;
(statearr_37683_37819[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37820 = state_37670;
state_37670 = G__37820;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = function(state_37670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1.call(this,state_37670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__;
})()
;})(__37799,switch__37109__auto__,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
})();
var state__37225__auto__ = (function (){var statearr_37684 = f__37224__auto__.call(null);
(statearr_37684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37812);

return statearr_37684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(__37799,c__37223__auto___37812,G__37630_37800,G__37630_37801__$1,n__11240__auto___37798,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__37821 = (__37799 + (1));
__37799 = G__37821;
continue;
} else {
}
break;
}

var c__37223__auto___37822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___37822,jobs,results,process,async){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___37822,jobs,results,process,async){
return (function (state_37706){
var state_val_37707 = (state_37706[(1)]);
if((state_val_37707 === (1))){
var state_37706__$1 = state_37706;
var statearr_37708_37823 = state_37706__$1;
(statearr_37708_37823[(2)] = null);

(statearr_37708_37823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (2))){
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37706__$1,(4),from);
} else {
if((state_val_37707 === (3))){
var inst_37704 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37706__$1,inst_37704);
} else {
if((state_val_37707 === (4))){
var inst_37687 = (state_37706[(7)]);
var inst_37687__$1 = (state_37706[(2)]);
var inst_37688 = (inst_37687__$1 == null);
var state_37706__$1 = (function (){var statearr_37709 = state_37706;
(statearr_37709[(7)] = inst_37687__$1);

return statearr_37709;
})();
if(cljs.core.truth_(inst_37688)){
var statearr_37710_37824 = state_37706__$1;
(statearr_37710_37824[(1)] = (5));

} else {
var statearr_37711_37825 = state_37706__$1;
(statearr_37711_37825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (5))){
var inst_37690 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37706__$1 = state_37706;
var statearr_37712_37826 = state_37706__$1;
(statearr_37712_37826[(2)] = inst_37690);

(statearr_37712_37826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (6))){
var inst_37692 = (state_37706[(8)]);
var inst_37687 = (state_37706[(7)]);
var inst_37692__$1 = cljs.core.async.chan.call(null,(1));
var inst_37693 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37694 = [inst_37687,inst_37692__$1];
var inst_37695 = (new cljs.core.PersistentVector(null,2,(5),inst_37693,inst_37694,null));
var state_37706__$1 = (function (){var statearr_37713 = state_37706;
(statearr_37713[(8)] = inst_37692__$1);

return statearr_37713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37706__$1,(8),jobs,inst_37695);
} else {
if((state_val_37707 === (7))){
var inst_37702 = (state_37706[(2)]);
var state_37706__$1 = state_37706;
var statearr_37714_37827 = state_37706__$1;
(statearr_37714_37827[(2)] = inst_37702);

(statearr_37714_37827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37707 === (8))){
var inst_37692 = (state_37706[(8)]);
var inst_37697 = (state_37706[(2)]);
var state_37706__$1 = (function (){var statearr_37715 = state_37706;
(statearr_37715[(9)] = inst_37697);

return statearr_37715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37706__$1,(9),results,inst_37692);
} else {
if((state_val_37707 === (9))){
var inst_37699 = (state_37706[(2)]);
var state_37706__$1 = (function (){var statearr_37716 = state_37706;
(statearr_37716[(10)] = inst_37699);

return statearr_37716;
})();
var statearr_37717_37828 = state_37706__$1;
(statearr_37717_37828[(2)] = null);

(statearr_37717_37828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___37822,jobs,results,process,async))
;
return ((function (switch__37109__auto__,c__37223__auto___37822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_37721 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__);

(statearr_37721[(1)] = (1));

return statearr_37721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1 = (function (state_37706){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37722){if((e37722 instanceof Object)){
var ex__37113__auto__ = e37722;
var statearr_37723_37829 = state_37706;
(statearr_37723_37829[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37830 = state_37706;
state_37706 = G__37830;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = function(state_37706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1.call(this,state_37706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___37822,jobs,results,process,async))
})();
var state__37225__auto__ = (function (){var statearr_37724 = f__37224__auto__.call(null);
(statearr_37724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37822);

return statearr_37724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___37822,jobs,results,process,async))
);


var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,jobs,results,process,async){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,jobs,results,process,async){
return (function (state_37762){
var state_val_37763 = (state_37762[(1)]);
if((state_val_37763 === (7))){
var inst_37758 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
var statearr_37764_37831 = state_37762__$1;
(statearr_37764_37831[(2)] = inst_37758);

(statearr_37764_37831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (20))){
var state_37762__$1 = state_37762;
var statearr_37765_37832 = state_37762__$1;
(statearr_37765_37832[(2)] = null);

(statearr_37765_37832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (1))){
var state_37762__$1 = state_37762;
var statearr_37766_37833 = state_37762__$1;
(statearr_37766_37833[(2)] = null);

(statearr_37766_37833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (4))){
var inst_37727 = (state_37762[(7)]);
var inst_37727__$1 = (state_37762[(2)]);
var inst_37728 = (inst_37727__$1 == null);
var state_37762__$1 = (function (){var statearr_37767 = state_37762;
(statearr_37767[(7)] = inst_37727__$1);

return statearr_37767;
})();
if(cljs.core.truth_(inst_37728)){
var statearr_37768_37834 = state_37762__$1;
(statearr_37768_37834[(1)] = (5));

} else {
var statearr_37769_37835 = state_37762__$1;
(statearr_37769_37835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (15))){
var inst_37740 = (state_37762[(8)]);
var state_37762__$1 = state_37762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37762__$1,(18),to,inst_37740);
} else {
if((state_val_37763 === (21))){
var inst_37753 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
var statearr_37770_37836 = state_37762__$1;
(statearr_37770_37836[(2)] = inst_37753);

(statearr_37770_37836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (13))){
var inst_37755 = (state_37762[(2)]);
var state_37762__$1 = (function (){var statearr_37771 = state_37762;
(statearr_37771[(9)] = inst_37755);

return statearr_37771;
})();
var statearr_37772_37837 = state_37762__$1;
(statearr_37772_37837[(2)] = null);

(statearr_37772_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (6))){
var inst_37727 = (state_37762[(7)]);
var state_37762__$1 = state_37762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37762__$1,(11),inst_37727);
} else {
if((state_val_37763 === (17))){
var inst_37748 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
if(cljs.core.truth_(inst_37748)){
var statearr_37773_37838 = state_37762__$1;
(statearr_37773_37838[(1)] = (19));

} else {
var statearr_37774_37839 = state_37762__$1;
(statearr_37774_37839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (3))){
var inst_37760 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37762__$1,inst_37760);
} else {
if((state_val_37763 === (12))){
var inst_37737 = (state_37762[(10)]);
var state_37762__$1 = state_37762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37762__$1,(14),inst_37737);
} else {
if((state_val_37763 === (2))){
var state_37762__$1 = state_37762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37762__$1,(4),results);
} else {
if((state_val_37763 === (19))){
var state_37762__$1 = state_37762;
var statearr_37775_37840 = state_37762__$1;
(statearr_37775_37840[(2)] = null);

(statearr_37775_37840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (11))){
var inst_37737 = (state_37762[(2)]);
var state_37762__$1 = (function (){var statearr_37776 = state_37762;
(statearr_37776[(10)] = inst_37737);

return statearr_37776;
})();
var statearr_37777_37841 = state_37762__$1;
(statearr_37777_37841[(2)] = null);

(statearr_37777_37841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (9))){
var state_37762__$1 = state_37762;
var statearr_37778_37842 = state_37762__$1;
(statearr_37778_37842[(2)] = null);

(statearr_37778_37842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (5))){
var state_37762__$1 = state_37762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37779_37843 = state_37762__$1;
(statearr_37779_37843[(1)] = (8));

} else {
var statearr_37780_37844 = state_37762__$1;
(statearr_37780_37844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (14))){
var inst_37742 = (state_37762[(11)]);
var inst_37740 = (state_37762[(8)]);
var inst_37740__$1 = (state_37762[(2)]);
var inst_37741 = (inst_37740__$1 == null);
var inst_37742__$1 = cljs.core.not.call(null,inst_37741);
var state_37762__$1 = (function (){var statearr_37781 = state_37762;
(statearr_37781[(11)] = inst_37742__$1);

(statearr_37781[(8)] = inst_37740__$1);

return statearr_37781;
})();
if(inst_37742__$1){
var statearr_37782_37845 = state_37762__$1;
(statearr_37782_37845[(1)] = (15));

} else {
var statearr_37783_37846 = state_37762__$1;
(statearr_37783_37846[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (16))){
var inst_37742 = (state_37762[(11)]);
var state_37762__$1 = state_37762;
var statearr_37784_37847 = state_37762__$1;
(statearr_37784_37847[(2)] = inst_37742);

(statearr_37784_37847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (10))){
var inst_37734 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
var statearr_37785_37848 = state_37762__$1;
(statearr_37785_37848[(2)] = inst_37734);

(statearr_37785_37848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (18))){
var inst_37745 = (state_37762[(2)]);
var state_37762__$1 = state_37762;
var statearr_37786_37849 = state_37762__$1;
(statearr_37786_37849[(2)] = inst_37745);

(statearr_37786_37849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37763 === (8))){
var inst_37731 = cljs.core.async.close_BANG_.call(null,to);
var state_37762__$1 = state_37762;
var statearr_37787_37850 = state_37762__$1;
(statearr_37787_37850[(2)] = inst_37731);

(statearr_37787_37850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto__,jobs,results,process,async))
;
return ((function (switch__37109__auto__,c__37223__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_37791 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__);

(statearr_37791[(1)] = (1));

return statearr_37791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1 = (function (state_37762){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37792){if((e37792 instanceof Object)){
var ex__37113__auto__ = e37792;
var statearr_37793_37851 = state_37762;
(statearr_37793_37851[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37852 = state_37762;
state_37762 = G__37852;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__ = function(state_37762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1.call(this,state_37762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,jobs,results,process,async))
})();
var state__37225__auto__ = (function (){var statearr_37794 = f__37224__auto__.call(null);
(statearr_37794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_37794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,jobs,results,process,async))
);

return c__37223__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args37853 = [];
var len__11440__auto___37856 = arguments.length;
var i__11441__auto___37857 = (0);
while(true){
if((i__11441__auto___37857 < len__11440__auto___37856)){
args37853.push((arguments[i__11441__auto___37857]));

var G__37858 = (i__11441__auto___37857 + (1));
i__11441__auto___37857 = G__37858;
continue;
} else {
}
break;
}

var G__37855 = args37853.length;
switch (G__37855) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37853.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args37860 = [];
var len__11440__auto___37863 = arguments.length;
var i__11441__auto___37864 = (0);
while(true){
if((i__11441__auto___37864 < len__11440__auto___37863)){
args37860.push((arguments[i__11441__auto___37864]));

var G__37865 = (i__11441__auto___37864 + (1));
i__11441__auto___37864 = G__37865;
continue;
} else {
}
break;
}

var G__37862 = args37860.length;
switch (G__37862) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37860.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args37867 = [];
var len__11440__auto___37920 = arguments.length;
var i__11441__auto___37921 = (0);
while(true){
if((i__11441__auto___37921 < len__11440__auto___37920)){
args37867.push((arguments[i__11441__auto___37921]));

var G__37922 = (i__11441__auto___37921 + (1));
i__11441__auto___37921 = G__37922;
continue;
} else {
}
break;
}

var G__37869 = args37867.length;
switch (G__37869) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37867.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37223__auto___37924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___37924,tc,fc){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___37924,tc,fc){
return (function (state_37895){
var state_val_37896 = (state_37895[(1)]);
if((state_val_37896 === (7))){
var inst_37891 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
var statearr_37897_37925 = state_37895__$1;
(statearr_37897_37925[(2)] = inst_37891);

(statearr_37897_37925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (1))){
var state_37895__$1 = state_37895;
var statearr_37898_37926 = state_37895__$1;
(statearr_37898_37926[(2)] = null);

(statearr_37898_37926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (4))){
var inst_37872 = (state_37895[(7)]);
var inst_37872__$1 = (state_37895[(2)]);
var inst_37873 = (inst_37872__$1 == null);
var state_37895__$1 = (function (){var statearr_37899 = state_37895;
(statearr_37899[(7)] = inst_37872__$1);

return statearr_37899;
})();
if(cljs.core.truth_(inst_37873)){
var statearr_37900_37927 = state_37895__$1;
(statearr_37900_37927[(1)] = (5));

} else {
var statearr_37901_37928 = state_37895__$1;
(statearr_37901_37928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (13))){
var state_37895__$1 = state_37895;
var statearr_37902_37929 = state_37895__$1;
(statearr_37902_37929[(2)] = null);

(statearr_37902_37929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (6))){
var inst_37872 = (state_37895[(7)]);
var inst_37878 = p.call(null,inst_37872);
var state_37895__$1 = state_37895;
if(cljs.core.truth_(inst_37878)){
var statearr_37903_37930 = state_37895__$1;
(statearr_37903_37930[(1)] = (9));

} else {
var statearr_37904_37931 = state_37895__$1;
(statearr_37904_37931[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (3))){
var inst_37893 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37895__$1,inst_37893);
} else {
if((state_val_37896 === (12))){
var state_37895__$1 = state_37895;
var statearr_37905_37932 = state_37895__$1;
(statearr_37905_37932[(2)] = null);

(statearr_37905_37932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (2))){
var state_37895__$1 = state_37895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37895__$1,(4),ch);
} else {
if((state_val_37896 === (11))){
var inst_37872 = (state_37895[(7)]);
var inst_37882 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37895__$1,(8),inst_37882,inst_37872);
} else {
if((state_val_37896 === (9))){
var state_37895__$1 = state_37895;
var statearr_37906_37933 = state_37895__$1;
(statearr_37906_37933[(2)] = tc);

(statearr_37906_37933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (5))){
var inst_37875 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37876 = cljs.core.async.close_BANG_.call(null,fc);
var state_37895__$1 = (function (){var statearr_37907 = state_37895;
(statearr_37907[(8)] = inst_37875);

return statearr_37907;
})();
var statearr_37908_37934 = state_37895__$1;
(statearr_37908_37934[(2)] = inst_37876);

(statearr_37908_37934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (14))){
var inst_37889 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
var statearr_37909_37935 = state_37895__$1;
(statearr_37909_37935[(2)] = inst_37889);

(statearr_37909_37935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (10))){
var state_37895__$1 = state_37895;
var statearr_37910_37936 = state_37895__$1;
(statearr_37910_37936[(2)] = fc);

(statearr_37910_37936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37896 === (8))){
var inst_37884 = (state_37895[(2)]);
var state_37895__$1 = state_37895;
if(cljs.core.truth_(inst_37884)){
var statearr_37911_37937 = state_37895__$1;
(statearr_37911_37937[(1)] = (12));

} else {
var statearr_37912_37938 = state_37895__$1;
(statearr_37912_37938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___37924,tc,fc))
;
return ((function (switch__37109__auto__,c__37223__auto___37924,tc,fc){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_37916 = [null,null,null,null,null,null,null,null,null];
(statearr_37916[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_37916[(1)] = (1));

return statearr_37916;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_37895){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_37895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e37917){if((e37917 instanceof Object)){
var ex__37113__auto__ = e37917;
var statearr_37918_37939 = state_37895;
(statearr_37918_37939[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37940 = state_37895;
state_37895 = G__37940;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_37895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_37895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___37924,tc,fc))
})();
var state__37225__auto__ = (function (){var statearr_37919 = f__37224__auto__.call(null);
(statearr_37919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___37924);

return statearr_37919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___37924,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_38004){
var state_val_38005 = (state_38004[(1)]);
if((state_val_38005 === (7))){
var inst_38000 = (state_38004[(2)]);
var state_38004__$1 = state_38004;
var statearr_38006_38027 = state_38004__$1;
(statearr_38006_38027[(2)] = inst_38000);

(statearr_38006_38027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (1))){
var inst_37984 = init;
var state_38004__$1 = (function (){var statearr_38007 = state_38004;
(statearr_38007[(7)] = inst_37984);

return statearr_38007;
})();
var statearr_38008_38028 = state_38004__$1;
(statearr_38008_38028[(2)] = null);

(statearr_38008_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (4))){
var inst_37987 = (state_38004[(8)]);
var inst_37987__$1 = (state_38004[(2)]);
var inst_37988 = (inst_37987__$1 == null);
var state_38004__$1 = (function (){var statearr_38009 = state_38004;
(statearr_38009[(8)] = inst_37987__$1);

return statearr_38009;
})();
if(cljs.core.truth_(inst_37988)){
var statearr_38010_38029 = state_38004__$1;
(statearr_38010_38029[(1)] = (5));

} else {
var statearr_38011_38030 = state_38004__$1;
(statearr_38011_38030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (6))){
var inst_37987 = (state_38004[(8)]);
var inst_37984 = (state_38004[(7)]);
var inst_37991 = (state_38004[(9)]);
var inst_37991__$1 = f.call(null,inst_37984,inst_37987);
var inst_37992 = cljs.core.reduced_QMARK_.call(null,inst_37991__$1);
var state_38004__$1 = (function (){var statearr_38012 = state_38004;
(statearr_38012[(9)] = inst_37991__$1);

return statearr_38012;
})();
if(inst_37992){
var statearr_38013_38031 = state_38004__$1;
(statearr_38013_38031[(1)] = (8));

} else {
var statearr_38014_38032 = state_38004__$1;
(statearr_38014_38032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (3))){
var inst_38002 = (state_38004[(2)]);
var state_38004__$1 = state_38004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38004__$1,inst_38002);
} else {
if((state_val_38005 === (2))){
var state_38004__$1 = state_38004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38004__$1,(4),ch);
} else {
if((state_val_38005 === (9))){
var inst_37991 = (state_38004[(9)]);
var inst_37984 = inst_37991;
var state_38004__$1 = (function (){var statearr_38015 = state_38004;
(statearr_38015[(7)] = inst_37984);

return statearr_38015;
})();
var statearr_38016_38033 = state_38004__$1;
(statearr_38016_38033[(2)] = null);

(statearr_38016_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (5))){
var inst_37984 = (state_38004[(7)]);
var state_38004__$1 = state_38004;
var statearr_38017_38034 = state_38004__$1;
(statearr_38017_38034[(2)] = inst_37984);

(statearr_38017_38034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (10))){
var inst_37998 = (state_38004[(2)]);
var state_38004__$1 = state_38004;
var statearr_38018_38035 = state_38004__$1;
(statearr_38018_38035[(2)] = inst_37998);

(statearr_38018_38035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38005 === (8))){
var inst_37991 = (state_38004[(9)]);
var inst_37994 = cljs.core.deref.call(null,inst_37991);
var state_38004__$1 = state_38004;
var statearr_38019_38036 = state_38004__$1;
(statearr_38019_38036[(2)] = inst_37994);

(statearr_38019_38036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37110__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37110__auto____0 = (function (){
var statearr_38023 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38023[(0)] = cljs$core$async$reduce_$_state_machine__37110__auto__);

(statearr_38023[(1)] = (1));

return statearr_38023;
});
var cljs$core$async$reduce_$_state_machine__37110__auto____1 = (function (state_38004){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_38004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e38024){if((e38024 instanceof Object)){
var ex__37113__auto__ = e38024;
var statearr_38025_38037 = state_38004;
(statearr_38025_38037[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38038 = state_38004;
state_38004 = G__38038;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37110__auto__ = function(state_38004){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37110__auto____1.call(this,state_38004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37110__auto____0;
cljs$core$async$reduce_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37110__auto____1;
return cljs$core$async$reduce_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_38026 = f__37224__auto__.call(null);
(statearr_38026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_38026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,f__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,f__$1){
return (function (state_38058){
var state_val_38059 = (state_38058[(1)]);
if((state_val_38059 === (1))){
var inst_38053 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38058__$1,(2),inst_38053);
} else {
if((state_val_38059 === (2))){
var inst_38055 = (state_38058[(2)]);
var inst_38056 = f__$1.call(null,inst_38055);
var state_38058__$1 = state_38058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38058__$1,inst_38056);
} else {
return null;
}
}
});})(c__37223__auto__,f__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37110__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37110__auto____0 = (function (){
var statearr_38063 = [null,null,null,null,null,null,null];
(statearr_38063[(0)] = cljs$core$async$transduce_$_state_machine__37110__auto__);

(statearr_38063[(1)] = (1));

return statearr_38063;
});
var cljs$core$async$transduce_$_state_machine__37110__auto____1 = (function (state_38058){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_38058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e38064){if((e38064 instanceof Object)){
var ex__37113__auto__ = e38064;
var statearr_38065_38067 = state_38058;
(statearr_38065_38067[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38068 = state_38058;
state_38058 = G__38068;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37110__auto__ = function(state_38058){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37110__auto____1.call(this,state_38058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37110__auto____0;
cljs$core$async$transduce_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37110__auto____1;
return cljs$core$async$transduce_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,f__$1))
})();
var state__37225__auto__ = (function (){var statearr_38066 = f__37224__auto__.call(null);
(statearr_38066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_38066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,f__$1))
);

return c__37223__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38069 = [];
var len__11440__auto___38121 = arguments.length;
var i__11441__auto___38122 = (0);
while(true){
if((i__11441__auto___38122 < len__11440__auto___38121)){
args38069.push((arguments[i__11441__auto___38122]));

var G__38123 = (i__11441__auto___38122 + (1));
i__11441__auto___38122 = G__38123;
continue;
} else {
}
break;
}

var G__38071 = args38069.length;
switch (G__38071) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38069.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_38096){
var state_val_38097 = (state_38096[(1)]);
if((state_val_38097 === (7))){
var inst_38078 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38098_38125 = state_38096__$1;
(statearr_38098_38125[(2)] = inst_38078);

(statearr_38098_38125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (1))){
var inst_38072 = cljs.core.seq.call(null,coll);
var inst_38073 = inst_38072;
var state_38096__$1 = (function (){var statearr_38099 = state_38096;
(statearr_38099[(7)] = inst_38073);

return statearr_38099;
})();
var statearr_38100_38126 = state_38096__$1;
(statearr_38100_38126[(2)] = null);

(statearr_38100_38126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (4))){
var inst_38073 = (state_38096[(7)]);
var inst_38076 = cljs.core.first.call(null,inst_38073);
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38096__$1,(7),ch,inst_38076);
} else {
if((state_val_38097 === (13))){
var inst_38090 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38101_38127 = state_38096__$1;
(statearr_38101_38127[(2)] = inst_38090);

(statearr_38101_38127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (6))){
var inst_38081 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
if(cljs.core.truth_(inst_38081)){
var statearr_38102_38128 = state_38096__$1;
(statearr_38102_38128[(1)] = (8));

} else {
var statearr_38103_38129 = state_38096__$1;
(statearr_38103_38129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (3))){
var inst_38094 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38096__$1,inst_38094);
} else {
if((state_val_38097 === (12))){
var state_38096__$1 = state_38096;
var statearr_38104_38130 = state_38096__$1;
(statearr_38104_38130[(2)] = null);

(statearr_38104_38130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (2))){
var inst_38073 = (state_38096[(7)]);
var state_38096__$1 = state_38096;
if(cljs.core.truth_(inst_38073)){
var statearr_38105_38131 = state_38096__$1;
(statearr_38105_38131[(1)] = (4));

} else {
var statearr_38106_38132 = state_38096__$1;
(statearr_38106_38132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (11))){
var inst_38087 = cljs.core.async.close_BANG_.call(null,ch);
var state_38096__$1 = state_38096;
var statearr_38107_38133 = state_38096__$1;
(statearr_38107_38133[(2)] = inst_38087);

(statearr_38107_38133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (9))){
var state_38096__$1 = state_38096;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38108_38134 = state_38096__$1;
(statearr_38108_38134[(1)] = (11));

} else {
var statearr_38109_38135 = state_38096__$1;
(statearr_38109_38135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (5))){
var inst_38073 = (state_38096[(7)]);
var state_38096__$1 = state_38096;
var statearr_38110_38136 = state_38096__$1;
(statearr_38110_38136[(2)] = inst_38073);

(statearr_38110_38136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (10))){
var inst_38092 = (state_38096[(2)]);
var state_38096__$1 = state_38096;
var statearr_38111_38137 = state_38096__$1;
(statearr_38111_38137[(2)] = inst_38092);

(statearr_38111_38137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38097 === (8))){
var inst_38073 = (state_38096[(7)]);
var inst_38083 = cljs.core.next.call(null,inst_38073);
var inst_38073__$1 = inst_38083;
var state_38096__$1 = (function (){var statearr_38112 = state_38096;
(statearr_38112[(7)] = inst_38073__$1);

return statearr_38112;
})();
var statearr_38113_38138 = state_38096__$1;
(statearr_38113_38138[(2)] = null);

(statearr_38113_38138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_38117 = [null,null,null,null,null,null,null,null];
(statearr_38117[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_38117[(1)] = (1));

return statearr_38117;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_38096){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_38096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e38118){if((e38118 instanceof Object)){
var ex__37113__auto__ = e38118;
var statearr_38119_38139 = state_38096;
(statearr_38119_38139[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38140 = state_38096;
state_38096 = G__38140;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_38096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_38096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_38120 = f__37224__auto__.call(null);
(statearr_38120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_38120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10938__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,ch);
} else {
var m__10938__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m);
} else {
var m__10938__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38366 = (function (ch,cs,meta38367){
this.ch = ch;
this.cs = cs;
this.meta38367 = meta38367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38368,meta38367__$1){
var self__ = this;
var _38368__$1 = this;
return (new cljs.core.async.t_cljs$core$async38366(self__.ch,self__.cs,meta38367__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38368){
var self__ = this;
var _38368__$1 = this;
return self__.meta38367;
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38367","meta38367",1218211303,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38366";

cljs.core.async.t_cljs$core$async38366.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async38366");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38366 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38366(ch__$1,cs__$1,meta38367){
return (new cljs.core.async.t_cljs$core$async38366(ch__$1,cs__$1,meta38367));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38366(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37223__auto___38591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___38591,cs,m,dchan,dctr,done){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___38591,cs,m,dchan,dctr,done){
return (function (state_38503){
var state_val_38504 = (state_38503[(1)]);
if((state_val_38504 === (7))){
var inst_38499 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38505_38592 = state_38503__$1;
(statearr_38505_38592[(2)] = inst_38499);

(statearr_38505_38592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (20))){
var inst_38402 = (state_38503[(7)]);
var inst_38414 = cljs.core.first.call(null,inst_38402);
var inst_38415 = cljs.core.nth.call(null,inst_38414,(0),null);
var inst_38416 = cljs.core.nth.call(null,inst_38414,(1),null);
var state_38503__$1 = (function (){var statearr_38506 = state_38503;
(statearr_38506[(8)] = inst_38415);

return statearr_38506;
})();
if(cljs.core.truth_(inst_38416)){
var statearr_38507_38593 = state_38503__$1;
(statearr_38507_38593[(1)] = (22));

} else {
var statearr_38508_38594 = state_38503__$1;
(statearr_38508_38594[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (27))){
var inst_38446 = (state_38503[(9)]);
var inst_38444 = (state_38503[(10)]);
var inst_38451 = (state_38503[(11)]);
var inst_38371 = (state_38503[(12)]);
var inst_38451__$1 = cljs.core._nth.call(null,inst_38444,inst_38446);
var inst_38452 = cljs.core.async.put_BANG_.call(null,inst_38451__$1,inst_38371,done);
var state_38503__$1 = (function (){var statearr_38509 = state_38503;
(statearr_38509[(11)] = inst_38451__$1);

return statearr_38509;
})();
if(cljs.core.truth_(inst_38452)){
var statearr_38510_38595 = state_38503__$1;
(statearr_38510_38595[(1)] = (30));

} else {
var statearr_38511_38596 = state_38503__$1;
(statearr_38511_38596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (1))){
var state_38503__$1 = state_38503;
var statearr_38512_38597 = state_38503__$1;
(statearr_38512_38597[(2)] = null);

(statearr_38512_38597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (24))){
var inst_38402 = (state_38503[(7)]);
var inst_38421 = (state_38503[(2)]);
var inst_38422 = cljs.core.next.call(null,inst_38402);
var inst_38380 = inst_38422;
var inst_38381 = null;
var inst_38382 = (0);
var inst_38383 = (0);
var state_38503__$1 = (function (){var statearr_38513 = state_38503;
(statearr_38513[(13)] = inst_38421);

(statearr_38513[(14)] = inst_38383);

(statearr_38513[(15)] = inst_38380);

(statearr_38513[(16)] = inst_38381);

(statearr_38513[(17)] = inst_38382);

return statearr_38513;
})();
var statearr_38514_38598 = state_38503__$1;
(statearr_38514_38598[(2)] = null);

(statearr_38514_38598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (39))){
var state_38503__$1 = state_38503;
var statearr_38518_38599 = state_38503__$1;
(statearr_38518_38599[(2)] = null);

(statearr_38518_38599[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (4))){
var inst_38371 = (state_38503[(12)]);
var inst_38371__$1 = (state_38503[(2)]);
var inst_38372 = (inst_38371__$1 == null);
var state_38503__$1 = (function (){var statearr_38519 = state_38503;
(statearr_38519[(12)] = inst_38371__$1);

return statearr_38519;
})();
if(cljs.core.truth_(inst_38372)){
var statearr_38520_38600 = state_38503__$1;
(statearr_38520_38600[(1)] = (5));

} else {
var statearr_38521_38601 = state_38503__$1;
(statearr_38521_38601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (15))){
var inst_38383 = (state_38503[(14)]);
var inst_38380 = (state_38503[(15)]);
var inst_38381 = (state_38503[(16)]);
var inst_38382 = (state_38503[(17)]);
var inst_38398 = (state_38503[(2)]);
var inst_38399 = (inst_38383 + (1));
var tmp38515 = inst_38380;
var tmp38516 = inst_38381;
var tmp38517 = inst_38382;
var inst_38380__$1 = tmp38515;
var inst_38381__$1 = tmp38516;
var inst_38382__$1 = tmp38517;
var inst_38383__$1 = inst_38399;
var state_38503__$1 = (function (){var statearr_38522 = state_38503;
(statearr_38522[(14)] = inst_38383__$1);

(statearr_38522[(15)] = inst_38380__$1);

(statearr_38522[(16)] = inst_38381__$1);

(statearr_38522[(17)] = inst_38382__$1);

(statearr_38522[(18)] = inst_38398);

return statearr_38522;
})();
var statearr_38523_38602 = state_38503__$1;
(statearr_38523_38602[(2)] = null);

(statearr_38523_38602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (21))){
var inst_38425 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38527_38603 = state_38503__$1;
(statearr_38527_38603[(2)] = inst_38425);

(statearr_38527_38603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (31))){
var inst_38451 = (state_38503[(11)]);
var inst_38455 = done.call(null,null);
var inst_38456 = cljs.core.async.untap_STAR_.call(null,m,inst_38451);
var state_38503__$1 = (function (){var statearr_38528 = state_38503;
(statearr_38528[(19)] = inst_38455);

return statearr_38528;
})();
var statearr_38529_38604 = state_38503__$1;
(statearr_38529_38604[(2)] = inst_38456);

(statearr_38529_38604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (32))){
var inst_38445 = (state_38503[(20)]);
var inst_38443 = (state_38503[(21)]);
var inst_38446 = (state_38503[(9)]);
var inst_38444 = (state_38503[(10)]);
var inst_38458 = (state_38503[(2)]);
var inst_38459 = (inst_38446 + (1));
var tmp38524 = inst_38445;
var tmp38525 = inst_38443;
var tmp38526 = inst_38444;
var inst_38443__$1 = tmp38525;
var inst_38444__$1 = tmp38526;
var inst_38445__$1 = tmp38524;
var inst_38446__$1 = inst_38459;
var state_38503__$1 = (function (){var statearr_38530 = state_38503;
(statearr_38530[(20)] = inst_38445__$1);

(statearr_38530[(21)] = inst_38443__$1);

(statearr_38530[(22)] = inst_38458);

(statearr_38530[(9)] = inst_38446__$1);

(statearr_38530[(10)] = inst_38444__$1);

return statearr_38530;
})();
var statearr_38531_38605 = state_38503__$1;
(statearr_38531_38605[(2)] = null);

(statearr_38531_38605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (40))){
var inst_38471 = (state_38503[(23)]);
var inst_38475 = done.call(null,null);
var inst_38476 = cljs.core.async.untap_STAR_.call(null,m,inst_38471);
var state_38503__$1 = (function (){var statearr_38532 = state_38503;
(statearr_38532[(24)] = inst_38475);

return statearr_38532;
})();
var statearr_38533_38606 = state_38503__$1;
(statearr_38533_38606[(2)] = inst_38476);

(statearr_38533_38606[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (33))){
var inst_38462 = (state_38503[(25)]);
var inst_38464 = cljs.core.chunked_seq_QMARK_.call(null,inst_38462);
var state_38503__$1 = state_38503;
if(inst_38464){
var statearr_38534_38607 = state_38503__$1;
(statearr_38534_38607[(1)] = (36));

} else {
var statearr_38535_38608 = state_38503__$1;
(statearr_38535_38608[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (13))){
var inst_38392 = (state_38503[(26)]);
var inst_38395 = cljs.core.async.close_BANG_.call(null,inst_38392);
var state_38503__$1 = state_38503;
var statearr_38536_38609 = state_38503__$1;
(statearr_38536_38609[(2)] = inst_38395);

(statearr_38536_38609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (22))){
var inst_38415 = (state_38503[(8)]);
var inst_38418 = cljs.core.async.close_BANG_.call(null,inst_38415);
var state_38503__$1 = state_38503;
var statearr_38537_38610 = state_38503__$1;
(statearr_38537_38610[(2)] = inst_38418);

(statearr_38537_38610[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (36))){
var inst_38462 = (state_38503[(25)]);
var inst_38466 = cljs.core.chunk_first.call(null,inst_38462);
var inst_38467 = cljs.core.chunk_rest.call(null,inst_38462);
var inst_38468 = cljs.core.count.call(null,inst_38466);
var inst_38443 = inst_38467;
var inst_38444 = inst_38466;
var inst_38445 = inst_38468;
var inst_38446 = (0);
var state_38503__$1 = (function (){var statearr_38538 = state_38503;
(statearr_38538[(20)] = inst_38445);

(statearr_38538[(21)] = inst_38443);

(statearr_38538[(9)] = inst_38446);

(statearr_38538[(10)] = inst_38444);

return statearr_38538;
})();
var statearr_38539_38611 = state_38503__$1;
(statearr_38539_38611[(2)] = null);

(statearr_38539_38611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (41))){
var inst_38462 = (state_38503[(25)]);
var inst_38478 = (state_38503[(2)]);
var inst_38479 = cljs.core.next.call(null,inst_38462);
var inst_38443 = inst_38479;
var inst_38444 = null;
var inst_38445 = (0);
var inst_38446 = (0);
var state_38503__$1 = (function (){var statearr_38540 = state_38503;
(statearr_38540[(20)] = inst_38445);

(statearr_38540[(21)] = inst_38443);

(statearr_38540[(9)] = inst_38446);

(statearr_38540[(27)] = inst_38478);

(statearr_38540[(10)] = inst_38444);

return statearr_38540;
})();
var statearr_38541_38612 = state_38503__$1;
(statearr_38541_38612[(2)] = null);

(statearr_38541_38612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (43))){
var state_38503__$1 = state_38503;
var statearr_38542_38613 = state_38503__$1;
(statearr_38542_38613[(2)] = null);

(statearr_38542_38613[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (29))){
var inst_38487 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38543_38614 = state_38503__$1;
(statearr_38543_38614[(2)] = inst_38487);

(statearr_38543_38614[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (44))){
var inst_38496 = (state_38503[(2)]);
var state_38503__$1 = (function (){var statearr_38544 = state_38503;
(statearr_38544[(28)] = inst_38496);

return statearr_38544;
})();
var statearr_38545_38615 = state_38503__$1;
(statearr_38545_38615[(2)] = null);

(statearr_38545_38615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (6))){
var inst_38435 = (state_38503[(29)]);
var inst_38434 = cljs.core.deref.call(null,cs);
var inst_38435__$1 = cljs.core.keys.call(null,inst_38434);
var inst_38436 = cljs.core.count.call(null,inst_38435__$1);
var inst_38437 = cljs.core.reset_BANG_.call(null,dctr,inst_38436);
var inst_38442 = cljs.core.seq.call(null,inst_38435__$1);
var inst_38443 = inst_38442;
var inst_38444 = null;
var inst_38445 = (0);
var inst_38446 = (0);
var state_38503__$1 = (function (){var statearr_38546 = state_38503;
(statearr_38546[(20)] = inst_38445);

(statearr_38546[(30)] = inst_38437);

(statearr_38546[(21)] = inst_38443);

(statearr_38546[(9)] = inst_38446);

(statearr_38546[(29)] = inst_38435__$1);

(statearr_38546[(10)] = inst_38444);

return statearr_38546;
})();
var statearr_38547_38616 = state_38503__$1;
(statearr_38547_38616[(2)] = null);

(statearr_38547_38616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (28))){
var inst_38443 = (state_38503[(21)]);
var inst_38462 = (state_38503[(25)]);
var inst_38462__$1 = cljs.core.seq.call(null,inst_38443);
var state_38503__$1 = (function (){var statearr_38548 = state_38503;
(statearr_38548[(25)] = inst_38462__$1);

return statearr_38548;
})();
if(inst_38462__$1){
var statearr_38549_38617 = state_38503__$1;
(statearr_38549_38617[(1)] = (33));

} else {
var statearr_38550_38618 = state_38503__$1;
(statearr_38550_38618[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (25))){
var inst_38445 = (state_38503[(20)]);
var inst_38446 = (state_38503[(9)]);
var inst_38448 = (inst_38446 < inst_38445);
var inst_38449 = inst_38448;
var state_38503__$1 = state_38503;
if(cljs.core.truth_(inst_38449)){
var statearr_38551_38619 = state_38503__$1;
(statearr_38551_38619[(1)] = (27));

} else {
var statearr_38552_38620 = state_38503__$1;
(statearr_38552_38620[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (34))){
var state_38503__$1 = state_38503;
var statearr_38553_38621 = state_38503__$1;
(statearr_38553_38621[(2)] = null);

(statearr_38553_38621[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (17))){
var state_38503__$1 = state_38503;
var statearr_38554_38622 = state_38503__$1;
(statearr_38554_38622[(2)] = null);

(statearr_38554_38622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (3))){
var inst_38501 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38503__$1,inst_38501);
} else {
if((state_val_38504 === (12))){
var inst_38430 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38555_38623 = state_38503__$1;
(statearr_38555_38623[(2)] = inst_38430);

(statearr_38555_38623[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (2))){
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38503__$1,(4),ch);
} else {
if((state_val_38504 === (23))){
var state_38503__$1 = state_38503;
var statearr_38556_38624 = state_38503__$1;
(statearr_38556_38624[(2)] = null);

(statearr_38556_38624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (35))){
var inst_38485 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38557_38625 = state_38503__$1;
(statearr_38557_38625[(2)] = inst_38485);

(statearr_38557_38625[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (19))){
var inst_38402 = (state_38503[(7)]);
var inst_38406 = cljs.core.chunk_first.call(null,inst_38402);
var inst_38407 = cljs.core.chunk_rest.call(null,inst_38402);
var inst_38408 = cljs.core.count.call(null,inst_38406);
var inst_38380 = inst_38407;
var inst_38381 = inst_38406;
var inst_38382 = inst_38408;
var inst_38383 = (0);
var state_38503__$1 = (function (){var statearr_38558 = state_38503;
(statearr_38558[(14)] = inst_38383);

(statearr_38558[(15)] = inst_38380);

(statearr_38558[(16)] = inst_38381);

(statearr_38558[(17)] = inst_38382);

return statearr_38558;
})();
var statearr_38559_38626 = state_38503__$1;
(statearr_38559_38626[(2)] = null);

(statearr_38559_38626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (11))){
var inst_38402 = (state_38503[(7)]);
var inst_38380 = (state_38503[(15)]);
var inst_38402__$1 = cljs.core.seq.call(null,inst_38380);
var state_38503__$1 = (function (){var statearr_38560 = state_38503;
(statearr_38560[(7)] = inst_38402__$1);

return statearr_38560;
})();
if(inst_38402__$1){
var statearr_38561_38627 = state_38503__$1;
(statearr_38561_38627[(1)] = (16));

} else {
var statearr_38562_38628 = state_38503__$1;
(statearr_38562_38628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (9))){
var inst_38432 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38563_38629 = state_38503__$1;
(statearr_38563_38629[(2)] = inst_38432);

(statearr_38563_38629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (5))){
var inst_38378 = cljs.core.deref.call(null,cs);
var inst_38379 = cljs.core.seq.call(null,inst_38378);
var inst_38380 = inst_38379;
var inst_38381 = null;
var inst_38382 = (0);
var inst_38383 = (0);
var state_38503__$1 = (function (){var statearr_38564 = state_38503;
(statearr_38564[(14)] = inst_38383);

(statearr_38564[(15)] = inst_38380);

(statearr_38564[(16)] = inst_38381);

(statearr_38564[(17)] = inst_38382);

return statearr_38564;
})();
var statearr_38565_38630 = state_38503__$1;
(statearr_38565_38630[(2)] = null);

(statearr_38565_38630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (14))){
var state_38503__$1 = state_38503;
var statearr_38566_38631 = state_38503__$1;
(statearr_38566_38631[(2)] = null);

(statearr_38566_38631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (45))){
var inst_38493 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38567_38632 = state_38503__$1;
(statearr_38567_38632[(2)] = inst_38493);

(statearr_38567_38632[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (26))){
var inst_38435 = (state_38503[(29)]);
var inst_38489 = (state_38503[(2)]);
var inst_38490 = cljs.core.seq.call(null,inst_38435);
var state_38503__$1 = (function (){var statearr_38568 = state_38503;
(statearr_38568[(31)] = inst_38489);

return statearr_38568;
})();
if(inst_38490){
var statearr_38569_38633 = state_38503__$1;
(statearr_38569_38633[(1)] = (42));

} else {
var statearr_38570_38634 = state_38503__$1;
(statearr_38570_38634[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (16))){
var inst_38402 = (state_38503[(7)]);
var inst_38404 = cljs.core.chunked_seq_QMARK_.call(null,inst_38402);
var state_38503__$1 = state_38503;
if(inst_38404){
var statearr_38571_38635 = state_38503__$1;
(statearr_38571_38635[(1)] = (19));

} else {
var statearr_38572_38636 = state_38503__$1;
(statearr_38572_38636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (38))){
var inst_38482 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38573_38637 = state_38503__$1;
(statearr_38573_38637[(2)] = inst_38482);

(statearr_38573_38637[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (30))){
var state_38503__$1 = state_38503;
var statearr_38574_38638 = state_38503__$1;
(statearr_38574_38638[(2)] = null);

(statearr_38574_38638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (10))){
var inst_38383 = (state_38503[(14)]);
var inst_38381 = (state_38503[(16)]);
var inst_38391 = cljs.core._nth.call(null,inst_38381,inst_38383);
var inst_38392 = cljs.core.nth.call(null,inst_38391,(0),null);
var inst_38393 = cljs.core.nth.call(null,inst_38391,(1),null);
var state_38503__$1 = (function (){var statearr_38575 = state_38503;
(statearr_38575[(26)] = inst_38392);

return statearr_38575;
})();
if(cljs.core.truth_(inst_38393)){
var statearr_38576_38639 = state_38503__$1;
(statearr_38576_38639[(1)] = (13));

} else {
var statearr_38577_38640 = state_38503__$1;
(statearr_38577_38640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (18))){
var inst_38428 = (state_38503[(2)]);
var state_38503__$1 = state_38503;
var statearr_38578_38641 = state_38503__$1;
(statearr_38578_38641[(2)] = inst_38428);

(statearr_38578_38641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (42))){
var state_38503__$1 = state_38503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38503__$1,(45),dchan);
} else {
if((state_val_38504 === (37))){
var inst_38462 = (state_38503[(25)]);
var inst_38471 = (state_38503[(23)]);
var inst_38371 = (state_38503[(12)]);
var inst_38471__$1 = cljs.core.first.call(null,inst_38462);
var inst_38472 = cljs.core.async.put_BANG_.call(null,inst_38471__$1,inst_38371,done);
var state_38503__$1 = (function (){var statearr_38579 = state_38503;
(statearr_38579[(23)] = inst_38471__$1);

return statearr_38579;
})();
if(cljs.core.truth_(inst_38472)){
var statearr_38580_38642 = state_38503__$1;
(statearr_38580_38642[(1)] = (39));

} else {
var statearr_38581_38643 = state_38503__$1;
(statearr_38581_38643[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38504 === (8))){
var inst_38383 = (state_38503[(14)]);
var inst_38382 = (state_38503[(17)]);
var inst_38385 = (inst_38383 < inst_38382);
var inst_38386 = inst_38385;
var state_38503__$1 = state_38503;
if(cljs.core.truth_(inst_38386)){
var statearr_38582_38644 = state_38503__$1;
(statearr_38582_38644[(1)] = (10));

} else {
var statearr_38583_38645 = state_38503__$1;
(statearr_38583_38645[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___38591,cs,m,dchan,dctr,done))
;
return ((function (switch__37109__auto__,c__37223__auto___38591,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37110__auto__ = null;
var cljs$core$async$mult_$_state_machine__37110__auto____0 = (function (){
var statearr_38587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38587[(0)] = cljs$core$async$mult_$_state_machine__37110__auto__);

(statearr_38587[(1)] = (1));

return statearr_38587;
});
var cljs$core$async$mult_$_state_machine__37110__auto____1 = (function (state_38503){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_38503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e38588){if((e38588 instanceof Object)){
var ex__37113__auto__ = e38588;
var statearr_38589_38646 = state_38503;
(statearr_38589_38646[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38647 = state_38503;
state_38503 = G__38647;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37110__auto__ = function(state_38503){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37110__auto____1.call(this,state_38503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37110__auto____0;
cljs$core$async$mult_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37110__auto____1;
return cljs$core$async$mult_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___38591,cs,m,dchan,dctr,done))
})();
var state__37225__auto__ = (function (){var statearr_38590 = f__37224__auto__.call(null);
(statearr_38590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___38591);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___38591,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38648 = [];
var len__11440__auto___38651 = arguments.length;
var i__11441__auto___38652 = (0);
while(true){
if((i__11441__auto___38652 < len__11440__auto___38651)){
args38648.push((arguments[i__11441__auto___38652]));

var G__38653 = (i__11441__auto___38652 + (1));
i__11441__auto___38652 = G__38653;
continue;
} else {
}
break;
}

var G__38650 = args38648.length;
switch (G__38650) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38648.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,ch);
} else {
var m__10938__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,ch);
} else {
var m__10938__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m);
} else {
var m__10938__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,state_map);
} else {
var m__10938__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__10937__auto__ = (((m == null))?null:m);
var m__10938__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,m,mode);
} else {
var m__10938__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___38665 = arguments.length;
var i__11441__auto___38666 = (0);
while(true){
if((i__11441__auto___38666 < len__11440__auto___38665)){
args__11447__auto__.push((arguments[i__11441__auto___38666]));

var G__38667 = (i__11441__auto___38666 + (1));
i__11441__auto___38666 = G__38667;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((3) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11448__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38659){
var map__38660 = p__38659;
var map__38660__$1 = ((((!((map__38660 == null)))?((((map__38660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38660):map__38660);
var opts = map__38660__$1;
var statearr_38662_38668 = state;
(statearr_38662_38668[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__38660,map__38660__$1,opts){
return (function (val){
var statearr_38663_38669 = state;
(statearr_38663_38669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38660,map__38660__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_38664_38670 = state;
(statearr_38664_38670[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38655){
var G__38656 = cljs.core.first.call(null,seq38655);
var seq38655__$1 = cljs.core.next.call(null,seq38655);
var G__38657 = cljs.core.first.call(null,seq38655__$1);
var seq38655__$2 = cljs.core.next.call(null,seq38655__$1);
var G__38658 = cljs.core.first.call(null,seq38655__$2);
var seq38655__$3 = cljs.core.next.call(null,seq38655__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38656,G__38657,G__38658,seq38655__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38838 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38839){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38839 = meta38839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38840,meta38839__$1){
var self__ = this;
var _38840__$1 = this;
return (new cljs.core.async.t_cljs$core$async38838(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38839__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38840){
var self__ = this;
var _38840__$1 = this;
return self__.meta38839;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38839","meta38839",-1660687703,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38838";

cljs.core.async.t_cljs$core$async38838.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async38838");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38838 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38838(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38839){
return (new cljs.core.async.t_cljs$core$async38838(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38839));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38838(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37223__auto___39005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38942){
var state_val_38943 = (state_38942[(1)]);
if((state_val_38943 === (7))){
var inst_38857 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38944_39006 = state_38942__$1;
(statearr_38944_39006[(2)] = inst_38857);

(statearr_38944_39006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (20))){
var inst_38869 = (state_38942[(7)]);
var state_38942__$1 = state_38942;
var statearr_38945_39007 = state_38942__$1;
(statearr_38945_39007[(2)] = inst_38869);

(statearr_38945_39007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (27))){
var state_38942__$1 = state_38942;
var statearr_38946_39008 = state_38942__$1;
(statearr_38946_39008[(2)] = null);

(statearr_38946_39008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (1))){
var inst_38844 = (state_38942[(8)]);
var inst_38844__$1 = calc_state.call(null);
var inst_38846 = (inst_38844__$1 == null);
var inst_38847 = cljs.core.not.call(null,inst_38846);
var state_38942__$1 = (function (){var statearr_38947 = state_38942;
(statearr_38947[(8)] = inst_38844__$1);

return statearr_38947;
})();
if(inst_38847){
var statearr_38948_39009 = state_38942__$1;
(statearr_38948_39009[(1)] = (2));

} else {
var statearr_38949_39010 = state_38942__$1;
(statearr_38949_39010[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (24))){
var inst_38916 = (state_38942[(9)]);
var inst_38893 = (state_38942[(10)]);
var inst_38902 = (state_38942[(11)]);
var inst_38916__$1 = inst_38893.call(null,inst_38902);
var state_38942__$1 = (function (){var statearr_38950 = state_38942;
(statearr_38950[(9)] = inst_38916__$1);

return statearr_38950;
})();
if(cljs.core.truth_(inst_38916__$1)){
var statearr_38951_39011 = state_38942__$1;
(statearr_38951_39011[(1)] = (29));

} else {
var statearr_38952_39012 = state_38942__$1;
(statearr_38952_39012[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (4))){
var inst_38860 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38860)){
var statearr_38953_39013 = state_38942__$1;
(statearr_38953_39013[(1)] = (8));

} else {
var statearr_38954_39014 = state_38942__$1;
(statearr_38954_39014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (15))){
var inst_38887 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38887)){
var statearr_38955_39015 = state_38942__$1;
(statearr_38955_39015[(1)] = (19));

} else {
var statearr_38956_39016 = state_38942__$1;
(statearr_38956_39016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (21))){
var inst_38892 = (state_38942[(12)]);
var inst_38892__$1 = (state_38942[(2)]);
var inst_38893 = cljs.core.get.call(null,inst_38892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38894 = cljs.core.get.call(null,inst_38892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38895 = cljs.core.get.call(null,inst_38892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38942__$1 = (function (){var statearr_38957 = state_38942;
(statearr_38957[(12)] = inst_38892__$1);

(statearr_38957[(13)] = inst_38894);

(statearr_38957[(10)] = inst_38893);

return statearr_38957;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38942__$1,(22),inst_38895);
} else {
if((state_val_38943 === (31))){
var inst_38924 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38924)){
var statearr_38958_39017 = state_38942__$1;
(statearr_38958_39017[(1)] = (32));

} else {
var statearr_38959_39018 = state_38942__$1;
(statearr_38959_39018[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (32))){
var inst_38901 = (state_38942[(14)]);
var state_38942__$1 = state_38942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38942__$1,(35),out,inst_38901);
} else {
if((state_val_38943 === (33))){
var inst_38892 = (state_38942[(12)]);
var inst_38869 = inst_38892;
var state_38942__$1 = (function (){var statearr_38960 = state_38942;
(statearr_38960[(7)] = inst_38869);

return statearr_38960;
})();
var statearr_38961_39019 = state_38942__$1;
(statearr_38961_39019[(2)] = null);

(statearr_38961_39019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (13))){
var inst_38869 = (state_38942[(7)]);
var inst_38876 = inst_38869.cljs$lang$protocol_mask$partition0$;
var inst_38877 = (inst_38876 & (64));
var inst_38878 = inst_38869.cljs$core$ISeq$;
var inst_38879 = (cljs.core.PROTOCOL_SENTINEL === inst_38878);
var inst_38880 = (inst_38877) || (inst_38879);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38880)){
var statearr_38962_39020 = state_38942__$1;
(statearr_38962_39020[(1)] = (16));

} else {
var statearr_38963_39021 = state_38942__$1;
(statearr_38963_39021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (22))){
var inst_38901 = (state_38942[(14)]);
var inst_38902 = (state_38942[(11)]);
var inst_38900 = (state_38942[(2)]);
var inst_38901__$1 = cljs.core.nth.call(null,inst_38900,(0),null);
var inst_38902__$1 = cljs.core.nth.call(null,inst_38900,(1),null);
var inst_38903 = (inst_38901__$1 == null);
var inst_38904 = cljs.core._EQ_.call(null,inst_38902__$1,change);
var inst_38905 = (inst_38903) || (inst_38904);
var state_38942__$1 = (function (){var statearr_38964 = state_38942;
(statearr_38964[(14)] = inst_38901__$1);

(statearr_38964[(11)] = inst_38902__$1);

return statearr_38964;
})();
if(cljs.core.truth_(inst_38905)){
var statearr_38965_39022 = state_38942__$1;
(statearr_38965_39022[(1)] = (23));

} else {
var statearr_38966_39023 = state_38942__$1;
(statearr_38966_39023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (36))){
var inst_38892 = (state_38942[(12)]);
var inst_38869 = inst_38892;
var state_38942__$1 = (function (){var statearr_38967 = state_38942;
(statearr_38967[(7)] = inst_38869);

return statearr_38967;
})();
var statearr_38968_39024 = state_38942__$1;
(statearr_38968_39024[(2)] = null);

(statearr_38968_39024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (29))){
var inst_38916 = (state_38942[(9)]);
var state_38942__$1 = state_38942;
var statearr_38969_39025 = state_38942__$1;
(statearr_38969_39025[(2)] = inst_38916);

(statearr_38969_39025[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (6))){
var state_38942__$1 = state_38942;
var statearr_38970_39026 = state_38942__$1;
(statearr_38970_39026[(2)] = false);

(statearr_38970_39026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (28))){
var inst_38912 = (state_38942[(2)]);
var inst_38913 = calc_state.call(null);
var inst_38869 = inst_38913;
var state_38942__$1 = (function (){var statearr_38971 = state_38942;
(statearr_38971[(15)] = inst_38912);

(statearr_38971[(7)] = inst_38869);

return statearr_38971;
})();
var statearr_38972_39027 = state_38942__$1;
(statearr_38972_39027[(2)] = null);

(statearr_38972_39027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (25))){
var inst_38938 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38973_39028 = state_38942__$1;
(statearr_38973_39028[(2)] = inst_38938);

(statearr_38973_39028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (34))){
var inst_38936 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38974_39029 = state_38942__$1;
(statearr_38974_39029[(2)] = inst_38936);

(statearr_38974_39029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (17))){
var state_38942__$1 = state_38942;
var statearr_38975_39030 = state_38942__$1;
(statearr_38975_39030[(2)] = false);

(statearr_38975_39030[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (3))){
var state_38942__$1 = state_38942;
var statearr_38976_39031 = state_38942__$1;
(statearr_38976_39031[(2)] = false);

(statearr_38976_39031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (12))){
var inst_38940 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38942__$1,inst_38940);
} else {
if((state_val_38943 === (2))){
var inst_38844 = (state_38942[(8)]);
var inst_38849 = inst_38844.cljs$lang$protocol_mask$partition0$;
var inst_38850 = (inst_38849 & (64));
var inst_38851 = inst_38844.cljs$core$ISeq$;
var inst_38852 = (cljs.core.PROTOCOL_SENTINEL === inst_38851);
var inst_38853 = (inst_38850) || (inst_38852);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38853)){
var statearr_38977_39032 = state_38942__$1;
(statearr_38977_39032[(1)] = (5));

} else {
var statearr_38978_39033 = state_38942__$1;
(statearr_38978_39033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (23))){
var inst_38901 = (state_38942[(14)]);
var inst_38907 = (inst_38901 == null);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38907)){
var statearr_38979_39034 = state_38942__$1;
(statearr_38979_39034[(1)] = (26));

} else {
var statearr_38980_39035 = state_38942__$1;
(statearr_38980_39035[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (35))){
var inst_38927 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
if(cljs.core.truth_(inst_38927)){
var statearr_38981_39036 = state_38942__$1;
(statearr_38981_39036[(1)] = (36));

} else {
var statearr_38982_39037 = state_38942__$1;
(statearr_38982_39037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (19))){
var inst_38869 = (state_38942[(7)]);
var inst_38889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38869);
var state_38942__$1 = state_38942;
var statearr_38983_39038 = state_38942__$1;
(statearr_38983_39038[(2)] = inst_38889);

(statearr_38983_39038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (11))){
var inst_38869 = (state_38942[(7)]);
var inst_38873 = (inst_38869 == null);
var inst_38874 = cljs.core.not.call(null,inst_38873);
var state_38942__$1 = state_38942;
if(inst_38874){
var statearr_38984_39039 = state_38942__$1;
(statearr_38984_39039[(1)] = (13));

} else {
var statearr_38985_39040 = state_38942__$1;
(statearr_38985_39040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (9))){
var inst_38844 = (state_38942[(8)]);
var state_38942__$1 = state_38942;
var statearr_38986_39041 = state_38942__$1;
(statearr_38986_39041[(2)] = inst_38844);

(statearr_38986_39041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (5))){
var state_38942__$1 = state_38942;
var statearr_38987_39042 = state_38942__$1;
(statearr_38987_39042[(2)] = true);

(statearr_38987_39042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (14))){
var state_38942__$1 = state_38942;
var statearr_38988_39043 = state_38942__$1;
(statearr_38988_39043[(2)] = false);

(statearr_38988_39043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (26))){
var inst_38902 = (state_38942[(11)]);
var inst_38909 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38902);
var state_38942__$1 = state_38942;
var statearr_38989_39044 = state_38942__$1;
(statearr_38989_39044[(2)] = inst_38909);

(statearr_38989_39044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (16))){
var state_38942__$1 = state_38942;
var statearr_38990_39045 = state_38942__$1;
(statearr_38990_39045[(2)] = true);

(statearr_38990_39045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (38))){
var inst_38932 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38991_39046 = state_38942__$1;
(statearr_38991_39046[(2)] = inst_38932);

(statearr_38991_39046[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (30))){
var inst_38894 = (state_38942[(13)]);
var inst_38893 = (state_38942[(10)]);
var inst_38902 = (state_38942[(11)]);
var inst_38919 = cljs.core.empty_QMARK_.call(null,inst_38893);
var inst_38920 = inst_38894.call(null,inst_38902);
var inst_38921 = cljs.core.not.call(null,inst_38920);
var inst_38922 = (inst_38919) && (inst_38921);
var state_38942__$1 = state_38942;
var statearr_38992_39047 = state_38942__$1;
(statearr_38992_39047[(2)] = inst_38922);

(statearr_38992_39047[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (10))){
var inst_38844 = (state_38942[(8)]);
var inst_38865 = (state_38942[(2)]);
var inst_38866 = cljs.core.get.call(null,inst_38865,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38867 = cljs.core.get.call(null,inst_38865,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38868 = cljs.core.get.call(null,inst_38865,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38869 = inst_38844;
var state_38942__$1 = (function (){var statearr_38993 = state_38942;
(statearr_38993[(16)] = inst_38868);

(statearr_38993[(17)] = inst_38866);

(statearr_38993[(18)] = inst_38867);

(statearr_38993[(7)] = inst_38869);

return statearr_38993;
})();
var statearr_38994_39048 = state_38942__$1;
(statearr_38994_39048[(2)] = null);

(statearr_38994_39048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (18))){
var inst_38884 = (state_38942[(2)]);
var state_38942__$1 = state_38942;
var statearr_38995_39049 = state_38942__$1;
(statearr_38995_39049[(2)] = inst_38884);

(statearr_38995_39049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (37))){
var state_38942__$1 = state_38942;
var statearr_38996_39050 = state_38942__$1;
(statearr_38996_39050[(2)] = null);

(statearr_38996_39050[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38943 === (8))){
var inst_38844 = (state_38942[(8)]);
var inst_38862 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38844);
var state_38942__$1 = state_38942;
var statearr_38997_39051 = state_38942__$1;
(statearr_38997_39051[(2)] = inst_38862);

(statearr_38997_39051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37109__auto__,c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37110__auto__ = null;
var cljs$core$async$mix_$_state_machine__37110__auto____0 = (function (){
var statearr_39001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39001[(0)] = cljs$core$async$mix_$_state_machine__37110__auto__);

(statearr_39001[(1)] = (1));

return statearr_39001;
});
var cljs$core$async$mix_$_state_machine__37110__auto____1 = (function (state_38942){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_38942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39002){if((e39002 instanceof Object)){
var ex__37113__auto__ = e39002;
var statearr_39003_39052 = state_38942;
(statearr_39003_39052[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39053 = state_38942;
state_38942 = G__39053;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37110__auto__ = function(state_38942){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37110__auto____1.call(this,state_38942);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37110__auto____0;
cljs$core$async$mix_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37110__auto____1;
return cljs$core$async$mix_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37225__auto__ = (function (){var statearr_39004 = f__37224__auto__.call(null);
(statearr_39004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39005);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__10937__auto__ = (((p == null))?null:p);
var m__10938__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10938__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__10937__auto__ = (((p == null))?null:p);
var m__10938__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,p,v,ch);
} else {
var m__10938__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39054 = [];
var len__11440__auto___39057 = arguments.length;
var i__11441__auto___39058 = (0);
while(true){
if((i__11441__auto___39058 < len__11440__auto___39057)){
args39054.push((arguments[i__11441__auto___39058]));

var G__39059 = (i__11441__auto___39058 + (1));
i__11441__auto___39058 = G__39059;
continue;
} else {
}
break;
}

var G__39056 = args39054.length;
switch (G__39056) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39054.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10937__auto__ = (((p == null))?null:p);
var m__10938__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,p);
} else {
var m__10938__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__10937__auto__ = (((p == null))?null:p);
var m__10938__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,p,v);
} else {
var m__10938__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39062 = [];
var len__11440__auto___39187 = arguments.length;
var i__11441__auto___39188 = (0);
while(true){
if((i__11441__auto___39188 < len__11440__auto___39187)){
args39062.push((arguments[i__11441__auto___39188]));

var G__39189 = (i__11441__auto___39188 + (1));
i__11441__auto___39188 = G__39189;
continue;
} else {
}
break;
}

var G__39064 = args39062.length;
switch (G__39064) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39062.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10219__auto__,mults){
return (function (p1__39061_SHARP_){
if(cljs.core.truth_(p1__39061_SHARP_.call(null,topic))){
return p1__39061_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10219__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39066 = meta39066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39067,meta39066__$1){
var self__ = this;
var _39067__$1 = this;
return (new cljs.core.async.t_cljs$core$async39065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39066__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39067){
var self__ = this;
var _39067__$1 = this;
return self__.meta39066;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39066","meta39066",-1302294523,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39065";

cljs.core.async.t_cljs$core$async39065.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async39065");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39065 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39066){
return (new cljs.core.async.t_cljs$core$async39065(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39066));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37223__auto___39191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39191,mults,ensure_mult,p){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39191,mults,ensure_mult,p){
return (function (state_39139){
var state_val_39140 = (state_39139[(1)]);
if((state_val_39140 === (7))){
var inst_39135 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39141_39192 = state_39139__$1;
(statearr_39141_39192[(2)] = inst_39135);

(statearr_39141_39192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (20))){
var state_39139__$1 = state_39139;
var statearr_39142_39193 = state_39139__$1;
(statearr_39142_39193[(2)] = null);

(statearr_39142_39193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (1))){
var state_39139__$1 = state_39139;
var statearr_39143_39194 = state_39139__$1;
(statearr_39143_39194[(2)] = null);

(statearr_39143_39194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (24))){
var inst_39118 = (state_39139[(7)]);
var inst_39127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39118);
var state_39139__$1 = state_39139;
var statearr_39144_39195 = state_39139__$1;
(statearr_39144_39195[(2)] = inst_39127);

(statearr_39144_39195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (4))){
var inst_39070 = (state_39139[(8)]);
var inst_39070__$1 = (state_39139[(2)]);
var inst_39071 = (inst_39070__$1 == null);
var state_39139__$1 = (function (){var statearr_39145 = state_39139;
(statearr_39145[(8)] = inst_39070__$1);

return statearr_39145;
})();
if(cljs.core.truth_(inst_39071)){
var statearr_39146_39196 = state_39139__$1;
(statearr_39146_39196[(1)] = (5));

} else {
var statearr_39147_39197 = state_39139__$1;
(statearr_39147_39197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (15))){
var inst_39112 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39148_39198 = state_39139__$1;
(statearr_39148_39198[(2)] = inst_39112);

(statearr_39148_39198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (21))){
var inst_39132 = (state_39139[(2)]);
var state_39139__$1 = (function (){var statearr_39149 = state_39139;
(statearr_39149[(9)] = inst_39132);

return statearr_39149;
})();
var statearr_39150_39199 = state_39139__$1;
(statearr_39150_39199[(2)] = null);

(statearr_39150_39199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (13))){
var inst_39094 = (state_39139[(10)]);
var inst_39096 = cljs.core.chunked_seq_QMARK_.call(null,inst_39094);
var state_39139__$1 = state_39139;
if(inst_39096){
var statearr_39151_39200 = state_39139__$1;
(statearr_39151_39200[(1)] = (16));

} else {
var statearr_39152_39201 = state_39139__$1;
(statearr_39152_39201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (22))){
var inst_39124 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
if(cljs.core.truth_(inst_39124)){
var statearr_39153_39202 = state_39139__$1;
(statearr_39153_39202[(1)] = (23));

} else {
var statearr_39154_39203 = state_39139__$1;
(statearr_39154_39203[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (6))){
var inst_39120 = (state_39139[(11)]);
var inst_39118 = (state_39139[(7)]);
var inst_39070 = (state_39139[(8)]);
var inst_39118__$1 = topic_fn.call(null,inst_39070);
var inst_39119 = cljs.core.deref.call(null,mults);
var inst_39120__$1 = cljs.core.get.call(null,inst_39119,inst_39118__$1);
var state_39139__$1 = (function (){var statearr_39155 = state_39139;
(statearr_39155[(11)] = inst_39120__$1);

(statearr_39155[(7)] = inst_39118__$1);

return statearr_39155;
})();
if(cljs.core.truth_(inst_39120__$1)){
var statearr_39156_39204 = state_39139__$1;
(statearr_39156_39204[(1)] = (19));

} else {
var statearr_39157_39205 = state_39139__$1;
(statearr_39157_39205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (25))){
var inst_39129 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39158_39206 = state_39139__$1;
(statearr_39158_39206[(2)] = inst_39129);

(statearr_39158_39206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (17))){
var inst_39094 = (state_39139[(10)]);
var inst_39103 = cljs.core.first.call(null,inst_39094);
var inst_39104 = cljs.core.async.muxch_STAR_.call(null,inst_39103);
var inst_39105 = cljs.core.async.close_BANG_.call(null,inst_39104);
var inst_39106 = cljs.core.next.call(null,inst_39094);
var inst_39080 = inst_39106;
var inst_39081 = null;
var inst_39082 = (0);
var inst_39083 = (0);
var state_39139__$1 = (function (){var statearr_39159 = state_39139;
(statearr_39159[(12)] = inst_39105);

(statearr_39159[(13)] = inst_39082);

(statearr_39159[(14)] = inst_39080);

(statearr_39159[(15)] = inst_39081);

(statearr_39159[(16)] = inst_39083);

return statearr_39159;
})();
var statearr_39160_39207 = state_39139__$1;
(statearr_39160_39207[(2)] = null);

(statearr_39160_39207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (3))){
var inst_39137 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39139__$1,inst_39137);
} else {
if((state_val_39140 === (12))){
var inst_39114 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39161_39208 = state_39139__$1;
(statearr_39161_39208[(2)] = inst_39114);

(statearr_39161_39208[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (2))){
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39139__$1,(4),ch);
} else {
if((state_val_39140 === (23))){
var state_39139__$1 = state_39139;
var statearr_39162_39209 = state_39139__$1;
(statearr_39162_39209[(2)] = null);

(statearr_39162_39209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (19))){
var inst_39120 = (state_39139[(11)]);
var inst_39070 = (state_39139[(8)]);
var inst_39122 = cljs.core.async.muxch_STAR_.call(null,inst_39120);
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39139__$1,(22),inst_39122,inst_39070);
} else {
if((state_val_39140 === (11))){
var inst_39094 = (state_39139[(10)]);
var inst_39080 = (state_39139[(14)]);
var inst_39094__$1 = cljs.core.seq.call(null,inst_39080);
var state_39139__$1 = (function (){var statearr_39163 = state_39139;
(statearr_39163[(10)] = inst_39094__$1);

return statearr_39163;
})();
if(inst_39094__$1){
var statearr_39164_39210 = state_39139__$1;
(statearr_39164_39210[(1)] = (13));

} else {
var statearr_39165_39211 = state_39139__$1;
(statearr_39165_39211[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (9))){
var inst_39116 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39166_39212 = state_39139__$1;
(statearr_39166_39212[(2)] = inst_39116);

(statearr_39166_39212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (5))){
var inst_39077 = cljs.core.deref.call(null,mults);
var inst_39078 = cljs.core.vals.call(null,inst_39077);
var inst_39079 = cljs.core.seq.call(null,inst_39078);
var inst_39080 = inst_39079;
var inst_39081 = null;
var inst_39082 = (0);
var inst_39083 = (0);
var state_39139__$1 = (function (){var statearr_39167 = state_39139;
(statearr_39167[(13)] = inst_39082);

(statearr_39167[(14)] = inst_39080);

(statearr_39167[(15)] = inst_39081);

(statearr_39167[(16)] = inst_39083);

return statearr_39167;
})();
var statearr_39168_39213 = state_39139__$1;
(statearr_39168_39213[(2)] = null);

(statearr_39168_39213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (14))){
var state_39139__$1 = state_39139;
var statearr_39172_39214 = state_39139__$1;
(statearr_39172_39214[(2)] = null);

(statearr_39172_39214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (16))){
var inst_39094 = (state_39139[(10)]);
var inst_39098 = cljs.core.chunk_first.call(null,inst_39094);
var inst_39099 = cljs.core.chunk_rest.call(null,inst_39094);
var inst_39100 = cljs.core.count.call(null,inst_39098);
var inst_39080 = inst_39099;
var inst_39081 = inst_39098;
var inst_39082 = inst_39100;
var inst_39083 = (0);
var state_39139__$1 = (function (){var statearr_39173 = state_39139;
(statearr_39173[(13)] = inst_39082);

(statearr_39173[(14)] = inst_39080);

(statearr_39173[(15)] = inst_39081);

(statearr_39173[(16)] = inst_39083);

return statearr_39173;
})();
var statearr_39174_39215 = state_39139__$1;
(statearr_39174_39215[(2)] = null);

(statearr_39174_39215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (10))){
var inst_39082 = (state_39139[(13)]);
var inst_39080 = (state_39139[(14)]);
var inst_39081 = (state_39139[(15)]);
var inst_39083 = (state_39139[(16)]);
var inst_39088 = cljs.core._nth.call(null,inst_39081,inst_39083);
var inst_39089 = cljs.core.async.muxch_STAR_.call(null,inst_39088);
var inst_39090 = cljs.core.async.close_BANG_.call(null,inst_39089);
var inst_39091 = (inst_39083 + (1));
var tmp39169 = inst_39082;
var tmp39170 = inst_39080;
var tmp39171 = inst_39081;
var inst_39080__$1 = tmp39170;
var inst_39081__$1 = tmp39171;
var inst_39082__$1 = tmp39169;
var inst_39083__$1 = inst_39091;
var state_39139__$1 = (function (){var statearr_39175 = state_39139;
(statearr_39175[(17)] = inst_39090);

(statearr_39175[(13)] = inst_39082__$1);

(statearr_39175[(14)] = inst_39080__$1);

(statearr_39175[(15)] = inst_39081__$1);

(statearr_39175[(16)] = inst_39083__$1);

return statearr_39175;
})();
var statearr_39176_39216 = state_39139__$1;
(statearr_39176_39216[(2)] = null);

(statearr_39176_39216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (18))){
var inst_39109 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39177_39217 = state_39139__$1;
(statearr_39177_39217[(2)] = inst_39109);

(statearr_39177_39217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (8))){
var inst_39082 = (state_39139[(13)]);
var inst_39083 = (state_39139[(16)]);
var inst_39085 = (inst_39083 < inst_39082);
var inst_39086 = inst_39085;
var state_39139__$1 = state_39139;
if(cljs.core.truth_(inst_39086)){
var statearr_39178_39218 = state_39139__$1;
(statearr_39178_39218[(1)] = (10));

} else {
var statearr_39179_39219 = state_39139__$1;
(statearr_39179_39219[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39191,mults,ensure_mult,p))
;
return ((function (switch__37109__auto__,c__37223__auto___39191,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39183[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39183[(1)] = (1));

return statearr_39183;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39139){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39184){if((e39184 instanceof Object)){
var ex__37113__auto__ = e39184;
var statearr_39185_39220 = state_39139;
(statearr_39185_39220[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39221 = state_39139;
state_39139 = G__39221;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39191,mults,ensure_mult,p))
})();
var state__37225__auto__ = (function (){var statearr_39186 = f__37224__auto__.call(null);
(statearr_39186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39191);

return statearr_39186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39191,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39222 = [];
var len__11440__auto___39225 = arguments.length;
var i__11441__auto___39226 = (0);
while(true){
if((i__11441__auto___39226 < len__11440__auto___39225)){
args39222.push((arguments[i__11441__auto___39226]));

var G__39227 = (i__11441__auto___39226 + (1));
i__11441__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var G__39224 = args39222.length;
switch (G__39224) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39222.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39229 = [];
var len__11440__auto___39232 = arguments.length;
var i__11441__auto___39233 = (0);
while(true){
if((i__11441__auto___39233 < len__11440__auto___39232)){
args39229.push((arguments[i__11441__auto___39233]));

var G__39234 = (i__11441__auto___39233 + (1));
i__11441__auto___39233 = G__39234;
continue;
} else {
}
break;
}

var G__39231 = args39229.length;
switch (G__39231) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39229.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39236 = [];
var len__11440__auto___39307 = arguments.length;
var i__11441__auto___39308 = (0);
while(true){
if((i__11441__auto___39308 < len__11440__auto___39307)){
args39236.push((arguments[i__11441__auto___39308]));

var G__39309 = (i__11441__auto___39308 + (1));
i__11441__auto___39308 = G__39309;
continue;
} else {
}
break;
}

var G__39238 = args39236.length;
switch (G__39238) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39236.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37223__auto___39311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39277){
var state_val_39278 = (state_39277[(1)]);
if((state_val_39278 === (7))){
var state_39277__$1 = state_39277;
var statearr_39279_39312 = state_39277__$1;
(statearr_39279_39312[(2)] = null);

(statearr_39279_39312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (1))){
var state_39277__$1 = state_39277;
var statearr_39280_39313 = state_39277__$1;
(statearr_39280_39313[(2)] = null);

(statearr_39280_39313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (4))){
var inst_39241 = (state_39277[(7)]);
var inst_39243 = (inst_39241 < cnt);
var state_39277__$1 = state_39277;
if(cljs.core.truth_(inst_39243)){
var statearr_39281_39314 = state_39277__$1;
(statearr_39281_39314[(1)] = (6));

} else {
var statearr_39282_39315 = state_39277__$1;
(statearr_39282_39315[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (15))){
var inst_39273 = (state_39277[(2)]);
var state_39277__$1 = state_39277;
var statearr_39283_39316 = state_39277__$1;
(statearr_39283_39316[(2)] = inst_39273);

(statearr_39283_39316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (13))){
var inst_39266 = cljs.core.async.close_BANG_.call(null,out);
var state_39277__$1 = state_39277;
var statearr_39284_39317 = state_39277__$1;
(statearr_39284_39317[(2)] = inst_39266);

(statearr_39284_39317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (6))){
var state_39277__$1 = state_39277;
var statearr_39285_39318 = state_39277__$1;
(statearr_39285_39318[(2)] = null);

(statearr_39285_39318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (3))){
var inst_39275 = (state_39277[(2)]);
var state_39277__$1 = state_39277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39277__$1,inst_39275);
} else {
if((state_val_39278 === (12))){
var inst_39263 = (state_39277[(8)]);
var inst_39263__$1 = (state_39277[(2)]);
var inst_39264 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39263__$1);
var state_39277__$1 = (function (){var statearr_39286 = state_39277;
(statearr_39286[(8)] = inst_39263__$1);

return statearr_39286;
})();
if(cljs.core.truth_(inst_39264)){
var statearr_39287_39319 = state_39277__$1;
(statearr_39287_39319[(1)] = (13));

} else {
var statearr_39288_39320 = state_39277__$1;
(statearr_39288_39320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (2))){
var inst_39240 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39241 = (0);
var state_39277__$1 = (function (){var statearr_39289 = state_39277;
(statearr_39289[(9)] = inst_39240);

(statearr_39289[(7)] = inst_39241);

return statearr_39289;
})();
var statearr_39290_39321 = state_39277__$1;
(statearr_39290_39321[(2)] = null);

(statearr_39290_39321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (11))){
var inst_39241 = (state_39277[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39277,(10),Object,null,(9));
var inst_39250 = chs__$1.call(null,inst_39241);
var inst_39251 = done.call(null,inst_39241);
var inst_39252 = cljs.core.async.take_BANG_.call(null,inst_39250,inst_39251);
var state_39277__$1 = state_39277;
var statearr_39291_39322 = state_39277__$1;
(statearr_39291_39322[(2)] = inst_39252);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (9))){
var inst_39241 = (state_39277[(7)]);
var inst_39254 = (state_39277[(2)]);
var inst_39255 = (inst_39241 + (1));
var inst_39241__$1 = inst_39255;
var state_39277__$1 = (function (){var statearr_39292 = state_39277;
(statearr_39292[(10)] = inst_39254);

(statearr_39292[(7)] = inst_39241__$1);

return statearr_39292;
})();
var statearr_39293_39323 = state_39277__$1;
(statearr_39293_39323[(2)] = null);

(statearr_39293_39323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (5))){
var inst_39261 = (state_39277[(2)]);
var state_39277__$1 = (function (){var statearr_39294 = state_39277;
(statearr_39294[(11)] = inst_39261);

return statearr_39294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39277__$1,(12),dchan);
} else {
if((state_val_39278 === (14))){
var inst_39263 = (state_39277[(8)]);
var inst_39268 = cljs.core.apply.call(null,f,inst_39263);
var state_39277__$1 = state_39277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39277__$1,(16),out,inst_39268);
} else {
if((state_val_39278 === (16))){
var inst_39270 = (state_39277[(2)]);
var state_39277__$1 = (function (){var statearr_39295 = state_39277;
(statearr_39295[(12)] = inst_39270);

return statearr_39295;
})();
var statearr_39296_39324 = state_39277__$1;
(statearr_39296_39324[(2)] = null);

(statearr_39296_39324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (10))){
var inst_39245 = (state_39277[(2)]);
var inst_39246 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39277__$1 = (function (){var statearr_39297 = state_39277;
(statearr_39297[(13)] = inst_39245);

return statearr_39297;
})();
var statearr_39298_39325 = state_39277__$1;
(statearr_39298_39325[(2)] = inst_39246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39278 === (8))){
var inst_39259 = (state_39277[(2)]);
var state_39277__$1 = state_39277;
var statearr_39299_39326 = state_39277__$1;
(statearr_39299_39326[(2)] = inst_39259);

(statearr_39299_39326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37109__auto__,c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39303[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39303[(1)] = (1));

return statearr_39303;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39277){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39304){if((e39304 instanceof Object)){
var ex__37113__auto__ = e39304;
var statearr_39305_39327 = state_39277;
(statearr_39305_39327[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39328 = state_39277;
state_39277 = G__39328;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37225__auto__ = (function (){var statearr_39306 = f__37224__auto__.call(null);
(statearr_39306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39311);

return statearr_39306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39311,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39330 = [];
var len__11440__auto___39388 = arguments.length;
var i__11441__auto___39389 = (0);
while(true){
if((i__11441__auto___39389 < len__11440__auto___39388)){
args39330.push((arguments[i__11441__auto___39389]));

var G__39390 = (i__11441__auto___39389 + (1));
i__11441__auto___39389 = G__39390;
continue;
} else {
}
break;
}

var G__39332 = args39330.length;
switch (G__39332) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39330.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___39392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39392,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39392,out){
return (function (state_39364){
var state_val_39365 = (state_39364[(1)]);
if((state_val_39365 === (7))){
var inst_39343 = (state_39364[(7)]);
var inst_39344 = (state_39364[(8)]);
var inst_39343__$1 = (state_39364[(2)]);
var inst_39344__$1 = cljs.core.nth.call(null,inst_39343__$1,(0),null);
var inst_39345 = cljs.core.nth.call(null,inst_39343__$1,(1),null);
var inst_39346 = (inst_39344__$1 == null);
var state_39364__$1 = (function (){var statearr_39366 = state_39364;
(statearr_39366[(9)] = inst_39345);

(statearr_39366[(7)] = inst_39343__$1);

(statearr_39366[(8)] = inst_39344__$1);

return statearr_39366;
})();
if(cljs.core.truth_(inst_39346)){
var statearr_39367_39393 = state_39364__$1;
(statearr_39367_39393[(1)] = (8));

} else {
var statearr_39368_39394 = state_39364__$1;
(statearr_39368_39394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (1))){
var inst_39333 = cljs.core.vec.call(null,chs);
var inst_39334 = inst_39333;
var state_39364__$1 = (function (){var statearr_39369 = state_39364;
(statearr_39369[(10)] = inst_39334);

return statearr_39369;
})();
var statearr_39370_39395 = state_39364__$1;
(statearr_39370_39395[(2)] = null);

(statearr_39370_39395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (4))){
var inst_39334 = (state_39364[(10)]);
var state_39364__$1 = state_39364;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39364__$1,(7),inst_39334);
} else {
if((state_val_39365 === (6))){
var inst_39360 = (state_39364[(2)]);
var state_39364__$1 = state_39364;
var statearr_39371_39396 = state_39364__$1;
(statearr_39371_39396[(2)] = inst_39360);

(statearr_39371_39396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (3))){
var inst_39362 = (state_39364[(2)]);
var state_39364__$1 = state_39364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39364__$1,inst_39362);
} else {
if((state_val_39365 === (2))){
var inst_39334 = (state_39364[(10)]);
var inst_39336 = cljs.core.count.call(null,inst_39334);
var inst_39337 = (inst_39336 > (0));
var state_39364__$1 = state_39364;
if(cljs.core.truth_(inst_39337)){
var statearr_39373_39397 = state_39364__$1;
(statearr_39373_39397[(1)] = (4));

} else {
var statearr_39374_39398 = state_39364__$1;
(statearr_39374_39398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (11))){
var inst_39334 = (state_39364[(10)]);
var inst_39353 = (state_39364[(2)]);
var tmp39372 = inst_39334;
var inst_39334__$1 = tmp39372;
var state_39364__$1 = (function (){var statearr_39375 = state_39364;
(statearr_39375[(11)] = inst_39353);

(statearr_39375[(10)] = inst_39334__$1);

return statearr_39375;
})();
var statearr_39376_39399 = state_39364__$1;
(statearr_39376_39399[(2)] = null);

(statearr_39376_39399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (9))){
var inst_39344 = (state_39364[(8)]);
var state_39364__$1 = state_39364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39364__$1,(11),out,inst_39344);
} else {
if((state_val_39365 === (5))){
var inst_39358 = cljs.core.async.close_BANG_.call(null,out);
var state_39364__$1 = state_39364;
var statearr_39377_39400 = state_39364__$1;
(statearr_39377_39400[(2)] = inst_39358);

(statearr_39377_39400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (10))){
var inst_39356 = (state_39364[(2)]);
var state_39364__$1 = state_39364;
var statearr_39378_39401 = state_39364__$1;
(statearr_39378_39401[(2)] = inst_39356);

(statearr_39378_39401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39365 === (8))){
var inst_39345 = (state_39364[(9)]);
var inst_39343 = (state_39364[(7)]);
var inst_39334 = (state_39364[(10)]);
var inst_39344 = (state_39364[(8)]);
var inst_39348 = (function (){var cs = inst_39334;
var vec__39339 = inst_39343;
var v = inst_39344;
var c = inst_39345;
return ((function (cs,vec__39339,v,c,inst_39345,inst_39343,inst_39334,inst_39344,state_val_39365,c__37223__auto___39392,out){
return (function (p1__39329_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39329_SHARP_);
});
;})(cs,vec__39339,v,c,inst_39345,inst_39343,inst_39334,inst_39344,state_val_39365,c__37223__auto___39392,out))
})();
var inst_39349 = cljs.core.filterv.call(null,inst_39348,inst_39334);
var inst_39334__$1 = inst_39349;
var state_39364__$1 = (function (){var statearr_39379 = state_39364;
(statearr_39379[(10)] = inst_39334__$1);

return statearr_39379;
})();
var statearr_39380_39402 = state_39364__$1;
(statearr_39380_39402[(2)] = null);

(statearr_39380_39402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39392,out))
;
return ((function (switch__37109__auto__,c__37223__auto___39392,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39384[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39384[(1)] = (1));

return statearr_39384;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39364){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39385){if((e39385 instanceof Object)){
var ex__37113__auto__ = e39385;
var statearr_39386_39403 = state_39364;
(statearr_39386_39403[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39404 = state_39364;
state_39364 = G__39404;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39392,out))
})();
var state__37225__auto__ = (function (){var statearr_39387 = f__37224__auto__.call(null);
(statearr_39387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39392);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39392,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39405 = [];
var len__11440__auto___39454 = arguments.length;
var i__11441__auto___39455 = (0);
while(true){
if((i__11441__auto___39455 < len__11440__auto___39454)){
args39405.push((arguments[i__11441__auto___39455]));

var G__39456 = (i__11441__auto___39455 + (1));
i__11441__auto___39455 = G__39456;
continue;
} else {
}
break;
}

var G__39407 = args39405.length;
switch (G__39407) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39405.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___39458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39458,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39458,out){
return (function (state_39431){
var state_val_39432 = (state_39431[(1)]);
if((state_val_39432 === (7))){
var inst_39413 = (state_39431[(7)]);
var inst_39413__$1 = (state_39431[(2)]);
var inst_39414 = (inst_39413__$1 == null);
var inst_39415 = cljs.core.not.call(null,inst_39414);
var state_39431__$1 = (function (){var statearr_39433 = state_39431;
(statearr_39433[(7)] = inst_39413__$1);

return statearr_39433;
})();
if(inst_39415){
var statearr_39434_39459 = state_39431__$1;
(statearr_39434_39459[(1)] = (8));

} else {
var statearr_39435_39460 = state_39431__$1;
(statearr_39435_39460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (1))){
var inst_39408 = (0);
var state_39431__$1 = (function (){var statearr_39436 = state_39431;
(statearr_39436[(8)] = inst_39408);

return statearr_39436;
})();
var statearr_39437_39461 = state_39431__$1;
(statearr_39437_39461[(2)] = null);

(statearr_39437_39461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (4))){
var state_39431__$1 = state_39431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39431__$1,(7),ch);
} else {
if((state_val_39432 === (6))){
var inst_39426 = (state_39431[(2)]);
var state_39431__$1 = state_39431;
var statearr_39438_39462 = state_39431__$1;
(statearr_39438_39462[(2)] = inst_39426);

(statearr_39438_39462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (3))){
var inst_39428 = (state_39431[(2)]);
var inst_39429 = cljs.core.async.close_BANG_.call(null,out);
var state_39431__$1 = (function (){var statearr_39439 = state_39431;
(statearr_39439[(9)] = inst_39428);

return statearr_39439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39431__$1,inst_39429);
} else {
if((state_val_39432 === (2))){
var inst_39408 = (state_39431[(8)]);
var inst_39410 = (inst_39408 < n);
var state_39431__$1 = state_39431;
if(cljs.core.truth_(inst_39410)){
var statearr_39440_39463 = state_39431__$1;
(statearr_39440_39463[(1)] = (4));

} else {
var statearr_39441_39464 = state_39431__$1;
(statearr_39441_39464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (11))){
var inst_39408 = (state_39431[(8)]);
var inst_39418 = (state_39431[(2)]);
var inst_39419 = (inst_39408 + (1));
var inst_39408__$1 = inst_39419;
var state_39431__$1 = (function (){var statearr_39442 = state_39431;
(statearr_39442[(8)] = inst_39408__$1);

(statearr_39442[(10)] = inst_39418);

return statearr_39442;
})();
var statearr_39443_39465 = state_39431__$1;
(statearr_39443_39465[(2)] = null);

(statearr_39443_39465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (9))){
var state_39431__$1 = state_39431;
var statearr_39444_39466 = state_39431__$1;
(statearr_39444_39466[(2)] = null);

(statearr_39444_39466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (5))){
var state_39431__$1 = state_39431;
var statearr_39445_39467 = state_39431__$1;
(statearr_39445_39467[(2)] = null);

(statearr_39445_39467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (10))){
var inst_39423 = (state_39431[(2)]);
var state_39431__$1 = state_39431;
var statearr_39446_39468 = state_39431__$1;
(statearr_39446_39468[(2)] = inst_39423);

(statearr_39446_39468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39432 === (8))){
var inst_39413 = (state_39431[(7)]);
var state_39431__$1 = state_39431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39431__$1,(11),out,inst_39413);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39458,out))
;
return ((function (switch__37109__auto__,c__37223__auto___39458,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39450[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39450[(1)] = (1));

return statearr_39450;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39431){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39451){if((e39451 instanceof Object)){
var ex__37113__auto__ = e39451;
var statearr_39452_39469 = state_39431;
(statearr_39452_39469[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39470 = state_39431;
state_39431 = G__39470;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39431);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39458,out))
})();
var state__37225__auto__ = (function (){var statearr_39453 = f__37224__auto__.call(null);
(statearr_39453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39458);

return statearr_39453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39458,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39478 = (function (f,ch,meta39479){
this.f = f;
this.ch = ch;
this.meta39479 = meta39479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39480,meta39479__$1){
var self__ = this;
var _39480__$1 = this;
return (new cljs.core.async.t_cljs$core$async39478(self__.f,self__.ch,meta39479__$1));
});

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39480){
var self__ = this;
var _39480__$1 = this;
return self__.meta39479;
});

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39481 = (function (f,ch,meta39479,_,fn1,meta39482){
this.f = f;
this.ch = ch;
this.meta39479 = meta39479;
this._ = _;
this.fn1 = fn1;
this.meta39482 = meta39482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39483,meta39482__$1){
var self__ = this;
var _39483__$1 = this;
return (new cljs.core.async.t_cljs$core$async39481(self__.f,self__.ch,self__.meta39479,self__._,self__.fn1,meta39482__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39483){
var self__ = this;
var _39483__$1 = this;
return self__.meta39482;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39471_SHARP_){
return f1.call(null,(((p1__39471_SHARP_ == null))?null:self__.f.call(null,p1__39471_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39479","meta39479",851627920,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39478","cljs.core.async/t_cljs$core$async39478",346465130,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39482","meta39482",-1578038316,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39481";

cljs.core.async.t_cljs$core$async39481.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async39481");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39481 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39481(f__$1,ch__$1,meta39479__$1,___$2,fn1__$1,meta39482){
return (new cljs.core.async.t_cljs$core$async39481(f__$1,ch__$1,meta39479__$1,___$2,fn1__$1,meta39482));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39481(self__.f,self__.ch,self__.meta39479,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10207__auto__ = ret;
if(cljs.core.truth_(and__10207__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__10207__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39479","meta39479",851627920,null)], null);
});

cljs.core.async.t_cljs$core$async39478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39478";

cljs.core.async.t_cljs$core$async39478.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async39478");
});

cljs.core.async.__GT_t_cljs$core$async39478 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39478(f__$1,ch__$1,meta39479){
return (new cljs.core.async.t_cljs$core$async39478(f__$1,ch__$1,meta39479));
});

}

return (new cljs.core.async.t_cljs$core$async39478(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39487 = (function (f,ch,meta39488){
this.f = f;
this.ch = ch;
this.meta39488 = meta39488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39489,meta39488__$1){
var self__ = this;
var _39489__$1 = this;
return (new cljs.core.async.t_cljs$core$async39487(self__.f,self__.ch,meta39488__$1));
});

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39489){
var self__ = this;
var _39489__$1 = this;
return self__.meta39488;
});

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39488","meta39488",1836682593,null)], null);
});

cljs.core.async.t_cljs$core$async39487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39487";

cljs.core.async.t_cljs$core$async39487.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async39487");
});

cljs.core.async.__GT_t_cljs$core$async39487 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39487(f__$1,ch__$1,meta39488){
return (new cljs.core.async.t_cljs$core$async39487(f__$1,ch__$1,meta39488));
});

}

return (new cljs.core.async.t_cljs$core$async39487(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39493 = (function (p,ch,meta39494){
this.p = p;
this.ch = ch;
this.meta39494 = meta39494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39495,meta39494__$1){
var self__ = this;
var _39495__$1 = this;
return (new cljs.core.async.t_cljs$core$async39493(self__.p,self__.ch,meta39494__$1));
});

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39495){
var self__ = this;
var _39495__$1 = this;
return self__.meta39494;
});

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39494","meta39494",1215154048,null)], null);
});

cljs.core.async.t_cljs$core$async39493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39493";

cljs.core.async.t_cljs$core$async39493.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"cljs.core.async/t_cljs$core$async39493");
});

cljs.core.async.__GT_t_cljs$core$async39493 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39493(p__$1,ch__$1,meta39494){
return (new cljs.core.async.t_cljs$core$async39493(p__$1,ch__$1,meta39494));
});

}

return (new cljs.core.async.t_cljs$core$async39493(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39496 = [];
var len__11440__auto___39540 = arguments.length;
var i__11441__auto___39541 = (0);
while(true){
if((i__11441__auto___39541 < len__11440__auto___39540)){
args39496.push((arguments[i__11441__auto___39541]));

var G__39542 = (i__11441__auto___39541 + (1));
i__11441__auto___39541 = G__39542;
continue;
} else {
}
break;
}

var G__39498 = args39496.length;
switch (G__39498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39496.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___39544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39544,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39544,out){
return (function (state_39519){
var state_val_39520 = (state_39519[(1)]);
if((state_val_39520 === (7))){
var inst_39515 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39521_39545 = state_39519__$1;
(statearr_39521_39545[(2)] = inst_39515);

(statearr_39521_39545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (1))){
var state_39519__$1 = state_39519;
var statearr_39522_39546 = state_39519__$1;
(statearr_39522_39546[(2)] = null);

(statearr_39522_39546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (4))){
var inst_39501 = (state_39519[(7)]);
var inst_39501__$1 = (state_39519[(2)]);
var inst_39502 = (inst_39501__$1 == null);
var state_39519__$1 = (function (){var statearr_39523 = state_39519;
(statearr_39523[(7)] = inst_39501__$1);

return statearr_39523;
})();
if(cljs.core.truth_(inst_39502)){
var statearr_39524_39547 = state_39519__$1;
(statearr_39524_39547[(1)] = (5));

} else {
var statearr_39525_39548 = state_39519__$1;
(statearr_39525_39548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (6))){
var inst_39501 = (state_39519[(7)]);
var inst_39506 = p.call(null,inst_39501);
var state_39519__$1 = state_39519;
if(cljs.core.truth_(inst_39506)){
var statearr_39526_39549 = state_39519__$1;
(statearr_39526_39549[(1)] = (8));

} else {
var statearr_39527_39550 = state_39519__$1;
(statearr_39527_39550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (3))){
var inst_39517 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39519__$1,inst_39517);
} else {
if((state_val_39520 === (2))){
var state_39519__$1 = state_39519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39519__$1,(4),ch);
} else {
if((state_val_39520 === (11))){
var inst_39509 = (state_39519[(2)]);
var state_39519__$1 = state_39519;
var statearr_39528_39551 = state_39519__$1;
(statearr_39528_39551[(2)] = inst_39509);

(statearr_39528_39551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (9))){
var state_39519__$1 = state_39519;
var statearr_39529_39552 = state_39519__$1;
(statearr_39529_39552[(2)] = null);

(statearr_39529_39552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (5))){
var inst_39504 = cljs.core.async.close_BANG_.call(null,out);
var state_39519__$1 = state_39519;
var statearr_39530_39553 = state_39519__$1;
(statearr_39530_39553[(2)] = inst_39504);

(statearr_39530_39553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (10))){
var inst_39512 = (state_39519[(2)]);
var state_39519__$1 = (function (){var statearr_39531 = state_39519;
(statearr_39531[(8)] = inst_39512);

return statearr_39531;
})();
var statearr_39532_39554 = state_39519__$1;
(statearr_39532_39554[(2)] = null);

(statearr_39532_39554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39520 === (8))){
var inst_39501 = (state_39519[(7)]);
var state_39519__$1 = state_39519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39519__$1,(11),out,inst_39501);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39544,out))
;
return ((function (switch__37109__auto__,c__37223__auto___39544,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39536 = [null,null,null,null,null,null,null,null,null];
(statearr_39536[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39536[(1)] = (1));

return statearr_39536;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39519){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39537){if((e39537 instanceof Object)){
var ex__37113__auto__ = e39537;
var statearr_39538_39555 = state_39519;
(statearr_39538_39555[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39556 = state_39519;
state_39519 = G__39556;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39544,out))
})();
var state__37225__auto__ = (function (){var statearr_39539 = f__37224__auto__.call(null);
(statearr_39539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39544);

return statearr_39539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39544,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39557 = [];
var len__11440__auto___39560 = arguments.length;
var i__11441__auto___39561 = (0);
while(true){
if((i__11441__auto___39561 < len__11440__auto___39560)){
args39557.push((arguments[i__11441__auto___39561]));

var G__39562 = (i__11441__auto___39561 + (1));
i__11441__auto___39561 = G__39562;
continue;
} else {
}
break;
}

var G__39559 = args39557.length;
switch (G__39559) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39557.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_39729){
var state_val_39730 = (state_39729[(1)]);
if((state_val_39730 === (7))){
var inst_39725 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39731_39772 = state_39729__$1;
(statearr_39731_39772[(2)] = inst_39725);

(statearr_39731_39772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (20))){
var inst_39695 = (state_39729[(7)]);
var inst_39706 = (state_39729[(2)]);
var inst_39707 = cljs.core.next.call(null,inst_39695);
var inst_39681 = inst_39707;
var inst_39682 = null;
var inst_39683 = (0);
var inst_39684 = (0);
var state_39729__$1 = (function (){var statearr_39732 = state_39729;
(statearr_39732[(8)] = inst_39706);

(statearr_39732[(9)] = inst_39681);

(statearr_39732[(10)] = inst_39683);

(statearr_39732[(11)] = inst_39682);

(statearr_39732[(12)] = inst_39684);

return statearr_39732;
})();
var statearr_39733_39773 = state_39729__$1;
(statearr_39733_39773[(2)] = null);

(statearr_39733_39773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (1))){
var state_39729__$1 = state_39729;
var statearr_39734_39774 = state_39729__$1;
(statearr_39734_39774[(2)] = null);

(statearr_39734_39774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (4))){
var inst_39670 = (state_39729[(13)]);
var inst_39670__$1 = (state_39729[(2)]);
var inst_39671 = (inst_39670__$1 == null);
var state_39729__$1 = (function (){var statearr_39735 = state_39729;
(statearr_39735[(13)] = inst_39670__$1);

return statearr_39735;
})();
if(cljs.core.truth_(inst_39671)){
var statearr_39736_39775 = state_39729__$1;
(statearr_39736_39775[(1)] = (5));

} else {
var statearr_39737_39776 = state_39729__$1;
(statearr_39737_39776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (15))){
var state_39729__$1 = state_39729;
var statearr_39741_39777 = state_39729__$1;
(statearr_39741_39777[(2)] = null);

(statearr_39741_39777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (21))){
var state_39729__$1 = state_39729;
var statearr_39742_39778 = state_39729__$1;
(statearr_39742_39778[(2)] = null);

(statearr_39742_39778[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (13))){
var inst_39681 = (state_39729[(9)]);
var inst_39683 = (state_39729[(10)]);
var inst_39682 = (state_39729[(11)]);
var inst_39684 = (state_39729[(12)]);
var inst_39691 = (state_39729[(2)]);
var inst_39692 = (inst_39684 + (1));
var tmp39738 = inst_39681;
var tmp39739 = inst_39683;
var tmp39740 = inst_39682;
var inst_39681__$1 = tmp39738;
var inst_39682__$1 = tmp39740;
var inst_39683__$1 = tmp39739;
var inst_39684__$1 = inst_39692;
var state_39729__$1 = (function (){var statearr_39743 = state_39729;
(statearr_39743[(14)] = inst_39691);

(statearr_39743[(9)] = inst_39681__$1);

(statearr_39743[(10)] = inst_39683__$1);

(statearr_39743[(11)] = inst_39682__$1);

(statearr_39743[(12)] = inst_39684__$1);

return statearr_39743;
})();
var statearr_39744_39779 = state_39729__$1;
(statearr_39744_39779[(2)] = null);

(statearr_39744_39779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (22))){
var state_39729__$1 = state_39729;
var statearr_39745_39780 = state_39729__$1;
(statearr_39745_39780[(2)] = null);

(statearr_39745_39780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (6))){
var inst_39670 = (state_39729[(13)]);
var inst_39679 = f.call(null,inst_39670);
var inst_39680 = cljs.core.seq.call(null,inst_39679);
var inst_39681 = inst_39680;
var inst_39682 = null;
var inst_39683 = (0);
var inst_39684 = (0);
var state_39729__$1 = (function (){var statearr_39746 = state_39729;
(statearr_39746[(9)] = inst_39681);

(statearr_39746[(10)] = inst_39683);

(statearr_39746[(11)] = inst_39682);

(statearr_39746[(12)] = inst_39684);

return statearr_39746;
})();
var statearr_39747_39781 = state_39729__$1;
(statearr_39747_39781[(2)] = null);

(statearr_39747_39781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (17))){
var inst_39695 = (state_39729[(7)]);
var inst_39699 = cljs.core.chunk_first.call(null,inst_39695);
var inst_39700 = cljs.core.chunk_rest.call(null,inst_39695);
var inst_39701 = cljs.core.count.call(null,inst_39699);
var inst_39681 = inst_39700;
var inst_39682 = inst_39699;
var inst_39683 = inst_39701;
var inst_39684 = (0);
var state_39729__$1 = (function (){var statearr_39748 = state_39729;
(statearr_39748[(9)] = inst_39681);

(statearr_39748[(10)] = inst_39683);

(statearr_39748[(11)] = inst_39682);

(statearr_39748[(12)] = inst_39684);

return statearr_39748;
})();
var statearr_39749_39782 = state_39729__$1;
(statearr_39749_39782[(2)] = null);

(statearr_39749_39782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (3))){
var inst_39727 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39729__$1,inst_39727);
} else {
if((state_val_39730 === (12))){
var inst_39715 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39750_39783 = state_39729__$1;
(statearr_39750_39783[(2)] = inst_39715);

(statearr_39750_39783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (2))){
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39729__$1,(4),in$);
} else {
if((state_val_39730 === (23))){
var inst_39723 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39751_39784 = state_39729__$1;
(statearr_39751_39784[(2)] = inst_39723);

(statearr_39751_39784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (19))){
var inst_39710 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39752_39785 = state_39729__$1;
(statearr_39752_39785[(2)] = inst_39710);

(statearr_39752_39785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (11))){
var inst_39695 = (state_39729[(7)]);
var inst_39681 = (state_39729[(9)]);
var inst_39695__$1 = cljs.core.seq.call(null,inst_39681);
var state_39729__$1 = (function (){var statearr_39753 = state_39729;
(statearr_39753[(7)] = inst_39695__$1);

return statearr_39753;
})();
if(inst_39695__$1){
var statearr_39754_39786 = state_39729__$1;
(statearr_39754_39786[(1)] = (14));

} else {
var statearr_39755_39787 = state_39729__$1;
(statearr_39755_39787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (9))){
var inst_39717 = (state_39729[(2)]);
var inst_39718 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39729__$1 = (function (){var statearr_39756 = state_39729;
(statearr_39756[(15)] = inst_39717);

return statearr_39756;
})();
if(cljs.core.truth_(inst_39718)){
var statearr_39757_39788 = state_39729__$1;
(statearr_39757_39788[(1)] = (21));

} else {
var statearr_39758_39789 = state_39729__$1;
(statearr_39758_39789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (5))){
var inst_39673 = cljs.core.async.close_BANG_.call(null,out);
var state_39729__$1 = state_39729;
var statearr_39759_39790 = state_39729__$1;
(statearr_39759_39790[(2)] = inst_39673);

(statearr_39759_39790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (14))){
var inst_39695 = (state_39729[(7)]);
var inst_39697 = cljs.core.chunked_seq_QMARK_.call(null,inst_39695);
var state_39729__$1 = state_39729;
if(inst_39697){
var statearr_39760_39791 = state_39729__$1;
(statearr_39760_39791[(1)] = (17));

} else {
var statearr_39761_39792 = state_39729__$1;
(statearr_39761_39792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (16))){
var inst_39713 = (state_39729[(2)]);
var state_39729__$1 = state_39729;
var statearr_39762_39793 = state_39729__$1;
(statearr_39762_39793[(2)] = inst_39713);

(statearr_39762_39793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39730 === (10))){
var inst_39682 = (state_39729[(11)]);
var inst_39684 = (state_39729[(12)]);
var inst_39689 = cljs.core._nth.call(null,inst_39682,inst_39684);
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39729__$1,(13),out,inst_39689);
} else {
if((state_val_39730 === (18))){
var inst_39695 = (state_39729[(7)]);
var inst_39704 = cljs.core.first.call(null,inst_39695);
var state_39729__$1 = state_39729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39729__$1,(20),out,inst_39704);
} else {
if((state_val_39730 === (8))){
var inst_39683 = (state_39729[(10)]);
var inst_39684 = (state_39729[(12)]);
var inst_39686 = (inst_39684 < inst_39683);
var inst_39687 = inst_39686;
var state_39729__$1 = state_39729;
if(cljs.core.truth_(inst_39687)){
var statearr_39763_39794 = state_39729__$1;
(statearr_39763_39794[(1)] = (10));

} else {
var statearr_39764_39795 = state_39729__$1;
(statearr_39764_39795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____0 = (function (){
var statearr_39768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__);

(statearr_39768[(1)] = (1));

return statearr_39768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____1 = (function (state_39729){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39769){if((e39769 instanceof Object)){
var ex__37113__auto__ = e39769;
var statearr_39770_39796 = state_39729;
(statearr_39770_39796[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39797 = state_39729;
state_39729 = G__39797;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__ = function(state_39729){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____1.call(this,state_39729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37110__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_39771 = f__37224__auto__.call(null);
(statearr_39771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_39771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39798 = [];
var len__11440__auto___39801 = arguments.length;
var i__11441__auto___39802 = (0);
while(true){
if((i__11441__auto___39802 < len__11440__auto___39801)){
args39798.push((arguments[i__11441__auto___39802]));

var G__39803 = (i__11441__auto___39802 + (1));
i__11441__auto___39802 = G__39803;
continue;
} else {
}
break;
}

var G__39800 = args39798.length;
switch (G__39800) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39798.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39805 = [];
var len__11440__auto___39808 = arguments.length;
var i__11441__auto___39809 = (0);
while(true){
if((i__11441__auto___39809 < len__11440__auto___39808)){
args39805.push((arguments[i__11441__auto___39809]));

var G__39810 = (i__11441__auto___39809 + (1));
i__11441__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var G__39807 = args39805.length;
switch (G__39807) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39805.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39812 = [];
var len__11440__auto___39863 = arguments.length;
var i__11441__auto___39864 = (0);
while(true){
if((i__11441__auto___39864 < len__11440__auto___39863)){
args39812.push((arguments[i__11441__auto___39864]));

var G__39865 = (i__11441__auto___39864 + (1));
i__11441__auto___39864 = G__39865;
continue;
} else {
}
break;
}

var G__39814 = args39812.length;
switch (G__39814) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39812.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___39867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39867,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39867,out){
return (function (state_39838){
var state_val_39839 = (state_39838[(1)]);
if((state_val_39839 === (7))){
var inst_39833 = (state_39838[(2)]);
var state_39838__$1 = state_39838;
var statearr_39840_39868 = state_39838__$1;
(statearr_39840_39868[(2)] = inst_39833);

(statearr_39840_39868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (1))){
var inst_39815 = null;
var state_39838__$1 = (function (){var statearr_39841 = state_39838;
(statearr_39841[(7)] = inst_39815);

return statearr_39841;
})();
var statearr_39842_39869 = state_39838__$1;
(statearr_39842_39869[(2)] = null);

(statearr_39842_39869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (4))){
var inst_39818 = (state_39838[(8)]);
var inst_39818__$1 = (state_39838[(2)]);
var inst_39819 = (inst_39818__$1 == null);
var inst_39820 = cljs.core.not.call(null,inst_39819);
var state_39838__$1 = (function (){var statearr_39843 = state_39838;
(statearr_39843[(8)] = inst_39818__$1);

return statearr_39843;
})();
if(inst_39820){
var statearr_39844_39870 = state_39838__$1;
(statearr_39844_39870[(1)] = (5));

} else {
var statearr_39845_39871 = state_39838__$1;
(statearr_39845_39871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (6))){
var state_39838__$1 = state_39838;
var statearr_39846_39872 = state_39838__$1;
(statearr_39846_39872[(2)] = null);

(statearr_39846_39872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (3))){
var inst_39835 = (state_39838[(2)]);
var inst_39836 = cljs.core.async.close_BANG_.call(null,out);
var state_39838__$1 = (function (){var statearr_39847 = state_39838;
(statearr_39847[(9)] = inst_39835);

return statearr_39847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39838__$1,inst_39836);
} else {
if((state_val_39839 === (2))){
var state_39838__$1 = state_39838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39838__$1,(4),ch);
} else {
if((state_val_39839 === (11))){
var inst_39818 = (state_39838[(8)]);
var inst_39827 = (state_39838[(2)]);
var inst_39815 = inst_39818;
var state_39838__$1 = (function (){var statearr_39848 = state_39838;
(statearr_39848[(10)] = inst_39827);

(statearr_39848[(7)] = inst_39815);

return statearr_39848;
})();
var statearr_39849_39873 = state_39838__$1;
(statearr_39849_39873[(2)] = null);

(statearr_39849_39873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (9))){
var inst_39818 = (state_39838[(8)]);
var state_39838__$1 = state_39838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39838__$1,(11),out,inst_39818);
} else {
if((state_val_39839 === (5))){
var inst_39818 = (state_39838[(8)]);
var inst_39815 = (state_39838[(7)]);
var inst_39822 = cljs.core._EQ_.call(null,inst_39818,inst_39815);
var state_39838__$1 = state_39838;
if(inst_39822){
var statearr_39851_39874 = state_39838__$1;
(statearr_39851_39874[(1)] = (8));

} else {
var statearr_39852_39875 = state_39838__$1;
(statearr_39852_39875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (10))){
var inst_39830 = (state_39838[(2)]);
var state_39838__$1 = state_39838;
var statearr_39853_39876 = state_39838__$1;
(statearr_39853_39876[(2)] = inst_39830);

(statearr_39853_39876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39839 === (8))){
var inst_39815 = (state_39838[(7)]);
var tmp39850 = inst_39815;
var inst_39815__$1 = tmp39850;
var state_39838__$1 = (function (){var statearr_39854 = state_39838;
(statearr_39854[(7)] = inst_39815__$1);

return statearr_39854;
})();
var statearr_39855_39877 = state_39838__$1;
(statearr_39855_39877[(2)] = null);

(statearr_39855_39877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39867,out))
;
return ((function (switch__37109__auto__,c__37223__auto___39867,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39859[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39859[(1)] = (1));

return statearr_39859;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39838){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39860){if((e39860 instanceof Object)){
var ex__37113__auto__ = e39860;
var statearr_39861_39878 = state_39838;
(statearr_39861_39878[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39879 = state_39838;
state_39838 = G__39879;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39867,out))
})();
var state__37225__auto__ = (function (){var statearr_39862 = f__37224__auto__.call(null);
(statearr_39862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39867);

return statearr_39862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39867,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39880 = [];
var len__11440__auto___39950 = arguments.length;
var i__11441__auto___39951 = (0);
while(true){
if((i__11441__auto___39951 < len__11440__auto___39950)){
args39880.push((arguments[i__11441__auto___39951]));

var G__39952 = (i__11441__auto___39951 + (1));
i__11441__auto___39951 = G__39952;
continue;
} else {
}
break;
}

var G__39882 = args39880.length;
switch (G__39882) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39880.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___39954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___39954,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___39954,out){
return (function (state_39920){
var state_val_39921 = (state_39920[(1)]);
if((state_val_39921 === (7))){
var inst_39916 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
var statearr_39922_39955 = state_39920__$1;
(statearr_39922_39955[(2)] = inst_39916);

(statearr_39922_39955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (1))){
var inst_39883 = (new Array(n));
var inst_39884 = inst_39883;
var inst_39885 = (0);
var state_39920__$1 = (function (){var statearr_39923 = state_39920;
(statearr_39923[(7)] = inst_39885);

(statearr_39923[(8)] = inst_39884);

return statearr_39923;
})();
var statearr_39924_39956 = state_39920__$1;
(statearr_39924_39956[(2)] = null);

(statearr_39924_39956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (4))){
var inst_39888 = (state_39920[(9)]);
var inst_39888__$1 = (state_39920[(2)]);
var inst_39889 = (inst_39888__$1 == null);
var inst_39890 = cljs.core.not.call(null,inst_39889);
var state_39920__$1 = (function (){var statearr_39925 = state_39920;
(statearr_39925[(9)] = inst_39888__$1);

return statearr_39925;
})();
if(inst_39890){
var statearr_39926_39957 = state_39920__$1;
(statearr_39926_39957[(1)] = (5));

} else {
var statearr_39927_39958 = state_39920__$1;
(statearr_39927_39958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (15))){
var inst_39910 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
var statearr_39928_39959 = state_39920__$1;
(statearr_39928_39959[(2)] = inst_39910);

(statearr_39928_39959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (13))){
var state_39920__$1 = state_39920;
var statearr_39929_39960 = state_39920__$1;
(statearr_39929_39960[(2)] = null);

(statearr_39929_39960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (6))){
var inst_39885 = (state_39920[(7)]);
var inst_39906 = (inst_39885 > (0));
var state_39920__$1 = state_39920;
if(cljs.core.truth_(inst_39906)){
var statearr_39930_39961 = state_39920__$1;
(statearr_39930_39961[(1)] = (12));

} else {
var statearr_39931_39962 = state_39920__$1;
(statearr_39931_39962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (3))){
var inst_39918 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39920__$1,inst_39918);
} else {
if((state_val_39921 === (12))){
var inst_39884 = (state_39920[(8)]);
var inst_39908 = cljs.core.vec.call(null,inst_39884);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39920__$1,(15),out,inst_39908);
} else {
if((state_val_39921 === (2))){
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39920__$1,(4),ch);
} else {
if((state_val_39921 === (11))){
var inst_39900 = (state_39920[(2)]);
var inst_39901 = (new Array(n));
var inst_39884 = inst_39901;
var inst_39885 = (0);
var state_39920__$1 = (function (){var statearr_39932 = state_39920;
(statearr_39932[(10)] = inst_39900);

(statearr_39932[(7)] = inst_39885);

(statearr_39932[(8)] = inst_39884);

return statearr_39932;
})();
var statearr_39933_39963 = state_39920__$1;
(statearr_39933_39963[(2)] = null);

(statearr_39933_39963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (9))){
var inst_39884 = (state_39920[(8)]);
var inst_39898 = cljs.core.vec.call(null,inst_39884);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39920__$1,(11),out,inst_39898);
} else {
if((state_val_39921 === (5))){
var inst_39885 = (state_39920[(7)]);
var inst_39888 = (state_39920[(9)]);
var inst_39884 = (state_39920[(8)]);
var inst_39893 = (state_39920[(11)]);
var inst_39892 = (inst_39884[inst_39885] = inst_39888);
var inst_39893__$1 = (inst_39885 + (1));
var inst_39894 = (inst_39893__$1 < n);
var state_39920__$1 = (function (){var statearr_39934 = state_39920;
(statearr_39934[(12)] = inst_39892);

(statearr_39934[(11)] = inst_39893__$1);

return statearr_39934;
})();
if(cljs.core.truth_(inst_39894)){
var statearr_39935_39964 = state_39920__$1;
(statearr_39935_39964[(1)] = (8));

} else {
var statearr_39936_39965 = state_39920__$1;
(statearr_39936_39965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (14))){
var inst_39913 = (state_39920[(2)]);
var inst_39914 = cljs.core.async.close_BANG_.call(null,out);
var state_39920__$1 = (function (){var statearr_39938 = state_39920;
(statearr_39938[(13)] = inst_39913);

return statearr_39938;
})();
var statearr_39939_39966 = state_39920__$1;
(statearr_39939_39966[(2)] = inst_39914);

(statearr_39939_39966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (10))){
var inst_39904 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
var statearr_39940_39967 = state_39920__$1;
(statearr_39940_39967[(2)] = inst_39904);

(statearr_39940_39967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39921 === (8))){
var inst_39884 = (state_39920[(8)]);
var inst_39893 = (state_39920[(11)]);
var tmp39937 = inst_39884;
var inst_39884__$1 = tmp39937;
var inst_39885 = inst_39893;
var state_39920__$1 = (function (){var statearr_39941 = state_39920;
(statearr_39941[(7)] = inst_39885);

(statearr_39941[(8)] = inst_39884__$1);

return statearr_39941;
})();
var statearr_39942_39968 = state_39920__$1;
(statearr_39942_39968[(2)] = null);

(statearr_39942_39968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___39954,out))
;
return ((function (switch__37109__auto__,c__37223__auto___39954,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_39946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39946[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_39946[(1)] = (1));

return statearr_39946;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_39920){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_39920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e39947){if((e39947 instanceof Object)){
var ex__37113__auto__ = e39947;
var statearr_39948_39969 = state_39920;
(statearr_39948_39969[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39970 = state_39920;
state_39920 = G__39970;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_39920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_39920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___39954,out))
})();
var state__37225__auto__ = (function (){var statearr_39949 = f__37224__auto__.call(null);
(statearr_39949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___39954);

return statearr_39949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___39954,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args39971 = [];
var len__11440__auto___40045 = arguments.length;
var i__11441__auto___40046 = (0);
while(true){
if((i__11441__auto___40046 < len__11440__auto___40045)){
args39971.push((arguments[i__11441__auto___40046]));

var G__40047 = (i__11441__auto___40046 + (1));
i__11441__auto___40046 = G__40047;
continue;
} else {
}
break;
}

var G__39973 = args39971.length;
switch (G__39973) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39971.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37223__auto___40049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___40049,out){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___40049,out){
return (function (state_40015){
var state_val_40016 = (state_40015[(1)]);
if((state_val_40016 === (7))){
var inst_40011 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40017_40050 = state_40015__$1;
(statearr_40017_40050[(2)] = inst_40011);

(statearr_40017_40050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (1))){
var inst_39974 = [];
var inst_39975 = inst_39974;
var inst_39976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40015__$1 = (function (){var statearr_40018 = state_40015;
(statearr_40018[(7)] = inst_39975);

(statearr_40018[(8)] = inst_39976);

return statearr_40018;
})();
var statearr_40019_40051 = state_40015__$1;
(statearr_40019_40051[(2)] = null);

(statearr_40019_40051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (4))){
var inst_39979 = (state_40015[(9)]);
var inst_39979__$1 = (state_40015[(2)]);
var inst_39980 = (inst_39979__$1 == null);
var inst_39981 = cljs.core.not.call(null,inst_39980);
var state_40015__$1 = (function (){var statearr_40020 = state_40015;
(statearr_40020[(9)] = inst_39979__$1);

return statearr_40020;
})();
if(inst_39981){
var statearr_40021_40052 = state_40015__$1;
(statearr_40021_40052[(1)] = (5));

} else {
var statearr_40022_40053 = state_40015__$1;
(statearr_40022_40053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (15))){
var inst_40005 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40023_40054 = state_40015__$1;
(statearr_40023_40054[(2)] = inst_40005);

(statearr_40023_40054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (13))){
var state_40015__$1 = state_40015;
var statearr_40024_40055 = state_40015__$1;
(statearr_40024_40055[(2)] = null);

(statearr_40024_40055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (6))){
var inst_39975 = (state_40015[(7)]);
var inst_40000 = inst_39975.length;
var inst_40001 = (inst_40000 > (0));
var state_40015__$1 = state_40015;
if(cljs.core.truth_(inst_40001)){
var statearr_40025_40056 = state_40015__$1;
(statearr_40025_40056[(1)] = (12));

} else {
var statearr_40026_40057 = state_40015__$1;
(statearr_40026_40057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (3))){
var inst_40013 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40015__$1,inst_40013);
} else {
if((state_val_40016 === (12))){
var inst_39975 = (state_40015[(7)]);
var inst_40003 = cljs.core.vec.call(null,inst_39975);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40015__$1,(15),out,inst_40003);
} else {
if((state_val_40016 === (2))){
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40015__$1,(4),ch);
} else {
if((state_val_40016 === (11))){
var inst_39983 = (state_40015[(10)]);
var inst_39979 = (state_40015[(9)]);
var inst_39993 = (state_40015[(2)]);
var inst_39994 = [];
var inst_39995 = inst_39994.push(inst_39979);
var inst_39975 = inst_39994;
var inst_39976 = inst_39983;
var state_40015__$1 = (function (){var statearr_40027 = state_40015;
(statearr_40027[(7)] = inst_39975);

(statearr_40027[(11)] = inst_39995);

(statearr_40027[(8)] = inst_39976);

(statearr_40027[(12)] = inst_39993);

return statearr_40027;
})();
var statearr_40028_40058 = state_40015__$1;
(statearr_40028_40058[(2)] = null);

(statearr_40028_40058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (9))){
var inst_39975 = (state_40015[(7)]);
var inst_39991 = cljs.core.vec.call(null,inst_39975);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40015__$1,(11),out,inst_39991);
} else {
if((state_val_40016 === (5))){
var inst_39983 = (state_40015[(10)]);
var inst_39976 = (state_40015[(8)]);
var inst_39979 = (state_40015[(9)]);
var inst_39983__$1 = f.call(null,inst_39979);
var inst_39984 = cljs.core._EQ_.call(null,inst_39983__$1,inst_39976);
var inst_39985 = cljs.core.keyword_identical_QMARK_.call(null,inst_39976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39986 = (inst_39984) || (inst_39985);
var state_40015__$1 = (function (){var statearr_40029 = state_40015;
(statearr_40029[(10)] = inst_39983__$1);

return statearr_40029;
})();
if(cljs.core.truth_(inst_39986)){
var statearr_40030_40059 = state_40015__$1;
(statearr_40030_40059[(1)] = (8));

} else {
var statearr_40031_40060 = state_40015__$1;
(statearr_40031_40060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (14))){
var inst_40008 = (state_40015[(2)]);
var inst_40009 = cljs.core.async.close_BANG_.call(null,out);
var state_40015__$1 = (function (){var statearr_40033 = state_40015;
(statearr_40033[(13)] = inst_40008);

return statearr_40033;
})();
var statearr_40034_40061 = state_40015__$1;
(statearr_40034_40061[(2)] = inst_40009);

(statearr_40034_40061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (10))){
var inst_39998 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40035_40062 = state_40015__$1;
(statearr_40035_40062[(2)] = inst_39998);

(statearr_40035_40062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (8))){
var inst_39975 = (state_40015[(7)]);
var inst_39983 = (state_40015[(10)]);
var inst_39979 = (state_40015[(9)]);
var inst_39988 = inst_39975.push(inst_39979);
var tmp40032 = inst_39975;
var inst_39975__$1 = tmp40032;
var inst_39976 = inst_39983;
var state_40015__$1 = (function (){var statearr_40036 = state_40015;
(statearr_40036[(14)] = inst_39988);

(statearr_40036[(7)] = inst_39975__$1);

(statearr_40036[(8)] = inst_39976);

return statearr_40036;
})();
var statearr_40037_40063 = state_40015__$1;
(statearr_40037_40063[(2)] = null);

(statearr_40037_40063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37223__auto___40049,out))
;
return ((function (switch__37109__auto__,c__37223__auto___40049,out){
return (function() {
var cljs$core$async$state_machine__37110__auto__ = null;
var cljs$core$async$state_machine__37110__auto____0 = (function (){
var statearr_40041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40041[(0)] = cljs$core$async$state_machine__37110__auto__);

(statearr_40041[(1)] = (1));

return statearr_40041;
});
var cljs$core$async$state_machine__37110__auto____1 = (function (state_40015){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_40015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e40042){if((e40042 instanceof Object)){
var ex__37113__auto__ = e40042;
var statearr_40043_40064 = state_40015;
(statearr_40043_40064[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40065 = state_40015;
state_40015 = G__40065;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
cljs$core$async$state_machine__37110__auto__ = function(state_40015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37110__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37110__auto____1.call(this,state_40015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37110__auto____0;
cljs$core$async$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37110__auto____1;
return cljs$core$async$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___40049,out))
})();
var state__37225__auto__ = (function (){var statearr_40044 = f__37224__auto__.call(null);
(statearr_40044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___40049);

return statearr_40044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___40049,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map