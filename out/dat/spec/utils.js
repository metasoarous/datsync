// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.spec.utils');
goog.require('cljs.core');
/**
 * Any number of transducers and sequences concatonated into one sequence.
 */
dat.spec.utils.cat_into = (function dat$spec$utils$cat_into(var_args){
var args__11447__auto__ = [];
var len__11440__auto___39457 = arguments.length;
var i__11441__auto___39458 = (0);
while(true){
if((i__11441__auto___39458 < len__11440__auto___39457)){
args__11447__auto__.push((arguments[i__11441__auto___39458]));

var G__39459 = (i__11441__auto___39458 + (1));
i__11441__auto___39458 = G__39459;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xfns_and_seqs){
var map__39455 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,xfns_and_seqs)))?cljs.core.group_by.call(null,cljs.core.fn_QMARK_,xfns_and_seqs):new cljs.core.PersistentArrayMap(null, 1, [false,xfns_and_seqs], null));
var map__39455__$1 = ((((!((map__39455 == null)))?((((map__39455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39455):map__39455);
var xfns = cljs.core.get.call(null,map__39455__$1,true);
var seqs = cljs.core.get.call(null,map__39455__$1,false);
return cljs.core.into.call(null,coll,cljs.core.apply.call(null,cljs.core.comp,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cat], null),xfns)),seqs);
});

dat.spec.utils.cat_into.cljs$lang$maxFixedArity = (1);

dat.spec.utils.cat_into.cljs$lang$applyTo = (function (seq39453){
var G__39454 = cljs.core.first.call(null,seq39453);
var seq39453__$1 = cljs.core.next.call(null,seq39453);
return dat.spec.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic(G__39454,seq39453__$1);
});

/**
 * Like merge, but merges maps recursively.
 */
dat.spec.utils.deep_merge = (function dat$spec$utils$deep_merge(var_args){
var args__11447__auto__ = [];
var len__11440__auto___39462 = arguments.length;
var i__11441__auto___39463 = (0);
while(true){
if((i__11441__auto___39463 < len__11440__auto___39462)){
args__11447__auto__.push((arguments[i__11441__auto___39463]));

var G__39464 = (i__11441__auto___39463 + (1));
i__11441__auto___39463 = G__39464;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,(function (p1__39460_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__39460_SHARP_)) || ((p1__39460_SHARP_ == null));
}),maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,dat.spec.utils.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

dat.spec.utils.deep_merge.cljs$lang$maxFixedArity = (0);

dat.spec.utils.deep_merge.cljs$lang$applyTo = (function (seq39461){
return dat.spec.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39461));
});

dat.spec.utils.deref_or_value = (function dat$spec$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});

//# sourceMappingURL=utils.js.map