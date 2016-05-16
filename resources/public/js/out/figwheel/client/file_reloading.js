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
var or__22563__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22563__auto__){
return or__22563__auto__;
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
var or__22563__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31302_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31302_SHARP_));
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
var seq__31307 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31308 = null;
var count__31309 = (0);
var i__31310 = (0);
while(true){
if((i__31310 < count__31309)){
var n = cljs.core._nth.call(null,chunk__31308,i__31310);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31311 = seq__31307;
var G__31312 = chunk__31308;
var G__31313 = count__31309;
var G__31314 = (i__31310 + (1));
seq__31307 = G__31311;
chunk__31308 = G__31312;
count__31309 = G__31313;
i__31310 = G__31314;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31307);
if(temp__4425__auto__){
var seq__31307__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31307__$1)){
var c__23374__auto__ = cljs.core.chunk_first.call(null,seq__31307__$1);
var G__31315 = cljs.core.chunk_rest.call(null,seq__31307__$1);
var G__31316 = c__23374__auto__;
var G__31317 = cljs.core.count.call(null,c__23374__auto__);
var G__31318 = (0);
seq__31307 = G__31315;
chunk__31308 = G__31316;
count__31309 = G__31317;
i__31310 = G__31318;
continue;
} else {
var n = cljs.core.first.call(null,seq__31307__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31319 = cljs.core.next.call(null,seq__31307__$1);
var G__31320 = null;
var G__31321 = (0);
var G__31322 = (0);
seq__31307 = G__31319;
chunk__31308 = G__31320;
count__31309 = G__31321;
i__31310 = G__31322;
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

var seq__31361_31368 = cljs.core.seq.call(null,deps);
var chunk__31362_31369 = null;
var count__31363_31370 = (0);
var i__31364_31371 = (0);
while(true){
if((i__31364_31371 < count__31363_31370)){
var dep_31372 = cljs.core._nth.call(null,chunk__31362_31369,i__31364_31371);
topo_sort_helper_STAR_.call(null,dep_31372,(depth + (1)),state);

var G__31373 = seq__31361_31368;
var G__31374 = chunk__31362_31369;
var G__31375 = count__31363_31370;
var G__31376 = (i__31364_31371 + (1));
seq__31361_31368 = G__31373;
chunk__31362_31369 = G__31374;
count__31363_31370 = G__31375;
i__31364_31371 = G__31376;
continue;
} else {
var temp__4425__auto___31377 = cljs.core.seq.call(null,seq__31361_31368);
if(temp__4425__auto___31377){
var seq__31361_31378__$1 = temp__4425__auto___31377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31361_31378__$1)){
var c__23374__auto___31379 = cljs.core.chunk_first.call(null,seq__31361_31378__$1);
var G__31380 = cljs.core.chunk_rest.call(null,seq__31361_31378__$1);
var G__31381 = c__23374__auto___31379;
var G__31382 = cljs.core.count.call(null,c__23374__auto___31379);
var G__31383 = (0);
seq__31361_31368 = G__31380;
chunk__31362_31369 = G__31381;
count__31363_31370 = G__31382;
i__31364_31371 = G__31383;
continue;
} else {
var dep_31384 = cljs.core.first.call(null,seq__31361_31378__$1);
topo_sort_helper_STAR_.call(null,dep_31384,(depth + (1)),state);

var G__31385 = cljs.core.next.call(null,seq__31361_31378__$1);
var G__31386 = null;
var G__31387 = (0);
var G__31388 = (0);
seq__31361_31368 = G__31385;
chunk__31362_31369 = G__31386;
count__31363_31370 = G__31387;
i__31364_31371 = G__31388;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31365){
var vec__31367 = p__31365;
var x = cljs.core.nth.call(null,vec__31367,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31367,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31367,x,xs,get_deps__$1){
return (function (p1__31323_SHARP_){
return clojure.set.difference.call(null,p1__31323_SHARP_,x);
});})(vec__31367,x,xs,get_deps__$1))
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
var seq__31401 = cljs.core.seq.call(null,provides);
var chunk__31402 = null;
var count__31403 = (0);
var i__31404 = (0);
while(true){
if((i__31404 < count__31403)){
var prov = cljs.core._nth.call(null,chunk__31402,i__31404);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31405_31413 = cljs.core.seq.call(null,requires);
var chunk__31406_31414 = null;
var count__31407_31415 = (0);
var i__31408_31416 = (0);
while(true){
if((i__31408_31416 < count__31407_31415)){
var req_31417 = cljs.core._nth.call(null,chunk__31406_31414,i__31408_31416);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31417,prov);

var G__31418 = seq__31405_31413;
var G__31419 = chunk__31406_31414;
var G__31420 = count__31407_31415;
var G__31421 = (i__31408_31416 + (1));
seq__31405_31413 = G__31418;
chunk__31406_31414 = G__31419;
count__31407_31415 = G__31420;
i__31408_31416 = G__31421;
continue;
} else {
var temp__4425__auto___31422 = cljs.core.seq.call(null,seq__31405_31413);
if(temp__4425__auto___31422){
var seq__31405_31423__$1 = temp__4425__auto___31422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31405_31423__$1)){
var c__23374__auto___31424 = cljs.core.chunk_first.call(null,seq__31405_31423__$1);
var G__31425 = cljs.core.chunk_rest.call(null,seq__31405_31423__$1);
var G__31426 = c__23374__auto___31424;
var G__31427 = cljs.core.count.call(null,c__23374__auto___31424);
var G__31428 = (0);
seq__31405_31413 = G__31425;
chunk__31406_31414 = G__31426;
count__31407_31415 = G__31427;
i__31408_31416 = G__31428;
continue;
} else {
var req_31429 = cljs.core.first.call(null,seq__31405_31423__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31429,prov);

var G__31430 = cljs.core.next.call(null,seq__31405_31423__$1);
var G__31431 = null;
var G__31432 = (0);
var G__31433 = (0);
seq__31405_31413 = G__31430;
chunk__31406_31414 = G__31431;
count__31407_31415 = G__31432;
i__31408_31416 = G__31433;
continue;
}
} else {
}
}
break;
}

var G__31434 = seq__31401;
var G__31435 = chunk__31402;
var G__31436 = count__31403;
var G__31437 = (i__31404 + (1));
seq__31401 = G__31434;
chunk__31402 = G__31435;
count__31403 = G__31436;
i__31404 = G__31437;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31401);
if(temp__4425__auto__){
var seq__31401__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31401__$1)){
var c__23374__auto__ = cljs.core.chunk_first.call(null,seq__31401__$1);
var G__31438 = cljs.core.chunk_rest.call(null,seq__31401__$1);
var G__31439 = c__23374__auto__;
var G__31440 = cljs.core.count.call(null,c__23374__auto__);
var G__31441 = (0);
seq__31401 = G__31438;
chunk__31402 = G__31439;
count__31403 = G__31440;
i__31404 = G__31441;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31401__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31409_31442 = cljs.core.seq.call(null,requires);
var chunk__31410_31443 = null;
var count__31411_31444 = (0);
var i__31412_31445 = (0);
while(true){
if((i__31412_31445 < count__31411_31444)){
var req_31446 = cljs.core._nth.call(null,chunk__31410_31443,i__31412_31445);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31446,prov);

var G__31447 = seq__31409_31442;
var G__31448 = chunk__31410_31443;
var G__31449 = count__31411_31444;
var G__31450 = (i__31412_31445 + (1));
seq__31409_31442 = G__31447;
chunk__31410_31443 = G__31448;
count__31411_31444 = G__31449;
i__31412_31445 = G__31450;
continue;
} else {
var temp__4425__auto___31451__$1 = cljs.core.seq.call(null,seq__31409_31442);
if(temp__4425__auto___31451__$1){
var seq__31409_31452__$1 = temp__4425__auto___31451__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31409_31452__$1)){
var c__23374__auto___31453 = cljs.core.chunk_first.call(null,seq__31409_31452__$1);
var G__31454 = cljs.core.chunk_rest.call(null,seq__31409_31452__$1);
var G__31455 = c__23374__auto___31453;
var G__31456 = cljs.core.count.call(null,c__23374__auto___31453);
var G__31457 = (0);
seq__31409_31442 = G__31454;
chunk__31410_31443 = G__31455;
count__31411_31444 = G__31456;
i__31412_31445 = G__31457;
continue;
} else {
var req_31458 = cljs.core.first.call(null,seq__31409_31452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31458,prov);

var G__31459 = cljs.core.next.call(null,seq__31409_31452__$1);
var G__31460 = null;
var G__31461 = (0);
var G__31462 = (0);
seq__31409_31442 = G__31459;
chunk__31410_31443 = G__31460;
count__31411_31444 = G__31461;
i__31412_31445 = G__31462;
continue;
}
} else {
}
}
break;
}

var G__31463 = cljs.core.next.call(null,seq__31401__$1);
var G__31464 = null;
var G__31465 = (0);
var G__31466 = (0);
seq__31401 = G__31463;
chunk__31402 = G__31464;
count__31403 = G__31465;
i__31404 = G__31466;
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
var seq__31471_31475 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31472_31476 = null;
var count__31473_31477 = (0);
var i__31474_31478 = (0);
while(true){
if((i__31474_31478 < count__31473_31477)){
var ns_31479 = cljs.core._nth.call(null,chunk__31472_31476,i__31474_31478);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31479);

var G__31480 = seq__31471_31475;
var G__31481 = chunk__31472_31476;
var G__31482 = count__31473_31477;
var G__31483 = (i__31474_31478 + (1));
seq__31471_31475 = G__31480;
chunk__31472_31476 = G__31481;
count__31473_31477 = G__31482;
i__31474_31478 = G__31483;
continue;
} else {
var temp__4425__auto___31484 = cljs.core.seq.call(null,seq__31471_31475);
if(temp__4425__auto___31484){
var seq__31471_31485__$1 = temp__4425__auto___31484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31471_31485__$1)){
var c__23374__auto___31486 = cljs.core.chunk_first.call(null,seq__31471_31485__$1);
var G__31487 = cljs.core.chunk_rest.call(null,seq__31471_31485__$1);
var G__31488 = c__23374__auto___31486;
var G__31489 = cljs.core.count.call(null,c__23374__auto___31486);
var G__31490 = (0);
seq__31471_31475 = G__31487;
chunk__31472_31476 = G__31488;
count__31473_31477 = G__31489;
i__31474_31478 = G__31490;
continue;
} else {
var ns_31491 = cljs.core.first.call(null,seq__31471_31485__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31491);

var G__31492 = cljs.core.next.call(null,seq__31471_31485__$1);
var G__31493 = null;
var G__31494 = (0);
var G__31495 = (0);
seq__31471_31475 = G__31492;
chunk__31472_31476 = G__31493;
count__31473_31477 = G__31494;
i__31474_31478 = G__31495;
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
goog.require_figwheel_backup_ = (function (){var or__22563__auto__ = goog.require__;
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
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
var G__31496__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31497__i = 0, G__31497__a = new Array(arguments.length -  0);
while (G__31497__i < G__31497__a.length) {G__31497__a[G__31497__i] = arguments[G__31497__i + 0]; ++G__31497__i;}
  args = new cljs.core.IndexedSeq(G__31497__a,0);
} 
return G__31496__delegate.call(this,args);};
G__31496.cljs$lang$maxFixedArity = 0;
G__31496.cljs$lang$applyTo = (function (arglist__31498){
var args = cljs.core.seq(arglist__31498);
return G__31496__delegate(args);
});
G__31496.cljs$core$IFn$_invoke$arity$variadic = G__31496__delegate;
return G__31496;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31500 = cljs.core._EQ_;
var expr__31501 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31500.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31501))){
var path_parts = ((function (pred__31500,expr__31501){
return (function (p1__31499_SHARP_){
return clojure.string.split.call(null,p1__31499_SHARP_,/[\/\\]/);
});})(pred__31500,expr__31501))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31500,expr__31501){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31503){if((e31503 instanceof Error)){
var e = e31503;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31503;

}
}})());
});
;})(path_parts,sep,root,pred__31500,expr__31501))
} else {
if(cljs.core.truth_(pred__31500.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31501))){
return ((function (pred__31500,expr__31501){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__31500,expr__31501){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31500,expr__31501))
);

return deferred.addErrback(((function (deferred,pred__31500,expr__31501){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31500,expr__31501))
);
});
;})(pred__31500,expr__31501))
} else {
return ((function (pred__31500,expr__31501){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31500,expr__31501))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31504,callback){
var map__31507 = p__31504;
var map__31507__$1 = ((((!((map__31507 == null)))?((((map__31507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31507):map__31507);
var file_msg = map__31507__$1;
var request_url = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31507,map__31507__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31507,map__31507__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_31531){
var state_val_31532 = (state_31531[(1)]);
if((state_val_31532 === (7))){
var inst_31527 = (state_31531[(2)]);
var state_31531__$1 = state_31531;
var statearr_31533_31553 = state_31531__$1;
(statearr_31533_31553[(2)] = inst_31527);

(statearr_31533_31553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (1))){
var state_31531__$1 = state_31531;
var statearr_31534_31554 = state_31531__$1;
(statearr_31534_31554[(2)] = null);

(statearr_31534_31554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (4))){
var inst_31511 = (state_31531[(7)]);
var inst_31511__$1 = (state_31531[(2)]);
var state_31531__$1 = (function (){var statearr_31535 = state_31531;
(statearr_31535[(7)] = inst_31511__$1);

return statearr_31535;
})();
if(cljs.core.truth_(inst_31511__$1)){
var statearr_31536_31555 = state_31531__$1;
(statearr_31536_31555[(1)] = (5));

} else {
var statearr_31537_31556 = state_31531__$1;
(statearr_31537_31556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (6))){
var state_31531__$1 = state_31531;
var statearr_31538_31557 = state_31531__$1;
(statearr_31538_31557[(2)] = null);

(statearr_31538_31557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (3))){
var inst_31529 = (state_31531[(2)]);
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31531__$1,inst_31529);
} else {
if((state_val_31532 === (2))){
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31531__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31532 === (11))){
var inst_31523 = (state_31531[(2)]);
var state_31531__$1 = (function (){var statearr_31539 = state_31531;
(statearr_31539[(8)] = inst_31523);

return statearr_31539;
})();
var statearr_31540_31558 = state_31531__$1;
(statearr_31540_31558[(2)] = null);

(statearr_31540_31558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (9))){
var inst_31515 = (state_31531[(9)]);
var inst_31517 = (state_31531[(10)]);
var inst_31519 = inst_31517.call(null,inst_31515);
var state_31531__$1 = state_31531;
var statearr_31541_31559 = state_31531__$1;
(statearr_31541_31559[(2)] = inst_31519);

(statearr_31541_31559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (5))){
var inst_31511 = (state_31531[(7)]);
var inst_31513 = figwheel.client.file_reloading.blocking_load.call(null,inst_31511);
var state_31531__$1 = state_31531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31531__$1,(8),inst_31513);
} else {
if((state_val_31532 === (10))){
var inst_31515 = (state_31531[(9)]);
var inst_31521 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31515);
var state_31531__$1 = state_31531;
var statearr_31542_31560 = state_31531__$1;
(statearr_31542_31560[(2)] = inst_31521);

(statearr_31542_31560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31532 === (8))){
var inst_31511 = (state_31531[(7)]);
var inst_31517 = (state_31531[(10)]);
var inst_31515 = (state_31531[(2)]);
var inst_31516 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31517__$1 = cljs.core.get.call(null,inst_31516,inst_31511);
var state_31531__$1 = (function (){var statearr_31543 = state_31531;
(statearr_31543[(9)] = inst_31515);

(statearr_31543[(10)] = inst_31517__$1);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31517__$1)){
var statearr_31544_31561 = state_31531__$1;
(statearr_31544_31561[(1)] = (9));

} else {
var statearr_31545_31562 = state_31531__$1;
(statearr_31545_31562[(1)] = (10));

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
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26583__auto__ = null;
var figwheel$client$file_reloading$state_machine__26583__auto____0 = (function (){
var statearr_31549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31549[(0)] = figwheel$client$file_reloading$state_machine__26583__auto__);

(statearr_31549[(1)] = (1));

return statearr_31549;
});
var figwheel$client$file_reloading$state_machine__26583__auto____1 = (function (state_31531){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_31531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e31550){if((e31550 instanceof Object)){
var ex__26586__auto__ = e31550;
var statearr_31551_31563 = state_31531;
(statearr_31551_31563[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31564 = state_31531;
state_31531 = G__31564;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26583__auto__ = function(state_31531){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26583__auto____1.call(this,state_31531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26583__auto____0;
figwheel$client$file_reloading$state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26583__auto____1;
return figwheel$client$file_reloading$state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_31552 = f__26695__auto__.call(null);
(statearr_31552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_31552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31565,callback){
var map__31568 = p__31565;
var map__31568__$1 = ((((!((map__31568 == null)))?((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var file_msg = map__31568__$1;
var namespace = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31568,map__31568__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31568,map__31568__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31570){
var map__31573 = p__31570;
var map__31573__$1 = ((((!((map__31573 == null)))?((((map__31573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31573):map__31573);
var file_msg = map__31573__$1;
var namespace = cljs.core.get.call(null,map__31573__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22551__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22551__auto__){
var or__22563__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
var or__22563__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22563__auto____$1)){
return or__22563__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22551__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31575,callback){
var map__31578 = p__31575;
var map__31578__$1 = ((((!((map__31578 == null)))?((((map__31578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31578):map__31578);
var file_msg = map__31578__$1;
var request_url = cljs.core.get.call(null,map__31578__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26694__auto___31666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto___31666,out){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto___31666,out){
return (function (state_31648){
var state_val_31649 = (state_31648[(1)]);
if((state_val_31649 === (1))){
var inst_31626 = cljs.core.nth.call(null,files,(0),null);
var inst_31627 = cljs.core.nthnext.call(null,files,(1));
var inst_31628 = files;
var state_31648__$1 = (function (){var statearr_31650 = state_31648;
(statearr_31650[(7)] = inst_31628);

(statearr_31650[(8)] = inst_31626);

(statearr_31650[(9)] = inst_31627);

return statearr_31650;
})();
var statearr_31651_31667 = state_31648__$1;
(statearr_31651_31667[(2)] = null);

(statearr_31651_31667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (2))){
var inst_31631 = (state_31648[(10)]);
var inst_31628 = (state_31648[(7)]);
var inst_31631__$1 = cljs.core.nth.call(null,inst_31628,(0),null);
var inst_31632 = cljs.core.nthnext.call(null,inst_31628,(1));
var inst_31633 = (inst_31631__$1 == null);
var inst_31634 = cljs.core.not.call(null,inst_31633);
var state_31648__$1 = (function (){var statearr_31652 = state_31648;
(statearr_31652[(11)] = inst_31632);

(statearr_31652[(10)] = inst_31631__$1);

return statearr_31652;
})();
if(inst_31634){
var statearr_31653_31668 = state_31648__$1;
(statearr_31653_31668[(1)] = (4));

} else {
var statearr_31654_31669 = state_31648__$1;
(statearr_31654_31669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (3))){
var inst_31646 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31648__$1,inst_31646);
} else {
if((state_val_31649 === (4))){
var inst_31631 = (state_31648[(10)]);
var inst_31636 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31631);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31648__$1,(7),inst_31636);
} else {
if((state_val_31649 === (5))){
var inst_31642 = cljs.core.async.close_BANG_.call(null,out);
var state_31648__$1 = state_31648;
var statearr_31655_31670 = state_31648__$1;
(statearr_31655_31670[(2)] = inst_31642);

(statearr_31655_31670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (6))){
var inst_31644 = (state_31648[(2)]);
var state_31648__$1 = state_31648;
var statearr_31656_31671 = state_31648__$1;
(statearr_31656_31671[(2)] = inst_31644);

(statearr_31656_31671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31649 === (7))){
var inst_31632 = (state_31648[(11)]);
var inst_31638 = (state_31648[(2)]);
var inst_31639 = cljs.core.async.put_BANG_.call(null,out,inst_31638);
var inst_31628 = inst_31632;
var state_31648__$1 = (function (){var statearr_31657 = state_31648;
(statearr_31657[(7)] = inst_31628);

(statearr_31657[(12)] = inst_31639);

return statearr_31657;
})();
var statearr_31658_31672 = state_31648__$1;
(statearr_31658_31672[(2)] = null);

(statearr_31658_31672[(1)] = (2));


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
});})(c__26694__auto___31666,out))
;
return ((function (switch__26582__auto__,c__26694__auto___31666,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31662[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____1 = (function (state_31648){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_31648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__26586__auto__ = e31663;
var statearr_31664_31673 = state_31648;
(statearr_31664_31673[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31674 = state_31648;
state_31648 = G__31674;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__ = function(state_31648){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____1.call(this,state_31648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto___31666,out))
})();
var state__26696__auto__ = (function (){var statearr_31665 = f__26695__auto__.call(null);
(statearr_31665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto___31666);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto___31666,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31675,opts){
var map__31679 = p__31675;
var map__31679__$1 = ((((!((map__31679 == null)))?((((map__31679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31679):map__31679);
var eval_body__$1 = cljs.core.get.call(null,map__31679__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31679__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22551__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22551__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22551__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31681){var e = e31681;
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
return (function (p1__31682_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31682_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31687){
var vec__31688 = p__31687;
var k = cljs.core.nth.call(null,vec__31688,(0),null);
var v = cljs.core.nth.call(null,vec__31688,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31689){
var vec__31690 = p__31689;
var k = cljs.core.nth.call(null,vec__31690,(0),null);
var v = cljs.core.nth.call(null,vec__31690,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31694,p__31695){
var map__31942 = p__31694;
var map__31942__$1 = ((((!((map__31942 == null)))?((((map__31942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31942):map__31942);
var opts = map__31942__$1;
var before_jsload = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31942__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31943 = p__31695;
var map__31943__$1 = ((((!((map__31943 == null)))?((((map__31943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31943):map__31943);
var msg = map__31943__$1;
var files = cljs.core.get.call(null,map__31943__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31943__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31943__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32096){
var state_val_32097 = (state_32096[(1)]);
if((state_val_32097 === (7))){
var inst_31960 = (state_32096[(7)]);
var inst_31958 = (state_32096[(8)]);
var inst_31957 = (state_32096[(9)]);
var inst_31959 = (state_32096[(10)]);
var inst_31965 = cljs.core._nth.call(null,inst_31958,inst_31960);
var inst_31966 = figwheel.client.file_reloading.eval_body.call(null,inst_31965,opts);
var inst_31967 = (inst_31960 + (1));
var tmp32098 = inst_31958;
var tmp32099 = inst_31957;
var tmp32100 = inst_31959;
var inst_31957__$1 = tmp32099;
var inst_31958__$1 = tmp32098;
var inst_31959__$1 = tmp32100;
var inst_31960__$1 = inst_31967;
var state_32096__$1 = (function (){var statearr_32101 = state_32096;
(statearr_32101[(7)] = inst_31960__$1);

(statearr_32101[(11)] = inst_31966);

(statearr_32101[(8)] = inst_31958__$1);

(statearr_32101[(9)] = inst_31957__$1);

(statearr_32101[(10)] = inst_31959__$1);

return statearr_32101;
})();
var statearr_32102_32188 = state_32096__$1;
(statearr_32102_32188[(2)] = null);

(statearr_32102_32188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (20))){
var inst_32000 = (state_32096[(12)]);
var inst_32008 = figwheel.client.file_reloading.sort_files.call(null,inst_32000);
var state_32096__$1 = state_32096;
var statearr_32103_32189 = state_32096__$1;
(statearr_32103_32189[(2)] = inst_32008);

(statearr_32103_32189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (27))){
var state_32096__$1 = state_32096;
var statearr_32104_32190 = state_32096__$1;
(statearr_32104_32190[(2)] = null);

(statearr_32104_32190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (1))){
var inst_31949 = (state_32096[(13)]);
var inst_31946 = before_jsload.call(null,files);
var inst_31947 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31948 = (function (){return ((function (inst_31949,inst_31946,inst_31947,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31691_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31691_SHARP_);
});
;})(inst_31949,inst_31946,inst_31947,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31949__$1 = cljs.core.filter.call(null,inst_31948,files);
var inst_31950 = cljs.core.not_empty.call(null,inst_31949__$1);
var state_32096__$1 = (function (){var statearr_32105 = state_32096;
(statearr_32105[(13)] = inst_31949__$1);

(statearr_32105[(14)] = inst_31947);

(statearr_32105[(15)] = inst_31946);

return statearr_32105;
})();
if(cljs.core.truth_(inst_31950)){
var statearr_32106_32191 = state_32096__$1;
(statearr_32106_32191[(1)] = (2));

} else {
var statearr_32107_32192 = state_32096__$1;
(statearr_32107_32192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (24))){
var state_32096__$1 = state_32096;
var statearr_32108_32193 = state_32096__$1;
(statearr_32108_32193[(2)] = null);

(statearr_32108_32193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (39))){
var inst_32050 = (state_32096[(16)]);
var state_32096__$1 = state_32096;
var statearr_32109_32194 = state_32096__$1;
(statearr_32109_32194[(2)] = inst_32050);

(statearr_32109_32194[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (46))){
var inst_32091 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32110_32195 = state_32096__$1;
(statearr_32110_32195[(2)] = inst_32091);

(statearr_32110_32195[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (4))){
var inst_31994 = (state_32096[(2)]);
var inst_31995 = cljs.core.List.EMPTY;
var inst_31996 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31995);
var inst_31997 = (function (){return ((function (inst_31994,inst_31995,inst_31996,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31692_SHARP_){
var and__22551__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31692_SHARP_);
if(cljs.core.truth_(and__22551__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31692_SHARP_));
} else {
return and__22551__auto__;
}
});
;})(inst_31994,inst_31995,inst_31996,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31998 = cljs.core.filter.call(null,inst_31997,files);
var inst_31999 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32000 = cljs.core.concat.call(null,inst_31998,inst_31999);
var state_32096__$1 = (function (){var statearr_32111 = state_32096;
(statearr_32111[(12)] = inst_32000);

(statearr_32111[(17)] = inst_31996);

(statearr_32111[(18)] = inst_31994);

return statearr_32111;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32112_32196 = state_32096__$1;
(statearr_32112_32196[(1)] = (16));

} else {
var statearr_32113_32197 = state_32096__$1;
(statearr_32113_32197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (15))){
var inst_31984 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32114_32198 = state_32096__$1;
(statearr_32114_32198[(2)] = inst_31984);

(statearr_32114_32198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (21))){
var inst_32010 = (state_32096[(19)]);
var inst_32010__$1 = (state_32096[(2)]);
var inst_32011 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32010__$1);
var state_32096__$1 = (function (){var statearr_32115 = state_32096;
(statearr_32115[(19)] = inst_32010__$1);

return statearr_32115;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32096__$1,(22),inst_32011);
} else {
if((state_val_32097 === (31))){
var inst_32094 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32096__$1,inst_32094);
} else {
if((state_val_32097 === (32))){
var inst_32050 = (state_32096[(16)]);
var inst_32055 = inst_32050.cljs$lang$protocol_mask$partition0$;
var inst_32056 = (inst_32055 & (64));
var inst_32057 = inst_32050.cljs$core$ISeq$;
var inst_32058 = (inst_32056) || (inst_32057);
var state_32096__$1 = state_32096;
if(cljs.core.truth_(inst_32058)){
var statearr_32116_32199 = state_32096__$1;
(statearr_32116_32199[(1)] = (35));

} else {
var statearr_32117_32200 = state_32096__$1;
(statearr_32117_32200[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (40))){
var inst_32071 = (state_32096[(20)]);
var inst_32070 = (state_32096[(2)]);
var inst_32071__$1 = cljs.core.get.call(null,inst_32070,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32072 = cljs.core.get.call(null,inst_32070,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32073 = cljs.core.not_empty.call(null,inst_32071__$1);
var state_32096__$1 = (function (){var statearr_32118 = state_32096;
(statearr_32118[(21)] = inst_32072);

(statearr_32118[(20)] = inst_32071__$1);

return statearr_32118;
})();
if(cljs.core.truth_(inst_32073)){
var statearr_32119_32201 = state_32096__$1;
(statearr_32119_32201[(1)] = (41));

} else {
var statearr_32120_32202 = state_32096__$1;
(statearr_32120_32202[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (33))){
var state_32096__$1 = state_32096;
var statearr_32121_32203 = state_32096__$1;
(statearr_32121_32203[(2)] = false);

(statearr_32121_32203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (13))){
var inst_31970 = (state_32096[(22)]);
var inst_31974 = cljs.core.chunk_first.call(null,inst_31970);
var inst_31975 = cljs.core.chunk_rest.call(null,inst_31970);
var inst_31976 = cljs.core.count.call(null,inst_31974);
var inst_31957 = inst_31975;
var inst_31958 = inst_31974;
var inst_31959 = inst_31976;
var inst_31960 = (0);
var state_32096__$1 = (function (){var statearr_32122 = state_32096;
(statearr_32122[(7)] = inst_31960);

(statearr_32122[(8)] = inst_31958);

(statearr_32122[(9)] = inst_31957);

(statearr_32122[(10)] = inst_31959);

return statearr_32122;
})();
var statearr_32123_32204 = state_32096__$1;
(statearr_32123_32204[(2)] = null);

(statearr_32123_32204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (22))){
var inst_32014 = (state_32096[(23)]);
var inst_32018 = (state_32096[(24)]);
var inst_32013 = (state_32096[(25)]);
var inst_32010 = (state_32096[(19)]);
var inst_32013__$1 = (state_32096[(2)]);
var inst_32014__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32013__$1);
var inst_32015 = (function (){var all_files = inst_32010;
var res_SINGLEQUOTE_ = inst_32013__$1;
var res = inst_32014__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32014,inst_32018,inst_32013,inst_32010,inst_32013__$1,inst_32014__$1,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31693_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31693_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32014,inst_32018,inst_32013,inst_32010,inst_32013__$1,inst_32014__$1,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32016 = cljs.core.filter.call(null,inst_32015,inst_32013__$1);
var inst_32017 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32018__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32017);
var inst_32019 = cljs.core.not_empty.call(null,inst_32018__$1);
var state_32096__$1 = (function (){var statearr_32124 = state_32096;
(statearr_32124[(23)] = inst_32014__$1);

(statearr_32124[(24)] = inst_32018__$1);

(statearr_32124[(25)] = inst_32013__$1);

(statearr_32124[(26)] = inst_32016);

return statearr_32124;
})();
if(cljs.core.truth_(inst_32019)){
var statearr_32125_32205 = state_32096__$1;
(statearr_32125_32205[(1)] = (23));

} else {
var statearr_32126_32206 = state_32096__$1;
(statearr_32126_32206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (36))){
var state_32096__$1 = state_32096;
var statearr_32127_32207 = state_32096__$1;
(statearr_32127_32207[(2)] = false);

(statearr_32127_32207[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (41))){
var inst_32071 = (state_32096[(20)]);
var inst_32075 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32076 = cljs.core.map.call(null,inst_32075,inst_32071);
var inst_32077 = cljs.core.pr_str.call(null,inst_32076);
var inst_32078 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32077)].join('');
var inst_32079 = figwheel.client.utils.log.call(null,inst_32078);
var state_32096__$1 = state_32096;
var statearr_32128_32208 = state_32096__$1;
(statearr_32128_32208[(2)] = inst_32079);

(statearr_32128_32208[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (43))){
var inst_32072 = (state_32096[(21)]);
var inst_32082 = (state_32096[(2)]);
var inst_32083 = cljs.core.not_empty.call(null,inst_32072);
var state_32096__$1 = (function (){var statearr_32129 = state_32096;
(statearr_32129[(27)] = inst_32082);

return statearr_32129;
})();
if(cljs.core.truth_(inst_32083)){
var statearr_32130_32209 = state_32096__$1;
(statearr_32130_32209[(1)] = (44));

} else {
var statearr_32131_32210 = state_32096__$1;
(statearr_32131_32210[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (29))){
var inst_32050 = (state_32096[(16)]);
var inst_32014 = (state_32096[(23)]);
var inst_32018 = (state_32096[(24)]);
var inst_32013 = (state_32096[(25)]);
var inst_32010 = (state_32096[(19)]);
var inst_32016 = (state_32096[(26)]);
var inst_32046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32049 = (function (){var all_files = inst_32010;
var res_SINGLEQUOTE_ = inst_32013;
var res = inst_32014;
var files_not_loaded = inst_32016;
var dependencies_that_loaded = inst_32018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32050,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32046,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32048){
var map__32132 = p__32048;
var map__32132__$1 = ((((!((map__32132 == null)))?((((map__32132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32132):map__32132);
var namespace = cljs.core.get.call(null,map__32132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32050,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32046,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32050__$1 = cljs.core.group_by.call(null,inst_32049,inst_32016);
var inst_32052 = (inst_32050__$1 == null);
var inst_32053 = cljs.core.not.call(null,inst_32052);
var state_32096__$1 = (function (){var statearr_32134 = state_32096;
(statearr_32134[(16)] = inst_32050__$1);

(statearr_32134[(28)] = inst_32046);

return statearr_32134;
})();
if(inst_32053){
var statearr_32135_32211 = state_32096__$1;
(statearr_32135_32211[(1)] = (32));

} else {
var statearr_32136_32212 = state_32096__$1;
(statearr_32136_32212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (44))){
var inst_32072 = (state_32096[(21)]);
var inst_32085 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32072);
var inst_32086 = cljs.core.pr_str.call(null,inst_32085);
var inst_32087 = [cljs.core.str("not required: "),cljs.core.str(inst_32086)].join('');
var inst_32088 = figwheel.client.utils.log.call(null,inst_32087);
var state_32096__$1 = state_32096;
var statearr_32137_32213 = state_32096__$1;
(statearr_32137_32213[(2)] = inst_32088);

(statearr_32137_32213[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (6))){
var inst_31991 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32138_32214 = state_32096__$1;
(statearr_32138_32214[(2)] = inst_31991);

(statearr_32138_32214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (28))){
var inst_32016 = (state_32096[(26)]);
var inst_32043 = (state_32096[(2)]);
var inst_32044 = cljs.core.not_empty.call(null,inst_32016);
var state_32096__$1 = (function (){var statearr_32139 = state_32096;
(statearr_32139[(29)] = inst_32043);

return statearr_32139;
})();
if(cljs.core.truth_(inst_32044)){
var statearr_32140_32215 = state_32096__$1;
(statearr_32140_32215[(1)] = (29));

} else {
var statearr_32141_32216 = state_32096__$1;
(statearr_32141_32216[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (25))){
var inst_32014 = (state_32096[(23)]);
var inst_32030 = (state_32096[(2)]);
var inst_32031 = cljs.core.not_empty.call(null,inst_32014);
var state_32096__$1 = (function (){var statearr_32142 = state_32096;
(statearr_32142[(30)] = inst_32030);

return statearr_32142;
})();
if(cljs.core.truth_(inst_32031)){
var statearr_32143_32217 = state_32096__$1;
(statearr_32143_32217[(1)] = (26));

} else {
var statearr_32144_32218 = state_32096__$1;
(statearr_32144_32218[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (34))){
var inst_32065 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
if(cljs.core.truth_(inst_32065)){
var statearr_32145_32219 = state_32096__$1;
(statearr_32145_32219[(1)] = (38));

} else {
var statearr_32146_32220 = state_32096__$1;
(statearr_32146_32220[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (17))){
var state_32096__$1 = state_32096;
var statearr_32147_32221 = state_32096__$1;
(statearr_32147_32221[(2)] = recompile_dependents);

(statearr_32147_32221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (3))){
var state_32096__$1 = state_32096;
var statearr_32148_32222 = state_32096__$1;
(statearr_32148_32222[(2)] = null);

(statearr_32148_32222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (12))){
var inst_31987 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32149_32223 = state_32096__$1;
(statearr_32149_32223[(2)] = inst_31987);

(statearr_32149_32223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (2))){
var inst_31949 = (state_32096[(13)]);
var inst_31956 = cljs.core.seq.call(null,inst_31949);
var inst_31957 = inst_31956;
var inst_31958 = null;
var inst_31959 = (0);
var inst_31960 = (0);
var state_32096__$1 = (function (){var statearr_32150 = state_32096;
(statearr_32150[(7)] = inst_31960);

(statearr_32150[(8)] = inst_31958);

(statearr_32150[(9)] = inst_31957);

(statearr_32150[(10)] = inst_31959);

return statearr_32150;
})();
var statearr_32151_32224 = state_32096__$1;
(statearr_32151_32224[(2)] = null);

(statearr_32151_32224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (23))){
var inst_32014 = (state_32096[(23)]);
var inst_32018 = (state_32096[(24)]);
var inst_32013 = (state_32096[(25)]);
var inst_32010 = (state_32096[(19)]);
var inst_32016 = (state_32096[(26)]);
var inst_32021 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32023 = (function (){var all_files = inst_32010;
var res_SINGLEQUOTE_ = inst_32013;
var res = inst_32014;
var files_not_loaded = inst_32016;
var dependencies_that_loaded = inst_32018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32021,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32022){
var map__32152 = p__32022;
var map__32152__$1 = ((((!((map__32152 == null)))?((((map__32152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32152):map__32152);
var request_url = cljs.core.get.call(null,map__32152__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32021,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32024 = cljs.core.reverse.call(null,inst_32018);
var inst_32025 = cljs.core.map.call(null,inst_32023,inst_32024);
var inst_32026 = cljs.core.pr_str.call(null,inst_32025);
var inst_32027 = figwheel.client.utils.log.call(null,inst_32026);
var state_32096__$1 = (function (){var statearr_32154 = state_32096;
(statearr_32154[(31)] = inst_32021);

return statearr_32154;
})();
var statearr_32155_32225 = state_32096__$1;
(statearr_32155_32225[(2)] = inst_32027);

(statearr_32155_32225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (35))){
var state_32096__$1 = state_32096;
var statearr_32156_32226 = state_32096__$1;
(statearr_32156_32226[(2)] = true);

(statearr_32156_32226[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (19))){
var inst_32000 = (state_32096[(12)]);
var inst_32006 = figwheel.client.file_reloading.expand_files.call(null,inst_32000);
var state_32096__$1 = state_32096;
var statearr_32157_32227 = state_32096__$1;
(statearr_32157_32227[(2)] = inst_32006);

(statearr_32157_32227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (11))){
var state_32096__$1 = state_32096;
var statearr_32158_32228 = state_32096__$1;
(statearr_32158_32228[(2)] = null);

(statearr_32158_32228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (9))){
var inst_31989 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32159_32229 = state_32096__$1;
(statearr_32159_32229[(2)] = inst_31989);

(statearr_32159_32229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (5))){
var inst_31960 = (state_32096[(7)]);
var inst_31959 = (state_32096[(10)]);
var inst_31962 = (inst_31960 < inst_31959);
var inst_31963 = inst_31962;
var state_32096__$1 = state_32096;
if(cljs.core.truth_(inst_31963)){
var statearr_32160_32230 = state_32096__$1;
(statearr_32160_32230[(1)] = (7));

} else {
var statearr_32161_32231 = state_32096__$1;
(statearr_32161_32231[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (14))){
var inst_31970 = (state_32096[(22)]);
var inst_31979 = cljs.core.first.call(null,inst_31970);
var inst_31980 = figwheel.client.file_reloading.eval_body.call(null,inst_31979,opts);
var inst_31981 = cljs.core.next.call(null,inst_31970);
var inst_31957 = inst_31981;
var inst_31958 = null;
var inst_31959 = (0);
var inst_31960 = (0);
var state_32096__$1 = (function (){var statearr_32162 = state_32096;
(statearr_32162[(7)] = inst_31960);

(statearr_32162[(8)] = inst_31958);

(statearr_32162[(32)] = inst_31980);

(statearr_32162[(9)] = inst_31957);

(statearr_32162[(10)] = inst_31959);

return statearr_32162;
})();
var statearr_32163_32232 = state_32096__$1;
(statearr_32163_32232[(2)] = null);

(statearr_32163_32232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (45))){
var state_32096__$1 = state_32096;
var statearr_32164_32233 = state_32096__$1;
(statearr_32164_32233[(2)] = null);

(statearr_32164_32233[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (26))){
var inst_32014 = (state_32096[(23)]);
var inst_32018 = (state_32096[(24)]);
var inst_32013 = (state_32096[(25)]);
var inst_32010 = (state_32096[(19)]);
var inst_32016 = (state_32096[(26)]);
var inst_32033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32035 = (function (){var all_files = inst_32010;
var res_SINGLEQUOTE_ = inst_32013;
var res = inst_32014;
var files_not_loaded = inst_32016;
var dependencies_that_loaded = inst_32018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32033,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32034){
var map__32165 = p__32034;
var map__32165__$1 = ((((!((map__32165 == null)))?((((map__32165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32165):map__32165);
var namespace = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32033,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32036 = cljs.core.map.call(null,inst_32035,inst_32014);
var inst_32037 = cljs.core.pr_str.call(null,inst_32036);
var inst_32038 = figwheel.client.utils.log.call(null,inst_32037);
var inst_32039 = (function (){var all_files = inst_32010;
var res_SINGLEQUOTE_ = inst_32013;
var res = inst_32014;
var files_not_loaded = inst_32016;
var dependencies_that_loaded = inst_32018;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32033,inst_32035,inst_32036,inst_32037,inst_32038,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32013,inst_32010,inst_32016,inst_32033,inst_32035,inst_32036,inst_32037,inst_32038,state_val_32097,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32040 = setTimeout(inst_32039,(10));
var state_32096__$1 = (function (){var statearr_32167 = state_32096;
(statearr_32167[(33)] = inst_32033);

(statearr_32167[(34)] = inst_32038);

return statearr_32167;
})();
var statearr_32168_32234 = state_32096__$1;
(statearr_32168_32234[(2)] = inst_32040);

(statearr_32168_32234[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (16))){
var state_32096__$1 = state_32096;
var statearr_32169_32235 = state_32096__$1;
(statearr_32169_32235[(2)] = reload_dependents);

(statearr_32169_32235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (38))){
var inst_32050 = (state_32096[(16)]);
var inst_32067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32050);
var state_32096__$1 = state_32096;
var statearr_32170_32236 = state_32096__$1;
(statearr_32170_32236[(2)] = inst_32067);

(statearr_32170_32236[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (30))){
var state_32096__$1 = state_32096;
var statearr_32171_32237 = state_32096__$1;
(statearr_32171_32237[(2)] = null);

(statearr_32171_32237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (10))){
var inst_31970 = (state_32096[(22)]);
var inst_31972 = cljs.core.chunked_seq_QMARK_.call(null,inst_31970);
var state_32096__$1 = state_32096;
if(inst_31972){
var statearr_32172_32238 = state_32096__$1;
(statearr_32172_32238[(1)] = (13));

} else {
var statearr_32173_32239 = state_32096__$1;
(statearr_32173_32239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (18))){
var inst_32004 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
if(cljs.core.truth_(inst_32004)){
var statearr_32174_32240 = state_32096__$1;
(statearr_32174_32240[(1)] = (19));

} else {
var statearr_32175_32241 = state_32096__$1;
(statearr_32175_32241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (42))){
var state_32096__$1 = state_32096;
var statearr_32176_32242 = state_32096__$1;
(statearr_32176_32242[(2)] = null);

(statearr_32176_32242[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (37))){
var inst_32062 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32177_32243 = state_32096__$1;
(statearr_32177_32243[(2)] = inst_32062);

(statearr_32177_32243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (8))){
var inst_31957 = (state_32096[(9)]);
var inst_31970 = (state_32096[(22)]);
var inst_31970__$1 = cljs.core.seq.call(null,inst_31957);
var state_32096__$1 = (function (){var statearr_32178 = state_32096;
(statearr_32178[(22)] = inst_31970__$1);

return statearr_32178;
})();
if(inst_31970__$1){
var statearr_32179_32244 = state_32096__$1;
(statearr_32179_32244[(1)] = (10));

} else {
var statearr_32180_32245 = state_32096__$1;
(statearr_32180_32245[(1)] = (11));

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
});})(c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26582__auto__,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____0 = (function (){
var statearr_32184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32184[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__);

(statearr_32184[(1)] = (1));

return statearr_32184;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____1 = (function (state_32096){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_32096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e32185){if((e32185 instanceof Object)){
var ex__26586__auto__ = e32185;
var statearr_32186_32246 = state_32096;
(statearr_32186_32246[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32247 = state_32096;
state_32096 = G__32247;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__ = function(state_32096){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____1.call(this,state_32096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26696__auto__ = (function (){var statearr_32187 = f__26695__auto__.call(null);
(statearr_32187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__,map__31942,map__31942__$1,opts,before_jsload,on_jsload,reload_dependents,map__31943,map__31943__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26694__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32250,link){
var map__32253 = p__32250;
var map__32253__$1 = ((((!((map__32253 == null)))?((((map__32253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32253):map__32253);
var file = cljs.core.get.call(null,map__32253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32253,map__32253__$1,file){
return (function (p1__32248_SHARP_,p2__32249_SHARP_){
if(cljs.core._EQ_.call(null,p1__32248_SHARP_,p2__32249_SHARP_)){
return p1__32248_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32253,map__32253__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32259){
var map__32260 = p__32259;
var map__32260__$1 = ((((!((map__32260 == null)))?((((map__32260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32260):map__32260);
var match_length = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32260__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32255_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32255_SHARP_);
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
var args32262 = [];
var len__23633__auto___32265 = arguments.length;
var i__23634__auto___32266 = (0);
while(true){
if((i__23634__auto___32266 < len__23633__auto___32265)){
args32262.push((arguments[i__23634__auto___32266]));

var G__32267 = (i__23634__auto___32266 + (1));
i__23634__auto___32266 = G__32267;
continue;
} else {
}
break;
}

var G__32264 = args32262.length;
switch (G__32264) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32262.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32269_SHARP_,p2__32270_SHARP_){
return cljs.core.assoc.call(null,p1__32269_SHARP_,cljs.core.get.call(null,p2__32270_SHARP_,key),p2__32270_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32271){
var map__32274 = p__32271;
var map__32274__$1 = ((((!((map__32274 == null)))?((((map__32274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32274):map__32274);
var f_data = map__32274__$1;
var file = cljs.core.get.call(null,map__32274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32276,files_msg){
var map__32283 = p__32276;
var map__32283__$1 = ((((!((map__32283 == null)))?((((map__32283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32283):map__32283);
var opts = map__32283__$1;
var on_cssload = cljs.core.get.call(null,map__32283__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32285_32289 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32286_32290 = null;
var count__32287_32291 = (0);
var i__32288_32292 = (0);
while(true){
if((i__32288_32292 < count__32287_32291)){
var f_32293 = cljs.core._nth.call(null,chunk__32286_32290,i__32288_32292);
figwheel.client.file_reloading.reload_css_file.call(null,f_32293);

var G__32294 = seq__32285_32289;
var G__32295 = chunk__32286_32290;
var G__32296 = count__32287_32291;
var G__32297 = (i__32288_32292 + (1));
seq__32285_32289 = G__32294;
chunk__32286_32290 = G__32295;
count__32287_32291 = G__32296;
i__32288_32292 = G__32297;
continue;
} else {
var temp__4425__auto___32298 = cljs.core.seq.call(null,seq__32285_32289);
if(temp__4425__auto___32298){
var seq__32285_32299__$1 = temp__4425__auto___32298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32285_32299__$1)){
var c__23374__auto___32300 = cljs.core.chunk_first.call(null,seq__32285_32299__$1);
var G__32301 = cljs.core.chunk_rest.call(null,seq__32285_32299__$1);
var G__32302 = c__23374__auto___32300;
var G__32303 = cljs.core.count.call(null,c__23374__auto___32300);
var G__32304 = (0);
seq__32285_32289 = G__32301;
chunk__32286_32290 = G__32302;
count__32287_32291 = G__32303;
i__32288_32292 = G__32304;
continue;
} else {
var f_32305 = cljs.core.first.call(null,seq__32285_32299__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32305);

var G__32306 = cljs.core.next.call(null,seq__32285_32299__$1);
var G__32307 = null;
var G__32308 = (0);
var G__32309 = (0);
seq__32285_32289 = G__32306;
chunk__32286_32290 = G__32307;
count__32287_32291 = G__32308;
i__32288_32292 = G__32309;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32283,map__32283__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32283,map__32283__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map