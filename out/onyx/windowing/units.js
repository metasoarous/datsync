// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.windowing.units');
goog.require('cljs.core');
if(typeof onyx.windowing.units.standard_units_for !== 'undefined'){
} else {
onyx.windowing.units.standard_units_for = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.windowing.units","standard-units-for"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (unit){
return unit;
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),(function (unit){
return new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512);
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"seconds","seconds",-445266194),(function (unit){
return new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512);
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"minutes","minutes",1319166394),(function (unit){
return new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512);
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"hours","hours",58380855),(function (unit){
return new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512);
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"days","days",-1394072564),(function (unit){
return new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512);
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"elements","elements",657646735),(function (unit){
return new cljs.core.Keyword(null,"elements","elements",657646735);
}));
if(typeof onyx.windowing.units.to_standard_units !== 'undefined'){
} else {
onyx.windowing.units.to_standard_units = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"onyx.windowing.units","to-standard-units"),((function (method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__){
return (function (v,unit){
return unit;
});})(method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__,hierarchy__11254__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512),(function (v,unit){
return v;
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"seconds","seconds",-445266194),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,((1000) * v),new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"minutes","minutes",1319166394),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,((60) * v),new cljs.core.Keyword(null,"seconds","seconds",-445266194));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"hours","hours",58380855),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,((60) * v),new cljs.core.Keyword(null,"minutes","minutes",1319166394));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"days","days",-1394072564),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,((24) * v),new cljs.core.Keyword(null,"hours","hours",58380855));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"elements","elements",657646735),(function (v,unit){
return v;
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512));
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"second","second",-444702010),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"minute","minute",-642875969),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"hour","hour",-555989214),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"hours","hours",58380855));
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"day","day",-274800446),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"days","days",-1394072564));
}));
cljs.core._add_method.call(null,onyx.windowing.units.standard_units_for,new cljs.core.Keyword(null,"element","element",1974019749),(function (unit){
return onyx.windowing.units.standard_units_for.call(null,new cljs.core.Keyword(null,"elements","elements",657646735));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"milliseconds","milliseconds",-1238025512));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"second","second",-444702010),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"minute","minute",-642875969),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"hour","hour",-555989214),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"hours","hours",58380855));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"day","day",-274800446),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"days","days",-1394072564));
}));
cljs.core._add_method.call(null,onyx.windowing.units.to_standard_units,new cljs.core.Keyword(null,"element","element",1974019749),(function (v,unit){
return onyx.windowing.units.to_standard_units.call(null,v,new cljs.core.Keyword(null,"elements","elements",657646735));
}));

/**
 * @interface
 */
onyx.windowing.units.ICoerceKey = function(){};

onyx.windowing.units.coerce_key = (function onyx$windowing$units$coerce_key(_,units){
if((!((_ == null))) && (!((_.onyx$windowing$units$ICoerceKey$coerce_key$arity$2 == null)))){
return _.onyx$windowing$units$ICoerceKey$coerce_key$arity$2(_,units);
} else {
var x__10937__auto__ = (((_ == null))?null:_);
var m__10938__auto__ = (onyx.windowing.units.coerce_key[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,_,units);
} else {
var m__10938__auto____$1 = (onyx.windowing.units.coerce_key["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,_,units);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerceKey.coerce-key",_);
}
}
}
});

Date.prototype.onyx$windowing$units$ICoerceKey$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.onyx$windowing$units$ICoerceKey$coerce_key$arity$2 = (function (this$,units){
var this$__$1 = this;
return onyx.windowing.units.to_standard_units.call(null,this$__$1.getTime(),units);
});
(onyx.windowing.units.ICoerceKey["number"] = true);

(onyx.windowing.units.coerce_key["number"] = (function (this$,units){
return onyx.windowing.units.to_standard_units.call(null,this$,units);
}));

//# sourceMappingURL=units.js.map