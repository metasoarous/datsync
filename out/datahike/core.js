// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.core');
goog.require('cljs.core');
goog.require('datahike.db');
goog.require('datahike.pull_api');
goog.require('datahike.query');
goog.require('datahike.impl.entity');
goog.require('datahike.btset');
datahike.core.q = (function datahike$core$q(var_args){
var args__11447__auto__ = [];
var len__11440__auto___50426 = arguments.length;
var i__11441__auto___50427 = (0);
while(true){
if((i__11441__auto___50427 < len__11440__auto___50426)){
args__11447__auto__.push((arguments[i__11441__auto___50427]));

var G__50428 = (i__11441__auto___50427 + (1));
i__11441__auto___50427 = G__50428;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return datahike.core.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

datahike.core.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
return null;
});

datahike.core.q.cljs$lang$maxFixedArity = (1);

datahike.core.q.cljs$lang$applyTo = (function (seq50424){
var G__50425 = cljs.core.first.call(null,seq50424);
var seq50424__$1 = cljs.core.next.call(null,seq50424);
return datahike.core.q.cljs$core$IFn$_invoke$arity$variadic(G__50425,seq50424__$1);
});

datahike.core.q = datahike.query.q;
datahike.core.entity = (function datahike$core$entity(db,eid){
return null;
});
datahike.core.entity = datahike.impl.entity.entity;
datahike.core.entity_db = (function datahike$core$entity_db(entity){
if(cljs.core.truth_(datahike.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
datahike.core.datom = (function datahike$core$datom(var_args){
var args50429 = [];
var len__11440__auto___50432 = arguments.length;
var i__11441__auto___50433 = (0);
while(true){
if((i__11441__auto___50433 < len__11440__auto___50432)){
args50429.push((arguments[i__11441__auto___50433]));

var G__50434 = (i__11441__auto___50433 + (1));
i__11441__auto___50433 = G__50434;
continue;
} else {
}
break;
}

var G__50431 = args50429.length;
switch (G__50431) {
case 3:
return datahike.core.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datahike.core.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datahike.core.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50429.length)].join('')));

}
});

datahike.core.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return null;
});

datahike.core.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return null;
});

datahike.core.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return null;
});

datahike.core.datom.cljs$lang$maxFixedArity = 5;

datahike.core.datom = datahike.db.datom;
datahike.core.pull = (function datahike$core$pull(db,selector,eid){
return null;
});
datahike.core.pull = datahike.pull_api.pull;
datahike.core.pull_many = (function datahike$core$pull_many(db,selector,eids){
return null;
});
datahike.core.pull_many = datahike.pull_api.pull_many;
datahike.core.touch = (function datahike$core$touch(e){
return null;
});
datahike.core.touch = datahike.impl.entity.touch;
datahike.core.empty_db = (function datahike$core$empty_db(var_args){
var args50436 = [];
var len__11440__auto___50439 = arguments.length;
var i__11441__auto___50440 = (0);
while(true){
if((i__11441__auto___50440 < len__11440__auto___50439)){
args50436.push((arguments[i__11441__auto___50440]));

var G__50441 = (i__11441__auto___50440 + (1));
i__11441__auto___50440 = G__50441;
continue;
} else {
}
break;
}

var G__50438 = args50436.length;
switch (G__50438) {
case 0:
return datahike.core.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.core.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50436.length)].join('')));

}
});

datahike.core.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datahike.core.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datahike.core.empty_db.cljs$lang$maxFixedArity = 1;

datahike.core.empty_db = datahike.db.empty_db;
datahike.core.init_db = (function datahike$core$init_db(var_args){
var args50443 = [];
var len__11440__auto___50446 = arguments.length;
var i__11441__auto___50447 = (0);
while(true){
if((i__11441__auto___50447 < len__11440__auto___50446)){
args50443.push((arguments[i__11441__auto___50447]));

var G__50448 = (i__11441__auto___50447 + (1));
i__11441__auto___50447 = G__50448;
continue;
} else {
}
break;
}

var G__50445 = args50443.length;
switch (G__50445) {
case 1:
return datahike.core.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datahike.core.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50443.length)].join('')));

}
});

datahike.core.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return null;
});

datahike.core.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return null;
});

datahike.core.init_db.cljs$lang$maxFixedArity = 2;

datahike.core.init_db = datahike.db.init_db;
datahike.core.datom_QMARK_ = (function datahike$core$datom_QMARK_(x){
return null;
});
datahike.core.datom_QMARK_ = datahike.db.datom_QMARK_;
datahike.core.db_QMARK_ = (function datahike$core$db_QMARK_(x){
return null;
});
datahike.core.db_QMARK_ = datahike.db.db_QMARK_;
datahike.core.tx0 = datahike.db.tx0;
datahike.core.is_filtered = (function datahike$core$is_filtered(x){
return (x instanceof datahike.db.FilteredDB);
});
datahike.core.filter = (function datahike$core$filter(db,pred){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datahike.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datahike.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__50450_SHARP_){
var and__10207__auto__ = orig_pred.call(null,p1__50450_SHARP_);
if(cljs.core.truth_(and__10207__auto__)){
return pred.call(null,orig_db,p1__50450_SHARP_);
} else {
return and__10207__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datahike.db.FilteredDB(db,(function (p1__50451_SHARP_){
return pred.call(null,db,p1__50451_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
datahike.core.with$ = (function datahike$core$with(var_args){
var args50452 = [];
var len__11440__auto___50455 = arguments.length;
var i__11441__auto___50456 = (0);
while(true){
if((i__11441__auto___50456 < len__11440__auto___50455)){
args50452.push((arguments[i__11441__auto___50456]));

var G__50457 = (i__11441__auto___50456 + (1));
i__11441__auto___50456 = G__50457;
continue;
} else {
}
break;
}

var G__50454 = args50452.length;
switch (G__50454) {
case 2:
return datahike.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50452.length)].join('')));

}
});

datahike.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datahike.core.with$.call(null,db,tx_data,null);
});

datahike.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datahike.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datahike.db.transact_tx_data.call(null,datahike.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datahike.core.with$.cljs$lang$maxFixedArity = 3;

datahike.core.db_with = (function datahike$core$db_with(var_args){
var args50459 = [];
var len__11440__auto___50462 = arguments.length;
var i__11441__auto___50463 = (0);
while(true){
if((i__11441__auto___50463 < len__11440__auto___50462)){
args50459.push((arguments[i__11441__auto___50463]));

var G__50464 = (i__11441__auto___50463 + (1));
i__11441__auto___50463 = G__50464;
continue;
} else {
}
break;
}

var G__50461 = args50459.length;
switch (G__50461) {
case 2:
return datahike.core.db_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.db_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50459.length)].join('')));

}
});

datahike.core.db_with.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datahike.core.db_with.call(null,db,tx_data,null);
});

datahike.core.db_with.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datahike.core.with$.call(null,db,tx_data,tx_meta));
});

datahike.core.db_with.cljs$lang$maxFixedArity = 3;

datahike.core.datoms = (function datahike$core$datoms(var_args){
var args50466 = [];
var len__11440__auto___50469 = arguments.length;
var i__11441__auto___50470 = (0);
while(true){
if((i__11441__auto___50470 < len__11440__auto___50469)){
args50466.push((arguments[i__11441__auto___50470]));

var G__50471 = (i__11441__auto___50470 + (1));
i__11441__auto___50470 = G__50471;
continue;
} else {
}
break;
}

var G__50468 = args50466.length;
switch (G__50468) {
case 2:
return datahike.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datahike.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datahike.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datahike.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50466.length)].join('')));

}
});

datahike.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datahike.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datahike.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datahike.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datahike.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datahike.core.datoms.cljs$lang$maxFixedArity = 6;

datahike.core.seek_datoms = (function datahike$core$seek_datoms(var_args){
var args50473 = [];
var len__11440__auto___50476 = arguments.length;
var i__11441__auto___50477 = (0);
while(true){
if((i__11441__auto___50477 < len__11440__auto___50476)){
args50473.push((arguments[i__11441__auto___50477]));

var G__50478 = (i__11441__auto___50477 + (1));
i__11441__auto___50477 = G__50478;
continue;
} else {
}
break;
}

var G__50475 = args50473.length;
switch (G__50475) {
case 2:
return datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50473.length)].join('')));

}
});

datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datahike.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datahike.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datahike.core.index_range = (function datahike$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.db._index_range.call(null,db,attr,start,end);
});
datahike.core.entid = (function datahike$core$entid(db,eid){
return null;
});
datahike.core.entid = datahike.db.entid;
datahike.core.conn_QMARK_ = (function datahike$core$conn_QMARK_(conn){
var and__10207__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__10207__auto__){
return datahike.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__10207__auto__;
}
});
datahike.core.conn_from_db = (function datahike$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
datahike.core.conn_from_datoms = (function datahike$core$conn_from_datoms(var_args){
var args50484 = [];
var len__11440__auto___50487 = arguments.length;
var i__11441__auto___50488 = (0);
while(true){
if((i__11441__auto___50488 < len__11440__auto___50487)){
args50484.push((arguments[i__11441__auto___50488]));

var G__50489 = (i__11441__auto___50488 + (1));
i__11441__auto___50488 = G__50489;
continue;
} else {
}
break;
}

var G__50486 = args50484.length;
switch (G__50486) {
case 1:
return datahike.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datahike.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50484.length)].join('')));

}
});

datahike.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datahike.core.conn_from_db.call(null,datahike.core.init_db.call(null,datoms));
});

datahike.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datahike.core.conn_from_db.call(null,datahike.core.init_db.call(null,datoms,schema));
});

datahike.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datahike.core.create_conn = (function datahike$core$create_conn(var_args){
var args50491 = [];
var len__11440__auto___50494 = arguments.length;
var i__11441__auto___50495 = (0);
while(true){
if((i__11441__auto___50495 < len__11440__auto___50494)){
args50491.push((arguments[i__11441__auto___50495]));

var G__50496 = (i__11441__auto___50495 + (1));
i__11441__auto___50495 = G__50496;
continue;
} else {
}
break;
}

var G__50493 = args50491.length;
switch (G__50493) {
case 0:
return datahike.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50491.length)].join('')));

}
});

datahike.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datahike.core.conn_from_db.call(null,datahike.core.empty_db.call(null));
});

datahike.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datahike.core.conn_from_db.call(null,datahike.core.empty_db.call(null,schema));
});

datahike.core.create_conn.cljs$lang$maxFixedArity = 1;

datahike.core._transact_BANG_ = (function datahike$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datahike.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datahike.core.transact_BANG_ = (function datahike$core$transact_BANG_(var_args){
var args50498 = [];
var len__11440__auto___50511 = arguments.length;
var i__11441__auto___50512 = (0);
while(true){
if((i__11441__auto___50512 < len__11440__auto___50511)){
args50498.push((arguments[i__11441__auto___50512]));

var G__50513 = (i__11441__auto___50512 + (1));
i__11441__auto___50512 = G__50513;
continue;
} else {
}
break;
}

var G__50500 = args50498.length;
switch (G__50500) {
case 2:
return datahike.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50498.length)].join('')));

}
});

datahike.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datahike.core.transact_BANG_.call(null,conn,tx_data,null);
});

datahike.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datahike.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__50501_50515 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__50502_50516 = null;
var count__50503_50517 = (0);
var i__50504_50518 = (0);
while(true){
if((i__50504_50518 < count__50503_50517)){
var vec__50505_50519 = cljs.core._nth.call(null,chunk__50502_50516,i__50504_50518);
var __50520 = cljs.core.nth.call(null,vec__50505_50519,(0),null);
var callback_50521 = cljs.core.nth.call(null,vec__50505_50519,(1),null);
callback_50521.call(null,report);

var G__50522 = seq__50501_50515;
var G__50523 = chunk__50502_50516;
var G__50524 = count__50503_50517;
var G__50525 = (i__50504_50518 + (1));
seq__50501_50515 = G__50522;
chunk__50502_50516 = G__50523;
count__50503_50517 = G__50524;
i__50504_50518 = G__50525;
continue;
} else {
var temp__6738__auto___50526 = cljs.core.seq.call(null,seq__50501_50515);
if(temp__6738__auto___50526){
var seq__50501_50527__$1 = temp__6738__auto___50526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50501_50527__$1)){
var c__11130__auto___50528 = cljs.core.chunk_first.call(null,seq__50501_50527__$1);
var G__50529 = cljs.core.chunk_rest.call(null,seq__50501_50527__$1);
var G__50530 = c__11130__auto___50528;
var G__50531 = cljs.core.count.call(null,c__11130__auto___50528);
var G__50532 = (0);
seq__50501_50515 = G__50529;
chunk__50502_50516 = G__50530;
count__50503_50517 = G__50531;
i__50504_50518 = G__50532;
continue;
} else {
var vec__50508_50533 = cljs.core.first.call(null,seq__50501_50527__$1);
var __50534 = cljs.core.nth.call(null,vec__50508_50533,(0),null);
var callback_50535 = cljs.core.nth.call(null,vec__50508_50533,(1),null);
callback_50535.call(null,report);

var G__50536 = cljs.core.next.call(null,seq__50501_50527__$1);
var G__50537 = null;
var G__50538 = (0);
var G__50539 = (0);
seq__50501_50515 = G__50536;
chunk__50502_50516 = G__50537;
count__50503_50517 = G__50538;
i__50504_50518 = G__50539;
continue;
}
} else {
}
}
break;
}

return report;
});

datahike.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datahike.core.reset_conn_BANG_ = (function datahike$core$reset_conn_BANG_(var_args){
var args50541 = [];
var len__11440__auto___50554 = arguments.length;
var i__11441__auto___50555 = (0);
while(true){
if((i__11441__auto___50555 < len__11440__auto___50554)){
args50541.push((arguments[i__11441__auto___50555]));

var G__50556 = (i__11441__auto___50555 + (1));
i__11441__auto___50555 = G__50556;
continue;
} else {
}
break;
}

var G__50543 = args50541.length;
switch (G__50543) {
case 2:
return datahike.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50541.length)].join('')));

}
});

datahike.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datahike.core.reset_conn_BANG_.call(null,conn,db,null);
});

datahike.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datahike.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__50540_SHARP_){
return cljs.core.assoc.call(null,p1__50540_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datahike.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datahike.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__50544_50558 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__50545_50559 = null;
var count__50546_50560 = (0);
var i__50547_50561 = (0);
while(true){
if((i__50547_50561 < count__50546_50560)){
var vec__50548_50562 = cljs.core._nth.call(null,chunk__50545_50559,i__50547_50561);
var __50563 = cljs.core.nth.call(null,vec__50548_50562,(0),null);
var callback_50564 = cljs.core.nth.call(null,vec__50548_50562,(1),null);
callback_50564.call(null,report);

var G__50565 = seq__50544_50558;
var G__50566 = chunk__50545_50559;
var G__50567 = count__50546_50560;
var G__50568 = (i__50547_50561 + (1));
seq__50544_50558 = G__50565;
chunk__50545_50559 = G__50566;
count__50546_50560 = G__50567;
i__50547_50561 = G__50568;
continue;
} else {
var temp__6738__auto___50569 = cljs.core.seq.call(null,seq__50544_50558);
if(temp__6738__auto___50569){
var seq__50544_50570__$1 = temp__6738__auto___50569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50544_50570__$1)){
var c__11130__auto___50571 = cljs.core.chunk_first.call(null,seq__50544_50570__$1);
var G__50572 = cljs.core.chunk_rest.call(null,seq__50544_50570__$1);
var G__50573 = c__11130__auto___50571;
var G__50574 = cljs.core.count.call(null,c__11130__auto___50571);
var G__50575 = (0);
seq__50544_50558 = G__50572;
chunk__50545_50559 = G__50573;
count__50546_50560 = G__50574;
i__50547_50561 = G__50575;
continue;
} else {
var vec__50551_50576 = cljs.core.first.call(null,seq__50544_50570__$1);
var __50577 = cljs.core.nth.call(null,vec__50551_50576,(0),null);
var callback_50578 = cljs.core.nth.call(null,vec__50551_50576,(1),null);
callback_50578.call(null,report);

var G__50579 = cljs.core.next.call(null,seq__50544_50570__$1);
var G__50580 = null;
var G__50581 = (0);
var G__50582 = (0);
seq__50544_50558 = G__50579;
chunk__50545_50559 = G__50580;
count__50546_50560 = G__50581;
i__50547_50561 = G__50582;
continue;
}
} else {
}
}
break;
}

return db;
});

datahike.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datahike.core.listen_BANG_ = (function datahike$core$listen_BANG_(var_args){
var args50583 = [];
var len__11440__auto___50586 = arguments.length;
var i__11441__auto___50587 = (0);
while(true){
if((i__11441__auto___50587 < len__11440__auto___50586)){
args50583.push((arguments[i__11441__auto___50587]));

var G__50588 = (i__11441__auto___50587 + (1));
i__11441__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var G__50585 = args50583.length;
switch (G__50585) {
case 2:
return datahike.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50583.length)].join('')));

}
});

datahike.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datahike.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datahike.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datahike.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datahike.core.unlisten_BANG_ = (function datahike$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datahike.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datahike","Datom","datahike/Datom",897299552,null),datahike.db.datom_from_reader,new cljs.core.Symbol("datahike","DB","datahike/DB",-605097080,null),datahike.db.db_from_reader], null);
var seq__50590_50600 = cljs.core.seq.call(null,datahike.core.data_readers);
var chunk__50591_50601 = null;
var count__50592_50602 = (0);
var i__50593_50603 = (0);
while(true){
if((i__50593_50603 < count__50592_50602)){
var vec__50594_50604 = cljs.core._nth.call(null,chunk__50591_50601,i__50593_50603);
var tag_50605 = cljs.core.nth.call(null,vec__50594_50604,(0),null);
var cb_50606 = cljs.core.nth.call(null,vec__50594_50604,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_50605,cb_50606);

var G__50607 = seq__50590_50600;
var G__50608 = chunk__50591_50601;
var G__50609 = count__50592_50602;
var G__50610 = (i__50593_50603 + (1));
seq__50590_50600 = G__50607;
chunk__50591_50601 = G__50608;
count__50592_50602 = G__50609;
i__50593_50603 = G__50610;
continue;
} else {
var temp__6738__auto___50611 = cljs.core.seq.call(null,seq__50590_50600);
if(temp__6738__auto___50611){
var seq__50590_50612__$1 = temp__6738__auto___50611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50590_50612__$1)){
var c__11130__auto___50613 = cljs.core.chunk_first.call(null,seq__50590_50612__$1);
var G__50614 = cljs.core.chunk_rest.call(null,seq__50590_50612__$1);
var G__50615 = c__11130__auto___50613;
var G__50616 = cljs.core.count.call(null,c__11130__auto___50613);
var G__50617 = (0);
seq__50590_50600 = G__50614;
chunk__50591_50601 = G__50615;
count__50592_50602 = G__50616;
i__50593_50603 = G__50617;
continue;
} else {
var vec__50597_50618 = cljs.core.first.call(null,seq__50590_50612__$1);
var tag_50619 = cljs.core.nth.call(null,vec__50597_50618,(0),null);
var cb_50620 = cljs.core.nth.call(null,vec__50597_50618,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_50619,cb_50620);

var G__50621 = cljs.core.next.call(null,seq__50590_50612__$1);
var G__50622 = null;
var G__50623 = (0);
var G__50624 = (0);
seq__50590_50600 = G__50621;
chunk__50591_50601 = G__50622;
count__50592_50602 = G__50623;
i__50593_50603 = G__50624;
continue;
}
} else {
}
}
break;
}
datahike.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datahike.core.tempid = (function datahike$core$tempid(var_args){
var args50625 = [];
var len__11440__auto___50628 = arguments.length;
var i__11441__auto___50629 = (0);
while(true){
if((i__11441__auto___50629 < len__11440__auto___50628)){
args50625.push((arguments[i__11441__auto___50629]));

var G__50630 = (i__11441__auto___50629 + (1));
i__11441__auto___50629 = G__50630;
continue;
} else {
}
break;
}

var G__50627 = args50625.length;
switch (G__50627) {
case 1:
return datahike.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datahike.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50625.length)].join('')));

}
});

datahike.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datahike.core.last_tempid,cljs.core.dec);
}
});

datahike.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datahike.core.tempid.cljs$lang$maxFixedArity = 2;

datahike.core.resolve_tempid = (function datahike$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datahike.core.db = (function datahike$core$db(conn){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
datahike.core.transact = (function datahike$core$transact(var_args){
var args50632 = [];
var len__11440__auto___50638 = arguments.length;
var i__11441__auto___50639 = (0);
while(true){
if((i__11441__auto___50639 < len__11440__auto___50638)){
args50632.push((arguments[i__11441__auto___50639]));

var G__50640 = (i__11441__auto___50639 + (1));
i__11441__auto___50639 = G__50640;
continue;
} else {
}
break;
}

var G__50634 = args50632.length;
switch (G__50634) {
case 2:
return datahike.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50632.length)].join('')));

}
});

datahike.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datahike.core.transact.call(null,conn,tx_data,null);
});

datahike.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datahike.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datahike.core.t_datahike$core50635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datahike.core.t_datahike$core50635 = (function (conn,tx_data,tx_meta,res,meta50636){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta50636 = meta50636;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datahike.core.t_datahike$core50635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_50637,meta50636__$1){
var self__ = this;
var _50637__$1 = this;
return (new datahike.core.t_datahike$core50635(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta50636__$1));
});})(res))
;

datahike.core.t_datahike$core50635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_50637){
var self__ = this;
var _50637__$1 = this;
return self__.meta50636;
});})(res))
;

datahike.core.t_datahike$core50635.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datahike.core.t_datahike$core50635.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datahike.core.t_datahike$core50635.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datahike.core.t_datahike$core50635.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta50636","meta50636",-861607362,null)], null);
});})(res))
;

datahike.core.t_datahike$core50635.cljs$lang$type = true;

datahike.core.t_datahike$core50635.cljs$lang$ctorStr = "datahike.core/t_datahike$core50635";

datahike.core.t_datahike$core50635.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.core/t_datahike$core50635");
});})(res))
;

datahike.core.__GT_t_datahike$core50635 = ((function (res){
return (function datahike$core$__GT_t_datahike$core50635(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta50636){
return (new datahike.core.t_datahike$core50635(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta50636));
});})(res))
;

}

return (new datahike.core.t_datahike$core50635(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datahike.core.transact.cljs$lang$maxFixedArity = 3;

datahike.core.future_call = (function datahike$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datahike.core.t_datahike$core50645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datahike.core.t_datahike$core50645 = (function (f,res,realized,meta50646){
this.f = f;
this.res = res;
this.realized = realized;
this.meta50646 = meta50646;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datahike.core.t_datahike$core50645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_50647,meta50646__$1){
var self__ = this;
var _50647__$1 = this;
return (new datahike.core.t_datahike$core50645(self__.f,self__.res,self__.realized,meta50646__$1));
});})(res,realized))
;

datahike.core.t_datahike$core50645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_50647){
var self__ = this;
var _50647__$1 = this;
return self__.meta50646;
});})(res,realized))
;

datahike.core.t_datahike$core50645.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datahike.core.t_datahike$core50645.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
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

datahike.core.t_datahike$core50645.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datahike.core.t_datahike$core50645.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta50646","meta50646",98762096,null)], null);
});})(res,realized))
;

datahike.core.t_datahike$core50645.cljs$lang$type = true;

datahike.core.t_datahike$core50645.cljs$lang$ctorStr = "datahike.core/t_datahike$core50645";

datahike.core.t_datahike$core50645.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.core/t_datahike$core50645");
});})(res,realized))
;

datahike.core.__GT_t_datahike$core50645 = ((function (res,realized){
return (function datahike$core$future_call_$___GT_t_datahike$core50645(f__$1,res__$1,realized__$1,meta50646){
return (new datahike.core.t_datahike$core50645(f__$1,res__$1,realized__$1,meta50646));
});})(res,realized))
;

}

return (new datahike.core.t_datahike$core50645(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datahike.core.transact_async = (function datahike$core$transact_async(var_args){
var args50648 = [];
var len__11440__auto___50651 = arguments.length;
var i__11441__auto___50652 = (0);
while(true){
if((i__11441__auto___50652 < len__11440__auto___50651)){
args50648.push((arguments[i__11441__auto___50652]));

var G__50653 = (i__11441__auto___50652 + (1));
i__11441__auto___50652 = G__50653;
continue;
} else {
}
break;
}

var G__50650 = args50648.length;
switch (G__50650) {
case 2:
return datahike.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50648.length)].join('')));

}
});

datahike.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datahike.core.transact_async.call(null,conn,tx_data,null);
});

datahike.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datahike.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datahike.core.future_call.call(null,(function (){
return datahike.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datahike.core.transact_async.cljs$lang$maxFixedArity = 3;

datahike.core.rand_bits = (function datahike$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datahike.core.to_hex_string = (function datahike$core$to_hex_string(n,l){
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
datahike.core.squuid = (function datahike$core$squuid(var_args){
var args50655 = [];
var len__11440__auto___50658 = arguments.length;
var i__11441__auto___50659 = (0);
while(true){
if((i__11441__auto___50659 < len__11440__auto___50658)){
args50655.push((arguments[i__11441__auto___50659]));

var G__50660 = (i__11441__auto___50659 + (1));
i__11441__auto___50659 = G__50660;
continue;
} else {
}
break;
}

var G__50657 = args50655.length;
switch (G__50657) {
case 0:
return datahike.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50655.length)].join('')));

}
});

datahike.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datahike.core.squuid.call(null,(new Date()).getTime());
});

datahike.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,datahike.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,((datahike.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,((datahike.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,datahike.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,datahike.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datahike.core.to_hex_string.call(null,datahike.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datahike.core.squuid.cljs$lang$maxFixedArity = 1;

datahike.core.squuid_time_millis = (function datahike$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=core.js.map