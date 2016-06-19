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
var seq__39711_39725 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39712_39726 = null;
var count__39713_39727 = (0);
var i__39714_39728 = (0);
while(true){
if((i__39714_39728 < count__39713_39727)){
var f_39729 = cljs.core._nth.call(null,chunk__39712_39726,i__39714_39728);
cljs.core.println.call(null,"  ",f_39729);

var G__39730 = seq__39711_39725;
var G__39731 = chunk__39712_39726;
var G__39732 = count__39713_39727;
var G__39733 = (i__39714_39728 + (1));
seq__39711_39725 = G__39730;
chunk__39712_39726 = G__39731;
count__39713_39727 = G__39732;
i__39714_39728 = G__39733;
continue;
} else {
var temp__4425__auto___39734 = cljs.core.seq.call(null,seq__39711_39725);
if(temp__4425__auto___39734){
var seq__39711_39735__$1 = temp__4425__auto___39734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39711_39735__$1)){
var c__26691__auto___39736 = cljs.core.chunk_first.call(null,seq__39711_39735__$1);
var G__39737 = cljs.core.chunk_rest.call(null,seq__39711_39735__$1);
var G__39738 = c__26691__auto___39736;
var G__39739 = cljs.core.count.call(null,c__26691__auto___39736);
var G__39740 = (0);
seq__39711_39725 = G__39737;
chunk__39712_39726 = G__39738;
count__39713_39727 = G__39739;
i__39714_39728 = G__39740;
continue;
} else {
var f_39741 = cljs.core.first.call(null,seq__39711_39735__$1);
cljs.core.println.call(null,"  ",f_39741);

var G__39742 = cljs.core.next.call(null,seq__39711_39735__$1);
var G__39743 = null;
var G__39744 = (0);
var G__39745 = (0);
seq__39711_39725 = G__39742;
chunk__39712_39726 = G__39743;
count__39713_39727 = G__39744;
i__39714_39728 = G__39745;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39746 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25880__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39746);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39746)))?cljs.core.second.call(null,arglists_39746):arglists_39746));
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
var seq__39715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39716 = null;
var count__39717 = (0);
var i__39718 = (0);
while(true){
if((i__39718 < count__39717)){
var vec__39719 = cljs.core._nth.call(null,chunk__39716,i__39718);
var name = cljs.core.nth.call(null,vec__39719,(0),null);
var map__39720 = cljs.core.nth.call(null,vec__39719,(1),null);
var map__39720__$1 = ((((!((map__39720 == null)))?((((map__39720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39720):map__39720);
var doc = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39720__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39747 = seq__39715;
var G__39748 = chunk__39716;
var G__39749 = count__39717;
var G__39750 = (i__39718 + (1));
seq__39715 = G__39747;
chunk__39716 = G__39748;
count__39717 = G__39749;
i__39718 = G__39750;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39715);
if(temp__4425__auto__){
var seq__39715__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39715__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__39715__$1);
var G__39751 = cljs.core.chunk_rest.call(null,seq__39715__$1);
var G__39752 = c__26691__auto__;
var G__39753 = cljs.core.count.call(null,c__26691__auto__);
var G__39754 = (0);
seq__39715 = G__39751;
chunk__39716 = G__39752;
count__39717 = G__39753;
i__39718 = G__39754;
continue;
} else {
var vec__39722 = cljs.core.first.call(null,seq__39715__$1);
var name = cljs.core.nth.call(null,vec__39722,(0),null);
var map__39723 = cljs.core.nth.call(null,vec__39722,(1),null);
var map__39723__$1 = ((((!((map__39723 == null)))?((((map__39723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39723):map__39723);
var doc = cljs.core.get.call(null,map__39723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39723__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39755 = cljs.core.next.call(null,seq__39715__$1);
var G__39756 = null;
var G__39757 = (0);
var G__39758 = (0);
seq__39715 = G__39755;
chunk__39716 = G__39756;
count__39717 = G__39757;
i__39718 = G__39758;
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