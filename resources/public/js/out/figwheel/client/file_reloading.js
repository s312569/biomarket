// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22576__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22576__auto__){
return or__22576__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22576__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31305_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31305_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31310 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31311 = null;
var count__31312 = (0);
var i__31313 = (0);
while(true){
if((i__31313 < count__31312)){
var n = cljs.core._nth.call(null,chunk__31311,i__31313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31314 = seq__31310;
var G__31315 = chunk__31311;
var G__31316 = count__31312;
var G__31317 = (i__31313 + (1));
seq__31310 = G__31314;
chunk__31311 = G__31315;
count__31312 = G__31316;
i__31313 = G__31317;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31310);
if(temp__4425__auto__){
var seq__31310__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31310__$1)){
var c__23387__auto__ = cljs.core.chunk_first.call(null,seq__31310__$1);
var G__31318 = cljs.core.chunk_rest.call(null,seq__31310__$1);
var G__31319 = c__23387__auto__;
var G__31320 = cljs.core.count.call(null,c__23387__auto__);
var G__31321 = (0);
seq__31310 = G__31318;
chunk__31311 = G__31319;
count__31312 = G__31320;
i__31313 = G__31321;
continue;
} else {
var n = cljs.core.first.call(null,seq__31310__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31322 = cljs.core.next.call(null,seq__31310__$1);
var G__31323 = null;
var G__31324 = (0);
var G__31325 = (0);
seq__31310 = G__31322;
chunk__31311 = G__31323;
count__31312 = G__31324;
i__31313 = G__31325;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31364_31371 = cljs.core.seq.call(null,deps);
var chunk__31365_31372 = null;
var count__31366_31373 = (0);
var i__31367_31374 = (0);
while(true){
if((i__31367_31374 < count__31366_31373)){
var dep_31375 = cljs.core._nth.call(null,chunk__31365_31372,i__31367_31374);
topo_sort_helper_STAR_.call(null,dep_31375,(depth + (1)),state);

var G__31376 = seq__31364_31371;
var G__31377 = chunk__31365_31372;
var G__31378 = count__31366_31373;
var G__31379 = (i__31367_31374 + (1));
seq__31364_31371 = G__31376;
chunk__31365_31372 = G__31377;
count__31366_31373 = G__31378;
i__31367_31374 = G__31379;
continue;
} else {
var temp__4425__auto___31380 = cljs.core.seq.call(null,seq__31364_31371);
if(temp__4425__auto___31380){
var seq__31364_31381__$1 = temp__4425__auto___31380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31364_31381__$1)){
var c__23387__auto___31382 = cljs.core.chunk_first.call(null,seq__31364_31381__$1);
var G__31383 = cljs.core.chunk_rest.call(null,seq__31364_31381__$1);
var G__31384 = c__23387__auto___31382;
var G__31385 = cljs.core.count.call(null,c__23387__auto___31382);
var G__31386 = (0);
seq__31364_31371 = G__31383;
chunk__31365_31372 = G__31384;
count__31366_31373 = G__31385;
i__31367_31374 = G__31386;
continue;
} else {
var dep_31387 = cljs.core.first.call(null,seq__31364_31381__$1);
topo_sort_helper_STAR_.call(null,dep_31387,(depth + (1)),state);

var G__31388 = cljs.core.next.call(null,seq__31364_31381__$1);
var G__31389 = null;
var G__31390 = (0);
var G__31391 = (0);
seq__31364_31371 = G__31388;
chunk__31365_31372 = G__31389;
count__31366_31373 = G__31390;
i__31367_31374 = G__31391;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31368){
var vec__31370 = p__31368;
var x = cljs.core.nth.call(null,vec__31370,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31370,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31370,x,xs,get_deps__$1){
return (function (p1__31326_SHARP_){
return clojure.set.difference.call(null,p1__31326_SHARP_,x);
});})(vec__31370,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31404 = cljs.core.seq.call(null,provides);
var chunk__31405 = null;
var count__31406 = (0);
var i__31407 = (0);
while(true){
if((i__31407 < count__31406)){
var prov = cljs.core._nth.call(null,chunk__31405,i__31407);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31408_31416 = cljs.core.seq.call(null,requires);
var chunk__31409_31417 = null;
var count__31410_31418 = (0);
var i__31411_31419 = (0);
while(true){
if((i__31411_31419 < count__31410_31418)){
var req_31420 = cljs.core._nth.call(null,chunk__31409_31417,i__31411_31419);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31420,prov);

var G__31421 = seq__31408_31416;
var G__31422 = chunk__31409_31417;
var G__31423 = count__31410_31418;
var G__31424 = (i__31411_31419 + (1));
seq__31408_31416 = G__31421;
chunk__31409_31417 = G__31422;
count__31410_31418 = G__31423;
i__31411_31419 = G__31424;
continue;
} else {
var temp__4425__auto___31425 = cljs.core.seq.call(null,seq__31408_31416);
if(temp__4425__auto___31425){
var seq__31408_31426__$1 = temp__4425__auto___31425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31408_31426__$1)){
var c__23387__auto___31427 = cljs.core.chunk_first.call(null,seq__31408_31426__$1);
var G__31428 = cljs.core.chunk_rest.call(null,seq__31408_31426__$1);
var G__31429 = c__23387__auto___31427;
var G__31430 = cljs.core.count.call(null,c__23387__auto___31427);
var G__31431 = (0);
seq__31408_31416 = G__31428;
chunk__31409_31417 = G__31429;
count__31410_31418 = G__31430;
i__31411_31419 = G__31431;
continue;
} else {
var req_31432 = cljs.core.first.call(null,seq__31408_31426__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31432,prov);

var G__31433 = cljs.core.next.call(null,seq__31408_31426__$1);
var G__31434 = null;
var G__31435 = (0);
var G__31436 = (0);
seq__31408_31416 = G__31433;
chunk__31409_31417 = G__31434;
count__31410_31418 = G__31435;
i__31411_31419 = G__31436;
continue;
}
} else {
}
}
break;
}

var G__31437 = seq__31404;
var G__31438 = chunk__31405;
var G__31439 = count__31406;
var G__31440 = (i__31407 + (1));
seq__31404 = G__31437;
chunk__31405 = G__31438;
count__31406 = G__31439;
i__31407 = G__31440;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31404);
if(temp__4425__auto__){
var seq__31404__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31404__$1)){
var c__23387__auto__ = cljs.core.chunk_first.call(null,seq__31404__$1);
var G__31441 = cljs.core.chunk_rest.call(null,seq__31404__$1);
var G__31442 = c__23387__auto__;
var G__31443 = cljs.core.count.call(null,c__23387__auto__);
var G__31444 = (0);
seq__31404 = G__31441;
chunk__31405 = G__31442;
count__31406 = G__31443;
i__31407 = G__31444;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31404__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31412_31445 = cljs.core.seq.call(null,requires);
var chunk__31413_31446 = null;
var count__31414_31447 = (0);
var i__31415_31448 = (0);
while(true){
if((i__31415_31448 < count__31414_31447)){
var req_31449 = cljs.core._nth.call(null,chunk__31413_31446,i__31415_31448);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31449,prov);

var G__31450 = seq__31412_31445;
var G__31451 = chunk__31413_31446;
var G__31452 = count__31414_31447;
var G__31453 = (i__31415_31448 + (1));
seq__31412_31445 = G__31450;
chunk__31413_31446 = G__31451;
count__31414_31447 = G__31452;
i__31415_31448 = G__31453;
continue;
} else {
var temp__4425__auto___31454__$1 = cljs.core.seq.call(null,seq__31412_31445);
if(temp__4425__auto___31454__$1){
var seq__31412_31455__$1 = temp__4425__auto___31454__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31412_31455__$1)){
var c__23387__auto___31456 = cljs.core.chunk_first.call(null,seq__31412_31455__$1);
var G__31457 = cljs.core.chunk_rest.call(null,seq__31412_31455__$1);
var G__31458 = c__23387__auto___31456;
var G__31459 = cljs.core.count.call(null,c__23387__auto___31456);
var G__31460 = (0);
seq__31412_31445 = G__31457;
chunk__31413_31446 = G__31458;
count__31414_31447 = G__31459;
i__31415_31448 = G__31460;
continue;
} else {
var req_31461 = cljs.core.first.call(null,seq__31412_31455__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31461,prov);

var G__31462 = cljs.core.next.call(null,seq__31412_31455__$1);
var G__31463 = null;
var G__31464 = (0);
var G__31465 = (0);
seq__31412_31445 = G__31462;
chunk__31413_31446 = G__31463;
count__31414_31447 = G__31464;
i__31415_31448 = G__31465;
continue;
}
} else {
}
}
break;
}

var G__31466 = cljs.core.next.call(null,seq__31404__$1);
var G__31467 = null;
var G__31468 = (0);
var G__31469 = (0);
seq__31404 = G__31466;
chunk__31405 = G__31467;
count__31406 = G__31468;
i__31407 = G__31469;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31474_31478 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31475_31479 = null;
var count__31476_31480 = (0);
var i__31477_31481 = (0);
while(true){
if((i__31477_31481 < count__31476_31480)){
var ns_31482 = cljs.core._nth.call(null,chunk__31475_31479,i__31477_31481);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31482);

var G__31483 = seq__31474_31478;
var G__31484 = chunk__31475_31479;
var G__31485 = count__31476_31480;
var G__31486 = (i__31477_31481 + (1));
seq__31474_31478 = G__31483;
chunk__31475_31479 = G__31484;
count__31476_31480 = G__31485;
i__31477_31481 = G__31486;
continue;
} else {
var temp__4425__auto___31487 = cljs.core.seq.call(null,seq__31474_31478);
if(temp__4425__auto___31487){
var seq__31474_31488__$1 = temp__4425__auto___31487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31474_31488__$1)){
var c__23387__auto___31489 = cljs.core.chunk_first.call(null,seq__31474_31488__$1);
var G__31490 = cljs.core.chunk_rest.call(null,seq__31474_31488__$1);
var G__31491 = c__23387__auto___31489;
var G__31492 = cljs.core.count.call(null,c__23387__auto___31489);
var G__31493 = (0);
seq__31474_31478 = G__31490;
chunk__31475_31479 = G__31491;
count__31476_31480 = G__31492;
i__31477_31481 = G__31493;
continue;
} else {
var ns_31494 = cljs.core.first.call(null,seq__31474_31488__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31494);

var G__31495 = cljs.core.next.call(null,seq__31474_31488__$1);
var G__31496 = null;
var G__31497 = (0);
var G__31498 = (0);
seq__31474_31478 = G__31495;
chunk__31475_31479 = G__31496;
count__31476_31480 = G__31497;
i__31477_31481 = G__31498;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22576__auto__ = goog.require__;
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31499__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31500__i = 0, G__31500__a = new Array(arguments.length -  0);
while (G__31500__i < G__31500__a.length) {G__31500__a[G__31500__i] = arguments[G__31500__i + 0]; ++G__31500__i;}
  args = new cljs.core.IndexedSeq(G__31500__a,0);
} 
return G__31499__delegate.call(this,args);};
G__31499.cljs$lang$maxFixedArity = 0;
G__31499.cljs$lang$applyTo = (function (arglist__31501){
var args = cljs.core.seq(arglist__31501);
return G__31499__delegate(args);
});
G__31499.cljs$core$IFn$_invoke$arity$variadic = G__31499__delegate;
return G__31499;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31503 = cljs.core._EQ_;
var expr__31504 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31503.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31504))){
var path_parts = ((function (pred__31503,expr__31504){
return (function (p1__31502_SHARP_){
return clojure.string.split.call(null,p1__31502_SHARP_,/[\/\\]/);
});})(pred__31503,expr__31504))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31503,expr__31504){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31506){if((e31506 instanceof Error)){
var e = e31506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31506;

}
}})());
});
;})(path_parts,sep,root,pred__31503,expr__31504))
} else {
if(cljs.core.truth_(pred__31503.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31504))){
return ((function (pred__31503,expr__31504){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31503,expr__31504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31503,expr__31504))
);

return deferred.addErrback(((function (deferred,pred__31503,expr__31504){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31503,expr__31504))
);
});
;})(pred__31503,expr__31504))
} else {
return ((function (pred__31503,expr__31504){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31503,expr__31504))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31507,callback){
var map__31510 = p__31507;
var map__31510__$1 = ((((!((map__31510 == null)))?((((map__31510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31510):map__31510);
var file_msg = map__31510__$1;
var request_url = cljs.core.get.call(null,map__31510__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31510,map__31510__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31510,map__31510__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__){
return (function (state_31534){
var state_val_31535 = (state_31534[(1)]);
if((state_val_31535 === (7))){
var inst_31530 = (state_31534[(2)]);
var state_31534__$1 = state_31534;
var statearr_31536_31556 = state_31534__$1;
(statearr_31536_31556[(2)] = inst_31530);

(statearr_31536_31556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (1))){
var state_31534__$1 = state_31534;
var statearr_31537_31557 = state_31534__$1;
(statearr_31537_31557[(2)] = null);

(statearr_31537_31557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (4))){
var inst_31514 = (state_31534[(7)]);
var inst_31514__$1 = (state_31534[(2)]);
var state_31534__$1 = (function (){var statearr_31538 = state_31534;
(statearr_31538[(7)] = inst_31514__$1);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31514__$1)){
var statearr_31539_31558 = state_31534__$1;
(statearr_31539_31558[(1)] = (5));

} else {
var statearr_31540_31559 = state_31534__$1;
(statearr_31540_31559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (6))){
var state_31534__$1 = state_31534;
var statearr_31541_31560 = state_31534__$1;
(statearr_31541_31560[(2)] = null);

(statearr_31541_31560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (3))){
var inst_31532 = (state_31534[(2)]);
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31534__$1,inst_31532);
} else {
if((state_val_31535 === (2))){
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31534__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31535 === (11))){
var inst_31526 = (state_31534[(2)]);
var state_31534__$1 = (function (){var statearr_31542 = state_31534;
(statearr_31542[(8)] = inst_31526);

return statearr_31542;
})();
var statearr_31543_31561 = state_31534__$1;
(statearr_31543_31561[(2)] = null);

(statearr_31543_31561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (9))){
var inst_31520 = (state_31534[(9)]);
var inst_31518 = (state_31534[(10)]);
var inst_31522 = inst_31520.call(null,inst_31518);
var state_31534__$1 = state_31534;
var statearr_31544_31562 = state_31534__$1;
(statearr_31544_31562[(2)] = inst_31522);

(statearr_31544_31562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (5))){
var inst_31514 = (state_31534[(7)]);
var inst_31516 = figwheel.client.file_reloading.blocking_load.call(null,inst_31514);
var state_31534__$1 = state_31534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31534__$1,(8),inst_31516);
} else {
if((state_val_31535 === (10))){
var inst_31518 = (state_31534[(10)]);
var inst_31524 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31518);
var state_31534__$1 = state_31534;
var statearr_31545_31563 = state_31534__$1;
(statearr_31545_31563[(2)] = inst_31524);

(statearr_31545_31563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31535 === (8))){
var inst_31520 = (state_31534[(9)]);
var inst_31514 = (state_31534[(7)]);
var inst_31518 = (state_31534[(2)]);
var inst_31519 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31520__$1 = cljs.core.get.call(null,inst_31519,inst_31514);
var state_31534__$1 = (function (){var statearr_31546 = state_31534;
(statearr_31546[(9)] = inst_31520__$1);

(statearr_31546[(10)] = inst_31518);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31520__$1)){
var statearr_31547_31564 = state_31534__$1;
(statearr_31547_31564[(1)] = (9));

} else {
var statearr_31548_31565 = state_31534__$1;
(statearr_31548_31565[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26707__auto__))
;
return ((function (switch__26595__auto__,c__26707__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26596__auto__ = null;
var figwheel$client$file_reloading$state_machine__26596__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = figwheel$client$file_reloading$state_machine__26596__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var figwheel$client$file_reloading$state_machine__26596__auto____1 = (function (state_31534){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_31534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e31553){if((e31553 instanceof Object)){
var ex__26599__auto__ = e31553;
var statearr_31554_31566 = state_31534;
(statearr_31554_31566[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31567 = state_31534;
state_31534 = G__31567;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26596__auto__ = function(state_31534){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26596__auto____1.call(this,state_31534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26596__auto____0;
figwheel$client$file_reloading$state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26596__auto____1;
return figwheel$client$file_reloading$state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__))
})();
var state__26709__auto__ = (function (){var statearr_31555 = f__26708__auto__.call(null);
(statearr_31555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__))
);

return c__26707__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31568,callback){
var map__31571 = p__31568;
var map__31571__$1 = ((((!((map__31571 == null)))?((((map__31571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31571):map__31571);
var file_msg = map__31571__$1;
var namespace = cljs.core.get.call(null,map__31571__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31571,map__31571__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31571,map__31571__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31573){
var map__31576 = p__31573;
var map__31576__$1 = ((((!((map__31576 == null)))?((((map__31576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31576):map__31576);
var file_msg = map__31576__$1;
var namespace = cljs.core.get.call(null,map__31576__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22564__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22564__auto__){
var or__22576__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
} else {
var or__22576__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22576__auto____$1)){
return or__22576__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22564__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31578,callback){
var map__31581 = p__31578;
var map__31581__$1 = ((((!((map__31581 == null)))?((((map__31581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31581):map__31581);
var file_msg = map__31581__$1;
var request_url = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26707__auto___31669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto___31669,out){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto___31669,out){
return (function (state_31651){
var state_val_31652 = (state_31651[(1)]);
if((state_val_31652 === (1))){
var inst_31629 = cljs.core.nth.call(null,files,(0),null);
var inst_31630 = cljs.core.nthnext.call(null,files,(1));
var inst_31631 = files;
var state_31651__$1 = (function (){var statearr_31653 = state_31651;
(statearr_31653[(7)] = inst_31631);

(statearr_31653[(8)] = inst_31630);

(statearr_31653[(9)] = inst_31629);

return statearr_31653;
})();
var statearr_31654_31670 = state_31651__$1;
(statearr_31654_31670[(2)] = null);

(statearr_31654_31670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (2))){
var inst_31631 = (state_31651[(7)]);
var inst_31634 = (state_31651[(10)]);
var inst_31634__$1 = cljs.core.nth.call(null,inst_31631,(0),null);
var inst_31635 = cljs.core.nthnext.call(null,inst_31631,(1));
var inst_31636 = (inst_31634__$1 == null);
var inst_31637 = cljs.core.not.call(null,inst_31636);
var state_31651__$1 = (function (){var statearr_31655 = state_31651;
(statearr_31655[(11)] = inst_31635);

(statearr_31655[(10)] = inst_31634__$1);

return statearr_31655;
})();
if(inst_31637){
var statearr_31656_31671 = state_31651__$1;
(statearr_31656_31671[(1)] = (4));

} else {
var statearr_31657_31672 = state_31651__$1;
(statearr_31657_31672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (3))){
var inst_31649 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31651__$1,inst_31649);
} else {
if((state_val_31652 === (4))){
var inst_31634 = (state_31651[(10)]);
var inst_31639 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31634);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31651__$1,(7),inst_31639);
} else {
if((state_val_31652 === (5))){
var inst_31645 = cljs.core.async.close_BANG_.call(null,out);
var state_31651__$1 = state_31651;
var statearr_31658_31673 = state_31651__$1;
(statearr_31658_31673[(2)] = inst_31645);

(statearr_31658_31673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (6))){
var inst_31647 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31659_31674 = state_31651__$1;
(statearr_31659_31674[(2)] = inst_31647);

(statearr_31659_31674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (7))){
var inst_31635 = (state_31651[(11)]);
var inst_31641 = (state_31651[(2)]);
var inst_31642 = cljs.core.async.put_BANG_.call(null,out,inst_31641);
var inst_31631 = inst_31635;
var state_31651__$1 = (function (){var statearr_31660 = state_31651;
(statearr_31660[(7)] = inst_31631);

(statearr_31660[(12)] = inst_31642);

return statearr_31660;
})();
var statearr_31661_31675 = state_31651__$1;
(statearr_31661_31675[(2)] = null);

(statearr_31661_31675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26707__auto___31669,out))
;
return ((function (switch__26595__auto__,c__26707__auto___31669,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____0 = (function (){
var statearr_31665 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31665[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__);

(statearr_31665[(1)] = (1));

return statearr_31665;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____1 = (function (state_31651){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_31651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e31666){if((e31666 instanceof Object)){
var ex__26599__auto__ = e31666;
var statearr_31667_31676 = state_31651;
(statearr_31667_31676[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31677 = state_31651;
state_31651 = G__31677;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__ = function(state_31651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____1.call(this,state_31651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto___31669,out))
})();
var state__26709__auto__ = (function (){var statearr_31668 = f__26708__auto__.call(null);
(statearr_31668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto___31669);

return statearr_31668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto___31669,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31678,opts){
var map__31682 = p__31678;
var map__31682__$1 = ((((!((map__31682 == null)))?((((map__31682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31682):map__31682);
var eval_body__$1 = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31682__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22564__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22564__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22564__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31684){var e = e31684;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31685_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31685_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31690){
var vec__31691 = p__31690;
var k = cljs.core.nth.call(null,vec__31691,(0),null);
var v = cljs.core.nth.call(null,vec__31691,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31692){
var vec__31693 = p__31692;
var k = cljs.core.nth.call(null,vec__31693,(0),null);
var v = cljs.core.nth.call(null,vec__31693,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31697,p__31698){
var map__31945 = p__31697;
var map__31945__$1 = ((((!((map__31945 == null)))?((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var opts = map__31945__$1;
var before_jsload = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31946 = p__31698;
var map__31946__$1 = ((((!((map__31946 == null)))?((((map__31946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);
var msg = map__31946__$1;
var files = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26708__auto__ = (function (){var switch__26595__auto__ = ((function (c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32099){
var state_val_32100 = (state_32099[(1)]);
if((state_val_32100 === (7))){
var inst_31963 = (state_32099[(7)]);
var inst_31960 = (state_32099[(8)]);
var inst_31962 = (state_32099[(9)]);
var inst_31961 = (state_32099[(10)]);
var inst_31968 = cljs.core._nth.call(null,inst_31961,inst_31963);
var inst_31969 = figwheel.client.file_reloading.eval_body.call(null,inst_31968,opts);
var inst_31970 = (inst_31963 + (1));
var tmp32101 = inst_31960;
var tmp32102 = inst_31962;
var tmp32103 = inst_31961;
var inst_31960__$1 = tmp32101;
var inst_31961__$1 = tmp32103;
var inst_31962__$1 = tmp32102;
var inst_31963__$1 = inst_31970;
var state_32099__$1 = (function (){var statearr_32104 = state_32099;
(statearr_32104[(7)] = inst_31963__$1);

(statearr_32104[(8)] = inst_31960__$1);

(statearr_32104[(9)] = inst_31962__$1);

(statearr_32104[(11)] = inst_31969);

(statearr_32104[(10)] = inst_31961__$1);

return statearr_32104;
})();
var statearr_32105_32191 = state_32099__$1;
(statearr_32105_32191[(2)] = null);

(statearr_32105_32191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (20))){
var inst_32003 = (state_32099[(12)]);
var inst_32011 = figwheel.client.file_reloading.sort_files.call(null,inst_32003);
var state_32099__$1 = state_32099;
var statearr_32106_32192 = state_32099__$1;
(statearr_32106_32192[(2)] = inst_32011);

(statearr_32106_32192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (27))){
var state_32099__$1 = state_32099;
var statearr_32107_32193 = state_32099__$1;
(statearr_32107_32193[(2)] = null);

(statearr_32107_32193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (1))){
var inst_31952 = (state_32099[(13)]);
var inst_31949 = before_jsload.call(null,files);
var inst_31950 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31951 = (function (){return ((function (inst_31952,inst_31949,inst_31950,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31694_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31694_SHARP_);
});
;})(inst_31952,inst_31949,inst_31950,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31952__$1 = cljs.core.filter.call(null,inst_31951,files);
var inst_31953 = cljs.core.not_empty.call(null,inst_31952__$1);
var state_32099__$1 = (function (){var statearr_32108 = state_32099;
(statearr_32108[(14)] = inst_31950);

(statearr_32108[(13)] = inst_31952__$1);

(statearr_32108[(15)] = inst_31949);

return statearr_32108;
})();
if(cljs.core.truth_(inst_31953)){
var statearr_32109_32194 = state_32099__$1;
(statearr_32109_32194[(1)] = (2));

} else {
var statearr_32110_32195 = state_32099__$1;
(statearr_32110_32195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (24))){
var state_32099__$1 = state_32099;
var statearr_32111_32196 = state_32099__$1;
(statearr_32111_32196[(2)] = null);

(statearr_32111_32196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (39))){
var inst_32053 = (state_32099[(16)]);
var state_32099__$1 = state_32099;
var statearr_32112_32197 = state_32099__$1;
(statearr_32112_32197[(2)] = inst_32053);

(statearr_32112_32197[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (46))){
var inst_32094 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32113_32198 = state_32099__$1;
(statearr_32113_32198[(2)] = inst_32094);

(statearr_32113_32198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (4))){
var inst_31997 = (state_32099[(2)]);
var inst_31998 = cljs.core.List.EMPTY;
var inst_31999 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31998);
var inst_32000 = (function (){return ((function (inst_31997,inst_31998,inst_31999,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31695_SHARP_){
var and__22564__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31695_SHARP_);
if(cljs.core.truth_(and__22564__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31695_SHARP_));
} else {
return and__22564__auto__;
}
});
;})(inst_31997,inst_31998,inst_31999,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32001 = cljs.core.filter.call(null,inst_32000,files);
var inst_32002 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32003 = cljs.core.concat.call(null,inst_32001,inst_32002);
var state_32099__$1 = (function (){var statearr_32114 = state_32099;
(statearr_32114[(17)] = inst_31997);

(statearr_32114[(18)] = inst_31999);

(statearr_32114[(12)] = inst_32003);

return statearr_32114;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32115_32199 = state_32099__$1;
(statearr_32115_32199[(1)] = (16));

} else {
var statearr_32116_32200 = state_32099__$1;
(statearr_32116_32200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (15))){
var inst_31987 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32117_32201 = state_32099__$1;
(statearr_32117_32201[(2)] = inst_31987);

(statearr_32117_32201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (21))){
var inst_32013 = (state_32099[(19)]);
var inst_32013__$1 = (state_32099[(2)]);
var inst_32014 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32013__$1);
var state_32099__$1 = (function (){var statearr_32118 = state_32099;
(statearr_32118[(19)] = inst_32013__$1);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32099__$1,(22),inst_32014);
} else {
if((state_val_32100 === (31))){
var inst_32097 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32099__$1,inst_32097);
} else {
if((state_val_32100 === (32))){
var inst_32053 = (state_32099[(16)]);
var inst_32058 = inst_32053.cljs$lang$protocol_mask$partition0$;
var inst_32059 = (inst_32058 & (64));
var inst_32060 = inst_32053.cljs$core$ISeq$;
var inst_32061 = (inst_32059) || (inst_32060);
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_32061)){
var statearr_32119_32202 = state_32099__$1;
(statearr_32119_32202[(1)] = (35));

} else {
var statearr_32120_32203 = state_32099__$1;
(statearr_32120_32203[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (40))){
var inst_32074 = (state_32099[(20)]);
var inst_32073 = (state_32099[(2)]);
var inst_32074__$1 = cljs.core.get.call(null,inst_32073,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32075 = cljs.core.get.call(null,inst_32073,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32076 = cljs.core.not_empty.call(null,inst_32074__$1);
var state_32099__$1 = (function (){var statearr_32121 = state_32099;
(statearr_32121[(20)] = inst_32074__$1);

(statearr_32121[(21)] = inst_32075);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32076)){
var statearr_32122_32204 = state_32099__$1;
(statearr_32122_32204[(1)] = (41));

} else {
var statearr_32123_32205 = state_32099__$1;
(statearr_32123_32205[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (33))){
var state_32099__$1 = state_32099;
var statearr_32124_32206 = state_32099__$1;
(statearr_32124_32206[(2)] = false);

(statearr_32124_32206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (13))){
var inst_31973 = (state_32099[(22)]);
var inst_31977 = cljs.core.chunk_first.call(null,inst_31973);
var inst_31978 = cljs.core.chunk_rest.call(null,inst_31973);
var inst_31979 = cljs.core.count.call(null,inst_31977);
var inst_31960 = inst_31978;
var inst_31961 = inst_31977;
var inst_31962 = inst_31979;
var inst_31963 = (0);
var state_32099__$1 = (function (){var statearr_32125 = state_32099;
(statearr_32125[(7)] = inst_31963);

(statearr_32125[(8)] = inst_31960);

(statearr_32125[(9)] = inst_31962);

(statearr_32125[(10)] = inst_31961);

return statearr_32125;
})();
var statearr_32126_32207 = state_32099__$1;
(statearr_32126_32207[(2)] = null);

(statearr_32126_32207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (22))){
var inst_32021 = (state_32099[(23)]);
var inst_32017 = (state_32099[(24)]);
var inst_32013 = (state_32099[(19)]);
var inst_32016 = (state_32099[(25)]);
var inst_32016__$1 = (state_32099[(2)]);
var inst_32017__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32016__$1);
var inst_32018 = (function (){var all_files = inst_32013;
var res_SINGLEQUOTE_ = inst_32016__$1;
var res = inst_32017__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32021,inst_32017,inst_32013,inst_32016,inst_32016__$1,inst_32017__$1,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31696_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31696_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32021,inst_32017,inst_32013,inst_32016,inst_32016__$1,inst_32017__$1,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32019 = cljs.core.filter.call(null,inst_32018,inst_32016__$1);
var inst_32020 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32021__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32020);
var inst_32022 = cljs.core.not_empty.call(null,inst_32021__$1);
var state_32099__$1 = (function (){var statearr_32127 = state_32099;
(statearr_32127[(23)] = inst_32021__$1);

(statearr_32127[(24)] = inst_32017__$1);

(statearr_32127[(26)] = inst_32019);

(statearr_32127[(25)] = inst_32016__$1);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32022)){
var statearr_32128_32208 = state_32099__$1;
(statearr_32128_32208[(1)] = (23));

} else {
var statearr_32129_32209 = state_32099__$1;
(statearr_32129_32209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (36))){
var state_32099__$1 = state_32099;
var statearr_32130_32210 = state_32099__$1;
(statearr_32130_32210[(2)] = false);

(statearr_32130_32210[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (41))){
var inst_32074 = (state_32099[(20)]);
var inst_32078 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32079 = cljs.core.map.call(null,inst_32078,inst_32074);
var inst_32080 = cljs.core.pr_str.call(null,inst_32079);
var inst_32081 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32080)].join('');
var inst_32082 = figwheel.client.utils.log.call(null,inst_32081);
var state_32099__$1 = state_32099;
var statearr_32131_32211 = state_32099__$1;
(statearr_32131_32211[(2)] = inst_32082);

(statearr_32131_32211[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (43))){
var inst_32075 = (state_32099[(21)]);
var inst_32085 = (state_32099[(2)]);
var inst_32086 = cljs.core.not_empty.call(null,inst_32075);
var state_32099__$1 = (function (){var statearr_32132 = state_32099;
(statearr_32132[(27)] = inst_32085);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32086)){
var statearr_32133_32212 = state_32099__$1;
(statearr_32133_32212[(1)] = (44));

} else {
var statearr_32134_32213 = state_32099__$1;
(statearr_32134_32213[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (29))){
var inst_32021 = (state_32099[(23)]);
var inst_32017 = (state_32099[(24)]);
var inst_32013 = (state_32099[(19)]);
var inst_32019 = (state_32099[(26)]);
var inst_32016 = (state_32099[(25)]);
var inst_32053 = (state_32099[(16)]);
var inst_32049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32052 = (function (){var all_files = inst_32013;
var res_SINGLEQUOTE_ = inst_32016;
var res = inst_32017;
var files_not_loaded = inst_32019;
var dependencies_that_loaded = inst_32021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32053,inst_32049,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32051){
var map__32135 = p__32051;
var map__32135__$1 = ((((!((map__32135 == null)))?((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var namespace = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32053,inst_32049,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32053__$1 = cljs.core.group_by.call(null,inst_32052,inst_32019);
var inst_32055 = (inst_32053__$1 == null);
var inst_32056 = cljs.core.not.call(null,inst_32055);
var state_32099__$1 = (function (){var statearr_32137 = state_32099;
(statearr_32137[(28)] = inst_32049);

(statearr_32137[(16)] = inst_32053__$1);

return statearr_32137;
})();
if(inst_32056){
var statearr_32138_32214 = state_32099__$1;
(statearr_32138_32214[(1)] = (32));

} else {
var statearr_32139_32215 = state_32099__$1;
(statearr_32139_32215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (44))){
var inst_32075 = (state_32099[(21)]);
var inst_32088 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32075);
var inst_32089 = cljs.core.pr_str.call(null,inst_32088);
var inst_32090 = [cljs.core.str("not required: "),cljs.core.str(inst_32089)].join('');
var inst_32091 = figwheel.client.utils.log.call(null,inst_32090);
var state_32099__$1 = state_32099;
var statearr_32140_32216 = state_32099__$1;
(statearr_32140_32216[(2)] = inst_32091);

(statearr_32140_32216[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (6))){
var inst_31994 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32141_32217 = state_32099__$1;
(statearr_32141_32217[(2)] = inst_31994);

(statearr_32141_32217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (28))){
var inst_32019 = (state_32099[(26)]);
var inst_32046 = (state_32099[(2)]);
var inst_32047 = cljs.core.not_empty.call(null,inst_32019);
var state_32099__$1 = (function (){var statearr_32142 = state_32099;
(statearr_32142[(29)] = inst_32046);

return statearr_32142;
})();
if(cljs.core.truth_(inst_32047)){
var statearr_32143_32218 = state_32099__$1;
(statearr_32143_32218[(1)] = (29));

} else {
var statearr_32144_32219 = state_32099__$1;
(statearr_32144_32219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (25))){
var inst_32017 = (state_32099[(24)]);
var inst_32033 = (state_32099[(2)]);
var inst_32034 = cljs.core.not_empty.call(null,inst_32017);
var state_32099__$1 = (function (){var statearr_32145 = state_32099;
(statearr_32145[(30)] = inst_32033);

return statearr_32145;
})();
if(cljs.core.truth_(inst_32034)){
var statearr_32146_32220 = state_32099__$1;
(statearr_32146_32220[(1)] = (26));

} else {
var statearr_32147_32221 = state_32099__$1;
(statearr_32147_32221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (34))){
var inst_32068 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_32068)){
var statearr_32148_32222 = state_32099__$1;
(statearr_32148_32222[(1)] = (38));

} else {
var statearr_32149_32223 = state_32099__$1;
(statearr_32149_32223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (17))){
var state_32099__$1 = state_32099;
var statearr_32150_32224 = state_32099__$1;
(statearr_32150_32224[(2)] = recompile_dependents);

(statearr_32150_32224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (3))){
var state_32099__$1 = state_32099;
var statearr_32151_32225 = state_32099__$1;
(statearr_32151_32225[(2)] = null);

(statearr_32151_32225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (12))){
var inst_31990 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32152_32226 = state_32099__$1;
(statearr_32152_32226[(2)] = inst_31990);

(statearr_32152_32226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (2))){
var inst_31952 = (state_32099[(13)]);
var inst_31959 = cljs.core.seq.call(null,inst_31952);
var inst_31960 = inst_31959;
var inst_31961 = null;
var inst_31962 = (0);
var inst_31963 = (0);
var state_32099__$1 = (function (){var statearr_32153 = state_32099;
(statearr_32153[(7)] = inst_31963);

(statearr_32153[(8)] = inst_31960);

(statearr_32153[(9)] = inst_31962);

(statearr_32153[(10)] = inst_31961);

return statearr_32153;
})();
var statearr_32154_32227 = state_32099__$1;
(statearr_32154_32227[(2)] = null);

(statearr_32154_32227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (23))){
var inst_32021 = (state_32099[(23)]);
var inst_32017 = (state_32099[(24)]);
var inst_32013 = (state_32099[(19)]);
var inst_32019 = (state_32099[(26)]);
var inst_32016 = (state_32099[(25)]);
var inst_32024 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32026 = (function (){var all_files = inst_32013;
var res_SINGLEQUOTE_ = inst_32016;
var res = inst_32017;
var files_not_loaded = inst_32019;
var dependencies_that_loaded = inst_32021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32024,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32025){
var map__32155 = p__32025;
var map__32155__$1 = ((((!((map__32155 == null)))?((((map__32155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32155):map__32155);
var request_url = cljs.core.get.call(null,map__32155__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32024,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32027 = cljs.core.reverse.call(null,inst_32021);
var inst_32028 = cljs.core.map.call(null,inst_32026,inst_32027);
var inst_32029 = cljs.core.pr_str.call(null,inst_32028);
var inst_32030 = figwheel.client.utils.log.call(null,inst_32029);
var state_32099__$1 = (function (){var statearr_32157 = state_32099;
(statearr_32157[(31)] = inst_32024);

return statearr_32157;
})();
var statearr_32158_32228 = state_32099__$1;
(statearr_32158_32228[(2)] = inst_32030);

(statearr_32158_32228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (35))){
var state_32099__$1 = state_32099;
var statearr_32159_32229 = state_32099__$1;
(statearr_32159_32229[(2)] = true);

(statearr_32159_32229[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (19))){
var inst_32003 = (state_32099[(12)]);
var inst_32009 = figwheel.client.file_reloading.expand_files.call(null,inst_32003);
var state_32099__$1 = state_32099;
var statearr_32160_32230 = state_32099__$1;
(statearr_32160_32230[(2)] = inst_32009);

(statearr_32160_32230[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (11))){
var state_32099__$1 = state_32099;
var statearr_32161_32231 = state_32099__$1;
(statearr_32161_32231[(2)] = null);

(statearr_32161_32231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (9))){
var inst_31992 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32162_32232 = state_32099__$1;
(statearr_32162_32232[(2)] = inst_31992);

(statearr_32162_32232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (5))){
var inst_31963 = (state_32099[(7)]);
var inst_31962 = (state_32099[(9)]);
var inst_31965 = (inst_31963 < inst_31962);
var inst_31966 = inst_31965;
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_31966)){
var statearr_32163_32233 = state_32099__$1;
(statearr_32163_32233[(1)] = (7));

} else {
var statearr_32164_32234 = state_32099__$1;
(statearr_32164_32234[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (14))){
var inst_31973 = (state_32099[(22)]);
var inst_31982 = cljs.core.first.call(null,inst_31973);
var inst_31983 = figwheel.client.file_reloading.eval_body.call(null,inst_31982,opts);
var inst_31984 = cljs.core.next.call(null,inst_31973);
var inst_31960 = inst_31984;
var inst_31961 = null;
var inst_31962 = (0);
var inst_31963 = (0);
var state_32099__$1 = (function (){var statearr_32165 = state_32099;
(statearr_32165[(7)] = inst_31963);

(statearr_32165[(8)] = inst_31960);

(statearr_32165[(9)] = inst_31962);

(statearr_32165[(10)] = inst_31961);

(statearr_32165[(32)] = inst_31983);

return statearr_32165;
})();
var statearr_32166_32235 = state_32099__$1;
(statearr_32166_32235[(2)] = null);

(statearr_32166_32235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (45))){
var state_32099__$1 = state_32099;
var statearr_32167_32236 = state_32099__$1;
(statearr_32167_32236[(2)] = null);

(statearr_32167_32236[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (26))){
var inst_32021 = (state_32099[(23)]);
var inst_32017 = (state_32099[(24)]);
var inst_32013 = (state_32099[(19)]);
var inst_32019 = (state_32099[(26)]);
var inst_32016 = (state_32099[(25)]);
var inst_32036 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32038 = (function (){var all_files = inst_32013;
var res_SINGLEQUOTE_ = inst_32016;
var res = inst_32017;
var files_not_loaded = inst_32019;
var dependencies_that_loaded = inst_32021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32036,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32037){
var map__32168 = p__32037;
var map__32168__$1 = ((((!((map__32168 == null)))?((((map__32168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32168):map__32168);
var namespace = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32036,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32039 = cljs.core.map.call(null,inst_32038,inst_32017);
var inst_32040 = cljs.core.pr_str.call(null,inst_32039);
var inst_32041 = figwheel.client.utils.log.call(null,inst_32040);
var inst_32042 = (function (){var all_files = inst_32013;
var res_SINGLEQUOTE_ = inst_32016;
var res = inst_32017;
var files_not_loaded = inst_32019;
var dependencies_that_loaded = inst_32021;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32036,inst_32038,inst_32039,inst_32040,inst_32041,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32021,inst_32017,inst_32013,inst_32019,inst_32016,inst_32036,inst_32038,inst_32039,inst_32040,inst_32041,state_val_32100,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32043 = setTimeout(inst_32042,(10));
var state_32099__$1 = (function (){var statearr_32170 = state_32099;
(statearr_32170[(33)] = inst_32036);

(statearr_32170[(34)] = inst_32041);

return statearr_32170;
})();
var statearr_32171_32237 = state_32099__$1;
(statearr_32171_32237[(2)] = inst_32043);

(statearr_32171_32237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (16))){
var state_32099__$1 = state_32099;
var statearr_32172_32238 = state_32099__$1;
(statearr_32172_32238[(2)] = reload_dependents);

(statearr_32172_32238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (38))){
var inst_32053 = (state_32099[(16)]);
var inst_32070 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32053);
var state_32099__$1 = state_32099;
var statearr_32173_32239 = state_32099__$1;
(statearr_32173_32239[(2)] = inst_32070);

(statearr_32173_32239[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (30))){
var state_32099__$1 = state_32099;
var statearr_32174_32240 = state_32099__$1;
(statearr_32174_32240[(2)] = null);

(statearr_32174_32240[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (10))){
var inst_31973 = (state_32099[(22)]);
var inst_31975 = cljs.core.chunked_seq_QMARK_.call(null,inst_31973);
var state_32099__$1 = state_32099;
if(inst_31975){
var statearr_32175_32241 = state_32099__$1;
(statearr_32175_32241[(1)] = (13));

} else {
var statearr_32176_32242 = state_32099__$1;
(statearr_32176_32242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (18))){
var inst_32007 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
if(cljs.core.truth_(inst_32007)){
var statearr_32177_32243 = state_32099__$1;
(statearr_32177_32243[(1)] = (19));

} else {
var statearr_32178_32244 = state_32099__$1;
(statearr_32178_32244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (42))){
var state_32099__$1 = state_32099;
var statearr_32179_32245 = state_32099__$1;
(statearr_32179_32245[(2)] = null);

(statearr_32179_32245[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (37))){
var inst_32065 = (state_32099[(2)]);
var state_32099__$1 = state_32099;
var statearr_32180_32246 = state_32099__$1;
(statearr_32180_32246[(2)] = inst_32065);

(statearr_32180_32246[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32100 === (8))){
var inst_31960 = (state_32099[(8)]);
var inst_31973 = (state_32099[(22)]);
var inst_31973__$1 = cljs.core.seq.call(null,inst_31960);
var state_32099__$1 = (function (){var statearr_32181 = state_32099;
(statearr_32181[(22)] = inst_31973__$1);

return statearr_32181;
})();
if(inst_31973__$1){
var statearr_32182_32247 = state_32099__$1;
(statearr_32182_32247[(1)] = (10));

} else {
var statearr_32183_32248 = state_32099__$1;
(statearr_32183_32248[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26595__auto__,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____0 = (function (){
var statearr_32187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32187[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__);

(statearr_32187[(1)] = (1));

return statearr_32187;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____1 = (function (state_32099){
while(true){
var ret_value__26597__auto__ = (function (){try{while(true){
var result__26598__auto__ = switch__26595__auto__.call(null,state_32099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26598__auto__;
}
break;
}
}catch (e32188){if((e32188 instanceof Object)){
var ex__26599__auto__ = e32188;
var statearr_32189_32249 = state_32099;
(statearr_32189_32249[(5)] = ex__26599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32250 = state_32099;
state_32099 = G__32250;
continue;
} else {
return ret_value__26597__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__ = function(state_32099){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____1.call(this,state_32099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26596__auto__;
})()
;})(switch__26595__auto__,c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26709__auto__ = (function (){var statearr_32190 = f__26708__auto__.call(null);
(statearr_32190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26707__auto__);

return statearr_32190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26709__auto__);
});})(c__26707__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,reload_dependents,map__31946,map__31946__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26707__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32253,link){
var map__32256 = p__32253;
var map__32256__$1 = ((((!((map__32256 == null)))?((((map__32256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32256):map__32256);
var file = cljs.core.get.call(null,map__32256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32256,map__32256__$1,file){
return (function (p1__32251_SHARP_,p2__32252_SHARP_){
if(cljs.core._EQ_.call(null,p1__32251_SHARP_,p2__32252_SHARP_)){
return p1__32251_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32256,map__32256__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32262){
var map__32263 = p__32262;
var map__32263__$1 = ((((!((map__32263 == null)))?((((map__32263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32263):map__32263);
var match_length = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32263__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32258_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32258_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32265 = [];
var len__23646__auto___32268 = arguments.length;
var i__23647__auto___32269 = (0);
while(true){
if((i__23647__auto___32269 < len__23646__auto___32268)){
args32265.push((arguments[i__23647__auto___32269]));

var G__32270 = (i__23647__auto___32269 + (1));
i__23647__auto___32269 = G__32270;
continue;
} else {
}
break;
}

var G__32267 = args32265.length;
switch (G__32267) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32265.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32272_SHARP_,p2__32273_SHARP_){
return cljs.core.assoc.call(null,p1__32272_SHARP_,cljs.core.get.call(null,p2__32273_SHARP_,key),p2__32273_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32274){
var map__32277 = p__32274;
var map__32277__$1 = ((((!((map__32277 == null)))?((((map__32277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32277):map__32277);
var f_data = map__32277__$1;
var file = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32279,files_msg){
var map__32286 = p__32279;
var map__32286__$1 = ((((!((map__32286 == null)))?((((map__32286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32286):map__32286);
var opts = map__32286__$1;
var on_cssload = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32288_32292 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32289_32293 = null;
var count__32290_32294 = (0);
var i__32291_32295 = (0);
while(true){
if((i__32291_32295 < count__32290_32294)){
var f_32296 = cljs.core._nth.call(null,chunk__32289_32293,i__32291_32295);
figwheel.client.file_reloading.reload_css_file.call(null,f_32296);

var G__32297 = seq__32288_32292;
var G__32298 = chunk__32289_32293;
var G__32299 = count__32290_32294;
var G__32300 = (i__32291_32295 + (1));
seq__32288_32292 = G__32297;
chunk__32289_32293 = G__32298;
count__32290_32294 = G__32299;
i__32291_32295 = G__32300;
continue;
} else {
var temp__4425__auto___32301 = cljs.core.seq.call(null,seq__32288_32292);
if(temp__4425__auto___32301){
var seq__32288_32302__$1 = temp__4425__auto___32301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32288_32302__$1)){
var c__23387__auto___32303 = cljs.core.chunk_first.call(null,seq__32288_32302__$1);
var G__32304 = cljs.core.chunk_rest.call(null,seq__32288_32302__$1);
var G__32305 = c__23387__auto___32303;
var G__32306 = cljs.core.count.call(null,c__23387__auto___32303);
var G__32307 = (0);
seq__32288_32292 = G__32304;
chunk__32289_32293 = G__32305;
count__32290_32294 = G__32306;
i__32291_32295 = G__32307;
continue;
} else {
var f_32308 = cljs.core.first.call(null,seq__32288_32302__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32308);

var G__32309 = cljs.core.next.call(null,seq__32288_32302__$1);
var G__32310 = null;
var G__32311 = (0);
var G__32312 = (0);
seq__32288_32292 = G__32309;
chunk__32289_32293 = G__32310;
count__32290_32294 = G__32311;
i__32291_32295 = G__32312;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32286,map__32286__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32286,map__32286__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map