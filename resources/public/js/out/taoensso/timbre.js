// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(33),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.33);
}
/**
 * Default (fn [data]) -> string output fn.
 *   You can modify default options with `(partial default-output-fn <opts-map>)`.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var args35587 = [];
var len__26950__auto___35595 = arguments.length;
var i__26951__auto___35596 = (0);
while(true){
if((i__26951__auto___35596 < len__26950__auto___35595)){
args35587.push((arguments[i__26951__auto___35596]));

var G__35597 = (i__26951__auto___35596 + (1));
i__26951__auto___35596 = G__35597;
continue;
} else {
}
break;
}

var G__35589 = args35587.length;
switch (G__35589) {
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35587.length)].join('')));

}
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
return taoensso.timbre.default_output_fn.call(null,null,data);
});

taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (p__35590,data){
var map__35591 = p__35590;
var map__35591__$1 = ((((!((map__35591 == null)))?((((map__35591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591):map__35591);
var opts = map__35591__$1;
var no_stacktrace_QMARK_ = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694));
var stacktrace_fonts = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
var map__35593 = data;
var map__35593__$1 = ((((!((map__35593 == null)))?((((map__35593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35593):map__35593);
var level = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err_ = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"?err_","?err_",789480858));
var vargs_ = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var msg_ = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var hostname_ = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__35593__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.name.call(null,level))),cljs.core.str(" "),cljs.core.str("["),cljs.core.str((function (){var or__25880__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return "?";
}
})()),cljs.core.str(":"),cljs.core.str((function (){var or__25880__auto__ = _QMARK_line;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return "?";
}
})()),cljs.core.str("] - "),cljs.core.str(cljs.core.force.call(null,msg_)),cljs.core.str((cljs.core.truth_(no_stacktrace_QMARK_)?null:(function (){var temp__4425__auto__ = cljs.core.force.call(null,_QMARK_err_);
if(cljs.core.truth_(temp__4425__auto__)){
var err = temp__4425__auto__;
return [cljs.core.str("\n"),cljs.core.str(taoensso.timbre.stacktrace.call(null,err,opts))].join('');
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
 *    :async?          ; Dispatch using agent? Useful for slow appenders
 *    :rate-limit      ; [[ncalls-limit window-ms] <...>], or nil
 *    :output-fn       ; Optional override for inherited (fn [data]) -> string
 *    :fn              ; (fn [data]) -> side effects, with keys described below
 * 
 *  An appender's fn takes a single data map with keys:
 *    :config          ; Entire config map (this map, etc.)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 * 
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Keyword
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :?ns-str         ; String, or nil
 *    :?file           ; String, or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 * 
 *    :?err_           ; Delay - first-arg platform error, or nil
 *    :vargs_          ; Delay - raw args vector
 *    :hostname_       ; Delay - string (clj only)
 *    :msg_            ; Delay - args string
 *    :timestamp_      ; Delay - string
 *    :output-fn       ; (fn [data]) -> formatted output string
 *                     ; (see `default-output-fn` for details)
 * 
 *    :context         ; *context* value at log time (see `with-context`)
 *    :profile-stats   ; From `profile` macro
 * 
 *   MIDDLEWARE
 *  Middleware are simple (fn [data]) -> ?data fns (applied left->right) that
 *  transform the data map dispatched to appender fns. If any middleware returns
 *  nil, NO dispatching will occur (i.e. the event will be filtered).
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
var args__26957__auto__ = [];
var len__26950__auto___35601 = arguments.length;
var i__26951__auto___35602 = (0);
while(true){
if((i__26951__auto___35602 < len__26950__auto___35601)){
args__26957__auto__.push((arguments[i__26951__auto___35602]));

var G__35603 = (i__26951__auto___35602 + (1));
i__26951__auto___35602 = G__35603;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((1) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26958__auto__);
});

taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args);
});

taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq35599){
var G__35600 = cljs.core.first.call(null,seq35599);
var seq35599__$1 = cljs.core.next.call(null,seq35599);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35600,seq35599__$1);
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
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}));
});
taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
taoensso.timbre.scored_levels = cljs.core.zipmap.call(null,taoensso.timbre.ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
taoensso.timbre.valid_levels = cljs.core.set.call(null,taoensso.timbre.ordered_levels);
taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(level){
var or__25880__auto__ = taoensso.timbre.valid_levels.call(null,level);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid logging level: "),cljs.core.str(level)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));
}
});
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,x))) >= cljs.core.long$.call(null,taoensso.timbre.scored_levels.call(null,taoensso.timbre.valid_level.call(null,y))));
});
/**
 * (fn [whitelist blacklist]) -> (fn [ns]) -> ?unfiltered-ns
 */
taoensso.timbre.compile_ns_filters = (function (){var __GT_re_pattern = (function (x){
if(cljs.core.truth_(taoensso.encore.re_pattern_QMARK_.call(null,x))){
return x;
} else {
if(typeof x === 'string'){
var s = clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str("$")].join(''),".","\\."),"*","(.*)");
return cljs.core.re_pattern.call(null,s);
} else {
throw cljs.core.ex_info.call(null,"No matching clause",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
return taoensso.encore.memoize_.call(null,((function (__GT_re_pattern){
return (function (whitelist,blacklist){
var whitelist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,whitelist);
var blacklist_STAR_ = cljs.core.mapv.call(null,__GT_re_pattern,blacklist);
var white_filter = ((cljs.core.empty_QMARK_.call(null,whitelist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (ns){
return cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,__GT_re_pattern){
return (function (p1__35604_SHARP_){
return cljs.core.re_find.call(null,p1__35604_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))
,whitelist_STAR_);
});})(whitelist_STAR_,blacklist_STAR_,__GT_re_pattern))

);
var black_filter = ((cljs.core.empty_QMARK_.call(null,blacklist_STAR_))?((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return true;
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
:((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (ns){
return cljs.core.not.call(null,cljs.core.some.call(null,((function (whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern){
return (function (p1__35605_SHARP_){
return cljs.core.re_find.call(null,p1__35605_SHARP_,ns);
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))
,blacklist_STAR_));
});})(whitelist_STAR_,blacklist_STAR_,white_filter,__GT_re_pattern))

);
return ((function (whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern){
return (function (ns){
if(cljs.core.truth_((function (){var and__25868__auto__ = white_filter.call(null,ns);
if(cljs.core.truth_(and__25868__auto__)){
return black_filter.call(null,ns);
} else {
return and__25868__auto__;
}
})())){
return ns;
} else {
return null;
}
});
;})(whitelist_STAR_,blacklist_STAR_,white_filter,black_filter,__GT_re_pattern))
});})(__GT_re_pattern))
);
})();
/**
 * (fn [whitelist blacklist ns]) -> ?unfiltered-ns
 */
taoensso.timbre.ns_filter = taoensso.encore.memoize_.call(null,(function (whitelist,blacklist,ns){
if(cljs.core.truth_((function (){var __x = ns;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e35606){if((e35606 instanceof Error)){
var __t = e35606;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"(string? ns)",__x,__t,null);
} else {
throw e35606;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? ns)"));
}

return taoensso.timbre.compile_ns_filters.call(null,whitelist,blacklist).call(null,ns);
}));
taoensso.timbre.__GT_delay = (function taoensso$timbre$__GT_delay(x){
if(cljs.core.delay_QMARK_.call(null,x)){
return x;
} else {
return (new cljs.core.Delay((function (){
return x;
}),null));
}
});
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
/**
 * Used for rate limiters, some appenders (e.g. Carmine), etc.
 *   Goal: (hash data-1) = (hash data-2) iff data-1 "the same" as data-2 for
 *   rate-limiting purposes, etc.
 */
taoensso.timbre.default_data_hash_fn = (function taoensso$timbre$default_data_hash_fn(data){
var map__35609 = data;
var map__35609__$1 = ((((!((map__35609 == null)))?((((map__35609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35609):map__35609);
var _QMARK_hash_arg = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229));
var _QMARK_ns_str = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_line = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var vargs_ = cljs.core.get.call(null,map__35609__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
return [cljs.core.str((function (){var or__25880__auto__ = _QMARK_hash_arg;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_ns_str,(function (){var or__25880__auto____$1 = _QMARK_line;
if(cljs.core.truth_(or__25880__auto____$1)){
return or__25880__auto____$1;
} else {
return cljs.core.deref.call(null,vargs_);
}
})()], null);
}
})())].join('');
});
if(typeof taoensso.timbre.get_rate_limiter !== 'undefined'){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.memoize_.call(null,(function (appender_id,specs){
return taoensso.encore.rate_limiter_STAR_.call(null,specs);
}));
}
taoensso.timbre.inherit_over = (function taoensso$timbre$inherit_over(k,appender,config,default$){
var or__25880__auto__ = (function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})();
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
var or__25880__auto____$1 = cljs.core.get.call(null,config,k);
if(cljs.core.truth_(or__25880__auto____$1)){
return or__25880__auto____$1;
} else {
return default$;
}
}
});
taoensso.timbre.inherit_into = (function taoensso$timbre$inherit_into(k,appender,config,default$){
return cljs.core.merge.call(null,default$,cljs.core.get.call(null,config,k),(function (){var a = cljs.core.get.call(null,appender,k);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))){
return null;
} else {
return a;
}
})());
});
/**
 * General-purpose dynamic logging context. Context will be included in appender
 *   data map at logging time.
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * Runtime check: would Timbre currently log at the given logging level?
 *  * `?ns-str` arg required to support ns filtering
 *  * `config`  arg required to support non-global config
 */
taoensso.timbre.log_QMARK_ = (function taoensso$timbre$log_QMARK_(var_args){
var args35611 = [];
var len__26950__auto___35614 = arguments.length;
var i__26951__auto___35615 = (0);
while(true){
if((i__26951__auto___35615 < len__26950__auto___35614)){
args35611.push((arguments[i__26951__auto___35615]));

var G__35616 = (i__26951__auto___35615 + (1));
i__26951__auto___35615 = G__35616;
continue;
} else {
}
break;
}

var G__35613 = args35611.length;
switch (G__35613) {
case 1:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35611.length)].join('')));

}
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.log_QMARK_.call(null,level,null,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,null);
});

taoensso.timbre.log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,config){
var config__$1 = (function (){var or__25880__auto__ = config;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var active_level = (function (){var or__25880__auto__ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword(null,"report","report",1394055010);
}
})();
var and__25868__auto__ = taoensso.timbre.level_GT__EQ_.call(null,level,active_level);
if(cljs.core.truth_(and__25868__auto__)){
var and__25868__auto____$1 = taoensso.timbre.ns_filter.call(null,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774).cljs$core$IFn$_invoke$arity$1(config__$1),new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142).cljs$core$IFn$_invoke$arity$1(config__$1),(function (){var or__25880__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return "";
}
})());
if(cljs.core.truth_(and__25868__auto____$1)){
return true;
} else {
return and__25868__auto____$1;
}
} else {
return and__25868__auto__;
}
});

taoensso.timbre.log_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * Processes vargs to extract special a0s
 */
taoensso.timbre.vargs__GT_margs = (function taoensso$timbre$vargs__GT_margs(vargs,a0_err_QMARK_){
var vec__35622 = vargs;
var v0 = cljs.core.nth.call(null,vec__35622,(0),null);
var v = vec__35622;
var vec__35623 = (cljs.core.truth_((function (){var and__25868__auto__ = a0_err_QMARK_;
if(cljs.core.truth_(and__25868__auto__)){
return taoensso.encore.error_QMARK_.call(null,v0);
} else {
return and__25868__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,taoensso.encore.vnext.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
var _QMARK_err = cljs.core.nth.call(null,vec__35623,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__35623,(1),null);
var vec__35624 = v__$1;
var v0__$1 = cljs.core.nth.call(null,vec__35624,(0),null);
var v__$2 = vec__35624;
var vec__35625 = (((cljs.core.map_QMARK_.call(null,v0__$1)) && (cljs.core.contains_QMARK_.call(null,v0__$1,new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timbre","hash","timbre/hash",-221081827).cljs$core$IFn$_invoke$arity$1(v0__$1),taoensso.encore.vnext.call(null,v__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v__$2], null));
var _QMARK_hash_arg = cljs.core.nth.call(null,vec__35625,(0),null);
var v__$3 = cljs.core.nth.call(null,vec__35625,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err,new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229),_QMARK_hash_arg,new cljs.core.Keyword(null,"vargs","vargs",-966597273),v__$3], null);
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
if(cljs.core.truth_(taoensso.timbre.log_QMARK_.call(null,level,_QMARK_ns_str,config))){
var instant_35636 = taoensso.encore.now_dt.call(null);
var context_35637 = taoensso.timbre._STAR_context_STAR_;
var a0_err_QMARK__35638 = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var margs__35639 = (new cljs.core.Delay(((function (instant_35636,context_35637,a0_err_QMARK__35638){
return (function (){
return taoensso.timbre.vargs__GT_margs.call(null,cljs.core.deref.call(null,vargs_),a0_err_QMARK__35638);
});})(instant_35636,context_35637,a0_err_QMARK__35638))
,null));
var _QMARK_err__35640 = (new cljs.core.Delay(((function (instant_35636,context_35637,a0_err_QMARK__35638,margs__35639){
return (function (){
if(cljs.core.truth_(a0_err_QMARK__35638)){
return new cljs.core.Keyword(null,"?err","?err",549653299).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__35639));
} else {
return _QMARK_err;
}
});})(instant_35636,context_35637,a0_err_QMARK__35638,margs__35639))
,null));
var _QMARK_hash_arg__35641 = (new cljs.core.Delay(((function (instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640){
return (function (){
return new cljs.core.Keyword(null,"?hash-arg","?hash-arg",1219916229).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__35639));
});})(instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640))
,null));
var vargs__35642__$1 = (new cljs.core.Delay(((function (instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641){
return (function (){
return new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,margs__35639));
});})(instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641))
,null));
var data_35643 = cljs.core.merge.call(null,_QMARK_base_data,((cljs.core.map_QMARK_.call(null,context_35637))?context_35637:null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?err_","?err_",789480858)],[instant_35636,config,_QMARK_file,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,level),_QMARK_ns_str,level,vargs__35642__$1,_QMARK_hash_arg__35641,context_35637,_QMARK_line,_QMARK_err__35640]));
var msg_fn_35644 = ((function (instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643){
return (function (vargs___$2){
if((msg_type == null)){
return null;
} else {
var temp__4425__auto__ = (function (){var __x = (function (){try{return cljs.core.deref.call(null,vargs___$2);
}catch (e35631){if((e35631 instanceof Error)){
var __t = e35631;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e35631;

}
}})();
if(cljs.core.truth_(((function (__x,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643){
return (function (__x__$1){
var or__25880__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.vector_QMARK_).call(null,__x__$1);
}
});})(__x,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643))
.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.timbre",null,"([:or nil? vector?] (clojure.core/deref vargs_))",__x,null,null);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var vargs = temp__4425__auto__;
var G__35632 = (((msg_type instanceof cljs.core.Keyword))?msg_type.fqn:null);
switch (G__35632) {
case "p":
return taoensso.timbre.str_join.call(null,vargs);

break;
case "f":
var vec__35633 = taoensso.encore.vsplit_first.call(null,vargs);
var fmt = cljs.core.nth.call(null,vec__35633,(0),null);
var args = cljs.core.nth.call(null,vec__35633,(1),null);
return taoensso.encore.format_STAR_.call(null,fmt,args);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg_type)].join('')));

}
} else {
return null;
}
}
});})(instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643))
;
var _QMARK_data_35645 = cljs.core.reduce.call(null,((function (instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644){
return (function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
});})(instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644))
,data_35643,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(config));
var _QMARK_data_35646__$1 = (function (){var temp__4425__auto__ = _QMARK_data_35645;
if(cljs.core.truth_(temp__4425__auto__)){
var data__$1 = temp__4425__auto__;
return cljs.core.merge.call(null,data__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?err_","?err_",789480858),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"?hash-arg_","?hash-arg_",-1971558602).cljs$core$IFn$_invoke$arity$1(data__$1)),new cljs.core.Keyword(null,"vargs_","vargs_",552132148),taoensso.timbre.__GT_delay.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data__$1))], null));
} else {
return null;
}
})();
var temp__4425__auto___35648 = _QMARK_data_35646__$1;
if(cljs.core.truth_(temp__4425__auto___35648)){
var data_35649__$1 = temp__4425__auto___35648;
cljs.core.reduce_kv.call(null,((function (data_35649__$1,temp__4425__auto___35648,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644,_QMARK_data_35645,_QMARK_data_35646__$1){
return (function (_,id,appender){
if(cljs.core.truth_((function (){var and__25868__auto__ = new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(and__25868__auto__)){
return taoensso.timbre.level_GT__EQ_.call(null,level,(function (){var or__25880__auto__ = new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword(null,"trace","trace",-1082747415);
}
})());
} else {
return and__25868__auto__;
}
})())){
var rate_limit_specs = new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022).cljs$core$IFn$_invoke$arity$1(appender);
var data_hash_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),appender,config,taoensso.timbre.default_data_hash_fn);
var rate_limit_okay_QMARK_ = (function (){var or__25880__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__25880__auto__){
return or__25880__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
var data_hash = data_hash_fn.call(null,data_35649__$1);
return cljs.core.not.call(null,rl_fn.call(null,data_hash));
}
})();
if(rate_limit_okay_QMARK_){
var map__35634 = appender;
var map__35634__$1 = ((((!((map__35634 == null)))?((((map__35634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35634):map__35634);
var apfn = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__35634__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var msg_ = (new cljs.core.Delay(((function (map__35634,map__35634__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_35649__$1,temp__4425__auto___35648,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644,_QMARK_data_35645,_QMARK_data_35646__$1){
return (function (){
return msg_fn_35644.call(null,new cljs.core.Keyword(null,"vargs_","vargs_",552132148).cljs$core$IFn$_invoke$arity$1(data_35649__$1));
});})(map__35634,map__35634__$1,apfn,async_QMARK_,rate_limit_specs,data_hash_fn,rate_limit_okay_QMARK_,data_35649__$1,temp__4425__auto___35648,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644,_QMARK_data_35645,_QMARK_data_35646__$1))
,null));
var output_fn = taoensso.timbre.inherit_over.call(null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),appender,config,taoensso.timbre.default_output_fn);
var data__$2 = cljs.core.merge.call(null,data_35649__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),msg_,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),msg_fn_35644,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"data-hash-fn","data-hash-fn",1552406760),data_hash_fn], null));
if(cljs.core.not.call(null,async_QMARK_)){
return apfn.call(null,data__$2);
} else {
return apfn.call(null,data__$2);
}
} else {
return null;
}
} else {
return null;
}
});})(data_35649__$1,temp__4425__auto___35648,instant_35636,context_35637,a0_err_QMARK__35638,margs__35639,_QMARK_err__35640,_QMARK_hash_arg__35641,vargs__35642__$1,data_35643,msg_fn_35644,_QMARK_data_35645,_QMARK_data_35646__$1))
,null,taoensso.encore.clj1098.call(null,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config)));
} else {
}
} else {
}

return null;
});
taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,and_form));
});
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var args__26957__auto__ = [];
var len__26950__auto___35656 = arguments.length;
var i__26951__auto___35657 = (0);
while(true){
if((i__26951__auto___35657 < len__26950__auto___35656)){
args__26957__auto__.push((arguments[i__26951__auto___35657]));

var G__35658 = (i__26951__auto___35657 + (1));
i__26951__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((1) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26958__auto__);
});

taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic = (function (err,p__35652){
var vec__35653 = p__35652;
var map__35654 = cljs.core.nth.call(null,vec__35653,(0),null);
var map__35654__$1 = ((((!((map__35654 == null)))?((((map__35654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35654):map__35654);
var opts = map__35654__$1;
var stacktrace_fonts = cljs.core.get.call(null,map__35654__$1,new cljs.core.Keyword(null,"stacktrace-fonts","stacktrace-fonts",830799382));
return [cljs.core.str(err)].join('');
});

taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = (1);

taoensso.timbre.stacktrace.cljs$lang$applyTo = (function (seq35650){
var G__35651 = cljs.core.first.call(null,seq35650);
var seq35650__$1 = cljs.core.next.call(null,seq35650);
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$variadic(G__35651,seq35650__$1);
});
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.log_QMARK_.call(null,level,[cljs.core.str(compile_time_ns)].join(''));
});
taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__26957__auto__ = [];
var len__26950__auto___35660 = arguments.length;
var i__26951__auto___35661 = (0);
while(true){
if((i__26951__auto___35661 < len__26950__auto___35660)){
args__26957__auto__.push((arguments[i__26951__auto___35661]));

var G__35662 = (i__26951__auto___35661 + (1));
i__26951__auto___35661 = G__35662;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((0) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__26958__auto__);
});

taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
});

taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0);

taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq35659){
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35659));
});

//# sourceMappingURL=timbre.js.map