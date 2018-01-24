// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.state.protocol.db');
goog.require('cljs.core');

/**
 * @interface
 */
onyx.state.protocol.db.State = function(){};

onyx.state.protocol.db.put_extent_BANG_ = (function onyx$state$protocol$db$put_extent_BANG_(this$,window_id,group,extent,v){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$put_extent_BANG_$arity$5 == null)))){
return this$.onyx$state$protocol$db$State$put_extent_BANG_$arity$5(this$,window_id,group,extent,v);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.put_extent_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,extent,v);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.put_extent_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,extent,v);
} else {
throw cljs.core.missing_protocol.call(null,"State.put-extent!",this$);
}
}
}
});

onyx.state.protocol.db.put_state_entry_BANG_ = (function onyx$state$protocol$db$put_state_entry_BANG_(this$,window_id,group,time,entry){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$put_state_entry_BANG_$arity$5 == null)))){
return this$.onyx$state$protocol$db$State$put_state_entry_BANG_$arity$5(this$,window_id,group,time,entry);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.put_state_entry_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,time,entry);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.put_state_entry_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,time,entry);
} else {
throw cljs.core.missing_protocol.call(null,"State.put-state-entry!",this$);
}
}
}
});

onyx.state.protocol.db.get_state_entries = (function onyx$state$protocol$db$get_state_entries(this$,window_id,group,start,end){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$get_state_entries$arity$5 == null)))){
return this$.onyx$state$protocol$db$State$get_state_entries$arity$5(this$,window_id,group,start,end);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.get_state_entries[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,start,end);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.get_state_entries["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"State.get-state-entries",this$);
}
}
}
});

onyx.state.protocol.db.delete_state_entries_BANG_ = (function onyx$state$protocol$db$delete_state_entries_BANG_(this$,window_id,group,start,end){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$delete_state_entries_BANG_$arity$5 == null)))){
return this$.onyx$state$protocol$db$State$delete_state_entries_BANG_$arity$5(this$,window_id,group,start,end);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.delete_state_entries_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,start,end);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.delete_state_entries_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"State.delete-state-entries!",this$);
}
}
}
});

onyx.state.protocol.db.get_extent = (function onyx$state$protocol$db$get_extent(this$,window_id,group,extent){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$get_extent$arity$4 == null)))){
return this$.onyx$state$protocol$db$State$get_extent$arity$4(this$,window_id,group,extent);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.get_extent[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,extent);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.get_extent["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,extent);
} else {
throw cljs.core.missing_protocol.call(null,"State.get-extent",this$);
}
}
}
});

onyx.state.protocol.db.delete_extent_BANG_ = (function onyx$state$protocol$db$delete_extent_BANG_(this$,window_id,group,extent){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$delete_extent_BANG_$arity$4 == null)))){
return this$.onyx$state$protocol$db$State$delete_extent_BANG_$arity$4(this$,window_id,group,extent);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.delete_extent_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group,extent);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.delete_extent_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group,extent);
} else {
throw cljs.core.missing_protocol.call(null,"State.delete-extent!",this$);
}
}
}
});

onyx.state.protocol.db.put_trigger_BANG_ = (function onyx$state$protocol$db$put_trigger_BANG_(this$,trigger_id,group,v){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$put_trigger_BANG_$arity$4 == null)))){
return this$.onyx$state$protocol$db$State$put_trigger_BANG_$arity$4(this$,trigger_id,group,v);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.put_trigger_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,trigger_id,group,v);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.put_trigger_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,trigger_id,group,v);
} else {
throw cljs.core.missing_protocol.call(null,"State.put-trigger!",this$);
}
}
}
});

onyx.state.protocol.db.group_id = (function onyx$state$protocol$db$group_id(this$,group_key){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$group_id$arity$2 == null)))){
return this$.onyx$state$protocol$db$State$group_id$arity$2(this$,group_key);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.group_id[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,group_key);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.group_id["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,group_key);
} else {
throw cljs.core.missing_protocol.call(null,"State.group-id",this$);
}
}
}
});

onyx.state.protocol.db.group_key = (function onyx$state$protocol$db$group_key(this$,group_id){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$group_key$arity$2 == null)))){
return this$.onyx$state$protocol$db$State$group_key$arity$2(this$,group_id);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.group_key[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,group_id);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.group_key["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,group_id);
} else {
throw cljs.core.missing_protocol.call(null,"State.group-key",this$);
}
}
}
});

onyx.state.protocol.db.get_trigger = (function onyx$state$protocol$db$get_trigger(this$,trigger_id,group){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$get_trigger$arity$3 == null)))){
return this$.onyx$state$protocol$db$State$get_trigger$arity$3(this$,trigger_id,group);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.get_trigger[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,trigger_id,group);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.get_trigger["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,trigger_id,group);
} else {
throw cljs.core.missing_protocol.call(null,"State.get-trigger",this$);
}
}
}
});

onyx.state.protocol.db.groups = (function onyx$state$protocol$db$groups(this$){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$groups$arity$1 == null)))){
return this$.onyx$state$protocol$db$State$groups$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.groups[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.groups["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"State.groups",this$);
}
}
}
});

onyx.state.protocol.db.group_extents = (function onyx$state$protocol$db$group_extents(this$,window_id,group){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$group_extents$arity$3 == null)))){
return this$.onyx$state$protocol$db$State$group_extents$arity$3(this$,window_id,group);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.group_extents[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id,group);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.group_extents["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id,group);
} else {
throw cljs.core.missing_protocol.call(null,"State.group-extents",this$);
}
}
}
});

onyx.state.protocol.db.trigger_keys = (function onyx$state$protocol$db$trigger_keys(this$,trigger_id){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$trigger_keys$arity$2 == null)))){
return this$.onyx$state$protocol$db$State$trigger_keys$arity$2(this$,trigger_id);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.trigger_keys[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,trigger_id);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.trigger_keys["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,trigger_id);
} else {
throw cljs.core.missing_protocol.call(null,"State.trigger-keys",this$);
}
}
}
});

onyx.state.protocol.db.drop_BANG_ = (function onyx$state$protocol$db$drop_BANG_(this$){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$drop_BANG_$arity$1 == null)))){
return this$.onyx$state$protocol$db$State$drop_BANG_$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.drop_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.drop_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"State.drop!",this$);
}
}
}
});

onyx.state.protocol.db.close_BANG_ = (function onyx$state$protocol$db$close_BANG_(this$){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$close_BANG_$arity$1 == null)))){
return this$.onyx$state$protocol$db$State$close_BANG_$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.close_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.close_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"State.close!",this$);
}
}
}
});

onyx.state.protocol.db.export$ = (function onyx$state$protocol$db$export(this$,encoder){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$export$arity$2 == null)))){
return this$.onyx$state$protocol$db$State$export$arity$2(this$,encoder);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.export$[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,encoder);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.export$["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,encoder);
} else {
throw cljs.core.missing_protocol.call(null,"State.export",this$);
}
}
}
});

onyx.state.protocol.db.restore_BANG_ = (function onyx$state$protocol$db$restore_BANG_(this$,decoder,mapping){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$restore_BANG_$arity$3 == null)))){
return this$.onyx$state$protocol$db$State$restore_BANG_$arity$3(this$,decoder,mapping);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.restore_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,decoder,mapping);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.restore_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,decoder,mapping);
} else {
throw cljs.core.missing_protocol.call(null,"State.restore!",this$);
}
}
}
});

onyx.state.protocol.db.export_reader = (function onyx$state$protocol$db$export_reader(this$){
if((!((this$ == null))) && (!((this$.onyx$state$protocol$db$State$export_reader$arity$1 == null)))){
return this$.onyx$state$protocol$db$State$export_reader$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.state.protocol.db.export_reader[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (onyx.state.protocol.db.export_reader["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"State.export-reader",this$);
}
}
}
});

if(typeof onyx.state.protocol.db.create_db !== 'undefined'){
} else {
onyx.state.protocol.db.create_db = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.state.protocol.db","create-db"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (peer_config,db_name,serializers){
var or__10219__auto__ = new cljs.core.Keyword("onyx.peer","state-store-impl","onyx.peer/state-store-impl",704702434).cljs$core$IFn$_invoke$arity$1(peer_config);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword(null,"memory","memory",-1449401430);
}
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
if(typeof onyx.state.protocol.db.open_db_reader !== 'undefined'){
} else {
onyx.state.protocol.db.open_db_reader = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.state.protocol.db","open-db-reader"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (peer_config,definition,serializers){
var or__10219__auto__ = new cljs.core.Keyword("onyx.peer","state-store-impl","onyx.peer/state-store-impl",704702434).cljs$core$IFn$_invoke$arity$1(peer_config);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword(null,"memory","memory",-1449401430);
}
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}

//# sourceMappingURL=db.js.map