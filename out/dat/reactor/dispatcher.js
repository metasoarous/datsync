// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('com.stuartsierra.component');
goog.require('dat.spec.protocols');

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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.StrictlyOrderedDispatcher = (function (dispatch_chan,__meta,__extmap,__hash){
this.dispatch_chan = dispatch_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51296,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51298 = k51296;
var G__51298__$1 = (((G__51298 instanceof cljs.core.Keyword))?G__51298.fqn:null);
switch (G__51298__$1) {
case "dispatch-chan":
return self__.dispatch_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51296,else__10897__auto__);

}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.reactor.dispatcher.StrictlyOrderedDispatcher{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51295){
var self__ = this;
var G__51295__$1 = this;
return (new cljs.core.RecordIter((0),G__51295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 = (function (dispatcher,event){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.dispatch_chan,event);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (dispatcher,event,level){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.dispatch_chan,event);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51295){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51299 = cljs.core.keyword_identical_QMARK_;
var expr__51300 = k__10902__auto__;
if(cljs.core.truth_(pred__51299.call(null,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),expr__51300))){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(G__51295,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51295),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51295){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,G__51295,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init3019280340854796545.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting StrictlyOrderedDispatcher"], null);
});})(dispatcher__$1))
,null)),null,1429062220);

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),(function (){var or__10219__auto__ = self__.dispatch_chan;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})());
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init3019280340854796545.clj",48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping StrictlyOrderedDispatcher"], null);
});})(dispatcher__$1))
,null)),null,-744669511);

if(cljs.core.truth_(self__.dispatch_chan)){
cljs.core.async.close_BANG_.call(null,self__.dispatch_chan);
} else {
}

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-chan","dispatch-chan",-2025542194,null)], null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$__GT_StrictlyOrderedDispatcher(dispatch_chan){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(dispatch_chan,null,null,null));
});

dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$map__GT_StrictlyOrderedDispatcher(G__51297){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575).cljs$core$IFn$_invoke$arity$1(G__51297),null,cljs.core.dissoc.call(null,G__51297,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)),null));
});

/**
 * Creates a new strictly ordered dispatcher. This is fine for most cases, and ensures that all events are
 *   handled in the order they were dispatched (or should...). Can specify `{:dispatch-chan your-chan}` to customize
 *   the flow.
 */
dat.reactor.dispatcher.new_strictly_ordered_dispatcher = (function dat$reactor$dispatcher$new_strictly_ordered_dispatcher(var_args){
var args51303 = [];
var len__11440__auto___51306 = arguments.length;
var i__11441__auto___51307 = (0);
while(true){
if((i__11441__auto___51307 < len__11440__auto___51306)){
args51303.push((arguments[i__11441__auto___51307]));

var G__51308 = (i__11441__auto___51307 + (1));
i__11441__auto___51307 = G__51308;
continue;
} else {
}
break;
}

var G__51305 = args51303.length;
switch (G__51305) {
case 1:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51303.length)].join('')));

}
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$lang$maxFixedArity = 1;


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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.ErrorPriorityDispatcher = (function (default_GT_,error_GT_,ppub,send_GT_,recv_GT_,__meta,__extmap,__hash){
this.default_GT_ = default_GT_;
this.error_GT_ = error_GT_;
this.ppub = ppub;
this.send_GT_ = send_GT_;
this.recv_GT_ = recv_GT_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51311,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51313 = k51311;
var G__51313__$1 = (((G__51313 instanceof cljs.core.Keyword))?G__51313.fqn:null);
switch (G__51313__$1) {
case "default>":
return self__.default_GT_;

break;
case "error>":
return self__.error_GT_;

break;
case "ppub":
return self__.ppub;

break;
case "send>":
return self__.send_GT_;

break;
case "recv>":
return self__.recv_GT_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51311,else__10897__auto__);

}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.reactor.dispatcher.ErrorPriorityDispatcher{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default>","default>",-374545113),self__.default_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error>","error>",-1970398855),self__.error_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppub","ppub",-404508411),self__.ppub],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51310){
var self__ = this;
var G__51310__$1 = this;
return (new cljs.core.RecordIter((0),G__51310__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default>","default>",-374545113),new cljs.core.Keyword(null,"error>","error>",-1970398855),new cljs.core.Keyword(null,"ppub","ppub",-404508411),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$2 = (function (dispatcher,event){
var self__ = this;
var dispatcher__$1 = this;
return dispatcher__$1.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3(null,event,new cljs.core.Keyword(null,"default","default",-1987822328));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (dispatcher,event,level){
var self__ = this;
var dispatcher__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,cljs.core.assoc.call(null,event,new cljs.core.Keyword("dat.reactor","priority","dat.reactor/priority",-2109050234),level));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.recv_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ppub","ppub",-404508411),null,new cljs.core.Keyword(null,"default>","default>",-374545113),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"error>","error>",-1970398855),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51310){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51314 = cljs.core.keyword_identical_QMARK_;
var expr__51315 = k__10902__auto__;
if(cljs.core.truth_(pred__51314.call(null,new cljs.core.Keyword(null,"default>","default>",-374545113),expr__51315))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(G__51310,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51314.call(null,new cljs.core.Keyword(null,"error>","error>",-1970398855),expr__51315))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,G__51310,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51314.call(null,new cljs.core.Keyword(null,"ppub","ppub",-404508411),expr__51315))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,G__51310,self__.send_GT_,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51314.call(null,new cljs.core.Keyword(null,"send>","send>",158540406),expr__51315))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,G__51310,self__.recv_GT_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51314.call(null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),expr__51315))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,G__51310,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51310),null));
}
}
}
}
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default>","default>",-374545113),self__.default_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error>","error>",-1970398855),self__.error_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppub","ppub",-404508411),self__.ppub],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.recv_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
return self__.send_GT_;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51310){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_GT_,self__.error_GT_,self__.ppub,self__.send_GT_,self__.recv_GT_,G__51310,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init3019280340854796545.clj",81,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting ErrorPriorityDispatcher"], null);
});})(dispatcher__$1))
,null)),null,709563606);

var send_GT___$1 = (function (){var or__10219__auto__ = self__.send_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var ppub__$1 = (function (){var or__10219__auto__ = self__.ppub;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.pub.call(null,send_GT___$1,new cljs.core.Keyword("dat.reactor","priority","dat.reactor/priority",-2109050234),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),(99),new cljs.core.Keyword(null,"error","error",-978969032),(1)], null));
}
})();
var recv_GT___$1 = (function (){var or__10219__auto__ = self__.recv_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var default_GT___$1 = (function (){var or__10219__auto__ = self__.default_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var chan_GT_ = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,ppub__$1,new cljs.core.Keyword(null,"default","default",-1987822328),chan_GT_);

return chan_GT_;
}
})();
var error_GT___$1 = (function (){var or__10219__auto__ = self__.error_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var chan_GT_ = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,ppub__$1,new cljs.core.Keyword(null,"error","error",-978969032),chan_GT_);

return chan_GT_;
}
})();
var c__37223__auto___51346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function (state_51333){
var state_val_51334 = (state_51333[(1)]);
if((state_val_51334 === (1))){
var state_51333__$1 = state_51333;
var statearr_51335_51347 = state_51333__$1;
(statearr_51335_51347[(2)] = null);

(statearr_51335_51347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51334 === (2))){
var inst_51321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51322 = [error_GT___$1,default_GT___$1];
var inst_51323 = (new cljs.core.PersistentVector(null,2,(5),inst_51321,inst_51322,null));
var state_51333__$1 = state_51333;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51333__$1,(4),inst_51323,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_51334 === (3))){
var inst_51331 = (state_51333[(2)]);
var state_51333__$1 = state_51333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51333__$1,inst_51331);
} else {
if((state_val_51334 === (4))){
var inst_51325 = (state_51333[(2)]);
var inst_51326 = cljs.core.nth.call(null,inst_51325,(0),null);
var inst_51327 = cljs.core.nth.call(null,inst_51325,(1),null);
var state_51333__$1 = (function (){var statearr_51336 = state_51333;
(statearr_51336[(7)] = inst_51327);

return statearr_51336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51333__$1,(5),recv_GT___$1,inst_51326);
} else {
if((state_val_51334 === (5))){
var inst_51329 = (state_51333[(2)]);
var state_51333__$1 = state_51333;
var statearr_51337_51348 = state_51333__$1;
(statearr_51337_51348[(2)] = inst_51329);

(statearr_51337_51348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
;
return ((function (switch__37109__auto__,c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1){
return (function() {
var dat$reactor$dispatcher$state_machine__37110__auto__ = null;
var dat$reactor$dispatcher$state_machine__37110__auto____0 = (function (){
var statearr_51341 = [null,null,null,null,null,null,null,null];
(statearr_51341[(0)] = dat$reactor$dispatcher$state_machine__37110__auto__);

(statearr_51341[(1)] = (1));

return statearr_51341;
});
var dat$reactor$dispatcher$state_machine__37110__auto____1 = (function (state_51333){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_51333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e51342){if((e51342 instanceof Object)){
var ex__37113__auto__ = e51342;
var statearr_51343_51349 = state_51333;
(statearr_51343_51349[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51350 = state_51333;
state_51333 = G__51350;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
dat$reactor$dispatcher$state_machine__37110__auto__ = function(state_51333){
switch(arguments.length){
case 0:
return dat$reactor$dispatcher$state_machine__37110__auto____0.call(this);
case 1:
return dat$reactor$dispatcher$state_machine__37110__auto____1.call(this,state_51333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$dispatcher$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$dispatcher$state_machine__37110__auto____0;
dat$reactor$dispatcher$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$dispatcher$state_machine__37110__auto____1;
return dat$reactor$dispatcher$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
})();
var state__37225__auto__ = (function (){var statearr_51344 = f__37224__auto__.call(null);
(statearr_51344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto___51346);

return statearr_51344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto___51346,send_GT___$1,ppub__$1,recv_GT___$1,default_GT___$1,error_GT___$1,dispatcher__$1))
);


return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"send>","send>",158540406),send_GT___$1,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),recv_GT___$1,new cljs.core.Keyword(null,"ppub","ppub",-404508411),ppub__$1,new cljs.core.Keyword(null,"default>","default>",-374545113),default_GT___$1,new cljs.core.Keyword(null,"error>","error>",-1970398855),error_GT___$1);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (dispatcher){
var self__ = this;
var dispatcher__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init3019280340854796545.clj",111,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (dispatcher__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping ErrorPriorityDispatcher"], null);
});})(dispatcher__$1))
,null)),null,417715661);

return cljs.core.assoc.call(null,dispatcher__$1,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"ppub","ppub",-404508411),null,new cljs.core.Keyword(null,"default>","default>",-374545113),null,new cljs.core.Keyword(null,"error>","error>",-1970398855),null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default>","default>",1265986414,null),new cljs.core.Symbol(null,"error>","error>",-329867328,null),new cljs.core.Symbol(null,"ppub","ppub",1236023116,null),new cljs.core.Symbol(null,"send>","send>",1799071933,null),new cljs.core.Symbol(null,"recv>","recv>",-121689893,null)], null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$__GT_ErrorPriorityDispatcher(default_GT_,error_GT_,ppub,send_GT_,recv_GT_){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(default_GT_,error_GT_,ppub,send_GT_,recv_GT_,null,null,null));
});

dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$map__GT_ErrorPriorityDispatcher(G__51312){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(new cljs.core.Keyword(null,"default>","default>",-374545113).cljs$core$IFn$_invoke$arity$1(G__51312),new cljs.core.Keyword(null,"error>","error>",-1970398855).cljs$core$IFn$_invoke$arity$1(G__51312),new cljs.core.Keyword(null,"ppub","ppub",-404508411).cljs$core$IFn$_invoke$arity$1(G__51312),new cljs.core.Keyword(null,"send>","send>",158540406).cljs$core$IFn$_invoke$arity$1(G__51312),new cljs.core.Keyword(null,"recv>","recv>",-1762221420).cljs$core$IFn$_invoke$arity$1(G__51312),null,cljs.core.dissoc.call(null,G__51312,new cljs.core.Keyword(null,"default>","default>",-374545113),new cljs.core.Keyword(null,"error>","error>",-1970398855),new cljs.core.Keyword(null,"ppub","ppub",-404508411),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420)),null));
});

/**
 * Creates a new ErroPriorityDispatcher. Can customize :default> and :error> through options.
 *   Idea is that Reactor will get error events before other queued events, but the mechanism is a little flawed.
 *   Currently, it's still possible for a non error event to get through before the reactor is ready to consume from the event-chan.
 *   May need to adjust the protocols.
 */
dat.reactor.dispatcher.new_error_priority_dispatcher = (function dat$reactor$dispatcher$new_error_priority_dispatcher(var_args){
var args51351 = [];
var len__11440__auto___51354 = arguments.length;
var i__11441__auto___51355 = (0);
while(true){
if((i__11441__auto___51355 < len__11440__auto___51354)){
args51351.push((arguments[i__11441__auto___51355]));

var G__51356 = (i__11441__auto___51355 + (1));
i__11441__auto___51355 = G__51356;
continue;
} else {
}
break;
}

var G__51353 = args51351.length;
switch (G__51353) {
case 1:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51351.length)].join('')));

}
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_error_priority_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$lang$maxFixedArity = 1;

/**
 * Dispatches event on the dispatcher component at the given level (:default if unspecified).
 */
dat.reactor.dispatcher.dispatch_BANG_ = (function dat$reactor$dispatcher$dispatch_BANG_(var_args){
var args51358 = [];
var len__11440__auto___51361 = arguments.length;
var i__11441__auto___51362 = (0);
while(true){
if((i__11441__auto___51362 < len__11440__auto___51361)){
args51358.push((arguments[i__11441__auto___51362]));

var G__51363 = (i__11441__auto___51362 + (1));
i__11441__auto___51362 = G__51363;
continue;
} else {
}
break;
}

var G__51360 = args51358.length;
switch (G__51360) {
case 3:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51358.length)].join('')));

}
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatcher,event,level){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,level);
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatcher,event){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,new cljs.core.Keyword(null,"default","default",-1987822328));
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatcher.dispatch_error_BANG_ = (function dat$reactor$dispatcher$dispatch_error_BANG_(datview,event){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,datview,event,new cljs.core.Keyword(null,"error","error",-978969032));
});
dat.reactor.dispatcher.event_chan = (function dat$reactor$dispatcher$event_chan(dispatcher){

return dat.spec.protocols.dispatcher_event_chan.call(null,dispatcher);
});

//# sourceMappingURL=dispatcher.js.map