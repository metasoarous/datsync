// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.test.core');
goog.require('cljs.core');
goog.require('dat.sync.db');
goog.require('dat.sync.db.datascript');
goog.require('dat.sync.db.datahike');
goog.require('dat.sync.core');
goog.require('dat.reactor.onyx');
goog.require('cljs.spec.alpha');
goog.require('cljs.test');
dat.sync.test.core.test_server = (function dat$sync$test$core$test_server(){
return cljs.test.test_var.call(null,dat.sync.test.core.test_server.cljs$lang$var);
});
dat.sync.test.core.test_server.cljs$lang$test = (function (){
var server = dat.sync.core.new_datsync_server.call(null);
try{var value__11645__auto__ = true;
if(value__11645__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),true,new cljs.core.Keyword(null,"actual","actual",107306363),value__11645__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),true,new cljs.core.Keyword(null,"actual","actual",107306363),value__11645__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__11645__auto__;
}catch (e37719){var t__11680__auto__ = e37719;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),true,new cljs.core.Keyword(null,"actual","actual",107306363),t__11680__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

dat.sync.test.core.test_server.cljs$lang$var = new cljs.core.Var(function(){return dat.sync.test.core.test_server;},new cljs.core.Symbol("dat.sync.test.core","test-server","dat.sync.test.core/test-server",-257646223,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Symbol(null,"test-server","test-server",1535032398,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/core.cljc",21,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.core.test_server)?dat.sync.test.core.test_server.cljs$lang$test:null)]));

//# sourceMappingURL=core.js.map