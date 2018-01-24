// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datahike.arrays');
goog.require('hitchhiker.tree.core');
goog.require('hitchhiker.tree.messaging');
goog.require('hitchhiker.konserve');
goog.require('datahike.btset');
datahike.db.Exception = Error;

datahike.db.IllegalArgumentException = Error;

datahike.db.UnsupportedOperationException = Error;
datahike.db.tx0 = (536870912);
datahike.db.default_schema = null;
datahike.db.seqable_QMARK_ = (function datahike$db$seqable_QMARK_(x){
return (!(typeof x === 'string')) && ((cljs.core.seqable_QMARK_.call(null,x)) || (datahike.arrays.array_QMARK_.call(null,x)));
});
datahike.db.neg_number_QMARK_ = (function datahike$db$neg_number_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datahike.db.cljs_env_QMARK_ = (function datahike$db$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
datahike.db.combine_hashes = (function datahike$db$combine_hashes(x,y){
return cljs.core.hash_combine.call(null,x,y);
});
datahike.db.hash_datom = (function datahike$db$hash_datom(d){
return null;
});
datahike.db.equiv_datom = (function datahike$db$equiv_datom(a,b){
return null;
});
datahike.db.seq_datom = (function datahike$db$seq_datom(d){
return null;
});
datahike.db.nth_datom = (function datahike$db$nth_datom(var_args){
var args47299 = [];
var len__11440__auto___47302 = arguments.length;
var i__11441__auto___47303 = (0);
while(true){
if((i__11441__auto___47303 < len__11440__auto___47302)){
args47299.push((arguments[i__11441__auto___47303]));

var G__47304 = (i__11441__auto___47303 + (1));
i__11441__auto___47303 = G__47304;
continue;
} else {
}
break;
}

var G__47301 = args47299.length;
switch (G__47301) {
case 2:
return datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47299.length)].join('')));

}
});

datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
return null;
});

datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,nf){
return null;
});

datahike.db.nth_datom.cljs$lang$maxFixedArity = 3;

datahike.db.assoc_datom = (function datahike$db$assoc_datom(d,k,v){
return null;
});
datahike.db.val_at_datom = (function datahike$db$val_at_datom(d,k,nf){
return null;
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datahike.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datahike.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__10219__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return d__$1.__hash = datahike.db.hash_datom.call(null,d__$1);
}
});

datahike.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__10207__auto__ = (o instanceof datahike.db.Datom);
if(and__10207__auto__){
return datahike.db.equiv_datom.call(null,d__$1,o);
} else {
return and__10207__auto__;
}
});

datahike.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datahike.db.seq_datom.call(null,d__$1);
});

datahike.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datahike.db.val_at_datom.call(null,d__$1,k,null);
});

datahike.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datahike.db.val_at_datom.call(null,d__$1,k,nf);
});

datahike.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return datahike.db.nth_datom.call(null,this$__$1,i);
});

datahike.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return datahike.db.nth_datom.call(null,this$__$1,i,not_found);
});

datahike.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datahike.db.assoc_datom.call(null,d__$1,k,v__$1);
});

datahike.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datahike/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datahike.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null);
});

datahike.db.Datom.cljs$lang$type = true;

datahike.db.Datom.cljs$lang$ctorStr = "datahike.db/Datom";

datahike.db.Datom.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.db/Datom");
});

datahike.db.__GT_Datom = (function datahike$db$__GT_Datom(e,a,v,tx,added){
return (new datahike.db.Datom(e,a,v,tx,added));
});

datahike.db.datom = (function datahike$db$datom(var_args){
var args47306 = [];
var len__11440__auto___47309 = arguments.length;
var i__11441__auto___47310 = (0);
while(true){
if((i__11441__auto___47310 < len__11440__auto___47309)){
args47306.push((arguments[i__11441__auto___47310]));

var G__47311 = (i__11441__auto___47310 + (1));
i__11441__auto___47310 = G__47311;
continue;
} else {
}
break;
}

var G__47308 = args47306.length;
switch (G__47308) {
case 3:
return datahike.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datahike.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datahike.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47306.length)].join('')));

}
});

datahike.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datahike.db.Datom(e,a,v,datahike.db.tx0,true));
});

datahike.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datahike.db.Datom(e,a,v,tx,true));
});

datahike.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datahike.db.Datom(e,a,v,tx,added));
});

datahike.db.datom.cljs$lang$maxFixedArity = 5;

datahike.db.datom_QMARK_ = (function datahike$db$datom_QMARK_(x){
return (x instanceof datahike.db.Datom);
});
datahike.db.hash_datom = (function datahike$db$hash_datom(d){
return datahike.db.combine_hashes.call(null,datahike.db.combine_hashes.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datahike.db.equiv_datom = (function datahike$db$equiv_datom(d,o){
return (cljs.core._EQ_.call(null,d.e,o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v));
});
datahike.db.seq_datom = (function datahike$db$seq_datom(d){
var x__11153__auto__ = d.e;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$1 = d.a;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$2 = d.v;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$3 = d.tx;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$4 = d.added;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto____$4);
})(),x__11153__auto____$3);
})(),x__11153__auto____$2);
})(),x__11153__auto____$1);
})(),x__11153__auto__);
});
datahike.db.val_at_datom = (function datahike$db$val_at_datom(d,k,not_found){
var G__47314 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__47314)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__47314)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__47314)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"v",G__47314)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__47314)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__47314)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__47314)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,"added",G__47314)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"tx",G__47314)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__47314)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datahike.db.nth_datom = (function datahike$db$nth_datom(var_args){
var args47315 = [];
var len__11440__auto___47320 = arguments.length;
var i__11441__auto___47321 = (0);
while(true){
if((i__11441__auto___47321 < len__11440__auto___47320)){
args47315.push((arguments[i__11441__auto___47321]));

var G__47322 = (i__11441__auto___47321 + (1));
i__11441__auto___47321 = G__47322;
continue;
} else {
}
break;
}

var G__47317 = args47315.length;
switch (G__47317) {
case 2:
return datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47315.length)].join('')));

}
});

datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__47318 = i;
switch (G__47318) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Datom/-nth: Index out of bounds: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
});

datahike.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__47319 = i;
switch (G__47319) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datahike.db.nth_datom.cljs$lang$maxFixedArity = 3;

datahike.db.assoc_datom = (function datahike$db$assoc_datom(d,k,v){
var G__47327 = k;
var G__47327__$1 = (((G__47327 instanceof cljs.core.Keyword))?G__47327.fqn:null);
switch (G__47327__$1) {
case "e":
return (new datahike.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datahike.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datahike.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datahike.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datahike.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datahike.db.IllegalArgumentException([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid key for #datahike/Datom: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datahike.db.datom_from_reader = (function datahike$db$datom_from_reader(vec){
return cljs.core.apply.call(null,datahike.db.datom,vec);
});
datahike.db.cmp = (function datahike$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__10207__auto__ = o1;
if(cljs.core.truth_(and__10207__auto__)){
return o2;
} else {
return and__10207__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datahike.db.cmp_num = (function datahike$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__10207__auto__ = n1;
if(cljs.core.truth_(and__10207__auto__)){
return n2;
} else {
return and__10207__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datahike.db.cmp_val = (function datahike$db$cmp_val(o1,o2){
if((!((o1 == null))) && (!((o2 == null)))){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datahike.db.cmp_datoms_eavt = (function datahike$db$cmp_datoms_eavt(d1,d2){
var c__46604__auto__ = datahike.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = datahike.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = datahike.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = datahike.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.IKeyCompare}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.EAVTKey = (function (datom,__meta,__extmap,__hash){
this.datom = datom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.EAVTKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.EAVTKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47331,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47333 = k47331;
var G__47333__$1 = (((G__47333 instanceof cljs.core.Keyword))?G__47333.fqn:null);
switch (G__47333__$1) {
case "datom":
return self__.datom;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47331,else__10897__auto__);

}
});

datahike.db.EAVTKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.EAVTKey{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.EAVTKey.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.EAVTKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47330){
var self__ = this;
var G__47330__$1 = this;
return (new cljs.core.RecordIter((0),G__47330__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datom","datom",-371556090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.EAVTKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.EAVTKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.EAVTKey(self__.datom,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.EAVTKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.EAVTKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.EAVTKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.EAVTKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datom","datom",-371556090),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.EAVTKey(self__.datom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.EAVTKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47330){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47334 = cljs.core.keyword_identical_QMARK_;
var expr__47335 = k__10902__auto__;
if(cljs.core.truth_(pred__47334.call(null,new cljs.core.Keyword(null,"datom","datom",-371556090),expr__47335))){
return (new datahike.db.EAVTKey(G__47330,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.EAVTKey(self__.datom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47330),null));
}
});

datahike.db.EAVTKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.EAVTKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47330){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.EAVTKey(self__.datom,G__47330,self__.__extmap,self__.__hash));
});

datahike.db.EAVTKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.EAVTKey.prototype.hitchhiker$tree$core$IKeyCompare$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.EAVTKey.prototype.hitchhiker$tree$core$IKeyCompare$compare$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,other),datahike.db.EAVTKey)){
return datahike.db.cmp_datoms_eavt.call(null,self__.datom,other.datom);
} else {
throw cljs.core.ex_info.call(null,"Unexpected key type.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"not-eavt-key","not-eavt-key",782903714)], null));
}
});

datahike.db.EAVTKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datom","datom",1268975437,null)], null);
});

datahike.db.EAVTKey.cljs$lang$type = true;

datahike.db.EAVTKey.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/EAVTKey");
});

datahike.db.EAVTKey.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/EAVTKey");
});

datahike.db.__GT_EAVTKey = (function datahike$db$__GT_EAVTKey(datom){
return (new datahike.db.EAVTKey(datom,null,null,null));
});

datahike.db.map__GT_EAVTKey = (function datahike$db$map__GT_EAVTKey(G__47332){
return (new datahike.db.EAVTKey(new cljs.core.Keyword(null,"datom","datom",-371556090).cljs$core$IFn$_invoke$arity$1(G__47332),null,cljs.core.dissoc.call(null,G__47332,new cljs.core.Keyword(null,"datom","datom",-371556090)),null));
});

datahike.db.cmp_datoms_aevt = (function datahike$db$cmp_datoms_aevt(d1,d2){
var c__46604__auto__ = datahike.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = datahike.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = datahike.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = datahike.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.IKeyCompare}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.AEVTKey = (function (datom,__meta,__extmap,__hash){
this.datom = datom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.AEVTKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.AEVTKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47339,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47341 = k47339;
var G__47341__$1 = (((G__47341 instanceof cljs.core.Keyword))?G__47341.fqn:null);
switch (G__47341__$1) {
case "datom":
return self__.datom;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47339,else__10897__auto__);

}
});

datahike.db.AEVTKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.AEVTKey{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.AEVTKey.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.AEVTKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47338){
var self__ = this;
var G__47338__$1 = this;
return (new cljs.core.RecordIter((0),G__47338__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datom","datom",-371556090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.AEVTKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.AEVTKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.AEVTKey(self__.datom,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.AEVTKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.AEVTKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.AEVTKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.AEVTKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datom","datom",-371556090),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.AEVTKey(self__.datom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.AEVTKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47338){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47342 = cljs.core.keyword_identical_QMARK_;
var expr__47343 = k__10902__auto__;
if(cljs.core.truth_(pred__47342.call(null,new cljs.core.Keyword(null,"datom","datom",-371556090),expr__47343))){
return (new datahike.db.AEVTKey(G__47338,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.AEVTKey(self__.datom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47338),null));
}
});

datahike.db.AEVTKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.AEVTKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47338){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.AEVTKey(self__.datom,G__47338,self__.__extmap,self__.__hash));
});

datahike.db.AEVTKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.AEVTKey.prototype.hitchhiker$tree$core$IKeyCompare$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.AEVTKey.prototype.hitchhiker$tree$core$IKeyCompare$compare$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return datahike.db.cmp_datoms_aevt.call(null,self__.datom,other.datom);
});

datahike.db.AEVTKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datom","datom",1268975437,null)], null);
});

datahike.db.AEVTKey.cljs$lang$type = true;

datahike.db.AEVTKey.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/AEVTKey");
});

datahike.db.AEVTKey.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/AEVTKey");
});

datahike.db.__GT_AEVTKey = (function datahike$db$__GT_AEVTKey(datom){
return (new datahike.db.AEVTKey(datom,null,null,null));
});

datahike.db.map__GT_AEVTKey = (function datahike$db$map__GT_AEVTKey(G__47340){
return (new datahike.db.AEVTKey(new cljs.core.Keyword(null,"datom","datom",-371556090).cljs$core$IFn$_invoke$arity$1(G__47340),null,cljs.core.dissoc.call(null,G__47340,new cljs.core.Keyword(null,"datom","datom",-371556090)),null));
});

datahike.db.cmp_datoms_avet = (function datahike$db$cmp_datoms_avet(d1,d2){
var c__46604__auto__ = datahike.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = datahike.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = datahike.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = datahike.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {hitchhiker.tree.core.IKeyCompare}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.AVETKey = (function (datom,__meta,__extmap,__hash){
this.datom = datom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.AVETKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.AVETKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47347,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47349 = k47347;
var G__47349__$1 = (((G__47349 instanceof cljs.core.Keyword))?G__47349.fqn:null);
switch (G__47349__$1) {
case "datom":
return self__.datom;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47347,else__10897__auto__);

}
});

datahike.db.AVETKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.AVETKey{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.AVETKey.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.AVETKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47346){
var self__ = this;
var G__47346__$1 = this;
return (new cljs.core.RecordIter((0),G__47346__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datom","datom",-371556090)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.AVETKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.AVETKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.AVETKey(self__.datom,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.AVETKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.AVETKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.AVETKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.AVETKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datom","datom",-371556090),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.AVETKey(self__.datom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.AVETKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47346){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47350 = cljs.core.keyword_identical_QMARK_;
var expr__47351 = k__10902__auto__;
if(cljs.core.truth_(pred__47350.call(null,new cljs.core.Keyword(null,"datom","datom",-371556090),expr__47351))){
return (new datahike.db.AVETKey(G__47346,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.AVETKey(self__.datom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47346),null));
}
});

datahike.db.AVETKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datom","datom",-371556090),self__.datom],null))], null),self__.__extmap));
});

datahike.db.AVETKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47346){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.AVETKey(self__.datom,G__47346,self__.__extmap,self__.__hash));
});

datahike.db.AVETKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.AVETKey.prototype.hitchhiker$tree$core$IKeyCompare$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.AVETKey.prototype.hitchhiker$tree$core$IKeyCompare$compare$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return datahike.db.cmp_datoms_avet.call(null,self__.datom,other.datom);
});

datahike.db.AVETKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"datom","datom",1268975437,null)], null);
});

datahike.db.AVETKey.cljs$lang$type = true;

datahike.db.AVETKey.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/AVETKey");
});

datahike.db.AVETKey.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/AVETKey");
});

datahike.db.__GT_AVETKey = (function datahike$db$__GT_AVETKey(datom){
return (new datahike.db.AVETKey(datom,null,null,null));
});

datahike.db.map__GT_AVETKey = (function datahike$db$map__GT_AVETKey(G__47348){
return (new datahike.db.AVETKey(new cljs.core.Keyword(null,"datom","datom",-371556090).cljs$core$IFn$_invoke$arity$1(G__47348),null,cljs.core.dissoc.call(null,G__47348,new cljs.core.Keyword(null,"datom","datom",-371556090)),null));
});

datahike.db.cmp_attr_quick = (function datahike$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datahike.db.cmp_datoms_eavt_quick = (function datahike$db$cmp_datoms_eavt_quick(d1,d2){
var c__46604__auto__ = (d1.e - d2.e);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = datahike.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});
datahike.db.cmp_datoms_aevt_quick = (function datahike$db$cmp_datoms_aevt_quick(d1,d2){
var c__46604__auto__ = datahike.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = (d1.e - d2.e);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});
datahike.db.cmp_datoms_avet_quick = (function datahike$db$cmp_datoms_avet_quick(d1,d2){
var c__46604__auto__ = datahike.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__46604__auto__)){
var c__46604__auto____$1 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__46604__auto____$1)){
var c__46604__auto____$2 = (d1.e - d2.e);
if(((0) === c__46604__auto____$2)){
var c__46604__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__46604__auto____$3)){
return (0);
} else {
return c__46604__auto____$3;
}
} else {
return c__46604__auto____$2;
}
} else {
return c__46604__auto____$1;
}
} else {
return c__46604__auto__;
}
});

/**
 * @interface
 */
datahike.db.ISearch = function(){};

datahike.db._search = (function datahike$db$_search(data,pattern){
if((!((data == null))) && (!((data.datahike$db$ISearch$_search$arity$2 == null)))){
return data.datahike$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__10937__auto__ = (((data == null))?null:data);
var m__10938__auto__ = (datahike.db._search[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,data,pattern);
} else {
var m__10938__auto____$1 = (datahike.db._search["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,data,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datahike.db.IIndexAccess = function(){};

datahike.db._datoms = (function datahike$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datahike$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datahike$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__10937__auto__ = (((db == null))?null:db);
var m__10938__auto__ = (datahike.db._datoms[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,db,index,components);
} else {
var m__10938__auto____$1 = (datahike.db._datoms["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
}
});

datahike.db._seek_datoms = (function datahike$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datahike$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datahike$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__10937__auto__ = (((db == null))?null:db);
var m__10938__auto__ = (datahike.db._seek_datoms[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,db,index,components);
} else {
var m__10938__auto____$1 = (datahike.db._seek_datoms["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
}
});

datahike.db._index_range = (function datahike$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datahike$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datahike$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__10937__auto__ = (((db == null))?null:db);
var m__10938__auto__ = (datahike.db._index_range[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,db,attr,start,end);
} else {
var m__10938__auto____$1 = (datahike.db._index_range["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,db,attr,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datahike.db.IDB = function(){};

datahike.db._schema = (function datahike$db$_schema(db){
if((!((db == null))) && (!((db.datahike$db$IDB$_schema$arity$1 == null)))){
return db.datahike$db$IDB$_schema$arity$1(db);
} else {
var x__10937__auto__ = (((db == null))?null:db);
var m__10938__auto__ = (datahike.db._schema[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,db);
} else {
var m__10938__auto____$1 = (datahike.db._schema["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,db);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
}
});

datahike.db._attrs_by = (function datahike$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datahike$db$IDB$_attrs_by$arity$2 == null)))){
return db.datahike$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__10937__auto__ = (((db == null))?null:db);
var m__10938__auto__ = (datahike.db._attrs_by[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,db,property);
} else {
var m__10938__auto____$1 = (datahike.db._attrs_by["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,db,property);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
}
});

datahike.db.hash_db = (function datahike$db$hash_db(db){
return null;
});
datahike.db.hash_fdb = (function datahike$db$hash_fdb(db){
return null;
});
datahike.db.equiv_db = (function datahike$db$equiv_db(a,b){
return null;
});
datahike.db.empty_db = (function datahike$db$empty_db(var_args){
var args47354 = [];
var len__11440__auto___47357 = arguments.length;
var i__11441__auto___47358 = (0);
while(true){
if((i__11441__auto___47358 < len__11440__auto___47357)){
args47354.push((arguments[i__11441__auto___47358]));

var G__47359 = (i__11441__auto___47358 + (1));
i__11441__auto___47358 = G__47359;
continue;
} else {
}
break;
}

var G__47356 = args47354.length;
switch (G__47356) {
case 0:
return datahike.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47354.length)].join('')));

}
});

datahike.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

datahike.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return null;
});

datahike.db.empty_db.cljs$lang$maxFixedArity = 1;

datahike.db.pr_db = (function datahike$db$pr_db(db,w,opts){
return null;
});
datahike.db.resolve_datom = (function datahike$db$resolve_datom(db,e,a,v,t){
return null;
});
datahike.db.validate_attr = (function datahike$db$validate_attr(attr,at){
return null;
});
datahike.db.components__GT_pattern = (function datahike$db$components__GT_pattern(db,index,cs){
return null;
});
datahike.db.indexing_QMARK_ = (function datahike$db$indexing_QMARK_(db,attr){
return null;
});
datahike.db.slice = (function datahike$db$slice(var_args){
var args47361 = [];
var len__11440__auto___47376 = arguments.length;
var i__11441__auto___47377 = (0);
while(true){
if((i__11441__auto___47377 < len__11440__auto___47376)){
args47361.push((arguments[i__11441__auto___47377]));

var G__47378 = (i__11441__auto___47377 + (1));
i__11441__auto___47377 = G__47378;
continue;
} else {
}
break;
}

var G__47363 = args47361.length;
switch (G__47363) {
case 5:
return datahike.db.slice.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return datahike.db.slice.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47361.length)].join('')));

}
});

datahike.db.slice.cljs$core$IFn$_invoke$arity$5 = (function (btset,tree,datom,key,create_datom){
return datahike.db.slice.call(null,btset,tree,datom,key,datom,key,create_datom);
});

datahike.db.slice.cljs$core$IFn$_invoke$arity$7 = (function (btset,tree,datom,key,datom_to,key_to,create_datom){
var vec__47364 = key;
var a = cljs.core.nth.call(null,vec__47364,(0),null);
var b = cljs.core.nth.call(null,vec__47364,(1),null);
var c = cljs.core.nth.call(null,vec__47364,(2),null);
var d = cljs.core.nth.call(null,vec__47364,(3),null);
var vec__47367 = key_to;
var e = cljs.core.nth.call(null,vec__47367,(0),null);
var f = cljs.core.nth.call(null,vec__47367,(1),null);
var g = cljs.core.nth.call(null,vec__47367,(2),null);
var h = cljs.core.nth.call(null,vec__47367,(3),null);
var xf = cljs.core.comp.call(null,cljs.core.filter.call(null,((function (vec__47364,a,b,c,d,vec__47367,e,f,g,h){
return (function (kv){
var key__$1 = kv.key();
var vec__47370 = key__$1;
var i = cljs.core.nth.call(null,vec__47370,(0),null);
var j = cljs.core.nth.call(null,vec__47370,(1),null);
var k = cljs.core.nth.call(null,vec__47370,(2),null);
var l = cljs.core.nth.call(null,vec__47370,(3),null);
var new$ = !((cljs.core.truth_((function (){var and__10207__auto__ = e;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = f;
if(cljs.core.truth_(and__10207__auto____$1)){
var and__10207__auto____$2 = g;
if(cljs.core.truth_(and__10207__auto____$2)){
return h;
} else {
return and__10207__auto____$2;
}
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())?((hitchhiker.tree.core.compare.call(null,i,e) > (0))) || ((hitchhiker.tree.core.compare.call(null,j,f) > (0))) || ((hitchhiker.tree.core.compare.call(null,k,g) > (0))) || ((hitchhiker.tree.core.compare.call(null,l,h) > (0))):(cljs.core.truth_((function (){var and__10207__auto__ = e;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = f;
if(cljs.core.truth_(and__10207__auto____$1)){
return g;
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())?((hitchhiker.tree.core.compare.call(null,i,e) > (0))) || ((hitchhiker.tree.core.compare.call(null,j,f) > (0))) || ((hitchhiker.tree.core.compare.call(null,k,g) > (0))):(cljs.core.truth_((function (){var and__10207__auto__ = e;
if(cljs.core.truth_(and__10207__auto__)){
return f;
} else {
return and__10207__auto__;
}
})())?((hitchhiker.tree.core.compare.call(null,i,e) > (0))) || ((hitchhiker.tree.core.compare.call(null,j,f) > (0))):(cljs.core.truth_(e)?(hitchhiker.tree.core.compare.call(null,i,e) > (0)):false
)))));
return new$;
});})(vec__47364,a,b,c,d,vec__47367,e,f,g,h))
),cljs.core.map.call(null,((function (vec__47364,a,b,c,d,vec__47367,e,f,g,h){
return (function (kv){
var vec__47373 = kv.key();
var a__$1 = cljs.core.nth.call(null,vec__47373,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__47373,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__47373,(2),null);
var d__$1 = cljs.core.nth.call(null,vec__47373,(3),null);
return create_datom.call(null,a__$1,b__$1,c__$1,d__$1);
});})(vec__47364,a,b,c,d,vec__47367,e,f,g,h))
));
var new$ = cljs.core.seq.call(null,cljs.core.sequence.call(null,xf,hitchhiker.tree.messaging.lookup_fwd_iter.call(null,tree,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null))));
return new$;
});

datahike.db.slice.cljs$lang$maxFixedArity = 7;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.DB = (function (schema,eavt,eavt_durable,aevt,aevt_durable,avet,avet_durable,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.eavt_durable = eavt_durable;
this.aevt = aevt;
this.aevt_durable = aevt_durable;
this.avet = avet;
this.avet_durable = avet_durable;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47386,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47388 = k47386;
var G__47388__$1 = (((G__47388 instanceof cljs.core.Keyword))?G__47388.fqn:null);
switch (G__47388__$1) {
case "eavt-durable":
return self__.eavt_durable;

break;
case "schema":
return self__.schema;

break;
case "max-tx":
return self__.max_tx;

break;
case "hash":
return self__.hash;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "aevt-durable":
return self__.aevt_durable;

break;
case "eavt":
return self__.eavt;

break;
case "avet-durable":
return self__.avet_durable;

break;
case "rschema":
return self__.rschema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47386,else__10897__auto__);

}
});

datahike.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.DB{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),self__.eavt_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),self__.aevt_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),self__.avet_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datahike.db.DB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47385){
var self__ = this;
var G__47385__$1 = this;
return (new cljs.core.RecordIter((0),G__47385__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47385){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47389 = cljs.core.keyword_identical_QMARK_;
var expr__47390 = k__10902__auto__;
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__47390))){
return (new datahike.db.DB(G__47385,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__47390))){
return (new datahike.db.DB(self__.schema,G__47385,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,G__47385,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,G__47385,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,G__47385,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,G__47385,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,G__47385,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,G__47385,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,G__47385,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,G__47385,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47389.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__47390))){
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,G__47385,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47385),null));
}
}
}
}
}
}
}
}
}
}
}
});

datahike.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),self__.eavt_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),self__.aevt_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),self__.avet_durable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datahike.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47385){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.DB(self__.schema,self__.eavt,self__.eavt_durable,self__.aevt,self__.aevt_durable,self__.avet,self__.avet_durable,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__47385,self__.__extmap,self__.__hash));
});

datahike.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"eavt-durable","eavt-durable",1978495047,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"aevt-durable","aevt-durable",1956289141,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"avet-durable","avet-durable",-1581026983,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datahike.db.DB.cljs$lang$type = true;

datahike.db.DB.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/DB");
});

datahike.db.DB.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/DB");
});

datahike.db.__GT_DB = (function datahike$db$__GT_DB(schema,eavt,eavt_durable,aevt,aevt_durable,avet,avet_durable,max_eid,max_tx,rschema,hash){
return (new datahike.db.DB(schema,eavt,eavt_durable,aevt,aevt_durable,avet,avet_durable,max_eid,max_tx,rschema,hash,null,null,null));
});

datahike.db.map__GT_DB = (function datahike$db$map__GT_DB(G__47387){
return (new datahike.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__47387),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__47387),null,cljs.core.dissoc.call(null,G__47387,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)),null));
});


datahike.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datahike.db.pr_db.call(null,db__$1,w,opts);
});

datahike.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datahike.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datahike.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datahike.db.hash_db.call(null,db__$1);
});

datahike.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datahike.db.equiv_db.call(null,db__$1,other);
});

datahike.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datahike.db.empty_db.call(null,db__$1.schema);
});

datahike.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datahike.db.DB.prototype.datahike$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.datahike$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
var pat = datahike.db.components__GT_pattern.call(null,db__$1,index,cs);
var db__$2 = db__$1;
var vec__47392 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.eavt,db__$2.eavt_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.e,pat.a,pat.v,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (e,a,v,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.aevt,db__$2.aevt_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.a,pat.e,pat.v,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (a,e,v,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.avet,db__$2.avet_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.a,pat.v,pat.e,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (a,v,e,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null)], null).call(null,index);
var mem = cljs.core.nth.call(null,vec__47392,(0),null);
var dur = cljs.core.nth.call(null,vec__47392,(1),null);
var key = cljs.core.nth.call(null,vec__47392,(2),null);
var create_datom = cljs.core.nth.call(null,vec__47392,(3),null);
return datahike.db.slice.call(null,mem,dur,pat,key,create_datom);
});

datahike.db.DB.prototype.datahike$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
var pat = datahike.db.components__GT_pattern.call(null,db__$1,index,cs);
var db__$2 = db__$1;
var vec__47395 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.eavt,db__$2.eavt_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.e,pat.a,pat.v,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (e,a,v,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.aevt,db__$2.aevt_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.a,pat.e,pat.v,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (a,e,v,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db__$2.avet,db__$2.avet_durable,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pat.a,pat.v,pat.e,pat.tx], null),((function (pat,db__$2,db__$1){
return (function (a,v,e,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(pat,db__$2,db__$1))
], null)], null).call(null,index);
var mem = cljs.core.nth.call(null,vec__47395,(0),null);
var dur = cljs.core.nth.call(null,vec__47395,(1),null);
var key = cljs.core.nth.call(null,vec__47395,(2),null);
var create_datom = cljs.core.nth.call(null,vec__47395,(3),null);
return datahike.db.slice.call(null,mem,dur,pat,key,(new datahike.db.Datom(null,null,null,null,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null),create_datom);
});

datahike.db.DB.prototype.datahike$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_(datahike.db.indexing_QMARK_.call(null,db__$1,attr))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Attribute"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr))].join(''),"should be marked as :db/index true");
}

datahike.db.validate_attr.call(null,attr,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11153__auto__ = attr;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$1 = start;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$2 = end;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto____$2);
})(),x__11153__auto____$1);
})(),x__11153__auto__);
})(),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null)));

var db__$2 = db__$1;
var from = datahike.db.resolve_datom.call(null,db__$2,null,attr,start,null);
var to = datahike.db.resolve_datom.call(null,db__$2,null,attr,end,null);
return datahike.db.slice.call(null,db__$2.avet,db__$2.avet_durable,from,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [from.a,from.v,from.e,from.tx], null),to,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [to.a,to.v,to.e,to.tx], null),((function (db__$2,from,to,db__$1){
return (function (a,v,e,t){
return (new datahike.db.Datom(e,a,v,t,true));
});})(db__$2,from,to,db__$1))
);
});

datahike.db.DB.prototype.datahike$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.datahike$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datahike.db.DB.prototype.datahike$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datahike.db.DB.prototype.datahike$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.DB.prototype.datahike$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__47398 = pattern;
var e = cljs.core.nth.call(null,vec__47398,(0),null);
var a = cljs.core.nth.call(null,vec__47398,(1),null);
var v = cljs.core.nth.call(null,vec__47398,(2),null);
var tx = cljs.core.nth.call(null,vec__47398,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
var eavt_durable = db__$1.eavt_durable;
var aevt_durable = db__$1.aevt_durable;
var avet_durable = db__$1.avet_durable;
var create_eavt = ((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,db__$1){
return (function (e__$1,a__$1,v__$1,tx__$1){
return (new datahike.db.Datom(e__$1,a__$1,v__$1,tx__$1,true));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,db__$1))
;
var create_aevt = ((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,db__$1){
return (function (a__$1,e__$1,v__$1,tx__$1){
return (new datahike.db.Datom(e__$1,a__$1,v__$1,tx__$1,true));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,db__$1))
;
var create_avet = ((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,db__$1){
return (function (a__$1,v__$1,e__$1,tx__$1){
return (new datahike.db.Datom(e__$1,a__$1,v__$1,tx__$1,true));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,db__$1))
;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
return datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,a,v,tx,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v,tx], null),create_eavt);
} else {
return datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,a,v,null,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),create_eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,a,null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null),create_eavt));
} else {
return datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,a,null,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null),create_eavt);
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,null,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),create_eavt));
} else {
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,null,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),create_eavt));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,null,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),create_eavt));
} else {
return datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(e,null,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),create_eavt);
}
}
}
} else {
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_(datahike.db.indexing_QMARK_.call(null,db__$1,a))){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,avet,avet_durable,(new datahike.db.Datom(null,a,v,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),create_avet));
} else {
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,aevt,aevt_durable,(new datahike.db.Datom(null,a,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),create_aevt));
}
} else {
if(cljs.core.truth_(datahike.db.indexing_QMARK_.call(null,db__$1,a))){
return datahike.db.slice.call(null,avet,avet_durable,(new datahike.db.Datom(null,a,v,null,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),create_avet);
} else {
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,aevt,aevt_durable,(new datahike.db.Datom(null,a,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),create_aevt));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,datahike.db.slice.call(null,aevt,aevt_durable,(new datahike.db.Datom(null,a,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),create_aevt));
} else {
return datahike.db.slice.call(null,aevt,aevt_durable,(new datahike.db.Datom(null,a,null,null,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),create_aevt);
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,cljs.core.map.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (p1__47380_SHARP_){
return cljs.core.apply.call(null,create_eavt,cljs.core.first.call(null,p1__47380_SHARP_));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,hitchhiker.tree.core.lookup_fwd_iter.call(null,eavt_durable,cljs.core.PersistentVector.EMPTY)));
} else {
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,cljs.core.map.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (p1__47381_SHARP_){
return cljs.core.apply.call(null,create_eavt,cljs.core.first.call(null,p1__47381_SHARP_));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,hitchhiker.tree.core.lookup_fwd_iter.call(null,eavt_durable,cljs.core.PersistentVector.EMPTY)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,cljs.core.map.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (p1__47382_SHARP_){
return cljs.core.apply.call(null,create_eavt,cljs.core.first.call(null,p1__47382_SHARP_));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,hitchhiker.tree.core.lookup_fwd_iter.call(null,eavt_durable,cljs.core.PersistentVector.EMPTY)));
} else {
return cljs.core.map.call(null,((function (vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1){
return (function (p1__47383_SHARP_){
return cljs.core.apply.call(null,create_eavt,cljs.core.first.call(null,p1__47383_SHARP_));
});})(vec__47398,e,a,v,tx,eavt,aevt,avet,eavt_durable,aevt_durable,avet_durable,create_eavt,create_aevt,create_avet,db__$1))
,hitchhiker.tree.core.lookup_fwd_iter.call(null,eavt_durable,cljs.core.PersistentVector.EMPTY));
}
}
}
}
});
datahike.db.db_QMARK_ = (function datahike$db$db_QMARK_(x){
var and__10207__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datahike$db$ISearch$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.db.ISearch,x));
if(and__10207__auto__){
var and__10207__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datahike$db$IIndexAccess$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IIndexAccess,x));
if(and__10207__auto____$1){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datahike$db$IDB$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datahike.db.IDB,x);
}
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47416,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47418 = k47416;
var G__47418__$1 = (((G__47418 instanceof cljs.core.Keyword))?G__47418.fqn:null);
switch (G__47418__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47416,else__10897__auto__);

}
});

datahike.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.FilteredDB{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datahike.db.FilteredDB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47415){
var self__ = this;
var G__47415__$1 = this;
return (new cljs.core.RecordIter((0),G__47415__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47415){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47419 = cljs.core.keyword_identical_QMARK_;
var expr__47420 = k__10902__auto__;
if(cljs.core.truth_(pred__47419.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__47420))){
return (new datahike.db.FilteredDB(G__47415,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47419.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__47420))){
return (new datahike.db.FilteredDB(self__.unfiltered_db,G__47415,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47419.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__47420))){
return (new datahike.db.FilteredDB(self__.unfiltered_db,self__.pred,G__47415,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47415),null));
}
}
}
});

datahike.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datahike.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47415){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__47415,self__.__extmap,self__.__hash));
});

datahike.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datahike.db.FilteredDB.cljs$lang$type = true;

datahike.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/FilteredDB");
});

datahike.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/FilteredDB");
});

datahike.db.__GT_FilteredDB = (function datahike$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datahike.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

datahike.db.map__GT_FilteredDB = (function datahike$db$map__GT_FilteredDB(G__47417){
return (new datahike.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__47417),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__47417),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__47417),null,cljs.core.dissoc.call(null,G__47417,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)),null));
});


datahike.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datahike.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datahike.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datahike.db.pr_db.call(null,db__$1,w,opts);
});

datahike.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datahike.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datahike.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datahike.db.hash_fdb.call(null,db__$1);
});

datahike.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datahike.db.equiv_db.call(null,db__$1,other);
});

datahike.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datahike.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datahike.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datahike.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datahike.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datahike.db.FilteredDB.prototype.datahike$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.datahike$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datahike.db._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datahike.db.FilteredDB.prototype.datahike$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datahike.db._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datahike.db.FilteredDB.prototype.datahike$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datahike.db._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datahike.db.FilteredDB.prototype.datahike$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.datahike$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datahike.db._schema.call(null,db__$1.unfiltered_db);
});

datahike.db.FilteredDB.prototype.datahike$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datahike.db._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datahike.db.FilteredDB.prototype.datahike$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.FilteredDB.prototype.datahike$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datahike.db._search.call(null,db__$1.unfiltered_db,pattern));
});
datahike.db.attr__GT_properties = (function datahike$db$attr__GT_properties(k,v){
var G__47425 = v;
var G__47425__$1 = (((G__47425 instanceof cljs.core.Keyword))?G__47425.fqn:null);
switch (G__47425__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
if(v === true){
var G__47426 = k;
var G__47426__$1 = (((G__47426 instanceof cljs.core.Keyword))?G__47426.fqn:null);
switch (G__47426__$1) {
case "db/isComponent":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);

break;
case "db/index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
} else {
return null;
}

}
});
datahike.db.rschema = (function datahike$db$rschema(schema){
return cljs.core.reduce_kv.call(null,(function (m,attr,keys__GT_values){
return cljs.core.reduce_kv.call(null,(function (m__$1,key,value){
return cljs.core.reduce.call(null,(function (m__$2,prop){
return cljs.core.assoc.call(null,m__$2,prop,cljs.core.conj.call(null,cljs.core.get.call(null,m__$2,prop,cljs.core.PersistentHashSet.EMPTY),attr));
}),m__$1,datahike.db.attr__GT_properties.call(null,key,value));
}),m,keys__GT_values);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
});
datahike.db.validate_schema_key = (function datahike$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])]))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datahike.db.validate_schema = (function datahike$db$validate_schema(schema){
var seq__47439_47449 = cljs.core.seq.call(null,schema);
var chunk__47440_47450 = null;
var count__47441_47451 = (0);
var i__47442_47452 = (0);
while(true){
if((i__47442_47452 < count__47441_47451)){
var vec__47443_47453 = cljs.core._nth.call(null,chunk__47440_47450,i__47442_47452);
var a_47454 = cljs.core.nth.call(null,vec__47443_47453,(0),null);
var kv_47455 = cljs.core.nth.call(null,vec__47443_47453,(1),null);
var comp_QMARK__47456 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_47455,false);
datahike.db.validate_schema_key.call(null,a_47454,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_47455),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__10207__auto__ = comp_QMARK__47456;
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_47455),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__10207__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_47454),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_47454,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datahike.db.validate_schema_key.call(null,a_47454,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_47455),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datahike.db.validate_schema_key.call(null,a_47454,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_47455),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datahike.db.validate_schema_key.call(null,a_47454,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_47455),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__47457 = seq__47439_47449;
var G__47458 = chunk__47440_47450;
var G__47459 = count__47441_47451;
var G__47460 = (i__47442_47452 + (1));
seq__47439_47449 = G__47457;
chunk__47440_47450 = G__47458;
count__47441_47451 = G__47459;
i__47442_47452 = G__47460;
continue;
} else {
var temp__6738__auto___47461 = cljs.core.seq.call(null,seq__47439_47449);
if(temp__6738__auto___47461){
var seq__47439_47462__$1 = temp__6738__auto___47461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47439_47462__$1)){
var c__11130__auto___47463 = cljs.core.chunk_first.call(null,seq__47439_47462__$1);
var G__47464 = cljs.core.chunk_rest.call(null,seq__47439_47462__$1);
var G__47465 = c__11130__auto___47463;
var G__47466 = cljs.core.count.call(null,c__11130__auto___47463);
var G__47467 = (0);
seq__47439_47449 = G__47464;
chunk__47440_47450 = G__47465;
count__47441_47451 = G__47466;
i__47442_47452 = G__47467;
continue;
} else {
var vec__47446_47468 = cljs.core.first.call(null,seq__47439_47462__$1);
var a_47469 = cljs.core.nth.call(null,vec__47446_47468,(0),null);
var kv_47470 = cljs.core.nth.call(null,vec__47446_47468,(1),null);
var comp_QMARK__47471 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_47470,false);
datahike.db.validate_schema_key.call(null,a_47469,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_47470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__10207__auto__ = comp_QMARK__47471;
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_47470),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__10207__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_47469),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_47469,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datahike.db.validate_schema_key.call(null,a_47469,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_47470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datahike.db.validate_schema_key.call(null,a_47469,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_47470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datahike.db.validate_schema_key.call(null,a_47469,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_47470),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__47472 = cljs.core.next.call(null,seq__47439_47462__$1);
var G__47473 = null;
var G__47474 = (0);
var G__47475 = (0);
seq__47439_47449 = G__47472;
chunk__47440_47450 = G__47473;
count__47441_47451 = G__47474;
i__47442_47452 = G__47475;
continue;
}
} else {
}
}
break;
}

return schema;
});
datahike.db.br = (300);
datahike.db.br_sqrt = cljs.core.long$.call(null,Math.sqrt(datahike.db.br));
datahike.db.empty_db = (function datahike$db$empty_db(var_args){
var args47476 = [];
var len__11440__auto___47479 = arguments.length;
var i__11441__auto___47480 = (0);
while(true){
if((i__11441__auto___47480 < len__11440__auto___47479)){
args47476.push((arguments[i__11441__auto___47480]));

var G__47481 = (i__11441__auto___47480 + (1));
i__11441__auto___47480 = G__47481;
continue;
} else {
}
break;
}

var G__47478 = args47476.length;
switch (G__47478) {
case 0:
return datahike.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datahike.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47476.length)].join('')));

}
});

datahike.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datahike.db.empty_db.call(null,datahike.db.default_schema);
});

datahike.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return datahike.db.map__GT_DB.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)],[datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.core.b_tree.call(null,hitchhiker.tree.core.__GT_Config.call(null,datahike.db.br_sqrt,datahike.db.br,(datahike.db.br - datahike.db.br_sqrt)))),datahike.db.validate_schema.call(null,schema),datahike.db.tx0,cljs.core.atom.call(null,(0)),datahike.btset.btset_by.call(null,datahike.db.cmp_datoms_aevt),datahike.btset.btset_by.call(null,datahike.db.cmp_datoms_avet),(0),datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.core.b_tree.call(null,hitchhiker.tree.core.__GT_Config.call(null,datahike.db.br_sqrt,datahike.db.br,(datahike.db.br - datahike.db.br_sqrt)))),datahike.btset.btset_by.call(null,datahike.db.cmp_datoms_eavt),datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.core.b_tree.call(null,hitchhiker.tree.core.__GT_Config.call(null,datahike.db.br_sqrt,datahike.db.br,(datahike.db.br - datahike.db.br_sqrt)))),datahike.db.rschema.call(null,schema)]));
});

datahike.db.empty_db.cljs$lang$maxFixedArity = 1;

datahike.db.init_max_eid = (function datahike$db$init_max_eid(eavt,eavt_durable){
var temp__6736__auto__ = cljs.core.vec.call(null,datahike.db.slice.call(null,eavt,eavt_durable,(new datahike.db.Datom(null,null,null,null,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null], null),(new datahike.db.Datom((datahike.db.tx0 - (1)),null,null,null,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(datahike.db.tx0 - (1)),null,null,null], null),(function (e,a,v,t){
return (new datahike.db.Datom(e,a,v,t,true));
})));
if(cljs.core.truth_(temp__6736__auto__)){
var slice = temp__6736__auto__;
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.rseq.call(null,slice)));
} else {
return (0);
}
});
datahike.db.init_db = (function datahike$db$init_db(var_args){
var args47483 = [];
var len__11440__auto___47492 = arguments.length;
var i__11441__auto___47493 = (0);
while(true){
if((i__11441__auto___47493 < len__11440__auto___47492)){
args47483.push((arguments[i__11441__auto___47493]));

var G__47494 = (i__11441__auto___47493 + (1));
i__11441__auto___47493 = G__47494;
continue;
} else {
}
break;
}

var G__47488 = args47483.length;
switch (G__47488) {
case 1:
return datahike.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__11463__auto__ = (new cljs.core.IndexedSeq(args47483.slice((2)),(0),null));
return datahike.db.init_db.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11463__auto__);

}
});

datahike.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datahike.db.init_db.call(null,datoms,datahike.db.default_schema);
});

datahike.db.init_db.cljs$core$IFn$_invoke$arity$variadic = (function (datoms,schema,p__47489){
var map__47490 = p__47489;
var map__47490__$1 = ((((!((map__47490 == null)))?((((map__47490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47490):map__47490);
var options = map__47490__$1;
var validate_QMARK_ = cljs.core.get.call(null,map__47490__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962),true);
if(cljs.core.empty_QMARK_.call(null,datoms)){
return datahike.db.empty_db.call(null,schema);
} else {
var _ = (cljs.core.truth_(validate_QMARK_)?datahike.db.validate_schema.call(null,schema):null);
var rschema = datahike.db.rschema.call(null,schema);
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = ((cljs.core.array_QMARK_.call(null,datoms))?datoms:datahike.arrays.into_array.call(null,datoms));
var eavt = datahike.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datahike.db.cmp_datoms_eavt_quick),datahike.db.cmp_datoms_eavt);
var aevt = datahike.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datahike.db.cmp_datoms_aevt_quick),datahike.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt,map__47490,map__47490__$1,options,validate_QMARK_){
return (function (arr,d){
if(cljs.core.contains_QMARK_.call(null,indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt,map__47490,map__47490__$1,options,validate_QMARK_))
,[],datoms).sort(datahike.db.cmp_datoms_avet_quick);
var avet = datahike.btset._btset_from_sorted_arr.call(null,avet_datoms,datahike.db.cmp_datoms_avet);
var max_eid = datahike.db.init_max_eid.call(null,eavt);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid,map__47490,map__47490__$1,options,validate_QMARK_){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid,map__47490,map__47490__$1,options,validate_QMARK_))
),cljs.core.max,datahike.db.tx0,eavt);
return datahike.db.map__GT_DB.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)],[datahike.db.eavt_durable,schema,max_tx,cljs.core.atom.call(null,(0)),aevt,avet,max_eid,datahike.db.aevt_durable,eavt,datahike.db.avet_durable,rschema]));
}
});

datahike.db.init_db.cljs$lang$applyTo = (function (seq47484){
var G__47485 = cljs.core.first.call(null,seq47484);
var seq47484__$1 = cljs.core.next.call(null,seq47484);
var G__47486 = cljs.core.first.call(null,seq47484__$1);
var seq47484__$2 = cljs.core.next.call(null,seq47484__$1);
return datahike.db.init_db.cljs$core$IFn$_invoke$arity$variadic(G__47485,G__47486,seq47484__$2);
});

datahike.db.init_db.cljs$lang$maxFixedArity = (2);

datahike.db.equiv_db_index = (function datahike$db$equiv_db_index(x,y){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__47496 = cljs.core.next.call(null,xs);
var G__47497 = cljs.core.next.call(null,ys);
xs = G__47496;
ys = G__47497;
continue;
} else {
return false;

}
}
break;
}
});
datahike.db.hash_db = (function datahike$db$hash_db(db){
var h = cljs.core.deref.call(null,db.hash);
if((h === (0))){
return cljs.core.reset_BANG_.call(null,db.hash,datahike.db.combine_hashes.call(null,cljs.core.hash.call(null,db.schema),cljs.core.hash.call(null,db.eavt)));
} else {
return h;
}
});
datahike.db.hash_fdb = (function datahike$db$hash_fdb(db){
var h = cljs.core.deref.call(null,db.hash);
var datoms = (function (){var or__10219__auto__ = datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__10219__auto__ = datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_.call(null,db.hash,datahike.db.combine_hashes.call(null,cljs.core.hash.call(null,datahike.db._schema.call(null,db)),cljs.core.hash_unordered_coll.call(null,datoms__$1)));
} else {
return h;
}
});
datahike.db.equiv_db = (function datahike$db$equiv_db(db,other){
var and__10207__auto__ = ((other instanceof datahike.db.DB)) || ((other instanceof datahike.db.FilteredDB));
if(and__10207__auto__){
var and__10207__auto____$1 = cljs.core._EQ_.call(null,datahike.db._schema.call(null,db),datahike.db._schema.call(null,other));
if(and__10207__auto____$1){
return datahike.db.equiv_db_index.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datahike.db._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
});
datahike.db.pr_db = (function datahike$db$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datahike/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datahike.db._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datahike.db.db_from_reader = (function datahike$db$db_from_reader(p__47498){
var map__47505 = p__47498;
var map__47505__$1 = ((((!((map__47505 == null)))?((((map__47505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47505.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47505):map__47505);
var schema = cljs.core.get.call(null,map__47505__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__47505__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datahike.db.init_db.call(null,cljs.core.map.call(null,((function (map__47505,map__47505__$1,schema,datoms){
return (function (p__47507){
var vec__47508 = p__47507;
var e = cljs.core.nth.call(null,vec__47508,(0),null);
var a = cljs.core.nth.call(null,vec__47508,(1),null);
var v = cljs.core.nth.call(null,vec__47508,(2),null);
var tx = cljs.core.nth.call(null,vec__47508,(3),null);
return (new datahike.db.Datom(e,a,v,tx,true));
});})(map__47505,map__47505__$1,schema,datoms))
,datoms),schema);
});
datahike.db.entid_strict = (function datahike$db$entid_strict(db,eid){
return null;
});
datahike.db.entid_some = (function datahike$db$entid_some(db,eid){
return null;
});
datahike.db.ref_QMARK_ = (function datahike$db$ref_QMARK_(db,attr){
return null;
});
datahike.db.resolve_datom = (function datahike$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
datahike.db.validate_attr.call(null,a,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11153__auto__ = e;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$1 = a;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$2 = v;
return cljs.core._conj.call(null,(function (){var x__11153__auto____$3 = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11153__auto____$3);
})(),x__11153__auto____$2);
})(),x__11153__auto____$1);
})(),x__11153__auto__);
})(),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null)));
} else {
}

return (new datahike.db.Datom(datahike.db.entid_some.call(null,db,e),a,(cljs.core.truth_((function (){var and__10207__auto__ = !((v == null));
if(and__10207__auto__){
return datahike.db.ref_QMARK_.call(null,db,a);
} else {
return and__10207__auto__;
}
})())?datahike.db.entid_strict.call(null,db,v):v),datahike.db.entid_some.call(null,db,t),null));
});
datahike.db.components__GT_pattern = (function datahike$db$components__GT_pattern(db,index,p__47511){
var vec__47516 = p__47511;
var c0 = cljs.core.nth.call(null,vec__47516,(0),null);
var c1 = cljs.core.nth.call(null,vec__47516,(1),null);
var c2 = cljs.core.nth.call(null,vec__47516,(2),null);
var c3 = cljs.core.nth.call(null,vec__47516,(3),null);
var G__47519 = index;
var G__47519__$1 = (((G__47519 instanceof cljs.core.Keyword))?G__47519.fqn:null);
switch (G__47519__$1) {
case "eavt":
return datahike.db.resolve_datom.call(null,db,c0,c1,c2,c3);

break;
case "aevt":
return datahike.db.resolve_datom.call(null,db,c1,c0,c2,c3);

break;
case "avet":
return datahike.db.resolve_datom.call(null,db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datahike.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k47522,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__47524 = k47522;
var G__47524__$1 = (((G__47524 instanceof cljs.core.Keyword))?G__47524.fqn:null);
switch (G__47524__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k47522,else__10897__auto__);

}
});

datahike.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.db.TxReport{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datahike.db.TxReport.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47521){
var self__ = this;
var G__47521__$1 = this;
return (new cljs.core.RecordIter((0),G__47521__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datahike.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
var self__ = this;
var this__10889__auto____$1 = this;
var h__10661__auto__ = self__.__hash;
if(!((h__10661__auto__ == null))){
return h__10661__auto__;
} else {
var h__10661__auto____$1 = cljs.core.hash_imap.call(null,this__10889__auto____$1);
self__.__hash = h__10661__auto____$1;

return h__10661__auto____$1;
}
});

datahike.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
var self__ = this;
var this__10890__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10207__auto__ = other__10891__auto__;
if(cljs.core.truth_(and__10207__auto__)){
return ((this__10890__auto____$1.constructor === other__10891__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__10890__auto____$1,other__10891__auto__));
} else {
return and__10207__auto__;
}
})())){
return true;
} else {
return false;
}
});

datahike.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__47521){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__47525 = cljs.core.keyword_identical_QMARK_;
var expr__47526 = k__10902__auto__;
if(cljs.core.truth_(pred__47525.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__47526))){
return (new datahike.db.TxReport(G__47521,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47525.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__47526))){
return (new datahike.db.TxReport(self__.db_before,G__47521,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47525.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__47526))){
return (new datahike.db.TxReport(self__.db_before,self__.db_after,G__47521,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47525.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__47526))){
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__47521,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__47525.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__47526))){
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__47521,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__47521),null));
}
}
}
}
}
});

datahike.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datahike.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__47521){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__47521,self__.__extmap,self__.__hash));
});

datahike.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datahike.db.TxReport.cljs$lang$type = true;

datahike.db.TxReport.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.db/TxReport");
});

datahike.db.TxReport.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.db/TxReport");
});

datahike.db.__GT_TxReport = (function datahike$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datahike.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datahike.db.map__GT_TxReport = (function datahike$db$map__GT_TxReport(G__47523){
return (new datahike.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__47523),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__47523),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__47523),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__47523),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__47523),null,cljs.core.dissoc.call(null,G__47523,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datahike.db.is_attr_QMARK_ = (function datahike$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datahike.db._attrs_by.call(null,db,property),attr);
});
datahike.db.multival_QMARK_ = (function datahike$db$multival_QMARK_(db,attr){
return datahike.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datahike.db.ref_QMARK_ = (function datahike$db$ref_QMARK_(db,attr){
return datahike.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datahike.db.component_QMARK_ = (function datahike$db$component_QMARK_(db,attr){
return datahike.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datahike.db.indexing_QMARK_ = (function datahike$db$indexing_QMARK_(db,attr){
return datahike.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datahike.db.entid = (function datahike$db$entid(db,eid){
while(true){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref should contain 2 elements: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if(!(datahike.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,eid),new cljs.core.Keyword("db","unique","db/unique",329396388)))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.first.call(null,eid))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("You must have :db/ident marked as :db/unique in your schema to use keyword refs")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","db-ident","lookup-ref/db-ident",-1906814521),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref attribute should be marked as :db/unique: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
} else {
if((cljs.core.second.call(null,eid) == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_.call(null,eid)){
var G__47529 = db;
var G__47530 = cljs.core.array_seq.call(null,eid);
db = G__47529;
eid = G__47530;
continue;
} else {
if((eid instanceof cljs.core.Keyword)){
var G__47531 = db;
var G__47532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),eid], null);
db = G__47531;
eid = G__47532;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for entity id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
}
}
break;
}
});
datahike.db.entid_strict = (function datahike$db$entid_strict(db,eid){
var or__10219__auto__ = datahike.db.entid.call(null,db,eid);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Nothing found for entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datahike.db.entid_some = (function datahike$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datahike.db.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datahike.db.validate_datom = (function datahike$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__10207__auto__ = datom.added;
if(cljs.core.truth_(and__10207__auto__)){
return datahike.db.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__10207__auto__;
}
})())){
var temp__6738__auto__ = cljs.core.not_empty.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6738__auto__)){
var found = temp__6738__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot add "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" because of unique constraint: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,found))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
} else {
return null;
}
} else {
return null;
}
});
datahike.db.validate_eid = (function datahike$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datahike.db.validate_attr = (function datahike$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datahike.db.validate_val = (function datahike$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot store nil as a value at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datahike.db.current_tx = (function datahike$db$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datahike.db.next_eid = (function datahike$db$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datahike.db.tx_id_QMARK_ = (function datahike$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datahike.db.advance_max_eid = (function datahike$db$advance_max_eid(db,eid){
var G__47534 = db;
if(((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datahike.db.tx0))){
return cljs.core.assoc.call(null,G__47534,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__47534;
}
});
datahike.db.allocate_eid = (function datahike$db$allocate_eid(var_args){
var args47535 = [];
var len__11440__auto___47539 = arguments.length;
var i__11441__auto___47540 = (0);
while(true){
if((i__11441__auto___47540 < len__11440__auto___47539)){
args47535.push((arguments[i__11441__auto___47540]));

var G__47541 = (i__11441__auto___47540 + (1));
i__11441__auto___47540 = G__47541;
continue;
} else {
}
break;
}

var G__47537 = args47535.length;
switch (G__47537) {
case 2:
return datahike.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47535.length)].join('')));

}
});

datahike.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datahike.db.advance_max_eid,eid);
});

datahike.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__47538 = report;
var G__47538__$1 = ((datahike.db.neg_number_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__47538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__47538);
var G__47538__$2 = ((datahike.db.tx_id_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__47538__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__47538__$1);
return cljs.core.update_in.call(null,G__47538__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datahike.db.advance_max_eid,eid);

});

datahike.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datahike.db.with_datom = (function datahike$db$with_datom(db,datom){
datahike.db.validate_datom.call(null,db,datom);

var indexing_QMARK_ = datahike.db.indexing_QMARK_.call(null,db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__47551 = db;
var G__47551__$1 = cljs.core.update_in.call(null,G__47551,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520)], null),((function (G__47551,indexing_QMARK_){
return (function (p1__47543_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.insert.call(null,p1__47543_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v,datom.tx], null),null));
});})(G__47551,indexing_QMARK_))
)
;
var G__47551__$2 = cljs.core.update_in.call(null,G__47551__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datahike.btset.btset_conj,datom,datahike.db.cmp_datoms_eavt_quick)
;
var G__47551__$3 = cljs.core.update_in.call(null,G__47551__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datahike.btset.btset_conj,datom,datahike.db.cmp_datoms_aevt_quick)
;
var G__47551__$4 = cljs.core.update_in.call(null,G__47551__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614)], null),((function (G__47551,G__47551__$1,G__47551__$2,G__47551__$3,indexing_QMARK_){
return (function (p1__47544_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.insert.call(null,p1__47544_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.e,datom.v,datom.tx], null),null));
});})(G__47551,G__47551__$1,G__47551__$2,G__47551__$3,indexing_QMARK_))
)
;
var G__47551__$5 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__47551__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datahike.btset.btset_conj,datom,datahike.db.cmp_datoms_avet_quick):G__47551__$4);
var G__47551__$6 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__47551__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786)], null),((function (G__47551,G__47551__$1,G__47551__$2,G__47551__$3,G__47551__$4,G__47551__$5,indexing_QMARK_){
return (function (p1__47545_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.insert.call(null,p1__47545_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v,datom.e,datom.tx], null),null));
});})(G__47551,G__47551__$1,G__47551__$2,G__47551__$3,G__47551__$4,G__47551__$5,indexing_QMARK_))
):G__47551__$5);
var G__47551__$7 = datahike.db.advance_max_eid.call(null,G__47551__$6,datom.e)
;
return cljs.core.assoc.call(null,G__47551__$7,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

} else {
var temp__6736__auto__ = cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var removing = temp__6736__auto__;
var G__47552 = db;
var G__47552__$1 = cljs.core.update_in.call(null,G__47552,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt-durable","eavt-durable",337963520)], null),((function (G__47552,removing,temp__6736__auto__,indexing_QMARK_){
return (function (p1__47546_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.delete$.call(null,p1__47546_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [removing.e,removing.a,removing.v,removing.tx], null)));
});})(G__47552,removing,temp__6736__auto__,indexing_QMARK_))
)
;
var G__47552__$2 = cljs.core.update_in.call(null,G__47552__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datahike.btset.btset_disj,removing,datahike.db.cmp_datoms_eavt_quick)
;
var G__47552__$3 = cljs.core.update_in.call(null,G__47552__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datahike.btset.btset_disj,removing,datahike.db.cmp_datoms_aevt_quick)
;
var G__47552__$4 = cljs.core.update_in.call(null,G__47552__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt-durable","aevt-durable",315757614)], null),((function (G__47552,G__47552__$1,G__47552__$2,G__47552__$3,removing,temp__6736__auto__,indexing_QMARK_){
return (function (p1__47547_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.delete$.call(null,p1__47547_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [removing.a,removing.e,removing.v,removing.tx], null)));
});})(G__47552,G__47552__$1,G__47552__$2,G__47552__$3,removing,temp__6736__auto__,indexing_QMARK_))
)
;
var G__47552__$5 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__47552__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datahike.btset.btset_disj,removing,datahike.db.cmp_datoms_avet_quick):G__47552__$4);
var G__47552__$6 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__47552__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet-durable","avet-durable",1073408786)], null),((function (G__47552,G__47552__$1,G__47552__$2,G__47552__$3,G__47552__$4,G__47552__$5,removing,temp__6736__auto__,indexing_QMARK_){
return (function (p1__47548_SHARP_){
return datahike.db._LT__QMARK__QMARK_.call(null,hitchhiker.tree.messaging.delete$.call(null,p1__47548_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [removing.a,removing.v,removing.e,removing.tx], null)));
});})(G__47552,G__47552__$1,G__47552__$2,G__47552__$3,G__47552__$4,G__47552__$5,removing,temp__6736__auto__,indexing_QMARK_))
):G__47552__$5);
return cljs.core.assoc.call(null,G__47552__$6,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

} else {
return db;
}
}
});
datahike.db.transact_report = (function datahike$db$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datahike.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datahike.db.reverse_ref_QMARK_ = (function datahike$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datahike.db.reverse_ref = (function datahike$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datahike.db.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__47556 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__47556,(0),null);
var ns = cljs.core.nth.call(null,vec__47556,(1),null);
var name = cljs.core.nth.call(null,vec__47556,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datahike.db.check_upsert_conflict = (function datahike$db$check_upsert_conflict(entity,acc){
var vec__47562 = acc;
var e = cljs.core.nth.call(null,vec__47562,(0),null);
var a = cljs.core.nth.call(null,vec__47562,(1),null);
var v = cljs.core.nth.call(null,vec__47562,(2),null);
var _e = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(((_e == null)) || ((_e < (0))) || ((acc == null)) || ((_e === e))){
return acc;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but entity already has :db/id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,_e))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),acc], null));
}
});
datahike.db.upsert_eid = (function datahike$db$upsert_eid(db,entity){
var temp__6738__auto__ = cljs.core.not_empty.call(null,datahike.db._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if(cljs.core.truth_(temp__6738__auto__)){
var idents = temp__6738__auto__;
return cljs.core.first.call(null,datahike.db.check_upsert_conflict.call(null,entity,cljs.core.reduce_kv.call(null,((function (idents,temp__6738__auto__){
return (function (acc,a,v){
if(cljs.core.contains_QMARK_.call(null,idents,a)){
var temp__6736__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if(cljs.core.truth_(temp__6736__auto__)){
var e = temp__6736__auto__;
if((acc == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,acc,(0)),e)){
return acc;
} else {
var vec__47568 = acc;
var _e = cljs.core.nth.call(null,vec__47568,(0),null);
var _a = cljs.core.nth.call(null,vec__47568,(1),null);
var _v = cljs.core.nth.call(null,vec__47568,(2),null);
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upserts: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,_e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
} else {
return acc;
}
} else {
return acc;
}
});})(idents,temp__6738__auto__))
,null,entity)));
} else {
return null;
}
});
datahike.db.maybe_wrap_multival = (function datahike$db$maybe_wrap_multival(db,a,vs){
if(!((datahike.db.reverse_ref_QMARK_.call(null,a)) || (datahike.db.multival_QMARK_.call(null,db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(!((datahike.arrays.array_QMARK_.call(null,vs)) || ((cljs.core.coll_QMARK_.call(null,vs)) && (!(cljs.core.map_QMARK_.call(null,vs)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datahike.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datahike.db.explode = (function datahike$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__11081__auto__ = ((function (eid){
return (function datahike$db$explode_$_iter__47583(s__47584){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__47584__$1 = s__47584;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__47584__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var vec__47592 = cljs.core.first.call(null,xs__7294__auto__);
var a = cljs.core.nth.call(null,vec__47592,(0),null);
var vs = cljs.core.nth.call(null,vec__47592,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datahike.db.validate_attr.call(null,a,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs]));
var reverse_QMARK_ = datahike.db.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datahike.db.reverse_ref.call(null,a):a);
var ___$1 = (((reverse_QMARK_) && (!(datahike.db.ref_QMARK_.call(null,db,straight_a))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs])], null))})():null);
var iterys__11077__auto__ = ((function (s__47584__$1,_,reverse_QMARK_,straight_a,___$1,vec__47592,a,vs,xs__7294__auto__,temp__6738__auto__,eid){
return (function datahike$db$explode_$_iter__47583_$_iter__47585(s__47586){
return (new cljs.core.LazySeq(null,((function (s__47584__$1,_,reverse_QMARK_,straight_a,___$1,vec__47592,a,vs,xs__7294__auto__,temp__6738__auto__,eid){
return (function (){
var s__47586__$1 = s__47586;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__47586__$1);
if(temp__6738__auto____$1){
var s__47586__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47586__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__47586__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__47588 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__47587 = (0);
while(true){
if((i__47587 < size__11080__auto__)){
var v = cljs.core._nth.call(null,c__11079__auto__,i__47587);
cljs.core.chunk_append.call(null,b__47588,(((datahike.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datahike.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__47595 = (i__47587 + (1));
i__47587 = G__47595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47588),datahike$db$explode_$_iter__47583_$_iter__47585.call(null,cljs.core.chunk_rest.call(null,s__47586__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47588),null);
}
} else {
var v = cljs.core.first.call(null,s__47586__$2);
return cljs.core.cons.call(null,(((datahike.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datahike.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datahike$db$explode_$_iter__47583_$_iter__47585.call(null,cljs.core.rest.call(null,s__47586__$2)));
}
} else {
return null;
}
break;
}
});})(s__47584__$1,_,reverse_QMARK_,straight_a,___$1,vec__47592,a,vs,xs__7294__auto__,temp__6738__auto__,eid))
,null,null));
});})(s__47584__$1,_,reverse_QMARK_,straight_a,___$1,vec__47592,a,vs,xs__7294__auto__,temp__6738__auto__,eid))
;
var fs__11078__auto__ = cljs.core.seq.call(null,iterys__11077__auto__.call(null,datahike.db.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__11078__auto__){
return cljs.core.concat.call(null,fs__11078__auto__,datahike$db$explode_$_iter__47583.call(null,cljs.core.rest.call(null,s__47584__$1)));
} else {
var G__47596 = cljs.core.rest.call(null,s__47584__$1);
s__47584__$1 = G__47596;
continue;
}
} else {
var G__47597 = cljs.core.rest.call(null,s__47584__$1);
s__47584__$1 = G__47597;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__11081__auto__.call(null,entity);
});
datahike.db.transact_add = (function datahike$db$transact_add(report,p__47598){
var vec__47602 = p__47598;
var _ = cljs.core.nth.call(null,vec__47602,(0),null);
var e = cljs.core.nth.call(null,vec__47602,(1),null);
var a = cljs.core.nth.call(null,vec__47602,(2),null);
var v = cljs.core.nth.call(null,vec__47602,(3),null);
var tx = cljs.core.nth.call(null,vec__47602,(4),null);
var ent = vec__47602;
datahike.db.validate_attr.call(null,a,ent);

datahike.db.validate_val.call(null,v,ent);

var tx__$1 = (function (){var or__10219__auto__ = tx;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.db.current_tx.call(null,report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datahike.db.entid_strict.call(null,db,e);
var v__$1 = ((datahike.db.ref_QMARK_.call(null,db,a))?datahike.db.entid_strict.call(null,db,v):v);
var datom = (new datahike.db.Datom(e__$1,a,v__$1,tx__$1,true));
if(datahike.db.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datahike.db.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__6736__auto__ = cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var old_datom = temp__6736__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datahike.db.transact_report.call(null,datahike.db.transact_report.call(null,report,(new datahike.db.Datom(e__$1,a,old_datom.v,tx__$1,false))),datom);
}
} else {
return datahike.db.transact_report.call(null,report,datom);
}
}
});
datahike.db.transact_retract_datom = (function datahike$db$transact_retract_datom(report,d){
var tx = datahike.db.current_tx.call(null,report);
return datahike.db.transact_report.call(null,report,(new datahike.db.Datom(d.e,d.a,d.v,tx,false)));
});
datahike.db.retract_components = (function datahike$db$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (d){
return datahike.db.component_QMARK_.call(null,db,d.a);
})),cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datahike.db.transact_tx_data = (function datahike$db$transact_tx_data(report,es){
return null;
});
datahike.db.retry_with_tempid = (function datahike$db$retry_with_tempid(report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,tempid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" both to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,upserted_eid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
return datahike.db.transact_tx_data.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null),upserted_eid),es);
}
});
datahike.db.transact_tx_data_STAR_ = (function datahike$db$transact_tx_data_STAR_(initial_report,initial_es){
if(((initial_es == null)) || (cljs.core.sequential_QMARK_.call(null,initial_es))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad transaction data "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,initial_es)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var report = initial_report;
var es = initial_es;
while(true){
var vec__47621 = es;
var seq__47622 = cljs.core.seq.call(null,vec__47621);
var first__47623 = cljs.core.first.call(null,seq__47622);
var seq__47622__$1 = cljs.core.next.call(null,seq__47622);
var entity = first__47623;
var entities = seq__47622__$1;
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if(cljs.core.empty_QMARK_.call(null,es)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datahike.db.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if((entity == null)){
var G__47636 = report;
var G__47637 = entities;
report = G__47636;
es = G__47637;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datahike.db.tx_id_QMARK_.call(null,old_eid)){
var id = datahike.db.current_tx.call(null,report);
var G__47638 = datahike.db.allocate_eid.call(null,report,old_eid,id);
var G__47639 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__47638;
es = G__47639;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,old_eid)){
var id = datahike.db.entid_strict.call(null,db,old_eid);
var G__47640 = report;
var G__47641 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__47640;
es = G__47641;
continue;
} else {
var temp__6736__auto__ = datahike.db.upsert_eid.call(null,db,entity);
if(cljs.core.truth_(temp__6736__auto__)){
var upserted_eid = temp__6736__auto__;
if((datahike.db.neg_number_QMARK_.call(null,old_eid)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)) && (cljs.core.not_EQ_.call(null,upserted_eid,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)))){
return datahike.db.retry_with_tempid.call(null,initial_report,initial_es,old_eid,upserted_eid);
} else {
var G__47642 = datahike.db.allocate_eid.call(null,report,old_eid,upserted_eid);
var G__47643 = cljs.core.concat.call(null,datahike.db.explode.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__47642;
es = G__47643;
continue;
}
} else {
if((typeof old_eid === 'number') || ((old_eid == null))){
var new_eid = (((old_eid == null))?datahike.db.next_eid.call(null,db):(((old_eid < (0)))?(function (){var or__10219__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.db.next_eid.call(null,db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__47644 = datahike.db.allocate_eid.call(null,report,old_eid,new_eid);
var G__47645 = cljs.core.concat.call(null,datahike.db.explode.call(null,db,new_entity),entities);
report = G__47644;
es = G__47645;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for :db/id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,old_eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__47624 = entity;
var op = cljs.core.nth.call(null,vec__47624,(0),null);
var e = cljs.core.nth.call(null,vec__47624,(1),null);
var a = cljs.core.nth.call(null,vec__47624,(2),null);
var v = cljs.core.nth.call(null,vec__47624,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__47627 = entity;
var seq__47628 = cljs.core.seq.call(null,vec__47627);
var first__47629 = cljs.core.first.call(null,seq__47628);
var seq__47628__$1 = cljs.core.next.call(null,seq__47628);
var _ = first__47629;
var first__47629__$1 = cljs.core.first.call(null,seq__47628__$1);
var seq__47628__$2 = cljs.core.next.call(null,seq__47628__$1);
var f = first__47629__$1;
var args = seq__47628__$2;
var G__47646 = report;
var G__47647 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__47646;
es = G__47647;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__47630 = entity;
var _ = cljs.core.nth.call(null,vec__47630,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__47630,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__47630,(2),null);
var ov = cljs.core.nth.call(null,vec__47630,(3),null);
var nv = cljs.core.nth.call(null,vec__47630,(4),null);
var e__$2 = datahike.db.entid_strict.call(null,db,e__$1);
var ___$1 = datahike.db.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datahike.db.ref_QMARK_.call(null,db,a__$1))?datahike.db.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datahike.db.ref_QMARK_.call(null,db,a__$1))?datahike.db.entid_strict.call(null,db,nv):nv);
var ___$2 = datahike.db.validate_val.call(null,nv__$1,entity);
var datoms = datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datahike.db.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__47630,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__47624,op,e,a,v,vec__47621,seq__47622,first__47623,seq__47622__$1,entity,entities,db){
return (function (d){
return cljs.core._EQ_.call(null,d.v,ov__$1);
});})(report,es,vec__47630,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__47624,op,e,a,v,vec__47621,seq__47622,first__47623,seq__47622__$1,entity,entities,db))
,datoms))){
var G__47648 = datahike.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__47649 = entities;
report = G__47648;
es = G__47649;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e__$2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__47650 = datahike.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__47651 = entities;
report = G__47650;
es = G__47651;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e__$2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,v__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datahike.db.tx_id_QMARK_.call(null,e)){
var G__47652 = report;
var G__47653 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datahike.db.current_tx.call(null,report),a,v], null),entities);
report = G__47652;
es = G__47653;
continue;
} else {
if((datahike.db.ref_QMARK_.call(null,db,a)) && (datahike.db.tx_id_QMARK_.call(null,v))){
var G__47654 = report;
var G__47655 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datahike.db.current_tx.call(null,report)], null),entities);
report = G__47654;
es = G__47655;
continue;
} else {
if(datahike.db.neg_number_QMARK_.call(null,e)){
if(cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Negative entity ids are resolved for :db/add only")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
var upserted_eid = ((datahike.db.is_attr_QMARK_.call(null,db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datahike.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_((function (){var and__10207__auto__ = upserted_eid;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__10207__auto____$1)){
return cljs.core.not_EQ_.call(null,upserted_eid,allocated_eid);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())){
return datahike.db.retry_with_tempid.call(null,initial_report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__10219__auto__ = upserted_eid;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datahike.db.next_eid.call(null,db);
}
}
})();
var G__47656 = datahike.db.allocate_eid.call(null,report,e,eid);
var G__47657 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__47656;
es = G__47657;
continue;
}
}
} else {
if((datahike.db.ref_QMARK_.call(null,db,a)) && (datahike.db.neg_number_QMARK_.call(null,v))){
var temp__6736__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__6736__auto__)){
var vid = temp__6736__auto__;
var G__47658 = report;
var G__47659 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__47658;
es = G__47659;
continue;
} else {
var G__47660 = datahike.db.allocate_eid.call(null,report,v,datahike.db.next_eid.call(null,db));
var G__47661 = es;
report = G__47660;
es = G__47661;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__47662 = datahike.db.transact_add.call(null,report,entity);
var G__47663 = entities;
report = G__47662;
es = G__47663;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__6736__auto__ = datahike.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var v__$1 = ((datahike.db.ref_QMARK_.call(null,db,a))?datahike.db.entid_strict.call(null,db,v):v);
datahike.db.validate_attr.call(null,a,entity);

datahike.db.validate_val.call(null,v__$1,entity);

var temp__6736__auto____$1 = cljs.core.first.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__6736__auto____$1)){
var old_datom = temp__6736__auto____$1;
var G__47664 = datahike.db.transact_retract_datom.call(null,report,old_datom);
var G__47665 = entities;
report = G__47664;
es = G__47665;
continue;
} else {
var G__47666 = report;
var G__47667 = entities;
report = G__47666;
es = G__47667;
continue;
}
} else {
var G__47668 = report;
var G__47669 = entities;
report = G__47668;
es = G__47669;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var temp__6736__auto__ = datahike.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var _ = datahike.db.validate_attr.call(null,a,entity);
var datoms = datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__47670 = cljs.core.reduce.call(null,datahike.db.transact_retract_datom,report,datoms);
var G__47671 = cljs.core.concat.call(null,datahike.db.retract_components.call(null,db,datoms),entities);
report = G__47670;
es = G__47671;
continue;
} else {
var G__47672 = report;
var G__47673 = entities;
report = G__47672;
es = G__47673;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var temp__6736__auto__ = datahike.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var e_datoms = datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,es,e_datoms,e__$1,temp__6736__auto__,vec__47624,op,e,a,v,vec__47621,seq__47622,first__47623,seq__47622__$1,entity,entities,db){
return (function (a__$1){
return datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__6736__auto__,vec__47624,op,e,a,v,vec__47621,seq__47622,first__47623,seq__47622__$1,entity,entities,db))
,datahike.db._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
var G__47674 = cljs.core.reduce.call(null,datahike.db.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__47675 = cljs.core.concat.call(null,datahike.db.retract_components.call(null,db,e_datoms),entities);
report = G__47674;
es = G__47675;
continue;
} else {
var G__47676 = report;
var G__47677 = entities;
report = G__47676;
es = G__47677;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown operation at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,entity)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_(datahike.db.datom_QMARK_.call(null,entity))){
var vec__47633 = entity;
var e = cljs.core.nth.call(null,vec__47633,(0),null);
var a = cljs.core.nth.call(null,vec__47633,(1),null);
var v = cljs.core.nth.call(null,vec__47633,(2),null);
var tx = cljs.core.nth.call(null,vec__47633,(3),null);
var added = cljs.core.nth.call(null,vec__47633,(4),null);
if(cljs.core.truth_(added)){
var G__47678 = datahike.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__47679 = entities;
report = G__47678;
es = G__47679;
continue;
} else {
var G__47680 = report;
var G__47681 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__47680;
es = G__47681;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity type at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,entity)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
break;
}
});
datahike.db.transact_tx_data = (function datahike$db$transact_tx_data(p__47682,initial_es){
var map__47685 = p__47682;
var map__47685__$1 = ((((!((map__47685 == null)))?((((map__47685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47685):map__47685);
var initial_report = map__47685__$1;
var tx_meta = cljs.core.get.call(null,map__47685__$1,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194));
var middleware = (function (){var or__10219__auto__ = ((cljs.core.map_QMARK_.call(null,tx_meta))?new cljs.core.Keyword("datahike.db","tx-middleware","datahike.db/tx-middleware",-2145950633).cljs$core$IFn$_invoke$arity$1(tx_meta):null);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.identity;
}
})();
return middleware.call(null,datahike.db.transact_tx_data_STAR_).call(null,initial_report,initial_es);
});

//# sourceMappingURL=db.js.map