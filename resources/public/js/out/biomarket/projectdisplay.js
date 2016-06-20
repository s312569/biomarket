// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projectdisplay');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('cljs.core.async');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
goog.require('biomarket.components');
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__119635){
var map__119636 = p__119635;
var map__119636__$1 = ((((!((map__119636 == null)))?((((map__119636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119636):map__119636);
var data = cljs.core.get.call(null,map__119636__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__119636,map__119636__$1,data){
return (function (p1__119633_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__119633_SHARP_);
});})(map__119636,map__119636__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__119636,map__119636__$1,data){
return (function (p1__119634_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__119634_SHARP_));
});})(status__GT_view,cv,projs,map__119636,map__119636__$1,data))
,projs));
}
}));
biomarket.projectdisplay.update_projects = (function biomarket$projectdisplay$update_projects(owner){
var view = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var status = cljs.core.second.call(null,view.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))));
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),view,new cljs.core.Keyword(null,"status","status",-1997798413),status], null),((function (view,status){
return (function (p1__119638_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__119638_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__119642){
var map__119643 = p__119642;
var map__119643__$1 = ((((!((map__119643 == null)))?((((map__119643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119643):map__119643);
var data = cljs.core.get.call(null,map__119643__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__119649){
var vec__119650 = p__119649;
var k = cljs.core.nth.call(null,vec__119650,(0),null);
var vec__119651 = cljs.core.nth.call(null,vec__119650,(1),null);
var text = cljs.core.nth.call(null,vec__119651,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__119651,(1),null);
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"active":null), "role": "presentation", "onClick": ((function (vec__119650,k,vec__119651,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__119650,k,vec__119651,text,dbstatus))
},React.DOM.a({"href": "#"},text));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"views","views",1450155487))),(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477)))?cljs.core.map.call(null,(function (p1__119645_SHARP_){
return React.DOM.li({"role": "presentation", "onClick": cljs.core.second.call(null,p1__119645_SHARP_)},React.DOM.a({"href": "#"},cljs.core.first.call(null,p1__119645_SHARP_)));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477))):null))));
});
if(typeof biomarket.projectdisplay.table_info !== 'undefined'){
} else {
biomarket.projectdisplay.table_info = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26991__auto__ = [];
var len__26984__auto___119653 = arguments.length;
var i__26985__auto___119654 = (0);
while(true){
if((i__26985__auto___119654 < len__26984__auto___119653)){
args__26991__auto__.push((arguments[i__26985__auto___119654]));

var G__119655 = (i__26985__auto___119654 + (1));
i__26985__auto___119654 = G__119655;
continue;
} else {
}
break;
}

var argseq__26992__auto__ = ((((0) < args__26991__auto__.length))?(new cljs.core.IndexedSeq(args__26991__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26992__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq119652){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq119652));
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__119656_SHARP_){
return biomarket.utilities.color_span.call(null,p1__119656_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25914__auto__ = biomarket.bids.average_bid.call(null,project);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__119657_SHARP_){
return biomarket.utilities.color_span.call(null,p1__119657_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,biomarket.bids.sort_best_bids.call(null,project))),"Average bid",f.call(null,(function (){var or__25914__auto__ = biomarket.bids.average_bid.call(null,project);
if(cljs.core.truth_(or__25914__auto__)){
return or__25914__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay119661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay119661 = (function (info_table,project,owner,meta119662){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta119662 = meta119662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay119661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119663,meta119662__$1){
var self__ = this;
var _119663__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119661(self__.info_table,self__.project,self__.owner,meta119662__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay119661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119663){
var self__ = this;
var _119663__$1 = this;
return self__.meta119662;
});

biomarket.projectdisplay.t_biomarket$projectdisplay119661.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119661.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26748__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26748__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay119661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119662","meta119662",190045307,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay119661.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119661.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay119661";

biomarket.projectdisplay.t_biomarket$projectdisplay119661.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay119661");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay119661 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay119661(info_table__$1,project__$1,owner__$1,meta119662){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119661(info_table__$1,project__$1,owner__$1,meta119662));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay119661(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
biomarket.projectdisplay.delete_project = (function biomarket$projectdisplay$delete_project(p){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-project","delete-project",-1196614829),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null)], null));
});
biomarket.projectdisplay.drop_down_skel = (function biomarket$projectdisplay$drop_down_skel(var_args){
var args119664 = [];
var len__26984__auto___119667 = arguments.length;
var i__26985__auto___119668 = (0);
while(true){
if((i__26985__auto___119668 < len__26984__auto___119667)){
args119664.push((arguments[i__26985__auto___119668]));

var G__119669 = (i__26985__auto___119668 + (1));
i__26985__auto___119668 = G__119669;
continue;
} else {
}
break;
}

var G__119666 = args119664.length;
switch (G__119666) {
case 0:
return biomarket.projectdisplay.drop_down_skel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return biomarket.projectdisplay.drop_down_skel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args119664.length)].join('')));

}
});

biomarket.projectdisplay.drop_down_skel.cljs$core$IFn$_invoke$arity$0 = (function (){
return biomarket.projectdisplay.drop_down_skel.call(null,null,null);
});

biomarket.projectdisplay.drop_down_skel.cljs$core$IFn$_invoke$arity$2 = (function (func,text){
if((func == null)){
return React.DOM.div(null,React.DOM.i({"className": "fa fa-bars", "style": {"color": "#D3D3D3"}}));
} else {
return React.DOM.div({"className": "btn-group"},React.DOM.a({"className": "dropdown-toggle", "data-toggle": "dropdown"},React.DOM.i({"className": "fa fa-bars", "style": {"color": "gray"}})),React.DOM.ul({"className": "dropdown-menu dropdown-menu-right"},React.DOM.li(null,React.DOM.a({"onClick": func},text))));
}
});

biomarket.projectdisplay.drop_down_skel.cljs$lang$maxFixedArity = 2;
if(typeof biomarket.projectdisplay.drop_down !== 'undefined'){
} else {
biomarket.projectdisplay.drop_down = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","drop-down"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.projectdisplay.drop_down,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p){
return biomarket.projectdisplay.drop_down_skel.call(null,(function (){
return biomarket.projectdisplay.delete_project.call(null,p);
}),"Delete project");
}));
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.projectdisplay.drop_down.call(null,p))));
});
biomarket.projectdisplay.show_default = (function biomarket$projectdisplay$show_default(_,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay119674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay119674 = (function (show_default,_,owner,meta119675){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta119675 = meta119675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay119674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_119676,meta119675__$1){
var self__ = this;
var _119676__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119674(self__.show_default,self__._,self__.owner,meta119675__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay119674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_119676){
var self__ = this;
var _119676__$1 = this;
return self__.meta119675;
});

biomarket.projectdisplay.t_biomarket$projectdisplay119674.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119674.prototype.om$core$IRender$render$arity$1 = (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay119674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta119675","meta119675",1559477659,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay119674.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119674.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay119674";

biomarket.projectdisplay.t_biomarket$projectdisplay119674.cljs$lang$ctorPrWriter = (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay119674");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay119674 = (function biomarket$projectdisplay$show_default_$___GT_t_biomarket$projectdisplay119674(show_default__$1,___$1,owner__$1,meta119675){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119674(show_default__$1,___$1,owner__$1,meta119675));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay119674(biomarket$projectdisplay$show_default,_,owner,null));
});
biomarket.projectdisplay.bbutton_state = (function biomarket$projectdisplay$bbutton_state(owner,project,tag){
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(project);
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default active":"btn btn-default"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (visible){
return (function (){
return biomarket.utilities.pub_info.call(null,owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(visible))
], null));
});
biomarket.projectdisplay.bottom_skel = (function biomarket$projectdisplay$bottom_skel(p__119677,owner){
var vec__119688 = p__119677;
var links = cljs.core.nth.call(null,vec__119688,(0),null);
var widget = cljs.core.nth.call(null,vec__119688,(1),null);
var visible = cljs.core.nth.call(null,vec__119688,(2),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay119689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay119689 = (function (bottom_skel,p__119677,owner,vec__119688,links,widget,visible,meta119690){
this.bottom_skel = bottom_skel;
this.p__119677 = p__119677;
this.owner = owner;
this.vec__119688 = vec__119688;
this.links = links;
this.widget = widget;
this.visible = visible;
this.meta119690 = meta119690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay119689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119688,links,widget,visible){
return (function (_119691,meta119690__$1){
var self__ = this;
var _119691__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119689(self__.bottom_skel,self__.p__119677,self__.owner,self__.vec__119688,self__.links,self__.widget,self__.visible,meta119690__$1));
});})(vec__119688,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119688,links,widget,visible){
return (function (_119691){
var self__ = this;
var _119691__$1 = this;
return self__.meta119690;
});})(vec__119688,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.prototype.om$core$IRender$render$arity$1 = ((function (vec__119688,links,widget,visible){
return (function (this__36859__auto__){
var self__ = this;
var this__36859__auto____$1 = this;
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (this__36859__auto____$1,vec__119688,links,widget,visible){
return (function (p__119692){
var vec__119693 = p__119692;
var k = cljs.core.nth.call(null,vec__119693,(0),null);
var vec__119694 = cljs.core.nth.call(null,vec__119693,(1),null);
var button = cljs.core.nth.call(null,vec__119694,(0),null);
return om.core.build.call(null,cljs.core.first.call(null,button),cljs.core.second.call(null,button));
});})(this__36859__auto____$1,vec__119688,links,widget,visible))
,self__.links))),React.DOM.div({"className": "col-md-6"},(cljs.core.truth_(self__.widget)?cljs.core.apply.call(null,om.core.build,cljs.core.first.call(null,self__.widget),cljs.core.rest.call(null,self__.widget)):null))),(function (){var pred__119695 = cljs.core._EQ_;
var expr__119696 = self__.visible;
if(cljs.core.truth_(pred__119695.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__119696))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.projectdisplay.show_default,null)));
} else {
var bottom = cljs.core.second.call(null,self__.visible.call(null,self__.links));
return om.core.build.call(null,cljs.core.first.call(null,bottom),cljs.core.second.call(null,bottom));
}
})());
});})(vec__119688,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.getBasis = ((function (vec__119688,links,widget,visible){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119677","p__119677",802377309,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119688","vec__119688",985745038,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"meta119690","meta119690",-1721988013,null)], null);
});})(vec__119688,links,widget,visible))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119689.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay119689";

biomarket.projectdisplay.t_biomarket$projectdisplay119689.cljs$lang$ctorPrWriter = ((function (vec__119688,links,widget,visible){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay119689");
});})(vec__119688,links,widget,visible))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay119689 = ((function (vec__119688,links,widget,visible){
return (function biomarket$projectdisplay$bottom_skel_$___GT_t_biomarket$projectdisplay119689(bottom_skel__$1,p__119677__$1,owner__$1,vec__119688__$1,links__$1,widget__$1,visible__$1,meta119690){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119689(bottom_skel__$1,p__119677__$1,owner__$1,vec__119688__$1,links__$1,widget__$1,visible__$1,meta119690));
});})(vec__119688,links,widget,visible))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay119689(biomarket$projectdisplay$bottom_skel,p__119677,owner,vec__119688,links,widget,visible,null));
});
if(typeof biomarket.projectdisplay.bottom !== 'undefined'){
} else {
biomarket.projectdisplay.bottom = (function (){var method_table__26839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","bottom"),((function (method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__,hierarchy__26843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26843__auto__,method_table__26839__auto__,prefer_table__26840__auto__,method_cache__26841__auto__,cached_hierarchy__26842__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__119698){
var map__119699 = p__119698;
var map__119699__$1 = ((((!((map__119699 == null)))?((((map__119699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119699):map__119699);
var data = cljs.core.get.call(null,map__119699__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__119701){
var map__119702 = p__119701;
var map__119702__$1 = ((((!((map__119702 == null)))?((((map__119702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119702):map__119702);
var data = cljs.core.get.call(null,map__119702__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(data));
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"project-alert","project-alert",1640838720),(function (owner,p__119704){
var map__119705 = p__119704;
var map__119705__$1 = ((((!((map__119705 == null)))?((((map__119705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119705):map__119705);
var data = cljs.core.get.call(null,map__119705__$1,new cljs.core.Keyword(null,"data","data",-232669377));
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"alert","alert",-571950580).cljs$core$IFn$_invoke$arity$1(data));
}));
biomarket.projectdisplay.project_mount = (function biomarket$projectdisplay$project_mount(owner){
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579)));
biomarket.utilities.register_loop.call(null,owner,pid,biomarket.utilities.loop_manager);

biomarket.utilities.register_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alert","alert",-571950580),pid], null));

return biomarket.utilities.register_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.project_unmount = (function biomarket$projectdisplay$project_unmount(owner){
var pid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
biomarket.utilities.unsubscribe.call(null,owner,pid);

biomarket.utilities.unsubscribe.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alert","alert",-571950580),pid], null));

return biomarket.utilities.unsub_broadcast_loop.call(null,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),pid], null),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718)));
});
biomarket.projectdisplay.get_height = (function biomarket$projectdisplay$get_height(owner){
var project = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579));
var h = om.core.get_node.call(null,owner,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project,"-panel"))].join(''));
return h.clientHeight;
});
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__119707,owner){
var vec__119717 = p__119707;
var project = cljs.core.nth.call(null,vec__119717,(0),null);
var view_type = cljs.core.nth.call(null,vec__119717,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay119718 !== 'undefined'){
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
biomarket.projectdisplay.t_biomarket$projectdisplay119718 = (function (project_summary,p__119707,owner,vec__119717,project,view_type,meta119719){
this.project_summary = project_summary;
this.p__119707 = p__119707;
this.owner = owner;
this.vec__119717 = vec__119717;
this.project = project;
this.view_type = view_type;
this.meta119719 = meta119719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__119717,project,view_type){
return (function (_119720,meta119719__$1){
var self__ = this;
var _119720__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119718(self__.project_summary,self__.p__119707,self__.owner,self__.vec__119717,self__.project,self__.view_type,meta119719__$1));
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__119717,project,view_type){
return (function (_119720){
var self__ = this;
var _119720__$1 = this;
return self__.meta119719;
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__119717,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"alert","alert",-571950580),false,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__119717,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__119717,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__119717,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__119717,project,view_type){
return (function (_,p__119721){
var self__ = this;
var vec__119722 = p__119721;
var np = cljs.core.nth.call(null,vec__119722,(0),null);
var nv = cljs.core.nth.call(null,vec__119722,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__119717,project,view_type){
return (function (_,p__119723){
var self__ = this;
var map__119724 = p__119723;
var map__119724__$1 = ((((!((map__119724 == null)))?((((map__119724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__119724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__119724):map__119724);
var project__$1 = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var bottom_view = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var alert = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"alert","alert",-571950580));
var alert_type = cljs.core.get.call(null,map__119724__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var ___$1 = this;
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},(cljs.core.truth_(alert)?om.core.build.call(null,biomarket.components.alert,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"msg","msg",-1386103444),alert,new cljs.core.Keyword(null,"type","type",1174270348),alert_type,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project__$1)], null)):null),React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),om.core.build.call(null,biomarket.projectdisplay.bottom,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))))));
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.getBasis = ((function (vec__119717,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__119707","p__119707",-305955091,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__119717","vec__119717",-1645596889,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta119719","meta119719",1895655407,null)], null);
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay119718.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay119718";

biomarket.projectdisplay.t_biomarket$projectdisplay119718.cljs$lang$ctorPrWriter = ((function (vec__119717,project,view_type){
return (function (this__26520__auto__,writer__26521__auto__,opt__26522__auto__){
return cljs.core._write.call(null,writer__26521__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay119718");
});})(vec__119717,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay119718 = ((function (vec__119717,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay119718(project_summary__$1,p__119707__$1,owner__$1,vec__119717__$1,project__$1,view_type__$1,meta119719){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay119718(project_summary__$1,p__119707__$1,owner__$1,vec__119717__$1,project__$1,view_type__$1,meta119719));
});})(vec__119717,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay119718(biomarket$projectdisplay$project_summary,p__119707,owner,vec__119717,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map