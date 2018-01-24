// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.static$.default_vals');
goog.require('cljs.core');
goog.require('onyx.information_model');
/**
 * Indexes all keys to their defaul values for a direct look up.
 */
onyx.static$.default_vals.default_vals = cljs.core.reduce.call(null,(function (result,section){
return cljs.core.reduce_kv.call(null,(function (all,k,v){
return cljs.core.assoc.call(null,all,k,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(v));
}),result,new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(section));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,onyx.information_model.model));
onyx.static$.default_vals.arg_or_default = (function onyx$static$default_vals$arg_or_default(k,opts){
var _PERCENT_ = cljs.core.get.call(null,opts,k,cljs.core.get.call(null,onyx.static$.default_vals.default_vals,k));
if(!((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (not (nil? %))"));
}

return _PERCENT_;
});

//# sourceMappingURL=default_vals.js.map