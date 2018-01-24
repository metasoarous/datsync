// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.test.datascript_pr');
goog.require('cljs.core');
goog.require('dat.sync.datascript_pr');
goog.require('datascript.core');
goog.require('datahike.core');
goog.require('cljs.test');
dat.sync.test.datascript_pr.test_with = (function dat$sync$test$datascript_pr$test_with(){
return cljs.test.test_var.call(null,dat.sync.test.datascript_pr.test_with.cljs$lang$var);
});
dat.sync.test.datascript_pr.test_with.cljs$lang$test = (function (){
var db = dat.sync.datascript_pr.db_with.call(null,dat.sync.datascript_pr.schema_db.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword(null,"test-attr","test-attr",-959695080),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null)], null),dat.sync.datascript_pr.schema_meta);
try{var values__11642__auto__ = (function (){var x__11153__auto__ = new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"test-attr","test-attr",-959695080).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),x__11153__auto__);
})();
var result__11643__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11642__auto__);
if(cljs.core.truth_(result__11643__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"test-attr","test-attr",-959695080),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__11642__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"test-attr","test-attr",-959695080),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__11153__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11642__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11643__auto__;
}catch (e39163){var t__11680__auto__ = e39163;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"test-attr","test-attr",-959695080),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11680__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

dat.sync.test.datascript_pr.test_with.cljs$lang$var = new cljs.core.Var(function(){return dat.sync.test.datascript_pr.test_with;},new cljs.core.Symbol("dat.sync.test.datascript-pr","test-with","dat.sync.test.datascript-pr/test-with",-859985158,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Symbol(null,"test-with","test-with",-70141604,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/datascript_pr.cljc",19,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.datascript_pr.test_with)?dat.sync.test.datascript_pr.test_with.cljs$lang$test:null)]));

//# sourceMappingURL=datascript_pr.js.map