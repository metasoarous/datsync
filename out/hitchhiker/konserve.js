// Compiled by ClojureScript 1.9.542 {}
goog.provide('hitchhiker.konserve');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('cljs.core.async');
goog.require('konserve.core');
goog.require('konserve.memory');
goog.require('hasch.core');
goog.require('clojure.set');
goog.require('hitchhiker.tree.core');
goog.require('hitchhiker.tree.messaging');
/**
 * Given a key, returns a promise containing that key for use as a storage-addr
 */
hitchhiker.konserve.synthesize_storage_addr = (function hitchhiker$konserve$synthesize_storage_addr(key){
var G__45768 = cljs.core.async.promise_chan.call(null);
cljs.core.async.put_BANG_.call(null,G__45768,key);

return G__45768;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.IResolve}
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
hitchhiker.konserve.KonserveAddr = (function (store,last_key,konserve_key,storage_addr,__meta,__extmap,__hash){
this.store = store;
this.last_key = last_key;
this.konserve_key = konserve_key;
this.storage_addr = storage_addr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k45770,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__45772 = k45770;
var G__45772__$1 = (((G__45772 instanceof cljs.core.Keyword))?G__45772.fqn:null);
switch (G__45772__$1) {
case "store":
return self__.store;

break;
case "last-key":
return self__.last_key;

break;
case "konserve-key":
return self__.konserve_key;

break;
case "storage-addr":
return self__.storage_addr;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45770,else__10897__auto__);

}
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.konserve.KonserveAddr{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store","store",1512230022),self__.store],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-key","last-key",1546037142),self__.last_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),self__.konserve_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null))], null),self__.__extmap));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45769){
var self__ = this;
var G__45769__$1 = this;
return (new cljs.core.RecordIter((0),G__45769__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"last-key","last-key",1546037142),new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,self__.konserve_key,self__.storage_addr,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.konserve.KonserveAddr.prototype.hitchhiker$tree$core$IResolve$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.konserve.KonserveAddr.prototype.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

hitchhiker.konserve.KonserveAddr.prototype.hitchhiker$tree$core$IResolve$last_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.last_key;
});

hitchhiker.konserve.KonserveAddr.prototype.hitchhiker$tree$core$IResolve$resolve$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null,new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"last-key","last-key",1546037142),null,new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,self__.konserve_key,self__.storage_addr,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__45769){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__45773 = cljs.core.keyword_identical_QMARK_;
var expr__45774 = k__10902__auto__;
if(cljs.core.truth_(pred__45773.call(null,new cljs.core.Keyword(null,"store","store",1512230022),expr__45774))){
return (new hitchhiker.konserve.KonserveAddr(G__45769,self__.last_key,self__.konserve_key,self__.storage_addr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45773.call(null,new cljs.core.Keyword(null,"last-key","last-key",1546037142),expr__45774))){
return (new hitchhiker.konserve.KonserveAddr(self__.store,G__45769,self__.konserve_key,self__.storage_addr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45773.call(null,new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),expr__45774))){
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,G__45769,self__.storage_addr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45773.call(null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),expr__45774))){
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,self__.konserve_key,G__45769,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,self__.konserve_key,self__.storage_addr,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__45769),null));
}
}
}
}
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store","store",1512230022),self__.store],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-key","last-key",1546037142),self__.last_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),self__.konserve_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null))], null),self__.__extmap));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__45769){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.konserve.KonserveAddr(self__.store,self__.last_key,self__.konserve_key,self__.storage_addr,G__45769,self__.__extmap,self__.__hash));
});

hitchhiker.konserve.KonserveAddr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.konserve.KonserveAddr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol(null,"last-key","last-key",-1108398627,null),new cljs.core.Symbol(null,"konserve-key","konserve-key",1325931934,null),new cljs.core.Symbol(null,"storage-addr","storage-addr",-716066169,null)], null);
});

hitchhiker.konserve.KonserveAddr.cljs$lang$type = true;

hitchhiker.konserve.KonserveAddr.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.konserve/KonserveAddr");
});

hitchhiker.konserve.KonserveAddr.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.konserve/KonserveAddr");
});

hitchhiker.konserve.__GT_KonserveAddr = (function hitchhiker$konserve$__GT_KonserveAddr(store,last_key,konserve_key,storage_addr){
return (new hitchhiker.konserve.KonserveAddr(store,last_key,konserve_key,storage_addr,null,null,null));
});

hitchhiker.konserve.map__GT_KonserveAddr = (function hitchhiker$konserve$map__GT_KonserveAddr(G__45771){
return (new hitchhiker.konserve.KonserveAddr(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(G__45771),new cljs.core.Keyword(null,"last-key","last-key",1546037142).cljs$core$IFn$_invoke$arity$1(G__45771),new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593).cljs$core$IFn$_invoke$arity$1(G__45771),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600).cljs$core$IFn$_invoke$arity$1(G__45771),null,cljs.core.dissoc.call(null,G__45771,new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"last-key","last-key",1546037142),new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600)),null));
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
 * @implements {hitchhiker.tree.core.IBackend}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hitchhiker.konserve.KonserveBackend = (function (store,__meta,__extmap,__hash){
this.store = store;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k45779,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__45781 = k45779;
var G__45781__$1 = (((G__45781 instanceof cljs.core.Keyword))?G__45781.fqn:null);
switch (G__45781__$1) {
case "store":
return self__.store;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45779,else__10897__auto__);

}
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.konserve.KonserveBackend{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store","store",1512230022),self__.store],null))], null),self__.__extmap));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45778){
var self__ = this;
var G__45778__$1 = this;
return (new cljs.core.RecordIter((0),G__45778__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store","store",1512230022)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.konserve.KonserveBackend(self__.store,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"store","store",1512230022),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.konserve.KonserveBackend(self__.store,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.konserve.KonserveBackend.prototype.hitchhiker$tree$core$IBackend$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.konserve.KonserveBackend.prototype.hitchhiker$tree$core$IBackend$new_session$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"writes","writes",-102226269),(0),new cljs.core.Keyword(null,"deletes","deletes",2085953887),(0)], null));
});

hitchhiker.konserve.KonserveBackend.prototype.hitchhiker$tree$core$IBackend$anchor_root$arity$2 = (function (_,p__45782){
var self__ = this;
var map__45783 = p__45782;
var map__45783__$1 = ((((!((map__45783 == null)))?((((map__45783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45783):map__45783);
var node = map__45783__$1;
var konserve_key = cljs.core.get.call(null,map__45783__$1,new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593));
var ___$1 = this;
return node;
});

hitchhiker.konserve.KonserveBackend.prototype.hitchhiker$tree$core$IBackend$write_node$arity$3 = (function (_,node,session){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.konserve.KonserveBackend.prototype.hitchhiker$tree$core$IBackend$delete_addr$arity$3 = (function (_,addr,session){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,session,cljs.core.update,new cljs.core.Keyword(null,"deletes","deletes",2085953887),cljs.core.inc);
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__45778){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__45785 = cljs.core.keyword_identical_QMARK_;
var expr__45786 = k__10902__auto__;
if(cljs.core.truth_(pred__45785.call(null,new cljs.core.Keyword(null,"store","store",1512230022),expr__45786))){
return (new hitchhiker.konserve.KonserveBackend(G__45778,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.konserve.KonserveBackend(self__.store,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__45778),null));
}
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"store","store",1512230022),self__.store],null))], null),self__.__extmap));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__45778){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.konserve.KonserveBackend(self__.store,G__45778,self__.__extmap,self__.__hash));
});

hitchhiker.konserve.KonserveBackend.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.konserve.KonserveBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null)], null);
});

hitchhiker.konserve.KonserveBackend.cljs$lang$type = true;

hitchhiker.konserve.KonserveBackend.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.konserve/KonserveBackend");
});

hitchhiker.konserve.KonserveBackend.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.konserve/KonserveBackend");
});

hitchhiker.konserve.__GT_KonserveBackend = (function hitchhiker$konserve$__GT_KonserveBackend(store){
return (new hitchhiker.konserve.KonserveBackend(store,null,null,null));
});

hitchhiker.konserve.map__GT_KonserveBackend = (function hitchhiker$konserve$map__GT_KonserveBackend(G__45780){
return (new hitchhiker.konserve.KonserveBackend(new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$1(G__45780),null,cljs.core.dissoc.call(null,G__45780,new cljs.core.Keyword(null,"store","store",1512230022)),null));
});

hitchhiker.konserve.get_root_key = (function hitchhiker$konserve$get_root_key(tree){
var or__10219__auto__ = new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593).cljs$core$IFn$_invoke$arity$1(cljs.core.async.poll_BANG_.call(null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600).cljs$core$IFn$_invoke$arity$1(tree)));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.poll_BANG_.call(null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600).cljs$core$IFn$_invoke$arity$1(tree));
}
});
hitchhiker.konserve.create_tree_from_root_key = (function hitchhiker$konserve$create_tree_from_root_key(store,root_key){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});
hitchhiker.konserve.add_hitchhiker_tree_handlers = (function hitchhiker$konserve$add_hitchhiker_tree_handlers(store){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315).cljs$core$IFn$_invoke$arity$1(store),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"hitchhiker.konserve.KonserveAddr","hitchhiker.konserve.KonserveAddr",-984267201,null),(function (p1__45789_SHARP_){
return cljs.core.assoc.call(null,hitchhiker.konserve.map__GT_KonserveAddr.call(null,p1__45789_SHARP_),new cljs.core.Keyword(null,"store","store",1512230022),store,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),hitchhiker.konserve.synthesize_storage_addr.call(null,new cljs.core.Keyword(null,"konserve-key","konserve-key",-314599593).cljs$core$IFn$_invoke$arity$1(p1__45789_SHARP_)));
}),new cljs.core.Symbol(null,"hitchhiker.tree.core.DataNode","hitchhiker.tree.core.DataNode",1156414965,null),(function (p__45797){
var map__45798 = p__45797;
var map__45798__$1 = ((((!((map__45798 == null)))?((((map__45798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45798):map__45798);
var children = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var cfg = cljs.core.get.call(null,map__45798__$1,new cljs.core.Keyword(null,"cfg","cfg",-1737080704));
return hitchhiker.tree.core.__GT_DataNode.call(null,cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,cljs.core.compare),children),cljs.core.async.promise_chan.call(null),cfg);
}),new cljs.core.Symbol(null,"hitchhiker.tree.core.IndexNode","hitchhiker.tree.core.IndexNode",-39721179,null),(function (p__45800){
var map__45801 = p__45800;
var map__45801__$1 = ((((!((map__45801 == null)))?((((map__45801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45801):map__45801);
var children = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var cfg = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"cfg","cfg",-1737080704));
var op_buf = cljs.core.get.call(null,map__45801__$1,new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914));
return hitchhiker.tree.core.__GT_IndexNode.call(null,cljs.core.vec.call(null,children),cljs.core.async.promise_chan.call(null),cljs.core.vec.call(null,op_buf),cfg);
}),new cljs.core.Symbol(null,"hitchhiker.tree.messaging.InsertOp","hitchhiker.tree.messaging.InsertOp",-972711155,null),hitchhiker.tree.messaging.map__GT_InsertOp,new cljs.core.Symbol(null,"hitchhiker.tree.messaging.DeleteOp","hitchhiker.tree.messaging.DeleteOp",1063635157,null),hitchhiker.tree.messaging.map__GT_DeleteOp,new cljs.core.Symbol(null,"hitchhiker.tree.core.Config","hitchhiker.tree.core.Config",-591990413,null),hitchhiker.tree.core.map__GT_Config], null));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911).cljs$core$IFn$_invoke$arity$1(store),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"hitchhiker.konserve.KonserveAddr","hitchhiker.konserve.KonserveAddr",-984267201,null),(function (addr){
return cljs.core.assoc.call(null,addr,new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null);
}),new cljs.core.Symbol(null,"hitchhiker.tree.core.DataNode","hitchhiker.tree.core.DataNode",1156414965,null),(function (node){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null);
}),new cljs.core.Symbol(null,"hitchhiker.tree.core.IndexNode","hitchhiker.tree.core.IndexNode",-39721179,null),(function (node){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(function (cs){
return cljs.core.map.call(null,(function (p1__45790_SHARP_){
return cljs.core.assoc.call(null,p1__45790_SHARP_,new cljs.core.Keyword(null,"store","store",1512230022),null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null);
}),cs);
}));
})], null));

return store;
});

//# sourceMappingURL=konserve.js.map