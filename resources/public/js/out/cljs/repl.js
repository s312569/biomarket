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
var seq__32326_32340 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32327_32341 = null;
var count__32328_32342 = (0);
var i__32329_32343 = (0);
while(true){
if((i__32329_32343 < count__32328_32342)){
var f_32344 = cljs.core._nth.call(null,chunk__32327_32341,i__32329_32343);
cljs.core.println.call(null,"  ",f_32344);

var G__32345 = seq__32326_32340;
var G__32346 = chunk__32327_32341;
var G__32347 = count__32328_32342;
var G__32348 = (i__32329_32343 + (1));
seq__32326_32340 = G__32345;
chunk__32327_32341 = G__32346;
count__32328_32342 = G__32347;
i__32329_32343 = G__32348;
continue;
} else {
var temp__4425__auto___32349 = cljs.core.seq.call(null,seq__32326_32340);
if(temp__4425__auto___32349){
var seq__32326_32350__$1 = temp__4425__auto___32349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32326_32350__$1)){
var c__23374__auto___32351 = cljs.core.chunk_first.call(null,seq__32326_32350__$1);
var G__32352 = cljs.core.chunk_rest.call(null,seq__32326_32350__$1);
var G__32353 = c__23374__auto___32351;
var G__32354 = cljs.core.count.call(null,c__23374__auto___32351);
var G__32355 = (0);
seq__32326_32340 = G__32352;
chunk__32327_32341 = G__32353;
count__32328_32342 = G__32354;
i__32329_32343 = G__32355;
continue;
} else {
var f_32356 = cljs.core.first.call(null,seq__32326_32350__$1);
cljs.core.println.call(null,"  ",f_32356);

var G__32357 = cljs.core.next.call(null,seq__32326_32350__$1);
var G__32358 = null;
var G__32359 = (0);
var G__32360 = (0);
seq__32326_32340 = G__32357;
chunk__32327_32341 = G__32358;
count__32328_32342 = G__32359;
i__32329_32343 = G__32360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32361 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22563__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32361);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32361)))?cljs.core.second.call(null,arglists_32361):arglists_32361));
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
var seq__32330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32331 = null;
var count__32332 = (0);
var i__32333 = (0);
while(true){
if((i__32333 < count__32332)){
var vec__32334 = cljs.core._nth.call(null,chunk__32331,i__32333);
var name = cljs.core.nth.call(null,vec__32334,(0),null);
var map__32335 = cljs.core.nth.call(null,vec__32334,(1),null);
var map__32335__$1 = ((((!((map__32335 == null)))?((((map__32335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32335):map__32335);
var doc = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32362 = seq__32330;
var G__32363 = chunk__32331;
var G__32364 = count__32332;
var G__32365 = (i__32333 + (1));
seq__32330 = G__32362;
chunk__32331 = G__32363;
count__32332 = G__32364;
i__32333 = G__32365;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32330);
if(temp__4425__auto__){
var seq__32330__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32330__$1)){
var c__23374__auto__ = cljs.core.chunk_first.call(null,seq__32330__$1);
var G__32366 = cljs.core.chunk_rest.call(null,seq__32330__$1);
var G__32367 = c__23374__auto__;
var G__32368 = cljs.core.count.call(null,c__23374__auto__);
var G__32369 = (0);
seq__32330 = G__32366;
chunk__32331 = G__32367;
count__32332 = G__32368;
i__32333 = G__32369;
continue;
} else {
var vec__32337 = cljs.core.first.call(null,seq__32330__$1);
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

var G__32370 = cljs.core.next.call(null,seq__32330__$1);
var G__32371 = null;
var G__32372 = (0);
var G__32373 = (0);
seq__32330 = G__32370;
chunk__32331 = G__32371;
count__32332 = G__32372;
i__32333 = G__32373;
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