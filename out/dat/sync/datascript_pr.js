// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.datascript_pr');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('datascript.core');
goog.require('datahike.middleware');
goog.require('datascript.db');
goog.require('com.rpl.specter');
dat.sync.datascript_pr.poor_mans_kw_refs = (function dat$sync$datascript_pr$poor_mans_kw_refs(var_args){
var args50704 = [];
var len__11440__auto___50711 = arguments.length;
var i__11441__auto___50712 = (0);
while(true){
if((i__11441__auto___50712 < len__11440__auto___50711)){
args50704.push((arguments[i__11441__auto___50712]));

var G__50713 = (i__11441__auto___50712 + (1));
i__11441__auto___50712 = G__50713;
continue;
} else {
}
break;
}

var G__50706 = args50704.length;
switch (G__50706) {
case 1:
return dat.sync.datascript_pr.poor_mans_kw_refs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.datascript_pr.poor_mans_kw_refs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50704.length)].join('')));

}
});

dat.sync.datascript_pr.poor_mans_kw_refs.cljs$core$IFn$_invoke$arity$1 = (function (schema_entity){
return dat.sync.datascript_pr.poor_mans_kw_refs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null], null), null),schema_entity);
});

dat.sync.datascript_pr.poor_mans_kw_refs.cljs$core$IFn$_invoke$arity$2 = (function (pred_QMARK_,entity){
if(!(cljs.core.map_QMARK_.call(null,entity))){
return entity;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__50707){
var vec__50708 = p__50707;
var k = cljs.core.nth.call(null,vec__50708,(0),null);
var v = cljs.core.nth.call(null,vec__50708,(1),null);
if(cljs.core.not.call(null,pred_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),v], null)], null);
}
})),entity);
}
});

dat.sync.datascript_pr.poor_mans_kw_refs.cljs$lang$maxFixedArity = 2;

dat.sync.datascript_pr.current_tempid = cljs.core.atom.call(null,(0));
/**
 * Default keeps clojurescript ints from overflowing
 */
dat.sync.datascript_pr.roll_BANG_ = (function dat$sync$datascript_pr$roll_BANG_(var_args){
var args50716 = [];
var len__11440__auto___50719 = arguments.length;
var i__11441__auto___50720 = (0);
while(true){
if((i__11441__auto___50720 < len__11440__auto___50719)){
args50716.push((arguments[i__11441__auto___50720]));

var G__50721 = (i__11441__auto___50720 + (1));
i__11441__auto___50720 = G__50721;
continue;
} else {
}
break;
}

var G__50718 = args50716.length;
switch (G__50718) {
case 1:
return dat.sync.datascript_pr.roll_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return dat.sync.datascript_pr.roll_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50716.length)].join('')));

}
});

dat.sync.datascript_pr.roll_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (counter){
return dat.sync.datascript_pr.roll_BANG_.call(null,counter,(1),(9007199254740991));
});

dat.sync.datascript_pr.roll_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (counter,lowest,highest){
return cljs.core.swap_BANG_.call(null,counter,(function (p1__50715_SHARP_){
var nextt = (p1__50715_SHARP_ + (1));
if(cljs.core._EQ_.call(null,nextt,highest)){
return lowest;
} else {
return nextt;
}
}));
});

dat.sync.datascript_pr.roll_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.datascript_pr.tempid = (function dat$sync$datascript_pr$tempid(part){
return (- dat.sync.datascript_pr.roll_BANG_.call(null,dat.sync.datascript_pr.current_tempid));
});
dat.sync.datascript_pr.entity = (function dat$sync$datascript_pr$entity(db,eid){
return datascript.core.entity.call(null,db,(((eid instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),eid], null):eid));
});
dat.sync.datascript_pr.transact_tx_data = (function dat$sync$datascript_pr$transact_tx_data(p__50723,initial_es){
var map__50726 = p__50723;
var map__50726__$1 = ((((!((map__50726 == null)))?((((map__50726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50726):map__50726);
var initial_report = map__50726__$1;
var tx_meta = cljs.core.get.call(null,map__50726__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var middleware = (function (){var or__10219__auto__ = new cljs.core.Keyword("datascript.db","tx-middleware","datascript.db/tx-middleware",1289225479).cljs$core$IFn$_invoke$arity$1(tx_meta);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.identity;
}
})();
return middleware.call(null,datascript.db.transact_tx_data).call(null,initial_report,initial_es);
});
dat.sync.datascript_pr.validate_schema_change = (function dat$sync$datascript_pr$validate_schema_change(db_before,db_after){
return null;
});
dat.sync.datascript_pr.replace_schema = (function dat$sync$datascript_pr$replace_schema(var_args){
var args__11447__auto__ = [];
var len__11440__auto___50734 = arguments.length;
var i__11441__auto___50735 = (0);
while(true){
if((i__11441__auto___50735 < len__11440__auto___50734)){
args__11447__auto__.push((arguments[i__11441__auto___50735]));

var G__50736 = (i__11441__auto___50735 + (1));
i__11441__auto___50735 = G__50736;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return dat.sync.datascript_pr.replace_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

dat.sync.datascript_pr.replace_schema.cljs$core$IFn$_invoke$arity$variadic = (function (db,schema,p__50731){
var map__50732 = p__50731;
var map__50732__$1 = ((((!((map__50732 == null)))?((((map__50732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50732):map__50732);
var options = map__50732__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__50732__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962),true);
var db_after = datascript.db.init_db.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),schema);
if(cljs.core.truth_(validate_QMARK_)){
dat.sync.datascript_pr.validate_schema_change.call(null,db,db_after);
} else {
}

return db_after;
});

dat.sync.datascript_pr.replace_schema.cljs$lang$maxFixedArity = (2);

dat.sync.datascript_pr.replace_schema.cljs$lang$applyTo = (function (seq50728){
var G__50729 = cljs.core.first.call(null,seq50728);
var seq50728__$1 = cljs.core.next.call(null,seq50728);
var G__50730 = cljs.core.first.call(null,seq50728__$1);
var seq50728__$2 = cljs.core.next.call(null,seq50728__$1);
return dat.sync.datascript_pr.replace_schema.cljs$core$IFn$_invoke$arity$variadic(G__50729,G__50730,seq50728__$2);
});

dat.sync.datascript_pr.schema_datom_QMARK_ = (function dat$sync$datascript_pr$schema_datom_QMARK_(p__50737){
var vec__50741 = p__50737;
var e = cljs.core.nth.call(null,vec__50741,(0),null);
var a = cljs.core.nth.call(null,vec__50741,(1),null);
var v = cljs.core.nth.call(null,vec__50741,(2),null);
var tx = cljs.core.nth.call(null,vec__50741,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__50741,(4),null);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","index","db/index",-1531680669),null,new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null).call(null,a);
});
dat.sync.datascript_pr.supported_schema_value_QMARK_ = (function dat$sync$datascript_pr$supported_schema_value_QMARK_(a,v){
var G__50745 = a;
var G__50745__$1 = (((G__50745 instanceof cljs.core.Keyword))?G__50745.fqn:null);
switch (G__50745__$1) {
case "db/valueType":
return cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));

break;
default:
return true;

}
});
dat.sync.datascript_pr.resolve_ident = (function dat$sync$datascript_pr$resolve_ident(db,ident_eid){
var resolved_eid = datascript.db.entid_strict.call(null,db,ident_eid);
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolved_eid,new cljs.core.Keyword("db","ident","db/ident",-737096)], null))));
});
dat.sync.datascript_pr.resolve_enum = (function dat$sync$datascript_pr$resolve_enum(db,attr,value){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null], null), null).call(null,attr))){
var rident = dat.sync.datascript_pr.resolve_ident.call(null,db,value);
return rident;
} else {
return value;
}
});
dat.sync.datascript_pr.conj_schema_datom = (function dat$sync$datascript_pr$conj_schema_datom(var_args){
var args50747 = [];
var len__11440__auto___50754 = arguments.length;
var i__11441__auto___50755 = (0);
while(true){
if((i__11441__auto___50755 < len__11440__auto___50754)){
args50747.push((arguments[i__11441__auto___50755]));

var G__50756 = (i__11441__auto___50755 + (1));
i__11441__auto___50755 = G__50756;
continue;
} else {
}
break;
}

var G__50749 = args50747.length;
switch (G__50749) {
case 0:
return dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50747.length)].join('')));

}
});

dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.call(null);
});

dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$1 = (function (db){
return db;
});

dat.sync.datascript_pr.conj_schema_datom.cljs$core$IFn$_invoke$arity$2 = (function (db,p__50750){
var vec__50751 = p__50750;
var eid = cljs.core.nth.call(null,vec__50751,(0),null);
var attr = cljs.core.nth.call(null,vec__50751,(1),null);
var value = cljs.core.nth.call(null,vec__50751,(2),null);
var _ = cljs.core.nth.call(null,vec__50751,(3),null);
var ___$1 = cljs.core.nth.call(null,vec__50751,(4),null);
var attr_ident = dat.sync.datascript_pr.resolve_ident.call(null,db,eid);
var resolved_value = dat.sync.datascript_pr.resolve_enum.call(null,db,attr,value);
if(cljs.core.truth_(dat.sync.datascript_pr.supported_schema_value_QMARK_.call(null,attr,resolved_value))){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr_ident,attr], null),resolved_value);
} else {
return db;
}
});

dat.sync.datascript_pr.conj_schema_datom.cljs$lang$maxFixedArity = 2;

dat.sync.datascript_pr.schema_middleware = (function dat$sync$datascript_pr$schema_middleware(transact){
return (function (report,txs){
var map__50760 = transact.call(null,report,txs);
var map__50760__$1 = ((((!((map__50760 == null)))?((((map__50760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50760):map__50760);
var report__$1 = map__50760__$1;
var db_after = cljs.core.get.call(null,map__50760__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.call(null,map__50760__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var db_after_SINGLEQUOTE_ = cljs.core.transduce.call(null,cljs.core.filter.call(null,dat.sync.datascript_pr.schema_datom_QMARK_),dat.sync.datascript_pr.conj_schema_datom,db_after,tx_data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after_SINGLEQUOTE_))){
return report__$1;
} else {
return cljs.core.assoc.call(null,report__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666),dat.sync.datascript_pr.replace_schema.call(null,db_after,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after_SINGLEQUOTE_)));
}
});
});
dat.sync.datascript_pr.schema_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","tx-middleware","datascript.db/tx-middleware",1289225479),dat.sync.datascript_pr.schema_middleware], null);
dat.sync.datascript_pr.with$ = (function dat$sync$datascript_pr$with(var_args){
var args50762 = [];
var len__11440__auto___50765 = arguments.length;
var i__11441__auto___50766 = (0);
while(true){
if((i__11441__auto___50766 < len__11440__auto___50765)){
args50762.push((arguments[i__11441__auto___50766]));

var G__50767 = (i__11441__auto___50766 + (1));
i__11441__auto___50766 = G__50767;
continue;
} else {
}
break;
}

var G__50764 = args50762.length;
switch (G__50764) {
case 2:
return dat.sync.datascript_pr.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.datascript_pr.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50762.length)].join('')));

}
});

dat.sync.datascript_pr.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return dat.sync.datascript_pr.with$.call(null,db,tx_data,null);
});

dat.sync.datascript_pr.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return dat.sync.datascript_pr.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

dat.sync.datascript_pr.with$.cljs$lang$maxFixedArity = 3;

dat.sync.datascript_pr.db_with = (function dat$sync$datascript_pr$db_with(var_args){
var args50769 = [];
var len__11440__auto___50772 = arguments.length;
var i__11441__auto___50773 = (0);
while(true){
if((i__11441__auto___50773 < len__11440__auto___50772)){
args50769.push((arguments[i__11441__auto___50773]));

var G__50774 = (i__11441__auto___50773 + (1));
i__11441__auto___50773 = G__50774;
continue;
} else {
}
break;
}

var G__50771 = args50769.length;
switch (G__50771) {
case 2:
return dat.sync.datascript_pr.db_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.datascript_pr.db_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50769.length)].join('')));

}
});

dat.sync.datascript_pr.db_with.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return dat.sync.datascript_pr.db_with.call(null,db,tx_data,null);
});

dat.sync.datascript_pr.db_with.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(dat.sync.datascript_pr.with$.call(null,db,tx_data,tx_meta));
});

dat.sync.datascript_pr.db_with.cljs$lang$maxFixedArity = 3;

dat.sync.datascript_pr._transact_BANG_ = (function dat$sync$datascript_pr$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (ds/conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = dat.sync.datascript_pr.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
dat.sync.datascript_pr.transact_BANG_ = (function dat$sync$datascript_pr$transact_BANG_(var_args){
var args50776 = [];
var len__11440__auto___50789 = arguments.length;
var i__11441__auto___50790 = (0);
while(true){
if((i__11441__auto___50790 < len__11440__auto___50789)){
args50776.push((arguments[i__11441__auto___50790]));

var G__50791 = (i__11441__auto___50790 + (1));
i__11441__auto___50790 = G__50791;
continue;
} else {
}
break;
}

var G__50778 = args50776.length;
switch (G__50778) {
case 2:
return dat.sync.datascript_pr.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.datascript_pr.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50776.length)].join('')));

}
});

dat.sync.datascript_pr.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return dat.sync.datascript_pr.transact_BANG_.call(null,conn,tx_data,null);
});

dat.sync.datascript_pr.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (ds/conn? conn)"));
}

var report = dat.sync.datascript_pr._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__50779_50793 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__50780_50794 = null;
var count__50781_50795 = (0);
var i__50782_50796 = (0);
while(true){
if((i__50782_50796 < count__50781_50795)){
var vec__50783_50797 = cljs.core._nth.call(null,chunk__50780_50794,i__50782_50796);
var __50798 = cljs.core.nth.call(null,vec__50783_50797,(0),null);
var callback_50799 = cljs.core.nth.call(null,vec__50783_50797,(1),null);
callback_50799.call(null,report);

var G__50800 = seq__50779_50793;
var G__50801 = chunk__50780_50794;
var G__50802 = count__50781_50795;
var G__50803 = (i__50782_50796 + (1));
seq__50779_50793 = G__50800;
chunk__50780_50794 = G__50801;
count__50781_50795 = G__50802;
i__50782_50796 = G__50803;
continue;
} else {
var temp__6738__auto___50804 = cljs.core.seq.call(null,seq__50779_50793);
if(temp__6738__auto___50804){
var seq__50779_50805__$1 = temp__6738__auto___50804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50779_50805__$1)){
var c__11130__auto___50806 = cljs.core.chunk_first.call(null,seq__50779_50805__$1);
var G__50807 = cljs.core.chunk_rest.call(null,seq__50779_50805__$1);
var G__50808 = c__11130__auto___50806;
var G__50809 = cljs.core.count.call(null,c__11130__auto___50806);
var G__50810 = (0);
seq__50779_50793 = G__50807;
chunk__50780_50794 = G__50808;
count__50781_50795 = G__50809;
i__50782_50796 = G__50810;
continue;
} else {
var vec__50786_50811 = cljs.core.first.call(null,seq__50779_50805__$1);
var __50812 = cljs.core.nth.call(null,vec__50786_50811,(0),null);
var callback_50813 = cljs.core.nth.call(null,vec__50786_50811,(1),null);
callback_50813.call(null,report);

var G__50814 = cljs.core.next.call(null,seq__50779_50805__$1);
var G__50815 = null;
var G__50816 = (0);
var G__50817 = (0);
seq__50779_50793 = G__50814;
chunk__50780_50794 = G__50815;
count__50781_50795 = G__50816;
i__50782_50796 = G__50817;
continue;
}
} else {
}
}
break;
}

return report;
});

dat.sync.datascript_pr.transact_BANG_.cljs$lang$maxFixedArity = 3;

dat.sync.datascript_pr.schema_db = (function dat$sync$datascript_pr$schema_db(){
return dat.sync.datascript_pr.db_with.call(null,dat.sync.datascript_pr.db_with.call(null,datascript.core.empty_db.call(null,datahike.middleware.bare_bones_schema),datahike.middleware.enum_idents,dat.sync.datascript_pr.schema_meta),cljs.core.mapv.call(null,dat.sync.datascript_pr.poor_mans_kw_refs,datahike.middleware.schema_idents),dat.sync.datascript_pr.schema_meta);
});
/**
 * Creates a conn that has all the necessary base schema to be used with transactional schema. You should also use schema-meta whenever you use any of d/transact! d/with d/db-with
 */
dat.sync.datascript_pr.create_schema_conn = (function dat$sync$datascript_pr$create_schema_conn(){
return datascript.core.conn_from_db.call(null,dat.sync.datascript_pr.schema_db.call(null));
});

//# sourceMappingURL=datascript_pr.js.map