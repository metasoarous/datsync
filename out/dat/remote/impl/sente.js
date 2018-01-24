// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.remote.impl.sente');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.sync.client');
goog.require('dat.reactor');
goog.require('dat.sync.utils');
goog.require('dat.spec.protocols');
goog.require('com.stuartsierra.component');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');

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
dat.remote.impl.sente.DBFn = (function (lang,params,code,__meta,__extmap,__hash){
this.lang = lang;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k57196,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__57198 = k57196;
var G__57198__$1 = (((G__57198 instanceof cljs.core.Keyword))?G__57198.fqn:null);
switch (G__57198__$1) {
case "lang":
return self__.lang;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k57196,else__10897__auto__);

}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.remote.impl.sente.DBFn{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57195){
var self__ = this;
var G__57195__$1 = this;
return (new cljs.core.RecordIter((0),G__57195__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

dat.remote.impl.sente.DBFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__57195){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__57199 = cljs.core.keyword_identical_QMARK_;
var expr__57200 = k__10902__auto__;
if(cljs.core.truth_(pred__57199.call(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),expr__57200))){
return (new dat.remote.impl.sente.DBFn(G__57195,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57199.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__57200))){
return (new dat.remote.impl.sente.DBFn(self__.lang,G__57195,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57199.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__57200))){
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,G__57195,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__57195),null));
}
}
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__57195){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,G__57195,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.remote.impl.sente.DBFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lang","lang",-179145577,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

dat.remote.impl.sente.DBFn.cljs$lang$type = true;

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.__GT_DBFn = (function dat$remote$impl$sente$__GT_DBFn(lang,params,code){
return (new dat.remote.impl.sente.DBFn(lang,params,code,null,null,null));
});

dat.remote.impl.sente.map__GT_DBFn = (function dat$remote$impl$sente$map__GT_DBFn(G__57197){
return (new dat.remote.impl.sente.DBFn(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(G__57197),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__57197),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__57197),null,cljs.core.dissoc.call(null,G__57197,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol("db","fn","db/fn",465270057,null),cljs.core.pr_str);
/**
 * In exchange for this overhead we get send/recv using the same universal-namespaced-segment-maps.
 */
dat.remote.impl.sente.recv_ev_msg__GT_seg = (function dat$remote$impl$sente$recv_ev_msg__GT_seg(ev_msg){
var ev_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ev_msg);
var ev_data = new cljs.core.Keyword(null,"?data","?data",-9471433).cljs$core$IFn$_invoke$arity$1(ev_msg);
var ring_req = new cljs.core.Keyword(null,"ring-req","ring-req",-747861961).cljs$core$IFn$_invoke$arity$1(ev_msg);
var peer_id = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(ev_msg);
if(cljs.core._EQ_.call(null,ev_id,new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692))){
return dat.sync.utils.cat_into.call(null,cljs.core.PersistentArrayMap.EMPTY,ev_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.remote","ring-req","dat.remote/ring-req",-889391444),ring_req,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523),peer_id], null));
} else {
return cljs.core.assoc.call(null,ev_msg,new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112));
}
});
/**
 * Make sure all vector events are converted into universal-namespaced-segment-maps
 */
dat.remote.impl.sente.send_ev__GT_seg = (function dat$remote$impl$sente$send_ev__GT_seg(ev){
if(cljs.core.vector_QMARK_.call(null,ev)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword(null,"event","event",301435442),ev,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.first.call(null,ev)], null);
} else {
return ev;
}
});
dat.remote.impl.sente.default_sente_options = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043),"/chsk",new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false,new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.call(null)], null);
dat.remote.impl.sente.go_sente_send_BANG_ = (function dat$remote$impl$sente$go_sente_send_BANG_(var_args){
var args57203 = [];
var len__11440__auto___57361 = arguments.length;
var i__11441__auto___57362 = (0);
while(true){
if((i__11441__auto___57362 < len__11440__auto___57361)){
args57203.push((arguments[i__11441__auto___57362]));

var G__57363 = (i__11441__auto___57362 + (1));
i__11441__auto___57362 = G__57363;
continue;
} else {
}
break;
}

var G__57205 = args57203.length;
switch (G__57205) {
case 2:
return dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57203.length)].join('')));

}
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (send_GT_,sock){
return dat.remote.impl.sente.go_sente_send_BANG_.call(null,send_GT_,sock,(100));
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (send_GT_,p__57206,retries){
var map__57207 = p__57206;
var map__57207__$1 = ((((!((map__57207 == null)))?((((map__57207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57207):map__57207);
var sente_sock = map__57207__$1;
var send_fn = cljs.core.get.call(null,map__57207__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__57207__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids){
return (function (state_57305){
var state_val_57306 = (state_57305[(1)]);
if((state_val_57306 === (7))){
var inst_57229 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
if(cljs.core.truth_(inst_57229)){
var statearr_57307_57365 = state_57305__$1;
(statearr_57307_57365[(1)] = (11));

} else {
var statearr_57308_57366 = state_57305__$1;
(statearr_57308_57366[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (20))){
var inst_57254 = (state_57305[(7)]);
var inst_57253 = (state_57305[(8)]);
var inst_57256 = (inst_57254 < inst_57253);
var inst_57257 = inst_57256;
var state_57305__$1 = state_57305;
if(cljs.core.truth_(inst_57257)){
var statearr_57309_57367 = state_57305__$1;
(statearr_57309_57367[(1)] = (22));

} else {
var statearr_57310_57368 = state_57305__$1;
(statearr_57310_57368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (27))){
var inst_57287 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57311_57369 = state_57305__$1;
(statearr_57311_57369[(2)] = inst_57287);

(statearr_57311_57369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (1))){
var state_57305__$1 = state_57305;
var statearr_57312_57370 = state_57305__$1;
(statearr_57312_57370[(2)] = null);

(statearr_57312_57370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (24))){
var inst_57289 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57313_57371 = state_57305__$1;
(statearr_57313_57371[(2)] = inst_57289);

(statearr_57313_57371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (4))){
var inst_57213 = (state_57305[(9)]);
var inst_57212 = (state_57305[(2)]);
var inst_57213__$1 = dat.remote.impl.sente.send_ev__GT_seg.call(null,inst_57212);
var inst_57215 = (inst_57213__$1 == null);
var inst_57216 = cljs.core.not.call(null,inst_57215);
var state_57305__$1 = (function (){var statearr_57314 = state_57305;
(statearr_57314[(9)] = inst_57213__$1);

return statearr_57314;
})();
if(inst_57216){
var statearr_57315_57372 = state_57305__$1;
(statearr_57315_57372[(1)] = (5));

} else {
var statearr_57316_57373 = state_57305__$1;
(statearr_57316_57373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (15))){
var state_57305__$1 = state_57305;
if(cljs.core.truth_(connected_uids)){
var statearr_57317_57374 = state_57305__$1;
(statearr_57317_57374[(1)] = (17));

} else {
var statearr_57318_57375 = state_57305__$1;
(statearr_57318_57375[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (21))){
var inst_57291 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57322_57376 = state_57305__$1;
(statearr_57322_57376[(2)] = inst_57291);

(statearr_57322_57376[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (13))){
var inst_57235 = (state_57305[(10)]);
var inst_57234 = (state_57305[(11)]);
var inst_57234__$1 = (state_57305[(2)]);
var inst_57235__$1 = cljs.core.get.call(null,inst_57234__$1,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523));
var state_57305__$1 = (function (){var statearr_57323 = state_57305;
(statearr_57323[(10)] = inst_57235__$1);

(statearr_57323[(11)] = inst_57234__$1);

return statearr_57323;
})();
if(cljs.core.truth_(inst_57235__$1)){
var statearr_57324_57377 = state_57305__$1;
(statearr_57324_57377[(1)] = (14));

} else {
var statearr_57325_57378 = state_57305__$1;
(statearr_57325_57378[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (22))){
var inst_57254 = (state_57305[(7)]);
var inst_57251 = (state_57305[(12)]);
var inst_57253 = (state_57305[(8)]);
var inst_57252 = (state_57305[(13)]);
var inst_57234 = (state_57305[(11)]);
var inst_57259 = cljs.core._nth.call(null,inst_57252,inst_57254);
var inst_57260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57261 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_57234];
var inst_57262 = (new cljs.core.PersistentVector(null,2,(5),inst_57260,inst_57261,null));
var inst_57263 = send_fn.call(null,inst_57259,inst_57262);
var inst_57264 = (inst_57254 + (1));
var tmp57319 = inst_57251;
var tmp57320 = inst_57253;
var tmp57321 = inst_57252;
var inst_57251__$1 = tmp57319;
var inst_57252__$1 = tmp57321;
var inst_57253__$1 = tmp57320;
var inst_57254__$1 = inst_57264;
var state_57305__$1 = (function (){var statearr_57326 = state_57305;
(statearr_57326[(7)] = inst_57254__$1);

(statearr_57326[(12)] = inst_57251__$1);

(statearr_57326[(8)] = inst_57253__$1);

(statearr_57326[(14)] = inst_57263);

(statearr_57326[(13)] = inst_57252__$1);

return statearr_57326;
})();
var statearr_57327_57379 = state_57305__$1;
(statearr_57327_57379[(2)] = null);

(statearr_57327_57379[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (29))){
var inst_57234 = (state_57305[(11)]);
var inst_57267 = (state_57305[(15)]);
var inst_57276 = cljs.core.first.call(null,inst_57267);
var inst_57277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57278 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_57234];
var inst_57279 = (new cljs.core.PersistentVector(null,2,(5),inst_57277,inst_57278,null));
var inst_57280 = send_fn.call(null,inst_57276,inst_57279);
var inst_57281 = cljs.core.next.call(null,inst_57267);
var inst_57251 = inst_57281;
var inst_57252 = null;
var inst_57253 = (0);
var inst_57254 = (0);
var state_57305__$1 = (function (){var statearr_57328 = state_57305;
(statearr_57328[(7)] = inst_57254);

(statearr_57328[(16)] = inst_57280);

(statearr_57328[(12)] = inst_57251);

(statearr_57328[(8)] = inst_57253);

(statearr_57328[(13)] = inst_57252);

return statearr_57328;
})();
var statearr_57329_57380 = state_57305__$1;
(statearr_57329_57380[(2)] = null);

(statearr_57329_57380[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (6))){
var state_57305__$1 = state_57305;
var statearr_57330_57381 = state_57305__$1;
(statearr_57330_57381[(2)] = false);

(statearr_57330_57381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (28))){
var inst_57267 = (state_57305[(15)]);
var inst_57271 = cljs.core.chunk_first.call(null,inst_57267);
var inst_57272 = cljs.core.chunk_rest.call(null,inst_57267);
var inst_57273 = cljs.core.count.call(null,inst_57271);
var inst_57251 = inst_57272;
var inst_57252 = inst_57271;
var inst_57253 = inst_57273;
var inst_57254 = (0);
var state_57305__$1 = (function (){var statearr_57331 = state_57305;
(statearr_57331[(7)] = inst_57254);

(statearr_57331[(12)] = inst_57251);

(statearr_57331[(8)] = inst_57253);

(statearr_57331[(13)] = inst_57252);

return statearr_57331;
})();
var statearr_57332_57382 = state_57305__$1;
(statearr_57332_57382[(2)] = null);

(statearr_57332_57382[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (25))){
var inst_57267 = (state_57305[(15)]);
var inst_57269 = cljs.core.chunked_seq_QMARK_.call(null,inst_57267);
var state_57305__$1 = state_57305;
if(inst_57269){
var statearr_57333_57383 = state_57305__$1;
(statearr_57333_57383[(1)] = (28));

} else {
var statearr_57334_57384 = state_57305__$1;
(statearr_57334_57384[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (17))){
var inst_57248 = cljs.core.deref.call(null,connected_uids);
var inst_57249 = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(inst_57248);
var inst_57250 = cljs.core.seq.call(null,inst_57249);
var inst_57251 = inst_57250;
var inst_57252 = null;
var inst_57253 = (0);
var inst_57254 = (0);
var state_57305__$1 = (function (){var statearr_57335 = state_57305;
(statearr_57335[(7)] = inst_57254);

(statearr_57335[(12)] = inst_57251);

(statearr_57335[(8)] = inst_57253);

(statearr_57335[(13)] = inst_57252);

return statearr_57335;
})();
var statearr_57336_57385 = state_57305__$1;
(statearr_57336_57385[(2)] = null);

(statearr_57336_57385[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (3))){
var inst_57303 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57305__$1,inst_57303);
} else {
if((state_val_57306 === (12))){
var inst_57213 = (state_57305[(9)]);
var state_57305__$1 = state_57305;
var statearr_57337_57386 = state_57305__$1;
(statearr_57337_57386[(2)] = inst_57213);

(statearr_57337_57386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (2))){
var state_57305__$1 = state_57305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57305__$1,(4),send_GT_);
} else {
if((state_val_57306 === (23))){
var inst_57251 = (state_57305[(12)]);
var inst_57267 = (state_57305[(15)]);
var inst_57267__$1 = cljs.core.seq.call(null,inst_57251);
var state_57305__$1 = (function (){var statearr_57338 = state_57305;
(statearr_57338[(15)] = inst_57267__$1);

return statearr_57338;
})();
if(inst_57267__$1){
var statearr_57339_57387 = state_57305__$1;
(statearr_57339_57387[(1)] = (25));

} else {
var statearr_57340_57388 = state_57305__$1;
(statearr_57340_57388[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (19))){
var inst_57298 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57341_57389 = state_57305__$1;
(statearr_57341_57389[(2)] = inst_57298);

(statearr_57341_57389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (11))){
var inst_57213 = (state_57305[(9)]);
var inst_57231 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57213);
var state_57305__$1 = state_57305;
var statearr_57342_57390 = state_57305__$1;
(statearr_57342_57390[(2)] = inst_57231);

(statearr_57342_57390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (9))){
var state_57305__$1 = state_57305;
var statearr_57343_57391 = state_57305__$1;
(statearr_57343_57391[(2)] = false);

(statearr_57343_57391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (5))){
var inst_57213 = (state_57305[(9)]);
var inst_57218 = inst_57213.cljs$lang$protocol_mask$partition0$;
var inst_57219 = (inst_57218 & (64));
var inst_57220 = inst_57213.cljs$core$ISeq$;
var inst_57221 = (cljs.core.PROTOCOL_SENTINEL === inst_57220);
var inst_57222 = (inst_57219) || (inst_57221);
var state_57305__$1 = state_57305;
if(cljs.core.truth_(inst_57222)){
var statearr_57344_57392 = state_57305__$1;
(statearr_57344_57392[(1)] = (8));

} else {
var statearr_57345_57393 = state_57305__$1;
(statearr_57345_57393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (14))){
var inst_57235 = (state_57305[(10)]);
var inst_57234 = (state_57305[(11)]);
var inst_57237 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57238 = cljs.core.dissoc.call(null,inst_57234,new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523));
var inst_57239 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_57238];
var inst_57240 = (new cljs.core.PersistentVector(null,2,(5),inst_57237,inst_57239,null));
var inst_57241 = send_fn.call(null,inst_57235,inst_57240);
var state_57305__$1 = state_57305;
var statearr_57346_57394 = state_57305__$1;
(statearr_57346_57394[(2)] = inst_57241);

(statearr_57346_57394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (26))){
var state_57305__$1 = state_57305;
var statearr_57347_57395 = state_57305__$1;
(statearr_57347_57395[(2)] = null);

(statearr_57347_57395[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (16))){
var inst_57300 = (state_57305[(2)]);
var state_57305__$1 = (function (){var statearr_57348 = state_57305;
(statearr_57348[(17)] = inst_57300);

return statearr_57348;
})();
var statearr_57349_57396 = state_57305__$1;
(statearr_57349_57396[(2)] = null);

(statearr_57349_57396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (30))){
var inst_57284 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57350_57397 = state_57305__$1;
(statearr_57350_57397[(2)] = inst_57284);

(statearr_57350_57397[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (10))){
var inst_57226 = (state_57305[(2)]);
var state_57305__$1 = state_57305;
var statearr_57351_57398 = state_57305__$1;
(statearr_57351_57398[(2)] = inst_57226);

(statearr_57351_57398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (18))){
var inst_57234 = (state_57305[(11)]);
var inst_57293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57294 = [new cljs.core.Keyword("dat.remote.impl.sente","segment","dat.remote.impl.sente/segment",-541117692),inst_57234];
var inst_57295 = (new cljs.core.PersistentVector(null,2,(5),inst_57293,inst_57294,null));
var inst_57296 = send_fn.call(null,inst_57295);
var state_57305__$1 = state_57305;
var statearr_57352_57399 = state_57305__$1;
(statearr_57352_57399[(2)] = inst_57296);

(statearr_57352_57399[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57306 === (8))){
var state_57305__$1 = state_57305;
var statearr_57353_57400 = state_57305__$1;
(statearr_57353_57400[(2)] = true);

(statearr_57353_57400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});})(c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids))
;
return ((function (switch__37109__auto__,c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids){
return (function() {
var dat$remote$impl$sente$state_machine__37110__auto__ = null;
var dat$remote$impl$sente$state_machine__37110__auto____0 = (function (){
var statearr_57357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57357[(0)] = dat$remote$impl$sente$state_machine__37110__auto__);

(statearr_57357[(1)] = (1));

return statearr_57357;
});
var dat$remote$impl$sente$state_machine__37110__auto____1 = (function (state_57305){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_57305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e57358){if((e57358 instanceof Object)){
var ex__37113__auto__ = e57358;
var statearr_57359_57401 = state_57305;
(statearr_57359_57401[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57402 = state_57305;
state_57305 = G__57402;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
dat$remote$impl$sente$state_machine__37110__auto__ = function(state_57305){
switch(arguments.length){
case 0:
return dat$remote$impl$sente$state_machine__37110__auto____0.call(this);
case 1:
return dat$remote$impl$sente$state_machine__37110__auto____1.call(this,state_57305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$remote$impl$sente$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = dat$remote$impl$sente$state_machine__37110__auto____0;
dat$remote$impl$sente$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = dat$remote$impl$sente$state_machine__37110__auto____1;
return dat$remote$impl$sente$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids))
})();
var state__37225__auto__ = (function (){var statearr_57360 = f__37224__auto__.call(null);
(statearr_57360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_57360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,map__57207,map__57207__$1,sente_sock,send_fn,connected_uids))
);

return c__37223__auto__;
});

dat.remote.impl.sente.go_sente_send_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {dat.spec.protocols.PRemoteEventChan}
 * @implements {dat.spec.protocols.PRemoteSendEvent}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {dat.spec.protocols.RingSock}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dat.spec.protocols.Wire}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.remote.impl.sente.SenteRemote = (function (sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_,__meta,__extmap,__hash){
this.sente_options = sente_options;
this.send_GT_ = send_GT_;
this.recv_GT_ = recv_GT_;
this.sente_sock = sente_sock;
this.stop_remote = stop_remote;
this.server_QMARK_ = server_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k57405,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__57407 = k57405;
var G__57407__$1 = (((G__57407 instanceof cljs.core.Keyword))?G__57407.fqn:null);
switch (G__57407__$1) {
case "sente-options":
return self__.sente_options;

break;
case "send>":
return self__.send_GT_;

break;
case "recv>":
return self__.recv_GT_;

break;
case "sente-sock":
return self__.sente_sock;

break;
case "stop-remote":
return self__.stop_remote;

break;
case "server?":
return self__.server_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k57405,else__10897__auto__);

}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.remote.impl.sente.SenteRemote{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),self__.sente_sock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),self__.stop_remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server?","server?",1803113525),self__.server_QMARK_],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57404){
var self__ = this;
var G__57404__$1 = this;
return (new cljs.core.RecordIter((0),G__57404__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),new cljs.core.Keyword(null,"server?","server?",1803113525)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2 = (function (remote,event){
var self__ = this;
var remote__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,event);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$3 = (function (remote,peer_id,event){
var self__ = this;
var remote__$1 = this;
return cljs.core.async.put_BANG_.call(null,self__.send_GT_,cljs.core.assoc.call(null,dat.remote.impl.sente.send_ev__GT_seg.call(null,event),new cljs.core.Keyword("dat.remote","peer-id","dat.remote/peer-id",524490523),peer_id));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_route$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043).cljs$core$IFn$_invoke$arity$1(self__.sente_options);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_get$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233).cljs$core$IFn$_invoke$arity$1(self__.sente_sock);
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$RingSock$sock_post$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264).cljs$core$IFn$_invoke$arity$1(self__.sente_sock);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"server?","server?",1803113525),null,new cljs.core.Keyword(null,"send>","send>",158540406),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__57404){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__57408 = cljs.core.keyword_identical_QMARK_;
var expr__57409 = k__10902__auto__;
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(G__57404,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"send>","send>",158540406),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,G__57404,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,G__57404,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,G__57404,self__.stop_remote,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,G__57404,self__.server_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57408.call(null,new cljs.core.Keyword(null,"server?","server?",1803113525),expr__57409))){
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,G__57404,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__57404),null));
}
}
}
}
}
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send>","send>",158540406),self__.send_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recv>","recv>",-1762221420),self__.recv_GT_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),self__.sente_sock],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),self__.stop_remote],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"server?","server?",1803113525),self__.server_QMARK_],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$recv_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.recv_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$Wire$send_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.send_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__57404){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.sente_options,self__.send_GT_,self__.recv_GT_,self__.sente_sock,self__.stop_remote,self__.server_QMARK_,G__57404,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
return self__.recv_GT_;
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",83,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SenteRemote Component"], null);
});})(remote__$1))
,null)),null,-978563656);

var send_GT___$1 = (function (){var or__10219__auto__ = self__.send_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var recv_GT___$1 = (function (){var or__10219__auto__ = self__.recv_GT_;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var sente_options__$1 = cljs.core.merge.call(null,dat.remote.impl.sente.default_sente_options,self__.sente_options);
var sock_options = cljs.core.merge.call(null,dat.remote.impl.sente.default_sente_options,cljs.core.dissoc.call(null,sente_options__$1,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043)));
var map__57411 = (function (){var or__10219__auto__ = self__.sente_sock;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
if(cljs.core.truth_(self__.server_QMARK_)){
throw "Sente cannot run in server mode in cljs";
} else {
return taoensso.sente.make_channel_socket_BANG_.call(null,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043).cljs$core$IFn$_invoke$arity$1(sente_options__$1),sock_options);
}
}
})();
var map__57411__$1 = ((((!((map__57411 == null)))?((((map__57411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57411):map__57411);
var sente_sock__$1 = map__57411__$1;
var ch_recv = cljs.core.get.call(null,map__57411__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__57411__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__57411__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ajax_post_fn = cljs.core.get.call(null,map__57411__$1,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264));
var ajax_get_or_ws_handshake_fn = cljs.core.get.call(null,map__57411__$1,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233));
var stop_remote__$1 = (function (){var or__10219__auto__ = self__.stop_remote;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
dat.remote.impl.sente.go_sente_send_BANG_.call(null,send_GT___$1,sente_sock__$1);

return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,((function (or__10219__auto__,send_GT___$1,recv_GT___$1,sente_options__$1,sock_options,map__57411,map__57411__$1,sente_sock__$1,ch_recv,send_fn,connected_uids,ajax_post_fn,ajax_get_or_ws_handshake_fn,remote__$1){
return (function (p1__57403_SHARP_){
var seg = dat.remote.impl.sente.recv_ev_msg__GT_seg.call(null,p1__57403_SHARP_);
return cljs.core.async.put_BANG_.call(null,recv_GT___$1,seg);
});})(or__10219__auto__,send_GT___$1,recv_GT___$1,sente_options__$1,sock_options,map__57411,map__57411__$1,sente_sock__$1,ch_recv,send_fn,connected_uids,ajax_post_fn,ajax_get_or_ws_handshake_fn,remote__$1))
);
}
})();
return cljs.core.assoc.call(null,remote__$1,new cljs.core.Keyword(null,"send>","send>",158540406),send_GT___$1,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),recv_GT___$1,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),stop_remote__$1,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),sente_sock__$1,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),sente_options__$1);
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (remote){
var self__ = this;
var remote__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",109,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping SenteRemote component"], null);
});})(remote__$1))
,null)),null,-500229811);

try{taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",112,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SenteRemote stopped successfully"], null);
});})(remote__$1))
,null)),null,-290480076);

self__.stop_remote.call(null);

return cljs.core.assoc.call(null,remote__$1,new cljs.core.Keyword(null,"send>","send>",158540406),null,new cljs.core.Keyword(null,"recv>","recv>",-1762221420),null,new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),null,new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),null);
}catch (e57413){var e = e57413;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,remote__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error stopping SenteRemote:",e], null);
});})(e,remote__$1))
,null)),null,1706712065);

return remote__$1;
}});

dat.remote.impl.sente.SenteRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sente-options","sente-options",436512785,null),new cljs.core.Symbol(null,"send>","send>",1799071933,null),new cljs.core.Symbol(null,"recv>","recv>",-121689893,null),new cljs.core.Symbol(null,"sente-sock","sente-sock",218982792,null),new cljs.core.Symbol(null,"stop-remote","stop-remote",-1199129868,null),new cljs.core.Symbol(null,"server?","server?",-851322244,null)], null);
});

dat.remote.impl.sente.SenteRemote.cljs$lang$type = true;

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.__GT_SenteRemote = (function dat$remote$impl$sente$__GT_SenteRemote(sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_){
return (new dat.remote.impl.sente.SenteRemote(sente_options,send_GT_,recv_GT_,sente_sock,stop_remote,server_QMARK_,null,null,null));
});

dat.remote.impl.sente.map__GT_SenteRemote = (function dat$remote$impl$sente$map__GT_SenteRemote(G__57406){
return (new dat.remote.impl.sente.SenteRemote(new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742).cljs$core$IFn$_invoke$arity$1(G__57406),new cljs.core.Keyword(null,"send>","send>",158540406).cljs$core$IFn$_invoke$arity$1(G__57406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420).cljs$core$IFn$_invoke$arity$1(G__57406),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735).cljs$core$IFn$_invoke$arity$1(G__57406),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901).cljs$core$IFn$_invoke$arity$1(G__57406),new cljs.core.Keyword(null,"server?","server?",1803113525).cljs$core$IFn$_invoke$arity$1(G__57406),null,cljs.core.dissoc.call(null,G__57406,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),new cljs.core.Keyword(null,"send>","send>",158540406),new cljs.core.Keyword(null,"recv>","recv>",-1762221420),new cljs.core.Keyword(null,"sente-sock","sente-sock",-1421548735),new cljs.core.Keyword(null,"stop-remote","stop-remote",1455305901),new cljs.core.Keyword(null,"server?","server?",1803113525)),null));
});

/**
 * Options include `:sente-options`, which is passed as the second argument to `sente/make-channel-socket!`.
 *   Additionally, the `:chsk-route` option of the `:sente-options` map is passed as the first argument to
 *   `sente/make-channel-socket!`, assuming you don't want to use the default (`"chsk"`). You can see all
 *   datsync defaults for these options in `default-sente-options`.
 * 
 *   Additionally, note that you can specify via the options map your own `:event-chan`, which is the channel on which
 *   output messages get put (the result of calling `dat.spec.protocols/remote-event-chan` on this system component).
 */
dat.remote.impl.sente.new_sente_remote = (function dat$remote$impl$sente$new_sente_remote(var_args){
var args57415 = [];
var len__11440__auto___57418 = arguments.length;
var i__11441__auto___57419 = (0);
while(true){
if((i__11441__auto___57419 < len__11440__auto___57418)){
args57415.push((arguments[i__11441__auto___57419]));

var G__57420 = (i__11441__auto___57419 + (1));
i__11441__auto___57419 = G__57420;
continue;
} else {
}
break;
}

var G__57417 = args57415.length;
switch (G__57417) {
case 0:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57415.length)].join('')));

}
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.remote.impl.sente.new_sente_remote.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.remote.impl.sente.map__GT_SenteRemote.call(null,options);
});

dat.remote.impl.sente.new_sente_remote.cljs$lang$maxFixedArity = 1;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote.impl.sente","event","dat.remote.impl.sente/event",1757332610),(function (app,db,p__57422){
var vec__57423 = p__57422;
var _ = cljs.core.nth.call(null,vec__57423,(0),null);
var sente_message = cljs.core.nth.call(null,vec__57423,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",168,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57423,_,sente_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sente message recieved:",cljs.core.first.call(null,sente_message)], null);
});})(vec__57423,_,sente_message))
,null)),null,-1278294232);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sente_message], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (app,db,p__57426){
var vec__57427 = p__57426;
var _ = cljs.core.nth.call(null,vec__57427,(0),null);
var message = cljs.core.nth.call(null,vec__57427,(1),null);
try{if(cljs.core.truth_((function (){var or__10219__auto__ = new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,message));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(message);
}
})())){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",192,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57427,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First channel socket open; Sending bootstrap message"], null);
});})(vec__57427,_,message))
,null)),null,1673220825);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),true], null)], null));
} else {
return db;
}
}catch (e57430){var e = e57430;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",198,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__57427,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception handling :chsk/state:",e], null);
});})(e,vec__57427,_,message))
,null)),null,-422258514);
}}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (app,db,_){
return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (app,db,p__57431){
var vec__57432 = p__57431;
var _ = cljs.core.nth.call(null,vec__57432,(0),null);
var map__57435 = cljs.core.nth.call(null,vec__57432,(1),null);
var map__57435__$1 = ((((!((map__57435 == null)))?((((map__57435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57435):map__57435);
var ev_msg = map__57435__$1;
var _QMARK_data = cljs.core.get.call(null,map__57435__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (app,db,p__57437){
var vec__57438 = p__57437;
var _ = cljs.core.nth.call(null,vec__57438,(0),null);
var event = cljs.core.nth.call(null,vec__57438,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init3019280340854796545.clj",217,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57438,_,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":chsk/recv for event-id:",cljs.core.first.call(null,event)], null);
});})(vec__57438,_,event))
,null)),null,-446298414);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}));
dat.remote.impl.sente.ring_handlers = (function dat$remote$impl$sente$ring_handlers(ws_connection){
return new cljs.core.Keyword(null,"ring-handlers","ring-handlers",-1858967252).cljs$core$IFn$_invoke$arity$1(ws_connection);
});

//# sourceMappingURL=sente.js.map