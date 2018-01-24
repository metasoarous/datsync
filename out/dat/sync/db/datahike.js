// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.db.datahike');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('dat.sync.db');
goog.require('datahike.core');
goog.require('datahike.middleware');
goog.require('dat.sync.datascript_pr');
cljs.core._add_method.call(null,dat.sync.db.conn_QMARK_,new cljs.core.Keyword("dat.sync.db.datahike","conn","dat.sync.db.datahike/conn",1099450874),(function (p__37309){
var map__37310 = p__37309;
var map__37310__$1 = ((((!((map__37310 == null)))?((((map__37310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37310):map__37310);
var conn = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537));
return datahike.core.conn_QMARK_.call(null,conn);
}));
cljs.core._add_method.call(null,dat.sync.db.db_QMARK_,new cljs.core.Keyword("dat.sync.db.datahike","db","dat.sync.db.datahike/db",1848259888),(function (p__37312){
var map__37313 = p__37312;
var map__37313__$1 = ((((!((map__37313 == null)))?((((map__37313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37313):map__37313);
var db = cljs.core.get.call(null,map__37313__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return datahike.core.db_QMARK_.call(null,db);
}));
dat.sync.db.datahike.db_api = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),datahike.core.datoms,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),(function (p1__37315_SHARP_,p2__37316_SHARP_){
return datahike.core.with$.call(null,p1__37315_SHARP_,p2__37316_SHARP_,datahike.middleware.schema_meta);
}),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),datahike.core.entity,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),datahike.core.pull,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),datahike.core.pull_many,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),datahike.core.q,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),dat.sync.datascript_pr.tempid,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword("dat.sync.db.datahike","db","dat.sync.db.datahike/db",1848259888)], null);
dat.sync.db.datahike.conn_api = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),(function (p1__37317_SHARP_){
return dat.sync.db.inject_db_api.call(null,cljs.core.deref.call(null,p1__37317_SHARP_),dat.sync.db.datahike.db_api);
}),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),(function (p1__37318_SHARP_,p2__37319_SHARP_){
return datahike.core.transact_BANG_.call(null,p1__37318_SHARP_,p2__37319_SHARP_,datahike.middleware.schema_meta);
}),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword("dat.sync.db.datahike","conn","dat.sync.db.datahike/conn",1099450874)], null);
dat.sync.db.datahike.create_conn = (function dat$sync$db$datahike$create_conn(var_args){
var args37320 = [];
var len__11440__auto___37328 = arguments.length;
var i__11441__auto___37329 = (0);
while(true){
if((i__11441__auto___37329 < len__11440__auto___37328)){
args37320.push((arguments[i__11441__auto___37329]));

var G__37330 = (i__11441__auto___37329 + (1));
i__11441__auto___37329 = G__37330;
continue;
} else {
}
break;
}

var G__37324 = args37320.length;
switch (G__37324) {
case 0:
return dat.sync.db.datahike.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args37320.slice((1)),(0),null));
return dat.sync.db.datahike.create_conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

dat.sync.db.datahike.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.sync.db.datahike.create_conn.call(null,null);
});

dat.sync.db.datahike.create_conn.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__37325){
var map__37326 = p__37325;
var map__37326__$1 = ((((!((map__37326 == null)))?((((map__37326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37326):map__37326);
var options = map__37326__$1;
var keep_QMARK_ = cljs.core.get.call(null,map__37326__$1,new cljs.core.Keyword(null,"keep?","keep?",418688464),false);
if(cljs.core.truth_(keep_QMARK_)){
} else {
}

return dat.sync.db.inject_conn_api.call(null,datahike.middleware.create_schema_conn.call(null),dat.sync.db.datahike.conn_api);
});

dat.sync.db.datahike.create_conn.cljs$lang$applyTo = (function (seq37321){
var G__37322 = cljs.core.first.call(null,seq37321);
var seq37321__$1 = cljs.core.next.call(null,seq37321);
return dat.sync.db.datahike.create_conn.cljs$core$IFn$_invoke$arity$variadic(G__37322,seq37321__$1);
});

dat.sync.db.datahike.create_conn.cljs$lang$maxFixedArity = (1);

dat.sync.db.datahike.empty_db = (function dat$sync$db$datahike$empty_db(){
return dat.sync.db.inject_db_api.call(null,datahike.middleware.schema_db.call(null),dat.sync.db.datahike.db_api);
});

//# sourceMappingURL=datahike.js.map