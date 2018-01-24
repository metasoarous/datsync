// Compiled by ClojureScript 1.9.542 {}
goog.provide('hitchhiker.tree.messaging');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('hasch.core');
goog.require('cljs.core.async');
goog.require('hitchhiker.tree.core');

/**
 * @interface
 */
hitchhiker.tree.messaging.IOperation = function(){};

/**
 * Which key this affects--currently must be a single key
 */
hitchhiker.tree.messaging.affects_key = (function hitchhiker$tree$messaging$affects_key(op){
if((!((op == null))) && (!((op.hitchhiker$tree$messaging$IOperation$affects_key$arity$1 == null)))){
return op.hitchhiker$tree$messaging$IOperation$affects_key$arity$1(op);
} else {
var x__10937__auto__ = (((op == null))?null:op);
var m__10938__auto__ = (hitchhiker.tree.messaging.affects_key[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,op);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.messaging.affects_key["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,op);
} else {
throw cljs.core.missing_protocol.call(null,"IOperation.affects-key",op);
}
}
}
});

/**
 * Applies the operation to the collection
 */
hitchhiker.tree.messaging.apply_op_to_coll = (function hitchhiker$tree$messaging$apply_op_to_coll(op,coll){
if((!((op == null))) && (!((op.hitchhiker$tree$messaging$IOperation$apply_op_to_coll$arity$2 == null)))){
return op.hitchhiker$tree$messaging$IOperation$apply_op_to_coll$arity$2(op,coll);
} else {
var x__10937__auto__ = (((op == null))?null:op);
var m__10938__auto__ = (hitchhiker.tree.messaging.apply_op_to_coll[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,op,coll);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.messaging.apply_op_to_coll["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,op,coll);
} else {
throw cljs.core.missing_protocol.call(null,"IOperation.apply-op-to-coll",op);
}
}
}
});

/**
 * Applies the operation to the tree. Returns go-block.
 */
hitchhiker.tree.messaging.apply_op_to_tree = (function hitchhiker$tree$messaging$apply_op_to_tree(op,tree){
if((!((op == null))) && (!((op.hitchhiker$tree$messaging$IOperation$apply_op_to_tree$arity$2 == null)))){
return op.hitchhiker$tree$messaging$IOperation$apply_op_to_tree$arity$2(op,tree);
} else {
var x__10937__auto__ = (((op == null))?null:op);
var m__10938__auto__ = (hitchhiker.tree.messaging.apply_op_to_tree[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,op,tree);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.messaging.apply_op_to_tree["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,op,tree);
} else {
throw cljs.core.missing_protocol.call(null,"IOperation.apply-op-to-tree",op);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {hitchhiker.tree.messaging.IOperation}
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
hitchhiker.tree.messaging.InsertOp = (function (key,value,__meta,__extmap,__hash){
this.key = key;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.messaging.InsertOp.prototype.hitchhiker$tree$messaging$IOperation$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.messaging.InsertOp.prototype.hitchhiker$tree$messaging$IOperation$affects_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
});

hitchhiker.tree.messaging.InsertOp.prototype.hitchhiker$tree$messaging$IOperation$apply_op_to_coll$arity$2 = (function (_,map){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.call(null,map,self__.key,self__.value);
});

hitchhiker.tree.messaging.InsertOp.prototype.hitchhiker$tree$messaging$IOperation$apply_op_to_tree$arity$2 = (function (_,tree){
var self__ = this;
var ___$1 = this;
return hitchhiker.tree.core.insert.call(null,tree,self__.key,self__.value);
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42325,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42327 = k42325;
var G__42327__$1 = (((G__42327 instanceof cljs.core.Keyword))?G__42327.fqn:null);
switch (G__42327__$1) {
case "key":
return self__.key;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42325,else__10897__auto__);

}
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.messaging.InsertOp{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42324){
var self__ = this;
var G__42324__$1 = this;
return (new cljs.core.RecordIter((0),G__42324__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.messaging.InsertOp(self__.key,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.messaging.InsertOp(self__.key,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42324){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42328 = cljs.core.keyword_identical_QMARK_;
var expr__42329 = k__10902__auto__;
if(cljs.core.truth_(pred__42328.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__42329))){
return (new hitchhiker.tree.messaging.InsertOp(G__42324,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42328.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__42329))){
return (new hitchhiker.tree.messaging.InsertOp(self__.key,G__42324,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.messaging.InsertOp(self__.key,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42324),null));
}
}
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42324){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.messaging.InsertOp(self__.key,self__.value,G__42324,self__.__extmap,self__.__hash));
});

hitchhiker.tree.messaging.InsertOp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.messaging.InsertOp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

hitchhiker.tree.messaging.InsertOp.cljs$lang$type = true;

hitchhiker.tree.messaging.InsertOp.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.messaging/InsertOp");
});

hitchhiker.tree.messaging.InsertOp.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.messaging/InsertOp");
});

hitchhiker.tree.messaging.__GT_InsertOp = (function hitchhiker$tree$messaging$__GT_InsertOp(key,value){
return (new hitchhiker.tree.messaging.InsertOp(key,value,null,null,null));
});

hitchhiker.tree.messaging.map__GT_InsertOp = (function hitchhiker$tree$messaging$map__GT_InsertOp(G__42326){
return (new hitchhiker.tree.messaging.InsertOp(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__42326),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__42326),null,cljs.core.dissoc.call(null,G__42326,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {hitchhiker.tree.messaging.IOperation}
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
hitchhiker.tree.messaging.DeleteOp = (function (key,__meta,__extmap,__hash){
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.messaging.DeleteOp.prototype.hitchhiker$tree$messaging$IOperation$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.messaging.DeleteOp.prototype.hitchhiker$tree$messaging$IOperation$affects_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.key;
});

hitchhiker.tree.messaging.DeleteOp.prototype.hitchhiker$tree$messaging$IOperation$apply_op_to_coll$arity$2 = (function (_,map){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.call(null,map,self__.key);
});

hitchhiker.tree.messaging.DeleteOp.prototype.hitchhiker$tree$messaging$IOperation$apply_op_to_tree$arity$2 = (function (_,tree){
var self__ = this;
var ___$1 = this;
return hitchhiker.tree.core.delete$.call(null,tree,self__.key);
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42333,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42335 = k42333;
var G__42335__$1 = (((G__42335 instanceof cljs.core.Keyword))?G__42335.fqn:null);
switch (G__42335__$1) {
case "key":
return self__.key;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42333,else__10897__auto__);

}
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.messaging.DeleteOp{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42332){
var self__ = this;
var G__42332__$1 = this;
return (new cljs.core.RecordIter((0),G__42332__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.messaging.DeleteOp(self__.key,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.messaging.DeleteOp(self__.key,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42332){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42336 = cljs.core.keyword_identical_QMARK_;
var expr__42337 = k__10902__auto__;
if(cljs.core.truth_(pred__42336.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__42337))){
return (new hitchhiker.tree.messaging.DeleteOp(G__42332,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.messaging.DeleteOp(self__.key,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42332),null));
}
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42332){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.messaging.DeleteOp(self__.key,G__42332,self__.__extmap,self__.__hash));
});

hitchhiker.tree.messaging.DeleteOp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.messaging.DeleteOp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

hitchhiker.tree.messaging.DeleteOp.cljs$lang$type = true;

hitchhiker.tree.messaging.DeleteOp.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.messaging/DeleteOp");
});

hitchhiker.tree.messaging.DeleteOp.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.messaging/DeleteOp");
});

hitchhiker.tree.messaging.__GT_DeleteOp = (function hitchhiker$tree$messaging$__GT_DeleteOp(key){
return (new hitchhiker.tree.messaging.DeleteOp(key,null,null,null));
});

hitchhiker.tree.messaging.map__GT_DeleteOp = (function hitchhiker$tree$messaging$map__GT_DeleteOp(G__42334){
return (new hitchhiker.tree.messaging.DeleteOp(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__42334),null,cljs.core.dissoc.call(null,G__42334,new cljs.core.Keyword(null,"key","key",-1516042587)),null));
});

hitchhiker.tree.messaging.enqueue = (function hitchhiker$tree$messaging$enqueue(var_args){
var args42342 = [];
var len__11440__auto___42345 = arguments.length;
var i__11441__auto___42346 = (0);
while(true){
if((i__11441__auto___42346 < len__11440__auto___42345)){
args42342.push((arguments[i__11441__auto___42346]));

var G__42347 = (i__11441__auto___42346 + (1));
i__11441__auto___42346 = G__42347;
continue;
} else {
}
break;
}

var G__42344 = args42342.length;
switch (G__42344) {
case 2:
return hitchhiker.tree.messaging.enqueue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitchhiker.tree.messaging.enqueue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42342.length)].join('')));

}
});

hitchhiker.tree.messaging.enqueue.cljs$core$IFn$_invoke$arity$2 = (function (tree,msgs){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.messaging.enqueue.cljs$core$IFn$_invoke$arity$3 = (function (tree,msgs,deferred_ops){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.messaging.enqueue.cljs$lang$maxFixedArity = 3;

hitchhiker.tree.messaging.general_max = (function hitchhiker$tree$messaging$general_max(var_args){
var args__11447__auto__ = [];
var len__11440__auto___42351 = arguments.length;
var i__11441__auto___42352 = (0);
while(true){
if((i__11441__auto___42352 < len__11440__auto___42351)){
args__11447__auto__.push((arguments[i__11441__auto___42352]));

var G__42353 = (i__11441__auto___42352 + (1));
i__11441__auto___42352 = G__42353;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return hitchhiker.tree.messaging.general_max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

hitchhiker.tree.messaging.general_max.cljs$core$IFn$_invoke$arity$variadic = (function (e,r){
if(typeof e === 'number'){
return cljs.core.apply.call(null,cljs.core.max,e,r);
} else {
return cljs.core.reduce.call(null,(function (old,elem){
if((hitchhiker.tree.core.compare.call(null,old,elem) > (0))){
return old;
} else {
return elem;
}
}),e,r);
}
});

hitchhiker.tree.messaging.general_max.cljs$lang$maxFixedArity = (1);

hitchhiker.tree.messaging.general_max.cljs$lang$applyTo = (function (seq42349){
var G__42350 = cljs.core.first.call(null,seq42349);
var seq42349__$1 = cljs.core.next.call(null,seq42349);
return hitchhiker.tree.messaging.general_max.cljs$core$IFn$_invoke$arity$variadic(G__42350,seq42349__$1);
});

hitchhiker.tree.messaging.apply_ops_in_path = (function hitchhiker$tree$messaging$apply_ops_in_path(path){
if(((1) >= cljs.core.count.call(null,path))){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.peek.call(null,path));
} else {
var ops = cljs.core.sort_by.call(null,hitchhiker.tree.messaging.affects_key,hitchhiker.tree.core.compare,cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,cljs.core.rseq.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,hitchhiker.tree.core.index_node_QMARK_),cljs.core.map.call(null,new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914))),path))));
var this_node_index = cljs.core.peek.call(null,cljs.core.pop.call(null,path));
var parent = cljs.core.peek.call(null,cljs.core.pop.call(null,cljs.core.pop.call(null,path)));
var is_first_QMARK_ = (this_node_index === (0));
var vec__42359 = (function (){var path__$1 = path;
var is_last_QMARK_ = true;
var left_sibs = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,path__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_sibs,is_last_QMARK_], null);
} else {
var this_node_index__$1 = cljs.core.peek.call(null,cljs.core.pop.call(null,path__$1));
var parent__$1 = cljs.core.peek.call(null,cljs.core.pop.call(null,cljs.core.pop.call(null,path__$1)));
var is_first_QMARK___$1 = (this_node_index__$1 === (0));
var local_last_QMARK_ = cljs.core._EQ_.call(null,(cljs.core.count.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent__$1)) - (1)),this_node_index__$1);
if(is_first_QMARK___$1){
var G__42362 = cljs.core.pop.call(null,cljs.core.pop.call(null,path__$1));
var G__42363 = (is_last_QMARK_) && (local_last_QMARK_);
var G__42364 = left_sibs;
path__$1 = G__42362;
is_last_QMARK_ = G__42363;
left_sibs = G__42364;
continue;
} else {
var G__42365 = cljs.core.pop.call(null,cljs.core.pop.call(null,path__$1));
var G__42366 = (is_last_QMARK_) && (local_last_QMARK_);
var G__42367 = cljs.core.conj.call(null,left_sibs,cljs.core.nth.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent__$1),(this_node_index__$1 - (1))));
path__$1 = G__42365;
is_last_QMARK_ = G__42366;
left_sibs = G__42367;
continue;
}
}
break;
}
})();
var left_sibs_on_path = cljs.core.nth.call(null,vec__42359,(0),null);
var is_last_QMARK_ = cljs.core.nth.call(null,vec__42359,(1),null);
var left_sibs_min_last = ((cljs.core.seq.call(null,left_sibs_on_path))?cljs.core.apply.call(null,hitchhiker.tree.messaging.general_max,cljs.core.map.call(null,hitchhiker.tree.core.last_key,left_sibs_on_path)):null);
var left_sib_filter = (cljs.core.truth_(left_sibs_min_last)?cljs.core.drop_while.call(null,((function (ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last){
return (function (p1__42354_SHARP_){
return ((0) >= hitchhiker.tree.core.compare.call(null,hitchhiker.tree.messaging.affects_key.call(null,p1__42354_SHARP_),left_sibs_min_last));
});})(ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last))
):cljs.core.identity);
var data_node = cljs.core.peek.call(null,path);
var my_last = hitchhiker.tree.core.last_key.call(null,data_node);
var right_side_filter = (cljs.core.truth_(is_last_QMARK_)?cljs.core.identity:cljs.core.take_while.call(null,((function (ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last,left_sib_filter,data_node,my_last){
return (function (p1__42355_SHARP_){
return ((0) >= hitchhiker.tree.core.compare.call(null,hitchhiker.tree.messaging.affects_key.call(null,p1__42355_SHARP_),my_last));
});})(ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last,left_sib_filter,data_node,my_last))
));
var correct_ops = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,left_sib_filter,right_side_filter),ops);
return cljs.core.reduce.call(null,((function (ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last,left_sib_filter,data_node,my_last,right_side_filter,correct_ops){
return (function (coll,op){
return hitchhiker.tree.messaging.apply_op_to_coll.call(null,op,coll);
});})(ops,this_node_index,parent,is_first_QMARK_,vec__42359,left_sibs_on_path,is_last_QMARK_,left_sibs_min_last,left_sib_filter,data_node,my_last,right_side_filter,correct_ops))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(data_node),correct_ops);
}
});
hitchhiker.tree.messaging.lookup = (function hitchhiker$tree$messaging$lookup(var_args){
var args42368 = [];
var len__11440__auto___42371 = arguments.length;
var i__11441__auto___42372 = (0);
while(true){
if((i__11441__auto___42372 < len__11440__auto___42371)){
args42368.push((arguments[i__11441__auto___42372]));

var G__42373 = (i__11441__auto___42372 + (1));
i__11441__auto___42372 = G__42373;
continue;
} else {
}
break;
}

var G__42370 = args42368.length;
switch (G__42370) {
case 2:
return hitchhiker.tree.messaging.lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitchhiker.tree.messaging.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42368.length)].join('')));

}
});

hitchhiker.tree.messaging.lookup.cljs$core$IFn$_invoke$arity$2 = (function (tree,key){
return hitchhiker.tree.messaging.lookup.call(null,tree,key,null);
});

hitchhiker.tree.messaging.lookup.cljs$core$IFn$_invoke$arity$3 = (function (tree,key,not_found){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.messaging.lookup.cljs$lang$maxFixedArity = 3;

hitchhiker.tree.messaging.insert = (function hitchhiker$tree$messaging$insert(tree,key,value){
return hitchhiker.tree.messaging.enqueue.call(null,tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,hitchhiker.tree.messaging.__GT_InsertOp.call(null,key,value),new cljs.core.Keyword(null,"tag","tag",-1290361223),hasch.core.uuid.call(null))], null));
});
hitchhiker.tree.messaging.delete$ = (function hitchhiker$tree$messaging$delete(tree,key){
return hitchhiker.tree.messaging.enqueue.call(null,tree,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,hitchhiker.tree.messaging.__GT_DeleteOp.call(null,key),new cljs.core.Keyword(null,"tag","tag",-1290361223),hasch.core.uuid.call(null))], null));
});
var G__42375_42384 = hitchhiker.tree.core._STAR_async_backend_STAR_;
var G__42375_42385__$1 = (((G__42375_42384 instanceof cljs.core.Keyword))?G__42375_42384.fqn:null);
switch (G__42375_42385__$1) {
case "none":
/**
 * Takes the result of a search and returns an iterator going
 * forward over the tree. Does lg(n) backtracking sometimes.
 */
hitchhiker.tree.messaging.forward_iterator = ((function (G__42375_42384,G__42375_42385__$1){
return (function hitchhiker$tree$messaging$forward_iterator(path){
if(cljs.core.truth_(hitchhiker.tree.core.data_node_QMARK_.call(null,cljs.core.peek.call(null,path)))){
} else {
throw (new Error("Assert failed: (core/data-node? (peek path))"));
}

var first_elements = hitchhiker.tree.messaging.apply_ops_in_path.call(null,path);
var next_elements = (new cljs.core.LazySeq(null,((function (first_elements,G__42375_42384,G__42375_42385__$1){
return (function (){
var temp__6738__auto__ = hitchhiker.tree.core.right_successor.call(null,cljs.core.pop.call(null,path));
if(cljs.core.truth_(temp__6738__auto__)){
var succ = temp__6738__auto__;
return hitchhiker.tree.messaging.forward_iterator.call(null,succ);
} else {
return null;
}
});})(first_elements,G__42375_42384,G__42375_42385__$1))
,null,null));
return cljs.core.concat.call(null,first_elements,next_elements);
});})(G__42375_42384,G__42375_42385__$1))
;

hitchhiker.tree.messaging.lookup_fwd_iter = ((function (G__42375_42384,G__42375_42385__$1){
return (function hitchhiker$tree$messaging$lookup_fwd_iter(tree,key){
var path = hitchhiker.tree.core.lookup_path.call(null,tree,key);
if(cljs.core.truth_(path)){
return cljs.core.drop_while.call(null,((function (path,G__42375_42384,G__42375_42385__$1){
return (function (p__42380){
var vec__42381 = p__42380;
var k = cljs.core.nth.call(null,vec__42381,(0),null);
var v = cljs.core.nth.call(null,vec__42381,(1),null);
return (hitchhiker.tree.core.compare.call(null,k,key) < (0));
});})(path,G__42375_42384,G__42375_42385__$1))
,hitchhiker.tree.messaging.forward_iterator.call(null,path));
} else {
return null;
}
});})(G__42375_42384,G__42375_42385__$1))
;

break;
case "core.async":
/**
 * Takes the result of a search and puts the iterated elements onto iter-ch
 *   going forward over the tree as needed. Does lg(n) backtracking sometimes.
 */
hitchhiker.tree.messaging.forward_iterator = ((function (G__42375_42384,G__42375_42385__$1){
return (function hitchhiker$tree$messaging$forward_iterator(iter_ch,path,start_key){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});})(G__42375_42384,G__42375_42385__$1))
;

new cljs.core.Keyword(null,"clj","clj",-660495428).cljs$core$IFn$_invoke$arity$1(/**
 * Compatibility helper to clojure sequences. Please prefer the channel
 *   interface of forward-iterator, as this function blocks your thread, which
 *   disturbs async contexts and might lead to poor performance. It is mainly here
 *   to facilitate testing or for exploration on the REPL.
 */
hitchhiker.tree.messaging.lookup_fwd_iter = ((function (G__42375_42384,G__42375_42385__$1){
return (function hitchhiker$tree$messaging$lookup_fwd_iter(tree,key){
var path = hitchhiker.tree.messaging._LT__QMARK__QMARK_.call(null,hitchhiker.tree.core.lookup_path.call(null,tree,key));
var iter_ch = cljs.core.async.chan.call(null);
hitchhiker.tree.messaging.forward_iterator.call(null,iter_ch,path,key);

return hitchhiker.tree.core.chan_seq.call(null,iter_ch);
});})(G__42375_42384,G__42375_42385__$1))
);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hitchhiker.tree.core._STAR_async_backend_STAR_)].join('')));

}

//# sourceMappingURL=messaging.js.map