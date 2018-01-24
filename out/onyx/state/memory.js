// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.state.memory');
goog.require('cljs.core');
goog.require('onyx.state.protocol.db');
onyx.state.memory.statedb_compress = cljs.core.identity;
onyx.state.memory.statedb_decompress = cljs.core.identity;
onyx.state.memory.clean_groups = (function onyx$state$memory$clean_groups(groups){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__39485){
var vec__39486 = p__39485;
var _ = cljs.core.nth.call(null,vec__39486,(0),null);
var extents = cljs.core.nth.call(null,vec__39486,(1),null);
return cljs.core.empty_QMARK_.call(null,extents);
}),groups));
});
onyx.state.memory.clean_state = (function onyx$state$memory$clean_state(state){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__39497){
var vec__39498 = p__39497;
var _ = cljs.core.nth.call(null,vec__39498,(0),null);
var groups = cljs.core.nth.call(null,vec__39498,(1),null);
return cljs.core.empty_QMARK_.call(null,groups);
}),cljs.core.map.call(null,(function (p__39501){
var vec__39502 = p__39501;
var k = cljs.core.nth.call(null,vec__39502,(0),null);
var groups = cljs.core.nth.call(null,vec__39502,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,onyx.state.memory.clean_groups.call(null,groups)], null);
}),state)));
});
onyx.state.memory.get_state_idx = (function onyx$state$memory$get_state_idx(bs){
return null;
});
onyx.state.memory.put_state_entry_offset_BANG_ = (function onyx$state$memory$put_state_entry_offset_BANG_(items,window_id,group_id,time,offset,v){
return cljs.core.swap_BANG_.call(null,items,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window_id,group_id], null),(function (coll){
return cljs.core.conj.call(null,(function (){var or__10219__auto__ = coll;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [time,offset,v], null));
}));
});

/**
* @constructor
 * @implements {onyx.state.protocol.db.State}
*/
onyx.state.memory.StateBackend = (function (windows,triggers,items,groups,groups_reverse,group_counter,entry_counter,serialize_fn,deserialize_fn,group_coder,group_reverse_coder,window_coders,trigger_coders){
this.windows = windows;
this.triggers = triggers;
this.items = items;
this.groups = groups;
this.groups_reverse = groups_reverse;
this.group_counter = group_counter;
this.entry_counter = entry_counter;
this.serialize_fn = serialize_fn;
this.deserialize_fn = deserialize_fn;
this.group_coder = group_coder;
this.group_reverse_coder = group_reverse_coder;
this.window_coders = window_coders;
this.trigger_coders = trigger_coders;
})
onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$ = cljs.core.PROTOCOL_SENTINEL;

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$get_state_entries$arity$5 = (function (this$,window_id,group_id,start,end){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__39505){
var vec__39506 = p__39505;
var _ = cljs.core.nth.call(null,vec__39506,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__39506,(1),null);
var v = cljs.core.nth.call(null,vec__39506,(2),null);
return v;
});})(this$__$1))
,cljs.core.sort_by.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second),cljs.core.filter.call(null,((function (this$__$1){
return (function (p__39509){
var vec__39510 = p__39509;
var time = cljs.core.nth.call(null,vec__39510,(0),null);
return ((time >= start)) && ((time <= end));
});})(this$__$1))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.items),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window_id,group_id], null)))));
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$groups$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.keys.call(null,cljs.core.deref.call(null,self__.groups));
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$trigger_keys$arity$2 = (function (this$,trigger_idx){
var self__ = this;
var this$__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.triggers),trigger_idx);
if(cljs.core.truth_(temp__6738__auto__)){
var trigger = temp__6738__auto__;
var trigger_ks = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.run_BANG_.call(null,((function (trigger_ks,trigger,temp__6738__auto__,this$__$1){
return (function (p__39513){
var vec__39514 = p__39513;
var group_id = cljs.core.nth.call(null,vec__39514,(0),null);
var v = cljs.core.nth.call(null,vec__39514,(1),null);
return cljs.core.conj_BANG_.call(null,trigger_ks,(function (){var x__11153__auto__ = group_id;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,self__.groups_reverse),group_id);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto____$1);
})(),x__11153__auto__);
})());
});})(trigger_ks,trigger,temp__6738__auto__,this$__$1))
,trigger);

return cljs.core.persistent_BANG_.call(null,trigger_ks);
} else {
return null;
}
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$export_reader$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"windows","windows",2068861701),self__.windows,new cljs.core.Keyword(null,"triggers","triggers",-1443678770),self__.triggers,new cljs.core.Keyword(null,"groups","groups",-136896102),self__.groups,new cljs.core.Keyword(null,"items","items",1031954938),self__.items,new cljs.core.Keyword(null,"groups-reverse","groups-reverse",2124404743),self__.groups_reverse], null);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$put_state_entry_BANG_$arity$5 = (function (this$,window_id,group_id,time,v){
var self__ = this;
var this$__$1 = this;
return onyx.state.memory.put_state_entry_offset_BANG_.call(null,self__.items,window_id,group_id,time,cljs.core.swap_BANG_.call(null,self__.entry_counter,cljs.core.inc),v);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$group_extents$arity$3 = (function (this$,window_id,group_id){
var self__ = this;
var this$__$1 = this;
return cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,self__.windows),window_id),group_id)));
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$delete_extent_BANG_$arity$4 = (function (this$,window_id,group_id,extent){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.windows,((function (this$__$1){
return (function (window_state){
return onyx.state.memory.clean_state.call(null,cljs.core.update.call(null,window_state,window_id,cljs.core.update,group_id,cljs.core.dissoc,extent));
});})(this$__$1))
);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$group_id$arity$2 = (function (this$,group_key){
var self__ = this;
var this$__$1 = this;
var temp__6736__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.groups),group_key);
if(cljs.core.truth_(temp__6736__auto__)){
var group_id = temp__6736__auto__;
return group_id;
} else {
var group_id = cljs.core.swap_BANG_.call(null,self__.group_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,self__.groups,cljs.core.assoc,group_key,group_id);

cljs.core.swap_BANG_.call(null,self__.groups_reverse,cljs.core.assoc,group_id,group_key);

return group_id;
}
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$drop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,self__.windows,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_.call(null,self__.triggers,cljs.core.PersistentArrayMap.EMPTY);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$get_extent$arity$4 = (function (this$,window_id,group_id,extent){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,self__.windows),window_id),group_id),extent);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$delete_state_entries_BANG_$arity$5 = (function (this$,window_id,group_id,start,end){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.items,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window_id,group_id], null),((function (this$__$1){
return (function (values){
return cljs.core.doall.call(null,cljs.core.remove.call(null,((function (this$__$1){
return (function (p__39517){
var vec__39518 = p__39517;
var time = cljs.core.nth.call(null,vec__39518,(0),null);
return ((time >= start)) && ((time <= end));
});})(this$__$1))
,values));
});})(this$__$1))
);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$get_trigger$arity$3 = (function (this$,trigger_id,group_id){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.triggers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger_id,group_id], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$put_extent_BANG_$arity$5 = (function (this$,window_id,group_id,extent,v){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.windows,cljs.core.update,window_id,cljs.core.update,group_id,cljs.core.assoc,extent,v);
});

onyx.state.memory.StateBackend.prototype.onyx$state$protocol$db$State$put_trigger_BANG_$arity$4 = (function (this$,trigger_id,group_id,v){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.triggers,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger_id,group_id], null),v);
});

onyx.state.memory.StateBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"windows","windows",-585574068,null),new cljs.core.Symbol(null,"triggers","triggers",196852757,null),new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"groups","groups",1503635425,null),new cljs.core.Symbol(null,"groups-reverse","groups-reverse",-530031026,null),new cljs.core.Symbol(null,"group-counter","group-counter",-2044646628,null),new cljs.core.Symbol(null,"entry-counter","entry-counter",-1059714164,null),new cljs.core.Symbol(null,"serialize-fn","serialize-fn",-1600736867,null),new cljs.core.Symbol(null,"deserialize-fn","deserialize-fn",-937882935,null),new cljs.core.Symbol(null,"group-coder","group-coder",475499138,null),new cljs.core.Symbol(null,"group-reverse-coder","group-reverse-coder",-2070846749,null),new cljs.core.Symbol(null,"window-coders","window-coders",631620662,null),new cljs.core.Symbol(null,"trigger-coders","trigger-coders",402594589,null)], null);
});

onyx.state.memory.StateBackend.cljs$lang$type = true;

onyx.state.memory.StateBackend.cljs$lang$ctorStr = "onyx.state.memory/StateBackend";

onyx.state.memory.StateBackend.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"onyx.state.memory/StateBackend");
});

onyx.state.memory.__GT_StateBackend = (function onyx$state$memory$__GT_StateBackend(windows,triggers,items,groups,groups_reverse,group_counter,entry_counter,serialize_fn,deserialize_fn,group_coder,group_reverse_coder,window_coders,trigger_coders){
return (new onyx.state.memory.StateBackend(windows,triggers,items,groups,groups_reverse,group_counter,entry_counter,serialize_fn,deserialize_fn,group_coder,group_reverse_coder,window_coders,trigger_coders));
});

cljs.core._add_method.call(null,onyx.state.protocol.db.create_db,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (peer_config,_,p__39521){
var map__39522 = p__39521;
var map__39522__$1 = ((((!((map__39522 == null)))?((((map__39522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39522):map__39522);
var window_coders = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"window-coders","window-coders",-1008910865));
var trigger_coders = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"trigger-coders","trigger-coders",-1237936938));
var group_coder = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"group-coder","group-coder",-1165032389));
var group_reverse_coder = cljs.core.get.call(null,map__39522__$1,new cljs.core.Keyword(null,"group-reverse-coder","group-reverse-coder",583589020));
return onyx.state.memory.__GT_StateBackend.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.long$.call(null,(-1))),cljs.core.atom.call(null,cljs.core.long$.call(null,(-1))),onyx.state.memory.statedb_compress,onyx.state.memory.statedb_decompress,group_coder,group_reverse_coder,window_coders,trigger_coders);
}));
cljs.core._add_method.call(null,onyx.state.protocol.db.open_db_reader,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (peer_config,p__39524,p__39525){
var map__39526 = p__39524;
var map__39526__$1 = ((((!((map__39526 == null)))?((((map__39526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39526):map__39526);
var windows = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"windows","windows",2068861701));
var triggers = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"triggers","triggers",-1443678770));
var groups = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var groups_reverse = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"groups-reverse","groups-reverse",2124404743));
var items = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var map__39527 = p__39525;
var map__39527__$1 = ((((!((map__39527 == null)))?((((map__39527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39527):map__39527);
var window_coders = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"window-coders","window-coders",-1008910865));
var trigger_coders = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"trigger-coders","trigger-coders",-1237936938));
var group_coder = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"group-coder","group-coder",-1165032389));
var group_reverse_coder = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"group-reverse-coder","group-reverse-coder",583589020));
return onyx.state.memory.__GT_StateBackend.call(null,windows,triggers,items,groups,groups_reverse,null,null,onyx.state.memory.statedb_compress,onyx.state.memory.statedb_decompress,group_coder,group_reverse_coder,window_coders,trigger_coders);
}));

//# sourceMappingURL=memory.js.map