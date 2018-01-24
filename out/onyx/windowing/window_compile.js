// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.windowing.window_compile');
goog.require('cljs.core');
goog.require('onyx.windowing.window_extensions');
goog.require('onyx.windowing.aggregation');
goog.require('onyx.peer.window_state');
goog.require('onyx.types');
goog.require('onyx.state.memory');
goog.require('onyx.static$.util');
goog.require('onyx.peer.grouping');
onyx.windowing.window_compile.filter_windows = (function onyx$windowing$window_compile$filter_windows(windows,task){
return cljs.core.filter.call(null,(function (p1__39663_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("window","task","window/task",-720839305).cljs$core$IFn$_invoke$arity$1(p1__39663_SHARP_),task);
}),windows);
});
onyx.windowing.window_compile.resolve_window_init = (function onyx$windowing$window_compile$resolve_window_init(window,calls){
if(cljs.core.not.call(null,new cljs.core.Keyword("aggregation","init","aggregation/init",634160316).cljs$core$IFn$_invoke$arity$1(calls))){
var init = new cljs.core.Keyword("window","init","window/init",-987606858).cljs$core$IFn$_invoke$arity$1(window);
if(cljs.core.truth_(init)){
} else {
throw cljs.core.ex_info.call(null,"No :window/init supplied, this is required for this aggregation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),window], null));
}

return cljs.core.constantly.call(null,new cljs.core.Keyword("window","init","window/init",-987606858).cljs$core$IFn$_invoke$arity$1(window));
} else {
return new cljs.core.Keyword("aggregation","init","aggregation/init",634160316).cljs$core$IFn$_invoke$arity$1(calls);
}
});
onyx.windowing.window_compile.resolve_var = (function onyx$windowing$window_compile$resolve_var(v){
return v;
});
onyx.windowing.window_compile.filter_ns_key_map = (function onyx$windowing$window_compile$filter_ns_key_map(m,ns_str){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39672){
var vec__39673 = p__39672;
var k = cljs.core.nth.call(null,vec__39673,(0),null);
var v = cljs.core.nth.call(null,vec__39673,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.name.call(null,k)),v], null);
}),cljs.core.filter.call(null,(function (p__39676){
var vec__39677 = p__39676;
var k = cljs.core.nth.call(null,vec__39677,(0),null);
var _ = cljs.core.nth.call(null,vec__39677,(1),null);
return cljs.core._EQ_.call(null,ns_str,cljs.core.namespace.call(null,k));
}),m)));
});
onyx.windowing.window_compile.resolve_trigger = (function onyx$windowing$window_compile$resolve_trigger(indices,p__39680){
var map__39683 = p__39680;
var map__39683__$1 = ((((!((map__39683 == null)))?((((map__39683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39683):map__39683);
var trigger = map__39683__$1;
var sync = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","sync","trigger/sync",500894838));
var emit = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","emit","trigger/emit",-76016066));
var refinement = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","refinement","trigger/refinement",-1212299589));
var on = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","on","trigger/on",-836079968));
var id = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","id","trigger/id",-326368132));
var window_id = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377));
var state_context = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","state-context","trigger/state-context",-1043486338));
var pre_evictor = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","pre-evictor","trigger/pre-evictor",1379683944));
var post_evictor = cljs.core.get.call(null,map__39683__$1,new cljs.core.Keyword("trigger","post-evictor","trigger/post-evictor",-1705934992));
var refinement_calls = (cljs.core.truth_(refinement)?onyx.windowing.window_compile.resolve_var.call(null,onyx.static$.util.kw__GT_fn.call(null,refinement)):null);
var trigger_calls = onyx.windowing.window_compile.resolve_var.call(null,onyx.static$.util.kw__GT_fn.call(null,on));
var f_init_state = new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828).cljs$core$IFn$_invoke$arity$1(trigger_calls);
var f_init_locals = new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138).cljs$core$IFn$_invoke$arity$1(trigger_calls);
var sync_fn = (cljs.core.truth_(sync)?onyx.static$.util.kw__GT_fn.call(null,sync):null);
var emit_fn = (cljs.core.truth_(emit)?onyx.static$.util.kw__GT_fn.call(null,emit):null);
var locals = f_init_locals.call(null,trigger);
return onyx.types.map__GT_TriggerState.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.into.call(null,onyx.windowing.window_compile.filter_ns_key_map.call(null,trigger,"trigger"),locals),new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger),new cljs.core.Keyword(null,"state-context-window?","state-context-window?",-1352172846),cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window-state","window-state",1569528552),null], null), null),state_context))),new cljs.core.Keyword(null,"state-context-trigger?","state-context-trigger?",-634792685),(cljs.core.empty_QMARK_.call(null,state_context)) || (cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger-state","trigger-state",-1285376437),null], null), null),state_context)))),new cljs.core.Keyword(null,"pre-evictor","pre-evictor",-1843414736),pre_evictor),new cljs.core.Keyword(null,"post-evictor","post-evictor",1538193448),post_evictor),new cljs.core.Keyword(null,"idx","idx",1053688473),(function (){var or__10219__auto__ = cljs.core.get.call(null,indices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,window_id], null));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,"Could not find state index for window id.",cljs.core.PersistentArrayMap.EMPTY);
}
})()),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("trigger","id","trigger/id",-326368132).cljs$core$IFn$_invoke$arity$1(trigger)),new cljs.core.Keyword(null,"sync-fn","sync-fn",1366504042),sync_fn),new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn),new cljs.core.Keyword(null,"init-state","init-state",1450863212),f_init_state),new cljs.core.Keyword(null,"next-trigger-state","next-trigger-state",-1017522059),new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884).cljs$core$IFn$_invoke$arity$1(trigger_calls)),new cljs.core.Keyword(null,"trigger-fire?","trigger-fire?",2098988312),new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648).cljs$core$IFn$_invoke$arity$1(trigger_calls)),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword("refinement","create-state-update","refinement/create-state-update",-1610669832).cljs$core$IFn$_invoke$arity$1(refinement_calls)),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword("refinement","apply-state-update","refinement/apply-state-update",-1044493007).cljs$core$IFn$_invoke$arity$1(refinement_calls)));
});
onyx.windowing.window_compile.resolve_window_extension = (function onyx$windowing$window_compile$resolve_window_extension(window){
return cljs.core.assoc.call(null,onyx.windowing.window_extensions.windowing_builder.call(null,window).call(null,onyx.windowing.window_compile.filter_ns_key_map.call(null,window,"window")),new cljs.core.Keyword(null,"window","window",724519534),window);
});
onyx.windowing.window_compile.build_window_executor = (function onyx$windowing$window_compile$build_window_executor(p__39686,all_triggers,state_store,indices,task_map){
var map__39689 = p__39686;
var map__39689__$1 = ((((!((map__39689 == null)))?((((map__39689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39689):map__39689);
var window = map__39689__$1;
var id = cljs.core.get.call(null,map__39689__$1,new cljs.core.Keyword("window","id","window/id",-62222780));
var storage_strategy = cljs.core.get.call(null,map__39689__$1,new cljs.core.Keyword("window","storage-strategy","window/storage-strategy",-1037386492));
var agg = new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window);
var agg_var = ((cljs.core.sequential_QMARK_.call(null,agg))?cljs.core.first.call(null,agg):agg);
var calls = onyx.windowing.window_compile.resolve_var.call(null,onyx.static$.util.kw__GT_fn.call(null,agg_var));
var f_init_locals = new cljs.core.Keyword("aggregation","init-locals","aggregation/init-locals",115643916).cljs$core$IFn$_invoke$arity$2(calls,cljs.core.identity);
var locals = f_init_locals.call(null,window);
var window__$1 = cljs.core.into.call(null,window,locals);
var init_fn = onyx.windowing.window_compile.resolve_window_init.call(null,window__$1,calls);
var triggers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.identity),cljs.core.map.call(null,cljs.core.partial.call(null,onyx.windowing.window_compile.resolve_trigger,indices),cljs.core.filter.call(null,((function (agg,agg_var,calls,f_init_locals,locals,window__$1,init_fn,map__39689,map__39689__$1,window,id,storage_strategy){
return (function (p1__39685_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("window","id","window/id",-62222780).cljs$core$IFn$_invoke$arity$1(window__$1),new cljs.core.Keyword("trigger","window-id","trigger/window-id",-472875377).cljs$core$IFn$_invoke$arity$1(p1__39685_SHARP_));
});})(agg,agg_var,calls,f_init_locals,locals,window__$1,init_fn,map__39689,map__39689__$1,window,id,storage_strategy))
,all_triggers))));
return onyx.peer.window_state.map__GT_WindowExecutor.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ordered-log?","ordered-log?",2090644704),new cljs.core.Keyword(null,"store-extents?","store-extents?",-939593278),new cljs.core.Keyword(null,"super-agg-fn","super-agg-fn",200147014),new cljs.core.Keyword(null,"window-extension","window-extension",765968263),new cljs.core.Keyword(null,"create-state-update","create-state-update",-11667413),new cljs.core.Keyword(null,"triggers","triggers",-1443678770),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"apply-state-update","apply-state-update",-1626433680),new cljs.core.Keyword(null,"init-fn","init-fn",777257971),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"state-store","state-store",-1000263756),new cljs.core.Keyword(null,"incremental?","incremental?",2074605941),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"emitted","emitted",-974033604)],[cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ordered-log","ordered-log",121104943),null], null), null),storage_strategy)),cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extents","extents",-1127971346),null], null), null),storage_strategy)),new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675).cljs$core$IFn$_invoke$arity$1(calls),onyx.windowing.window_compile.resolve_window_extension.call(null,window__$1),new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135).cljs$core$IFn$_invoke$arity$1(calls),triggers,window__$1,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530).cljs$core$IFn$_invoke$arity$1(calls),init_fn,id,state_store,(cljs.core.empty_QMARK_.call(null,storage_strategy)) || (cljs.core.boolean$.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"incremental","incremental",-84630877),null], null), null),storage_strategy))),cljs.core.get.call(null,indices,id),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)]));
});

//# sourceMappingURL=window_compile.js.map