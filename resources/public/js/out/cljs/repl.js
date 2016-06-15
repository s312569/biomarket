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
var seq__37849_37863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37850_37864 = null;
var count__37851_37865 = (0);
var i__37852_37866 = (0);
while(true){
if((i__37852_37866 < count__37851_37865)){
var f_37867 = cljs.core._nth.call(null,chunk__37850_37864,i__37852_37866);
cljs.core.println.call(null,"  ",f_37867);

var G__37868 = seq__37849_37863;
var G__37869 = chunk__37850_37864;
var G__37870 = count__37851_37865;
var G__37871 = (i__37852_37866 + (1));
seq__37849_37863 = G__37868;
chunk__37850_37864 = G__37869;
count__37851_37865 = G__37870;
i__37852_37866 = G__37871;
continue;
} else {
var temp__4425__auto___37872 = cljs.core.seq.call(null,seq__37849_37863);
if(temp__4425__auto___37872){
var seq__37849_37873__$1 = temp__4425__auto___37872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37849_37873__$1)){
var c__24900__auto___37874 = cljs.core.chunk_first.call(null,seq__37849_37873__$1);
var G__37875 = cljs.core.chunk_rest.call(null,seq__37849_37873__$1);
var G__37876 = c__24900__auto___37874;
var G__37877 = cljs.core.count.call(null,c__24900__auto___37874);
var G__37878 = (0);
seq__37849_37863 = G__37875;
chunk__37850_37864 = G__37876;
count__37851_37865 = G__37877;
i__37852_37866 = G__37878;
continue;
} else {
var f_37879 = cljs.core.first.call(null,seq__37849_37873__$1);
cljs.core.println.call(null,"  ",f_37879);

var G__37880 = cljs.core.next.call(null,seq__37849_37873__$1);
var G__37881 = null;
var G__37882 = (0);
var G__37883 = (0);
seq__37849_37863 = G__37880;
chunk__37850_37864 = G__37881;
count__37851_37865 = G__37882;
i__37852_37866 = G__37883;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37884 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24089__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37884);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37884)))?cljs.core.second.call(null,arglists_37884):arglists_37884));
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
var seq__37853 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37854 = null;
var count__37855 = (0);
var i__37856 = (0);
while(true){
if((i__37856 < count__37855)){
var vec__37857 = cljs.core._nth.call(null,chunk__37854,i__37856);
var name = cljs.core.nth.call(null,vec__37857,(0),null);
var map__37858 = cljs.core.nth.call(null,vec__37857,(1),null);
var map__37858__$1 = ((((!((map__37858 == null)))?((((map__37858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37858):map__37858);
var doc = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37858__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37885 = seq__37853;
var G__37886 = chunk__37854;
var G__37887 = count__37855;
var G__37888 = (i__37856 + (1));
seq__37853 = G__37885;
chunk__37854 = G__37886;
count__37855 = G__37887;
i__37856 = G__37888;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37853);
if(temp__4425__auto__){
var seq__37853__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__37853__$1);
var G__37889 = cljs.core.chunk_rest.call(null,seq__37853__$1);
var G__37890 = c__24900__auto__;
var G__37891 = cljs.core.count.call(null,c__24900__auto__);
var G__37892 = (0);
seq__37853 = G__37889;
chunk__37854 = G__37890;
count__37855 = G__37891;
i__37856 = G__37892;
continue;
} else {
var vec__37860 = cljs.core.first.call(null,seq__37853__$1);
var name = cljs.core.nth.call(null,vec__37860,(0),null);
var map__37861 = cljs.core.nth.call(null,vec__37860,(1),null);
var map__37861__$1 = ((((!((map__37861 == null)))?((((map__37861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37861):map__37861);
var doc = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37893 = cljs.core.next.call(null,seq__37853__$1);
var G__37894 = null;
var G__37895 = (0);
var G__37896 = (0);
seq__37853 = G__37893;
chunk__37854 = G__37894;
count__37855 = G__37895;
i__37856 = G__37896;
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