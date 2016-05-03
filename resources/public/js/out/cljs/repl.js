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
var seq__29839_29853 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29840_29854 = null;
var count__29841_29855 = (0);
var i__29842_29856 = (0);
while(true){
if((i__29842_29856 < count__29841_29855)){
var f_29857 = cljs.core._nth.call(null,chunk__29840_29854,i__29842_29856);
cljs.core.println.call(null,"  ",f_29857);

var G__29858 = seq__29839_29853;
var G__29859 = chunk__29840_29854;
var G__29860 = count__29841_29855;
var G__29861 = (i__29842_29856 + (1));
seq__29839_29853 = G__29858;
chunk__29840_29854 = G__29859;
count__29841_29855 = G__29860;
i__29842_29856 = G__29861;
continue;
} else {
var temp__4425__auto___29862 = cljs.core.seq.call(null,seq__29839_29853);
if(temp__4425__auto___29862){
var seq__29839_29863__$1 = temp__4425__auto___29862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29839_29863__$1)){
var c__22549__auto___29864 = cljs.core.chunk_first.call(null,seq__29839_29863__$1);
var G__29865 = cljs.core.chunk_rest.call(null,seq__29839_29863__$1);
var G__29866 = c__22549__auto___29864;
var G__29867 = cljs.core.count.call(null,c__22549__auto___29864);
var G__29868 = (0);
seq__29839_29853 = G__29865;
chunk__29840_29854 = G__29866;
count__29841_29855 = G__29867;
i__29842_29856 = G__29868;
continue;
} else {
var f_29869 = cljs.core.first.call(null,seq__29839_29863__$1);
cljs.core.println.call(null,"  ",f_29869);

var G__29870 = cljs.core.next.call(null,seq__29839_29863__$1);
var G__29871 = null;
var G__29872 = (0);
var G__29873 = (0);
seq__29839_29853 = G__29870;
chunk__29840_29854 = G__29871;
count__29841_29855 = G__29872;
i__29842_29856 = G__29873;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29874 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21738__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21738__auto__)){
return or__21738__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29874);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29874)))?cljs.core.second.call(null,arglists_29874):arglists_29874));
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
var seq__29843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29844 = null;
var count__29845 = (0);
var i__29846 = (0);
while(true){
if((i__29846 < count__29845)){
var vec__29847 = cljs.core._nth.call(null,chunk__29844,i__29846);
var name = cljs.core.nth.call(null,vec__29847,(0),null);
var map__29848 = cljs.core.nth.call(null,vec__29847,(1),null);
var map__29848__$1 = ((((!((map__29848 == null)))?((((map__29848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29848):map__29848);
var doc = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29848__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29875 = seq__29843;
var G__29876 = chunk__29844;
var G__29877 = count__29845;
var G__29878 = (i__29846 + (1));
seq__29843 = G__29875;
chunk__29844 = G__29876;
count__29845 = G__29877;
i__29846 = G__29878;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29843);
if(temp__4425__auto__){
var seq__29843__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29843__$1)){
var c__22549__auto__ = cljs.core.chunk_first.call(null,seq__29843__$1);
var G__29879 = cljs.core.chunk_rest.call(null,seq__29843__$1);
var G__29880 = c__22549__auto__;
var G__29881 = cljs.core.count.call(null,c__22549__auto__);
var G__29882 = (0);
seq__29843 = G__29879;
chunk__29844 = G__29880;
count__29845 = G__29881;
i__29846 = G__29882;
continue;
} else {
var vec__29850 = cljs.core.first.call(null,seq__29843__$1);
var name = cljs.core.nth.call(null,vec__29850,(0),null);
var map__29851 = cljs.core.nth.call(null,vec__29850,(1),null);
var map__29851__$1 = ((((!((map__29851 == null)))?((((map__29851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29851):map__29851);
var doc = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29883 = cljs.core.next.call(null,seq__29843__$1);
var G__29884 = null;
var G__29885 = (0);
var G__29886 = (0);
seq__29843 = G__29883;
chunk__29844 = G__29884;
count__29845 = G__29885;
i__29846 = G__29886;
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