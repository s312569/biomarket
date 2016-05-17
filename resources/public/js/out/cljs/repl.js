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
var seq__33960_33974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33961_33975 = null;
var count__33962_33976 = (0);
var i__33963_33977 = (0);
while(true){
if((i__33963_33977 < count__33962_33976)){
var f_33978 = cljs.core._nth.call(null,chunk__33961_33975,i__33963_33977);
cljs.core.println.call(null,"  ",f_33978);

var G__33979 = seq__33960_33974;
var G__33980 = chunk__33961_33975;
var G__33981 = count__33962_33976;
var G__33982 = (i__33963_33977 + (1));
seq__33960_33974 = G__33979;
chunk__33961_33975 = G__33980;
count__33962_33976 = G__33981;
i__33963_33977 = G__33982;
continue;
} else {
var temp__4425__auto___33983 = cljs.core.seq.call(null,seq__33960_33974);
if(temp__4425__auto___33983){
var seq__33960_33984__$1 = temp__4425__auto___33983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33960_33984__$1)){
var c__23674__auto___33985 = cljs.core.chunk_first.call(null,seq__33960_33984__$1);
var G__33986 = cljs.core.chunk_rest.call(null,seq__33960_33984__$1);
var G__33987 = c__23674__auto___33985;
var G__33988 = cljs.core.count.call(null,c__23674__auto___33985);
var G__33989 = (0);
seq__33960_33974 = G__33986;
chunk__33961_33975 = G__33987;
count__33962_33976 = G__33988;
i__33963_33977 = G__33989;
continue;
} else {
var f_33990 = cljs.core.first.call(null,seq__33960_33984__$1);
cljs.core.println.call(null,"  ",f_33990);

var G__33991 = cljs.core.next.call(null,seq__33960_33984__$1);
var G__33992 = null;
var G__33993 = (0);
var G__33994 = (0);
seq__33960_33974 = G__33991;
chunk__33961_33975 = G__33992;
count__33962_33976 = G__33993;
i__33963_33977 = G__33994;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33995 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22863__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33995);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33995)))?cljs.core.second.call(null,arglists_33995):arglists_33995));
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
var seq__33964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33965 = null;
var count__33966 = (0);
var i__33967 = (0);
while(true){
if((i__33967 < count__33966)){
var vec__33968 = cljs.core._nth.call(null,chunk__33965,i__33967);
var name = cljs.core.nth.call(null,vec__33968,(0),null);
var map__33969 = cljs.core.nth.call(null,vec__33968,(1),null);
var map__33969__$1 = ((((!((map__33969 == null)))?((((map__33969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33969):map__33969);
var doc = cljs.core.get.call(null,map__33969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__33996 = seq__33964;
var G__33997 = chunk__33965;
var G__33998 = count__33966;
var G__33999 = (i__33967 + (1));
seq__33964 = G__33996;
chunk__33965 = G__33997;
count__33966 = G__33998;
i__33967 = G__33999;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33964);
if(temp__4425__auto__){
var seq__33964__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33964__$1)){
var c__23674__auto__ = cljs.core.chunk_first.call(null,seq__33964__$1);
var G__34000 = cljs.core.chunk_rest.call(null,seq__33964__$1);
var G__34001 = c__23674__auto__;
var G__34002 = cljs.core.count.call(null,c__23674__auto__);
var G__34003 = (0);
seq__33964 = G__34000;
chunk__33965 = G__34001;
count__33966 = G__34002;
i__33967 = G__34003;
continue;
} else {
var vec__33971 = cljs.core.first.call(null,seq__33964__$1);
var name = cljs.core.nth.call(null,vec__33971,(0),null);
var map__33972 = cljs.core.nth.call(null,vec__33971,(1),null);
var map__33972__$1 = ((((!((map__33972 == null)))?((((map__33972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33972):map__33972);
var doc = cljs.core.get.call(null,map__33972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__33972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34004 = cljs.core.next.call(null,seq__33964__$1);
var G__34005 = null;
var G__34006 = (0);
var G__34007 = (0);
seq__33964 = G__34004;
chunk__33965 = G__34005;
count__33966 = G__34006;
i__33967 = G__34007;
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