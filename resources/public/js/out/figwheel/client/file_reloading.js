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
var or__25840__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25840__auto__){
return or__25840__auto__;
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
var or__25840__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38402_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38402_SHARP_));
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
var seq__38407 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38408 = null;
var count__38409 = (0);
var i__38410 = (0);
while(true){
if((i__38410 < count__38409)){
var n = cljs.core._nth.call(null,chunk__38408,i__38410);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38411 = seq__38407;
var G__38412 = chunk__38408;
var G__38413 = count__38409;
var G__38414 = (i__38410 + (1));
seq__38407 = G__38411;
chunk__38408 = G__38412;
count__38409 = G__38413;
i__38410 = G__38414;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38407);
if(temp__4425__auto__){
var seq__38407__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38407__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__38407__$1);
var G__38415 = cljs.core.chunk_rest.call(null,seq__38407__$1);
var G__38416 = c__26651__auto__;
var G__38417 = cljs.core.count.call(null,c__26651__auto__);
var G__38418 = (0);
seq__38407 = G__38415;
chunk__38408 = G__38416;
count__38409 = G__38417;
i__38410 = G__38418;
continue;
} else {
var n = cljs.core.first.call(null,seq__38407__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38419 = cljs.core.next.call(null,seq__38407__$1);
var G__38420 = null;
var G__38421 = (0);
var G__38422 = (0);
seq__38407 = G__38419;
chunk__38408 = G__38420;
count__38409 = G__38421;
i__38410 = G__38422;
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

var seq__38461_38468 = cljs.core.seq.call(null,deps);
var chunk__38462_38469 = null;
var count__38463_38470 = (0);
var i__38464_38471 = (0);
while(true){
if((i__38464_38471 < count__38463_38470)){
var dep_38472 = cljs.core._nth.call(null,chunk__38462_38469,i__38464_38471);
topo_sort_helper_STAR_.call(null,dep_38472,(depth + (1)),state);

var G__38473 = seq__38461_38468;
var G__38474 = chunk__38462_38469;
var G__38475 = count__38463_38470;
var G__38476 = (i__38464_38471 + (1));
seq__38461_38468 = G__38473;
chunk__38462_38469 = G__38474;
count__38463_38470 = G__38475;
i__38464_38471 = G__38476;
continue;
} else {
var temp__4425__auto___38477 = cljs.core.seq.call(null,seq__38461_38468);
if(temp__4425__auto___38477){
var seq__38461_38478__$1 = temp__4425__auto___38477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38461_38478__$1)){
var c__26651__auto___38479 = cljs.core.chunk_first.call(null,seq__38461_38478__$1);
var G__38480 = cljs.core.chunk_rest.call(null,seq__38461_38478__$1);
var G__38481 = c__26651__auto___38479;
var G__38482 = cljs.core.count.call(null,c__26651__auto___38479);
var G__38483 = (0);
seq__38461_38468 = G__38480;
chunk__38462_38469 = G__38481;
count__38463_38470 = G__38482;
i__38464_38471 = G__38483;
continue;
} else {
var dep_38484 = cljs.core.first.call(null,seq__38461_38478__$1);
topo_sort_helper_STAR_.call(null,dep_38484,(depth + (1)),state);

var G__38485 = cljs.core.next.call(null,seq__38461_38478__$1);
var G__38486 = null;
var G__38487 = (0);
var G__38488 = (0);
seq__38461_38468 = G__38485;
chunk__38462_38469 = G__38486;
count__38463_38470 = G__38487;
i__38464_38471 = G__38488;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38465){
var vec__38467 = p__38465;
var x = cljs.core.nth.call(null,vec__38467,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38467,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38467,x,xs,get_deps__$1){
return (function (p1__38423_SHARP_){
return clojure.set.difference.call(null,p1__38423_SHARP_,x);
});})(vec__38467,x,xs,get_deps__$1))
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
var seq__38501 = cljs.core.seq.call(null,provides);
var chunk__38502 = null;
var count__38503 = (0);
var i__38504 = (0);
while(true){
if((i__38504 < count__38503)){
var prov = cljs.core._nth.call(null,chunk__38502,i__38504);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38505_38513 = cljs.core.seq.call(null,requires);
var chunk__38506_38514 = null;
var count__38507_38515 = (0);
var i__38508_38516 = (0);
while(true){
if((i__38508_38516 < count__38507_38515)){
var req_38517 = cljs.core._nth.call(null,chunk__38506_38514,i__38508_38516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38517,prov);

var G__38518 = seq__38505_38513;
var G__38519 = chunk__38506_38514;
var G__38520 = count__38507_38515;
var G__38521 = (i__38508_38516 + (1));
seq__38505_38513 = G__38518;
chunk__38506_38514 = G__38519;
count__38507_38515 = G__38520;
i__38508_38516 = G__38521;
continue;
} else {
var temp__4425__auto___38522 = cljs.core.seq.call(null,seq__38505_38513);
if(temp__4425__auto___38522){
var seq__38505_38523__$1 = temp__4425__auto___38522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38505_38523__$1)){
var c__26651__auto___38524 = cljs.core.chunk_first.call(null,seq__38505_38523__$1);
var G__38525 = cljs.core.chunk_rest.call(null,seq__38505_38523__$1);
var G__38526 = c__26651__auto___38524;
var G__38527 = cljs.core.count.call(null,c__26651__auto___38524);
var G__38528 = (0);
seq__38505_38513 = G__38525;
chunk__38506_38514 = G__38526;
count__38507_38515 = G__38527;
i__38508_38516 = G__38528;
continue;
} else {
var req_38529 = cljs.core.first.call(null,seq__38505_38523__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38529,prov);

var G__38530 = cljs.core.next.call(null,seq__38505_38523__$1);
var G__38531 = null;
var G__38532 = (0);
var G__38533 = (0);
seq__38505_38513 = G__38530;
chunk__38506_38514 = G__38531;
count__38507_38515 = G__38532;
i__38508_38516 = G__38533;
continue;
}
} else {
}
}
break;
}

var G__38534 = seq__38501;
var G__38535 = chunk__38502;
var G__38536 = count__38503;
var G__38537 = (i__38504 + (1));
seq__38501 = G__38534;
chunk__38502 = G__38535;
count__38503 = G__38536;
i__38504 = G__38537;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38501);
if(temp__4425__auto__){
var seq__38501__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38501__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__38501__$1);
var G__38538 = cljs.core.chunk_rest.call(null,seq__38501__$1);
var G__38539 = c__26651__auto__;
var G__38540 = cljs.core.count.call(null,c__26651__auto__);
var G__38541 = (0);
seq__38501 = G__38538;
chunk__38502 = G__38539;
count__38503 = G__38540;
i__38504 = G__38541;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38501__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38509_38542 = cljs.core.seq.call(null,requires);
var chunk__38510_38543 = null;
var count__38511_38544 = (0);
var i__38512_38545 = (0);
while(true){
if((i__38512_38545 < count__38511_38544)){
var req_38546 = cljs.core._nth.call(null,chunk__38510_38543,i__38512_38545);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38546,prov);

var G__38547 = seq__38509_38542;
var G__38548 = chunk__38510_38543;
var G__38549 = count__38511_38544;
var G__38550 = (i__38512_38545 + (1));
seq__38509_38542 = G__38547;
chunk__38510_38543 = G__38548;
count__38511_38544 = G__38549;
i__38512_38545 = G__38550;
continue;
} else {
var temp__4425__auto___38551__$1 = cljs.core.seq.call(null,seq__38509_38542);
if(temp__4425__auto___38551__$1){
var seq__38509_38552__$1 = temp__4425__auto___38551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38509_38552__$1)){
var c__26651__auto___38553 = cljs.core.chunk_first.call(null,seq__38509_38552__$1);
var G__38554 = cljs.core.chunk_rest.call(null,seq__38509_38552__$1);
var G__38555 = c__26651__auto___38553;
var G__38556 = cljs.core.count.call(null,c__26651__auto___38553);
var G__38557 = (0);
seq__38509_38542 = G__38554;
chunk__38510_38543 = G__38555;
count__38511_38544 = G__38556;
i__38512_38545 = G__38557;
continue;
} else {
var req_38558 = cljs.core.first.call(null,seq__38509_38552__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38558,prov);

var G__38559 = cljs.core.next.call(null,seq__38509_38552__$1);
var G__38560 = null;
var G__38561 = (0);
var G__38562 = (0);
seq__38509_38542 = G__38559;
chunk__38510_38543 = G__38560;
count__38511_38544 = G__38561;
i__38512_38545 = G__38562;
continue;
}
} else {
}
}
break;
}

var G__38563 = cljs.core.next.call(null,seq__38501__$1);
var G__38564 = null;
var G__38565 = (0);
var G__38566 = (0);
seq__38501 = G__38563;
chunk__38502 = G__38564;
count__38503 = G__38565;
i__38504 = G__38566;
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
var seq__38571_38575 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38572_38576 = null;
var count__38573_38577 = (0);
var i__38574_38578 = (0);
while(true){
if((i__38574_38578 < count__38573_38577)){
var ns_38579 = cljs.core._nth.call(null,chunk__38572_38576,i__38574_38578);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38579);

var G__38580 = seq__38571_38575;
var G__38581 = chunk__38572_38576;
var G__38582 = count__38573_38577;
var G__38583 = (i__38574_38578 + (1));
seq__38571_38575 = G__38580;
chunk__38572_38576 = G__38581;
count__38573_38577 = G__38582;
i__38574_38578 = G__38583;
continue;
} else {
var temp__4425__auto___38584 = cljs.core.seq.call(null,seq__38571_38575);
if(temp__4425__auto___38584){
var seq__38571_38585__$1 = temp__4425__auto___38584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38571_38585__$1)){
var c__26651__auto___38586 = cljs.core.chunk_first.call(null,seq__38571_38585__$1);
var G__38587 = cljs.core.chunk_rest.call(null,seq__38571_38585__$1);
var G__38588 = c__26651__auto___38586;
var G__38589 = cljs.core.count.call(null,c__26651__auto___38586);
var G__38590 = (0);
seq__38571_38575 = G__38587;
chunk__38572_38576 = G__38588;
count__38573_38577 = G__38589;
i__38574_38578 = G__38590;
continue;
} else {
var ns_38591 = cljs.core.first.call(null,seq__38571_38585__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38591);

var G__38592 = cljs.core.next.call(null,seq__38571_38585__$1);
var G__38593 = null;
var G__38594 = (0);
var G__38595 = (0);
seq__38571_38575 = G__38592;
chunk__38572_38576 = G__38593;
count__38573_38577 = G__38594;
i__38574_38578 = G__38595;
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
goog.require_figwheel_backup_ = (function (){var or__25840__auto__ = goog.require__;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
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
var G__38596__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38597__i = 0, G__38597__a = new Array(arguments.length -  0);
while (G__38597__i < G__38597__a.length) {G__38597__a[G__38597__i] = arguments[G__38597__i + 0]; ++G__38597__i;}
  args = new cljs.core.IndexedSeq(G__38597__a,0);
} 
return G__38596__delegate.call(this,args);};
G__38596.cljs$lang$maxFixedArity = 0;
G__38596.cljs$lang$applyTo = (function (arglist__38598){
var args = cljs.core.seq(arglist__38598);
return G__38596__delegate(args);
});
G__38596.cljs$core$IFn$_invoke$arity$variadic = G__38596__delegate;
return G__38596;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38600 = cljs.core._EQ_;
var expr__38601 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38600.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38601))){
var path_parts = ((function (pred__38600,expr__38601){
return (function (p1__38599_SHARP_){
return clojure.string.split.call(null,p1__38599_SHARP_,/[\/\\]/);
});})(pred__38600,expr__38601))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38600,expr__38601){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38603){if((e38603 instanceof Error)){
var e = e38603;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38603;

}
}})());
});
;})(path_parts,sep,root,pred__38600,expr__38601))
} else {
if(cljs.core.truth_(pred__38600.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38601))){
return ((function (pred__38600,expr__38601){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38600,expr__38601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38600,expr__38601))
);

return deferred.addErrback(((function (deferred,pred__38600,expr__38601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38600,expr__38601))
);
});
;})(pred__38600,expr__38601))
} else {
return ((function (pred__38600,expr__38601){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38600,expr__38601))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38604,callback){
var map__38607 = p__38604;
var map__38607__$1 = ((((!((map__38607 == null)))?((((map__38607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38607):map__38607);
var file_msg = map__38607__$1;
var request_url = cljs.core.get.call(null,map__38607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38607,map__38607__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38607,map__38607__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__){
return (function (state_38631){
var state_val_38632 = (state_38631[(1)]);
if((state_val_38632 === (7))){
var inst_38627 = (state_38631[(2)]);
var state_38631__$1 = state_38631;
var statearr_38633_38653 = state_38631__$1;
(statearr_38633_38653[(2)] = inst_38627);

(statearr_38633_38653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (1))){
var state_38631__$1 = state_38631;
var statearr_38634_38654 = state_38631__$1;
(statearr_38634_38654[(2)] = null);

(statearr_38634_38654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (4))){
var inst_38611 = (state_38631[(7)]);
var inst_38611__$1 = (state_38631[(2)]);
var state_38631__$1 = (function (){var statearr_38635 = state_38631;
(statearr_38635[(7)] = inst_38611__$1);

return statearr_38635;
})();
if(cljs.core.truth_(inst_38611__$1)){
var statearr_38636_38655 = state_38631__$1;
(statearr_38636_38655[(1)] = (5));

} else {
var statearr_38637_38656 = state_38631__$1;
(statearr_38637_38656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (6))){
var state_38631__$1 = state_38631;
var statearr_38638_38657 = state_38631__$1;
(statearr_38638_38657[(2)] = null);

(statearr_38638_38657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (3))){
var inst_38629 = (state_38631[(2)]);
var state_38631__$1 = state_38631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38631__$1,inst_38629);
} else {
if((state_val_38632 === (2))){
var state_38631__$1 = state_38631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38631__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38632 === (11))){
var inst_38623 = (state_38631[(2)]);
var state_38631__$1 = (function (){var statearr_38639 = state_38631;
(statearr_38639[(8)] = inst_38623);

return statearr_38639;
})();
var statearr_38640_38658 = state_38631__$1;
(statearr_38640_38658[(2)] = null);

(statearr_38640_38658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (9))){
var inst_38615 = (state_38631[(9)]);
var inst_38617 = (state_38631[(10)]);
var inst_38619 = inst_38617.call(null,inst_38615);
var state_38631__$1 = state_38631;
var statearr_38641_38659 = state_38631__$1;
(statearr_38641_38659[(2)] = inst_38619);

(statearr_38641_38659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (5))){
var inst_38611 = (state_38631[(7)]);
var inst_38613 = figwheel.client.file_reloading.blocking_load.call(null,inst_38611);
var state_38631__$1 = state_38631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38631__$1,(8),inst_38613);
} else {
if((state_val_38632 === (10))){
var inst_38615 = (state_38631[(9)]);
var inst_38621 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38615);
var state_38631__$1 = state_38631;
var statearr_38642_38660 = state_38631__$1;
(statearr_38642_38660[(2)] = inst_38621);

(statearr_38642_38660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38632 === (8))){
var inst_38611 = (state_38631[(7)]);
var inst_38617 = (state_38631[(10)]);
var inst_38615 = (state_38631[(2)]);
var inst_38616 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38617__$1 = cljs.core.get.call(null,inst_38616,inst_38611);
var state_38631__$1 = (function (){var statearr_38643 = state_38631;
(statearr_38643[(9)] = inst_38615);

(statearr_38643[(10)] = inst_38617__$1);

return statearr_38643;
})();
if(cljs.core.truth_(inst_38617__$1)){
var statearr_38644_38661 = state_38631__$1;
(statearr_38644_38661[(1)] = (9));

} else {
var statearr_38645_38662 = state_38631__$1;
(statearr_38645_38662[(1)] = (10));

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
});})(c__29971__auto__))
;
return ((function (switch__29859__auto__,c__29971__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$state_machine__29860__auto____0 = (function (){
var statearr_38649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38649[(0)] = figwheel$client$file_reloading$state_machine__29860__auto__);

(statearr_38649[(1)] = (1));

return statearr_38649;
});
var figwheel$client$file_reloading$state_machine__29860__auto____1 = (function (state_38631){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_38631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e38650){if((e38650 instanceof Object)){
var ex__29863__auto__ = e38650;
var statearr_38651_38663 = state_38631;
(statearr_38651_38663[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38664 = state_38631;
state_38631 = G__38664;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29860__auto__ = function(state_38631){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29860__auto____1.call(this,state_38631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29860__auto____0;
figwheel$client$file_reloading$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29860__auto____1;
return figwheel$client$file_reloading$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__))
})();
var state__29973__auto__ = (function (){var statearr_38652 = f__29972__auto__.call(null);
(statearr_38652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__))
);

return c__29971__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38665,callback){
var map__38668 = p__38665;
var map__38668__$1 = ((((!((map__38668 == null)))?((((map__38668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38668):map__38668);
var file_msg = map__38668__$1;
var namespace = cljs.core.get.call(null,map__38668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38668,map__38668__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38668,map__38668__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38670){
var map__38673 = p__38670;
var map__38673__$1 = ((((!((map__38673 == null)))?((((map__38673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38673):map__38673);
var file_msg = map__38673__$1;
var namespace = cljs.core.get.call(null,map__38673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25828__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25828__auto__){
var or__25840__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
var or__25840__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25840__auto____$1)){
return or__25840__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25828__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38675,callback){
var map__38678 = p__38675;
var map__38678__$1 = ((((!((map__38678 == null)))?((((map__38678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38678):map__38678);
var file_msg = map__38678__$1;
var request_url = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29971__auto___38766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___38766,out){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___38766,out){
return (function (state_38748){
var state_val_38749 = (state_38748[(1)]);
if((state_val_38749 === (1))){
var inst_38726 = cljs.core.nth.call(null,files,(0),null);
var inst_38727 = cljs.core.nthnext.call(null,files,(1));
var inst_38728 = files;
var state_38748__$1 = (function (){var statearr_38750 = state_38748;
(statearr_38750[(7)] = inst_38728);

(statearr_38750[(8)] = inst_38727);

(statearr_38750[(9)] = inst_38726);

return statearr_38750;
})();
var statearr_38751_38767 = state_38748__$1;
(statearr_38751_38767[(2)] = null);

(statearr_38751_38767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38749 === (2))){
var inst_38728 = (state_38748[(7)]);
var inst_38731 = (state_38748[(10)]);
var inst_38731__$1 = cljs.core.nth.call(null,inst_38728,(0),null);
var inst_38732 = cljs.core.nthnext.call(null,inst_38728,(1));
var inst_38733 = (inst_38731__$1 == null);
var inst_38734 = cljs.core.not.call(null,inst_38733);
var state_38748__$1 = (function (){var statearr_38752 = state_38748;
(statearr_38752[(10)] = inst_38731__$1);

(statearr_38752[(11)] = inst_38732);

return statearr_38752;
})();
if(inst_38734){
var statearr_38753_38768 = state_38748__$1;
(statearr_38753_38768[(1)] = (4));

} else {
var statearr_38754_38769 = state_38748__$1;
(statearr_38754_38769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38749 === (3))){
var inst_38746 = (state_38748[(2)]);
var state_38748__$1 = state_38748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38748__$1,inst_38746);
} else {
if((state_val_38749 === (4))){
var inst_38731 = (state_38748[(10)]);
var inst_38736 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38731);
var state_38748__$1 = state_38748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38748__$1,(7),inst_38736);
} else {
if((state_val_38749 === (5))){
var inst_38742 = cljs.core.async.close_BANG_.call(null,out);
var state_38748__$1 = state_38748;
var statearr_38755_38770 = state_38748__$1;
(statearr_38755_38770[(2)] = inst_38742);

(statearr_38755_38770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38749 === (6))){
var inst_38744 = (state_38748[(2)]);
var state_38748__$1 = state_38748;
var statearr_38756_38771 = state_38748__$1;
(statearr_38756_38771[(2)] = inst_38744);

(statearr_38756_38771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38749 === (7))){
var inst_38732 = (state_38748[(11)]);
var inst_38738 = (state_38748[(2)]);
var inst_38739 = cljs.core.async.put_BANG_.call(null,out,inst_38738);
var inst_38728 = inst_38732;
var state_38748__$1 = (function (){var statearr_38757 = state_38748;
(statearr_38757[(7)] = inst_38728);

(statearr_38757[(12)] = inst_38739);

return statearr_38757;
})();
var statearr_38758_38772 = state_38748__$1;
(statearr_38758_38772[(2)] = null);

(statearr_38758_38772[(1)] = (2));


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
});})(c__29971__auto___38766,out))
;
return ((function (switch__29859__auto__,c__29971__auto___38766,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0 = (function (){
var statearr_38762 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38762[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__);

(statearr_38762[(1)] = (1));

return statearr_38762;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1 = (function (state_38748){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_38748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e38763){if((e38763 instanceof Object)){
var ex__29863__auto__ = e38763;
var statearr_38764_38773 = state_38748;
(statearr_38764_38773[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38774 = state_38748;
state_38748 = G__38774;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__ = function(state_38748){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1.call(this,state_38748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___38766,out))
})();
var state__29973__auto__ = (function (){var statearr_38765 = f__29972__auto__.call(null);
(statearr_38765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___38766);

return statearr_38765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___38766,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38775,opts){
var map__38779 = p__38775;
var map__38779__$1 = ((((!((map__38779 == null)))?((((map__38779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38779):map__38779);
var eval_body__$1 = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25828__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25828__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25828__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38781){var e = e38781;
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
return (function (p1__38782_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38782_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38787){
var vec__38788 = p__38787;
var k = cljs.core.nth.call(null,vec__38788,(0),null);
var v = cljs.core.nth.call(null,vec__38788,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38789){
var vec__38790 = p__38789;
var k = cljs.core.nth.call(null,vec__38790,(0),null);
var v = cljs.core.nth.call(null,vec__38790,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38794,p__38795){
var map__39042 = p__38794;
var map__39042__$1 = ((((!((map__39042 == null)))?((((map__39042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39042):map__39042);
var opts = map__39042__$1;
var before_jsload = cljs.core.get.call(null,map__39042__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39042__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39042__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39043 = p__38795;
var map__39043__$1 = ((((!((map__39043 == null)))?((((map__39043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39043):map__39043);
var msg = map__39043__$1;
var files = cljs.core.get.call(null,map__39043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39043__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39043__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39196){
var state_val_39197 = (state_39196[(1)]);
if((state_val_39197 === (7))){
var inst_39058 = (state_39196[(7)]);
var inst_39059 = (state_39196[(8)]);
var inst_39057 = (state_39196[(9)]);
var inst_39060 = (state_39196[(10)]);
var inst_39065 = cljs.core._nth.call(null,inst_39058,inst_39060);
var inst_39066 = figwheel.client.file_reloading.eval_body.call(null,inst_39065,opts);
var inst_39067 = (inst_39060 + (1));
var tmp39198 = inst_39058;
var tmp39199 = inst_39059;
var tmp39200 = inst_39057;
var inst_39057__$1 = tmp39200;
var inst_39058__$1 = tmp39198;
var inst_39059__$1 = tmp39199;
var inst_39060__$1 = inst_39067;
var state_39196__$1 = (function (){var statearr_39201 = state_39196;
(statearr_39201[(11)] = inst_39066);

(statearr_39201[(7)] = inst_39058__$1);

(statearr_39201[(8)] = inst_39059__$1);

(statearr_39201[(9)] = inst_39057__$1);

(statearr_39201[(10)] = inst_39060__$1);

return statearr_39201;
})();
var statearr_39202_39288 = state_39196__$1;
(statearr_39202_39288[(2)] = null);

(statearr_39202_39288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (20))){
var inst_39100 = (state_39196[(12)]);
var inst_39108 = figwheel.client.file_reloading.sort_files.call(null,inst_39100);
var state_39196__$1 = state_39196;
var statearr_39203_39289 = state_39196__$1;
(statearr_39203_39289[(2)] = inst_39108);

(statearr_39203_39289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (27))){
var state_39196__$1 = state_39196;
var statearr_39204_39290 = state_39196__$1;
(statearr_39204_39290[(2)] = null);

(statearr_39204_39290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (1))){
var inst_39049 = (state_39196[(13)]);
var inst_39046 = before_jsload.call(null,files);
var inst_39047 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39048 = (function (){return ((function (inst_39049,inst_39046,inst_39047,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38791_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38791_SHARP_);
});
;})(inst_39049,inst_39046,inst_39047,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39049__$1 = cljs.core.filter.call(null,inst_39048,files);
var inst_39050 = cljs.core.not_empty.call(null,inst_39049__$1);
var state_39196__$1 = (function (){var statearr_39205 = state_39196;
(statearr_39205[(13)] = inst_39049__$1);

(statearr_39205[(14)] = inst_39046);

(statearr_39205[(15)] = inst_39047);

return statearr_39205;
})();
if(cljs.core.truth_(inst_39050)){
var statearr_39206_39291 = state_39196__$1;
(statearr_39206_39291[(1)] = (2));

} else {
var statearr_39207_39292 = state_39196__$1;
(statearr_39207_39292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (24))){
var state_39196__$1 = state_39196;
var statearr_39208_39293 = state_39196__$1;
(statearr_39208_39293[(2)] = null);

(statearr_39208_39293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (39))){
var inst_39150 = (state_39196[(16)]);
var state_39196__$1 = state_39196;
var statearr_39209_39294 = state_39196__$1;
(statearr_39209_39294[(2)] = inst_39150);

(statearr_39209_39294[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (46))){
var inst_39191 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39210_39295 = state_39196__$1;
(statearr_39210_39295[(2)] = inst_39191);

(statearr_39210_39295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (4))){
var inst_39094 = (state_39196[(2)]);
var inst_39095 = cljs.core.List.EMPTY;
var inst_39096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39095);
var inst_39097 = (function (){return ((function (inst_39094,inst_39095,inst_39096,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38792_SHARP_){
var and__25828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38792_SHARP_);
if(cljs.core.truth_(and__25828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38792_SHARP_));
} else {
return and__25828__auto__;
}
});
;})(inst_39094,inst_39095,inst_39096,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39098 = cljs.core.filter.call(null,inst_39097,files);
var inst_39099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39100 = cljs.core.concat.call(null,inst_39098,inst_39099);
var state_39196__$1 = (function (){var statearr_39211 = state_39196;
(statearr_39211[(17)] = inst_39094);

(statearr_39211[(12)] = inst_39100);

(statearr_39211[(18)] = inst_39096);

return statearr_39211;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39212_39296 = state_39196__$1;
(statearr_39212_39296[(1)] = (16));

} else {
var statearr_39213_39297 = state_39196__$1;
(statearr_39213_39297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (15))){
var inst_39084 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39214_39298 = state_39196__$1;
(statearr_39214_39298[(2)] = inst_39084);

(statearr_39214_39298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (21))){
var inst_39110 = (state_39196[(19)]);
var inst_39110__$1 = (state_39196[(2)]);
var inst_39111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39110__$1);
var state_39196__$1 = (function (){var statearr_39215 = state_39196;
(statearr_39215[(19)] = inst_39110__$1);

return statearr_39215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39196__$1,(22),inst_39111);
} else {
if((state_val_39197 === (31))){
var inst_39194 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39196__$1,inst_39194);
} else {
if((state_val_39197 === (32))){
var inst_39150 = (state_39196[(16)]);
var inst_39155 = inst_39150.cljs$lang$protocol_mask$partition0$;
var inst_39156 = (inst_39155 & (64));
var inst_39157 = inst_39150.cljs$core$ISeq$;
var inst_39158 = (inst_39156) || (inst_39157);
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39158)){
var statearr_39216_39299 = state_39196__$1;
(statearr_39216_39299[(1)] = (35));

} else {
var statearr_39217_39300 = state_39196__$1;
(statearr_39217_39300[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (40))){
var inst_39171 = (state_39196[(20)]);
var inst_39170 = (state_39196[(2)]);
var inst_39171__$1 = cljs.core.get.call(null,inst_39170,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39172 = cljs.core.get.call(null,inst_39170,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39173 = cljs.core.not_empty.call(null,inst_39171__$1);
var state_39196__$1 = (function (){var statearr_39218 = state_39196;
(statearr_39218[(20)] = inst_39171__$1);

(statearr_39218[(21)] = inst_39172);

return statearr_39218;
})();
if(cljs.core.truth_(inst_39173)){
var statearr_39219_39301 = state_39196__$1;
(statearr_39219_39301[(1)] = (41));

} else {
var statearr_39220_39302 = state_39196__$1;
(statearr_39220_39302[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (33))){
var state_39196__$1 = state_39196;
var statearr_39221_39303 = state_39196__$1;
(statearr_39221_39303[(2)] = false);

(statearr_39221_39303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (13))){
var inst_39070 = (state_39196[(22)]);
var inst_39074 = cljs.core.chunk_first.call(null,inst_39070);
var inst_39075 = cljs.core.chunk_rest.call(null,inst_39070);
var inst_39076 = cljs.core.count.call(null,inst_39074);
var inst_39057 = inst_39075;
var inst_39058 = inst_39074;
var inst_39059 = inst_39076;
var inst_39060 = (0);
var state_39196__$1 = (function (){var statearr_39222 = state_39196;
(statearr_39222[(7)] = inst_39058);

(statearr_39222[(8)] = inst_39059);

(statearr_39222[(9)] = inst_39057);

(statearr_39222[(10)] = inst_39060);

return statearr_39222;
})();
var statearr_39223_39304 = state_39196__$1;
(statearr_39223_39304[(2)] = null);

(statearr_39223_39304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (22))){
var inst_39113 = (state_39196[(23)]);
var inst_39118 = (state_39196[(24)]);
var inst_39110 = (state_39196[(19)]);
var inst_39114 = (state_39196[(25)]);
var inst_39113__$1 = (state_39196[(2)]);
var inst_39114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39113__$1);
var inst_39115 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113__$1;
var res = inst_39114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39113,inst_39118,inst_39110,inst_39114,inst_39113__$1,inst_39114__$1,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38793_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38793_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39113,inst_39118,inst_39110,inst_39114,inst_39113__$1,inst_39114__$1,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39116 = cljs.core.filter.call(null,inst_39115,inst_39113__$1);
var inst_39117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39117);
var inst_39119 = cljs.core.not_empty.call(null,inst_39118__$1);
var state_39196__$1 = (function (){var statearr_39224 = state_39196;
(statearr_39224[(23)] = inst_39113__$1);

(statearr_39224[(24)] = inst_39118__$1);

(statearr_39224[(26)] = inst_39116);

(statearr_39224[(25)] = inst_39114__$1);

return statearr_39224;
})();
if(cljs.core.truth_(inst_39119)){
var statearr_39225_39305 = state_39196__$1;
(statearr_39225_39305[(1)] = (23));

} else {
var statearr_39226_39306 = state_39196__$1;
(statearr_39226_39306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (36))){
var state_39196__$1 = state_39196;
var statearr_39227_39307 = state_39196__$1;
(statearr_39227_39307[(2)] = false);

(statearr_39227_39307[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (41))){
var inst_39171 = (state_39196[(20)]);
var inst_39175 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39176 = cljs.core.map.call(null,inst_39175,inst_39171);
var inst_39177 = cljs.core.pr_str.call(null,inst_39176);
var inst_39178 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39177)].join('');
var inst_39179 = figwheel.client.utils.log.call(null,inst_39178);
var state_39196__$1 = state_39196;
var statearr_39228_39308 = state_39196__$1;
(statearr_39228_39308[(2)] = inst_39179);

(statearr_39228_39308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (43))){
var inst_39172 = (state_39196[(21)]);
var inst_39182 = (state_39196[(2)]);
var inst_39183 = cljs.core.not_empty.call(null,inst_39172);
var state_39196__$1 = (function (){var statearr_39229 = state_39196;
(statearr_39229[(27)] = inst_39182);

return statearr_39229;
})();
if(cljs.core.truth_(inst_39183)){
var statearr_39230_39309 = state_39196__$1;
(statearr_39230_39309[(1)] = (44));

} else {
var statearr_39231_39310 = state_39196__$1;
(statearr_39231_39310[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (29))){
var inst_39113 = (state_39196[(23)]);
var inst_39150 = (state_39196[(16)]);
var inst_39118 = (state_39196[(24)]);
var inst_39110 = (state_39196[(19)]);
var inst_39116 = (state_39196[(26)]);
var inst_39114 = (state_39196[(25)]);
var inst_39146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39149 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39150,inst_39118,inst_39110,inst_39116,inst_39114,inst_39146,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39148){
var map__39232 = p__39148;
var map__39232__$1 = ((((!((map__39232 == null)))?((((map__39232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39232):map__39232);
var namespace = cljs.core.get.call(null,map__39232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39150,inst_39118,inst_39110,inst_39116,inst_39114,inst_39146,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39150__$1 = cljs.core.group_by.call(null,inst_39149,inst_39116);
var inst_39152 = (inst_39150__$1 == null);
var inst_39153 = cljs.core.not.call(null,inst_39152);
var state_39196__$1 = (function (){var statearr_39234 = state_39196;
(statearr_39234[(16)] = inst_39150__$1);

(statearr_39234[(28)] = inst_39146);

return statearr_39234;
})();
if(inst_39153){
var statearr_39235_39311 = state_39196__$1;
(statearr_39235_39311[(1)] = (32));

} else {
var statearr_39236_39312 = state_39196__$1;
(statearr_39236_39312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (44))){
var inst_39172 = (state_39196[(21)]);
var inst_39185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39172);
var inst_39186 = cljs.core.pr_str.call(null,inst_39185);
var inst_39187 = [cljs.core.str("not required: "),cljs.core.str(inst_39186)].join('');
var inst_39188 = figwheel.client.utils.log.call(null,inst_39187);
var state_39196__$1 = state_39196;
var statearr_39237_39313 = state_39196__$1;
(statearr_39237_39313[(2)] = inst_39188);

(statearr_39237_39313[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (6))){
var inst_39091 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39238_39314 = state_39196__$1;
(statearr_39238_39314[(2)] = inst_39091);

(statearr_39238_39314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (28))){
var inst_39116 = (state_39196[(26)]);
var inst_39143 = (state_39196[(2)]);
var inst_39144 = cljs.core.not_empty.call(null,inst_39116);
var state_39196__$1 = (function (){var statearr_39239 = state_39196;
(statearr_39239[(29)] = inst_39143);

return statearr_39239;
})();
if(cljs.core.truth_(inst_39144)){
var statearr_39240_39315 = state_39196__$1;
(statearr_39240_39315[(1)] = (29));

} else {
var statearr_39241_39316 = state_39196__$1;
(statearr_39241_39316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (25))){
var inst_39114 = (state_39196[(25)]);
var inst_39130 = (state_39196[(2)]);
var inst_39131 = cljs.core.not_empty.call(null,inst_39114);
var state_39196__$1 = (function (){var statearr_39242 = state_39196;
(statearr_39242[(30)] = inst_39130);

return statearr_39242;
})();
if(cljs.core.truth_(inst_39131)){
var statearr_39243_39317 = state_39196__$1;
(statearr_39243_39317[(1)] = (26));

} else {
var statearr_39244_39318 = state_39196__$1;
(statearr_39244_39318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (34))){
var inst_39165 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39165)){
var statearr_39245_39319 = state_39196__$1;
(statearr_39245_39319[(1)] = (38));

} else {
var statearr_39246_39320 = state_39196__$1;
(statearr_39246_39320[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (17))){
var state_39196__$1 = state_39196;
var statearr_39247_39321 = state_39196__$1;
(statearr_39247_39321[(2)] = recompile_dependents);

(statearr_39247_39321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (3))){
var state_39196__$1 = state_39196;
var statearr_39248_39322 = state_39196__$1;
(statearr_39248_39322[(2)] = null);

(statearr_39248_39322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (12))){
var inst_39087 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39249_39323 = state_39196__$1;
(statearr_39249_39323[(2)] = inst_39087);

(statearr_39249_39323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (2))){
var inst_39049 = (state_39196[(13)]);
var inst_39056 = cljs.core.seq.call(null,inst_39049);
var inst_39057 = inst_39056;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39196__$1 = (function (){var statearr_39250 = state_39196;
(statearr_39250[(7)] = inst_39058);

(statearr_39250[(8)] = inst_39059);

(statearr_39250[(9)] = inst_39057);

(statearr_39250[(10)] = inst_39060);

return statearr_39250;
})();
var statearr_39251_39324 = state_39196__$1;
(statearr_39251_39324[(2)] = null);

(statearr_39251_39324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (23))){
var inst_39113 = (state_39196[(23)]);
var inst_39118 = (state_39196[(24)]);
var inst_39110 = (state_39196[(19)]);
var inst_39116 = (state_39196[(26)]);
var inst_39114 = (state_39196[(25)]);
var inst_39121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39123 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39121,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39122){
var map__39252 = p__39122;
var map__39252__$1 = ((((!((map__39252 == null)))?((((map__39252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39252):map__39252);
var request_url = cljs.core.get.call(null,map__39252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39121,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39124 = cljs.core.reverse.call(null,inst_39118);
var inst_39125 = cljs.core.map.call(null,inst_39123,inst_39124);
var inst_39126 = cljs.core.pr_str.call(null,inst_39125);
var inst_39127 = figwheel.client.utils.log.call(null,inst_39126);
var state_39196__$1 = (function (){var statearr_39254 = state_39196;
(statearr_39254[(31)] = inst_39121);

return statearr_39254;
})();
var statearr_39255_39325 = state_39196__$1;
(statearr_39255_39325[(2)] = inst_39127);

(statearr_39255_39325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (35))){
var state_39196__$1 = state_39196;
var statearr_39256_39326 = state_39196__$1;
(statearr_39256_39326[(2)] = true);

(statearr_39256_39326[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (19))){
var inst_39100 = (state_39196[(12)]);
var inst_39106 = figwheel.client.file_reloading.expand_files.call(null,inst_39100);
var state_39196__$1 = state_39196;
var statearr_39257_39327 = state_39196__$1;
(statearr_39257_39327[(2)] = inst_39106);

(statearr_39257_39327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (11))){
var state_39196__$1 = state_39196;
var statearr_39258_39328 = state_39196__$1;
(statearr_39258_39328[(2)] = null);

(statearr_39258_39328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (9))){
var inst_39089 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39259_39329 = state_39196__$1;
(statearr_39259_39329[(2)] = inst_39089);

(statearr_39259_39329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (5))){
var inst_39059 = (state_39196[(8)]);
var inst_39060 = (state_39196[(10)]);
var inst_39062 = (inst_39060 < inst_39059);
var inst_39063 = inst_39062;
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39063)){
var statearr_39260_39330 = state_39196__$1;
(statearr_39260_39330[(1)] = (7));

} else {
var statearr_39261_39331 = state_39196__$1;
(statearr_39261_39331[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (14))){
var inst_39070 = (state_39196[(22)]);
var inst_39079 = cljs.core.first.call(null,inst_39070);
var inst_39080 = figwheel.client.file_reloading.eval_body.call(null,inst_39079,opts);
var inst_39081 = cljs.core.next.call(null,inst_39070);
var inst_39057 = inst_39081;
var inst_39058 = null;
var inst_39059 = (0);
var inst_39060 = (0);
var state_39196__$1 = (function (){var statearr_39262 = state_39196;
(statearr_39262[(7)] = inst_39058);

(statearr_39262[(8)] = inst_39059);

(statearr_39262[(32)] = inst_39080);

(statearr_39262[(9)] = inst_39057);

(statearr_39262[(10)] = inst_39060);

return statearr_39262;
})();
var statearr_39263_39332 = state_39196__$1;
(statearr_39263_39332[(2)] = null);

(statearr_39263_39332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (45))){
var state_39196__$1 = state_39196;
var statearr_39264_39333 = state_39196__$1;
(statearr_39264_39333[(2)] = null);

(statearr_39264_39333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (26))){
var inst_39113 = (state_39196[(23)]);
var inst_39118 = (state_39196[(24)]);
var inst_39110 = (state_39196[(19)]);
var inst_39116 = (state_39196[(26)]);
var inst_39114 = (state_39196[(25)]);
var inst_39133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39135 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39134){
var map__39265 = p__39134;
var map__39265__$1 = ((((!((map__39265 == null)))?((((map__39265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39265):map__39265);
var namespace = cljs.core.get.call(null,map__39265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39136 = cljs.core.map.call(null,inst_39135,inst_39114);
var inst_39137 = cljs.core.pr_str.call(null,inst_39136);
var inst_39138 = figwheel.client.utils.log.call(null,inst_39137);
var inst_39139 = (function (){var all_files = inst_39110;
var res_SINGLEQUOTE_ = inst_39113;
var res = inst_39114;
var files_not_loaded = inst_39116;
var dependencies_that_loaded = inst_39118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,inst_39135,inst_39136,inst_39137,inst_39138,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39113,inst_39118,inst_39110,inst_39116,inst_39114,inst_39133,inst_39135,inst_39136,inst_39137,inst_39138,state_val_39197,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39140 = setTimeout(inst_39139,(10));
var state_39196__$1 = (function (){var statearr_39267 = state_39196;
(statearr_39267[(33)] = inst_39133);

(statearr_39267[(34)] = inst_39138);

return statearr_39267;
})();
var statearr_39268_39334 = state_39196__$1;
(statearr_39268_39334[(2)] = inst_39140);

(statearr_39268_39334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (16))){
var state_39196__$1 = state_39196;
var statearr_39269_39335 = state_39196__$1;
(statearr_39269_39335[(2)] = reload_dependents);

(statearr_39269_39335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (38))){
var inst_39150 = (state_39196[(16)]);
var inst_39167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39150);
var state_39196__$1 = state_39196;
var statearr_39270_39336 = state_39196__$1;
(statearr_39270_39336[(2)] = inst_39167);

(statearr_39270_39336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (30))){
var state_39196__$1 = state_39196;
var statearr_39271_39337 = state_39196__$1;
(statearr_39271_39337[(2)] = null);

(statearr_39271_39337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (10))){
var inst_39070 = (state_39196[(22)]);
var inst_39072 = cljs.core.chunked_seq_QMARK_.call(null,inst_39070);
var state_39196__$1 = state_39196;
if(inst_39072){
var statearr_39272_39338 = state_39196__$1;
(statearr_39272_39338[(1)] = (13));

} else {
var statearr_39273_39339 = state_39196__$1;
(statearr_39273_39339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (18))){
var inst_39104 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39104)){
var statearr_39274_39340 = state_39196__$1;
(statearr_39274_39340[(1)] = (19));

} else {
var statearr_39275_39341 = state_39196__$1;
(statearr_39275_39341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (42))){
var state_39196__$1 = state_39196;
var statearr_39276_39342 = state_39196__$1;
(statearr_39276_39342[(2)] = null);

(statearr_39276_39342[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (37))){
var inst_39162 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39277_39343 = state_39196__$1;
(statearr_39277_39343[(2)] = inst_39162);

(statearr_39277_39343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (8))){
var inst_39070 = (state_39196[(22)]);
var inst_39057 = (state_39196[(9)]);
var inst_39070__$1 = cljs.core.seq.call(null,inst_39057);
var state_39196__$1 = (function (){var statearr_39278 = state_39196;
(statearr_39278[(22)] = inst_39070__$1);

return statearr_39278;
})();
if(inst_39070__$1){
var statearr_39279_39344 = state_39196__$1;
(statearr_39279_39344[(1)] = (10));

} else {
var statearr_39280_39345 = state_39196__$1;
(statearr_39280_39345[(1)] = (11));

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
});})(c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29859__auto__,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0 = (function (){
var statearr_39284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39284[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__);

(statearr_39284[(1)] = (1));

return statearr_39284;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1 = (function (state_39196){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_39196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e39285){if((e39285 instanceof Object)){
var ex__29863__auto__ = e39285;
var statearr_39286_39346 = state_39196;
(statearr_39286_39346[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39347 = state_39196;
state_39196 = G__39347;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__ = function(state_39196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1.call(this,state_39196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29973__auto__ = (function (){var statearr_39287 = f__29972__auto__.call(null);
(statearr_39287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_39287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,map__39042,map__39042__$1,opts,before_jsload,on_jsload,reload_dependents,map__39043,map__39043__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29971__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39350,link){
var map__39353 = p__39350;
var map__39353__$1 = ((((!((map__39353 == null)))?((((map__39353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39353):map__39353);
var file = cljs.core.get.call(null,map__39353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39353,map__39353__$1,file){
return (function (p1__39348_SHARP_,p2__39349_SHARP_){
if(cljs.core._EQ_.call(null,p1__39348_SHARP_,p2__39349_SHARP_)){
return p1__39348_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39353,map__39353__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39359){
var map__39360 = p__39359;
var map__39360__$1 = ((((!((map__39360 == null)))?((((map__39360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39360):map__39360);
var match_length = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39355_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39355_SHARP_);
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
var args39362 = [];
var len__26910__auto___39365 = arguments.length;
var i__26911__auto___39366 = (0);
while(true){
if((i__26911__auto___39366 < len__26910__auto___39365)){
args39362.push((arguments[i__26911__auto___39366]));

var G__39367 = (i__26911__auto___39366 + (1));
i__26911__auto___39366 = G__39367;
continue;
} else {
}
break;
}

var G__39364 = args39362.length;
switch (G__39364) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39362.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39369_SHARP_,p2__39370_SHARP_){
return cljs.core.assoc.call(null,p1__39369_SHARP_,cljs.core.get.call(null,p2__39370_SHARP_,key),p2__39370_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39371){
var map__39374 = p__39371;
var map__39374__$1 = ((((!((map__39374 == null)))?((((map__39374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39374):map__39374);
var f_data = map__39374__$1;
var file = cljs.core.get.call(null,map__39374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39376,files_msg){
var map__39383 = p__39376;
var map__39383__$1 = ((((!((map__39383 == null)))?((((map__39383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39383):map__39383);
var opts = map__39383__$1;
var on_cssload = cljs.core.get.call(null,map__39383__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39385_39389 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39386_39390 = null;
var count__39387_39391 = (0);
var i__39388_39392 = (0);
while(true){
if((i__39388_39392 < count__39387_39391)){
var f_39393 = cljs.core._nth.call(null,chunk__39386_39390,i__39388_39392);
figwheel.client.file_reloading.reload_css_file.call(null,f_39393);

var G__39394 = seq__39385_39389;
var G__39395 = chunk__39386_39390;
var G__39396 = count__39387_39391;
var G__39397 = (i__39388_39392 + (1));
seq__39385_39389 = G__39394;
chunk__39386_39390 = G__39395;
count__39387_39391 = G__39396;
i__39388_39392 = G__39397;
continue;
} else {
var temp__4425__auto___39398 = cljs.core.seq.call(null,seq__39385_39389);
if(temp__4425__auto___39398){
var seq__39385_39399__$1 = temp__4425__auto___39398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39385_39399__$1)){
var c__26651__auto___39400 = cljs.core.chunk_first.call(null,seq__39385_39399__$1);
var G__39401 = cljs.core.chunk_rest.call(null,seq__39385_39399__$1);
var G__39402 = c__26651__auto___39400;
var G__39403 = cljs.core.count.call(null,c__26651__auto___39400);
var G__39404 = (0);
seq__39385_39389 = G__39401;
chunk__39386_39390 = G__39402;
count__39387_39391 = G__39403;
i__39388_39392 = G__39404;
continue;
} else {
var f_39405 = cljs.core.first.call(null,seq__39385_39399__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39405);

var G__39406 = cljs.core.next.call(null,seq__39385_39399__$1);
var G__39407 = null;
var G__39408 = (0);
var G__39409 = (0);
seq__39385_39389 = G__39406;
chunk__39386_39390 = G__39407;
count__39387_39391 = G__39408;
i__39388_39392 = G__39409;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39383,map__39383__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39383,map__39383__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map