// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.peer.window_state');
goog.require('cljs.core');
goog.require('onyx.state.protocol.db');
goog.require('onyx.windowing.window_extensions');
goog.require('onyx.types');
goog.require('onyx.static$.util');
onyx.peer.window_state.default_state_value = (function onyx$peer$window_state$default_state_value(init_fn,window,state_value){
var or__10219__auto__ = state_value;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return init_fn.call(null,window);
}
});

/**
 * @interface
 */
onyx.peer.window_state.StateEventReducer = function(){};

onyx.peer.window_state.window_id = (function onyx$peer$window_state$window_id(this$){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$window_id$arity$1 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$window_id$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.window_id[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.window_id["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.window-id",this$);
}
}
}
});

onyx.peer.window_state.trigger_extent_BANG_ = (function onyx$peer$window_state$trigger_extent_BANG_(this$,state_event,trigger_record,extent){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$trigger_extent_BANG_$arity$4 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$trigger_extent_BANG_$arity$4(this$,state_event,trigger_record,extent);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.trigger_extent_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event,trigger_record,extent);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.trigger_extent_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event,trigger_record,extent);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.trigger-extent!",this$);
}
}
}
});

onyx.peer.window_state.trigger = (function onyx$peer$window_state$trigger(this$,state_event,trigger_record){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$trigger$arity$3 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$trigger$arity$3(this$,state_event,trigger_record);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.trigger[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event,trigger_record);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.trigger["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event,trigger_record);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.trigger",this$);
}
}
}
});

onyx.peer.window_state.segment_triggers_BANG_ = (function onyx$peer$window_state$segment_triggers_BANG_(this$,state_event){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$segment_triggers_BANG_$arity$2 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$segment_triggers_BANG_$arity$2(this$,state_event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.segment_triggers_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.segment_triggers_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.segment-triggers!",this$);
}
}
}
});

onyx.peer.window_state.all_triggers_BANG_ = (function onyx$peer$window_state$all_triggers_BANG_(this$,state_event){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$all_triggers_BANG_$arity$2 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$all_triggers_BANG_$arity$2(this$,state_event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.all_triggers_BANG_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.all_triggers_BANG_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.all-triggers!",this$);
}
}
}
});

onyx.peer.window_state.apply_extents = (function onyx$peer$window_state$apply_extents(this$,state_event){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$apply_extents$arity$2 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$apply_extents$arity$2(this$,state_event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.apply_extents[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.apply_extents["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.apply-extents",this$);
}
}
}
});

onyx.peer.window_state.apply_event = (function onyx$peer$window_state$apply_event(this$,state_event){
if((!((this$ == null))) && (!((this$.onyx$peer$window_state$StateEventReducer$apply_event$arity$2 == null)))){
return this$.onyx$peer$window_state$StateEventReducer$apply_event$arity$2(this$,state_event);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.peer.window_state.apply_event[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,state_event);
} else {
var m__10938__auto____$1 = (onyx.peer.window_state.apply_event["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,state_event);
} else {
throw cljs.core.missing_protocol.call(null,"StateEventReducer.apply-event",this$);
}
}
}
});

onyx.peer.window_state.rollup_result = (function onyx$peer$window_state$rollup_result(segment){
if(cljs.core.sequential_QMARK_.call(null,segment)){
return segment;
} else {
if(cljs.core.map_QMARK_.call(null,segment)){
var x__11153__auto__ = segment;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
} else {
throw cljs.core.ex_info.call(null,"Value returned by :trigger/emit must be either a hash-map or a sequential of hash-maps.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),segment], null));

}
}
});
onyx.peer.window_state.trigger_state_index_id = (function onyx$peer$window_state$trigger_state_index_id(p__51077){
var map__51080 = p__51077;
var map__51080__$1 = ((((!((map__51080 == null)))?((((map__51080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51080):map__51080);
var id = cljs.core.get.call(null,map__51080__$1,new cljs.core.Keyword("trigger","id","trigger/id",-326368132));
var window_id = cljs.core.get.call(null,map__51080__$1,new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,window_id], null);
});
onyx.peer.window_state.state_indices = (function onyx$peer$window_state$state_indices(var_args){
var args51082 = [];
var len__11440__auto___51091 = arguments.length;
var i__11441__auto___51092 = (0);
while(true){
if((i__11441__auto___51092 < len__11440__auto___51091)){
args51082.push((arguments[i__11441__auto___51092]));

var G__51093 = (i__11441__auto___51092 + (1));
i__11441__auto___51092 = G__51093;
continue;
} else {
}
break;
}

var G__51084 = args51082.length;
switch (G__51084) {
case 1:
return onyx.peer.window_state.state_indices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return onyx.peer.window_state.state_indices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51082.length)].join('')));

}
});

onyx.peer.window_state.state_indices.cljs$core$IFn$_invoke$arity$1 = (function (p__51085){
var map__51086 = p__51085;
var map__51086__$1 = ((((!((map__51086 == null)))?((((map__51086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51086):map__51086);
var windows = cljs.core.get.call(null,map__51086__$1,new cljs.core.Keyword("onyx.core","windows","onyx.core/windows",-1130597258));
var triggers = cljs.core.get.call(null,map__51086__$1,new cljs.core.Keyword("onyx.core","triggers","onyx.core/triggers",1971263327));
return onyx.peer.window_state.state_indices.call(null,windows,triggers);
});

onyx.peer.window_state.state_indices.cljs$core$IFn$_invoke$arity$2 = (function (windows,triggers){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword("window","task","window/task",-720839305),windows))))){
} else {
throw (new Error("Assert failed: (= 1 (count (distinct (map :window/task windows))))"));
}

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword("window","id","window/id",-62222780),windows))),cljs.core.sort.call(null,cljs.core.map.call(null,(function (p__51088){
var map__51089 = p__51088;
var map__51089__$1 = ((((!((map__51089 == null)))?((((map__51089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51089):map__51089);
var id = cljs.core.get.call(null,map__51089__$1,new cljs.core.Keyword("trigger","id","trigger/id",-326368132));
var window_id = cljs.core.get.call(null,map__51089__$1,new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,window_id], null);
}),triggers)))));
});

onyx.peer.window_state.state_indices.cljs$lang$maxFixedArity = 2;

onyx.peer.window_state.refine_BANG_ = (function onyx$peer$window_state$refine_BANG_(trigger_record,state_store,idx,group_id,extent,state_event,extent_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413).cljs$core$IFn$_invoke$arity$1(trigger_record))){
var map__51097 = trigger_record;
var map__51097__$1 = ((((!((map__51097 == null)))?((((map__51097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51097):map__51097);
var create_state_update = cljs.core.get.call(null,map__51097__$1,new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413));
var apply_state_update = cljs.core.get.call(null,map__51097__$1,new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680));
var state_update = create_state_update.call(null,onyx.peer.window_state.trigger,cljs.core.deref.call(null,extent_state),state_event);
var next_extent_state = apply_state_update.call(null,onyx.peer.window_state.trigger,cljs.core.deref.call(null,extent_state),state_update);
onyx.state.protocol.db.put_extent_BANG_.call(null,state_store,idx,group_id,extent,next_extent_state);

return cljs.core.assoc.call(null,state_event,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),next_extent_state);
} else {
return state_event;
}
});
onyx.peer.window_state.evict_BANG_ = (function onyx$peer$window_state$evict_BANG_(window_extension,state_store,idx,group_id,extent,evictor,incremental_QMARK_,ordered_log_QMARK_,store_extents_QMARK_){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null),evictor))){
if(cljs.core.truth_((function (){var or__10219__auto__ = incremental_QMARK_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return store_extents_QMARK_;
}
})())){
onyx.state.protocol.db.delete_extent_BANG_.call(null,state_store,idx,group_id,extent);
} else {
}

if(cljs.core.truth_(ordered_log_QMARK_)){
var vec__51102 = onyx.windowing.window_extensions.bounds.call(null,window_extension,extent);
var lower = cljs.core.nth.call(null,vec__51102,(0),null);
var upper = cljs.core.nth.call(null,vec__51102,(1),null);
return onyx.state.protocol.db.delete_state_entries_BANG_.call(null,state_store,idx,group_id,lower,upper);
} else {
return null;
}
} else {
return null;
}
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
 * @implements {onyx.peer.window_state.StateEventReducer}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
onyx.peer.window_state.WindowExecutor = (function (window_extension,grouped_QMARK_,triggers,window,id,idx,state_store,init_fn,emitted,create_state_update,apply_state_update,super_agg_fn,event_results,ordered_log_QMARK_,incremental_QMARK_,store_extents_QMARK_,__meta,__extmap,__hash){
this.window_extension = window_extension;
this.grouped_QMARK_ = grouped_QMARK_;
this.triggers = triggers;
this.window = window;
this.id = id;
this.idx = idx;
this.state_store = state_store;
this.init_fn = init_fn;
this.emitted = emitted;
this.create_state_update = create_state_update;
this.apply_state_update = apply_state_update;
this.super_agg_fn = super_agg_fn;
this.event_results = event_results;
this.ordered_log_QMARK_ = ordered_log_QMARK_;
this.incremental_QMARK_ = incremental_QMARK_;
this.store_extents_QMARK_ = store_extents_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51106,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51108 = k51106;
var G__51108__$1 = (((G__51108 instanceof cljs.core.Keyword))?G__51108.fqn:null);
switch (G__51108__$1) {
case "ordered-log?":
return self__.ordered_log_QMARK_;

break;
case "store-extents?":
return self__.store_extents_QMARK_;

break;
case "event-results":
return self__.event_results;

break;
case "super-agg-fn":
return self__.super_agg_fn;

break;
case "window-extension":
return self__.window_extension;

break;
case "create-state-update":
return self__.create_state_update;

break;
case "triggers":
return self__.triggers;

break;
case "window":
return self__.window;

break;
case "apply-state-update":
return self__.apply_state_update;

break;
case "init-fn":
return self__.init_fn;

break;
case "id":
return self__.id;

break;
case "grouped?":
return self__.grouped_QMARK_;

break;
case "state-store":
return self__.state_store;

break;
case "incremental?":
return self__.incremental_QMARK_;

break;
case "idx":
return self__.idx;

break;
case "emitted":
return self__.emitted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51106,else__10897__auto__);

}
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#onyx.peer.window-state.WindowExecutor{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-extension","window-extension",765968263),self__.window_extension],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grouped?","grouped?",531080948),self__.grouped_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"triggers","triggers",-1443678770),self__.triggers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-store","state-store",-1000263756),self__.state_store],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"emitted","emitted",-974033604),self__.emitted],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),self__.create_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),self__.apply_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),self__.super_agg_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-results","event-results",723394659),self__.event_results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),self__.ordered_log_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),self__.incremental_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278),self__.store_extents_QMARK_],null))], null),self__.__extmap));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51105){
var self__ = this;
var G__51105__$1 = this;
return (new cljs.core.RecordIter((0),G__51105__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-extension","window-extension",765968263),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"state-store","state-store",-1000263756),new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"emitted","emitted",-974033604),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),new cljs.core.Keyword(null,"event-results","event-results",723394659),new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (16 + cljs.core.count.call(null,self__.__extmap));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$ = cljs.core.PROTOCOL_SENTINEL;

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$window_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$trigger_extent_BANG_$arity$4 = (function (this$,state_event,trigger_record,extent){
var self__ = this;
var this$__$1 = this;
var map__51109 = trigger_record;
var map__51109__$1 = ((((!((map__51109 == null)))?((((map__51109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51109):map__51109);
var sync_fn = cljs.core.get.call(null,map__51109__$1,new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042));
var emit_fn = cljs.core.get.call(null,map__51109__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var trigger = cljs.core.get.call(null,map__51109__$1,new cljs.core.Keyword(null,"trigger","trigger",103466139));
var pre_evictor = cljs.core.get.call(null,map__51109__$1,new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736));
var post_evictor = cljs.core.get.call(null,map__51109__$1,new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448));
var map__51110 = state_event;
var map__51110__$1 = ((((!((map__51110 == null)))?((((map__51110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51110):map__51110);
var group_id = cljs.core.get.call(null,map__51110__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var extent_state = cljs.core.get.call(null,map__51110__$1,new cljs.core.Keyword(null,"extent-state","extent-state",1739291279));
var state_event__$1 = onyx.peer.window_state.refine_BANG_.call(null,trigger_record,self__.state_store,self__.idx,group_id,extent,state_event,extent_state);
var emit_segment = (cljs.core.truth_(emit_fn)?emit_fn.call(null,new cljs.core.Keyword(null,"task-event","task-event",1730573741).cljs$core$IFn$_invoke$arity$1(state_event__$1),self__.window,trigger,state_event__$1,cljs.core.deref.call(null,extent_state)):null);
if(cljs.core.truth_(sync_fn)){
sync_fn.call(null,new cljs.core.Keyword(null,"task-event","task-event",1730573741).cljs$core$IFn$_invoke$arity$1(state_event__$1),self__.window,trigger,state_event__$1,cljs.core.deref.call(null,extent_state));
} else {
}

if(cljs.core.truth_(emit_segment)){
cljs.core.swap_BANG_.call(null,self__.emitted,((function (map__51109,map__51109__$1,sync_fn,emit_fn,trigger,pre_evictor,post_evictor,map__51110,map__51110__$1,group_id,extent_state,state_event__$1,emit_segment,this$__$1){
return (function (em){
return cljs.core.into.call(null,em,onyx.peer.window_state.rollup_result.call(null,emit_segment));
});})(map__51109,map__51109__$1,sync_fn,emit_fn,trigger,pre_evictor,post_evictor,map__51110,map__51110__$1,group_id,extent_state,state_event__$1,emit_segment,this$__$1))
);
} else {
}

return onyx.peer.window_state.evict_BANG_.call(null,self__.window_extension,self__.state_store,self__.idx,group_id,extent,post_evictor,self__.incremental_QMARK_,self__.ordered_log_QMARK_,self__.store_extents_QMARK_);
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$trigger$arity$3 = (function (this$,state_event,trigger_record){
var self__ = this;
var this$__$1 = this;
var map__51113 = trigger_record;
var map__51113__$1 = ((((!((map__51113 == null)))?((((map__51113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51113):map__51113);
var trigger = cljs.core.get.call(null,map__51113__$1,new cljs.core.Keyword(null,"trigger","trigger",103466139));
var trigger_fire_QMARK_ = cljs.core.get.call(null,map__51113__$1,new cljs.core.Keyword(null,"trigger-fire?","trigger-fire?",2098988312));
var fire_all_extents_QMARK_ = cljs.core.get.call(null,map__51113__$1,new cljs.core.Keyword(null,"fire-all-extents?","fire-all-extents?",-1463064911));
var state_context_trigger_QMARK_ = cljs.core.get.call(null,map__51113__$1,new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685));
var state_event__$1 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,state_event,new cljs.core.Keyword(null,"window","window",724519534),self__.window),new cljs.core.Keyword(null,"trigger-state","trigger-state",-1285376437),trigger_record);
var group_id = new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(state_event__$1);
var trigger_idx = new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(trigger_record);
var next_trigger_state = (cljs.core.truth_(state_context_trigger_QMARK_)?(function (){var trigger_state = onyx.state.protocol.db.get_trigger.call(null,self__.state_store,trigger_idx,group_id);
var defaulted_trigger_state = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),trigger_state))?new cljs.core.Keyword(null,"init-state","init-state",1450863212).cljs$core$IFn$_invoke$arity$1(trigger_record).call(null,trigger):trigger_state);
var next_trigger_state = new cljs.core.Keyword(null,"next-trigger-state","next-trigger-state",-1017522059).cljs$core$IFn$_invoke$arity$1(trigger_record).call(null,trigger,defaulted_trigger_state,state_event__$1);
onyx.state.protocol.db.put_trigger_BANG_.call(null,self__.state_store,trigger_idx,group_id,next_trigger_state);

return next_trigger_state;
})():null);
var fire_all_QMARK_ = (function (){var or__10219__auto__ = fire_all_extents_QMARK_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(state_event__$1),new cljs.core.Keyword(null,"segment","segment",-964921196));
}
})();
var fire_extents = (cljs.core.truth_(fire_all_QMARK_)?onyx.state.protocol.db.group_extents.call(null,self__.state_store,self__.idx,group_id):new cljs.core.Keyword(null,"extents","extents",-1127971346).cljs$core$IFn$_invoke$arity$1(state_event__$1));
cljs.core.run_BANG_.call(null,((function (map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1){
return (function (extent){
var vec__51115 = onyx.windowing.window_extensions.bounds.call(null,self__.window_extension,extent);
var lower = cljs.core.nth.call(null,vec__51115,(0),null);
var upper = cljs.core.nth.call(null,vec__51115,(1),null);
var extent_state = (cljs.core.truth_(self__.incremental_QMARK_)?(new cljs.core.Delay(((function (vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1){
return (function (){
return onyx.state.protocol.db.get_extent.call(null,self__.state_store,self__.idx,group_id,extent);
});})(vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1))
,null)):(new cljs.core.Delay(((function (vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1){
return (function (){
return cljs.core.reduce.call(null,((function (vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1){
return (function (state,entry){
return self__.apply_state_update.call(null,self__.window,state,entry);
});})(vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1))
,self__.init_fn.call(null,self__.window),onyx.state.protocol.db.get_state_entries.call(null,self__.state_store,self__.idx,group_id,lower,upper));
});})(vec__51115,lower,upper,map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1))
,null)));
var state_event__$2 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state_event__$1,new cljs.core.Keyword(null,"extent","extent",-186399820),extent),new cljs.core.Keyword(null,"extent-state","extent-state",1739291279),extent_state),new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489),lower),new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816),upper);
if(cljs.core.truth_(trigger_fire_QMARK_.call(null,trigger,next_trigger_state,state_event__$2))){
return onyx.peer.window_state.trigger_extent_BANG_.call(null,this$__$1,state_event__$2,trigger_record,extent);
} else {
return null;
}
});})(map__51113,map__51113__$1,trigger,trigger_fire_QMARK_,fire_all_extents_QMARK_,state_context_trigger_QMARK_,state_event__$1,group_id,trigger_idx,next_trigger_state,fire_all_QMARK_,fire_extents,this$__$1))
,fire_extents);

return this$__$1;
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$segment_triggers_BANG_$arity$2 = (function (this$,state_event){
var self__ = this;
var this$__$1 = this;
cljs.core.run_BANG_.call(null,((function (this$__$1){
return (function (p__51118){
var vec__51119 = p__51118;
var _ = cljs.core.nth.call(null,vec__51119,(0),null);
var trigger_state = cljs.core.nth.call(null,vec__51119,(1),null);
return onyx.peer.window_state.trigger.call(null,this$__$1,state_event,trigger_state);
});})(this$__$1))
,self__.triggers);

return state_event;
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$all_triggers_BANG_$arity$2 = (function (this$,state_event){
var self__ = this;
var this$__$1 = this;
cljs.core.run_BANG_.call(null,((function (this$__$1){
return (function (p__51122){
var vec__51123 = p__51122;
var trigger_idx = cljs.core.nth.call(null,vec__51123,(0),null);
var record = cljs.core.nth.call(null,vec__51123,(1),null);
return cljs.core.run_BANG_.call(null,((function (vec__51123,trigger_idx,record,this$__$1){
return (function (p__51126){
var vec__51127 = p__51126;
var group_bytes = cljs.core.nth.call(null,vec__51127,(0),null);
var group_key = cljs.core.nth.call(null,vec__51127,(1),null);
return onyx.peer.window_state.trigger.call(null,this$__$1,cljs.core.assoc.call(null,cljs.core.assoc.call(null,state_event,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_bytes),new cljs.core.Keyword(null,"group-key","group-key",742570475),group_key),record);
});})(vec__51123,trigger_idx,record,this$__$1))
,onyx.state.protocol.db.trigger_keys.call(null,self__.state_store,trigger_idx));
});})(this$__$1))
,self__.triggers);

return state_event;
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$apply_extents$arity$2 = (function (this$,state_event){
var self__ = this;
var this$__$1 = this;
var map__51130 = state_event;
var map__51130__$1 = ((((!((map__51130 == null)))?((((map__51130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51130):map__51130);
var segment = cljs.core.get.call(null,map__51130__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var group_id = cljs.core.get.call(null,map__51130__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var time_index = onyx.windowing.window_extensions.time_index.call(null,self__.window_extension,segment);
var operations = onyx.windowing.window_extensions.extent_operations.call(null,self__.window_extension,(new cljs.core.Delay(((function (map__51130,map__51130__$1,segment,group_id,time_index,this$__$1){
return (function (){
return onyx.state.protocol.db.group_extents.call(null,self__.state_store,self__.idx,group_id);
});})(map__51130,map__51130__$1,segment,group_id,time_index,this$__$1))
,null)),segment,time_index);
var updated_extents = cljs.core.distinct.call(null,cljs.core.keep.call(null,((function (map__51130,map__51130__$1,segment,group_id,time_index,operations,this$__$1){
return (function (p__51132){
var vec__51133 = p__51132;
var op = cljs.core.nth.call(null,vec__51133,(0),null);
var extent = cljs.core.nth.call(null,vec__51133,(1),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"update","update",1045576396))){
return extent;
} else {
return null;
}
});})(map__51130,map__51130__$1,segment,group_id,time_index,operations,this$__$1))
,operations));
var transition_entry = self__.create_state_update.call(null,self__.window,segment);
if(cljs.core.truth_(self__.ordered_log_QMARK_)){
onyx.state.protocol.db.put_state_entry_BANG_.call(null,self__.state_store,self__.idx,group_id,time_index,transition_entry);
} else {
}

cljs.core.run_BANG_.call(null,((function (map__51130,map__51130__$1,segment,group_id,time_index,operations,updated_extents,transition_entry,this$__$1){
return (function (p__51136){
var vec__51137 = p__51136;
var action = cljs.core.nth.call(null,vec__51137,(0),null);
var args = vec__51137;
var G__51140 = action;
var G__51140__$1 = (((G__51140 instanceof cljs.core.Keyword))?G__51140.fqn:null);
switch (G__51140__$1) {
case "update":
var extent = cljs.core.second.call(null,args);
if(cljs.core.truth_(self__.incremental_QMARK_)){
var extent_state = onyx.peer.window_state.default_state_value.call(null,self__.init_fn,self__.window,onyx.state.protocol.db.get_extent.call(null,self__.state_store,self__.idx,group_id,extent));
var next_extent_state = self__.apply_state_update.call(null,self__.window,extent_state,transition_entry);
return onyx.state.protocol.db.put_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,extent,next_extent_state);
} else {
if(cljs.core.truth_(self__.store_extents_QMARK_)){
return onyx.state.protocol.db.put_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,extent,null);
} else {
return null;
}
}

break;
case "merge-extents":
var vec__51141 = args;
var _ = cljs.core.nth.call(null,vec__51141,(0),null);
var extent_1 = cljs.core.nth.call(null,vec__51141,(1),null);
var extent_2 = cljs.core.nth.call(null,vec__51141,(2),null);
var extent_merged = cljs.core.nth.call(null,vec__51141,(3),null);
var agg_merged = self__.super_agg_fn.call(null,self__.window_extension,onyx.state.protocol.db.get_extent.call(null,self__.state_store,self__.idx,group_id,extent_1),onyx.state.protocol.db.get_extent.call(null,self__.state_store,self__.idx,group_id,extent_2));
onyx.state.protocol.db.put_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,extent_merged,agg_merged);

onyx.state.protocol.db.delete_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,extent_1);

return onyx.state.protocol.db.delete_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,extent_2);

break;
case "alter-extents":
var vec__51144 = args;
var _ = cljs.core.nth.call(null,vec__51144,(0),null);
var from_extent = cljs.core.nth.call(null,vec__51144,(1),null);
var to_extent = cljs.core.nth.call(null,vec__51144,(2),null);
var v = onyx.state.protocol.db.get_extent.call(null,self__.state_store,self__.idx,group_id,from_extent);
onyx.state.protocol.db.put_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,to_extent,v);

return onyx.state.protocol.db.delete_extent_BANG_.call(null,self__.state_store,self__.idx,group_id,from_extent);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join('')));

}
});})(map__51130,map__51130__$1,segment,group_id,time_index,operations,updated_extents,transition_entry,this$__$1))
,operations);

return cljs.core.assoc.call(null,state_event,new cljs.core.Keyword(null,"extents","extents",-1127971346),updated_extents);
});

onyx.peer.window_state.WindowExecutor.prototype.onyx$peer$window_state$StateEventReducer$apply_event$arity$2 = (function (this$,state_event){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(state_event),new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380))){
this$__$1.onyx$peer$window_state$StateEventReducer$segment_triggers_BANG_$arity$2(null,this$__$1.onyx$peer$window_state$StateEventReducer$apply_extents$arity$2(null,state_event));
} else {
this$__$1.onyx$peer$window_state$StateEventReducer$all_triggers_BANG_$arity$2(null,state_event);
}

return this$__$1;
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),null,new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278),null,new cljs.core.Keyword(null,"event-results","event-results",723394659),null,new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),null,new cljs.core.Keyword(null,"window-extension","window-extension",765968263),null,new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),null,new cljs.core.Keyword(null,"triggers","triggers",-1443678770),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"grouped?","grouped?",531080948),null,new cljs.core.Keyword(null,"state-store","state-store",-1000263756),null,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),null,new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"emitted","emitted",-974033604),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51105){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51147 = cljs.core.keyword_identical_QMARK_;
var expr__51148 = k__10902__auto__;
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"window-extension","window-extension",765968263),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(G__51105,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"grouped?","grouped?",531080948),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,G__51105,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"triggers","triggers",-1443678770),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,G__51105,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,G__51105,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,G__51105,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,G__51105,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"state-store","state-store",-1000263756),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,G__51105,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"init-fn","init-fn",777257971),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,G__51105,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"emitted","emitted",-974033604),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,G__51105,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,G__51105,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,G__51105,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,G__51105,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"event-results","event-results",723394659),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,G__51105,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,G__51105,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,G__51105,self__.store_extents_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51147.call(null,new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278),expr__51148))){
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,G__51105,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51105),null));
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
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-extension","window-extension",765968263),self__.window_extension],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grouped?","grouped?",531080948),self__.grouped_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"triggers","triggers",-1443678770),self__.triggers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state-store","state-store",-1000263756),self__.state_store],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-fn","init-fn",777257971),self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"emitted","emitted",-974033604),self__.emitted],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),self__.create_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),self__.apply_state_update],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),self__.super_agg_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-results","event-results",723394659),self__.event_results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),self__.ordered_log_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),self__.incremental_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278),self__.store_extents_QMARK_],null))], null),self__.__extmap));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51105){
var self__ = this;
var this__10893__auto____$1 = this;
return (new onyx.peer.window_state.WindowExecutor(self__.window_extension,self__.grouped_QMARK_,self__.triggers,self__.window,self__.id,self__.idx,self__.state_store,self__.init_fn,self__.emitted,self__.create_state_update,self__.apply_state_update,self__.super_agg_fn,self__.event_results,self__.ordered_log_QMARK_,self__.incremental_QMARK_,self__.store_extents_QMARK_,G__51105,self__.__extmap,self__.__hash));
});

onyx.peer.window_state.WindowExecutor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

onyx.peer.window_state.WindowExecutor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window-extension","window-extension",-1888467506,null),new cljs.core.Symbol(null,"grouped?","grouped?",-2123354821,null),new cljs.core.Symbol(null,"triggers","triggers",196852757,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Symbol(null,"state-store","state-store",640267771,null),new cljs.core.Symbol(null,"init-fn","init-fn",-1877177798,null),new cljs.core.Symbol(null,"emitted","emitted",666497923,null),new cljs.core.Symbol(null,"create-state-update","create-state-update",1628864114,null),new cljs.core.Symbol(null,"apply-state-update","apply-state-update",14097847,null),new cljs.core.Symbol(null,"super-agg-fn","super-agg-fn",1840678541,null),new cljs.core.Symbol(null,"event-results","event-results",-1931041110,null),new cljs.core.Symbol(null,"ordered-log?","ordered-log?",-563791065,null),new cljs.core.Symbol(null,"incremental?","incremental?",-579829828,null),new cljs.core.Symbol(null,"store-extents?","store-extents?",700938249,null)], null);
});

onyx.peer.window_state.WindowExecutor.cljs$lang$type = true;

onyx.peer.window_state.WindowExecutor.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.peer.window-state/WindowExecutor");
});

onyx.peer.window_state.WindowExecutor.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"onyx.peer.window-state/WindowExecutor");
});

onyx.peer.window_state.__GT_WindowExecutor = (function onyx$peer$window_state$__GT_WindowExecutor(window_extension,grouped_QMARK_,triggers,window,id,idx,state_store,init_fn,emitted,create_state_update,apply_state_update,super_agg_fn,event_results,ordered_log_QMARK_,incremental_QMARK_,store_extents_QMARK_){
return (new onyx.peer.window_state.WindowExecutor(window_extension,grouped_QMARK_,triggers,window,id,idx,state_store,init_fn,emitted,create_state_update,apply_state_update,super_agg_fn,event_results,ordered_log_QMARK_,incremental_QMARK_,store_extents_QMARK_,null,null,null));
});

onyx.peer.window_state.map__GT_WindowExecutor = (function onyx$peer$window_state$map__GT_WindowExecutor(G__51107){
return (new onyx.peer.window_state.WindowExecutor(new cljs.core.Keyword(null,"window-extension","window-extension",765968263).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"grouped?","grouped?",531080948).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"triggers","triggers",-1443678770).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"state-store","state-store",-1000263756).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"init-fn","init-fn",777257971).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"emitted","emitted",-974033604).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"event-results","event-results",723394659).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"incremental?","incremental?",2074605941).cljs$core$IFn$_invoke$arity$1(G__51107),new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278).cljs$core$IFn$_invoke$arity$1(G__51107),null,cljs.core.dissoc.call(null,G__51107,new cljs.core.Keyword(null,"window-extension","window-extension",765968263),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"state-store","state-store",-1000263756),new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"emitted","emitted",-974033604),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),new cljs.core.Keyword(null,"event-results","event-results",723394659),new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278)),null));
});

onyx.peer.window_state.fire_state_event = (function onyx$peer$window_state$fire_state_event(windows_state,state_event){
return cljs.core.mapv.call(null,(function (ws){
return onyx.peer.window_state.apply_event.call(null,ws,state_event);
}),windows_state);
});

//# sourceMappingURL=window_state.js.map