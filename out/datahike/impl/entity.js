// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datahike.db');
datahike.impl.entity.entity = (function datahike$impl$entity$entity(db,eid){
return null;
});
datahike.impl.entity.entity_QMARK_ = (function datahike$impl$entity$entity_QMARK_(this$){
return null;
});
datahike.impl.entity.__GT_Entity = (function datahike$impl$entity$__GT_Entity(db,eid,touched,cache){
return null;
});
datahike.impl.entity.equiv_entity = (function datahike$impl$entity$equiv_entity(this$,that){
return null;
});
datahike.impl.entity.lookup_entity = (function datahike$impl$entity$lookup_entity(var_args){
var args47689 = [];
var len__11440__auto___47692 = arguments.length;
var i__11441__auto___47693 = (0);
while(true){
if((i__11441__auto___47693 < len__11440__auto___47692)){
args47689.push((arguments[i__11441__auto___47693]));

var G__47694 = (i__11441__auto___47693 + (1));
i__11441__auto___47693 = G__47694;
continue;
} else {
}
break;
}

var G__47691 = args47689.length;
switch (G__47691) {
case 2:
return datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47689.length)].join('')));

}
});

datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return null;
});

datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
return null;
});

datahike.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datahike.impl.entity.touch = (function datahike$impl$entity$touch(e){
return null;
});
datahike.impl.entity.entid = (function datahike$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid)) || ((eid instanceof cljs.core.Keyword))){
return datahike.db.entid.call(null,db,eid);
} else {
return null;
}
});
datahike.impl.entity.entity = (function datahike$impl$entity$entity(db,eid){
if(cljs.core.truth_(datahike.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__6738__auto__ = datahike.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__6738__auto__)){
var e = temp__6738__auto__;
return datahike.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datahike.impl.entity.entity_attr = (function datahike$impl$entity$entity_attr(db,a,datoms){
if(datahike.db.multival_QMARK_.call(null,db,a)){
if(datahike.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__47696_SHARP_,p2__47697_SHARP_){
return cljs.core.conj.call(null,p1__47696_SHARP_,datahike.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__47697_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__47698_SHARP_,p2__47699_SHARP_){
return cljs.core.conj.call(null,p1__47698_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__47699_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datahike.db.ref_QMARK_.call(null,db,a)){
return datahike.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datahike.impl.entity._lookup_backwards = (function datahike$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__6736__auto__ = cljs.core.not_empty.call(null,datahike.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datoms = temp__6736__auto__;
if(datahike.db.component_QMARK_.call(null,db,attr)){
return datahike.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__6736__auto__){
return (function (p1__47700_SHARP_,p2__47701_SHARP_){
return cljs.core.conj.call(null,p1__47700_SHARP_,datahike.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__47701_SHARP_)));
});})(datoms,temp__6736__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datahike.impl.entity.multival__GT_js = (function datahike$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datahike.impl.entity.js_seq = (function datahike$impl$entity$js_seq(e){
datahike.impl.entity.touch.call(null,e);

var iter__11081__auto__ = (function datahike$impl$entity$js_seq_$_iter__47718(s__47719){
return (new cljs.core.LazySeq(null,(function (){
var s__47719__$1 = s__47719;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__47719__$1);
if(temp__6738__auto__){
var s__47719__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47719__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__47719__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__47721 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__47720 = (0);
while(true){
if((i__47720 < size__11080__auto__)){
var vec__47728 = cljs.core._nth.call(null,c__11079__auto__,i__47720);
var a = cljs.core.nth.call(null,vec__47728,(0),null);
var v = cljs.core.nth.call(null,vec__47728,(1),null);
cljs.core.chunk_append.call(null,b__47721,((datahike.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datahike.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__47734 = (i__47720 + (1));
i__47720 = G__47734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47721),datahike$impl$entity$js_seq_$_iter__47718.call(null,cljs.core.chunk_rest.call(null,s__47719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47721),null);
}
} else {
var vec__47731 = cljs.core.first.call(null,s__47719__$2);
var a = cljs.core.nth.call(null,vec__47731,(0),null);
var v = cljs.core.nth.call(null,vec__47731,(1),null);
return cljs.core.cons.call(null,((datahike.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datahike.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datahike$impl$entity$js_seq_$_iter__47718.call(null,cljs.core.rest.call(null,s__47719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {datahike.impl.entity.Object}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datahike.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datahike.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datahike.impl.entity.js_seq.call(null,this$)));
});

datahike.impl.entity.Entity.prototype.forEach = (function() {
var G__47757 = null;
var G__47757__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__47736 = cljs.core.seq.call(null,datahike.impl.entity.js_seq.call(null,this$));
var chunk__47737 = null;
var count__47738 = (0);
var i__47739 = (0);
while(true){
if((i__47739 < count__47738)){
var vec__47740 = cljs.core._nth.call(null,chunk__47737,i__47739);
var a = cljs.core.nth.call(null,vec__47740,(0),null);
var v = cljs.core.nth.call(null,vec__47740,(1),null);
f.call(null,v,a,this$);

var G__47758 = seq__47736;
var G__47759 = chunk__47737;
var G__47760 = count__47738;
var G__47761 = (i__47739 + (1));
seq__47736 = G__47758;
chunk__47737 = G__47759;
count__47738 = G__47760;
i__47739 = G__47761;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__47736);
if(temp__6738__auto__){
var seq__47736__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47736__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__47736__$1);
var G__47762 = cljs.core.chunk_rest.call(null,seq__47736__$1);
var G__47763 = c__11130__auto__;
var G__47764 = cljs.core.count.call(null,c__11130__auto__);
var G__47765 = (0);
seq__47736 = G__47762;
chunk__47737 = G__47763;
count__47738 = G__47764;
i__47739 = G__47765;
continue;
} else {
var vec__47743 = cljs.core.first.call(null,seq__47736__$1);
var a = cljs.core.nth.call(null,vec__47743,(0),null);
var v = cljs.core.nth.call(null,vec__47743,(1),null);
f.call(null,v,a,this$);

var G__47766 = cljs.core.next.call(null,seq__47736__$1);
var G__47767 = null;
var G__47768 = (0);
var G__47769 = (0);
seq__47736 = G__47766;
chunk__47737 = G__47767;
count__47738 = G__47768;
i__47739 = G__47769;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__47757__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__47746 = cljs.core.seq.call(null,datahike.impl.entity.js_seq.call(null,this$));
var chunk__47747 = null;
var count__47748 = (0);
var i__47749 = (0);
while(true){
if((i__47749 < count__47748)){
var vec__47750 = cljs.core._nth.call(null,chunk__47747,i__47749);
var a = cljs.core.nth.call(null,vec__47750,(0),null);
var v = cljs.core.nth.call(null,vec__47750,(1),null);
f.call(use_as_this,v,a,this$);

var G__47770 = seq__47746;
var G__47771 = chunk__47747;
var G__47772 = count__47748;
var G__47773 = (i__47749 + (1));
seq__47746 = G__47770;
chunk__47747 = G__47771;
count__47748 = G__47772;
i__47749 = G__47773;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__47746);
if(temp__6738__auto__){
var seq__47746__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47746__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__47746__$1);
var G__47774 = cljs.core.chunk_rest.call(null,seq__47746__$1);
var G__47775 = c__11130__auto__;
var G__47776 = cljs.core.count.call(null,c__11130__auto__);
var G__47777 = (0);
seq__47746 = G__47774;
chunk__47747 = G__47775;
count__47748 = G__47776;
i__47749 = G__47777;
continue;
} else {
var vec__47753 = cljs.core.first.call(null,seq__47746__$1);
var a = cljs.core.nth.call(null,vec__47753,(0),null);
var v = cljs.core.nth.call(null,vec__47753,(1),null);
f.call(use_as_this,v,a,this$);

var G__47778 = cljs.core.next.call(null,seq__47746__$1);
var G__47779 = null;
var G__47780 = (0);
var G__47781 = (0);
seq__47746 = G__47778;
chunk__47747 = G__47779;
count__47748 = G__47780;
i__47749 = G__47781;
continue;
}
} else {
return null;
}
}
break;
}
});
G__47757 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__47757__1.call(this,f);
case 2:
return G__47757__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47757.cljs$core$IFn$_invoke$arity$1 = G__47757__1;
G__47757.cljs$core$IFn$_invoke$arity$2 = G__47757__2;
return G__47757;
})()
;

datahike.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datahike.db.reverse_ref_QMARK_.call(null,attr)){
return datahike.impl.entity.multival__GT_js.call(null,datahike.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datahike.db.reverse_ref.call(null,attr),null));
} else {
var G__47756 = datahike.impl.entity.lookup_entity.call(null,this$,attr);
if(datahike.db.multival_QMARK_.call(null,self__.db,attr)){
return datahike.impl.entity.multival__GT_js.call(null,G__47756);
} else {
return G__47756;
}
}
}
});

datahike.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datahike.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datahike.impl.entity.js_seq.call(null,this$));
});

datahike.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datahike.impl.entity.js_seq.call(null,this$)));
});

datahike.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datahike.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datahike.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datahike.impl.entity.js_seq.call(null,this$)));
});

datahike.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datahike.impl.entity.equiv_entity.call(null,this$,other);
});

datahike.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datahike.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datahike.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datahike.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datahike.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datahike.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datahike.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datahike.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datahike.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datahike.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datahike.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datahike.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datahike.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datahike.impl.entity","nf","datahike.impl.entity/nf",-1428330489),datahike.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datahike.impl.entity","nf","datahike.impl.entity/nf",-1428330489)));
});

datahike.impl.entity.Entity.prototype.call = (function() {
var G__47782 = null;
var G__47782__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datahike.impl.entity.lookup_entity.call(null,this$,k);
});
var G__47782__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datahike.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__47782 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47782__2.call(this,self__,k);
case 3:
return G__47782__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47782.cljs$core$IFn$_invoke$arity$2 = G__47782__2;
G__47782.cljs$core$IFn$_invoke$arity$3 = G__47782__3;
return G__47782;
})()
;

datahike.impl.entity.Entity.prototype.apply = (function (self__,args47735){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47735)));
});

datahike.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datahike.impl.entity.lookup_entity.call(null,this$,k);
});

datahike.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datahike.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datahike.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datahike.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datahike.impl.entity.Entity.cljs$lang$type = true;

datahike.impl.entity.Entity.cljs$lang$ctorStr = "datahike.impl.entity/Entity";

datahike.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__10876__auto__,writer__10877__auto__,opt__10878__auto__){
return cljs.core._write.call(null,writer__10877__auto__,"datahike.impl.entity/Entity");
});

datahike.impl.entity.__GT_Entity = (function datahike$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datahike.impl.entity.Entity(db,eid,touched,cache));
});

datahike.impl.entity.entity_QMARK_ = (function datahike$impl$entity$entity_QMARK_(x){
return (x instanceof datahike.impl.entity.Entity);
});
datahike.impl.entity.equiv_entity = (function datahike$impl$entity$equiv_entity(this$,that){
return ((that instanceof datahike.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datahike.impl.entity.lookup_entity = (function datahike$impl$entity$lookup_entity(var_args){
var args47783 = [];
var len__11440__auto___47786 = arguments.length;
var i__11441__auto___47787 = (0);
while(true){
if((i__11441__auto___47787 < len__11440__auto___47786)){
args47783.push((arguments[i__11441__auto___47787]));

var G__47788 = (i__11441__auto___47787 + (1));
i__11441__auto___47787 = G__47788;
continue;
} else {
}
break;
}

var G__47785 = args47783.length;
switch (G__47785) {
case 2:
return datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47783.length)].join('')));

}
});

datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datahike.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datahike.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datahike.db.reverse_ref_QMARK_.call(null,attr)){
return datahike.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datahike.db.reverse_ref.call(null,attr),not_found);
} else {
var temp__6740__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if((temp__6740__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__6740__auto____$1 = cljs.core.not_empty.call(null,datahike.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__6740__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__6740__auto____$1;
var value = datahike.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__6740__auto__;
return v;
}
}
}
});

datahike.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datahike.impl.entity.touch_components = (function datahike$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datahike.db.component_QMARK_.call(null,db,a))?((datahike.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datahike.impl.entity.touch,v)):datahike.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datahike.impl.entity.datoms__GT_cache = (function datahike$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datahike.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datahike.impl.entity.touch = (function datahike$impl$entity$touch(e){
if(cljs.core.truth_(datahike.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__6738__auto___47790 = cljs.core.not_empty.call(null,datahike.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__6738__auto___47790)){
var datoms_47791 = temp__6738__auto___47790;
cljs.core.vreset_BANG_.call(null,e.cache,datahike.impl.entity.touch_components.call(null,e.db,datahike.impl.entity.datoms__GT_cache.call(null,e.db,datoms_47791)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datahike.impl.entity.Entity.prototype.get",datahike.impl.entity.Entity.prototype.get);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.has",datahike.impl.entity.Entity.prototype.has);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.forEach",datahike.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.key_set",datahike.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.value_set",datahike.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.entry_set",datahike.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.keys",datahike.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.values",datahike.impl.entity.Entity.prototype.values);

goog.exportSymbol("datahike.impl.entity.Entity.prototype.entries",datahike.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map