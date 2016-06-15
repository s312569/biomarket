// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.projectdisplay');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('cljs.pprint');
goog.require('om.dom');
goog.require('biomarket.bids');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('biomarket.dropdown');
goog.require('cljs.core.async');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
biomarket.projectdisplay.update_projects = (function biomarket$projectdisplay$update_projects(owner){
var view = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var status = cljs.core.second.call(null,view.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))));
return biomarket.server.get_data.call(null,owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),view,new cljs.core.Keyword(null,"status","status",-1997798413),status], null),((function (view,status){
return (function (p1__64748_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__64748_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__64752){
var map__64753 = p__64752;
var map__64753__$1 = ((((!((map__64753 == null)))?((((map__64753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64753):map__64753);
var data = cljs.core.get.call(null,map__64753__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
return React.DOM.div(null,React.DOM.div({"style": {"position": "fixed", "zIndex": (100000), "width": "75%", "left": "50%", "margin-left": "-37.5%"}},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,(function (p__64759){
var vec__64760 = p__64759;
var k = cljs.core.nth.call(null,vec__64760,(0),null);
var vec__64761 = cljs.core.nth.call(null,vec__64760,(1),null);
var text = cljs.core.nth.call(null,vec__64761,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__64761,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__64760,k,vec__64761,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__64760,k,vec__64761,text,dbstatus))
},text);
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__64755_SHARP_){
return React.DOM.a({"className": "btn btn-primary btn-sm", "onClick": cljs.core.second.call(null,p1__64755_SHARP_)},cljs.core.first.call(null,p1__64755_SHARP_));
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"nav","nav",719540477))))))))),React.DOM.div({"style": {"height": "60px"}},""));
});
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"open-jobs","open-jobs",-1691637335),(function (p){
var links = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bid history",biomarket.bids.show_bids], null),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p)], null)], null);
return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.bids.bid_widget,p))),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p)))?React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),links))):null));
}));
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(p))){
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids","bids",-1493194652),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bids",biomarket.bids.bid_manage], null)], null))));
} else {
return null;
}
}));
if(typeof biomarket.projectdisplay.table_info !== 'undefined'){
} else {
biomarket.projectdisplay.table_info = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26886__auto__ = [];
var len__26879__auto___64763 = arguments.length;
var i__26880__auto___64764 = (0);
while(true){
if((i__26880__auto___64764 < len__26879__auto___64763)){
args__26886__auto__.push((arguments[i__26880__auto___64764]));

var G__64765 = (i__26880__auto___64764 + (1));
i__26880__auto___64764 = G__64765;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq64762){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64762));
});
biomarket.projectdisplay.average_bid = (function biomarket$projectdisplay$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__64766_SHARP_){
return biomarket.utilities.color_span.call(null,p1__64766_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25809__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__64767_SHARP_){
return biomarket.utilities.color_span.call(null,p1__64767_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,(function (){var or__25809__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay64771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay64771 = (function (info_table,project,owner,meta64772){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta64772 = meta64772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay64771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64773,meta64772__$1){
var self__ = this;
var _64773__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64771(self__.info_table,self__.project,self__.owner,meta64772__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay64771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64773){
var self__ = this;
var _64773__$1 = this;
return self__.meta64772;
});

biomarket.projectdisplay.t_biomarket$projectdisplay64771.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64771.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26643__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay64771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64772","meta64772",-1187374292,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay64771.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64771.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay64771";

biomarket.projectdisplay.t_biomarket$projectdisplay64771.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay64771");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay64771 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay64771(info_table__$1,project__$1,owner__$1,meta64772){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64771(info_table__$1,project__$1,owner__$1,meta64772));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay64771(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay64774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay64774 = (function (project,meta64775){
this.project = project;
this.meta64775 = meta64775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay64774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64776,meta64775__$1){
var self__ = this;
var _64776__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64774(self__.project,meta64775__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay64774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64776){
var self__ = this;
var _64776__$1 = this;
return self__.meta64775;
});

biomarket.projectdisplay.t_biomarket$projectdisplay64774.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64774.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projectdisplay.t_biomarket$projectdisplay64774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta64775","meta64775",-7887821,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay64774.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64774.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay64774";

biomarket.projectdisplay.t_biomarket$projectdisplay64774.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay64774");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay64774 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay64774(project__$1,meta64775){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64774(project__$1,meta64775));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay64774(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay64777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay64777 = (function (project,meta64778){
this.project = project;
this.meta64778 = meta64778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay64777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64779,meta64778__$1){
var self__ = this;
var _64779__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64777(self__.project,meta64778__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay64777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64779){
var self__ = this;
var _64779__$1 = this;
return self__.meta64778;
});

biomarket.projectdisplay.t_biomarket$projectdisplay64777.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64777.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projectdisplay.t_biomarket$projectdisplay64777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta64778","meta64778",-1746397808,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay64777.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64777.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay64777";

biomarket.projectdisplay.t_biomarket$projectdisplay64777.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay64777");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay64777 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay64777(project__$1,meta64778){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64777(project__$1,meta64778));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay64777(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"find","find",496279456),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay64780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay64780 = (function (project,meta64781){
this.project = project;
this.meta64781 = meta64781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay64780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64782,meta64781__$1){
var self__ = this;
var _64782__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64780(self__.project,meta64781__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay64780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64782){
var self__ = this;
var _64782__$1 = this;
return self__.meta64781;
});

biomarket.projectdisplay.t_biomarket$projectdisplay64780.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64780.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_((function (){var and__25797__auto__ = ub;
if(cljs.core.truth_(and__25797__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) >= new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25797__auto__;
}
})())){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_((function (){var and__25797__auto__ = ub;
if(cljs.core.truth_(and__25797__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) < new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25797__auto__;
}
})())){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-danger",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-danger",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");

}
}
}
})());
});

biomarket.projectdisplay.t_biomarket$projectdisplay64780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta64781","meta64781",-195256122,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay64780.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64780.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay64780";

biomarket.projectdisplay.t_biomarket$projectdisplay64780.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay64780");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay64780 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay64780(project__$1,meta64781){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64780(project__$1,meta64781));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay64780(project,null));
}));
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,p))));
});
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__64783){
var map__64784 = p__64783;
var map__64784__$1 = ((((!((map__64784 == null)))?((((map__64784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64784):map__64784);
var data = cljs.core.get.call(null,map__64784__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__64786){
var map__64787 = p__64786;
var map__64787__$1 = ((((!((map__64787 == null)))?((((map__64787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64787):map__64787);
var data = cljs.core.get.call(null,map__64787__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__64789,owner){
var vec__64799 = p__64789;
var project = cljs.core.nth.call(null,vec__64799,(0),null);
var view_type = cljs.core.nth.call(null,vec__64799,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay64800 !== 'undefined'){
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
biomarket.projectdisplay.t_biomarket$projectdisplay64800 = (function (project_summary,p__64789,owner,vec__64799,project,view_type,meta64801){
this.project_summary = project_summary;
this.p__64789 = p__64789;
this.owner = owner;
this.vec__64799 = vec__64799;
this.project = project;
this.view_type = view_type;
this.meta64801 = meta64801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__64799,project,view_type){
return (function (_64802,meta64801__$1){
var self__ = this;
var _64802__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64800(self__.project_summary,self__.p__64789,self__.owner,self__.vec__64799,self__.project,self__.view_type,meta64801__$1));
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__64799,project,view_type){
return (function (_64802){
var self__ = this;
var _64802__$1 = this;
return self__.meta64801;
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__64799,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__64799,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__64799,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__64799,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__64799,project,view_type){
return (function (_,p__64803){
var self__ = this;
var vec__64804 = p__64803;
var np = cljs.core.nth.call(null,vec__64804,(0),null);
var nv = cljs.core.nth.call(null,vec__64804,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false);
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__64799,project,view_type){
return (function (_,p__64805){
var self__ = this;
var map__64806 = p__64805;
var map__64806__$1 = ((((!((map__64806 == null)))?((((map__64806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64806):map__64806);
var project__$1 = cljs.core.get.call(null,map__64806__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var show_bid = cljs.core.get.call(null,map__64806__$1,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408));
var bottom_view = cljs.core.get.call(null,map__64806__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var ___$1 = this;
if(cljs.core.not.call(null,show_bid)){
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},((cljs.core.not.call(null,show_bid))?React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),biomarket.utilities.bottom.call(null,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))):null))));
} else {
return om.core.build.call(null,biomarket.bids.bid_view,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),show_bid,new cljs.core.Keyword(null,"height","height",1025178622),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622))));
}
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.getBasis = ((function (vec__64799,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__64789","p__64789",-249910870,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__64799","vec__64799",-447323981,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta64801","meta64801",-692663460,null)], null);
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay64800.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay64800";

biomarket.projectdisplay.t_biomarket$projectdisplay64800.cljs$lang$ctorPrWriter = ((function (vec__64799,project,view_type){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay64800");
});})(vec__64799,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay64800 = ((function (vec__64799,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay64800(project_summary__$1,p__64789__$1,owner__$1,vec__64799__$1,project__$1,view_type__$1,meta64801){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay64800(project_summary__$1,p__64789__$1,owner__$1,vec__64799__$1,project__$1,view_type__$1,meta64801));
});})(vec__64799,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay64800(biomarket$projectdisplay$project_summary,p__64789,owner,vec__64799,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map