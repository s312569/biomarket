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
var or__25809__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25809__auto__){
return or__25809__auto__;
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
var or__25809__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38370_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38370_SHARP_));
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
var seq__38375 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38376 = null;
var count__38377 = (0);
var i__38378 = (0);
while(true){
if((i__38378 < count__38377)){
var n = cljs.core._nth.call(null,chunk__38376,i__38378);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38379 = seq__38375;
var G__38380 = chunk__38376;
var G__38381 = count__38377;
var G__38382 = (i__38378 + (1));
seq__38375 = G__38379;
chunk__38376 = G__38380;
count__38377 = G__38381;
i__38378 = G__38382;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38375);
if(temp__4425__auto__){
var seq__38375__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38375__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__38375__$1);
var G__38383 = cljs.core.chunk_rest.call(null,seq__38375__$1);
var G__38384 = c__26620__auto__;
var G__38385 = cljs.core.count.call(null,c__26620__auto__);
var G__38386 = (0);
seq__38375 = G__38383;
chunk__38376 = G__38384;
count__38377 = G__38385;
i__38378 = G__38386;
continue;
} else {
var n = cljs.core.first.call(null,seq__38375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38387 = cljs.core.next.call(null,seq__38375__$1);
var G__38388 = null;
var G__38389 = (0);
var G__38390 = (0);
seq__38375 = G__38387;
chunk__38376 = G__38388;
count__38377 = G__38389;
i__38378 = G__38390;
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

var seq__38429_38436 = cljs.core.seq.call(null,deps);
var chunk__38430_38437 = null;
var count__38431_38438 = (0);
var i__38432_38439 = (0);
while(true){
if((i__38432_38439 < count__38431_38438)){
var dep_38440 = cljs.core._nth.call(null,chunk__38430_38437,i__38432_38439);
topo_sort_helper_STAR_.call(null,dep_38440,(depth + (1)),state);

var G__38441 = seq__38429_38436;
var G__38442 = chunk__38430_38437;
var G__38443 = count__38431_38438;
var G__38444 = (i__38432_38439 + (1));
seq__38429_38436 = G__38441;
chunk__38430_38437 = G__38442;
count__38431_38438 = G__38443;
i__38432_38439 = G__38444;
continue;
} else {
var temp__4425__auto___38445 = cljs.core.seq.call(null,seq__38429_38436);
if(temp__4425__auto___38445){
var seq__38429_38446__$1 = temp__4425__auto___38445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38429_38446__$1)){
var c__26620__auto___38447 = cljs.core.chunk_first.call(null,seq__38429_38446__$1);
var G__38448 = cljs.core.chunk_rest.call(null,seq__38429_38446__$1);
var G__38449 = c__26620__auto___38447;
var G__38450 = cljs.core.count.call(null,c__26620__auto___38447);
var G__38451 = (0);
seq__38429_38436 = G__38448;
chunk__38430_38437 = G__38449;
count__38431_38438 = G__38450;
i__38432_38439 = G__38451;
continue;
} else {
var dep_38452 = cljs.core.first.call(null,seq__38429_38446__$1);
topo_sort_helper_STAR_.call(null,dep_38452,(depth + (1)),state);

var G__38453 = cljs.core.next.call(null,seq__38429_38446__$1);
var G__38454 = null;
var G__38455 = (0);
var G__38456 = (0);
seq__38429_38436 = G__38453;
chunk__38430_38437 = G__38454;
count__38431_38438 = G__38455;
i__38432_38439 = G__38456;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38433){
var vec__38435 = p__38433;
var x = cljs.core.nth.call(null,vec__38435,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38435,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38435,x,xs,get_deps__$1){
return (function (p1__38391_SHARP_){
return clojure.set.difference.call(null,p1__38391_SHARP_,x);
});})(vec__38435,x,xs,get_deps__$1))
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
var seq__38469 = cljs.core.seq.call(null,provides);
var chunk__38470 = null;
var count__38471 = (0);
var i__38472 = (0);
while(true){
if((i__38472 < count__38471)){
var prov = cljs.core._nth.call(null,chunk__38470,i__38472);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38473_38481 = cljs.core.seq.call(null,requires);
var chunk__38474_38482 = null;
var count__38475_38483 = (0);
var i__38476_38484 = (0);
while(true){
if((i__38476_38484 < count__38475_38483)){
var req_38485 = cljs.core._nth.call(null,chunk__38474_38482,i__38476_38484);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38485,prov);

var G__38486 = seq__38473_38481;
var G__38487 = chunk__38474_38482;
var G__38488 = count__38475_38483;
var G__38489 = (i__38476_38484 + (1));
seq__38473_38481 = G__38486;
chunk__38474_38482 = G__38487;
count__38475_38483 = G__38488;
i__38476_38484 = G__38489;
continue;
} else {
var temp__4425__auto___38490 = cljs.core.seq.call(null,seq__38473_38481);
if(temp__4425__auto___38490){
var seq__38473_38491__$1 = temp__4425__auto___38490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38473_38491__$1)){
var c__26620__auto___38492 = cljs.core.chunk_first.call(null,seq__38473_38491__$1);
var G__38493 = cljs.core.chunk_rest.call(null,seq__38473_38491__$1);
var G__38494 = c__26620__auto___38492;
var G__38495 = cljs.core.count.call(null,c__26620__auto___38492);
var G__38496 = (0);
seq__38473_38481 = G__38493;
chunk__38474_38482 = G__38494;
count__38475_38483 = G__38495;
i__38476_38484 = G__38496;
continue;
} else {
var req_38497 = cljs.core.first.call(null,seq__38473_38491__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38497,prov);

var G__38498 = cljs.core.next.call(null,seq__38473_38491__$1);
var G__38499 = null;
var G__38500 = (0);
var G__38501 = (0);
seq__38473_38481 = G__38498;
chunk__38474_38482 = G__38499;
count__38475_38483 = G__38500;
i__38476_38484 = G__38501;
continue;
}
} else {
}
}
break;
}

var G__38502 = seq__38469;
var G__38503 = chunk__38470;
var G__38504 = count__38471;
var G__38505 = (i__38472 + (1));
seq__38469 = G__38502;
chunk__38470 = G__38503;
count__38471 = G__38504;
i__38472 = G__38505;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38469);
if(temp__4425__auto__){
var seq__38469__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38469__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__38469__$1);
var G__38506 = cljs.core.chunk_rest.call(null,seq__38469__$1);
var G__38507 = c__26620__auto__;
var G__38508 = cljs.core.count.call(null,c__26620__auto__);
var G__38509 = (0);
seq__38469 = G__38506;
chunk__38470 = G__38507;
count__38471 = G__38508;
i__38472 = G__38509;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38469__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38477_38510 = cljs.core.seq.call(null,requires);
var chunk__38478_38511 = null;
var count__38479_38512 = (0);
var i__38480_38513 = (0);
while(true){
if((i__38480_38513 < count__38479_38512)){
var req_38514 = cljs.core._nth.call(null,chunk__38478_38511,i__38480_38513);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38514,prov);

var G__38515 = seq__38477_38510;
var G__38516 = chunk__38478_38511;
var G__38517 = count__38479_38512;
var G__38518 = (i__38480_38513 + (1));
seq__38477_38510 = G__38515;
chunk__38478_38511 = G__38516;
count__38479_38512 = G__38517;
i__38480_38513 = G__38518;
continue;
} else {
var temp__4425__auto___38519__$1 = cljs.core.seq.call(null,seq__38477_38510);
if(temp__4425__auto___38519__$1){
var seq__38477_38520__$1 = temp__4425__auto___38519__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38477_38520__$1)){
var c__26620__auto___38521 = cljs.core.chunk_first.call(null,seq__38477_38520__$1);
var G__38522 = cljs.core.chunk_rest.call(null,seq__38477_38520__$1);
var G__38523 = c__26620__auto___38521;
var G__38524 = cljs.core.count.call(null,c__26620__auto___38521);
var G__38525 = (0);
seq__38477_38510 = G__38522;
chunk__38478_38511 = G__38523;
count__38479_38512 = G__38524;
i__38480_38513 = G__38525;
continue;
} else {
var req_38526 = cljs.core.first.call(null,seq__38477_38520__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38526,prov);

var G__38527 = cljs.core.next.call(null,seq__38477_38520__$1);
var G__38528 = null;
var G__38529 = (0);
var G__38530 = (0);
seq__38477_38510 = G__38527;
chunk__38478_38511 = G__38528;
count__38479_38512 = G__38529;
i__38480_38513 = G__38530;
continue;
}
} else {
}
}
break;
}

var G__38531 = cljs.core.next.call(null,seq__38469__$1);
var G__38532 = null;
var G__38533 = (0);
var G__38534 = (0);
seq__38469 = G__38531;
chunk__38470 = G__38532;
count__38471 = G__38533;
i__38472 = G__38534;
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
var seq__38539_38543 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38540_38544 = null;
var count__38541_38545 = (0);
var i__38542_38546 = (0);
while(true){
if((i__38542_38546 < count__38541_38545)){
var ns_38547 = cljs.core._nth.call(null,chunk__38540_38544,i__38542_38546);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38547);

var G__38548 = seq__38539_38543;
var G__38549 = chunk__38540_38544;
var G__38550 = count__38541_38545;
var G__38551 = (i__38542_38546 + (1));
seq__38539_38543 = G__38548;
chunk__38540_38544 = G__38549;
count__38541_38545 = G__38550;
i__38542_38546 = G__38551;
continue;
} else {
var temp__4425__auto___38552 = cljs.core.seq.call(null,seq__38539_38543);
if(temp__4425__auto___38552){
var seq__38539_38553__$1 = temp__4425__auto___38552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38539_38553__$1)){
var c__26620__auto___38554 = cljs.core.chunk_first.call(null,seq__38539_38553__$1);
var G__38555 = cljs.core.chunk_rest.call(null,seq__38539_38553__$1);
var G__38556 = c__26620__auto___38554;
var G__38557 = cljs.core.count.call(null,c__26620__auto___38554);
var G__38558 = (0);
seq__38539_38543 = G__38555;
chunk__38540_38544 = G__38556;
count__38541_38545 = G__38557;
i__38542_38546 = G__38558;
continue;
} else {
var ns_38559 = cljs.core.first.call(null,seq__38539_38553__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38559);

var G__38560 = cljs.core.next.call(null,seq__38539_38553__$1);
var G__38561 = null;
var G__38562 = (0);
var G__38563 = (0);
seq__38539_38543 = G__38560;
chunk__38540_38544 = G__38561;
count__38541_38545 = G__38562;
i__38542_38546 = G__38563;
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
goog.require_figwheel_backup_ = (function (){var or__25809__auto__ = goog.require__;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
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
var G__38564__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38565__i = 0, G__38565__a = new Array(arguments.length -  0);
while (G__38565__i < G__38565__a.length) {G__38565__a[G__38565__i] = arguments[G__38565__i + 0]; ++G__38565__i;}
  args = new cljs.core.IndexedSeq(G__38565__a,0);
} 
return G__38564__delegate.call(this,args);};
G__38564.cljs$lang$maxFixedArity = 0;
G__38564.cljs$lang$applyTo = (function (arglist__38566){
var args = cljs.core.seq(arglist__38566);
return G__38564__delegate(args);
});
G__38564.cljs$core$IFn$_invoke$arity$variadic = G__38564__delegate;
return G__38564;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38568 = cljs.core._EQ_;
var expr__38569 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38568.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38569))){
var path_parts = ((function (pred__38568,expr__38569){
return (function (p1__38567_SHARP_){
return clojure.string.split.call(null,p1__38567_SHARP_,/[\/\\]/);
});})(pred__38568,expr__38569))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38568,expr__38569){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38571){if((e38571 instanceof Error)){
var e = e38571;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38571;

}
}})());
});
;})(path_parts,sep,root,pred__38568,expr__38569))
} else {
if(cljs.core.truth_(pred__38568.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38569))){
return ((function (pred__38568,expr__38569){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38568,expr__38569){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38568,expr__38569))
);

return deferred.addErrback(((function (deferred,pred__38568,expr__38569){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38568,expr__38569))
);
});
;})(pred__38568,expr__38569))
} else {
return ((function (pred__38568,expr__38569){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38568,expr__38569))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38572,callback){
var map__38575 = p__38572;
var map__38575__$1 = ((((!((map__38575 == null)))?((((map__38575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38575):map__38575);
var file_msg = map__38575__$1;
var request_url = cljs.core.get.call(null,map__38575__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38575,map__38575__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38575,map__38575__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_38599){
var state_val_38600 = (state_38599[(1)]);
if((state_val_38600 === (7))){
var inst_38595 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
var statearr_38601_38621 = state_38599__$1;
(statearr_38601_38621[(2)] = inst_38595);

(statearr_38601_38621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (1))){
var state_38599__$1 = state_38599;
var statearr_38602_38622 = state_38599__$1;
(statearr_38602_38622[(2)] = null);

(statearr_38602_38622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (4))){
var inst_38579 = (state_38599[(7)]);
var inst_38579__$1 = (state_38599[(2)]);
var state_38599__$1 = (function (){var statearr_38603 = state_38599;
(statearr_38603[(7)] = inst_38579__$1);

return statearr_38603;
})();
if(cljs.core.truth_(inst_38579__$1)){
var statearr_38604_38623 = state_38599__$1;
(statearr_38604_38623[(1)] = (5));

} else {
var statearr_38605_38624 = state_38599__$1;
(statearr_38605_38624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (6))){
var state_38599__$1 = state_38599;
var statearr_38606_38625 = state_38599__$1;
(statearr_38606_38625[(2)] = null);

(statearr_38606_38625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (3))){
var inst_38597 = (state_38599[(2)]);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38599__$1,inst_38597);
} else {
if((state_val_38600 === (2))){
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38600 === (11))){
var inst_38591 = (state_38599[(2)]);
var state_38599__$1 = (function (){var statearr_38607 = state_38599;
(statearr_38607[(8)] = inst_38591);

return statearr_38607;
})();
var statearr_38608_38626 = state_38599__$1;
(statearr_38608_38626[(2)] = null);

(statearr_38608_38626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (9))){
var inst_38585 = (state_38599[(9)]);
var inst_38583 = (state_38599[(10)]);
var inst_38587 = inst_38585.call(null,inst_38583);
var state_38599__$1 = state_38599;
var statearr_38609_38627 = state_38599__$1;
(statearr_38609_38627[(2)] = inst_38587);

(statearr_38609_38627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (5))){
var inst_38579 = (state_38599[(7)]);
var inst_38581 = figwheel.client.file_reloading.blocking_load.call(null,inst_38579);
var state_38599__$1 = state_38599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38599__$1,(8),inst_38581);
} else {
if((state_val_38600 === (10))){
var inst_38583 = (state_38599[(10)]);
var inst_38589 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38583);
var state_38599__$1 = state_38599;
var statearr_38610_38628 = state_38599__$1;
(statearr_38610_38628[(2)] = inst_38589);

(statearr_38610_38628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38600 === (8))){
var inst_38585 = (state_38599[(9)]);
var inst_38579 = (state_38599[(7)]);
var inst_38583 = (state_38599[(2)]);
var inst_38584 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38585__$1 = cljs.core.get.call(null,inst_38584,inst_38579);
var state_38599__$1 = (function (){var statearr_38611 = state_38599;
(statearr_38611[(9)] = inst_38585__$1);

(statearr_38611[(10)] = inst_38583);

return statearr_38611;
})();
if(cljs.core.truth_(inst_38585__$1)){
var statearr_38612_38629 = state_38599__$1;
(statearr_38612_38629[(1)] = (9));

} else {
var statearr_38613_38630 = state_38599__$1;
(statearr_38613_38630[(1)] = (10));

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
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29829__auto__ = null;
var figwheel$client$file_reloading$state_machine__29829__auto____0 = (function (){
var statearr_38617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38617[(0)] = figwheel$client$file_reloading$state_machine__29829__auto__);

(statearr_38617[(1)] = (1));

return statearr_38617;
});
var figwheel$client$file_reloading$state_machine__29829__auto____1 = (function (state_38599){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_38599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e38618){if((e38618 instanceof Object)){
var ex__29832__auto__ = e38618;
var statearr_38619_38631 = state_38599;
(statearr_38619_38631[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38632 = state_38599;
state_38599 = G__38632;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29829__auto__ = function(state_38599){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29829__auto____1.call(this,state_38599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29829__auto____0;
figwheel$client$file_reloading$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29829__auto____1;
return figwheel$client$file_reloading$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_38620 = f__29941__auto__.call(null);
(statearr_38620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_38620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38633,callback){
var map__38636 = p__38633;
var map__38636__$1 = ((((!((map__38636 == null)))?((((map__38636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38636):map__38636);
var file_msg = map__38636__$1;
var namespace = cljs.core.get.call(null,map__38636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38636,map__38636__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38636,map__38636__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38638){
var map__38641 = p__38638;
var map__38641__$1 = ((((!((map__38641 == null)))?((((map__38641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38641):map__38641);
var file_msg = map__38641__$1;
var namespace = cljs.core.get.call(null,map__38641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25797__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25797__auto__){
var or__25809__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var or__25809__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25809__auto____$1)){
return or__25809__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25797__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38643,callback){
var map__38646 = p__38643;
var map__38646__$1 = ((((!((map__38646 == null)))?((((map__38646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38646):map__38646);
var file_msg = map__38646__$1;
var request_url = cljs.core.get.call(null,map__38646__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38646__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29940__auto___38734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___38734,out){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___38734,out){
return (function (state_38716){
var state_val_38717 = (state_38716[(1)]);
if((state_val_38717 === (1))){
var inst_38694 = cljs.core.nth.call(null,files,(0),null);
var inst_38695 = cljs.core.nthnext.call(null,files,(1));
var inst_38696 = files;
var state_38716__$1 = (function (){var statearr_38718 = state_38716;
(statearr_38718[(7)] = inst_38694);

(statearr_38718[(8)] = inst_38695);

(statearr_38718[(9)] = inst_38696);

return statearr_38718;
})();
var statearr_38719_38735 = state_38716__$1;
(statearr_38719_38735[(2)] = null);

(statearr_38719_38735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38717 === (2))){
var inst_38699 = (state_38716[(10)]);
var inst_38696 = (state_38716[(9)]);
var inst_38699__$1 = cljs.core.nth.call(null,inst_38696,(0),null);
var inst_38700 = cljs.core.nthnext.call(null,inst_38696,(1));
var inst_38701 = (inst_38699__$1 == null);
var inst_38702 = cljs.core.not.call(null,inst_38701);
var state_38716__$1 = (function (){var statearr_38720 = state_38716;
(statearr_38720[(11)] = inst_38700);

(statearr_38720[(10)] = inst_38699__$1);

return statearr_38720;
})();
if(inst_38702){
var statearr_38721_38736 = state_38716__$1;
(statearr_38721_38736[(1)] = (4));

} else {
var statearr_38722_38737 = state_38716__$1;
(statearr_38722_38737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38717 === (3))){
var inst_38714 = (state_38716[(2)]);
var state_38716__$1 = state_38716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38716__$1,inst_38714);
} else {
if((state_val_38717 === (4))){
var inst_38699 = (state_38716[(10)]);
var inst_38704 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38699);
var state_38716__$1 = state_38716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38716__$1,(7),inst_38704);
} else {
if((state_val_38717 === (5))){
var inst_38710 = cljs.core.async.close_BANG_.call(null,out);
var state_38716__$1 = state_38716;
var statearr_38723_38738 = state_38716__$1;
(statearr_38723_38738[(2)] = inst_38710);

(statearr_38723_38738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38717 === (6))){
var inst_38712 = (state_38716[(2)]);
var state_38716__$1 = state_38716;
var statearr_38724_38739 = state_38716__$1;
(statearr_38724_38739[(2)] = inst_38712);

(statearr_38724_38739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38717 === (7))){
var inst_38700 = (state_38716[(11)]);
var inst_38706 = (state_38716[(2)]);
var inst_38707 = cljs.core.async.put_BANG_.call(null,out,inst_38706);
var inst_38696 = inst_38700;
var state_38716__$1 = (function (){var statearr_38725 = state_38716;
(statearr_38725[(12)] = inst_38707);

(statearr_38725[(9)] = inst_38696);

return statearr_38725;
})();
var statearr_38726_38740 = state_38716__$1;
(statearr_38726_38740[(2)] = null);

(statearr_38726_38740[(1)] = (2));


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
});})(c__29940__auto___38734,out))
;
return ((function (switch__29828__auto__,c__29940__auto___38734,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____0 = (function (){
var statearr_38730 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38730[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__);

(statearr_38730[(1)] = (1));

return statearr_38730;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____1 = (function (state_38716){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_38716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e38731){if((e38731 instanceof Object)){
var ex__29832__auto__ = e38731;
var statearr_38732_38741 = state_38716;
(statearr_38732_38741[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38742 = state_38716;
state_38716 = G__38742;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__ = function(state_38716){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____1.call(this,state_38716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___38734,out))
})();
var state__29942__auto__ = (function (){var statearr_38733 = f__29941__auto__.call(null);
(statearr_38733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___38734);

return statearr_38733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___38734,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38743,opts){
var map__38747 = p__38743;
var map__38747__$1 = ((((!((map__38747 == null)))?((((map__38747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38747):map__38747);
var eval_body__$1 = cljs.core.get.call(null,map__38747__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25797__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25797__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25797__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38749){var e = e38749;
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
return (function (p1__38750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38750_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38755){
var vec__38756 = p__38755;
var k = cljs.core.nth.call(null,vec__38756,(0),null);
var v = cljs.core.nth.call(null,vec__38756,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38757){
var vec__38758 = p__38757;
var k = cljs.core.nth.call(null,vec__38758,(0),null);
var v = cljs.core.nth.call(null,vec__38758,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38762,p__38763){
var map__39010 = p__38762;
var map__39010__$1 = ((((!((map__39010 == null)))?((((map__39010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39010):map__39010);
var opts = map__39010__$1;
var before_jsload = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39010__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39011 = p__38763;
var map__39011__$1 = ((((!((map__39011 == null)))?((((map__39011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39011):map__39011);
var msg = map__39011__$1;
var files = cljs.core.get.call(null,map__39011__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39011__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39011__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39164){
var state_val_39165 = (state_39164[(1)]);
if((state_val_39165 === (7))){
var inst_39025 = (state_39164[(7)]);
var inst_39026 = (state_39164[(8)]);
var inst_39028 = (state_39164[(9)]);
var inst_39027 = (state_39164[(10)]);
var inst_39033 = cljs.core._nth.call(null,inst_39026,inst_39028);
var inst_39034 = figwheel.client.file_reloading.eval_body.call(null,inst_39033,opts);
var inst_39035 = (inst_39028 + (1));
var tmp39166 = inst_39025;
var tmp39167 = inst_39026;
var tmp39168 = inst_39027;
var inst_39025__$1 = tmp39166;
var inst_39026__$1 = tmp39167;
var inst_39027__$1 = tmp39168;
var inst_39028__$1 = inst_39035;
var state_39164__$1 = (function (){var statearr_39169 = state_39164;
(statearr_39169[(7)] = inst_39025__$1);

(statearr_39169[(8)] = inst_39026__$1);

(statearr_39169[(9)] = inst_39028__$1);

(statearr_39169[(11)] = inst_39034);

(statearr_39169[(10)] = inst_39027__$1);

return statearr_39169;
})();
var statearr_39170_39256 = state_39164__$1;
(statearr_39170_39256[(2)] = null);

(statearr_39170_39256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (20))){
var inst_39068 = (state_39164[(12)]);
var inst_39076 = figwheel.client.file_reloading.sort_files.call(null,inst_39068);
var state_39164__$1 = state_39164;
var statearr_39171_39257 = state_39164__$1;
(statearr_39171_39257[(2)] = inst_39076);

(statearr_39171_39257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (27))){
var state_39164__$1 = state_39164;
var statearr_39172_39258 = state_39164__$1;
(statearr_39172_39258[(2)] = null);

(statearr_39172_39258[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (1))){
var inst_39017 = (state_39164[(13)]);
var inst_39014 = before_jsload.call(null,files);
var inst_39015 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39016 = (function (){return ((function (inst_39017,inst_39014,inst_39015,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38759_SHARP_);
});
;})(inst_39017,inst_39014,inst_39015,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39017__$1 = cljs.core.filter.call(null,inst_39016,files);
var inst_39018 = cljs.core.not_empty.call(null,inst_39017__$1);
var state_39164__$1 = (function (){var statearr_39173 = state_39164;
(statearr_39173[(14)] = inst_39014);

(statearr_39173[(15)] = inst_39015);

(statearr_39173[(13)] = inst_39017__$1);

return statearr_39173;
})();
if(cljs.core.truth_(inst_39018)){
var statearr_39174_39259 = state_39164__$1;
(statearr_39174_39259[(1)] = (2));

} else {
var statearr_39175_39260 = state_39164__$1;
(statearr_39175_39260[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (24))){
var state_39164__$1 = state_39164;
var statearr_39176_39261 = state_39164__$1;
(statearr_39176_39261[(2)] = null);

(statearr_39176_39261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (39))){
var inst_39118 = (state_39164[(16)]);
var state_39164__$1 = state_39164;
var statearr_39177_39262 = state_39164__$1;
(statearr_39177_39262[(2)] = inst_39118);

(statearr_39177_39262[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (46))){
var inst_39159 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39178_39263 = state_39164__$1;
(statearr_39178_39263[(2)] = inst_39159);

(statearr_39178_39263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (4))){
var inst_39062 = (state_39164[(2)]);
var inst_39063 = cljs.core.List.EMPTY;
var inst_39064 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39063);
var inst_39065 = (function (){return ((function (inst_39062,inst_39063,inst_39064,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38760_SHARP_){
var and__25797__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38760_SHARP_);
if(cljs.core.truth_(and__25797__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38760_SHARP_));
} else {
return and__25797__auto__;
}
});
;})(inst_39062,inst_39063,inst_39064,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39066 = cljs.core.filter.call(null,inst_39065,files);
var inst_39067 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39068 = cljs.core.concat.call(null,inst_39066,inst_39067);
var state_39164__$1 = (function (){var statearr_39179 = state_39164;
(statearr_39179[(17)] = inst_39064);

(statearr_39179[(18)] = inst_39062);

(statearr_39179[(12)] = inst_39068);

return statearr_39179;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39180_39264 = state_39164__$1;
(statearr_39180_39264[(1)] = (16));

} else {
var statearr_39181_39265 = state_39164__$1;
(statearr_39181_39265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (15))){
var inst_39052 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39182_39266 = state_39164__$1;
(statearr_39182_39266[(2)] = inst_39052);

(statearr_39182_39266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (21))){
var inst_39078 = (state_39164[(19)]);
var inst_39078__$1 = (state_39164[(2)]);
var inst_39079 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39078__$1);
var state_39164__$1 = (function (){var statearr_39183 = state_39164;
(statearr_39183[(19)] = inst_39078__$1);

return statearr_39183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39164__$1,(22),inst_39079);
} else {
if((state_val_39165 === (31))){
var inst_39162 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39164__$1,inst_39162);
} else {
if((state_val_39165 === (32))){
var inst_39118 = (state_39164[(16)]);
var inst_39123 = inst_39118.cljs$lang$protocol_mask$partition0$;
var inst_39124 = (inst_39123 & (64));
var inst_39125 = inst_39118.cljs$core$ISeq$;
var inst_39126 = (inst_39124) || (inst_39125);
var state_39164__$1 = state_39164;
if(cljs.core.truth_(inst_39126)){
var statearr_39184_39267 = state_39164__$1;
(statearr_39184_39267[(1)] = (35));

} else {
var statearr_39185_39268 = state_39164__$1;
(statearr_39185_39268[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (40))){
var inst_39139 = (state_39164[(20)]);
var inst_39138 = (state_39164[(2)]);
var inst_39139__$1 = cljs.core.get.call(null,inst_39138,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39140 = cljs.core.get.call(null,inst_39138,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39141 = cljs.core.not_empty.call(null,inst_39139__$1);
var state_39164__$1 = (function (){var statearr_39186 = state_39164;
(statearr_39186[(21)] = inst_39140);

(statearr_39186[(20)] = inst_39139__$1);

return statearr_39186;
})();
if(cljs.core.truth_(inst_39141)){
var statearr_39187_39269 = state_39164__$1;
(statearr_39187_39269[(1)] = (41));

} else {
var statearr_39188_39270 = state_39164__$1;
(statearr_39188_39270[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (33))){
var state_39164__$1 = state_39164;
var statearr_39189_39271 = state_39164__$1;
(statearr_39189_39271[(2)] = false);

(statearr_39189_39271[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (13))){
var inst_39038 = (state_39164[(22)]);
var inst_39042 = cljs.core.chunk_first.call(null,inst_39038);
var inst_39043 = cljs.core.chunk_rest.call(null,inst_39038);
var inst_39044 = cljs.core.count.call(null,inst_39042);
var inst_39025 = inst_39043;
var inst_39026 = inst_39042;
var inst_39027 = inst_39044;
var inst_39028 = (0);
var state_39164__$1 = (function (){var statearr_39190 = state_39164;
(statearr_39190[(7)] = inst_39025);

(statearr_39190[(8)] = inst_39026);

(statearr_39190[(9)] = inst_39028);

(statearr_39190[(10)] = inst_39027);

return statearr_39190;
})();
var statearr_39191_39272 = state_39164__$1;
(statearr_39191_39272[(2)] = null);

(statearr_39191_39272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (22))){
var inst_39082 = (state_39164[(23)]);
var inst_39081 = (state_39164[(24)]);
var inst_39078 = (state_39164[(19)]);
var inst_39086 = (state_39164[(25)]);
var inst_39081__$1 = (state_39164[(2)]);
var inst_39082__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39081__$1);
var inst_39083 = (function (){var all_files = inst_39078;
var res_SINGLEQUOTE_ = inst_39081__$1;
var res = inst_39082__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39082,inst_39081,inst_39078,inst_39086,inst_39081__$1,inst_39082__$1,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39082,inst_39081,inst_39078,inst_39086,inst_39081__$1,inst_39082__$1,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39084 = cljs.core.filter.call(null,inst_39083,inst_39081__$1);
var inst_39085 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39086__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39085);
var inst_39087 = cljs.core.not_empty.call(null,inst_39086__$1);
var state_39164__$1 = (function (){var statearr_39192 = state_39164;
(statearr_39192[(23)] = inst_39082__$1);

(statearr_39192[(24)] = inst_39081__$1);

(statearr_39192[(25)] = inst_39086__$1);

(statearr_39192[(26)] = inst_39084);

return statearr_39192;
})();
if(cljs.core.truth_(inst_39087)){
var statearr_39193_39273 = state_39164__$1;
(statearr_39193_39273[(1)] = (23));

} else {
var statearr_39194_39274 = state_39164__$1;
(statearr_39194_39274[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (36))){
var state_39164__$1 = state_39164;
var statearr_39195_39275 = state_39164__$1;
(statearr_39195_39275[(2)] = false);

(statearr_39195_39275[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (41))){
var inst_39139 = (state_39164[(20)]);
var inst_39143 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39144 = cljs.core.map.call(null,inst_39143,inst_39139);
var inst_39145 = cljs.core.pr_str.call(null,inst_39144);
var inst_39146 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39145)].join('');
var inst_39147 = figwheel.client.utils.log.call(null,inst_39146);
var state_39164__$1 = state_39164;
var statearr_39196_39276 = state_39164__$1;
(statearr_39196_39276[(2)] = inst_39147);

(statearr_39196_39276[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (43))){
var inst_39140 = (state_39164[(21)]);
var inst_39150 = (state_39164[(2)]);
var inst_39151 = cljs.core.not_empty.call(null,inst_39140);
var state_39164__$1 = (function (){var statearr_39197 = state_39164;
(statearr_39197[(27)] = inst_39150);

return statearr_39197;
})();
if(cljs.core.truth_(inst_39151)){
var statearr_39198_39277 = state_39164__$1;
(statearr_39198_39277[(1)] = (44));

} else {
var statearr_39199_39278 = state_39164__$1;
(statearr_39199_39278[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (29))){
var inst_39118 = (state_39164[(16)]);
var inst_39082 = (state_39164[(23)]);
var inst_39081 = (state_39164[(24)]);
var inst_39078 = (state_39164[(19)]);
var inst_39086 = (state_39164[(25)]);
var inst_39084 = (state_39164[(26)]);
var inst_39114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39117 = (function (){var all_files = inst_39078;
var res_SINGLEQUOTE_ = inst_39081;
var res = inst_39082;
var files_not_loaded = inst_39084;
var dependencies_that_loaded = inst_39086;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39118,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39114,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39116){
var map__39200 = p__39116;
var map__39200__$1 = ((((!((map__39200 == null)))?((((map__39200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39200):map__39200);
var namespace = cljs.core.get.call(null,map__39200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39118,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39114,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39118__$1 = cljs.core.group_by.call(null,inst_39117,inst_39084);
var inst_39120 = (inst_39118__$1 == null);
var inst_39121 = cljs.core.not.call(null,inst_39120);
var state_39164__$1 = (function (){var statearr_39202 = state_39164;
(statearr_39202[(16)] = inst_39118__$1);

(statearr_39202[(28)] = inst_39114);

return statearr_39202;
})();
if(inst_39121){
var statearr_39203_39279 = state_39164__$1;
(statearr_39203_39279[(1)] = (32));

} else {
var statearr_39204_39280 = state_39164__$1;
(statearr_39204_39280[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (44))){
var inst_39140 = (state_39164[(21)]);
var inst_39153 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39140);
var inst_39154 = cljs.core.pr_str.call(null,inst_39153);
var inst_39155 = [cljs.core.str("not required: "),cljs.core.str(inst_39154)].join('');
var inst_39156 = figwheel.client.utils.log.call(null,inst_39155);
var state_39164__$1 = state_39164;
var statearr_39205_39281 = state_39164__$1;
(statearr_39205_39281[(2)] = inst_39156);

(statearr_39205_39281[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (6))){
var inst_39059 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39206_39282 = state_39164__$1;
(statearr_39206_39282[(2)] = inst_39059);

(statearr_39206_39282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (28))){
var inst_39084 = (state_39164[(26)]);
var inst_39111 = (state_39164[(2)]);
var inst_39112 = cljs.core.not_empty.call(null,inst_39084);
var state_39164__$1 = (function (){var statearr_39207 = state_39164;
(statearr_39207[(29)] = inst_39111);

return statearr_39207;
})();
if(cljs.core.truth_(inst_39112)){
var statearr_39208_39283 = state_39164__$1;
(statearr_39208_39283[(1)] = (29));

} else {
var statearr_39209_39284 = state_39164__$1;
(statearr_39209_39284[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (25))){
var inst_39082 = (state_39164[(23)]);
var inst_39098 = (state_39164[(2)]);
var inst_39099 = cljs.core.not_empty.call(null,inst_39082);
var state_39164__$1 = (function (){var statearr_39210 = state_39164;
(statearr_39210[(30)] = inst_39098);

return statearr_39210;
})();
if(cljs.core.truth_(inst_39099)){
var statearr_39211_39285 = state_39164__$1;
(statearr_39211_39285[(1)] = (26));

} else {
var statearr_39212_39286 = state_39164__$1;
(statearr_39212_39286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (34))){
var inst_39133 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
if(cljs.core.truth_(inst_39133)){
var statearr_39213_39287 = state_39164__$1;
(statearr_39213_39287[(1)] = (38));

} else {
var statearr_39214_39288 = state_39164__$1;
(statearr_39214_39288[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (17))){
var state_39164__$1 = state_39164;
var statearr_39215_39289 = state_39164__$1;
(statearr_39215_39289[(2)] = recompile_dependents);

(statearr_39215_39289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (3))){
var state_39164__$1 = state_39164;
var statearr_39216_39290 = state_39164__$1;
(statearr_39216_39290[(2)] = null);

(statearr_39216_39290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (12))){
var inst_39055 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39217_39291 = state_39164__$1;
(statearr_39217_39291[(2)] = inst_39055);

(statearr_39217_39291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (2))){
var inst_39017 = (state_39164[(13)]);
var inst_39024 = cljs.core.seq.call(null,inst_39017);
var inst_39025 = inst_39024;
var inst_39026 = null;
var inst_39027 = (0);
var inst_39028 = (0);
var state_39164__$1 = (function (){var statearr_39218 = state_39164;
(statearr_39218[(7)] = inst_39025);

(statearr_39218[(8)] = inst_39026);

(statearr_39218[(9)] = inst_39028);

(statearr_39218[(10)] = inst_39027);

return statearr_39218;
})();
var statearr_39219_39292 = state_39164__$1;
(statearr_39219_39292[(2)] = null);

(statearr_39219_39292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (23))){
var inst_39082 = (state_39164[(23)]);
var inst_39081 = (state_39164[(24)]);
var inst_39078 = (state_39164[(19)]);
var inst_39086 = (state_39164[(25)]);
var inst_39084 = (state_39164[(26)]);
var inst_39089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39091 = (function (){var all_files = inst_39078;
var res_SINGLEQUOTE_ = inst_39081;
var res = inst_39082;
var files_not_loaded = inst_39084;
var dependencies_that_loaded = inst_39086;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39089,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39090){
var map__39220 = p__39090;
var map__39220__$1 = ((((!((map__39220 == null)))?((((map__39220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39220):map__39220);
var request_url = cljs.core.get.call(null,map__39220__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39089,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39092 = cljs.core.reverse.call(null,inst_39086);
var inst_39093 = cljs.core.map.call(null,inst_39091,inst_39092);
var inst_39094 = cljs.core.pr_str.call(null,inst_39093);
var inst_39095 = figwheel.client.utils.log.call(null,inst_39094);
var state_39164__$1 = (function (){var statearr_39222 = state_39164;
(statearr_39222[(31)] = inst_39089);

return statearr_39222;
})();
var statearr_39223_39293 = state_39164__$1;
(statearr_39223_39293[(2)] = inst_39095);

(statearr_39223_39293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (35))){
var state_39164__$1 = state_39164;
var statearr_39224_39294 = state_39164__$1;
(statearr_39224_39294[(2)] = true);

(statearr_39224_39294[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (19))){
var inst_39068 = (state_39164[(12)]);
var inst_39074 = figwheel.client.file_reloading.expand_files.call(null,inst_39068);
var state_39164__$1 = state_39164;
var statearr_39225_39295 = state_39164__$1;
(statearr_39225_39295[(2)] = inst_39074);

(statearr_39225_39295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (11))){
var state_39164__$1 = state_39164;
var statearr_39226_39296 = state_39164__$1;
(statearr_39226_39296[(2)] = null);

(statearr_39226_39296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (9))){
var inst_39057 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39227_39297 = state_39164__$1;
(statearr_39227_39297[(2)] = inst_39057);

(statearr_39227_39297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (5))){
var inst_39028 = (state_39164[(9)]);
var inst_39027 = (state_39164[(10)]);
var inst_39030 = (inst_39028 < inst_39027);
var inst_39031 = inst_39030;
var state_39164__$1 = state_39164;
if(cljs.core.truth_(inst_39031)){
var statearr_39228_39298 = state_39164__$1;
(statearr_39228_39298[(1)] = (7));

} else {
var statearr_39229_39299 = state_39164__$1;
(statearr_39229_39299[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (14))){
var inst_39038 = (state_39164[(22)]);
var inst_39047 = cljs.core.first.call(null,inst_39038);
var inst_39048 = figwheel.client.file_reloading.eval_body.call(null,inst_39047,opts);
var inst_39049 = cljs.core.next.call(null,inst_39038);
var inst_39025 = inst_39049;
var inst_39026 = null;
var inst_39027 = (0);
var inst_39028 = (0);
var state_39164__$1 = (function (){var statearr_39230 = state_39164;
(statearr_39230[(7)] = inst_39025);

(statearr_39230[(8)] = inst_39026);

(statearr_39230[(9)] = inst_39028);

(statearr_39230[(10)] = inst_39027);

(statearr_39230[(32)] = inst_39048);

return statearr_39230;
})();
var statearr_39231_39300 = state_39164__$1;
(statearr_39231_39300[(2)] = null);

(statearr_39231_39300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (45))){
var state_39164__$1 = state_39164;
var statearr_39232_39301 = state_39164__$1;
(statearr_39232_39301[(2)] = null);

(statearr_39232_39301[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (26))){
var inst_39082 = (state_39164[(23)]);
var inst_39081 = (state_39164[(24)]);
var inst_39078 = (state_39164[(19)]);
var inst_39086 = (state_39164[(25)]);
var inst_39084 = (state_39164[(26)]);
var inst_39101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39103 = (function (){var all_files = inst_39078;
var res_SINGLEQUOTE_ = inst_39081;
var res = inst_39082;
var files_not_loaded = inst_39084;
var dependencies_that_loaded = inst_39086;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39101,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39102){
var map__39233 = p__39102;
var map__39233__$1 = ((((!((map__39233 == null)))?((((map__39233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39233):map__39233);
var namespace = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39101,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39104 = cljs.core.map.call(null,inst_39103,inst_39082);
var inst_39105 = cljs.core.pr_str.call(null,inst_39104);
var inst_39106 = figwheel.client.utils.log.call(null,inst_39105);
var inst_39107 = (function (){var all_files = inst_39078;
var res_SINGLEQUOTE_ = inst_39081;
var res = inst_39082;
var files_not_loaded = inst_39084;
var dependencies_that_loaded = inst_39086;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39101,inst_39103,inst_39104,inst_39105,inst_39106,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39082,inst_39081,inst_39078,inst_39086,inst_39084,inst_39101,inst_39103,inst_39104,inst_39105,inst_39106,state_val_39165,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39108 = setTimeout(inst_39107,(10));
var state_39164__$1 = (function (){var statearr_39235 = state_39164;
(statearr_39235[(33)] = inst_39106);

(statearr_39235[(34)] = inst_39101);

return statearr_39235;
})();
var statearr_39236_39302 = state_39164__$1;
(statearr_39236_39302[(2)] = inst_39108);

(statearr_39236_39302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (16))){
var state_39164__$1 = state_39164;
var statearr_39237_39303 = state_39164__$1;
(statearr_39237_39303[(2)] = reload_dependents);

(statearr_39237_39303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (38))){
var inst_39118 = (state_39164[(16)]);
var inst_39135 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39118);
var state_39164__$1 = state_39164;
var statearr_39238_39304 = state_39164__$1;
(statearr_39238_39304[(2)] = inst_39135);

(statearr_39238_39304[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (30))){
var state_39164__$1 = state_39164;
var statearr_39239_39305 = state_39164__$1;
(statearr_39239_39305[(2)] = null);

(statearr_39239_39305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (10))){
var inst_39038 = (state_39164[(22)]);
var inst_39040 = cljs.core.chunked_seq_QMARK_.call(null,inst_39038);
var state_39164__$1 = state_39164;
if(inst_39040){
var statearr_39240_39306 = state_39164__$1;
(statearr_39240_39306[(1)] = (13));

} else {
var statearr_39241_39307 = state_39164__$1;
(statearr_39241_39307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (18))){
var inst_39072 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
if(cljs.core.truth_(inst_39072)){
var statearr_39242_39308 = state_39164__$1;
(statearr_39242_39308[(1)] = (19));

} else {
var statearr_39243_39309 = state_39164__$1;
(statearr_39243_39309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (42))){
var state_39164__$1 = state_39164;
var statearr_39244_39310 = state_39164__$1;
(statearr_39244_39310[(2)] = null);

(statearr_39244_39310[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (37))){
var inst_39130 = (state_39164[(2)]);
var state_39164__$1 = state_39164;
var statearr_39245_39311 = state_39164__$1;
(statearr_39245_39311[(2)] = inst_39130);

(statearr_39245_39311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39165 === (8))){
var inst_39025 = (state_39164[(7)]);
var inst_39038 = (state_39164[(22)]);
var inst_39038__$1 = cljs.core.seq.call(null,inst_39025);
var state_39164__$1 = (function (){var statearr_39246 = state_39164;
(statearr_39246[(22)] = inst_39038__$1);

return statearr_39246;
})();
if(inst_39038__$1){
var statearr_39247_39312 = state_39164__$1;
(statearr_39247_39312[(1)] = (10));

} else {
var statearr_39248_39313 = state_39164__$1;
(statearr_39248_39313[(1)] = (11));

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
});})(c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29828__auto__,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____0 = (function (){
var statearr_39252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39252[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__);

(statearr_39252[(1)] = (1));

return statearr_39252;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____1 = (function (state_39164){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_39164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e39253){if((e39253 instanceof Object)){
var ex__29832__auto__ = e39253;
var statearr_39254_39314 = state_39164;
(statearr_39254_39314[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39315 = state_39164;
state_39164 = G__39315;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__ = function(state_39164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____1.call(this,state_39164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29942__auto__ = (function (){var statearr_39255 = f__29941__auto__.call(null);
(statearr_39255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_39255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,map__39010,map__39010__$1,opts,before_jsload,on_jsload,reload_dependents,map__39011,map__39011__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29940__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39318,link){
var map__39321 = p__39318;
var map__39321__$1 = ((((!((map__39321 == null)))?((((map__39321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39321):map__39321);
var file = cljs.core.get.call(null,map__39321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39321,map__39321__$1,file){
return (function (p1__39316_SHARP_,p2__39317_SHARP_){
if(cljs.core._EQ_.call(null,p1__39316_SHARP_,p2__39317_SHARP_)){
return p1__39316_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39321,map__39321__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39327){
var map__39328 = p__39327;
var map__39328__$1 = ((((!((map__39328 == null)))?((((map__39328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39328):map__39328);
var match_length = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39328__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39323_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39323_SHARP_);
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
var args39330 = [];
var len__26879__auto___39333 = arguments.length;
var i__26880__auto___39334 = (0);
while(true){
if((i__26880__auto___39334 < len__26879__auto___39333)){
args39330.push((arguments[i__26880__auto___39334]));

var G__39335 = (i__26880__auto___39334 + (1));
i__26880__auto___39334 = G__39335;
continue;
} else {
}
break;
}

var G__39332 = args39330.length;
switch (G__39332) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39330.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39337_SHARP_,p2__39338_SHARP_){
return cljs.core.assoc.call(null,p1__39337_SHARP_,cljs.core.get.call(null,p2__39338_SHARP_,key),p2__39338_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39339){
var map__39342 = p__39339;
var map__39342__$1 = ((((!((map__39342 == null)))?((((map__39342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39342):map__39342);
var f_data = map__39342__$1;
var file = cljs.core.get.call(null,map__39342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39344,files_msg){
var map__39351 = p__39344;
var map__39351__$1 = ((((!((map__39351 == null)))?((((map__39351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39351):map__39351);
var opts = map__39351__$1;
var on_cssload = cljs.core.get.call(null,map__39351__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39353_39357 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39354_39358 = null;
var count__39355_39359 = (0);
var i__39356_39360 = (0);
while(true){
if((i__39356_39360 < count__39355_39359)){
var f_39361 = cljs.core._nth.call(null,chunk__39354_39358,i__39356_39360);
figwheel.client.file_reloading.reload_css_file.call(null,f_39361);

var G__39362 = seq__39353_39357;
var G__39363 = chunk__39354_39358;
var G__39364 = count__39355_39359;
var G__39365 = (i__39356_39360 + (1));
seq__39353_39357 = G__39362;
chunk__39354_39358 = G__39363;
count__39355_39359 = G__39364;
i__39356_39360 = G__39365;
continue;
} else {
var temp__4425__auto___39366 = cljs.core.seq.call(null,seq__39353_39357);
if(temp__4425__auto___39366){
var seq__39353_39367__$1 = temp__4425__auto___39366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39353_39367__$1)){
var c__26620__auto___39368 = cljs.core.chunk_first.call(null,seq__39353_39367__$1);
var G__39369 = cljs.core.chunk_rest.call(null,seq__39353_39367__$1);
var G__39370 = c__26620__auto___39368;
var G__39371 = cljs.core.count.call(null,c__26620__auto___39368);
var G__39372 = (0);
seq__39353_39357 = G__39369;
chunk__39354_39358 = G__39370;
count__39355_39359 = G__39371;
i__39356_39360 = G__39372;
continue;
} else {
var f_39373 = cljs.core.first.call(null,seq__39353_39367__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39373);

var G__39374 = cljs.core.next.call(null,seq__39353_39367__$1);
var G__39375 = null;
var G__39376 = (0);
var G__39377 = (0);
seq__39353_39357 = G__39374;
chunk__39354_39358 = G__39375;
count__39355_39359 = G__39376;
i__39356_39360 = G__39377;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39351,map__39351__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39351,map__39351__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map