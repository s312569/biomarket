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
var args__26991__auto__ = [];
var len__26984__auto___35605 = arguments.length;
var i__26985__auto___35606 = (0);
while(true){
if((i__26985__auto___35606 < len__26984__auto___35605)){
args__26991__auto__.push((arguments[i__26985__auto___35606]));

var G__35607 = (i__26985__auto___35606 + (1));
i__26985__auto___35606 = G__35607;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__35601){
var vec__35602 = p__35601;
var _opts = cljs.core.nth.call(null,vec__35602,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__35602,_opts){
return (function (data){
var map__35603 = data;
var map__35603__$1 = ((((!((map__35603 == null)))?((((map__35603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35603):map__35603);
var output_fn = cljs.core.get.call(null,map__35603__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__35602,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq35600){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
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
var args__26991__auto__ = [];
var len__26984__auto___35616 = arguments.length;
var i__26985__auto___35617 = (0);
while(true){
if((i__26985__auto___35617 < len__26984__auto___35616)){
args__26991__auto__.push((arguments[i__26985__auto___35617]));

var G__35618 = (i__26985__auto___35617 + (1));
i__26985__auto___35617 = G__35618;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__35609){
var vec__35610 = p__35609;
var map__35611 = cljs.core.nth.call(null,vec__35610,(0),null);
var map__35611__$1 = ((((!((map__35611 == null)))?((((map__35611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35611):map__35611);
var raw_output_QMARK_ = cljs.core.get.call(null,map__35611__$1,new cljs.core.Keyword(null,"raw-output?","raw-output?",1301869164));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_((function (){var and__25902__auto__ = typeof console !== 'undefined';
if(and__25902__auto__){
return console.log;
} else {
return and__25902__auto__;
}
})())?(function (){var level__GT_logger = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(function (){var or__25914__auto__ = console.trace;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"debug","debug",-1608172596),(function (){var or__25914__auto__ = console.debug;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"info","info",-317069002),(function (){var or__25914__auto__ = console.info;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (){var or__25914__auto__ = console.warn;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__25914__auto__ = console.error;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(function (){var or__25914__auto__ = console.error;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})(),new cljs.core.Keyword(null,"report","report",1394055010),(function (){var or__25914__auto__ = console.info;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return console.log;
}
})()], null);
return ((function (level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_){
return (function (data){
var map__35613 = data;
var map__35613__$1 = ((((!((map__35613 == null)))?((((map__35613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35613):map__35613);
var level = cljs.core.get.call(null,map__35613__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__35613__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__35613__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.deref.call(null,vargs_);
var vec__35614 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__35614,(0),null);
var vnext = cljs.core.nth.call(null,vec__35614,(1),null);
var logger = level__GT_logger.call(null,level,console.log);
if(cljs.core.truth_((function (){var or__25914__auto__ = raw_output_QMARK_;
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723));
}
})())){
var output = output_fn.call(null,cljs.core.merge.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay(((function (map__35613,map__35613__$1,level,output_fn,vargs_,vargs,vec__35614,v1,vnext,logger,level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_){
return (function (){
return "";
});})(map__35613,map__35613__$1,level,output_fn,vargs_,vargs,vec__35614,v1,vnext,logger,level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_))
,null)),new cljs.core.Keyword(null,"?err_","?err_",789480858),(new cljs.core.Delay(((function (map__35613,map__35613__$1,level,output_fn,vargs_,vargs,vec__35614,v1,vnext,logger,level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_){
return (function (){
return null;
});})(map__35613,map__35613__$1,level,output_fn,vargs_,vargs,vec__35614,v1,vnext,logger,level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_))
,null))], null)));
var args = cljs.core.cons.call(null,output,cljs.core.cons.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"?err_","?err_",789480858).cljs$core$IFn$_invoke$arity$1(data)),vnext));
return logger.apply(console,cljs.core.into_array.call(null,args));
} else {
return logger.call(console,output_fn.call(null,data));
}
});
;})(level__GT_logger,vec__35610,map__35611,map__35611__$1,raw_output_QMARK_))
})():((function (vec__35610,map__35611,map__35611__$1,raw_output_QMARK_){
return (function (data){
return null;
});})(vec__35610,map__35611,map__35611__$1,raw_output_QMARK_))
)], null);
});

taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq35608){
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35608));
});
/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

//# sourceMappingURL=core.js.map