// Compiled by ClojureScript 1.9.542 {}
goog.provide('konserve.core');
goog.require('cljs.core');
goog.require('konserve.protocols');
goog.require('hasch.core');
goog.require('cljs.core.async');
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
konserve.core.cljs_env_QMARK_ = (function konserve$core$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
konserve.core.get_lock = (function konserve$core$get_lock(p__44309,key){
var map__44312 = p__44309;
var map__44312__$1 = ((((!((map__44312 == null)))?((((map__44312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44312):map__44312);
var store = map__44312__$1;
var locks = cljs.core.get.call(null,map__44312__$1,new cljs.core.Keyword(null,"locks","locks",1560476518));
var or__10219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,locks),key);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var c = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,c,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));

return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,locks,((function (c,or__10219__auto__,map__44312,map__44312__$1,store,locks){
return (function (old){
if(cljs.core.truth_(old.call(null,key))){
return old;
} else {
return cljs.core.assoc.call(null,old,key,c);
}
});})(c,or__10219__auto__,map__44312,map__44312__$1,store,locks))
),key);
}
});
/**
 * Checks whether value is in the store.
 */
konserve.core.exists_QMARK_ = (function konserve$core$exists_QMARK_(store,key){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44357){
var state_val_44358 = (state_44357[(1)]);
if((state_val_44358 === (1))){
var inst_44343 = konserve.core.get_lock.call(null,store,key);
var state_44357__$1 = (function (){var statearr_44359 = state_44357;
(statearr_44359[(7)] = inst_44343);

return statearr_44359;
})();
var statearr_44360_44371 = state_44357__$1;
(statearr_44360_44371[(2)] = null);

(statearr_44360_44371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (2))){
var inst_44355 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44357__$1,inst_44355);
} else {
if((state_val_44358 === (3))){
var inst_44343 = (state_44357[(7)]);
var inst_44344 = (state_44357[(2)]);
var inst_44345 = cljs.core.async.put_BANG_.call(null,inst_44343,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44357__$1 = (function (){var statearr_44361 = state_44357;
(statearr_44361[(8)] = inst_44345);

(statearr_44361[(9)] = inst_44344);

return statearr_44361;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44358 === (4))){
var inst_44343 = (state_44357[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44357,null,null,(3),(2));
var state_44357__$1 = state_44357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44357__$1,(5),inst_44343);
} else {
if((state_val_44358 === (5))){
var inst_44350 = (state_44357[(2)]);
var inst_44351 = konserve.protocols._exists_QMARK_.call(null,store,key);
var state_44357__$1 = (function (){var statearr_44362 = state_44357;
(statearr_44362[(10)] = inst_44350);

return statearr_44362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44357__$1,(6),inst_44351);
} else {
if((state_val_44358 === (6))){
var inst_44353 = (state_44357[(2)]);
var state_44357__$1 = state_44357;
var statearr_44363_44372 = state_44357__$1;
(statearr_44363_44372[(2)] = inst_44353);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$exists_QMARK__$_state_machine__37110__auto__ = null;
var konserve$core$exists_QMARK__$_state_machine__37110__auto____0 = (function (){
var statearr_44367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44367[(0)] = konserve$core$exists_QMARK__$_state_machine__37110__auto__);

(statearr_44367[(1)] = (1));

return statearr_44367;
});
var konserve$core$exists_QMARK__$_state_machine__37110__auto____1 = (function (state_44357){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44368){if((e44368 instanceof Object)){
var ex__37113__auto__ = e44368;
var statearr_44369_44373 = state_44357;
(statearr_44369_44373[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44374 = state_44357;
state_44357 = G__44374;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$exists_QMARK__$_state_machine__37110__auto__ = function(state_44357){
switch(arguments.length){
case 0:
return konserve$core$exists_QMARK__$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$exists_QMARK__$_state_machine__37110__auto____1.call(this,state_44357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$exists_QMARK__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$exists_QMARK__$_state_machine__37110__auto____0;
konserve$core$exists_QMARK__$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$exists_QMARK__$_state_machine__37110__auto____1;
return konserve$core$exists_QMARK__$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44370 = f__37224__auto__.call(null);
(statearr_44370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Returns the value stored described by key-vec or nil if the path is
 *   not resolvable.
 */
konserve.core.get_in = (function konserve$core$get_in(store,key_vec){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44419){
var state_val_44420 = (state_44419[(1)]);
if((state_val_44420 === (1))){
var inst_44404 = cljs.core.first.call(null,key_vec);
var inst_44405 = konserve.core.get_lock.call(null,store,inst_44404);
var state_44419__$1 = (function (){var statearr_44421 = state_44419;
(statearr_44421[(7)] = inst_44405);

return statearr_44421;
})();
var statearr_44422_44433 = state_44419__$1;
(statearr_44422_44433[(2)] = null);

(statearr_44422_44433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (2))){
var inst_44417 = (state_44419[(2)]);
var state_44419__$1 = state_44419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44419__$1,inst_44417);
} else {
if((state_val_44420 === (3))){
var inst_44405 = (state_44419[(7)]);
var inst_44406 = (state_44419[(2)]);
var inst_44407 = cljs.core.async.put_BANG_.call(null,inst_44405,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44419__$1 = (function (){var statearr_44423 = state_44419;
(statearr_44423[(8)] = inst_44406);

(statearr_44423[(9)] = inst_44407);

return statearr_44423;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44419__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44420 === (4))){
var inst_44405 = (state_44419[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44419,null,null,(3),(2));
var state_44419__$1 = state_44419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44419__$1,(5),inst_44405);
} else {
if((state_val_44420 === (5))){
var inst_44412 = (state_44419[(2)]);
var inst_44413 = konserve.protocols._get_in.call(null,store,key_vec);
var state_44419__$1 = (function (){var statearr_44424 = state_44419;
(statearr_44424[(10)] = inst_44412);

return statearr_44424;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44419__$1,(6),inst_44413);
} else {
if((state_val_44420 === (6))){
var inst_44415 = (state_44419[(2)]);
var state_44419__$1 = state_44419;
var statearr_44425_44434 = state_44419__$1;
(statearr_44425_44434[(2)] = inst_44415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44419__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$get_in_$_state_machine__37110__auto__ = null;
var konserve$core$get_in_$_state_machine__37110__auto____0 = (function (){
var statearr_44429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44429[(0)] = konserve$core$get_in_$_state_machine__37110__auto__);

(statearr_44429[(1)] = (1));

return statearr_44429;
});
var konserve$core$get_in_$_state_machine__37110__auto____1 = (function (state_44419){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44430){if((e44430 instanceof Object)){
var ex__37113__auto__ = e44430;
var statearr_44431_44435 = state_44419;
(statearr_44431_44435[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44436 = state_44419;
state_44419 = G__44436;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$get_in_$_state_machine__37110__auto__ = function(state_44419){
switch(arguments.length){
case 0:
return konserve$core$get_in_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$get_in_$_state_machine__37110__auto____1.call(this,state_44419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$get_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$get_in_$_state_machine__37110__auto____0;
konserve$core$get_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$get_in_$_state_machine__37110__auto____1;
return konserve$core$get_in_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44432 = f__37224__auto__.call(null);
(statearr_44432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Updates a position described by key-vec by applying up-fn and storing
 *   the result atomically. Returns a vector [old new] of the previous
 *   value and the result of applying up-fn (the newly stored value).
 */
konserve.core.update_in = (function konserve$core$update_in(store,key_vec,fn){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44481){
var state_val_44482 = (state_44481[(1)]);
if((state_val_44482 === (1))){
var inst_44466 = cljs.core.first.call(null,key_vec);
var inst_44467 = konserve.core.get_lock.call(null,store,inst_44466);
var state_44481__$1 = (function (){var statearr_44483 = state_44481;
(statearr_44483[(7)] = inst_44467);

return statearr_44483;
})();
var statearr_44484_44495 = state_44481__$1;
(statearr_44484_44495[(2)] = null);

(statearr_44484_44495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44482 === (2))){
var inst_44479 = (state_44481[(2)]);
var state_44481__$1 = state_44481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44481__$1,inst_44479);
} else {
if((state_val_44482 === (3))){
var inst_44467 = (state_44481[(7)]);
var inst_44468 = (state_44481[(2)]);
var inst_44469 = cljs.core.async.put_BANG_.call(null,inst_44467,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44481__$1 = (function (){var statearr_44485 = state_44481;
(statearr_44485[(8)] = inst_44469);

(statearr_44485[(9)] = inst_44468);

return statearr_44485;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44482 === (4))){
var inst_44467 = (state_44481[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44481,null,null,(3),(2));
var state_44481__$1 = state_44481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44481__$1,(5),inst_44467);
} else {
if((state_val_44482 === (5))){
var inst_44474 = (state_44481[(2)]);
var inst_44475 = konserve.protocols._update_in.call(null,store,key_vec,fn);
var state_44481__$1 = (function (){var statearr_44486 = state_44481;
(statearr_44486[(10)] = inst_44474);

return statearr_44486;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44481__$1,(6),inst_44475);
} else {
if((state_val_44482 === (6))){
var inst_44477 = (state_44481[(2)]);
var state_44481__$1 = state_44481;
var statearr_44487_44496 = state_44481__$1;
(statearr_44487_44496[(2)] = inst_44477);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$update_in_$_state_machine__37110__auto__ = null;
var konserve$core$update_in_$_state_machine__37110__auto____0 = (function (){
var statearr_44491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44491[(0)] = konserve$core$update_in_$_state_machine__37110__auto__);

(statearr_44491[(1)] = (1));

return statearr_44491;
});
var konserve$core$update_in_$_state_machine__37110__auto____1 = (function (state_44481){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44492){if((e44492 instanceof Object)){
var ex__37113__auto__ = e44492;
var statearr_44493_44497 = state_44481;
(statearr_44493_44497[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44498 = state_44481;
state_44481 = G__44498;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$update_in_$_state_machine__37110__auto__ = function(state_44481){
switch(arguments.length){
case 0:
return konserve$core$update_in_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$update_in_$_state_machine__37110__auto____1.call(this,state_44481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$update_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$update_in_$_state_machine__37110__auto____0;
konserve$core$update_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$update_in_$_state_machine__37110__auto____1;
return konserve$core$update_in_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44494 = f__37224__auto__.call(null);
(statearr_44494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Associates the key-vec to the value, any missing collections for
 *   the key-vec (nested maps and vectors) are newly created.
 */
konserve.core.assoc_in = (function konserve$core$assoc_in(store,key_vec,val){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44543){
var state_val_44544 = (state_44543[(1)]);
if((state_val_44544 === (1))){
var inst_44528 = cljs.core.first.call(null,key_vec);
var inst_44529 = konserve.core.get_lock.call(null,store,inst_44528);
var state_44543__$1 = (function (){var statearr_44545 = state_44543;
(statearr_44545[(7)] = inst_44529);

return statearr_44545;
})();
var statearr_44546_44557 = state_44543__$1;
(statearr_44546_44557[(2)] = null);

(statearr_44546_44557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44544 === (2))){
var inst_44541 = (state_44543[(2)]);
var state_44543__$1 = state_44543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44543__$1,inst_44541);
} else {
if((state_val_44544 === (3))){
var inst_44529 = (state_44543[(7)]);
var inst_44530 = (state_44543[(2)]);
var inst_44531 = cljs.core.async.put_BANG_.call(null,inst_44529,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44543__$1 = (function (){var statearr_44547 = state_44543;
(statearr_44547[(8)] = inst_44530);

(statearr_44547[(9)] = inst_44531);

return statearr_44547;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44543__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44544 === (4))){
var inst_44529 = (state_44543[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44543,null,null,(3),(2));
var state_44543__$1 = state_44543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44543__$1,(5),inst_44529);
} else {
if((state_val_44544 === (5))){
var inst_44536 = (state_44543[(2)]);
var inst_44537 = konserve.protocols._assoc_in.call(null,store,key_vec,val);
var state_44543__$1 = (function (){var statearr_44548 = state_44543;
(statearr_44548[(10)] = inst_44536);

return statearr_44548;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44543__$1,(6),inst_44537);
} else {
if((state_val_44544 === (6))){
var inst_44539 = (state_44543[(2)]);
var state_44543__$1 = state_44543;
var statearr_44549_44558 = state_44543__$1;
(statearr_44549_44558[(2)] = inst_44539);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44543__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$assoc_in_$_state_machine__37110__auto__ = null;
var konserve$core$assoc_in_$_state_machine__37110__auto____0 = (function (){
var statearr_44553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44553[(0)] = konserve$core$assoc_in_$_state_machine__37110__auto__);

(statearr_44553[(1)] = (1));

return statearr_44553;
});
var konserve$core$assoc_in_$_state_machine__37110__auto____1 = (function (state_44543){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44554){if((e44554 instanceof Object)){
var ex__37113__auto__ = e44554;
var statearr_44555_44559 = state_44543;
(statearr_44555_44559[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44560 = state_44543;
state_44543 = G__44560;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$assoc_in_$_state_machine__37110__auto__ = function(state_44543){
switch(arguments.length){
case 0:
return konserve$core$assoc_in_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$assoc_in_$_state_machine__37110__auto____1.call(this,state_44543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$assoc_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$assoc_in_$_state_machine__37110__auto____0;
konserve$core$assoc_in_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$assoc_in_$_state_machine__37110__auto____1;
return konserve$core$assoc_in_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44556 = f__37224__auto__.call(null);
(statearr_44556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Removes an entry from the store. 
 */
konserve.core.dissoc = (function konserve$core$dissoc(store,key){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44603){
var state_val_44604 = (state_44603[(1)]);
if((state_val_44604 === (1))){
var inst_44589 = konserve.core.get_lock.call(null,store,key);
var state_44603__$1 = (function (){var statearr_44605 = state_44603;
(statearr_44605[(7)] = inst_44589);

return statearr_44605;
})();
var statearr_44606_44617 = state_44603__$1;
(statearr_44606_44617[(2)] = null);

(statearr_44606_44617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44604 === (2))){
var inst_44601 = (state_44603[(2)]);
var state_44603__$1 = state_44603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44603__$1,inst_44601);
} else {
if((state_val_44604 === (3))){
var inst_44589 = (state_44603[(7)]);
var inst_44590 = (state_44603[(2)]);
var inst_44591 = cljs.core.async.put_BANG_.call(null,inst_44589,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44603__$1 = (function (){var statearr_44607 = state_44603;
(statearr_44607[(8)] = inst_44591);

(statearr_44607[(9)] = inst_44590);

return statearr_44607;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44603__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44604 === (4))){
var inst_44589 = (state_44603[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44603,null,null,(3),(2));
var state_44603__$1 = state_44603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44603__$1,(5),inst_44589);
} else {
if((state_val_44604 === (5))){
var inst_44596 = (state_44603[(2)]);
var inst_44597 = konserve.protocols._dissoc.call(null,store,key);
var state_44603__$1 = (function (){var statearr_44608 = state_44603;
(statearr_44608[(10)] = inst_44596);

return statearr_44608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44603__$1,(6),inst_44597);
} else {
if((state_val_44604 === (6))){
var inst_44599 = (state_44603[(2)]);
var state_44603__$1 = state_44603;
var statearr_44609_44618 = state_44603__$1;
(statearr_44609_44618[(2)] = inst_44599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44603__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$dissoc_$_state_machine__37110__auto__ = null;
var konserve$core$dissoc_$_state_machine__37110__auto____0 = (function (){
var statearr_44613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44613[(0)] = konserve$core$dissoc_$_state_machine__37110__auto__);

(statearr_44613[(1)] = (1));

return statearr_44613;
});
var konserve$core$dissoc_$_state_machine__37110__auto____1 = (function (state_44603){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44614){if((e44614 instanceof Object)){
var ex__37113__auto__ = e44614;
var statearr_44615_44619 = state_44603;
(statearr_44615_44619[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44620 = state_44603;
state_44603 = G__44620;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$dissoc_$_state_machine__37110__auto__ = function(state_44603){
switch(arguments.length){
case 0:
return konserve$core$dissoc_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$dissoc_$_state_machine__37110__auto____1.call(this,state_44603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$dissoc_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$dissoc_$_state_machine__37110__auto____0;
konserve$core$dissoc_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$dissoc_$_state_machine__37110__auto____1;
return konserve$core$dissoc_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44616 = f__37224__auto__.call(null);
(statearr_44616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Append the Element to the log at the given key or create a new append log there.
 *   This operation only needs to write the element and pointer to disk and hence is useful in write-heavy situations.
 */
konserve.core.append = (function konserve$core$append(store,key,elem){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_44790){
var state_val_44791 = (state_44790[(1)]);
if((state_val_44791 === (7))){
var inst_44738 = (state_44790[(7)]);
var inst_44746 = cljs.core.not_EQ_.call(null,inst_44738,new cljs.core.Keyword(null,"append-log","append-log",-1873397085));
var state_44790__$1 = state_44790;
var statearr_44792_44821 = state_44790__$1;
(statearr_44792_44821[(2)] = inst_44746);

(statearr_44792_44821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (1))){
var inst_44721 = konserve.core.get_lock.call(null,store,key);
var state_44790__$1 = (function (){var statearr_44793 = state_44790;
(statearr_44793[(8)] = inst_44721);

return statearr_44793;
})();
var statearr_44794_44822 = state_44790__$1;
(statearr_44794_44822[(2)] = null);

(statearr_44794_44822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (4))){
var inst_44721 = (state_44790[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44790,null,null,(3),(2));
var state_44790__$1 = state_44790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(5),inst_44721);
} else {
if((state_val_44791 === (15))){
var state_44790__$1 = state_44790;
var statearr_44795_44823 = state_44790__$1;
(statearr_44795_44823[(2)] = null);

(statearr_44795_44823[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (13))){
var inst_44740 = (state_44790[(9)]);
var inst_44765 = (state_44790[(2)]);
var state_44790__$1 = (function (){var statearr_44796 = state_44790;
(statearr_44796[(10)] = inst_44765);

return statearr_44796;
})();
if(cljs.core.truth_(inst_44740)){
var statearr_44797_44824 = state_44790__$1;
(statearr_44797_44824[(1)] = (14));

} else {
var statearr_44798_44825 = state_44790__$1;
(statearr_44798_44825[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (6))){
var inst_44737 = (state_44790[(11)]);
var inst_44737__$1 = (state_44790[(2)]);
var inst_44738 = cljs.core.nth.call(null,inst_44737__$1,(0),null);
var inst_44739 = cljs.core.nth.call(null,inst_44737__$1,(1),null);
var inst_44740 = cljs.core.nth.call(null,inst_44737__$1,(2),null);
var inst_44741 = [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"elem","elem",618631056)];
var inst_44742 = [null,elem];
var inst_44743 = cljs.core.PersistentHashMap.fromArrays(inst_44741,inst_44742);
var inst_44744 = hasch.core.uuid.call(null);
var state_44790__$1 = (function (){var statearr_44799 = state_44790;
(statearr_44799[(12)] = inst_44743);

(statearr_44799[(13)] = inst_44744);

(statearr_44799[(11)] = inst_44737__$1);

(statearr_44799[(9)] = inst_44740);

(statearr_44799[(7)] = inst_44738);

(statearr_44799[(14)] = inst_44739);

return statearr_44799;
})();
if(cljs.core.truth_(inst_44737__$1)){
var statearr_44800_44826 = state_44790__$1;
(statearr_44800_44826[(1)] = (7));

} else {
var statearr_44801_44827 = state_44790__$1;
(statearr_44801_44827[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (17))){
var inst_44773 = (state_44790[(2)]);
var state_44790__$1 = state_44790;
var statearr_44802_44828 = state_44790__$1;
(statearr_44802_44828[(2)] = inst_44773);

(statearr_44802_44828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (3))){
var inst_44721 = (state_44790[(8)]);
var inst_44722 = (state_44790[(2)]);
var inst_44723 = cljs.core.async.put_BANG_.call(null,inst_44721,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_44790__$1 = (function (){var statearr_44803 = state_44790;
(statearr_44803[(15)] = inst_44722);

(statearr_44803[(16)] = inst_44723);

return statearr_44803;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44790__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (12))){
var inst_44721 = (state_44790[(8)]);
var inst_44743 = (state_44790[(12)]);
var inst_44744 = (state_44790[(13)]);
var inst_44737 = (state_44790[(11)]);
var inst_44740 = (state_44790[(9)]);
var inst_44738 = (state_44790[(7)]);
var inst_44739 = (state_44790[(14)]);
var inst_44758 = (state_44790[(2)]);
var inst_44759 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44760 = [inst_44744];
var inst_44761 = (new cljs.core.PersistentVector(null,1,(5),inst_44759,inst_44760,null));
var inst_44762 = (function (){var l__43436__auto__ = inst_44721;
var head = inst_44737;
var vec__44729 = inst_44737;
var append_log_QMARK_ = inst_44738;
var last_id = inst_44739;
var first_id = inst_44740;
var new_elem = inst_44743;
var id = inst_44744;
return ((function (l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44758,inst_44759,inst_44760,inst_44761,state_val_44791,c__37223__auto__){
return (function (_){
return new_elem;
});
;})(l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44758,inst_44759,inst_44760,inst_44761,state_val_44791,c__37223__auto__))
})();
var inst_44763 = konserve.protocols._update_in.call(null,store,inst_44761,inst_44762);
var state_44790__$1 = (function (){var statearr_44804 = state_44790;
(statearr_44804[(17)] = inst_44758);

return statearr_44804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(13),inst_44763);
} else {
if((state_val_44791 === (2))){
var inst_44788 = (state_44790[(2)]);
var state_44790__$1 = state_44790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44790__$1,inst_44788);
} else {
if((state_val_44791 === (11))){
var state_44790__$1 = state_44790;
var statearr_44805_44829 = state_44790__$1;
(statearr_44805_44829[(2)] = null);

(statearr_44805_44829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (9))){
var inst_44749 = (state_44790[(2)]);
var state_44790__$1 = state_44790;
if(cljs.core.truth_(inst_44749)){
var statearr_44806_44830 = state_44790__$1;
(statearr_44806_44830[(1)] = (10));

} else {
var statearr_44807_44831 = state_44790__$1;
(statearr_44807_44831[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (5))){
var inst_44728 = (state_44790[(2)]);
var inst_44732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44733 = [key];
var inst_44734 = (new cljs.core.PersistentVector(null,1,(5),inst_44732,inst_44733,null));
var inst_44735 = konserve.protocols._get_in.call(null,store,inst_44734);
var state_44790__$1 = (function (){var statearr_44808 = state_44790;
(statearr_44808[(18)] = inst_44728);

return statearr_44808;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(6),inst_44735);
} else {
if((state_val_44791 === (14))){
var inst_44721 = (state_44790[(8)]);
var inst_44743 = (state_44790[(12)]);
var inst_44744 = (state_44790[(13)]);
var inst_44737 = (state_44790[(11)]);
var inst_44740 = (state_44790[(9)]);
var inst_44738 = (state_44790[(7)]);
var inst_44739 = (state_44790[(14)]);
var inst_44767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44768 = [inst_44739,new cljs.core.Keyword(null,"next","next",-117701485)];
var inst_44769 = (new cljs.core.PersistentVector(null,2,(5),inst_44767,inst_44768,null));
var inst_44770 = (function (){var l__43436__auto__ = inst_44721;
var head = inst_44737;
var vec__44729 = inst_44737;
var append_log_QMARK_ = inst_44738;
var last_id = inst_44739;
var first_id = inst_44740;
var new_elem = inst_44743;
var id = inst_44744;
return ((function (l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44767,inst_44768,inst_44769,state_val_44791,c__37223__auto__){
return (function (_){
return id;
});
;})(l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44767,inst_44768,inst_44769,state_val_44791,c__37223__auto__))
})();
var inst_44771 = konserve.protocols._update_in.call(null,store,inst_44769,inst_44770);
var state_44790__$1 = state_44790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(17),inst_44771);
} else {
if((state_val_44791 === (16))){
var inst_44721 = (state_44790[(8)]);
var inst_44743 = (state_44790[(12)]);
var inst_44744 = (state_44790[(13)]);
var inst_44737 = (state_44790[(11)]);
var inst_44740 = (state_44790[(9)]);
var inst_44738 = (state_44790[(7)]);
var inst_44739 = (state_44790[(14)]);
var inst_44776 = (state_44790[(2)]);
var inst_44777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44778 = [key];
var inst_44779 = (new cljs.core.PersistentVector(null,1,(5),inst_44777,inst_44778,null));
var inst_44780 = (function (){var l__43436__auto__ = inst_44721;
var head = inst_44737;
var vec__44729 = inst_44737;
var append_log_QMARK_ = inst_44738;
var last_id = inst_44739;
var first_id = inst_44740;
var new_elem = inst_44743;
var id = inst_44744;
return ((function (l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44776,inst_44777,inst_44778,inst_44779,state_val_44791,c__37223__auto__){
return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"append-log","append-log",-1873397085),id,(function (){var or__10219__auto__ = first_id;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return id;
}
})()], null);
});
;})(l__43436__auto__,head,vec__44729,append_log_QMARK_,last_id,first_id,new_elem,id,inst_44721,inst_44743,inst_44744,inst_44737,inst_44740,inst_44738,inst_44739,inst_44776,inst_44777,inst_44778,inst_44779,state_val_44791,c__37223__auto__))
})();
var inst_44781 = konserve.protocols._update_in.call(null,store,inst_44779,inst_44780);
var state_44790__$1 = (function (){var statearr_44809 = state_44790;
(statearr_44809[(19)] = inst_44776);

return statearr_44809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(18),inst_44781);
} else {
if((state_val_44791 === (10))){
var inst_44751 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_44752 = [key];
var inst_44753 = cljs.core.PersistentHashMap.fromArrays(inst_44751,inst_44752);
var inst_44754 = cljs.core.ex_info.call(null,"This is not an append-log.",inst_44753);
var inst_44755 = (function(){throw inst_44754})();
var state_44790__$1 = state_44790;
var statearr_44810_44832 = state_44790__$1;
(statearr_44810_44832[(2)] = inst_44755);

(statearr_44810_44832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (18))){
var inst_44744 = (state_44790[(13)]);
var inst_44740 = (state_44790[(9)]);
var inst_44783 = (state_44790[(2)]);
var inst_44784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44785 = [inst_44740,inst_44744];
var inst_44786 = (new cljs.core.PersistentVector(null,2,(5),inst_44784,inst_44785,null));
var state_44790__$1 = (function (){var statearr_44811 = state_44790;
(statearr_44811[(20)] = inst_44783);

return statearr_44811;
})();
var statearr_44812_44833 = state_44790__$1;
(statearr_44812_44833[(2)] = inst_44786);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44790__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (8))){
var inst_44737 = (state_44790[(11)]);
var state_44790__$1 = state_44790;
var statearr_44813_44834 = state_44790__$1;
(statearr_44813_44834[(2)] = inst_44737);

(statearr_44813_44834[(1)] = (9));


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
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$append_$_state_machine__37110__auto__ = null;
var konserve$core$append_$_state_machine__37110__auto____0 = (function (){
var statearr_44817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44817[(0)] = konserve$core$append_$_state_machine__37110__auto__);

(statearr_44817[(1)] = (1));

return statearr_44817;
});
var konserve$core$append_$_state_machine__37110__auto____1 = (function (state_44790){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_44790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e44818){if((e44818 instanceof Object)){
var ex__37113__auto__ = e44818;
var statearr_44819_44835 = state_44790;
(statearr_44819_44835[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44836 = state_44790;
state_44790 = G__44836;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$append_$_state_machine__37110__auto__ = function(state_44790){
switch(arguments.length){
case 0:
return konserve$core$append_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$append_$_state_machine__37110__auto____1.call(this,state_44790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$append_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$append_$_state_machine__37110__auto____0;
konserve$core$append_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$append_$_state_machine__37110__auto____1;
return konserve$core$append_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_44820 = f__37224__auto__.call(null);
(statearr_44820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_44820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Loads the whole append log stored at 
 */
konserve.core.log = (function konserve$core$log(store,key){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_45106){
var state_val_45107 = (state_45106[(1)]);
if((state_val_45107 === (7))){
var state_45106__$1 = state_45106;
var statearr_45108_45163 = state_45106__$1;
(statearr_45108_45163[(2)] = null);

(statearr_45108_45163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (20))){
var inst_45035 = (state_45106[(7)]);
var state_45106__$1 = state_45106;
var statearr_45109_45164 = state_45106__$1;
(statearr_45109_45164[(2)] = inst_45035);

(statearr_45109_45164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (27))){
var state_45106__$1 = state_45106;
var statearr_45110_45165 = state_45106__$1;
(statearr_45110_45165[(2)] = true);

(statearr_45110_45165[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (1))){
var inst_45003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45004 = [key];
var inst_45005 = (new cljs.core.PersistentVector(null,1,(5),inst_45003,inst_45004,null));
var inst_45006 = konserve.core.get_in.call(null,store,inst_45005);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(2),inst_45006);
} else {
if((state_val_45107 === (24))){
var inst_45060 = (state_45106[(8)]);
var inst_45068 = inst_45060.cljs$lang$protocol_mask$partition0$;
var inst_45069 = (inst_45068 & (64));
var inst_45070 = inst_45060.cljs$core$ISeq$;
var inst_45071 = (cljs.core.PROTOCOL_SENTINEL === inst_45070);
var inst_45072 = (inst_45069) || (inst_45071);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45072)){
var statearr_45111_45166 = state_45106__$1;
(statearr_45111_45166[(1)] = (27));

} else {
var statearr_45112_45167 = state_45106__$1;
(statearr_45112_45167[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (4))){
var inst_45008 = (state_45106[(9)]);
var state_45106__$1 = state_45106;
var statearr_45113_45168 = state_45106__$1;
(statearr_45113_45168[(2)] = inst_45008);

(statearr_45113_45168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (15))){
var inst_45051 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45051)){
var statearr_45114_45169 = state_45106__$1;
(statearr_45114_45169[(1)] = (19));

} else {
var statearr_45115_45170 = state_45106__$1;
(statearr_45115_45170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (21))){
var inst_45035 = (state_45106[(7)]);
var inst_45056 = (state_45106[(2)]);
var inst_45057 = cljs.core.get.call(null,inst_45056,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_45058 = cljs.core.get.call(null,inst_45056,new cljs.core.Keyword(null,"elem","elem",618631056));
var inst_45059 = cljs.core.PersistentVector.EMPTY;
var inst_45060 = inst_45035;
var inst_45061 = inst_45059;
var state_45106__$1 = (function (){var statearr_45116 = state_45106;
(statearr_45116[(10)] = inst_45061);

(statearr_45116[(8)] = inst_45060);

(statearr_45116[(11)] = inst_45057);

(statearr_45116[(12)] = inst_45058);

return statearr_45116;
})();
var statearr_45117_45171 = state_45106__$1;
(statearr_45117_45171[(2)] = null);

(statearr_45117_45171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (31))){
var inst_45060 = (state_45106[(8)]);
var state_45106__$1 = state_45106;
var statearr_45118_45172 = state_45106__$1;
(statearr_45118_45172[(2)] = inst_45060);

(statearr_45118_45172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (32))){
var inst_45085 = (state_45106[(13)]);
var inst_45084 = (state_45106[(2)]);
var inst_45085__$1 = cljs.core.get.call(null,inst_45084,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_45086 = cljs.core.get.call(null,inst_45084,new cljs.core.Keyword(null,"elem","elem",618631056));
var state_45106__$1 = (function (){var statearr_45119 = state_45106;
(statearr_45119[(14)] = inst_45086);

(statearr_45119[(13)] = inst_45085__$1);

return statearr_45119;
})();
if(cljs.core.truth_(inst_45085__$1)){
var statearr_45120_45173 = state_45106__$1;
(statearr_45120_45173[(1)] = (33));

} else {
var statearr_45121_45174 = state_45106__$1;
(statearr_45121_45174[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (33))){
var inst_45085 = (state_45106[(13)]);
var inst_45088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45089 = [inst_45085];
var inst_45090 = (new cljs.core.PersistentVector(null,1,(5),inst_45088,inst_45089,null));
var inst_45091 = konserve.core.get_in.call(null,store,inst_45090);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(36),inst_45091);
} else {
if((state_val_45107 === (13))){
var inst_45035 = (state_45106[(7)]);
var inst_45040 = inst_45035.cljs$lang$protocol_mask$partition0$;
var inst_45041 = (inst_45040 & (64));
var inst_45042 = inst_45035.cljs$core$ISeq$;
var inst_45043 = (cljs.core.PROTOCOL_SENTINEL === inst_45042);
var inst_45044 = (inst_45041) || (inst_45043);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45044)){
var statearr_45122_45175 = state_45106__$1;
(statearr_45122_45175[(1)] = (16));

} else {
var statearr_45123_45176 = state_45106__$1;
(statearr_45123_45176[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (22))){
var inst_45060 = (state_45106[(8)]);
var inst_45065 = (inst_45060 == null);
var inst_45066 = cljs.core.not.call(null,inst_45065);
var state_45106__$1 = state_45106;
if(inst_45066){
var statearr_45124_45177 = state_45106__$1;
(statearr_45124_45177[(1)] = (24));

} else {
var statearr_45125_45178 = state_45106__$1;
(statearr_45125_45178[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (36))){
var inst_45061 = (state_45106[(10)]);
var inst_45086 = (state_45106[(14)]);
var inst_45093 = (state_45106[(2)]);
var inst_45094 = cljs.core.conj.call(null,inst_45061,inst_45086);
var inst_45060 = inst_45093;
var inst_45061__$1 = inst_45094;
var state_45106__$1 = (function (){var statearr_45126 = state_45106;
(statearr_45126[(10)] = inst_45061__$1);

(statearr_45126[(8)] = inst_45060);

return statearr_45126;
})();
var statearr_45127_45179 = state_45106__$1;
(statearr_45127_45179[(2)] = null);

(statearr_45127_45179[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (29))){
var inst_45076 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45128_45180 = state_45106__$1;
(statearr_45128_45180[(2)] = inst_45076);

(statearr_45128_45180[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (6))){
var inst_45018 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45019 = [key];
var inst_45020 = cljs.core.PersistentHashMap.fromArrays(inst_45018,inst_45019);
var inst_45021 = cljs.core.ex_info.call(null,"This is not an append-log.",inst_45020);
var inst_45022 = (function(){throw inst_45021})();
var state_45106__$1 = state_45106;
var statearr_45129_45181 = state_45106__$1;
(statearr_45129_45181[(2)] = inst_45022);

(statearr_45129_45181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (28))){
var state_45106__$1 = state_45106;
var statearr_45130_45182 = state_45106__$1;
(statearr_45130_45182[(2)] = false);

(statearr_45130_45182[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (25))){
var state_45106__$1 = state_45106;
var statearr_45131_45183 = state_45106__$1;
(statearr_45131_45183[(2)] = false);

(statearr_45131_45183[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (34))){
var inst_45061 = (state_45106[(10)]);
var inst_45086 = (state_45106[(14)]);
var inst_45097 = cljs.core.conj.call(null,inst_45061,inst_45086);
var state_45106__$1 = state_45106;
var statearr_45132_45184 = state_45106__$1;
(statearr_45132_45184[(2)] = inst_45097);

(statearr_45132_45184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (17))){
var state_45106__$1 = state_45106;
var statearr_45133_45185 = state_45106__$1;
(statearr_45133_45185[(2)] = false);

(statearr_45133_45185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (3))){
var inst_45009 = (state_45106[(15)]);
var inst_45013 = cljs.core.not_EQ_.call(null,inst_45009,new cljs.core.Keyword(null,"append-log","append-log",-1873397085));
var state_45106__$1 = state_45106;
var statearr_45134_45186 = state_45106__$1;
(statearr_45134_45186[(2)] = inst_45013);

(statearr_45134_45186[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (12))){
var inst_45035 = (state_45106[(7)]);
var inst_45035__$1 = (state_45106[(2)]);
var inst_45037 = (inst_45035__$1 == null);
var inst_45038 = cljs.core.not.call(null,inst_45037);
var state_45106__$1 = (function (){var statearr_45135 = state_45106;
(statearr_45135[(7)] = inst_45035__$1);

return statearr_45135;
})();
if(inst_45038){
var statearr_45136_45187 = state_45106__$1;
(statearr_45136_45187[(1)] = (13));

} else {
var statearr_45137_45188 = state_45106__$1;
(statearr_45137_45188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (2))){
var inst_45008 = (state_45106[(9)]);
var inst_45008__$1 = (state_45106[(2)]);
var inst_45009 = cljs.core.nth.call(null,inst_45008__$1,(0),null);
var inst_45010 = cljs.core.nth.call(null,inst_45008__$1,(1),null);
var inst_45011 = cljs.core.nth.call(null,inst_45008__$1,(2),null);
var state_45106__$1 = (function (){var statearr_45138 = state_45106;
(statearr_45138[(16)] = inst_45011);

(statearr_45138[(15)] = inst_45009);

(statearr_45138[(17)] = inst_45010);

(statearr_45138[(9)] = inst_45008__$1);

return statearr_45138;
})();
if(cljs.core.truth_(inst_45008__$1)){
var statearr_45139_45189 = state_45106__$1;
(statearr_45139_45189[(1)] = (3));

} else {
var statearr_45140_45190 = state_45106__$1;
(statearr_45140_45190[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (23))){
var inst_45101 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45141_45191 = state_45106__$1;
(statearr_45141_45191[(2)] = inst_45101);

(statearr_45141_45191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (35))){
var inst_45099 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45142_45192 = state_45106__$1;
(statearr_45142_45192[(2)] = inst_45099);

(statearr_45142_45192[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (19))){
var inst_45035 = (state_45106[(7)]);
var inst_45053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45035);
var state_45106__$1 = state_45106;
var statearr_45143_45193 = state_45106__$1;
(statearr_45143_45193[(2)] = inst_45053);

(statearr_45143_45193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (11))){
var inst_45104 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45106__$1,inst_45104);
} else {
if((state_val_45107 === (9))){
var inst_45011 = (state_45106[(16)]);
var inst_45030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45031 = [inst_45011];
var inst_45032 = (new cljs.core.PersistentVector(null,1,(5),inst_45030,inst_45031,null));
var inst_45033 = konserve.core.get_in.call(null,store,inst_45032);
var state_45106__$1 = state_45106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45106__$1,(12),inst_45033);
} else {
if((state_val_45107 === (5))){
var inst_45016 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45016)){
var statearr_45144_45194 = state_45106__$1;
(statearr_45144_45194[(1)] = (6));

} else {
var statearr_45145_45195 = state_45106__$1;
(statearr_45145_45195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (14))){
var state_45106__$1 = state_45106;
var statearr_45146_45196 = state_45106__$1;
(statearr_45146_45196[(2)] = false);

(statearr_45146_45196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (26))){
var inst_45079 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
if(cljs.core.truth_(inst_45079)){
var statearr_45147_45197 = state_45106__$1;
(statearr_45147_45197[(1)] = (30));

} else {
var statearr_45148_45198 = state_45106__$1;
(statearr_45148_45198[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (16))){
var state_45106__$1 = state_45106;
var statearr_45149_45199 = state_45106__$1;
(statearr_45149_45199[(2)] = true);

(statearr_45149_45199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (30))){
var inst_45060 = (state_45106[(8)]);
var inst_45081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45060);
var state_45106__$1 = state_45106;
var statearr_45150_45200 = state_45106__$1;
(statearr_45150_45200[(2)] = inst_45081);

(statearr_45150_45200[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (10))){
var state_45106__$1 = state_45106;
var statearr_45151_45201 = state_45106__$1;
(statearr_45151_45201[(2)] = null);

(statearr_45151_45201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (18))){
var inst_45048 = (state_45106[(2)]);
var state_45106__$1 = state_45106;
var statearr_45152_45202 = state_45106__$1;
(statearr_45152_45202[(2)] = inst_45048);

(statearr_45152_45202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45107 === (8))){
var inst_45011 = (state_45106[(16)]);
var inst_45025 = (state_45106[(2)]);
var state_45106__$1 = (function (){var statearr_45153 = state_45106;
(statearr_45153[(18)] = inst_45025);

return statearr_45153;
})();
if(cljs.core.truth_(inst_45011)){
var statearr_45154_45203 = state_45106__$1;
(statearr_45154_45203[(1)] = (9));

} else {
var statearr_45155_45204 = state_45106__$1;
(statearr_45155_45204[(1)] = (10));

}

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
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$log_$_state_machine__37110__auto__ = null;
var konserve$core$log_$_state_machine__37110__auto____0 = (function (){
var statearr_45159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45159[(0)] = konserve$core$log_$_state_machine__37110__auto__);

(statearr_45159[(1)] = (1));

return statearr_45159;
});
var konserve$core$log_$_state_machine__37110__auto____1 = (function (state_45106){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45160){if((e45160 instanceof Object)){
var ex__37113__auto__ = e45160;
var statearr_45161_45205 = state_45106;
(statearr_45161_45205[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45206 = state_45106;
state_45106 = G__45206;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$log_$_state_machine__37110__auto__ = function(state_45106){
switch(arguments.length){
case 0:
return konserve$core$log_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$log_$_state_machine__37110__auto____1.call(this,state_45106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$log_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$log_$_state_machine__37110__auto____0;
konserve$core$log_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$log_$_state_machine__37110__auto____1;
return konserve$core$log_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_45162 = f__37224__auto__.call(null);
(statearr_45162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Loads the whole append log stored at 
 */
konserve.core.reduce_log = (function konserve$core$reduce_log(store,key,reduce_fn,acc){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_45412){
var state_val_45413 = (state_45412[(1)]);
if((state_val_45413 === (7))){
var state_45412__$1 = state_45412;
var statearr_45414_45461 = state_45412__$1;
(statearr_45414_45461[(2)] = null);

(statearr_45414_45461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (20))){
var inst_45383 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45415_45462 = state_45412__$1;
(statearr_45415_45462[(2)] = inst_45383);

(statearr_45415_45462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (27))){
var inst_45393 = (state_45412[(7)]);
var inst_45392 = (state_45412[(8)]);
var inst_45362 = (state_45412[(9)]);
var inst_45400 = reduce_fn.call(null,inst_45362,inst_45393);
var inst_45361 = inst_45392;
var inst_45362__$1 = inst_45400;
var state_45412__$1 = (function (){var statearr_45416 = state_45412;
(statearr_45416[(10)] = inst_45361);

(statearr_45416[(9)] = inst_45362__$1);

return statearr_45416;
})();
var statearr_45417_45463 = state_45412__$1;
(statearr_45417_45463[(2)] = null);

(statearr_45417_45463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (1))){
var inst_45337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45338 = [key];
var inst_45339 = (new cljs.core.PersistentVector(null,1,(5),inst_45337,inst_45338,null));
var inst_45340 = konserve.core.get_in.call(null,store,inst_45339);
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45412__$1,(2),inst_45340);
} else {
if((state_val_45413 === (24))){
var inst_45361 = (state_45412[(10)]);
var inst_45344 = (state_45412[(11)]);
var inst_45395 = cljs.core.not_EQ_.call(null,inst_45361,inst_45344);
var state_45412__$1 = state_45412;
var statearr_45418_45464 = state_45412__$1;
(statearr_45418_45464[(2)] = inst_45395);

(statearr_45418_45464[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (4))){
var inst_45342 = (state_45412[(12)]);
var state_45412__$1 = state_45412;
var statearr_45419_45465 = state_45412__$1;
(statearr_45419_45465[(2)] = inst_45342);

(statearr_45419_45465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (15))){
var inst_45370 = (state_45412[(13)]);
var inst_45375 = inst_45370.cljs$lang$protocol_mask$partition0$;
var inst_45376 = (inst_45375 & (64));
var inst_45377 = inst_45370.cljs$core$ISeq$;
var inst_45378 = (cljs.core.PROTOCOL_SENTINEL === inst_45377);
var inst_45379 = (inst_45376) || (inst_45378);
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45379)){
var statearr_45420_45466 = state_45412__$1;
(statearr_45420_45466[(1)] = (18));

} else {
var statearr_45421_45467 = state_45412__$1;
(statearr_45421_45467[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (21))){
var inst_45370 = (state_45412[(13)]);
var inst_45388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45370);
var state_45412__$1 = state_45412;
var statearr_45422_45468 = state_45412__$1;
(statearr_45422_45468[(2)] = inst_45388);

(statearr_45422_45468[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (13))){
var inst_45407 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45423_45469 = state_45412__$1;
(statearr_45423_45469[(2)] = inst_45407);

(statearr_45423_45469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (22))){
var inst_45370 = (state_45412[(13)]);
var state_45412__$1 = state_45412;
var statearr_45424_45470 = state_45412__$1;
(statearr_45424_45470[(2)] = inst_45370);

(statearr_45424_45470[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (29))){
var inst_45405 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45425_45471 = state_45412__$1;
(statearr_45425_45471[(2)] = inst_45405);

(statearr_45425_45471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (6))){
var inst_45352 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45353 = [key];
var inst_45354 = cljs.core.PersistentHashMap.fromArrays(inst_45352,inst_45353);
var inst_45355 = cljs.core.ex_info.call(null,"This is not an append-log.",inst_45354);
var inst_45356 = (function(){throw inst_45355})();
var state_45412__$1 = state_45412;
var statearr_45426_45472 = state_45412__$1;
(statearr_45426_45472[(2)] = inst_45356);

(statearr_45426_45472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (28))){
var inst_45393 = (state_45412[(7)]);
var inst_45362 = (state_45412[(9)]);
var inst_45403 = reduce_fn.call(null,inst_45362,inst_45393);
var state_45412__$1 = state_45412;
var statearr_45427_45473 = state_45412__$1;
(statearr_45427_45473[(2)] = inst_45403);

(statearr_45427_45473[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (25))){
var inst_45392 = (state_45412[(8)]);
var state_45412__$1 = state_45412;
var statearr_45428_45474 = state_45412__$1;
(statearr_45428_45474[(2)] = inst_45392);

(statearr_45428_45474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (17))){
var inst_45386 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45386)){
var statearr_45429_45475 = state_45412__$1;
(statearr_45429_45475[(1)] = (21));

} else {
var statearr_45430_45476 = state_45412__$1;
(statearr_45430_45476[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (3))){
var inst_45343 = (state_45412[(14)]);
var inst_45347 = cljs.core.not_EQ_.call(null,inst_45343,new cljs.core.Keyword(null,"append-log","append-log",-1873397085));
var state_45412__$1 = state_45412;
var statearr_45431_45477 = state_45412__$1;
(statearr_45431_45477[(2)] = inst_45347);

(statearr_45431_45477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (12))){
var inst_45361 = (state_45412[(10)]);
var inst_45365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45366 = [inst_45361];
var inst_45367 = (new cljs.core.PersistentVector(null,1,(5),inst_45365,inst_45366,null));
var inst_45368 = konserve.core.get_in.call(null,store,inst_45367);
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45412__$1,(14),inst_45368);
} else {
if((state_val_45413 === (2))){
var inst_45342 = (state_45412[(12)]);
var inst_45342__$1 = (state_45412[(2)]);
var inst_45343 = cljs.core.nth.call(null,inst_45342__$1,(0),null);
var inst_45344 = cljs.core.nth.call(null,inst_45342__$1,(1),null);
var inst_45345 = cljs.core.nth.call(null,inst_45342__$1,(2),null);
var state_45412__$1 = (function (){var statearr_45432 = state_45412;
(statearr_45432[(12)] = inst_45342__$1);

(statearr_45432[(15)] = inst_45345);

(statearr_45432[(11)] = inst_45344);

(statearr_45432[(14)] = inst_45343);

return statearr_45432;
})();
if(cljs.core.truth_(inst_45342__$1)){
var statearr_45433_45478 = state_45412__$1;
(statearr_45433_45478[(1)] = (3));

} else {
var statearr_45434_45479 = state_45412__$1;
(statearr_45434_45479[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (23))){
var inst_45392 = (state_45412[(8)]);
var inst_45391 = (state_45412[(2)]);
var inst_45392__$1 = cljs.core.get.call(null,inst_45391,new cljs.core.Keyword(null,"next","next",-117701485));
var inst_45393 = cljs.core.get.call(null,inst_45391,new cljs.core.Keyword(null,"elem","elem",618631056));
var state_45412__$1 = (function (){var statearr_45435 = state_45412;
(statearr_45435[(7)] = inst_45393);

(statearr_45435[(8)] = inst_45392__$1);

return statearr_45435;
})();
if(cljs.core.truth_(inst_45392__$1)){
var statearr_45436_45480 = state_45412__$1;
(statearr_45436_45480[(1)] = (24));

} else {
var statearr_45437_45481 = state_45412__$1;
(statearr_45437_45481[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (19))){
var state_45412__$1 = state_45412;
var statearr_45438_45482 = state_45412__$1;
(statearr_45438_45482[(2)] = false);

(statearr_45438_45482[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (11))){
var inst_45410 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45412__$1,inst_45410);
} else {
if((state_val_45413 === (9))){
var inst_45345 = (state_45412[(15)]);
var inst_45361 = inst_45345;
var inst_45362 = acc;
var state_45412__$1 = (function (){var statearr_45439 = state_45412;
(statearr_45439[(10)] = inst_45361);

(statearr_45439[(9)] = inst_45362);

return statearr_45439;
})();
var statearr_45440_45483 = state_45412__$1;
(statearr_45440_45483[(2)] = null);

(statearr_45440_45483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (5))){
var inst_45350 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45350)){
var statearr_45441_45484 = state_45412__$1;
(statearr_45441_45484[(1)] = (6));

} else {
var statearr_45442_45485 = state_45412__$1;
(statearr_45442_45485[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (14))){
var inst_45370 = (state_45412[(13)]);
var inst_45370__$1 = (state_45412[(2)]);
var inst_45372 = (inst_45370__$1 == null);
var inst_45373 = cljs.core.not.call(null,inst_45372);
var state_45412__$1 = (function (){var statearr_45443 = state_45412;
(statearr_45443[(13)] = inst_45370__$1);

return statearr_45443;
})();
if(inst_45373){
var statearr_45444_45486 = state_45412__$1;
(statearr_45444_45486[(1)] = (15));

} else {
var statearr_45445_45487 = state_45412__$1;
(statearr_45445_45487[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (26))){
var inst_45398 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45398)){
var statearr_45446_45488 = state_45412__$1;
(statearr_45446_45488[(1)] = (27));

} else {
var statearr_45447_45489 = state_45412__$1;
(statearr_45447_45489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (16))){
var state_45412__$1 = state_45412;
var statearr_45448_45490 = state_45412__$1;
(statearr_45448_45490[(2)] = false);

(statearr_45448_45490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (10))){
var state_45412__$1 = state_45412;
var statearr_45449_45491 = state_45412__$1;
(statearr_45449_45491[(2)] = acc);

(statearr_45449_45491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (18))){
var state_45412__$1 = state_45412;
var statearr_45450_45492 = state_45412__$1;
(statearr_45450_45492[(2)] = true);

(statearr_45450_45492[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (8))){
var inst_45345 = (state_45412[(15)]);
var inst_45359 = (state_45412[(2)]);
var state_45412__$1 = (function (){var statearr_45451 = state_45412;
(statearr_45451[(16)] = inst_45359);

return statearr_45451;
})();
if(cljs.core.truth_(inst_45345)){
var statearr_45452_45493 = state_45412__$1;
(statearr_45452_45493[(1)] = (9));

} else {
var statearr_45453_45494 = state_45412__$1;
(statearr_45453_45494[(1)] = (10));

}

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
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$reduce_log_$_state_machine__37110__auto__ = null;
var konserve$core$reduce_log_$_state_machine__37110__auto____0 = (function (){
var statearr_45457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45457[(0)] = konserve$core$reduce_log_$_state_machine__37110__auto__);

(statearr_45457[(1)] = (1));

return statearr_45457;
});
var konserve$core$reduce_log_$_state_machine__37110__auto____1 = (function (state_45412){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45458){if((e45458 instanceof Object)){
var ex__37113__auto__ = e45458;
var statearr_45459_45495 = state_45412;
(statearr_45459_45495[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45496 = state_45412;
state_45412 = G__45496;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$reduce_log_$_state_machine__37110__auto__ = function(state_45412){
switch(arguments.length){
case 0:
return konserve$core$reduce_log_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$reduce_log_$_state_machine__37110__auto____1.call(this,state_45412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$reduce_log_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$reduce_log_$_state_machine__37110__auto____0;
konserve$core$reduce_log_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$reduce_log_$_state_machine__37110__auto____1;
return konserve$core$reduce_log_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_45460 = f__37224__auto__.call(null);
(statearr_45460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Calls locked-cb with a platform specific binary representation inside
 *   the lock, e.g. wrapped InputStream on the JVM and Blob in
 *   JavaScript. You need to properly close/dispose the object when you
 *   are done!
 */
konserve.core.bget = (function konserve$core$bget(store,key,locked_cb){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_45539){
var state_val_45540 = (state_45539[(1)]);
if((state_val_45540 === (1))){
var inst_45525 = konserve.core.get_lock.call(null,store,key);
var state_45539__$1 = (function (){var statearr_45541 = state_45539;
(statearr_45541[(7)] = inst_45525);

return statearr_45541;
})();
var statearr_45542_45553 = state_45539__$1;
(statearr_45542_45553[(2)] = null);

(statearr_45542_45553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45540 === (2))){
var inst_45537 = (state_45539[(2)]);
var state_45539__$1 = state_45539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45539__$1,inst_45537);
} else {
if((state_val_45540 === (3))){
var inst_45525 = (state_45539[(7)]);
var inst_45526 = (state_45539[(2)]);
var inst_45527 = cljs.core.async.put_BANG_.call(null,inst_45525,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_45539__$1 = (function (){var statearr_45543 = state_45539;
(statearr_45543[(8)] = inst_45527);

(statearr_45543[(9)] = inst_45526);

return statearr_45543;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45539__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45540 === (4))){
var inst_45525 = (state_45539[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45539,null,null,(3),(2));
var state_45539__$1 = state_45539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45539__$1,(5),inst_45525);
} else {
if((state_val_45540 === (5))){
var inst_45532 = (state_45539[(2)]);
var inst_45533 = konserve.protocols._bget.call(null,store,key,locked_cb);
var state_45539__$1 = (function (){var statearr_45544 = state_45539;
(statearr_45544[(10)] = inst_45532);

return statearr_45544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45539__$1,(6),inst_45533);
} else {
if((state_val_45540 === (6))){
var inst_45535 = (state_45539[(2)]);
var state_45539__$1 = state_45539;
var statearr_45545_45554 = state_45539__$1;
(statearr_45545_45554[(2)] = inst_45535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45539__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$bget_$_state_machine__37110__auto__ = null;
var konserve$core$bget_$_state_machine__37110__auto____0 = (function (){
var statearr_45549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45549[(0)] = konserve$core$bget_$_state_machine__37110__auto__);

(statearr_45549[(1)] = (1));

return statearr_45549;
});
var konserve$core$bget_$_state_machine__37110__auto____1 = (function (state_45539){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45550){if((e45550 instanceof Object)){
var ex__37113__auto__ = e45550;
var statearr_45551_45555 = state_45539;
(statearr_45551_45555[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45556 = state_45539;
state_45539 = G__45556;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$bget_$_state_machine__37110__auto__ = function(state_45539){
switch(arguments.length){
case 0:
return konserve$core$bget_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$bget_$_state_machine__37110__auto____1.call(this,state_45539);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$bget_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$bget_$_state_machine__37110__auto____0;
konserve$core$bget_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$bget_$_state_machine__37110__auto____1;
return konserve$core$bget_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_45552 = f__37224__auto__.call(null);
(statearr_45552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});
/**
 * Copies given value (InputStream, Reader, File, byte[] or String on
 *   JVM, Blob in JavaScript) under key in the store.
 */
konserve.core.bassoc = (function konserve$core$bassoc(store,key,val){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_45599){
var state_val_45600 = (state_45599[(1)]);
if((state_val_45600 === (1))){
var inst_45585 = konserve.core.get_lock.call(null,store,key);
var state_45599__$1 = (function (){var statearr_45601 = state_45599;
(statearr_45601[(7)] = inst_45585);

return statearr_45601;
})();
var statearr_45602_45613 = state_45599__$1;
(statearr_45602_45613[(2)] = null);

(statearr_45602_45613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (2))){
var inst_45597 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45599__$1,inst_45597);
} else {
if((state_val_45600 === (3))){
var inst_45585 = (state_45599[(7)]);
var inst_45586 = (state_45599[(2)]);
var inst_45587 = cljs.core.async.put_BANG_.call(null,inst_45585,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var state_45599__$1 = (function (){var statearr_45603 = state_45599;
(statearr_45603[(8)] = inst_45586);

(statearr_45603[(9)] = inst_45587);

return statearr_45603;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (4))){
var inst_45585 = (state_45599[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45599,null,null,(3),(2));
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45599__$1,(5),inst_45585);
} else {
if((state_val_45600 === (5))){
var inst_45592 = (state_45599[(2)]);
var inst_45593 = konserve.protocols._bassoc.call(null,store,key,val);
var state_45599__$1 = (function (){var statearr_45604 = state_45599;
(statearr_45604[(10)] = inst_45592);

return statearr_45604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45599__$1,(6),inst_45593);
} else {
if((state_val_45600 === (6))){
var inst_45595 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
var statearr_45605_45614 = state_45599__$1;
(statearr_45605_45614[(2)] = inst_45595);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$core$bassoc_$_state_machine__37110__auto__ = null;
var konserve$core$bassoc_$_state_machine__37110__auto____0 = (function (){
var statearr_45609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45609[(0)] = konserve$core$bassoc_$_state_machine__37110__auto__);

(statearr_45609[(1)] = (1));

return statearr_45609;
});
var konserve$core$bassoc_$_state_machine__37110__auto____1 = (function (state_45599){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45610){if((e45610 instanceof Object)){
var ex__37113__auto__ = e45610;
var statearr_45611_45615 = state_45599;
(statearr_45611_45615[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45616 = state_45599;
state_45599 = G__45616;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$core$bassoc_$_state_machine__37110__auto__ = function(state_45599){
switch(arguments.length){
case 0:
return konserve$core$bassoc_$_state_machine__37110__auto____0.call(this);
case 1:
return konserve$core$bassoc_$_state_machine__37110__auto____1.call(this,state_45599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$core$bassoc_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$core$bassoc_$_state_machine__37110__auto____0;
konserve$core$bassoc_$_state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$core$bassoc_$_state_machine__37110__auto____1;
return konserve$core$bassoc_$_state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_45612 = f__37224__auto__.call(null);
(statearr_45612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});

//# sourceMappingURL=core.js.map