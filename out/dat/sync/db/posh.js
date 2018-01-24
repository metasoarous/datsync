// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.db.posh');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('datascript.core');
goog.require('dat.sync.db');
goog.require('posh.reagent');
dat.sync.db.posh.posh_api = cljs.core.into.call(null,ds.datascript_api,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"transact!","transact!",-822725810),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"predicate","predicate",-1742501860),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"datoms","datoms",-290874434)],[posh.reagent.q,(function (p1__39392_SHARP_,p2__39393_SHARP_,p3__39394_SHARP_){
return datascript.core.pull_many.call(null,cljs.core.deref.call(null,p1__39392_SHARP_),p2__39393_SHARP_,p3__39394_SHARP_);
}),cljs.core.identity,ds_pr.transact_BANG_,(function (p1__39395_SHARP_,p2__39396_SHARP_){
return ds_pr.with$.call(null,cljs.core.deref.call(null,p1__39395_SHARP_),p2__39396_SHARP_);
}),new cljs.core.Keyword("dat.sync.db.posh","posh","dat.sync.db.posh/posh",902974858),posh.reagent.pull,(function (p1__39389_SHARP_){
return cljs.core.boolean$.call(null,posh.reagent.get_posh_atom.call(null,p1__39389_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(dat.sync.db.datascript_api)], null),(function (p1__39390_SHARP_,p2__39391_SHARP_){
return ds_pr.entity.call(null,cljs.core.deref.call(null,p1__39390_SHARP_),p2__39391_SHARP_);
}),(function() { 
var G__39399__delegate = function (p1__39397_SHARP_,rest__39398_SHARP_){
return cljs.core.apply.call(null,datascript.core.datoms,cljs.core.deref.call(null,p1__39397_SHARP_),rest__39398_SHARP_);
};
var G__39399 = function (p1__39397_SHARP_,var_args){
var rest__39398_SHARP_ = null;
if (arguments.length > 1) {
var G__39400__i = 0, G__39400__a = new Array(arguments.length -  1);
while (G__39400__i < G__39400__a.length) {G__39400__a[G__39400__i] = arguments[G__39400__i + 1]; ++G__39400__i;}
  rest__39398_SHARP_ = new cljs.core.IndexedSeq(G__39400__a,0,null);
} 
return G__39399__delegate.call(this,p1__39397_SHARP_,rest__39398_SHARP_);};
G__39399.cljs$lang$maxFixedArity = 1;
G__39399.cljs$lang$applyTo = (function (arglist__39401){
var p1__39397_SHARP_ = cljs.core.first(arglist__39401);
var rest__39398_SHARP_ = cljs.core.rest(arglist__39401);
return G__39399__delegate(p1__39397_SHARP_,rest__39398_SHARP_);
});
G__39399.cljs$core$IFn$_invoke$arity$variadic = G__39399__delegate;
return G__39399;
})()
]));
cljs.core._add_method.call(null,dat.sync.db.api,new cljs.core.Keyword("dat.sync.db.posh","posh","dat.sync.db.posh/posh",902974858),(function (_){
return dat.sync.db.posh.posh_api;
}));
/**
 * Returns a db that will use the datascript api rather than the posh api. You can use this conn to do safe, non-reactive queries.
 */
dat.sync.db.posh.posh__GT_ds = (function dat$sync$db$posh$posh__GT_ds(dat_conn){
return dat.sync.db.map__GT_DatsyncConn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword("dat.sync.db.posh","datascript","dat.sync.db.posh/datascript",67523853),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(dat_conn)], null));
});

//# sourceMappingURL=posh.js.map