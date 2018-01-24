// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.graph');
goog.require('cljs.core');
posh.lib.graph.new_graph = (function posh$lib$graph$new_graph(){
return cljs.core.PersistentArrayMap.EMPTY;
});
posh.lib.graph.add_item = (function posh$lib$graph$add_item(graph,item_k){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([item_k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentHashSet.EMPTY], null)]),graph);
});
posh.lib.graph.add_input = (function posh$lib$graph$add_input(graph,item_k,input){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.conj,input);
});
posh.lib.graph.add_output = (function posh$lib$graph$add_output(graph,item_k,output){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null),cljs.core.conj,output);
});
posh.lib.graph.add_item_full = (function posh$lib$graph$add_item_full(graph,item_k,inputs,outputs){
return cljs.core.reduce.call(null,(function (gr,input){
return posh.lib.graph.add_input.call(null,gr,item_k,input);
}),cljs.core.reduce.call(null,(function (gr,output){
return posh.lib.graph.add_output.call(null,gr,item_k,output);
}),posh.lib.graph.add_item.call(null,graph,item_k),outputs),inputs);
});
posh.lib.graph.add_item_connect = (function posh$lib$graph$add_item_connect(graph,item_k,inputs){
return cljs.core.reduce.call(null,(function (gr,input){
return posh.lib.graph.add_output.call(null,posh.lib.graph.add_input.call(null,gr,item_k,input),input,item_k);
}),posh.lib.graph.add_item.call(null,graph,item_k),inputs);
});
posh.lib.graph.remove_input = (function posh$lib$graph$remove_input(graph,item_k,input){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,new cljs.core.Keyword(null,"inputs","inputs",865803858)], null),cljs.core.disj,input);
});
posh.lib.graph.remove_output = (function posh$lib$graph$remove_output(graph,item_k,output){
return cljs.core.update_in.call(null,graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null),cljs.core.disj,output);
});
posh.lib.graph.remove_dep = (function posh$lib$graph$remove_dep(graph,k,dep_k){
return cljs.core.update.call(null,graph,k,(function (p1__41689_SHARP_){
return cljs.core.disj.call(null,p1__41689_SHARP_,dep_k);
}));
});
posh.lib.graph.remove_item = (function posh$lib$graph$remove_item(graph,item_k){
var temp__6736__auto__ = cljs.core.get.call(null,graph,item_k);
if(cljs.core.truth_(temp__6736__auto__)){
var map__41692 = temp__6736__auto__;
var map__41692__$1 = ((((!((map__41692 == null)))?((((map__41692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41692):map__41692);
var inputs = cljs.core.get.call(null,map__41692__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var outputs = cljs.core.get.call(null,map__41692__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
return cljs.core.dissoc.call(null,cljs.core.reduce.call(null,((function (map__41692,map__41692__$1,inputs,outputs,temp__6736__auto__){
return (function (gr,output_k){
return posh.lib.graph.remove_output.call(null,gr,output_k,item_k);
});})(map__41692,map__41692__$1,inputs,outputs,temp__6736__auto__))
,cljs.core.reduce.call(null,posh.lib.graph.remove_item,graph,outputs),inputs),item_k);
} else {
return graph;
}
});

//# sourceMappingURL=graph.js.map