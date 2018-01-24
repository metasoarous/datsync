// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.reactor.onyx');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('onyx_local_rt.api');
goog.require('datascript.core');
goog.require('dat.reactor');
goog.require('com.stuartsierra.component');
dat.reactor.onyx.conj_job = (function dat$reactor$onyx$conj_job(var_args){
var args39858 = [];
var len__11440__auto___39864 = arguments.length;
var i__11441__auto___39865 = (0);
while(true){
if((i__11441__auto___39865 < len__11440__auto___39864)){
args39858.push((arguments[i__11441__auto___39865]));

var G__39866 = (i__11441__auto___39865 + (1));
i__11441__auto___39865 = G__39866;
continue;
} else {
}
break;
}

var G__39860 = args39858.length;
switch (G__39860) {
case 0:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39858.length)].join('')));

}
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"workflow","workflow",-640694607),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),cljs.core.PersistentVector.EMPTY], null);
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$1 = (function (job){
return job;
});

dat.reactor.onyx.conj_job.cljs$core$IFn$_invoke$arity$2 = (function (p__39861,more_job){
var map__39862 = p__39861;
var map__39862__$1 = ((((!((map__39862 == null)))?((((map__39862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39862):map__39862);
var job = map__39862__$1;
var catalog = cljs.core.get.call(null,map__39862__$1,new cljs.core.Keyword(null,"catalog","catalog",-439057154));
var workflow = cljs.core.get.call(null,map__39862__$1,new cljs.core.Keyword(null,"workflow","workflow",-640694607));
var flow_conditions = cljs.core.get.call(null,map__39862__$1,new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495));
return cljs.core.assoc.call(null,job,new cljs.core.Keyword(null,"catalog","catalog",-439057154),cljs.core.into.call(null,(function (){var or__10219__auto__ = catalog;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(more_job)),new cljs.core.Keyword(null,"workflow","workflow",-640694607),cljs.core.into.call(null,(function (){var or__10219__auto__ = workflow;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),new cljs.core.Keyword(null,"workflow","workflow",-640694607).cljs$core$IFn$_invoke$arity$1(more_job)),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495),cljs.core.into.call(null,(function (){var or__10219__auto__ = flow_conditions;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),new cljs.core.Keyword(null,"flow-conditions","flow-conditions",-833083495).cljs$core$IFn$_invoke$arity$1(more_job)));
});

dat.reactor.onyx.conj_job.cljs$lang$maxFixedArity = 2;

dat.reactor.onyx.legacy_event__GT_seg = (function dat$reactor$onyx$legacy_event__GT_seg(event){
if(cljs.core.vector_QMARK_.call(null,event)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("dat.reactor","event","dat.reactor/event",-1385170451),new cljs.core.Keyword("dat.reactor","legacy","dat.reactor/legacy",546320112),new cljs.core.Keyword(null,"event","event",301435442),event], null);
} else {
return event;
}
});
dat.reactor.onyx.legacy_event_GT__LT_seg = (function dat$reactor$onyx$legacy_event_GT__LT_seg(){
return cljs.core.map.call(null,dat.reactor.onyx.legacy_event__GT_seg);
});
dat.reactor.onyx.remove_outputs = (function dat$reactor$onyx$remove_outputs(env,task_name){
return cljs.core.assoc_in.call(null,env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_name,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null),cljs.core.PersistentVector.EMPTY);
});
dat.reactor.onyx.loopback_drain = (function dat$reactor$onyx$loopback_drain(env){
var env__$1 = env;
while(true){
var drained_env = onyx_local_rt.api.drain.call(null,env__$1);
var loop_segs = cljs.core.get_in.call(null,drained_env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267),new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null));
if(cljs.core.not.call(null,loop_segs)){
return drained_env;
} else {
var G__39868 = onyx_local_rt.api.new_segment.call(null,dat.reactor.onyx.remove_outputs.call(null,drained_env,new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267)),new cljs.core.Keyword("dat.reactor","loop-in","dat.reactor/loop-in",65022138),loop_segs);
env__$1 = G__39868;
continue;
}
break;
}
});
dat.reactor.onyx.go_react_BANG_ = (function dat$reactor$onyx$go_react_BANG_(p__39870){
var map__40279 = p__39870;
var map__40279__$1 = ((((!((map__40279 == null)))?((((map__40279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40279):map__40279);
var onyx_atom = cljs.core.get.call(null,map__40279__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119));
var event_chan = cljs.core.get.call(null,map__40279__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var kill_chan = cljs.core.get.call(null,map__40279__$1,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254));
var c__38975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function (){
var f__38976__auto__ = (function (){var switch__38952__auto__ = ((function (c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function (state_40541){
var state_val_40542 = (state_40541[(1)]);
if((state_val_40542 === (65))){
var inst_40444 = (state_40541[(7)]);
var inst_40462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40444);
var state_40541__$1 = state_40541;
var statearr_40543_40687 = state_40541__$1;
(statearr_40543_40687[(2)] = inst_40462);

(statearr_40543_40687[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (70))){
var inst_40485 = (state_40541[(8)]);
var inst_40478 = (state_40541[(9)]);
var inst_40480 = (state_40541[(10)]);
var inst_40485__$1 = cljs.core._nth.call(null,inst_40478,inst_40480);
var state_40541__$1 = (function (){var statearr_40544 = state_40541;
(statearr_40544[(8)] = inst_40485__$1);

return statearr_40544;
})();
if(cljs.core.truth_(inst_40485__$1)){
var statearr_40545_40688 = state_40541__$1;
(statearr_40545_40688[(1)] = (73));

} else {
var statearr_40546_40689 = state_40541__$1;
(statearr_40546_40689[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (62))){
var state_40541__$1 = state_40541;
var statearr_40547_40690 = state_40541__$1;
(statearr_40547_40690[(2)] = true);

(statearr_40547_40690[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (74))){
var state_40541__$1 = state_40541;
var statearr_40548_40691 = state_40541__$1;
(statearr_40548_40691[(2)] = null);

(statearr_40548_40691[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (7))){
var inst_40537 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40549_40692 = state_40541__$1;
(statearr_40549_40692[(2)] = inst_40537);

(statearr_40549_40692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (59))){
var inst_40444 = (state_40541[(7)]);
var inst_40449 = inst_40444.cljs$lang$protocol_mask$partition0$;
var inst_40450 = (inst_40449 & (64));
var inst_40451 = inst_40444.cljs$core$ISeq$;
var inst_40452 = (cljs.core.PROTOCOL_SENTINEL === inst_40451);
var inst_40453 = (inst_40450) || (inst_40452);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40453)){
var statearr_40550_40693 = state_40541__$1;
(statearr_40550_40693[(1)] = (62));

} else {
var statearr_40551_40694 = state_40541__$1;
(statearr_40551_40694[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (86))){
var inst_40507 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40552_40695 = state_40541__$1;
(statearr_40552_40695[(2)] = inst_40507);

(statearr_40552_40695[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (20))){
var inst_40346 = (state_40541[(11)]);
var inst_40347 = (state_40541[(12)]);
var inst_40349 = (inst_40347 < inst_40346);
var inst_40350 = inst_40349;
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40350)){
var statearr_40553_40696 = state_40541__$1;
(statearr_40553_40696[(1)] = (22));

} else {
var statearr_40554_40697 = state_40541__$1;
(statearr_40554_40697[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (72))){
var inst_40519 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40555_40698 = state_40541__$1;
(statearr_40555_40698[(2)] = inst_40519);

(statearr_40555_40698[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (58))){
var inst_40525 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40556_40699 = state_40541__$1;
(statearr_40556_40699[(2)] = inst_40525);

(statearr_40556_40699[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (60))){
var state_40541__$1 = state_40541;
var statearr_40557_40700 = state_40541__$1;
(statearr_40557_40700[(2)] = false);

(statearr_40557_40700[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (27))){
var inst_40369 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40369)){
var statearr_40558_40701 = state_40541__$1;
(statearr_40558_40701[(1)] = (31));

} else {
var statearr_40559_40702 = state_40541__$1;
(statearr_40559_40702[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (1))){
var state_40541__$1 = state_40541;
var statearr_40560_40703 = state_40541__$1;
(statearr_40560_40703[(2)] = null);

(statearr_40560_40703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (69))){
var inst_40434 = (state_40541[(13)]);
var inst_40521 = (state_40541[(2)]);
var inst_40522 = cljs.core.next.call(null,inst_40434);
var inst_40344 = inst_40522;
var inst_40345 = null;
var inst_40346 = (0);
var inst_40347 = (0);
var state_40541__$1 = (function (){var statearr_40561 = state_40541;
(statearr_40561[(11)] = inst_40346);

(statearr_40561[(14)] = inst_40521);

(statearr_40561[(15)] = inst_40344);

(statearr_40561[(12)] = inst_40347);

(statearr_40561[(16)] = inst_40345);

return statearr_40561;
})();
var statearr_40562_40704 = state_40541__$1;
(statearr_40562_40704[(2)] = null);

(statearr_40562_40704[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (24))){
var inst_40530 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40563_40705 = state_40541__$1;
(statearr_40563_40705[(2)] = inst_40530);

(statearr_40563_40705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (55))){
var inst_40528 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40564_40706 = state_40541__$1;
(statearr_40564_40706[(2)] = inst_40528);

(statearr_40564_40706[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (85))){
var inst_40495 = (state_40541[(17)]);
var inst_40510 = (state_40541[(2)]);
var inst_40511 = cljs.core.next.call(null,inst_40495);
var inst_40477 = inst_40511;
var inst_40478 = null;
var inst_40479 = (0);
var inst_40480 = (0);
var state_40541__$1 = (function (){var statearr_40565 = state_40541;
(statearr_40565[(18)] = inst_40479);

(statearr_40565[(9)] = inst_40478);

(statearr_40565[(19)] = inst_40510);

(statearr_40565[(10)] = inst_40480);

(statearr_40565[(20)] = inst_40477);

return statearr_40565;
})();
var statearr_40566_40707 = state_40541__$1;
(statearr_40566_40707[(2)] = null);

(statearr_40566_40707[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (39))){
var inst_40394 = (state_40541[(21)]);
var inst_40375 = (state_40541[(22)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40541__$1,(42),inst_40375,inst_40394);
} else {
if((state_val_40542 === (46))){
var inst_40404 = (state_40541[(23)]);
var inst_40408 = cljs.core.chunk_first.call(null,inst_40404);
var inst_40409 = cljs.core.chunk_rest.call(null,inst_40404);
var inst_40410 = cljs.core.count.call(null,inst_40408);
var inst_40386 = inst_40409;
var inst_40387 = inst_40408;
var inst_40388 = inst_40410;
var inst_40389 = (0);
var state_40541__$1 = (function (){var statearr_40567 = state_40541;
(statearr_40567[(24)] = inst_40387);

(statearr_40567[(25)] = inst_40386);

(statearr_40567[(26)] = inst_40389);

(statearr_40567[(27)] = inst_40388);

return statearr_40567;
})();
var statearr_40568_40708 = state_40541__$1;
(statearr_40568_40708[(2)] = null);

(statearr_40568_40708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (4))){
var inst_40289 = (state_40541[(28)]);
var inst_40291 = (state_40541[(29)]);
var inst_40289__$1 = (state_40541[(2)]);
var inst_40290 = cljs.core.nth.call(null,inst_40289__$1,(0),null);
var inst_40291__$1 = cljs.core.nth.call(null,inst_40289__$1,(1),null);
var inst_40292 = cljs.core._EQ_.call(null,inst_40291__$1,kill_chan);
var state_40541__$1 = (function (){var statearr_40569 = state_40541;
(statearr_40569[(28)] = inst_40289__$1);

(statearr_40569[(30)] = inst_40290);

(statearr_40569[(29)] = inst_40291__$1);

return statearr_40569;
})();
if(inst_40292){
var statearr_40570_40709 = state_40541__$1;
(statearr_40570_40709[(1)] = (5));

} else {
var statearr_40571_40710 = state_40541__$1;
(statearr_40571_40710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (77))){
var inst_40495 = (state_40541[(17)]);
var inst_40497 = cljs.core.chunked_seq_QMARK_.call(null,inst_40495);
var state_40541__$1 = state_40541;
if(inst_40497){
var statearr_40572_40711 = state_40541__$1;
(statearr_40572_40711[(1)] = (80));

} else {
var statearr_40573_40712 = state_40541__$1;
(statearr_40573_40712[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (54))){
var state_40541__$1 = state_40541;
var statearr_40574_40713 = state_40541__$1;
(statearr_40574_40713[(2)] = null);

(statearr_40574_40713[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (15))){
var state_40541__$1 = state_40541;
var statearr_40575_40714 = state_40541__$1;
(statearr_40575_40714[(2)] = false);

(statearr_40575_40714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (48))){
var inst_40423 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40579_40715 = state_40541__$1;
(statearr_40579_40715[(2)] = inst_40423);

(statearr_40579_40715[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (50))){
var state_40541__$1 = state_40541;
var statearr_40580_40716 = state_40541__$1;
(statearr_40580_40716[(2)] = null);

(statearr_40580_40716[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (75))){
var inst_40479 = (state_40541[(18)]);
var inst_40478 = (state_40541[(9)]);
var inst_40480 = (state_40541[(10)]);
var inst_40477 = (state_40541[(20)]);
var inst_40491 = (state_40541[(2)]);
var inst_40492 = (inst_40480 + (1));
var tmp40576 = inst_40479;
var tmp40577 = inst_40478;
var tmp40578 = inst_40477;
var inst_40477__$1 = tmp40578;
var inst_40478__$1 = tmp40577;
var inst_40479__$1 = tmp40576;
var inst_40480__$1 = inst_40492;
var state_40541__$1 = (function (){var statearr_40581 = state_40541;
(statearr_40581[(31)] = inst_40491);

(statearr_40581[(18)] = inst_40479__$1);

(statearr_40581[(9)] = inst_40478__$1);

(statearr_40581[(10)] = inst_40480__$1);

(statearr_40581[(20)] = inst_40477__$1);

return statearr_40581;
})();
var statearr_40582_40717 = state_40541__$1;
(statearr_40582_40717[(2)] = null);

(statearr_40582_40717[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (21))){
var inst_40532 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40583_40718 = state_40541__$1;
(statearr_40583_40718[(2)] = inst_40532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40541__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (31))){
var inst_40353 = (state_40541[(32)]);
var inst_40371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40353);
var state_40541__$1 = state_40541;
var statearr_40584_40719 = state_40541__$1;
(statearr_40584_40719[(2)] = inst_40371);

(statearr_40584_40719[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (32))){
var inst_40353 = (state_40541[(32)]);
var state_40541__$1 = state_40541;
var statearr_40585_40720 = state_40541__$1;
(statearr_40585_40720[(2)] = inst_40353);

(statearr_40585_40720[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (40))){
var state_40541__$1 = state_40541;
var statearr_40586_40721 = state_40541__$1;
(statearr_40586_40721[(2)] = null);

(statearr_40586_40721[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (56))){
var inst_40434 = (state_40541[(13)]);
var inst_40438 = cljs.core.chunk_first.call(null,inst_40434);
var inst_40439 = cljs.core.chunk_rest.call(null,inst_40434);
var inst_40440 = cljs.core.count.call(null,inst_40438);
var inst_40344 = inst_40439;
var inst_40345 = inst_40438;
var inst_40346 = inst_40440;
var inst_40347 = (0);
var state_40541__$1 = (function (){var statearr_40587 = state_40541;
(statearr_40587[(11)] = inst_40346);

(statearr_40587[(15)] = inst_40344);

(statearr_40587[(12)] = inst_40347);

(statearr_40587[(16)] = inst_40345);

return statearr_40587;
})();
var statearr_40588_40722 = state_40541__$1;
(statearr_40588_40722[(2)] = null);

(statearr_40588_40722[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (33))){
var inst_40335 = (state_40541[(33)]);
var inst_40374 = (state_40541[(2)]);
var inst_40375 = cljs.core.get.call(null,inst_40374,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
var inst_40380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40381 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(inst_40374);
var inst_40382 = [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),inst_40381,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)];
var inst_40383 = (new cljs.core.PersistentVector(null,3,(5),inst_40380,inst_40382,null));
var inst_40384 = cljs.core.get_in.call(null,inst_40335,inst_40383);
var inst_40385 = cljs.core.seq.call(null,inst_40384);
var inst_40386 = inst_40385;
var inst_40387 = null;
var inst_40388 = (0);
var inst_40389 = (0);
var state_40541__$1 = (function (){var statearr_40589 = state_40541;
(statearr_40589[(24)] = inst_40387);

(statearr_40589[(25)] = inst_40386);

(statearr_40589[(26)] = inst_40389);

(statearr_40589[(27)] = inst_40388);

(statearr_40589[(22)] = inst_40375);

return statearr_40589;
})();
var statearr_40590_40723 = state_40541__$1;
(statearr_40590_40723[(2)] = null);

(statearr_40590_40723[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (13))){
var inst_40324 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40324)){
var statearr_40591_40724 = state_40541__$1;
(statearr_40591_40724[(1)] = (17));

} else {
var statearr_40592_40725 = state_40541__$1;
(statearr_40592_40725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (22))){
var inst_40353 = (state_40541[(32)]);
var inst_40347 = (state_40541[(12)]);
var inst_40345 = (state_40541[(16)]);
var inst_40353__$1 = cljs.core._nth.call(null,inst_40345,inst_40347);
var inst_40355 = (inst_40353__$1 == null);
var inst_40356 = cljs.core.not.call(null,inst_40355);
var state_40541__$1 = (function (){var statearr_40596 = state_40541;
(statearr_40596[(32)] = inst_40353__$1);

return statearr_40596;
})();
if(inst_40356){
var statearr_40597_40726 = state_40541__$1;
(statearr_40597_40726[(1)] = (25));

} else {
var statearr_40598_40727 = state_40541__$1;
(statearr_40598_40727[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (36))){
var inst_40387 = (state_40541[(24)]);
var inst_40394 = (state_40541[(21)]);
var inst_40389 = (state_40541[(26)]);
var inst_40394__$1 = cljs.core._nth.call(null,inst_40387,inst_40389);
var state_40541__$1 = (function (){var statearr_40599 = state_40541;
(statearr_40599[(21)] = inst_40394__$1);

return statearr_40599;
})();
if(cljs.core.truth_(inst_40394__$1)){
var statearr_40600_40728 = state_40541__$1;
(statearr_40600_40728[(1)] = (39));

} else {
var statearr_40601_40729 = state_40541__$1;
(statearr_40601_40729[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (41))){
var inst_40387 = (state_40541[(24)]);
var inst_40386 = (state_40541[(25)]);
var inst_40389 = (state_40541[(26)]);
var inst_40388 = (state_40541[(27)]);
var inst_40400 = (state_40541[(2)]);
var inst_40401 = (inst_40389 + (1));
var tmp40593 = inst_40387;
var tmp40594 = inst_40386;
var tmp40595 = inst_40388;
var inst_40386__$1 = tmp40594;
var inst_40387__$1 = tmp40593;
var inst_40388__$1 = tmp40595;
var inst_40389__$1 = inst_40401;
var state_40541__$1 = (function (){var statearr_40602 = state_40541;
(statearr_40602[(24)] = inst_40387__$1);

(statearr_40602[(25)] = inst_40386__$1);

(statearr_40602[(26)] = inst_40389__$1);

(statearr_40602[(27)] = inst_40388__$1);

(statearr_40602[(34)] = inst_40400);

return statearr_40602;
})();
var statearr_40603_40730 = state_40541__$1;
(statearr_40603_40730[(2)] = null);

(statearr_40603_40730[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (43))){
var inst_40404 = (state_40541[(23)]);
var inst_40406 = cljs.core.chunked_seq_QMARK_.call(null,inst_40404);
var state_40541__$1 = state_40541;
if(inst_40406){
var statearr_40604_40731 = state_40541__$1;
(statearr_40604_40731[(1)] = (46));

} else {
var statearr_40605_40732 = state_40541__$1;
(statearr_40605_40732[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (61))){
var inst_40460 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40460)){
var statearr_40606_40733 = state_40541__$1;
(statearr_40606_40733[(1)] = (65));

} else {
var statearr_40607_40734 = state_40541__$1;
(statearr_40607_40734[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (29))){
var state_40541__$1 = state_40541;
var statearr_40608_40735 = state_40541__$1;
(statearr_40608_40735[(2)] = false);

(statearr_40608_40735[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (44))){
var state_40541__$1 = state_40541;
var statearr_40609_40736 = state_40541__$1;
(statearr_40609_40736[(2)] = null);

(statearr_40609_40736[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (6))){
var state_40541__$1 = state_40541;
var statearr_40610_40737 = state_40541__$1;
(statearr_40610_40737[(2)] = null);

(statearr_40610_40737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (28))){
var state_40541__$1 = state_40541;
var statearr_40611_40738 = state_40541__$1;
(statearr_40611_40738[(2)] = true);

(statearr_40611_40738[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (64))){
var inst_40457 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40612_40739 = state_40541__$1;
(statearr_40612_40739[(2)] = inst_40457);

(statearr_40612_40739[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (51))){
var inst_40404 = (state_40541[(23)]);
var inst_40419 = (state_40541[(2)]);
var inst_40420 = cljs.core.next.call(null,inst_40404);
var inst_40386 = inst_40420;
var inst_40387 = null;
var inst_40388 = (0);
var inst_40389 = (0);
var state_40541__$1 = (function (){var statearr_40613 = state_40541;
(statearr_40613[(24)] = inst_40387);

(statearr_40613[(25)] = inst_40386);

(statearr_40613[(35)] = inst_40419);

(statearr_40613[(26)] = inst_40389);

(statearr_40613[(27)] = inst_40388);

return statearr_40613;
})();
var statearr_40614_40740 = state_40541__$1;
(statearr_40614_40740[(2)] = null);

(statearr_40614_40740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (25))){
var inst_40353 = (state_40541[(32)]);
var inst_40358 = inst_40353.cljs$lang$protocol_mask$partition0$;
var inst_40359 = (inst_40358 & (64));
var inst_40360 = inst_40353.cljs$core$ISeq$;
var inst_40361 = (cljs.core.PROTOCOL_SENTINEL === inst_40360);
var inst_40362 = (inst_40359) || (inst_40361);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40362)){
var statearr_40615_40741 = state_40541__$1;
(statearr_40615_40741[(1)] = (28));

} else {
var statearr_40616_40742 = state_40541__$1;
(statearr_40616_40742[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (34))){
var inst_40389 = (state_40541[(26)]);
var inst_40388 = (state_40541[(27)]);
var inst_40391 = (inst_40389 < inst_40388);
var inst_40392 = inst_40391;
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40392)){
var statearr_40617_40743 = state_40541__$1;
(statearr_40617_40743[(1)] = (36));

} else {
var statearr_40618_40744 = state_40541__$1;
(statearr_40618_40744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (17))){
var inst_40308 = (state_40541[(36)]);
var inst_40326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40308);
var state_40541__$1 = state_40541;
var statearr_40619_40745 = state_40541__$1;
(statearr_40619_40745[(2)] = inst_40326);

(statearr_40619_40745[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (3))){
var inst_40539 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40541__$1,inst_40539);
} else {
if((state_val_40542 === (12))){
var state_40541__$1 = state_40541;
var statearr_40620_40746 = state_40541__$1;
(statearr_40620_40746[(2)] = false);

(statearr_40620_40746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (2))){
var inst_40285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40286 = [kill_chan,event_chan];
var inst_40287 = (new cljs.core.PersistentVector(null,2,(5),inst_40285,inst_40286,null));
var state_40541__$1 = state_40541;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40541__$1,(4),inst_40287,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_40542 === (66))){
var inst_40444 = (state_40541[(7)]);
var state_40541__$1 = state_40541;
var statearr_40621_40747 = state_40541__$1;
(statearr_40621_40747[(2)] = inst_40444);

(statearr_40621_40747[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (23))){
var inst_40434 = (state_40541[(13)]);
var inst_40344 = (state_40541[(15)]);
var inst_40434__$1 = cljs.core.seq.call(null,inst_40344);
var state_40541__$1 = (function (){var statearr_40625 = state_40541;
(statearr_40625[(13)] = inst_40434__$1);

return statearr_40625;
})();
if(inst_40434__$1){
var statearr_40626_40748 = state_40541__$1;
(statearr_40626_40748[(1)] = (53));

} else {
var statearr_40627_40749 = state_40541__$1;
(statearr_40627_40749[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (47))){
var inst_40413 = (state_40541[(37)]);
var inst_40404 = (state_40541[(23)]);
var inst_40413__$1 = cljs.core.first.call(null,inst_40404);
var state_40541__$1 = (function (){var statearr_40628 = state_40541;
(statearr_40628[(37)] = inst_40413__$1);

return statearr_40628;
})();
if(cljs.core.truth_(inst_40413__$1)){
var statearr_40629_40750 = state_40541__$1;
(statearr_40629_40750[(1)] = (49));

} else {
var statearr_40630_40751 = state_40541__$1;
(statearr_40630_40751[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (35))){
var inst_40346 = (state_40541[(11)]);
var inst_40344 = (state_40541[(15)]);
var inst_40347 = (state_40541[(12)]);
var inst_40345 = (state_40541[(16)]);
var inst_40430 = (state_40541[(2)]);
var inst_40431 = (inst_40347 + (1));
var tmp40622 = inst_40346;
var tmp40623 = inst_40344;
var tmp40624 = inst_40345;
var inst_40344__$1 = tmp40623;
var inst_40345__$1 = tmp40624;
var inst_40346__$1 = tmp40622;
var inst_40347__$1 = inst_40431;
var state_40541__$1 = (function (){var statearr_40631 = state_40541;
(statearr_40631[(11)] = inst_40346__$1);

(statearr_40631[(38)] = inst_40430);

(statearr_40631[(15)] = inst_40344__$1);

(statearr_40631[(12)] = inst_40347__$1);

(statearr_40631[(16)] = inst_40345__$1);

return statearr_40631;
})();
var statearr_40632_40752 = state_40541__$1;
(statearr_40632_40752[(2)] = null);

(statearr_40632_40752[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (82))){
var inst_40514 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40633_40753 = state_40541__$1;
(statearr_40633_40753[(2)] = inst_40514);

(statearr_40633_40753[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (76))){
var inst_40488 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40634_40754 = state_40541__$1;
(statearr_40634_40754[(2)] = inst_40488);

(statearr_40634_40754[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (19))){
var inst_40289 = (state_40541[(28)]);
var inst_40290 = (state_40541[(30)]);
var inst_40291 = (state_40541[(29)]);
var inst_40335 = (state_40541[(33)]);
var inst_40329 = (state_40541[(2)]);
var inst_40330 = cljs.core.get.call(null,inst_40329,new cljs.core.Keyword(null,"env","env",-1815813235));
var inst_40331 = cljs.core.get.call(null,inst_40329,new cljs.core.Keyword(null,"job","job",850873087));
var inst_40332 = new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102).cljs$core$IFn$_invoke$arity$1(inst_40290);
var inst_40333 = onyx_local_rt.api.new_segment.call(null,inst_40330,inst_40332,inst_40290);
var inst_40334 = dat.reactor.onyx.loopback_drain.call(null,inst_40333);
var inst_40335__$1 = onyx_local_rt.api.stop.call(null,inst_40334);
var inst_40340 = (function (){var vec__40282 = inst_40289;
var event = inst_40290;
var port = inst_40291;
var map__40307 = inst_40329;
var env = inst_40330;
var job = inst_40331;
var env_after = inst_40335__$1;
return ((function (vec__40282,event,port,map__40307,env,job,env_after,inst_40289,inst_40290,inst_40291,inst_40335,inst_40329,inst_40330,inst_40331,inst_40332,inst_40333,inst_40334,inst_40335__$1,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function (p1__39869_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("onyx","type","onyx/type",1170345418).cljs$core$IFn$_invoke$arity$1(p1__39869_SHARP_),new cljs.core.Keyword(null,"output","output",-1105869043));
});
;})(vec__40282,event,port,map__40307,env,job,env_after,inst_40289,inst_40290,inst_40291,inst_40335,inst_40329,inst_40330,inst_40331,inst_40332,inst_40333,inst_40334,inst_40335__$1,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_40341 = new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(inst_40331);
var inst_40342 = cljs.core.filter.call(null,inst_40340,inst_40341);
var inst_40343 = cljs.core.seq.call(null,inst_40342);
var inst_40344 = inst_40343;
var inst_40345 = null;
var inst_40346 = (0);
var inst_40347 = (0);
var state_40541__$1 = (function (){var statearr_40635 = state_40541;
(statearr_40635[(11)] = inst_40346);

(statearr_40635[(33)] = inst_40335__$1);

(statearr_40635[(15)] = inst_40344);

(statearr_40635[(12)] = inst_40347);

(statearr_40635[(16)] = inst_40345);

return statearr_40635;
})();
var statearr_40636_40755 = state_40541__$1;
(statearr_40636_40755[(2)] = null);

(statearr_40636_40755[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (57))){
var inst_40434 = (state_40541[(13)]);
var inst_40444 = (state_40541[(7)]);
var inst_40444__$1 = cljs.core.first.call(null,inst_40434);
var inst_40446 = (inst_40444__$1 == null);
var inst_40447 = cljs.core.not.call(null,inst_40446);
var state_40541__$1 = (function (){var statearr_40637 = state_40541;
(statearr_40637[(7)] = inst_40444__$1);

return statearr_40637;
})();
if(inst_40447){
var statearr_40638_40756 = state_40541__$1;
(statearr_40638_40756[(1)] = (59));

} else {
var statearr_40639_40757 = state_40541__$1;
(statearr_40639_40757[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (68))){
var inst_40479 = (state_40541[(18)]);
var inst_40480 = (state_40541[(10)]);
var inst_40482 = (inst_40480 < inst_40479);
var inst_40483 = inst_40482;
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40483)){
var statearr_40640_40758 = state_40541__$1;
(statearr_40640_40758[(1)] = (70));

} else {
var statearr_40641_40759 = state_40541__$1;
(statearr_40641_40759[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (11))){
var inst_40308 = (state_40541[(36)]);
var inst_40313 = inst_40308.cljs$lang$protocol_mask$partition0$;
var inst_40314 = (inst_40313 & (64));
var inst_40315 = inst_40308.cljs$core$ISeq$;
var inst_40316 = (cljs.core.PROTOCOL_SENTINEL === inst_40315);
var inst_40317 = (inst_40314) || (inst_40316);
var state_40541__$1 = state_40541;
if(cljs.core.truth_(inst_40317)){
var statearr_40642_40760 = state_40541__$1;
(statearr_40642_40760[(1)] = (14));

} else {
var statearr_40643_40761 = state_40541__$1;
(statearr_40643_40761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (9))){
var inst_40289 = (state_40541[(28)]);
var inst_40290 = (state_40541[(30)]);
var inst_40291 = (state_40541[(29)]);
var inst_40298 = (state_40541[(2)]);
var inst_40299 = (function (){var vec__40282 = inst_40289;
var event = inst_40290;
var port = inst_40291;
var e = inst_40298;
return ((function (vec__40282,event,port,e,inst_40289,inst_40290,inst_40291,inst_40298,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor go loop"], null);
});
;})(vec__40282,event,port,e,inst_40289,inst_40290,inst_40291,inst_40298,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_40300 = (new cljs.core.Delay(inst_40299,null));
var inst_40301 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40300,null,1404876700);
var inst_40302 = inst_40298.stack;
var inst_40303 = console.log(inst_40302);
var state_40541__$1 = (function (){var statearr_40644 = state_40541;
(statearr_40644[(39)] = inst_40301);

return statearr_40644;
})();
var statearr_40645_40762 = state_40541__$1;
(statearr_40645_40762[(2)] = inst_40303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40541__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (5))){
var inst_40289 = (state_40541[(28)]);
var inst_40290 = (state_40541[(30)]);
var inst_40291 = (state_40541[(29)]);
var inst_40294 = (function (){var vec__40282 = inst_40289;
var event = inst_40290;
var port = inst_40291;
return ((function (vec__40282,event,port,inst_40289,inst_40290,inst_40291,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-react! received kill-chan signal"], null);
});
;})(vec__40282,event,port,inst_40289,inst_40290,inst_40291,state_val_40542,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
})();
var inst_40295 = (new cljs.core.Delay(inst_40294,null));
var inst_40296 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40295,null,1321462924);
var state_40541__$1 = state_40541;
var statearr_40646_40763 = state_40541__$1;
(statearr_40646_40763[(2)] = inst_40296);

(statearr_40646_40763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (83))){
var inst_40504 = (state_40541[(40)]);
var inst_40466 = (state_40541[(41)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40541__$1,(86),inst_40466,inst_40504);
} else {
if((state_val_40542 === (14))){
var state_40541__$1 = state_40541;
var statearr_40647_40764 = state_40541__$1;
(statearr_40647_40764[(2)] = true);

(statearr_40647_40764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (45))){
var inst_40426 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40648_40765 = state_40541__$1;
(statearr_40648_40765[(2)] = inst_40426);

(statearr_40648_40765[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (53))){
var inst_40434 = (state_40541[(13)]);
var inst_40436 = cljs.core.chunked_seq_QMARK_.call(null,inst_40434);
var state_40541__$1 = state_40541;
if(inst_40436){
var statearr_40649_40766 = state_40541__$1;
(statearr_40649_40766[(1)] = (56));

} else {
var statearr_40650_40767 = state_40541__$1;
(statearr_40650_40767[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (78))){
var state_40541__$1 = state_40541;
var statearr_40651_40768 = state_40541__$1;
(statearr_40651_40768[(2)] = null);

(statearr_40651_40768[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (26))){
var state_40541__$1 = state_40541;
var statearr_40652_40769 = state_40541__$1;
(statearr_40652_40769[(2)] = false);

(statearr_40652_40769[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (16))){
var inst_40321 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40653_40770 = state_40541__$1;
(statearr_40653_40770[(2)] = inst_40321);

(statearr_40653_40770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (81))){
var inst_40495 = (state_40541[(17)]);
var inst_40504 = (state_40541[(40)]);
var inst_40504__$1 = cljs.core.first.call(null,inst_40495);
var state_40541__$1 = (function (){var statearr_40654 = state_40541;
(statearr_40654[(40)] = inst_40504__$1);

return statearr_40654;
})();
if(cljs.core.truth_(inst_40504__$1)){
var statearr_40655_40771 = state_40541__$1;
(statearr_40655_40771[(1)] = (83));

} else {
var statearr_40656_40772 = state_40541__$1;
(statearr_40656_40772[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (79))){
var inst_40517 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40657_40773 = state_40541__$1;
(statearr_40657_40773[(2)] = inst_40517);

(statearr_40657_40773[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (38))){
var inst_40428 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40658_40774 = state_40541__$1;
(statearr_40658_40774[(2)] = inst_40428);

(statearr_40658_40774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (30))){
var inst_40366 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40659_40775 = state_40541__$1;
(statearr_40659_40775[(2)] = inst_40366);

(statearr_40659_40775[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (73))){
var inst_40485 = (state_40541[(8)]);
var inst_40466 = (state_40541[(41)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40541__$1,(76),inst_40466,inst_40485);
} else {
if((state_val_40542 === (10))){
var inst_40308 = (state_40541[(36)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40541,(9),new cljs.core.Keyword(null,"default","default",-1987822328),null,(8));
var inst_40308__$1 = cljs.core.deref.call(null,onyx_atom);
var inst_40310 = (inst_40308__$1 == null);
var inst_40311 = cljs.core.not.call(null,inst_40310);
var state_40541__$1 = (function (){var statearr_40660 = state_40541;
(statearr_40660[(36)] = inst_40308__$1);

return statearr_40660;
})();
if(inst_40311){
var statearr_40661_40776 = state_40541__$1;
(statearr_40661_40776[(1)] = (11));

} else {
var statearr_40662_40777 = state_40541__$1;
(statearr_40662_40777[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (18))){
var inst_40308 = (state_40541[(36)]);
var state_40541__$1 = state_40541;
var statearr_40663_40778 = state_40541__$1;
(statearr_40663_40778[(2)] = inst_40308);

(statearr_40663_40778[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (52))){
var inst_40416 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40664_40779 = state_40541__$1;
(statearr_40664_40779[(2)] = inst_40416);

(statearr_40664_40779[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (67))){
var inst_40335 = (state_40541[(33)]);
var inst_40465 = (state_40541[(2)]);
var inst_40466 = cljs.core.get.call(null,inst_40465,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
var inst_40471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40472 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(inst_40465);
var inst_40473 = [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),inst_40472,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)];
var inst_40474 = (new cljs.core.PersistentVector(null,3,(5),inst_40471,inst_40473,null));
var inst_40475 = cljs.core.get_in.call(null,inst_40335,inst_40474);
var inst_40476 = cljs.core.seq.call(null,inst_40475);
var inst_40477 = inst_40476;
var inst_40478 = null;
var inst_40479 = (0);
var inst_40480 = (0);
var state_40541__$1 = (function (){var statearr_40665 = state_40541;
(statearr_40665[(18)] = inst_40479);

(statearr_40665[(9)] = inst_40478);

(statearr_40665[(10)] = inst_40480);

(statearr_40665[(20)] = inst_40477);

(statearr_40665[(41)] = inst_40466);

return statearr_40665;
})();
var statearr_40666_40780 = state_40541__$1;
(statearr_40666_40780[(2)] = null);

(statearr_40666_40780[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (71))){
var inst_40495 = (state_40541[(17)]);
var inst_40477 = (state_40541[(20)]);
var inst_40495__$1 = cljs.core.seq.call(null,inst_40477);
var state_40541__$1 = (function (){var statearr_40667 = state_40541;
(statearr_40667[(17)] = inst_40495__$1);

return statearr_40667;
})();
if(inst_40495__$1){
var statearr_40668_40781 = state_40541__$1;
(statearr_40668_40781[(1)] = (77));

} else {
var statearr_40669_40782 = state_40541__$1;
(statearr_40669_40782[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (42))){
var inst_40397 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40670_40783 = state_40541__$1;
(statearr_40670_40783[(2)] = inst_40397);

(statearr_40670_40783[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (80))){
var inst_40495 = (state_40541[(17)]);
var inst_40499 = cljs.core.chunk_first.call(null,inst_40495);
var inst_40500 = cljs.core.chunk_rest.call(null,inst_40495);
var inst_40501 = cljs.core.count.call(null,inst_40499);
var inst_40477 = inst_40500;
var inst_40478 = inst_40499;
var inst_40479 = inst_40501;
var inst_40480 = (0);
var state_40541__$1 = (function (){var statearr_40671 = state_40541;
(statearr_40671[(18)] = inst_40479);

(statearr_40671[(9)] = inst_40478);

(statearr_40671[(10)] = inst_40480);

(statearr_40671[(20)] = inst_40477);

return statearr_40671;
})();
var statearr_40672_40784 = state_40541__$1;
(statearr_40672_40784[(2)] = null);

(statearr_40672_40784[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (37))){
var inst_40386 = (state_40541[(25)]);
var inst_40404 = (state_40541[(23)]);
var inst_40404__$1 = cljs.core.seq.call(null,inst_40386);
var state_40541__$1 = (function (){var statearr_40673 = state_40541;
(statearr_40673[(23)] = inst_40404__$1);

return statearr_40673;
})();
if(inst_40404__$1){
var statearr_40674_40785 = state_40541__$1;
(statearr_40674_40785[(1)] = (43));

} else {
var statearr_40675_40786 = state_40541__$1;
(statearr_40675_40786[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (63))){
var state_40541__$1 = state_40541;
var statearr_40676_40787 = state_40541__$1;
(statearr_40676_40787[(2)] = false);

(statearr_40676_40787[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (8))){
var inst_40534 = (state_40541[(2)]);
var state_40541__$1 = (function (){var statearr_40677 = state_40541;
(statearr_40677[(42)] = inst_40534);

return statearr_40677;
})();
var statearr_40678_40788 = state_40541__$1;
(statearr_40678_40788[(2)] = null);

(statearr_40678_40788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (49))){
var inst_40413 = (state_40541[(37)]);
var inst_40375 = (state_40541[(22)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40541__$1,(52),inst_40375,inst_40413);
} else {
if((state_val_40542 === (84))){
var state_40541__$1 = state_40541;
var statearr_40679_40789 = state_40541__$1;
(statearr_40679_40789[(2)] = null);

(statearr_40679_40789[(1)] = (85));


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
});})(c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
;
return ((function (switch__38952__auto__,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan){
return (function() {
var dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__ = null;
var dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____0 = (function (){
var statearr_40683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40683[(0)] = dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__);

(statearr_40683[(1)] = (1));

return statearr_40683;
});
var dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____1 = (function (state_40541){
while(true){
var ret_value__38954__auto__ = (function (){try{while(true){
var result__38955__auto__ = switch__38952__auto__.call(null,state_40541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38955__auto__;
}
break;
}
}catch (e40684){if((e40684 instanceof Object)){
var ex__38956__auto__ = e40684;
var statearr_40685_40790 = state_40541;
(statearr_40685_40790[(5)] = ex__38956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40791 = state_40541;
state_40541 = G__40791;
continue;
} else {
return ret_value__38954__auto__;
}
break;
}
});
dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__ = function(state_40541){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____1.call(this,state_40541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____0;
dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto____1;
return dat$reactor$onyx$go_react_BANG__$_state_machine__38953__auto__;
})()
;})(switch__38952__auto__,c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
})();
var state__38977__auto__ = (function (){var statearr_40686 = f__38976__auto__.call(null);
(statearr_40686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38975__auto__);

return statearr_40686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38977__auto__);
});})(c__38975__auto__,map__40279,map__40279__$1,onyx_atom,event_chan,kill_chan))
);

return c__38975__auto__;
});
dat.reactor.onyx.always = cljs.core.constantly.call(null,true);
goog.exportSymbol('dat.reactor.onyx.always', dat.reactor.onyx.always);
/**
 * flow-control - 
 */
dat.reactor.onyx.not_nil_QMARK_ = (function dat$reactor$onyx$not_nil_QMARK_(event,old_seg,seg,all_new){
return !((seg == null));
});
goog.exportSymbol('dat.reactor.onyx.not_nil_QMARK_', dat.reactor.onyx.not_nil_QMARK_);
dat.reactor.onyx.handler_chan_BANG_ = (function dat$reactor$onyx$handler_chan_BANG_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___40818 = arguments.length;
var i__11441__auto___40819 = (0);
while(true){
if((i__11441__auto___40819 < len__11440__auto___40818)){
args__11447__auto__.push((arguments[i__11441__auto___40819]));

var G__40820 = (i__11441__auto___40819 + (1));
i__11441__auto___40819 = G__40820;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (handler,handler_fn,p__40795){
var map__40796 = p__40795;
var map__40796__$1 = ((((!((map__40796 == null)))?((((map__40796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40796):map__40796);
var chan = cljs.core.get.call(null,map__40796__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var chan__$1 = (function (){var or__10219__auto__ = chan;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var c__38975__auto___40821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan){
return (function (){
var f__38976__auto__ = (function (){var switch__38952__auto__ = ((function (c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan){
return (function (state_40806){
var state_val_40807 = (state_40806[(1)]);
if((state_val_40807 === (1))){
var state_40806__$1 = state_40806;
var statearr_40808_40822 = state_40806__$1;
(statearr_40808_40822[(2)] = null);

(statearr_40808_40822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40807 === (2))){
var state_40806__$1 = state_40806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40806__$1,(4),chan__$1);
} else {
if((state_val_40807 === (3))){
var inst_40804 = (state_40806[(2)]);
var state_40806__$1 = state_40806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40806__$1,inst_40804);
} else {
if((state_val_40807 === (4))){
var inst_40800 = (state_40806[(2)]);
var inst_40801 = handler_fn.call(null,handler,inst_40800);
var state_40806__$1 = (function (){var statearr_40809 = state_40806;
(statearr_40809[(7)] = inst_40801);

return statearr_40809;
})();
var statearr_40810_40823 = state_40806__$1;
(statearr_40810_40823[(2)] = null);

(statearr_40810_40823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan))
;
return ((function (switch__38952__auto__,c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan){
return (function() {
var dat$reactor$onyx$state_machine__38953__auto__ = null;
var dat$reactor$onyx$state_machine__38953__auto____0 = (function (){
var statearr_40814 = [null,null,null,null,null,null,null,null];
(statearr_40814[(0)] = dat$reactor$onyx$state_machine__38953__auto__);

(statearr_40814[(1)] = (1));

return statearr_40814;
});
var dat$reactor$onyx$state_machine__38953__auto____1 = (function (state_40806){
while(true){
var ret_value__38954__auto__ = (function (){try{while(true){
var result__38955__auto__ = switch__38952__auto__.call(null,state_40806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38955__auto__;
}
break;
}
}catch (e40815){if((e40815 instanceof Object)){
var ex__38956__auto__ = e40815;
var statearr_40816_40824 = state_40806;
(statearr_40816_40824[(5)] = ex__38956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40825 = state_40806;
state_40806 = G__40825;
continue;
} else {
return ret_value__38954__auto__;
}
break;
}
});
dat$reactor$onyx$state_machine__38953__auto__ = function(state_40806){
switch(arguments.length){
case 0:
return dat$reactor$onyx$state_machine__38953__auto____0.call(this);
case 1:
return dat$reactor$onyx$state_machine__38953__auto____1.call(this,state_40806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$state_machine__38953__auto____0;
dat$reactor$onyx$state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$state_machine__38953__auto____1;
return dat$reactor$onyx$state_machine__38953__auto__;
})()
;})(switch__38952__auto__,c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan))
})();
var state__38977__auto__ = (function (){var statearr_40817 = f__38976__auto__.call(null);
(statearr_40817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38975__auto___40821);

return statearr_40817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38977__auto__);
});})(c__38975__auto___40821,chan__$1,map__40796,map__40796__$1,chan))
);


return chan__$1;
});

dat.reactor.onyx.handler_chan_BANG_.cljs$lang$maxFixedArity = (2);

dat.reactor.onyx.handler_chan_BANG_.cljs$lang$applyTo = (function (seq40792){
var G__40793 = cljs.core.first.call(null,seq40792);
var seq40792__$1 = cljs.core.next.call(null,seq40792);
var G__40794 = cljs.core.first.call(null,seq40792__$1);
var seq40792__$2 = cljs.core.next.call(null,seq40792__$1);
return dat.reactor.onyx.handler_chan_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40793,G__40794,seq40792__$2);
});

dat.reactor.onyx.legacy_segment_BANG_ = (function dat$reactor$onyx$legacy_segment_BANG_(p__40826,p__40827){
var map__40837 = p__40826;
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var app = map__40837__$1;
var conn = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var map__40838 = p__40827;
var map__40838__$1 = ((((!((map__40838 == null)))?((((map__40838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40838):map__40838);
var seg = map__40838__$1;
var event = cljs.core.get.call(null,map__40838__$1,new cljs.core.Keyword(null,"event","event",301435442));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["process legacy event",event], null);
});})(map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event))
,null)),null,235059273);

var final_meta = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (final_meta,map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event){
return (function (current_db){
try{var new_db = dat.reactor.handle_event_BANG_.call(null,app,current_db,event);
cljs.core.reset_BANG_.call(null,final_meta,cljs.core.meta.call(null,new_db));

return cljs.core.with_meta.call(null,new_db,cljs.core.dissoc.call(null,cljs.core.meta.call(null,new_db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161)));
}catch (e40841){var e = e40841;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",120,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,final_meta,map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor swap for legacy event: ",event], null);
});})(e,final_meta,map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event))
,null)),null,-1037184738);

console.log(e.stack);

return current_db;
}});})(final_meta,map__40837,map__40837__$1,app,conn,map__40838,map__40838__$1,seg,event))
);

var temp__6738__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,final_meta)));
if(temp__6738__auto__){
var effects = temp__6738__auto__;
var seq__40842 = cljs.core.seq.call(null,effects);
var chunk__40843 = null;
var count__40844 = (0);
var i__40845 = (0);
while(true){
if((i__40845 < count__40844)){
var effect = cljs.core._nth.call(null,chunk__40843,i__40845);
dat.reactor.execute_effect_BANG_.call(null,app,(function (){var or__10219__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,effect));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.deref.call(null,conn);
}
})(),effect);

var G__40846 = seq__40842;
var G__40847 = chunk__40843;
var G__40848 = count__40844;
var G__40849 = (i__40845 + (1));
seq__40842 = G__40846;
chunk__40843 = G__40847;
count__40844 = G__40848;
i__40845 = G__40849;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__40842);
if(temp__6738__auto____$1){
var seq__40842__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40842__$1)){
var c__11130__auto__ = cljs.core.chunk_first.call(null,seq__40842__$1);
var G__40850 = cljs.core.chunk_rest.call(null,seq__40842__$1);
var G__40851 = c__11130__auto__;
var G__40852 = cljs.core.count.call(null,c__11130__auto__);
var G__40853 = (0);
seq__40842 = G__40850;
chunk__40843 = G__40851;
count__40844 = G__40852;
i__40845 = G__40853;
continue;
} else {
var effect = cljs.core.first.call(null,seq__40842__$1);
dat.reactor.execute_effect_BANG_.call(null,app,(function (){var or__10219__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,effect));
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.deref.call(null,conn);
}
})(),effect);

var G__40854 = cljs.core.next.call(null,seq__40842__$1);
var G__40855 = null;
var G__40856 = (0);
var G__40857 = (0);
seq__40842 = G__40854;
chunk__40843 = G__40855;
count__40844 = G__40856;
i__40845 = G__40857;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
dat.reactor.onyx.go_new_inputs_BANG_ = (function dat$reactor$onyx$go_new_inputs_BANG_(p__40860,event_chan){
var map__40919 = p__40860;
var map__40919__$1 = ((((!((map__40919 == null)))?((((map__40919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40919):map__40919);
var onyx__$1 = map__40919__$1;
var job = cljs.core.get.call(null,map__40919__$1,new cljs.core.Keyword(null,"job","job",850873087));
var running_chans = cljs.core.get.call(null,map__40919__$1,new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",131,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-new-inputs"], null);
});})(map__40919,map__40919__$1,onyx__$1,job,running_chans))
,null)),null,1885149584);

var new_input_tasks = cljs.core.sequence.call(null,cljs.core.comp.call(null,cljs.core.filter.call(null,((function (map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (p1__40858_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("onyx","type","onyx/type",1170345418).cljs$core$IFn$_invoke$arity$1(p1__40858_SHARP_),new cljs.core.Keyword(null,"input","input",556931961));
});})(map__40919,map__40919__$1,onyx__$1,job,running_chans))
),cljs.core.filter.call(null,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800)),cljs.core.remove.call(null,((function (map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (p1__40859_SHARP_){
return cljs.core.contains_QMARK_.call(null,running_chans,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800).cljs$core$IFn$_invoke$arity$1(p1__40859_SHARP_));
});})(map__40919,map__40919__$1,onyx__$1,job,running_chans))
)),new cljs.core.Keyword(null,"catalog","catalog",-439057154).cljs$core$IFn$_invoke$arity$1(job));
var seq__40921_40977 = cljs.core.seq.call(null,new_input_tasks);
var chunk__40922_40978 = null;
var count__40923_40979 = (0);
var i__40924_40980 = (0);
while(true){
if((i__40924_40980 < count__40923_40979)){
var map__40925_40981 = cljs.core._nth.call(null,chunk__40922_40978,i__40924_40980);
var map__40925_40982__$1 = ((((!((map__40925_40981 == null)))?((((map__40925_40981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40925_40981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40925_40981):map__40925_40981);
var task_40983 = map__40925_40982__$1;
var chan_40984 = cljs.core.get.call(null,map__40925_40982__$1,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",140,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listening for inputs task",new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_40983)], null);
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
,null)),null,447793375);

var c__38975__auto___40985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (){
var f__38976__auto__ = (function (){var switch__38952__auto__ = ((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (state_40939){
var state_val_40940 = (state_40939[(1)]);
if((state_val_40940 === (1))){
var state_40939__$1 = state_40939;
var statearr_40941_40986 = state_40939__$1;
(statearr_40941_40986[(2)] = null);

(statearr_40941_40986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40940 === (2))){
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40939__$1,(4),chan_40984);
} else {
if((state_val_40940 === (3))){
var inst_40937 = (state_40939[(2)]);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40939__$1,inst_40937);
} else {
if((state_val_40940 === (4))){
var inst_40929 = (state_40939[(2)]);
var inst_40930 = dat.reactor.onyx.legacy_event__GT_seg.call(null,inst_40929);
var inst_40931 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_40983);
var inst_40932 = cljs.core.assoc.call(null,inst_40930,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102),inst_40931);
var state_40939__$1 = state_40939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40939__$1,(5),event_chan,inst_40932);
} else {
if((state_val_40940 === (5))){
var inst_40934 = (state_40939[(2)]);
var state_40939__$1 = (function (){var statearr_40942 = state_40939;
(statearr_40942[(7)] = inst_40934);

return statearr_40942;
})();
var statearr_40943_40987 = state_40939__$1;
(statearr_40943_40987[(2)] = null);

(statearr_40943_40987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
;
return ((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,switch__38952__auto__,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function() {
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__ = null;
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0 = (function (){
var statearr_40947 = [null,null,null,null,null,null,null,null];
(statearr_40947[(0)] = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__);

(statearr_40947[(1)] = (1));

return statearr_40947;
});
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1 = (function (state_40939){
while(true){
var ret_value__38954__auto__ = (function (){try{while(true){
var result__38955__auto__ = switch__38952__auto__.call(null,state_40939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38955__auto__;
}
break;
}
}catch (e40948){if((e40948 instanceof Object)){
var ex__38956__auto__ = e40948;
var statearr_40949_40988 = state_40939;
(statearr_40949_40988[(5)] = ex__38956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40989 = state_40939;
state_40939 = G__40989;
continue;
} else {
return ret_value__38954__auto__;
}
break;
}
});
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__ = function(state_40939){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1.call(this,state_40939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0;
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1;
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__;
})()
;})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,switch__38952__auto__,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
})();
var state__38977__auto__ = (function (){var statearr_40950 = f__38976__auto__.call(null);
(statearr_40950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38975__auto___40985);

return statearr_40950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38977__auto__);
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___40985,map__40925_40981,map__40925_40982__$1,task_40983,chan_40984,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
);


var G__40990 = seq__40921_40977;
var G__40991 = chunk__40922_40978;
var G__40992 = count__40923_40979;
var G__40993 = (i__40924_40980 + (1));
seq__40921_40977 = G__40990;
chunk__40922_40978 = G__40991;
count__40923_40979 = G__40992;
i__40924_40980 = G__40993;
continue;
} else {
var temp__6738__auto___40994 = cljs.core.seq.call(null,seq__40921_40977);
if(temp__6738__auto___40994){
var seq__40921_40995__$1 = temp__6738__auto___40994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40921_40995__$1)){
var c__11130__auto___40996 = cljs.core.chunk_first.call(null,seq__40921_40995__$1);
var G__40997 = cljs.core.chunk_rest.call(null,seq__40921_40995__$1);
var G__40998 = c__11130__auto___40996;
var G__40999 = cljs.core.count.call(null,c__11130__auto___40996);
var G__41000 = (0);
seq__40921_40977 = G__40997;
chunk__40922_40978 = G__40998;
count__40923_40979 = G__40999;
i__40924_40980 = G__41000;
continue;
} else {
var map__40951_41001 = cljs.core.first.call(null,seq__40921_40995__$1);
var map__40951_41002__$1 = ((((!((map__40951_41001 == null)))?((((map__40951_41001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40951_41001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40951_41001):map__40951_41001);
var task_41003 = map__40951_41002__$1;
var chan_41004 = cljs.core.get.call(null,map__40951_41002__$1,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",140,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["listening for inputs task",new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_41003)], null);
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
,null)),null,1449225953);

var c__38975__auto___41005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (){
var f__38976__auto__ = (function (){var switch__38952__auto__ = ((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function (state_40965){
var state_val_40966 = (state_40965[(1)]);
if((state_val_40966 === (1))){
var state_40965__$1 = state_40965;
var statearr_40967_41006 = state_40965__$1;
(statearr_40967_41006[(2)] = null);

(statearr_40967_41006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40966 === (2))){
var state_40965__$1 = state_40965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40965__$1,(4),chan_41004);
} else {
if((state_val_40966 === (3))){
var inst_40963 = (state_40965[(2)]);
var state_40965__$1 = state_40965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40965__$1,inst_40963);
} else {
if((state_val_40966 === (4))){
var inst_40955 = (state_40965[(2)]);
var inst_40956 = dat.reactor.onyx.legacy_event__GT_seg.call(null,inst_40955);
var inst_40957 = new cljs.core.Keyword("onyx","name","onyx/name",1848664427).cljs$core$IFn$_invoke$arity$1(task_41003);
var inst_40958 = cljs.core.assoc.call(null,inst_40956,new cljs.core.Keyword("dat.reactor","input","dat.reactor/input",498748102),inst_40957);
var state_40965__$1 = state_40965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40965__$1,(5),event_chan,inst_40958);
} else {
if((state_val_40966 === (5))){
var inst_40960 = (state_40965[(2)]);
var state_40965__$1 = (function (){var statearr_40968 = state_40965;
(statearr_40968[(7)] = inst_40960);

return statearr_40968;
})();
var statearr_40969_41007 = state_40965__$1;
(statearr_40969_41007[(2)] = null);

(statearr_40969_41007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
;
return ((function (seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,switch__38952__auto__,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans){
return (function() {
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__ = null;
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0 = (function (){
var statearr_40973 = [null,null,null,null,null,null,null,null];
(statearr_40973[(0)] = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__);

(statearr_40973[(1)] = (1));

return statearr_40973;
});
var dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1 = (function (state_40965){
while(true){
var ret_value__38954__auto__ = (function (){try{while(true){
var result__38955__auto__ = switch__38952__auto__.call(null,state_40965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38955__auto__;
}
break;
}
}catch (e40974){if((e40974 instanceof Object)){
var ex__38956__auto__ = e40974;
var statearr_40975_41008 = state_40965;
(statearr_40975_41008[(5)] = ex__38956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41009 = state_40965;
state_40965 = G__41009;
continue;
} else {
return ret_value__38954__auto__;
}
break;
}
});
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__ = function(state_40965){
switch(arguments.length){
case 0:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0.call(this);
case 1:
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1.call(this,state_40965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____0;
dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto____1;
return dat$reactor$onyx$go_new_inputs_BANG__$_state_machine__38953__auto__;
})()
;})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,switch__38952__auto__,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
})();
var state__38977__auto__ = (function (){var statearr_40976 = f__38976__auto__.call(null);
(statearr_40976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38975__auto___41005);

return statearr_40976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38977__auto__);
});})(seq__40921_40977,chunk__40922_40978,count__40923_40979,i__40924_40980,c__38975__auto___41005,map__40951_41001,map__40951_41002__$1,task_41003,chan_41004,seq__40921_40995__$1,temp__6738__auto___40994,new_input_tasks,map__40919,map__40919__$1,onyx__$1,job,running_chans))
);


var G__41010 = cljs.core.next.call(null,seq__40921_40995__$1);
var G__41011 = null;
var G__41012 = (0);
var G__41013 = (0);
seq__40921_40977 = G__41010;
chunk__40922_40978 = G__41011;
count__40923_40979 = G__41012;
i__40924_40980 = G__41013;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc.call(null,onyx__$1,new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),cljs.core.into.call(null,(function (){var or__10219__auto__ = running_chans;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.map.call(null,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800)),new_input_tasks));
});
dat.reactor.onyx.log_segment_BANG_ = (function dat$reactor$onyx$log_segment_BANG_(log_fn,seg){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",154,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["logging segment...",seg], null);
}),null)),null,1046625900);
});
/**
 * Expands reactor's onyx job to include the given job fragment. The job-key is used to allow overwriting a job fragment previously registered. This function has side effects, but is semi-idempotent (you can safely call multiple times with the same fragment).
 */
dat.reactor.onyx.expand_job_BANG_ = (function dat$reactor$onyx$expand_job_BANG_(p__41014,job_key,fragment){
var map__41020 = p__41014;
var map__41020__$1 = ((((!((map__41020 == null)))?((((map__41020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41020):map__41020);
var reactor = map__41020__$1;
var event_chan = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912));
var onyx_atom = cljs.core.get.call(null,map__41020__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119));
return cljs.core.swap_BANG_.call(null,onyx_atom,((function (map__41020,map__41020__$1,reactor,event_chan,onyx_atom){
return (function (p__41022){
var map__41023 = p__41022;
var map__41023__$1 = ((((!((map__41023 == null)))?((((map__41023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41023):map__41023);
var onyx__$1 = map__41023__$1;
var job_fragments = cljs.core.get.call(null,map__41023__$1,new cljs.core.Keyword(null,"job-fragments","job-fragments",-1483444774));
var fragments = cljs.core.assoc.call(null,(function (){var or__10219__auto__ = job_fragments;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),job_key,fragment);
var job = cljs.core.transduce.call(null,cljs.core.map.call(null,cljs.core.second),dat.reactor.onyx.conj_job,fragments);
return dat.reactor.onyx.go_new_inputs_BANG_.call(null,cljs.core.assoc.call(null,onyx__$1,new cljs.core.Keyword(null,"job-fragments","job-fragments",-1483444774),fragments,new cljs.core.Keyword(null,"job","job",850873087),job,new cljs.core.Keyword(null,"env","env",-1815813235),onyx_local_rt.api.init.call(null,job)),event_chan);
});})(map__41020,map__41020__$1,reactor,event_chan,onyx_atom))
);
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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.onyx.OnyxReactor = (function (onyx_atom,event_chan,kill_chan,__meta,__extmap,__hash){
this.onyx_atom = onyx_atom;
this.event_chan = event_chan;
this.kill_chan = kill_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k41026,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__41028 = k41026;
var G__41028__$1 = (((G__41028 instanceof cljs.core.Keyword))?G__41028.fqn:null);
switch (G__41028__$1) {
case "onyx-atom":
return self__.onyx_atom;

break;
case "event-chan":
return self__.event_chan;

break;
case "kill-chan":
return self__.kill_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41026,else__10897__auto__);

}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#dat.reactor.onyx.OnyxReactor{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),self__.onyx_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41025){
var self__ = this;
var G__41025__$1 = this;
return (new cljs.core.RecordIter((0),G__41025__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__41025){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__41029 = cljs.core.keyword_identical_QMARK_;
var expr__41030 = k__10902__auto__;
if(cljs.core.truth_(pred__41029.call(null,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),expr__41030))){
return (new dat.reactor.onyx.OnyxReactor(G__41025,self__.event_chan,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41029.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),expr__41030))){
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,G__41025,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__41029.call(null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),expr__41030))){
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,G__41025,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__41025),null));
}
}
}
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),self__.onyx_atom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__41025){
var self__ = this;
var this__10893__auto____$1 = this;
return (new dat.reactor.onyx.OnyxReactor(self__.onyx_atom,self__.event_chan,self__.kill_chan,G__41025,self__.__extmap,self__.__hash));
});

dat.reactor.onyx.OnyxReactor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (reactor){
var self__ = this;
var reactor__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.onyx","/tmp/form-init6337196911646559353.clj",181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (reactor__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting OnyxReactor Component"], null);
});})(reactor__$1))
,null)),null,1328871480);

var onyx_batch_size = (20);
var running_QMARK_ = self__.kill_chan;
var reactor__$2 = cljs.core.assoc.call(null,reactor__$1,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),(function (){var or__10219__auto__ = self__.onyx_atom;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
})(),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),(function (){var or__10219__auto__ = self__.kill_chan;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),(function (){var or__10219__auto__ = self__.event_chan;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})());
dat.reactor.onyx.expand_job_BANG_.call(null,reactor__$2,new cljs.core.Keyword("dat.reactor.onyx","base-job","dat.reactor.onyx/base-job",-1691841981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"catalog","catalog",-439057154),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","loop-in","dat.reactor/loop-in",65022138),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","loopback","dat.reactor/loopback",715606267),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("onyx","type","onyx/type",1170345418),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword("onyx","batch-size","onyx/batch-size",1209135837),onyx_batch_size,new cljs.core.Keyword("dat.reactor","chan","dat.reactor/chan",1738071800),dat.reactor.onyx.handler_chan_BANG_.call(null,null,dat.reactor.onyx.log_segment_BANG_),new cljs.core.Keyword("onyx","name","onyx/name",1848664427),new cljs.core.Keyword("dat.reactor","log","dat.reactor/log",266201969)], null)], null)], null));

if(cljs.core.not.call(null,running_QMARK_)){
dat.reactor.onyx.go_react_BANG_.call(null,reactor__$2);
} else {
}

return reactor__$2;
});

dat.reactor.onyx.OnyxReactor.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (reactor){
var self__ = this;
var reactor__$1 = this;
if(cljs.core.truth_(self__.kill_chan)){
cljs.core.async.put_BANG_.call(null,self__.kill_chan,new cljs.core.Keyword(null,"kill","kill",-12335575));
} else {
}

return cljs.core.assoc.call(null,reactor__$1,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null);
});

dat.reactor.onyx.OnyxReactor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"onyx-atom","onyx-atom",-1455957650,null),new cljs.core.Symbol(null,"event-chan","event-chan",58153615,null),new cljs.core.Symbol(null,"kill-chan","kill-chan",76861273,null)], null);
});

dat.reactor.onyx.OnyxReactor.cljs$lang$type = true;

dat.reactor.onyx.OnyxReactor.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.onyx/OnyxReactor");
});

dat.reactor.onyx.OnyxReactor.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"dat.reactor.onyx/OnyxReactor");
});

dat.reactor.onyx.__GT_OnyxReactor = (function dat$reactor$onyx$__GT_OnyxReactor(onyx_atom,event_chan,kill_chan){
return (new dat.reactor.onyx.OnyxReactor(onyx_atom,event_chan,kill_chan,null,null,null));
});

dat.reactor.onyx.map__GT_OnyxReactor = (function dat$reactor$onyx$map__GT_OnyxReactor(G__41027){
return (new dat.reactor.onyx.OnyxReactor(new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119).cljs$core$IFn$_invoke$arity$1(G__41027),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(G__41027),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254).cljs$core$IFn$_invoke$arity$1(G__41027),null,cljs.core.dissoc.call(null,G__41027,new cljs.core.Keyword(null,"onyx-atom","onyx-atom",1198478119),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.reactor.onyx.new_onyx_reactor = (function dat$reactor$onyx$new_onyx_reactor(var_args){
var args41033 = [];
var len__11440__auto___41036 = arguments.length;
var i__11441__auto___41037 = (0);
while(true){
if((i__11441__auto___41037 < len__11440__auto___41036)){
args41033.push((arguments[i__11441__auto___41037]));

var G__41038 = (i__11441__auto___41037 + (1));
i__11441__auto___41037 = G__41038;
continue;
} else {
}
break;
}

var G__41035 = args41033.length;
switch (G__41035) {
case 1:
return dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41033.length)].join('')));

}
});

dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.onyx.map__GT_OnyxReactor.call(null,options);
});

dat.reactor.onyx.new_onyx_reactor.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.onyx.new_onyx_reactor.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.onyx.new_onyx_reactor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=onyx.js.map