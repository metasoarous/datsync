// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.flow_conditions.fc_routing');
goog.require('cljs.core');
goog.require('onyx.static$.util');
goog.require('onyx.types');
onyx.flow_conditions.fc_routing.join_output_paths = (function onyx$flow_conditions$fc_routing$join_output_paths(all,to_add,downstream){
if(cljs.core._EQ_.call(null,to_add,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.set.call(null,downstream);
} else {
if(cljs.core._EQ_.call(null,to_add,new cljs.core.Keyword(null,"none","none",1333468478))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.into.call(null,cljs.core.set.call(null,all),to_add);

}
}
});
onyx.flow_conditions.fc_routing.maybe_attach_segment = (function onyx$flow_conditions$fc_routing$maybe_attach_segment(e,task_id,segment){
return e;
});
onyx.flow_conditions.fc_routing.choose_output_paths = (function onyx$flow_conditions$fc_routing$choose_output_paths(event,compiled_flow_conditions,result,message,downstream){
return cljs.core.reduce.call(null,(function (p__39536,entry){
var map__39537 = p__39536;
var map__39537__$1 = ((((!((map__39537 == null)))?((((map__39537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39537):map__39537);
var all = map__39537__$1;
var flow = cljs.core.get.call(null,map__39537__$1,new cljs.core.Keyword(null,"flow","flow",590489032));
var exclusions = cljs.core.get.call(null,map__39537__$1,new cljs.core.Keyword(null,"exclusions","exclusions",1098729003));
var pred_result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),true,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926).cljs$core$IFn$_invoke$arity$1(entry).call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(result),message,new cljs.core.Keyword(null,"leaves","leaves",-2143630574).cljs$core$IFn$_invoke$arity$1(result)], null))], null);
}catch (e39539){if((e39539 instanceof Error)){
var t = e39539;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success?","success?",-122854052),false,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"new","new",-2085437848),message,new cljs.core.Keyword(null,"exception","exception",-335277064),t], null)], null);
} else {
throw e39539;

}
}})();
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(pred_result))){
return cljs.core.reduced.call(null,onyx.types.__GT_Route.call(null,onyx.flow_conditions.fc_routing.join_output_paths.call(null,flow,new cljs.core.Keyword("flow","predicate-errors-to","flow/predicate-errors-to",1617369323).cljs$core$IFn$_invoke$arity$1(entry),downstream),cljs.core.into.call(null,cljs.core.set.call(null,exclusions),new cljs.core.Keyword("flow","exclude-keys","flow/exclude-keys",-1649393939).cljs$core$IFn$_invoke$arity$1(entry)),new cljs.core.Keyword("flow","post-transform","flow/post-transform",38759804).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword("flow","action","flow/action",-1393198010).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(pred_result)));
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = new cljs.core.Keyword(null,"success?","success?",-122854052).cljs$core$IFn$_invoke$arity$1(pred_result);
if(cljs.core.truth_(and__10207__auto__)){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(pred_result);
} else {
return and__10207__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword("flow","short-circuit?","flow/short-circuit?",1461327862).cljs$core$IFn$_invoke$arity$1(entry))){
return cljs.core.reduced.call(null,onyx.types.__GT_Route.call(null,onyx.flow_conditions.fc_routing.join_output_paths.call(null,flow,new cljs.core.Keyword("flow","to","flow/to",188953993).cljs$core$IFn$_invoke$arity$1(entry),downstream),cljs.core.into.call(null,cljs.core.set.call(null,exclusions),new cljs.core.Keyword("flow","exclude-keys","flow/exclude-keys",-1649393939).cljs$core$IFn$_invoke$arity$1(entry)),new cljs.core.Keyword("flow","post-transform","flow/post-transform",38759804).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword("flow","action","flow/action",-1393198010).cljs$core$IFn$_invoke$arity$1(entry),null));
} else {
return onyx.types.__GT_Route.call(null,onyx.flow_conditions.fc_routing.join_output_paths.call(null,flow,new cljs.core.Keyword("flow","to","flow/to",188953993).cljs$core$IFn$_invoke$arity$1(entry),downstream),cljs.core.into.call(null,cljs.core.set.call(null,exclusions),new cljs.core.Keyword("flow","exclude-keys","flow/exclude-keys",-1649393939).cljs$core$IFn$_invoke$arity$1(entry)),null,null,null);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("flow","action","flow/action",-1393198010).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"retry","retry",-614012896))){
return onyx.types.__GT_Route.call(null,onyx.flow_conditions.fc_routing.join_output_paths.call(null,flow,new cljs.core.Keyword("flow","to","flow/to",188953993).cljs$core$IFn$_invoke$arity$1(entry),downstream),cljs.core.into.call(null,cljs.core.set.call(null,exclusions),new cljs.core.Keyword("flow","exclude-keys","flow/exclude-keys",-1649393939).cljs$core$IFn$_invoke$arity$1(entry)),null,null,null);
} else {
return all;

}
}
}
}),onyx.types.__GT_Route.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null,null),compiled_flow_conditions);
});
onyx.flow_conditions.fc_routing.route_data = (function onyx$flow_conditions$fc_routing$route_data(p__39540,result,message){
var map__39547 = p__39540;
var map__39547__$1 = ((((!((map__39547 == null)))?((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39547):map__39547);
var event = map__39547__$1;
var egress_tasks = cljs.core.get.call(null,map__39547__$1,new cljs.core.Keyword(null,"egress-tasks","egress-tasks",-609839620));
var flow_conditions = cljs.core.get.call(null,map__39547__$1,new cljs.core.Keyword("onyx.core","flow-conditions","onyx.core/flow-conditions",328485226));
if((new cljs.core.Keyword("onyx.core","flow-conditions","onyx.core/flow-conditions",328485226).cljs$core$IFn$_invoke$arity$1(event) == null)){
if(cljs.core.truth_(onyx.static$.util.exception_QMARK_.call(null,message))){
var map__39549 = cljs.core.ex_data.call(null,message);
var map__39549__$1 = ((((!((map__39549 == null)))?((((map__39549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39549):map__39549);
var exception = cljs.core.get.call(null,map__39549__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var segment = cljs.core.get.call(null,map__39549__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
throw onyx.flow_conditions.fc_routing.maybe_attach_segment.call(null,exception,new cljs.core.Keyword("onyx.core","task-id","onyx.core/task-id",2120719255).cljs$core$IFn$_invoke$arity$1(event),segment);
} else {
return onyx.types.__GT_Route.call(null,egress_tasks,null,null,null,null);
}
} else {
if(cljs.core.truth_(onyx.static$.util.exception_QMARK_.call(null,message))){
var temp__6736__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"compiled-ex-fcs","compiled-ex-fcs",-1054783940).cljs$core$IFn$_invoke$arity$1(event));
if(temp__6736__auto__){
var compiled_ex_fcs = temp__6736__auto__;
return onyx.flow_conditions.fc_routing.choose_output_paths.call(null,event,compiled_ex_fcs,result,new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,message)),egress_tasks);
} else {
var map__39551 = cljs.core.ex_data.call(null,message);
var map__39551__$1 = ((((!((map__39551 == null)))?((((map__39551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39551):map__39551);
var exception = cljs.core.get.call(null,map__39551__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var segment = cljs.core.get.call(null,map__39551__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
throw onyx.flow_conditions.fc_routing.maybe_attach_segment.call(null,exception,new cljs.core.Keyword("onyx.core","task-id","onyx.core/task-id",2120719255).cljs$core$IFn$_invoke$arity$1(event),segment);
}
} else {
var temp__6736__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"compiled-norm-fcs","compiled-norm-fcs",1899229878).cljs$core$IFn$_invoke$arity$1(event));
if(temp__6736__auto__){
var compiled_norm_fcs = temp__6736__auto__;
return onyx.flow_conditions.fc_routing.choose_output_paths.call(null,event,compiled_norm_fcs,result,message,egress_tasks);
} else {
return onyx.types.__GT_Route.call(null,egress_tasks,null,null,null,null);
}
}
}
});
onyx.flow_conditions.fc_routing.apply_post_transformation = (function onyx$flow_conditions$fc_routing$apply_post_transformation(message,routes,event){
var post_transformation = new cljs.core.Keyword(null,"post-transformation","post-transformation",-2056337867).cljs$core$IFn$_invoke$arity$1(routes);
var pred_failure = new cljs.core.Keyword(null,"pred-failure","pred-failure",1645344004).cljs$core$IFn$_invoke$arity$1(routes);
var msg = (cljs.core.truth_(pred_failure)?(cljs.core.truth_(post_transformation)?(function (){var f = onyx.static$.util.kw__GT_fn.call(null,post_transformation);
var message_ks = cljs.core.select_keys.call(null,pred_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"new","new",-2085437848)], null));
return f.call(null,event,message_ks,new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(pred_failure));
})():(function(){throw new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(pred_failure)})()):(cljs.core.truth_((function (){var and__10207__auto__ = onyx.static$.util.exception_QMARK_.call(null,message);
if(cljs.core.truth_(and__10207__auto__)){
return post_transformation;
} else {
return and__10207__auto__;
}
})())?(function (){var data = cljs.core.ex_data.call(null,message);
var f = onyx.static$.util.kw__GT_fn.call(null,post_transformation);
return f.call(null,event,new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(data));
})():message
));
return cljs.core.reduce.call(null,cljs.core.dissoc,msg,new cljs.core.Keyword(null,"exclusions","exclusions",1098729003).cljs$core$IFn$_invoke$arity$1(routes));
});
onyx.flow_conditions.fc_routing.flow_conditions_transform = (function onyx$flow_conditions$fc_routing$flow_conditions_transform(message,routes,event){
if(cljs.core.truth_(new cljs.core.Keyword("onyx.core","flow-conditions","onyx.core/flow-conditions",328485226).cljs$core$IFn$_invoke$arity$1(event))){
return onyx.flow_conditions.fc_routing.apply_post_transformation.call(null,message,routes,event);
} else {
return message;
}
});

//# sourceMappingURL=fc_routing.js.map