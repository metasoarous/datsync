// Compiled by ClojureScript 1.9.542 {}
goog.provide('jx.reporter.karma');
goog.require('cljs.core');
goog.require('cljs.test');
jx.reporter.karma.karma = cljs.core.volatile_BANG_.call(null,null);
jx.reporter.karma.karma_QMARK_ = (function jx$reporter$karma$karma_QMARK_(){
return !((cljs.core.deref.call(null,jx.reporter.karma.karma) == null));
});
jx.reporter.karma.karma_info_BANG_ = (function jx$reporter$karma$karma_info_BANG_(m){
return cljs.core.deref.call(null,jx.reporter.karma.karma).info(cljs.core.clj__GT_js.call(null,m));
});
jx.reporter.karma.karma_result_BANG_ = (function jx$reporter$karma$karma_result_BANG_(m){
return cljs.core.deref.call(null,jx.reporter.karma.karma).result(cljs.core.clj__GT_js.call(null,m));
});
jx.reporter.karma.karma_complete_BANG_ = (function jx$reporter$karma$karma_complete_BANG_(){
return cljs.core.deref.call(null,jx.reporter.karma.karma).complete(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY));
});
jx.reporter.karma.now = (function jx$reporter$karma$now(){
return (new Date()).getTime();
});
jx.reporter.karma.test_var_result = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
jx.reporter.karma.test_var_time_start = cljs.core.volatile_BANG_.call(null,jx.reporter.karma.now.call(null));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"karma","karma",1375588493),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return cljs.core.vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.PersistentVector.EMPTY);
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
var var_meta = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(m));
var result = new cljs.core.PersistentArrayMap(null, 6, ["suite",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var_meta)], null),"description",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var_meta),"success",(cljs.core.count.call(null,cljs.core.deref.call(null,jx.reporter.karma.test_var_result)) === (0)),"skipped",null,"time",(jx.reporter.karma.now.call(null) - cljs.core.deref.call(null,jx.reporter.karma.test_var_time_start)),"log",cljs.core.map.call(null,((function (var_meta){
return (function (p1__50960_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fail "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.test.testing_vars_str.call(null,p1__50960_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(p1__50960_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Actual: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(p1__50960_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(var_meta))
,cljs.core.deref.call(null,jx.reporter.karma.test_var_result))], null);
if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return jx.reporter.karma.karma_result_BANG_.call(null,result);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

return cljs.core._vreset_BANG_.call(null,jx.reporter.karma.test_var_result,cljs.core.conj.call(null,cljs.core._deref.call(null,jx.reporter.karma.test_var_result),m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return jx.reporter.karma.karma_complete_BANG_.call(null);
} else {
return null;
}
}));
jx.reporter.karma.start = (function jx$reporter$karma$start(tc,total_count){
cljs.core.vreset_BANG_.call(null,jx.reporter.karma.karma,tc);

if(cljs.core.truth_(jx.reporter.karma.karma_QMARK_.call(null))){
return jx.reporter.karma.karma_info_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),total_count], null));
} else {
return null;
}
});

//# sourceMappingURL=karma.js.map