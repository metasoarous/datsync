// Compiled by ClojureScript 1.9.542 {}
goog.provide('posh.lib.util');
goog.require('cljs.core');
posh.lib.util.exception = (function posh$lib$util$exception(msg){
throw (new Error(msg));
});
posh.lib.util.t_for_datoms = (function posh$lib$util$t_for_datoms(q_fn,db,datoms){
return q_fn.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null),db,datoms);
});

//# sourceMappingURL=util.js.map