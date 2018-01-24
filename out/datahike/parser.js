// Compiled by ClojureScript 1.9.542 {}
goog.provide('datahike.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datahike.db');
datahike.parser.collect_vars_acc = (function datahike$parser$collect_vars_acc(acc,form){
return null;
});
datahike.parser.parse_clause = (function datahike$parser$parse_clause(form){
return null;
});
datahike.parser.parse_clauses = (function datahike$parser$parse_clauses(clauses){
return null;
});
datahike.parser.parse_binding = (function datahike$parser$parse_binding(form){
return null;
});

/**
 * @interface
 */
datahike.parser.ITraversable = function(){};

datahike.parser._collect = (function datahike$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datahike$parser$ITraversable$_collect$arity$3 == null)))){
return _.datahike$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.parser._collect[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,pred,acc);
} else {
var m__10938__auto____$1 = (datahike.parser._collect["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datahike.parser._collect_vars = (function datahike$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datahike$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datahike$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.parser._collect_vars[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,acc);
} else {
var m__10938__auto____$1 = (datahike.parser._collect_vars["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datahike.parser._postwalk = (function datahike$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datahike$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datahike$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (datahike.parser._postwalk[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,f);
} else {
var m__10938__auto____$1 = (datahike.parser._postwalk["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datahike.parser.of_size_QMARK_ = (function datahike$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datahike.parser.parse_seq = (function datahike$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__49278_SHARP_,p2__49277_SHARP_){
var temp__6736__auto__ = parse_el.call(null,p2__49277_SHARP_);
if(cljs.core.truth_(temp__6736__auto__)){
var parsed = temp__6736__auto__;
return cljs.core.conj.call(null,p1__49278_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datahike.parser.collect = (function datahike$parser$collect(var_args){
var args49279 = [];
var len__11440__auto___49283 = arguments.length;
var i__11441__auto___49284 = (0);
while(true){
if((i__11441__auto___49284 < len__11440__auto___49283)){
args49279.push((arguments[i__11441__auto___49284]));

var G__49285 = (i__11441__auto___49284 + (1));
i__11441__auto___49284 = G__49285;
continue;
} else {
}
break;
}

var G__49281 = args49279.length;
switch (G__49281) {
case 2:
return datahike.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datahike.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49279.length)].join('')));

}
});

datahike.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datahike.parser.collect.call(null,pred,form,cljs.core.PersistentVector.EMPTY);
});

datahike.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc,form);
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datahike$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form))){
return datahike.parser._collect.call(null,form,pred,acc);
} else {
if(datahike.db.seqable_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (acc__$1,form__$1){
return datahike.parser.collect.call(null,pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datahike.parser.collect.cljs$lang$maxFixedArity = 3;

datahike.parser.distinct_QMARK_ = (function datahike$parser$distinct_QMARK_(coll){
var or__10219__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__10219__auto__){
return or__10219__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datahike.parser.postwalk = (function datahike$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datahike$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form))){
return f.call(null,datahike.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__49295){
var vec__49296 = p__49295;
var k = cljs.core.nth.call(null,vec__49296,(0),null);
var v = cljs.core.nth.call(null,vec__49296,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datahike.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__49287_SHARP_){
return datahike.parser.postwalk.call(null,p1__49287_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__49288_SHARP_){
return datahike.parser.postwalk.call(null,p1__49288_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datahike.parser.with_source = (function datahike$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datahike.parser.source = (function datahike$parser$source(obj){
var or__10219__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49303,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49305 = k49303;
switch (G__49305) {
default:
return cljs.core.get.call(null,self__.__extmap,k49303,else__10897__auto__);

}
});

datahike.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Placeholder{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.Placeholder.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49302){
var self__ = this;
var G__49302__$1 = this;
return (new cljs.core.RecordIter((0),G__49302__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Placeholder.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Placeholder.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49299){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Placeholder(null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Placeholder.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49300,acc49301){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49301;
});

datahike.parser.Placeholder.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49301){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49301;
});

datahike.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49302){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49306 = cljs.core.keyword_identical_QMARK_;
var expr__49307 = k__10902__auto__;
return (new datahike.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49302),null));
});

datahike.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49302){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Placeholder(G__49302,self__.__extmap,self__.__hash));
});

datahike.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datahike.parser.Placeholder.cljs$lang$type = true;

datahike.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Placeholder");
});

datahike.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Placeholder");
});

datahike.parser.__GT_Placeholder = (function datahike$parser$__GT_Placeholder(){
return (new datahike.parser.Placeholder(null,null,null));
});

datahike.parser.map__GT_Placeholder = (function datahike$parser$map__GT_Placeholder(G__49304){
return (new datahike.parser.Placeholder(null,cljs.core.dissoc.call(null,G__49304),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49314,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49316 = k49314;
var G__49316__$1 = (((G__49316 instanceof cljs.core.Keyword))?G__49316.fqn:null);
switch (G__49316__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49314,else__10897__auto__);

}
});

datahike.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Variable{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.Variable.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49313){
var self__ = this;
var G__49313__$1 = this;
return (new cljs.core.RecordIter((0),G__49313__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Variable.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Variable.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49310){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Variable(datahike.parser.postwalk.call(null,self__.symbol,f49310),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Variable.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49311,acc49312){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49311,self__.symbol,acc49312);
});

datahike.parser.Variable.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49312){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49312,self__.symbol);
});

datahike.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49313){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49317 = cljs.core.keyword_identical_QMARK_;
var expr__49318 = k__10902__auto__;
if(cljs.core.truth_(pred__49317.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49318))){
return (new datahike.parser.Variable(G__49313,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49313),null));
}
});

datahike.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49313){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Variable(self__.symbol,G__49313,self__.__extmap,self__.__hash));
});

datahike.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datahike.parser.Variable.cljs$lang$type = true;

datahike.parser.Variable.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Variable");
});

datahike.parser.Variable.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Variable");
});

datahike.parser.__GT_Variable = (function datahike$parser$__GT_Variable(symbol){
return (new datahike.parser.Variable(symbol,null,null,null));
});

datahike.parser.map__GT_Variable = (function datahike$parser$map__GT_Variable(G__49315){
return (new datahike.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49315),null,cljs.core.dissoc.call(null,G__49315,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49325,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49327 = k49325;
var G__49327__$1 = (((G__49327 instanceof cljs.core.Keyword))?G__49327.fqn:null);
switch (G__49327__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49325,else__10897__auto__);

}
});

datahike.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.SrcVar{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.SrcVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49324){
var self__ = this;
var G__49324__$1 = this;
return (new cljs.core.RecordIter((0),G__49324__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.SrcVar.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.SrcVar.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49321){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.SrcVar(datahike.parser.postwalk.call(null,self__.symbol,f49321),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.SrcVar.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49322,acc49323){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49322,self__.symbol,acc49323);
});

datahike.parser.SrcVar.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49323){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49323,self__.symbol);
});

datahike.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49324){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49328 = cljs.core.keyword_identical_QMARK_;
var expr__49329 = k__10902__auto__;
if(cljs.core.truth_(pred__49328.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49329))){
return (new datahike.parser.SrcVar(G__49324,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49324),null));
}
});

datahike.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49324){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.SrcVar(self__.symbol,G__49324,self__.__extmap,self__.__hash));
});

datahike.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datahike.parser.SrcVar.cljs$lang$type = true;

datahike.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/SrcVar");
});

datahike.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/SrcVar");
});

datahike.parser.__GT_SrcVar = (function datahike$parser$__GT_SrcVar(symbol){
return (new datahike.parser.SrcVar(symbol,null,null,null));
});

datahike.parser.map__GT_SrcVar = (function datahike$parser$map__GT_SrcVar(G__49326){
return (new datahike.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49326),null,cljs.core.dissoc.call(null,G__49326,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49336,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49338 = k49336;
switch (G__49338) {
default:
return cljs.core.get.call(null,self__.__extmap,k49336,else__10897__auto__);

}
});

datahike.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.DefaultSrc{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.DefaultSrc.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49335){
var self__ = this;
var G__49335__$1 = this;
return (new cljs.core.RecordIter((0),G__49335__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.DefaultSrc.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.DefaultSrc.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49332){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.DefaultSrc(null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.DefaultSrc.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49333,acc49334){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49334;
});

datahike.parser.DefaultSrc.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49334){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49334;
});

datahike.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49335){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49339 = cljs.core.keyword_identical_QMARK_;
var expr__49340 = k__10902__auto__;
return (new datahike.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49335),null));
});

datahike.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49335){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.DefaultSrc(G__49335,self__.__extmap,self__.__hash));
});

datahike.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datahike.parser.DefaultSrc.cljs$lang$type = true;

datahike.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/DefaultSrc");
});

datahike.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/DefaultSrc");
});

datahike.parser.__GT_DefaultSrc = (function datahike$parser$__GT_DefaultSrc(){
return (new datahike.parser.DefaultSrc(null,null,null));
});

datahike.parser.map__GT_DefaultSrc = (function datahike$parser$map__GT_DefaultSrc(G__49337){
return (new datahike.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__49337),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49347,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49349 = k49347;
switch (G__49349) {
default:
return cljs.core.get.call(null,self__.__extmap,k49347,else__10897__auto__);

}
});

datahike.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.RulesVar{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.RulesVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49346){
var self__ = this;
var G__49346__$1 = this;
return (new cljs.core.RecordIter((0),G__49346__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.RulesVar.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RulesVar.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49343){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.RulesVar(null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.RulesVar.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49344,acc49345){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49345;
});

datahike.parser.RulesVar.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49345){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49345;
});

datahike.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49346){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49350 = cljs.core.keyword_identical_QMARK_;
var expr__49351 = k__10902__auto__;
return (new datahike.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49346),null));
});

datahike.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49346){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.RulesVar(G__49346,self__.__extmap,self__.__hash));
});

datahike.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datahike.parser.RulesVar.cljs$lang$type = true;

datahike.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/RulesVar");
});

datahike.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/RulesVar");
});

datahike.parser.__GT_RulesVar = (function datahike$parser$__GT_RulesVar(){
return (new datahike.parser.RulesVar(null,null,null));
});

datahike.parser.map__GT_RulesVar = (function datahike$parser$map__GT_RulesVar(G__49348){
return (new datahike.parser.RulesVar(null,cljs.core.dissoc.call(null,G__49348),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49358,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49360 = k49358;
var G__49360__$1 = (((G__49360 instanceof cljs.core.Keyword))?G__49360.fqn:null);
switch (G__49360__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49358,else__10897__auto__);

}
});

datahike.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Constant{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datahike.parser.Constant.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49357){
var self__ = this;
var G__49357__$1 = this;
return (new cljs.core.RecordIter((0),G__49357__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Constant.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Constant.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49354){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Constant(datahike.parser.postwalk.call(null,self__.value,f49354),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Constant.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49355,acc49356){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49355,self__.value,acc49356);
});

datahike.parser.Constant.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49356){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49356,self__.value);
});

datahike.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49357){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49361 = cljs.core.keyword_identical_QMARK_;
var expr__49362 = k__10902__auto__;
if(cljs.core.truth_(pred__49361.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__49362))){
return (new datahike.parser.Constant(G__49357,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49357),null));
}
});

datahike.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datahike.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49357){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Constant(self__.value,G__49357,self__.__extmap,self__.__hash));
});

datahike.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datahike.parser.Constant.cljs$lang$type = true;

datahike.parser.Constant.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Constant");
});

datahike.parser.Constant.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Constant");
});

datahike.parser.__GT_Constant = (function datahike$parser$__GT_Constant(value){
return (new datahike.parser.Constant(value,null,null,null));
});

datahike.parser.map__GT_Constant = (function datahike$parser$map__GT_Constant(G__49359){
return (new datahike.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__49359),null,cljs.core.dissoc.call(null,G__49359,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49369,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49371 = k49369;
var G__49371__$1 = (((G__49371 instanceof cljs.core.Keyword))?G__49371.fqn:null);
switch (G__49371__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49369,else__10897__auto__);

}
});

datahike.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.PlainSymbol{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.PlainSymbol.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49368){
var self__ = this;
var G__49368__$1 = this;
return (new cljs.core.RecordIter((0),G__49368__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.PlainSymbol.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.PlainSymbol.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49365){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.PlainSymbol(datahike.parser.postwalk.call(null,self__.symbol,f49365),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.PlainSymbol.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49366,acc49367){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49366,self__.symbol,acc49367);
});

datahike.parser.PlainSymbol.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49367){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49367,self__.symbol);
});

datahike.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49368){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49372 = cljs.core.keyword_identical_QMARK_;
var expr__49373 = k__10902__auto__;
if(cljs.core.truth_(pred__49372.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__49373))){
return (new datahike.parser.PlainSymbol(G__49368,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49368),null));
}
});

datahike.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datahike.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49368){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.PlainSymbol(self__.symbol,G__49368,self__.__extmap,self__.__hash));
});

datahike.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datahike.parser.PlainSymbol.cljs$lang$type = true;

datahike.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/PlainSymbol");
});

datahike.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/PlainSymbol");
});

datahike.parser.__GT_PlainSymbol = (function datahike$parser$__GT_PlainSymbol(symbol){
return (new datahike.parser.PlainSymbol(symbol,null,null,null));
});

datahike.parser.map__GT_PlainSymbol = (function datahike$parser$map__GT_PlainSymbol(G__49370){
return (new datahike.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__49370),null,cljs.core.dissoc.call(null,G__49370,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datahike.parser.parse_placeholder = (function datahike$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datahike.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datahike.parser.parse_variable = (function datahike$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datahike.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datahike.parser.parse_src_var = (function datahike$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datahike.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datahike.parser.parse_rules_var = (function datahike$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datahike.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datahike.parser.parse_constant = (function datahike$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datahike.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datahike.parser.parse_plain_symbol = (function datahike$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datahike.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datahike.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datahike.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datahike.parser.parse_placeholder.call(null,form)))){
return (new datahike.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datahike.parser.parse_plain_variable = (function datahike$parser$parse_plain_variable(form){
if(cljs.core.truth_(datahike.parser.parse_plain_symbol.call(null,form))){
return (new datahike.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datahike.parser.parse_fn_arg = (function datahike$parser$parse_fn_arg(form){
var or__10219__auto__ = datahike.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datahike.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49380,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49382 = k49380;
var G__49382__$1 = (((G__49382 instanceof cljs.core.Keyword))?G__49382.fqn:null);
switch (G__49382__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49380,else__10897__auto__);

}
});

datahike.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.RuleVars{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datahike.parser.RuleVars.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49379){
var self__ = this;
var G__49379__$1 = this;
return (new cljs.core.RecordIter((0),G__49379__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.RuleVars.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleVars.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49376){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.RuleVars(datahike.parser.postwalk.call(null,self__.required,f49376),datahike.parser.postwalk.call(null,self__.free,f49376),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.RuleVars.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49377,acc49378){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49377,self__.free,datahike.parser.collect.call(null,pred49377,self__.required,acc49378));
});

datahike.parser.RuleVars.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49378){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49378,self__.required),self__.free);
});

datahike.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49379){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49383 = cljs.core.keyword_identical_QMARK_;
var expr__49384 = k__10902__auto__;
if(cljs.core.truth_(pred__49383.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__49384))){
return (new datahike.parser.RuleVars(G__49379,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49383.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__49384))){
return (new datahike.parser.RuleVars(self__.required,G__49379,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49379),null));
}
}
});

datahike.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datahike.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49379){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.RuleVars(self__.required,self__.free,G__49379,self__.__extmap,self__.__hash));
});

datahike.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datahike.parser.RuleVars.cljs$lang$type = true;

datahike.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/RuleVars");
});

datahike.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/RuleVars");
});

datahike.parser.__GT_RuleVars = (function datahike$parser$__GT_RuleVars(required,free){
return (new datahike.parser.RuleVars(required,free,null,null,null));
});

datahike.parser.map__GT_RuleVars = (function datahike$parser$map__GT_RuleVars(G__49381){
return (new datahike.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__49381),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__49381),null,cljs.core.dissoc.call(null,G__49381,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datahike.parser.parse_rule_vars = (function datahike$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__49390 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__49390,(0),null);
var rest = cljs.core.nth.call(null,vec__49390,(1),null);
var required_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_variable,required);
var free_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datahike.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datahike.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datahike.parser.flatten_rule_vars = (function datahike$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datahike.parser.rule_vars_arity = (function datahike$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49397,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49399 = k49397;
switch (G__49399) {
default:
return cljs.core.get.call(null,self__.__extmap,k49397,else__10897__auto__);

}
});

datahike.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.BindIgnore{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.BindIgnore.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49396){
var self__ = this;
var G__49396__$1 = this;
return (new cljs.core.RecordIter((0),G__49396__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.BindIgnore.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindIgnore.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49393){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.BindIgnore(null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.BindIgnore.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49394,acc49395){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49395;
});

datahike.parser.BindIgnore.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49395){
var self__ = this;
var ___48093__auto____$1 = this;
return acc49395;
});

datahike.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49396){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49400 = cljs.core.keyword_identical_QMARK_;
var expr__49401 = k__10902__auto__;
return (new datahike.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49396),null));
});

datahike.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datahike.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49396){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.BindIgnore(G__49396,self__.__extmap,self__.__hash));
});

datahike.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datahike.parser.BindIgnore.cljs$lang$type = true;

datahike.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/BindIgnore");
});

datahike.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/BindIgnore");
});

datahike.parser.__GT_BindIgnore = (function datahike$parser$__GT_BindIgnore(){
return (new datahike.parser.BindIgnore(null,null,null));
});

datahike.parser.map__GT_BindIgnore = (function datahike$parser$map__GT_BindIgnore(G__49398){
return (new datahike.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__49398),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49408,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49410 = k49408;
var G__49410__$1 = (((G__49410 instanceof cljs.core.Keyword))?G__49410.fqn:null);
switch (G__49410__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49408,else__10897__auto__);

}
});

datahike.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.BindScalar{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datahike.parser.BindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49407){
var self__ = this;
var G__49407__$1 = this;
return (new cljs.core.RecordIter((0),G__49407__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.BindScalar.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindScalar.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49404){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.BindScalar(datahike.parser.postwalk.call(null,self__.variable,f49404),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.BindScalar.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49405,acc49406){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49405,self__.variable,acc49406);
});

datahike.parser.BindScalar.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49406){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49406,self__.variable);
});

datahike.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49407){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49411 = cljs.core.keyword_identical_QMARK_;
var expr__49412 = k__10902__auto__;
if(cljs.core.truth_(pred__49411.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__49412))){
return (new datahike.parser.BindScalar(G__49407,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49407),null));
}
});

datahike.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datahike.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49407){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.BindScalar(self__.variable,G__49407,self__.__extmap,self__.__hash));
});

datahike.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datahike.parser.BindScalar.cljs$lang$type = true;

datahike.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/BindScalar");
});

datahike.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/BindScalar");
});

datahike.parser.__GT_BindScalar = (function datahike$parser$__GT_BindScalar(variable){
return (new datahike.parser.BindScalar(variable,null,null,null));
});

datahike.parser.map__GT_BindScalar = (function datahike$parser$map__GT_BindScalar(G__49409){
return (new datahike.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__49409),null,cljs.core.dissoc.call(null,G__49409,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49419,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49421 = k49419;
var G__49421__$1 = (((G__49421 instanceof cljs.core.Keyword))?G__49421.fqn:null);
switch (G__49421__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49419,else__10897__auto__);

}
});

datahike.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.BindTuple{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datahike.parser.BindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49418){
var self__ = this;
var G__49418__$1 = this;
return (new cljs.core.RecordIter((0),G__49418__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.BindTuple.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindTuple.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49415){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.BindTuple(datahike.parser.postwalk.call(null,self__.bindings,f49415),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.BindTuple.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49416,acc49417){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49416,self__.bindings,acc49417);
});

datahike.parser.BindTuple.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49417){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49417,self__.bindings);
});

datahike.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49418){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49422 = cljs.core.keyword_identical_QMARK_;
var expr__49423 = k__10902__auto__;
if(cljs.core.truth_(pred__49422.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__49423))){
return (new datahike.parser.BindTuple(G__49418,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49418),null));
}
});

datahike.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datahike.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49418){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.BindTuple(self__.bindings,G__49418,self__.__extmap,self__.__hash));
});

datahike.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datahike.parser.BindTuple.cljs$lang$type = true;

datahike.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/BindTuple");
});

datahike.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/BindTuple");
});

datahike.parser.__GT_BindTuple = (function datahike$parser$__GT_BindTuple(bindings){
return (new datahike.parser.BindTuple(bindings,null,null,null));
});

datahike.parser.map__GT_BindTuple = (function datahike$parser$map__GT_BindTuple(G__49420){
return (new datahike.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__49420),null,cljs.core.dissoc.call(null,G__49420,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49430,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49432 = k49430;
var G__49432__$1 = (((G__49432 instanceof cljs.core.Keyword))?G__49432.fqn:null);
switch (G__49432__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49430,else__10897__auto__);

}
});

datahike.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.BindColl{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datahike.parser.BindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49429){
var self__ = this;
var G__49429__$1 = this;
return (new cljs.core.RecordIter((0),G__49429__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.BindColl.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.BindColl.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49426){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.BindColl(datahike.parser.postwalk.call(null,self__.binding,f49426),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.BindColl.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49427,acc49428){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49427,self__.binding,acc49428);
});

datahike.parser.BindColl.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49428){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49428,self__.binding);
});

datahike.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49429){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49433 = cljs.core.keyword_identical_QMARK_;
var expr__49434 = k__10902__auto__;
if(cljs.core.truth_(pred__49433.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__49434))){
return (new datahike.parser.BindColl(G__49429,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49429),null));
}
});

datahike.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datahike.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49429){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.BindColl(self__.binding,G__49429,self__.__extmap,self__.__hash));
});

datahike.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datahike.parser.BindColl.cljs$lang$type = true;

datahike.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/BindColl");
});

datahike.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/BindColl");
});

datahike.parser.__GT_BindColl = (function datahike$parser$__GT_BindColl(binding){
return (new datahike.parser.BindColl(binding,null,null,null));
});

datahike.parser.map__GT_BindColl = (function datahike$parser$map__GT_BindColl(G__49431){
return (new datahike.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__49431),null,cljs.core.dissoc.call(null,G__49431,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datahike.parser.parse_bind_ignore = (function datahike$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datahike.parser.with_source.call(null,(new datahike.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datahike.parser.parse_bind_scalar = (function datahike$parser$parse_bind_scalar(form){
var temp__6738__auto__ = datahike.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var var$ = temp__6738__auto__;
return datahike.parser.with_source.call(null,(new datahike.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datahike.parser.parse_bind_coll = (function datahike$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__10207__auto__ = datahike.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__10207__auto__;
}
})())){
var temp__6736__auto__ = datahike.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6736__auto__)){
var sub_bind = temp__6736__auto__;
return datahike.parser.with_source.call(null,(new datahike.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datahike.parser.parse_tuple_el = (function datahike$parser$parse_tuple_el(form){
var or__10219__auto__ = datahike.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.parser.parse_binding.call(null,form);
}
});
datahike.parser.parse_bind_tuple = (function datahike$parser$parse_bind_tuple(form){
var temp__6738__auto__ = datahike.parser.parse_seq.call(null,datahike.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__6738__auto__)){
var sub_bindings = temp__6738__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datahike.parser.with_source.call(null,(new datahike.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datahike.parser.parse_bind_rel = (function datahike$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__10207__auto__ = datahike.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__10207__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__10207__auto__;
}
})())){
return datahike.parser.with_source.call(null,(new datahike.parser.BindColl(datahike.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datahike.parser.parse_binding = (function datahike$parser$parse_binding(form){
var or__10219__auto__ = datahike.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
var or__10219__auto____$3 = datahike.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__10219__auto____$3)){
return or__10219__auto____$3;
} else {
var or__10219__auto____$4 = datahike.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__10219__auto____$4)){
return or__10219__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datahike.parser.IFindVars = function(){};

datahike.parser._find_vars = (function datahike$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datahike$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datahike$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (datahike.parser._find_vars[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (datahike.parser._find_vars["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datahike.parser.Variable.prototype.datahike$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Variable.prototype.datahike$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.IFindVars}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Aggregate.prototype.datahike$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Aggregate.prototype.datahike$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datahike.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datahike.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49441,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49443 = k49441;
var G__49443__$1 = (((G__49443 instanceof cljs.core.Keyword))?G__49443.fqn:null);
switch (G__49443__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49441,else__10897__auto__);

}
});

datahike.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Aggregate{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.Aggregate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49440){
var self__ = this;
var G__49440__$1 = this;
return (new cljs.core.RecordIter((0),G__49440__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Aggregate.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Aggregate.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49437){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Aggregate(datahike.parser.postwalk.call(null,self__.fn,f49437),datahike.parser.postwalk.call(null,self__.args,f49437),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Aggregate.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49438,acc49439){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49438,self__.args,datahike.parser.collect.call(null,pred49438,self__.fn,acc49439));
});

datahike.parser.Aggregate.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49439){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49439,self__.fn),self__.args);
});

datahike.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49440){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49444 = cljs.core.keyword_identical_QMARK_;
var expr__49445 = k__10902__auto__;
if(cljs.core.truth_(pred__49444.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__49445))){
return (new datahike.parser.Aggregate(G__49440,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49444.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__49445))){
return (new datahike.parser.Aggregate(self__.fn,G__49440,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49440),null));
}
}
});

datahike.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49440){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Aggregate(self__.fn,self__.args,G__49440,self__.__extmap,self__.__hash));
});

datahike.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datahike.parser.Aggregate.cljs$lang$type = true;

datahike.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Aggregate");
});

datahike.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Aggregate");
});

datahike.parser.__GT_Aggregate = (function datahike$parser$__GT_Aggregate(fn,args){
return (new datahike.parser.Aggregate(fn,args,null,null,null));
});

datahike.parser.map__GT_Aggregate = (function datahike$parser$map__GT_Aggregate(G__49442){
return (new datahike.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__49442),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__49442),null,cljs.core.dissoc.call(null,G__49442,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.IFindVars}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Pull.prototype.datahike$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Pull.prototype.datahike$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datahike.parser._find_vars.call(null,self__.variable);
});

datahike.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49452,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49454 = k49452;
var G__49454__$1 = (((G__49454 instanceof cljs.core.Keyword))?G__49454.fqn:null);
switch (G__49454__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49452,else__10897__auto__);

}
});

datahike.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Pull{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datahike.parser.Pull.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49451){
var self__ = this;
var G__49451__$1 = this;
return (new cljs.core.RecordIter((0),G__49451__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Pull.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Pull.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49448){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Pull(datahike.parser.postwalk.call(null,self__.source,f49448),datahike.parser.postwalk.call(null,self__.variable,f49448),datahike.parser.postwalk.call(null,self__.pattern,f49448),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Pull.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49449,acc49450){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49449,self__.pattern,datahike.parser.collect.call(null,pred49449,self__.variable,datahike.parser.collect.call(null,pred49449,self__.source,acc49450)));
});

datahike.parser.Pull.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49450){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49450,self__.source),self__.variable),self__.pattern);
});

datahike.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49451){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49455 = cljs.core.keyword_identical_QMARK_;
var expr__49456 = k__10902__auto__;
if(cljs.core.truth_(pred__49455.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49456))){
return (new datahike.parser.Pull(G__49451,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49455.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__49456))){
return (new datahike.parser.Pull(self__.source,G__49451,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49455.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__49456))){
return (new datahike.parser.Pull(self__.source,self__.variable,G__49451,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49451),null));
}
}
}
});

datahike.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datahike.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49451){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Pull(self__.source,self__.variable,self__.pattern,G__49451,self__.__extmap,self__.__hash));
});

datahike.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datahike.parser.Pull.cljs$lang$type = true;

datahike.parser.Pull.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Pull");
});

datahike.parser.Pull.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Pull");
});

datahike.parser.__GT_Pull = (function datahike$parser$__GT_Pull(source,variable,pattern){
return (new datahike.parser.Pull(source,variable,pattern,null,null,null));
});

datahike.parser.map__GT_Pull = (function datahike$parser$map__GT_Pull(G__49453){
return (new datahike.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49453),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__49453),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__49453),null,cljs.core.dissoc.call(null,G__49453,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datahike.parser.IFindElements = function(){};

datahike.parser.find_elements = (function datahike$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datahike$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datahike$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (datahike.parser.find_elements[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$);
} else {
var m__10938__auto____$1 = (datahike.parser.find_elements["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
 * @implements {cljs.core.ICounted}
 * @implements {datahike.parser.IFindElements}
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
datahike.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49463,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49465 = k49463;
var G__49465__$1 = (((G__49465 instanceof cljs.core.Keyword))?G__49465.fqn:null);
switch (G__49465__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49463,else__10897__auto__);

}
});

datahike.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.FindRel{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datahike.parser.FindRel.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49462){
var self__ = this;
var G__49462__$1 = this;
return (new cljs.core.RecordIter((0),G__49462__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.FindRel.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindRel.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49459){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.FindRel(datahike.parser.postwalk.call(null,self__.elements,f49459),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.FindRel.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49460,acc49461){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49460,self__.elements,acc49461);
});

datahike.parser.FindRel.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49461){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49461,self__.elements);
});

datahike.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.FindRel.prototype.datahike$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindRel.prototype.datahike$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datahike.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49462){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49466 = cljs.core.keyword_identical_QMARK_;
var expr__49467 = k__10902__auto__;
if(cljs.core.truth_(pred__49466.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__49467))){
return (new datahike.parser.FindRel(G__49462,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49462),null));
}
});

datahike.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datahike.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49462){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.FindRel(self__.elements,G__49462,self__.__extmap,self__.__hash));
});

datahike.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datahike.parser.FindRel.cljs$lang$type = true;

datahike.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/FindRel");
});

datahike.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/FindRel");
});

datahike.parser.__GT_FindRel = (function datahike$parser$__GT_FindRel(elements){
return (new datahike.parser.FindRel(elements,null,null,null));
});

datahike.parser.map__GT_FindRel = (function datahike$parser$map__GT_FindRel(G__49464){
return (new datahike.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__49464),null,cljs.core.dissoc.call(null,G__49464,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
 * @implements {cljs.core.ICounted}
 * @implements {datahike.parser.IFindElements}
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
datahike.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49474,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49476 = k49474;
var G__49476__$1 = (((G__49476 instanceof cljs.core.Keyword))?G__49476.fqn:null);
switch (G__49476__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49474,else__10897__auto__);

}
});

datahike.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.FindColl{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datahike.parser.FindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49473){
var self__ = this;
var G__49473__$1 = this;
return (new cljs.core.RecordIter((0),G__49473__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.FindColl.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindColl.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49470){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.FindColl(datahike.parser.postwalk.call(null,self__.element,f49470),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.FindColl.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49471,acc49472){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49471,self__.element,acc49472);
});

datahike.parser.FindColl.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49472){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49472,self__.element);
});

datahike.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.FindColl.prototype.datahike$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindColl.prototype.datahike$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datahike.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49473){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49477 = cljs.core.keyword_identical_QMARK_;
var expr__49478 = k__10902__auto__;
if(cljs.core.truth_(pred__49477.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__49478))){
return (new datahike.parser.FindColl(G__49473,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49473),null));
}
});

datahike.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datahike.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49473){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.FindColl(self__.element,G__49473,self__.__extmap,self__.__hash));
});

datahike.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datahike.parser.FindColl.cljs$lang$type = true;

datahike.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/FindColl");
});

datahike.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/FindColl");
});

datahike.parser.__GT_FindColl = (function datahike$parser$__GT_FindColl(element){
return (new datahike.parser.FindColl(element,null,null,null));
});

datahike.parser.map__GT_FindColl = (function datahike$parser$map__GT_FindColl(G__49475){
return (new datahike.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__49475),null,cljs.core.dissoc.call(null,G__49475,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
 * @implements {cljs.core.ICounted}
 * @implements {datahike.parser.IFindElements}
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
datahike.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49485,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49487 = k49485;
var G__49487__$1 = (((G__49487 instanceof cljs.core.Keyword))?G__49487.fqn:null);
switch (G__49487__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49485,else__10897__auto__);

}
});

datahike.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.FindScalar{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datahike.parser.FindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49484){
var self__ = this;
var G__49484__$1 = this;
return (new cljs.core.RecordIter((0),G__49484__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.FindScalar.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindScalar.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49481){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.FindScalar(datahike.parser.postwalk.call(null,self__.element,f49481),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.FindScalar.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49482,acc49483){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49482,self__.element,acc49483);
});

datahike.parser.FindScalar.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49483){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49483,self__.element);
});

datahike.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.FindScalar.prototype.datahike$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindScalar.prototype.datahike$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datahike.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49484){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49488 = cljs.core.keyword_identical_QMARK_;
var expr__49489 = k__10902__auto__;
if(cljs.core.truth_(pred__49488.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__49489))){
return (new datahike.parser.FindScalar(G__49484,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49484),null));
}
});

datahike.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datahike.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49484){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.FindScalar(self__.element,G__49484,self__.__extmap,self__.__hash));
});

datahike.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datahike.parser.FindScalar.cljs$lang$type = true;

datahike.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/FindScalar");
});

datahike.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/FindScalar");
});

datahike.parser.__GT_FindScalar = (function datahike$parser$__GT_FindScalar(element){
return (new datahike.parser.FindScalar(element,null,null,null));
});

datahike.parser.map__GT_FindScalar = (function datahike$parser$map__GT_FindScalar(G__49486){
return (new datahike.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__49486),null,cljs.core.dissoc.call(null,G__49486,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
 * @implements {cljs.core.ICounted}
 * @implements {datahike.parser.IFindElements}
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
datahike.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49496,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49498 = k49496;
var G__49498__$1 = (((G__49498 instanceof cljs.core.Keyword))?G__49498.fqn:null);
switch (G__49498__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49496,else__10897__auto__);

}
});

datahike.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.FindTuple{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datahike.parser.FindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49495){
var self__ = this;
var G__49495__$1 = this;
return (new cljs.core.RecordIter((0),G__49495__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.FindTuple.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindTuple.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49492){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.FindTuple(datahike.parser.postwalk.call(null,self__.elements,f49492),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.FindTuple.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49493,acc49494){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49493,self__.elements,acc49494);
});

datahike.parser.FindTuple.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49494){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49494,self__.elements);
});

datahike.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.FindTuple.prototype.datahike$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.FindTuple.prototype.datahike$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datahike.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49495){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49499 = cljs.core.keyword_identical_QMARK_;
var expr__49500 = k__10902__auto__;
if(cljs.core.truth_(pred__49499.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__49500))){
return (new datahike.parser.FindTuple(G__49495,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49495),null));
}
});

datahike.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datahike.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49495){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.FindTuple(self__.elements,G__49495,self__.__extmap,self__.__hash));
});

datahike.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datahike.parser.FindTuple.cljs$lang$type = true;

datahike.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/FindTuple");
});

datahike.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/FindTuple");
});

datahike.parser.__GT_FindTuple = (function datahike$parser$__GT_FindTuple(elements){
return (new datahike.parser.FindTuple(elements,null,null,null));
});

datahike.parser.map__GT_FindTuple = (function datahike$parser$map__GT_FindTuple(G__49497){
return (new datahike.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__49497),null,cljs.core.dissoc.call(null,G__49497,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datahike.parser.find_vars = (function datahike$parser$find_vars(find){
return cljs.core.mapcat.call(null,datahike.parser._find_vars,datahike.parser.find_elements.call(null,find));
});
datahike.parser.aggregate_QMARK_ = (function datahike$parser$aggregate_QMARK_(element){
return (element instanceof datahike.parser.Aggregate);
});
datahike.parser.pull_QMARK_ = (function datahike$parser$pull_QMARK_(element){
return (element instanceof datahike.parser.Pull);
});
datahike.parser.parse_aggregate = (function datahike$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__49506 = form;
var seq__49507 = cljs.core.seq.call(null,vec__49506);
var first__49508 = cljs.core.first.call(null,seq__49507);
var seq__49507__$1 = cljs.core.next.call(null,seq__49507);
var fn = first__49508;
var args = seq__49507__$1;
var fn_STAR_ = datahike.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__10207__auto__ = fn_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
return args_STAR_;
} else {
return and__10207__auto__;
}
})())){
return (new datahike.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_aggregate_custom = (function datahike$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__49512 = form;
var seq__49513 = cljs.core.seq.call(null,vec__49512);
var first__49514 = cljs.core.first.call(null,seq__49513);
var seq__49513__$1 = cljs.core.next.call(null,seq__49513);
var _ = first__49514;
var first__49514__$1 = cljs.core.first.call(null,seq__49513__$1);
var seq__49513__$2 = cljs.core.next.call(null,seq__49513__$1);
var fn = first__49514__$1;
var args = seq__49513__$2;
var fn_STAR_ = datahike.parser.parse_variable.call(null,fn);
var args_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__10207__auto__ = fn_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
return args_STAR_;
} else {
return and__10207__auto__;
}
})())){
return (new datahike.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datahike.parser.parse_pull_expr = (function datahike$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__49518 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__49518,(0),null);
var pattern = cljs.core.nth.call(null,vec__49518,(1),null);
var src_STAR_ = datahike.parser.parse_src_var.call(null,src);
var var_STAR_ = datahike.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__10219__auto__ = datahike.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datahike.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__10207__auto__ = src_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__10207__auto____$1)){
return pattern_STAR_;
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())){
return (new datahike.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datahike.parser.parse_find_elem = (function datahike$parser$parse_find_elem(form){
var or__10219__auto__ = datahike.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
return datahike.parser.parse_aggregate.call(null,form);
}
}
}
});
datahike.parser.parse_find_rel = (function datahike$parser$parse_find_rel(form){
var G__49522 = datahike.parser.parse_seq.call(null,datahike.parser.parse_find_elem,form);
if((G__49522 == null)){
return null;
} else {
return (new datahike.parser.FindRel(G__49522,null,null,null));
}
});
datahike.parser.parse_find_coll = (function datahike$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__49524 = datahike.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__49524 == null)){
return null;
} else {
return (new datahike.parser.FindColl(G__49524,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_find_scalar = (function datahike$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__49526 = datahike.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__49526 == null)){
return null;
} else {
return (new datahike.parser.FindScalar(G__49526,null,null,null));
}
} else {
return null;
}
});
datahike.parser.parse_find_tuple = (function datahike$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__49528 = datahike.parser.parse_seq.call(null,datahike.parser.parse_find_elem,inner);
if((G__49528 == null)){
return null;
} else {
return (new datahike.parser.FindTuple(G__49528,null,null,null));
}
} else {
return null;
}
});
datahike.parser.parse_find = (function datahike$parser$parse_find(form){
var or__10219__auto__ = datahike.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
var or__10219__auto____$3 = datahike.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__10219__auto____$3)){
return or__10219__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datahike.parser.parse_with = (function datahike$parser$parse_with(form){
var or__10219__auto__ = datahike.parser.parse_seq.call(null,datahike.parser.parse_variable,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datahike.parser.parse_in_binding = (function datahike$parser$parse_in_binding(form){
var temp__6736__auto__ = (function (){var or__10219__auto__ = datahike.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datahike.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var var$ = temp__6736__auto__;
return datahike.parser.with_source.call(null,(new datahike.parser.BindScalar(var$,null,null,null)),form);
} else {
return datahike.parser.parse_binding.call(null,form);
}
});
datahike.parser.parse_in = (function datahike$parser$parse_in(form){
var or__10219__auto__ = datahike.parser.parse_seq.call(null,datahike.parser.parse_in_binding,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49533,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49535 = k49533;
var G__49535__$1 = (((G__49535 instanceof cljs.core.Keyword))?G__49535.fqn:null);
switch (G__49535__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49533,else__10897__auto__);

}
});

datahike.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Pattern{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datahike.parser.Pattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49532){
var self__ = this;
var G__49532__$1 = this;
return (new cljs.core.RecordIter((0),G__49532__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Pattern.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Pattern.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49529){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Pattern(datahike.parser.postwalk.call(null,self__.source,f49529),datahike.parser.postwalk.call(null,self__.pattern,f49529),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Pattern.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49530,acc49531){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49530,self__.pattern,datahike.parser.collect.call(null,pred49530,self__.source,acc49531));
});

datahike.parser.Pattern.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49531){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49531,self__.source),self__.pattern);
});

datahike.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49532){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49536 = cljs.core.keyword_identical_QMARK_;
var expr__49537 = k__10902__auto__;
if(cljs.core.truth_(pred__49536.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49537))){
return (new datahike.parser.Pattern(G__49532,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49536.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__49537))){
return (new datahike.parser.Pattern(self__.source,G__49532,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49532),null));
}
}
});

datahike.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datahike.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49532){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Pattern(self__.source,self__.pattern,G__49532,self__.__extmap,self__.__hash));
});

datahike.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datahike.parser.Pattern.cljs$lang$type = true;

datahike.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Pattern");
});

datahike.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Pattern");
});

datahike.parser.__GT_Pattern = (function datahike$parser$__GT_Pattern(source,pattern){
return (new datahike.parser.Pattern(source,pattern,null,null,null));
});

datahike.parser.map__GT_Pattern = (function datahike$parser$map__GT_Pattern(G__49534){
return (new datahike.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49534),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__49534),null,cljs.core.dissoc.call(null,G__49534,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49544,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49546 = k49544;
var G__49546__$1 = (((G__49546 instanceof cljs.core.Keyword))?G__49546.fqn:null);
switch (G__49546__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49544,else__10897__auto__);

}
});

datahike.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Predicate{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.Predicate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49543){
var self__ = this;
var G__49543__$1 = this;
return (new cljs.core.RecordIter((0),G__49543__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Predicate.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Predicate.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49540){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Predicate(datahike.parser.postwalk.call(null,self__.fn,f49540),datahike.parser.postwalk.call(null,self__.args,f49540),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Predicate.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49541,acc49542){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49541,self__.args,datahike.parser.collect.call(null,pred49541,self__.fn,acc49542));
});

datahike.parser.Predicate.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49542){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49542,self__.fn),self__.args);
});

datahike.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49543){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49547 = cljs.core.keyword_identical_QMARK_;
var expr__49548 = k__10902__auto__;
if(cljs.core.truth_(pred__49547.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__49548))){
return (new datahike.parser.Predicate(G__49543,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49547.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__49548))){
return (new datahike.parser.Predicate(self__.fn,G__49543,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49543),null));
}
}
});

datahike.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49543){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Predicate(self__.fn,self__.args,G__49543,self__.__extmap,self__.__hash));
});

datahike.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datahike.parser.Predicate.cljs$lang$type = true;

datahike.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Predicate");
});

datahike.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Predicate");
});

datahike.parser.__GT_Predicate = (function datahike$parser$__GT_Predicate(fn,args){
return (new datahike.parser.Predicate(fn,args,null,null,null));
});

datahike.parser.map__GT_Predicate = (function datahike$parser$map__GT_Predicate(G__49545){
return (new datahike.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__49545),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__49545),null,cljs.core.dissoc.call(null,G__49545,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49555,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49557 = k49555;
var G__49557__$1 = (((G__49557 instanceof cljs.core.Keyword))?G__49557.fqn:null);
switch (G__49557__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49555,else__10897__auto__);

}
});

datahike.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Function{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datahike.parser.Function.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49554){
var self__ = this;
var G__49554__$1 = this;
return (new cljs.core.RecordIter((0),G__49554__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Function.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Function.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49551){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Function(datahike.parser.postwalk.call(null,self__.fn,f49551),datahike.parser.postwalk.call(null,self__.args,f49551),datahike.parser.postwalk.call(null,self__.binding,f49551),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Function.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49552,acc49553){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49552,self__.binding,datahike.parser.collect.call(null,pred49552,self__.args,datahike.parser.collect.call(null,pred49552,self__.fn,acc49553)));
});

datahike.parser.Function.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49553){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49553,self__.fn),self__.args),self__.binding);
});

datahike.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49554){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49558 = cljs.core.keyword_identical_QMARK_;
var expr__49559 = k__10902__auto__;
if(cljs.core.truth_(pred__49558.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__49559))){
return (new datahike.parser.Function(G__49554,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49558.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__49559))){
return (new datahike.parser.Function(self__.fn,G__49554,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49558.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__49559))){
return (new datahike.parser.Function(self__.fn,self__.args,G__49554,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49554),null));
}
}
}
});

datahike.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datahike.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49554){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Function(self__.fn,self__.args,self__.binding,G__49554,self__.__extmap,self__.__hash));
});

datahike.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datahike.parser.Function.cljs$lang$type = true;

datahike.parser.Function.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Function");
});

datahike.parser.Function.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Function");
});

datahike.parser.__GT_Function = (function datahike$parser$__GT_Function(fn,args,binding){
return (new datahike.parser.Function(fn,args,binding,null,null,null));
});

datahike.parser.map__GT_Function = (function datahike$parser$map__GT_Function(G__49556){
return (new datahike.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__49556),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__49556),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__49556),null,cljs.core.dissoc.call(null,G__49556,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49566,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49568 = k49566;
var G__49568__$1 = (((G__49568 instanceof cljs.core.Keyword))?G__49568.fqn:null);
switch (G__49568__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49566,else__10897__auto__);

}
});

datahike.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.RuleExpr{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.RuleExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49565){
var self__ = this;
var G__49565__$1 = this;
return (new cljs.core.RecordIter((0),G__49565__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.RuleExpr.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleExpr.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49562){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.RuleExpr(datahike.parser.postwalk.call(null,self__.source,f49562),datahike.parser.postwalk.call(null,self__.name,f49562),datahike.parser.postwalk.call(null,self__.args,f49562),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.RuleExpr.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49563,acc49564){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49563,self__.args,datahike.parser.collect.call(null,pred49563,self__.name,datahike.parser.collect.call(null,pred49563,self__.source,acc49564)));
});

datahike.parser.RuleExpr.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49564){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49564,self__.source),self__.name),self__.args);
});

datahike.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49565){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49569 = cljs.core.keyword_identical_QMARK_;
var expr__49570 = k__10902__auto__;
if(cljs.core.truth_(pred__49569.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49570))){
return (new datahike.parser.RuleExpr(G__49565,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49569.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__49570))){
return (new datahike.parser.RuleExpr(self__.source,G__49565,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49569.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__49570))){
return (new datahike.parser.RuleExpr(self__.source,self__.name,G__49565,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49565),null));
}
}
}
});

datahike.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datahike.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49565){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.RuleExpr(self__.source,self__.name,self__.args,G__49565,self__.__extmap,self__.__hash));
});

datahike.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datahike.parser.RuleExpr.cljs$lang$type = true;

datahike.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/RuleExpr");
});

datahike.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/RuleExpr");
});

datahike.parser.__GT_RuleExpr = (function datahike$parser$__GT_RuleExpr(source,name,args){
return (new datahike.parser.RuleExpr(source,name,args,null,null,null));
});

datahike.parser.map__GT_RuleExpr = (function datahike$parser$map__GT_RuleExpr(G__49567){
return (new datahike.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49567),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__49567),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__49567),null,cljs.core.dissoc.call(null,G__49567,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49577,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49579 = k49577;
var G__49579__$1 = (((G__49579 instanceof cljs.core.Keyword))?G__49579.fqn:null);
switch (G__49579__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49577,else__10897__auto__);

}
});

datahike.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Not{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.Not.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49576){
var self__ = this;
var G__49576__$1 = this;
return (new cljs.core.RecordIter((0),G__49576__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Not.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Not.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49573){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Not(datahike.parser.postwalk.call(null,self__.source,f49573),datahike.parser.postwalk.call(null,self__.vars,f49573),datahike.parser.postwalk.call(null,self__.clauses,f49573),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Not.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49574,acc49575){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49574,self__.clauses,datahike.parser.collect.call(null,pred49574,self__.vars,datahike.parser.collect.call(null,pred49574,self__.source,acc49575)));
});

datahike.parser.Not.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49575){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49575,self__.source),self__.vars),self__.clauses);
});

datahike.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49576){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49580 = cljs.core.keyword_identical_QMARK_;
var expr__49581 = k__10902__auto__;
if(cljs.core.truth_(pred__49580.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49581))){
return (new datahike.parser.Not(G__49576,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49580.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__49581))){
return (new datahike.parser.Not(self__.source,G__49576,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49580.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__49581))){
return (new datahike.parser.Not(self__.source,self__.vars,G__49576,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49576),null));
}
}
}
});

datahike.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49576){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Not(self__.source,self__.vars,self__.clauses,G__49576,self__.__extmap,self__.__hash));
});

datahike.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datahike.parser.Not.cljs$lang$type = true;

datahike.parser.Not.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Not");
});

datahike.parser.Not.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Not");
});

datahike.parser.__GT_Not = (function datahike$parser$__GT_Not(source,vars,clauses){
return (new datahike.parser.Not(source,vars,clauses,null,null,null));
});

datahike.parser.map__GT_Not = (function datahike$parser$map__GT_Not(G__49578){
return (new datahike.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49578),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__49578),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__49578),null,cljs.core.dissoc.call(null,G__49578,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49588,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49590 = k49588;
var G__49590__$1 = (((G__49590 instanceof cljs.core.Keyword))?G__49590.fqn:null);
switch (G__49590__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49588,else__10897__auto__);

}
});

datahike.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Or{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.Or.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49587){
var self__ = this;
var G__49587__$1 = this;
return (new cljs.core.RecordIter((0),G__49587__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Or.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Or.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49584){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Or(datahike.parser.postwalk.call(null,self__.source,f49584),datahike.parser.postwalk.call(null,self__.rule_vars,f49584),datahike.parser.postwalk.call(null,self__.clauses,f49584),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Or.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49585,acc49586){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49585,self__.clauses,datahike.parser.collect.call(null,pred49585,self__.rule_vars,datahike.parser.collect.call(null,pred49585,self__.source,acc49586)));
});

datahike.parser.Or.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49586){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49586,self__.source),self__.rule_vars),self__.clauses);
});

datahike.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49587){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49591 = cljs.core.keyword_identical_QMARK_;
var expr__49592 = k__10902__auto__;
if(cljs.core.truth_(pred__49591.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__49592))){
return (new datahike.parser.Or(G__49587,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49591.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__49592))){
return (new datahike.parser.Or(self__.source,G__49587,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49591.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__49592))){
return (new datahike.parser.Or(self__.source,self__.rule_vars,G__49587,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49587),null));
}
}
}
});

datahike.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49587){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__49587,self__.__extmap,self__.__hash));
});

datahike.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datahike.parser.Or.cljs$lang$type = true;

datahike.parser.Or.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Or");
});

datahike.parser.Or.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Or");
});

datahike.parser.__GT_Or = (function datahike$parser$__GT_Or(source,rule_vars,clauses){
return (new datahike.parser.Or(source,rule_vars,clauses,null,null,null));
});

datahike.parser.map__GT_Or = (function datahike$parser$map__GT_Or(G__49589){
return (new datahike.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__49589),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__49589),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__49589),null,cljs.core.dissoc.call(null,G__49589,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49599,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49601 = k49599;
var G__49601__$1 = (((G__49601 instanceof cljs.core.Keyword))?G__49601.fqn:null);
switch (G__49601__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49599,else__10897__auto__);

}
});

datahike.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.And{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.And.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49598){
var self__ = this;
var G__49598__$1 = this;
return (new cljs.core.RecordIter((0),G__49598__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.And.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.And.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49595){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.And(datahike.parser.postwalk.call(null,self__.clauses,f49595),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.And.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49596,acc49597){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49596,self__.clauses,acc49597);
});

datahike.parser.And.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49597){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,acc49597,self__.clauses);
});

datahike.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49598){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49602 = cljs.core.keyword_identical_QMARK_;
var expr__49603 = k__10902__auto__;
if(cljs.core.truth_(pred__49602.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__49603))){
return (new datahike.parser.And(G__49598,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49598),null));
}
});

datahike.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49598){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.And(self__.clauses,G__49598,self__.__extmap,self__.__hash));
});

datahike.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datahike.parser.And.cljs$lang$type = true;

datahike.parser.And.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/And");
});

datahike.parser.And.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/And");
});

datahike.parser.__GT_And = (function datahike$parser$__GT_And(clauses){
return (new datahike.parser.And(clauses,null,null,null));
});

datahike.parser.map__GT_And = (function datahike$parser$map__GT_And(G__49600){
return (new datahike.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__49600),null,cljs.core.dissoc.call(null,G__49600,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datahike.parser.parse_pattern_el = (function datahike$parser$parse_pattern_el(form){
var or__10219__auto__ = datahike.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return datahike.parser.parse_constant.call(null,form);
}
}
});
datahike.parser.take_source = (function datahike$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__6736__auto__ = datahike.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6736__auto__)){
var source_STAR_ = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datahike.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datahike.parser.parse_pattern = (function datahike$parser$parse_pattern(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49609 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49609,(0),null);
var next_form = cljs.core.nth.call(null,vec__49609,(1),null);
var temp__6738__auto____$1 = datahike.parser.parse_seq.call(null,datahike.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__6738__auto____$1)){
var pattern_STAR_ = temp__6738__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datahike.parser.with_source.call(null,(new datahike.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_call = (function datahike$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__49615 = form;
var seq__49616 = cljs.core.seq.call(null,vec__49615);
var first__49617 = cljs.core.first.call(null,seq__49616);
var seq__49616__$1 = cljs.core.next.call(null,seq__49616);
var fn = first__49617;
var args = seq__49616__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__10219__auto__ = datahike.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return datahike.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__10207__auto__ = fn_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
return args_STAR_;
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_pred = (function datahike$parser$parse_pred(form){
if(cljs.core.truth_(datahike.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__6738__auto__ = datahike.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49621 = temp__6738__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__49621,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__49621,(1),null);
return datahike.parser.with_source.call(null,(new datahike.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_fn = (function datahike$parser$parse_fn(form){
if(cljs.core.truth_(datahike.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__49630 = form;
var call = cljs.core.nth.call(null,vec__49630,(0),null);
var binding = cljs.core.nth.call(null,vec__49630,(1),null);
var temp__6738__auto__ = datahike.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49633 = temp__6738__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__49633,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__49633,(1),null);
var temp__6738__auto____$1 = datahike.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__6738__auto____$1)){
var binding_STAR_ = temp__6738__auto____$1;
return datahike.parser.with_source.call(null,(new datahike.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_rule_expr = (function datahike$parser$parse_rule_expr(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49642 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49642,(0),null);
var next_form = cljs.core.nth.call(null,vec__49642,(1),null);
var vec__49645 = next_form;
var seq__49646 = cljs.core.seq.call(null,vec__49645);
var first__49647 = cljs.core.first.call(null,seq__49646);
var seq__49646__$1 = cljs.core.next.call(null,seq__49646);
var name = first__49647;
var args = seq__49646__$1;
var name_STAR_ = datahike.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datahike.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.collect_vars_acc = (function datahike$parser$collect_vars_acc(acc,form){
if((form instanceof datahike.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datahike.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datahike.parser.Or)){
return datahike.parser.collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datahike$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datahike.parser.ITraversable,form))){
return datahike.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datahike.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datahike.parser.collect_vars = (function datahike$parser$collect_vars(form){
return datahike.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datahike.parser.collect_vars_distinct = (function datahike$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datahike.parser.collect_vars.call(null,form)));
});
datahike.parser.validate_join_vars = (function datahike$parser$validate_join_vars(vars,clauses,form){
var undeclared_49650 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datahike.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_49650)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variable not declared inside clauses: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_49650)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datahike.parser.validate_not = (function datahike$parser$validate_not(clause,form){
datahike.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datahike.parser.parse_not = (function datahike$parser$parse_not(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49657 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49657,(0),null);
var next_form = cljs.core.nth.call(null,vec__49657,(1),null);
var vec__49660 = next_form;
var seq__49661 = cljs.core.seq.call(null,vec__49660);
var first__49662 = cljs.core.first.call(null,seq__49661);
var seq__49661__$1 = cljs.core.next.call(null,seq__49661);
var sym = first__49662;
var clauses = seq__49661__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__6736__auto__ = datahike.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__6736__auto__)){
var clauses_STAR_ = temp__6736__auto__;
return datahike.parser.validate_not.call(null,datahike.parser.with_source.call(null,(new datahike.parser.Not(source_STAR_,datahike.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_not_join = (function datahike$parser$parse_not_join(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49669 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49669,(0),null);
var next_form = cljs.core.nth.call(null,vec__49669,(1),null);
var vec__49672 = next_form;
var seq__49673 = cljs.core.seq.call(null,vec__49672);
var first__49674 = cljs.core.first.call(null,seq__49673);
var seq__49673__$1 = cljs.core.next.call(null,seq__49673);
var sym = first__49674;
var first__49674__$1 = cljs.core.first.call(null,seq__49673__$1);
var seq__49673__$2 = cljs.core.next.call(null,seq__49673__$1);
var vars = first__49674__$1;
var clauses = seq__49673__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datahike.parser.parse_seq.call(null,datahike.parser.parse_variable,vars);
var clauses_STAR_ = datahike.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__10207__auto__ = vars_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
return clauses_STAR_;
} else {
return and__10207__auto__;
}
})())){
return datahike.parser.validate_not.call(null,datahike.parser.with_source.call(null,(new datahike.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.validate_or = (function datahike$parser$validate_or(clause,form){
var map__49683 = clause;
var map__49683__$1 = ((((!((map__49683 == null)))?((((map__49683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49683):map__49683);
var map__49684 = cljs.core.get.call(null,map__49683__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__49684__$1 = ((((!((map__49684 == null)))?((((map__49684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49684):map__49684);
var required = cljs.core.get.call(null,map__49684__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__49684__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__49683__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__49687_49691 = cljs.core.seq.call(null,clauses);
var chunk__49688_49692 = null;
var count__49689_49693 = (0);
var i__49690_49694 = (0);
while(true){
if((i__49690_49694 < count__49689_49693)){
var clause_49695__$1 = cljs.core._nth.call(null,chunk__49688_49692,i__49690_49694);
datahike.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_49695__$1], null),form);

var G__49696 = seq__49687_49691;
var G__49697 = chunk__49688_49692;
var G__49698 = count__49689_49693;
var G__49699 = (i__49690_49694 + (1));
seq__49687_49691 = G__49696;
chunk__49688_49692 = G__49697;
count__49689_49693 = G__49698;
i__49690_49694 = G__49699;
continue;
} else {
var temp__6738__auto___49700 = cljs.core.seq.call(null,seq__49687_49691);
if(temp__6738__auto___49700){
var seq__49687_49701__$1 = temp__6738__auto___49700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49687_49701__$1)){
var c__11130__auto___49702 = cljs.core.chunk_first.call(null,seq__49687_49701__$1);
var G__49703 = cljs.core.chunk_rest.call(null,seq__49687_49701__$1);
var G__49704 = c__11130__auto___49702;
var G__49705 = cljs.core.count.call(null,c__11130__auto___49702);
var G__49706 = (0);
seq__49687_49691 = G__49703;
chunk__49688_49692 = G__49704;
count__49689_49693 = G__49705;
i__49690_49694 = G__49706;
continue;
} else {
var clause_49707__$1 = cljs.core.first.call(null,seq__49687_49701__$1);
datahike.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_49707__$1], null),form);

var G__49708 = cljs.core.next.call(null,seq__49687_49701__$1);
var G__49709 = null;
var G__49710 = (0);
var G__49711 = (0);
seq__49687_49691 = G__49708;
chunk__49688_49692 = G__49709;
count__49689_49693 = G__49710;
i__49690_49694 = G__49711;
continue;
}
} else {
}
}
break;
}

return clause;
});
datahike.parser.parse_and = (function datahike$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datahike.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datahike.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datahike.parser.parse_or = (function datahike$parser$parse_or(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49718 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49718,(0),null);
var next_form = cljs.core.nth.call(null,vec__49718,(1),null);
var vec__49721 = next_form;
var seq__49722 = cljs.core.seq.call(null,vec__49721);
var first__49723 = cljs.core.first.call(null,seq__49722);
var seq__49722__$1 = cljs.core.next.call(null,seq__49722);
var sym = first__49723;
var clauses = seq__49722__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__6736__auto__ = datahike.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datahike.parser.parse_and,datahike.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__6736__auto__)){
var clauses_STAR_ = temp__6736__auto__;
return datahike.parser.validate_or.call(null,datahike.parser.with_source.call(null,(new datahike.parser.Or(source_STAR_,(new datahike.parser.RuleVars(null,datahike.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_or_join = (function datahike$parser$parse_or_join(form){
var temp__6738__auto__ = datahike.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__49730 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__49730,(0),null);
var next_form = cljs.core.nth.call(null,vec__49730,(1),null);
var vec__49733 = next_form;
var seq__49734 = cljs.core.seq.call(null,vec__49733);
var first__49735 = cljs.core.first.call(null,seq__49734);
var seq__49734__$1 = cljs.core.next.call(null,seq__49734);
var sym = first__49735;
var first__49735__$1 = cljs.core.first.call(null,seq__49734__$1);
var seq__49734__$2 = cljs.core.next.call(null,seq__49734__$1);
var vars = first__49735__$1;
var clauses = seq__49734__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datahike.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datahike.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datahike.parser.parse_and,datahike.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__10207__auto__ = vars_STAR_;
if(cljs.core.truth_(and__10207__auto__)){
return clauses_STAR_;
} else {
return and__10207__auto__;
}
})())){
return datahike.parser.validate_or.call(null,datahike.parser.with_source.call(null,(new datahike.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datahike.parser.parse_clause = (function datahike$parser$parse_clause(form){
var or__10219__auto__ = datahike.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = datahike.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
var or__10219__auto____$2 = datahike.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__10219__auto____$2)){
return or__10219__auto____$2;
} else {
var or__10219__auto____$3 = datahike.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__10219__auto____$3)){
return or__10219__auto____$3;
} else {
var or__10219__auto____$4 = datahike.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__10219__auto____$4)){
return or__10219__auto____$4;
} else {
var or__10219__auto____$5 = datahike.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__10219__auto____$5)){
return or__10219__auto____$5;
} else {
var or__10219__auto____$6 = datahike.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__10219__auto____$6)){
return or__10219__auto____$6;
} else {
var or__10219__auto____$7 = datahike.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__10219__auto____$7)){
return or__10219__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datahike.parser.parse_clauses = (function datahike$parser$parse_clauses(clauses){
return datahike.parser.parse_seq.call(null,datahike.parser.parse_clause,clauses);
});
datahike.parser.parse_where = (function datahike$parser$parse_where(form){
var or__10219__auto__ = datahike.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49741,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49743 = k49741;
var G__49743__$1 = (((G__49743 instanceof cljs.core.Keyword))?G__49743.fqn:null);
switch (G__49743__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49741,else__10897__auto__);

}
});

datahike.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.RuleBranch{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.RuleBranch.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49740){
var self__ = this;
var G__49740__$1 = this;
return (new cljs.core.RecordIter((0),G__49740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.RuleBranch.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.RuleBranch.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49737){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.RuleBranch(datahike.parser.postwalk.call(null,self__.vars,f49737),datahike.parser.postwalk.call(null,self__.clauses,f49737),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.RuleBranch.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49738,acc49739){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49738,self__.clauses,datahike.parser.collect.call(null,pred49738,self__.vars,acc49739));
});

datahike.parser.RuleBranch.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49739){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49739,self__.vars),self__.clauses);
});

datahike.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49740){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49744 = cljs.core.keyword_identical_QMARK_;
var expr__49745 = k__10902__auto__;
if(cljs.core.truth_(pred__49744.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__49745))){
return (new datahike.parser.RuleBranch(G__49740,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49744.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__49745))){
return (new datahike.parser.RuleBranch(self__.vars,G__49740,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49740),null));
}
}
});

datahike.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datahike.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49740){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.RuleBranch(self__.vars,self__.clauses,G__49740,self__.__extmap,self__.__hash));
});

datahike.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datahike.parser.RuleBranch.cljs$lang$type = true;

datahike.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/RuleBranch");
});

datahike.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/RuleBranch");
});

datahike.parser.__GT_RuleBranch = (function datahike$parser$__GT_RuleBranch(vars,clauses){
return (new datahike.parser.RuleBranch(vars,clauses,null,null,null));
});

datahike.parser.map__GT_RuleBranch = (function datahike$parser$map__GT_RuleBranch(G__49742){
return (new datahike.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__49742),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__49742),null,cljs.core.dissoc.call(null,G__49742,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49752,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49754 = k49752;
var G__49754__$1 = (((G__49754 instanceof cljs.core.Keyword))?G__49754.fqn:null);
switch (G__49754__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49752,else__10897__auto__);

}
});

datahike.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Rule{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datahike.parser.Rule.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49751){
var self__ = this;
var G__49751__$1 = this;
return (new cljs.core.RecordIter((0),G__49751__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Rule.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Rule.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49748){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Rule(datahike.parser.postwalk.call(null,self__.name,f49748),datahike.parser.postwalk.call(null,self__.branches,f49748),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Rule.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49749,acc49750){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49749,self__.branches,datahike.parser.collect.call(null,pred49749,self__.name,acc49750));
});

datahike.parser.Rule.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49750){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49750,self__.name),self__.branches);
});

datahike.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49751){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49755 = cljs.core.keyword_identical_QMARK_;
var expr__49756 = k__10902__auto__;
if(cljs.core.truth_(pred__49755.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__49756))){
return (new datahike.parser.Rule(G__49751,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49755.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__49756))){
return (new datahike.parser.Rule(self__.name,G__49751,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49751),null));
}
}
});

datahike.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datahike.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49751){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Rule(self__.name,self__.branches,G__49751,self__.__extmap,self__.__hash));
});

datahike.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datahike.parser.Rule.cljs$lang$type = true;

datahike.parser.Rule.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Rule");
});

datahike.parser.Rule.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Rule");
});

datahike.parser.__GT_Rule = (function datahike$parser$__GT_Rule(name,branches){
return (new datahike.parser.Rule(name,branches,null,null,null));
});

datahike.parser.map__GT_Rule = (function datahike$parser$map__GT_Rule(G__49753){
return (new datahike.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__49753),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__49753),null,cljs.core.dissoc.call(null,G__49753,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datahike.parser.validate_vars = (function datahike$parser$validate_vars(vars,clauses,form){
var declared_vars = datahike.parser.collect.call(null,(function (p1__49759_SHARP_){
return (p1__49759_SHARP_ instanceof datahike.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datahike.parser.collect.call(null,((function (declared_vars){
return (function (p1__49760_SHARP_){
return (p1__49760_SHARP_ instanceof datahike.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Reference to the unknown variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datahike.parser.parse_rule = (function datahike$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__49767 = form;
var seq__49768 = cljs.core.seq.call(null,vec__49767);
var first__49769 = cljs.core.first.call(null,seq__49768);
var seq__49768__$1 = cljs.core.next.call(null,seq__49768);
var head = first__49769;
var clauses = seq__49768__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__49770 = head;
var seq__49771 = cljs.core.seq.call(null,vec__49770);
var first__49772 = cljs.core.first.call(null,seq__49771);
var seq__49771__$1 = cljs.core.next.call(null,seq__49771);
var name = first__49772;
var vars = seq__49771__$1;
var name_STAR_ = (function (){var or__10219__auto__ = datahike.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datahike.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__10219__auto__ = cljs.core.not_empty.call(null,datahike.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datahike.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datahike.parser.validate_arity = (function datahike$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datahike.parser.rule_vars_arity.call(null,vars0);
var seq__49779 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__49781 = null;
var count__49782 = (0);
var i__49783 = (0);
while(true){
if((i__49783 < count__49782)){
var b = cljs.core._nth.call(null,chunk__49781,i__49783);
var vars_49785 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datahike.parser.rule_vars_arity.call(null,vars_49785))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.flatten_rule_vars.call(null,vars_49785)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__49786 = seq__49779;
var G__49787 = chunk__49781;
var G__49788 = count__49782;
var G__49789 = (i__49783 + (1));
seq__49779 = G__49786;
chunk__49781 = G__49787;
count__49782 = G__49788;
i__49783 = G__49789;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__49779);
if(temp__6738__auto__){
var seq__49779__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49779__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__49779__$1);
var G__49790 = cljs.core.chunk_rest.call(null,seq__49779__$1);
var G__49791 = c__11130__auto__;
var G__49792 = cljs.core.count.call(null,c__11130__auto__);
var G__49793 = (0);
seq__49779 = G__49790;
chunk__49781 = G__49791;
count__49782 = G__49792;
i__49783 = G__49793;
continue;
} else {
var b = cljs.core.first.call(null,seq__49779__$1);
var vars_49794 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datahike.parser.rule_vars_arity.call(null,vars_49794))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datahike.parser.flatten_rule_vars.call(null,vars_49794)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__49795 = cljs.core.next.call(null,seq__49779__$1);
var G__49796 = null;
var G__49797 = (0);
var G__49798 = (0);
seq__49779 = G__49795;
chunk__49781 = G__49796;
count__49782 = G__49797;
i__49783 = G__49798;
continue;
}
} else {
return null;
}
}
break;
}
});
datahike.parser.parse_rules = (function datahike$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__11081__auto__ = (function datahike$parser$parse_rules_$_iter__49816(s__49817){
return (new cljs.core.LazySeq(null,(function (){
var s__49817__$1 = s__49817;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__49817__$1);
if(temp__6738__auto__){
var s__49817__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49817__$2)){
var c__11079__auto__ = cljs.core.chunk_first.call(null,s__49817__$2);
var size__11080__auto__ = cljs.core.count.call(null,c__11079__auto__);
var b__49819 = cljs.core.chunk_buffer.call(null,size__11080__auto__);
if((function (){var i__49818 = (0);
while(true){
if((i__49818 < size__11080__auto__)){
var vec__49826 = cljs.core._nth.call(null,c__11079__auto__,i__49818);
var name = cljs.core.nth.call(null,vec__49826,(0),null);
var branches = cljs.core.nth.call(null,vec__49826,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__49818,vec__49826,name,branches,c__11079__auto__,size__11080__auto__,b__49819,s__49817__$2,temp__6738__auto__){
return (function (p1__49799_SHARP_){
return (new datahike.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__49799_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__49799_SHARP_),null,null,null));
});})(i__49818,vec__49826,name,branches,c__11079__auto__,size__11080__auto__,b__49819,s__49817__$2,temp__6738__auto__))
,branches);
cljs.core.chunk_append.call(null,b__49819,(function (){
datahike.parser.validate_arity.call(null,name,branches__$1);

return (new datahike.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__49832 = (i__49818 + (1));
i__49818 = G__49832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49819),datahike$parser$parse_rules_$_iter__49816.call(null,cljs.core.chunk_rest.call(null,s__49817__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49819),null);
}
} else {
var vec__49829 = cljs.core.first.call(null,s__49817__$2);
var name = cljs.core.nth.call(null,vec__49829,(0),null);
var branches = cljs.core.nth.call(null,vec__49829,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__49829,name,branches,s__49817__$2,temp__6738__auto__){
return (function (p1__49799_SHARP_){
return (new datahike.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__49799_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__49799_SHARP_),null,null,null));
});})(vec__49829,name,branches,s__49817__$2,temp__6738__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datahike.parser.validate_arity.call(null,name,branches__$1);

return (new datahike.parser.Rule(name,branches__$1,null,null,null));
})()
,datahike$parser$parse_rules_$_iter__49816.call(null,cljs.core.rest.call(null,s__49817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11081__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datahike.parser.parse_seq.call(null,datahike.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {datahike.parser.ITraversable}
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
datahike.parser.Query = (function (qfind,qwith,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datahike.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

datahike.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k49837,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__49839 = k49837;
var G__49839__$1 = (((G__49839 instanceof cljs.core.Keyword))?G__49839.fqn:null);
switch (G__49839__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49837,else__10897__auto__);

}
});

datahike.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#datahike.parser.Query{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datahike.parser.Query.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49836){
var self__ = this;
var G__49836__$1 = this;
return (new cljs.core.RecordIter((0),G__49836__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datahike.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

datahike.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new datahike.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
});

datahike.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datahike.parser.Query.prototype.datahike$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datahike.parser.Query.prototype.datahike$parser$ITraversable$_postwalk$arity$2 = (function (this__48090__auto__,f49833){
var self__ = this;
var this__48090__auto____$1 = this;
var new__48091__auto__ = (new datahike.parser.Query(datahike.parser.postwalk.call(null,self__.qfind,f49833),datahike.parser.postwalk.call(null,self__.qwith,f49833),datahike.parser.postwalk.call(null,self__.qin,f49833),datahike.parser.postwalk.call(null,self__.qwhere,f49833),null,null,null));
var temp__6736__auto__ = cljs.core.meta.call(null,this__48090__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__48092__auto__ = temp__6736__auto__;
return cljs.core.with_meta.call(null,new__48091__auto__,meta__48092__auto__);
} else {
return new__48091__auto__;
}
});

datahike.parser.Query.prototype.datahike$parser$ITraversable$_collect$arity$3 = (function (___48093__auto__,pred49834,acc49835){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect.call(null,pred49834,self__.qwhere,datahike.parser.collect.call(null,pred49834,self__.qin,datahike.parser.collect.call(null,pred49834,self__.qwith,datahike.parser.collect.call(null,pred49834,self__.qfind,acc49835))));
});

datahike.parser.Query.prototype.datahike$parser$ITraversable$_collect_vars$arity$2 = (function (___48093__auto__,acc49835){
var self__ = this;
var ___48093__auto____$1 = this;
return datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,datahike.parser.collect_vars_acc.call(null,acc49835,self__.qfind),self__.qwith),self__.qin),self__.qwhere);
});

datahike.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

datahike.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

datahike.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new datahike.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

datahike.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__49836){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__49840 = cljs.core.keyword_identical_QMARK_;
var expr__49841 = k__10902__auto__;
if(cljs.core.truth_(pred__49840.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__49841))){
return (new datahike.parser.Query(G__49836,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49840.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__49841))){
return (new datahike.parser.Query(self__.qfind,G__49836,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49840.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__49841))){
return (new datahike.parser.Query(self__.qfind,self__.qwith,G__49836,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49840.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__49841))){
return (new datahike.parser.Query(self__.qfind,self__.qwith,self__.qin,G__49836,self__.__meta,self__.__extmap,null));
} else {
return (new datahike.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__49836),null));
}
}
}
}
});

datahike.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datahike.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__49836){
var self__ = this;
var this__10893__auto____$1 = this;
return (new datahike.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,G__49836,self__.__extmap,self__.__hash));
});

datahike.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

datahike.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
});

datahike.parser.Query.cljs$lang$type = true;

datahike.parser.Query.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datahike.parser/Query");
});

datahike.parser.Query.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"datahike.parser/Query");
});

datahike.parser.__GT_Query = (function datahike$parser$__GT_Query(qfind,qwith,qin,qwhere){
return (new datahike.parser.Query(qfind,qwith,qin,qwhere,null,null,null));
});

datahike.parser.map__GT_Query = (function datahike$parser$map__GT_Query(G__49838){
return (new datahike.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__49838),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__49838),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__49838),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__49838),null,cljs.core.dissoc.call(null,G__49838,new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)),null));
});

datahike.parser.query__GT_map = (function datahike$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__6736__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__6736__auto__)){
var q = temp__6736__auto__;
if((q instanceof cljs.core.Keyword)){
var G__49844 = parsed;
var G__49845 = q;
var G__49846 = cljs.core.next.call(null,qs);
parsed = G__49844;
key = G__49845;
qs = G__49846;
continue;
} else {
var G__49847 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__49848 = key;
var G__49849 = cljs.core.next.call(null,qs);
parsed = G__49847;
key = G__49848;
qs = G__49849;
continue;
}
} else {
return parsed;
}
break;
}
});
datahike.parser.validate_query = (function datahike$parser$validate_query(q,form){
var find_vars_49856 = cljs.core.set.call(null,datahike.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_49857 = cljs.core.set.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_49858 = cljs.core.set.call(null,datahike.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_49859 = cljs.core.set.call(null,datahike.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_49860 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_49856,with_vars_49857),clojure.set.union.call(null,where_vars_49859,in_vars_49858));
var shared_49861 = clojure.set.intersection.call(null,find_vars_49856,with_vars_49857);
if(cljs.core.empty_QMARK_.call(null,unknown_49860)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query for unknown vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_49860)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_49860,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_49861)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":in and :with should not use same variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_49861)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_49861,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_49862 = datahike.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_49863 = datahike.parser.collect.call(null,((function (in_vars_49862){
return (function (p1__49850_SHARP_){
return (p1__49850_SHARP_ instanceof datahike.parser.SrcVar);
});})(in_vars_49862))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_49864 = datahike.parser.collect.call(null,((function (in_vars_49862,in_sources_49863){
return (function (p1__49851_SHARP_){
return (p1__49851_SHARP_ instanceof datahike.parser.RulesVar);
});})(in_vars_49862,in_sources_49863))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__10207__auto__ = datahike.parser.distinct_QMARK_.call(null,in_vars_49862);
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = datahike.parser.distinct_QMARK_.call(null,in_sources_49863);
if(cljs.core.truth_(and__10207__auto____$1)){
return datahike.parser.distinct_QMARK_.call(null,in_rules_49864);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_49865 = datahike.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datahike.parser.distinct_QMARK_.call(null,with_vars_49865))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_49866 = datahike.parser.collect.call(null,(function (p1__49852_SHARP_){
return (p1__49852_SHARP_ instanceof datahike.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_49867 = datahike.parser.collect.call(null,((function (in_sources_49866){
return (function (p1__49853_SHARP_){
return (p1__49853_SHARP_ instanceof datahike.parser.SrcVar);
});})(in_sources_49866))
,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_49868 = clojure.set.difference.call(null,where_sources_49867,in_sources_49866);
if(cljs.core.empty_QMARK_.call(null,unknown_49868)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Where uses unknown source vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_49868)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_49868,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datahike.parser.collect.call(null,(function (p1__49854_SHARP_){
return (p1__49854_SHARP_ instanceof datahike.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datahike.parser.collect.call(null,((function (rule_exprs){
return (function (p1__49855_SHARP_){
return (p1__49855_SHARP_ instanceof datahike.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datahike.parser.parse_query = (function datahike$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datahike.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datahike.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datahike.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__6738__auto__)){
var with$ = temp__6738__auto__;
return datahike.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datahike.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),datahike.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datahike.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map