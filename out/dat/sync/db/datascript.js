// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.db.datascript');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('dat.sync.db');
goog.require('datascript.core');
goog.require('dat.sync.datascript_pr');
goog.require('datascript.db');
goog.require('com.rpl.specter');
goog.require('dat.spec.utils');
goog.require('onyx.static$.util');
dat.sync.db.datascript.db_ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","cas","db/cas",-451542322),null,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),null,new cljs.core.Keyword("db","retract","db/retract",-1549825231),null,new cljs.core.Keyword("db","retractAttribute","db/retractAttribute",909264502),null,new cljs.core.Keyword("db","add","db/add",235286841),null], null), null);
dat.sync.db.datascript.call = (function dat$sync$db$datascript$call(db,p__37532){
var vec__37539 = p__37532;
var seq__37540 = cljs.core.seq.call(null,vec__37539);
var first__37541 = cljs.core.first.call(null,seq__37540);
var seq__37540__$1 = cljs.core.next.call(null,seq__37540);
var op = first__37541;
var args = seq__37540__$1;
var tx = vec__37539;
var vec__37542 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),op))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.rest.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","fn","db/fn",-1175261470).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),op], null))),args], null));
var f = cljs.core.nth.call(null,vec__37542,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__37542,(1),null);
if(cljs.core.truth_(f)){
return cljs.core.apply.call(null,f,db,args__$1);
} else {
throw cljs.core.ex_info.call(null,"db/fn not found in database",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null));
}
});
dat.sync.db.datascript.fn_expand = (function dat$sync$db$datascript$fn_expand(db,txs){
var processed = cljs.core.PersistentVector.EMPTY;
var txs__$1 = txs;
while(true){
if(cljs.core.empty_QMARK_.call(null,txs__$1)){
return processed;
} else {
var tx = cljs.core.first.call(null,txs__$1);
var the_rest = cljs.core.rest.call(null,txs__$1);
if(!(cljs.core.sequential_QMARK_.call(null,tx))){
var G__37551 = cljs.core.conj.call(null,processed,tx);
var G__37552 = the_rest;
processed = G__37551;
txs__$1 = G__37552;
continue;
} else {
var vec__37548 = tx;
var seq__37549 = cljs.core.seq.call(null,vec__37548);
var first__37550 = cljs.core.first.call(null,seq__37549);
var seq__37549__$1 = cljs.core.next.call(null,seq__37549);
var op = first__37550;
var args = seq__37549__$1;
if(cljs.core.contains_QMARK_.call(null,dat.sync.db.datascript.db_ops,op)){
var G__37553 = cljs.core.conj.call(null,processed,tx);
var G__37554 = the_rest;
processed = G__37553;
txs__$1 = G__37554;
continue;
} else {
var G__37555 = processed;
var G__37556 = cljs.core.into.call(null,(function (){var or__10219__auto__ = dat.sync.db.datascript.call.call(null,db,tx);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),the_rest);
processed = G__37555;
txs__$1 = G__37556;
continue;
}
}
}
break;
}
});
dat.sync.db.datascript.fn_mw = (function dat$sync$db$datascript$fn_mw(transact){
return (function (report,txs){
var txs__$1 = dat.sync.db.datascript.fn_expand.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(report),txs);
var report__$1 = transact.call(null,report,txs__$1);
return report__$1;
});
});
cljs.core._add_method.call(null,dat.sync.db.conn_QMARK_,new cljs.core.Keyword("dat.sync.db.datascript","conn","dat.sync.db.datascript/conn",1610617162),(function (p__37557){
var map__37558 = p__37557;
var map__37558__$1 = ((((!((map__37558 == null)))?((((map__37558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37558):map__37558);
var conn = cljs.core.get.call(null,map__37558__$1,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537));
return datascript.core.conn_QMARK_.call(null,conn);
}));
cljs.core._add_method.call(null,dat.sync.db.db_QMARK_,new cljs.core.Keyword("dat.sync.db.datascript","db","dat.sync.db.datascript/db",1872918464),(function (p__37560){
var map__37561 = p__37560;
var map__37561__$1 = ((((!((map__37561 == null)))?((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37561):map__37561);
var db = cljs.core.get.call(null,map__37561__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return datascript.core.db_QMARK_.call(null,db);
}));
dat.sync.db.datascript.tx_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","tx-middleware","datascript.db/tx-middleware",1289225479),cljs.core.comp.call(null,dat.sync.db.datascript.fn_mw,dat.sync.datascript_pr.schema_middleware)], null);
dat.sync.db.datascript.db_api = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),datascript.core.datoms,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),(function (p1__37563_SHARP_,p2__37564_SHARP_){
return dat.sync.datascript_pr.with$.call(null,p1__37563_SHARP_,p2__37564_SHARP_,dat.sync.db.datascript.tx_meta);
}),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),dat.sync.datascript_pr.entity,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),datascript.core.pull,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),datascript.core.pull_many,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),datascript.core.q,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),dat.sync.datascript_pr.tempid,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword("dat.sync.db.datascript","db","dat.sync.db.datascript/db",1872918464)], null);
dat.sync.db.datascript.conn_api = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),(function (p1__37565_SHARP_){
return dat.sync.db.inject_db_api.call(null,cljs.core.deref.call(null,p1__37565_SHARP_),dat.sync.db.datascript.db_api);
}),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),(function (p1__37566_SHARP_,p2__37567_SHARP_){
return dat.sync.datascript_pr.transact_BANG_.call(null,p1__37566_SHARP_,p2__37567_SHARP_,dat.sync.db.datascript.tx_meta);
}),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword("dat.sync.db.datascript","conn","dat.sync.db.datascript/conn",1610617162)], null);
dat.sync.db.datascript.create_conn = (function dat$sync$db$datascript$create_conn(var_args){
var args37568 = [];
var len__11440__auto___37576 = arguments.length;
var i__11441__auto___37577 = (0);
while(true){
if((i__11441__auto___37577 < len__11440__auto___37576)){
args37568.push((arguments[i__11441__auto___37577]));

var G__37578 = (i__11441__auto___37577 + (1));
i__11441__auto___37577 = G__37578;
continue;
} else {
}
break;
}

var G__37572 = args37568.length;
switch (G__37572) {
case 0:
return dat.sync.db.datascript.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args37568.slice((1)),(0),null));
return dat.sync.db.datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

dat.sync.db.datascript.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.sync.db.datascript.create_conn.call(null,null);
});

dat.sync.db.datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37573){
var map__37574 = p__37573;
var map__37574__$1 = ((((!((map__37574 == null)))?((((map__37574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37574):map__37574);
var options = map__37574__$1;
var keep_QMARK_ = cljs.core.get.call(null,map__37574__$1,new cljs.core.Keyword(null,"keep?","keep?",418688464),false);
var persistent = cljs.core.get.call(null,map__37574__$1,new cljs.core.Keyword(null,"persistent","persistent",885415113),false);
var conn_from_storage = null;
var conn = (function (){var or__10219__auto__ = conn_from_storage;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return dat.sync.db.inject_conn_api.call(null,dat.sync.datascript_pr.create_schema_conn.call(null),dat.sync.db.datascript.conn_api);
}
})();
return conn;
});

dat.sync.db.datascript.create_conn.cljs$lang$applyTo = (function (seq37569){
var G__37570 = cljs.core.first.call(null,seq37569);
var seq37569__$1 = cljs.core.next.call(null,seq37569);
return dat.sync.db.datascript.create_conn.cljs$core$IFn$_invoke$arity$variadic(G__37570,seq37569__$1);
});

dat.sync.db.datascript.create_conn.cljs$lang$maxFixedArity = (1);

dat.sync.db.datascript.destroy_conn_BANG_ = (function dat$sync$db$datascript$destroy_conn_BANG_(conn){
return datascript.core.unlisten_BANG_.call(null,conn,new cljs.core.Keyword("dat.sync.db.datascript","persist","dat.sync.db.datascript/persist",2083924709));
});
dat.sync.db.datascript.empty_db = (function dat$sync$db$datascript$empty_db(){
return dat.sync.db.inject_db_api.call(null,dat.sync.datascript_pr.schema_db.call(null),dat.sync.db.datascript.db_api);
});
dat.sync.db.datascript.kw_call = (function dat$sync$db$datascript$kw_call(var_args){
var args__11447__auto__ = [];
var len__11440__auto___37583 = arguments.length;
var i__11441__auto___37584 = (0);
while(true){
if((i__11441__auto___37584 < len__11440__auto___37583)){
args__11447__auto__.push((arguments[i__11441__auto___37584]));

var G__37585 = (i__11441__auto___37584 + (1));
i__11441__auto___37584 = G__37585;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return dat.sync.db.datascript.kw_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});
goog.exportSymbol('dat.sync.db.datascript.kw_call', dat.sync.db.datascript.kw_call);

dat.sync.db.datascript.kw_call.cljs$core$IFn$_invoke$arity$variadic = (function (db,f_ident,args){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kw-calling..."], null);
}),null)),null,1773655286);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),onyx.static$.util.kw__GT_fn.call(null,f_ident)], null),args)], null);
});

dat.sync.db.datascript.kw_call.cljs$lang$maxFixedArity = (2);

dat.sync.db.datascript.kw_call.cljs$lang$applyTo = (function (seq37580){
var G__37581 = cljs.core.first.call(null,seq37580);
var seq37580__$1 = cljs.core.next.call(null,seq37580);
var G__37582 = cljs.core.first.call(null,seq37580__$1);
var seq37580__$2 = cljs.core.next.call(null,seq37580__$1);
return dat.sync.db.datascript.kw_call.cljs$core$IFn$_invoke$arity$variadic(G__37581,G__37582,seq37580__$2);
});

dat.sync.db.datascript.call_vec = (function dat$sync$db$datascript$call_vec(var_args){
var args__11447__auto__ = [];
var len__11440__auto___37587 = arguments.length;
var i__11441__auto___37588 = (0);
while(true){
if((i__11441__auto___37588 < len__11440__auto___37587)){
args__11447__auto__.push((arguments[i__11441__auto___37588]));

var G__37589 = (i__11441__auto___37588 + (1));
i__11441__auto___37588 = G__37589;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return dat.sync.db.datascript.call_vec.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

dat.sync.db.datascript.call_vec.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),dat.sync.db.datascript.kw_call], null),args)], null);
});

dat.sync.db.datascript.call_vec.cljs$lang$maxFixedArity = (0);

dat.sync.db.datascript.call_vec.cljs$lang$applyTo = (function (seq37586){
return dat.sync.db.datascript.call_vec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37586));
});

dat.sync.db.datascript.datomic_tempids__GT_ints = (function dat$sync$db$datascript$datomic_tempids__GT_ints(txs){
var txs_after = com.rpl.specter.impl.compiled_transform_STAR_.call(null,(function (){var info__36724__auto__ = dat.sync.db.datascript.pathcache37595;
var info__36724__auto____$1 = (((info__36724__auto__ == null))?(function (){var info37596 = com.rpl.specter.impl.magic_precompilation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation.call(null,com.rpl.specter.impl.__GT_VarUse.call(null,com.rpl.specter.walker,new cljs.core.Var(function(){return com.rpl.specter.walker;},new cljs.core.Symbol("com.rpl.specter","walker","com.rpl.specter/walker",188203798,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"walker","walker",-1621010049,null),"out/com/rpl/specter.cljc",(9),(1),(737),(740),cljs.core.List.EMPTY,"Using clojure.walk, navigate the data structure until reaching\n          a value for which `afn` returns truthy.",(cljs.core.truth_(com.rpl.specter.walker)?com.rpl.specter.walker.cljs$lang$test:null)])),new cljs.core.Symbol("specter","walker","specter/walker",390054917,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_SpecialFormUse.call(null,((function (info__36724__auto__){
return (function (p1__37590_SHARP_){
return (p1__37590_SHARP_ instanceof datomic.db.DbId);
});})(info__36724__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null))))], null),cljs.core.list(new cljs.core.Symbol("specter","walker","specter/walker",390054917,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null)))))], null),"dat.sync.db.datascript",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("specter","walker","specter/walker",390054917,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null)], null),cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"datomic.db.DbId","datomic.db.DbId",497995476,null),new cljs.core.Symbol(null,"p1__37590#","p1__37590#",984001601,null)))], null));
dat.sync.db.datascript.pathcache37595 = info37596;

return info37596;
})():info__36724__auto__);
var precompiled37597 = com.rpl.specter.impl.cached_path_info_precompiled.call(null,info__36724__auto____$1);
var dynamic_QMARK___36725__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_.call(null,info__36724__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___36725__auto__)){
return precompiled37597.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.walker,((function (info__36724__auto__,info__36724__auto____$1,precompiled37597,dynamic_QMARK___36725__auto__){
return (function (p1__37590_SHARP_){
return (p1__37590_SHARP_ instanceof datomic.db.DbId);
});})(info__36724__auto__,info__36724__auto____$1,precompiled37597,dynamic_QMARK___36725__auto__))
], null));
} else {
return precompiled37597;
}
})(),(function (p1__37591_SHARP_){
return new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(p1__37591_SHARP_);
}),txs);
return txs_after;
});
dat.sync.db.datascript.mw_datomic_tempid = (function dat$sync$db$datascript$mw_datomic_tempid(transact){
return (function (p__37601,txs){
var map__37602 = p__37601;
var map__37602__$1 = ((((!((map__37602 == null)))?((((map__37602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37602):map__37602);
var report = map__37602__$1;
var db_after = cljs.core.get.call(null,map__37602__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var txs__$1 = dat.sync.db.datascript.datomic_tempids__GT_ints.call(null,txs);
return transact.call(null,report,txs__$1);
});
});
dat.sync.db.datascript.uuid_all_the_things_STAR_ = (function dat$sync$db$datascript$uuid_all_the_things_STAR_(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p__37611){
var vec__37612 = p__37611;
var eid = cljs.core.nth.call(null,vec__37612,(0),null);
var _ = cljs.core.nth.call(null,vec__37612,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__37612,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__37612,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__37612,(4),null);
return eid;
})),cljs.core.distinct.call(null),cljs.core.map.call(null,cljs.core.partial.call(null,datascript.core.entity,db)),cljs.core.remove.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096)),cljs.core.remove.call(null,new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853)),cljs.core.map.call(null,(function (p__37615){
var map__37616 = p__37615;
var map__37616__$1 = ((((!((map__37616 == null)))?((((map__37616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37616):map__37616);
var id = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),dat.sync.db.gen_uuid.call(null)], null);
}))),datoms);
});
/**
 * tx-middleware to add uuids to any fresh entity that didn't get one assigned during the transaction.
 */
dat.sync.db.datascript.mw_uuid_all_the_things = (function dat$sync$db$datascript$mw_uuid_all_the_things(transact){
return (function (report,txs){
var map__37620 = transact.call(null,report,txs);
var map__37620__$1 = ((((!((map__37620 == null)))?((((map__37620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37620.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37620):map__37620);
var report__$1 = map__37620__$1;
var db_after = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.call(null,map__37620__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var uuids = dat.sync.db.datascript.uuid_all_the_things_STAR_.call(null,db_after,tx_data);
return transact.call(null,report__$1,uuids);
});
});
dat.sync.db.datascript.compatability_meta = (function dat$sync$db$datascript$compatability_meta(tx_meta){
return cljs.core.update_in.call(null,(function (){var or__10219__auto__ = tx_meta;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("datascript.db","tx-middleware","datascript.db/tx-middleware",1289225479)], null),(function (p1__37622_SHARP_){
return cljs.core.comp.call(null,(function (){var or__10219__auto__ = p1__37622_SHARP_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.identity;
}
})(),dat.sync.db.datascript.mw_uuid_all_the_things,dat.sync.datascript_pr.schema_middleware);
}));
});
dat.sync.db.datascript.fn_entity_QMARK_ = (function dat$sync$db$datascript$fn_entity_QMARK_(db,eid){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db","fn","db/fn",-1175261470).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,eid)));
});
dat.sync.db.datascript.eid = (function dat$sync$db$datascript$eid(db,e){
return new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,e));
});
dat.sync.db.datascript.unique_QMARK_ = (function dat$sync$db$datascript$unique_QMARK_(db,attr){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,attr)));
});
dat.sync.db.datascript.ref_QMARK_ = (function dat$sync$db$datascript$ref_QMARK_(db,attr){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,attr))),dat.sync.db.datascript.eid.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
});
dat.sync.db.datascript.cardinality_many_QMARK_ = (function dat$sync$db$datascript$cardinality_many_QMARK_(db,attr){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(datascript.core.entity.call(null,db,attr))),dat.sync.db.datascript.eid.call(null,db,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)));
});
dat.sync.db.datascript.fn_datom_QMARK_ = (function dat$sync$db$datascript$fn_datom_QMARK_(db,p__37623){
var vec__37627 = p__37623;
var eid = cljs.core.nth.call(null,vec__37627,(0),null);
var _ = cljs.core.nth.call(null,vec__37627,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__37627,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__37627,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__37627,(4),null);
return dat.sync.db.datascript.fn_entity_QMARK_.call(null,db,eid);
});
/**
 * Resolve ref ourselves to handle keyword refs in datascript
 */
dat.sync.db.datascript.resolve_ref = (function dat$sync$db$datascript$resolve_ref(db,p__37630){
var vec__37634 = p__37630;
var attr = cljs.core.nth.call(null,vec__37634,(0),null);
var value = cljs.core.nth.call(null,vec__37634,(1),null);
if(cljs.core.truth_(dat.sync.db.datascript.ref_QMARK_.call(null,db,attr))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",241,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37634,attr,value){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resolving..."], null);
});})(vec__37634,attr,value))
,null)),null,1519352659);

if(cljs.core.truth_(dat.sync.db.datascript.cardinality_many_QMARK_.call(null,db,attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,cljs.core.mapv.call(null,cljs.core.partial.call(null,dat.sync.db.datascript.eid,db),value)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,dat.sync.db.datascript.eid.call(null,db,value)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,value], null);
}
});
dat.sync.db.datascript.resolve_refs = (function dat$sync$db$datascript$resolve_refs(db,entity){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.partial.call(null,dat.sync.db.datascript.resolve_ref,db)),entity);
});
goog.exportSymbol('dat.sync.db.datascript.resolve_refs', dat.sync.db.datascript.resolve_refs);
dat.sync.db.datascript.keyword_ref_safely = (function dat$sync$db$datascript$keyword_ref_safely(db,entities){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,dat.sync.db.datascript.resolve_refs,db),entities);
});
goog.exportSymbol('dat.sync.db.datascript.keyword_ref_safely', dat.sync.db.datascript.keyword_ref_safely);
/**
 * Makes sure all entities are assigned a local id based on unique attributes
 */
dat.sync.db.datascript.papers_please = (function dat$sync$db$datascript$papers_please(db,entities){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",261,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entities->identities"], null);
}),null)),null,605550430);

var identities = (function (){var iter__11081__auto__ = (function dat$sync$db$datascript$papers_please_$_iter__37657(s__37658){
return (new cljs.core.LazySeq(null,(function (){
var s__37658__$1 = s__37658;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__37658__$1);
if(temp__6738__auto__){
var s__37658__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37658__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__37658__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__37660 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__37659 = (0);
while(true){
if((i__37659 < size__11080__auto__)){
var e = cljs.core._nth.call(null,c__11079__auto__,i__37659);
cljs.core.chunk_append.call(null,b__37660,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (i__37659,e,c__11079__auto__,size__11080__auto__,b__37660,s__37658__$2,temp__6738__auto__){
return (function (p__37669){
var vec__37670 = p__37669;
var a = cljs.core.nth.call(null,vec__37670,(0),null);
var v = cljs.core.nth.call(null,vec__37670,(1),null);
return dat.sync.db.datascript.unique_QMARK_.call(null,db,a);
});})(i__37659,e,c__11079__auto__,size__11080__auto__,b__37660,s__37658__$2,temp__6738__auto__))
),e));

var G__37677 = (i__37659 + (1));
i__37659 = G__37677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37660),dat$sync$db$datascript$papers_please_$_iter__37657.call(null,cljs.core.chunk_rest.call(null,s__37658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37660),null);
}
} else {
var e = cljs.core.first.call(null,s__37658__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (e,s__37658__$2,temp__6738__auto__){
return (function (p__37673){
var vec__37674 = p__37673;
var a = cljs.core.nth.call(null,vec__37674,(0),null);
var v = cljs.core.nth.call(null,vec__37674,(1),null);
return dat.sync.db.datascript.unique_QMARK_.call(null,db,a);
});})(e,s__37658__$2,temp__6738__auto__))
),e),dat$sync$db$datascript$papers_please_$_iter__37657.call(null,cljs.core.rest.call(null,s__37658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,entities);
})();
return identities;
});
goog.exportSymbol('dat.sync.db.datascript.papers_please', dat.sync.db.datascript.papers_please);
dat.sync.db.datascript.schema_entity_QMARK_ = (function dat$sync$db$datascript$schema_entity_QMARK_(entity){
return (cljs.core.contains_QMARK_.call(null,entity,new cljs.core.Keyword("db","ident","db/ident",-737096))) && (cljs.core.contains_QMARK_.call(null,entity,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659))) && (cljs.core.contains_QMARK_.call(null,entity,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)));
});
/**
 * Makes sure all the schema is available for the rest of the transactions
 */
dat.sync.db.datascript.just_the_schema = (function dat$sync$db$datascript$just_the_schema(db,entities){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",278,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entities->schema"], null);
}),null)),null,-2073197029);

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,dat.sync.db.datascript.schema_entity_QMARK_),cljs.core.map.call(null,(function (entity){
return cljs.core.select_keys.call(null,entity,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("db","index","db/index",-1531680669),null,new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null,new cljs.core.Keyword("dat.sync","part","dat.sync/part",746615676),null], null), null));
})),cljs.core.map.call(null,cljs.core.partial.call(null,dat.sync.db.datascript.resolve_refs,db))),entities);
});
goog.exportSymbol('dat.sync.db.datascript.just_the_schema', dat.sync.db.datascript.just_the_schema);
dat.sync.db.datascript.norms__GT_txes = (function dat$sync$db$datascript$norms__GT_txes(db,norms){
var map__37680 = db;
var map__37680__$1 = ((((!((map__37680 == null)))?((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37680):map__37680);
var call = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword("dat.sync.db.datascript","call","dat.sync.db.datascript/call",798688381));
var db__$1 = cljs.core.get.call(null,map__37680__$1,new cljs.core.Keyword("dat.sync.db.datascript","db","dat.sync.db.datascript/db",1872918464));
var schema_txs = call.call(null,new cljs.core.Keyword("dat.sync.db.datascript","just-the-schema","dat.sync.db.datascript/just-the-schema",1720415058),norms);
var ident_txs = call.call(null,new cljs.core.Keyword("dat.sync.db.datascript","papers-please","dat.sync.db.datascript/papers-please",-1309155721),norms);
var other_txs = call.call(null,new cljs.core.Keyword("dat.sync.db.datascript","keyword-ref-safely","dat.sync.db.datascript/keyword-ref-safely",1096210654),norms);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_txs,ident_txs,other_txs], null);
});
dat.sync.db.datascript.conj_snap = (function dat$sync$db$datascript$conj_snap(var_args){
var args37682 = [];
var len__11440__auto___37689 = arguments.length;
var i__11441__auto___37690 = (0);
while(true){
if((i__11441__auto___37690 < len__11440__auto___37689)){
args37682.push((arguments[i__11441__auto___37690]));

var G__37691 = (i__11441__auto___37690 + (1));
i__11441__auto___37690 = G__37691;
continue;
} else {
}
break;
}

var G__37684 = args37682.length;
switch (G__37684) {
case 0:
return dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37682.length)].join('')));

}
});

dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.sync.db.datascript","add","dat.sync.db.datascript/add",2038931158),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("dat.sync.db.datascript","retract","dat.sync.db.datascript/retract",385737116),cljs.core.PersistentArrayMap.EMPTY], null);
});

dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$1 = (function (snap){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,snap,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db.datascript","add","dat.sync.db.datascript/add",2038931158)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.second)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db.datascript","retract","dat.sync.db.datascript/retract",385737116)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.second));
});

dat.sync.db.datascript.conj_snap.cljs$core$IFn$_invoke$arity$2 = (function (snap,p__37685){
var vec__37686 = p__37685;
var e = cljs.core.nth.call(null,vec__37686,(0),null);
var a = cljs.core.nth.call(null,vec__37686,(1),null);
var v = cljs.core.nth.call(null,vec__37686,(2),null);
var tx = cljs.core.nth.call(null,vec__37686,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37686,(4),null);
var datom = vec__37686;
return cljs.core.assoc_in.call(null,snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(add_QMARK_)?new cljs.core.Keyword("dat.sync.db.datascript","add","dat.sync.db.datascript/add",2038931158):new cljs.core.Keyword("dat.sync.db.datascript","retract","dat.sync.db.datascript/retract",385737116)),e,a], null),v);
});

dat.sync.db.datascript.conj_snap.cljs$lang$maxFixedArity = 2;

dat.sync.db.datascript.datoms__GT_snapshot = (function dat$sync$db$datascript$datoms__GT_snapshot(datoms){
return cljs.core.transduce.call(null,cljs.core.filter.call(null,dat.sync.db.datascript.fn_datom_QMARK_),dat.sync.db.datascript.conj_snap,datoms);
});
dat.sync.db.datascript.db__GT_snapshot = (function dat$sync$db$datascript$db__GT_snapshot(db){
var map__37695 = db;
var map__37695__$1 = ((((!((map__37695 == null)))?((((map__37695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37695):map__37695);
var datoms = cljs.core.get.call(null,map__37695__$1,new cljs.core.Keyword("dat.sync.db.datascript","datoms","dat.sync.db.datascript/datoms",-1960591929));
return dat.sync.db.datascript.datoms__GT_snapshot.call(null,datoms.call(null,db));
});
dat.sync.db.datascript.verify_core = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","long","db.type/long",700514073)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigint","db.type/bigint",774640017)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","float","db.type/float",-315575090)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","double","db.type/double",-521884231)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigdec","db.type/bigdec",1626126666)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","instant","db.type/instant",-1024769248)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uuid","db.type/uuid",1543195203)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uri","db.type/uri",-437575613)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bytes","db.type/bytes",-1439792254)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","user","db.part/user",-546775899)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","unique","db/unique",329396388)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","doc","db/doc",1913350069)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","index","db/index",-1531680669)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","noHistory","db/noHistory",-1975127444)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","attribute","db.install/attribute",-225839074)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.alter","attribute","db.alter/attribute",1551890331)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.sync","part","dat.sync/part",746615676)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853)], null)], true);
dat.sync.db.datascript.verify_core_schema = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793)], null),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","unique","db/unique",329396388)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","doc","db/doc",1913350069)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","index","db/index",-1531680669)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","noHistory","db/noHistory",-1975127444)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","attribute","db.install/attribute",-225839074)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.alter","attribute","db.alter/attribute",1551890331)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.sync","part","dat.sync/part",746615676)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uuid","db.type/uuid",1543195203)], null),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null)], null);
dat.sync.db.datascript.verify_conn_BANG_ = (function dat$sync$db$datascript$verify_conn_BANG_(conn){
var seq__37701 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.sync.db.datascript.verify_core,dat.sync.db.datascript.verify_core_schema], null));
var chunk__37702 = null;
var count__37703 = (0);
var i__37704 = (0);
while(true){
if((i__37704 < count__37703)){
var tx = cljs.core._nth.call(null,chunk__37702,i__37704);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",413,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__37701,chunk__37702,count__37703,i__37704,tx){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["verifying",conn], null);
});})(seq__37701,chunk__37702,count__37703,i__37704,tx))
,null)),null,-781035145);

dat.sync.datascript_pr.transact_BANG_.call(null,conn,tx);

var G__37705 = seq__37701;
var G__37706 = chunk__37702;
var G__37707 = count__37703;
var G__37708 = (i__37704 + (1));
seq__37701 = G__37705;
chunk__37702 = G__37706;
count__37703 = G__37707;
i__37704 = G__37708;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__37701);
if(temp__6738__auto__){
var seq__37701__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37701__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__37701__$1);
var G__37709 = cljs.core.chunk_rest.call(null,seq__37701__$1);
var G__37710 = c__11130__auto__;
var G__37711 = cljs.core.count.call(null,c__11130__auto__);
var G__37712 = (0);
seq__37701 = G__37709;
chunk__37702 = G__37710;
count__37703 = G__37711;
i__37704 = G__37712;
continue;
} else {
var tx = cljs.core.first.call(null,seq__37701__$1);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.db.datascript","/tmp/form-init7542139050515471320.clj",413,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__37701,chunk__37702,count__37703,i__37704,tx,seq__37701__$1,temp__6738__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["verifying",conn], null);
});})(seq__37701,chunk__37702,count__37703,i__37704,tx,seq__37701__$1,temp__6738__auto__))
,null)),null,-247118632);

dat.sync.datascript_pr.transact_BANG_.call(null,conn,tx);

var G__37713 = cljs.core.next.call(null,seq__37701__$1);
var G__37714 = null;
var G__37715 = (0);
var G__37716 = (0);
seq__37701 = G__37713;
chunk__37702 = G__37714;
count__37703 = G__37715;
i__37704 = G__37716;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=datascript.js.map