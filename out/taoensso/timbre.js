// Compiled by ClojureScript 1.9.542 {}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(87),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.87);
}
/**
 * Default (fn [data]) -> string output fn.
 *   Use`(partial default-output-fn <opts-map>)` to modify default opts.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args35365 = [];
var len__11440__auto___35372 = arguments.length;
var i__11441__auto___35373 = (0);
while(true){
if((i__11441__auto___35373 < len__11440__auto___35372)){
args35365.push((arguments[i__11441__auto___35373]));

var G__35374 = (i__11441__auto___35373 + (1));
i__11441__auto___35373 = G__35374;
continue;
} else {
}
break;
}

var G__35367 = args35365.length;
switch (G__35367) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35365.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (opts,data){
var map__35368 = opts;
var map__35368__$1 = ((((!((map__35368 == null)))?((((map__35368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35368):map__35368);
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__35368__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__35368__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__35369 = data;
var map__35369__$1 = ((((!((map__35369 == null)))?((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35369):map__35369);
var level = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.name.call(null,level))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10219__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return "?";
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10219__auto__ = _QMARK_line;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return "?";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("] - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force.call(null,msg_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__6738__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__6738__auto__)){
var err = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
} else {
return null;
}
})()))].join('');
});

taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2;


taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Example (+default) Timbre v4 config map.
 * 
 *   APPENDERS
 *  An appender is a map with keys:
 *    :min-level       ; Level keyword, or nil (=> no minimum level)
 *    :enabled?        ;
 *    :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :timestamp-opts  ; Optional override for inherited {:pattern _ :locale _ :timezone _} (clj only)
 *    :ns-whitelist    ; Optional, stacks with active config's whitelist
 *    :ns-blacklist    ; Optional, stacks with active config's blacklist
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :vargs           ; Vector of raw args
 *    :output_         ; Forceable - final formatted output string created
 *                     ; by calling (output-fn <this-data-map>)
 *    :msg_            ; Forceable - args as a string
 *    :timestamp_      ; Forceable - string (clj only)
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 *    :context         ; *context* value at log time (see `with-context`)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware
 *  returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *   The `example-config` source code contains further settings and details.
 *   See also `set-config!`, `merge-config!`, `set-level!`.
 */
taoensso.timbre.example_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)], null);
if(typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined'){
} else {
/**
 * See `example-config` for info.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.example_config;
}
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__11447__auto__ = [];
var len__11440__auto___35378 = arguments.length;
var i__11441__auto___35379 = (0);
while(true){
if((i__11441__auto___35379 < len__11440__auto___35378)){
args__11447__auto__.push((arguments[i__11441__auto___35379]));

var G__35380 = (i__11441__auto___35379 + (1));
i__11441__auto___35379 = G__35380;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq35376){
var G__35377 = cljs.core.first.call(null,seq35376);
var seq35376__$1 = cljs.core.next.call(null,seq35376);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35377,seq35376__$1);
});

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return m;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(m){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,m);
}));
});
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"level","level",1290497552),level);
}));
});
taoensso.timbre._levels_vec = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
taoensso.timbre._levels_set = cljs.core.set.call(null,taoensso.timbre._levels_vec);
taoensso.timbre._levels_map = cljs.core.zipmap.call(null,taoensso.timbre._levels_vec,cljs.core.next.call(null,cljs.core.range.call(null)));
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(taoensso.timbre._levels_set.call(null,x))){
return true;
} else {
return false;
}
});
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
var or__10219__auto__ = taoensso.timbre._levels_set.call(null,x);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
throw cljs.core.ex_info.call(null,"Invalid Timbre logging level",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),x], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (taoensso.timbre._levels_map.call(null,taoensso.timbre.valid_level.call(null,x)) >= taoensso.timbre._levels_map.call(null,taoensso.timbre.valid_level.call(null,y)));
});
taoensso.timbre._compile_ns_filter = taoensso.encore.memoize_.call(null,taoensso.encore.compile_ns_filter);
/**
 * Returns true iff given ns passes white/black lists.
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_.call(null,(function (whitelist,blacklist,_QMARK_ns){
return taoensso.timbre._compile_ns_filter.call(null,whitelist,blacklist).call(null,_QMARK_ns);
}));
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var args35381 = [];
var len__11440__auto___35384 = arguments.length;
var i__11441__auto___35385 = (0);
while(true){
if((i__11441__auto___35385 < len__11440__auto___35384)){
args35381.push((arguments[i__11441__auto___35385]));

var G__35386 = (i__11441__auto___35385 + (1));
i__11441__auto___35385 = G__35386;
continue;
} else {
}
break;
}

var G__35383 = args35381.length;
switch (G__35383) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35381.length)].join('')));

}
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.call(null,level,null,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.call(null,level,_QMARK_ns_str,null);
});

taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__10219__auto__ = _QMARK_config;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"report","report",1394055010));
var and__10207__auto__ = taoensso.timbre.level_GT__EQ_.call(null,level,min_level);
if(cljs.core.truth_(and__10207__auto__)){
return (cljs.core.boolean$.call(null,taoensso.timbre.ns_filter.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774)),cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142)),_QMARK_ns_str))) && (true);
} else {
return and__10207__auto__;
}
});

taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.timbre.str_join = (function taoensso$timbre$str_join(xs){
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,(function (x){
var x__$1 = taoensso.encore.nil__GT_str.call(null,x);
if(cljs.core.record_QMARK_.call(null,x__$1)){
return cljs.core.pr_str.call(null,x__$1);
} else {
return x__$1;

}
})),xs);
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_.call(null,(function (appender_id,specs){
return taoensso.encore.limiter.call(null,specs);
}));
}
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
taoensso.timbre.vrest = (function taoensso$timbre$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var fmt_msg_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552));
var vec__35397 = vargs;
var v0 = cljs.core.nth.call(null,vec__35397,(0),null);
if(cljs.core.truth_((function (){var and__10207__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__10207__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__10207__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.timbre.vrest.call(null,vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__35400 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__35400,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__10207__auto__ = cljs.core.map_QMARK_.call(null,v0);
if(and__10207__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v0));
} else {
return and__10207__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__10219__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.call(null,_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.timbre.vrest.call(null,vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__35403 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__35403,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.timbre.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var args35406 = [];
var len__11440__auto___35417 = arguments.length;
var i__11441__auto___35418 = (0);
while(true){
if((i__11441__auto___35418 < len__11440__auto___35417)){
args35406.push((arguments[i__11441__auto___35418]));

var G__35419 = (i__11441__auto___35418 + (1));
i__11441__auto___35418 = G__35419;
continue;
} else {
}
break;
}

var G__35408 = args35406.length;
switch (G__35408) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35406.length)].join('')));

}
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null);
});

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
if(taoensso.timbre.may_log_QMARK_.call(null,level,_QMARK_ns_str,config)){
var instant_35421 = taoensso.encore.now_dt.call(null);
var context_35422 = taoensso.timbre._STAR_context_STAR_;
var vargs_35423 = cljs.core.deref.call(null,vargs_);
var vec__35409_35424 = taoensso.timbre.parse_vargs.call(null,_QMARK_err,msg_type,vargs_35423);
var _QMARK_err_35425__$1 = cljs.core.nth.call(null,vec__35409_35424,(0),null);
var _QMARK_meta_35426 = cljs.core.nth.call(null,vec__35409_35424,(1),null);
var _QMARK_msg_fmt_35427 = cljs.core.nth.call(null,vec__35409_35424,(2),null);
var vargs_35428__$1 = cljs.core.nth.call(null,vec__35409_35424,(3),null);
var data_35429 = cljs.core.conj.call(null,(function (){var or__10219__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891)],[instant_35421,config,vargs_35428__$1,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,_QMARK_err_35425__$1,context_35422,_QMARK_line,(new cljs.core.Delay(((function (instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1){
return (function (){
return _QMARK_err_35425__$1;
});})(instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1))
,null)),_QMARK_meta_35426,_QMARK_msg_fmt_35427]));
var _QMARK_data_35430 = cljs.core.reduce.call(null,((function (instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429){
return (function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
});})(instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429))
,data_35429,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var temp__6738__auto___35431 = _QMARK_data_35430;
if(cljs.core.truth_(temp__6738__auto___35431)){
var data_35432__$1 = temp__6738__auto___35431;
var map__35412_35433 = data_35432__$1;
var map__35412_35434__$1 = ((((!((map__35412_35433 == null)))?((((map__35412_35433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35412_35433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35412_35433):map__35412_35433);
var vargs_35435__$2 = cljs.core.get.call(null,map__35412_35434__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_35436__$2 = cljs.core.assoc.call(null,data_35432__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148),(new cljs.core.Delay(((function (map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430){
return (function (){
return vargs_35435__$2;
});})(map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430))
,null)));
var data_35437__$3 = taoensso.encore.assoc_nx.call(null,data_35436__$2,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430){
return (function (){
var G__35414 = msg_type;
if(cljs.core._EQ_.call(null,null,G__35414)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),G__35414)){
return taoensso.timbre.str_join.call(null,vargs_35435__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),G__35414)){
if(typeof _QMARK_msg_fmt_35427 === 'string'){
} else {
throw cljs.core.ex_info.call(null,"Timbre format-style logging call without a format pattern (string)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"location","location",1815599388),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10219__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
var or__10219__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__10219__auto____$1)){
return or__10219__auto____$1;
} else {
return "?";
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10219__auto__ = _QMARK_line;
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return "?";
}
})())].join('')], null));
}

return taoensso.encore.format_STAR_.call(null,_QMARK_msg_fmt_35427,vargs_35435__$2);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_type)].join('')));

}
}
}
});})(map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430))
,null)),new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay(((function (map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430){
return (function (){
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsite_id,_QMARK_msg_fmt_35427,cljs.core.get.call(null,_QMARK_meta_35426,new cljs.core.Keyword(null,"hash","hash",-13781596),vargs_35435__$2)], null));
});})(map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430))
,null)));
var output_fn1_35438 = taoensso.encore.memoize_.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
cljs.core.reduce_kv.call(null,((function (map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35437__$3,output_fn1_35438,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__10207__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__10207__auto__)){
return taoensso.timbre.level_GT__EQ_.call(null,level,(function (){var or__10219__auto__ = new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__10219__auto__)){
return or__10219__auto__;
} else {
return new cljs.core.Keyword(null,"trace","trace",-1082747415);
}
})());
} else {
return and__10207__auto__;
}
})())){
if(cljs.core.truth_(taoensso.timbre.ns_filter.call(null,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774).cljs$core$IFn$_invoke$arity$1(appender),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142).cljs$core$IFn$_invoke$arity$1(appender),_QMARK_ns_str))){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var rate_limit_okay_QMARK_ = (function (){var or__10219__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__10219__auto__){
return or__10219__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
return cljs.core.not.call(null,rl_fn.call(null,cljs.core.force.call(null,new cljs.core.Keyword(null,"hash_","hash_",-827203612).cljs$core$IFn$_invoke$arity$1(data_35437__$3))));
}
})();
if(rate_limit_okay_QMARK_){
var map__35415 = appender;
var map__35415__$1 = ((((!((map__35415 == null)))?((((map__35415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35415):map__35415);
var apfn = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var output_fn = (function (){var f = new cljs.core.Keyword(null,"output-fn","output-fn",1600951539).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_((function (){var or__10219__auto__ = (f == null);
if(or__10219__auto__){
return or__10219__auto__;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"inherit","inherit",-1840815422));
}
})())){
return output_fn1_35438;
} else {
return f;
}
})();
var output_ = (new cljs.core.Delay(((function (map__35415,map__35415__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35437__$3,output_fn1_35438,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430){
return (function (){
return output_fn.call(null,data_35437__$3);
});})(map__35415,map__35415__$1,apfn,async_QMARK_,output_fn,rate_limit_specs,rate_limit_okay_QMARK_,map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35437__$3,output_fn1_35438,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430))
,null));
var data__$4 = cljs.core.conj.call(null,data_35437__$3,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_], null));
var _QMARK_data__$1 = (function (){var temp__6736__auto__ = new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__6736__auto__)){
var mfn = temp__6736__auto__;
return mfn.call(null,data__$4);
} else {
return data__$4;
}
})();
var temp__6738__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__6738__auto____$1)){
var data__$5 = temp__6738__auto____$1;
return apfn.call(null,data__$5);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});})(map__35412_35433,map__35412_35434__$1,vargs_35435__$2,data_35436__$2,data_35437__$3,output_fn1_35438,data_35432__$1,temp__6738__auto___35431,instant_35421,context_35422,vargs_35423,vec__35409_35424,_QMARK_err_35425__$1,_QMARK_meta_35426,_QMARK_msg_fmt_35427,vargs_35428__$1,data_35429,_QMARK_data_35430))
,null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
} else {
}
} else {
}

return null;
});

taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 10;

taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args35439 = [];
var len__11440__auto___35442 = arguments.length;
var i__11441__auto___35443 = (0);
while(true){
if((i__11441__auto___35443 < len__11440__auto___35442)){
args35439.push((arguments[i__11441__auto___35443]));

var G__35444 = (i__11441__auto___35443 + (1));
i__11441__auto___35443 = G__35444;
continue;
} else {
}
break;
}

var G__35441 = args35439.length;
switch (G__35441) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35439.length)].join('')));

}
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.call(null,err,null);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2;

taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = taoensso.timbre._levels_vec;

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.call(null,level,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns)].join(''));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__11447__auto__ = [];
var len__11440__auto___35447 = arguments.length;
var i__11441__auto___35448 = (0);
while(true){
if((i__11441__auto___35448 < len__11440__auto___35447)){
args__11447__auto__.push((arguments[i__11441__auto___35448]));

var G__35449 = (i__11441__auto___35448 + (1));
i__11441__auto___35448 = G__35449;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((0) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__11448__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq35446){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35446));
});


//# sourceMappingURL=timbre.js.map