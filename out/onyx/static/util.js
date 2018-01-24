// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.static$.util');
goog.require('cljs.core');
onyx.static$.util.index_of = (function onyx$static$util$index_of(coll,element){
return cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p__12740){
var vec__12741 = p__12740;
var index = cljs.core.nth.call(null,vec__12741,(0),null);
var elem = cljs.core.nth.call(null,vec__12741,(1),null);
return cljs.core._EQ_.call(null,elem,element);
}),cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),coll)));
});
onyx.static$.util.munge_fn_name = (function onyx$static$util$munge_fn_name(kw){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge_str.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,kw))].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge_str.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,kw))].join('')))].join('');
});
onyx.static$.util.resolve_dynamic = (function onyx$static$util$resolve_dynamic(kw){
return eval(onyx.static$.util.munge_fn_name.call(null,kw));
});
onyx.static$.util.kw__GT_fn = (function onyx$static$util$kw__GT_fn(kw){
return onyx.static$.util.resolve_dynamic.call(null,kw);
});
onyx.static$.util.exception_QMARK_ = (function onyx$static$util$exception_QMARK_(e){
return (e instanceof Error);
});
onyx.static$.util.now = (function onyx$static$util$now(){
return Date.now();
});
onyx.static$.util.ms__GT_ns = (function onyx$static$util$ms__GT_ns(ms){
return ((1000000) * ms);
});
onyx.static$.util.ns__GT_ms = (function onyx$static$util$ns__GT_ms(ms){
return (ms / (1000000));
});

//# sourceMappingURL=util.js.map