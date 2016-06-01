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
var seq__39505_39519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39506_39520 = null;
var count__39507_39521 = (0);
var i__39508_39522 = (0);
while(true){
if((i__39508_39522 < count__39507_39521)){
var f_39523 = cljs.core._nth.call(null,chunk__39506_39520,i__39508_39522);
cljs.core.println.call(null,"  ",f_39523);

var G__39524 = seq__39505_39519;
var G__39525 = chunk__39506_39520;
var G__39526 = count__39507_39521;
var G__39527 = (i__39508_39522 + (1));
seq__39505_39519 = G__39524;
chunk__39506_39520 = G__39525;
count__39507_39521 = G__39526;
i__39508_39522 = G__39527;
continue;
} else {
var temp__4425__auto___39528 = cljs.core.seq.call(null,seq__39505_39519);
if(temp__4425__auto___39528){
var seq__39505_39529__$1 = temp__4425__auto___39528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39505_39529__$1)){
var c__26623__auto___39530 = cljs.core.chunk_first.call(null,seq__39505_39529__$1);
var G__39531 = cljs.core.chunk_rest.call(null,seq__39505_39529__$1);
var G__39532 = c__26623__auto___39530;
var G__39533 = cljs.core.count.call(null,c__26623__auto___39530);
var G__39534 = (0);
seq__39505_39519 = G__39531;
chunk__39506_39520 = G__39532;
count__39507_39521 = G__39533;
i__39508_39522 = G__39534;
continue;
} else {
var f_39535 = cljs.core.first.call(null,seq__39505_39529__$1);
cljs.core.println.call(null,"  ",f_39535);

var G__39536 = cljs.core.next.call(null,seq__39505_39529__$1);
var G__39537 = null;
var G__39538 = (0);
var G__39539 = (0);
seq__39505_39519 = G__39536;
chunk__39506_39520 = G__39537;
count__39507_39521 = G__39538;
i__39508_39522 = G__39539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25812__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39540);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39540)))?cljs.core.second.call(null,arglists_39540):arglists_39540));
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
var seq__39509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39510 = null;
var count__39511 = (0);
var i__39512 = (0);
while(true){
if((i__39512 < count__39511)){
var vec__39513 = cljs.core._nth.call(null,chunk__39510,i__39512);
var name = cljs.core.nth.call(null,vec__39513,(0),null);
var map__39514 = cljs.core.nth.call(null,vec__39513,(1),null);
var map__39514__$1 = ((((!((map__39514 == null)))?((((map__39514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39514):map__39514);
var doc = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39541 = seq__39509;
var G__39542 = chunk__39510;
var G__39543 = count__39511;
var G__39544 = (i__39512 + (1));
seq__39509 = G__39541;
chunk__39510 = G__39542;
count__39511 = G__39543;
i__39512 = G__39544;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39509);
if(temp__4425__auto__){
var seq__39509__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39509__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__39509__$1);
var G__39545 = cljs.core.chunk_rest.call(null,seq__39509__$1);
var G__39546 = c__26623__auto__;
var G__39547 = cljs.core.count.call(null,c__26623__auto__);
var G__39548 = (0);
seq__39509 = G__39545;
chunk__39510 = G__39546;
count__39511 = G__39547;
i__39512 = G__39548;
continue;
} else {
var vec__39516 = cljs.core.first.call(null,seq__39509__$1);
var name = cljs.core.nth.call(null,vec__39516,(0),null);
var map__39517 = cljs.core.nth.call(null,vec__39516,(1),null);
var map__39517__$1 = ((((!((map__39517 == null)))?((((map__39517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39517):map__39517);
var doc = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39549 = cljs.core.next.call(null,seq__39509__$1);
var G__39550 = null;
var G__39551 = (0);
var G__39552 = (0);
seq__39509 = G__39549;
chunk__39510 = G__39550;
count__39511 = G__39551;
i__39512 = G__39552;
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