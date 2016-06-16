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
var seq__39598_39612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39599_39613 = null;
var count__39600_39614 = (0);
var i__39601_39615 = (0);
while(true){
if((i__39601_39615 < count__39600_39614)){
var f_39616 = cljs.core._nth.call(null,chunk__39599_39613,i__39601_39615);
cljs.core.println.call(null,"  ",f_39616);

var G__39617 = seq__39598_39612;
var G__39618 = chunk__39599_39613;
var G__39619 = count__39600_39614;
var G__39620 = (i__39601_39615 + (1));
seq__39598_39612 = G__39617;
chunk__39599_39613 = G__39618;
count__39600_39614 = G__39619;
i__39601_39615 = G__39620;
continue;
} else {
var temp__4425__auto___39621 = cljs.core.seq.call(null,seq__39598_39612);
if(temp__4425__auto___39621){
var seq__39598_39622__$1 = temp__4425__auto___39621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39598_39622__$1)){
var c__26651__auto___39623 = cljs.core.chunk_first.call(null,seq__39598_39622__$1);
var G__39624 = cljs.core.chunk_rest.call(null,seq__39598_39622__$1);
var G__39625 = c__26651__auto___39623;
var G__39626 = cljs.core.count.call(null,c__26651__auto___39623);
var G__39627 = (0);
seq__39598_39612 = G__39624;
chunk__39599_39613 = G__39625;
count__39600_39614 = G__39626;
i__39601_39615 = G__39627;
continue;
} else {
var f_39628 = cljs.core.first.call(null,seq__39598_39622__$1);
cljs.core.println.call(null,"  ",f_39628);

var G__39629 = cljs.core.next.call(null,seq__39598_39622__$1);
var G__39630 = null;
var G__39631 = (0);
var G__39632 = (0);
seq__39598_39612 = G__39629;
chunk__39599_39613 = G__39630;
count__39600_39614 = G__39631;
i__39601_39615 = G__39632;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39633 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25840__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39633);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39633)))?cljs.core.second.call(null,arglists_39633):arglists_39633));
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
var seq__39602 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39603 = null;
var count__39604 = (0);
var i__39605 = (0);
while(true){
if((i__39605 < count__39604)){
var vec__39606 = cljs.core._nth.call(null,chunk__39603,i__39605);
var name = cljs.core.nth.call(null,vec__39606,(0),null);
var map__39607 = cljs.core.nth.call(null,vec__39606,(1),null);
var map__39607__$1 = ((((!((map__39607 == null)))?((((map__39607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39607):map__39607);
var doc = cljs.core.get.call(null,map__39607__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39607__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39634 = seq__39602;
var G__39635 = chunk__39603;
var G__39636 = count__39604;
var G__39637 = (i__39605 + (1));
seq__39602 = G__39634;
chunk__39603 = G__39635;
count__39604 = G__39636;
i__39605 = G__39637;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39602);
if(temp__4425__auto__){
var seq__39602__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39602__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__39602__$1);
var G__39638 = cljs.core.chunk_rest.call(null,seq__39602__$1);
var G__39639 = c__26651__auto__;
var G__39640 = cljs.core.count.call(null,c__26651__auto__);
var G__39641 = (0);
seq__39602 = G__39638;
chunk__39603 = G__39639;
count__39604 = G__39640;
i__39605 = G__39641;
continue;
} else {
var vec__39609 = cljs.core.first.call(null,seq__39602__$1);
var name = cljs.core.nth.call(null,vec__39609,(0),null);
var map__39610 = cljs.core.nth.call(null,vec__39609,(1),null);
var map__39610__$1 = ((((!((map__39610 == null)))?((((map__39610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39610):map__39610);
var doc = cljs.core.get.call(null,map__39610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39610__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39642 = cljs.core.next.call(null,seq__39602__$1);
var G__39643 = null;
var G__39644 = (0);
var G__39645 = (0);
seq__39602 = G__39642;
chunk__39603 = G__39643;
count__39604 = G__39644;
i__39605 = G__39645;
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