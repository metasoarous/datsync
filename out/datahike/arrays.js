// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.arrays');
goog.require('cljs.core');
goog.require('clojure.string');
datahike.arrays.if_cljs = (function datahike$arrays$if_cljs(env,then,else$){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))){
return then;
} else {
return else$;
}
});
datahike.arrays.make_array = (function datahike$arrays$make_array(size){
return (new Array(size));
});
datahike.arrays.into_array = (function datahike$arrays$into_array(aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);

return a;
}),(new Array()),aseq);
});
datahike.arrays.aclone = (function datahike$arrays$aclone(from){
return from.slice((0));
});
datahike.arrays.aconcat = (function datahike$arrays$aconcat(a,b){
return a.concat(b);
});
datahike.arrays.amap = (function datahike$arrays$amap(f,arr){
return arr.map(f);
});
datahike.arrays.asort = (function datahike$arrays$asort(arr,cmp){
return arr.sort(cmp);
});
datahike.arrays.array_QMARK_ = (function datahike$arrays$array_QMARK_(x){
if((cljs.core._STAR_target_STAR_ === "nodejs")){
return Array.isArray(x);
} else {
return (x instanceof Array);
}
});

//# sourceMappingURL=arrays.js.map