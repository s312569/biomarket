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
var or__25812__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25812__auto__){
return or__25812__auto__;
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
var or__25812__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38367_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38367_SHARP_));
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
var seq__38372 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38373 = null;
var count__38374 = (0);
var i__38375 = (0);
while(true){
if((i__38375 < count__38374)){
var n = cljs.core._nth.call(null,chunk__38373,i__38375);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38376 = seq__38372;
var G__38377 = chunk__38373;
var G__38378 = count__38374;
var G__38379 = (i__38375 + (1));
seq__38372 = G__38376;
chunk__38373 = G__38377;
count__38374 = G__38378;
i__38375 = G__38379;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38372);
if(temp__4425__auto__){
var seq__38372__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38372__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__38372__$1);
var G__38380 = cljs.core.chunk_rest.call(null,seq__38372__$1);
var G__38381 = c__26623__auto__;
var G__38382 = cljs.core.count.call(null,c__26623__auto__);
var G__38383 = (0);
seq__38372 = G__38380;
chunk__38373 = G__38381;
count__38374 = G__38382;
i__38375 = G__38383;
continue;
} else {
var n = cljs.core.first.call(null,seq__38372__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38384 = cljs.core.next.call(null,seq__38372__$1);
var G__38385 = null;
var G__38386 = (0);
var G__38387 = (0);
seq__38372 = G__38384;
chunk__38373 = G__38385;
count__38374 = G__38386;
i__38375 = G__38387;
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

var seq__38426_38433 = cljs.core.seq.call(null,deps);
var chunk__38427_38434 = null;
var count__38428_38435 = (0);
var i__38429_38436 = (0);
while(true){
if((i__38429_38436 < count__38428_38435)){
var dep_38437 = cljs.core._nth.call(null,chunk__38427_38434,i__38429_38436);
topo_sort_helper_STAR_.call(null,dep_38437,(depth + (1)),state);

var G__38438 = seq__38426_38433;
var G__38439 = chunk__38427_38434;
var G__38440 = count__38428_38435;
var G__38441 = (i__38429_38436 + (1));
seq__38426_38433 = G__38438;
chunk__38427_38434 = G__38439;
count__38428_38435 = G__38440;
i__38429_38436 = G__38441;
continue;
} else {
var temp__4425__auto___38442 = cljs.core.seq.call(null,seq__38426_38433);
if(temp__4425__auto___38442){
var seq__38426_38443__$1 = temp__4425__auto___38442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38426_38443__$1)){
var c__26623__auto___38444 = cljs.core.chunk_first.call(null,seq__38426_38443__$1);
var G__38445 = cljs.core.chunk_rest.call(null,seq__38426_38443__$1);
var G__38446 = c__26623__auto___38444;
var G__38447 = cljs.core.count.call(null,c__26623__auto___38444);
var G__38448 = (0);
seq__38426_38433 = G__38445;
chunk__38427_38434 = G__38446;
count__38428_38435 = G__38447;
i__38429_38436 = G__38448;
continue;
} else {
var dep_38449 = cljs.core.first.call(null,seq__38426_38443__$1);
topo_sort_helper_STAR_.call(null,dep_38449,(depth + (1)),state);

var G__38450 = cljs.core.next.call(null,seq__38426_38443__$1);
var G__38451 = null;
var G__38452 = (0);
var G__38453 = (0);
seq__38426_38433 = G__38450;
chunk__38427_38434 = G__38451;
count__38428_38435 = G__38452;
i__38429_38436 = G__38453;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38430){
var vec__38432 = p__38430;
var x = cljs.core.nth.call(null,vec__38432,(0),null);
var xs = cljs.core.nthnext.call(null,vec__38432,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38432,x,xs,get_deps__$1){
return (function (p1__38388_SHARP_){
return clojure.set.difference.call(null,p1__38388_SHARP_,x);
});})(vec__38432,x,xs,get_deps__$1))
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
var seq__38466 = cljs.core.seq.call(null,provides);
var chunk__38467 = null;
var count__38468 = (0);
var i__38469 = (0);
while(true){
if((i__38469 < count__38468)){
var prov = cljs.core._nth.call(null,chunk__38467,i__38469);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38470_38478 = cljs.core.seq.call(null,requires);
var chunk__38471_38479 = null;
var count__38472_38480 = (0);
var i__38473_38481 = (0);
while(true){
if((i__38473_38481 < count__38472_38480)){
var req_38482 = cljs.core._nth.call(null,chunk__38471_38479,i__38473_38481);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38482,prov);

var G__38483 = seq__38470_38478;
var G__38484 = chunk__38471_38479;
var G__38485 = count__38472_38480;
var G__38486 = (i__38473_38481 + (1));
seq__38470_38478 = G__38483;
chunk__38471_38479 = G__38484;
count__38472_38480 = G__38485;
i__38473_38481 = G__38486;
continue;
} else {
var temp__4425__auto___38487 = cljs.core.seq.call(null,seq__38470_38478);
if(temp__4425__auto___38487){
var seq__38470_38488__$1 = temp__4425__auto___38487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38470_38488__$1)){
var c__26623__auto___38489 = cljs.core.chunk_first.call(null,seq__38470_38488__$1);
var G__38490 = cljs.core.chunk_rest.call(null,seq__38470_38488__$1);
var G__38491 = c__26623__auto___38489;
var G__38492 = cljs.core.count.call(null,c__26623__auto___38489);
var G__38493 = (0);
seq__38470_38478 = G__38490;
chunk__38471_38479 = G__38491;
count__38472_38480 = G__38492;
i__38473_38481 = G__38493;
continue;
} else {
var req_38494 = cljs.core.first.call(null,seq__38470_38488__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38494,prov);

var G__38495 = cljs.core.next.call(null,seq__38470_38488__$1);
var G__38496 = null;
var G__38497 = (0);
var G__38498 = (0);
seq__38470_38478 = G__38495;
chunk__38471_38479 = G__38496;
count__38472_38480 = G__38497;
i__38473_38481 = G__38498;
continue;
}
} else {
}
}
break;
}

var G__38499 = seq__38466;
var G__38500 = chunk__38467;
var G__38501 = count__38468;
var G__38502 = (i__38469 + (1));
seq__38466 = G__38499;
chunk__38467 = G__38500;
count__38468 = G__38501;
i__38469 = G__38502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38466);
if(temp__4425__auto__){
var seq__38466__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38466__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__38466__$1);
var G__38503 = cljs.core.chunk_rest.call(null,seq__38466__$1);
var G__38504 = c__26623__auto__;
var G__38505 = cljs.core.count.call(null,c__26623__auto__);
var G__38506 = (0);
seq__38466 = G__38503;
chunk__38467 = G__38504;
count__38468 = G__38505;
i__38469 = G__38506;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38466__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38474_38507 = cljs.core.seq.call(null,requires);
var chunk__38475_38508 = null;
var count__38476_38509 = (0);
var i__38477_38510 = (0);
while(true){
if((i__38477_38510 < count__38476_38509)){
var req_38511 = cljs.core._nth.call(null,chunk__38475_38508,i__38477_38510);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38511,prov);

var G__38512 = seq__38474_38507;
var G__38513 = chunk__38475_38508;
var G__38514 = count__38476_38509;
var G__38515 = (i__38477_38510 + (1));
seq__38474_38507 = G__38512;
chunk__38475_38508 = G__38513;
count__38476_38509 = G__38514;
i__38477_38510 = G__38515;
continue;
} else {
var temp__4425__auto___38516__$1 = cljs.core.seq.call(null,seq__38474_38507);
if(temp__4425__auto___38516__$1){
var seq__38474_38517__$1 = temp__4425__auto___38516__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38474_38517__$1)){
var c__26623__auto___38518 = cljs.core.chunk_first.call(null,seq__38474_38517__$1);
var G__38519 = cljs.core.chunk_rest.call(null,seq__38474_38517__$1);
var G__38520 = c__26623__auto___38518;
var G__38521 = cljs.core.count.call(null,c__26623__auto___38518);
var G__38522 = (0);
seq__38474_38507 = G__38519;
chunk__38475_38508 = G__38520;
count__38476_38509 = G__38521;
i__38477_38510 = G__38522;
continue;
} else {
var req_38523 = cljs.core.first.call(null,seq__38474_38517__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38523,prov);

var G__38524 = cljs.core.next.call(null,seq__38474_38517__$1);
var G__38525 = null;
var G__38526 = (0);
var G__38527 = (0);
seq__38474_38507 = G__38524;
chunk__38475_38508 = G__38525;
count__38476_38509 = G__38526;
i__38477_38510 = G__38527;
continue;
}
} else {
}
}
break;
}

var G__38528 = cljs.core.next.call(null,seq__38466__$1);
var G__38529 = null;
var G__38530 = (0);
var G__38531 = (0);
seq__38466 = G__38528;
chunk__38467 = G__38529;
count__38468 = G__38530;
i__38469 = G__38531;
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
var seq__38536_38540 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38537_38541 = null;
var count__38538_38542 = (0);
var i__38539_38543 = (0);
while(true){
if((i__38539_38543 < count__38538_38542)){
var ns_38544 = cljs.core._nth.call(null,chunk__38537_38541,i__38539_38543);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38544);

var G__38545 = seq__38536_38540;
var G__38546 = chunk__38537_38541;
var G__38547 = count__38538_38542;
var G__38548 = (i__38539_38543 + (1));
seq__38536_38540 = G__38545;
chunk__38537_38541 = G__38546;
count__38538_38542 = G__38547;
i__38539_38543 = G__38548;
continue;
} else {
var temp__4425__auto___38549 = cljs.core.seq.call(null,seq__38536_38540);
if(temp__4425__auto___38549){
var seq__38536_38550__$1 = temp__4425__auto___38549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38536_38550__$1)){
var c__26623__auto___38551 = cljs.core.chunk_first.call(null,seq__38536_38550__$1);
var G__38552 = cljs.core.chunk_rest.call(null,seq__38536_38550__$1);
var G__38553 = c__26623__auto___38551;
var G__38554 = cljs.core.count.call(null,c__26623__auto___38551);
var G__38555 = (0);
seq__38536_38540 = G__38552;
chunk__38537_38541 = G__38553;
count__38538_38542 = G__38554;
i__38539_38543 = G__38555;
continue;
} else {
var ns_38556 = cljs.core.first.call(null,seq__38536_38550__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38556);

var G__38557 = cljs.core.next.call(null,seq__38536_38550__$1);
var G__38558 = null;
var G__38559 = (0);
var G__38560 = (0);
seq__38536_38540 = G__38557;
chunk__38537_38541 = G__38558;
count__38538_38542 = G__38559;
i__38539_38543 = G__38560;
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
goog.require_figwheel_backup_ = (function (){var or__25812__auto__ = goog.require__;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
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
var G__38561__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38562__i = 0, G__38562__a = new Array(arguments.length -  0);
while (G__38562__i < G__38562__a.length) {G__38562__a[G__38562__i] = arguments[G__38562__i + 0]; ++G__38562__i;}
  args = new cljs.core.IndexedSeq(G__38562__a,0);
} 
return G__38561__delegate.call(this,args);};
G__38561.cljs$lang$maxFixedArity = 0;
G__38561.cljs$lang$applyTo = (function (arglist__38563){
var args = cljs.core.seq(arglist__38563);
return G__38561__delegate(args);
});
G__38561.cljs$core$IFn$_invoke$arity$variadic = G__38561__delegate;
return G__38561;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38565 = cljs.core._EQ_;
var expr__38566 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38565.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38566))){
var path_parts = ((function (pred__38565,expr__38566){
return (function (p1__38564_SHARP_){
return clojure.string.split.call(null,p1__38564_SHARP_,/[\/\\]/);
});})(pred__38565,expr__38566))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__38565,expr__38566){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e38568){if((e38568 instanceof Error)){
var e = e38568;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38568;

}
}})());
});
;})(path_parts,sep,root,pred__38565,expr__38566))
} else {
if(cljs.core.truth_(pred__38565.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38566))){
return ((function (pred__38565,expr__38566){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__38565,expr__38566){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__38565,expr__38566))
);

return deferred.addErrback(((function (deferred,pred__38565,expr__38566){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__38565,expr__38566))
);
});
;})(pred__38565,expr__38566))
} else {
return ((function (pred__38565,expr__38566){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38565,expr__38566))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38569,callback){
var map__38572 = p__38569;
var map__38572__$1 = ((((!((map__38572 == null)))?((((map__38572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38572):map__38572);
var file_msg = map__38572__$1;
var request_url = cljs.core.get.call(null,map__38572__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38572,map__38572__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38572,map__38572__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_38596){
var state_val_38597 = (state_38596[(1)]);
if((state_val_38597 === (7))){
var inst_38592 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
var statearr_38598_38618 = state_38596__$1;
(statearr_38598_38618[(2)] = inst_38592);

(statearr_38598_38618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (1))){
var state_38596__$1 = state_38596;
var statearr_38599_38619 = state_38596__$1;
(statearr_38599_38619[(2)] = null);

(statearr_38599_38619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (4))){
var inst_38576 = (state_38596[(7)]);
var inst_38576__$1 = (state_38596[(2)]);
var state_38596__$1 = (function (){var statearr_38600 = state_38596;
(statearr_38600[(7)] = inst_38576__$1);

return statearr_38600;
})();
if(cljs.core.truth_(inst_38576__$1)){
var statearr_38601_38620 = state_38596__$1;
(statearr_38601_38620[(1)] = (5));

} else {
var statearr_38602_38621 = state_38596__$1;
(statearr_38602_38621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (6))){
var state_38596__$1 = state_38596;
var statearr_38603_38622 = state_38596__$1;
(statearr_38603_38622[(2)] = null);

(statearr_38603_38622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (3))){
var inst_38594 = (state_38596[(2)]);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38596__$1,inst_38594);
} else {
if((state_val_38597 === (2))){
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38597 === (11))){
var inst_38588 = (state_38596[(2)]);
var state_38596__$1 = (function (){var statearr_38604 = state_38596;
(statearr_38604[(8)] = inst_38588);

return statearr_38604;
})();
var statearr_38605_38623 = state_38596__$1;
(statearr_38605_38623[(2)] = null);

(statearr_38605_38623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (9))){
var inst_38582 = (state_38596[(9)]);
var inst_38580 = (state_38596[(10)]);
var inst_38584 = inst_38582.call(null,inst_38580);
var state_38596__$1 = state_38596;
var statearr_38606_38624 = state_38596__$1;
(statearr_38606_38624[(2)] = inst_38584);

(statearr_38606_38624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (5))){
var inst_38576 = (state_38596[(7)]);
var inst_38578 = figwheel.client.file_reloading.blocking_load.call(null,inst_38576);
var state_38596__$1 = state_38596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38596__$1,(8),inst_38578);
} else {
if((state_val_38597 === (10))){
var inst_38580 = (state_38596[(10)]);
var inst_38586 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38580);
var state_38596__$1 = state_38596;
var statearr_38607_38625 = state_38596__$1;
(statearr_38607_38625[(2)] = inst_38586);

(statearr_38607_38625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38597 === (8))){
var inst_38582 = (state_38596[(9)]);
var inst_38576 = (state_38596[(7)]);
var inst_38580 = (state_38596[(2)]);
var inst_38581 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38582__$1 = cljs.core.get.call(null,inst_38581,inst_38576);
var state_38596__$1 = (function (){var statearr_38608 = state_38596;
(statearr_38608[(9)] = inst_38582__$1);

(statearr_38608[(10)] = inst_38580);

return statearr_38608;
})();
if(cljs.core.truth_(inst_38582__$1)){
var statearr_38609_38626 = state_38596__$1;
(statearr_38609_38626[(1)] = (9));

} else {
var statearr_38610_38627 = state_38596__$1;
(statearr_38610_38627[(1)] = (10));

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
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29832__auto__ = null;
var figwheel$client$file_reloading$state_machine__29832__auto____0 = (function (){
var statearr_38614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38614[(0)] = figwheel$client$file_reloading$state_machine__29832__auto__);

(statearr_38614[(1)] = (1));

return statearr_38614;
});
var figwheel$client$file_reloading$state_machine__29832__auto____1 = (function (state_38596){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_38596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e38615){if((e38615 instanceof Object)){
var ex__29835__auto__ = e38615;
var statearr_38616_38628 = state_38596;
(statearr_38616_38628[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38629 = state_38596;
state_38596 = G__38629;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29832__auto__ = function(state_38596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29832__auto____1.call(this,state_38596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29832__auto____0;
figwheel$client$file_reloading$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29832__auto____1;
return figwheel$client$file_reloading$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_38617 = f__29944__auto__.call(null);
(statearr_38617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_38617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__38630,callback){
var map__38633 = p__38630;
var map__38633__$1 = ((((!((map__38633 == null)))?((((map__38633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38633):map__38633);
var file_msg = map__38633__$1;
var namespace = cljs.core.get.call(null,map__38633__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__38633,map__38633__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__38633,map__38633__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__38635){
var map__38638 = p__38635;
var map__38638__$1 = ((((!((map__38638 == null)))?((((map__38638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38638):map__38638);
var file_msg = map__38638__$1;
var namespace = cljs.core.get.call(null,map__38638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25800__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25800__auto__){
var or__25812__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var or__25812__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25812__auto____$1)){
return or__25812__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25800__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__38640,callback){
var map__38643 = p__38640;
var map__38643__$1 = ((((!((map__38643 == null)))?((((map__38643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38643):map__38643);
var file_msg = map__38643__$1;
var request_url = cljs.core.get.call(null,map__38643__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__38643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29943__auto___38731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___38731,out){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___38731,out){
return (function (state_38713){
var state_val_38714 = (state_38713[(1)]);
if((state_val_38714 === (1))){
var inst_38691 = cljs.core.nth.call(null,files,(0),null);
var inst_38692 = cljs.core.nthnext.call(null,files,(1));
var inst_38693 = files;
var state_38713__$1 = (function (){var statearr_38715 = state_38713;
(statearr_38715[(7)] = inst_38692);

(statearr_38715[(8)] = inst_38693);

(statearr_38715[(9)] = inst_38691);

return statearr_38715;
})();
var statearr_38716_38732 = state_38713__$1;
(statearr_38716_38732[(2)] = null);

(statearr_38716_38732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (2))){
var inst_38693 = (state_38713[(8)]);
var inst_38696 = (state_38713[(10)]);
var inst_38696__$1 = cljs.core.nth.call(null,inst_38693,(0),null);
var inst_38697 = cljs.core.nthnext.call(null,inst_38693,(1));
var inst_38698 = (inst_38696__$1 == null);
var inst_38699 = cljs.core.not.call(null,inst_38698);
var state_38713__$1 = (function (){var statearr_38717 = state_38713;
(statearr_38717[(10)] = inst_38696__$1);

(statearr_38717[(11)] = inst_38697);

return statearr_38717;
})();
if(inst_38699){
var statearr_38718_38733 = state_38713__$1;
(statearr_38718_38733[(1)] = (4));

} else {
var statearr_38719_38734 = state_38713__$1;
(statearr_38719_38734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (3))){
var inst_38711 = (state_38713[(2)]);
var state_38713__$1 = state_38713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38713__$1,inst_38711);
} else {
if((state_val_38714 === (4))){
var inst_38696 = (state_38713[(10)]);
var inst_38701 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38696);
var state_38713__$1 = state_38713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38713__$1,(7),inst_38701);
} else {
if((state_val_38714 === (5))){
var inst_38707 = cljs.core.async.close_BANG_.call(null,out);
var state_38713__$1 = state_38713;
var statearr_38720_38735 = state_38713__$1;
(statearr_38720_38735[(2)] = inst_38707);

(statearr_38720_38735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (6))){
var inst_38709 = (state_38713[(2)]);
var state_38713__$1 = state_38713;
var statearr_38721_38736 = state_38713__$1;
(statearr_38721_38736[(2)] = inst_38709);

(statearr_38721_38736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38714 === (7))){
var inst_38697 = (state_38713[(11)]);
var inst_38703 = (state_38713[(2)]);
var inst_38704 = cljs.core.async.put_BANG_.call(null,out,inst_38703);
var inst_38693 = inst_38697;
var state_38713__$1 = (function (){var statearr_38722 = state_38713;
(statearr_38722[(12)] = inst_38704);

(statearr_38722[(8)] = inst_38693);

return statearr_38722;
})();
var statearr_38723_38737 = state_38713__$1;
(statearr_38723_38737[(2)] = null);

(statearr_38723_38737[(1)] = (2));


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
});})(c__29943__auto___38731,out))
;
return ((function (switch__29831__auto__,c__29943__auto___38731,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____0 = (function (){
var statearr_38727 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38727[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__);

(statearr_38727[(1)] = (1));

return statearr_38727;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____1 = (function (state_38713){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_38713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e38728){if((e38728 instanceof Object)){
var ex__29835__auto__ = e38728;
var statearr_38729_38738 = state_38713;
(statearr_38729_38738[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38739 = state_38713;
state_38713 = G__38739;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__ = function(state_38713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____1.call(this,state_38713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___38731,out))
})();
var state__29945__auto__ = (function (){var statearr_38730 = f__29944__auto__.call(null);
(statearr_38730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___38731);

return statearr_38730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___38731,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38740,opts){
var map__38744 = p__38740;
var map__38744__$1 = ((((!((map__38744 == null)))?((((map__38744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38744):map__38744);
var eval_body__$1 = cljs.core.get.call(null,map__38744__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25800__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25800__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25800__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38746){var e = e38746;
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
return (function (p1__38747_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38747_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__38752){
var vec__38753 = p__38752;
var k = cljs.core.nth.call(null,vec__38753,(0),null);
var v = cljs.core.nth.call(null,vec__38753,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38754){
var vec__38755 = p__38754;
var k = cljs.core.nth.call(null,vec__38755,(0),null);
var v = cljs.core.nth.call(null,vec__38755,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38759,p__38760){
var map__39007 = p__38759;
var map__39007__$1 = ((((!((map__39007 == null)))?((((map__39007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39007):map__39007);
var opts = map__39007__$1;
var before_jsload = cljs.core.get.call(null,map__39007__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39007__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39007__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39008 = p__38760;
var map__39008__$1 = ((((!((map__39008 == null)))?((((map__39008.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39008.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39008):map__39008);
var msg = map__39008__$1;
var files = cljs.core.get.call(null,map__39008__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39008__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39008__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39161){
var state_val_39162 = (state_39161[(1)]);
if((state_val_39162 === (7))){
var inst_39025 = (state_39161[(7)]);
var inst_39022 = (state_39161[(8)]);
var inst_39023 = (state_39161[(9)]);
var inst_39024 = (state_39161[(10)]);
var inst_39030 = cljs.core._nth.call(null,inst_39023,inst_39025);
var inst_39031 = figwheel.client.file_reloading.eval_body.call(null,inst_39030,opts);
var inst_39032 = (inst_39025 + (1));
var tmp39163 = inst_39022;
var tmp39164 = inst_39023;
var tmp39165 = inst_39024;
var inst_39022__$1 = tmp39163;
var inst_39023__$1 = tmp39164;
var inst_39024__$1 = tmp39165;
var inst_39025__$1 = inst_39032;
var state_39161__$1 = (function (){var statearr_39166 = state_39161;
(statearr_39166[(7)] = inst_39025__$1);

(statearr_39166[(8)] = inst_39022__$1);

(statearr_39166[(11)] = inst_39031);

(statearr_39166[(9)] = inst_39023__$1);

(statearr_39166[(10)] = inst_39024__$1);

return statearr_39166;
})();
var statearr_39167_39253 = state_39161__$1;
(statearr_39167_39253[(2)] = null);

(statearr_39167_39253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (20))){
var inst_39065 = (state_39161[(12)]);
var inst_39073 = figwheel.client.file_reloading.sort_files.call(null,inst_39065);
var state_39161__$1 = state_39161;
var statearr_39168_39254 = state_39161__$1;
(statearr_39168_39254[(2)] = inst_39073);

(statearr_39168_39254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (27))){
var state_39161__$1 = state_39161;
var statearr_39169_39255 = state_39161__$1;
(statearr_39169_39255[(2)] = null);

(statearr_39169_39255[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (1))){
var inst_39014 = (state_39161[(13)]);
var inst_39011 = before_jsload.call(null,files);
var inst_39012 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39013 = (function (){return ((function (inst_39014,inst_39011,inst_39012,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38756_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38756_SHARP_);
});
;})(inst_39014,inst_39011,inst_39012,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39014__$1 = cljs.core.filter.call(null,inst_39013,files);
var inst_39015 = cljs.core.not_empty.call(null,inst_39014__$1);
var state_39161__$1 = (function (){var statearr_39170 = state_39161;
(statearr_39170[(13)] = inst_39014__$1);

(statearr_39170[(14)] = inst_39012);

(statearr_39170[(15)] = inst_39011);

return statearr_39170;
})();
if(cljs.core.truth_(inst_39015)){
var statearr_39171_39256 = state_39161__$1;
(statearr_39171_39256[(1)] = (2));

} else {
var statearr_39172_39257 = state_39161__$1;
(statearr_39172_39257[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (24))){
var state_39161__$1 = state_39161;
var statearr_39173_39258 = state_39161__$1;
(statearr_39173_39258[(2)] = null);

(statearr_39173_39258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (39))){
var inst_39115 = (state_39161[(16)]);
var state_39161__$1 = state_39161;
var statearr_39174_39259 = state_39161__$1;
(statearr_39174_39259[(2)] = inst_39115);

(statearr_39174_39259[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (46))){
var inst_39156 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39175_39260 = state_39161__$1;
(statearr_39175_39260[(2)] = inst_39156);

(statearr_39175_39260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (4))){
var inst_39059 = (state_39161[(2)]);
var inst_39060 = cljs.core.List.EMPTY;
var inst_39061 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39060);
var inst_39062 = (function (){return ((function (inst_39059,inst_39060,inst_39061,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38757_SHARP_){
var and__25800__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38757_SHARP_);
if(cljs.core.truth_(and__25800__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38757_SHARP_));
} else {
return and__25800__auto__;
}
});
;})(inst_39059,inst_39060,inst_39061,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39063 = cljs.core.filter.call(null,inst_39062,files);
var inst_39064 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39065 = cljs.core.concat.call(null,inst_39063,inst_39064);
var state_39161__$1 = (function (){var statearr_39176 = state_39161;
(statearr_39176[(17)] = inst_39059);

(statearr_39176[(18)] = inst_39061);

(statearr_39176[(12)] = inst_39065);

return statearr_39176;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39177_39261 = state_39161__$1;
(statearr_39177_39261[(1)] = (16));

} else {
var statearr_39178_39262 = state_39161__$1;
(statearr_39178_39262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (15))){
var inst_39049 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39179_39263 = state_39161__$1;
(statearr_39179_39263[(2)] = inst_39049);

(statearr_39179_39263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (21))){
var inst_39075 = (state_39161[(19)]);
var inst_39075__$1 = (state_39161[(2)]);
var inst_39076 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39075__$1);
var state_39161__$1 = (function (){var statearr_39180 = state_39161;
(statearr_39180[(19)] = inst_39075__$1);

return statearr_39180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39161__$1,(22),inst_39076);
} else {
if((state_val_39162 === (31))){
var inst_39159 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39161__$1,inst_39159);
} else {
if((state_val_39162 === (32))){
var inst_39115 = (state_39161[(16)]);
var inst_39120 = inst_39115.cljs$lang$protocol_mask$partition0$;
var inst_39121 = (inst_39120 & (64));
var inst_39122 = inst_39115.cljs$core$ISeq$;
var inst_39123 = (inst_39121) || (inst_39122);
var state_39161__$1 = state_39161;
if(cljs.core.truth_(inst_39123)){
var statearr_39181_39264 = state_39161__$1;
(statearr_39181_39264[(1)] = (35));

} else {
var statearr_39182_39265 = state_39161__$1;
(statearr_39182_39265[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (40))){
var inst_39136 = (state_39161[(20)]);
var inst_39135 = (state_39161[(2)]);
var inst_39136__$1 = cljs.core.get.call(null,inst_39135,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39137 = cljs.core.get.call(null,inst_39135,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39138 = cljs.core.not_empty.call(null,inst_39136__$1);
var state_39161__$1 = (function (){var statearr_39183 = state_39161;
(statearr_39183[(20)] = inst_39136__$1);

(statearr_39183[(21)] = inst_39137);

return statearr_39183;
})();
if(cljs.core.truth_(inst_39138)){
var statearr_39184_39266 = state_39161__$1;
(statearr_39184_39266[(1)] = (41));

} else {
var statearr_39185_39267 = state_39161__$1;
(statearr_39185_39267[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (33))){
var state_39161__$1 = state_39161;
var statearr_39186_39268 = state_39161__$1;
(statearr_39186_39268[(2)] = false);

(statearr_39186_39268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (13))){
var inst_39035 = (state_39161[(22)]);
var inst_39039 = cljs.core.chunk_first.call(null,inst_39035);
var inst_39040 = cljs.core.chunk_rest.call(null,inst_39035);
var inst_39041 = cljs.core.count.call(null,inst_39039);
var inst_39022 = inst_39040;
var inst_39023 = inst_39039;
var inst_39024 = inst_39041;
var inst_39025 = (0);
var state_39161__$1 = (function (){var statearr_39187 = state_39161;
(statearr_39187[(7)] = inst_39025);

(statearr_39187[(8)] = inst_39022);

(statearr_39187[(9)] = inst_39023);

(statearr_39187[(10)] = inst_39024);

return statearr_39187;
})();
var statearr_39188_39269 = state_39161__$1;
(statearr_39188_39269[(2)] = null);

(statearr_39188_39269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (22))){
var inst_39079 = (state_39161[(23)]);
var inst_39075 = (state_39161[(19)]);
var inst_39078 = (state_39161[(24)]);
var inst_39083 = (state_39161[(25)]);
var inst_39078__$1 = (state_39161[(2)]);
var inst_39079__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39078__$1);
var inst_39080 = (function (){var all_files = inst_39075;
var res_SINGLEQUOTE_ = inst_39078__$1;
var res = inst_39079__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39079,inst_39075,inst_39078,inst_39083,inst_39078__$1,inst_39079__$1,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38758_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38758_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39079,inst_39075,inst_39078,inst_39083,inst_39078__$1,inst_39079__$1,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39081 = cljs.core.filter.call(null,inst_39080,inst_39078__$1);
var inst_39082 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39083__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39082);
var inst_39084 = cljs.core.not_empty.call(null,inst_39083__$1);
var state_39161__$1 = (function (){var statearr_39189 = state_39161;
(statearr_39189[(23)] = inst_39079__$1);

(statearr_39189[(26)] = inst_39081);

(statearr_39189[(24)] = inst_39078__$1);

(statearr_39189[(25)] = inst_39083__$1);

return statearr_39189;
})();
if(cljs.core.truth_(inst_39084)){
var statearr_39190_39270 = state_39161__$1;
(statearr_39190_39270[(1)] = (23));

} else {
var statearr_39191_39271 = state_39161__$1;
(statearr_39191_39271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (36))){
var state_39161__$1 = state_39161;
var statearr_39192_39272 = state_39161__$1;
(statearr_39192_39272[(2)] = false);

(statearr_39192_39272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (41))){
var inst_39136 = (state_39161[(20)]);
var inst_39140 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39141 = cljs.core.map.call(null,inst_39140,inst_39136);
var inst_39142 = cljs.core.pr_str.call(null,inst_39141);
var inst_39143 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39142)].join('');
var inst_39144 = figwheel.client.utils.log.call(null,inst_39143);
var state_39161__$1 = state_39161;
var statearr_39193_39273 = state_39161__$1;
(statearr_39193_39273[(2)] = inst_39144);

(statearr_39193_39273[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (43))){
var inst_39137 = (state_39161[(21)]);
var inst_39147 = (state_39161[(2)]);
var inst_39148 = cljs.core.not_empty.call(null,inst_39137);
var state_39161__$1 = (function (){var statearr_39194 = state_39161;
(statearr_39194[(27)] = inst_39147);

return statearr_39194;
})();
if(cljs.core.truth_(inst_39148)){
var statearr_39195_39274 = state_39161__$1;
(statearr_39195_39274[(1)] = (44));

} else {
var statearr_39196_39275 = state_39161__$1;
(statearr_39196_39275[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (29))){
var inst_39079 = (state_39161[(23)]);
var inst_39075 = (state_39161[(19)]);
var inst_39115 = (state_39161[(16)]);
var inst_39081 = (state_39161[(26)]);
var inst_39078 = (state_39161[(24)]);
var inst_39083 = (state_39161[(25)]);
var inst_39111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39114 = (function (){var all_files = inst_39075;
var res_SINGLEQUOTE_ = inst_39078;
var res = inst_39079;
var files_not_loaded = inst_39081;
var dependencies_that_loaded = inst_39083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39115,inst_39081,inst_39078,inst_39083,inst_39111,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39113){
var map__39197 = p__39113;
var map__39197__$1 = ((((!((map__39197 == null)))?((((map__39197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39197):map__39197);
var namespace = cljs.core.get.call(null,map__39197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39115,inst_39081,inst_39078,inst_39083,inst_39111,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39115__$1 = cljs.core.group_by.call(null,inst_39114,inst_39081);
var inst_39117 = (inst_39115__$1 == null);
var inst_39118 = cljs.core.not.call(null,inst_39117);
var state_39161__$1 = (function (){var statearr_39199 = state_39161;
(statearr_39199[(28)] = inst_39111);

(statearr_39199[(16)] = inst_39115__$1);

return statearr_39199;
})();
if(inst_39118){
var statearr_39200_39276 = state_39161__$1;
(statearr_39200_39276[(1)] = (32));

} else {
var statearr_39201_39277 = state_39161__$1;
(statearr_39201_39277[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (44))){
var inst_39137 = (state_39161[(21)]);
var inst_39150 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39137);
var inst_39151 = cljs.core.pr_str.call(null,inst_39150);
var inst_39152 = [cljs.core.str("not required: "),cljs.core.str(inst_39151)].join('');
var inst_39153 = figwheel.client.utils.log.call(null,inst_39152);
var state_39161__$1 = state_39161;
var statearr_39202_39278 = state_39161__$1;
(statearr_39202_39278[(2)] = inst_39153);

(statearr_39202_39278[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (6))){
var inst_39056 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39203_39279 = state_39161__$1;
(statearr_39203_39279[(2)] = inst_39056);

(statearr_39203_39279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (28))){
var inst_39081 = (state_39161[(26)]);
var inst_39108 = (state_39161[(2)]);
var inst_39109 = cljs.core.not_empty.call(null,inst_39081);
var state_39161__$1 = (function (){var statearr_39204 = state_39161;
(statearr_39204[(29)] = inst_39108);

return statearr_39204;
})();
if(cljs.core.truth_(inst_39109)){
var statearr_39205_39280 = state_39161__$1;
(statearr_39205_39280[(1)] = (29));

} else {
var statearr_39206_39281 = state_39161__$1;
(statearr_39206_39281[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (25))){
var inst_39079 = (state_39161[(23)]);
var inst_39095 = (state_39161[(2)]);
var inst_39096 = cljs.core.not_empty.call(null,inst_39079);
var state_39161__$1 = (function (){var statearr_39207 = state_39161;
(statearr_39207[(30)] = inst_39095);

return statearr_39207;
})();
if(cljs.core.truth_(inst_39096)){
var statearr_39208_39282 = state_39161__$1;
(statearr_39208_39282[(1)] = (26));

} else {
var statearr_39209_39283 = state_39161__$1;
(statearr_39209_39283[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (34))){
var inst_39130 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
if(cljs.core.truth_(inst_39130)){
var statearr_39210_39284 = state_39161__$1;
(statearr_39210_39284[(1)] = (38));

} else {
var statearr_39211_39285 = state_39161__$1;
(statearr_39211_39285[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (17))){
var state_39161__$1 = state_39161;
var statearr_39212_39286 = state_39161__$1;
(statearr_39212_39286[(2)] = recompile_dependents);

(statearr_39212_39286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (3))){
var state_39161__$1 = state_39161;
var statearr_39213_39287 = state_39161__$1;
(statearr_39213_39287[(2)] = null);

(statearr_39213_39287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (12))){
var inst_39052 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39214_39288 = state_39161__$1;
(statearr_39214_39288[(2)] = inst_39052);

(statearr_39214_39288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (2))){
var inst_39014 = (state_39161[(13)]);
var inst_39021 = cljs.core.seq.call(null,inst_39014);
var inst_39022 = inst_39021;
var inst_39023 = null;
var inst_39024 = (0);
var inst_39025 = (0);
var state_39161__$1 = (function (){var statearr_39215 = state_39161;
(statearr_39215[(7)] = inst_39025);

(statearr_39215[(8)] = inst_39022);

(statearr_39215[(9)] = inst_39023);

(statearr_39215[(10)] = inst_39024);

return statearr_39215;
})();
var statearr_39216_39289 = state_39161__$1;
(statearr_39216_39289[(2)] = null);

(statearr_39216_39289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (23))){
var inst_39079 = (state_39161[(23)]);
var inst_39075 = (state_39161[(19)]);
var inst_39081 = (state_39161[(26)]);
var inst_39078 = (state_39161[(24)]);
var inst_39083 = (state_39161[(25)]);
var inst_39086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39088 = (function (){var all_files = inst_39075;
var res_SINGLEQUOTE_ = inst_39078;
var res = inst_39079;
var files_not_loaded = inst_39081;
var dependencies_that_loaded = inst_39083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39086,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39087){
var map__39217 = p__39087;
var map__39217__$1 = ((((!((map__39217 == null)))?((((map__39217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39217):map__39217);
var request_url = cljs.core.get.call(null,map__39217__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39086,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39089 = cljs.core.reverse.call(null,inst_39083);
var inst_39090 = cljs.core.map.call(null,inst_39088,inst_39089);
var inst_39091 = cljs.core.pr_str.call(null,inst_39090);
var inst_39092 = figwheel.client.utils.log.call(null,inst_39091);
var state_39161__$1 = (function (){var statearr_39219 = state_39161;
(statearr_39219[(31)] = inst_39086);

return statearr_39219;
})();
var statearr_39220_39290 = state_39161__$1;
(statearr_39220_39290[(2)] = inst_39092);

(statearr_39220_39290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (35))){
var state_39161__$1 = state_39161;
var statearr_39221_39291 = state_39161__$1;
(statearr_39221_39291[(2)] = true);

(statearr_39221_39291[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (19))){
var inst_39065 = (state_39161[(12)]);
var inst_39071 = figwheel.client.file_reloading.expand_files.call(null,inst_39065);
var state_39161__$1 = state_39161;
var statearr_39222_39292 = state_39161__$1;
(statearr_39222_39292[(2)] = inst_39071);

(statearr_39222_39292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (11))){
var state_39161__$1 = state_39161;
var statearr_39223_39293 = state_39161__$1;
(statearr_39223_39293[(2)] = null);

(statearr_39223_39293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (9))){
var inst_39054 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39224_39294 = state_39161__$1;
(statearr_39224_39294[(2)] = inst_39054);

(statearr_39224_39294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (5))){
var inst_39025 = (state_39161[(7)]);
var inst_39024 = (state_39161[(10)]);
var inst_39027 = (inst_39025 < inst_39024);
var inst_39028 = inst_39027;
var state_39161__$1 = state_39161;
if(cljs.core.truth_(inst_39028)){
var statearr_39225_39295 = state_39161__$1;
(statearr_39225_39295[(1)] = (7));

} else {
var statearr_39226_39296 = state_39161__$1;
(statearr_39226_39296[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (14))){
var inst_39035 = (state_39161[(22)]);
var inst_39044 = cljs.core.first.call(null,inst_39035);
var inst_39045 = figwheel.client.file_reloading.eval_body.call(null,inst_39044,opts);
var inst_39046 = cljs.core.next.call(null,inst_39035);
var inst_39022 = inst_39046;
var inst_39023 = null;
var inst_39024 = (0);
var inst_39025 = (0);
var state_39161__$1 = (function (){var statearr_39227 = state_39161;
(statearr_39227[(7)] = inst_39025);

(statearr_39227[(8)] = inst_39022);

(statearr_39227[(9)] = inst_39023);

(statearr_39227[(32)] = inst_39045);

(statearr_39227[(10)] = inst_39024);

return statearr_39227;
})();
var statearr_39228_39297 = state_39161__$1;
(statearr_39228_39297[(2)] = null);

(statearr_39228_39297[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (45))){
var state_39161__$1 = state_39161;
var statearr_39229_39298 = state_39161__$1;
(statearr_39229_39298[(2)] = null);

(statearr_39229_39298[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (26))){
var inst_39079 = (state_39161[(23)]);
var inst_39075 = (state_39161[(19)]);
var inst_39081 = (state_39161[(26)]);
var inst_39078 = (state_39161[(24)]);
var inst_39083 = (state_39161[(25)]);
var inst_39098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39100 = (function (){var all_files = inst_39075;
var res_SINGLEQUOTE_ = inst_39078;
var res = inst_39079;
var files_not_loaded = inst_39081;
var dependencies_that_loaded = inst_39083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39098,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39099){
var map__39230 = p__39099;
var map__39230__$1 = ((((!((map__39230 == null)))?((((map__39230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39230):map__39230);
var namespace = cljs.core.get.call(null,map__39230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39098,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39101 = cljs.core.map.call(null,inst_39100,inst_39079);
var inst_39102 = cljs.core.pr_str.call(null,inst_39101);
var inst_39103 = figwheel.client.utils.log.call(null,inst_39102);
var inst_39104 = (function (){var all_files = inst_39075;
var res_SINGLEQUOTE_ = inst_39078;
var res = inst_39079;
var files_not_loaded = inst_39081;
var dependencies_that_loaded = inst_39083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39098,inst_39100,inst_39101,inst_39102,inst_39103,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39079,inst_39075,inst_39081,inst_39078,inst_39083,inst_39098,inst_39100,inst_39101,inst_39102,inst_39103,state_val_39162,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39105 = setTimeout(inst_39104,(10));
var state_39161__$1 = (function (){var statearr_39232 = state_39161;
(statearr_39232[(33)] = inst_39098);

(statearr_39232[(34)] = inst_39103);

return statearr_39232;
})();
var statearr_39233_39299 = state_39161__$1;
(statearr_39233_39299[(2)] = inst_39105);

(statearr_39233_39299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (16))){
var state_39161__$1 = state_39161;
var statearr_39234_39300 = state_39161__$1;
(statearr_39234_39300[(2)] = reload_dependents);

(statearr_39234_39300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (38))){
var inst_39115 = (state_39161[(16)]);
var inst_39132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39115);
var state_39161__$1 = state_39161;
var statearr_39235_39301 = state_39161__$1;
(statearr_39235_39301[(2)] = inst_39132);

(statearr_39235_39301[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (30))){
var state_39161__$1 = state_39161;
var statearr_39236_39302 = state_39161__$1;
(statearr_39236_39302[(2)] = null);

(statearr_39236_39302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (10))){
var inst_39035 = (state_39161[(22)]);
var inst_39037 = cljs.core.chunked_seq_QMARK_.call(null,inst_39035);
var state_39161__$1 = state_39161;
if(inst_39037){
var statearr_39237_39303 = state_39161__$1;
(statearr_39237_39303[(1)] = (13));

} else {
var statearr_39238_39304 = state_39161__$1;
(statearr_39238_39304[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (18))){
var inst_39069 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
if(cljs.core.truth_(inst_39069)){
var statearr_39239_39305 = state_39161__$1;
(statearr_39239_39305[(1)] = (19));

} else {
var statearr_39240_39306 = state_39161__$1;
(statearr_39240_39306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (42))){
var state_39161__$1 = state_39161;
var statearr_39241_39307 = state_39161__$1;
(statearr_39241_39307[(2)] = null);

(statearr_39241_39307[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (37))){
var inst_39127 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39242_39308 = state_39161__$1;
(statearr_39242_39308[(2)] = inst_39127);

(statearr_39242_39308[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (8))){
var inst_39022 = (state_39161[(8)]);
var inst_39035 = (state_39161[(22)]);
var inst_39035__$1 = cljs.core.seq.call(null,inst_39022);
var state_39161__$1 = (function (){var statearr_39243 = state_39161;
(statearr_39243[(22)] = inst_39035__$1);

return statearr_39243;
})();
if(inst_39035__$1){
var statearr_39244_39309 = state_39161__$1;
(statearr_39244_39309[(1)] = (10));

} else {
var statearr_39245_39310 = state_39161__$1;
(statearr_39245_39310[(1)] = (11));

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
});})(c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29831__auto__,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____0 = (function (){
var statearr_39249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39249[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__);

(statearr_39249[(1)] = (1));

return statearr_39249;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____1 = (function (state_39161){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_39161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e39250){if((e39250 instanceof Object)){
var ex__29835__auto__ = e39250;
var statearr_39251_39311 = state_39161;
(statearr_39251_39311[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39312 = state_39161;
state_39161 = G__39312;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__ = function(state_39161){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____1.call(this,state_39161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29945__auto__ = (function (){var statearr_39252 = f__29944__auto__.call(null);
(statearr_39252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_39252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,map__39007,map__39007__$1,opts,before_jsload,on_jsload,reload_dependents,map__39008,map__39008__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29943__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39315,link){
var map__39318 = p__39315;
var map__39318__$1 = ((((!((map__39318 == null)))?((((map__39318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39318):map__39318);
var file = cljs.core.get.call(null,map__39318__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39318,map__39318__$1,file){
return (function (p1__39313_SHARP_,p2__39314_SHARP_){
if(cljs.core._EQ_.call(null,p1__39313_SHARP_,p2__39314_SHARP_)){
return p1__39313_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39318,map__39318__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39324){
var map__39325 = p__39324;
var map__39325__$1 = ((((!((map__39325 == null)))?((((map__39325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39325):map__39325);
var match_length = cljs.core.get.call(null,map__39325__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39325__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39320_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39320_SHARP_);
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
var args39327 = [];
var len__26882__auto___39330 = arguments.length;
var i__26883__auto___39331 = (0);
while(true){
if((i__26883__auto___39331 < len__26882__auto___39330)){
args39327.push((arguments[i__26883__auto___39331]));

var G__39332 = (i__26883__auto___39331 + (1));
i__26883__auto___39331 = G__39332;
continue;
} else {
}
break;
}

var G__39329 = args39327.length;
switch (G__39329) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39327.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39334_SHARP_,p2__39335_SHARP_){
return cljs.core.assoc.call(null,p1__39334_SHARP_,cljs.core.get.call(null,p2__39335_SHARP_,key),p2__39335_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39336){
var map__39339 = p__39336;
var map__39339__$1 = ((((!((map__39339 == null)))?((((map__39339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39339):map__39339);
var f_data = map__39339__$1;
var file = cljs.core.get.call(null,map__39339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39341,files_msg){
var map__39348 = p__39341;
var map__39348__$1 = ((((!((map__39348 == null)))?((((map__39348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39348):map__39348);
var opts = map__39348__$1;
var on_cssload = cljs.core.get.call(null,map__39348__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39350_39354 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39351_39355 = null;
var count__39352_39356 = (0);
var i__39353_39357 = (0);
while(true){
if((i__39353_39357 < count__39352_39356)){
var f_39358 = cljs.core._nth.call(null,chunk__39351_39355,i__39353_39357);
figwheel.client.file_reloading.reload_css_file.call(null,f_39358);

var G__39359 = seq__39350_39354;
var G__39360 = chunk__39351_39355;
var G__39361 = count__39352_39356;
var G__39362 = (i__39353_39357 + (1));
seq__39350_39354 = G__39359;
chunk__39351_39355 = G__39360;
count__39352_39356 = G__39361;
i__39353_39357 = G__39362;
continue;
} else {
var temp__4425__auto___39363 = cljs.core.seq.call(null,seq__39350_39354);
if(temp__4425__auto___39363){
var seq__39350_39364__$1 = temp__4425__auto___39363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39350_39364__$1)){
var c__26623__auto___39365 = cljs.core.chunk_first.call(null,seq__39350_39364__$1);
var G__39366 = cljs.core.chunk_rest.call(null,seq__39350_39364__$1);
var G__39367 = c__26623__auto___39365;
var G__39368 = cljs.core.count.call(null,c__26623__auto___39365);
var G__39369 = (0);
seq__39350_39354 = G__39366;
chunk__39351_39355 = G__39367;
count__39352_39356 = G__39368;
i__39353_39357 = G__39369;
continue;
} else {
var f_39370 = cljs.core.first.call(null,seq__39350_39364__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39370);

var G__39371 = cljs.core.next.call(null,seq__39350_39364__$1);
var G__39372 = null;
var G__39373 = (0);
var G__39374 = (0);
seq__39350_39354 = G__39371;
chunk__39351_39355 = G__39372;
count__39352_39356 = G__39373;
i__39353_39357 = G__39374;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__39348,map__39348__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__39348,map__39348__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map