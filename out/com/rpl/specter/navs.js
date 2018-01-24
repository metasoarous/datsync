// Compiled by ClojureScript 1.9.542 {}
goog.provide('com.rpl.specter.navs');
goog.require('cljs.core');
goog.require('com.rpl.specter.impl');
goog.require('clojure.walk');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.navs.walk_select = (function com$rpl$specter$navs$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,com.rpl.specter.impl.NONE);
var walker = ((function (ret){
return (function com$rpl$specter$navs$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
var r = continue_fn.call(null,structure__$1);
if(!((r === com.rpl.specter.impl.NONE))){
com.rpl.specter.impl.set_cell_BANG_.call(null,ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk.call(null,com$rpl$specter$navs$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.navs.key_select = (function com$rpl$specter$navs$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.navs.key_transform = (function com$rpl$specter$navs$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__14506__auto__,e){
var ret__14507__auto__ = next_fn.call(null,e);
if((ret__14507__auto__ === com.rpl.specter.impl.NONE)){
return curr__14506__auto__;
} else {
return ret__14507__auto__;
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
var x__10937__auto__ = (((structure == null))?null:structure);
var m__10938__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,structure,next_fn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.all_transform["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"AllTransformProtocol.all-transform",structure);
}
}
}
});

com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var vec__17592 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__17592,(0),null);
var newv = cljs.core.nth.call(null,vec__17592,(1),null);
return cljs.core.assoc.call(null,m,newk,newv);
}),empty_map,structure);
});
(com.rpl.specter.navs.AllTransformProtocol["null"] = true);

(com.rpl.specter.navs.all_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.mapv.call(null,next_fn,structure__$1);
});

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform.call(null,structure__$1,next_fn,cljs.core.empty.call(null,structure__$1));
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
var vec__17596 = next_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var newk = cljs.core.nth.call(null,vec__17596,(0),null);
var newv = cljs.core.nth.call(null,vec__17596,(1),null);
return cljs.core.assoc_BANG_.call(null,m,newk,newv);
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.navs.AllTransformProtocol["_"] = true);

(com.rpl.specter.navs.all_transform["_"] = (function (structure,next_fn){
var empty_structure = cljs.core.empty.call(null,structure);
if((cljs.core.list_QMARK_.call(null,empty_structure)) && (cljs.core.not.call(null,com.rpl.specter.navs.queue_QMARK_.call(null,empty_structure)))){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.map.call(null,((function (empty_structure){
return (function (p1__17595_SHARP_){
return next_fn.call(null,p1__17595_SHARP_);
});})(empty_structure))
),structure);
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapValsTransformProtocol = function(){};

com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$MapValsTransformProtocol$map_vals_transform$arity$2 == null)))){
return structure.com$rpl$specter$navs$MapValsTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
var x__10937__auto__ = (((structure == null))?null:structure);
var m__10938__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,structure,next_fn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.map_vals_transform["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"MapValsTransformProtocol.map-vals-transform",structure);
}
}
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,next_fn.call(null,v));
}),empty_map,structure);
});
(com.rpl.specter.navs.MapValsTransformProtocol["null"] = true);

(com.rpl.specter.navs.map_vals_transform["null"] = (function (structure,next_fn){
return null;
}));

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
});

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform.call(null,structure__$1,cljs.core.empty.call(null,structure__$1),next_fn);
});

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapValsTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (structure__$1){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,k,next_fn.call(null,v));
});})(structure__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),structure__$1));
});

(com.rpl.specter.navs.MapValsTransformProtocol["_"] = true);

(com.rpl.specter.navs.map_vals_transform["_"] = (function (structure,next_fn){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,next_fn.call(null,v));
}),cljs.core.empty.call(null,structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_.call(null,path)){
return path;
} else {
if((cljs.core.coll_QMARK_.call(null,path)) && (cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,path))){
return cljs.core.reduce.call(null,(function (combined,afn){
return (function (structure){
var and__10207__auto__ = combined.call(null,structure);
if(cljs.core.truth_(and__10207__auto__)){
return afn.call(null,structure);
} else {
return and__10207__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_.call(null,(cljs.core.truth_(then_tester.call(null,structure))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
var x__10937__auto__ = (((structure == null))?null:structure);
var m__10938__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,structure,elements);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.append_all["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.append-all",structure);
}
}
}
});

com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((!((structure == null))) && (!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
var x__10937__auto__ = (((structure == null))?null:structure);
var m__10938__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,structure,elements);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.prepend_all["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,structure,elements);
} else {
throw cljs.core.missing_protocol.call(null,"AddExtremes.prepend-all",structure);
}
}
}
});

(com.rpl.specter.navs.AddExtremes["null"] = true);

(com.rpl.specter.navs.append_all["null"] = (function (_,elements){
return elements;
}));

(com.rpl.specter.navs.prepend_all["null"] = (function (_,elements){
return elements;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.call(null,cljs.core.conj,structure__$1,elements);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_.call(null,_LT__GT___$2);
});

(com.rpl.specter.navs.AddExtremes["_"] = true);

(com.rpl.specter.navs.append_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,structure,elements);
}));

(com.rpl.specter.navs.prepend_all["_"] = (function (structure,elements){
return cljs.core.concat.call(null,elements,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
var x__10937__auto__ = (((s == null))?null:s);
var m__10938__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,s,afn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.update_first["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-first",s);
}
}
}
});

com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((!((s == null))) && (!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
var x__10937__auto__ = (((s == null))?null:s);
var m__10938__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,s,afn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.update_last["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,s,afn);
} else {
throw cljs.core.missing_protocol.call(null,"UpdateExtremes.update-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
var x__10937__auto__ = (((s == null))?null:s);
var m__10938__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,s);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.get_first["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-first",s);
}
}
}
});

com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
var x__10937__auto__ = (((s == null))?null:s);
var m__10938__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,s);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.get_last["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"GetExtremes.get-last",s);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((!((s == null))) && (!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
var x__10937__auto__ = (((s == null))?null:s);
var m__10938__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,s);
} else {
var m__10938__auto____$1 = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,s);
} else {
throw cljs.core.missing_protocol.call(null,"FastEmpty.fast-empty?",s);
}
}
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj.call(null,(function (getter,updater){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs17603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs17603 = (function (getter,updater,meta17604){
this.getter = getter;
this.updater = updater;
this.meta17604 = meta17604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.navs.t_com$rpl$specter$navs17603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17605,meta17604__$1){
var self__ = this;
var _17605__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17603(self__.getter,self__.updater,meta17604__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs17603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17605){
var self__ = this;
var _17605__$1 = this;
return self__.meta17604;
});

com.rpl.specter.navs.t_com$rpl$specter$navs17603.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs17603.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
if(cljs.core.not.call(null,com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return next_fn.call(null,self__.getter.call(null,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs17603.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_.call(null,structure))){
return structure;
} else {
return self__.updater.call(null,structure,next_fn);
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs17603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta17604","meta17604",-1412853696,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs17603.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs17603.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs17603";

com.rpl.specter.navs.t_com$rpl$specter$navs17603.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs17603");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs17603 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs17603(getter__$1,updater__$1,meta17604){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17603(getter__$1,updater__$1,meta17604));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs17603(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
return cljs.core.cons.call(null,afn.call(null,cljs.core.first.call(null,l)),cljs.core.rest.call(null,l));
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
return cljs.core.concat.call(null,cljs.core.butlast.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,cljs.core.last.call(null,l))], null));
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count.call(null,v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count.call(null,v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.call(null,v__$1,(0));
return cljs.core.assoc.call(null,v__$1,(0),afn.call(null,val));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count.call(null,v__$1) | (0));
var G__17606 = c;
switch (G__17606) {
case (1):
var vec__17607 = v__$1;
var e = cljs.core.nth.call(null,vec__17607,(0),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [afn.call(null,e)], null);

break;
case (2):
var vec__17610 = v__$1;
var e1 = cljs.core.nth.call(null,vec__17610,(0),null);
var e2 = cljs.core.nth.call(null,vec__17610,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,afn.call(null,e2)], null);

break;
default:
var i = (c - (1));
return cljs.core.assoc.call(null,v__$1,i,afn.call(null,cljs.core.nth.call(null,v__$1,i)));

}
});

(com.rpl.specter.navs.UpdateExtremes["_"] = true);

(com.rpl.specter.navs.update_first["_"] = (function (l,val){
return com.rpl.specter.navs.update_first_list.call(null,l,val);
}));

(com.rpl.specter.navs.update_last["_"] = (function (l,val){
return com.rpl.specter.navs.update_last_list.call(null,l,val);
}));
cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.call(null,v__$1,(0));
});

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek.call(null,v__$1);
});

(com.rpl.specter.navs.GetExtremes["_"] = true);

(com.rpl.specter.navs.get_first["_"] = (function (s){
return cljs.core.first.call(null,s);
}));

(com.rpl.specter.navs.get_last["_"] = (function (s){
return cljs.core.last.call(null,s);
}));
(com.rpl.specter.navs.FastEmpty["null"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["null"] = (function (_){
return true;
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.vec_count.call(null,v__$1));
});

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.call(null,(0),com.rpl.specter.navs.transient_vec_count.call(null,v__$1));
});

(com.rpl.specter.navs.FastEmpty["_"] = true);

(com.rpl.specter.navs.fast_empty_QMARK_["_"] = (function (s){
return cljs.core.empty_QMARK_.call(null,s);
}));
com.rpl.specter.navs.walk_until = (function com$rpl$specter$navs$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com.rpl.specter.navs.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (key){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs17614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs17614 = (function (key,meta17615){
this.key = key;
this.meta17615 = meta17615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.navs.t_com$rpl$specter$navs17614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17616,meta17615__$1){
var self__ = this;
var _17616__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17614(self__.key,meta17615__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs17614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17616){
var self__ = this;
var _17616__$1 = this;
return self__.meta17615;
});

com.rpl.specter.navs.t_com$rpl$specter$navs17614.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs17614.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.key));
});

com.rpl.specter.navs.t_com$rpl$specter$navs17614.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,structure,self__.key,next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.key)));
});

com.rpl.specter.navs.t_com$rpl$specter$navs17614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta17615","meta17615",1600478592,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs17614.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs17614.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs17614";

com.rpl.specter.navs.t_com$rpl$specter$navs17614.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs17614");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs17614 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs17614(key__$1,meta17615){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17614(key__$1,meta17615));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs17614(key,null));
}));
/**
 * Navigates to the key only if it exists in the map.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (k){
if(typeof com.rpl.specter.navs.t_com$rpl$specter$navs17617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs17617 = (function (k,meta17618){
this.k = k;
this.meta17618 = meta17618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.navs.t_com$rpl$specter$navs17617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17619,meta17618__$1){
var self__ = this;
var _17619__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17617(self__.k,meta17618__$1));
});

com.rpl.specter.navs.t_com$rpl$specter$navs17617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17619){
var self__ = this;
var _17619__$1 = this;
return self__.meta17618;
});

com.rpl.specter.navs.t_com$rpl$specter$navs17617.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.navs.t_com$rpl$specter$navs17617.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.k));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs17617.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,structure,self__.k)){
return cljs.core.assoc.call(null,structure,self__.k,next_fn.call(null,vals,cljs.core.get.call(null,structure,self__.k)));
} else {
return structure;
}
});

com.rpl.specter.navs.t_com$rpl$specter$navs17617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta17618","meta17618",-739813637,null)], null);
});

com.rpl.specter.navs.t_com$rpl$specter$navs17617.cljs$lang$type = true;

com.rpl.specter.navs.t_com$rpl$specter$navs17617.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs17617";

com.rpl.specter.navs.t_com$rpl$specter$navs17617.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs17617");
});

com.rpl.specter.navs.__GT_t_com$rpl$specter$navs17617 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs17617(k__$1,meta17618){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs17617(k__$1,meta17618));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs17617(k,null));
}));

//# sourceMappingURL=navs.js.map