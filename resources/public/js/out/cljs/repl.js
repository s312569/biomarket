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
var seq__39532_39546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39533_39547 = null;
var count__39534_39548 = (0);
var i__39535_39549 = (0);
while(true){
if((i__39535_39549 < count__39534_39548)){
var f_39550 = cljs.core._nth.call(null,chunk__39533_39547,i__39535_39549);
cljs.core.println.call(null,"  ",f_39550);

var G__39551 = seq__39532_39546;
var G__39552 = chunk__39533_39547;
var G__39553 = count__39534_39548;
var G__39554 = (i__39535_39549 + (1));
seq__39532_39546 = G__39551;
chunk__39533_39547 = G__39552;
count__39534_39548 = G__39553;
i__39535_39549 = G__39554;
continue;
} else {
var temp__4425__auto___39555 = cljs.core.seq.call(null,seq__39532_39546);
if(temp__4425__auto___39555){
var seq__39532_39556__$1 = temp__4425__auto___39555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39532_39556__$1)){
var c__26620__auto___39557 = cljs.core.chunk_first.call(null,seq__39532_39556__$1);
var G__39558 = cljs.core.chunk_rest.call(null,seq__39532_39556__$1);
var G__39559 = c__26620__auto___39557;
var G__39560 = cljs.core.count.call(null,c__26620__auto___39557);
var G__39561 = (0);
seq__39532_39546 = G__39558;
chunk__39533_39547 = G__39559;
count__39534_39548 = G__39560;
i__39535_39549 = G__39561;
continue;
} else {
var f_39562 = cljs.core.first.call(null,seq__39532_39556__$1);
cljs.core.println.call(null,"  ",f_39562);

var G__39563 = cljs.core.next.call(null,seq__39532_39556__$1);
var G__39564 = null;
var G__39565 = (0);
var G__39566 = (0);
seq__39532_39546 = G__39563;
chunk__39533_39547 = G__39564;
count__39534_39548 = G__39565;
i__39535_39549 = G__39566;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39567 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25809__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39567);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39567)))?cljs.core.second.call(null,arglists_39567):arglists_39567));
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
var seq__39536 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39537 = null;
var count__39538 = (0);
var i__39539 = (0);
while(true){
if((i__39539 < count__39538)){
var vec__39540 = cljs.core._nth.call(null,chunk__39537,i__39539);
var name = cljs.core.nth.call(null,vec__39540,(0),null);
var map__39541 = cljs.core.nth.call(null,vec__39540,(1),null);
var map__39541__$1 = ((((!((map__39541 == null)))?((((map__39541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39541):map__39541);
var doc = cljs.core.get.call(null,map__39541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39568 = seq__39536;
var G__39569 = chunk__39537;
var G__39570 = count__39538;
var G__39571 = (i__39539 + (1));
seq__39536 = G__39568;
chunk__39537 = G__39569;
count__39538 = G__39570;
i__39539 = G__39571;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39536);
if(temp__4425__auto__){
var seq__39536__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39536__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__39536__$1);
var G__39572 = cljs.core.chunk_rest.call(null,seq__39536__$1);
var G__39573 = c__26620__auto__;
var G__39574 = cljs.core.count.call(null,c__26620__auto__);
var G__39575 = (0);
seq__39536 = G__39572;
chunk__39537 = G__39573;
count__39538 = G__39574;
i__39539 = G__39575;
continue;
} else {
var vec__39543 = cljs.core.first.call(null,seq__39536__$1);
var name = cljs.core.nth.call(null,vec__39543,(0),null);
var map__39544 = cljs.core.nth.call(null,vec__39543,(1),null);
var map__39544__$1 = ((((!((map__39544 == null)))?((((map__39544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39544):map__39544);
var doc = cljs.core.get.call(null,map__39544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39576 = cljs.core.next.call(null,seq__39536__$1);
var G__39577 = null;
var G__39578 = (0);
var G__39579 = (0);
seq__39536 = G__39576;
chunk__39537 = G__39577;
count__39538 = G__39578;
i__39539 = G__39579;
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