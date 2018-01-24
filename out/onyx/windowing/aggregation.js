// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.windowing.aggregation');
goog.require('cljs.core');
onyx.windowing.aggregation.set_value_aggregation_apply_log = (function onyx$windowing$aggregation$set_value_aggregation_apply_log(window,state,v){
return v;
});
onyx.windowing.aggregation.conj_aggregation_apply_log = (function onyx$windowing$aggregation$conj_aggregation_apply_log(window,state,v){
return cljs.core.conj.call(null,state,v);
});
onyx.windowing.aggregation.conj_aggregation_fn_init = (function onyx$windowing$aggregation$conj_aggregation_fn_init(window){
return cljs.core.PersistentVector.EMPTY;
});
onyx.windowing.aggregation.conj_aggregation_fn = (function onyx$windowing$aggregation$conj_aggregation_fn(window,segment){
return segment;
});
onyx.windowing.aggregation.conj_super_aggregation = (function onyx$windowing$aggregation$conj_super_aggregation(window,state_1,state_2){
return cljs.core.into.call(null,state_1,state_2);
});
onyx.windowing.aggregation.conj = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.conj_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.conj_aggregation_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.conj_aggregation_apply_log,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.conj_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.conj', onyx.windowing.aggregation.conj);
onyx.windowing.aggregation.collect_by_key_aggregation_fn_init = (function onyx$windowing$aggregation$collect_by_key_aggregation_fn_init(window){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.windowing.aggregation.collect_by_key_aggregation_apply_log = (function onyx$windowing$aggregation$collect_by_key_aggregation_apply_log(window,state,segment){
var k = cljs.core.get.call(null,segment,cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window)));
return cljs.core.update.call(null,state,k,cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),segment);
});
onyx.windowing.aggregation.collect_by_key_aggregation_fn = (function onyx$windowing$aggregation$collect_by_key_aggregation_fn(window,segment){
return segment;
});
onyx.windowing.aggregation.collect_by_key_super_aggregation = (function onyx$windowing$aggregation$collect_by_key_super_aggregation(window,state_1,state_2){
return cljs.core.merge.call(null,state_1,state_2);
});
onyx.windowing.aggregation.collect_by_key = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.collect_by_key_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.collect_by_key_aggregation_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.collect_by_key_aggregation_apply_log,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.collect_by_key_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.collect_by_key', onyx.windowing.aggregation.collect_by_key);
onyx.windowing.aggregation.collect_key_value_aggregation_apply_log = (function onyx$windowing$aggregation$collect_key_value_aggregation_apply_log(window,state,v){
return cljs.core.conj.call(null,state,v);
});
onyx.windowing.aggregation.collect_key_value_aggregation_fn_init = (function onyx$windowing$aggregation$collect_key_value_aggregation_fn_init(window){
return cljs.core.PersistentVector.EMPTY;
});
onyx.windowing.aggregation.collect_key_value_aggregation_fn = (function onyx$windowing$aggregation$collect_key_value_aggregation_fn(window,segment){
return cljs.core.get.call(null,segment,cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window)));
});
onyx.windowing.aggregation.collect_key_value_super_aggregation = (function onyx$windowing$aggregation$collect_key_value_super_aggregation(window,state_1,state_2){
return cljs.core.merge.call(null,state_1,state_2);
});
onyx.windowing.aggregation.collect_key_value = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.collect_key_value_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.collect_key_value_aggregation_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.collect_key_value_aggregation_apply_log,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.collect_key_value_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.collect_key_value', onyx.windowing.aggregation.collect_key_value);
onyx.windowing.aggregation.sum_aggregation_fn_init = (function onyx$windowing$aggregation$sum_aggregation_fn_init(window){
return (0);
});
onyx.windowing.aggregation.sum_create_state_update_fn = (function onyx$windowing$aggregation$sum_create_state_update_fn(window,segment){
var k = cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window));
return cljs.core.get.call(null,segment,k);
});
onyx.windowing.aggregation.sum_aggregation_function = (function onyx$windowing$aggregation$sum_aggregation_function(_,state,v){
return (state + v);
});
onyx.windowing.aggregation.sum_super_aggregation = (function onyx$windowing$aggregation$sum_super_aggregation(window,state_1,state_2){
return (state_1 + state_2);
});
onyx.windowing.aggregation.sum = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.sum_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.sum_create_state_update_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.sum_aggregation_function,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.sum_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.sum', onyx.windowing.aggregation.sum);
onyx.windowing.aggregation.count_aggregation_fn_init = (function onyx$windowing$aggregation$count_aggregation_fn_init(window){
return (0);
});
onyx.windowing.aggregation.count_aggregation_apply_fn = (function onyx$windowing$aggregation$count_aggregation_apply_fn(window,state,_){
return (state + (1));
});
onyx.windowing.aggregation.count_aggregation_create_state_update = (function onyx$windowing$aggregation$count_aggregation_create_state_update(_,___$1){
return null;
});
onyx.windowing.aggregation.count_super_aggregation = (function onyx$windowing$aggregation$count_super_aggregation(window,state_1,state_2){
return (state_1 + state_2);
});
onyx.windowing.aggregation.count = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.count_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.count_aggregation_create_state_update,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.count_aggregation_apply_fn,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.count_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.count', onyx.windowing.aggregation.count);
onyx.windowing.aggregation.min_aggregation_create_fn = (function onyx$windowing$aggregation$min_aggregation_create_fn(window,segment){
var k = cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window));
return cljs.core.get.call(null,segment,k);
});
onyx.windowing.aggregation.min_aggregation_apply_fn = (function onyx$windowing$aggregation$min_aggregation_apply_fn(window,state,v){
var x__10564__auto__ = state;
var y__10565__auto__ = v;
return ((x__10564__auto__ < y__10565__auto__) ? x__10564__auto__ : y__10565__auto__);
});
onyx.windowing.aggregation.min_super_aggregation = (function onyx$windowing$aggregation$min_super_aggregation(window,state_1,state_2){
var x__10564__auto__ = state_1;
var y__10565__auto__ = state_2;
return ((x__10564__auto__ < y__10565__auto__) ? x__10564__auto__ : y__10565__auto__);
});
onyx.windowing.aggregation.min = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.min_aggregation_create_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.min_aggregation_apply_fn,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.min_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.min', onyx.windowing.aggregation.min);
onyx.windowing.aggregation.max_aggregation_fn = (function onyx$windowing$aggregation$max_aggregation_fn(window,segment){
var k = cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window));
return cljs.core.get.call(null,segment,k);
});
onyx.windowing.aggregation.max_create_aggregation_apply_fn = (function onyx$windowing$aggregation$max_create_aggregation_apply_fn(window,state,v){
var x__10557__auto__ = state;
var y__10558__auto__ = v;
return ((x__10557__auto__ > y__10558__auto__) ? x__10557__auto__ : y__10558__auto__);
});
onyx.windowing.aggregation.max_super_aggregation = (function onyx$windowing$aggregation$max_super_aggregation(window,state_1,state_2){
var x__10557__auto__ = state_1;
var y__10558__auto__ = state_2;
return ((x__10557__auto__ > y__10558__auto__) ? x__10557__auto__ : y__10558__auto__);
});
onyx.windowing.aggregation.max = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.max_aggregation_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.max_create_aggregation_apply_fn,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.max_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.max', onyx.windowing.aggregation.max);
onyx.windowing.aggregation.average_aggregation_fn_init = (function onyx$windowing$aggregation$average_aggregation_fn_init(window){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sum","sum",136986814),(0),new cljs.core.Keyword(null,"n","n",562130025),(0)], null);
});
onyx.windowing.aggregation.average_aggregation_apply_fn = (function onyx$windowing$aggregation$average_aggregation_apply_fn(window,state,v){
var sum = (new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(state) + v);
var n = (new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(state) + (1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n","n",562130025),n,new cljs.core.Keyword(null,"sum","sum",136986814),sum,new cljs.core.Keyword(null,"average","average",-492356168),(sum / n)], null);
});
onyx.windowing.aggregation.average_aggregation_create_fn = (function onyx$windowing$aggregation$average_aggregation_create_fn(window,segment){
var k = cljs.core.second.call(null,new cljs.core.Keyword("window","aggregation","window/aggregation",842492712).cljs$core$IFn$_invoke$arity$1(window));
return cljs.core.get.call(null,segment,k);
});
onyx.windowing.aggregation.average_super_aggregation = (function onyx$windowing$aggregation$average_super_aggregation(window,state_1,state_2){
var n_STAR_ = (new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(state_1) + new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(state_2));
var sum_STAR_ = (new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(state_1) + new cljs.core.Keyword(null,"sum","sum",136986814).cljs$core$IFn$_invoke$arity$1(state_2));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n","n",562130025),n_STAR_,new cljs.core.Keyword(null,"sum","sum",136986814),sum_STAR_,new cljs.core.Keyword(null,"average","average",-492356168),(sum_STAR_ / n_STAR_)], null);
});
onyx.windowing.aggregation.average = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("aggregation","init","aggregation/init",634160316),onyx.windowing.aggregation.average_aggregation_fn_init,new cljs.core.Keyword("aggregation","create-state-update","aggregation/create-state-update",-1317662135),onyx.windowing.aggregation.average_aggregation_create_fn,new cljs.core.Keyword("aggregation","apply-state-update","aggregation/apply-state-update",1828155530),onyx.windowing.aggregation.average_aggregation_apply_fn,new cljs.core.Keyword("aggregation","super-aggregation-fn","aggregation/super-aggregation-fn",-682936675),onyx.windowing.aggregation.average_super_aggregation], null);
goog.exportSymbol('onyx.windowing.aggregation.average', onyx.windowing.aggregation.average);

//# sourceMappingURL=aggregation.js.map