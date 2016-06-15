// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.bids');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('biomarket.comments');
goog.require('biomarket.dropdown');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('biomarket.skills');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.bids.best_bid = (function biomarket$bids$best_bid(bids){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.map.call(null,(function (p1__64672_SHARP_){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__64672_SHARP_));
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),bids)))));
});
biomarket.bids.sort_best_bids = (function biomarket$bids$sort_best_bids(project){
return cljs.core.sort_by.call(null,(function (p1__64673_SHARP_){
return new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__64673_SHARP_);
}),cljs.core._LT_,cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,(function (p1__64674_SHARP_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__64674_SHARP_);
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))))));
});
biomarket.bids.show_table = (function biomarket$bids$show_table(data,owner){
if(typeof biomarket.bids.t_biomarket$bids64680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64680 = (function (show_table,data,owner,meta64681){
this.show_table = show_table;
this.data = data;
this.owner = owner;
this.meta64681 = meta64681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64682,meta64681__$1){
var self__ = this;
var _64682__$1 = this;
return (new biomarket.bids.t_biomarket$bids64680(self__.show_table,self__.data,self__.owner,meta64681__$1));
});

biomarket.bids.t_biomarket$bids64680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64682){
var self__ = this;
var _64682__$1 = this;
return self__.meta64681;
});

biomarket.bids.t_biomarket$bids64680.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids64680.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.table({"className": "table table-striped table hover"},React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__36754__auto____$1){
return (function (p1__64675_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__64675_SHARP_);
});})(this__36754__auto____$1))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (this__36754__auto____$1){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__36754__auto____$1){
return (function (p1__64676_SHARP_){
return React.DOM.td({"style": {"text-align": "center", "border": "0"}},p1__64676_SHARP_);
});})(this__36754__auto____$1))
,cljs.core.vals.call(null,x)));
});})(this__36754__auto____$1))
,self__.data)));
});

biomarket.bids.t_biomarket$bids64680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-table","show-table",-2144991522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64681","meta64681",1751119874,null)], null);
});

biomarket.bids.t_biomarket$bids64680.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64680.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64680";

biomarket.bids.t_biomarket$bids64680.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64680");
});

biomarket.bids.__GT_t_biomarket$bids64680 = (function biomarket$bids$show_table_$___GT_t_biomarket$bids64680(show_table__$1,data__$1,owner__$1,meta64681){
return (new biomarket.bids.t_biomarket$bids64680(show_table__$1,data__$1,owner__$1,meta64681));
});

}

return (new biomarket.bids.t_biomarket$bids64680(biomarket$bids$show_table,data,owner,null));
});
biomarket.bids.show_bids = (function biomarket$bids$show_bids(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64689 = (function (show_bids,project,owner,meta64690){
this.show_bids = show_bids;
this.project = project;
this.owner = owner;
this.meta64690 = meta64690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64691,meta64690__$1){
var self__ = this;
var _64691__$1 = this;
return (new biomarket.bids.t_biomarket$bids64689(self__.show_bids,self__.project,self__.owner,meta64690__$1));
});

biomarket.bids.t_biomarket$bids64689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64691){
var self__ = this;
var _64691__$1 = this;
return self__.meta64690;
});

biomarket.bids.t_biomarket$bids64689.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids64689.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cp","cp",-678439312),(0)], null);
});

biomarket.bids.t_biomarket$bids64689.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids64689.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64692){
var self__ = this;
var map__64693 = p__64692;
var map__64693__$1 = ((((!((map__64693 == null)))?((((map__64693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64693):map__64693);
var cp = cljs.core.get.call(null,map__64693__$1,new cljs.core.Keyword(null,"cp","cp",-678439312));
var ___$1 = this;
var user = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var fg = ((function (user,___$1,map__64693,map__64693__$1,cp){
return (function (bid_user,text){
if(cljs.core._EQ_.call(null,bid_user,user)){
return biomarket.utilities.color_span.call(null,text,"red");
} else {
return biomarket.utilities.color_span.call(null,text,"green");
}
});})(user,___$1,map__64693,map__64693__$1,cp))
;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project))){
var data = cljs.core.map.call(null,((function (user,fg,___$1,map__64693,map__64693__$1,cp){
return (function (x){
var u = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 3, ["User",fg.call(null,u,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x)))),"Amount",fg.call(null,u,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",fg.call(null,u,biomarket.utilities.ds__GT_date_hour_minute.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(user,fg,___$1,map__64693,map__64693__$1,cp))
,cljs.core.take.call(null,(4),cljs.core.drop.call(null,cp,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)))));
return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12", "style": {"min-height": "200px"}},om.core.build.call(null,biomarket.bids.show_table,data))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},(((cp > (0)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__64693,map__64693__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),(cp - (4)));
});})(data,user,fg,___$1,map__64693,map__64693__$1,cp))
},"Previous"):null)),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right"}},(((cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)) > ((4) + cp)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__64693,map__64693__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),((4) + cp));
});})(data,user,fg,___$1,map__64693,map__64693__$1,cp))
},"Next"):null))));
} else {
return null;
}
});

biomarket.bids.t_biomarket$bids64689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64690","meta64690",441561231,null)], null);
});

biomarket.bids.t_biomarket$bids64689.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64689.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64689";

biomarket.bids.t_biomarket$bids64689.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64689");
});

biomarket.bids.__GT_t_biomarket$bids64689 = (function biomarket$bids$show_bids_$___GT_t_biomarket$bids64689(show_bids__$1,project__$1,owner__$1,meta64690){
return (new biomarket.bids.t_biomarket$bids64689(show_bids__$1,project__$1,owner__$1,meta64690));
});

}

return (new biomarket.bids.t_biomarket$bids64689(biomarket$bids$show_bids,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core._add_method.call(null,biomarket.utilities.bottom,new cljs.core.Keyword(null,"bid-view","bid-view",-1627380909),(function (p){
var links = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"discussion","discussion",-188707284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discussion",biomarket.comments.comments,new cljs.core.Keyword(null,"buser","buser",-940481424).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skills",biomarket.skills.skill_tags,cljs.core.PersistentArrayMap.EMPTY], null)], null);
return React.DOM.div(null,React.DOM.hr(null),om.core.build.call(null,biomarket.utilities.bottom_skel,cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"links","links",-654507394),links)));
}));
biomarket.bids.bid_view_header = (function biomarket$bids$bid_view_header(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64698 = (function (bid_view_header,project,owner,meta64699){
this.bid_view_header = bid_view_header;
this.project = project;
this.owner = owner;
this.meta64699 = meta64699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64700,meta64699__$1){
var self__ = this;
var _64700__$1 = this;
return (new biomarket.bids.t_biomarket$bids64698(self__.bid_view_header,self__.project,self__.owner,meta64699__$1));
});

biomarket.bids.t_biomarket$bids64698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64700){
var self__ = this;
var _64700__$1 = this;
return self__.meta64699;
});

biomarket.bids.t_biomarket$bids64698.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids64698.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},React.DOM.div({"className": "btn-group"},React.DOM.a({"className": "btn btn-default btn-sm", "onClick": ((function (this__36754__auto____$1){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),new cljs.core.Keyword(null,"bid","bid",-1944960257),false], null));
});})(this__36754__auto____$1))
},React.DOM.i({"className": "fa fa-arrow-left", "style": {"padding-right": "10px"}}),"Back to project"),React.DOM.a({"className": "btn btn-primary btn-sm"},"Accept this bid"))),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right"}},biomarket.dropdown.drop_down.call(null,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"bid-show","bid-show",1619367577)))));
});

biomarket.bids.t_biomarket$bids64698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-view-header","bid-view-header",-1229172464,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64699","meta64699",-146485858,null)], null);
});

biomarket.bids.t_biomarket$bids64698.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64698.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64698";

biomarket.bids.t_biomarket$bids64698.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64698");
});

biomarket.bids.__GT_t_biomarket$bids64698 = (function biomarket$bids$bid_view_header_$___GT_t_biomarket$bids64698(bid_view_header__$1,project__$1,owner__$1,meta64699){
return (new biomarket.bids.t_biomarket$bids64698(bid_view_header__$1,project__$1,owner__$1,meta64699));
});

}

return (new biomarket.bids.t_biomarket$bids64698(biomarket$bids$bid_view_header,project,owner,null));
});
biomarket.bids.bid_table = (function biomarket$bids$bid_table(project){
var f = (function (p1__64701_SHARP_){
return biomarket.utilities.color_span.call(null,p1__64701_SHARP_,"green");
});
var bid = new cljs.core.Keyword(null,"show-bid","show-bid",1624255408).cljs$core$IFn$_invoke$arity$1(project);
var data = (function (){var x__26643__auto__ = new cljs.core.PersistentArrayMap(null, 4, ["Amount",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(bid))].join('')),"Basis",f.call(null,new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(project)),"Bidder",f.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(bid)))),"Date",f.call(null,biomarket.utilities.ds__GT_date_hour_minute.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(bid)))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})();
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"tparam","tparam",1161386584),cljs.core.PersistentArrayMap.EMPTY], null));
});
biomarket.bids.bid_view = (function biomarket$bids$bid_view(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64705 = (function (bid_view,project,owner,meta64706){
this.bid_view = bid_view;
this.project = project;
this.owner = owner;
this.meta64706 = meta64706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64707,meta64706__$1){
var self__ = this;
var _64707__$1 = this;
return (new biomarket.bids.t_biomarket$bids64705(self__.bid_view,self__.project,self__.owner,meta64706__$1));
});

biomarket.bids.t_biomarket$bids64705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64707){
var self__ = this;
var _64707__$1 = this;
return self__.meta64706;
});

biomarket.bids.t_biomarket$bids64705.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids64705.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"className": "container-fluid", "style": {"position": "relative"}},React.DOM.div({"className": "panel panel-default"},React.DOM.div({"className": "panel-body", "style": {"min-height": [cljs.core.str(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.project)),cljs.core.str("px")].join('')}},om.core.build.call(null,biomarket.bids.bid_view_header,self__.project),biomarket.bids.bid_table.call(null,self__.project),biomarket.utilities.bottom.call(null,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"buser","buser",-940481424),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-bid","show-bid",1624255408).cljs$core$IFn$_invoke$arity$1(self__.project)),new cljs.core.Keyword(null,"view-type","view-type",-1848894559),new cljs.core.Keyword(null,"bid-view","bid-view",-1627380909))))));
});

biomarket.bids.t_biomarket$bids64705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-view","bid-view",13150618,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64706","meta64706",2003315698,null)], null);
});

biomarket.bids.t_biomarket$bids64705.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64705.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64705";

biomarket.bids.t_biomarket$bids64705.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64705");
});

biomarket.bids.__GT_t_biomarket$bids64705 = (function biomarket$bids$bid_view_$___GT_t_biomarket$bids64705(bid_view__$1,project__$1,owner__$1,meta64706){
return (new biomarket.bids.t_biomarket$bids64705(bid_view__$1,project__$1,owner__$1,meta64706));
});

}

return (new biomarket.bids.t_biomarket$bids64705(biomarket$bids$bid_view,project,owner,null));
});
biomarket.bids.bid_display = (function biomarket$bids$bid_display(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64712 = (function (bid_display,project,owner,meta64713){
this.bid_display = bid_display;
this.project = project;
this.owner = owner;
this.meta64713 = meta64713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64714,meta64713__$1){
var self__ = this;
var _64714__$1 = this;
return (new biomarket.bids.t_biomarket$bids64712(self__.bid_display,self__.project,self__.owner,meta64713__$1));
});

biomarket.bids.t_biomarket$bids64712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64714){
var self__ = this;
var _64714__$1 = this;
return self__.meta64713;
});

biomarket.bids.t_biomarket$bids64712.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids64712.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
var bids = new cljs.core.Keyword(null,"best-bids","best-bids",36573545).cljs$core$IFn$_invoke$arity$1(self__.project);
var basis = new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project);
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.table({"className": "table table-striped table-hover"},cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (bids,basis,pid,this__36754__auto____$1){
return (function (p1__64708_SHARP_){
return React.DOM.tr(null,React.DOM.td(null,React.DOM.span(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__64708_SHARP_)),cljs.core.str(" "),cljs.core.str(basis),cljs.core.str(" from ")].join('')),React.DOM.span(null,React.DOM.a({"href": "#"},new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(p1__64708_SHARP_)))),React.DOM.td(null,React.DOM.a({"className": "btn btn-default btn-sm", "onClick": ((function (bids,basis,pid,this__36754__auto____$1){
return (function (_){
return biomarket.utilities.pub_info.call(null,self__.owner,pid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"bid-show","bid-show",1619367577),new cljs.core.Keyword(null,"bid","bid",-1944960257),p1__64708_SHARP_], null));
});})(bids,basis,pid,this__36754__auto____$1))
},"View")));
});})(bids,basis,pid,this__36754__auto____$1))
,bids)));
});

biomarket.bids.t_biomarket$bids64712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-display","bid-display",851681594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64713","meta64713",-1347331162,null)], null);
});

biomarket.bids.t_biomarket$bids64712.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64712.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64712";

biomarket.bids.t_biomarket$bids64712.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64712");
});

biomarket.bids.__GT_t_biomarket$bids64712 = (function biomarket$bids$bid_display_$___GT_t_biomarket$bids64712(bid_display__$1,project__$1,owner__$1,meta64713){
return (new biomarket.bids.t_biomarket$bids64712(bid_display__$1,project__$1,owner__$1,meta64713));
});

}

return (new biomarket.bids.t_biomarket$bids64712(biomarket$bids$bid_display,project,owner,null));
});
biomarket.bids.bid_manage = (function biomarket$bids$bid_manage(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64721 = (function (bid_manage,project,owner,meta64722){
this.bid_manage = bid_manage;
this.project = project;
this.owner = owner;
this.meta64722 = meta64722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64723,meta64722__$1){
var self__ = this;
var _64723__$1 = this;
return (new biomarket.bids.t_biomarket$bids64721(self__.bid_manage,self__.project,self__.owner,meta64722__$1));
});

biomarket.bids.t_biomarket$bids64721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64723){
var self__ = this;
var _64723__$1 = this;
return self__.meta64722;
});

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,self__.project)], null);
});

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,np));
});

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids64721.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64724){
var self__ = this;
var map__64725 = p__64724;
var map__64725__$1 = ((((!((map__64725 == null)))?((((map__64725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64725):map__64725);
var best_bids = cljs.core.get.call(null,map__64725__$1,new cljs.core.Keyword(null,"best-bids","best-bids",36573545));
var ___$1 = this;
return React.DOM.div({"style": {"padding-top": "20px"}},om.core.build.call(null,biomarket.bids.bid_display,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"best-bids","best-bids",36573545),best_bids)));
});

biomarket.bids.t_biomarket$bids64721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-manage","bid-manage",-398018415,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64722","meta64722",1324047341,null)], null);
});

biomarket.bids.t_biomarket$bids64721.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64721.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64721";

biomarket.bids.t_biomarket$bids64721.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64721");
});

biomarket.bids.__GT_t_biomarket$bids64721 = (function biomarket$bids$bid_manage_$___GT_t_biomarket$bids64721(bid_manage__$1,project__$1,owner__$1,meta64722){
return (new biomarket.bids.t_biomarket$bids64721(bid_manage__$1,project__$1,owner__$1,meta64722));
});

}

return (new biomarket.bids.t_biomarket$bids64721(biomarket$bids$bid_manage,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.bids.current_bid = (function biomarket$bids$current_bid(bids){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,bids));
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
return new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(r);
} else {
return null;
}
});
biomarket.bids.button_func = (function biomarket$bids$button_func(owner){
return biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579))),new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.get_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null));
});
biomarket.bids.button_state = (function biomarket$bids$button_state(owner){
var cb = biomarket.bids.current_bid.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579))));
var ab = parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))));
if((cljs.core.not.call(null,cb)) && (!(cljs.core._EQ_.call(null,ab,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary btn-sm",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Submit"], null);
} else {
if(cljs.core._EQ_.call(null,ab,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary btn-sm",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)),"Update"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary btn-sm",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Update"], null);

}
}
});
biomarket.bids.form_state = (function biomarket$bids$form_state(owner){
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var cb = biomarket.bids.current_bid.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579))));
var ab = parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount));
if((cljs.core._EQ_.call(null,ab,cb)) || (cljs.core._EQ_.call(null,ab,(0)))){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"form-inline",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),((function (amount,cb,ab){
return (function (_){
return false;
});})(amount,cb,ab))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (amount,cb,ab){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.which)){
return false;
} else {
return null;
}
});})(amount,cb,ab))
], null));
} else {
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"form-inline",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),((function (amount,cb,ab){
return (function (_){
return false;
});})(amount,cb,ab))
,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),((function (amount,cb,ab){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.which)){
return biomarket.bids.button_func.call(null,owner);
} else {
return null;
}
});})(amount,cb,ab))
], null));
}
});
biomarket.bids.inputs = (function biomarket$bids$inputs(owner){
var ub = cljs.core.seq.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.not.call(null,ub))?"0":biomarket.bids.current_bid.call(null,ub)),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"bid",new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.not.call(null,ub))?"Enter a bid:":"Your current bid:"),new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"addon","addon",931813532),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579))),new cljs.core.Keyword(null,"before","before",-1633692388),"$"], null)], null);
});
biomarket.bids.bid_widget = (function biomarket$bids$bid_widget(project,owner){
if(typeof biomarket.bids.t_biomarket$bids64737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids64737 = (function (bid_widget,project,owner,meta64738){
this.bid_widget = bid_widget;
this.project = project;
this.owner = owner;
this.meta64738 = meta64738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids64737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64739,meta64738__$1){
var self__ = this;
var _64739__$1 = this;
return (new biomarket.bids.t_biomarket$bids64737(self__.bid_widget,self__.project,self__.owner,meta64738__$1));
});

biomarket.bids.t_biomarket$bids64737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64739){
var self__ = this;
var _64739__$1 = this;
return self__.meta64738;
});

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inputs","inputs",865803858),null,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),null,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),null,new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.gensym.call(null)], null);
});

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),np);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));
});

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillMount$ = true;

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));

return biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),((function (___$1){
return (function (o,p__64740){
var map__64741 = p__64740;
var map__64741__$1 = ((((!((map__64741 == null)))?((((map__64741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64741):map__64741);
var data = cljs.core.get.call(null,map__64741__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,o));

return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,o));
});})(___$1))
);
});

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillUnmount$ = true;

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)));
});

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids64737.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__64743){
var self__ = this;
var map__64744 = p__64743;
var map__64744__$1 = ((((!((map__64744 == null)))?((((map__64744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64744):map__64744);
var inputs = cljs.core.get.call(null,map__64744__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bid = cljs.core.get.call(null,map__64744__$1,new cljs.core.Keyword(null,"bid","bid",-1944960257));
var button_state = cljs.core.get.call(null,map__64744__$1,new cljs.core.Keyword(null,"button-state","button-state",-1211301176));
var form_state = cljs.core.get.call(null,map__64744__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var ___$1 = this;
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inputs);
return React.DOM.div(null,React.DOM.hr(null),React.DOM.div({"style": {"text-align": "center"}},React.DOM.form(form_state,React.DOM.div({"className": "form-group"},React.DOM.label({"for": "bid", "style": {"padding-right": "20px"}},"Your current bid:"),React.DOM.div({"className": "input-group input-group-sm"},React.DOM.span({"className": "input-group-addon"},"$"),om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount), "ref": "bid", "type": new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(amount), "onChange": ((function (amount,___$1,map__64744,map__64744__$1,inputs,bid,button_state,form_state){
return (function (p1__64727_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),new cljs.core.Keyword(null,"amount","amount",364489504),amount,p1__64727_SHARP_);
});})(amount,___$1,map__64744,map__64744__$1,inputs,bid,button_state,form_state))
}),React.DOM.span({"className": "input-group-addon"},new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project))),cljs.core.apply.call(null,om.dom.a,button_state)))));
});

biomarket.bids.t_biomarket$bids64737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta64738","meta64738",1711374911,null)], null);
});

biomarket.bids.t_biomarket$bids64737.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids64737.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids64737";

biomarket.bids.t_biomarket$bids64737.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.bids/t_biomarket$bids64737");
});

biomarket.bids.__GT_t_biomarket$bids64737 = (function biomarket$bids$bid_widget_$___GT_t_biomarket$bids64737(bid_widget__$1,project__$1,owner__$1,meta64738){
return (new biomarket.bids.t_biomarket$bids64737(bid_widget__$1,project__$1,owner__$1,meta64738));
});

}

return (new biomarket.bids.t_biomarket$bids64737(biomarket$bids$bid_widget,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bids.js.map