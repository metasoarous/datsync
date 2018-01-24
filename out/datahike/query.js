// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('datahike.db');
goog.require('datahike.arrays');
goog.require('datahike.lru');
goog.require('datahike.impl.entity');
goog.require('datahike.parser');
goog.require('datahike.pull_api');
goog.require('datahike.pull_parser');
datahike.query.lru_cache_size = (100);
datahike.query._collect = (function datahike$query$_collect(var_args){
var args49871 = [];
var len__11440__auto___49874 = arguments.length;
var i__11441__auto___49875 = (0);
while(true){
if((i__11441__auto___49875 < len__11440__auto___49874)){
args49871.push((arguments[i__11441__auto___49875]));

var G__49876 = (i__11441__auto___49875 + (1));
i__11441__auto___49875 = G__49876;
continue;
} else {
}
break;
}

var G__49873 = args49871.length;
switch (G__49873) {
case 2:
return datahike.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49871.length)].join('')));

}
});

datahike.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
return null;
});

datahike.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
return null;
});

datahike.query._collect.cljs$lang$maxFixedArity = 3;

datahike.query._resolve_clause = (function datahike$query$_resolve_clause(context,clause){
return null;
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49879,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49881 = k49879;
var G__49881__$1 = (((G__49881 instanceof cljs.core.Keyword))?G__49881.fqn:null);
switch (G__49881__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49879,else__10897__auto__);

}
});

datahike.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.query.Context{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datahike.query.Context.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49878){
var self__ = this;
var G__49878__$1 = this;
return (new cljs.core.RecordIter((0),G__49878__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49878){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49882 = cljs.core.keyword_identical_QMARK_;
var expr__49883 = k__10902__auto__;
if(cljs.core.truth_(pred__49882.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__49883))){
return (new datahike.query.Context(G__49878,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49882.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__49883))){
return (new datahike.query.Context(self__.rels,G__49878,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49882.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__49883))){
return (new datahike.query.Context(self__.rels,self__.sources,G__49878,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49878),null));
}
}
}
});

datahike.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});

datahike.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49878){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.query.Context(self__.rels,self__.sources,self__.rules,G__49878,self__.__extmap,self__.__hash));
});

datahike.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
});

datahike.query.Context.cljs$lang$type = true;

datahike.query.Context.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.query/Context");
});

datahike.query.Context.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.query/Context");
});

datahike.query.__GT_Context = (function datahike$query$__GT_Context(rels,sources,rules){
return (new datahike.query.Context(rels,sources,rules,null,null,null));
});

datahike.query.map__GT_Context = (function datahike$query$map__GT_Context(G__49880){
return (new datahike.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__49880),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__49880),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__49880),null,cljs.core.dissoc.call(null,G__49880,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)),null));
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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49887,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49889 = k49887;
var G__49889__$1 = (((G__49889 instanceof cljs.core.Keyword))?G__49889.fqn:null);
switch (G__49889__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49887,else__10897__auto__);

}
});

datahike.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.query.Relation{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datahike.query.Relation.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49886){
var self__ = this;
var G__49886__$1 = this;
return (new cljs.core.RecordIter((0),G__49886__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49886){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49890 = cljs.core.keyword_identical_QMARK_;
var expr__49891 = k__10902__auto__;
if(cljs.core.truth_(pred__49890.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__49891))){
return (new datahike.query.Relation(G__49886,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49890.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__49891))){
return (new datahike.query.Relation(self__.attrs,G__49886,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49886),null));
}
}
});

datahike.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});

datahike.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49886){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.query.Relation(self__.attrs,self__.tuples,G__49886,self__.__extmap,self__.__hash));
});

datahike.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
});

datahike.query.Relation.cljs$lang$type = true;

datahike.query.Relation.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.query/Relation");
});

datahike.query.Relation.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.query/Relation");
});

datahike.query.__GT_Relation = (function datahike$query$__GT_Relation(attrs,tuples){
return (new datahike.query.Relation(attrs,tuples,null,null,null));
});

datahike.query.map__GT_Relation = (function datahike$query$map__GT_Relation(G__49888){
return (new datahike.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__49888),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__49888),null,cljs.core.dissoc.call(null,G__49888,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)),null));
});

datahike.query.intersect_keys = (function datahike$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
datahike.query.concatv = (function datahike$query$concatv(var_args){
var args__11447__auto__ = [];
var len__11440__auto___49895 = arguments.length;
var i__11441__auto___49896 = (0);
while(true){
if((i__11441__auto___49896 < len__11440__auto___49895)){
args__11447__auto__.push((arguments[i__11441__auto___49896]));

var G__49897 = (i__11441__auto___49896 + (1));
i__11441__auto___49896 = G__49897;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return datahike.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

datahike.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datahike.query.concatv.cljs$lang$maxFixedArity = (0);

datahike.query.concatv.cljs$lang$applyTo = (function (seq49894){
return datahike.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49894));
});

datahike.query.looks_like_QMARK_ = (function datahike$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_.call(null,form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,form,pattern);
} else {
if(cljs.core.sequential_QMARK_.call(null,pattern)){
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core.every_QMARK_.call(null,(function (p__49918){
var vec__49919 = p__49918;
var pattern_el = cljs.core.nth.call(null,vec__49919,(0),null);
var form_el = cljs.core.nth.call(null,vec__49919,(1),null);
return datahike.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,pattern),form)));
} else {
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__49926){
var vec__49927 = p__49926;
var pattern_el = cljs.core.nth.call(null,vec__49927,(0),null);
var form_el = cljs.core.nth.call(null,vec__49927,(1),null);
return datahike.query.looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
}
} else {
return pattern.call(null,form);

}
}
}
}
});
datahike.query.source_QMARK_ = (function datahike$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datahike.query.free_var_QMARK_ = (function datahike$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datahike.query.attr_QMARK_ = (function datahike$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datahike.query.lookup_ref_QMARK_ = (function datahike$query$lookup_ref_QMARK_(form){
return datahike.query.looks_like_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datahike.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datahike.query.join_tuples = (function datahike$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = datahike.arrays.make_array.call(null,(l1 + l2));
var n__11240__auto___49930 = l1;
var i_49931 = (0);
while(true){
if((i_49931 < n__11240__auto___49930)){
(res[i_49931] = (t1[(idxs1[i_49931])]));

var G__49932 = (i_49931 + (1));
i_49931 = G__49932;
continue;
} else {
}
break;
}

var n__11240__auto___49933 = l2;
var i_49934 = (0);
while(true){
if((i_49934 < n__11240__auto___49933)){
(res[(l1 + i_49934)] = (t2[(idxs2[i_49934])]));

var G__49935 = (i_49934 + (1));
i_49934 = G__49935;
continue;
} else {
}
break;
}

return res;
});
datahike.query.sum_rel = (function datahike$query$sum_rel(a,b){
return (new datahike.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.into.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datahike.query.prod_rel = (function datahike$query$prod_rel(var_args){
var args49936 = [];
var len__11440__auto___49939 = arguments.length;
var i__11441__auto___49940 = (0);
while(true){
if((i__11441__auto___49940 < len__11440__auto___49939)){
args49936.push((arguments[i__11441__auto___49940]));

var G__49941 = (i__11441__auto___49940 + (1));
i__11441__auto___49940 = G__49941;
continue;
} else {
}
break;
}

var G__49938 = args49936.length;
switch (G__49938) {
case 0:
return datahike.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datahike.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49936.length)].join('')));

}
});

datahike.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datahike.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datahike.arrays.make_array.call(null,(0))], null),null,null,null));
});

datahike.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datahike.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.call(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.call(null,acc__$1,datahike.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datahike.query.prod_rel.cljs$lang$maxFixedArity = 2;

datahike.query._differ_QMARK_ = (function datahike$query$_differ_QMARK_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___49944 = arguments.length;
var i__11441__auto___49945 = (0);
while(true){
if((i__11441__auto___49945 < len__11440__auto___49944)){
args__11447__auto__.push((arguments[i__11441__auto___49945]));

var G__49946 = (i__11441__auto___49945 + (1));
i__11441__auto___49945 = G__49946;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return datahike.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

datahike.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count.call(null,xs);
return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
});

datahike.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datahike.query._differ_QMARK_.cljs$lang$applyTo = (function (seq49943){
return datahike.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49943));
});

datahike.query._get_else = (function datahike$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("get-else: nil default value is not supported")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__6736__auto__ = cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datom = temp__6736__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datahike.query._get_some = (function datahike$query$_get_some(var_args){
var args__11447__auto__ = [];
var len__11440__auto___49950 = arguments.length;
var i__11441__auto___49951 = (0);
while(true){
if((i__11441__auto___49951 < len__11440__auto___49950)){
args__11447__auto__.push((arguments[i__11441__auto___49951]));

var G__49952 = (i__11441__auto___49951 + (1));
i__11441__auto___49951 = G__49952;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return datahike.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

datahike.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.call(null,(function (_,a){
var temp__6738__auto__ = cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6738__auto__)){
var datom = temp__6738__auto__;
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
} else {
return null;
}
}),null,as);
});

datahike.query._get_some.cljs$lang$maxFixedArity = (2);

datahike.query._get_some.cljs$lang$applyTo = (function (seq49947){
var G__49948 = cljs.core.first.call(null,seq49947);
var seq49947__$1 = cljs.core.next.call(null,seq49947);
var G__49949 = cljs.core.first.call(null,seq49947__$1);
var seq49947__$2 = cljs.core.next.call(null,seq49947__$1);
return datahike.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__49948,G__49949,seq49947__$2);
});

datahike.query._missing_QMARK_ = (function datahike$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.call(null,datahike.impl.entity.entity.call(null,db,e),a) == null);
});
datahike.query.and_fn = (function datahike$query$and_fn(var_args){
var args__11447__auto__ = [];
var len__11440__auto___49954 = arguments.length;
var i__11441__auto___49955 = (0);
while(true){
if((i__11441__auto___49955 < len__11440__auto___49954)){
args__11447__auto__.push((arguments[i__11441__auto___49955]));

var G__49956 = (i__11441__auto___49955 + (1));
i__11441__auto___49955 = G__49956;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return datahike.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

datahike.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced.call(null,b);
}
}),true,args);
});

datahike.query.and_fn.cljs$lang$maxFixedArity = (0);

datahike.query.and_fn.cljs$lang$applyTo = (function (seq49953){
return datahike.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49953));
});

datahike.query.or_fn = (function datahike$query$or_fn(var_args){
var args__11447__auto__ = [];
var len__11440__auto___49958 = arguments.length;
var i__11441__auto___49959 = (0);
while(true){
if((i__11441__auto___49959 < len__11440__auto___49958)){
args__11447__auto__.push((arguments[i__11441__auto___49959]));

var G__49960 = (i__11441__auto___49959 + (1));
i__11441__auto___49959 = G__49960;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return datahike.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

datahike.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.call(null,(function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced.call(null,b);
} else {
return b;
}
}),null,args);
});

datahike.query.or_fn.cljs$lang$maxFixedArity = (0);

datahike.query.or_fn.cljs$lang$applyTo = (function (seq49957){
return datahike.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49957));
});

datahike.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datahike.query.and_fn,cljs.core.odd_QMARK_,datahike.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datahike.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datahike.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datahike.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,cljs.core.subs,cljs.core.mod,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,cljs.core.not_empty,datahike.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datahike.query.built_in_aggregates = (function (){var sum = (function datahike$query$sum(coll){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),coll);
});
var avg = (function datahike$query$avg(coll){
return (sum.call(null,coll) / cljs.core.count.call(null,coll));
});
var median = (function datahike$query$median(coll){
var terms = cljs.core.sort.call(null,coll);
var size = cljs.core.count.call(null,coll);
var med = (size >> (1));
var G__49972 = cljs.core.nth.call(null,terms,med);
if(cljs.core.even_QMARK_.call(null,size)){
return ((G__49972 + cljs.core.nth.call(null,terms,(med - (1)))) / (2));
} else {
return G__49972;
}
});
var variance = (function datahike$query$variance(coll){
var mean = avg.call(null,coll);
var sum__$1 = sum.call(null,(function (){var iter__11081__auto__ = ((function (mean){
return (function datahike$query$variance_$_iter__49977(s__49978){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__49978__$1 = s__49978;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__49978__$1);
if(temp__6738__auto__){
var s__49978__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49978__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__49978__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__49980 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__49979 = (0);
while(true){
if((i__49979 < size__11080__auto__)){
var x = cljs.core._nth.call(null,c__11079__auto__,i__49979);
var delta = (x - mean);
cljs.core.chunk_append.call(null,b__49980,(delta * delta));

var G__49981 = (i__49979 + (1));
i__49979 = G__49981;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49980),datahike$query$variance_$_iter__49977.call(null,cljs.core.chunk_rest.call(null,s__49978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49980),null);
}
} else {
var x = cljs.core.first.call(null,s__49978__$2);
var delta = (x - mean);
return cljs.core.cons.call(null,(delta * delta),datahike$query$variance_$_iter__49977.call(null,cljs.core.rest.call(null,s__49978__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__11081__auto__.call(null,coll);
})());
return (sum__$1 / cljs.core.count.call(null,coll));
});
var stddev = (function datahike$query$stddev(coll){
return Math.sqrt(variance.call(null,coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__49982 = null;
var G__49982__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__49982__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.last.call(null,acc)) < (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__49982 = function(n,coll){
switch(arguments.length){
case 1:
return G__49982__1.call(this,n);
case 2:
return G__49982__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__49982.cljs$core$IFn$_invoke$arity$1 = G__49982__1;
G__49982.cljs$core$IFn$_invoke$arity$2 = G__49982__2;
return G__49982;
})()
,(function() {
var G__49983 = null;
var G__49983__1 = (function (coll){
return cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.compare.call(null,x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first.call(null,coll),cljs.core.next.call(null,coll));
});
var G__49983__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){
if((cljs.core.count.call(null,acc) < n)){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,acc,x));
} else {
if((cljs.core.compare.call(null,x,cljs.core.first.call(null,acc)) > (0))){
return cljs.core.sort.call(null,cljs.core.compare,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__49983 = function(n,coll){
switch(arguments.length){
case 1:
return G__49983__1.call(this,n);
case 2:
return G__49983__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__49983.cljs$core$IFn$_invoke$arity$1 = G__49983__1;
G__49983.cljs$core$IFn$_invoke$arity$2 = G__49983__2;
return G__49983;
})()
,(function (coll){
return cljs.core.count.call(null,cljs.core.distinct.call(null,coll));
}),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__49984 = null;
var G__49984__1 = (function (coll){
return cljs.core.rand_nth.call(null,coll);
});
var G__49984__2 = (function (n,coll){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,coll);
})));
});
G__49984 = function(n,coll){
switch(arguments.length){
case 1:
return G__49984__1.call(this,n);
case 2:
return G__49984__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__49984.cljs$core$IFn$_invoke$arity$1 = G__49984__1;
G__49984.cljs$core$IFn$_invoke$arity$2 = G__49984__2;
return G__49984;
})()
,(function (n,coll){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
})]);
})();
datahike.query.parse_rules = (function datahike$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);
return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datahike.query.empty_rel = (function datahike$query$empty_rel(binding){
var vars = cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datahike.parser.collect_vars_distinct.call(null,binding));
return (new datahike.query.Relation(cljs.core.zipmap.call(null,vars,cljs.core.range.call(null)),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datahike.query.IBinding = function(){};

datahike.query.in__GT_rel = (function datahike$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datahike$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datahike$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__10937__auto__ = (((binding == null))?null:binding);
var m__10938__auto__ = (datahike.query.in__GT_rel[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,binding,value);
} else {
var m__10938__auto____$1 = (datahike.query.in__GT_rel["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,binding,value);
} else {
throw cljs.core.missing_protocol.call(null,"IBinding.in->rel",binding);
}
}
}
});

datahike.parser.BindIgnore.prototype.datahike$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindIgnore.prototype.datahike$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datahike.query.prod_rel.call(null);
});

datahike.parser.BindScalar.prototype.datahike$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindScalar.prototype.datahike$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datahike.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.call(null,binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datahike.parser.BindColl.prototype.datahike$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindColl.prototype.datahike$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datahike.db.seqable_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datahike.parser.source.call(null,binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_.call(null,coll)){
return datahike.query.empty_rel.call(null,binding__$1);
} else {
return cljs.core.reduce.call(null,datahike.query.sum_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__49985_SHARP_){
return datahike.query.in__GT_rel.call(null,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(binding__$1),p1__49985_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datahike.parser.BindTuple.prototype.datahike$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindTuple.prototype.datahike$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datahike.db.seqable_QMARK_.call(null,coll))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datahike.parser.source.call(null,binding__$1)], null));
} else {
if((cljs.core.count.call(null,coll) < cljs.core.count.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not enough elements in a collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,coll)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to bind tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.source.call(null,binding__$1)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datahike.parser.source.call(null,binding__$1)], null));
} else {
return cljs.core.reduce.call(null,datahike.query.prod_rel,cljs.core.map.call(null,((function (binding__$1){
return (function (p1__49986_SHARP_,p2__49987_SHARP_){
return datahike.query.in__GT_rel.call(null,p1__49986_SHARP_,p2__49987_SHARP_);
});})(binding__$1))
,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datahike.query.resolve_in = (function datahike$query$resolve_in(context,p__49988){
var vec__49992 = p__49988;
var binding = cljs.core.nth.call(null,vec__49992,(0),null);
var value = cljs.core.nth.call(null,vec__49992,(1),null);
if(((binding instanceof datahike.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datahike.parser.SrcVar))){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,cljs.core.get_in.call(null,binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if(((binding instanceof datahike.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datahike.parser.RulesVar))){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datahike.query.parse_rules.call(null,value));
} else {
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datahike.query.in__GT_rel.call(null,binding,value));

}
}
});
datahike.query.resolve_ins = (function datahike$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.call(null,datahike.query.resolve_in,context,cljs.core.zipmap.call(null,bindings,values));
});
datahike.query._STAR_lookup_attrs_STAR_ = null;
datahike.query._STAR_lookup_source_STAR_ = null;
datahike.query.getter_fn = (function datahike$query$getter_fn(attrs,attr){
var idx = attrs.call(null,attr);
if((!((datahike.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_.call(null,datahike.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
return datahike.db.entid.call(null,datahike.query._STAR_lookup_source_STAR_,eid);
} else {
if(datahike.arrays.array_QMARK_.call(null,eid)){
return datahike.db.entid.call(null,datahike.query._STAR_lookup_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datahike.query.tuple_key_fn = (function datahike$query$tuple_key_fn(getters){
if((cljs.core.count.call(null,getters) === (1))){
return cljs.core.first.call(null,getters);
} else {
var getters__$1 = cljs.core.to_array.call(null,getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.call(null,getters__$1.map(((function (getters__$1){
return (function (p1__49995_SHARP_){
return p1__49995_SHARP_.call(null,tuple);
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datahike.query.hash_attrs = (function datahike$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__6736__auto__ = cljs.core.first.call(null,tuples__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var tuple = temp__6736__auto__;
var key = key_fn.call(null,tuple);
var G__49997 = cljs.core.next.call(null,tuples__$1);
var G__49998 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__49997;
hash_table = G__49998;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datahike.query.hash_join = (function datahike$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec.call(null,datahike.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__49999_SHARP_){
return datahike.query.getter_fn.call(null,attrs1,p1__49999_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__50000_SHARP_){
return datahike.query.getter_fn.call(null,attrs2,p1__50000_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys.call(null,attrs1);
var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));
var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));
var key_fn1 = datahike.query.tuple_key_fn.call(null,common_gtrs1);
var hash = datahike.query.hash_attrs.call(null,key_fn1,tuples1);
var key_fn2 = datahike.query.tuple_key_fn.call(null,common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = key_fn2.call(null,tuple2);
var temp__6736__auto__ = cljs.core.get.call(null,hash,key);
if(cljs.core.truth_(temp__6736__auto__)){
var tuples1__$1 = temp__6736__auto__;
return cljs.core.reduce.call(null,((function (tuples1__$1,temp__6736__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.call(null,acc__$1,datahike.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__6736__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));
return (new datahike.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples,null,null,null));
});
datahike.query.lookup_pattern_db = (function datahike$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.call(null,(function (p1__50001_SHARP_){
if((p1__50001_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__50001_SHARP_;
}
}),pattern);
var datoms = datahike.db._search.call(null,db,search_pattern);
var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__50006){
var vec__50007 = p__50006;
var s = cljs.core.nth.call(null,vec__50007,(0),null);
var _ = cljs.core.nth.call(null,vec__50007,(1),null);
return datahike.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datahike.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datahike.query.matches_pattern_QMARK_ = (function datahike$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__10207__auto__ = tuple__$1;
if(cljs.core.truth_(and__10207__auto__)){
return pattern__$1;
} else {
return and__10207__auto__;
}
})())){
var t = cljs.core.first.call(null,tuple__$1);
var p = cljs.core.first.call(null,pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p))){
var G__50010 = cljs.core.next.call(null,tuple__$1);
var G__50011 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__50010;
pattern__$1 = G__50011;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datahike.query.lookup_pattern_coll = (function datahike$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.call(null,(function (p1__50012_SHARP_){
return datahike.query.matches_pattern_QMARK_.call(null,pattern,p1__50012_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__50017){
var vec__50018 = p__50017;
var s = cljs.core.nth.call(null,vec__50018,(0),null);
var _ = cljs.core.nth.call(null,vec__50018,(1),null);
return datahike.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));
return (new datahike.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data),null,null,null));
});
datahike.query.normalize_pattern_clause = (function datahike$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datahike.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))){
return clause;
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datahike.query.lookup_pattern = (function datahike$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datahike$db$ISearch$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.db.ISearch,source))){
return datahike.query.lookup_pattern_db.call(null,source,pattern);
} else {
return datahike.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datahike.query.collapse_rels = (function datahike$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__6736__auto__ = cljs.core.first.call(null,rels__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var rel = temp__6736__auto__;
if(cljs.core.truth_(cljs.core.not_empty.call(null,datahike.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__50023 = cljs.core.next.call(null,rels__$1);
var G__50024 = datahike.query.hash_join.call(null,rel,new_rel__$1);
var G__50025 = acc;
rels__$1 = G__50023;
new_rel__$1 = G__50024;
acc = G__50025;
continue;
} else {
var G__50026 = cljs.core.next.call(null,rels__$1);
var G__50027 = new_rel__$1;
var G__50028 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__50026;
new_rel__$1 = G__50027;
acc = G__50028;
continue;
}
} else {
return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datahike.query.rel_with_attr = (function datahike$query$rel_with_attr(context,sym){
return cljs.core.some.call(null,(function (p1__50029_SHARP_){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__50029_SHARP_),sym)){
return p1__50029_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datahike.query.context_resolve_val = (function datahike$query$context_resolve_val(context,sym){
var temp__6738__auto__ = datahike.query.rel_with_attr.call(null,context,sym);
if(cljs.core.truth_(temp__6738__auto__)){
var rel = temp__6738__auto__;
var temp__6738__auto____$1 = cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__6738__auto____$1)){
var tuple = temp__6738__auto____$1;
return (tuple[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datahike.query.rel_contains_attrs_QMARK_ = (function datahike$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datahike.query.rel_prod_by_attrs = (function datahike$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.call(null,(function (p1__50030_SHARP_){
return datahike.query.rel_contains_attrs_QMARK_.call(null,p1__50030_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.call(null,datahike.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__50031_SHARP_){
return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__50031_SHARP_);
});})(rels,production))
),production], null);
});
datahike.query._call_fn = (function datahike$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count.call(null,args);
var static_args = datahike.arrays.make_array.call(null,len);
var tuples_args = datahike.arrays.make_array.call(null,len);
var n__11240__auto___50032 = len;
var i_50033 = (0);
while(true){
if((i_50033 < n__11240__auto___50032)){
var arg_50034 = cljs.core.nth.call(null,args,i_50033);
if((arg_50034 instanceof cljs.core.Symbol)){
var temp__6736__auto___50035 = cljs.core.get.call(null,sources,arg_50034);
if(cljs.core.truth_(temp__6736__auto___50035)){
var source_50036 = temp__6736__auto___50035;
(static_args[i_50033] = source_50036);
} else {
(tuples_args[i_50033] = cljs.core.get.call(null,attrs,arg_50034));
}
} else {
(static_args[i_50033] = arg_50034);
}

var G__50037 = (i_50033 + (1));
i_50033 = G__50037;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__11240__auto___50038 = len;
var i_50039 = (0);
while(true){
if((i_50039 < n__11240__auto___50038)){
var temp__6738__auto___50040 = (tuples_args[i_50039]);
if(cljs.core.truth_(temp__6738__auto___50040)){
var tuple_idx_50041 = temp__6738__auto___50040;
var v_50042 = (tuple[tuple_idx_50041]);
(static_args[i_50039] = v_50042);
} else {
}

var G__50043 = (i_50039 + (1));
i_50039 = G__50043;
continue;
} else {
}
break;
}

return cljs.core.apply.call(null,f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
});
datahike.query.resolve_sym = (function datahike$query$resolve_sym(sym){
return null;
});
datahike.query.filter_by_pred = (function datahike$query$filter_by_pred(context,clause){
var vec__50054 = clause;
var vec__50057 = cljs.core.nth.call(null,vec__50054,(0),null);
var seq__50058 = cljs.core.seq.call(null,vec__50057);
var first__50059 = cljs.core.first.call(null,seq__50058);
var seq__50058__$1 = cljs.core.next.call(null,seq__50058);
var f = first__50059;
var args = seq__50058__$1;
var pred = (function (){var or__10219__auto__ = cljs.core.get.call(null,datahike.query.built_ins,f);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
if((datahike.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown predicate '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__50060 = datahike.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__50060,(0),null);
var production = cljs.core.nth.call(null,vec__50060,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datahike.query._call_fn.call(null,context__$1,production,pred,args);
return cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (tuple_pred,vec__50054,vec__50057,seq__50058,first__50059,seq__50058__$1,f,args,pred,vec__50060,context__$1,production){
return (function (p1__50044_SHARP_){
return cljs.core.filter.call(null,tuple_pred,p1__50044_SHARP_);
});})(tuple_pred,vec__50054,vec__50057,seq__50058,first__50059,seq__50058__$1,f,args,pred,vec__50060,context__$1,production))
);
})():cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datahike.query.bind_by_fn = (function datahike$query$bind_by_fn(context,clause){
var vec__50076 = clause;
var vec__50079 = cljs.core.nth.call(null,vec__50076,(0),null);
var seq__50080 = cljs.core.seq.call(null,vec__50079);
var first__50081 = cljs.core.first.call(null,seq__50080);
var seq__50080__$1 = cljs.core.next.call(null,seq__50080);
var f = first__50081;
var args = seq__50080__$1;
var out = cljs.core.nth.call(null,vec__50076,(1),null);
var binding = datahike.parser.parse_binding.call(null,out);
var fun = (function (){var or__10219__auto__ = cljs.core.get.call(null,datahike.query.built_ins,f);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.query.context_resolve_val.call(null,context,f);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.query.resolve_sym.call(null,f);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
if((datahike.query.rel_with_attr.call(null,context,f) == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown function '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__50082 = datahike.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.call(null,vec__50082,(0),null);
var production = cljs.core.nth.call(null,vec__50082,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datahike.query._call_fn.call(null,context__$1,production,fun,args);
var rels = (function (){var iter__11081__auto__ = ((function (tuple_fn,vec__50076,vec__50079,seq__50080,first__50081,seq__50080__$1,f,args,out,binding,fun,vec__50082,context__$1,production){
return (function datahike$query$bind_by_fn_$_iter__50085(s__50086){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__50076,vec__50079,seq__50080,first__50081,seq__50080__$1,f,args,out,binding,fun,vec__50082,context__$1,production){
return (function (){
var s__50086__$1 = s__50086;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50086__$1);
if(temp__6738__auto__){
var s__50086__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50086__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50086__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50088 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50087 = (0);
while(true){
if((i__50087 < size__11080__auto__)){
var tuple = cljs.core._nth.call(null,c__11079__auto__,i__50087);
var val = tuple_fn.call(null,tuple);
if(!((val == null))){
cljs.core.chunk_append.call(null,b__50088,datahike.query.prod_rel.call(null,(new datahike.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datahike.query.in__GT_rel.call(null,binding,val)));

var G__50089 = (i__50087 + (1));
i__50087 = G__50089;
continue;
} else {
var G__50090 = (i__50087 + (1));
i__50087 = G__50090;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50088),datahike$query$bind_by_fn_$_iter__50085.call(null,cljs.core.chunk_rest.call(null,s__50086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50088),null);
}
} else {
var tuple = cljs.core.first.call(null,s__50086__$2);
var val = tuple_fn.call(null,tuple);
if(!((val == null))){
return cljs.core.cons.call(null,datahike.query.prod_rel.call(null,(new datahike.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datahike.query.in__GT_rel.call(null,binding,val)),datahike$query$bind_by_fn_$_iter__50085.call(null,cljs.core.rest.call(null,s__50086__$2)));
} else {
var G__50091 = cljs.core.rest.call(null,s__50086__$2);
s__50086__$1 = G__50091;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__50076,vec__50079,seq__50080,first__50081,seq__50080__$1,f,args,out,binding,fun,vec__50082,context__$1,production))
,null,null));
});})(tuple_fn,vec__50076,vec__50079,seq__50080,first__50081,seq__50080__$1,f,args,out,binding,fun,vec__50082,context__$1,production))
;
return iter__11081__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_.call(null,rels)){
return datahike.query.prod_rel.call(null,production,datahike.query.empty_rel.call(null,binding));
} else {
return cljs.core.reduce.call(null,datahike.query.sum_rel,rels);
}
})():datahike.query.prod_rel.call(null,cljs.core.assoc.call(null,production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datahike.query.empty_rel.call(null,binding)));
return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datahike.query.collapse_rels,new_rel);
});
datahike.query.rule_QMARK_ = (function datahike$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datahike.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datahike.query.rule_seqid = cljs.core.atom.call(null,(0));
datahike.query.expand_rule = (function datahike$query$expand_rule(clause,context,used_args){
var vec__50124 = clause;
var seq__50125 = cljs.core.seq.call(null,vec__50124);
var first__50126 = cljs.core.first.call(null,seq__50125);
var seq__50125__$1 = cljs.core.next.call(null,seq__50125);
var rule = first__50126;
var call_args = seq__50125__$1;
var seqid = cljs.core.swap_BANG_.call(null,datahike.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__11081__auto__ = ((function (vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches){
return (function datahike$query$expand_rule_$_iter__50127(s__50128){
return (new cljs.core.LazySeq(null,((function (vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches){
return (function (){
var s__50128__$1 = s__50128;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50128__$1);
if(temp__6738__auto__){
var s__50128__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50128__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50128__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50130 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50129 = (0);
while(true){
if((i__50129 < size__11080__auto__)){
var branch = cljs.core._nth.call(null,c__11079__auto__,i__50129);
var vec__50143 = branch;
var seq__50144 = cljs.core.seq.call(null,vec__50143);
var first__50145 = cljs.core.first.call(null,seq__50144);
var seq__50144__$1 = cljs.core.next.call(null,seq__50144);
var vec__50146 = first__50145;
var seq__50147 = cljs.core.seq.call(null,vec__50146);
var first__50148 = cljs.core.first.call(null,seq__50147);
var seq__50147__$1 = cljs.core.next.call(null,seq__50147);
var _ = first__50148;
var rule_args = seq__50147__$1;
var clauses = seq__50144__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
cljs.core.chunk_append.call(null,b__50130,clojure.walk.postwalk.call(null,((function (i__50129,vec__50143,seq__50144,first__50145,seq__50144__$1,vec__50146,seq__50147,first__50148,seq__50147__$1,_,rule_args,clauses,replacements,branch,c__11079__auto__,size__11080__auto__,b__50130,s__50128__$2,temp__6738__auto__,vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches){
return (function (p1__50092_SHARP_){
if(cljs.core.truth_(datahike.query.free_var_QMARK_.call(null,p1__50092_SHARP_))){
var x__47248__auto__ = replacements.call(null,p1__50092_SHARP_);
if((x__47248__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__50092_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__47248__auto__;
}
} else {
return p1__50092_SHARP_;
}
});})(i__50129,vec__50143,seq__50144,first__50145,seq__50144__$1,vec__50146,seq__50147,first__50148,seq__50147__$1,_,rule_args,clauses,replacements,branch,c__11079__auto__,size__11080__auto__,b__50130,s__50128__$2,temp__6738__auto__,vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches))
,clauses));

var G__50155 = (i__50129 + (1));
i__50129 = G__50155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50130),datahike$query$expand_rule_$_iter__50127.call(null,cljs.core.chunk_rest.call(null,s__50128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50130),null);
}
} else {
var branch = cljs.core.first.call(null,s__50128__$2);
var vec__50149 = branch;
var seq__50150 = cljs.core.seq.call(null,vec__50149);
var first__50151 = cljs.core.first.call(null,seq__50150);
var seq__50150__$1 = cljs.core.next.call(null,seq__50150);
var vec__50152 = first__50151;
var seq__50153 = cljs.core.seq.call(null,vec__50152);
var first__50154 = cljs.core.first.call(null,seq__50153);
var seq__50153__$1 = cljs.core.next.call(null,seq__50153);
var _ = first__50154;
var rule_args = seq__50153__$1;
var clauses = seq__50150__$1;
var replacements = cljs.core.zipmap.call(null,rule_args,call_args);
return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__50149,seq__50150,first__50151,seq__50150__$1,vec__50152,seq__50153,first__50154,seq__50153__$1,_,rule_args,clauses,replacements,branch,s__50128__$2,temp__6738__auto__,vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches){
return (function (p1__50092_SHARP_){
if(cljs.core.truth_(datahike.query.free_var_QMARK_.call(null,p1__50092_SHARP_))){
var x__47248__auto__ = replacements.call(null,p1__50092_SHARP_);
if((x__47248__auto__ == null)){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__50092_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__47248__auto__;
}
} else {
return p1__50092_SHARP_;
}
});})(vec__50149,seq__50150,first__50151,seq__50150__$1,vec__50152,seq__50153,first__50154,seq__50153__$1,_,rule_args,clauses,replacements,branch,s__50128__$2,temp__6738__auto__,vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches))
,clauses),datahike$query$expand_rule_$_iter__50127.call(null,cljs.core.rest.call(null,s__50128__$2)));
}
} else {
return null;
}
break;
}
});})(vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__50124,seq__50125,first__50126,seq__50125__$1,rule,call_args,seqid,branches))
;
return iter__11081__auto__.call(null,branches);
});
datahike.query.remove_pairs = (function datahike$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.call(null,(function (p__50160){
var vec__50161 = p__50160;
var x = cljs.core.nth.call(null,vec__50161,(0),null);
var y = cljs.core.nth.call(null,vec__50161,(1),null);
return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datahike.query.rule_gen_guards = (function datahike$query$rule_gen_guards(rule_clause,used_args){
var vec__50183 = rule_clause;
var seq__50184 = cljs.core.seq.call(null,vec__50183);
var first__50185 = cljs.core.first.call(null,seq__50184);
var seq__50184__$1 = cljs.core.next.call(null,seq__50184);
var rule = first__50185;
var call_args = seq__50184__$1;
var prev_call_args = cljs.core.get.call(null,used_args,rule);
var iter__11081__auto__ = ((function (vec__50183,seq__50184,first__50185,seq__50184__$1,rule,call_args,prev_call_args){
return (function datahike$query$rule_gen_guards_$_iter__50186(s__50187){
return (new cljs.core.LazySeq(null,((function (vec__50183,seq__50184,first__50185,seq__50184__$1,rule,call_args,prev_call_args){
return (function (){
var s__50187__$1 = s__50187;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50187__$1);
if(temp__6738__auto__){
var s__50187__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50187__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50187__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50189 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50188 = (0);
while(true){
if((i__50188 < size__11080__auto__)){
var prev_args = cljs.core._nth.call(null,c__11079__auto__,i__50188);
var vec__50196 = datahike.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__50196,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__50196,(1),null);
cljs.core.chunk_append.call(null,b__50189,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));

var G__50202 = (i__50188 + (1));
i__50188 = G__50202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50189),datahike$query$rule_gen_guards_$_iter__50186.call(null,cljs.core.chunk_rest.call(null,s__50187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50189),null);
}
} else {
var prev_args = cljs.core.first.call(null,s__50187__$2);
var vec__50199 = datahike.query.remove_pairs.call(null,call_args,prev_args);
var call_args__$1 = cljs.core.nth.call(null,vec__50199,(0),null);
var prev_args__$1 = cljs.core.nth.call(null,vec__50199,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),datahike$query$rule_gen_guards_$_iter__50186.call(null,cljs.core.rest.call(null,s__50187__$2)));
}
} else {
return null;
}
break;
}
});})(vec__50183,seq__50184,first__50185,seq__50184__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__50183,seq__50184,first__50185,seq__50184__$1,rule,call_args,prev_call_args))
;
return iter__11081__auto__.call(null,prev_call_args);
});
datahike.query.walk_collect = (function datahike$query$walk_collect(form,pred){
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk.call(null,((function (res){
return (function (p1__50203_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__50203_SHARP_))){
cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__50203_SHARP_);
} else {
}

return p1__50203_SHARP_;
});})(res))
,form);

return cljs.core.deref.call(null,res);
});
datahike.query.split_guards = (function datahike$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set.call(null,datahike.query.walk_collect.call(null,clauses,datahike.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__50211){
var vec__50212 = p__50211;
var vec__50215 = cljs.core.nth.call(null,vec__50212,(0),null);
var seq__50216 = cljs.core.seq.call(null,vec__50215);
var first__50217 = cljs.core.first.call(null,seq__50216);
var seq__50216__$1 = cljs.core.next.call(null,seq__50216);
var _ = first__50217;
var vars = seq__50216__$1;
return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datahike.query.solve_rule = (function datahike$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.call(null,datahike.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.call(null,datahike.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__50218_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__50218_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (function (){var x__11153__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})();
var rel = (new datahike.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__6736__auto__ = cljs.core.first.call(null,stack);
if(cljs.core.truth_(temp__6736__auto__)){
var frame = temp__6736__auto__;
var vec__50237 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__50219_SHARP_){
return cljs.core.not.call(null,datahike.query.rule_QMARK_.call(null,context,p1__50219_SHARP_));
});})(stack,rel,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.call(null,vec__50237,(0),null);
var vec__50240 = cljs.core.nth.call(null,vec__50237,(1),null);
var seq__50241 = cljs.core.seq.call(null,vec__50240);
var first__50242 = cljs.core.first.call(null,seq__50241);
var seq__50241__$1 = cljs.core.next.call(null,seq__50241);
var rule_clause = first__50242;
var next_clauses = seq__50241__$1;
if((rule_clause == null)){
var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datahike.query._collect.call(null,context__$1,final_attrs);
var new_rel = (new datahike.query.Relation(final_attrs_map,tuples,null,null,null));
var G__50253 = cljs.core.next.call(null,stack);
var G__50254 = datahike.query.sum_rel.call(null,rel,new_rel);
stack = G__50253;
rel = G__50254;
continue;
} else {
var vec__50243 = rule_clause;
var seq__50244 = cljs.core.seq.call(null,vec__50243);
var first__50245 = cljs.core.first.call(null,seq__50244);
var seq__50244__$1 = cljs.core.next.call(null,seq__50244);
var rule = first__50245;
var call_args = seq__50244__$1;
var guards = datahike.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__50246 = datahike.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.call(null,vec__50246,(0),null);
var pending_gs = cljs.core.nth.call(null,vec__50246,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__50220_SHARP_){
return cljs.core._EQ_.call(null,p1__50220_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__50255 = cljs.core.next.call(null,stack);
var G__50256 = rel;
stack = G__50255;
rel = G__50256;
continue;
} else {
var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);
var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context))){
var G__50257 = cljs.core.next.call(null,stack);
var G__50258 = rel;
stack = G__50257;
rel = G__50258;
continue;
} else {
var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datahike.query.expand_rule.call(null,rule_clause,context,used_args);
var G__50259 = cljs.core.concat.call(null,(function (){var iter__11081__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datahike$query$solve_rule_$_iter__50249(s__50250){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__50250__$1 = s__50250;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50250__$1);
if(temp__6738__auto__){
var s__50250__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50250__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50250__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50252 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50251 = (0);
while(true){
if((i__50251 < size__11080__auto__)){
var branch = cljs.core._nth.call(null,c__11079__auto__,i__50251);
cljs.core.chunk_append.call(null,b__50252,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datahike.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__50261 = (i__50251 + (1));
i__50251 = G__50261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50252),datahike$query$solve_rule_$_iter__50249.call(null,cljs.core.chunk_rest.call(null,s__50250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50252),null);
}
} else {
var branch = cljs.core.first.call(null,s__50250__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datahike.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datahike$query$solve_rule_$_iter__50249.call(null,cljs.core.rest.call(null,s__50250__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__50243,seq__50244,first__50245,seq__50244__$1,rule,call_args,guards,vec__50246,active_gs,pending_gs,vec__50237,clauses,vec__50240,seq__50241,first__50242,seq__50241__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__11081__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__50260 = rel;
stack = G__50259;
rel = G__50260;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datahike.query.resolve_pattern_lookup_refs = (function datahike$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datahike$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,source))){
var vec__50267 = pattern;
var e = cljs.core.nth.call(null,vec__50267,(0),null);
var a = cljs.core.nth.call(null,vec__50267,(1),null);
var v = cljs.core.nth.call(null,vec__50267,(2),null);
var tx = cljs.core.nth.call(null,vec__50267,(3),null);
return cljs.core.subvec.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__10219__auto__ = datahike.query.lookup_ref_QMARK_.call(null,e);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.query.attr_QMARK_.call(null,e);
}
})())?datahike.db.entid_strict.call(null,source,e):e),a,(cljs.core.truth_((function (){var and__10207__auto__ = v;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = datahike.query.attr_QMARK_.call(null,a);
if(cljs.core.truth_(and__10207__auto____$1)){
var and__10207__auto____$2 = datahike.db.ref_QMARK_.call(null,source,a);
if(and__10207__auto____$2){
var or__10219__auto__ = datahike.query.lookup_ref_QMARK_.call(null,v);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.query.attr_QMARK_.call(null,v);
}
} else {
return and__10207__auto____$2;
}
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())?datahike.db.entid_strict.call(null,source,v):v),(cljs.core.truth_(datahike.query.lookup_ref_QMARK_.call(null,tx))?datahike.db.entid_strict.call(null,source,tx):tx)], null),(0),cljs.core.count.call(null,pattern));
} else {
return pattern;
}
});
datahike.query.dynamic_lookup_attrs = (function datahike$query$dynamic_lookup_attrs(source,pattern){
var vec__50274 = pattern;
var e = cljs.core.nth.call(null,vec__50274,(0),null);
var a = cljs.core.nth.call(null,vec__50274,(1),null);
var v = cljs.core.nth.call(null,vec__50274,(2),null);
var tx = cljs.core.nth.call(null,vec__50274,(3),null);
var G__50277 = cljs.core.PersistentHashSet.EMPTY;
var G__50277__$1 = (cljs.core.truth_(datahike.query.free_var_QMARK_.call(null,e))?cljs.core.conj.call(null,G__50277,e):G__50277);
var G__50277__$2 = (cljs.core.truth_(datahike.query.free_var_QMARK_.call(null,tx))?cljs.core.conj.call(null,G__50277__$1,tx):G__50277__$1);
if(cljs.core.truth_((function (){var and__10207__auto__ = datahike.query.free_var_QMARK_.call(null,v);
if(cljs.core.truth_(and__10207__auto__)){
return (cljs.core.not.call(null,datahike.query.free_var_QMARK_.call(null,a))) && (datahike.db.ref_QMARK_.call(null,source,a));
} else {
return and__10207__auto__;
}
})())){
return cljs.core.conj.call(null,G__50277__$2,v);
} else {
return G__50277__$2;
}
});
datahike.query._resolve_clause = (function datahike$query$_resolve_clause(context,clause){
var pred__50287 = datahike.query.looks_like_QMARK_;
var expr__50288 = clause;
if(cljs.core.truth_(pred__50287.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__50288))){
return datahike.query.filter_by_pred.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__50287.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__50288))){
return datahike.query.bind_by_fn.call(null,context,clause);
} else {
if(cljs.core.truth_(pred__50287.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__50288))){
var vec__50290 = datahike.query.normalize_pattern_clause.call(null,clause);
var seq__50291 = cljs.core.seq.call(null,vec__50290);
var first__50292 = cljs.core.first.call(null,seq__50291);
var seq__50291__$1 = cljs.core.next.call(null,seq__50291);
var source_sym = first__50292;
var pattern = seq__50291__$1;
var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datahike.query.resolve_pattern_lookup_refs.call(null,source,pattern);
var relation = datahike.query.lookup_pattern.call(null,source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datahike$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,source));
var _STAR_lookup_source_STAR_50294 = datahike.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_50295 = datahike.query._STAR_lookup_attrs_STAR_;
datahike.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datahike.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datahike.query.dynamic_lookup_attrs.call(null,source,pattern__$1):null);

try{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datahike.query.collapse_rels,relation);
}finally {datahike.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_50295;

datahike.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_50294;
}} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50288)].join('')));
}
}
}
});
datahike.query.resolve_clause = (function datahike$query$resolve_clause(context,clause){
if(cljs.core.truth_(datahike.query.rule_QMARK_.call(null,context,clause))){
var vec__50299 = (cljs.core.truth_(datahike.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));
var source = cljs.core.nth.call(null,vec__50299,(0),null);
var rule = cljs.core.nth.call(null,vec__50299,(1),null);
var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));
var rel = datahike.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datahike.query.collapse_rels,rel);
} else {
return datahike.query._resolve_clause.call(null,context,clause);
}
});
datahike.query._q = (function datahike$query$_q(context,clauses){
return cljs.core.reduce.call(null,datahike.query.resolve_clause,context,clauses);
});
datahike.query._collect = (function datahike$query$_collect(var_args){
var args50303 = [];
var len__11440__auto___50312 = arguments.length;
var i__11441__auto___50313 = (0);
while(true){
if((i__11441__auto___50313 < len__11440__auto___50312)){
args50303.push((arguments[i__11441__auto___50313]));

var G__50314 = (i__11441__auto___50313 + (1));
i__11441__auto___50313 = G__50314;
continue;
} else {
}
break;
}

var G__50305 = args50303.length;
switch (G__50305) {
case 2:
return datahike.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50303.length)].join('')));

}
});

datahike.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datahike.query._collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datahike.arrays.make_array.call(null,cljs.core.count.call(null,symbols))], null),rels,symbols);
});

datahike.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__6736__auto__ = cljs.core.first.call(null,rels);
if(cljs.core.truth_(temp__6736__auto__)){
var rel = temp__6736__auto__;
var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_.call(null,keep_attrs)){
var G__50316 = acc;
var G__50317 = cljs.core.next.call(null,rels);
var G__50318 = symbols;
acc = G__50316;
rels = G__50317;
symbols = G__50318;
continue;
} else {
var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__6736__auto__){
return (function (p1__50302_SHARP_){
return cljs.core.get.call(null,keep_attrs,p1__50302_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__6736__auto__))
,symbols));
var len = cljs.core.count.call(null,symbols);
var G__50319 = (function (){var iter__11081__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function datahike$query$iter__50306(s__50307){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function (){
var s__50307__$1 = s__50307;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50307__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var t1 = cljs.core.first.call(null,xs__7294__auto__);
var iterys__11077__auto__ = ((function (s__50307__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function datahike$query$iter__50306_$_iter__50308(s__50309){
return (new cljs.core.LazySeq(null,((function (s__50307__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function (){
var s__50309__$1 = s__50309;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__50309__$1);
if(temp__6738__auto____$1){
var s__50309__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50309__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50309__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50311 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50310 = (0);
while(true){
if((i__50310 < size__11080__auto__)){
var t2 = cljs.core._nth.call(null,c__11079__auto__,i__50310);
cljs.core.chunk_append.call(null,b__50311,(function (){var res = cljs.core.aclone.call(null,t1);
var n__11240__auto___50322 = len;
var i_50323 = (0);
while(true){
if((i_50323 < n__11240__auto___50322)){
var temp__6738__auto___50324__$2 = (copy_map[i_50323]);
if(cljs.core.truth_(temp__6738__auto___50324__$2)){
var idx_50325 = temp__6738__auto___50324__$2;
(res[i_50323] = (t2[idx_50325]));
} else {
}

var G__50326 = (i_50323 + (1));
i_50323 = G__50326;
continue;
} else {
}
break;
}

return res;
})());

var G__50327 = (i__50310 + (1));
i__50310 = G__50327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50311),datahike$query$iter__50306_$_iter__50308.call(null,cljs.core.chunk_rest.call(null,s__50309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50311),null);
}
} else {
var t2 = cljs.core.first.call(null,s__50309__$2);
return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);
var n__11240__auto___50328 = len;
var i_50329 = (0);
while(true){
if((i_50329 < n__11240__auto___50328)){
var temp__6738__auto___50330__$2 = (copy_map[i_50329]);
if(cljs.core.truth_(temp__6738__auto___50330__$2)){
var idx_50331 = temp__6738__auto___50330__$2;
(res[i_50329] = (t2[idx_50331]));
} else {
}

var G__50332 = (i_50329 + (1));
i_50329 = G__50332;
continue;
} else {
}
break;
}

return res;
})(),datahike$query$iter__50306_$_iter__50308.call(null,cljs.core.rest.call(null,s__50309__$2)));
}
} else {
return null;
}
break;
}
});})(s__50307__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__))
,null,null));
});})(s__50307__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__))
;
var fs__11078__auto__ = cljs.core.seq.call(null,iterys__11077__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__11078__auto__){
return cljs.core.concat.call(null,fs__11078__auto__,datahike$query$iter__50306.call(null,cljs.core.rest.call(null,s__50307__$1)));
} else {
var G__50333 = cljs.core.rest.call(null,s__50307__$1);
s__50307__$1 = G__50333;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__))
;
return iter__11081__auto__.call(null,acc);
})();
var G__50320 = cljs.core.next.call(null,rels);
var G__50321 = symbols;
acc = G__50319;
rels = G__50320;
symbols = G__50321;
continue;
}
} else {
return acc;
}
break;
}
});

datahike.query._collect.cljs$lang$maxFixedArity = 3;

datahike.query.collect = (function datahike$query$collect(context,symbols){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datahike.query._collect.call(null,context,symbols)));
});

/**
 * @interface
 */
datahike.query.IContextResolve = function(){};

datahike.query._context_resolve = (function datahike$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datahike$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datahike$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__10937__auto__ = (((var$ == null))?null:var$);
var m__10938__auto__ = (datahike.query._context_resolve[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,var$,context);
} else {
var m__10938__auto____$1 = (datahike.query._context_resolve["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,var$,context);
} else {
throw cljs.core.missing_protocol.call(null,"IContextResolve.-context-resolve",var$);
}
}
}
});

datahike.parser.Variable.prototype.datahike$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Variable.prototype.datahike$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datahike.query.context_resolve_val.call(null,context,var$__$1.symbol);
});

datahike.parser.SrcVar.prototype.datahike$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.SrcVar.prototype.datahike$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
});

datahike.parser.PlainSymbol.prototype.datahike$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.PlainSymbol.prototype.datahike$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__10219__auto__ = cljs.core.get.call(null,datahike.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.query.resolve_sym.call(null,var$__$1.symbol);
}
});

datahike.parser.Constant.prototype.datahike$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Constant.prototype.datahike$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datahike.query._aggregate = (function datahike$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.call(null,(function (element,fixed_value,i){
if(cljs.core.truth_(datahike.parser.aggregate_QMARK_.call(null,element))){
var f = datahike.query._context_resolve.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.call(null,((function (f){
return (function (p1__50334_SHARP_){
return datahike.query._context_resolve.call(null,p1__50334_SHARP_,context);
});})(f))
,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.call(null,((function (f,args){
return (function (p1__50335_SHARP_){
return cljs.core.nth.call(null,p1__50335_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datahike.query.idxs_of = (function datahike$query$idxs_of(pred,coll){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__50336_SHARP_,p2__50337_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__50336_SHARP_))){
return p2__50337_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.call(null)));
});
datahike.query.aggregate = (function datahike$query$aggregate(find_elements,context,resultset){
var group_idxs = datahike.query.idxs_of.call(null,cljs.core.complement.call(null,datahike.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__50338_SHARP_){
return cljs.core.nth.call(null,tuple,p1__50338_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by.call(null,group_fn,resultset);
var iter__11081__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datahike$query$aggregate_$_iter__50355(s__50356){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__50356__$1 = s__50356;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50356__$1);
if(temp__6738__auto__){
var s__50356__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50356__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50356__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50358 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50357 = (0);
while(true){
if((i__50357 < size__11080__auto__)){
var vec__50365 = cljs.core._nth.call(null,c__11079__auto__,i__50357);
var _ = cljs.core.nth.call(null,vec__50365,(0),null);
var tuples = cljs.core.nth.call(null,vec__50365,(1),null);
cljs.core.chunk_append.call(null,b__50358,datahike.query._aggregate.call(null,find_elements,context,tuples));

var G__50371 = (i__50357 + (1));
i__50357 = G__50371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50358),datahike$query$aggregate_$_iter__50355.call(null,cljs.core.chunk_rest.call(null,s__50356__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50358),null);
}
} else {
var vec__50368 = cljs.core.first.call(null,s__50356__$2);
var _ = cljs.core.nth.call(null,vec__50368,(0),null);
var tuples = cljs.core.nth.call(null,vec__50368,(1),null);
return cljs.core.cons.call(null,datahike.query._aggregate.call(null,find_elements,context,tuples),datahike$query$aggregate_$_iter__50355.call(null,cljs.core.rest.call(null,s__50356__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__11081__auto__.call(null,grouped);
});

/**
 * @interface
 */
datahike.query.IPostProcess = function(){};

datahike.query._post_process = (function datahike$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datahike$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datahike$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__10937__auto__ = (((find == null))?null:find);
var m__10938__auto__ = (datahike.query._post_process[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,find,tuples);
} else {
var m__10938__auto____$1 = (datahike.query._post_process["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,find,tuples);
} else {
throw cljs.core.missing_protocol.call(null,"IPostProcess.-post-process",find);
}
}
}
});

datahike.parser.FindRel.prototype.datahike$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindRel.prototype.datahike$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datahike.parser.FindColl.prototype.datahike$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindColl.prototype.datahike$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.first),tuples);
});

datahike.parser.FindScalar.prototype.datahike$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindScalar.prototype.datahike$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst.call(null,tuples);
});

datahike.parser.FindTuple.prototype.datahike$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindTuple.prototype.datahike$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first.call(null,tuples);
});
datahike.query.pull = (function datahike$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__11081__auto__ = (function datahike$query$pull_$_iter__50392(s__50393){
return (new cljs.core.LazySeq(null,(function (){
var s__50393__$1 = s__50393;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50393__$1);
if(temp__6738__auto__){
var s__50393__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50393__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50393__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50395 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50394 = (0);
while(true){
if((i__50394 < size__11080__auto__)){
var find = cljs.core._nth.call(null,c__11079__auto__,i__50394);
cljs.core.chunk_append.call(null,b__50395,(cljs.core.truth_(datahike.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datahike.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datahike.pull_parser.parse_pull.call(null,datahike.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__50412 = (i__50394 + (1));
i__50394 = G__50412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50395),datahike$query$pull_$_iter__50392.call(null,cljs.core.chunk_rest.call(null,s__50393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50395),null);
}
} else {
var find = cljs.core.first.call(null,s__50393__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(datahike.parser.pull_QMARK_.call(null,find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datahike.query._context_resolve.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datahike.pull_parser.parse_pull.call(null,datahike.query._context_resolve.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datahike$query$pull_$_iter__50392.call(null,cljs.core.rest.call(null,s__50393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,find_elements);
})();
var iter__11081__auto__ = ((function (resolved){
return (function datahike$query$pull_$_iter__50396(s__50397){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__50397__$1 = s__50397;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__50397__$1);
if(temp__6738__auto__){
var s__50397__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50397__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__50397__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__50399 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__50398 = (0);
while(true){
if((i__50398 < size__11080__auto__)){
var tuple = cljs.core._nth.call(null,c__11079__auto__,i__50398);
cljs.core.chunk_append.call(null,b__50399,cljs.core.mapv.call(null,((function (i__50398,tuple,c__11079__auto__,size__11080__auto__,b__50399,s__50397__$2,temp__6738__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__50406 = env;
var src = cljs.core.nth.call(null,vec__50406,(0),null);
var spec = cljs.core.nth.call(null,vec__50406,(1),null);
return datahike.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__50398,tuple,c__11079__auto__,size__11080__auto__,b__50399,s__50397__$2,temp__6738__auto__,resolved))
,resolved,tuple));

var G__50413 = (i__50398 + (1));
i__50398 = G__50413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50399),datahike$query$pull_$_iter__50396.call(null,cljs.core.chunk_rest.call(null,s__50397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50399),null);
}
} else {
var tuple = cljs.core.first.call(null,s__50397__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (tuple,s__50397__$2,temp__6738__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__50409 = env;
var src = cljs.core.nth.call(null,vec__50409,(0),null);
var spec = cljs.core.nth.call(null,vec__50409,(1),null);
return datahike.pull_api.pull_spec.call(null,src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__50397__$2,temp__6738__auto__,resolved))
,resolved,tuple),datahike$query$pull_$_iter__50396.call(null,cljs.core.rest.call(null,s__50397__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__11081__auto__.call(null,resultset);
});
datahike.query.query_cache = cljs.core.volatile_BANG_.call(null,datahike.lru.lru.call(null,datahike.query.lru_cache_size));
datahike.query.memoized_parse_query = (function datahike$query$memoized_parse_query(q){
var temp__6736__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,datahike.query.query_cache),q,null);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
return cached;
} else {
var qp = datahike.parser.parse_query.call(null,q);
cljs.core._vreset_BANG_.call(null,datahike.query.query_cache,cljs.core.assoc.call(null,cljs.core._deref.call(null,datahike.query.query_cache),q,qp));

return qp;
}
});
datahike.query.q = (function datahike$query$q(var_args){
var args__11447__auto__ = [];
var len__11440__auto___50419 = arguments.length;
var i__11441__auto___50420 = (0);
while(true){
if((i__11441__auto___50420 < len__11440__auto___50419)){
args__11447__auto__.push((arguments[i__11441__auto___50420]));

var G__50421 = (i__11441__auto___50420 + (1));
i__11441__auto___50420 = G__50421;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return datahike.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

datahike.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datahike.query.memoized_parse_query.call(null,q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datahike.parser.find_elements.call(null,find);
var find_vars = datahike.parser.find_vars.call(null,find);
var result_arity = cljs.core.count.call(null,find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.call(null,find_vars,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__50417 = q;
if(cljs.core.sequential_QMARK_.call(null,q)){
return datahike.parser.query__GT_map.call(null,G__50417);
} else {
return G__50417;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datahike.query.resolve_ins.call(null,(new datahike.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datahike.query.collect.call(null,datahike.query._q.call(null,context,wheres),all_vars);
var G__50418 = resultset;
var G__50418__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.call(null,((function (G__50418,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__50414_SHARP_){
return cljs.core.vec.call(null,cljs.core.subvec.call(null,p1__50414_SHARP_,(0),result_arity));
});})(G__50418,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__50418):G__50418);
var G__50418__$2 = (cljs.core.truth_(cljs.core.some.call(null,datahike.parser.aggregate_QMARK_,find_elements))?datahike.query.aggregate.call(null,find_elements,context,G__50418__$1):G__50418__$1);
var G__50418__$3 = (cljs.core.truth_(cljs.core.some.call(null,datahike.parser.pull_QMARK_,find_elements))?datahike.query.pull.call(null,find_elements,context,G__50418__$2):G__50418__$2);
return datahike.query._post_process.call(null,find,G__50418__$3);

});

datahike.query.q.cljs$lang$maxFixedArity = (1);

datahike.query.q.cljs$lang$applyTo = (function (seq50415){
var G__50416 = cljs.core.first.call(null,seq50415);
var seq50415__$1 = cljs.core.next.call(null,seq50415);
return datahike.query.q.cljs$core$IFn$_invoke$arity$variadic(G__50416,seq50415__$1);
});


//# sourceMappingURL=query.js.map