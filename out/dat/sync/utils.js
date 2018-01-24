// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.utils');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.pprint');
goog.require('taoensso.timbre');
dat.sync.utils.deref_or_value = (function dat$sync$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
dat.sync.utils.deep_merge = (function dat$sync$utils$deep_merge(var_args){
var args53267 = [];
var len__11440__auto___53270 = arguments.length;
var i__11441__auto___53271 = (0);
while(true){
if((i__11441__auto___53271 < len__11440__auto___53270)){
args53267.push((arguments[i__11441__auto___53271]));

var G__53272 = (i__11441__auto___53271 + (1));
i__11441__auto___53271 = G__53272;
continue;
} else {
}
break;
}

var G__53269 = args53267.length;
switch (G__53269) {
case 1:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53267.length)].join('')));

}
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (map1){
return map1;
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (map1,map2){
return cljs.core.merge_with.call(null,dat.sync.utils.inner_merge,map1,map2);
});

dat.sync.utils.deep_merge.cljs$lang$maxFixedArity = 2;

dat.sync.utils.inner_merge_dispatch_signature = (function dat$sync$utils$inner_merge_dispatch_signature(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seq?","seq?",702501050),cljs.core.seq_QMARK_.call(null,x),new cljs.core.Keyword(null,"map?","map?",873867235),cljs.core.map_QMARK_.call(null,x)], null);
});
dat.sync.utils.merge_zip = (function dat$sync$utils$merge_zip(xs,ys){
return cljs.core.mapv.call(null,dat.sync.utils.deep_merge,xs,ys);
});
dat.sync.utils.default_inner_merge_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306),cljs.core.concat], null);
dat.sync.utils.inner_merge = (function dat$sync$utils$inner_merge(var_args){
var args53274 = [];
var len__11440__auto___53303 = arguments.length;
var i__11441__auto___53304 = (0);
while(true){
if((i__11441__auto___53304 < len__11440__auto___53303)){
args53274.push((arguments[i__11441__auto___53304]));

var G__53305 = (i__11441__auto___53304 + (1));
i__11441__auto___53304 = G__53305;
continue;
} else {
}
break;
}

var G__53276 = args53274.length;
switch (G__53276) {
case 2:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53274.length)].join('')));

}
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return dat.sync.utils.inner_merge.call(null,dat.sync.utils.default_inner_merge_opts,x,y);
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3 = (function (p__53277,x,y){
var map__53278 = p__53277;
var map__53278__$1 = ((((!((map__53278 == null)))?((((map__53278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53278):map__53278);
var opts = map__53278__$1;
var coll_merge = cljs.core.get.call(null,map__53278__$1,new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306));
var ocr_53280 = cljs.core.mapv.call(null,dat.sync.utils.inner_merge_dispatch_signature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_53280)) && ((cljs.core.count.call(null,ocr_53280) === 2))){
try{var ocr_53280_0__53282 = cljs.core.nth.call(null,ocr_53280,(0));
if(((!((ocr_53280_0__53282 == null)))?((((ocr_53280_0__53282.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_53280_0__53282.cljs$core$ILookup$)))?true:(((!ocr_53280_0__53282.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_53280_0__53282):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_53280_0__53282))){
try{var ocr_53280_1__53283 = cljs.core.nth.call(null,ocr_53280,(1));
if(((!((ocr_53280_1__53283 == null)))?((((ocr_53280_1__53283.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_53280_1__53283.cljs$core$ILookup$)))?true:(((!ocr_53280_1__53283.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_53280_1__53283):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_53280_1__53283))){
try{var ocr_53280_1__53283_map_QMARK___53292 = cljs.core.get.call(null,ocr_53280_1__53283,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_53280_1__53283_map_QMARK___53292 === true)){
try{var ocr_53280_0__53282_map_QMARK___53287 = cljs.core.get.call(null,ocr_53280_0__53282,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_53280_0__53282_map_QMARK___53287 === true)){
return dat.sync.utils.deep_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53302){if((e53302 instanceof Error)){
var e__52361__auto__ = e53302;
if((e__52361__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__52361__auto__;
}
} else {
throw e53302;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53299){if((e53299 instanceof Error)){
var e__52361__auto__ = e53299;
if((e__52361__auto__ === cljs.core.match.backtrack)){
try{var ocr_53280_1__53283_col_QMARK___53293 = cljs.core.get.call(null,ocr_53280_1__53283,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_53280_1__53283_col_QMARK___53293 === true)){
try{var ocr_53280_0__53282_col_QMARK___53288 = cljs.core.get.call(null,ocr_53280_0__53282,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_53280_0__53282_col_QMARK___53288 === true)){
return coll_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e53301){if((e53301 instanceof Error)){
var e__52361__auto____$1 = e53301;
if((e__52361__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__52361__auto____$1;
}
} else {
throw e53301;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53300){if((e53300 instanceof Error)){
var e__52361__auto____$1 = e53300;
if((e__52361__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__52361__auto____$1;
}
} else {
throw e53300;

}
}} else {
throw e__52361__auto__;
}
} else {
throw e53299;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53297){if((e53297 instanceof Error)){
var e__52361__auto__ = e53297;
if((e__52361__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__52361__auto__;
}
} else {
throw e53297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53295){if((e53295 instanceof Error)){
var e__52361__auto__ = e53295;
if((e__52361__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__52361__auto__;
}
} else {
throw e53295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e53294){if((e53294 instanceof Error)){
var e__52361__auto__ = e53294;
if((e__52361__auto__ === cljs.core.match.backtrack)){
return y;
} else {
throw e__52361__auto__;
}
} else {
throw e53294;

}
}});

dat.sync.utils.inner_merge.cljs$lang$maxFixedArity = 3;

dat.sync.utils.log = (function dat$sync$utils$log(var_args){
var args__11447__auto__ = [];
var len__11440__auto___53308 = arguments.length;
var i__11441__auto___53309 = (0);
while(true){
if((i__11441__auto___53309 < len__11440__auto___53308)){
args__11447__auto__.push((arguments[i__11441__auto___53309]));

var G__53310 = (i__11441__auto___53309 + (1));
i__11441__auto___53309 = G__53310;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,args);
});

dat.sync.utils.log.cljs$lang$maxFixedArity = (0);

dat.sync.utils.log.cljs$lang$applyTo = (function (seq53307){
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53307));
});

dat.sync.utils.tr = (function dat$sync$utils$tr(var_args){
var args53311 = [];
var len__11440__auto___53316 = arguments.length;
var i__11441__auto___53317 = (0);
while(true){
if((i__11441__auto___53317 < len__11440__auto___53316)){
args53311.push((arguments[i__11441__auto___53317]));

var G__53318 = (i__11441__auto___53317 + (1));
i__11441__auto___53317 = G__53318;
continue;
} else {
}
break;
}

var G__53313 = args53311.length;
switch (G__53313) {
case 2:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args53311.length)].join('')));

}
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2 = (function (message,x){
dat.sync.utils.log.call(null,message,(function (){var sb__11311__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53314_53320 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53315_53321 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53314_53320,_STAR_print_fn_STAR_53315_53321,sb__11311__auto__){
return (function (x__11312__auto__){
return sb__11311__auto__.append(x__11312__auto__);
});})(_STAR_print_newline_STAR_53314_53320,_STAR_print_fn_STAR_53315_53321,sb__11311__auto__))
;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53315_53321;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53314_53320;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__11311__auto__)].join('');
})());

return x;
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1 = (function (x){
return dat.sync.utils.tr.call(null,"",x);
});

dat.sync.utils.tr.cljs$lang$maxFixedArity = 2;

/**
 * Any number of transducers and sequences concatonated into one sequence.
 */
dat.sync.utils.cat_into = (function dat$sync$utils$cat_into(var_args){
var args__11447__auto__ = [];
var len__11440__auto___53326 = arguments.length;
var i__11441__auto___53327 = (0);
while(true){
if((i__11441__auto___53327 < len__11440__auto___53326)){
args__11447__auto__.push((arguments[i__11441__auto___53327]));

var G__53328 = (i__11441__auto___53327 + (1));
i__11441__auto___53327 = G__53328;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic = (function (coll,xfns_and_seqs){
var map__53324 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,xfns_and_seqs)))?cljs.core.group_by.call(null,cljs.core.fn_QMARK_,xfns_and_seqs):new cljs.core.PersistentArrayMap(null, 1, [false,xfns_and_seqs], null));
var map__53324__$1 = ((((!((map__53324 == null)))?((((map__53324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53324):map__53324);
var xfns = cljs.core.get.call(null,map__53324__$1,true);
var seqs = cljs.core.get.call(null,map__53324__$1,false);
return cljs.core.into.call(null,coll,cljs.core.apply.call(null,cljs.core.comp,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cat], null),xfns)),seqs);
});

dat.sync.utils.cat_into.cljs$lang$maxFixedArity = (1);

dat.sync.utils.cat_into.cljs$lang$applyTo = (function (seq53322){
var G__53323 = cljs.core.first.call(null,seq53322);
var seq53322__$1 = cljs.core.next.call(null,seq53322);
return dat.sync.utils.cat_into.cljs$core$IFn$_invoke$arity$variadic(G__53323,seq53322__$1);
});


//# sourceMappingURL=utils.js.map