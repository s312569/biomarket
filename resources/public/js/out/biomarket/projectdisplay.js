// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projectdisplay');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('biomarket.dropdown');
goog.require('cljs.core.async');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
biomarket.projectdisplay.update_projects = (function biomarket$projectdisplay$update_projects(owner){
var view = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var status = cljs.core.second.call(null,view.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))));
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),view,new cljs.core.Keyword(null,"status","status",-1997798413),status], null),((function (view,status){
return (function (p1__133474_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__133474_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__133478){
var map__133479 = p__133478;
var map__133479__$1 = ((((!((map__133479 == null)))?((((map__133479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133479):map__133479);
var data = cljs.core.get.call(null,map__133479__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814),data);

return biomarket.projectdisplay.update_projects.call(null,owner);
}));

return biomarket.utilities.register_broadcast_loop.call(null,owner,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.navigation_unmount = (function biomarket$projectdisplay$navigation_unmount(owner){
biomarket.utilities.unsubscribe.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)));

return biomarket.utilities.unsub_broadcast_loop.call(null,owner,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.project_nav = (function biomarket$projectdisplay$project_nav(owner){
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__133485){
var vec__133486 = p__133485;
var k = cljs.core.nth.call(null,vec__133486,(0),null);
var vec__133487 = cljs.core.nth.call(null,vec__133486,(1),null);
var text = cljs.core.nth.call(null,vec__133487,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__133487,(1),null);
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"active":null), "role": "presentation", "onClick": ((function (vec__133486,k,vec__133487,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__133486,k,vec__133487,text,dbstatus))
},React.DOM.a({"href": "#"},text));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))),(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477)))?cljs.core.map.call(null,(function (p1__133481_SHARP_){
return React.DOM.li({"role": "presentation", "onClick": cljs.core.second.call(null,p1__133481_SHARP_)},React.DOM.a({"href": "#"},cljs.core.first.call(null,p1__133481_SHARP_)));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477))):null))));
});
if(typeof biomarket.projectdisplay.table_info !== 'undefined'){
} else {
biomarket.projectdisplay.table_info = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26975__auto__ = [];
var len__26968__auto___133489 = arguments.length;
var i__26969__auto___133490 = (0);
while(true){
if((i__26969__auto___133490 < len__26968__auto___133489)){
args__26975__auto__.push((arguments[i__26969__auto___133490]));

var G__133491 = (i__26969__auto___133490 + (1));
i__26969__auto___133490 = G__133491;
continue;
} else {
}
break;
}

var argseq__26976__auto__ = ((((0) < args__26975__auto__.length))?(new cljs.core.IndexedSeq(args__26975__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26976__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq133488){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq133488));
});
biomarket.projectdisplay.average_bid = (function biomarket$projectdisplay$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__133492_SHARP_){
return biomarket.utilities.color_span.call(null,p1__133492_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25898__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__133493_SHARP_){
return biomarket.utilities.color_span.call(null,p1__133493_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,(function (){var or__25898__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25898__auto__)){
return or__25898__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay133497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay133497 = (function (info_table,project,owner,meta133498){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta133498 = meta133498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay133497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133499,meta133498__$1){
var self__ = this;
var _133499__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133497(self__.info_table,self__.project,self__.owner,meta133498__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay133497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133499){
var self__ = this;
var _133499__$1 = this;
return self__.meta133498;
});

biomarket.projectdisplay.t_biomarket$projectdisplay133497.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133497.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26732__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay133497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133498","meta133498",722133899,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay133497.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133497.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay133497";

biomarket.projectdisplay.t_biomarket$projectdisplay133497.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay133497");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay133497 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay133497(info_table__$1,project__$1,owner__$1,meta133498){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133497(info_table__$1,project__$1,owner__$1,meta133498));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay133497(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,p))));
});
biomarket.projectdisplay.show_default = (function biomarket$projectdisplay$show_default(_,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay133503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay133503 = (function (show_default,_,owner,meta133504){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta133504 = meta133504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay133503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133505,meta133504__$1){
var self__ = this;
var _133505__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133503(self__.show_default,self__._,self__.owner,meta133504__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay133503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133505){
var self__ = this;
var _133505__$1 = this;
return self__.meta133504;
});

biomarket.projectdisplay.t_biomarket$projectdisplay133503.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133503.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay133503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133504","meta133504",-28763904,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay133503.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133503.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay133503";

biomarket.projectdisplay.t_biomarket$projectdisplay133503.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay133503");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay133503 = (function biomarket$projectdisplay$show_default_$___GT_t_biomarket$projectdisplay133503(show_default__$1,___$1,owner__$1,meta133504){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133503(show_default__$1,___$1,owner__$1,meta133504));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay133503(biomarket$projectdisplay$show_default,_,owner,null));
});
biomarket.projectdisplay.bbutton_state = (function biomarket$projectdisplay$bbutton_state(owner,project,tag){
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project);
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default active":"btn btn-default"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (visible){
return (function (){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(visible))
], null));
});
biomarket.projectdisplay.bottom_skel = (function biomarket$projectdisplay$bottom_skel(p__133506,owner){
var vec__133517 = p__133506;
var links = cljs.core.nth.call(null,vec__133517,(0),null);
var widget = cljs.core.nth.call(null,vec__133517,(1),null);
var visible = cljs.core.nth.call(null,vec__133517,(2),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay133518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay133518 = (function (bottom_skel,p__133506,owner,vec__133517,links,widget,visible,meta133519){
this.bottom_skel = bottom_skel;
this.p__133506 = p__133506;
this.owner = owner;
this.vec__133517 = vec__133517;
this.links = links;
this.widget = widget;
this.visible = visible;
this.meta133519 = meta133519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay133518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__133517,links,widget,visible){
return (function (_133520,meta133519__$1){
var self__ = this;
var _133520__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133518(self__.bottom_skel,self__.p__133506,self__.owner,self__.vec__133517,self__.links,self__.widget,self__.visible,meta133519__$1));
});})(vec__133517,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__133517,links,widget,visible){
return (function (_133520){
var self__ = this;
var _133520__$1 = this;
return self__.meta133519;
});})(vec__133517,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.prototype.om$core$IRender$render$arity$1 = ((function (vec__133517,links,widget,visible){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__28872__auto____$1,vec__133517,links,widget,visible){
return (function (p__133521){
var vec__133522 = p__133521;
var k = cljs.core.nth.call(null,vec__133522,(0),null);
var vec__133523 = cljs.core.nth.call(null,vec__133522,(1),null);
var button = cljs.core.nth.call(null,vec__133523,(0),null);
return om.core.build.call(null,cljs.core.first.call(null,button),cljs.core.second.call(null,button));
});})(this__28872__auto____$1,vec__133517,links,widget,visible))
,self__.links))),React.DOM.div({"className": "col-md-6"},(cljs.core.truth_(self__.widget)?cljs.core.apply.call(null,om.core.build,cljs.core.first.call(null,self__.widget),cljs.core.rest.call(null,self__.widget)):null))),(function (){var pred__133524 = cljs.core._EQ_;
var expr__133525 = self__.visible;
if(cljs.core.truth_(pred__133524.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__133525))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.projectdisplay.show_default,null)));
} else {
var bottom = cljs.core.second.call(null,self__.visible.call(null,self__.links));
return om.core.build.call(null,cljs.core.first.call(null,bottom),cljs.core.second.call(null,bottom));
}
})());
});})(vec__133517,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.getBasis = ((function (vec__133517,links,widget,visible){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__133506","p__133506",-984597937,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__133517","vec__133517",-1415289295,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"meta133519","meta133519",-87543134,null)], null);
});})(vec__133517,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133518.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay133518";

biomarket.projectdisplay.t_biomarket$projectdisplay133518.cljs$lang$ctorPrWriter = ((function (vec__133517,links,widget,visible){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay133518");
});})(vec__133517,links,widget,visible))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay133518 = ((function (vec__133517,links,widget,visible){
return (function biomarket$projectdisplay$bottom_skel_$___GT_t_biomarket$projectdisplay133518(bottom_skel__$1,p__133506__$1,owner__$1,vec__133517__$1,links__$1,widget__$1,visible__$1,meta133519){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133518(bottom_skel__$1,p__133506__$1,owner__$1,vec__133517__$1,links__$1,widget__$1,visible__$1,meta133519));
});})(vec__133517,links,widget,visible))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay133518(biomarket$projectdisplay$bottom_skel,p__133506,owner,vec__133517,links,widget,visible,null));
});
if(typeof biomarket.projectdisplay.bottom !== 'undefined'){
} else {
biomarket.projectdisplay.bottom = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","bottom"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__133527){
var map__133528 = p__133527;
var map__133528__$1 = ((((!((map__133528 == null)))?((((map__133528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133528):map__133528);
var data = cljs.core.get.call(null,map__133528__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__133530){
var map__133531 = p__133530;
var map__133531__$1 = ((((!((map__133531 == null)))?((((map__133531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133531):map__133531);
var data = cljs.core.get.call(null,map__133531__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(data));
}));
biomarket.projectdisplay.project_mount = (function biomarket$projectdisplay$project_mount(owner){
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)));
biomarket.utilities.register_loop.call(null,owner,pid,biomarket.utilities.loop_manager);

return biomarket.utilities.register_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.project_unmount = (function biomarket$projectdisplay$project_unmount(owner){
var pid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
biomarket.utilities.unsubscribe.call(null,owner,pid);

return biomarket.utilities.unsub_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.get_height = (function biomarket$projectdisplay$get_height(owner){
var project = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
var h = om.core.get_node.call(null,owner,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project,"-panel"))].join(''));
return h.clientHeight;
});
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__133533,owner){
var vec__133543 = p__133533;
var project = cljs.core.nth.call(null,vec__133543,(0),null);
var view_type = cljs.core.nth.call(null,vec__133543,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay133544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IDidUpdate}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay133544 = (function (project_summary,p__133533,owner,vec__133543,project,view_type,meta133545){
this.project_summary = project_summary;
this.p__133533 = p__133533;
this.owner = owner;
this.vec__133543 = vec__133543;
this.project = project;
this.view_type = view_type;
this.meta133545 = meta133545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__133543,project,view_type){
return (function (_133546,meta133545__$1){
var self__ = this;
var _133546__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133544(self__.project_summary,self__.p__133533,self__.owner,self__.vec__133543,self__.project,self__.view_type,meta133545__$1));
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__133543,project,view_type){
return (function (_133546){
var self__ = this;
var _133546__$1 = this;
return self__.meta133545;
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__133543,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__133543,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__133543,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__133543,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__133543,project,view_type){
return (function (_,p__133547){
var self__ = this;
var vec__133548 = p__133547;
var np = cljs.core.nth.call(null,vec__133548,(0),null);
var nv = cljs.core.nth.call(null,vec__133548,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__133543,project,view_type){
return (function (_,p__133549){
var self__ = this;
var map__133550 = p__133549;
var map__133550__$1 = ((((!((map__133550 == null)))?((((map__133550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133550):map__133550);
var project__$1 = cljs.core.get.call(null,map__133550__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var show_bid = cljs.core.get.call(null,map__133550__$1,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408));
var bottom_view = cljs.core.get.call(null,map__133550__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var ___$1 = this;
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},((cljs.core.not.call(null,show_bid))?React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),om.core.build.call(null,biomarket.projectdisplay.bottom,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))):null))));
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.getBasis = ((function (vec__133543,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__133533","p__133533",1231181004,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__133543","vec__133543",-348565437,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta133545","meta133545",-64267215,null)], null);
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay133544.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay133544";

biomarket.projectdisplay.t_biomarket$projectdisplay133544.cljs$lang$ctorPrWriter = ((function (vec__133543,project,view_type){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay133544");
});})(vec__133543,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay133544 = ((function (vec__133543,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay133544(project_summary__$1,p__133533__$1,owner__$1,vec__133543__$1,project__$1,view_type__$1,meta133545){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay133544(project_summary__$1,p__133533__$1,owner__$1,vec__133543__$1,project__$1,view_type__$1,meta133545));
});})(vec__133543,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay133544(biomarket$projectdisplay$project_summary,p__133533,owner,vec__133543,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map