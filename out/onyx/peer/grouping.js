// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.peer.grouping');
goog.require('cljs.core');
goog.require('onyx.peer.operation');
onyx.peer.grouping.task_map__GT_grouping_fn = (function onyx$peer$grouping$task_map__GT_grouping_fn(task_map){
var temp__6736__auto__ = new cljs.core.Keyword("onyx","group-by-key","onyx/group-by-key",1014495201).cljs$core$IFn$_invoke$arity$1(task_map);
if(cljs.core.truth_(temp__6736__auto__)){
var group_key = temp__6736__auto__;
if((group_key instanceof cljs.core.Keyword)){
return group_key;
} else {
if(cljs.core.sequential_QMARK_.call(null,group_key)){
return ((function (group_key,temp__6736__auto__){
return (function (p1__12750_SHARP_){
return cljs.core.select_keys.call(null,p1__12750_SHARP_,group_key);
});
;})(group_key,temp__6736__auto__))
} else {
return ((function (group_key,temp__6736__auto__){
return (function (p1__12751_SHARP_){
return cljs.core.get.call(null,p1__12751_SHARP_,group_key);
});
;})(group_key,temp__6736__auto__))

}
}
} else {
var temp__6736__auto____$1 = new cljs.core.Keyword("onyx","group-by-fn","onyx/group-by-fn",-260492431).cljs$core$IFn$_invoke$arity$1(task_map);
if(cljs.core.truth_(temp__6736__auto____$1)){
var group_fn = temp__6736__auto____$1;
return onyx.peer.operation.resolve_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("onyx","group-by-fn","onyx/group-by-fn",-260492431).cljs$core$IFn$_invoke$arity$1(task_map)], null));
} else {
return null;
}
}
});
/**
 * Compiles outgoing grouping task info into a task->group-fn map
 *   for quick lookup and group fn calls
 */
onyx.peer.grouping.compile_grouping_fn = (function onyx$peer$grouping$compile_grouping_fn(catalog,egress_tasks){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p__12756){
var vec__12757 = p__12756;
var n = cljs.core.nth.call(null,vec__12757,(0),null);
var f = cljs.core.nth.call(null,vec__12757,(1),null);
var and__10207__auto__ = f;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = egress_tasks;
if(cljs.core.truth_(and__10207__auto____$1)){
return egress_tasks.call(null,n);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
}),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword("onyx","name","onyx/name",1848664427),onyx.peer.grouping.task_map__GT_grouping_fn),catalog)));
});
onyx.peer.grouping.grouped_task_QMARK_ = (function onyx$peer$grouping$grouped_task_QMARK_(task_map){
return cljs.core.boolean$.call(null,(function (){var or__10219__auto__ = new cljs.core.Keyword("onyx","group-by-key","onyx/group-by-key",1014495201).cljs$core$IFn$_invoke$arity$1(task_map);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword("onyx","group-by-fn","onyx/group-by-fn",-260492431).cljs$core$IFn$_invoke$arity$1(task_map);
}
})());
});

//# sourceMappingURL=grouping.js.map