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
return (function (p1__318482_SHARP_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__318482_SHARP_));
});})(view,status))
);
});
biomarket.projectdisplay.navigation_mount = (function biomarket$projectdisplay$navigation_mount(owner){
biomarket.projectdisplay.update_projects.call(null,owner);

biomarket.utilities.register_loop.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),(function (o,p__318486){
var map__318487 = p__318486;
var map__318487__$1 = ((((!((map__318487 == null)))?((((map__318487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__318487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__318487):map__318487);
var data = cljs.core.get.call(null,map__318487__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
return React.DOM.div(null,React.DOM.div({"style": {"position": "fixed", "zIndex": (100000), "width": "75%", "left": "50%", "margin-left": "-37.5%"}},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-heading"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,(function (p__318493){
var vec__318494 = p__318493;
var k = cljs.core.nth.call(null,vec__318494,(0),null);
var vec__318495 = cljs.core.nth.call(null,vec__318494,(1),null);
var text = cljs.core.nth.call(null,vec__318495,(0),null);
var dbstatus = cljs.core.nth.call(null,vec__318495,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814)),k))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__318494,k,vec__318495,text,dbstatus){
return (function (_){
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"ut","ut",-719415558)),k);
});})(vec__318494,k,vec__318495,text,dbstatus))
},text);
}),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858))))),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__318489_SHARP_){
return React.DOM.a({"className": "btn btn-primary btn-sm", "onClick": cljs.core.second.call(null,p1__318489_SHARP_)},cljs.core.first.call(null,p1__318489_SHARP_));
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
biomarket.projectdisplay.table_info = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","table-info"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function (project){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(project);
});})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
})();
}
biomarket.projectdisplay.alert_table_info = (function biomarket$projectdisplay$alert_table_info(var_args){
var args__26796__auto__ = [];
var len__26789__auto___318497 = arguments.length;
var i__26790__auto___318498 = (0);
while(true){
if((i__26790__auto___318498 < len__26789__auto___318497)){
args__26796__auto__.push((arguments[i__26790__auto___318498]));

var G__318499 = (i__26790__auto___318498 + (1));
i__26790__auto___318498 = G__318499;
continue;
} else {
}
break;
}

var argseq__26797__auto__ = ((((0) < args__26796__auto__.length))?(new cljs.core.IndexedSeq(args__26796__auto__.slice((0)),(0),null)):null);
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(argseq__26797__auto__);
});

biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.apply.call(null,om.dom.div,{"style": {"color": "red"}},fields);
});

biomarket.projectdisplay.alert_table_info.cljs$lang$maxFixedArity = (0);

biomarket.projectdisplay.alert_table_info.cljs$lang$applyTo = (function (seq318496){
return biomarket.projectdisplay.alert_table_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq318496));
});
biomarket.projectdisplay.average_bid = (function biomarket$projectdisplay$average_bid(project){
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))){
return [cljs.core.str("$"),cljs.core.str(cljs.pprint.cl_format.call(null,null,"~$",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))) / cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project)))))].join('');
} else {
return null;
}
});
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
var f = (function (p1__318500_SHARP_){
return biomarket.utilities.color_span.call(null,p1__318500_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ended",biomarket.projectdisplay.alert_table_info.call(null,[cljs.core.str(new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),cljs.core.str(" ago")].join('')),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid (USD)",f.call(null,(function (){var or__25719__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25719__auto__)){
return or__25719__auto__;
} else {
return "No bids received";
}
})()),"Budget (USD)",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.table_info,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
var f = (function (p1__318501_SHARP_){
return biomarket.utilities.color_span.call(null,p1__318501_SHARP_,"green");
});
return new cljs.core.PersistentArrayMap(null, 5, ["Bidding ends",f.call(null,new cljs.core.Keyword(null,"bidmin","bidmin",-2558125).cljs$core$IFn$_invoke$arity$1(project)),"Project deadline",f.call(null,new cljs.core.Keyword(null,"projmin","projmin",-724900279).cljs$core$IFn$_invoke$arity$1(project)),"Bids",f.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))),"Average bid",f.call(null,(function (){var or__25719__auto__ = biomarket.projectdisplay.average_bid.call(null,project);
if(cljs.core.truth_(or__25719__auto__)){
return or__25719__auto__;
} else {
return "No bids yet";
}
})()),"Budget",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"budget","budget",-405386281).cljs$core$IFn$_invoke$arity$1(project))].join(''))], null);
}));
biomarket.projectdisplay.info_table = (function biomarket$projectdisplay$info_table(project,owner){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay318505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay318505 = (function (info_table,project,owner,meta318506){
this.info_table = info_table;
this.project = project;
this.owner = owner;
this.meta318506 = meta318506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay318505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_318507,meta318506__$1){
var self__ = this;
var _318507__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318505(self__.info_table,self__.project,self__.owner,meta318506__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay318505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_318507){
var self__ = this;
var _318507__$1 = this;
return self__.meta318506;
});

biomarket.projectdisplay.t_biomarket$projectdisplay318505.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318505.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
var data = biomarket.projectdisplay.table_info.call(null,self__.project);
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var x__26553__auto__ = data;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26553__auto__);
})()], null));
});

biomarket.projectdisplay.t_biomarket$projectdisplay318505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"info-table","info-table",-2047867662,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta318506","meta318506",1991244147,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay318505.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318505.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay318505";

biomarket.projectdisplay.t_biomarket$projectdisplay318505.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay318505");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay318505 = (function biomarket$projectdisplay$info_table_$___GT_t_biomarket$projectdisplay318505(info_table__$1,project__$1,owner__$1,meta318506){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318505(info_table__$1,project__$1,owner__$1,meta318506));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay318505(biomarket$projectdisplay$info_table,project,owner,null));
});
biomarket.projectdisplay.label = (function biomarket$projectdisplay$label(class$,text){
return React.DOM.span({"style": {"padding-right": "10px"}},React.DOM.span({"className": class$},text));
});
if(typeof biomarket.projectdisplay.title_labels !== 'undefined'){
} else {
biomarket.projectdisplay.title_labels = (function (){var method_table__26644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26646__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26647__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26648__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.projectdisplay","title-labels"),((function (method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__){
return (function (x){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(x);
});})(method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__,hierarchy__26648__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26648__auto__,method_table__26644__auto__,prefer_table__26645__auto__,method_cache__26646__auto__,cached_hierarchy__26647__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay318508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay318508 = (function (project,meta318509){
this.project = project;
this.meta318509 = meta318509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay318508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_318510,meta318509__$1){
var self__ = this;
var _318510__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318508(self__.project,meta318509__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay318508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_318510){
var self__ = this;
var _318510__$1 = this;
return self__.meta318509;
});

biomarket.projectdisplay.t_biomarket$projectdisplay318508.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318508.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids yet!");
}
})());
});

biomarket.projectdisplay.t_biomarket$projectdisplay318508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta318509","meta318509",966657944,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay318508.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318508.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay318508";

biomarket.projectdisplay.t_biomarket$projectdisplay318508.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay318508");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay318508 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay318508(project__$1,meta318509){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318508(project__$1,meta318509));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay318508(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay318511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay318511 = (function (project,meta318512){
this.project = project;
this.meta318512 = meta318512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay318511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_318513,meta318512__$1){
var self__ = this;
var _318513__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318511(self__.project,meta318512__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay318511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_318513){
var self__ = this;
var _318513__$1 = this;
return self__.meta318512;
});

biomarket.projectdisplay.t_biomarket$projectdisplay318511.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318511.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_(best)){
return biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join(''));
} else {
return biomarket.projectdisplay.label.call(null,"label label-danger","No bids");
}
})());
});

biomarket.projectdisplay.t_biomarket$projectdisplay318511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta318512","meta318512",1943480960,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay318511.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318511.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay318511";

biomarket.projectdisplay.t_biomarket$projectdisplay318511.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay318511");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay318511 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay318511(project__$1,meta318512){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318511(project__$1,meta318512));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay318511(project,null));
}));
cljs.core._add_method.call(null,biomarket.projectdisplay.title_labels,new cljs.core.Keyword(null,"find","find",496279456),(function (project){
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay318514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.projectdisplay.t_biomarket$projectdisplay318514 = (function (project,meta318515){
this.project = project;
this.meta318515 = meta318515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay318514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_318516,meta318515__$1){
var self__ = this;
var _318516__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318514(self__.project,meta318515__$1));
});

biomarket.projectdisplay.t_biomarket$projectdisplay318514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_318516){
var self__ = this;
var _318516__$1 = this;
return self__.meta318515;
});

biomarket.projectdisplay.t_biomarket$projectdisplay318514.prototype.om$core$IRender$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318514.prototype.om$core$IRender$render$arity$1 = (function (this__28693__auto__){
var self__ = this;
var this__28693__auto____$1 = this;
return React.DOM.h4({"style": {"font-weight": "bold"}},React.DOM.span({"style": {"padding-right": "10px"}},[cljs.core.str(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("  ")].join('')),(function (){var ub = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var best = biomarket.bids.best_bid.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project));
if(cljs.core.truth_((function (){var and__25707__auto__ = ub;
if(cljs.core.truth_(and__25707__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) >= new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25707__auto__;
}
})())){
return React.DOM.span(null,biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Best bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best))].join('')),biomarket.projectdisplay.label.call(null,"label label-success",[cljs.core.str("Your bid: $"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub))].join('')));
} else {
if(cljs.core.truth_((function (){var and__25707__auto__ = ub;
if(cljs.core.truth_(and__25707__auto__)){
return (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(best) < new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(ub));
} else {
return and__25707__auto__;
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

biomarket.projectdisplay.t_biomarket$projectdisplay318514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"meta318515","meta318515",-1147048025,null)], null);
});

biomarket.projectdisplay.t_biomarket$projectdisplay318514.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318514.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay318514";

biomarket.projectdisplay.t_biomarket$projectdisplay318514.cljs$lang$ctorPrWriter = (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay318514");
});

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay318514 = (function biomarket$projectdisplay$__GT_t_biomarket$projectdisplay318514(project__$1,meta318515){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318514(project__$1,meta318515));
});

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay318514(project,null));
}));
biomarket.projectdisplay.header = (function biomarket$projectdisplay$header(p){
return React.DOM.div({"className": "container-fluid", "style": {"margin-top": "10px"}},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-10", "style": {"color": "#D3D3D3"}},React.DOM.i({"className": "fa fa-bullseye"}),[cljs.core.str("  Posted by "),cljs.core.str(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p))].join('')),React.DOM.div({"className": "col-md-2", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,p))));
});
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),(function (owner,p__318517){
var map__318518 = p__318517;
var map__318518__$1 = ((((!((map__318518 == null)))?((((map__318518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__318518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__318518):map__318518);
var data = cljs.core.get.call(null,map__318518__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data))){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
} else {
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(data));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"bids","bids",-1493194652));
}
}));
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),(function (owner,p__318520){
var map__318521 = p__318520;
var map__318521__$1 = ((((!((map__318521 == null)))?((((map__318521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__318521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__318521):map__318521);
var data = cljs.core.get.call(null,map__318521__$1,new cljs.core.Keyword(null,"data","data",-232669377));
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
biomarket.projectdisplay.project_summary = (function biomarket$projectdisplay$project_summary(p__318523,owner){
var vec__318533 = p__318523;
var project = cljs.core.nth.call(null,vec__318533,(0),null);
var view_type = cljs.core.nth.call(null,vec__318533,(1),null);
if(typeof biomarket.projectdisplay.t_biomarket$projectdisplay318534 !== 'undefined'){
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
biomarket.projectdisplay.t_biomarket$projectdisplay318534 = (function (project_summary,p__318523,owner,vec__318533,project,view_type,meta318535){
this.project_summary = project_summary;
this.p__318523 = p__318523;
this.owner = owner;
this.vec__318533 = vec__318533;
this.project = project;
this.view_type = view_type;
this.meta318535 = meta318535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__318533,project,view_type){
return (function (_318536,meta318535__$1){
var self__ = this;
var _318536__$1 = this;
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318534(self__.project_summary,self__.p__318523,self__.owner,self__.vec__318533,self__.project,self__.view_type,meta318535__$1));
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__318533,project,view_type){
return (function (_318536){
var self__ = this;
var _318536__$1 = this;
return self__.meta318535;
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IInitState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__318533,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),self__.view_type,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),new cljs.core.Keyword(null,"default","default",-1987822328)], null);
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillMount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__318533,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_mount.call(null,self__.owner);
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillUnmount$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__318533,project,view_type){
return (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.projectdisplay.project_unmount.call(null,self__.owner);
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IDidUpdate$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (vec__318533,project,view_type){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408)))){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622),biomarket.projectdisplay.get_height.call(null,self__.owner));
}
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillReceiveProps$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (vec__318533,project,view_type){
return (function (_,p__318537){
var self__ = this;
var vec__318538 = p__318537;
var np = cljs.core.nth.call(null,vec__318538,(0),null);
var nv = cljs.core.nth.call(null,vec__318538,(1),null);
var ___$1 = this;
var op = cljs.core.first.call(null,om.core.get_props.call(null,self__.owner));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,np,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),nv));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),false);
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IRenderState$ = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__318533,project,view_type){
return (function (_,p__318539){
var self__ = this;
var map__318540 = p__318539;
var map__318540__$1 = ((((!((map__318540 == null)))?((((map__318540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__318540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__318540):map__318540);
var project__$1 = cljs.core.get.call(null,map__318540__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var show_bid = cljs.core.get.call(null,map__318540__$1,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408));
var bottom_view = cljs.core.get.call(null,map__318540__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585));
var ___$1 = this;
if(cljs.core.not.call(null,show_bid)){
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default", "ref": [cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$2(project__$1,"-panel"))].join('')},React.DOM.div(null,biomarket.projectdisplay.header.call(null,project__$1)),React.DOM.div({"className": "panel-body"},((cljs.core.not.call(null,show_bid))?React.DOM.div(null,React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.title_labels,project__$1)),React.DOM.div(null,om.core.build.call(null,biomarket.projectdisplay.info_table,project__$1)),om.core.build.call(null,biomarket.utilities.more_less_text,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(project__$1)),biomarket.utilities.bottom.call(null,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view))):null))));
} else {
return om.core.build.call(null,biomarket.bids.bid_view,cljs.core.assoc.call(null,project__$1,new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),bottom_view,new cljs.core.Keyword(null,"show-bid","show-bid",1624255408),show_bid,new cljs.core.Keyword(null,"height","height",1025178622),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"height","height",1025178622))));
}
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.getBasis = ((function (vec__318533,project,view_type){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"project-summary","project-summary",1896971412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__318523","p__318523",-878925723,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__318533","vec__318533",-2021131788,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"view-type","view-type",-208363032,null),new cljs.core.Symbol(null,"meta318535","meta318535",1918270242,null)], null);
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.cljs$lang$type = true;

biomarket.projectdisplay.t_biomarket$projectdisplay318534.cljs$lang$ctorStr = "biomarket.projectdisplay/t_biomarket$projectdisplay318534";

biomarket.projectdisplay.t_biomarket$projectdisplay318534.cljs$lang$ctorPrWriter = ((function (vec__318533,project,view_type){
return (function (this__26325__auto__,writer__26326__auto__,opt__26327__auto__){
return cljs.core._write.call(null,writer__26326__auto__,"biomarket.projectdisplay/t_biomarket$projectdisplay318534");
});})(vec__318533,project,view_type))
;

biomarket.projectdisplay.__GT_t_biomarket$projectdisplay318534 = ((function (vec__318533,project,view_type){
return (function biomarket$projectdisplay$project_summary_$___GT_t_biomarket$projectdisplay318534(project_summary__$1,p__318523__$1,owner__$1,vec__318533__$1,project__$1,view_type__$1,meta318535){
return (new biomarket.projectdisplay.t_biomarket$projectdisplay318534(project_summary__$1,p__318523__$1,owner__$1,vec__318533__$1,project__$1,view_type__$1,meta318535));
});})(vec__318533,project,view_type))
;

}

return (new biomarket.projectdisplay.t_biomarket$projectdisplay318534(biomarket$projectdisplay$project_summary,p__318523,owner,vec__318533,project,view_type,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=projectdisplay.js.map