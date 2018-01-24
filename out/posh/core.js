// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__41750,retrieve){
var map__41753 = p__41750;
var map__41753__$1 = ((((!((map__41753 == null)))?((((map__41753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41753):map__41753);
var dcfg = map__41753__$1;
var q = cljs.core.get.call(null,map__41753__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.call(null,map__41753__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.call(null,map__41753__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.call(null,map__41753__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.call(null,map__41753__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var args41755 = [];
var len__11440__auto___41761 = arguments.length;
var i__11441__auto___41762 = (0);
while(true){
if((i__11441__auto___41762 < len__11440__auto___41761)){
args41755.push((arguments[i__11441__auto___41762]));

var G__41763 = (i__11441__auto___41762 + (1));
i__11441__auto___41762 = G__41763;
continue;
} else {
}
break;
}

var G__41757 = args41755.length;
switch (G__41757) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41755.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.call(null,posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__41758,db_id,conn,schema,base_filters){
var map__41759 = p__41758;
var map__41759__$1 = ((((!((map__41759 == null)))?((((map__41759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41759):map__41759);
var posh_tree = map__41759__$1;
var dcfg = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__41759__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.call(null,conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.call(null,schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var args41765 = [];
var len__11440__auto___41771 = arguments.length;
var i__11441__auto___41772 = (0);
while(true){
if((i__11441__auto___41772 < len__11440__auto___41771)){
args41765.push((arguments[i__11441__auto___41772]));

var G__41773 = (i__11441__auto___41772 + (1));
i__11441__auto___41772 = G__41773;
continue;
} else {
}
break;
}

var G__41767 = args41765.length;
switch (G__41767) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41765.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.call(null,posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__41768,db_id,db,filter_pred){
var map__41769 = p__41768;
var map__41769__$1 = ((((!((map__41769 == null)))?((((map__41769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41769):map__41769);
var posh_tree = map__41769__$1;
var dbs = cljs.core.get.call(null,map__41769__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.call(null,map__41769__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__41769__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__41775,poshdb,tx_patterns){
var map__41778 = p__41775;
var map__41778__$1 = ((((!((map__41778 == null)))?((((map__41778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41778):map__41778);
var posh_tree = map__41778__$1;
var cache = cljs.core.get.call(null,map__41778__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__41778__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__41780,poshdb,pull_pattern,eid){
var map__41783 = p__41780;
var map__41783__$1 = ((((!((map__41783 == null)))?((((map__41783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41783):map__41783);
var posh_tree = map__41783__$1;
var cache = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__41783__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__11447__auto__ = [];
var len__11440__auto___41793 = arguments.length;
var i__11441__auto___41794 = (0);
while(true){
if((i__11441__auto___41794 < len__11440__auto___41793)){
args__11447__auto__.push((arguments[i__11441__auto___41794]));

var G__41795 = (i__11441__auto___41794 + (1));
i__11441__auto___41794 = G__41795;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__41788,query,args){
var map__41789 = p__41788;
var map__41789__$1 = ((((!((map__41789 == null)))?((((map__41789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41789):map__41789);
var posh_tree = map__41789__$1;
var graph = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__41789__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var map__41791 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__41791__$1 = ((((!((map__41791 == null)))?((((map__41791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41791):map__41791);
var analysis = cljs.core.get.call(null,map__41791__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__41791__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.filter_q_transform_analysis.call(null,analysis))], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

posh.core.add_filter_q.cljs$lang$applyTo = (function (seq41785){
var G__41786 = cljs.core.first.call(null,seq41785);
var seq41785__$1 = cljs.core.next.call(null,seq41785);
var G__41787 = cljs.core.first.call(null,seq41785__$1);
var seq41785__$2 = cljs.core.next.call(null,seq41785__$1);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic(G__41786,G__41787,seq41785__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__41796,poshdb,pull_pattern,eid){
var map__41799 = p__41796;
var map__41799__$1 = ((((!((map__41799 == null)))?((((map__41799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41799):map__41799);
var posh_tree = map__41799__$1;
var graph = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__41799__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__11447__auto__ = [];
var len__11440__auto___41809 = arguments.length;
var i__11441__auto___41810 = (0);
while(true){
if((i__11441__auto___41810 < len__11440__auto___41809)){
args__11447__auto__.push((arguments[i__11441__auto___41810]));

var G__41811 = (i__11441__auto___41810 + (1));
i__11441__auto___41810 = G__41811;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__41804,query,args){
var map__41805 = p__41804;
var map__41805__$1 = ((((!((map__41805 == null)))?((((map__41805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41805):map__41805);
var posh_tree = map__41805__$1;
var cache = cljs.core.get.call(null,map__41805__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__41805__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__41805__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__41805__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.call(null,map__41805__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(function (){var or__10219__auto__ = cached;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var map__41807 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__41807__$1 = ((((!((map__41807 == null)))?((((map__41807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41807):map__41807);
var analysis = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

posh.core.add_q.cljs$lang$applyTo = (function (seq41801){
var G__41802 = cljs.core.first.call(null,seq41801);
var seq41801__$1 = cljs.core.next.call(null,seq41801);
var G__41803 = cljs.core.first.call(null,seq41801__$1);
var seq41801__$2 = cljs.core.next.call(null,seq41801__$1);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic(G__41802,G__41803,seq41801__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__41812,storage_key){
var map__41815 = p__41812;
var map__41815__$1 = ((((!((map__41815 == null)))?((((map__41815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41815):map__41815);
var posh_tree = map__41815__$1;
var graph = cljs.core.get.call(null,map__41815__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__41815__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item.call(null,graph,storage_key),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.call(null,cache,storage_key));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__41817,db_id,tx,new_cache,storage_key){
var map__41822 = p__41817;
var map__41822__$1 = ((((!((map__41822 == null)))?((((map__41822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41822):map__41822);
var posh_tree = map__41822__$1;
var graph = cljs.core.get.call(null,map__41822__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__41822__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.call(null,new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.call(null,cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__10219__auto__ = reloaded;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return current_analysis;
}
})();
var map__41824 = cljs.core.get.call(null,graph,storage_key);
var map__41824__$1 = ((((!((map__41824 == null)))?((((map__41824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41824):map__41824);
var outputs = cljs.core.get.call(null,map__41824__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__6738__auto__ = (function (){var and__10207__auto__ = !(cljs.core.empty_QMARK_.call(null,outputs));
if(and__10207__auto__){
var and__10207__auto____$1 = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__10207__auto____$1)){
return posh.lib.datom_matcher.matching_datoms.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var pass_tx = temp__6738__auto__;
return cljs.core.reduce.call(null,((function (pass_tx,temp__6738__auto__,current_analysis,reloaded,analysis,map__41824,map__41824__$1,outputs,map__41822,map__41822__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.call(null,acc,posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k));
});})(pass_tx,temp__6738__auto__,current_analysis,reloaded,analysis,map__41824,map__41824__$1,outputs,map__41822,map__41822__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.call(null,children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY);
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.call(null,newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__41826,poshdb,tx){
var map__41829 = p__41826;
var map__41829__$1 = ((((!((map__41829 == null)))?((((map__41829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41829):map__41829);
var posh_tree = map__41829__$1;
var txs = cljs.core.get.call(null,map__41829__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.call(null,map__41829__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.call(null,conns,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.call(null,txs,conn,posh.core.merge_txs.call(null,cljs.core.get.call(null,txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.map.call(null,cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__41831,conns_results){
var map__41854 = p__41831;
var map__41854__$1 = ((((!((map__41854 == null)))?((((map__41854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41854):map__41854);
var posh_tree = map__41854__$1;
var conns = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__11081__auto__ = ((function (map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__41856(s__41857){
return (new cljs.core.LazySeq(null,((function (map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__41857__$1 = s__41857;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41857__$1);
if(temp__6738__auto__){
var s__41857__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41857__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__41857__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__41859 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__41858 = (0);
while(true){
if((i__41858 < size__11080__auto__)){
var vec__41866 = cljs.core._nth.call(null,c__11079__auto__,i__41858);
var db_id = cljs.core.nth.call(null,vec__41866,(0),null);
var conn = cljs.core.nth.call(null,vec__41866,(1),null);
cljs.core.chunk_append.call(null,b__41859,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])));

var G__41876 = (i__41858 + (1));
i__41858 = G__41876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41859),posh$core$after_transact_$_iter__41856.call(null,cljs.core.chunk_rest.call(null,s__41857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41859),null);
}
} else {
var vec__41869 = cljs.core.first.call(null,s__41857__$2);
var db_id = cljs.core.nth.call(null,vec__41869,(0),null);
var conn = cljs.core.nth.call(null,vec__41869,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])),posh$core$after_transact_$_iter__41856.call(null,cljs.core.rest.call(null,s__41857__$2)));
}
} else {
return null;
}
break;
}
});})(map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__11081__auto__.call(null,conns);
})());
var new_posh_tree = cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.call(null,((function (new_dbs,new_posh_tree,map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__41872){
var vec__41873 = p__41872;
var db_id = cljs.core.nth.call(null,vec__41873,(0),null);
var conn = cljs.core.nth.call(null,vec__41873,(1),null);
return cljs.core.merge.call(null,changed,posh.core.cache_changes.call(null,new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null)));
});})(new_dbs,new_posh_tree,map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv.call(null,((function (new_dbs,new_posh_tree,changed_cache,map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.call(null,v,cljs.core.get.call(null,cache,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__41854,map__41854__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.call(null,new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,really_changed),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__41877){
var map__41880 = p__41877;
var map__41880__$1 = ((((!((map__41880 == null)))?((((map__41880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41880):map__41880);
var posh_tree = map__41880__$1;
var dcfg = cljs.core.get.call(null,map__41880__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.call(null,map__41880__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv.call(null,((function (map__41880,map__41880__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.call(null,m,conn,new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__41880,map__41880__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact.call(null,cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=core.js.map