// Compiled by ClojureScript 1.9.542 {}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('clojure.set');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__6738__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__6738__auto__)){
var p = temp__6738__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.truss.impl.some_QMARK_ = (function taoensso$truss$impl$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
taoensso.truss.impl.set_STAR_ = cljs.core.set;
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});

taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});

taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});

taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_.call(null,(function (p1__23059_SHARP_){
return taoensso.truss.impl.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__23059_SHARP_));
}),ks);
});
taoensso.truss.impl.default_error_fn = (function taoensso$truss$impl$default_error_fn(data_){
var data = cljs.core.deref.call(null,data_);
throw cljs.core.ex_info.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"msg_","msg_",-1925147000).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000)));
});
taoensso.truss.impl._STAR__QMARK_data_STAR_ = null;
taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss.impl.default_error_fn;
taoensso.truss.impl.non_throwing = (function taoensso$truss$impl$non_throwing(pred){
return (function (x){
try{return pred.call(null,x);
}catch (e23061){if((e23061 instanceof Error)){
var _ = e23061;
return null;
} else {
throw e23061;

}
}});
});
/**
 * Returns true for some common preds that are naturally non-throwing
 */
taoensso.truss.impl.non_throwing_QMARK_ = (function taoensso$truss$impl$non_throwing_QMARK_(p){
return false;
});
/**
 * Expands any special predicate forms and returns [<expanded-pred> <non-throwing?>]
 */
taoensso.truss.impl._xpred = (function taoensso$truss$impl$_xpred(pred){
if(!(cljs.core.vector_QMARK_.call(null,pred))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,taoensso.truss.impl.non_throwing_QMARK_.call(null,pred)], null);
} else {
var vec__23079 = pred;
var type = cljs.core.nth.call(null,vec__23079,(0),null);
var a1 = cljs.core.nth.call(null,vec__23079,(1),null);
var a2 = cljs.core.nth.call(null,vec__23079,(2),null);
var a3 = cljs.core.nth.call(null,vec__23079,(3),null);
if(cljs.core.truth_(a1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Special predicate [<special-type> <arg>] form w/o <arg>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("a1")].join('')));
}

var G__23082 = type;
var G__23082__$1 = (((G__23082 instanceof cljs.core.Keyword))?G__23082.fqn:null);
switch (G__23082__$1) {
case "el":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "ks-nnil?":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks-nnil?","taoensso.truss.impl/ks-nnil?",1913972845,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "ks<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks<=","taoensso.truss.impl/ks<=",1973794033,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "ks=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks=","taoensso.truss.impl/ks=",1308270826,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "ks>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","ks>=","taoensso.truss.impl/ks>=",-14177732,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "not-in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "not-el":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "set<=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.set","subset?","clojure.set/subset?",909155479,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "set>=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.set","superset?","clojure.set/superset?",22098740,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "set=":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
case "in":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","set*","taoensso.truss.impl/set*",2039920610,null)),(function (){var x__11153__auto__ = a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),false], null);

break;
default:
var self = ((function (G__23082,G__23082__$1,vec__23079,type,a1,a2,a3){
return (function (_QMARK_pred){
if(cljs.core.truth_(_QMARK_pred)){
return taoensso.truss.impl._xpred.call(null,_QMARK_pred);
} else {
return null;
}
});})(G__23082,G__23082__$1,vec__23079,type,a1,a2,a3))
;
var vec__23083 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self.call(null,a1),self.call(null,a2),self.call(null,a3)], null);
var vec__23086 = cljs.core.nth.call(null,vec__23083,(0),null);
var a1__$1 = cljs.core.nth.call(null,vec__23086,(0),null);
var nt_a1_QMARK_ = cljs.core.nth.call(null,vec__23086,(1),null);
var vec__23089 = cljs.core.nth.call(null,vec__23083,(1),null);
var a2__$1 = cljs.core.nth.call(null,vec__23089,(0),null);
var nt_a2_QMARK_ = cljs.core.nth.call(null,vec__23089,(1),null);
var vec__23092 = cljs.core.nth.call(null,vec__23083,(2),null);
var a3__$1 = cljs.core.nth.call(null,vec__23092,(0),null);
var nt_a3_QMARK_ = cljs.core.nth.call(null,vec__23092,(1),null);
var nt_a1 = (cljs.core.truth_(a1__$1)?(cljs.core.truth_(nt_a1_QMARK_)?a1__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())))):null);
var nt_a2 = (cljs.core.truth_(a2__$1)?(cljs.core.truth_(nt_a2_QMARK_)?a2__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__11153__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())))):null);
var nt_a3 = (cljs.core.truth_(a3__$1)?(cljs.core.truth_(nt_a3_QMARK_)?a3__$1:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("taoensso.truss.impl","non-throwing","taoensso.truss.impl/non-throwing",-1408931246,null)),(function (){var x__11153__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())))):null);
var nt_comp_QMARK_ = (cljs.core.truth_(a3__$1)?(function (){var and__10207__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = nt_a2_QMARK_;
if(cljs.core.truth_(and__10207__auto____$1)){
return nt_a3_QMARK_;
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})():(cljs.core.truth_(a2__$1)?(function (){var and__10207__auto__ = nt_a1_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return nt_a2_QMARK_;
} else {
return and__10207__auto__;
}
})():(cljs.core.truth_(a1__$1)?nt_a1_QMARK_:null)));
var G__23095 = type;
var G__23095__$1 = (((G__23095 instanceof cljs.core.Keyword))?G__23095.fqn:null);
switch (G__23095__$1) {
case "and":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "or":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = nt_a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = nt_a2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = nt_a3;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),true], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = nt_a1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = nt_a2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),true], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1__$1,nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
case "not":
if(cljs.core.truth_(a3__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a3__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a2__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a2__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),nt_comp_QMARK_], null);
} else {
if(cljs.core.truth_(a1__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__11153__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11153__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11153__auto__ = a1__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x","x",-555367584,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto__);
})()))),nt_a1_QMARK_], null);
} else {
return null;
}
}
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

}
}
});
taoensso.truss.impl.fmt_err_msg = (function taoensso$truss$impl$fmt_err_msg(x1,x2,x3,x4){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant violation in `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`. Test form: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x3),cljs.core.str.cljs$core$IFn$_invoke$arity$1("` with failing input: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x4),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`")].join('');
});

/**
* @constructor
*/
taoensso.truss.impl.WrappedError = (function (val){
this.val = val;
})

taoensso.truss.impl.WrappedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

taoensso.truss.impl.WrappedError.cljs$lang$type = true;

taoensso.truss.impl.WrappedError.cljs$lang$ctorStr = "taoensso.truss.impl/WrappedError";

taoensso.truss.impl.WrappedError.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"taoensso.truss.impl/WrappedError");
});

taoensso.truss.impl.__GT_WrappedError = (function taoensso$truss$impl$__GT_WrappedError(val){
return (new taoensso.truss.impl.WrappedError(val));
});

taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._dummy_val = {};
taoensso.truss.impl._dummy_error = {};
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(elidable_QMARK_,ns_str,_QMARK_line,form,val,_QMARK_err,_QMARK_data_fn){
var temp__6738__auto__ = taoensso.truss.impl._STAR_error_fn_STAR_;
if(cljs.core.truth_(temp__6738__auto__)){
var error_fn = temp__6738__auto__;
return error_fn.call(null,(new cljs.core.Delay(((function (error_fn,temp__6738__auto__){
return (function (){
var instant = (new Date());
var line_str = (function (){var or__10219__auto__ = _QMARK_line;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');
var undefn_val_QMARK_ = (val === taoensso.truss.impl._dummy_val);
var val_str = ((undefn_val_QMARK_)?"<undefined>":(((val == null))?"<nil>":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')
));
var _QMARK_err__$1 = (((taoensso.truss.impl._dummy_error === _QMARK_err))?null:(((_QMARK_err instanceof taoensso.truss.impl.WrappedError))?_QMARK_err.val:_QMARK_err
));
var msg_ = (new cljs.core.Delay(((function (instant,line_str,form_str,undefn_val_QMARK_,val_str,_QMARK_err__$1,error_fn,temp__6738__auto__){
return (function (){
var _QMARK_err_str = (function (){var temp__6738__auto____$1 = _QMARK_err__$1;
if(cljs.core.truth_(temp__6738__auto____$1)){
var e = temp__6738__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err__$1)].join('');
} else {
return null;
}
})();
var msg = taoensso.truss.impl.fmt_err_msg.call(null,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err__$1)){
return msg;
} else {
if(undefn_val_QMARK_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n`val` error: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err_str)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n`pred-form` error: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_err_str)].join('');

}
}
});})(instant,line_str,form_str,undefn_val_QMARK_,val_str,_QMARK_err__$1,error_fn,temp__6738__auto__))
,null));
var _QMARK_data = (function (){var temp__6738__auto____$1 = _QMARK_data_fn;
if(cljs.core.truth_(temp__6738__auto____$1)){
var data_fn = temp__6738__auto____$1;
try{return data_fn.call(null);
}catch (e23103){if((e23103 instanceof Error)){
var e = e23103;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-error","data-error",-1058016301),e], null);
} else {
throw e23103;

}
}} else {
return null;
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"*?data*","*?data*",1047537922),new cljs.core.Keyword(null,"msg_","msg_",-1925147000),new cljs.core.Keyword(null,"elidable?","elidable?",248362249),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"val-type","val-type",-279850094),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"form-str","form-str",871608859)],[taoensso.truss.impl._STAR__QMARK_data_STAR_,msg_,elidable_QMARK_,instant,((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):val),ns_str,((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):cljs.core.type.call(null,val)),_QMARK_err__$1,cljs.core._STAR_assert_STAR_,_QMARK_data,_QMARK_line,form_str]);
});})(error_fn,temp__6738__auto__))
,null)));
} else {
return null;
}
});

//# sourceMappingURL=impl.js.map