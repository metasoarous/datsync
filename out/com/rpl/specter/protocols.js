// Compiled by ClojureScript 1.9.542 {}
goog.provide('com.rpl.specter.protocols');
goog.require('cljs.core');

/**
 * Do not use this protocol directly. All navigators must be created using macros
 *   in com.rpl.specter namespace.
 * @interface
 */
com.rpl.specter.protocols.RichNavigator = function(){};

/**
 * An implementation of `select*` must call `next-fn` on each
 *   subvalue of `structure`. The result of `select*` is specified
 *   as follows:
 * 
 *   1. `NONE` if `next-fn` never called
 *   2. `NONE` if all calls to `next-fn` return `NONE`
 *   3. Otherwise, any non-`NONE` return value from calling `next-fn`
 *   
 */
com.rpl.specter.protocols.select_STAR_ = (function com$rpl$specter$protocols$select_STAR_(this$,vals,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 == null)))){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(this$,vals,structure,next_fn);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (com.rpl.specter.protocols.select_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,vals,structure,next_fn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.protocols.select_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,vals,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"RichNavigator.select*",this$);
}
}
}
});

/**
 * An implementation of `transform*` must use `next-fn` to transform
 *   any subvalues of `structure` and then merge those transformed values
 *   back into `structure`. Everything else in `structure` must be unchanged.
 */
com.rpl.specter.protocols.transform_STAR_ = (function com$rpl$specter$protocols$transform_STAR_(this$,vals,structure,next_fn){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 == null)))){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(this$,vals,structure,next_fn);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (com.rpl.specter.protocols.transform_STAR_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,vals,structure,next_fn);
} else {
var m__10938__auto____$1 = (com.rpl.specter.protocols.transform_STAR_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,vals,structure,next_fn);
} else {
throw cljs.core.missing_protocol.call(null,"RichNavigator.transform*",this$);
}
}
}
});


/**
 * Do not use this protocol directly. All navigators must be created using
 *   macros in com.rpl.specter namespace.
 * @interface
 */
com.rpl.specter.protocols.Collector = function(){};

com.rpl.specter.protocols.collect_val = (function com$rpl$specter$protocols$collect_val(this$,structure){
if((!((this$ == null))) && (!((this$.com$rpl$specter$protocols$Collector$collect_val$arity$2 == null)))){
return this$.com$rpl$specter$protocols$Collector$collect_val$arity$2(this$,structure);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (com.rpl.specter.protocols.collect_val[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,structure);
} else {
var m__10938__auto____$1 = (com.rpl.specter.protocols.collect_val["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,structure);
} else {
throw cljs.core.missing_protocol.call(null,"Collector.collect-val",this$);
}
}
}
});


/**
 * @interface
 */
com.rpl.specter.protocols.ImplicitNav = function(){};

com.rpl.specter.protocols.implicit_nav = (function com$rpl$specter$protocols$implicit_nav(obj){
if((!((obj == null))) && (!((obj.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 == null)))){
return obj.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1(obj);
} else {
var x__10937__auto__ = (((obj == null))?null:obj);
var m__10938__auto__ = (com.rpl.specter.protocols.implicit_nav[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,obj);
} else {
var m__10938__auto____$1 = (com.rpl.specter.protocols.implicit_nav["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ImplicitNav.implicit-nav",obj);
}
}
}
});


//# sourceMappingURL=protocols.js.map