// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.flow_conditions.fc_compile');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('onyx.static$.util');
onyx.flow_conditions.fc_compile.pred_fn_QMARK_ = (function onyx$flow_conditions$fc_compile$pred_fn_QMARK_(expr){
return ((expr instanceof cljs.core.Keyword)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"and","and",-971899817),expr)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"or","or",235744169),expr)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"not","not",-595976884),expr));
});
onyx.flow_conditions.fc_compile.build_pred_fn = (function onyx$flow_conditions$fc_compile$build_pred_fn(expr,entry){
if(cljs.core.truth_(onyx.flow_conditions.fc_compile.pred_fn_QMARK_.call(null,expr))){
return (function (xs){
return cljs.core.apply.call(null,onyx.static$.util.kw__GT_fn.call(null,expr),xs);
});
} else {
var vec__39474 = expr;
var seq__39475 = cljs.core.seq.call(null,vec__39474);
var first__39476 = cljs.core.first.call(null,seq__39475);
var seq__39475__$1 = cljs.core.next.call(null,seq__39475);
var op = first__39476;
var more = seq__39475__$1;
var full_expr = vec__39474;
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"and","and",-971899817))){
if((cljs.core.count.call(null,more) > (1))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":and takes at least two predicates"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(> (count more) 1)")].join('')));
}

return ((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (xs){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (token){
return onyx.flow_conditions.fc_compile.build_pred_fn.call(null,token,entry).call(null,xs);
});})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
,more));
});
;})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"or","or",235744169))){
if((cljs.core.count.call(null,more) > (1))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":or takes at least two predicates"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(> (count more) 1)")].join('')));
}

return ((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (xs){
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (token){
return onyx.flow_conditions.fc_compile.build_pred_fn.call(null,token,entry).call(null,xs);
});})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
,more));
});
;})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"not","not",-595976884))){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,more))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":not only takes one predicate"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(= 1 (count more))")].join('')));
}

return ((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (xs){
return cljs.core.not.call(null,onyx.flow_conditions.fc_compile.build_pred_fn.call(null,cljs.core.first.call(null,more),entry).call(null,xs));
});
;})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
} else {
return ((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (xs){
return cljs.core.apply.call(null,onyx.static$.util.kw__GT_fn.call(null,op),cljs.core.concat.call(null,xs,cljs.core.map.call(null,((function (vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr){
return (function (arg){
return cljs.core.get.call(null,entry,arg);
});})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))
,more)));
});
;})(vec__39474,seq__39475,first__39476,seq__39475__$1,op,more,full_expr))

}
}
}
}
});
onyx.flow_conditions.fc_compile.egress_tasks = (function onyx$flow_conditions$fc_compile$egress_tasks(workflow,task){
return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p1__39477_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__39477_SHARP_),task);
}),workflow));
});
onyx.flow_conditions.fc_compile.only_relevant_branches = (function onyx$flow_conditions$fc_compile$only_relevant_branches(flow_conditions,workflow,task){
return cljs.core.filter.call(null,(function (p1__39478_SHARP_){
var or__10219__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("flow","from","flow/from",1812137506).cljs$core$IFn$_invoke$arity$1(p1__39478_SHARP_),task);
if(or__10219__auto__){
return or__10219__auto__;
} else {
var and__10207__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword("flow","from","flow/from",1812137506).cljs$core$IFn$_invoke$arity$1(p1__39478_SHARP_),new cljs.core.Keyword(null,"all","all",892129742));
if(and__10207__auto__){
var or__10219__auto____$1 = cljs.core._EQ_.call(null,new cljs.core.Keyword("flow","to","flow/to",188953993).cljs$core$IFn$_invoke$arity$1(p1__39478_SHARP_),new cljs.core.Keyword(null,"all","all",892129742));
if(or__10219__auto____$1){
return or__10219__auto____$1;
} else {
return clojure.set.subset_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("flow","to","flow/to",188953993).cljs$core$IFn$_invoke$arity$1(p1__39478_SHARP_)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,onyx.flow_conditions.fc_compile.egress_tasks.call(null,workflow,task)));
}
} else {
return and__10207__auto__;
}
}
}),flow_conditions);
});
onyx.flow_conditions.fc_compile.compile_flow_conditions = (function onyx$flow_conditions$fc_compile$compile_flow_conditions(flow_conditions,workflow,task_name,f){
var branches = onyx.flow_conditions.fc_compile.only_relevant_branches.call(null,flow_conditions,workflow,task_name);
var conditions = cljs.core.filter.call(null,f,branches);
return cljs.core.map.call(null,((function (branches,conditions){
return (function (condition){
return cljs.core.assoc.call(null,condition,new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),onyx.flow_conditions.fc_compile.build_pred_fn.call(null,new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926).cljs$core$IFn$_invoke$arity$1(condition),condition));
});})(branches,conditions))
,conditions);
});
onyx.flow_conditions.fc_compile.compile_fc_happy_path = (function onyx$flow_conditions$fc_compile$compile_fc_happy_path(flow_conditions,workflow,task_name){
return onyx.flow_conditions.fc_compile.compile_flow_conditions.call(null,flow_conditions,workflow,task_name,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword("flow","thrown-exception?","flow/thrown-exception?",-552689668)));
});
onyx.flow_conditions.fc_compile.compile_fc_exception_path = (function onyx$flow_conditions$fc_compile$compile_fc_exception_path(flow_conditions,workflow,task_name){
return onyx.flow_conditions.fc_compile.compile_flow_conditions.call(null,flow_conditions,workflow,task_name,new cljs.core.Keyword("flow","thrown-exception?","flow/thrown-exception?",-552689668));
});

//# sourceMappingURL=fc_compile.js.map