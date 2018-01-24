// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.middleware');
goog.require('cljs.core');
goog.require('datahike.core');
goog.require('datahike.db');
/**
 * tx-middleware to keep any meta-data on the db-value after a transaction. Assumes all metadata is in {:map :format}.
 */
datahike.middleware.keep_meta_middleware = (function datahike$middleware$keep_meta_middleware(transact){
return (function (report,txs){
var map__50666 = transact.call(null,report,txs);
var map__50666__$1 = ((((!((map__50666 == null)))?((((map__50666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50666):map__50666);
var report__$1 = map__50666__$1;
var db_after = cljs.core.get.call(null,map__50666__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var db_before = cljs.core.get.call(null,map__50666__$1,new cljs.core.Keyword(null,"db-before","db-before",-553691536));
return cljs.core.update_in.call(null,report__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),cljs.core.with_meta,cljs.core.into.call(null,(function (){var or__10219__auto__ = cljs.core.meta.call(null,db_before);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.meta.call(null,db_after)));
});
});
datahike.middleware.keep_meta_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datahike.db","tx-middleware","datahike.db/tx-middleware",-2145950633),datahike.middleware.keep_meta_middleware], null);
datahike.middleware.bare_bones_schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
datahike.middleware.enum_idents = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","long","db.type/long",700514073)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigint","db.type/bigint",774640017)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","float","db.type/float",-315575090)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","double","db.type/double",-521884231)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bigdec","db.type/bigdec",1626126666)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","instant","db.type/instant",-1024769248)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uuid","db.type/uuid",1543195203)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","uri","db.type/uri",-437575613)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","bytes","db.type/bytes",-1439792254)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","user","db.part/user",-546775899)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)], null)], null);
datahike.middleware.schema_idents = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","keyword","db.type/keyword",205926793),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","doc","db/doc",1913350069),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","string","db.type/string",1432572808)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","index","db/index",-1531680669),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","fulltext","db/fulltext",-1432910705),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db","noHistory","db/noHistory",-1975127444),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","attribute","db.install/attribute",-225839074),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.alter","attribute","db.alter/attribute",1551890331),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.install","partition","db.install/partition",-1744031140),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
datahike.middleware.validate_schema_change = (function datahike$middleware$validate_schema_change(db_before,db_after){
return null;
});
datahike.middleware.replace_schema = (function datahike$middleware$replace_schema(var_args){
var args__11447__auto__ = [];
var len__11440__auto___50674 = arguments.length;
var i__11441__auto___50675 = (0);
while(true){
if((i__11441__auto___50675 < len__11440__auto___50674)){
args__11447__auto__.push((arguments[i__11441__auto___50675]));

var G__50676 = (i__11441__auto___50675 + (1));
i__11441__auto___50675 = G__50676;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return datahike.middleware.replace_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

datahike.middleware.replace_schema.cljs$core$IFn$_invoke$arity$variadic = (function (db,schema,p__50671){
var map__50672 = p__50671;
var map__50672__$1 = ((((!((map__50672 == null)))?((((map__50672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50672):map__50672);
var options = map__50672__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__50672__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962),true);
var db_after = datahike.db.init_db.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),schema);
if(cljs.core.truth_(validate_QMARK_)){
datahike.middleware.validate_schema_change.call(null,db,db_after);
} else {
}

return db_after;
});

datahike.middleware.replace_schema.cljs$lang$maxFixedArity = (2);

datahike.middleware.replace_schema.cljs$lang$applyTo = (function (seq50668){
var G__50669 = cljs.core.first.call(null,seq50668);
var seq50668__$1 = cljs.core.next.call(null,seq50668);
var G__50670 = cljs.core.first.call(null,seq50668__$1);
var seq50668__$2 = cljs.core.next.call(null,seq50668__$1);
return datahike.middleware.replace_schema.cljs$core$IFn$_invoke$arity$variadic(G__50669,G__50670,seq50668__$2);
});

datahike.middleware.schema_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","index","db/index",-1531680669),null,new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null,new cljs.core.Keyword("db","ident","db/ident",-737096),null], null), null);
datahike.middleware.schema_datom_QMARK_ = (function datahike$middleware$schema_datom_QMARK_(p__50677){
var vec__50681 = p__50677;
var e = cljs.core.nth.call(null,vec__50681,(0),null);
var a = cljs.core.nth.call(null,vec__50681,(1),null);
var v = cljs.core.nth.call(null,vec__50681,(2),null);
var tx = cljs.core.nth.call(null,vec__50681,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__50681,(4),null);
return datahike.middleware.schema_attrs.call(null,a);
});
datahike.middleware.supported_schema_value_QMARK_ = (function datahike$middleware$supported_schema_value_QMARK_(a,v){
var G__50685 = a;
var G__50685__$1 = (((G__50685 instanceof cljs.core.Keyword))?G__50685.fqn:null);
switch (G__50685__$1) {
case "db/valueType":
return cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));

break;
default:
return true;

}
});
datahike.middleware.resolve_ident = (function datahike$middleware$resolve_ident(db,ident_eid){
var resolved_eid = datahike.db.entid_strict.call(null,db,ident_eid);
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolved_eid,new cljs.core.Keyword("db","ident","db/ident",-737096)], null))));
});
datahike.middleware.resolve_enum = (function datahike$middleware$resolve_enum(db,attr,value){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","unique","db/unique",329396388),null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),null,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),null], null), null).call(null,attr))){
var rident = datahike.middleware.resolve_ident.call(null,db,value);
return rident;
} else {
return value;
}
});
datahike.middleware.conj_schema_datom = (function datahike$middleware$conj_schema_datom(var_args){
var args50687 = [];
var len__11440__auto___50694 = arguments.length;
var i__11441__auto___50695 = (0);
while(true){
if((i__11441__auto___50695 < len__11440__auto___50694)){
args50687.push((arguments[i__11441__auto___50695]));

var G__50696 = (i__11441__auto___50695 + (1));
i__11441__auto___50695 = G__50696;
continue;
} else {
}
break;
}

var G__50689 = args50687.length;
switch (G__50689) {
case 0:
return datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50687.length)].join('')));

}
});

datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$0 = (function (){
return datahike.db.empty_db.call(null);
});

datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$1 = (function (db){
return db;
});

datahike.middleware.conj_schema_datom.cljs$core$IFn$_invoke$arity$2 = (function (db,p__50690){
var vec__50691 = p__50690;
var eid = cljs.core.nth.call(null,vec__50691,(0),null);
var attr = cljs.core.nth.call(null,vec__50691,(1),null);
var value = cljs.core.nth.call(null,vec__50691,(2),null);
var _ = cljs.core.nth.call(null,vec__50691,(3),null);
var ___$1 = cljs.core.nth.call(null,vec__50691,(4),null);
var attr_ident = datahike.middleware.resolve_ident.call(null,db,eid);
var resolved_value = datahike.middleware.resolve_enum.call(null,db,attr,value);
if(cljs.core.truth_(datahike.middleware.supported_schema_value_QMARK_.call(null,attr,resolved_value))){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr_ident,attr], null),resolved_value);
} else {
return db;
}
});

datahike.middleware.conj_schema_datom.cljs$lang$maxFixedArity = 2;

/**
 * Takes schema transactions and puts them into the simplified schema map.
 */
datahike.middleware.schema_middleware = (function datahike$middleware$schema_middleware(transact){
return (function (report,txs){
var map__50700 = transact.call(null,report,txs);
var map__50700__$1 = ((((!((map__50700 == null)))?((((map__50700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50700):map__50700);
var report__$1 = map__50700__$1;
var db_after = cljs.core.get.call(null,map__50700__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.call(null,map__50700__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var db_after_SINGLEQUOTE_ = cljs.core.transduce.call(null,cljs.core.filter.call(null,datahike.middleware.schema_datom_QMARK_),datahike.middleware.conj_schema_datom,db_after,tx_data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after_SINGLEQUOTE_))){
return report__$1;
} else {
return cljs.core.assoc.call(null,report__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datahike.middleware.replace_schema.call(null,db_after,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after_SINGLEQUOTE_)));
}
});
});
datahike.middleware.schema_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datahike.db","tx-middleware","datahike.db/tx-middleware",-2145950633),datahike.middleware.schema_middleware], null);
datahike.middleware.schema_db = (function datahike$middleware$schema_db(){
return datahike.core.db_with.call(null,datahike.core.db_with.call(null,datahike.core.empty_db.call(null,datahike.middleware.bare_bones_schema),datahike.middleware.enum_idents,datahike.middleware.schema_meta),datahike.middleware.schema_idents,datahike.middleware.schema_meta);
});
/**
 * Creates a conn that has all the necessary base schema to be used with transactional schema. You should also use schema-meta whenever you use any of d/transact! d/with d/db-with
 */
datahike.middleware.create_schema_conn = (function datahike$middleware$create_schema_conn(){
return datahike.core.conn_from_db.call(null,datahike.middleware.schema_db.call(null));
});
datahike.middleware.kitchen_sink_meta = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datahike.db","tx-middleware","datahike.db/tx-middleware",-2145950633),cljs.core.comp.call(null,datahike.middleware.keep_meta_middleware,datahike.middleware.schema_middleware)], null);

//# sourceMappingURL=middleware.js.map