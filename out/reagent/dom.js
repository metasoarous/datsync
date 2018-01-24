// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__10219__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_39343 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_39343){
return (function (){
var _STAR_always_update_STAR_39344 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_39344;
}});})(_STAR_always_update_STAR_39343))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_39343;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args39345 = [];
var len__11440__auto___39348 = arguments.length;
var i__11441__auto___39349 = (0);
while(true){
if((i__11441__auto___39349 < len__11440__auto___39348)){
args39345.push((arguments[i__11441__auto___39349]));

var G__39350 = (i__11441__auto___39349 + (1));
i__11441__auto___39349 = G__39350;
continue;
} else {
}
break;
}

var G__39347 = args39345.length;
switch (G__39347) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39345.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__39356_39360 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__39357_39361 = null;
var count__39358_39362 = (0);
var i__39359_39363 = (0);
while(true){
if((i__39359_39363 < count__39358_39362)){
var v_39364 = cljs.core._nth.call(null,chunk__39357_39361,i__39359_39363);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_39364);

var G__39365 = seq__39356_39360;
var G__39366 = chunk__39357_39361;
var G__39367 = count__39358_39362;
var G__39368 = (i__39359_39363 + (1));
seq__39356_39360 = G__39365;
chunk__39357_39361 = G__39366;
count__39358_39362 = G__39367;
i__39359_39363 = G__39368;
continue;
} else {
var temp__6738__auto___39369 = cljs.core.seq.call(null,seq__39356_39360);
if(temp__6738__auto___39369){
var seq__39356_39370__$1 = temp__6738__auto___39369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39356_39370__$1)){
var c__11130__auto___39371 = cljs.core.chunk_first.call(null,seq__39356_39370__$1);
var G__39372 = cljs.core.chunk_rest.call(null,seq__39356_39370__$1);
var G__39373 = c__11130__auto___39371;
var G__39374 = cljs.core.count.call(null,c__11130__auto___39371);
var G__39375 = (0);
seq__39356_39360 = G__39372;
chunk__39357_39361 = G__39373;
count__39358_39362 = G__39374;
i__39359_39363 = G__39375;
continue;
} else {
var v_39376 = cljs.core.first.call(null,seq__39356_39370__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_39376);

var G__39377 = cljs.core.next.call(null,seq__39356_39370__$1);
var G__39378 = null;
var G__39379 = (0);
var G__39380 = (0);
seq__39356_39360 = G__39377;
chunk__39357_39361 = G__39378;
count__39358_39362 = G__39379;
i__39359_39363 = G__39380;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map