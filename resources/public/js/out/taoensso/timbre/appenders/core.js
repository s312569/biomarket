// Compiled by ClojureScript 1.8.51 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__26917__auto__ = [];
var len__26910__auto___35531 = arguments.length;
var i__26911__auto___35532 = (0);
while(true){
if((i__26911__auto___35532 < len__26910__auto___35531)){
args__26917__auto__.push((arguments[i__26911__auto___35532]));

var G__35533 = (i__26911__auto___35532 + (1));
i__26911__auto___35532 = G__35533;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__35527){
var vec__35528 = p__35527;
var _opts = cljs.core.nth.call(null,vec__35528,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__35528,_opts){
return (function (data){
var map__35529 = data;
var map__35529__$1 = ((((!((map__35529 == null)))?((((map__35529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35529):map__35529);
var output_fn = cljs.core.get.call(null,map__35529__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__35528,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq35526){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35526));
});
/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   For accurate line numbers in Chrome, add these Blackbox[1] patterns:
 *  `/taoensso/timbre/appenders/core\.js$`
 *  `/taoensso/timbre\.js$`
 *  `/cljs/core\.js$`
 * 
 *   [1] Ref. https://goo.gl/ZejSvR
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__26917__auto__ = [];
var len__26910__auto___35542 = arguments.length;
var i__26911__auto___35543 = (0);
while(true){
if((i__26911__auto___35543 < len__26910__auto___35542)){
args__26917__auto__.push((arguments[i__26911__auto___35543]));

var G__35544 = (i__26911__auto___35543 + (1));
i__26911__auto___35543 = G__35544;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__35535){
var vec__35536 = p__35535;
var map__35537 = cljs.core.nth.call(null,vec__35536,(0),null);
var map__35537__$1 = ((((!((map__35537 == null)))?((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35537):map__35537);
var raw_output_QMARK_ = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"raw-output?","raw-output?",1301869164));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_((function (){var and__25828__auto__ = typeof console !== 'undefined';
if(and__25828__auto__){
return console.log;
} else {
return and__25828__auto__;
}
})())?(function (){var level__GT_logger = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){var or__25840__auto__ = console.trace;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"debug","debug",-1608172596),(function (){var or__25840__auto__ = console.debug;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"info","info",-317069002),(function (){var or__25840__auto__ = console.info;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (){var or__25840__auto__ = console.warn;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__25840__auto__ = console.error;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(function (){var or__25840__auto__ = console.error;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"report","report",1394055010),(function (){var or__25840__auto__ = console.info;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return console.log;
}
})()], null);
return ((function (level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_){
return (function (data){
var map__35539 = data;
var map__35539__$1 = ((((!((map__35539 == null)))?((((map__35539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35539):map__35539);
var level = cljs.core.get.call(null,map__35539__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__35539__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__35539__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.deref.call(null,vargs_);
var vec__35540 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__35540,(0),null);
var vnext = cljs.core.nth.call(null,vec__35540,(1),null);
var logger = level__GT_logger.call(null,level,console.log);
if(cljs.core.truth_((function (){var or__25840__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723));
}
})())){
var output = output_fn.call(null,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__35539,map__35539__$1,level,output_fn,vargs_,vargs,vec__35540,v1,vnext,logger,level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__35539,map__35539__$1,level,output_fn,vargs_,vargs,vec__35540,v1,vnext,logger,level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_))
,null)),new cljs.core.Keyword(null,"?err_","?err_",789480858),(new cljs.core.Delay(((function (map__35539,map__35539__$1,level,output_fn,vargs_,vargs,vec__35540,v1,vnext,logger,level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__35539,map__35539__$1,level,output_fn,vargs_,vargs,vec__35540,v1,vnext,logger,level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_))
,null))], null)));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data)),vnext));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,output_fn.call(null,data));
}
});
;})(level__GT_logger,vec__35536,map__35537,map__35537__$1,raw_output_QMARK_))
})():((function (vec__35536,map__35537,map__35537__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__35536,map__35537,map__35537__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq35534){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35534));
});
/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map