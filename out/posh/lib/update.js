// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.update');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.db');
posh.lib.update.update_pull = (function posh$lib$update$update_pull(p__41696,storage_key){
var map__41702 = p__41696;
var map__41702__$1 = ((((!((map__41702 == null)))?((((map__41702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41702):map__41702);
var posh_tree = map__41702__$1;
var dcfg = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__41702__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__41704 = storage_key;
var _ = cljs.core.nth.call(null,vec__41704,(0),null);
var poshdb = cljs.core.nth.call(null,vec__41704,(1),null);
var pull_pattern = cljs.core.nth.call(null,vec__41704,(2),null);
var eid = cljs.core.nth.call(null,vec__41704,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze.call(null,dcfg,cljs.core.cons.call(null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db.call(null,posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.call(null,cljs.core.merge.call(null,analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull], null)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_filter_pull = (function posh$lib$update$update_filter_pull(p__41707,storage_key){
var map__41713 = p__41707;
var map__41713__$1 = ((((!((map__41713 == null)))?((((map__41713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41713):map__41713);
var posh_tree = map__41713__$1;
var dcfg = cljs.core.get.call(null,map__41713__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__41713__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__41715 = storage_key;
var _ = cljs.core.nth.call(null,vec__41715,(0),null);
var poshdb = cljs.core.nth.call(null,vec__41715,(1),null);
var pull_pattern = cljs.core.nth.call(null,vec__41715,(2),null);
var eid = cljs.core.nth.call(null,vec__41715,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze.call(null,dcfg,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], null),retrieve),posh.lib.db.poshdb__GT_analyze_db.call(null,posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.call(null,cljs.core.merge.call(null,analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),cljs.core.first.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis))),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_pull], null)),new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294));
});
posh.lib.update.update_q_with_dbvarmap = (function posh$lib$update$update_q_with_dbvarmap(p__41718,storage_key){
var map__41732 = p__41718;
var map__41732__$1 = ((((!((map__41732 == null)))?((((map__41732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41732):map__41732);
var posh_tree = map__41732__$1;
var dcfg = cljs.core.get.call(null,map__41732__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__41732__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));

var vec__41734 = storage_key;
var _ = cljs.core.nth.call(null,vec__41734,(0),null);
var query = cljs.core.nth.call(null,vec__41734,(1),null);
var args = cljs.core.nth.call(null,vec__41734,(2),null);
var retrieve__$1 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763)], null),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve));
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var poshdbmap = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (vec__41734,_,query,args,retrieve__$1,qm,dbvarmap,map__41732,map__41732__$1,posh_tree,dcfg,retrieve){
return (function (p__41737){
var vec__41738 = p__41737;
var db_sym = cljs.core.nth.call(null,vec__41738,(0),null);
var poshdb = cljs.core.nth.call(null,vec__41738,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,posh.lib.db.poshdb__GT_analyze_db.call(null,posh_tree,poshdb)]);
});})(vec__41734,_,query,args,retrieve__$1,qm,dbvarmap,map__41732,map__41732__$1,posh_tree,dcfg,retrieve))
,dbvarmap));
var fixed_args = cljs.core.map.call(null,((function (vec__41734,_,query,args,retrieve__$1,qm,dbvarmap,poshdbmap,map__41732,map__41732__$1,posh_tree,dcfg,retrieve){
return (function (p__41741){
var vec__41742 = p__41741;
var sym = cljs.core.nth.call(null,vec__41742,(0),null);
var arg = cljs.core.nth.call(null,vec__41742,(1),null);
var or__10219__auto__ = cljs.core.get.call(null,poshdbmap,sym);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return arg;
}
});})(vec__41734,_,query,args,retrieve__$1,qm,dbvarmap,poshdbmap,map__41732,map__41732__$1,posh_tree,dcfg,retrieve))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var analysis = posh.lib.q_analyze.q_analyze.call(null,dcfg,retrieve__$1,query,fixed_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137),dbvarmap,new cljs.core.Keyword(null,"analysis","analysis",-1362593389),cljs.core.dissoc.call(null,cljs.core.merge.call(null,analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_q], null)),new cljs.core.Keyword(null,"patterns","patterns",1164082024))], null);
});
posh.lib.update.update_q = (function posh$lib$update$update_q(posh_tree,storage_key){
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key));
});
posh.lib.update.reduce_entities = (function posh$lib$update$reduce_entities(r){
return cljs.core.reduce.call(null,(function (acc,xs){
return cljs.core.reduce.call(null,(function (acc__$1,x){
return cljs.core.conj.call(null,acc__$1,x);
}),acc,xs);
}),cljs.core.PersistentHashSet.EMPTY,r);
});
posh.lib.update.filter_q_transform_analysis = (function posh$lib$update$filter_q_transform_analysis(analysis){
return cljs.core.dissoc.call(null,cljs.core.merge.call(null,analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.update.reduce_entities.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(analysis))], null)], null),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_q], null)),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_filter_q = (function posh$lib$update$update_filter_q(posh_tree,storage_key){
return posh.lib.update.filter_q_transform_analysis.call(null,new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key)));
});
posh.lib.update.update_posh_item = (function posh$lib$update$update_posh_item(posh_tree,storage_key){
var G__41746 = cljs.core.first.call(null,storage_key);
var G__41746__$1 = (((G__41746 instanceof cljs.core.Keyword))?G__41746.fqn:null);
switch (G__41746__$1) {
case "pull":
return posh.lib.update.update_pull.call(null,posh_tree,storage_key);

break;
case "q":
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q.call(null,posh_tree,storage_key));

break;
case "filter-pull":
return posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,storage_key))].join('')));

}
});

//# sourceMappingURL=update.js.map