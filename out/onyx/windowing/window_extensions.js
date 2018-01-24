// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.windowing.window_extensions');
goog.require('cljs.core');
goog.require('onyx.windowing.units');
goog.require('onyx.windowing.window_id');
goog.require('onyx.static$.default_vals');
onyx.windowing.window_extensions.window_id_impl_extents = (function onyx$windowing$window_extensions$window_id_impl_extents(units,min_value,w_range,w_slide,window_time){
var min_value__$1 = (function (){var or__10219__auto__ = min_value;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return (0);
}
})();
return onyx.windowing.window_id.wids.call(null,min_value__$1,w_range,w_slide,window_time);
});

/**
 * @interface
 */
onyx.windowing.window_extensions.IWindow = function(){};

/**
 * Given a segment time and all extents, return the vector of operations that should be performed on the windows.
 *   Operations take the form [action arg1 arg2].
 *   Support actions are:
 *   [:merge-extents extent1 extent2 merged-extent]
 *   [:alter-extents old-extent new-extent]
 *   [:update extent]
 */
onyx.windowing.window_extensions.extent_operations = (function onyx$windowing$window_extensions$extent_operations(this$,all_extents,segment,time_index){
if((!((this$ == null))) && (!((this$.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4 == null)))){
return this$.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4(this$,all_extents,segment,time_index);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.windowing.window_extensions.extent_operations[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,all_extents,segment,time_index);
} else {
var m__10938__auto____$1 = (onyx.windowing.window_extensions.extent_operations["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,all_extents,segment,time_index);
} else {
throw cljs.core.missing_protocol.call(null,"IWindow.extent-operations",this$);
}
}
}
});

/**
 * Given a segment, return the coerced window time for the window key.
 */
onyx.windowing.window_extensions.time_index = (function onyx$windowing$window_extensions$time_index(this$,segment){
if((!((this$ == null))) && (!((this$.onyx$windowing$window_extensions$IWindow$time_index$arity$2 == null)))){
return this$.onyx$windowing$window_extensions$IWindow$time_index$arity$2(this$,segment);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.windowing.window_extensions.time_index[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,segment);
} else {
var m__10938__auto____$1 = (onyx.windowing.window_extensions.time_index["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,segment);
} else {
throw cljs.core.missing_protocol.call(null,"IWindow.time-index",this$);
}
}
}
});

/**
 * Returns a vector of two elements. The first is the lower bound that this window
 *   id accepts, and the second is the upper.
 */
onyx.windowing.window_extensions.bounds = (function onyx$windowing$window_extensions$bounds(this$,window_id){
if((!((this$ == null))) && (!((this$.onyx$windowing$window_extensions$IWindow$bounds$arity$2 == null)))){
return this$.onyx$windowing$window_extensions$IWindow$bounds$arity$2(this$,window_id);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (onyx.windowing.window_extensions.bounds[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,window_id);
} else {
var m__10938__auto____$1 = (onyx.windowing.window_extensions.bounds["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,window_id);
} else {
throw cljs.core.missing_protocol.call(null,"IWindow.bounds",this$);
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
 * @implements {onyx.windowing.window_extensions.IWindow}
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
onyx.windowing.window_extensions.FixedWindow = (function (id,task,type,init,window_key,min_value,range,w_range,units,slide,timeout_gap,doc,window,__meta,__extmap,__hash){
this.id = id;
this.task = task;
this.type = type;
this.init = init;
this.window_key = window_key;
this.min_value = min_value;
this.range = range;
this.w_range = w_range;
this.units = units;
this.slide = slide;
this.timeout_gap = timeout_gap;
this.doc = doc;
this.window = window;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51014,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51016 = k51014;
var G__51016__$1 = (((G__51016 instanceof cljs.core.Keyword))?G__51016.fqn:null);
switch (G__51016__$1) {
case "init":
return self__.init;

break;
case "task":
return self__.task;

break;
case "type":
return self__.type;

break;
case "min-value":
return self__.min_value;

break;
case "window":
return self__.window;

break;
case "window-key":
return self__.window_key;

break;
case "slide":
return self__.slide;

break;
case "id":
return self__.id;

break;
case "units":
return self__.units;

break;
case "w-range":
return self__.w_range;

break;
case "timeout-gap":
return self__.timeout_gap;

break;
case "doc":
return self__.doc;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51014,else__10897__auto__);

}
});

onyx.windowing.window_extensions.FixedWindow.prototype.onyx$windowing$window_extensions$IWindow$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.FixedWindow.prototype.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4 = (function (this$,extents,_,time_index){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,((function (this$__$1){
return (function (extent){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),extent], null);
});})(this$__$1))
,onyx.windowing.window_extensions.window_id_impl_extents.call(null,self__.units,self__.min_value,self__.w_range,self__.w_range,time_index));
});

onyx.windowing.window_extensions.FixedWindow.prototype.onyx$windowing$window_extensions$IWindow$time_index$arity$2 = (function (this$,segment){
var self__ = this;
var this$__$1 = this;
return onyx.windowing.units.coerce_key.call(null,cljs.core.get.call(null,segment,self__.window_key),self__.units);
});

onyx.windowing.window_extensions.FixedWindow.prototype.onyx$windowing$window_extensions$IWindow$bounds$arity$2 = (function (this$,window_id){
var self__ = this;
var this$__$1 = this;
var win_min = (function (){var or__10219__auto__ = self__.min_value;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.get.call(null,onyx.static$.default_vals.default_vals,new cljs.core.Keyword("onyx.windowing","min-value","onyx.windowing/min-value",189136591));
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onyx.windowing.window_id.extent_lower.call(null,win_min,self__.w_range,self__.w_range,window_id),onyx.windowing.window_id.extent_upper.call(null,win_min,self__.w_range,window_id)], null);
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#onyx.windowing.window-extensions.FixedWindow{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-range","w-range",1357038970),self__.w_range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51013){
var self__ = this;
var G__51013__$1 = this;
return (new cljs.core.RecordIter((0),G__51013__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"w-range","w-range",1357038970),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"init","init",-1875481434),null,new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),null,new cljs.core.Keyword(null,"slide","slide",142491892),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"w-range","w-range",1357038970),null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51013){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51017 = cljs.core.keyword_identical_QMARK_;
var expr__51018 = k__10902__auto__;
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(G__51013,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,G__51013,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,G__51013,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,G__51013,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,G__51013,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,G__51013,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,G__51013,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"w-range","w-range",1357038970),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,G__51013,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,G__51013,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"slide","slide",142491892),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,G__51013,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,G__51013,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,G__51013,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51017.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__51018))){
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,G__51013,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51013),null));
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
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-range","w-range",1357038970),self__.w_range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51013){
var self__ = this;
var this__10893__auto____$1 = this;
return (new onyx.windowing.window_extensions.FixedWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.w_range,self__.units,self__.slide,self__.timeout_gap,self__.doc,self__.window,G__51013,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.FixedWindow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

onyx.windowing.window_extensions.FixedWindow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"window-key","window-key",884253434,null),new cljs.core.Symbol(null,"min-value","min-value",521408212,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"w-range","w-range",-1297396799,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"slide","slide",1783023419,null),new cljs.core.Symbol(null,"timeout-gap","timeout-gap",-834304734,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"window","window",-1929916235,null)], null);
});

onyx.windowing.window_extensions.FixedWindow.cljs$lang$type = true;

onyx.windowing.window_extensions.FixedWindow.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.windowing.window-extensions/FixedWindow");
});

onyx.windowing.window_extensions.FixedWindow.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"onyx.windowing.window-extensions/FixedWindow");
});

onyx.windowing.window_extensions.__GT_FixedWindow = (function onyx$windowing$window_extensions$__GT_FixedWindow(id,task,type,init,window_key,min_value,range,w_range,units,slide,timeout_gap,doc,window){
return (new onyx.windowing.window_extensions.FixedWindow(id,task,type,init,window_key,min_value,range,w_range,units,slide,timeout_gap,doc,window,null,null,null));
});

onyx.windowing.window_extensions.map__GT_FixedWindow = (function onyx$windowing$window_extensions$map__GT_FixedWindow(G__51015){
return (new onyx.windowing.window_extensions.FixedWindow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"window-key","window-key",-756278093).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"min-value","min-value",-1119123315).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"w-range","w-range",1357038970).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"slide","slide",142491892).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__51015),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__51015),null,cljs.core.dissoc.call(null,G__51015,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"w-range","w-range",1357038970),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {onyx.windowing.window_extensions.IWindow}
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
onyx.windowing.window_extensions.SlidingWindow = (function (id,task,type,init,window_key,min_value,range,slide,units,w_range,w_slide,timeout_gap,doc,window,__meta,__extmap,__hash){
this.id = id;
this.task = task;
this.type = type;
this.init = init;
this.window_key = window_key;
this.min_value = min_value;
this.range = range;
this.slide = slide;
this.units = units;
this.w_range = w_range;
this.w_slide = w_slide;
this.timeout_gap = timeout_gap;
this.doc = doc;
this.window = window;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51022,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51024 = k51022;
var G__51024__$1 = (((G__51024 instanceof cljs.core.Keyword))?G__51024.fqn:null);
switch (G__51024__$1) {
case "init":
return self__.init;

break;
case "task":
return self__.task;

break;
case "type":
return self__.type;

break;
case "min-value":
return self__.min_value;

break;
case "w-slide":
return self__.w_slide;

break;
case "window":
return self__.window;

break;
case "window-key":
return self__.window_key;

break;
case "slide":
return self__.slide;

break;
case "id":
return self__.id;

break;
case "units":
return self__.units;

break;
case "w-range":
return self__.w_range;

break;
case "timeout-gap":
return self__.timeout_gap;

break;
case "doc":
return self__.doc;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51022,else__10897__auto__);

}
});

onyx.windowing.window_extensions.SlidingWindow.prototype.onyx$windowing$window_extensions$IWindow$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.SlidingWindow.prototype.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4 = (function (this$,_,___$1,time_index){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,((function (this$__$1){
return (function (extent){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),extent], null);
});})(this$__$1))
,onyx.windowing.window_extensions.window_id_impl_extents.call(null,self__.units,self__.min_value,self__.w_range,self__.w_slide,time_index));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.onyx$windowing$window_extensions$IWindow$time_index$arity$2 = (function (this$,segment){
var self__ = this;
var this$__$1 = this;
return onyx.windowing.units.coerce_key.call(null,cljs.core.get.call(null,segment,self__.window_key),self__.units);
});

onyx.windowing.window_extensions.SlidingWindow.prototype.onyx$windowing$window_extensions$IWindow$bounds$arity$2 = (function (this$,window_id){
var self__ = this;
var this$__$1 = this;
var win_min = (function (){var or__10219__auto__ = self__.min_value;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.get.call(null,onyx.static$.default_vals.default_vals,new cljs.core.Keyword("onyx.windowing","min-value","onyx.windowing/min-value",189136591));
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [onyx.windowing.window_id.extent_lower.call(null,win_min,self__.w_range,self__.w_slide,window_id),onyx.windowing.window_id.extent_upper.call(null,win_min,self__.w_slide,window_id)], null);
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#onyx.windowing.window-extensions.SlidingWindow{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-range","w-range",1357038970),self__.w_range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),self__.w_slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51021){
var self__ = this;
var G__51021__$1 = this;
return (new cljs.core.RecordIter((0),G__51021__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"w-range","w-range",1357038970),new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"init","init",-1875481434),null,new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),null,new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),null,new cljs.core.Keyword(null,"slide","slide",142491892),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"w-range","w-range",1357038970),null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51021){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51025 = cljs.core.keyword_identical_QMARK_;
var expr__51026 = k__10902__auto__;
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(G__51021,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,G__51021,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,G__51021,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,G__51021,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,G__51021,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,G__51021,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,G__51021,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"slide","slide",142491892),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,G__51021,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,G__51021,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"w-range","w-range",1357038970),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,G__51021,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,G__51021,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,G__51021,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,G__51021,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51025.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__51026))){
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,G__51021,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51021),null));
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
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-range","w-range",1357038970),self__.w_range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),self__.w_slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51021){
var self__ = this;
var this__10893__auto____$1 = this;
return (new onyx.windowing.window_extensions.SlidingWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.units,self__.w_range,self__.w_slide,self__.timeout_gap,self__.doc,self__.window,G__51021,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.SlidingWindow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

onyx.windowing.window_extensions.SlidingWindow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"window-key","window-key",884253434,null),new cljs.core.Symbol(null,"min-value","min-value",521408212,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"slide","slide",1783023419,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"w-range","w-range",-1297396799,null),new cljs.core.Symbol(null,"w-slide","w-slide",-1493915276,null),new cljs.core.Symbol(null,"timeout-gap","timeout-gap",-834304734,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"window","window",-1929916235,null)], null);
});

onyx.windowing.window_extensions.SlidingWindow.cljs$lang$type = true;

onyx.windowing.window_extensions.SlidingWindow.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.windowing.window-extensions/SlidingWindow");
});

onyx.windowing.window_extensions.SlidingWindow.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"onyx.windowing.window-extensions/SlidingWindow");
});

onyx.windowing.window_extensions.__GT_SlidingWindow = (function onyx$windowing$window_extensions$__GT_SlidingWindow(id,task,type,init,window_key,min_value,range,slide,units,w_range,w_slide,timeout_gap,doc,window){
return (new onyx.windowing.window_extensions.SlidingWindow(id,task,type,init,window_key,min_value,range,slide,units,w_range,w_slide,timeout_gap,doc,window,null,null,null));
});

onyx.windowing.window_extensions.map__GT_SlidingWindow = (function onyx$windowing$window_extensions$map__GT_SlidingWindow(G__51023){
return (new onyx.windowing.window_extensions.SlidingWindow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"window-key","window-key",-756278093).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"min-value","min-value",-1119123315).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"slide","slide",142491892).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"w-range","w-range",1357038970).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"w-slide","w-slide",1160520493).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__51023),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__51023),null,cljs.core.dissoc.call(null,G__51023,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"w-range","w-range",1357038970),new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {onyx.windowing.window_extensions.IWindow}
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
onyx.windowing.window_extensions.GlobalWindow = (function (id,task,type,init,window_key,min_value,range,slide,timeout_gap,doc,window,__meta,__extmap,__hash){
this.id = id;
this.task = task;
this.type = type;
this.init = init;
this.window_key = window_key;
this.min_value = min_value;
this.range = range;
this.slide = slide;
this.timeout_gap = timeout_gap;
this.doc = doc;
this.window = window;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51030,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51032 = k51030;
var G__51032__$1 = (((G__51032 instanceof cljs.core.Keyword))?G__51032.fqn:null);
switch (G__51032__$1) {
case "init":
return self__.init;

break;
case "task":
return self__.task;

break;
case "type":
return self__.type;

break;
case "min-value":
return self__.min_value;

break;
case "window":
return self__.window;

break;
case "window-key":
return self__.window_key;

break;
case "slide":
return self__.slide;

break;
case "id":
return self__.id;

break;
case "timeout-gap":
return self__.timeout_gap;

break;
case "doc":
return self__.doc;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51030,else__10897__auto__);

}
});

onyx.windowing.window_extensions.GlobalWindow.prototype.onyx$windowing$window_extensions$IWindow$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.GlobalWindow.prototype.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4 = (function (this$,_,___$1,time_index){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),(1)], null)], null);
});

onyx.windowing.window_extensions.GlobalWindow.prototype.onyx$windowing$window_extensions$IWindow$time_index$arity$2 = (function (this$,segment){
var self__ = this;
var this$__$1 = this;
return (0);
});

onyx.windowing.window_extensions.GlobalWindow.prototype.onyx$windowing$window_extensions$IWindow$bounds$arity$2 = (function (this$,window_id){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY], null);
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#onyx.windowing.window-extensions.GlobalWindow{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51029){
var self__ = this;
var G__51029__$1 = this;
return (new cljs.core.RecordIter((0),G__51029__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"init","init",-1875481434),null,new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),null,new cljs.core.Keyword(null,"slide","slide",142491892),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51029){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51033 = cljs.core.keyword_identical_QMARK_;
var expr__51034 = k__10902__auto__;
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(G__51029,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,G__51029,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,G__51029,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,G__51029,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,G__51029,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,G__51029,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,G__51029,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"slide","slide",142491892),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,G__51029,self__.timeout_gap,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,G__51029,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,G__51029,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51033.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__51034))){
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,G__51029,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51029),null));
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

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51029){
var self__ = this;
var this__10893__auto____$1 = this;
return (new onyx.windowing.window_extensions.GlobalWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.timeout_gap,self__.doc,self__.window,G__51029,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.GlobalWindow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

onyx.windowing.window_extensions.GlobalWindow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"window-key","window-key",884253434,null),new cljs.core.Symbol(null,"min-value","min-value",521408212,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"slide","slide",1783023419,null),new cljs.core.Symbol(null,"timeout-gap","timeout-gap",-834304734,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"window","window",-1929916235,null)], null);
});

onyx.windowing.window_extensions.GlobalWindow.cljs$lang$type = true;

onyx.windowing.window_extensions.GlobalWindow.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.windowing.window-extensions/GlobalWindow");
});

onyx.windowing.window_extensions.GlobalWindow.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"onyx.windowing.window-extensions/GlobalWindow");
});

onyx.windowing.window_extensions.__GT_GlobalWindow = (function onyx$windowing$window_extensions$__GT_GlobalWindow(id,task,type,init,window_key,min_value,range,slide,timeout_gap,doc,window){
return (new onyx.windowing.window_extensions.GlobalWindow(id,task,type,init,window_key,min_value,range,slide,timeout_gap,doc,window,null,null,null));
});

onyx.windowing.window_extensions.map__GT_GlobalWindow = (function onyx$windowing$window_extensions$map__GT_GlobalWindow(G__51031){
return (new onyx.windowing.window_extensions.GlobalWindow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"window-key","window-key",-756278093).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"min-value","min-value",-1119123315).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"slide","slide",142491892).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__51031),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__51031),null,cljs.core.dissoc.call(null,G__51031,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)),null));
});

/**
 * Find the extents with the closest lower bounds.
 */
onyx.windowing.window_extensions.bounding_extents = (function onyx$windowing$window_extensions$bounding_extents(extents,session_time){
var extent = cljs.core.first.call(null,extents);
var vs = cljs.core.rest.call(null,extents);
var closest_below = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number.POSITIVE_INFINITY,null], null);
var closest_above = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Number.POSITIVE_INFINITY,null], null);
while(true){
if((extent == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,closest_below),cljs.core.second.call(null,closest_above)], null);
} else {
var vec__51040 = extent;
var session_lower_bound = cljs.core.nth.call(null,vec__51040,(0),null);
var lower_distance = (session_time - session_lower_bound);
var new_closest_below = ((((session_lower_bound <= session_time)) && ((lower_distance < cljs.core.first.call(null,closest_below))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lower_distance,extent], null):closest_below);
var upper_distance = (session_lower_bound - session_time);
var new_closest_above = ((((session_lower_bound >= session_time)) && ((upper_distance < cljs.core.first.call(null,closest_above))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [upper_distance,extent], null):closest_above);
var G__51043 = cljs.core.first.call(null,vs);
var G__51044 = cljs.core.rest.call(null,vs);
var G__51045 = new_closest_below;
var G__51046 = new_closest_above;
extent = G__51043;
vs = G__51044;
closest_below = G__51045;
closest_above = G__51046;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {onyx.windowing.window_extensions.IWindow}
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
onyx.windowing.window_extensions.SessionWindow = (function (id,task,type,init,window_key,min_value,range,slide,gap,timeout_gap,units,doc,window,__meta,__extmap,__hash){
this.id = id;
this.task = task;
this.type = type;
this.init = init;
this.window_key = window_key;
this.min_value = min_value;
this.range = range;
this.slide = slide;
this.gap = gap;
this.timeout_gap = timeout_gap;
this.units = units;
this.doc = doc;
this.window = window;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10894__auto__,k__10895__auto__){
var self__ = this;
var this__10894__auto____$1 = this;
return this__10894__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10895__auto__,null);
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10896__auto__,k51048,else__10897__auto__){
var self__ = this;
var this__10896__auto____$1 = this;
var G__51050 = k51048;
var G__51050__$1 = (((G__51050 instanceof cljs.core.Keyword))?G__51050.fqn:null);
switch (G__51050__$1) {
case "init":
return self__.init;

break;
case "task":
return self__.task;

break;
case "type":
return self__.type;

break;
case "min-value":
return self__.min_value;

break;
case "window":
return self__.window;

break;
case "window-key":
return self__.window_key;

break;
case "slide":
return self__.slide;

break;
case "id":
return self__.id;

break;
case "gap":
return self__.gap;

break;
case "units":
return self__.units;

break;
case "timeout-gap":
return self__.timeout_gap;

break;
case "doc":
return self__.doc;

break;
case "range":
return self__.range;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k51048,else__10897__auto__);

}
});

onyx.windowing.window_extensions.SessionWindow.prototype.onyx$windowing$window_extensions$IWindow$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.SessionWindow.prototype.onyx$windowing$window_extensions$IWindow$extent_operations$arity$4 = (function (this$,all_extents,_,time_index){
var self__ = this;
var this$__$1 = this;
var vec__51051 = onyx.windowing.window_extensions.bounding_extents.call(null,cljs.core.deref.call(null,all_extents),time_index);
var below_extent = cljs.core.nth.call(null,vec__51051,(0),null);
var above_extent = cljs.core.nth.call(null,vec__51051,(1),null);
var vec__51054 = below_extent;
var below_lower = cljs.core.nth.call(null,vec__51054,(0),null);
var below_upper = cljs.core.nth.call(null,vec__51054,(1),null);
var vec__51057 = above_extent;
var above_lower = cljs.core.nth.call(null,vec__51057,(0),null);
var above_upper = cljs.core.nth.call(null,vec__51057,(1),null);
var below_contains_QMARK_ = (function (){var and__10207__auto__ = below_upper;
if(cljs.core.truth_(and__10207__auto__)){
return (below_upper >= (time_index - self__.gap));
} else {
return and__10207__auto__;
}
})();
var above_contains_QMARK_ = (function (){var and__10207__auto__ = above_lower;
if(cljs.core.truth_(and__10207__auto__)){
return ((time_index + self__.gap) >= above_lower);
} else {
return and__10207__auto__;
}
})();
if(cljs.core.truth_((function (){var and__10207__auto__ = below_extent;
if(cljs.core.truth_(and__10207__auto__)){
var and__10207__auto____$1 = above_extent;
if(cljs.core.truth_(and__10207__auto____$1)){
return cljs.core._EQ_.call(null,below_extent,above_extent);
} else {
return and__10207__auto____$1;
}
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),below_extent], null)], null);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = below_contains_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return above_contains_QMARK_;
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge-extents","merge-extents",1858184816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,below_upper], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [above_lower,above_upper], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,above_upper], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,above_upper], null)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = below_contains_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return (time_index > below_upper);
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alter-extents","alter-extents",675805659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,below_upper], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,time_index], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,time_index], null)], null)], null);
} else {
if(cljs.core.truth_(below_contains_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [below_lower,(function (){var x__10557__auto__ = below_upper;
var y__10558__auto__ = time_index;
return ((x__10557__auto__ > y__10558__auto__) ? x__10557__auto__ : y__10558__auto__);
})()], null)], null)], null);
} else {
if(cljs.core.truth_((function (){var and__10207__auto__ = above_contains_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return (time_index < above_lower);
} else {
return and__10207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alter-extents","alter-extents",675805659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [above_lower,above_upper], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_index,above_upper], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_index,above_upper], null)], null)], null);
} else {
if(cljs.core.truth_(above_contains_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [above_lower,(function (){var x__10557__auto__ = time_index;
var y__10558__auto__ = above_upper;
return ((x__10557__auto__ > y__10558__auto__) ? x__10557__auto__ : y__10558__auto__);
})()], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_index,time_index], null)], null)], null);

}
}
}
}
}
}
});

onyx.windowing.window_extensions.SessionWindow.prototype.onyx$windowing$window_extensions$IWindow$time_index$arity$2 = (function (this$,segment){
var self__ = this;
var this$__$1 = this;
return onyx.windowing.units.coerce_key.call(null,cljs.core.get.call(null,segment,self__.window_key),self__.units);
});

onyx.windowing.window_extensions.SessionWindow.prototype.onyx$windowing$window_extensions$IWindow$bounds$arity$2 = (function (this$,window_id){
var self__ = this;
var this$__$1 = this;
return window_id;
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10908__auto__,writer__10909__auto__,opts__10910__auto__){
var self__ = this;
var this__10908__auto____$1 = this;
var pr_pair__10911__auto__ = ((function (this__10908__auto____$1){
return (function (keyval__10912__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,cljs.core.pr_writer,""," ","",opts__10910__auto__,keyval__10912__auto__);
});})(this__10908__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10909__auto__,pr_pair__10911__auto__,"#onyx.windowing.window-extensions.SessionWindow{",", ","}",opts__10910__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gap","gap",80255254),self__.gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51047){
var self__ = this;
var G__51047__$1 = this;
return (new cljs.core.RecordIter((0),G__51047__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10892__auto__){
var self__ = this;
var this__10892__auto____$1 = this;
return self__.__meta;
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10888__auto__){
var self__ = this;
var this__10888__auto____$1 = this;
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10898__auto__){
var self__ = this;
var this__10898__auto____$1 = this;
return (13 + cljs.core.count.call(null,self__.__extmap));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10889__auto__){
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

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__10890__auto__,other__10891__auto__){
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

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10903__auto__,k__10904__auto__){
var self__ = this;
var this__10903__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"init","init",-1875481434),null,new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),null,new cljs.core.Keyword(null,"slide","slide",142491892),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gap","gap",80255254),null,new cljs.core.Keyword(null,"units","units",-533089095),null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null),k__10904__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10903__auto____$1),self__.__meta),k__10904__auto__);
} else {
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10904__auto__)),null));
}
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10901__auto__,k__10902__auto__,G__51047){
var self__ = this;
var this__10901__auto____$1 = this;
var pred__51060 = cljs.core.keyword_identical_QMARK_;
var expr__51061 = k__10902__auto__;
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(G__51047,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,G__51047,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,G__51047,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,G__51047,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"window-key","window-key",-756278093),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,G__51047,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,G__51047,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"range","range",1639692286),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,G__51047,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"slide","slide",142491892),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,G__51047,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"gap","gap",80255254),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,G__51047,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,G__51047,self__.units,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"units","units",-533089095),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,G__51047,self__.doc,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,G__51047,self__.window,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__51060.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__51061))){
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,G__51047,self__.__meta,self__.__extmap,null));
} else {
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10902__auto__,G__51047),null));
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
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10906__auto__){
var self__ = this;
var this__10906__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init","init",-1875481434),self__.init],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window-key","window-key",-756278093),self__.window_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min-value","min-value",-1119123315),self__.min_value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"range","range",1639692286),self__.range],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slide","slide",142491892),self__.slide],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gap","gap",80255254),self__.gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),self__.timeout_gap],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"units","units",-533089095),self__.units],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"doc","doc",1913296891),self__.doc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10893__auto__,G__51047){
var self__ = this;
var this__10893__auto____$1 = this;
return (new onyx.windowing.window_extensions.SessionWindow(self__.id,self__.task,self__.type,self__.init,self__.window_key,self__.min_value,self__.range,self__.slide,self__.gap,self__.timeout_gap,self__.units,self__.doc,self__.window,G__51047,self__.__extmap,self__.__hash));
});

onyx.windowing.window_extensions.SessionWindow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10899__auto__,entry__10900__auto__){
var self__ = this;
var this__10899__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10900__auto__)){
return this__10899__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10900__auto__,(0)),cljs.core._nth.call(null,entry__10900__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10899__auto____$1,entry__10900__auto__);
}
});

onyx.windowing.window_extensions.SessionWindow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"window-key","window-key",884253434,null),new cljs.core.Symbol(null,"min-value","min-value",521408212,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"slide","slide",1783023419,null),new cljs.core.Symbol(null,"gap","gap",1720786781,null),new cljs.core.Symbol(null,"timeout-gap","timeout-gap",-834304734,null),new cljs.core.Symbol(null,"units","units",1107442432,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"window","window",-1929916235,null)], null);
});

onyx.windowing.window_extensions.SessionWindow.cljs$lang$type = true;

onyx.windowing.window_extensions.SessionWindow.cljs$lang$ctorPrSeq = (function (this__10930__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"onyx.windowing.window-extensions/SessionWindow");
});

onyx.windowing.window_extensions.SessionWindow.cljs$lang$ctorPrWriter = (function (this__10930__auto__,writer__10931__auto__){
return cljs.core._write.call(null,writer__10931__auto__,"onyx.windowing.window-extensions/SessionWindow");
});

onyx.windowing.window_extensions.__GT_SessionWindow = (function onyx$windowing$window_extensions$__GT_SessionWindow(id,task,type,init,window_key,min_value,range,slide,gap,timeout_gap,units,doc,window){
return (new onyx.windowing.window_extensions.SessionWindow(id,task,type,init,window_key,min_value,range,slide,gap,timeout_gap,units,doc,window,null,null,null));
});

onyx.windowing.window_extensions.map__GT_SessionWindow = (function onyx$windowing$window_extensions$map__GT_SessionWindow(G__51049){
return (new onyx.windowing.window_extensions.SessionWindow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"window-key","window-key",-756278093).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"min-value","min-value",-1119123315).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"range","range",1639692286).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"slide","slide",142491892).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"gap","gap",80255254).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(G__51049),new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__51049),null,cljs.core.dissoc.call(null,G__51049,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"window-key","window-key",-756278093),new cljs.core.Keyword(null,"min-value","min-value",-1119123315),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035),new cljs.core.Keyword(null,"units","units",-533089095),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"window","window",724519534)),null));
});

if(typeof onyx.windowing.window_extensions.extent_serializer !== 'undefined'){
} else {
/**
 * Given a window, return the type of extent serializer
 */
onyx.windowing.window_extensions.extent_serializer = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.windowing.window-extensions","extent-serializer"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (window){
return new cljs.core.Keyword("window","type","window/type",-1895193220).cljs$core$IFn$_invoke$arity$1(window);
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,onyx.windowing.window_extensions.extent_serializer,new cljs.core.Keyword(null,"fixed","fixed",-562004358),(function (window){
return new cljs.core.Keyword(null,"long","long",-171452093);
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.extent_serializer,new cljs.core.Keyword(null,"sliding","sliding",1380642697),(function (window){
return new cljs.core.Keyword(null,"long","long",-171452093);
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.extent_serializer,new cljs.core.Keyword(null,"global","global",93595047),(function (window){
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.extent_serializer,new cljs.core.Keyword(null,"session","session",1008279103),(function (window){
return new cljs.core.Keyword(null,"long-long","long-long",846943051);
}));
if(typeof onyx.windowing.window_extensions.windowing_builder !== 'undefined'){
} else {
/**
 * Given a window, return the concrete type to perform
 * operations against.
 */
onyx.windowing.window_extensions.windowing_builder = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.windowing.window-extensions","windowing-builder"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (window){
return new cljs.core.Keyword("window","type","window/type",-1895193220).cljs$core$IFn$_invoke$arity$1(window);
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,onyx.windowing.window_extensions.windowing_builder,new cljs.core.Keyword(null,"fixed","fixed",-562004358),(function (window){
return (function (p__51064){
var map__51065 = p__51064;
var map__51065__$1 = ((((!((map__51065 == null)))?((((map__51065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51065):map__51065);
var m = map__51065__$1;
var range = cljs.core.get.call(null,map__51065__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return onyx.windowing.window_extensions.map__GT_FixedWindow.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"units","units",-533089095),onyx.windowing.units.standard_units_for.call(null,cljs.core.last.call(null,range))),new cljs.core.Keyword(null,"w-range","w-range",1357038970),cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,range)));
});
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.windowing_builder,new cljs.core.Keyword(null,"sliding","sliding",1380642697),(function (window){
return (function (p__51067){
var map__51068 = p__51067;
var map__51068__$1 = ((((!((map__51068 == null)))?((((map__51068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51068):map__51068);
var m = map__51068__$1;
var range = cljs.core.get.call(null,map__51068__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var slide = cljs.core.get.call(null,map__51068__$1,new cljs.core.Keyword(null,"slide","slide",142491892));
return onyx.windowing.window_extensions.map__GT_SlidingWindow.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"units","units",-533089095),onyx.windowing.units.standard_units_for.call(null,cljs.core.last.call(null,range))),new cljs.core.Keyword(null,"w-range","w-range",1357038970),cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,range)),new cljs.core.Keyword(null,"w-slide","w-slide",1160520493),cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,(function (){var or__10219__auto__ = slide;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return range;
}
})())));
});
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.windowing_builder,new cljs.core.Keyword(null,"global","global",93595047),(function (window){
return onyx.windowing.window_extensions.map__GT_GlobalWindow;
}));
cljs.core._add_method.call(null,onyx.windowing.window_extensions.windowing_builder,new cljs.core.Keyword(null,"session","session",1008279103),(function (window){
return (function (p__51070){
var map__51071 = p__51070;
var map__51071__$1 = ((((!((map__51071 == null)))?((((map__51071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51071):map__51071);
var m = map__51071__$1;
var timeout_gap = cljs.core.get.call(null,map__51071__$1,new cljs.core.Keyword(null,"timeout-gap","timeout-gap",1820131035));
return onyx.windowing.window_extensions.map__GT_SessionWindow.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"units","units",-533089095),onyx.windowing.units.standard_units_for.call(null,cljs.core.last.call(null,timeout_gap))),new cljs.core.Keyword(null,"gap","gap",80255254),cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,timeout_gap)));
});
}));

//# sourceMappingURL=window_extensions.js.map