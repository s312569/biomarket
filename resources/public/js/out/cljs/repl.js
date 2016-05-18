// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39296_39310 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39297_39311 = null;
var count__39298_39312 = (0);
var i__39299_39313 = (0);
while(true){
if((i__39299_39313 < count__39298_39312)){
var f_39314 = cljs.core._nth.call(null,chunk__39297_39311,i__39299_39313);
cljs.core.println.call(null,"  ",f_39314);

var G__39315 = seq__39296_39310;
var G__39316 = chunk__39297_39311;
var G__39317 = count__39298_39312;
var G__39318 = (i__39299_39313 + (1));
seq__39296_39310 = G__39315;
chunk__39297_39311 = G__39316;
count__39298_39312 = G__39317;
i__39299_39313 = G__39318;
continue;
} else {
var temp__4425__auto___39319 = cljs.core.seq.call(null,seq__39296_39310);
if(temp__4425__auto___39319){
var seq__39296_39320__$1 = temp__4425__auto___39319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39296_39320__$1)){
var c__26454__auto___39321 = cljs.core.chunk_first.call(null,seq__39296_39320__$1);
var G__39322 = cljs.core.chunk_rest.call(null,seq__39296_39320__$1);
var G__39323 = c__26454__auto___39321;
var G__39324 = cljs.core.count.call(null,c__26454__auto___39321);
var G__39325 = (0);
seq__39296_39310 = G__39322;
chunk__39297_39311 = G__39323;
count__39298_39312 = G__39324;
i__39299_39313 = G__39325;
continue;
} else {
var f_39326 = cljs.core.first.call(null,seq__39296_39320__$1);
cljs.core.println.call(null,"  ",f_39326);

var G__39327 = cljs.core.next.call(null,seq__39296_39320__$1);
var G__39328 = null;
var G__39329 = (0);
var G__39330 = (0);
seq__39296_39310 = G__39327;
chunk__39297_39311 = G__39328;
count__39298_39312 = G__39329;
i__39299_39313 = G__39330;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39331 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25643__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39331);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39331)))?cljs.core.second.call(null,arglists_39331):arglists_39331));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39301 = null;
var count__39302 = (0);
var i__39303 = (0);
while(true){
if((i__39303 < count__39302)){
var vec__39304 = cljs.core._nth.call(null,chunk__39301,i__39303);
var name = cljs.core.nth.call(null,vec__39304,(0),null);
var map__39305 = cljs.core.nth.call(null,vec__39304,(1),null);
var map__39305__$1 = ((((!((map__39305 == null)))?((((map__39305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39305):map__39305);
var doc = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39332 = seq__39300;
var G__39333 = chunk__39301;
var G__39334 = count__39302;
var G__39335 = (i__39303 + (1));
seq__39300 = G__39332;
chunk__39301 = G__39333;
count__39302 = G__39334;
i__39303 = G__39335;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39300);
if(temp__4425__auto__){
var seq__39300__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39300__$1)){
var c__26454__auto__ = cljs.core.chunk_first.call(null,seq__39300__$1);
var G__39336 = cljs.core.chunk_rest.call(null,seq__39300__$1);
var G__39337 = c__26454__auto__;
var G__39338 = cljs.core.count.call(null,c__26454__auto__);
var G__39339 = (0);
seq__39300 = G__39336;
chunk__39301 = G__39337;
count__39302 = G__39338;
i__39303 = G__39339;
continue;
} else {
var vec__39307 = cljs.core.first.call(null,seq__39300__$1);
var name = cljs.core.nth.call(null,vec__39307,(0),null);
var map__39308 = cljs.core.nth.call(null,vec__39307,(1),null);
var map__39308__$1 = ((((!((map__39308 == null)))?((((map__39308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39308):map__39308);
var doc = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39340 = cljs.core.next.call(null,seq__39300__$1);
var G__39341 = null;
var G__39342 = (0);
var G__39343 = (0);
seq__39300 = G__39340;
chunk__39301 = G__39341;
count__39302 = G__39342;
i__39303 = G__39343;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map