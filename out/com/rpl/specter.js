// Compiled by ClojureScript 1.9.542 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('com.rpl.specter.navs');
goog.require('clojure.set');
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__11447__auto__ = [];
var len__11440__auto___17638 = arguments.length;
var i__11441__auto___17639 = (0);
while(true){
if((i__11441__auto___17639 < len__11440__auto___17638)){
args__11447__auto__.push((arguments[i__11441__auto___17639]));

var G__17640 = (i__11441__auto___17639 + (1));
i__11441__auto___17639 = G__17640;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,apath));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq17637){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17637));
});

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
return com.rpl.specter.compiled_select_any.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
return com.rpl.specter.compiled_selected_any_QMARK_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
return com.rpl.specter.compiled_traverse.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,apath),structure);
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal`. Error is thrown if navigation finishes
 * at a non-`terminal` navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
return com.rpl.specter.compiled_multi_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___17648 = arguments.length;
var i__11441__auto___17649 = (0);
while(true){
if((i__11441__auto___17649 < len__11440__auto___17648)){
args__11447__auto__.push((arguments[i__11441__auto___17649]));

var G__17650 = (i__11441__auto___17649 + (1));
i__11441__auto___17649 = G__17650;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((3) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11448__auto__);
});

com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__17645){
var map__17646 = p__17645;
var map__17646__$1 = ((((!((map__17646 == null)))?((((map__17646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17646):map__17646);
var merge_fn = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq17641){
var G__17642 = cljs.core.first.call(null,seq17641);
var seq17641__$1 = cljs.core.next.call(null,seq17641);
var G__17643 = cljs.core.first.call(null,seq17641__$1);
var seq17641__$2 = cljs.core.next.call(null,seq17641__$1);
var G__17644 = cljs.core.first.call(null,seq17641__$2);
var seq17641__$3 = cljs.core.next.call(null,seq17641__$2);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__17642,G__17643,G__17644,seq17641__$3);
});

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.call(null,(function (navfn){
var latenavfn = com.rpl.specter.late_resolved_fn.call(null,navfn);
return cljs.core.vary_meta.call(null,((function (latenavfn){
return (function() { 
var G__17651__delegate = function (args){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
return latenavfn.call(null,cljs.core.first.call(null,args));
} else {
return cljs.core.map.call(null,latenavfn,args);
}
};
var G__17651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17652__i = 0, G__17652__a = new Array(arguments.length -  0);
while (G__17652__i < G__17652__a.length) {G__17652__a[G__17652__i] = arguments[G__17652__i + 0]; ++G__17652__i;}
  args = new cljs.core.IndexedSeq(G__17652__a,0,null);
} 
return G__17651__delegate.call(this,args);};
G__17651.cljs$lang$maxFixedArity = 0;
G__17651.cljs$lang$applyTo = (function (arglist__17653){
var args = cljs.core.seq(arglist__17653);
return G__17651__delegate(args);
});
G__17651.cljs$core$IFn$_invoke$arity$variadic = G__17651__delegate;
return G__17651;
})()
;})(latenavfn))
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17654 = (function (meta17655){
this.meta17655 = meta17655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17656,meta17655__$1){
var self__ = this;
var _17656__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17654(meta17655__$1));
});

com.rpl.specter.t_com$rpl$specter17654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17656){
var self__ = this;
var _17656__$1 = this;
return self__.meta17655;
});

com.rpl.specter.t_com$rpl$specter17654.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17654.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.NONE;
});

com.rpl.specter.t_com$rpl$specter17654.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return structure;
});

com.rpl.specter.t_com$rpl$specter17654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17655","meta17655",445690298,null)], null);
});

com.rpl.specter.t_com$rpl$specter17654.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17654.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17654";

com.rpl.specter.t_com$rpl$specter17654.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17654");
});

com.rpl.specter.__GT_t_com$rpl$specter17654 = (function com$rpl$specter$__GT_t_com$rpl$specter17654(meta17655){
return (new com.rpl.specter.t_com$rpl$specter17654(meta17655));
});

}

return (new com.rpl.specter.t_com$rpl$specter17654(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * For usage with `multi-transform`, defines an endpoint in the navigation
 *        that will have the parameterized transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter17657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17657 = (function (afn,meta17658){
this.afn = afn;
this.meta17658 = meta17658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17659,meta17658__$1){
var self__ = this;
var _17659__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17657(self__.afn,meta17658__$1));
});

com.rpl.specter.t_com$rpl$specter17657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17659){
var self__ = this;
var _17659__$1 = this;
return self__.meta17658;
});

com.rpl.specter.t_com$rpl$specter17657.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17657.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
throw (new java.lang.IllegalArgumentException(com.rpl.specter.impl.smart_str.call(null,"'terminal' should only be used in multi-transform")));
});

com.rpl.specter.t_com$rpl$specter17657.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_.call(null,self__.afn,vals,structure);
});

com.rpl.specter.t_com$rpl$specter17657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta17658","meta17658",1574998049,null)], null);
});

com.rpl.specter.t_com$rpl$specter17657.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17657.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17657";

com.rpl.specter.t_com$rpl$specter17657.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17657");
});

com.rpl.specter.__GT_t_com$rpl$specter17657 = (function com$rpl$specter$__GT_t_com$rpl$specter17657(afn__$1,meta17658){
return (new com.rpl.specter.t_com$rpl$specter17657(afn__$1,meta17658));
});

}

return (new com.rpl.specter.t_com$rpl$specter17657(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
return com.rpl.specter.terminal.call(null,com.rpl.specter.impl.fast_constantly.call(null,v));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17660 = (function (meta17661){
this.meta17661 = meta17661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17662,meta17661__$1){
var self__ = this;
var _17662__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17660(meta17661__$1));
});

com.rpl.specter.t_com$rpl$specter17660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17662){
var self__ = this;
var _17662__$1 = this;
return self__.meta17661;
});

com.rpl.specter.t_com$rpl$specter17660.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17660.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.all_select.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17660.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.all_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17661","meta17661",1725757830,null)], null);
});

com.rpl.specter.t_com$rpl$specter17660.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17660.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17660";

com.rpl.specter.t_com$rpl$specter17660.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17660");
});

com.rpl.specter.__GT_t_com$rpl$specter17660 = (function com$rpl$specter$__GT_t_com$rpl$specter17660(meta17661){
return (new com.rpl.specter.t_com$rpl$specter17660(meta17661));
});

}

return (new com.rpl.specter.t_com$rpl$specter17660(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__14506__auto__,v){
var ret__14507__auto__ = next_fn.call(null,v);
if((ret__14507__auto__ === com.rpl.specter.NONE)){
return curr__14506__auto__;
} else {
return ret__14507__auto__;
}
}),com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17663 = (function (meta17664){
this.meta17664 = meta17664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17665,meta17664__$1){
var self__ = this;
var _17665__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17663(meta17664__$1));
});

com.rpl.specter.t_com$rpl$specter17663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17665){
var self__ = this;
var _17665__$1 = this;
return self__.meta17664;
});

com.rpl.specter.t_com$rpl$specter17663.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17663.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__16326__auto____$1){
return (function (curr__14506__auto__,v){
var ret__14507__auto__ = next_fn.call(null,v);
if((ret__14507__auto__ === com.rpl.specter.NONE)){
return curr__14506__auto__;
} else {
return ret__14507__auto__;
}
});})(next_fn,this__16326__auto____$1))
,com.rpl.specter.NONE,cljs.core.vals.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17663.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.map_vals_transform.call(null,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17664","meta17664",1954904009,null)], null);
});

com.rpl.specter.t_com$rpl$specter17663.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17663.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17663";

com.rpl.specter.t_com$rpl$specter17663.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17663");
});

com.rpl.specter.__GT_t_com$rpl$specter17663 = (function com$rpl$specter$__GT_t_com$rpl$specter17663(meta17664){
return (new com.rpl.specter.t_com$rpl$specter17663(meta17664));
});

}

return (new com.rpl.specter.t_com$rpl$specter17663(null));
})()
;
com.rpl.specter.VAL = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17666 = (function (meta17667){
this.meta17667 = meta17667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17668,meta17667__$1){
var self__ = this;
var _17668__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17666(meta17667__$1));
});

com.rpl.specter.t_com$rpl$specter17666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17668){
var self__ = this;
var _17668__$1 = this;
return self__.meta17667;
});

com.rpl.specter.t_com$rpl$specter17666.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17666.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter17666.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,structure),structure);
});

com.rpl.specter.t_com$rpl$specter17666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17667","meta17667",481814301,null)], null);
});

com.rpl.specter.t_com$rpl$specter17666.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17666.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17666";

com.rpl.specter.t_com$rpl$specter17666.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17666");
});

com.rpl.specter.__GT_t_com$rpl$specter17666 = (function com$rpl$specter$__GT_t_com$rpl$specter17666(meta17667){
return (new com.rpl.specter.t_com$rpl$specter17666(meta17667));
});

}

return (new com.rpl.specter.t_com$rpl$specter17666(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last);
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first);


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_fn,end_fn,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
});

/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start_fn,end_fn){
if(typeof com.rpl.specter.t_com$rpl$specter17669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17669 = (function (start_fn,end_fn,meta17670){
this.start_fn = start_fn;
this.end_fn = end_fn;
this.meta17670 = meta17670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17671,meta17670__$1){
var self__ = this;
var _17671__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17669(self__.start_fn,self__.end_fn,meta17670__$1));
});

com.rpl.specter.t_com$rpl$specter17669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17671){
var self__ = this;
var _17671__$1 = this;
return self__.meta17670;
});

com.rpl.specter.t_com$rpl$specter17669.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17669.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter17669.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start_fn.call(null,structure),self__.end_fn.call(null,structure),next_fn);
});

com.rpl.specter.t_com$rpl$specter17669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-fn","start-fn",-1617360859,null),new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null),new cljs.core.Symbol(null,"meta17670","meta17670",1690211083,null)], null);
});

com.rpl.specter.t_com$rpl$specter17669.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17669.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17669";

com.rpl.specter.t_com$rpl$specter17669.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17669");
});

com.rpl.specter.__GT_t_com$rpl$specter17669 = (function com$rpl$specter$__GT_t_com$rpl$specter17669(start_fn__$1,end_fn__$1,meta17670){
return (new com.rpl.specter.t_com$rpl$specter17669(start_fn__$1,end_fn__$1,meta17670));
});

}

return (new com.rpl.specter.t_com$rpl$specter17669(start_fn,end_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select.call(null,structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn);
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj.call(null,(function (start,end){
if(typeof com.rpl.specter.t_com$rpl$specter17672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17672 = (function (start,end,meta17673){
this.start = start;
this.end = end;
this.meta17673 = meta17673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17674,meta17673__$1){
var self__ = this;
var _17674__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17672(self__.start,self__.end,meta17673__$1));
});

com.rpl.specter.t_com$rpl$specter17672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17674){
var self__ = this;
var _17674__$1 = this;
return self__.meta17673;
});

com.rpl.specter.t_com$rpl$specter17672.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17672.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.srange_select.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter17672.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn);
});

com.rpl.specter.t_com$rpl$specter17672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta17673","meta17673",-763119911,null)], null);
});

com.rpl.specter.t_com$rpl$specter17672.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17672.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17672";

com.rpl.specter.t_com$rpl$specter17672.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17672");
});

com.rpl.specter.__GT_t_com$rpl$specter17672 = (function com$rpl$specter$__GT_t_com$rpl$specter17672(start__$1,end__$1,meta17673){
return (new com.rpl.specter.t_com$rpl$specter17672(start__$1,end__$1,meta17673));
});

}

return (new com.rpl.specter.t_com$rpl$specter17672(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.call(null,(function (curr__14506__auto__,p__17679){
var vec__17680 = p__17679;
var s = cljs.core.nth.call(null,vec__17680,(0),null);
var e = cljs.core.nth.call(null,vec__17680,(1),null);
var ret__14507__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__14507__auto__ === com.rpl.specter.NONE)){
return curr__14506__auto__;
} else {
return ret__14507__auto__;
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj.call(null,(function (pred){
if(typeof com.rpl.specter.t_com$rpl$specter17683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17683 = (function (pred,meta17684){
this.pred = pred;
this.meta17684 = meta17684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17685,meta17684__$1){
var self__ = this;
var _17685__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17683(self__.pred,meta17684__$1));
});

com.rpl.specter.t_com$rpl$specter17683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17685){
var self__ = this;
var _17685__$1 = this;
return self__.meta17684;
});

com.rpl.specter.t_com$rpl$specter17683.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17683.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return cljs.core.reduce.call(null,((function (next_fn,this__16326__auto____$1){
return (function (curr__14506__auto__,p__17686){
var vec__17687 = p__17686;
var s = cljs.core.nth.call(null,vec__17687,(0),null);
var e = cljs.core.nth.call(null,vec__17687,(1),null);
var ret__14507__auto__ = com.rpl.specter.navs.srange_select.call(null,structure,s,e,next_fn);
if((ret__14507__auto__ === com.rpl.specter.NONE)){
return curr__14506__auto__;
} else {
return ret__14507__auto__;
}
});})(next_fn,this__16326__auto____$1))
,com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges.call(null,structure,self__.pred));
});

com.rpl.specter.t_com$rpl$specter17683.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_.call(null,self__.pred,structure,next_fn);
});

com.rpl.specter.t_com$rpl$specter17683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta17684","meta17684",-1267953970,null)], null);
});

com.rpl.specter.t_com$rpl$specter17683.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17683.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17683";

com.rpl.specter.t_com$rpl$specter17683.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17683");
});

com.rpl.specter.__GT_t_com$rpl$specter17683 = (function com$rpl$specter$__GT_t_com$rpl$specter17683(pred__$1,meta17684){
return (new com.rpl.specter.t_com$rpl$specter17683(pred__$1,meta17684));
});

}

return (new com.rpl.specter.t_com$rpl$specter17683(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17690 = (function (meta17691){
this.meta17691 = meta17691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17692,meta17691__$1){
var self__ = this;
var _17692__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17690(meta17691__$1));
});

com.rpl.specter.t_com$rpl$specter17690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17692){
var self__ = this;
var _17692__$1 = this;
return self__.meta17691;
});

com.rpl.specter.t_com$rpl$specter17690.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17690.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter17690.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
var to_prepend = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all.call(null,structure,to_prepend);
});

com.rpl.specter.t_com$rpl$specter17690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17691","meta17691",-410944568,null)], null);
});

com.rpl.specter.t_com$rpl$specter17690.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17690.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17690";

com.rpl.specter.t_com$rpl$specter17690.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17690");
});

com.rpl.specter.__GT_t_com$rpl$specter17690 = (function com$rpl$specter$__GT_t_com$rpl$specter17690(meta17691){
return (new com.rpl.specter.t_com$rpl$specter17690(meta17691));
});

}

return (new com.rpl.specter.t_com$rpl$specter17690(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17693 = (function (meta17694){
this.meta17694 = meta17694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17695,meta17694__$1){
var self__ = this;
var _17695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17693(meta17694__$1));
});

com.rpl.specter.t_com$rpl$specter17693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17695){
var self__ = this;
var _17695__$1 = this;
return self__.meta17694;
});

com.rpl.specter.t_com$rpl$specter17693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY);
});

com.rpl.specter.t_com$rpl$specter17693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
var to_append = next_fn.call(null,cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all.call(null,structure,to_append);
});

com.rpl.specter.t_com$rpl$specter17693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17694","meta17694",-12952695,null)], null);
});

com.rpl.specter.t_com$rpl$specter17693.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17693";

com.rpl.specter.t_com$rpl$specter17693.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17693");
});

com.rpl.specter.__GT_t_com$rpl$specter17693 = (function com$rpl$specter$__GT_t_com$rpl$specter17693(meta17694){
return (new com.rpl.specter.t_com$rpl$specter17693(meta17694));
});

}

return (new com.rpl.specter.t_com$rpl$specter17693(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj.call(null,(function (aset){
if(typeof com.rpl.specter.t_com$rpl$specter17696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17696 = (function (aset,meta17697){
this.aset = aset;
this.meta17697 = meta17697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17698,meta17697__$1){
var self__ = this;
var _17698__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17696(self__.aset,meta17697__$1));
});

com.rpl.specter.t_com$rpl$specter17696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17698){
var self__ = this;
var _17698__$1 = this;
return self__.meta17697;
});

com.rpl.specter.t_com$rpl$specter17696.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17696.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,clojure.set.intersection.call(null,structure,self__.aset));
});

com.rpl.specter.t_com$rpl$specter17696.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
var subset = clojure.set.intersection.call(null,structure,self__.aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
});

com.rpl.specter.t_com$rpl$specter17696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta17697","meta17697",1848521777,null)], null);
});

com.rpl.specter.t_com$rpl$specter17696.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17696.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17696";

com.rpl.specter.t_com$rpl$specter17696.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17696");
});

com.rpl.specter.__GT_t_com$rpl$specter17696 = (function com$rpl$specter$__GT_t_com$rpl$specter17696(aset__$1,meta17697){
return (new com.rpl.specter.t_com$rpl$specter17696(aset__$1,meta17697));
});

}

return (new com.rpl.specter.t_com$rpl$specter17696(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj.call(null,(function (m_keys){
if(typeof com.rpl.specter.t_com$rpl$specter17699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17699 = (function (m_keys,meta17700){
this.m_keys = m_keys;
this.meta17700 = meta17700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17701,meta17700__$1){
var self__ = this;
var _17701__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17699(self__.m_keys,meta17700__$1));
});

com.rpl.specter.t_com$rpl$specter17699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17701){
var self__ = this;
var _17701__$1 = this;
return self__.meta17700;
});

com.rpl.specter.t_com$rpl$specter17699.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17699.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.select_keys.call(null,structure,self__.m_keys));
});

com.rpl.specter.t_com$rpl$specter17699.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
var submap = cljs.core.select_keys.call(null,structure,self__.m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,self__.m_keys),newmap);
});

com.rpl.specter.t_com$rpl$specter17699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta17700","meta17700",1718129863,null)], null);
});

com.rpl.specter.t_com$rpl$specter17699.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17699.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17699";

com.rpl.specter.t_com$rpl$specter17699.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17699");
});

com.rpl.specter.__GT_t_com$rpl$specter17699 = (function com$rpl$specter$__GT_t_com$rpl$specter17699(m_keys__$1,meta17700){
return (new com.rpl.specter.t_com$rpl$specter17699(m_keys__$1,meta17700));
});

}

return (new com.rpl.specter.t_com$rpl$specter17699(m_keys,null));
}));


com.rpl.specter.walker_select_STAR_ = (function com$rpl$specter$walker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.walker_transform_STAR_ = (function com$rpl$specter$walker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_until.call(null,afn,next_fn,structure);
});

/**
 * Using clojure.walk, navigate the data structure until reaching
 *        a value for which `afn` returns truthy.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter17702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17702 = (function (afn,meta17703){
this.afn = afn;
this.meta17703 = meta17703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17704,meta17703__$1){
var self__ = this;
var _17704__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17702(self__.afn,meta17703__$1));
});

com.rpl.specter.t_com$rpl$specter17702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17704){
var self__ = this;
var _17704__$1 = this;
return self__.meta17703;
});

com.rpl.specter.t_com$rpl$specter17702.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17702.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter17702.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.walk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter17702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta17703","meta17703",243860860,null)], null);
});

com.rpl.specter.t_com$rpl$specter17702.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17702.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17702";

com.rpl.specter.t_com$rpl$specter17702.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17702");
});

com.rpl.specter.__GT_t_com$rpl$specter17702 = (function com$rpl$specter$__GT_t_com$rpl$specter17702(afn__$1,meta17703){
return (new com.rpl.specter.t_com$rpl$specter17702(afn__$1,meta17703));
});

}

return (new com.rpl.specter.t_com$rpl$specter17702(afn,null));
}));


com.rpl.specter.codewalker_select_STAR_ = (function com$rpl$specter$codewalker_select_STAR_(afn,structure,next_fn){
return com.rpl.specter.navs.walk_select.call(null,afn,next_fn,structure);
});

com.rpl.specter.codewalker_transform_STAR_ = (function com$rpl$specter$codewalker_transform_STAR_(afn,structure,next_fn){
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
});

/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter17705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17705 = (function (afn,meta17706){
this.afn = afn;
this.meta17706 = meta17706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17707,meta17706__$1){
var self__ = this;
var _17707__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17705(self__.afn,meta17706__$1));
});

com.rpl.specter.t_com$rpl$specter17705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17707){
var self__ = this;
var _17707__$1 = this;
return self__.meta17706;
});

com.rpl.specter.t_com$rpl$specter17705.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17705.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.navs.walk_select.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter17705.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return com.rpl.specter.impl.codewalk_until.call(null,self__.afn,next_fn,structure);
});

com.rpl.specter.t_com$rpl$specter17705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta17706","meta17706",-376206593,null)], null);
});

com.rpl.specter.t_com$rpl$specter17705.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17705.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17705";

com.rpl.specter.t_com$rpl$specter17705.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17705");
});

com.rpl.specter.__GT_t_com$rpl$specter17705 = (function com$rpl$specter$__GT_t_com$rpl$specter17705(afn__$1,meta17706){
return (new com.rpl.specter.t_com$rpl$specter17705(afn__$1,meta17706));
});

}

return (new com.rpl.specter.t_com$rpl$specter17705(afn,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 */
com.rpl.specter.subselect = cljs.core.vary_meta.call(null,(function() { 
var G__17711__delegate = function (path){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter17708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17708 = (function (path,late,meta17709){
this.path = path;
this.late = late;
this.meta17709 = meta17709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17710,meta17709__$1){
var self__ = this;
var _17710__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17708(self__.path,self__.late,meta17709__$1));
});

com.rpl.specter.t_com$rpl$specter17708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17710){
var self__ = this;
var _17710__$1 = this;
return self__.meta17709;
});

com.rpl.specter.t_com$rpl$specter17708.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17708.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,self__.late,structure));
});

com.rpl.specter.t_com$rpl$specter17708.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
var select_result = com.rpl.specter.compiled_select.call(null,self__.late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,self__.late,((function (select_result,transformed,values_to_insert,next_fn,this__16326__auto____$1){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,this__16326__auto____$1))
,structure);
});

com.rpl.specter.t_com$rpl$specter17708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17709","meta17709",-1470671282,null)], null);
});

com.rpl.specter.t_com$rpl$specter17708.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17708.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17708";

com.rpl.specter.t_com$rpl$specter17708.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17708");
});

com.rpl.specter.__GT_t_com$rpl$specter17708 = (function com$rpl$specter$__GT_t_com$rpl$specter17708(path__$1,late__$1,meta17709){
return (new com.rpl.specter.t_com$rpl$specter17708(path__$1,late__$1,meta17709));
});

}

return (new com.rpl.specter.t_com$rpl$specter17708(path,late,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
};
var G__17711 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17712__i = 0, G__17712__a = new Array(arguments.length -  0);
while (G__17712__i < G__17712__a.length) {G__17712__a[G__17712__i] = arguments[G__17712__i + 0]; ++G__17712__i;}
  path = new cljs.core.IndexedSeq(G__17712__a,0,null);
} 
return G__17711__delegate.call(this,path);};
G__17711.cljs$lang$maxFixedArity = 0;
G__17711.cljs$lang$applyTo = (function (arglist__17713){
var path = cljs.core.seq(arglist__17713);
return G__17711__delegate(path);
});
G__17711.cljs$core$IFn$_invoke$arity$variadic = G__17711__delegate;
return G__17711;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.keypath = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_);
com.rpl.specter.must = com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_);
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj.call(null,(function (afn){
if(typeof com.rpl.specter.t_com$rpl$specter17714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17714 = (function (afn,meta17715){
this.afn = afn;
this.meta17715 = meta17715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17716,meta17715__$1){
var self__ = this;
var _17716__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17714(self__.afn,meta17715__$1));
});

com.rpl.specter.t_com$rpl$specter17714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17716){
var self__ = this;
var _17716__$1 = this;
return self__.meta17715;
});

com.rpl.specter.t_com$rpl$specter17714.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17714.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17714.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,vals,self__.afn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta17715","meta17715",1269119124,null)], null);
});

com.rpl.specter.t_com$rpl$specter17714.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17714.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17714";

com.rpl.specter.t_com$rpl$specter17714.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17714");
});

com.rpl.specter.__GT_t_com$rpl$specter17714 = (function com$rpl$specter$__GT_t_com$rpl$specter17714(afn__$1,meta17715){
return (new com.rpl.specter.t_com$rpl$specter17714(afn__$1,meta17715));
});

}

return (new com.rpl.specter.t_com$rpl$specter17714(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
return next_fn.call(null,parse_fn.call(null,structure));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj.call(null,(function (parse_fn,unparse_fn){
if(typeof com.rpl.specter.t_com$rpl$specter17717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17717 = (function (parse_fn,unparse_fn,meta17718){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta17718 = meta17718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17719,meta17718__$1){
var self__ = this;
var _17719__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17717(self__.parse_fn,self__.unparse_fn,meta17718__$1));
});

com.rpl.specter.t_com$rpl$specter17717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17719){
var self__ = this;
var _17719__$1 = this;
return self__.meta17718;
});

com.rpl.specter.t_com$rpl$specter17717.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17717.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,self__.parse_fn.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17717.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return self__.unparse_fn.call(null,next_fn.call(null,self__.parse_fn.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter17717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta17718","meta17718",396557091,null)], null);
});

com.rpl.specter.t_com$rpl$specter17717.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17717.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17717";

com.rpl.specter.t_com$rpl$specter17717.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17717");
});

com.rpl.specter.__GT_t_com$rpl$specter17717 = (function com$rpl$specter$__GT_t_com$rpl$specter17717(parse_fn__$1,unparse_fn__$1,meta17718){
return (new com.rpl.specter.t_com$rpl$specter17717(parse_fn__$1,unparse_fn__$1,meta17718));
});

}

return (new com.rpl.specter.t_com$rpl$specter17717(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17720 = (function (meta17721){
this.meta17721 = meta17721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17722,meta17721__$1){
var self__ = this;
var _17722__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17720(meta17721__$1));
});

com.rpl.specter.t_com$rpl$specter17720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17722){
var self__ = this;
var _17722__$1 = this;
return self__.meta17721;
});

com.rpl.specter.t_com$rpl$specter17720.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17720.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.deref.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17720.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
cljs.core.swap_BANG_.call(null,structure,next_fn);

return structure;
});

com.rpl.specter.t_com$rpl$specter17720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17721","meta17721",614562040,null)], null);
});

com.rpl.specter.t_com$rpl$specter17720.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17720.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17720";

com.rpl.specter.t_com$rpl$specter17720.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17720");
});

com.rpl.specter.__GT_t_com$rpl$specter17720 = (function com$rpl$specter$__GT_t_com$rpl$specter17720(meta17721){
return (new com.rpl.specter.t_com$rpl$specter17720(meta17721));
});

}

return (new com.rpl.specter.t_com$rpl$specter17720(null));
})()
;
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__17728__delegate = function (path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
return afn;
} else {
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter17725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17725 = (function (path,temp__6736__auto__,late,meta17726){
this.path = path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late = late;
this.meta17726 = meta17726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_17727,meta17726__$1){
var self__ = this;
var _17727__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17725(self__.path,self__.temp__6736__auto__,self__.late,meta17726__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_17727){
var self__ = this;
var _17727__$1 = this;
return self__.meta17726;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17725.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17725.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1,temp__6736__auto__){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1,temp__6736__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__16326__auto____$1,temp__6736__auto__){
return (function (p1__17723_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__17723_SHARP_);
});})(next_fn,this__16326__auto____$1,temp__6736__auto__))
,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17725.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1,temp__6736__auto__){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1,temp__6736__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__16326__auto____$1,temp__6736__auto__){
return (function (p1__17724_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late,p1__17724_SHARP_);
});})(next_fn,this__16326__auto____$1,temp__6736__auto__))
,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17725.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17726","meta17726",-625867120,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17725.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17725.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17725";

com.rpl.specter.t_com$rpl$specter17725.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17725");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter17725 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17725(path__$1,temp__6736__auto____$1,late__$1,meta17726){
return (new com.rpl.specter.t_com$rpl$specter17725(path__$1,temp__6736__auto____$1,late__$1,meta17726));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17725(path,temp__6736__auto__,late,null));
});})(temp__6736__auto__))
);
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
}
};
var G__17728 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17729__i = 0, G__17729__a = new Array(arguments.length -  0);
while (G__17729__i < G__17729__a.length) {G__17729__a[G__17729__i] = arguments[G__17729__i + 0]; ++G__17729__i;}
  path = new cljs.core.IndexedSeq(G__17729__a,0,null);
} 
return G__17728__delegate.call(this,path);};
G__17728.cljs$lang$maxFixedArity = 0;
G__17728.cljs$lang$applyTo = (function (arglist__17730){
var path = cljs.core.seq(arglist__17730);
return G__17728__delegate(path);
});
G__17728.cljs$core$IFn$_invoke$arity$variadic = G__17728__delegate;
return G__17728;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.call(null,(function() { 
var G__17736__delegate = function (path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,path);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
return ((function (afn,temp__6736__auto__){
return (function (s){
return cljs.core.not.call(null,afn.call(null,s));
});
;})(afn,temp__6736__auto__))
} else {
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late){
if(typeof com.rpl.specter.t_com$rpl$specter17733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17733 = (function (path,temp__6736__auto__,late,meta17734){
this.path = path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late = late;
this.meta17734 = meta17734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_17735,meta17734__$1){
var self__ = this;
var _17735__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17733(self__.path,self__.temp__6736__auto__,self__.late,meta17734__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_17735){
var self__ = this;
var _17735__$1 = this;
return self__.meta17734;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17733.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17733.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1,temp__6736__auto__){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1,temp__6736__auto__))
;
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,this__16326__auto____$1,temp__6736__auto__){
return (function (p1__17731_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__17731_SHARP_);
});})(next_fn,this__16326__auto____$1,temp__6736__auto__))
,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17733.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1,temp__6736__auto__){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1,temp__6736__auto__))
;
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,this__16326__auto____$1,temp__6736__auto__){
return (function (p1__17732_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_.call(null,self__.late,p1__17732_SHARP_);
});})(next_fn,this__16326__auto____$1,temp__6736__auto__))
,structure,next_fn);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17733.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17734","meta17734",-350392999,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17733.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17733.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17733";

com.rpl.specter.t_com$rpl$specter17733.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17733");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter17733 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17733(path__$1,temp__6736__auto____$1,late__$1,meta17734){
return (new com.rpl.specter.t_com$rpl$specter17733(path__$1,temp__6736__auto____$1,late__$1,meta17734));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17733(path,temp__6736__auto__,late,null));
});})(temp__6736__auto__))
);
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
}
};
var G__17736 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17737__i = 0, G__17737__a = new Array(arguments.length -  0);
while (G__17737__i < G__17737__a.length) {G__17737__a[G__17737__i] = arguments[G__17737__i + 0]; ++G__17737__i;}
  path = new cljs.core.IndexedSeq(G__17737__a,0,null);
} 
return G__17736__delegate.call(this,path);};
G__17736.cljs$lang$maxFixedArity = 0;
G__17736.cljs$lang$applyTo = (function (arglist__17738){
var path = cljs.core.seq(arglist__17738);
return G__17736__delegate(path);
});
G__17736.cljs$core$IFn$_invoke$arity$variadic = G__17736__delegate;
return G__17736;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.call(null,(function() { 
var G__17739__delegate = function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
};
var G__17739 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17740__i = 0, G__17740__a = new Array(arguments.length -  0);
while (G__17740__i < G__17740__a.length) {G__17740__a[G__17740__i] = arguments[G__17740__i + 0]; ++G__17740__i;}
  path = new cljs.core.IndexedSeq(G__17740__a,0,null);
} 
return G__17739__delegate.call(this,path);};
G__17739.cljs$lang$maxFixedArity = 0;
G__17739.cljs$lang$applyTo = (function (arglist__17741){
var path = cljs.core.seq(arglist__17741);
return G__17739__delegate(path);
});
G__17739.cljs$core$IFn$_invoke$arity$variadic = G__17739__delegate;
return G__17739;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.call(null,(function (path,update_fn){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter17742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17742 = (function (path,update_fn,late,late_fn,meta17743){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta17743 = meta17743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17744,meta17743__$1){
var self__ = this;
var _17744__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17742(self__.path,self__.update_fn,self__.late,self__.late_fn,meta17743__$1));
});

com.rpl.specter.t_com$rpl$specter17742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17744){
var self__ = this;
var _17744__$1 = this;
return self__.meta17743;
});

com.rpl.specter.t_com$rpl$specter17742.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17742.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter17742.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure));
});

com.rpl.specter.t_com$rpl$specter17742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta17743","meta17743",-1327015013,null)], null);
});

com.rpl.specter.t_com$rpl$specter17742.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17742.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17742";

com.rpl.specter.t_com$rpl$specter17742.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17742");
});

com.rpl.specter.__GT_t_com$rpl$specter17742 = (function com$rpl$specter$__GT_t_com$rpl$specter17742(path__$1,update_fn__$1,late__$1,late_fn__$1,meta17743){
return (new com.rpl.specter.t_com$rpl$specter17742(path__$1,update_fn__$1,late__$1,late_fn__$1,meta17743));
});

}

return (new com.rpl.specter.t_com$rpl$specter17742(path,update_fn,late,late_fn,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),update_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.call(null,(function (path,reduce_fn){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late,late_fn){
if(typeof com.rpl.specter.t_com$rpl$specter17745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17745 = (function (path,reduce_fn,late,late_fn,meta17746){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta17746 = meta17746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17747,meta17746__$1){
var self__ = this;
var _17747__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17745(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta17746__$1));
});

com.rpl.specter.t_com$rpl$specter17745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17747){
var self__ = this;
var _17747__$1 = this;
return self__.meta17746;
});

com.rpl.specter.t_com$rpl$specter17745.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17745.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter17745.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.reduce.call(null,self__.late_fn,com.rpl.specter.compiled_traverse.call(null,self__.late,structure)));
});

com.rpl.specter.t_com$rpl$specter17745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta17746","meta17746",-597586916,null)], null);
});

com.rpl.specter.t_com$rpl$specter17745.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17745.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17745";

com.rpl.specter.t_com$rpl$specter17745.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17745");
});

com.rpl.specter.__GT_t_com$rpl$specter17745 = (function com$rpl$specter$__GT_t_com$rpl$specter17745(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta17746){
return (new com.rpl.specter.t_com$rpl$specter17745(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta17746));
});

}

return (new com.rpl.specter.t_com$rpl$specter17745(path,reduce_fn,late,late_fn,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path),reduce_fn], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
}),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1);
});
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return com.rpl.specter.pred.call(null,this$);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.pred.call(null,this$__$1);
});


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
return next_fn.call(null,(((structure == null))?v:structure));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj.call(null,(function (v){
if(typeof com.rpl.specter.t_com$rpl$specter17748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17748 = (function (v,meta17749){
this.v = v;
this.meta17749 = meta17749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17750,meta17749__$1){
var self__ = this;
var _17750__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17748(self__.v,meta17749__$1));
});

com.rpl.specter.t_com$rpl$specter17748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17750){
var self__ = this;
var _17750__$1 = this;
return self__.meta17749;
});

com.rpl.specter.t_com$rpl$specter17748.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17748.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter17748.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,(((structure == null))?self__.v:structure));
});

com.rpl.specter.t_com$rpl$specter17748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta17749","meta17749",829214896,null)], null);
});

com.rpl.specter.t_com$rpl$specter17748.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17748.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17748";

com.rpl.specter.t_com$rpl$specter17748.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17748");
});

com.rpl.specter.__GT_t_com$rpl$specter17748 = (function com$rpl$specter$__GT_t_com$rpl$specter17748(v__$1,meta17749){
return (new com.rpl.specter.t_com$rpl$specter17748(v__$1,meta17749));
});

}

return (new com.rpl.specter.t_com$rpl$specter17748(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17751 = (function (meta17752){
this.meta17752 = meta17752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17753,meta17752__$1){
var self__ = this;
var _17753__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17751(meta17752__$1));
});

com.rpl.specter.t_com$rpl$specter17751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17753){
var self__ = this;
var _17753__$1 = this;
return self__.meta17752;
});

com.rpl.specter.t_com$rpl$specter17751.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17751.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return next_fn.call(null,cljs.core.meta.call(null,structure));
});

com.rpl.specter.t_com$rpl$specter17751.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16326__auto__,vals__16327__auto__,structure,next_fn__16328__auto__){
var self__ = this;
var this__16326__auto____$1 = this;
var next_fn = ((function (this__16326__auto____$1){
return (function (s__16329__auto__){
return next_fn__16328__auto__.call(null,vals__16327__auto__,s__16329__auto__);
});})(this__16326__auto____$1))
;
return cljs.core.with_meta.call(null,structure,next_fn.call(null,cljs.core.meta.call(null,structure)));
});

com.rpl.specter.t_com$rpl$specter17751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17752","meta17752",-109990038,null)], null);
});

com.rpl.specter.t_com$rpl$specter17751.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17751.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17751";

com.rpl.specter.t_com$rpl$specter17751.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17751");
});

com.rpl.specter.__GT_t_com$rpl$specter17751 = (function com$rpl$specter$__GT_t_com$rpl$specter17751(meta17752){
return (new com.rpl.specter.t_com$rpl$specter17751(meta17752));
});

}

return (new com.rpl.specter.t_com$rpl$specter17751(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.call(null,(function() { 
var G__17757__delegate = function (path){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter17754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17754 = (function (path,late,meta17755){
this.path = path;
this.late = late;
this.meta17755 = meta17755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17756,meta17755__$1){
var self__ = this;
var _17756__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17754(self__.path,self__.late,meta17755__$1));
});

com.rpl.specter.t_com$rpl$specter17754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17756){
var self__ = this;
var _17756__$1 = this;
return self__.meta17755;
});

com.rpl.specter.t_com$rpl$specter17754.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17754.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter17754.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,com.rpl.specter.compiled_select.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter17754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17755","meta17755",1190554217,null)], null);
});

com.rpl.specter.t_com$rpl$specter17754.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17754.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17754";

com.rpl.specter.t_com$rpl$specter17754.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17754");
});

com.rpl.specter.__GT_t_com$rpl$specter17754 = (function com$rpl$specter$__GT_t_com$rpl$specter17754(path__$1,late__$1,meta17755){
return (new com.rpl.specter.t_com$rpl$specter17754(path__$1,late__$1,meta17755));
});

}

return (new com.rpl.specter.t_com$rpl$specter17754(path,late,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
};
var G__17757 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17758__i = 0, G__17758__a = new Array(arguments.length -  0);
while (G__17758__i < G__17758__a.length) {G__17758__a[G__17758__i] = arguments[G__17758__i + 0]; ++G__17758__i;}
  path = new cljs.core.IndexedSeq(G__17758__a,0,null);
} 
return G__17757__delegate.call(this,path);};
G__17757.cljs$lang$maxFixedArity = 0;
G__17757.cljs$lang$applyTo = (function (arglist__17759){
var path = cljs.core.seq(arglist__17759);
return G__17757__delegate(path);
});
G__17757.cljs$core$IFn$_invoke$arity$variadic = G__17757__delegate;
return G__17757;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.call(null,(function() { 
var G__17763__delegate = function (path){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late){
if(typeof com.rpl.specter.t_com$rpl$specter17760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17760 = (function (path,late,meta17761){
this.path = path;
this.late = late;
this.meta17761 = meta17761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17762,meta17761__$1){
var self__ = this;
var _17762__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17760(self__.path,self__.late,meta17761__$1));
});

com.rpl.specter.t_com$rpl$specter17760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17762){
var self__ = this;
var _17762__$1 = this;
return self__.meta17761;
});

com.rpl.specter.t_com$rpl$specter17760.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17760.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter17760.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,com.rpl.specter.compiled_select_one.call(null,self__.late,structure)),structure);
});

com.rpl.specter.t_com$rpl$specter17760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta17761","meta17761",-458365204,null)], null);
});

com.rpl.specter.t_com$rpl$specter17760.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17760.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17760";

com.rpl.specter.t_com$rpl$specter17760.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17760");
});

com.rpl.specter.__GT_t_com$rpl$specter17760 = (function com$rpl$specter$__GT_t_com$rpl$specter17760(path__$1,late__$1,meta17761){
return (new com.rpl.specter.t_com$rpl$specter17760(path__$1,late__$1,meta17761));
});

}

return (new com.rpl.specter.t_com$rpl$specter17760(path,late,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
};
var G__17763 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17764__i = 0, G__17764__a = new Array(arguments.length -  0);
while (G__17764__i < G__17764__a.length) {G__17764__a[G__17764__i] = arguments[G__17764__i + 0]; ++G__17764__i;}
  path = new cljs.core.IndexedSeq(G__17764__a,0,null);
} 
return G__17763__delegate.call(this,path);};
G__17763.cljs$lang$maxFixedArity = 0;
G__17763.cljs$lang$applyTo = (function (arglist__17765){
var path = cljs.core.seq(arglist__17765);
return G__17763__delegate(path);
});
G__17763.cljs$core$IFn$_invoke$arity$variadic = G__17763__delegate;
return G__17763;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj.call(null,(function (val){
if(typeof com.rpl.specter.t_com$rpl$specter17766 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17766 = (function (val,meta17767){
this.val = val;
this.meta17767 = meta17767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17768,meta17767__$1){
var self__ = this;
var _17768__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17766(self__.val,meta17767__$1));
});

com.rpl.specter.t_com$rpl$specter17766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17768){
var self__ = this;
var _17768__$1 = this;
return self__.meta17767;
});

com.rpl.specter.t_com$rpl$specter17766.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17766.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter17766.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__16994__auto__,vals__16995__auto__,structure,next_fn__16996__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return next_fn__16996__auto__.call(null,cljs.core.conj.call(null,vals__16995__auto__,self__.val),structure);
});

com.rpl.specter.t_com$rpl$specter17766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta17767","meta17767",-981711225,null)], null);
});

com.rpl.specter.t_com$rpl$specter17766.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17766.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17766";

com.rpl.specter.t_com$rpl$specter17766.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17766");
});

com.rpl.specter.__GT_t_com$rpl$specter17766 = (function com$rpl$specter$__GT_t_com$rpl$specter17766(val__$1,meta17767){
return (new com.rpl.specter.t_com$rpl$specter17766(val__$1,meta17767));
});

}

return (new com.rpl.specter.t_com$rpl$specter17766(val,null));
}));
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if(typeof com.rpl.specter.t_com$rpl$specter17769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17769 = (function (meta17770){
this.meta17770 = meta17770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17771,meta17770__$1){
var self__ = this;
var _17771__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17769(meta17770__$1));
});

com.rpl.specter.t_com$rpl$specter17769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17771){
var self__ = this;
var _17771__$1 = this;
return self__.meta17770;
});

com.rpl.specter.t_com$rpl$specter17769.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17769.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter17769.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return next_fn.call(null,cljs.core.PersistentVector.EMPTY,structure);
});

com.rpl.specter.t_com$rpl$specter17769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta17770","meta17770",2138853361,null)], null);
});

com.rpl.specter.t_com$rpl$specter17769.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17769.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17769";

com.rpl.specter.t_com$rpl$specter17769.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17769");
});

com.rpl.specter.__GT_t_com$rpl$specter17769 = (function com$rpl$specter$__GT_t_com$rpl$specter17769(meta17770){
return (new com.rpl.specter.t_com$rpl$specter17769(meta17770));
});

}

return (new com.rpl.specter.t_com$rpl$specter17769(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.call(null,(function() {
var G__17780 = null;
var G__17780__2 = (function (cond_p,then_path){
return com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP);
});
var G__17780__3 = (function (cond_p,then_path,else_path){
var temp__6736__auto__ = com.rpl.specter.navs.extract_basic_filter_fn.call(null,cond_p);
if(cljs.core.truth_(temp__6736__auto__)){
var afn = temp__6736__auto__;
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (afn,temp__6736__auto__){
return (function (late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter17774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17774 = (function (cond_p,then_path,else_path,temp__6736__auto__,afn,late_then,late_else,meta17775){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__6736__auto__ = temp__6736__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta17775 = meta17775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (afn,temp__6736__auto__){
return (function (_17776,meta17775__$1){
var self__ = this;
var _17776__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17774(self__.cond_p,self__.then_path,self__.else_path,self__.temp__6736__auto__,self__.afn,self__.late_then,self__.late_else,meta17775__$1));
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (afn,temp__6736__auto__){
return (function (_17776){
var self__ = this;
var _17776__$1 = this;
return self__.meta17775;
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17774.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17774.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (afn,temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17774.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (afn,temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17774.getBasis = ((function (afn,temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta17775","meta17775",1139911423,null)], null);
});})(afn,temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17774.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17774.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17774";

com.rpl.specter.t_com$rpl$specter17774.cljs$lang$ctorPrWriter = ((function (afn,temp__6736__auto__){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17774");
});})(afn,temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter17774 = ((function (afn,temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17774(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,afn__$1,late_then__$1,late_else__$1,meta17775){
return (new com.rpl.specter.t_com$rpl$specter17774(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,afn__$1,late_then__$1,late_else__$1,meta17775));
});})(afn,temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17774(cond_p,then_path,else_path,temp__6736__auto__,afn,late_then,late_else,null));
});})(afn,temp__6736__auto__))
);
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
} else {
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,((function (temp__6736__auto__){
return (function (late_cond,late_then,late_else){
if(typeof com.rpl.specter.t_com$rpl$specter17777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17777 = (function (cond_p,then_path,else_path,temp__6736__auto__,late_cond,late_then,late_else,meta17778){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__6736__auto__ = temp__6736__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta17778 = meta17778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (temp__6736__auto__){
return (function (_17779,meta17778__$1){
var self__ = this;
var _17779__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17777(self__.cond_p,self__.then_path,self__.else_path,self__.temp__6736__auto__,self__.late_cond,self__.late_then,self__.late_else,meta17778__$1));
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (temp__6736__auto__){
return (function (_17779){
var self__ = this;
var _17779__$1 = this;
return self__.meta17778;
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17777.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17777.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select.call(null,vals,structure,next_fn,((function (this$__$1,temp__6736__auto__){
return (function (p1__17772_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__17772_SHARP_);
});})(this$__$1,temp__6736__auto__))
,self__.late_then,self__.late_else);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17777.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = ((function (temp__6736__auto__){
return (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform.call(null,vals,structure,next_fn,((function (this$__$1,temp__6736__auto__){
return (function (p1__17773_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_.call(null,self__.late_cond,p1__17773_SHARP_);
});})(this$__$1,temp__6736__auto__))
,self__.late_then,self__.late_else);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17777.getBasis = ((function (temp__6736__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__6736__auto__","temp__6736__auto__",-1815609319,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta17778","meta17778",-1781693570,null)], null);
});})(temp__6736__auto__))
;

com.rpl.specter.t_com$rpl$specter17777.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17777.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17777";

com.rpl.specter.t_com$rpl$specter17777.cljs$lang$ctorPrWriter = ((function (temp__6736__auto__){
return (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17777");
});})(temp__6736__auto__))
;

com.rpl.specter.__GT_t_com$rpl$specter17777 = ((function (temp__6736__auto__){
return (function com$rpl$specter$__GT_t_com$rpl$specter17777(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta17778){
return (new com.rpl.specter.t_com$rpl$specter17777(cond_p__$1,then_path__$1,else_path__$1,temp__6736__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta17778));
});})(temp__6736__auto__))
;

}

return (new com.rpl.specter.t_com$rpl$specter17777(cond_p,then_path,else_path,temp__6736__auto__,late_cond,late_then,late_else,null));
});})(temp__6736__auto__))
);
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,cond_p),com.rpl.specter.late_path.call(null,then_path),com.rpl.specter.late_path.call(null,else_path)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
}
});
G__17780 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__17780__2.call(this,cond_p,then_path);
case 3:
return G__17780__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17780.cljs$core$IFn$_invoke$arity$2 = G__17780__2;
G__17780.cljs$core$IFn$_invoke$arity$3 = G__17780__3;
return G__17780;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.call(null,(function() { 
var G__17785__delegate = function (conds){
var pairs = cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),conds));
return cljs.core.reduce.call(null,((function (pairs){
return (function (p,p__17781){
var vec__17782 = p__17781;
var tester = cljs.core.nth.call(null,vec__17782,(0),null);
var apath = cljs.core.nth.call(null,vec__17782,(1),null);
return com.rpl.specter.if_path.call(null,tester,apath,p);
});})(pairs))
,com.rpl.specter.STOP,pairs);
};
var G__17785 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__17786__i = 0, G__17786__a = new Array(arguments.length -  0);
while (G__17786__i < G__17786__a.length) {G__17786__a[G__17786__i] = arguments[G__17786__i + 0]; ++G__17786__i;}
  conds = new cljs.core.IndexedSeq(G__17786__a,0,null);
} 
return G__17785__delegate.call(this,conds);};
G__17785.cljs$lang$maxFixedArity = 0;
G__17785.cljs$lang$applyTo = (function (arglist__17787){
var conds = cljs.core.seq(arglist__17787);
return G__17785__delegate(conds);
});
G__17785.cljs$core$IFn$_invoke$arity$variadic = G__17785__delegate;
return G__17785;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.call(null,(function() {
var G__17795 = null;
var G__17795__0 = (function (){
return com.rpl.specter.STAY;
});
var G__17795__1 = (function (path){
return path;
});
var G__17795__2 = (function (path1,path2){
var builder__16997__auto__ = com.rpl.specter.impl.direct_nav_obj.call(null,(function (late1,late2){
if(typeof com.rpl.specter.t_com$rpl$specter17788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter17788 = (function (path1,path2,late1,late2,meta17789){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta17789 = meta17789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
com.rpl.specter.t_com$rpl$specter17788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17790,meta17789__$1){
var self__ = this;
var _17790__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter17788(self__.path1,self__.path2,self__.late1,self__.late2,meta17789__$1));
});

com.rpl.specter.t_com$rpl$specter17788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17790){
var self__ = this;
var _17790__$1 = this;
return self__.meta17789;
});

com.rpl.specter.t_com$rpl$specter17788.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL;

com.rpl.specter.t_com$rpl$specter17788.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late1,vals,structure,next_fn);
var res2 = com.rpl.specter.protocols.select_STAR_.call(null,self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res2)){
return res1;
} else {
return res2;
}
});

com.rpl.specter.t_com$rpl$specter17788.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_.call(null,self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_.call(null,self__.late2,vals,s1,next_fn);
});

com.rpl.specter.t_com$rpl$specter17788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta17789","meta17789",-30191407,null)], null);
});

com.rpl.specter.t_com$rpl$specter17788.cljs$lang$type = true;

com.rpl.specter.t_com$rpl$specter17788.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter17788";

com.rpl.specter.t_com$rpl$specter17788.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"com.rpl.specter/t_com$rpl$specter17788");
});

com.rpl.specter.__GT_t_com$rpl$specter17788 = (function com$rpl$specter$__GT_t_com$rpl$specter17788(path1__$1,path2__$1,late1__$1,late2__$1,meta17789){
return (new com.rpl.specter.t_com$rpl$specter17788(path1__$1,path2__$1,late1__$1,late2__$1,meta17789));
});

}

return (new com.rpl.specter.t_com$rpl$specter17788(path1,path2,late1,late2,null));
}));
var curr_params__16998__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.late_path.call(null,path1),com.rpl.specter.late_path.call(null,path2)], null);
if(cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__16998__auto__)){
return cljs.core.apply.call(null,builder__16997__auto__,curr_params__16998__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction.call(null,builder__16997__auto__,curr_params__16998__auto__);
}
});
var G__17795__3 = (function() { 
var G__17796__delegate = function (path1,path2,paths){
return cljs.core.reduce.call(null,com.rpl.specter.multi_path,com.rpl.specter.multi_path.call(null,path1,path2),paths);
};
var G__17796 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__17797__i = 0, G__17797__a = new Array(arguments.length -  2);
while (G__17797__i < G__17797__a.length) {G__17797__a[G__17797__i] = arguments[G__17797__i + 2]; ++G__17797__i;}
  paths = new cljs.core.IndexedSeq(G__17797__a,0,null);
} 
return G__17796__delegate.call(this,path1,path2,paths);};
G__17796.cljs$lang$maxFixedArity = 2;
G__17796.cljs$lang$applyTo = (function (arglist__17798){
var path1 = cljs.core.first(arglist__17798);
arglist__17798 = cljs.core.next(arglist__17798);
var path2 = cljs.core.first(arglist__17798);
var paths = cljs.core.rest(arglist__17798);
return G__17796__delegate(path1,path2,paths);
});
G__17796.cljs$core$IFn$_invoke$arity$variadic = G__17796__delegate;
return G__17796;
})()
;
G__17795 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__17795__0.call(this);
case 1:
return G__17795__1.call(this,path1);
case 2:
return G__17795__2.call(this,path1,path2);
default:
var G__17799 = null;
if (arguments.length > 2) {
var G__17800__i = 0, G__17800__a = new Array(arguments.length -  2);
while (G__17800__i < G__17800__a.length) {G__17800__a[G__17800__i] = arguments[G__17800__i + 2]; ++G__17800__i;}
G__17799 = new cljs.core.IndexedSeq(G__17800__a,0,null);
}
return G__17795__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__17799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17795.cljs$lang$maxFixedArity = 2;
G__17795.cljs$lang$applyTo = G__17795__3.cljs$lang$applyTo;
G__17795.cljs$core$IFn$_invoke$arity$0 = G__17795__0;
G__17795.cljs$core$IFn$_invoke$arity$1 = G__17795__1;
G__17795.cljs$core$IFn$_invoke$arity$2 = G__17795__2;
G__17795.cljs$core$IFn$_invoke$arity$variadic = G__17795__3.cljs$core$IFn$_invoke$arity$variadic;
return G__17795;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.call(null,(function() { 
var G__17801__delegate = function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
};
var G__17801 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17802__i = 0, G__17802__a = new Array(arguments.length -  0);
while (G__17802__i < G__17802__a.length) {G__17802__a[G__17802__i] = arguments[G__17802__i + 0]; ++G__17802__i;}
  path = new cljs.core.IndexedSeq(G__17802__a,0,null);
} 
return G__17801__delegate.call(this,path);};
G__17801.cljs$lang$maxFixedArity = 0;
G__17801.cljs$lang$applyTo = (function (arglist__17803){
var path = cljs.core.seq(arglist__17803);
return G__17801__delegate(path);
});
G__17801.cljs$core$IFn$_invoke$arity$variadic = G__17801__delegate;
return G__17801;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.call(null,(function() { 
var G__17804__delegate = function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
};
var G__17804 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__17805__i = 0, G__17805__a = new Array(arguments.length -  0);
while (G__17805__i < G__17805__a.length) {G__17805__a[G__17805__i] = arguments[G__17805__i + 0]; ++G__17805__i;}
  path = new cljs.core.IndexedSeq(G__17805__a,0,null);
} 
return G__17804__delegate.call(this,path);};
G__17804.cljs$lang$maxFixedArity = 0;
G__17804.cljs$lang$applyTo = (function (arglist__17806){
var path = cljs.core.seq(arglist__17806);
return G__17804__delegate(path);
});
G__17804.cljs$core$IFn$_invoke$arity$variadic = G__17804__delegate;
return G__17804;
})()
,cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=specter.js.map