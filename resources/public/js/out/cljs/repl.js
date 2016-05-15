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
var seq__32329_32343 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32330_32344 = null;
var count__32331_32345 = (0);
var i__32332_32346 = (0);
while(true){
if((i__32332_32346 < count__32331_32345)){
var f_32347 = cljs.core._nth.call(null,chunk__32330_32344,i__32332_32346);
cljs.core.println.call(null,"  ",f_32347);

var G__32348 = seq__32329_32343;
var G__32349 = chunk__32330_32344;
var G__32350 = count__32331_32345;
var G__32351 = (i__32332_32346 + (1));
seq__32329_32343 = G__32348;
chunk__32330_32344 = G__32349;
count__32331_32345 = G__32350;
i__32332_32346 = G__32351;
continue;
} else {
var temp__4425__auto___32352 = cljs.core.seq.call(null,seq__32329_32343);
if(temp__4425__auto___32352){
var seq__32329_32353__$1 = temp__4425__auto___32352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32329_32353__$1)){
var c__23387__auto___32354 = cljs.core.chunk_first.call(null,seq__32329_32353__$1);
var G__32355 = cljs.core.chunk_rest.call(null,seq__32329_32353__$1);
var G__32356 = c__23387__auto___32354;
var G__32357 = cljs.core.count.call(null,c__23387__auto___32354);
var G__32358 = (0);
seq__32329_32343 = G__32355;
chunk__32330_32344 = G__32356;
count__32331_32345 = G__32357;
i__32332_32346 = G__32358;
continue;
} else {
var f_32359 = cljs.core.first.call(null,seq__32329_32353__$1);
cljs.core.println.call(null,"  ",f_32359);

var G__32360 = cljs.core.next.call(null,seq__32329_32353__$1);
var G__32361 = null;
var G__32362 = (0);
var G__32363 = (0);
seq__32329_32343 = G__32360;
chunk__32330_32344 = G__32361;
count__32331_32345 = G__32362;
i__32332_32346 = G__32363;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32364 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22576__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32364);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32364)))?cljs.core.second.call(null,arglists_32364):arglists_32364));
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
var seq__32333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32334 = null;
var count__32335 = (0);
var i__32336 = (0);
while(true){
if((i__32336 < count__32335)){
var vec__32337 = cljs.core._nth.call(null,chunk__32334,i__32336);
var name = cljs.core.nth.call(null,vec__32337,(0),null);
var map__32338 = cljs.core.nth.call(null,vec__32337,(1),null);
var map__32338__$1 = ((((!((map__32338 == null)))?((((map__32338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32338):map__32338);
var doc = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32365 = seq__32333;
var G__32366 = chunk__32334;
var G__32367 = count__32335;
var G__32368 = (i__32336 + (1));
seq__32333 = G__32365;
chunk__32334 = G__32366;
count__32335 = G__32367;
i__32336 = G__32368;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32333);
if(temp__4425__auto__){
var seq__32333__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32333__$1)){
var c__23387__auto__ = cljs.core.chunk_first.call(null,seq__32333__$1);
var G__32369 = cljs.core.chunk_rest.call(null,seq__32333__$1);
var G__32370 = c__23387__auto__;
var G__32371 = cljs.core.count.call(null,c__23387__auto__);
var G__32372 = (0);
seq__32333 = G__32369;
chunk__32334 = G__32370;
count__32335 = G__32371;
i__32336 = G__32372;
continue;
} else {
var vec__32340 = cljs.core.first.call(null,seq__32333__$1);
var name = cljs.core.nth.call(null,vec__32340,(0),null);
var map__32341 = cljs.core.nth.call(null,vec__32340,(1),null);
var map__32341__$1 = ((((!((map__32341 == null)))?((((map__32341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32341):map__32341);
var doc = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32373 = cljs.core.next.call(null,seq__32333__$1);
var G__32374 = null;
var G__32375 = (0);
var G__32376 = (0);
seq__32333 = G__32373;
chunk__32334 = G__32374;
count__32335 = G__32375;
i__32336 = G__32376;
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