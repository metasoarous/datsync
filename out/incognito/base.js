// Compiled by ClojureScript 1.9.542 {}
goog.provide('incognito.base');
goog.require('cljs.core');
goog.require('cljs.reader');

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
incognito.base.IncognitoTaggedLiteral = (function (tag,value,__meta,__extmap,__hash){
this.tag = tag;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42266,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42268 = k42266;
var G__42268__$1 = (((G__42268 instanceof cljs.core.Keyword))?G__42268.fqn:null);
switch (G__42268__$1) {
case "tag":
return self__.tag;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42266,else__10897__auto__);

}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#incognito.base.IncognitoTaggedLiteral{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42265){
var self__ = this;
var G__42265__$1 = this;
return (new cljs.core.RecordIter((0),G__42265__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42265){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42269 = cljs.core.keyword_identical_QMARK_;
var expr__42270 = k__10902__auto__;
if(cljs.core.truth_(pred__42269.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__42270))){
return (new incognito.base.IncognitoTaggedLiteral(G__42265,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42269.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__42270))){
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,G__42265,self__.__meta,self__.__extmap,null));
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42265),null));
}
}
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42265){
var self__ = this;
var this__10893__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,G__42265,self__.__extmap,self__.__hash));
});

incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

incognito.base.IncognitoTaggedLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

incognito.base.IncognitoTaggedLiteral.cljs$lang$type = true;

incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"incognito.base/IncognitoTaggedLiteral");
});

incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"incognito.base/IncognitoTaggedLiteral");
});

incognito.base.__GT_IncognitoTaggedLiteral = (function incognito$base$__GT_IncognitoTaggedLiteral(tag,value){
return (new incognito.base.IncognitoTaggedLiteral(tag,value,null,null,null));
});

incognito.base.map__GT_IncognitoTaggedLiteral = (function incognito$base$map__GT_IncognitoTaggedLiteral(G__42267){
return (new incognito.base.IncognitoTaggedLiteral(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__42267),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__42267),null,cljs.core.dissoc.call(null,G__42267,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"value","value",305978217)),null));
});

incognito.base.incognito_reader = (function incognito$base$incognito_reader(read_handlers,m){
if(cljs.core.truth_(read_handlers.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m)))){
return read_handlers.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m)).call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(m));
} else {
return incognito.base.map__GT_IncognitoTaggedLiteral.call(null,m);
}
});
incognito.base.incognito_writer = (function incognito$base$incognito_writer(write_handlers,r){
var s = cljs.core.symbol.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,r)));
var vec__42276 = (cljs.core.truth_(write_handlers.call(null,s))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,write_handlers.call(null,s).call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,r))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,r)], null));
var tag = cljs.core.nth.call(null,vec__42276,(0),null);
var v = cljs.core.nth.call(null,vec__42276,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

//# sourceMappingURL=base.js.map