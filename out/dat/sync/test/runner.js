// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.test.runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('dat.sync.test.core');
goog.require('dat.sync.test.datascript_pr');
goog.require('dat.sync.test.db');
cljs.core.enable_console_print_BANG_.call(null);
doo.runner.set_entry_point_BANG_.call(null,(cljs.core.truth_(doo.runner.karma_QMARK_.call(null))?(function (tc__37803__auto__){
jx.reporter.karma.start.call(null,tc__37803__auto__,(6));

return cljs.test.run_block.call(null,(function (){var env41892 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary41893 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
cljs.test.set_env_BANG_.call(null,env41892);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41892,summary41893))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.core.test_server;},new cljs.core.Symbol("dat.sync.test.core","test-server","dat.sync.test.core/test-server",-257646223,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Symbol(null,"test-server","test-server",1535032398,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/core.cljc",21,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.core.test_server)?dat.sync.test.core.test_server.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41892,summary41893))
], null));
})());
});})(env41892,summary41893))
,((function (env41892,summary41893){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41892,summary41893))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41893,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41893),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41892,summary41893))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
cljs.test.set_env_BANG_.call(null,env41892);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41892,summary41893))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.datascript_pr.test_with;},new cljs.core.Symbol("dat.sync.test.datascript-pr","test-with","dat.sync.test.datascript-pr/test-with",-859985158,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Symbol(null,"test-with","test-with",-70141604,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/datascript_pr.cljc",(19),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.datascript_pr.test_with)?dat.sync.test.datascript_pr.test_with.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41892,summary41893))
], null));
})());
});})(env41892,summary41893))
,((function (env41892,summary41893){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41892,summary41893))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41893,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41893),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41892,summary41893))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
cljs.test.set_env_BANG_.call(null,env41892);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41892,summary41893))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.db.test_conn_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-conn-datascript","dat.sync.test.db/test-conn-datascript",106230069,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-conn-datascript","test-conn-datascript",1016334647,null),"test/cljc/dat/sync/test/db.cljc",30,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_conn_datascript)?dat.sync.test.db.test_conn_datascript.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_base_schema_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-base-schema-datascript","dat.sync.test.db/test-base-schema-datascript",15344051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-base-schema-datascript","test-base-schema-datascript",-22406731,null),"test/cljc/dat/sync/test/db.cljc",37,1,76,76,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_base_schema_datascript)?dat.sync.test.db.test_base_schema_datascript.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_function;},new cljs.core.Symbol("dat.sync.test.db","test-function","dat.sync.test.db/test-function",1927249428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-function","test-function",1486833170,null),"test/cljc/dat/sync/test/db.cljc",23,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_function)?dat.sync.test.db.test_function.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_function_indirection_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-function-indirection-datascript","dat.sync.test.db/test-function-indirection-datascript",-28758574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-function-indirection-datascript","test-function-indirection-datascript",-737602092,null),"test/cljc/dat/sync/test/db.cljc",46,1,190,190,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_function_indirection_datascript)?dat.sync.test.db.test_function_indirection_datascript.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41892,summary41893){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41892,summary41893))
], null));
})());
});})(env41892,summary41893))
,((function (env41892,summary41893){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41892,summary41893))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41893,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41893),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41892,summary41893))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41892,summary41893){
return (function (){
cljs.test.set_env_BANG_.call(null,env41892);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41893));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41893),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41892,summary41893))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env41894 = cljs.test.empty_env.call(null);
var summary41895 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
cljs.test.set_env_BANG_.call(null,env41894);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41894,summary41895))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.core.test_server;},new cljs.core.Symbol("dat.sync.test.core","test-server","dat.sync.test.core/test-server",-257646223,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Symbol(null,"test-server","test-server",1535032398,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/core.cljc",21,1,23,23,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.core.test_server)?dat.sync.test.core.test_server.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41894,summary41895))
], null));
})());
});})(env41894,summary41895))
,((function (env41894,summary41895){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.core","dat.sync.test.core",942241232,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41894,summary41895))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41895,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41895),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41894,summary41895))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
cljs.test.set_env_BANG_.call(null,env41894);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41894,summary41895))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.datascript_pr.test_with;},new cljs.core.Symbol("dat.sync.test.datascript-pr","test-with","dat.sync.test.datascript-pr/test-with",-859985158,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Symbol(null,"test-with","test-with",-70141604,null),"/home/bamarco/dev/datsync/test/cljc/dat/sync/test/datascript_pr.cljc",(19),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.datascript_pr.test_with)?dat.sync.test.datascript_pr.test_with.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41894,summary41895))
], null));
})());
});})(env41894,summary41895))
,((function (env41894,summary41895){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.datascript-pr","dat.sync.test.datascript-pr",1903724326,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41894,summary41895))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41895,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41895),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41894,summary41895))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
cljs.test.set_env_BANG_.call(null,env41894);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__11748__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__11748__auto__,env41894,summary41895))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return dat.sync.test.db.test_conn_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-conn-datascript","dat.sync.test.db/test-conn-datascript",106230069,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-conn-datascript","test-conn-datascript",1016334647,null),"test/cljc/dat/sync/test/db.cljc",30,1,54,54,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_conn_datascript)?dat.sync.test.db.test_conn_datascript.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_base_schema_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-base-schema-datascript","dat.sync.test.db/test-base-schema-datascript",15344051,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-base-schema-datascript","test-base-schema-datascript",-22406731,null),"test/cljc/dat/sync/test/db.cljc",37,1,76,76,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_base_schema_datascript)?dat.sync.test.db.test_base_schema_datascript.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_function;},new cljs.core.Symbol("dat.sync.test.db","test-function","dat.sync.test.db/test-function",1927249428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-function","test-function",1486833170,null),"test/cljc/dat/sync/test/db.cljc",23,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_function)?dat.sync.test.db.test_function.cljs$lang$test:null)])),new cljs.core.Var(function(){return dat.sync.test.db.test_function_indirection_datascript;},new cljs.core.Symbol("dat.sync.test.db","test-function-indirection-datascript","dat.sync.test.db/test-function-indirection-datascript",-28758574,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Symbol(null,"test-function-indirection-datascript","test-function-indirection-datascript",-737602092,null),"test/cljc/dat/sync/test/db.cljc",46,1,190,190,cljs.core.List.EMPTY,null,(cljs.core.truth_(dat.sync.test.db.test_function_indirection_datascript)?dat.sync.test.db.test_function_indirection_datascript.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__11748__auto__,env41894,summary41895){
return (function (){
if((env__11748__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__11748__auto__,env41894,summary41895))
], null));
})());
});})(env41894,summary41895))
,((function (env41894,summary41895){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"dat.sync.test.db","dat.sync.test.db",1207080177,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41894,summary41895))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41895,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41895),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41894,summary41895))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41894,summary41895){
return (function (){
cljs.test.set_env_BANG_.call(null,env41894);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41895));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41895),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41894,summary41895))
], null));
})());
})));

//# sourceMappingURL=runner.js.map