// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.remote');
goog.require('datascript.db');
goog.require('dat.sync.db');
goog.require('com.rpl.specter');
goog.require('dat.reactor');
goog.require('dat.reactor.onyx');
goog.require('dat.reactor.dispatcher');
goog.require('datascript.core');
goog.require('dat.spec.protocols');
goog.require('com.stuartsierra.component');
goog.require('dat.spec.utils');
goog.require('taoensso.timbre');
/**
 * When an entity is setting it's own identity then we have an ident and we need a local eid to be assigned
 */
dat.sync.core.identity_gdatom_QMARK_ = (function dat$sync$core$identity_gdatom_QMARK_(p__37334){
var vec__37341 = p__37334;
var vec__37344 = cljs.core.nth.call(null,vec__37341,(0),null);
var ident_attr = cljs.core.nth.call(null,vec__37344,(0),null);
var _ = cljs.core.nth.call(null,vec__37344,(1),null);
var attr = cljs.core.nth.call(null,vec__37341,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__37341,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__37341,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__37341,(4),null);
return cljs.core._EQ_.call(null,ident_attr,attr);
});
/**
 * Only :dat.sync/uuid and :db/ident are valid idents
 */
dat.sync.core.globalize_ident = (function dat$sync$core$globalize_ident(db,eid){
var it = dat.sync.db.entity.call(null,db,eid);
var dbident = new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(it);
if(cljs.core.truth_(dbident)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),dbident], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853),new cljs.core.Keyword("dat.sync","uuid","dat.sync/uuid",-402536853).cljs$core$IFn$_invoke$arity$1(it)], null);

}
});
dat.sync.core.datom__GT_tx = (function dat$sync$core$datom__GT_tx(p__37347){
var vec__37351 = p__37347;
var e = cljs.core.nth.call(null,vec__37351,(0),null);
var a = cljs.core.nth.call(null,vec__37351,(1),null);
var v = cljs.core.nth.call(null,vec__37351,(2),null);
var tx = cljs.core.nth.call(null,vec__37351,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37351,(4),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(add_QMARK_)?new cljs.core.Keyword("db","add","db/add",235286841):new cljs.core.Keyword("db","retract","db/retract",-1549825231)),e,a,v], null);
});
dat.sync.core.ident_datom__GT_eid_assignment_tx = (function dat$sync$core$ident_datom__GT_eid_assignment_tx(p__37354){
var vec__37361 = p__37354;
var vec__37364 = cljs.core.nth.call(null,vec__37361,(0),null);
var ident_attr = cljs.core.nth.call(null,vec__37364,(0),null);
var ident_value = cljs.core.nth.call(null,vec__37364,(1),null);
var a = cljs.core.nth.call(null,vec__37361,(1),null);
var v = cljs.core.nth.call(null,vec__37361,(2),null);
var tx = cljs.core.nth.call(null,vec__37361,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37361,(4),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([ident_attr,ident_value]);
});
dat.sync.core.ref_QMARK_ = (function dat$sync$core$ref_QMARK_(db,attr_ident){
return dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Symbol(null,"?ref-enum","?ref-enum",462690791,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?ref-enum","?ref-enum",462690791,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null),db,attr_ident);
});
dat.sync.core.many_QMARK_ = (function dat$sync$core$many_QMARK_(db,attr_ident){
return dat.sync.db.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Symbol(null,"?ident","?ident",1230589912,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Symbol(null,"?many-enum","?many-enum",-715240085,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?many-enum","?many-enum",-715240085,null),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null)], null),db,attr_ident);
});
dat.sync.core.mal_datom_QMARK_ = (function dat$sync$core$mal_datom_QMARK_(p__37367){
var vec__37374 = p__37367;
var vec__37377 = cljs.core.nth.call(null,vec__37374,(0),null);
var _ = cljs.core.nth.call(null,vec__37377,(0),null);
var ident_value = cljs.core.nth.call(null,vec__37377,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__37374,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__37374,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__37374,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__37374,(4),null);
var datom = vec__37374;
return (ident_value == null);
});
/**
 * Converts all local eids to idents using the ident fn provided
 */
dat.sync.core.datom_identer = (function dat$sync$core$datom_identer(db,ident){
return (function (p__37384){
var vec__37385 = p__37384;
var e = cljs.core.nth.call(null,vec__37385,(0),null);
var a = cljs.core.nth.call(null,vec__37385,(1),null);
var v = cljs.core.nth.call(null,vec__37385,(2),null);
var tx = cljs.core.nth.call(null,vec__37385,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37385,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident.call(null,db,e),a,((cljs.core.not.call(null,dat.sync.core.ref_QMARK_.call(null,db,a)))?v:(cljs.core.truth_((function (){var and__10207__auto__ = dat.sync.core.many_QMARK_.call(null,db,a);
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.coll_QMARK_.call(null,v);
} else {
return and__10207__auto__;
}
})())?cljs.core.map.call(null,cljs.core.partial.call(null,ident,db),v):ident.call(null,db,v))),tx,add_QMARK_], null);
});
});
/**
 * Globalizes attrs as keywords
 */
dat.sync.core.datom_attr_resolver = (function dat$sync$core$datom_attr_resolver(db){
return (function (p__37392){
var vec__37393 = p__37392;
var e = cljs.core.nth.call(null,vec__37393,(0),null);
var a = cljs.core.nth.call(null,vec__37393,(1),null);
var v = cljs.core.nth.call(null,vec__37393,(2),null);
var tx = cljs.core.nth.call(null,vec__37393,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37393,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(((a instanceof cljs.core.Keyword))?a:new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,a))),v,tx,add_QMARK_], null);
});
});
dat.sync.core.handle_mal_datoms = (function dat$sync$core$handle_mal_datoms(){
return cljs.core.map.call(null,(function (datom){
if(cljs.core.truth_(dat.sync.core.mal_datom_QMARK_.call(null,datom))){
var exception_37396 = cljs.core.ex_info.call(null,"Datom not assigned ident",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("dat.sync.core","datom","dat.sync.core/datom",1422475137),datom], null));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.sync.core","/tmp/form-init7542139050515471320.clj",142,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (exception_37396){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nil-id-datoms:",exception_37396], null);
});})(exception_37396))
,null)),null,-1927965575);
} else {
}

return datom;
}));
});
/**
 * Transducer for global-datom => local-datom
 */
dat.sync.core.gdatom_GT__LT_datom = (function dat$sync$core$gdatom_GT__LT_datom(db){
return cljs.core.identity;
});
dat.sync.core.datom_GT__LT_tx_idents = (function dat$sync$core$datom_GT__LT_tx_idents(){
return cljs.core.comp.call(null,cljs.core.filter.call(null,dat.sync.core.identity_gdatom_QMARK_),cljs.core.map.call(null,dat.sync.core.ident_datom__GT_eid_assignment_tx));
});
/**
 * txs -> tx-report using a snapshot
 */
dat.sync.core.snap_transact = (function dat$sync$core$snap_transact(conn,p__37397){
var map__37400 = p__37397;
var map__37400__$1 = ((((!((map__37400 == null)))?((((map__37400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37400):map__37400);
var txs = cljs.core.get.call(null,map__37400__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.call(null,map__37400__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
return dat.sync.db.with$.call(null,dat.sync.db.db.call(null,conn),txs,tx_meta);
});
goog.exportSymbol('dat.sync.core.snap_transact', dat.sync.core.snap_transact);
dat.sync.core.fn_entity_QMARK_ = (function dat$sync$core$fn_entity_QMARK_(db,eid){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("db","fn","db/fn",-1175261470).cljs$core$IFn$_invoke$arity$1(dat.sync.db.entity.call(null,db,eid)));
});
dat.sync.core.fn_datom_QMARK_ = (function dat$sync$core$fn_datom_QMARK_(db,p__37402){
var vec__37406 = p__37402;
var eid = cljs.core.nth.call(null,vec__37406,(0),null);
var _ = cljs.core.nth.call(null,vec__37406,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__37406,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__37406,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__37406,(4),null);
return dat.sync.core.fn_entity_QMARK_.call(null,db,eid);
});
dat.sync.core.conj_snap = (function dat$sync$core$conj_snap(var_args){
var args37409 = [];
var len__11440__auto___37416 = arguments.length;
var i__11441__auto___37417 = (0);
while(true){
if((i__11441__auto___37417 < len__11440__auto___37416)){
args37409.push((arguments[i__11441__auto___37417]));

var G__37418 = (i__11441__auto___37417 + (1));
i__11441__auto___37417 = G__37418;
continue;
} else {
}
break;
}

var G__37411 = args37409.length;
switch (G__37411) {
case 0:
return dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37409.length)].join('')));

}
});

dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.sync.core","add","dat.sync.core/add",980435016),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("dat.sync.core","retract","dat.sync.core/retract",1454750262),cljs.core.PersistentArrayMap.EMPTY], null);
});

dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$1 = (function (snap){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,snap,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","add","dat.sync.core/add",980435016)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.second)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","retract","dat.sync.core/retract",1454750262)], null),cljs.core.partial.call(null,cljs.core.map,cljs.core.second));
});

dat.sync.core.conj_snap.cljs$core$IFn$_invoke$arity$2 = (function (snap,p__37412){
var vec__37413 = p__37412;
var e = cljs.core.nth.call(null,vec__37413,(0),null);
var a = cljs.core.nth.call(null,vec__37413,(1),null);
var v = cljs.core.nth.call(null,vec__37413,(2),null);
var tx = cljs.core.nth.call(null,vec__37413,(3),null);
var add_QMARK_ = cljs.core.nth.call(null,vec__37413,(4),null);
var datom = vec__37413;
return cljs.core.assoc_in.call(null,snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(add_QMARK_)?new cljs.core.Keyword("dat.sync.core","add","dat.sync.core/add",980435016):new cljs.core.Keyword("dat.sync.core","retract","dat.sync.core/retract",1454750262)),e,a], null),v);
});

dat.sync.core.conj_snap.cljs$lang$maxFixedArity = 2;

dat.sync.core.datoms__GT_snapshot = (function dat$sync$core$datoms__GT_snapshot(datoms){
return cljs.core.transduce.call(null,cljs.core.filter.call(null,dat.sync.core.fn_datom_QMARK_),dat.sync.core.conj_snap,datoms);
});
dat.sync.core.db__GT_snapshot = (function dat$sync$core$db__GT_snapshot(db){
var map__37422 = db;
var map__37422__$1 = ((((!((map__37422 == null)))?((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37422):map__37422);
var datoms = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword("dat.sync.core","datoms","dat.sync.core/datoms",-1053042119));
return dat.sync.core.datoms__GT_snapshot.call(null,datoms.call(null,db));
});
dat.sync.core.tx_report__GT_gtxs = (function dat$sync$core$tx_report__GT_gtxs(p__37424){
var map__37427 = p__37424;
var map__37427__$1 = ((((!((map__37427 == null)))?((((map__37427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37427):map__37427);
var seg = map__37427__$1;
var tx_data = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var db_after = cljs.core.get.call(null,map__37427__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",227,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37427,map__37427__$1,seg,tx_data,db_after){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tx-report->gtxs",dat.sync.core.datoms__GT_snapshot.call(null,db_after,tx_data)], null);
});})(map__37427,map__37427__$1,seg,tx_data,db_after))
,null)),null,-721401183);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","gtxs","dat.sync/gtxs",411543237),new cljs.core.Keyword(null,"gtxs","gtxs",1621761651),dat.sync.core.datoms__GT_snapshot.call(null,db_after,tx_data)], null);
});
goog.exportSymbol('dat.sync.core.tx_report__GT_gtxs', dat.sync.core.tx_report__GT_gtxs);
dat.sync.core.gdatoms__GT_local_txs = (function dat$sync$core$gdatoms__GT_local_txs(gdatoms){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,(function (p1__37429_SHARP_){
if(cljs.core.truth_(dat.sync.core.identity_gdatom_QMARK_.call(null,p1__37429_SHARP_))){
return dat.sync.core.ident_datom__GT_eid_assignment_tx.call(null,p1__37429_SHARP_);
} else {
return dat.sync.core.datom__GT_tx.call(null,p1__37429_SHARP_);
}
}))),gdatoms);
});
dat.sync.core.ident2_QMARK_ = (function dat$sync$core$ident2_QMARK_(db,attr){
return false;
});
dat.sync.core.identify = (function dat$sync$core$identify(db,norm){
return cljs.core.first.call(null,cljs.core.some.call(null,cljs.core.partial.call(null,dat.sync.core.ident2_QMARK_,db),cljs.core.keys.call(null,norm)));
});
goog.exportSymbol('dat.sync.core.identify', dat.sync.core.identify);
dat.sync.core.assert_norm = (function dat$sync$core$assert_norm(db,e,a,v){
var old = a.call(null,dat.sync.db.entity.call(null,db,e));
if(cljs.core._EQ_.call(null,v,old)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,old], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v], null)], null);
}
});
goog.exportSymbol('dat.sync.core.assert_norm', dat.sync.core.assert_norm);
dat.sync.core.norm_diff = (function dat$sync$core$norm_diff(db,norm){
var e = dat.sync.core.identify.call(null,db,norm);
var iter__11081__auto__ = ((function (e){
return (function dat$sync$core$norm_diff_$_iter__37446(s__37447){
return (new cljs.core.LazySeq(null,((function (e){
return (function (){
var s__37447__$1 = s__37447;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__37447__$1);
if(temp__6738__auto__){
var s__37447__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37447__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__37447__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__37449 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__37448 = (0);
while(true){
if((i__37448 < size__11080__auto__)){
var vec__37456 = cljs.core._nth.call(null,c__11079__auto__,i__37448);
var a = cljs.core.nth.call(null,vec__37456,(0),null);
var v = cljs.core.nth.call(null,vec__37456,(1),null);
cljs.core.chunk_append.call(null,b__37449,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","assert-norm","dat.sync.core/assert-norm",-482925953),e,a,v], null)], null));

var G__37462 = (i__37448 + (1));
i__37448 = G__37462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37449),dat$sync$core$norm_diff_$_iter__37446.call(null,cljs.core.chunk_rest.call(null,s__37447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37449),null);
}
} else {
var vec__37459 = cljs.core.first.call(null,s__37447__$2);
var a = cljs.core.nth.call(null,vec__37459,(0),null);
var v = cljs.core.nth.call(null,vec__37459,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","assert-norm","dat.sync.core/assert-norm",-482925953),e,a,v], null)], null),dat$sync$core$norm_diff_$_iter__37446.call(null,cljs.core.rest.call(null,s__37447__$2)));
}
} else {
return null;
}
break;
}
});})(e))
,null,null));
});})(e))
;
return iter__11081__auto__.call(null,norm);
});
goog.exportSymbol('dat.sync.core.norm_diff', dat.sync.core.norm_diff);
dat.sync.core.normalize = (function dat$sync$core$normalize(db,norms){
var iter__11081__auto__ = (function dat$sync$core$normalize_$_iter__37467(s__37468){
return (new cljs.core.LazySeq(null,(function (){
var s__37468__$1 = s__37468;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__37468__$1);
if(temp__6738__auto__){
var s__37468__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37468__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__37468__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__37470 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__37469 = (0);
while(true){
if((i__37469 < size__11080__auto__)){
var norm = cljs.core._nth.call(null,c__11079__auto__,i__37469);
cljs.core.chunk_append.call(null,b__37470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","norm-diff","dat.sync.core/norm-diff",1618706967),norm], null));

var G__37471 = (i__37469 + (1));
i__37469 = G__37471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37470),dat$sync$core$normalize_$_iter__37467.call(null,cljs.core.chunk_rest.call(null,s__37468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37470),null);
}
} else {
var norm = cljs.core.first.call(null,s__37468__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","norm-diff","dat.sync.core/norm-diff",1618706967),norm], null),dat$sync$core$normalize_$_iter__37467.call(null,cljs.core.rest.call(null,s__37468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,norms);
});
goog.exportSymbol('dat.sync.core.normalize', dat.sync.core.normalize);
dat.sync.core.conform_BANG_ = (function dat$sync$core$conform_BANG_(conn,norms){
return dat.sync.db.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","normalize","dat.sync.core/normalize",-510718060),norms], null)], null));
});
dat.sync.core.transaction_QMARK_ = (function dat$sync$core$transaction_QMARK_(event,old_seg,seg,all_new){
return cljs.core.contains_QMARK_.call(null,seg,new cljs.core.Keyword(null,"txs","txs",2056038378));
});
goog.exportSymbol('dat.sync.core.transaction_QMARK_', dat.sync.core.transaction_QMARK_);
dat.sync.core.localize_QMARK_ = (function dat$sync$core$localize_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","gdatoms","dat.sync/gdatoms",-353657446));
});
goog.exportSymbol('dat.sync.core.localize_QMARK_', dat.sync.core.localize_QMARK_);
dat.sync.core.legacy_QMARK_ = (function dat$sync$core$legacy_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112));
});
goog.exportSymbol('dat.sync.core.legacy_QMARK_', dat.sync.core.legacy_QMARK_);
dat.sync.core.legacy_tx_QMARK_ = (function dat$sync$core$legacy_tx_QMARK_(event,old_seg,seg,all_new){
var and__10207__auto__ = dat.sync.core.legacy_QMARK_.call(null,event,old_seg,seg,all_new);
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(seg)),new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103));
} else {
return and__10207__auto__;
}
});
goog.exportSymbol('dat.sync.core.legacy_tx_QMARK_', dat.sync.core.legacy_tx_QMARK_);
if(typeof dat.sync.core.legacy__GT_seg2 !== 'undefined'){
} else {
dat.sync.core.legacy__GT_seg2 = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.core","legacy->seg2"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,dat.sync.core.legacy__GT_seg2,new cljs.core.Keyword("dat.sync.client","send-remote-tx","dat.sync.client/send-remote-tx",-648888103),(function (p__37472){
var vec__37473 = p__37472;
var _ = cljs.core.nth.call(null,vec__37473,(0),null);
var txs = cljs.core.nth.call(null,vec__37473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.sync","tx","dat.sync/tx",-1195991452),new cljs.core.Keyword(null,"txs","txs",2056038378),txs], null);
}));
cljs.core._add_method.call(null,dat.sync.core.legacy__GT_seg2,new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),(function (p__37476){
var vec__37477 = p__37476;
var _ = cljs.core.nth.call(null,vec__37477,(0),null);
var event = cljs.core.nth.call(null,vec__37477,(1),null);
return null;
}));
dat.sync.core.legacy_translator = (function dat$sync$core$legacy_translator(p__37480){
var map__37483 = p__37480;
var map__37483__$1 = ((((!((map__37483 == null)))?((((map__37483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37483):map__37483);
var event = cljs.core.get.call(null,map__37483__$1,new cljs.core.Keyword(null,"event","event",301435442));
return dat.sync.core.legacy__GT_seg2.call(null,event);
});
goog.exportSymbol('dat.sync.core.legacy_translator', dat.sync.core.legacy_translator);
dat.sync.core.snapshot_QMARK_ = (function dat$sync$core$snapshot_QMARK_(event,old_seg,seg,all_new){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("dat.sync","snapshot","dat.sync/snapshot",1546049956).cljs$core$IFn$_invoke$arity$1(seg));
});
goog.exportSymbol('dat.sync.core.snapshot_QMARK_', dat.sync.core.snapshot_QMARK_);
dat.sync.core.request_snapshot_QMARK_ = (function dat$sync$core$request_snapshot_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","request-snapshot","dat.sync/request-snapshot",81664815));
});
goog.exportSymbol('dat.sync.core.request_snapshot_QMARK_', dat.sync.core.request_snapshot_QMARK_);
dat.sync.core.source_from_transactor_QMARK_ = (function dat$sync$core$source_from_transactor_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785));
});
goog.exportSymbol('dat.sync.core.source_from_transactor_QMARK_', dat.sync.core.source_from_transactor_QMARK_);
dat.sync.core.source_from_remote_QMARK_ = (function dat$sync$core$source_from_remote_QMARK_(event,old_seg,seg,all_new){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(seg),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418));
});
goog.exportSymbol('dat.sync.core.source_from_remote_QMARK_', dat.sync.core.source_from_remote_QMARK_);
if(typeof dat.sync.core.event_msg_handler !== 'undefined'){
} else {
dat.sync.core.event_msg_handler = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.core","event-msg-handler"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (app,p__37485){
var map__37486 = p__37485;
var map__37486__$1 = ((((!((map__37486 == null)))?((((map__37486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37486):map__37486);
var event_msg = map__37486__$1;
var id = cljs.core.get.call(null,map__37486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return id;
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,dat.sync.core.event_msg_handler,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (_,___$1){
return null;
}));
cljs.core._add_method.call(null,dat.sync.core.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,p__37488){
var map__37489 = p__37488;
var map__37489__$1 = ((((!((map__37489 == null)))?((((map__37489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37489):map__37489);
var event_msg = map__37489__$1;
var event = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var ring_req = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var _QMARK_reply_fn = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var send_fn = cljs.core.get.call(null,map__37489__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.sync.core","/tmp/form-init7542139050515471320.clj",438,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37489,map__37489__$1,event_msg,event,id,_QMARK_data,ring_req,_QMARK_reply_fn,send_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled event:",id], null);
});})(map__37489,map__37489__$1,event_msg,event,id,_QMARK_data,ring_req,_QMARK_reply_fn,send_fn))
,null)),null,859522939);
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),(function (app,db,_){
return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),true], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","request-bootstrap","dat.sync.client/request-bootstrap",1164062733),(function (app,db,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",460,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sending bootstrap request!"], null);
}),null)),null,283404802);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),true], null)], null)], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.sync.client","bootstrap","dat.sync.client/bootstrap",1964218081),(function (app,db,p__37491){
var vec__37492 = p__37491;
var _ = cljs.core.nth.call(null,vec__37492,(0),null);
var tx_data = cljs.core.nth.call(null,vec__37492,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",469,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__37492,_,tx_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received bootstrap!",cljs.core.take.call(null,(10),tx_data)], null);
});})(vec__37492,_,tx_data))
,null)),null,-1658064586);

return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client.bootstrap","complete?","dat.sync.client.bootstrap/complete?",-1333465608),true], null)], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.client","recv-remote-tx","dat.sync.client/recv-remote-tx",-325804681),tx_data], null)], null)));
}));
dat.sync.core.legacy_server_segment_BANG_ = (function dat$sync$core$legacy_server_segment_BANG_(app,seg){
return dat.sync.core.event_msg_handler.call(null,app,seg);
});
dat.sync.core.transact_segment_BANG_ = (function dat$sync$core$transact_segment_BANG_(p__37495,p__37496){
var map__37501 = p__37495;
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var knowbase = map__37501__$1;
var conn = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var map__37502 = p__37496;
var map__37502__$1 = ((((!((map__37502 == null)))?((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37502):map__37502);
var seg = map__37502__$1;
var txs = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var tx_meta = cljs.core.get.call(null,map__37502__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var report = dat.sync.db.transact_BANG_.call(null,conn,txs,tx_meta);
return report;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.Datsync = (function (dispatcher,remote,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.Datsync.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.sync.core.Datsync.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k37507,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__37509 = k37507;
var G__37509__$1 = (((G__37509 instanceof cljs.core.Keyword))?G__37509.fqn:null);
switch (G__37509__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37507,else__10897__auto__);

}
});

dat.sync.core.Datsync.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.sync.core.Datsync{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.Datsync.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37506){
var self__ = this;
var G__37506__$1 = this;
return (new cljs.core.RecordIter((0),G__37506__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.Datsync.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.Datsync.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.Datsync.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

dat.sync.core.Datsync.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.Datsync.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.sync.core.Datsync.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__37506){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__37510 = cljs.core.keyword_identical_QMARK_;
var expr__37511 = k__10902__auto__;
if(cljs.core.truth_(pred__37510.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__37511))){
return (new dat.sync.core.Datsync(G__37506,self__.remote,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37510.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__37511))){
return (new dat.sync.core.Datsync(self__.dispatcher,G__37506,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__37506),null));
}
}
});

dat.sync.core.Datsync.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null))], null),self__.__extmap));
});

dat.sync.core.Datsync.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__37506){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.sync.core.Datsync(self__.dispatcher,self__.remote,G__37506,self__.__extmap,self__.__hash));
});

dat.sync.core.Datsync.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",490,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync component"], null);
});})(component__$1))
,null)),null,-1389788896);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",493,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dispatched schema changes"], null);
});})(component__$1))
,null)),null,1285962109);

cljs.core.async.pipeline.call(null,(1),dat.spec.protocols.send_chan.call(null,self__.dispatcher),cljs.core.map.call(null,((function (component__$1){
return (function (p1__37505_SHARP_){
return cljs.core.assoc.call(null,p1__37505_SHARP_,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.sync","event-source","dat.sync/event-source",465339675),new cljs.core.Keyword("dat.sync","remote","dat.sync/remote",946224418));
});})(component__$1))
),dat.spec.protocols.recv_chan.call(null,self__.remote));

return component__$1;
});

dat.sync.core.Datsync.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

dat.sync.core.Datsync.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null)], null);
});

dat.sync.core.Datsync.cljs$lang$type = true;

dat.sync.core.Datsync.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/Datsync");
});

dat.sync.core.Datsync.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.sync.core/Datsync");
});

dat.sync.core.__GT_Datsync = (function dat$sync$core$__GT_Datsync(dispatcher,remote){
return (new dat.sync.core.Datsync(dispatcher,remote,null,null,null));
});

dat.sync.core.map__GT_Datsync = (function dat$sync$core$map__GT_Datsync(G__37508){
return (new dat.sync.core.Datsync(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__37508),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__37508),null,cljs.core.dissoc.call(null,G__37508,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576)),null));
});

dat.sync.core.new_datsync = (function dat$sync$core$new_datsync(){
return dat.sync.core.map__GT_Datsync.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
dat.sync.core.onyx_batch_size = (20);
dat.sync.core.base_catalog = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.DatsyncClient = (function (dispatcher,remote,reactor,knowbase,conn,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.reactor = reactor;
this.knowbase = knowbase;
this.conn = conn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.DatsyncClient.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k37515,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__37517 = k37515;
var G__37517__$1 = (((G__37517 instanceof cljs.core.Keyword))?G__37517.fqn:null);
switch (G__37517__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
case "reactor":
return self__.reactor;

break;
case "knowbase":
return self__.knowbase;

break;
case "conn":
return self__.conn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37515,else__10897__auto__);

}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.sync.core.DatsyncClient{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncClient.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37514){
var self__ = this;
var G__37514__$1 = this;
return (new cljs.core.RecordIter((0),G__37514__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"conn","conn",278309663)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__37514){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__37518 = cljs.core.keyword_identical_QMARK_;
var expr__37519 = k__10902__auto__;
if(cljs.core.truth_(pred__37518.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__37519))){
return (new dat.sync.core.DatsyncClient(G__37514,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37518.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__37519))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,G__37514,self__.reactor,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37518.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__37519))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,G__37514,self__.knowbase,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37518.call(null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),expr__37519))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,G__37514,self__.conn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37518.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__37519))){
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,G__37514,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__37514),null));
}
}
}
}
}
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__37514){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.sync.core.DatsyncClient(self__.dispatcher,self__.remote,self__.reactor,self__.knowbase,self__.conn,G__37514,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncClient.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
var component__$2 = cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"conn","conn",278309663),(function (){var or__10219__auto__ = self__.conn;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.knowbase);
}
})());
var onyx_batch_size = (20);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",528,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$2,onyx_batch_size,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync component"], null);
});})(component__$2,onyx_batch_size,component__$1))
,null)),null,1181479579);

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","base-job","dat.sync.core/base-job",-905963843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),dat.sync.core.base_catalog], null));

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","job","dat.sync.core/job",-1517777540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,component__$2,dat.reactor.onyx.legacy_segment_BANG_),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","snap-transact","dat.sync.core/snap-transact",-983773274),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.knowbase),new cljs.core.Keyword("onyx","params","onyx/params",716013253),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conn","conn",278309663)], null),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","render","dat.view.dom/render",-1826044862)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,self__.knowbase,dat.sync.core.transact_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","gdatoms->local-ds-txs","dat.sync.core/gdatoms->local-ds-txs",442291453),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","tx-report->gtxs","dat.sync.core/tx-report->gtxs",-1371191572),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null)], null),new cljs.core.Keyword(null,"workflow","workflow",-640694607),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null)], null),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","snap-transact","dat.sync/snap-transact",-1464985425)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","transaction?","dat.sync.core/transaction?",1543373224)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","localize?","dat.sync.core/localize?",1454212335)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null)], null)], null));

return component__$2;
});

dat.sync.core.DatsyncClient.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"conn","conn",278309663),null);
});

dat.sync.core.DatsyncClient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null),new cljs.core.Symbol(null,"knowbase","knowbase",1508469935,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null)], null);
});

dat.sync.core.DatsyncClient.cljs$lang$type = true;

dat.sync.core.DatsyncClient.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/DatsyncClient");
});

dat.sync.core.DatsyncClient.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.sync.core/DatsyncClient");
});

dat.sync.core.__GT_DatsyncClient = (function dat$sync$core$__GT_DatsyncClient(dispatcher,remote,reactor,knowbase,conn){
return (new dat.sync.core.DatsyncClient(dispatcher,remote,reactor,knowbase,conn,null,null,null));
});

dat.sync.core.map__GT_DatsyncClient = (function dat$sync$core$map__GT_DatsyncClient(G__37516){
return (new dat.sync.core.DatsyncClient(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__37516),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__37516),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__37516),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592).cljs$core$IFn$_invoke$arity$1(G__37516),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__37516),null,cljs.core.dissoc.call(null,G__37516,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"conn","conn",278309663)),null));
});

dat.sync.core.new_datsync_client = (function dat$sync$core$new_datsync_client(){
return dat.sync.core.map__GT_DatsyncClient.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.sync.core.DatsyncServer = (function (dispatcher,remote,knowbase,reactor,__meta,__extmap,__hash){
this.dispatcher = dispatcher;
this.remote = remote;
this.knowbase = knowbase;
this.reactor = reactor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.sync.core.DatsyncServer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k37523,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__37525 = k37523;
var G__37525__$1 = (((G__37525 instanceof cljs.core.Keyword))?G__37525.fqn:null);
switch (G__37525__$1) {
case "dispatcher":
return self__.dispatcher;

break;
case "remote":
return self__.remote;

break;
case "knowbase":
return self__.knowbase;

break;
case "reactor":
return self__.reactor;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37523,else__10897__auto__);

}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.sync.core.DatsyncServer{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncServer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37522){
var self__ = this;
var G__37522__$1 = this;
return (new cljs.core.RecordIter((0),G__37522__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"reactor","reactor",535582272)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"remote","remote",-1593576576),null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__37522){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__37526 = cljs.core.keyword_identical_QMARK_;
var expr__37527 = k__10902__auto__;
if(cljs.core.truth_(pred__37526.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__37527))){
return (new dat.sync.core.DatsyncServer(G__37522,self__.remote,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37526.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576),expr__37527))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,G__37522,self__.knowbase,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37526.call(null,new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),expr__37527))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,G__37522,self__.reactor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__37526.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__37527))){
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,G__37522,self__.__meta,self__.__extmap,null));
} else {
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__37522),null));
}
}
}
}
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote","remote",-1593576576),self__.remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),self__.knowbase],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null))], null),self__.__extmap));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__37522){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.sync.core.DatsyncServer(self__.dispatcher,self__.remote,self__.knowbase,self__.reactor,G__37522,self__.__extmap,self__.__hash));
});

dat.sync.core.DatsyncServer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.sync.core","/tmp/form-init7542139050515471320.clj",644,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting Datsync Server component"], null);
});})(component__$1))
,null)),null,1132934394);

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","base-job","dat.sync.core/base-job",-905963843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),dat.sync.core.base_catalog], null));

dat.reactor.onyx.expand_job_BANG_.call(null,self__.reactor,new cljs.core.Keyword("dat.sync.core","job","dat.sync.core/job",-1517777540),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,component__$1,dat.sync.core.legacy_server_segment_BANG_),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.dispatcher),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.send_chan.call(null,self__.remote),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.spec.protocols.recv_chan.call(null,self__.knowbase),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,self__.knowbase,dat.sync.core.transact_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","gdatoms->local-ds-txs","dat.sync.core/gdatoms->local-ds-txs",442291453),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("onyx","fn","onyx/fn",-1172046942),new cljs.core.Keyword("dat.sync.core","tx-report->gtxs","dat.sync.core/tx-report->gtxs",-1371191572),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),dat.sync.core.onyx_batch_size], null)], null),new cljs.core.Keyword(null,"workflow","workflow",-640694607),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286),new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","localize","dat.sync/localize",-808866470),new cljs.core.Keyword("dat.sync","transact","dat.sync/transact",-2010856764)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","tx-report","dat.sync/tx-report",1237006785),new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync","globalize","dat.sync/globalize",1796697559),new cljs.core.Keyword("dat.remote","send","dat.remote/send",-879753943)], null)], null),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","snapshot","dat.sync.core/snapshot",-2139746629)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","request-snapshot?","dat.sync.core/request-snapshot?",312355278)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.core","split-id-datoms","dat.sync.core/split-id-datoms",1628297286)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","localize?","dat.sync.core/localize?",1454212335)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.view.dom","event","dat.view.dom/event",421950242),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("flow","from","flow/from",1812137506),new cljs.core.Keyword("dat.remote","recv","dat.remote/recv",932956803),new cljs.core.Keyword("flow","to","flow/to",188953993),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112)], null),new cljs.core.Keyword("flow","predicate","flow/predicate",-1745647926),new cljs.core.Keyword("dat.sync.core","legacy?","dat.sync.core/legacy?",-304022752)], null)], null)], null));

return component__$1;
});

dat.sync.core.DatsyncServer.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

dat.sync.core.DatsyncServer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"remote","remote",46954951,null),new cljs.core.Symbol(null,"knowbase","knowbase",1508469935,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null)], null);
});

dat.sync.core.DatsyncServer.cljs$lang$type = true;

dat.sync.core.DatsyncServer.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.sync.core/DatsyncServer");
});

dat.sync.core.DatsyncServer.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.sync.core/DatsyncServer");
});

dat.sync.core.__GT_DatsyncServer = (function dat$sync$core$__GT_DatsyncServer(dispatcher,remote,knowbase,reactor){
return (new dat.sync.core.DatsyncServer(dispatcher,remote,knowbase,reactor,null,null,null));
});

dat.sync.core.map__GT_DatsyncServer = (function dat$sync$core$map__GT_DatsyncServer(G__37524){
return (new dat.sync.core.DatsyncServer(new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__37524),new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(G__37524),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592).cljs$core$IFn$_invoke$arity$1(G__37524),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__37524),null,cljs.core.dissoc.call(null,G__37524,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"knowbase","knowbase",-132061592),new cljs.core.Keyword(null,"reactor","reactor",535582272)),null));
});

dat.sync.core.new_datsync_server = (function dat$sync$core$new_datsync_server(){
return dat.sync.core.map__GT_DatsyncServer.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=core.js.map