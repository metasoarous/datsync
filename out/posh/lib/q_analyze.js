// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__10219__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__10219__auto__){
return or__10219__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__10219__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__10219__auto__){
return or__10219__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__40970 = rest_at_QMARK_;
var G__40971 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__40970;
ls = G__40971;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?var"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__10207__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where)))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item)))){
var ocr_40985 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if((cljs.core.vector_QMARK_.call(null,ocr_40985)) && ((cljs.core.count.call(null,ocr_40985) === 2))){
try{var ocr_40985_0__40988 = cljs.core.nth.call(null,ocr_40985,(0));
if((cljs.core.vector_QMARK_.call(null,ocr_40985_0__40988)) && ((cljs.core.count.call(null,ocr_40985_0__40988) === 5))){
try{var ocr_40985_0__40988_0__40990 = cljs.core.nth.call(null,ocr_40985_0__40988,(0));
if(cljs.core._EQ_.call(null,ocr_40985_0__40988_0__40990,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_40985_0__40988,(1));
var e = cljs.core.nth.call(null,ocr_40985_0__40988,(2));
var a = cljs.core.nth.call(null,ocr_40985_0__40988,(3));
var v = cljs.core.nth.call(null,ocr_40985,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e40997){if((e40997 instanceof Error)){
var e__40066__auto__ = e40997;
if((e__40066__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto__;
}
} else {
throw e40997;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40996){if((e40996 instanceof Error)){
var e__40066__auto__ = e40996;
if((e__40066__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto__;
}
} else {
throw e40996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e40995){if((e40995 instanceof Error)){
var e__40066__auto__ = e40995;
if((e__40066__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__40066__auto__;
}
} else {
throw e40995;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__41002){
var vec__41003 = p__41002;
var k = cljs.core.nth.call(null,vec__41003,(0),null);
var v = cljs.core.nth.call(null,vec__41003,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__41006_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__41006_SHARP_))){
return cljs.core.get.call(null,vs,p1__41006_SHARP_);
} else {
return p1__41006_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__11081__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__41011(s__41012){
return (new cljs.core.LazySeq(null,(function (){
var s__41012__$1 = s__41012;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41012__$1);
if(temp__6738__auto__){
var s__41012__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41012__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__41012__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__41014 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__41013 = (0);
while(true){
if((i__41013 < size__11080__auto__)){
var r = cljs.core._nth.call(null,c__11079__auto__,i__41013);
cljs.core.chunk_append.call(null,b__41014,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__41015 = (i__41013 + (1));
i__41013 = G__41015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41014),posh$lib$q_analyze$fill_qvar_set_$_iter__41011.call(null,cljs.core.chunk_rest.call(null,s__41012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41014),null);
}
} else {
var r = cljs.core.first.call(null,s__41012__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__41011.call(null,cljs.core.rest.call(null,s__41012__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__41018){
var vec__41097 = p__41018;
var e = cljs.core.nth.call(null,vec__41097,(0),null);
var a = cljs.core.nth.call(null,vec__41097,(1),null);
var v = cljs.core.nth.call(null,vec__41097,(2),null);
var eav = vec__41097;
var vec__41100 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__41100,(0),null);
var qa = cljs.core.nth.call(null,vec__41100,(1),null);
var qv = cljs.core.nth.call(null,vec__41100,(2),null);
var iter__11081__auto__ = ((function (vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103(s__41104){
return (new cljs.core.LazySeq(null,((function (vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (){
var s__41104__$1 = s__41104;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41104__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var ee = cljs.core.first.call(null,xs__7294__auto__);
var iterys__11077__auto__ = ((function (s__41104__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103_$_iter__41105(s__41106){
return (new cljs.core.LazySeq(null,((function (s__41104__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (){
var s__41106__$1 = s__41106;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__41106__$1);
if(temp__6738__auto____$1){
var xs__7294__auto____$1 = temp__6738__auto____$1;
var aa = cljs.core.first.call(null,xs__7294__auto____$1);
var iterys__11077__auto__ = ((function (s__41106__$1,s__41104__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103_$_iter__41105_$_iter__41107(s__41108){
return (new cljs.core.LazySeq(null,((function (s__41106__$1,s__41104__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (){
var s__41108__$1 = s__41108;
while(true){
var temp__6738__auto____$2 = cljs.core.seq.call(null,s__41108__$1);
if(temp__6738__auto____$2){
var s__41108__$2 = temp__6738__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41108__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__41108__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__41110 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__41109 = (0);
while(true){
if((i__41109 < size__11080__auto__)){
var vv = cljs.core._nth.call(null,c__11079__auto__,i__41109);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__41109,s__41108__$1,s__41106__$1,s__41104__$1,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p1__41016_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__41016_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__41109,s__41108__$1,s__41106__$1,s__41104__$1,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__41109,s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p__41167){
var vec__41168 = p__41167;
var var_QMARK_ = cljs.core.nth.call(null,vec__41168,(0),null);
var val = cljs.core.nth.call(null,vec__41168,(1),null);
if(cljs.core.truth_((function (){var and__10207__auto__ = var_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__10207__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__41109,s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__41109,s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,exposed_qvars,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p1__41017_SHARP_){
if(cljs.core.truth_(p1__41017_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__41109,s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,exposed_qvars,vv,c__11079__auto__,size__11080__auto__,b__41110,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append.call(null,b__41110,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__41175 = (i__41109 + (1));
i__41109 = G__41175;
continue;
} else {
var G__41176 = (i__41109 + (1));
i__41109 = G__41176;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41110),posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103_$_iter__41105_$_iter__41107.call(null,cljs.core.chunk_rest.call(null,s__41108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41110),null);
}
} else {
var vv = cljs.core.first.call(null,s__41108__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__41108__$1,s__41106__$1,s__41104__$1,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p1__41016_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__41016_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__41108__$1,s__41106__$1,s__41104__$1,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p__41171){
var vec__41172 = p__41171;
var var_QMARK_ = cljs.core.nth.call(null,vec__41172,(0),null);
var val = cljs.core.nth.call(null,vec__41172,(1),null);
if(cljs.core.truth_((function (){var and__10207__auto__ = var_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__10207__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,exposed_qvars,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav){
return (function (p1__41017_SHARP_){
if(cljs.core.truth_(p1__41017_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__41108__$1,s__41106__$1,s__41104__$1,wildcard_count,exposed_qvars,vv,s__41108__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103_$_iter__41105_$_iter__41107.call(null,cljs.core.rest.call(null,s__41108__$2)));
} else {
var G__41177 = cljs.core.rest.call(null,s__41108__$2);
s__41108__$1 = G__41177;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__41106__$1,s__41104__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,null,null));
});})(s__41106__$1,s__41104__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
;
var fs__11078__auto__ = cljs.core.seq.call(null,iterys__11077__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__11078__auto__){
return cljs.core.concat.call(null,fs__11078__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103_$_iter__41105.call(null,cljs.core.rest.call(null,s__41106__$1)));
} else {
var G__41178 = cljs.core.rest.call(null,s__41106__$1);
s__41106__$1 = G__41178;
continue;
}
} else {
return null;
}
break;
}
});})(s__41104__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,null,null));
});})(s__41104__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
;
var fs__11078__auto__ = cljs.core.seq.call(null,iterys__11077__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__11078__auto__){
return cljs.core.concat.call(null,fs__11078__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__41103.call(null,cljs.core.rest.call(null,s__41104__$1)));
} else {
var G__41179 = cljs.core.rest.call(null,s__41104__$1);
s__41104__$1 = G__41179;
continue;
}
} else {
return null;
}
break;
}
});})(vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
,null,null));
});})(vec__41100,qe,qa,qv,vec__41097,e,a,v,eav))
;
return iter__11081__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__10219__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_41289 = cljs.core.vec.call(null,eav);
var ocr_41290 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_41289)) && ((cljs.core.count.call(null,ocr_41289) === 3))){
try{var ocr_41289_0__41318 = cljs.core.nth.call(null,ocr_41289,(0));
if(cljs.core._EQ_.call(null,ocr_41289_0__41318,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41394){if((e41394 instanceof Error)){
var e__40066__auto__ = e41394;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41290)) && ((cljs.core.count.call(null,ocr_41290) === 3))){
try{var ocr_41290_2__41323 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41323 === false)){
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41396){if((e41396 instanceof Error)){
var e__40066__auto____$1 = e41396;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41323 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41323 === true)){
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41397){if((e41397 instanceof Error)){
var e__40066__auto____$2 = e41397;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41397;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41395){if((e41395 instanceof Error)){
var e__40066__auto____$1 = e41395;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41395;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41394;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41389){if((e41389 instanceof Error)){
var e__40066__auto__ = e41389;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41290)) && ((cljs.core.count.call(null,ocr_41290) === 3))){
try{var ocr_41290_1__41325 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41325 === false)){
var a = cljs.core.nth.call(null,ocr_41289,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41392){if((e41392 instanceof Error)){
var e__40066__auto____$1 = e41392;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41290_1__41325 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41325 === true)){
var a = cljs.core.nth.call(null,ocr_41289,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41393){if((e41393 instanceof Error)){
var e__40066__auto____$2 = e41393;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41393;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41391){if((e41391 instanceof Error)){
var e__40066__auto____$1 = e41391;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41390){if((e41390 instanceof Error)){
var e__40066__auto____$1 = e41390;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41390;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41331){if((e41331 instanceof Error)){
var e__40066__auto__ = e41331;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41290)) && ((cljs.core.count.call(null,ocr_41290) === 3))){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41388){if((e41388 instanceof Error)){
var e__40066__auto____$1 = e41388;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41387){if((e41387 instanceof Error)){
var e__40066__auto____$1 = e41387;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41333){if((e41333 instanceof Error)){
var e__40066__auto____$1 = e41333;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41384){if((e41384 instanceof Error)){
var e__40066__auto____$2 = e41384;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var e = cljs.core.nth.call(null,ocr_41289,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41385){if((e41385 instanceof Error)){
var e__40066__auto____$3 = e41385;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var e = cljs.core.nth.call(null,ocr_41289,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41386){if((e41386 instanceof Error)){
var e__40066__auto____$4 = e41386;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41386;

}
}} else {
throw e__40066__auto____$3;
}
} else {
throw e41385;

}
}} else {
throw e__40066__auto____$2;
}
} else {
throw e41384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41383){if((e41383 instanceof Error)){
var e__40066__auto____$2 = e41383;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41334){if((e41334 instanceof Error)){
var e__40066__auto____$2 = e41334;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41382){if((e41382 instanceof Error)){
var e__40066__auto____$3 = e41382;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$3;
}
} else {
throw e41382;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41379){if((e41379 instanceof Error)){
var e__40066__auto____$3 = e41379;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
try{var ocr_41289_2__41320 = cljs.core.nth.call(null,ocr_41289,(2));
if(cljs.core._EQ_.call(null,ocr_41289_2__41320,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41381){if((e41381 instanceof Error)){
var e__40066__auto____$4 = e41381;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41380){if((e41380 instanceof Error)){
var e__40066__auto____$4 = e41380;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41380;

}
}} else {
throw e__40066__auto____$3;
}
} else {
throw e41379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41335){if((e41335 instanceof Error)){
var e__40066__auto____$3 = e41335;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41378){if((e41378 instanceof Error)){
var e__40066__auto____$4 = e41378;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41377){if((e41377 instanceof Error)){
var e__40066__auto____$4 = e41377;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41377;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41336){if((e41336 instanceof Error)){
var e__40066__auto____$4 = e41336;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41376){if((e41376 instanceof Error)){
var e__40066__auto____$5 = e41376;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$5;
}
} else {
throw e41376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41375){if((e41375 instanceof Error)){
var e__40066__auto____$5 = e41375;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$5;
}
} else {
throw e41375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41337){if((e41337 instanceof Error)){
var e__40066__auto____$5 = e41337;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41374){if((e41374 instanceof Error)){
var e__40066__auto____$6 = e41374;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$6;
}
} else {
throw e41374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41373){if((e41373 instanceof Error)){
var e__40066__auto____$6 = e41373;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$6;
}
} else {
throw e41373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41338){if((e41338 instanceof Error)){
var e__40066__auto____$6 = e41338;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41289_1__41319 = cljs.core.nth.call(null,ocr_41289,(1));
if(cljs.core._EQ_.call(null,ocr_41289_1__41319,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41372){if((e41372 instanceof Error)){
var e__40066__auto____$7 = e41372;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41371){if((e41371 instanceof Error)){
var e__40066__auto____$7 = e41371;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41339){if((e41339 instanceof Error)){
var e__40066__auto____$7 = e41339;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
try{var ocr_41289_0__41318 = cljs.core.nth.call(null,ocr_41289,(0));
if(cljs.core._EQ_.call(null,ocr_41289_0__41318,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41370){if((e41370 instanceof Error)){
var e__40066__auto____$8 = e41370;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$8;
}
} else {
throw e41370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41369){if((e41369 instanceof Error)){
var e__40066__auto____$8 = e41369;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$8;
}
} else {
throw e41369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41340){if((e41340 instanceof Error)){
var e__40066__auto____$8 = e41340;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
try{var ocr_41289_0__41318 = cljs.core.nth.call(null,ocr_41289,(0));
if(cljs.core._EQ_.call(null,ocr_41289_0__41318,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41368){if((e41368 instanceof Error)){
var e__40066__auto____$9 = e41368;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$9;
}
} else {
throw e41368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41367){if((e41367 instanceof Error)){
var e__40066__auto____$9 = e41367;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$9;
}
} else {
throw e41367;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41341){if((e41341 instanceof Error)){
var e__40066__auto____$9 = e41341;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
try{var ocr_41289_0__41318 = cljs.core.nth.call(null,ocr_41289,(0));
if(cljs.core._EQ_.call(null,ocr_41289_0__41318,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41366){if((e41366 instanceof Error)){
var e__40066__auto____$10 = e41366;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41365){if((e41365 instanceof Error)){
var e__40066__auto____$10 = e41365;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41342){if((e41342 instanceof Error)){
var e__40066__auto____$10 = e41342;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
try{var ocr_41289_0__41318 = cljs.core.nth.call(null,ocr_41289,(0));
if(cljs.core._EQ_.call(null,ocr_41289_0__41318,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41364){if((e41364 instanceof Error)){
var e__40066__auto____$11 = e41364;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$11;
}
} else {
throw e41364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41363){if((e41363 instanceof Error)){
var e__40066__auto____$11 = e41363;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$11;
}
} else {
throw e41363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41343){if((e41343 instanceof Error)){
var e__40066__auto____$11 = e41343;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41362){if((e41362 instanceof Error)){
var e__40066__auto____$12 = e41362;
if((e__40066__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$12;
}
} else {
throw e41362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41357){if((e41357 instanceof Error)){
var e__40066__auto____$12 = e41357;
if((e__40066__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41361){if((e41361 instanceof Error)){
var e__40066__auto____$13 = e41361;
if((e__40066__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$13;
}
} else {
throw e41361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41358){if((e41358 instanceof Error)){
var e__40066__auto____$13 = e41358;
if((e__40066__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41360){if((e41360 instanceof Error)){
var e__40066__auto____$14 = e41360;
if((e__40066__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$14;
}
} else {
throw e41360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41359){if((e41359 instanceof Error)){
var e__40066__auto____$14 = e41359;
if((e__40066__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$14;
}
} else {
throw e41359;

}
}} else {
throw e__40066__auto____$13;
}
} else {
throw e41358;

}
}} else {
throw e__40066__auto____$12;
}
} else {
throw e41357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41344){if((e41344 instanceof Error)){
var e__40066__auto____$12 = e41344;
if((e__40066__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41356){if((e41356 instanceof Error)){
var e__40066__auto____$13 = e41356;
if((e__40066__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$13;
}
} else {
throw e41356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41355){if((e41355 instanceof Error)){
var e__40066__auto____$13 = e41355;
if((e__40066__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$13;
}
} else {
throw e41355;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41345){if((e41345 instanceof Error)){
var e__40066__auto____$13 = e41345;
if((e__40066__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === true)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41354){if((e41354 instanceof Error)){
var e__40066__auto____$14 = e41354;
if((e__40066__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$14;
}
} else {
throw e41354;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41353){if((e41353 instanceof Error)){
var e__40066__auto____$14 = e41353;
if((e__40066__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$14;
}
} else {
throw e41353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41346){if((e41346 instanceof Error)){
var e__40066__auto____$14 = e41346;
if((e__40066__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_41290_2__41329 = cljs.core.nth.call(null,ocr_41290,(2));
if((ocr_41290_2__41329 === false)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === true)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41352){if((e41352 instanceof Error)){
var e__40066__auto____$15 = e41352;
if((e__40066__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$15;
}
} else {
throw e41352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41348){if((e41348 instanceof Error)){
var e__40066__auto____$15 = e41348;
if((e__40066__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_41290_0__41327 = cljs.core.nth.call(null,ocr_41290,(0));
if((ocr_41290_0__41327 === false)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === true)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41350){if((e41350 instanceof Error)){
var e__40066__auto____$16 = e41350;
if((e__40066__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_41290_1__41328 = cljs.core.nth.call(null,ocr_41290,(1));
if((ocr_41290_1__41328 === false)){
var e = cljs.core.nth.call(null,ocr_41289,(0));
var a = cljs.core.nth.call(null,ocr_41289,(1));
var v = cljs.core.nth.call(null,ocr_41289,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41351){if((e41351 instanceof Error)){
var e__40066__auto____$17 = e41351;
if((e__40066__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$17;
}
} else {
throw e41351;

}
}} else {
throw e__40066__auto____$16;
}
} else {
throw e41350;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41349){if((e41349 instanceof Error)){
var e__40066__auto____$16 = e41349;
if((e__40066__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$16;
}
} else {
throw e41349;

}
}} else {
throw e__40066__auto____$15;
}
} else {
throw e41348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41347){if((e41347 instanceof Error)){
var e__40066__auto____$15 = e41347;
if((e__40066__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$15;
}
} else {
throw e41347;

}
}} else {
throw e__40066__auto____$14;
}
} else {
throw e41346;

}
}} else {
throw e__40066__auto____$13;
}
} else {
throw e41345;

}
}} else {
throw e__40066__auto____$12;
}
} else {
throw e41344;

}
}} else {
throw e__40066__auto____$11;
}
} else {
throw e41343;

}
}} else {
throw e__40066__auto____$10;
}
} else {
throw e41342;

}
}} else {
throw e__40066__auto____$9;
}
} else {
throw e41341;

}
}} else {
throw e__40066__auto____$8;
}
} else {
throw e41340;

}
}} else {
throw e__40066__auto____$7;
}
} else {
throw e41339;

}
}} else {
throw e__40066__auto____$6;
}
} else {
throw e41338;

}
}} else {
throw e__40066__auto____$5;
}
} else {
throw e41337;

}
}} else {
throw e__40066__auto____$4;
}
} else {
throw e41336;

}
}} else {
throw e__40066__auto____$3;
}
} else {
throw e41335;

}
}} else {
throw e__40066__auto____$2;
}
} else {
throw e41334;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41332){if((e41332 instanceof Error)){
var e__40066__auto____$1 = e41332;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41332;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41330){if((e41330 instanceof Error)){
var e__40066__auto__ = e41330;
if((e__40066__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__40066__auto__;
}
} else {
throw e41330;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_41492 = cljs.core.vec.call(null,eav);
var ocr_41493 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_41492)) && ((cljs.core.count.call(null,ocr_41492) === 3))){
try{var ocr_41492_0__41518 = cljs.core.nth.call(null,ocr_41492,(0));
if(cljs.core._EQ_.call(null,ocr_41492_0__41518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41492_2__41520 = cljs.core.nth.call(null,ocr_41492,(2));
if(cljs.core._EQ_.call(null,ocr_41492_2__41520,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e41582){if((e41582 instanceof Error)){
var e__40066__auto__ = e41582;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41493)) && ((cljs.core.count.call(null,ocr_41493) === 3))){
try{var ocr_41493_2__41523 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41523 === false)){
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41584){if((e41584 instanceof Error)){
var e__40066__auto____$1 = e41584;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41523 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41523 === true)){
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41585){if((e41585 instanceof Error)){
var e__40066__auto____$2 = e41585;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41585;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41583){if((e41583 instanceof Error)){
var e__40066__auto____$1 = e41583;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41583;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41577){if((e41577 instanceof Error)){
var e__40066__auto__ = e41577;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{var ocr_41492_2__41520 = cljs.core.nth.call(null,ocr_41492,(2));
if(cljs.core._EQ_.call(null,ocr_41492_2__41520,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41493)) && ((cljs.core.count.call(null,ocr_41493) === 3))){
try{var ocr_41493_1__41525 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41525 === false)){
var a = cljs.core.nth.call(null,ocr_41492,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41580){if((e41580 instanceof Error)){
var e__40066__auto____$1 = e41580;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41525 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41525 === true)){
var a = cljs.core.nth.call(null,ocr_41492,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41581){if((e41581 instanceof Error)){
var e__40066__auto____$2 = e41581;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41581;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41579){if((e41579 instanceof Error)){
var e__40066__auto____$1 = e41579;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41578){if((e41578 instanceof Error)){
var e__40066__auto____$1 = e41578;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41578;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41531){if((e41531 instanceof Error)){
var e__40066__auto__ = e41531;
if((e__40066__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_41493)) && ((cljs.core.count.call(null,ocr_41493) === 3))){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41492_2__41520 = cljs.core.nth.call(null,ocr_41492,(2));
if(cljs.core._EQ_.call(null,ocr_41492_2__41520,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41576){if((e41576 instanceof Error)){
var e__40066__auto____$1 = e41576;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41575){if((e41575 instanceof Error)){
var e__40066__auto____$1 = e41575;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41533){if((e41533 instanceof Error)){
var e__40066__auto____$1 = e41533;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
try{var ocr_41492_2__41520 = cljs.core.nth.call(null,ocr_41492,(2));
if(cljs.core._EQ_.call(null,ocr_41492_2__41520,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41572){if((e41572 instanceof Error)){
var e__40066__auto____$2 = e41572;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
var a = cljs.core.nth.call(null,ocr_41492,(1));
var e = cljs.core.nth.call(null,ocr_41492,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41573){if((e41573 instanceof Error)){
var e__40066__auto____$3 = e41573;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === false)){
var a = cljs.core.nth.call(null,ocr_41492,(1));
var e = cljs.core.nth.call(null,ocr_41492,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41574){if((e41574 instanceof Error)){
var e__40066__auto____$4 = e41574;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41574;

}
}} else {
throw e__40066__auto____$3;
}
} else {
throw e41573;

}
}} else {
throw e__40066__auto____$2;
}
} else {
throw e41572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41571){if((e41571 instanceof Error)){
var e__40066__auto____$2 = e41571;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$2;
}
} else {
throw e41571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41534){if((e41534 instanceof Error)){
var e__40066__auto____$2 = e41534;
if((e__40066__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
try{var ocr_41492_2__41520 = cljs.core.nth.call(null,ocr_41492,(2));
if(cljs.core._EQ_.call(null,ocr_41492_2__41520,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41570){if((e41570 instanceof Error)){
var e__40066__auto____$3 = e41570;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$3;
}
} else {
throw e41570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41569){if((e41569 instanceof Error)){
var e__40066__auto____$3 = e41569;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$3;
}
} else {
throw e41569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41535){if((e41535 instanceof Error)){
var e__40066__auto____$3 = e41535;
if((e__40066__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === true)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41568){if((e41568 instanceof Error)){
var e__40066__auto____$4 = e41568;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41567){if((e41567 instanceof Error)){
var e__40066__auto____$4 = e41567;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$4;
}
} else {
throw e41567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41536){if((e41536 instanceof Error)){
var e__40066__auto____$4 = e41536;
if((e__40066__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === false)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41566){if((e41566 instanceof Error)){
var e__40066__auto____$5 = e41566;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$5;
}
} else {
throw e41566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41565){if((e41565 instanceof Error)){
var e__40066__auto____$5 = e41565;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$5;
}
} else {
throw e41565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41537){if((e41537 instanceof Error)){
var e__40066__auto____$5 = e41537;
if((e__40066__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === true)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
try{var ocr_41492_1__41519 = cljs.core.nth.call(null,ocr_41492,(1));
if(cljs.core._EQ_.call(null,ocr_41492_1__41519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41564){if((e41564 instanceof Error)){
var e__40066__auto____$6 = e41564;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$6;
}
} else {
throw e41564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41561){if((e41561 instanceof Error)){
var e__40066__auto____$6 = e41561;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
try{var ocr_41492_0__41518 = cljs.core.nth.call(null,ocr_41492,(0));
if(cljs.core._EQ_.call(null,ocr_41492_0__41518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41563){if((e41563 instanceof Error)){
var e__40066__auto____$7 = e41563;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41562){if((e41562 instanceof Error)){
var e__40066__auto____$7 = e41562;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41562;

}
}} else {
throw e__40066__auto____$6;
}
} else {
throw e41561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41538){if((e41538 instanceof Error)){
var e__40066__auto____$6 = e41538;
if((e__40066__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === false)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
try{var ocr_41492_0__41518 = cljs.core.nth.call(null,ocr_41492,(0));
if(cljs.core._EQ_.call(null,ocr_41492_0__41518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41560){if((e41560 instanceof Error)){
var e__40066__auto____$7 = e41560;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41559){if((e41559 instanceof Error)){
var e__40066__auto____$7 = e41559;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$7;
}
} else {
throw e41559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41539){if((e41539 instanceof Error)){
var e__40066__auto____$7 = e41539;
if((e__40066__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === true)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === false)){
try{var ocr_41492_0__41518 = cljs.core.nth.call(null,ocr_41492,(0));
if(cljs.core._EQ_.call(null,ocr_41492_0__41518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41558){if((e41558 instanceof Error)){
var e__40066__auto____$8 = e41558;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$8;
}
} else {
throw e41558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41552){if((e41552 instanceof Error)){
var e__40066__auto____$8 = e41552;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41556){if((e41556 instanceof Error)){
var e__40066__auto____$9 = e41556;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41557){if((e41557 instanceof Error)){
var e__40066__auto____$10 = e41557;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41557;

}
}} else {
throw e__40066__auto____$9;
}
} else {
throw e41556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41553){if((e41553 instanceof Error)){
var e__40066__auto____$9 = e41553;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === false)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41555){if((e41555 instanceof Error)){
var e__40066__auto____$10 = e41555;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41555;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41554){if((e41554 instanceof Error)){
var e__40066__auto____$10 = e41554;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41554;

}
}} else {
throw e__40066__auto____$9;
}
} else {
throw e41553;

}
}} else {
throw e__40066__auto____$8;
}
} else {
throw e41552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41540){if((e41540 instanceof Error)){
var e__40066__auto____$8 = e41540;
if((e__40066__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === false)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41551){if((e41551 instanceof Error)){
var e__40066__auto____$9 = e41551;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$9;
}
} else {
throw e41551;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41550){if((e41550 instanceof Error)){
var e__40066__auto____$9 = e41550;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$9;
}
} else {
throw e41550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41541){if((e41541 instanceof Error)){
var e__40066__auto____$9 = e41541;
if((e__40066__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === true)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === false)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41549){if((e41549 instanceof Error)){
var e__40066__auto____$10 = e41549;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41549;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41548){if((e41548 instanceof Error)){
var e__40066__auto____$10 = e41548;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$10;
}
} else {
throw e41548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41542){if((e41542 instanceof Error)){
var e__40066__auto____$10 = e41542;
if((e__40066__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_41493_2__41529 = cljs.core.nth.call(null,ocr_41493,(2));
if((ocr_41493_2__41529 === false)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === true)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === false)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41547){if((e41547 instanceof Error)){
var e__40066__auto____$11 = e41547;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$11;
}
} else {
throw e41547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41544){if((e41544 instanceof Error)){
var e__40066__auto____$11 = e41544;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_41493_0__41527 = cljs.core.nth.call(null,ocr_41493,(0));
if((ocr_41493_0__41527 === false)){
try{var ocr_41493_1__41528 = cljs.core.nth.call(null,ocr_41493,(1));
if((ocr_41493_1__41528 === true)){
var e = cljs.core.nth.call(null,ocr_41492,(0));
var a = cljs.core.nth.call(null,ocr_41492,(1));
var v = cljs.core.nth.call(null,ocr_41492,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41546){if((e41546 instanceof Error)){
var e__40066__auto____$12 = e41546;
if((e__40066__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$12;
}
} else {
throw e41546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41545){if((e41545 instanceof Error)){
var e__40066__auto____$12 = e41545;
if((e__40066__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$12;
}
} else {
throw e41545;

}
}} else {
throw e__40066__auto____$11;
}
} else {
throw e41544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41543){if((e41543 instanceof Error)){
var e__40066__auto____$11 = e41543;
if((e__40066__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$11;
}
} else {
throw e41543;

}
}} else {
throw e__40066__auto____$10;
}
} else {
throw e41542;

}
}} else {
throw e__40066__auto____$9;
}
} else {
throw e41541;

}
}} else {
throw e__40066__auto____$8;
}
} else {
throw e41540;

}
}} else {
throw e__40066__auto____$7;
}
} else {
throw e41539;

}
}} else {
throw e__40066__auto____$6;
}
} else {
throw e41538;

}
}} else {
throw e__40066__auto____$5;
}
} else {
throw e41537;

}
}} else {
throw e__40066__auto____$4;
}
} else {
throw e41536;

}
}} else {
throw e__40066__auto____$3;
}
} else {
throw e41535;

}
}} else {
throw e__40066__auto____$2;
}
} else {
throw e41534;

}
}} else {
throw e__40066__auto____$1;
}
} else {
throw e41533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41532){if((e41532 instanceof Error)){
var e__40066__auto____$1 = e41532;
if((e__40066__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__40066__auto____$1;
}
} else {
throw e41532;

}
}} else {
throw e__40066__auto__;
}
} else {
throw e41531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41530){if((e41530 instanceof Error)){
var e__40066__auto__ = e41530;
if((e__40066__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__40066__auto__;
}
} else {
throw e41530;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__41591){
var vec__41592 = p__41591;
var k = cljs.core.nth.call(null,vec__41592,(0),null);
var v = cljs.core.nth.call(null,vec__41592,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__41592,k,v){
return (function (p1__41586_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__41586_SHARP_));
});})(vec__41592,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__41600){
var vec__41601 = p__41600;
var k = cljs.core.nth.call(null,vec__41601,(0),null);
var v = cljs.core.nth.call(null,vec__41601,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__41601,k,v){
return (function (p1__41595_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__41595_SHARP_));
});})(vec__41601,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__41604_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__41604_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__41608 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__41608,(0),null);
var e = cljs.core.nth.call(null,vec__41608,(1),null);
var a = cljs.core.nth.call(null,vec__41608,(2),null);
var v = cljs.core.nth.call(null,vec__41608,(3),null);
if(cljs.core.truth_((function (){var or__10219__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__10219__auto__){
return or__10219__auto__;
} else {
var and__10207__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__10207__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__10207__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__41611 = var$;
var G__41612 = dbvarmap;
var G__41613 = cljs.core.rest.call(null,dbeavs);
var$ = G__41611;
dbvarmap = G__41612;
dbeavs = G__41613;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__41614 = (n + (1));
var G__41615 = cljs.core.rest.call(null,xs__$1);
n = G__41614;
xs__$1 = G__41615;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__10207__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__10207__auto__){
var and__10207__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__10207__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__41616_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__41616_SHARP_))){
return type.call(null,p1__41616_SHARP_);
} else {
return p1__41616_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__41621){
var vec__41622 = p__41621;
var db_sym = cljs.core.nth.call(null,vec__41622,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__41622,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__11081__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__41629(s__41630){
return (new cljs.core.LazySeq(null,(function (){
var s__41630__$1 = s__41630;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41630__$1);
if(temp__6738__auto__){
var s__41630__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41630__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__41630__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__41632 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__41631 = (0);
while(true){
if((i__41631 < size__11080__auto__)){
var x = cljs.core._nth.call(null,c__11079__auto__,i__41631);
cljs.core.chunk_append.call(null,b__41632,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__41633 = (i__41631 + (1));
i__41631 = G__41633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41632),posh$lib$q_analyze$resolve_any_idents_$_iter__41629.call(null,cljs.core.chunk_rest.call(null,s__41630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41632),null);
}
} else {
var x = cljs.core.first.call(null,s__41630__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__41629.call(null,cljs.core.rest.call(null,s__41630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__41663){
var vec__41664 = p__41663;
var sym = cljs.core.nth.call(null,vec__41664,(0),null);
var arg = cljs.core.nth.call(null,vec__41664,(1),null);
var or__10219__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__41667){
var vec__41668 = p__41667;
var a = cljs.core.nth.call(null,vec__41668,(0),null);
var v = cljs.core.nth.call(null,vec__41668,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__41671){
var vec__41672 = p__41671;
var db_sym = cljs.core.nth.call(null,vec__41672,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__41672,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__41675){
var vec__41676 = p__41675;
var db_sym = cljs.core.nth.call(null,vec__41676,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__41676,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__41679){
var vec__41680 = p__41679;
var seq__41681 = cljs.core.seq.call(null,vec__41680);
var first__41682 = cljs.core.first.call(null,seq__41681);
var seq__41681__$1 = cljs.core.next.call(null,seq__41681);
var db = first__41682;
var eav = seq__41681__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__41680,seq__41681,first__41682,seq__41681__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__41636_SHARP_){
var temp__6736__auto__ = in_vars.call(null,p1__41636_SHARP_);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__41636_SHARP_;
}
});})(vec__41680,seq__41681,first__41682,seq__41681__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__41683){
var vec__41684 = p__41683;
var k = cljs.core.nth.call(null,vec__41684,(0),null);
var v = cljs.core.nth.call(null,vec__41684,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__41637_SHARP_){
if(cljs.core.truth_((function (){var and__10207__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__41637_SHARP_);
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__41637_SHARP_));
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__41637_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__41638_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__41638_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__41638_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map