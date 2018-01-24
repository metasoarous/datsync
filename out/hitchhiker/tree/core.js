// Compiled by ClojureScript 1.9.542 {}
goog.provide('hitchhiker.tree.core');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector');
goog.require('cljs.core.async');
goog.require('goog.array');
hitchhiker.tree.core._STAR_async_backend_STAR_ = new cljs.core.Keyword(null,"none","none",1333468478);
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
hitchhiker.tree.core.cljs_env_QMARK_ = (function hitchhiker$tree$core$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
/**
 * Helper method that checks if x is Exception and if yes, wraps it in a new
 *   exception, passing though ex-data if any, and throws it. The wrapping is done
 *   to maintain a full stack trace when jumping between multiple contexts.
 */
hitchhiker.tree.core.throw_if_exception = (function hitchhiker$tree$core$throw_if_exception(x){
if((x instanceof Error)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),(function (){var or__10219__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),x);
} else {
return x;
}
});
/**
 * Reduces over a sequence s with a go function go-f given the initial value
 *   init.
 */
hitchhiker.tree.core.reduce_LT_ = (function hitchhiker$tree$core$reduce_LT_(go_f,init,s){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
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
hitchhiker.tree.core.Config = (function (index_b,data_b,op_buf_size,__meta,__extmap,__hash){
this.index_b = index_b;
this.data_b = data_b;
this.op_buf_size = op_buf_size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.Config.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.Config.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42125,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42127 = k42125;
var G__42127__$1 = (((G__42127 instanceof cljs.core.Keyword))?G__42127.fqn:null);
switch (G__42127__$1) {
case "index-b":
return self__.index_b;

break;
case "data-b":
return self__.data_b;

break;
case "op-buf-size":
return self__.op_buf_size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42125,else__10897__auto__);

}
});

hitchhiker.tree.core.Config.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.Config{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index-b","index-b",-893094593),self__.index_b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-b","data-b",1844973736),self__.data_b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828),self__.op_buf_size],null))], null),self__.__extmap));
});

hitchhiker.tree.core.Config.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.Config.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42124){
var self__ = this;
var G__42124__$1 = this;
return (new cljs.core.RecordIter((0),G__42124__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-b","index-b",-893094593),new cljs.core.Keyword(null,"data-b","data-b",1844973736),new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.Config.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.Config.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.Config(self__.index_b,self__.data_b,self__.op_buf_size,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.Config.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.Config.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.Config.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.Config.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-b","data-b",1844973736),null,new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828),null,new cljs.core.Keyword(null,"index-b","index-b",-893094593),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.Config(self__.index_b,self__.data_b,self__.op_buf_size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.Config.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42124){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42128 = cljs.core.keyword_identical_QMARK_;
var expr__42129 = k__10902__auto__;
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"index-b","index-b",-893094593),expr__42129))){
return (new hitchhiker.tree.core.Config(G__42124,self__.data_b,self__.op_buf_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"data-b","data-b",1844973736),expr__42129))){
return (new hitchhiker.tree.core.Config(self__.index_b,G__42124,self__.op_buf_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42128.call(null,new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828),expr__42129))){
return (new hitchhiker.tree.core.Config(self__.index_b,self__.data_b,G__42124,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.core.Config(self__.index_b,self__.data_b,self__.op_buf_size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42124),null));
}
}
}
});

hitchhiker.tree.core.Config.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index-b","index-b",-893094593),self__.index_b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data-b","data-b",1844973736),self__.data_b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828),self__.op_buf_size],null))], null),self__.__extmap));
});

hitchhiker.tree.core.Config.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42124){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.Config(self__.index_b,self__.data_b,self__.op_buf_size,G__42124,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.Config.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.Config.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-b","index-b",747436934,null),new cljs.core.Symbol(null,"data-b","data-b",-809462033,null),new cljs.core.Symbol(null,"op-buf-size","op-buf-size",1589263699,null)], null);
});

hitchhiker.tree.core.Config.cljs$lang$type = true;

hitchhiker.tree.core.Config.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/Config");
});

hitchhiker.tree.core.Config.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/Config");
});

hitchhiker.tree.core.__GT_Config = (function hitchhiker$tree$core$__GT_Config(index_b,data_b,op_buf_size){
return (new hitchhiker.tree.core.Config(index_b,data_b,op_buf_size,null,null,null));
});

hitchhiker.tree.core.map__GT_Config = (function hitchhiker$tree$core$map__GT_Config(G__42126){
return (new hitchhiker.tree.core.Config(new cljs.core.Keyword(null,"index-b","index-b",-893094593).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(G__42126),new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828).cljs$core$IFn$_invoke$arity$1(G__42126),null,cljs.core.dissoc.call(null,G__42126,new cljs.core.Keyword(null,"index-b","index-b",-893094593),new cljs.core.Keyword(null,"data-b","data-b",1844973736),new cljs.core.Keyword(null,"op-buf-size","op-buf-size",-51267828)),null));
});


/**
 * @interface
 */
hitchhiker.tree.core.IKeyCompare = function(){};

hitchhiker.tree.core.compare = (function hitchhiker$tree$core$compare(key1,key2){
if((!((key1 == null))) && (!((key1.hitchhiker$tree$core$IKeyCompare$compare$arity$2 == null)))){
return key1.hitchhiker$tree$core$IKeyCompare$compare$arity$2(key1,key2);
} else {
var x__10937__auto__ = (((key1 == null))?null:key1);
var m__10938__auto__ = (hitchhiker.tree.core.compare[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,key1,key2);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.compare["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,key1,key2);
} else {
throw cljs.core.missing_protocol.call(null,"IKeyCompare.compare",key1);
}
}
}
});


/**
 * All nodes must implement this protocol. It's includes the minimal functionality
 * necessary to avoid resolving nodes unless strictly necessary.
 * @interface
 */
hitchhiker.tree.core.IResolve = function(){};

/**
 * Returns true if this is an index node
 */
hitchhiker.tree.core.index_QMARK_ = (function hitchhiker$tree$core$index_QMARK_(_){
if((!((_ == null))) && (!((_.hitchhiker$tree$core$IResolve$index_QMARK_$arity$1 == null)))){
return _.hitchhiker$tree$core$IResolve$index_QMARK_$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (hitchhiker.tree.core.index_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.index_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IResolve.index?",_);
}
}
}
});

/**
 * Returns the rightmost key of the node
 */
hitchhiker.tree.core.last_key = (function hitchhiker$tree$core$last_key(_){
if((!((_ == null))) && (!((_.hitchhiker$tree$core$IResolve$last_key$arity$1 == null)))){
return _.hitchhiker$tree$core$IResolve$last_key$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (hitchhiker.tree.core.last_key[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.last_key["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IResolve.last-key",_);
}
}
}
});

/**
 * Returns true if this should be flushed
 */
hitchhiker.tree.core.dirty_QMARK_ = (function hitchhiker$tree$core$dirty_QMARK_(_){
if((!((_ == null))) && (!((_.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1 == null)))){
return _.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (hitchhiker.tree.core.dirty_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.dirty_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IResolve.dirty?",_);
}
}
}
});

/**
 * Returns the INode version of this node in a go-block; could trigger IO
 */
hitchhiker.tree.core.resolve = (function hitchhiker$tree$core$resolve(_){
if((!((_ == null))) && (!((_.hitchhiker$tree$core$IResolve$resolve$arity$1 == null)))){
return _.hitchhiker$tree$core$IResolve$resolve$arity$1(_);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (hitchhiker.tree.core.resolve[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.resolve["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IResolve.resolve",_);
}
}
}
});

hitchhiker.tree.core.tree_node_QMARK_ = (function hitchhiker$tree$core$tree_node_QMARK_(node){
if(!((node == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === node.hitchhiker$tree$core$IResolve$))){
return true;
} else {
if((!node.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,hitchhiker.tree.core.IResolve,node);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hitchhiker.tree.core.IResolve,node);
}
});

/**
 * @interface
 */
hitchhiker.tree.core.INode = function(){};

/**
 * Returns true if this node has too many elements
 */
hitchhiker.tree.core.overflow_QMARK_ = (function hitchhiker$tree$core$overflow_QMARK_(node){
if((!((node == null))) && (!((node.hitchhiker$tree$core$INode$overflow_QMARK_$arity$1 == null)))){
return node.hitchhiker$tree$core$INode$overflow_QMARK_$arity$1(node);
} else {
var x__10937__auto__ = (((node == null))?null:node);
var m__10938__auto__ = (hitchhiker.tree.core.overflow_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,node);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.overflow_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"INode.overflow?",node);
}
}
}
});

/**
 * Returns true if this node has too few elements
 */
hitchhiker.tree.core.underflow_QMARK_ = (function hitchhiker$tree$core$underflow_QMARK_(node){
if((!((node == null))) && (!((node.hitchhiker$tree$core$INode$underflow_QMARK_$arity$1 == null)))){
return node.hitchhiker$tree$core$INode$underflow_QMARK_$arity$1(node);
} else {
var x__10937__auto__ = (((node == null))?null:node);
var m__10938__auto__ = (hitchhiker.tree.core.underflow_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,node);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.underflow_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"INode.underflow?",node);
}
}
}
});

/**
 * Combines this node with the other to form a bigger node. We assume they're siblings
 */
hitchhiker.tree.core.merge_node = (function hitchhiker$tree$core$merge_node(node,other){
if((!((node == null))) && (!((node.hitchhiker$tree$core$INode$merge_node$arity$2 == null)))){
return node.hitchhiker$tree$core$INode$merge_node$arity$2(node,other);
} else {
var x__10937__auto__ = (((node == null))?null:node);
var m__10938__auto__ = (hitchhiker.tree.core.merge_node[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,node,other);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.merge_node["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,node,other);
} else {
throw cljs.core.missing_protocol.call(null,"INode.merge-node",node);
}
}
}
});

/**
 * Returns a Split object with the 2 nodes that we turned this into
 */
hitchhiker.tree.core.split_node = (function hitchhiker$tree$core$split_node(node){
if((!((node == null))) && (!((node.hitchhiker$tree$core$INode$split_node$arity$1 == null)))){
return node.hitchhiker$tree$core$INode$split_node$arity$1(node);
} else {
var x__10937__auto__ = (((node == null))?null:node);
var m__10938__auto__ = (hitchhiker.tree.core.split_node[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,node);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.split_node["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,node);
} else {
throw cljs.core.missing_protocol.call(null,"INode.split-node",node);
}
}
}
});

/**
 * Returns the child node which contains the given key
 */
hitchhiker.tree.core.lookup = (function hitchhiker$tree$core$lookup(node,key){
if((!((node == null))) && (!((node.hitchhiker$tree$core$INode$lookup$arity$2 == null)))){
return node.hitchhiker$tree$core$INode$lookup$arity$2(node,key);
} else {
var x__10937__auto__ = (((node == null))?null:node);
var m__10938__auto__ = (hitchhiker.tree.core.lookup[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,node,key);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.lookup["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,node,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.lookup",node);
}
}
}
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
hitchhiker.tree.core.Split = (function (left,right,median,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.median = median;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.Split.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.Split.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42135,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42137 = k42135;
var G__42137__$1 = (((G__42137 instanceof cljs.core.Keyword))?G__42137.fqn:null);
switch (G__42137__$1) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
case "median":
return self__.median;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42135,else__10897__auto__);

}
});

hitchhiker.tree.core.Split.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.Split{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"median","median",569566131),self__.median],null))], null),self__.__extmap));
});

hitchhiker.tree.core.Split.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.Split.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42134){
var self__ = this;
var G__42134__$1 = this;
return (new cljs.core.RecordIter((0),G__42134__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"median","median",569566131)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.Split.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.Split.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.Split(self__.left,self__.right,self__.median,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.Split.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.Split.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.Split.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.Split.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"median","median",569566131),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.Split(self__.left,self__.right,self__.median,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.Split.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42134){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42138 = cljs.core.keyword_identical_QMARK_;
var expr__42139 = k__10902__auto__;
if(cljs.core.truth_(pred__42138.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__42139))){
return (new hitchhiker.tree.core.Split(G__42134,self__.right,self__.median,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42138.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__42139))){
return (new hitchhiker.tree.core.Split(self__.left,G__42134,self__.median,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42138.call(null,new cljs.core.Keyword(null,"median","median",569566131),expr__42139))){
return (new hitchhiker.tree.core.Split(self__.left,self__.right,G__42134,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.core.Split(self__.left,self__.right,self__.median,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42134),null));
}
}
}
});

hitchhiker.tree.core.Split.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"median","median",569566131),self__.median],null))], null),self__.__extmap));
});

hitchhiker.tree.core.Split.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42134){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.Split(self__.left,self__.right,self__.median,G__42134,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.Split.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.Split.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"median","median",-2084869638,null)], null);
});

hitchhiker.tree.core.Split.cljs$lang$type = true;

hitchhiker.tree.core.Split.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/Split");
});

hitchhiker.tree.core.Split.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/Split");
});

hitchhiker.tree.core.__GT_Split = (function hitchhiker$tree$core$__GT_Split(left,right,median){
return (new hitchhiker.tree.core.Split(left,right,median,null,null,null));
});

hitchhiker.tree.core.map__GT_Split = (function hitchhiker$tree$core$map__GT_Split(G__42136){
return (new hitchhiker.tree.core.Split(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__42136),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__42136),new cljs.core.Keyword(null,"median","median",569566131).cljs$core$IFn$_invoke$arity$1(G__42136),null,cljs.core.dissoc.call(null,G__42136,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"median","median",569566131)),null));
});

hitchhiker.tree.core.order_on_edn_types = (function hitchhiker$tree$core$order_on_edn_types(t){
if(cljs.core.map_QMARK_.call(null,t)){
return (0);
} else {
if(cljs.core.vector_QMARK_.call(null,t)){
return (1);
} else {
if(cljs.core.set_QMARK_.call(null,t)){
return (2);
} else {
if(typeof t === 'number'){
return (3);
} else {
if(typeof t === 'string'){
return (4);
} else {
if((t instanceof cljs.core.Symbol)){
return (5);
} else {
if((t instanceof cljs.core.Keyword)){
return (6);
} else {
return null;
}
}
}
}
}
}
}
});
(hitchhiker.tree.core.IKeyCompare["number"] = true);

(hitchhiker.tree.core.compare["number"] = (function (key1,key2){
return cljs.core.compare.call(null,key1,key2);
}));

(hitchhiker.tree.core.IKeyCompare["object"] = true);

(hitchhiker.tree.core.compare["object"] = (function (key1,key2){
return cljs.core.compare.call(null,key1,key2);
}));

/**
 * Calculates the separating keys given the children of an index node
 */
hitchhiker.tree.core.index_node_keys = (function hitchhiker$tree$core$index_node_keys(children){
return cljs.core.mapv.call(null,hitchhiker.tree.core.last_key,cljs.core.butlast.call(null,children));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.INode}
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
hitchhiker.tree.core.IndexNode = (function (children,storage_addr,op_buf,cfg,__meta,__extmap,__hash){
this.children = children;
this.storage_addr = storage_addr;
this.op_buf = op_buf;
this.cfg = cfg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.IndexNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42144,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42146 = k42144;
var G__42146__$1 = (((G__42146 instanceof cljs.core.Keyword))?G__42146.fqn:null);
switch (G__42146__$1) {
case "children":
return self__.children;

break;
case "storage-addr":
return self__.storage_addr;

break;
case "op-buf":
return self__.op_buf;

break;
case "cfg":
return self__.cfg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42144,else__10897__auto__);

}
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.IndexNode{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),self__.op_buf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cfg","cfg",-1737080704),self__.cfg],null))], null),self__.__extmap));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42143){
var self__ = this;
var G__42143__$1 = this;
return (new cljs.core.RecordIter((0),G__42143__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),new cljs.core.Keyword(null,"cfg","cfg",-1737080704)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,self__.op_buf,self__.cfg,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$overflow_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (cljs.core.count.call(null,self__.children) >= ((2) * new cljs.core.Keyword(null,"index-b","index-b",-893094593).cljs$core$IFn$_invoke$arity$1(self__.cfg)));
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$underflow_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (cljs.core.count.call(null,self__.children) < new cljs.core.Keyword(null,"index-b","index-b",-893094593).cljs$core$IFn$_invoke$arity$1(self__.cfg));
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$split_node$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var b = new cljs.core.Keyword(null,"index-b","index-b",-893094593).cljs$core$IFn$_invoke$arity$1(self__.cfg);
var median = cljs.core.nth.call(null,hitchhiker.tree.core.index_node_keys.call(null,self__.children),(b - (1)));
var vec__42147 = cljs.core.split_with.call(null,((function (b,median,this$__$1){
return (function (p1__42142_SHARP_){
return !((hitchhiker.tree.core.compare.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__42142_SHARP_),median) > (0)));
});})(b,median,this$__$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),hitchhiker.tree.core.compare,self__.op_buf));
var left_buf = cljs.core.nth.call(null,vec__42147,(0),null);
var right_buf = cljs.core.nth.call(null,vec__42147,(1),null);
return hitchhiker.tree.core.__GT_Split.call(null,hitchhiker.tree.core.__GT_IndexNode.call(null,clojure.core.rrb_vector.subvec.call(null,self__.children,(0),b),cljs.core.async.promise_chan.call(null),cljs.core.vec.call(null,left_buf),self__.cfg),hitchhiker.tree.core.__GT_IndexNode.call(null,clojure.core.rrb_vector.subvec.call(null,self__.children,b),cljs.core.async.promise_chan.call(null),cljs.core.vec.call(null,right_buf),self__.cfg),median);
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$merge_node$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return hitchhiker.tree.core.__GT_IndexNode.call(null,clojure.core.rrb_vector.catvec.call(null,self__.children,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(other)),cljs.core.async.promise_chan.call(null),clojure.core.rrb_vector.catvec.call(null,self__.op_buf,new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914).cljs$core$IFn$_invoke$arity$1(other)),self__.cfg);
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$INode$lookup$arity$2 = (function (root,key){
var self__ = this;
var root__$1 = this;
var l = (cljs.core.count.call(null,self__.children) - (1));
var a = cljs.core.object_array.call(null,l);
var _ = (function (){var n__11240__auto__ = l;
var i = (0);
while(true){
if((i < n__11240__auto__)){
(a[i] = hitchhiker.tree.core.last_key.call(null,cljs.core.nth.call(null,self__.children,i)));

var G__42154 = (i + (1));
i = G__42154;
continue;
} else {
return null;
}
break;
}
})();
var x = goog.array.binarySearch(a,key,hitchhiker.tree.core.compare);
if((x < (0))){
return (- (x + (1)));
} else {
return x;
}
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$IResolve$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$IResolve$index_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.not.call(null,hitchhiker.tree.core.poll_BANG_.call(null,self__.storage_addr));
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$IResolve$resolve$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

hitchhiker.tree.core.IndexNode.prototype.hitchhiker$tree$core$IResolve$last_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return hitchhiker.tree.core.last_key.call(null,cljs.core.peek.call(null,self__.children));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null,new cljs.core.Keyword(null,"cfg","cfg",-1737080704),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,self__.op_buf,self__.cfg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42143){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42150 = cljs.core.keyword_identical_QMARK_;
var expr__42151 = k__10902__auto__;
if(cljs.core.truth_(pred__42150.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__42151))){
return (new hitchhiker.tree.core.IndexNode(G__42143,self__.storage_addr,self__.op_buf,self__.cfg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42150.call(null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),expr__42151))){
return (new hitchhiker.tree.core.IndexNode(self__.children,G__42143,self__.op_buf,self__.cfg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42150.call(null,new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),expr__42151))){
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,G__42143,self__.cfg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42150.call(null,new cljs.core.Keyword(null,"cfg","cfg",-1737080704),expr__42151))){
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,self__.op_buf,G__42143,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,self__.op_buf,self__.cfg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42143),null));
}
}
}
}
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),self__.op_buf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cfg","cfg",-1737080704),self__.cfg],null))], null),self__.__extmap));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42143){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.IndexNode(self__.children,self__.storage_addr,self__.op_buf,self__.cfg,G__42143,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.IndexNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.IndexNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"storage-addr","storage-addr",-716066169,null),new cljs.core.Symbol(null,"op-buf","op-buf",-453595387,null),new cljs.core.Symbol(null,"cfg","cfg",-96549177,null)], null);
});

hitchhiker.tree.core.IndexNode.cljs$lang$type = true;

hitchhiker.tree.core.IndexNode.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/IndexNode");
});

hitchhiker.tree.core.IndexNode.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/IndexNode");
});

hitchhiker.tree.core.__GT_IndexNode = (function hitchhiker$tree$core$__GT_IndexNode(children,storage_addr,op_buf,cfg){
return (new hitchhiker.tree.core.IndexNode(children,storage_addr,op_buf,cfg,null,null,null));
});

hitchhiker.tree.core.map__GT_IndexNode = (function hitchhiker$tree$core$map__GT_IndexNode(G__42145){
return (new hitchhiker.tree.core.IndexNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__42145),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600).cljs$core$IFn$_invoke$arity$1(G__42145),new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914).cljs$core$IFn$_invoke$arity$1(G__42145),new cljs.core.Keyword(null,"cfg","cfg",-1737080704).cljs$core$IFn$_invoke$arity$1(G__42145),null,cljs.core.dissoc.call(null,G__42145,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),new cljs.core.Keyword(null,"op-buf","op-buf",-2094126914),new cljs.core.Keyword(null,"cfg","cfg",-1737080704)),null));
});

hitchhiker.tree.core.index_node_QMARK_ = (function hitchhiker$tree$core$index_node_QMARK_(node){
return (node instanceof hitchhiker.tree.core.IndexNode);
});
/**
 * Like nth, but for sorted sets. O(n)
 */
hitchhiker.tree.core.nth_of_set = (function hitchhiker$tree$core$nth_of_set(set,index){
return cljs.core.first.call(null,cljs.core.drop.call(null,index,set));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.INode}
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
hitchhiker.tree.core.DataNode = (function (children,storage_addr,cfg,__meta,__extmap,__hash){
this.children = children;
this.storage_addr = storage_addr;
this.cfg = cfg;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.DataNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42156,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42158 = k42156;
var G__42158__$1 = (((G__42158 instanceof cljs.core.Keyword))?G__42158.fqn:null);
switch (G__42158__$1) {
case "children":
return self__.children;

break;
case "storage-addr":
return self__.storage_addr;

break;
case "cfg":
return self__.cfg;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42156,else__10897__auto__);

}
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.DataNode{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cfg","cfg",-1737080704),self__.cfg],null))], null),self__.__extmap));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.DataNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42155){
var self__ = this;
var G__42155__$1 = this;
return (new cljs.core.RecordIter((0),G__42155__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),new cljs.core.Keyword(null,"cfg","cfg",-1737080704)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.DataNode(self__.children,self__.storage_addr,self__.cfg,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.DataNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$overflow_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (cljs.core.count.call(null,self__.children) >= ((2) * new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(self__.cfg)));
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$underflow_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (cljs.core.count.call(null,self__.children) < new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(self__.cfg));
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$split_node$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return hitchhiker.tree.core.__GT_Split.call(null,hitchhiker.tree.core.data_node.call(null,self__.cfg,cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,hitchhiker.tree.core.compare),cljs.core.take.call(null,new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(self__.cfg)),self__.children)),hitchhiker.tree.core.data_node.call(null,self__.cfg,cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,hitchhiker.tree.core.compare),cljs.core.drop.call(null,new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(self__.cfg)),self__.children)),hitchhiker.tree.core.nth_of_set.call(null,self__.children,(new cljs.core.Keyword(null,"data-b","data-b",1844973736).cljs$core$IFn$_invoke$arity$1(self__.cfg) - (1))));
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$merge_node$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return hitchhiker.tree.core.data_node.call(null,self__.cfg,cljs.core.into.call(null,self__.children,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(other)));
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$INode$lookup$arity$2 = (function (root,key){
var self__ = this;
var root__$1 = this;
var x = goog.array.binarySearch(cljs.core.into_array.call(null,cljs.core.keys.call(null,self__.children)),key,hitchhiker.tree.core.compare);
if((x < (0))){
return (- (x + (1)));
} else {
return x;
}
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$IResolve$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$IResolve$index_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$IResolve$resolve$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.not.call(null,hitchhiker.tree.core.poll_BANG_.call(null,self__.storage_addr));
});

hitchhiker.tree.core.DataNode.prototype.hitchhiker$tree$core$IResolve$last_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.seq.call(null,self__.children)){
return cljs.core.key.call(null,cljs.core.first.call(null,cljs.core.rseq.call(null,self__.children)));
} else {
return null;
}
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),null,new cljs.core.Keyword(null,"cfg","cfg",-1737080704),null,new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.DataNode(self__.children,self__.storage_addr,self__.cfg,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42155){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42159 = cljs.core.keyword_identical_QMARK_;
var expr__42160 = k__10902__auto__;
if(cljs.core.truth_(pred__42159.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__42160))){
return (new hitchhiker.tree.core.DataNode(G__42155,self__.storage_addr,self__.cfg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42159.call(null,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),expr__42160))){
return (new hitchhiker.tree.core.DataNode(self__.children,G__42155,self__.cfg,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42159.call(null,new cljs.core.Keyword(null,"cfg","cfg",-1737080704),expr__42160))){
return (new hitchhiker.tree.core.DataNode(self__.children,self__.storage_addr,G__42155,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.core.DataNode(self__.children,self__.storage_addr,self__.cfg,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42155),null));
}
}
}
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),self__.storage_addr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cfg","cfg",-1737080704),self__.cfg],null))], null),self__.__extmap));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42155){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.DataNode(self__.children,self__.storage_addr,self__.cfg,G__42155,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.DataNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.DataNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"storage-addr","storage-addr",-716066169,null),new cljs.core.Symbol(null,"cfg","cfg",-96549177,null)], null);
});

hitchhiker.tree.core.DataNode.cljs$lang$type = true;

hitchhiker.tree.core.DataNode.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/DataNode");
});

hitchhiker.tree.core.DataNode.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/DataNode");
});

hitchhiker.tree.core.__GT_DataNode = (function hitchhiker$tree$core$__GT_DataNode(children,storage_addr,cfg){
return (new hitchhiker.tree.core.DataNode(children,storage_addr,cfg,null,null,null));
});

hitchhiker.tree.core.map__GT_DataNode = (function hitchhiker$tree$core$map__GT_DataNode(G__42157){
return (new hitchhiker.tree.core.DataNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__42157),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600).cljs$core$IFn$_invoke$arity$1(G__42157),new cljs.core.Keyword(null,"cfg","cfg",-1737080704).cljs$core$IFn$_invoke$arity$1(G__42157),null,cljs.core.dissoc.call(null,G__42157,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),new cljs.core.Keyword(null,"cfg","cfg",-1737080704)),null));
});

/**
 * Creates a new data node
 */
hitchhiker.tree.core.data_node = (function hitchhiker$tree$core$data_node(cfg,children){
return hitchhiker.tree.core.__GT_DataNode.call(null,children,cljs.core.async.promise_chan.call(null),cfg);
});
hitchhiker.tree.core.data_node_QMARK_ = (function hitchhiker$tree$core$data_node_QMARK_(node){
return (node instanceof hitchhiker.tree.core.DataNode);
});
/**
 * Given a path (starting with root and ending with an index), searches backwards,
 * passing each pair of parent & index we just came from to the predicate function.
 * When that function returns true, we return the path ending in the index for which
 * it was true, or else we return the empty path
 */
hitchhiker.tree.core.backtrack_up_path_until = (function hitchhiker$tree$core$backtrack_up_path_until(path,pred){
var path__$1 = path;
while(true){
if(cljs.core.seq.call(null,path__$1)){
var from_index = cljs.core.peek.call(null,path__$1);
var tmp = cljs.core.pop.call(null,path__$1);
var parent = cljs.core.peek.call(null,tmp);
if(cljs.core.truth_(pred.call(null,parent,from_index))){
return path__$1;
} else {
var G__42163 = cljs.core.pop.call(null,tmp);
path__$1 = G__42163;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Given a node on a path, find's that node's right successor node
 */
hitchhiker.tree.core.right_successor = (function hitchhiker$tree$core$right_successor(path){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Given a B-tree and a key, gets a path into the tree
 */
hitchhiker.tree.core.lookup_path = (function hitchhiker$tree$core$lookup_path(tree,key){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Given a B-tree and a key, gets an iterator into the tree
 */
hitchhiker.tree.core.lookup_key = (function hitchhiker$tree$core$lookup_key(var_args){
var args42164 = [];
var len__11440__auto___42167 = arguments.length;
var i__11441__auto___42168 = (0);
while(true){
if((i__11441__auto___42168 < len__11440__auto___42167)){
args42164.push((arguments[i__11441__auto___42168]));

var G__42169 = (i__11441__auto___42168 + (1));
i__11441__auto___42168 = G__42169;
continue;
} else {
}
break;
}

var G__42166 = args42164.length;
switch (G__42166) {
case 2:
return hitchhiker.tree.core.lookup_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitchhiker.tree.core.lookup_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42164.length)].join('')));

}
});

hitchhiker.tree.core.lookup_key.cljs$core$IFn$_invoke$arity$2 = (function (tree,key){
return hitchhiker.tree.core.lookup_key.call(null,tree,key,null);
});

hitchhiker.tree.core.lookup_key.cljs$core$IFn$_invoke$arity$3 = (function (tree,key,not_found){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.core.lookup_key.cljs$lang$maxFixedArity = 3;

var G__42171_42172 = hitchhiker.tree.core._STAR_async_backend_STAR_;
var G__42171_42173__$1 = (((G__42171_42172 instanceof cljs.core.Keyword))?G__42171_42172.fqn:null);
switch (G__42171_42173__$1) {
case "none":
/**
 * Takes the result of a search and returns an iterator going
 * forward over the tree. Does lg(n) backtracking sometimes.
 */
hitchhiker.tree.core.forward_iterator = ((function (G__42171_42172,G__42171_42173__$1){
return (function hitchhiker$tree$core$forward_iterator(path,start_key){
var start_node = cljs.core.peek.call(null,path);
if(cljs.core.truth_(hitchhiker.tree.core.data_node_QMARK_.call(null,start_node))){
} else {
throw (new Error("Assert failed: (data-node? start-node)"));
}

var first_elements = cljs.core.subseq.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(start_node),cljs.core._GT__EQ_,start_key);
var next_elements = (new cljs.core.LazySeq(null,((function (first_elements,start_node,G__42171_42172,G__42171_42173__$1){
return (function (){
var temp__6738__auto__ = hitchhiker.tree.core.right_successor.call(null,cljs.core.pop.call(null,path));
if(cljs.core.truth_(temp__6738__auto__)){
var succ = temp__6738__auto__;
return hitchhiker.tree.core.forward_iterator.call(null,succ,start_key);
} else {
return null;
}
});})(first_elements,start_node,G__42171_42172,G__42171_42173__$1))
,null,null));
return cljs.core.concat.call(null,first_elements,next_elements);
});})(G__42171_42172,G__42171_42173__$1))
;

hitchhiker.tree.core.lookup_fwd_iter = ((function (G__42171_42172,G__42171_42173__$1){
return (function hitchhiker$tree$core$lookup_fwd_iter(tree,key){
var path = hitchhiker.tree.core.lookup_path.call(null,tree,key);
if(cljs.core.truth_(path)){
return hitchhiker.tree.core.forward_iterator.call(null,path,key);
} else {
return null;
}
});})(G__42171_42172,G__42171_42173__$1))
;

break;
case "core.async":
/**
 * Takes the result of a search and puts the iterated elements onto iter-ch
 *   going forward over the tree as needed. Does lg(n) backtracking sometimes.
 */
hitchhiker.tree.core.forward_iterator = ((function (G__42171_42172,G__42171_42173__$1){
return (function hitchhiker$tree$core$forward_iterator(iter_ch,path,start_key){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});})(G__42171_42172,G__42171_42173__$1))
;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hitchhiker.tree.core._STAR_async_backend_STAR_)].join('')));

}
hitchhiker.tree.core.insert = (function hitchhiker$tree$core$insert(p__42175,key,value){
var map__42178 = p__42175;
var map__42178__$1 = ((((!((map__42178 == null)))?((((map__42178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42178):map__42178);
var tree = map__42178__$1;
var cfg = cljs.core.get.call(null,map__42178__$1,new cljs.core.Keyword(null,"cfg","cfg",-1737080704));
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});
hitchhiker.tree.core.delete$ = (function hitchhiker$tree$core$delete(p__42180,key){
var map__42183 = p__42180;
var map__42183__$1 = ((((!((map__42183 == null)))?((((map__42183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42183):map__42183);
var tree = map__42183__$1;
var cfg = cljs.core.get.call(null,map__42183__$1,new cljs.core.Keyword(null,"cfg","cfg",-1737080704));
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});
hitchhiker.tree.core.b_tree = (function hitchhiker$tree$core$b_tree(var_args){
var args__11447__auto__ = [];
var len__11440__auto___42187 = arguments.length;
var i__11441__auto___42188 = (0);
while(true){
if((i__11441__auto___42188 < len__11440__auto___42187)){
args__11447__auto__.push((arguments[i__11441__auto___42188]));

var G__42189 = (i__11441__auto___42188 + (1));
i__11441__auto___42188 = G__42189;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return hitchhiker.tree.core.b_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

hitchhiker.tree.core.b_tree.cljs$core$IFn$_invoke$arity$variadic = (function (cfg,kvs){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.core.b_tree.cljs$lang$maxFixedArity = (1);

hitchhiker.tree.core.b_tree.cljs$lang$applyTo = (function (seq42185){
var G__42186 = cljs.core.first.call(null,seq42185);
var seq42185__$1 = cljs.core.next.call(null,seq42185);
return hitchhiker.tree.core.b_tree.cljs$core$IFn$_invoke$arity$variadic(G__42186,seq42185__$1);
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
hitchhiker.tree.core.TestingAddr = (function (last_key,node,__meta,__extmap,__hash){
this.last_key = last_key;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42191,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42193 = k42191;
var G__42193__$1 = (((G__42193 instanceof cljs.core.Keyword))?G__42193.fqn:null);
switch (G__42193__$1) {
case "last-key":
return self__.last_key;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42191,else__10897__auto__);

}
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.TestingAddr{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-key","last-key",1546037142),self__.last_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42190){
var self__ = this;
var G__42190__$1 = this;
return (new cljs.core.RecordIter((0),G__42190__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-key","last-key",1546037142),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.TestingAddr(self__.last_key,self__.node,self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.TestingAddr.prototype.hitchhiker$tree$core$IResolve$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.TestingAddr.prototype.hitchhiker$tree$core$IResolve$dirty_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
});

hitchhiker.tree.core.TestingAddr.prototype.hitchhiker$tree$core$IResolve$last_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.last_key;
});

hitchhiker.tree.core.TestingAddr.prototype.hitchhiker$tree$core$IResolve$resolve$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.node;
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"last-key","last-key",1546037142),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.TestingAddr(self__.last_key,self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42190){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42194 = cljs.core.keyword_identical_QMARK_;
var expr__42195 = k__10902__auto__;
if(cljs.core.truth_(pred__42194.call(null,new cljs.core.Keyword(null,"last-key","last-key",1546037142),expr__42195))){
return (new hitchhiker.tree.core.TestingAddr(G__42190,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__42194.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42195))){
return (new hitchhiker.tree.core.TestingAddr(self__.last_key,G__42190,self__.__meta,self__.__extmap,null));
} else {
return (new hitchhiker.tree.core.TestingAddr(self__.last_key,self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42190),null));
}
}
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-key","last-key",1546037142),self__.last_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42190){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.TestingAddr(self__.last_key,self__.node,G__42190,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.TestingAddr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.TestingAddr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"last-key","last-key",-1108398627,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
});

hitchhiker.tree.core.TestingAddr.cljs$lang$type = true;

hitchhiker.tree.core.TestingAddr.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/TestingAddr");
});

hitchhiker.tree.core.TestingAddr.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/TestingAddr");
});

hitchhiker.tree.core.__GT_TestingAddr = (function hitchhiker$tree$core$__GT_TestingAddr(last_key,node){
return (new hitchhiker.tree.core.TestingAddr(last_key,node,null,null,null));
});

hitchhiker.tree.core.map__GT_TestingAddr = (function hitchhiker$tree$core$map__GT_TestingAddr(G__42192){
return (new hitchhiker.tree.core.TestingAddr(new cljs.core.Keyword(null,"last-key","last-key",1546037142).cljs$core$IFn$_invoke$arity$1(G__42192),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__42192),null,cljs.core.dissoc.call(null,G__42192,new cljs.core.Keyword(null,"last-key","last-key",1546037142),new cljs.core.Keyword(null,"node","node",581201198)),null));
});

/**
 * Marks a node as being dirty if it was clean
 */
hitchhiker.tree.core.dirty_BANG_ = (function hitchhiker$tree$core$dirty_BANG_(node){
if(!((node instanceof hitchhiker.tree.core.TestingAddr))){
} else {
throw (new Error("Assert failed: (not (instance? TestingAddr node))"));
}

return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"storage-addr","storage-addr",1938369600),cljs.core.async.promise_chan.call(null));
});
hitchhiker.tree.core.flush_children = (function hitchhiker$tree$core$flush_children(children,backend,session){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

/**
 * @interface
 */
hitchhiker.tree.core.IBackend = function(){};

/**
 * Returns a session object that will collect stats
 */
hitchhiker.tree.core.new_session = (function hitchhiker$tree$core$new_session(backend){
if((!((backend == null))) && (!((backend.hitchhiker$tree$core$IBackend$new_session$arity$1 == null)))){
return backend.hitchhiker$tree$core$IBackend$new_session$arity$1(backend);
} else {
var x__10937__auto__ = (((backend == null))?null:backend);
var m__10938__auto__ = (hitchhiker.tree.core.new_session[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,backend);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.new_session["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,backend);
} else {
throw cljs.core.missing_protocol.call(null,"IBackend.new-session",backend);
}
}
}
});

/**
 * Writes the given node to storage, returning a go-block with its assigned address
 */
hitchhiker.tree.core.write_node = (function hitchhiker$tree$core$write_node(backend,node,session){
if((!((backend == null))) && (!((backend.hitchhiker$tree$core$IBackend$write_node$arity$3 == null)))){
return backend.hitchhiker$tree$core$IBackend$write_node$arity$3(backend,node,session);
} else {
var x__10937__auto__ = (((backend == null))?null:backend);
var m__10938__auto__ = (hitchhiker.tree.core.write_node[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,backend,node,session);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.write_node["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,backend,node,session);
} else {
throw cljs.core.missing_protocol.call(null,"IBackend.write-node",backend);
}
}
}
});

/**
 * Tells the backend this is a temporary root
 */
hitchhiker.tree.core.anchor_root = (function hitchhiker$tree$core$anchor_root(backend,node){
if((!((backend == null))) && (!((backend.hitchhiker$tree$core$IBackend$anchor_root$arity$2 == null)))){
return backend.hitchhiker$tree$core$IBackend$anchor_root$arity$2(backend,node);
} else {
var x__10937__auto__ = (((backend == null))?null:backend);
var m__10938__auto__ = (hitchhiker.tree.core.anchor_root[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,backend,node);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.anchor_root["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,backend,node);
} else {
throw cljs.core.missing_protocol.call(null,"IBackend.anchor-root",backend);
}
}
}
});

/**
 * Deletes the given addr from storage
 */
hitchhiker.tree.core.delete_addr = (function hitchhiker$tree$core$delete_addr(backend,addr,session){
if((!((backend == null))) && (!((backend.hitchhiker$tree$core$IBackend$delete_addr$arity$3 == null)))){
return backend.hitchhiker$tree$core$IBackend$delete_addr$arity$3(backend,addr,session);
} else {
var x__10937__auto__ = (((backend == null))?null:backend);
var m__10938__auto__ = (hitchhiker.tree.core.delete_addr[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,backend,addr,session);
} else {
var m__10938__auto____$1 = (hitchhiker.tree.core.delete_addr["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,backend,addr,session);
} else {
throw cljs.core.missing_protocol.call(null,"IBackend.delete-addr",backend);
}
}
}
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
hitchhiker.tree.core.TestingBackend = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k42199,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__42201 = k42199;
switch (G__42201) {
default:
return cljs.core.get.call(null,self__.__extmap,k42199,else__10897__auto__);

}
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#hitchhiker.tree.core.TestingBackend{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42198){
var self__ = this;
var G__42198__$1 = this;
return (new cljs.core.RecordIter((0),G__42198__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new hitchhiker.tree.core.TestingBackend(self__.__meta,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

hitchhiker.tree.core.TestingBackend.prototype.hitchhiker$tree$core$IBackend$ = cljs.core.PROTOCOL_SENTINEL;

hitchhiker.tree.core.TestingBackend.prototype.hitchhiker$tree$core$IBackend$new_session$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"writes","writes",-102226269),(0)], null));
});

hitchhiker.tree.core.TestingBackend.prototype.hitchhiker$tree$core$IBackend$anchor_root$arity$2 = (function (_,root){
var self__ = this;
var ___$1 = this;
return root;
});

hitchhiker.tree.core.TestingBackend.prototype.hitchhiker$tree$core$IBackend$write_node$arity$3 = (function (_,node,session){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.core.TestingBackend.prototype.hitchhiker$tree$core$IBackend$delete_addr$arity$3 = (function (_,addr,session){
var self__ = this;
var ___$1 = this;
return null;
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new hitchhiker.tree.core.TestingBackend(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__42198){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__42202 = cljs.core.keyword_identical_QMARK_;
var expr__42203 = k__10902__auto__;
return (new hitchhiker.tree.core.TestingBackend(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__42198),null));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__42198){
var self__ = this;
var this__10893__auto____$1 = this;
return (new hitchhiker.tree.core.TestingBackend(G__42198,self__.__extmap,self__.__hash));
});

hitchhiker.tree.core.TestingBackend.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

hitchhiker.tree.core.TestingBackend.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hitchhiker.tree.core.TestingBackend.cljs$lang$type = true;

hitchhiker.tree.core.TestingBackend.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hitchhiker.tree.core/TestingBackend");
});

hitchhiker.tree.core.TestingBackend.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"hitchhiker.tree.core/TestingBackend");
});

hitchhiker.tree.core.__GT_TestingBackend = (function hitchhiker$tree$core$__GT_TestingBackend(){
return (new hitchhiker.tree.core.TestingBackend(null,null,null));
});

hitchhiker.tree.core.map__GT_TestingBackend = (function hitchhiker$tree$core$map__GT_TestingBackend(G__42200){
return (new hitchhiker.tree.core.TestingBackend(null,cljs.core.dissoc.call(null,G__42200),null));
});

/**
 * Given the tree, finds all dirty nodes, delivering addrs into them.
 * Every dirty node also gets replaced with its TestingAddr.
 * These form a GC cycle, have fun with the unmanaged memory port :)
 */
hitchhiker.tree.core.flush_tree = (function hitchhiker$tree$core$flush_tree(var_args){
var args42206 = [];
var len__11440__auto___42209 = arguments.length;
var i__11441__auto___42210 = (0);
while(true){
if((i__11441__auto___42210 < len__11440__auto___42209)){
args42206.push((arguments[i__11441__auto___42210]));

var G__42211 = (i__11441__auto___42210 + (1));
i__11441__auto___42210 = G__42211;
continue;
} else {
}
break;
}

var G__42208 = args42206.length;
switch (G__42208) {
case 2:
return hitchhiker.tree.core.flush_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hitchhiker.tree.core.flush_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42206.length)].join('')));

}
});

hitchhiker.tree.core.flush_tree.cljs$core$IFn$_invoke$arity$2 = (function (tree,backend){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.core.flush_tree.cljs$core$IFn$_invoke$arity$3 = (function (tree,backend,stats){
throw cljs.core.ex_info.call(null,"You need an async backend for cljs.",cljs.core.PersistentArrayMap.EMPTY);
});

hitchhiker.tree.core.flush_tree.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map