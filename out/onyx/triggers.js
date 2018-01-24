// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.triggers');
goog.require('cljs.core');
goog.require('onyx.windowing.units');
goog.require('onyx.static$.util');
onyx.triggers.next_fire_time = (function onyx$triggers$next_fire_time(p__39557){
var map__39560 = p__39557;
var map__39560__$1 = ((((!((map__39560 == null)))?((((map__39560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39560):map__39560);
var trigger = map__39560__$1;
var period = cljs.core.get.call(null,map__39560__$1,new cljs.core.Keyword("trigger","period","trigger/period",710363569));
if(cljs.core._EQ_.call(null,onyx.windowing.units.standard_units_for.call(null,cljs.core.second.call(null,period)),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512))){
var ms = cljs.core.apply.call(null,onyx.windowing.units.to_standard_units,period);
return (onyx.static$.util.now.call(null) + ms);
} else {
throw cljs.core.ex_info.call(null,":trigger/period must be a unit that can be converted to :milliseconds",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));
}
});
onyx.triggers.exceeds_watermark_QMARK_ = (function onyx$triggers$exceeds_watermark_QMARK_(window,upper_extent_bound,segment){
var watermark = cljs.core.get.call(null,segment,new cljs.core.Keyword("window","window-key","window/window-key",-436709213).cljs$core$IFn$_invoke$arity$1(window));
return (onyx.windowing.units.coerce_key.call(null,watermark,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512)) >= upper_extent_bound);
});
onyx.triggers.exceeds_percentile_watermark_QMARK_ = (function onyx$triggers$exceeds_percentile_watermark_QMARK_(window,trigger,lower_extent_bound,upper_extent_bound,segment){
var watermark = cljs.core.get.call(null,segment,new cljs.core.Keyword("window","window-key","window/window-key",-436709213).cljs$core$IFn$_invoke$arity$1(window));
var pct = new cljs.core.Keyword("trigger","watermark-percentage","trigger/watermark-percentage",1245073398).cljs$core$IFn$_invoke$arity$1(trigger);
var offset = ((upper_extent_bound - lower_extent_bound) * pct);
return (onyx.windowing.units.coerce_key.call(null,watermark,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512)) >= (lower_extent_bound + offset));
});
onyx.triggers.segment_init_state = (function onyx$triggers$segment_init_state(_){
return (0);
});
onyx.triggers.timer_init_state = (function onyx$triggers$timer_init_state(trigger){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,onyx.triggers.next_fire_time.call(null,trigger)], null);
});
onyx.triggers.punctuation_init_state = (function onyx$triggers$punctuation_init_state(trigger){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fire?","fire?",-1924029271),false], null);
});
onyx.triggers.watermark_init_state = (function onyx$triggers$watermark_init_state(trigger){
return null;
});
onyx.triggers.percentile_watermark_init_state = (function onyx$triggers$percentile_watermark_init_state(trigger){
return null;
});
onyx.triggers.segment_init_locals = (function onyx$triggers$segment_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.timer_init_locals = (function onyx$triggers$timer_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.punctuation_init_locals = (function onyx$triggers$punctuation_init_locals(trigger){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pred-fn","pred-fn",-1305072773),onyx.static$.util.kw__GT_fn.call(null,new cljs.core.Keyword("trigger","pred","trigger/pred",835767021).cljs$core$IFn$_invoke$arity$1(trigger))], null);
});
onyx.triggers.watermark_init_locals = (function onyx$triggers$watermark_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.percentile_watermark_init_locals = (function onyx$triggers$percentile_watermark_init_locals(trigger){
return cljs.core.PersistentArrayMap.EMPTY;
});
onyx.triggers.segment_next_state = (function onyx$triggers$segment_next_state(p__39562,state,p__39563){
var map__39568 = p__39562;
var map__39568__$1 = ((((!((map__39568 == null)))?((((map__39568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39568):map__39568);
var threshold = cljs.core.get.call(null,map__39568__$1,new cljs.core.Keyword("trigger","threshold","trigger/threshold",1291289287));
var map__39569 = p__39563;
var map__39569__$1 = ((((!((map__39569 == null)))?((((map__39569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39569):map__39569);
var state_event = map__39569__$1;
var event_type = cljs.core.get.call(null,map__39569__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
if(cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380))){
return (cljs.core.mod.call(null,state,cljs.core.first.call(null,threshold)) + (1));
} else {
return state;
}
});
onyx.triggers.timer_next_state = (function onyx$triggers$timer_next_state(p__39572,p__39573,p__39574){
var map__39582 = p__39572;
var map__39582__$1 = ((((!((map__39582 == null)))?((((map__39582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39582):map__39582);
var trigger = map__39582__$1;
var period = cljs.core.get.call(null,map__39582__$1,new cljs.core.Keyword("trigger","period","trigger/period",710363569));
var vec__39583 = p__39573;
var _ = cljs.core.nth.call(null,vec__39583,(0),null);
var fire_time = cljs.core.nth.call(null,vec__39583,(1),null);
var map__39586 = p__39574;
var map__39586__$1 = ((((!((map__39586 == null)))?((((map__39586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39586):map__39586);
var state_event = map__39586__$1;
var event_type = cljs.core.get.call(null,map__39586__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var fire_QMARK_ = ((onyx.static$.util.now.call(null) > fire_time)) || (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fire_QMARK_,((fire_QMARK_)?onyx.triggers.next_fire_time.call(null,trigger):fire_time)], null);
});
onyx.triggers.punctuation_next_state = (function onyx$triggers$punctuation_next_state(trigger,state,p__39589){
var map__39594 = p__39589;
var map__39594__$1 = ((((!((map__39594 == null)))?((((map__39594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39594):map__39594);
var state_event = map__39594__$1;
var trigger_state = cljs.core.get.call(null,map__39594__$1,new cljs.core.Keyword(null,"trigger-state","trigger-state",-1285376437));
var map__39596 = trigger_state;
var map__39596__$1 = ((((!((map__39596 == null)))?((((map__39596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39596):map__39596);
var pred_fn = cljs.core.get.call(null,map__39596__$1,new cljs.core.Keyword(null,"pred-fn","pred-fn",-1305072773));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fire?","fire?",-1924029271),pred_fn.call(null,trigger,state_event)], null);
});
onyx.triggers.watermark_next_state = (function onyx$triggers$watermark_next_state(trigger,state,state_event){
return null;
});
onyx.triggers.percentile_watermark_next_state = (function onyx$triggers$percentile_watermark_next_state(trigger,state,state_event){
return null;
});
onyx.triggers.segment_fire_QMARK_ = (function onyx$triggers$segment_fire_QMARK_(p__39598,trigger_state,p__39599){
var map__39604 = p__39598;
var map__39604__$1 = ((((!((map__39604 == null)))?((((map__39604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39604):map__39604);
var trigger = map__39604__$1;
var threshold = cljs.core.get.call(null,map__39604__$1,new cljs.core.Keyword("trigger","threshold","trigger/threshold",1291289287));
var map__39605 = p__39599;
var map__39605__$1 = ((((!((map__39605 == null)))?((((map__39605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39605):map__39605);
var state_event = map__39605__$1;
var event_type = cljs.core.get.call(null,map__39605__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var or__10219__auto__ = (cljs.core._EQ_.call(null,event_type,new cljs.core.Keyword(null,"new-segment","new-segment",-1974816380))) && (cljs.core._EQ_.call(null,trigger_state,cljs.core.first.call(null,threshold)));
if(or__10219__auto__){
return or__10219__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.timer_fire_QMARK_ = (function onyx$triggers$timer_fire_QMARK_(trigger,p__39608,state_event){
var vec__39612 = p__39608;
var fire_QMARK_ = cljs.core.nth.call(null,vec__39612,(0),null);
var _ = cljs.core.nth.call(null,vec__39612,(1),null);
return fire_QMARK_;
});
onyx.triggers.punctuation_fire_QMARK_ = (function onyx$triggers$punctuation_fire_QMARK_(trigger,state,state_event){
return new cljs.core.Keyword(null,"fire?","fire?",-1924029271).cljs$core$IFn$_invoke$arity$1(state);
});
onyx.triggers.watermark_fire_QMARK_ = (function onyx$triggers$watermark_fire_QMARK_(trigger,trigger_state,p__39615){
var map__39618 = p__39615;
var map__39618__$1 = ((((!((map__39618 == null)))?((((map__39618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39618):map__39618);
var state_event = map__39618__$1;
var upper_bound = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816));
var event_type = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var segment = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var window = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"window","window",724519534));
var or__10219__auto__ = (function (){var and__10207__auto__ = segment;
if(cljs.core.truth_(and__10207__auto__)){
return onyx.triggers.exceeds_watermark_QMARK_.call(null,window,upper_bound,segment);
} else {
return and__10207__auto__;
}
})();
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.percentile_watermark_fire_QMARK_ = (function onyx$triggers$percentile_watermark_fire_QMARK_(trigger,trigger_state,p__39620){
var map__39623 = p__39620;
var map__39623__$1 = ((((!((map__39623 == null)))?((((map__39623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39623):map__39623);
var lower_bound = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"lower-bound","lower-bound",153632489));
var upper_bound = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"upper-bound","upper-bound",1562892816));
var event_type = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var segment = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"segment","segment",-964921196));
var window = cljs.core.get.call(null,map__39623__$1,new cljs.core.Keyword(null,"window","window",724519534));
var or__10219__auto__ = (function (){var and__10207__auto__ = segment;
if(cljs.core.truth_(and__10207__auto__)){
return onyx.triggers.exceeds_percentile_watermark_QMARK_.call(null,window,trigger,lower_bound,upper_bound,segment);
} else {
return and__10207__auto__;
}
})();
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job-completed","job-completed",629265890),null,new cljs.core.Keyword(null,"recovered","recovered",-2003051022),null], null), null).call(null,event_type);
}
});
onyx.triggers.segment = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.segment_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.segment_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.segment_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.segment_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.segment', onyx.triggers.segment);
onyx.triggers.timer = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.timer_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.timer_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.timer_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.timer_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.timer', onyx.triggers.timer);
onyx.triggers.punctuation = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.punctuation_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.punctuation_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.punctuation_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.punctuation_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.punctuation', onyx.triggers.punctuation);
onyx.triggers.watermark = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.watermark_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.watermark_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.watermark_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.watermark_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.watermark', onyx.triggers.watermark);
onyx.triggers.percentile_watermark = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("trigger","init-state","trigger/init-state",1701233828),onyx.triggers.percentile_watermark_init_state,new cljs.core.Keyword("trigger","init-locals","trigger/init-locals",-1757731138),onyx.triggers.percentile_watermark_init_locals,new cljs.core.Keyword("trigger","next-state","trigger/next-state",1843587884),onyx.triggers.percentile_watermark_next_state,new cljs.core.Keyword("trigger","trigger-fire?","trigger/trigger-fire?",1005631648),onyx.triggers.percentile_watermark_fire_QMARK_], null);
goog.exportSymbol('onyx.triggers.percentile_watermark', onyx.triggers.percentile_watermark);

//# sourceMappingURL=triggers.js.map