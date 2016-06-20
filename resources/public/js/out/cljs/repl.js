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
var seq__39915_39929 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39916_39930 = null;
var count__39917_39931 = (0);
var i__39918_39932 = (0);
while(true){
if((i__39918_39932 < count__39917_39931)){
var f_39933 = cljs.core._nth.call(null,chunk__39916_39930,i__39918_39932);
cljs.core.println.call(null,"  ",f_39933);

var G__39934 = seq__39915_39929;
var G__39935 = chunk__39916_39930;
var G__39936 = count__39917_39931;
var G__39937 = (i__39918_39932 + (1));
seq__39915_39929 = G__39934;
chunk__39916_39930 = G__39935;
count__39917_39931 = G__39936;
i__39918_39932 = G__39937;
continue;
} else {
var temp__4425__auto___39938 = cljs.core.seq.call(null,seq__39915_39929);
if(temp__4425__auto___39938){
var seq__39915_39939__$1 = temp__4425__auto___39938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39915_39939__$1)){
var c__26725__auto___39940 = cljs.core.chunk_first.call(null,seq__39915_39939__$1);
var G__39941 = cljs.core.chunk_rest.call(null,seq__39915_39939__$1);
var G__39942 = c__26725__auto___39940;
var G__39943 = cljs.core.count.call(null,c__26725__auto___39940);
var G__39944 = (0);
seq__39915_39929 = G__39941;
chunk__39916_39930 = G__39942;
count__39917_39931 = G__39943;
i__39918_39932 = G__39944;
continue;
} else {
var f_39945 = cljs.core.first.call(null,seq__39915_39939__$1);
cljs.core.println.call(null,"  ",f_39945);

var G__39946 = cljs.core.next.call(null,seq__39915_39939__$1);
var G__39947 = null;
var G__39948 = (0);
var G__39949 = (0);
seq__39915_39929 = G__39946;
chunk__39916_39930 = G__39947;
count__39917_39931 = G__39948;
i__39918_39932 = G__39949;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39950 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25914__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39950);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39950)))?cljs.core.second.call(null,arglists_39950):arglists_39950));
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
var seq__39919 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39920 = null;
var count__39921 = (0);
var i__39922 = (0);
while(true){
if((i__39922 < count__39921)){
var vec__39923 = cljs.core._nth.call(null,chunk__39920,i__39922);
var name = cljs.core.nth.call(null,vec__39923,(0),null);
var map__39924 = cljs.core.nth.call(null,vec__39923,(1),null);
var map__39924__$1 = ((((!((map__39924 == null)))?((((map__39924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39924):map__39924);
var doc = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39951 = seq__39919;
var G__39952 = chunk__39920;
var G__39953 = count__39921;
var G__39954 = (i__39922 + (1));
seq__39919 = G__39951;
chunk__39920 = G__39952;
count__39921 = G__39953;
i__39922 = G__39954;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39919);
if(temp__4425__auto__){
var seq__39919__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39919__$1)){
var c__26725__auto__ = cljs.core.chunk_first.call(null,seq__39919__$1);
var G__39955 = cljs.core.chunk_rest.call(null,seq__39919__$1);
var G__39956 = c__26725__auto__;
var G__39957 = cljs.core.count.call(null,c__26725__auto__);
var G__39958 = (0);
seq__39919 = G__39955;
chunk__39920 = G__39956;
count__39921 = G__39957;
i__39922 = G__39958;
continue;
} else {
var vec__39926 = cljs.core.first.call(null,seq__39919__$1);
var name = cljs.core.nth.call(null,vec__39926,(0),null);
var map__39927 = cljs.core.nth.call(null,vec__39926,(1),null);
var map__39927__$1 = ((((!((map__39927 == null)))?((((map__39927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39927):map__39927);
var doc = cljs.core.get.call(null,map__39927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39959 = cljs.core.next.call(null,seq__39919__$1);
var G__39960 = null;
var G__39961 = (0);
var G__39962 = (0);
seq__39919 = G__39959;
chunk__39920 = G__39960;
count__39921 = G__39961;
i__39922 = G__39962;
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