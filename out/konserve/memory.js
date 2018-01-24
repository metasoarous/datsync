// Compiled by ClojureScript 1.9.542 {}
goog.provide('konserve.memory');
goog.require('cljs.core');
goog.require('konserve.protocols');

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
 * @implements {konserve.protocols.PEDNAsyncKeyValueStore}
 * @implements {konserve.protocols.PBinaryAsyncKeyValueStore}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
konserve.memory.MemoryStore = (function (state,read_handlers,write_handlers,locks,__meta,__extmap,__hash){
this.state = state;
this.read_handlers = read_handlers;
this.write_handlers = write_handlers;
this.locks = locks;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
konserve.memory.MemoryStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

konserve.memory.MemoryStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k45624,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__45626 = k45624;
var G__45626__$1 = (((G__45626 instanceof cljs.core.Keyword))?G__45626.fqn:null);
switch (G__45626__$1) {
case "state":
return self__.state;

break;
case "read-handlers":
return self__.read_handlers;

break;
case "write-handlers":
return self__.write_handlers;

break;
case "locks":
return self__.locks;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45624,else__10897__auto__);

}
});

konserve.memory.MemoryStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#konserve.memory.MemoryStore{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),self__.read_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),self__.write_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"locks","locks",1560476518),self__.locks],null))], null),self__.__extmap));
});

konserve.memory.MemoryStore.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

konserve.memory.MemoryStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45623){
var self__ = this;
var G__45623__$1 = this;
return (new cljs.core.RecordIter((0),G__45623__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),new cljs.core.Keyword(null,"locks","locks",1560476518)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

konserve.memory.MemoryStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

konserve.memory.MemoryStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,self__.write_handlers,self__.locks,self__.__meta,self__.__extmap,self__.__hash));
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$ = cljs.core.PROTOCOL_SENTINEL;

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$_exists_QMARK_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45634){
var state_val_45635 = (state_45634[(1)]);
if((state_val_45635 === (1))){
var inst_45627 = cljs.core.deref.call(null,self__.state);
var inst_45628 = inst_45627.call(null,key);
var state_45634__$1 = state_45634;
if(cljs.core.truth_(inst_45628)){
var statearr_45636_45720 = state_45634__$1;
(statearr_45636_45720[(1)] = (2));

} else {
var statearr_45637_45721 = state_45634__$1;
(statearr_45637_45721[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (2))){
var state_45634__$1 = state_45634;
var statearr_45638_45722 = state_45634__$1;
(statearr_45638_45722[(2)] = true);

(statearr_45638_45722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (3))){
var state_45634__$1 = state_45634;
var statearr_45639_45723 = state_45634__$1;
(statearr_45639_45723[(2)] = false);

(statearr_45639_45723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45635 === (4))){
var inst_45632 = (state_45634[(2)]);
var state_45634__$1 = state_45634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45634__$1,inst_45632);
} else {
return null;
}
}
}
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45643 = [null,null,null,null,null,null,null];
(statearr_45643[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45643[(1)] = (1));

return statearr_45643;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45634){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45644){if((e45644 instanceof Object)){
var ex__37113__auto__ = e45644;
var statearr_45645_45724 = state_45634;
(statearr_45645_45724[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45725 = state_45634;
state_45634 = G__45725;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45634){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45646 = f__37224__auto__.call(null);
(statearr_45646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$_get_in$arity$2 = (function (this$,key_vec){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45650){
var state_val_45651 = (state_45650[(1)]);
if((state_val_45651 === (1))){
var inst_45647 = cljs.core.deref.call(null,self__.state);
var inst_45648 = cljs.core.get_in.call(null,inst_45647,key_vec);
var state_45650__$1 = state_45650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45650__$1,inst_45648);
} else {
return null;
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45655 = [null,null,null,null,null,null,null];
(statearr_45655[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45655[(1)] = (1));

return statearr_45655;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45650){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45656){if((e45656 instanceof Object)){
var ex__37113__auto__ = e45656;
var statearr_45657_45726 = state_45650;
(statearr_45657_45726[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45727 = state_45650;
state_45650 = G__45727;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45650){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45658 = f__37224__auto__.call(null);
(statearr_45658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$_update_in$arity$3 = (function (this$,key_vec,up_fn){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45667){
var state_val_45668 = (state_45667[(1)]);
if((state_val_45668 === (1))){
var inst_45659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45660 = cljs.core.deref.call(null,self__.state);
var inst_45661 = cljs.core.get_in.call(null,inst_45660,key_vec);
var inst_45662 = cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,key_vec,up_fn);
var inst_45663 = cljs.core.get_in.call(null,inst_45662,key_vec);
var inst_45664 = [inst_45661,inst_45663];
var inst_45665 = (new cljs.core.PersistentVector(null,2,(5),inst_45659,inst_45664,null));
var state_45667__$1 = state_45667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45667__$1,inst_45665);
} else {
return null;
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45672 = [null,null,null,null,null,null,null];
(statearr_45672[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45672[(1)] = (1));

return statearr_45672;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45667){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45673){if((e45673 instanceof Object)){
var ex__37113__auto__ = e45673;
var statearr_45674_45728 = state_45667;
(statearr_45674_45728[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45729 = state_45667;
state_45667 = G__45729;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45667){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45675 = f__37224__auto__.call(null);
(statearr_45675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$_assoc_in$arity$3 = (function (this$,key_vec,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.konserve$protocols$PEDNAsyncKeyValueStore$_update_in$arity$3(null,key_vec,((function (this$__$1){
return (function (_){
return val;
});})(this$__$1))
);
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PEDNAsyncKeyValueStore$_dissoc$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45678){
var state_val_45679 = (state_45678[(1)]);
if((state_val_45679 === (1))){
var inst_45676 = cljs.core.swap_BANG_.call(null,self__.state,cljs.core.dissoc,key);
var state_45678__$1 = (function (){var statearr_45680 = state_45678;
(statearr_45680[(7)] = inst_45676);

return statearr_45680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45678__$1,null);
} else {
return null;
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45684 = [null,null,null,null,null,null,null,null];
(statearr_45684[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45684[(1)] = (1));

return statearr_45684;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45678){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45685){if((e45685 instanceof Object)){
var ex__37113__auto__ = e45685;
var statearr_45686_45730 = state_45678;
(statearr_45686_45730[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45731 = state_45678;
state_45678 = G__45731;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45678){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45687 = f__37224__auto__.call(null);
(statearr_45687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PBinaryAsyncKeyValueStore$ = cljs.core.PROTOCOL_SENTINEL;

konserve.memory.MemoryStore.prototype.konserve$protocols$PBinaryAsyncKeyValueStore$_bget$arity$3 = (function (this$,key,locked_cb){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45692){
var state_val_45693 = (state_45692[(1)]);
if((state_val_45693 === (1))){
var inst_45688 = cljs.core.deref.call(null,self__.state);
var inst_45689 = cljs.core.get.call(null,inst_45688,key);
var inst_45690 = locked_cb.call(null,inst_45689);
var state_45692__$1 = state_45692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45692__$1,inst_45690);
} else {
return null;
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45697 = [null,null,null,null,null,null,null];
(statearr_45697[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45697[(1)] = (1));

return statearr_45697;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45692){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45698){if((e45698 instanceof Object)){
var ex__37113__auto__ = e45698;
var statearr_45699_45732 = state_45692;
(statearr_45699_45732[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45733 = state_45692;
state_45692 = G__45733;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45692){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45700 = f__37224__auto__.call(null);
(statearr_45700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.konserve$protocols$PBinaryAsyncKeyValueStore$_bassoc$arity$3 = (function (this$,key,input){
var self__ = this;
var this$__$1 = this;
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__,this$__$1){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__,this$__$1){
return (function (state_45706){
var state_val_45707 = (state_45706[(1)]);
if((state_val_45707 === (1))){
var inst_45701 = [new cljs.core.Keyword(null,"input-stream","input-stream",-179909472),new cljs.core.Keyword(null,"size","size",1098693007)];
var inst_45702 = [input,new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_45703 = cljs.core.PersistentHashMap.fromArrays(inst_45701,inst_45702);
var inst_45704 = cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,key,inst_45703);
var state_45706__$1 = (function (){var statearr_45708 = state_45706;
(statearr_45708[(7)] = inst_45704);

return statearr_45708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45706__$1,null);
} else {
return null;
}
});})(c__37223__auto__,this$__$1))
;
return ((function (switch__37109__auto__,c__37223__auto__,this$__$1){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45712 = [null,null,null,null,null,null,null,null];
(statearr_45712[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45712[(1)] = (1));

return statearr_45712;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45706){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45713){if((e45713 instanceof Object)){
var ex__37113__auto__ = e45713;
var statearr_45714_45734 = state_45706;
(statearr_45714_45734[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45735 = state_45706;
state_45706 = G__45735;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45706){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45706);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__,this$__$1))
})();
var state__37225__auto__ = (function (){var statearr_45715 = f__37224__auto__.call(null);
(statearr_45715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__,this$__$1))
);

return c__37223__auto__;
});

konserve.memory.MemoryStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

konserve.memory.MemoryStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

konserve.memory.MemoryStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"locks","locks",1560476518),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),null,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,self__.write_handlers,self__.locks,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

konserve.memory.MemoryStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__45623){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__45716 = cljs.core.keyword_identical_QMARK_;
var expr__45717 = k__10902__auto__;
if(cljs.core.truth_(pred__45716.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__45717))){
return (new konserve.memory.MemoryStore(G__45623,self__.read_handlers,self__.write_handlers,self__.locks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45716.call(null,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),expr__45717))){
return (new konserve.memory.MemoryStore(self__.state,G__45623,self__.write_handlers,self__.locks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45716.call(null,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),expr__45717))){
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,G__45623,self__.locks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45716.call(null,new cljs.core.Keyword(null,"locks","locks",1560476518),expr__45717))){
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,self__.write_handlers,G__45623,self__.__meta,self__.__extmap,null));
} else {
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,self__.write_handlers,self__.locks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__45623),null));
}
}
}
}
});

konserve.memory.MemoryStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),self__.read_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),self__.write_handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"locks","locks",1560476518),self__.locks],null))], null),self__.__extmap));
});

konserve.memory.MemoryStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__45623){
var self__ = this;
var this__10893__auto____$1 = this;
return (new konserve.memory.MemoryStore(self__.state,self__.read_handlers,self__.write_handlers,self__.locks,G__45623,self__.__extmap,self__.__hash));
});

konserve.memory.MemoryStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

konserve.memory.MemoryStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"read-handlers","read-handlers",-544976454,null),new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null),new cljs.core.Symbol(null,"locks","locks",-1093959251,null)], null);
});

konserve.memory.MemoryStore.cljs$lang$type = true;

konserve.memory.MemoryStore.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"konserve.memory/MemoryStore");
});

konserve.memory.MemoryStore.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"konserve.memory/MemoryStore");
});

konserve.memory.__GT_MemoryStore = (function konserve$memory$__GT_MemoryStore(state,read_handlers,write_handlers,locks){
return (new konserve.memory.MemoryStore(state,read_handlers,write_handlers,locks,null,null,null));
});

konserve.memory.map__GT_MemoryStore = (function konserve$memory$map__GT_MemoryStore(G__45625){
return (new konserve.memory.MemoryStore(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__45625),new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315).cljs$core$IFn$_invoke$arity$1(G__45625),new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911).cljs$core$IFn$_invoke$arity$1(G__45625),new cljs.core.Keyword(null,"locks","locks",1560476518).cljs$core$IFn$_invoke$arity$1(G__45625),null,cljs.core.dissoc.call(null,G__45625,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),new cljs.core.Keyword(null,"locks","locks",1560476518)),null));
});

/**
 * Create in memory store. Binaries are not properly locked yet and
 *   the read and write-handlers are dummy ones for compatibility.
 */
konserve.memory.new_mem_store = (function konserve$memory$new_mem_store(var_args){
var args45736 = [];
var len__11440__auto___45759 = arguments.length;
var i__11441__auto___45760 = (0);
while(true){
if((i__11441__auto___45760 < len__11440__auto___45759)){
args45736.push((arguments[i__11441__auto___45760]));

var G__45761 = (i__11441__auto___45760 + (1));
i__11441__auto___45760 = G__45761;
continue;
} else {
}
break;
}

var G__45738 = args45736.length;
switch (G__45738) {
case 0:
return konserve.memory.new_mem_store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return konserve.memory.new_mem_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45736.length)].join('')));

}
});

konserve.memory.new_mem_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return konserve.memory.new_mem_store.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

konserve.memory.new_mem_store.cljs$core$IFn$_invoke$arity$1 = (function (init_atom){
var c__37223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37223__auto__){
return (function (){
var f__37224__auto__ = (function (){var switch__37109__auto__ = ((function (c__37223__auto__){
return (function (state_45750){
var state_val_45751 = (state_45750[(1)]);
if((state_val_45751 === (1))){
var inst_45739 = [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),new cljs.core.Keyword(null,"locks","locks",1560476518)];
var inst_45740 = cljs.core.PersistentHashMap.EMPTY;
var inst_45741 = cljs.core.atom.call(null,inst_45740);
var inst_45742 = cljs.core.PersistentHashMap.EMPTY;
var inst_45743 = cljs.core.atom.call(null,inst_45742);
var inst_45744 = cljs.core.PersistentHashMap.EMPTY;
var inst_45745 = cljs.core.atom.call(null,inst_45744);
var inst_45746 = [init_atom,inst_45741,inst_45743,inst_45745];
var inst_45747 = cljs.core.PersistentHashMap.fromArrays(inst_45739,inst_45746);
var inst_45748 = konserve.memory.map__GT_MemoryStore.call(null,inst_45747);
var state_45750__$1 = state_45750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45750__$1,inst_45748);
} else {
return null;
}
});})(c__37223__auto__))
;
return ((function (switch__37109__auto__,c__37223__auto__){
return (function() {
var konserve$memory$state_machine__37110__auto__ = null;
var konserve$memory$state_machine__37110__auto____0 = (function (){
var statearr_45755 = [null,null,null,null,null,null,null];
(statearr_45755[(0)] = konserve$memory$state_machine__37110__auto__);

(statearr_45755[(1)] = (1));

return statearr_45755;
});
var konserve$memory$state_machine__37110__auto____1 = (function (state_45750){
while(true){
var ret_value__37111__auto__ = (function (){try{while(true){
var result__37112__auto__ = switch__37109__auto__.call(null,state_45750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37112__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37112__auto__;
}
break;
}
}catch (e45756){if((e45756 instanceof Object)){
var ex__37113__auto__ = e45756;
var statearr_45757_45763 = state_45750;
(statearr_45757_45763[(5)] = ex__37113__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45764 = state_45750;
state_45750 = G__45764;
continue;
} else {
return ret_value__37111__auto__;
}
break;
}
});
konserve$memory$state_machine__37110__auto__ = function(state_45750){
switch(arguments.length){
case 0:
return konserve$memory$state_machine__37110__auto____0.call(this);
case 1:
return konserve$memory$state_machine__37110__auto____1.call(this,state_45750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$0 = konserve$memory$state_machine__37110__auto____0;
konserve$memory$state_machine__37110__auto__.cljs$core$IFn$_invoke$arity$1 = konserve$memory$state_machine__37110__auto____1;
return konserve$memory$state_machine__37110__auto__;
})()
;})(switch__37109__auto__,c__37223__auto__))
})();
var state__37225__auto__ = (function (){var statearr_45758 = f__37224__auto__.call(null);
(statearr_45758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37223__auto__);

return statearr_45758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37225__auto__);
});})(c__37223__auto__))
);

return c__37223__auto__;
});

konserve.memory.new_mem_store.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=memory.js.map