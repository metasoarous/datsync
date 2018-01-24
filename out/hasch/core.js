// Compiled by ClojureScript 1.9.542 {}
goog.provide('hasch.core');
goog.require('cljs.core');
goog.require('hasch.benc');
goog.require('hasch.platform');
hasch.core.uuid4 = hasch.platform.uuid4;
hasch.core.uuid5 = hasch.platform.uuid5;
hasch.core.hash__GT_str = hasch.platform.hash__GT_str;
/**
 * Hash an edn value with SHA-512 by default or a compatible hash function of choice.
 */
hasch.core.edn_hash = (function hasch$core$edn_hash(var_args){
var args42303 = [];
var len__11440__auto___42306 = arguments.length;
var i__11441__auto___42307 = (0);
while(true){
if((i__11441__auto___42307 < len__11440__auto___42306)){
args42303.push((arguments[i__11441__auto___42307]));

var G__42308 = (i__11441__auto___42307 + (1));
i__11441__auto___42307 = G__42308;
continue;
} else {
}
break;
}

var G__42305 = args42303.length;
switch (G__42305) {
case 1:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42303.length)].join('')));

}
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$1 = (function (val){
return hasch.core.edn_hash.call(null,val,cljs.core.PersistentArrayMap.EMPTY);
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$2 = (function (val,write_handlers){
return hasch.core.edn_hash.call(null,val,hasch.platform.sha512_message_digest,write_handlers);
});

hasch.core.edn_hash.cljs$core$IFn$_invoke$arity$3 = (function (val,md_create_fn,write_handlers){
return cljs.core.map.call(null,(function (p1__42302_SHARP_){
if((p1__42302_SHARP_ < (0))){
return (p1__42302_SHARP_ + (256));
} else {
return p1__42302_SHARP_;
}
}),hasch.benc.digest.call(null,hasch.benc._coerce.call(null,val,md_create_fn,(function (){var or__10219__auto__ = write_handlers;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),md_create_fn));
});

hasch.core.edn_hash.cljs$lang$maxFixedArity = 3;

/**
 * Creates random UUID-4 without argument or UUID-5 for the argument value.
 * 
 *   Optionally an incognito-style write-handlers map can be supplied,
 *   which describes record serialization in terms of Clojure data
 *   structures.
 */
hasch.core.uuid = (function hasch$core$uuid(var_args){
var args42310 = [];
var len__11440__auto___42318 = arguments.length;
var i__11441__auto___42319 = (0);
while(true){
if((i__11441__auto___42319 < len__11440__auto___42318)){
args42310.push((arguments[i__11441__auto___42319]));

var G__42320 = (i__11441__auto___42319 + (1));
i__11441__auto___42319 = G__42320;
continue;
} else {
}
break;
}

var G__42314 = args42310.length;
switch (G__42314) {
case 0:
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args42310.slice((1)),(0),null));
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11463__auto__);

}
});

hasch.core.uuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return hasch.core.uuid4.call(null);
});

hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic = (function (val,p__42315){
var map__42316 = p__42315;
var map__42316__$1 = ((((!((map__42316 == null)))?((((map__42316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42316):map__42316);
var write_handlers = cljs.core.get.call(null,map__42316__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
return hasch.core.uuid5.call(null,hasch.core.edn_hash.call(null,val,write_handlers));
});

hasch.core.uuid.cljs$lang$applyTo = (function (seq42311){
var G__42312 = cljs.core.first.call(null,seq42311);
var seq42311__$1 = cljs.core.next.call(null,seq42311);
return hasch.core.uuid.cljs$core$IFn$_invoke$arity$variadic(G__42312,seq42311__$1);
});

hasch.core.uuid.cljs$lang$maxFixedArity = (1);


//# sourceMappingURL=core.js.map