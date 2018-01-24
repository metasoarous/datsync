// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('dat.reactor.dispatcher');
goog.require('datascript.core');
goog.require('com.stuartsierra.component');
if(typeof dat.reactor.handle_event_BANG_ !== 'undefined'){
} else {
dat.reactor.handle_event_BANG_ = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","handle-event!"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (_,___$1,p__51367){
var vec__51368 = p__51367;
var event_id = cljs.core.nth.call(null,vec__51368,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__51368,(1),null);
return event_id;
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
dat.reactor.dispatch_BANG_ = (function dat$reactor$dispatch_BANG_(var_args){
var args51371 = [];
var len__11440__auto___51374 = arguments.length;
var i__11441__auto___51375 = (0);
while(true){
if((i__11441__auto___51375 < len__11440__auto___51374)){
args51371.push((arguments[i__11441__auto___51375]));

var G__51376 = (i__11441__auto___51375 + (1));
i__11441__auto___51375 = G__51376;
continue;
} else {
}
break;
}

var G__51373 = args51371.length;
switch (G__51373) {
case 3:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51371.length)].join('')));

}
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reactor,message,level){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message,level);
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reactor,message){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});

dat.reactor.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatch_error_BANG_ = (function dat$reactor$dispatch_error_BANG_(reactor,message){
return dat.reactor.dispatcher.dispatch_error_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});
/**
 * Within a handle-event method implementation, you can call this function to resolve a single event to
 *   some sequence of more atomic (presumably; thought you could get recursive...) events. This is a little bit
 *   experimental at the moment, as there might be some gotchas with error handling flow. But for right now, you
 *   have the option of specifying :datview.resolver/catch?, which lets you decide whether events should continue
 *   getting processed if one of the events errors (if set to truthy, skips over the errored event). Note that
 *   presently, errors do not bubble up. The last successful state of the db will be returned. Errors will be passed
 *   through to the :datview/error.
 */
dat.reactor.resolve_to = (function dat$reactor$resolve_to(var_args){
var args51378 = [];
var len__11440__auto___51385 = arguments.length;
var i__11441__auto___51386 = (0);
while(true){
if((i__11441__auto___51386 < len__11440__auto___51385)){
args51378.push((arguments[i__11441__auto___51386]));

var G__51387 = (i__11441__auto___51386 + (1));
i__11441__auto___51386 = G__51387;
continue;
} else {
}
break;
}

var G__51380 = args51378.length;
switch (G__51380) {
case 4:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51378.length)].join('')));

}
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4 = (function (app,db,events,p__51381){
var map__51382 = p__51381;
var map__51382__$1 = ((((!((map__51382 == null)))?((((map__51382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51382):map__51382);
var options = map__51382__$1;
var catch_QMARK_ = cljs.core.get.call(null,map__51382__$1,new cljs.core.Keyword("datview.resolver","catch?","datview.resolver/catch?",2025040664));
return cljs.core.reduce.call(null,((function (map__51382,map__51382__$1,options,catch_QMARK_){
return (function (db_SINGLEQUOTE_,event){
try{return dat.reactor.handle_event_BANG_.call(null,app,db_SINGLEQUOTE_,event);
}catch (e51384){var e = e51384;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__51382,map__51382__$1,options,catch_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Resolver exception:"], null);
});})(e,map__51382,map__51382__$1,options,catch_QMARK_))
,null)),null,-777186462);

console.log(e.stack);

if(cljs.core.truth_(catch_QMARK_)){
return db_SINGLEQUOTE_;
} else {
return cljs.core.reduced.call(null,cljs.core.with_meta.call(null,db_SINGLEQUOTE_,cljs.core.merge.call(null,cljs.core.meta.call(null,db_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datview.resolver","error","datview.resolver/error",1263884080),e], null))));
}
}});})(map__51382,map__51382__$1,options,catch_QMARK_))
,db,cljs.core.remove.call(null,cljs.core.nil_QMARK_,events));
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3 = (function (app,db,events){
return dat.reactor.resolve_to.call(null,app,db,events,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.resolve_to.cljs$lang$maxFixedArity = 4;

dat.reactor.preserve_meta = (function dat$reactor$preserve_meta(handler_fn){
return (function (app,db,event){
var new_db = handler_fn.call(null,app,db,event);
if(cljs.core.truth_(cljs.core.meta.call(null,new_db))){
return new_db;
} else {
return cljs.core.with_meta.call(null,new_db,cljs.core.meta.call(null,db));
}
});
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   that actually returns the final value. Except... We have some default handlers (see implementation, for now, till
 *   we spec this out).
 */
dat.reactor.register_handler = (function dat$reactor$register_handler(var_args){
var args51389 = [];
var len__11440__auto___51392 = arguments.length;
var i__11441__auto___51393 = (0);
while(true){
if((i__11441__auto___51393 < len__11440__auto___51392)){
args51389.push((arguments[i__11441__auto___51393]));

var G__51394 = (i__11441__auto___51393 + (1));
i__11441__auto___51393 = G__51394;
continue;
} else {
}
break;
}

var G__51391 = args51389.length;
switch (G__51391) {
case 2:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51389.length)].join('')));

}
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
return dat.reactor.register_handler.call(null,event_id,cljs.core.PersistentVector.EMPTY,handler_fn);
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware_fn,handler_fn){
var post_middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.reactor.preserve_meta], null);
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var handler_fn__$1 = middleware_fn__$1.call(null,handler_fn);
return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,event_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1){
return (function (app,db,event){
return handler_fn__$1.call(null,app,db,event);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1))
);
});

dat.reactor.register_handler.cljs$lang$maxFixedArity = 3;

if(typeof dat.reactor.execute_effect_BANG_ !== 'undefined'){
} else {
dat.reactor.execute_effect_BANG_ = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","execute-effect!"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (_,___$1,p__51396){
var vec__51397 = p__51396;
var effect_id = cljs.core.nth.call(null,vec__51397,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__51397,(1),null);
return effect_id;
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
dat.reactor.concatv = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
/**
 * Registers effects on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effects = (function dat$reactor$with_effects(effects,db){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init3019280340854796545.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding effects for effect-ids:",cljs.core.map.call(null,cljs.core.first,effects)], null);
}),null)),null,-474665462);

return cljs.core.with_meta.call(null,db,cljs.core.update.call(null,cljs.core.meta.call(null,db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161),dat.reactor.concatv,cljs.core.map.call(null,(function (effect){
return cljs.core.with_meta.call(null,effect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
}),effects)));
});
/**
 * Registers effect on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effect = (function dat$reactor$with_effect(effect,db){
return dat.reactor.with_effects.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [effect], null),db);
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   we spec this out). Also, calling this function registers an _event_ handler by the same effect-id; This should
 *   eventually act as a default, but not override any event handler already set up with the same id, but for now avoid
 *   collisions between event and effect ids.
 */
dat.reactor.register_effect = (function dat$reactor$register_effect(var_args){
var args51400 = [];
var len__11440__auto___51404 = arguments.length;
var i__11441__auto___51405 = (0);
while(true){
if((i__11441__auto___51405 < len__11440__auto___51404)){
args51400.push((arguments[i__11441__auto___51405]));

var G__51406 = (i__11441__auto___51405 + (1));
i__11441__auto___51405 = G__51406;
continue;
} else {
}
break;
}

var G__51402 = args51400.length;
switch (G__51402) {
case 2:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51400.length)].join('')));

}
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2 = (function (effect_id,effect_fn){
return dat.reactor.register_effect.call(null,effect_id,cljs.core.PersistentVector.EMPTY,effect_fn);
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3 = (function (effect_id,middleware_fn,effect_fn){
var post_middleware = cljs.core.PersistentVector.EMPTY;
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var effect_fn__$1 = middleware_fn__$1.call(null,effect_fn);
cljs.core._add_method.call(null,dat.reactor.execute_effect_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
try{return effect_fn__$1.call(null,app,db,effect);
}catch (e51403){var e = e51403;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",171,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error executing effect:",effect,e], null);
});})(e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
,null)),null,-996523123);
}});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);

return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
return dat.reactor.with_effect.call(null,effect,db);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);
});

dat.reactor.register_effect.cljs$lang$maxFixedArity = 3;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),(function (_,db,p__51408){
var vec__51409 = p__51408;
var ___$1 = cljs.core.nth.call(null,vec__51409,(0),null);
var tx_report = cljs.core.nth.call(null,vec__51409,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init3019280340854796545.clj",187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51409,___$1,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/resolve-tx-report called."], null);
});})(vec__51409,___$1,tx_report))
,null)),null,-1261921545);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),(function (app,db,p__51412){
var vec__51413 = p__51412;
var _ = cljs.core.nth.call(null,vec__51413,(0),null);
var tx_forms = cljs.core.nth.call(null,vec__51413,(1),null);
var tx_meta = cljs.core.nth.call(null,vec__51413,(2),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init3019280340854796545.clj",193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51413,_,tx_forms,tx_meta){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/local-tx called."], null);
});})(vec__51413,_,tx_forms,tx_meta))
,null)),null,2143225808);

var tx_report = datascript.core.with$.call(null,db,tx_forms,tx_meta);
return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),tx_report], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),tx_report], null)], null)));
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),(function (app,db,p__51416){
var vec__51417 = p__51416;
var _ = cljs.core.nth.call(null,vec__51417,(0),null);
var tx_report = cljs.core.nth.call(null,vec__51417,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init3019280340854796545.clj",205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51417,_,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Effect handler :dat.reactor/fire-tx-report-handlers! called."], null);
});})(vec__51417,_,tx_report))
,null)),null,1126336028);

var seq__51420 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)))));
var chunk__51421 = null;
var count__51422 = (0);
var i__51423 = (0);
while(true){
if((i__51423 < count__51422)){
var vec__51424 = cljs.core._nth.call(null,chunk__51421,i__51423);
var ___$1 = cljs.core.nth.call(null,vec__51424,(0),null);
var callback = cljs.core.nth.call(null,vec__51424,(1),null);
callback.call(null,tx_report);

var G__51430 = seq__51420;
var G__51431 = chunk__51421;
var G__51432 = count__51422;
var G__51433 = (i__51423 + (1));
seq__51420 = G__51430;
chunk__51421 = G__51431;
count__51422 = G__51432;
i__51423 = G__51433;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__51420);
if(temp__6738__auto__){
var seq__51420__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51420__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__51420__$1);
var G__51434 = cljs.core.chunk_rest.call(null,seq__51420__$1);
var G__51435 = c__11130__auto__;
var G__51436 = cljs.core.count.call(null,c__11130__auto__);
var G__51437 = (0);
seq__51420 = G__51434;
chunk__51421 = G__51435;
count__51422 = G__51436;
i__51423 = G__51437;
continue;
} else {
var vec__51427 = cljs.core.first.call(null,seq__51420__$1);
var ___$1 = cljs.core.nth.call(null,vec__51427,(0),null);
var callback = cljs.core.nth.call(null,vec__51427,(1),null);
callback.call(null,tx_report);

var G__51438 = cljs.core.next.call(null,seq__51420__$1);
var G__51439 = null;
var G__51440 = (0);
var G__51441 = (0);
seq__51420 = G__51438;
chunk__51421 = G__51439;
count__51422 = G__51440;
i__51423 = G__51441;
continue;
}
} else {
return null;
}
}
break;
}
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),(function (app,db,p__51442){
var vec__51443 = p__51442;
var _ = cljs.core.nth.call(null,vec__51443,(0),null);
var dispatch_message = cljs.core.nth.call(null,vec__51443,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init3019280340854796545.clj",213,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__51443,_,dispatch_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling dispatch after effect for dispatch id:",cljs.core.first.call(null,dispatch_message)], null);
});})(vec__51443,_,dispatch_message))
,null)),null,-1839460419);

return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),dispatch_message);
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",224,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No effect definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,-1639280063);

return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",229,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No handler definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,-1709917559);

return db;
}));
/**
 * Starts a go loop that processes events and effects using the handle-event! and
 *   execute-effect! fns. Effects are executed in sequence after the transaction commits.
 *   If a handler fails, the effects will not fire (will eventually support control over
 *   this behavior).
 */
dat.reactor.go_react_BANG_ = (function dat$reactor$go_react_BANG_(reactor,app){
var event_chan = dat.spec.protocols.dispatcher_event_chan.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor));
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(reactor);
var kill_chan = cljs.core.async.chan.call(null);
var c__37223__auto___51778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (state_51715){
var state_val_51716 = (state_51715[(1)]);
if((state_val_51716 === (7))){
var inst_51622 = (state_51715[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51715,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_51633 = cljs.core._EQ_.call(null,inst_51622,kill_chan);
var state_51715__$1 = state_51715;
if(inst_51633){
var statearr_51717_51779 = state_51715__$1;
(statearr_51717_51779[(1)] = (8));

} else {
var statearr_51718_51780 = state_51715__$1;
(statearr_51718_51780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (20))){
var inst_51660 = cljs.core.deref.call(null,conn);
var state_51715__$1 = state_51715;
var statearr_51719_51781 = state_51715__$1;
(statearr_51719_51781[(2)] = inst_51660);

(statearr_51719_51781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (27))){
var inst_51688 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51720_51782 = state_51715__$1;
(statearr_51720_51782[(2)] = inst_51688);

(statearr_51720_51782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (1))){
var state_51715__$1 = state_51715;
var statearr_51721_51783 = state_51715__$1;
(statearr_51721_51783[(2)] = null);

(statearr_51721_51783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (24))){
var inst_51691 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51722_51784 = state_51715__$1;
(statearr_51722_51784[(2)] = inst_51691);

(statearr_51722_51784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (4))){
var inst_51620 = (state_51715[(8)]);
var inst_51620__$1 = (state_51715[(2)]);
var inst_51621 = cljs.core.nth.call(null,inst_51620__$1,(0),null);
var inst_51622 = cljs.core.nth.call(null,inst_51620__$1,(1),null);
var inst_51623 = cljs.core.atom.call(null,null);
var state_51715__$1 = (function (){var statearr_51726 = state_51715;
(statearr_51726[(8)] = inst_51620__$1);

(statearr_51726[(9)] = inst_51623);

(statearr_51726[(10)] = inst_51621);

(statearr_51726[(7)] = inst_51622);

return statearr_51726;
})();
var statearr_51727_51785 = state_51715__$1;
(statearr_51727_51785[(2)] = null);

(statearr_51727_51785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (15))){
var inst_51695 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51728_51786 = state_51715__$1;
(statearr_51728_51786[(2)] = inst_51695);

(statearr_51728_51786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (21))){
var inst_51648 = (state_51715[(11)]);
var inst_51655 = (state_51715[(12)]);
var inst_51647 = (state_51715[(13)]);
var inst_51649 = (state_51715[(14)]);
var inst_51650 = (state_51715[(15)]);
var inst_51662 = (state_51715[(2)]);
var inst_51663 = dat.reactor.execute_effect_BANG_.call(null,app,inst_51662,inst_51655);
var inst_51664 = (inst_51650 + (1));
var tmp51723 = inst_51648;
var tmp51724 = inst_51647;
var tmp51725 = inst_51649;
var inst_51647__$1 = tmp51724;
var inst_51648__$1 = tmp51723;
var inst_51649__$1 = tmp51725;
var inst_51650__$1 = inst_51664;
var state_51715__$1 = (function (){var statearr_51729 = state_51715;
(statearr_51729[(16)] = inst_51663);

(statearr_51729[(11)] = inst_51648__$1);

(statearr_51729[(13)] = inst_51647__$1);

(statearr_51729[(14)] = inst_51649__$1);

(statearr_51729[(15)] = inst_51650__$1);

return statearr_51729;
})();
var statearr_51730_51787 = state_51715__$1;
(statearr_51730_51787[(2)] = null);

(statearr_51730_51787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (31))){
var inst_51620 = (state_51715[(8)]);
var inst_51623 = (state_51715[(9)]);
var inst_51621 = (state_51715[(10)]);
var inst_51622 = (state_51715[(7)]);
var inst_51705 = (function (){var vec__51613 = inst_51620;
var event = inst_51621;
var port = inst_51622;
var final_meta = inst_51623;
return ((function (vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-react! process recieved kill-chan signal"], null);
});
;})(vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan))
})();
var inst_51706 = (new cljs.core.Delay(inst_51705,null));
var inst_51707 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init3019280340854796545.clj",276,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51706,null,-1415406560);
var state_51715__$1 = state_51715;
var statearr_51731_51788 = state_51715__$1;
(statearr_51731_51788[(2)] = inst_51707);

(statearr_51731_51788[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (32))){
var state_51715__$1 = state_51715;
var statearr_51732_51789 = state_51715__$1;
(statearr_51732_51789[(2)] = null);

(statearr_51732_51789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (33))){
var inst_51711 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51733_51790 = state_51715__$1;
(statearr_51733_51790[(2)] = inst_51711);

(statearr_51733_51790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (13))){
var inst_51698 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51734_51791 = state_51715__$1;
(statearr_51734_51791[(2)] = inst_51698);

(statearr_51734_51791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (22))){
var inst_51667 = (state_51715[(17)]);
var inst_51669 = cljs.core.chunked_seq_QMARK_.call(null,inst_51667);
var state_51715__$1 = state_51715;
if(inst_51669){
var statearr_51735_51792 = state_51715__$1;
(statearr_51735_51792[(1)] = (25));

} else {
var statearr_51736_51793 = state_51715__$1;
(statearr_51736_51793[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (29))){
var inst_51681 = cljs.core.deref.call(null,conn);
var state_51715__$1 = state_51715;
var statearr_51737_51794 = state_51715__$1;
(statearr_51737_51794[(2)] = inst_51681);

(statearr_51737_51794[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (6))){
var inst_51620 = (state_51715[(8)]);
var inst_51623 = (state_51715[(9)]);
var inst_51621 = (state_51715[(10)]);
var inst_51622 = (state_51715[(7)]);
var inst_51624 = (state_51715[(2)]);
var inst_51625 = (function (){var vec__51613 = inst_51620;
var event = inst_51621;
var port = inst_51622;
var final_meta = inst_51623;
var e = inst_51624;
return ((function (vec__51613,event,port,final_meta,e,inst_51620,inst_51623,inst_51621,inst_51622,inst_51624,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor go loop"], null);
});
;})(vec__51613,event,port,final_meta,e,inst_51620,inst_51623,inst_51621,inst_51622,inst_51624,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan))
})();
var inst_51626 = (new cljs.core.Delay(inst_51625,null));
var inst_51627 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",273,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51626,null,14806726);
var inst_51628 = inst_51624.stack;
var inst_51629 = console.log(inst_51628);
var state_51715__$1 = (function (){var statearr_51738 = state_51715;
(statearr_51738[(18)] = inst_51627);

return statearr_51738;
})();
var statearr_51739_51795 = state_51715__$1;
(statearr_51739_51795[(2)] = inst_51629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (28))){
var inst_51678 = (state_51715[(19)]);
var state_51715__$1 = state_51715;
var statearr_51740_51796 = state_51715__$1;
(statearr_51740_51796[(2)] = inst_51678);

(statearr_51740_51796[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (25))){
var inst_51667 = (state_51715[(17)]);
var inst_51671 = cljs.core.chunk_first.call(null,inst_51667);
var inst_51672 = cljs.core.chunk_rest.call(null,inst_51667);
var inst_51673 = cljs.core.count.call(null,inst_51671);
var inst_51647 = inst_51672;
var inst_51648 = inst_51671;
var inst_51649 = inst_51673;
var inst_51650 = (0);
var state_51715__$1 = (function (){var statearr_51741 = state_51715;
(statearr_51741[(11)] = inst_51648);

(statearr_51741[(13)] = inst_51647);

(statearr_51741[(14)] = inst_51649);

(statearr_51741[(15)] = inst_51650);

return statearr_51741;
})();
var statearr_51742_51797 = state_51715__$1;
(statearr_51742_51797[(2)] = null);

(statearr_51742_51797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (17))){
var inst_51667 = (state_51715[(17)]);
var inst_51647 = (state_51715[(13)]);
var inst_51667__$1 = cljs.core.seq.call(null,inst_51647);
var state_51715__$1 = (function (){var statearr_51743 = state_51715;
(statearr_51743[(17)] = inst_51667__$1);

return statearr_51743;
})();
if(inst_51667__$1){
var statearr_51744_51798 = state_51715__$1;
(statearr_51744_51798[(1)] = (22));

} else {
var statearr_51745_51799 = state_51715__$1;
(statearr_51745_51799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (3))){
var inst_51713 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51715__$1,inst_51713);
} else {
if((state_val_51716 === (12))){
var state_51715__$1 = state_51715;
var statearr_51746_51800 = state_51715__$1;
(statearr_51746_51800[(2)] = null);

(statearr_51746_51800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (2))){
var inst_51616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51617 = [kill_chan,event_chan];
var inst_51618 = (new cljs.core.PersistentVector(null,2,(5),inst_51616,inst_51617,null));
var state_51715__$1 = state_51715;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51715__$1,(4),inst_51618,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_51716 === (23))){
var state_51715__$1 = state_51715;
var statearr_51747_51801 = state_51715__$1;
(statearr_51747_51801[(2)] = null);

(statearr_51747_51801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (19))){
var inst_51657 = (state_51715[(20)]);
var state_51715__$1 = state_51715;
var statearr_51748_51802 = state_51715__$1;
(statearr_51748_51802[(2)] = inst_51657);

(statearr_51748_51802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (11))){
var inst_51640 = (state_51715[(21)]);
var inst_51646 = cljs.core.seq.call(null,inst_51640);
var inst_51647 = inst_51646;
var inst_51648 = null;
var inst_51649 = (0);
var inst_51650 = (0);
var state_51715__$1 = (function (){var statearr_51749 = state_51715;
(statearr_51749[(11)] = inst_51648);

(statearr_51749[(13)] = inst_51647);

(statearr_51749[(14)] = inst_51649);

(statearr_51749[(15)] = inst_51650);

return statearr_51749;
})();
var statearr_51750_51803 = state_51715__$1;
(statearr_51750_51803[(2)] = null);

(statearr_51750_51803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (9))){
var inst_51620 = (state_51715[(8)]);
var inst_51623 = (state_51715[(9)]);
var inst_51621 = (state_51715[(10)]);
var inst_51622 = (state_51715[(7)]);
var inst_51640 = (state_51715[(21)]);
var inst_51636 = (function (){var vec__51613 = inst_51620;
var event = inst_51621;
var port = inst_51622;
var final_meta = inst_51623;
return ((function (vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,inst_51640,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (current_db){
try{var new_db = dat.reactor.handle_event_BANG_.call(null,reactor,current_db,event);
cljs.core.reset_BANG_.call(null,final_meta,cljs.core.meta.call(null,new_db));

return cljs.core.with_meta.call(null,new_db,cljs.core.dissoc.call(null,cljs.core.meta.call(null,new_db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161)));
}catch (e51751){var e = e51751;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",263,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,inst_51640,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor swap for event: ",event], null);
});})(e,vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,inst_51640,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan))
,null)),null,1402916722);

console.log(e.stack);

return current_db;
}});
;})(vec__51613,event,port,final_meta,inst_51620,inst_51623,inst_51621,inst_51622,inst_51640,state_val_51716,c__37223__auto___51778,event_chan,conn,kill_chan))
})();
var inst_51637 = cljs.core.swap_BANG_.call(null,conn,inst_51636);
var inst_51638 = cljs.core.deref.call(null,inst_51623);
var inst_51639 = new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161).cljs$core$IFn$_invoke$arity$1(inst_51638);
var inst_51640__$1 = cljs.core.seq.call(null,inst_51639);
var state_51715__$1 = (function (){var statearr_51752 = state_51715;
(statearr_51752[(22)] = inst_51637);

(statearr_51752[(21)] = inst_51640__$1);

return statearr_51752;
})();
if(inst_51640__$1){
var statearr_51753_51804 = state_51715__$1;
(statearr_51753_51804[(1)] = (11));

} else {
var statearr_51754_51805 = state_51715__$1;
(statearr_51754_51805[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (5))){
var inst_51622 = (state_51715[(7)]);
var inst_51702 = (state_51715[(2)]);
var inst_51703 = cljs.core._EQ_.call(null,inst_51622,kill_chan);
var state_51715__$1 = (function (){var statearr_51755 = state_51715;
(statearr_51755[(23)] = inst_51702);

return statearr_51755;
})();
if(inst_51703){
var statearr_51756_51806 = state_51715__$1;
(statearr_51756_51806[(1)] = (31));

} else {
var statearr_51757_51807 = state_51715__$1;
(statearr_51757_51807[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (14))){
var inst_51649 = (state_51715[(14)]);
var inst_51650 = (state_51715[(15)]);
var inst_51652 = (inst_51650 < inst_51649);
var inst_51653 = inst_51652;
var state_51715__$1 = state_51715;
if(cljs.core.truth_(inst_51653)){
var statearr_51758_51808 = state_51715__$1;
(statearr_51758_51808[(1)] = (16));

} else {
var statearr_51759_51809 = state_51715__$1;
(statearr_51759_51809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (26))){
var inst_51667 = (state_51715[(17)]);
var inst_51678 = (state_51715[(19)]);
var inst_51676 = (state_51715[(24)]);
var inst_51676__$1 = cljs.core.first.call(null,inst_51667);
var inst_51677 = cljs.core.meta.call(null,inst_51676__$1);
var inst_51678__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_51677);
var state_51715__$1 = (function (){var statearr_51760 = state_51715;
(statearr_51760[(19)] = inst_51678__$1);

(statearr_51760[(24)] = inst_51676__$1);

return statearr_51760;
})();
if(cljs.core.truth_(inst_51678__$1)){
var statearr_51761_51810 = state_51715__$1;
(statearr_51761_51810[(1)] = (28));

} else {
var statearr_51762_51811 = state_51715__$1;
(statearr_51762_51811[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (16))){
var inst_51648 = (state_51715[(11)]);
var inst_51655 = (state_51715[(12)]);
var inst_51650 = (state_51715[(15)]);
var inst_51657 = (state_51715[(20)]);
var inst_51655__$1 = cljs.core._nth.call(null,inst_51648,inst_51650);
var inst_51656 = cljs.core.meta.call(null,inst_51655__$1);
var inst_51657__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_51656);
var state_51715__$1 = (function (){var statearr_51763 = state_51715;
(statearr_51763[(12)] = inst_51655__$1);

(statearr_51763[(20)] = inst_51657__$1);

return statearr_51763;
})();
if(cljs.core.truth_(inst_51657__$1)){
var statearr_51764_51812 = state_51715__$1;
(statearr_51764_51812[(1)] = (19));

} else {
var statearr_51765_51813 = state_51715__$1;
(statearr_51765_51813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (30))){
var inst_51667 = (state_51715[(17)]);
var inst_51676 = (state_51715[(24)]);
var inst_51683 = (state_51715[(2)]);
var inst_51684 = dat.reactor.execute_effect_BANG_.call(null,app,inst_51683,inst_51676);
var inst_51685 = cljs.core.next.call(null,inst_51667);
var inst_51647 = inst_51685;
var inst_51648 = null;
var inst_51649 = (0);
var inst_51650 = (0);
var state_51715__$1 = (function (){var statearr_51766 = state_51715;
(statearr_51766[(11)] = inst_51648);

(statearr_51766[(25)] = inst_51684);

(statearr_51766[(13)] = inst_51647);

(statearr_51766[(14)] = inst_51649);

(statearr_51766[(15)] = inst_51650);

return statearr_51766;
})();
var statearr_51767_51814 = state_51715__$1;
(statearr_51767_51814[(2)] = null);

(statearr_51767_51814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (10))){
var inst_51700 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51768_51815 = state_51715__$1;
(statearr_51768_51815[(2)] = inst_51700);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51715__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (18))){
var inst_51693 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51769_51816 = state_51715__$1;
(statearr_51769_51816[(2)] = inst_51693);

(statearr_51769_51816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (8))){
var state_51715__$1 = state_51715;
var statearr_51770_51817 = state_51715__$1;
(statearr_51770_51817[(2)] = null);

(statearr_51770_51817[(1)] = (10));


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
});})(c__37223__auto___51778,event_chan,conn,kill_chan))
;
return ((function (switch__37109__auto__,c__37223__auto___51778,event_chan,conn,kill_chan){
return (function() {
var dat$reactor$go_react_BANG__$_state_machine__37110__auto__ = null;
var dat$reactor$go_react_BANG__$_state_machine__37110__auto____0 = (function (){
var statearr_51774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51774[(0)] = dat$reactor$go_react_BANG__$_state_machine__37110__auto__);

(statearr_51774[(1)] = (1));

return statearr_51774;
});
var dat$reactor$go_react_BANG__$_state_machine__37110__auto____1 = (function (state_51715){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_51715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e51775){if((e51775 instanceof Object)){
var ex__37113__auto__ = e51775;
var statearr_51776_51818 = state_51715;
(statearr_51776_51818[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51819 = state_51715;
state_51715 = G__51819;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
dat$reactor$go_react_BANG__$_state_machine__37110__auto__ = function(state_51715){
switch(arguments.length){
case 0:
return dat$reactor$go_react_BANG__$_state_machine__37110__auto____0.call(this);
case 1:
return dat$reactor$go_react_BANG__$_state_machine__37110__auto____1.call(this,state_51715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$go_react_BANG__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$go_react_BANG__$_state_machine__37110__auto____0;
dat$reactor$go_react_BANG__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$go_react_BANG__$_state_machine__37110__auto____1;
return dat$reactor$go_react_BANG__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___51778,event_chan,conn,kill_chan))
})();
var state__37225__auto__ = (function (){var statearr_51777 = f__37224__auto__.call(null);
(statearr_51777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___51778);

return statearr_51777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___51778,event_chan,conn,kill_chan))
);


return kill_chan;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.SimpleReactor = (function (app,dispatcher,reactor,conn,kill_chan,__meta,__extmap,__hash){
this.app = app;
this.dispatcher = dispatcher;
this.reactor = reactor;
this.conn = conn;
this.kill_chan = kill_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51821,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51823 = k51821;
var G__51823__$1 = (((G__51823 instanceof cljs.core.Keyword))?G__51823.fqn:null);
switch (G__51823__$1) {
case "app":
return self__.app;

break;
case "dispatcher":
return self__.dispatcher;

break;
case "reactor":
return self__.reactor;

break;
case "conn":
return self__.conn;

break;
case "kill-chan":
return self__.kill_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51821,else__10897__auto__);

}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.reactor.SimpleReactor{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51820){
var self__ = this;
var G__51820__$1 = this;
return (new cljs.core.RecordIter((0),G__51820__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null,new cljs.core.Keyword(null,"app","app",-560961707),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51820){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51824 = cljs.core.keyword_identical_QMARK_;
var expr__51825 = k__10902__auto__;
if(cljs.core.truth_(pred__51824.call(null,new cljs.core.Keyword(null,"app","app",-560961707),expr__51825))){
return (new dat.reactor.SimpleReactor(G__51820,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51824.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__51825))){
return (new dat.reactor.SimpleReactor(self__.app,G__51820,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51824.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__51825))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,G__51820,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51824.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__51825))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,G__51820,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51824.call(null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),expr__51825))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,G__51820,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51820),null));
}
}
}
}
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51820){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,G__51820,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init3019280340854796545.clj",284,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SimpleReactor Component"], null);
});})(reactor__$2))
,null)),null,-1387400782);

try{var conn__$1 = (function (){var or__10219__auto__ = self__.conn;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.app);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datascript.core.create_conn.call(null);
}
}
})();
var app__$1 = (function (){var or__10219__auto__ = self__.app;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1,new cljs.core.Keyword(null,"reactor","reactor",535582272),reactor__$2,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher], null);
}
})();
var reactor__$3 = cljs.core.assoc.call(null,reactor__$2,new cljs.core.Keyword(null,"app","app",-560961707),app__$1,new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1);
var kill_chan__$1 = dat.reactor.go_react_BANG_.call(null,reactor__$3,app__$1);
var reactor__$4 = cljs.core.assoc.call(null,reactor__$3,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),kill_chan__$1);
return reactor__$4;
}catch (e51827){var e = e51827;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init3019280340854796545.clj",297,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error starting SimpleReactor:",e], null);
});})(e,reactor__$2))
,null)),null,1415042181);

console.log(e.stack);

return reactor__$2;
}});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
if(cljs.core.truth_(self__.kill_chan)){
cljs.core.async.put_BANG_.call(null,self__.kill_chan,new cljs.core.Keyword(null,"kill","kill",-12335575));
} else {
}

return reactor__$2;
});

dat.reactor.SimpleReactor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"kill-chan","kill-chan",76861273,null)], null);
});

dat.reactor.SimpleReactor.cljs$lang$type = true;

dat.reactor.SimpleReactor.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor/SimpleReactor");
});

dat.reactor.SimpleReactor.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.reactor/SimpleReactor");
});

dat.reactor.__GT_SimpleReactor = (function dat$reactor$__GT_SimpleReactor(app,dispatcher,reactor,conn,kill_chan){
return (new dat.reactor.SimpleReactor(app,dispatcher,reactor,conn,kill_chan,null,null,null));
});

dat.reactor.map__GT_SimpleReactor = (function dat$reactor$map__GT_SimpleReactor(G__51822){
return (new dat.reactor.SimpleReactor(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(G__51822),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__51822),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__51822),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__51822),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254).cljs$core$IFn$_invoke$arity$1(G__51822),null,cljs.core.dissoc.call(null,G__51822,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.reactor.new_simple_reactor = (function dat$reactor$new_simple_reactor(var_args){
var args51829 = [];
var len__11440__auto___51832 = arguments.length;
var i__11441__auto___51833 = (0);
while(true){
if((i__11441__auto___51833 < len__11440__auto___51832)){
args51829.push((arguments[i__11441__auto___51833]));

var G__51834 = (i__11441__auto___51833 + (1));
i__11441__auto___51833 = G__51834;
continue;
} else {
}
break;
}

var G__51831 = args51829.length;
switch (G__51831) {
case 1:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51829.length)].join('')));

}
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.map__GT_SimpleReactor.call(null,options);
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.new_simple_reactor.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.new_simple_reactor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=reactor.js.map