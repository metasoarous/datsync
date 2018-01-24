// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.pull_api');
goog.require('cljs.core');
goog.require('datahike.db');
goog.require('datahike.pull_parser');
datahike.pull_api.into_BANG_ = (function datahike$pull_api$into_BANG_(transient_coll,items){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,transient_coll,items);
});
datahike.pull_api._PLUS_default_limit_PLUS_ = (1000);
datahike.pull_api.initial_frame = (function datahike$pull_api$initial_frame(pattern,eids,multi_QMARK_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"multi?","multi?",-749311069),new cljs.core.Keyword(null,"eids","eids",1546550700),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"kvps","kvps",65308317),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"results","results",-1134170113)],[multi_QMARK_,eids,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),pattern,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)]);
});
datahike.pull_api.subpattern_frame = (function datahike$pull_api$subpattern_frame(pattern,eids,multi_QMARK_,attr){
return cljs.core.assoc.call(null,datahike.pull_api.initial_frame.call(null,pattern,eids,multi_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
});
datahike.pull_api.reset_frame = (function datahike$pull_api$reset_frame(frame,eids,kvps){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
return cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.seq.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(pattern),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__47893 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq.call(null,kvps)){
return cljs.core.conj_BANG_.call(null,G__47893,kvps);
} else {
return G__47893;
}
})());
});
datahike.pull_api.push_recursion = (function datahike$pull_api$push_recursion(rec,attr,eid){
var map__47896 = rec;
var map__47896__$1 = ((((!((map__47896 == null)))?((((map__47896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47896):map__47896);
var depth = cljs.core.get.call(null,map__47896__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var seen = cljs.core.get.call(null,map__47896__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return cljs.core.assoc.call(null,rec,new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.update.call(null,depth,attr,cljs.core.fnil.call(null,cljs.core.inc,(0))),new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.call(null,seen,eid));
});
datahike.pull_api.seen_eid_QMARK_ = (function datahike$pull_api$seen_eid_QMARK_(frame,eid){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"seen","seen",-518999789)], null),cljs.core.PersistentHashSet.EMPTY),eid);
});
datahike.pull_api.pull_seen_eid = (function datahike$pull_api$pull_seen_eid(frame,frames,eid){
if(cljs.core.truth_(datahike.pull_api.seen_eid_QMARK_.call(null,frame,eid))){
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.conj_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)));
} else {
return null;
}
});
datahike.pull_api.single_frame_result = (function datahike$pull_api$single_frame_result(key,frame){
var G__47899 = new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame);
var G__47899__$1 = (((G__47899 == null))?null:cljs.core.persistent_BANG_.call(null,G__47899));
if((G__47899__$1 == null)){
return null;
} else {
return cljs.core.get.call(null,G__47899__$1,key);
}
});
datahike.pull_api.recursion_result = (function datahike$pull_api$recursion_result(frame){
return datahike.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datahike.pull-api","recursion","datahike.pull-api/recursion",-1095311814),frame);
});
datahike.pull_api.recursion_frame = (function datahike$pull_api$recursion_frame(parent,eid){
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(parent);
var rec = datahike.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr,eid);
return cljs.core.assoc.call(null,datahike.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datahike.pull-api","recursion","datahike.pull-api/recursion",-1095311814)),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});
datahike.pull_api.pull_recursion_frame = (function datahike$pull_api$pull_recursion_frame(db,p__47900){
var vec__47905 = p__47900;
var seq__47906 = cljs.core.seq.call(null,vec__47905);
var first__47907 = cljs.core.first.call(null,seq__47906);
var seq__47906__$1 = cljs.core.next.call(null,seq__47906);
var frame = first__47907;
var frames = seq__47906__$1;
var temp__6736__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6736__auto__){
var eids = temp__6736__auto__;
var frame__$1 = datahike.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),datahike.pull_api.recursion_result.call(null,frame));
var eid = cljs.core.first.call(null,eids);
var or__10219__auto__ = datahike.pull_api.pull_seen_eid.call(null,frame__$1,frames,eid);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.conj.call(null,frames,frame__$1,datahike.pull_api.recursion_frame.call(null,frame__$1,eid));
}
} else {
var kvps = datahike.pull_api.recursion_result.call(null,frame);
var results = (function (){var G__47908 = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.seq.call(null,kvps)){
return cljs.core.conj_BANG_.call(null,G__47908,kvps);
} else {
return G__47908;
}
})();
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"results","results",-1134170113),results));
}
});
datahike.pull_api.recurse_attr = (function datahike$pull_api$recurse_attr(db,attr,multi_QMARK_,eids,eid,parent,frames){
var map__47911 = parent;
var map__47911__$1 = ((((!((map__47911 == null)))?((((map__47911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47911):map__47911);
var recursion = cljs.core.get.call(null,map__47911__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var pattern = cljs.core.get.call(null,map__47911__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var depth = cljs.core.get.call(null,cljs.core.get.call(null,recursion,new cljs.core.Keyword(null,"depth","depth",1768663640)),attr,(0));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(pattern),attr)),depth)){
return cljs.core.conj.call(null,frames,parent);
} else {
return datahike.pull_api.pull_recursion_frame.call(null,db,cljs.core.conj.call(null,frames,parent,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"recursion","recursion",-749738765),new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"multi?","multi?",-749311069),multi_QMARK_,new cljs.core.Keyword(null,"eids","eids",1546550700),eids,new cljs.core.Keyword(null,"recursion","recursion",-749738765),recursion,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null)));
}
});
var pattern_47913 = (new datahike.pull_parser.PullSpec(true,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
datahike.pull_api.expand_frame = ((function (pattern_47913){
return (function datahike$pull_api$expand_frame(parent,eid,attr_key,multi_QMARK_,eids){
var rec = datahike.pull_api.push_recursion.call(null,new cljs.core.Keyword(null,"recursion","recursion",-749738765).cljs$core$IFn$_invoke$arity$1(parent),attr_key,eid);
return cljs.core.assoc.call(null,datahike.pull_api.subpattern_frame.call(null,pattern_47913,eids,multi_QMARK_,attr_key),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec);
});})(pattern_47913))
;
datahike.pull_api.pull_attr_datoms = (function datahike$pull_api$pull_attr_datoms(db,attr_key,attr,eid,forward_QMARK_,datoms,opts,p__47915){
var vec__47923 = p__47915;
var seq__47924 = cljs.core.seq.call(null,vec__47923);
var first__47925 = cljs.core.first.call(null,seq__47924);
var seq__47924__$1 = cljs.core.next.call(null,seq__47924);
var parent = first__47925;
var frames = seq__47924__$1;
var limit = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"limit","limit",-1355822363),datahike.pull_api._PLUS_default_limit_PLUS_);
var found = cljs.core.not_empty.call(null,(function (){var G__47926 = datoms;
if(cljs.core.truth_(limit)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,limit),G__47926);
} else {
return G__47926;
}
})());
if(cljs.core.truth_(found)){
var ref_QMARK_ = datahike.db.ref_QMARK_.call(null,db,attr);
var component_QMARK_ = (ref_QMARK_) && (datahike.db.component_QMARK_.call(null,db,attr));
var multi_QMARK_ = (cljs.core.truth_(forward_QMARK_)?datahike.db.multival_QMARK_.call(null,db,attr):!(component_QMARK_));
var datom_val = (cljs.core.truth_(forward_QMARK_)?((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames){
return (function (d){
return d.v;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames))
:((function (ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames){
return (function (d){
return d.e;
});})(ref_QMARK_,component_QMARK_,multi_QMARK_,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames))
);
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"subpattern","subpattern",45002743))){
return cljs.core.conj.call(null,frames,parent,datahike.pull_api.subpattern_frame.call(null,new cljs.core.Keyword(null,"subpattern","subpattern",45002743).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.mapv.call(null,datom_val,found),multi_QMARK_,attr_key));
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"recursion","recursion",-749738765))){
return datahike.pull_api.recurse_attr.call(null,db,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found),eid,parent,frames);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = component_QMARK_;
if(and__10207__auto__){
return forward_QMARK_;
} else {
return and__10207__auto__;
}
})())){
return cljs.core.conj.call(null,frames,parent,datahike.pull_api.expand_frame.call(null,parent,eid,attr_key,multi_QMARK_,cljs.core.mapv.call(null,datom_val,found)));
} else {
var as_value = (function (){var G__47927 = datom_val;
if(ref_QMARK_){
return cljs.core.comp.call(null,((function (G__47927,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames){
return (function (p1__47914_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("db","id","db/id",-1388397098)],[p1__47914_SHARP_]);
});})(G__47927,ref_QMARK_,component_QMARK_,multi_QMARK_,datom_val,limit,found,vec__47923,seq__47924,first__47925,seq__47924__$1,parent,frames))
,G__47927);
} else {
return G__47927;
}
})();
var single_QMARK_ = !(multi_QMARK_);
return cljs.core.conj.call(null,frames,cljs.core.update.call(null,parent,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,(function (){var G__47928 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,as_value),found);
if(single_QMARK_){
return cljs.core.first.call(null,G__47928);
} else {
return G__47928;
}
})()));

}
}
}
} else {
return cljs.core.conj.call(null,frames,(function (){var G__47929 = parent;
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
return cljs.core.update.call(null,G__47929,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,attr_key,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return G__47929;
}
})());
}
});
datahike.pull_api.pull_attr = (function datahike$pull_api$pull_attr(db,spec,eid,frames){
var vec__47933 = spec;
var attr_key = cljs.core.nth.call(null,vec__47933,(0),null);
var opts = cljs.core.nth.call(null,vec__47933,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),attr_key)){
if(cljs.core.truth_(cljs.core.not_empty.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null))))){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword("db","id","db/id",-1388397098),eid));
} else {
return frames;
}
} else {
var attr = new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(opts);
var forward_QMARK_ = cljs.core._EQ_.call(null,attr_key,attr);
var results = ((forward_QMARK_)?datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,attr], null)):datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,eid], null)));
return datahike.pull_api.pull_attr_datoms.call(null,db,attr_key,attr,eid,forward_QMARK_,results,opts,frames);
}
});
datahike.pull_api.filter_reverse_attrs = cljs.core.filter.call(null,(function (p__47936){
var vec__47937 = p__47936;
var k = cljs.core.nth.call(null,vec__47937,(0),null);
var v = cljs.core.nth.call(null,vec__47937,(1),null);
return cljs.core.not_EQ_.call(null,k,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(v));
}));
datahike.pull_api.expand_reverse_subpattern_frame = (function datahike$pull_api$expand_reverse_subpattern_frame(parent,eid,rattrs){
return datahike.pull_api.subpattern_frame.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),rattrs,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false,new cljs.core.Keyword("datahike.pull-api","expand-rev","datahike.pull-api/expand-rev",1335028467));
});
datahike.pull_api.expand_result = (function datahike$pull_api$expand_result(frames,kvps){
return cljs.core.conj.call(null,cljs.core.rest.call(null,frames),cljs.core.update.call(null,cljs.core.first.call(null,frames),new cljs.core.Keyword(null,"kvps","kvps",65308317),datahike.pull_api.into_BANG_,cljs.core.persistent_BANG_.call(null,kvps)));
});
datahike.pull_api.pull_expand_reverse_frame = (function datahike$pull_api$pull_expand_reverse_frame(db,p__47940){
var vec__47944 = p__47940;
var seq__47945 = cljs.core.seq.call(null,vec__47944);
var first__47946 = cljs.core.first.call(null,seq__47945);
var seq__47945__$1 = cljs.core.next.call(null,seq__47945);
var frame = first__47946;
var frames = seq__47945__$1;
return datahike.pull_api.expand_result.call(null,frames,datahike.pull_api.into_BANG_.call(null,new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154).cljs$core$IFn$_invoke$arity$1(frame),(function (){var or__10219__auto__ = datahike.pull_api.single_frame_result.call(null,new cljs.core.Keyword("datahike.pull-api","expand-rev","datahike.pull-api/expand-rev",1335028467),frame);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
});
datahike.pull_api.pull_expand_frame = (function datahike$pull_api$pull_expand_frame(db,p__47947){
var vec__47954 = p__47947;
var seq__47955 = cljs.core.seq.call(null,vec__47954);
var first__47956 = cljs.core.first.call(null,seq__47955);
var seq__47955__$1 = cljs.core.next.call(null,seq__47955);
var frame = first__47956;
var frames = seq__47955__$1;
var temp__6736__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6736__auto__){
var datoms_by_attr = temp__6736__auto__;
var vec__47957 = cljs.core.first.call(null,datoms_by_attr);
var attr = cljs.core.nth.call(null,vec__47957,(0),null);
var datoms = cljs.core.nth.call(null,vec__47957,(1),null);
var opts = cljs.core.get.call(null,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null)),attr,cljs.core.PersistentArrayMap.EMPTY);
return datahike.pull_api.pull_attr_datoms.call(null,db,attr,attr,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame),true,datoms,opts,cljs.core.conj.call(null,frames,cljs.core.update.call(null,frame,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.rest)));
} else {
var temp__6736__auto____$1 = cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,datahike.pull_api.filter_reverse_attrs,cljs.core.get_in.call(null,frame,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null))));
if(cljs.core.truth_(temp__6736__auto____$1)){
var rattrs = temp__6736__auto____$1;
var frame__$1 = cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand-rev","expand-rev",1249112650),new cljs.core.Keyword(null,"expand-kvps","expand-kvps",44141154),new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
return cljs.core.conj.call(null,frames,frame__$1,datahike.pull_api.expand_reverse_subpattern_frame.call(null,frame__$1,new cljs.core.Keyword(null,"eid","eid",559519930).cljs$core$IFn$_invoke$arity$1(frame__$1),rattrs));
} else {
return datahike.pull_api.expand_result.call(null,frames,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame));
}
}
});
datahike.pull_api.pull_wildcard_expand = (function datahike$pull_api$pull_wildcard_expand(db,frame,frames,eid,pattern){
var datoms = cljs.core.group_by.call(null,(function (d){
return d.a;
}),datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));
var map__47963 = frame;
var map__47963__$1 = ((((!((map__47963 == null)))?((((map__47963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47963):map__47963);
var attr = cljs.core.get.call(null,map__47963__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var recursion = cljs.core.get.call(null,map__47963__$1,new cljs.core.Keyword(null,"recursion","recursion",-749738765));
var rec = (function (){var G__47965 = recursion;
if(!((attr == null))){
return datahike.pull_api.push_recursion.call(null,G__47965,attr,eid);
} else {
return G__47965;
}
})();
return datahike.pull_api.pull_expand_frame.call(null,db,cljs.core.conj.call(null,frames,frame,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.transient$.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)),new cljs.core.Keyword(null,"eid","eid",559519930),eid,new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.seq.call(null,datoms),new cljs.core.Keyword(null,"recursion","recursion",-749738765),rec], null)));
});
datahike.pull_api.pull_wildcard = (function datahike$pull_api$pull_wildcard(db,frame,frames){
var map__47968 = frame;
var map__47968__$1 = ((((!((map__47968 == null)))?((((map__47968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47968):map__47968);
var eid = cljs.core.get.call(null,map__47968__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
var pattern = cljs.core.get.call(null,map__47968__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var or__10219__auto__ = datahike.pull_api.pull_seen_eid.call(null,frame,frames,eid);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.pull_api.pull_wildcard_expand.call(null,db,frame,frames,eid,pattern);
}
});
datahike.pull_api.pull_pattern_frame = (function datahike$pull_api$pull_pattern_frame(db,p__47970){
while(true){
var vec__47974 = p__47970;
var seq__47975 = cljs.core.seq.call(null,vec__47974);
var first__47976 = cljs.core.first.call(null,seq__47975);
var seq__47975__$1 = cljs.core.next.call(null,seq__47975);
var frame = first__47976;
var frames = seq__47975__$1;
var temp__6736__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"eids","eids",1546550700).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6736__auto__){
var eids = temp__6736__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(frame))){
return datahike.pull_api.pull_wildcard.call(null,db,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"eid","eid",559519930),cljs.core.first.call(null,eids),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),false),frames);
} else {
var temp__6736__auto____$1 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(frame));
if(temp__6736__auto____$1){
var specs = temp__6736__auto____$1;
var spec = cljs.core.first.call(null,specs);
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(frame);
var new_frames = cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"specs","specs",1426570741),cljs.core.rest.call(null,specs)));
return datahike.pull_api.pull_attr.call(null,db,spec,cljs.core.first.call(null,eids),new_frames);
} else {
var G__47977 = db;
var G__47978 = cljs.core.conj.call(null,frames,datahike.pull_api.reset_frame.call(null,frame,cljs.core.rest.call(null,eids),cljs.core.not_empty.call(null,cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"kvps","kvps",65308317).cljs$core$IFn$_invoke$arity$1(frame)))));
db = G__47977;
p__47970 = G__47978;
continue;
}
}
} else {
return cljs.core.conj.call(null,frames,cljs.core.assoc.call(null,frame,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)));
}
break;
}
});
datahike.pull_api.pull_pattern = (function datahike$pull_api$pull_pattern(db,frames){
while(true){
var G__47985 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames));
var G__47985__$1 = (((G__47985 instanceof cljs.core.Keyword))?G__47985.fqn:null);
switch (G__47985__$1) {
case "expand":
var G__47992 = db;
var G__47993 = datahike.pull_api.pull_expand_frame.call(null,db,frames);
db = G__47992;
frames = G__47993;
continue;

break;
case "expand-rev":
var G__47994 = db;
var G__47995 = datahike.pull_api.pull_expand_reverse_frame.call(null,db,frames);
db = G__47994;
frames = G__47995;
continue;

break;
case "pattern":
var G__47996 = db;
var G__47997 = datahike.pull_api.pull_pattern_frame.call(null,db,frames);
db = G__47996;
frames = G__47997;
continue;

break;
case "recursion":
var G__47998 = db;
var G__47999 = datahike.pull_api.pull_recursion_frame.call(null,db,frames);
db = G__47998;
frames = G__47999;
continue;

break;
case "done":
var vec__47986 = frames;
var seq__47987 = cljs.core.seq.call(null,vec__47986);
var first__47988 = cljs.core.first.call(null,seq__47987);
var seq__47987__$1 = cljs.core.next.call(null,seq__47987);
var f = first__47988;
var remaining = seq__47987__$1;
var result = (function (){var G__47989 = cljs.core.persistent_BANG_.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(f));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"multi?","multi?",-749311069).cljs$core$IFn$_invoke$arity$1(f))){
return cljs.core.first.call(null,G__47989);
} else {
return G__47989;
}
})();
if(cljs.core.seq.call(null,remaining)){
var G__48000 = db;
var G__48001 = cljs.core.conj.call(null,cljs.core.rest.call(null,remaining),(function (){var G__47990 = cljs.core.first.call(null,remaining);
if(cljs.core.truth_(result)){
return cljs.core.update.call(null,G__47990,new cljs.core.Keyword(null,"kvps","kvps",65308317),cljs.core.assoc_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(f),result);
} else {
return G__47990;
}
})());
db = G__48000;
frames = G__48001;
continue;
} else {
return result;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,frames)))].join('')));

}
break;
}
});
datahike.pull_api.pull_spec = (function datahike$pull_api$pull_spec(db,pattern,eids,multi_QMARK_){
var eids__$1 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__48002_SHARP_){
return datahike.db.entid_strict.call(null,db,p1__48002_SHARP_);
})),eids);
return datahike.pull_api.pull_pattern.call(null,db,(function (){var x__11153__auto__ = datahike.pull_api.initial_frame.call(null,pattern,eids__$1,multi_QMARK_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})());
});
datahike.pull_api.pull = (function datahike$pull_api$pull(db,selector,eid){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.pull_api.pull_spec.call(null,db,datahike.pull_parser.parse_pull.call(null,selector),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null),false);
});
datahike.pull_api.pull_many = (function datahike$pull_api$pull_many(db,selector,eids){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datahike.pull_api.pull_spec.call(null,db,datahike.pull_parser.parse_pull.call(null,selector),eids,true);
});

//# sourceMappingURL=pull_api.js.map