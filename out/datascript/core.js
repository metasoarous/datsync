// Compiled by ClojureScript 1.9.542 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__22191_SHARP_){
var and__10207__auto__ = orig_pred.call(null,p1__22191_SHARP_);
if(cljs.core.truth_(and__10207__auto__)){
return pred.call(null,orig_db,p1__22191_SHARP_);
} else {
return and__10207__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__22192_SHARP_){
return pred.call(null,db,p1__22192_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args22193 = [];
var len__11440__auto___22196 = arguments.length;
var i__11441__auto___22197 = (0);
while(true){
if((i__11441__auto___22197 < len__11440__auto___22196)){
args22193.push((arguments[i__11441__auto___22197]));

var G__22198 = (i__11441__auto___22197 + (1));
i__11441__auto___22197 = G__22198;
continue;
} else {
}
break;
}

var G__22195 = args22193.length;
switch (G__22195) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22193.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args22200 = [];
var len__11440__auto___22203 = arguments.length;
var i__11441__auto___22204 = (0);
while(true){
if((i__11441__auto___22204 < len__11440__auto___22203)){
args22200.push((arguments[i__11441__auto___22204]));

var G__22205 = (i__11441__auto___22204 + (1));
i__11441__auto___22204 = G__22205;
continue;
} else {
}
break;
}

var G__22202 = args22200.length;
switch (G__22202) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22200.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args22207 = [];
var len__11440__auto___22210 = arguments.length;
var i__11441__auto___22211 = (0);
while(true){
if((i__11441__auto___22211 < len__11440__auto___22210)){
args22207.push((arguments[i__11441__auto___22211]));

var G__22212 = (i__11441__auto___22211 + (1));
i__11441__auto___22211 = G__22212;
continue;
} else {
}
break;
}

var G__22209 = args22207.length;
switch (G__22209) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22207.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__10207__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__10207__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__10207__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args22218 = [];
var len__11440__auto___22221 = arguments.length;
var i__11441__auto___22222 = (0);
while(true){
if((i__11441__auto___22222 < len__11440__auto___22221)){
args22218.push((arguments[i__11441__auto___22222]));

var G__22223 = (i__11441__auto___22222 + (1));
i__11441__auto___22222 = G__22223;
continue;
} else {
}
break;
}

var G__22220 = args22218.length;
switch (G__22220) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22218.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args22225 = [];
var len__11440__auto___22228 = arguments.length;
var i__11441__auto___22229 = (0);
while(true){
if((i__11441__auto___22229 < len__11440__auto___22228)){
args22225.push((arguments[i__11441__auto___22229]));

var G__22230 = (i__11441__auto___22229 + (1));
i__11441__auto___22229 = G__22230;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22225.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args22232 = [];
var len__11440__auto___22245 = arguments.length;
var i__11441__auto___22246 = (0);
while(true){
if((i__11441__auto___22246 < len__11440__auto___22245)){
args22232.push((arguments[i__11441__auto___22246]));

var G__22247 = (i__11441__auto___22246 + (1));
i__11441__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var G__22234 = args22232.length;
switch (G__22234) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22232.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__22235_22249 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__22236_22250 = null;
var count__22237_22251 = (0);
var i__22238_22252 = (0);
while(true){
if((i__22238_22252 < count__22237_22251)){
var vec__22239_22253 = cljs.core._nth.call(null,chunk__22236_22250,i__22238_22252);
var __22254 = cljs.core.nth.call(null,vec__22239_22253,(0),null);
var callback_22255 = cljs.core.nth.call(null,vec__22239_22253,(1),null);
callback_22255.call(null,report);

var G__22256 = seq__22235_22249;
var G__22257 = chunk__22236_22250;
var G__22258 = count__22237_22251;
var G__22259 = (i__22238_22252 + (1));
seq__22235_22249 = G__22256;
chunk__22236_22250 = G__22257;
count__22237_22251 = G__22258;
i__22238_22252 = G__22259;
continue;
} else {
var temp__6738__auto___22260 = cljs.core.seq.call(null,seq__22235_22249);
if(temp__6738__auto___22260){
var seq__22235_22261__$1 = temp__6738__auto___22260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22235_22261__$1)){
var c__11130__auto___22262 = cljs.core.chunk_first.call(null,seq__22235_22261__$1);
var G__22263 = cljs.core.chunk_rest.call(null,seq__22235_22261__$1);
var G__22264 = c__11130__auto___22262;
var G__22265 = cljs.core.count.call(null,c__11130__auto___22262);
var G__22266 = (0);
seq__22235_22249 = G__22263;
chunk__22236_22250 = G__22264;
count__22237_22251 = G__22265;
i__22238_22252 = G__22266;
continue;
} else {
var vec__22242_22267 = cljs.core.first.call(null,seq__22235_22261__$1);
var __22268 = cljs.core.nth.call(null,vec__22242_22267,(0),null);
var callback_22269 = cljs.core.nth.call(null,vec__22242_22267,(1),null);
callback_22269.call(null,report);

var G__22270 = cljs.core.next.call(null,seq__22235_22261__$1);
var G__22271 = null;
var G__22272 = (0);
var G__22273 = (0);
seq__22235_22249 = G__22270;
chunk__22236_22250 = G__22271;
count__22237_22251 = G__22272;
i__22238_22252 = G__22273;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args22275 = [];
var len__11440__auto___22288 = arguments.length;
var i__11441__auto___22289 = (0);
while(true){
if((i__11441__auto___22289 < len__11440__auto___22288)){
args22275.push((arguments[i__11441__auto___22289]));

var G__22290 = (i__11441__auto___22289 + (1));
i__11441__auto___22289 = G__22290;
continue;
} else {
}
break;
}

var G__22277 = args22275.length;
switch (G__22277) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22275.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__22274_SHARP_){
return cljs.core.assoc.call(null,p1__22274_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__22278_22292 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__22279_22293 = null;
var count__22280_22294 = (0);
var i__22281_22295 = (0);
while(true){
if((i__22281_22295 < count__22280_22294)){
var vec__22282_22296 = cljs.core._nth.call(null,chunk__22279_22293,i__22281_22295);
var __22297 = cljs.core.nth.call(null,vec__22282_22296,(0),null);
var callback_22298 = cljs.core.nth.call(null,vec__22282_22296,(1),null);
callback_22298.call(null,report);

var G__22299 = seq__22278_22292;
var G__22300 = chunk__22279_22293;
var G__22301 = count__22280_22294;
var G__22302 = (i__22281_22295 + (1));
seq__22278_22292 = G__22299;
chunk__22279_22293 = G__22300;
count__22280_22294 = G__22301;
i__22281_22295 = G__22302;
continue;
} else {
var temp__6738__auto___22303 = cljs.core.seq.call(null,seq__22278_22292);
if(temp__6738__auto___22303){
var seq__22278_22304__$1 = temp__6738__auto___22303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22278_22304__$1)){
var c__11130__auto___22305 = cljs.core.chunk_first.call(null,seq__22278_22304__$1);
var G__22306 = cljs.core.chunk_rest.call(null,seq__22278_22304__$1);
var G__22307 = c__11130__auto___22305;
var G__22308 = cljs.core.count.call(null,c__11130__auto___22305);
var G__22309 = (0);
seq__22278_22292 = G__22306;
chunk__22279_22293 = G__22307;
count__22280_22294 = G__22308;
i__22281_22295 = G__22309;
continue;
} else {
var vec__22285_22310 = cljs.core.first.call(null,seq__22278_22304__$1);
var __22311 = cljs.core.nth.call(null,vec__22285_22310,(0),null);
var callback_22312 = cljs.core.nth.call(null,vec__22285_22310,(1),null);
callback_22312.call(null,report);

var G__22313 = cljs.core.next.call(null,seq__22278_22304__$1);
var G__22314 = null;
var G__22315 = (0);
var G__22316 = (0);
seq__22278_22292 = G__22313;
chunk__22279_22293 = G__22314;
count__22280_22294 = G__22315;
i__22281_22295 = G__22316;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args22317 = [];
var len__11440__auto___22320 = arguments.length;
var i__11441__auto___22321 = (0);
while(true){
if((i__11441__auto___22321 < len__11440__auto___22320)){
args22317.push((arguments[i__11441__auto___22321]));

var G__22322 = (i__11441__auto___22321 + (1));
i__11441__auto___22321 = G__22322;
continue;
} else {
}
break;
}

var G__22319 = args22317.length;
switch (G__22319) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22317.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__22324_22334 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__22325_22335 = null;
var count__22326_22336 = (0);
var i__22327_22337 = (0);
while(true){
if((i__22327_22337 < count__22326_22336)){
var vec__22328_22338 = cljs.core._nth.call(null,chunk__22325_22335,i__22327_22337);
var tag_22339 = cljs.core.nth.call(null,vec__22328_22338,(0),null);
var cb_22340 = cljs.core.nth.call(null,vec__22328_22338,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_22339,cb_22340);

var G__22341 = seq__22324_22334;
var G__22342 = chunk__22325_22335;
var G__22343 = count__22326_22336;
var G__22344 = (i__22327_22337 + (1));
seq__22324_22334 = G__22341;
chunk__22325_22335 = G__22342;
count__22326_22336 = G__22343;
i__22327_22337 = G__22344;
continue;
} else {
var temp__6738__auto___22345 = cljs.core.seq.call(null,seq__22324_22334);
if(temp__6738__auto___22345){
var seq__22324_22346__$1 = temp__6738__auto___22345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22324_22346__$1)){
var c__11130__auto___22347 = cljs.core.chunk_first.call(null,seq__22324_22346__$1);
var G__22348 = cljs.core.chunk_rest.call(null,seq__22324_22346__$1);
var G__22349 = c__11130__auto___22347;
var G__22350 = cljs.core.count.call(null,c__11130__auto___22347);
var G__22351 = (0);
seq__22324_22334 = G__22348;
chunk__22325_22335 = G__22349;
count__22326_22336 = G__22350;
i__22327_22337 = G__22351;
continue;
} else {
var vec__22331_22352 = cljs.core.first.call(null,seq__22324_22346__$1);
var tag_22353 = cljs.core.nth.call(null,vec__22331_22352,(0),null);
var cb_22354 = cljs.core.nth.call(null,vec__22331_22352,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_22353,cb_22354);

var G__22355 = cljs.core.next.call(null,seq__22324_22346__$1);
var G__22356 = null;
var G__22357 = (0);
var G__22358 = (0);
seq__22324_22334 = G__22355;
chunk__22325_22335 = G__22356;
count__22326_22336 = G__22357;
i__22327_22337 = G__22358;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args22359 = [];
var len__11440__auto___22362 = arguments.length;
var i__11441__auto___22363 = (0);
while(true){
if((i__11441__auto___22363 < len__11440__auto___22362)){
args22359.push((arguments[i__11441__auto___22363]));

var G__22364 = (i__11441__auto___22363 + (1));
i__11441__auto___22363 = G__22364;
continue;
} else {
}
break;
}

var G__22361 = args22359.length;
switch (G__22361) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22359.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args22366 = [];
var len__11440__auto___22372 = arguments.length;
var i__11441__auto___22373 = (0);
while(true){
if((i__11441__auto___22373 < len__11440__auto___22372)){
args22366.push((arguments[i__11441__auto___22373]));

var G__22374 = (i__11441__auto___22373 + (1));
i__11441__auto___22373 = G__22374;
continue;
} else {
}
break;
}

var G__22368 = args22366.length;
switch (G__22368) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22366.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core22369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core22369 = (function (conn,tx_data,tx_meta,res,meta22370){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta22370 = meta22370;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core22369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_22371,meta22370__$1){
var self__ = this;
var _22371__$1 = this;
return (new datascript.core.t_datascript$core22369(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta22370__$1));
});})(res))
;

datascript.core.t_datascript$core22369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_22371){
var self__ = this;
var _22371__$1 = this;
return self__.meta22370;
});})(res))
;

datascript.core.t_datascript$core22369.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core22369.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core22369.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core22369.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta22370","meta22370",243094807,null)], null);
});})(res))
;

datascript.core.t_datascript$core22369.cljs$lang$type = true;

datascript.core.t_datascript$core22369.cljs$lang$ctorStr = "datascript.core/t_datascript$core22369";

datascript.core.t_datascript$core22369.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datascript.core/t_datascript$core22369");
});})(res))
;

datascript.core.__GT_t_datascript$core22369 = ((function (res){
return (function datascript$core$__GT_t_datascript$core22369(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta22370){
return (new datascript.core.t_datascript$core22369(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta22370));
});})(res))
;

}

return (new datascript.core.t_datascript$core22369(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core22379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core22379 = (function (f,res,realized,meta22380){
this.f = f;
this.res = res;
this.realized = realized;
this.meta22380 = meta22380;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core22379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_22381,meta22380__$1){
var self__ = this;
var _22381__$1 = this;
return (new datascript.core.t_datascript$core22379(self__.f,self__.res,self__.realized,meta22380__$1));
});})(res,realized))
;

datascript.core.t_datascript$core22379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_22381){
var self__ = this;
var _22381__$1 = this;
return self__.meta22380;
});})(res,realized))
;

datascript.core.t_datascript$core22379.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core22379.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core22379.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core22379.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta22380","meta22380",-268124767,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core22379.cljs$lang$type = true;

datascript.core.t_datascript$core22379.cljs$lang$ctorStr = "datascript.core/t_datascript$core22379";

datascript.core.t_datascript$core22379.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datascript.core/t_datascript$core22379");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core22379 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core22379(f__$1,res__$1,realized__$1,meta22380){
return (new datascript.core.t_datascript$core22379(f__$1,res__$1,realized__$1,meta22380));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core22379(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args22382 = [];
var len__11440__auto___22385 = arguments.length;
var i__11441__auto___22386 = (0);
while(true){
if((i__11441__auto___22386 < len__11440__auto___22385)){
args22382.push((arguments[i__11441__auto___22386]));

var G__22387 = (i__11441__auto___22386 + (1));
i__11441__auto___22386 = G__22387;
continue;
} else {
}
break;
}

var G__22384 = args22382.length;
switch (G__22384) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22382.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args22389 = [];
var len__11440__auto___22392 = arguments.length;
var i__11441__auto___22393 = (0);
while(true){
if((i__11441__auto___22393 < len__11440__auto___22392)){
args22389.push((arguments[i__11441__auto___22393]));

var G__22394 = (i__11441__auto___22393 + (1));
i__11441__auto___22393 = G__22394;
continue;
} else {
}
break;
}

var G__22391 = args22389.length;
switch (G__22391) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22389.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map