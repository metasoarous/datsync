// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.lru');
goog.require('cljs.core');
datahike.lru.assoc_lru = (function datahike$lru$assoc_lru(lru,k,v){
return null;
});
datahike.lru.cleanup_lru = (function datahike$lru$cleanup_lru(lru){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datahike.lru.LRU = (function (key_value,gen_key,key_gen,gen,limit){
this.key_value = key_value;
this.gen_key = gen_key;
this.key_gen = key_gen;
this.gen = gen;
this.limit = limit;
this.cljs$lang$protocol_mask$partition0$ = 2147484416;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datahike.lru.LRU.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return datahike.lru.assoc_lru.call(null,this$__$1,k,v);
});

datahike.lru.LRU.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.key_value,k);
});

datahike.lru.LRU.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup.call(null,self__.key_value,k,null);
});

datahike.lru.LRU.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup.call(null,self__.key_value,k,nf);
});

datahike.lru.LRU.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.persistent_BANG_.call(null,self__.key_value),writer,opts);
});

datahike.lru.LRU.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-value","key-value",1605624688,null),new cljs.core.Symbol(null,"gen-key","gen-key",392707442,null),new cljs.core.Symbol(null,"key-gen","key-gen",415199034,null),new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Symbol(null,"limit","limit",284709164,null)], null);
});

datahike.lru.LRU.cljs$lang$type = true;

datahike.lru.LRU.cljs$lang$ctorStr = "datahike.lru/LRU";

datahike.lru.LRU.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.lru/LRU");
});

datahike.lru.__GT_LRU = (function datahike$lru$__GT_LRU(key_value,gen_key,key_gen,gen,limit){
return (new datahike.lru.LRU(key_value,gen_key,key_gen,gen,limit));
});

datahike.lru.assoc_lru = (function datahike$lru$assoc_lru(lru,k,v){
var key_value = lru.key_value;
var gen_key = lru.gen_key;
var key_gen = lru.key_gen;
var gen = lru.gen;
var limit = lru.limit;
var temp__6736__auto__ = key_gen.call(null,k,null);
if(cljs.core.truth_(temp__6736__auto__)){
var g = temp__6736__auto__;
return datahike.lru.__GT_LRU.call(null,key_value,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,gen_key,g),gen,k),cljs.core.assoc.call(null,key_gen,k,gen),(gen + (1)),limit);
} else {
return datahike.lru.cleanup_lru.call(null,datahike.lru.__GT_LRU.call(null,cljs.core.assoc.call(null,key_value,k,v),cljs.core.assoc.call(null,gen_key,gen,k),cljs.core.assoc.call(null,key_gen,k,gen),(gen + (1)),limit));
}
});
datahike.lru.cleanup_lru = (function datahike$lru$cleanup_lru(lru){
if((cljs.core.count.call(null,lru.key_value) > lru.limit)){
var key_value = lru.key_value;
var gen_key = lru.gen_key;
var key_gen = lru.key_gen;
var gen = lru.gen;
var limit = lru.limit;
var vec__48008 = cljs.core.first.call(null,gen_key);
var g = cljs.core.nth.call(null,vec__48008,(0),null);
var k = cljs.core.nth.call(null,vec__48008,(1),null);
return datahike.lru.__GT_LRU.call(null,cljs.core.dissoc.call(null,key_value,k),cljs.core.dissoc.call(null,gen_key,g),cljs.core.dissoc.call(null,key_gen,k),gen,limit);
} else {
return lru;
}
});
datahike.lru.lru = (function datahike$lru$lru(limit){
return datahike.lru.__GT_LRU.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,(0),limit);
});

//# sourceMappingURL=lru.js.map