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
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.map.call(null,(function (p1__157759_SHARP_){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__157759_SHARP_));
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),bids)))));
});
biomarket.bids.sort_best_bids = (function biomarket$bids$sort_best_bids(project){
return cljs.core.sort_by.call(null,(function (p1__157760_SHARP_){
return new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__157760_SHARP_);
}),cljs.core._LT_,cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,(function (p1__157761_SHARP_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__157761_SHARP_);
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))))));
});
biomarket.bids.bid_bbutton = (function biomarket$bids$bid_bbutton(bstate,owner){
if(typeof biomarket.bids.t_biomarket$bids157765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids157765 = (function (bid_bbutton,bstate,owner,meta157766){
this.bid_bbutton = bid_bbutton;
this.bstate = bstate;
this.owner = owner;
this.meta157766 = meta157766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157767,meta157766__$1){
var self__ = this;
var _157767__$1 = this;
return (new biomarket.bids.t_biomarket$bids157765(self__.bid_bbutton,self__.bstate,self__.owner,meta157766__$1));
});

biomarket.bids.t_biomarket$bids157765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157767){
var self__ = this;
var _157767__$1 = this;
return self__.meta157766;
});

biomarket.bids.t_biomarket$bids157765.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids157765.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.a(self__.bstate,"Show bids");
});

biomarket.bids.t_biomarket$bids157765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-bbutton","bid-bbutton",1355451439,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bstate","bstate",911061612,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"bstate","bstate",911061612,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157766","meta157766",1397812713,null)], null);
});

biomarket.bids.t_biomarket$bids157765.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157765.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157765";

biomarket.bids.t_biomarket$bids157765.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157765");
});

biomarket.bids.__GT_t_biomarket$bids157765 = (function biomarket$bids$bid_bbutton_$___GT_t_biomarket$bids157765(bid_bbutton__$1,bstate__$1,owner__$1,meta157766){
return (new biomarket.bids.t_biomarket$bids157765(bid_bbutton__$1,bstate__$1,owner__$1,meta157766));
});

}

return (new biomarket.bids.t_biomarket$bids157765(biomarket$bids$bid_bbutton,bstate,owner,null));
});
biomarket.bids.show_table = (function biomarket$bids$show_table(data,owner){
if(typeof biomarket.bids.t_biomarket$bids157773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids157773 = (function (show_table,data,owner,meta157774){
this.show_table = show_table;
this.data = data;
this.owner = owner;
this.meta157774 = meta157774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157775,meta157774__$1){
var self__ = this;
var _157775__$1 = this;
return (new biomarket.bids.t_biomarket$bids157773(self__.show_table,self__.data,self__.owner,meta157774__$1));
});

biomarket.bids.t_biomarket$bids157773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157775){
var self__ = this;
var _157775__$1 = this;
return self__.meta157774;
});

biomarket.bids.t_biomarket$bids157773.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids157773.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.table({"className": "table table-striped table hover"},React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__157768_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__157768_SHARP_);
});})(this__36785__auto____$1))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__157769_SHARP_){
return React.DOM.td({"style": {"text-align": "center", "border": "0"}},p1__157769_SHARP_);
});})(this__36785__auto____$1))
,cljs.core.vals.call(null,x)));
});})(this__36785__auto____$1))
,self__.data)));
});

biomarket.bids.t_biomarket$bids157773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-table","show-table",-2144991522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157774","meta157774",346057444,null)], null);
});

biomarket.bids.t_biomarket$bids157773.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157773.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157773";

biomarket.bids.t_biomarket$bids157773.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157773");
});

biomarket.bids.__GT_t_biomarket$bids157773 = (function biomarket$bids$show_table_$___GT_t_biomarket$bids157773(show_table__$1,data__$1,owner__$1,meta157774){
return (new biomarket.bids.t_biomarket$bids157773(show_table__$1,data__$1,owner__$1,meta157774));
});

}

return (new biomarket.bids.t_biomarket$bids157773(biomarket$bids$show_table,data,owner,null));
});
biomarket.bids.show_bids = (function biomarket$bids$show_bids(project,owner){
if(typeof biomarket.bids.t_biomarket$bids157782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids157782 = (function (show_bids,project,owner,meta157783){
this.show_bids = show_bids;
this.project = project;
this.owner = owner;
this.meta157783 = meta157783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157784,meta157783__$1){
var self__ = this;
var _157784__$1 = this;
return (new biomarket.bids.t_biomarket$bids157782(self__.show_bids,self__.project,self__.owner,meta157783__$1));
});

biomarket.bids.t_biomarket$bids157782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157784){
var self__ = this;
var _157784__$1 = this;
return self__.meta157783;
});

biomarket.bids.t_biomarket$bids157782.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids157782.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cp","cp",-678439312),(0)], null);
});

biomarket.bids.t_biomarket$bids157782.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids157782.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__157785){
var self__ = this;
var map__157786 = p__157785;
var map__157786__$1 = ((((!((map__157786 == null)))?((((map__157786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157786):map__157786);
var cp = cljs.core.get.call(null,map__157786__$1,new cljs.core.Keyword(null,"cp","cp",-678439312));
var ___$1 = this;
var user = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var fg = ((function (user,___$1,map__157786,map__157786__$1,cp){
return (function (bid_user,text){
if(cljs.core._EQ_.call(null,bid_user,user)){
return biomarket.utilities.color_span.call(null,text,"red");
} else {
return biomarket.utilities.color_span.call(null,text,"green");
}
});})(user,___$1,map__157786,map__157786__$1,cp))
;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project))){
var data = cljs.core.map.call(null,((function (user,fg,___$1,map__157786,map__157786__$1,cp){
return (function (x){
var u = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 3, ["User",fg.call(null,u,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x)))),"Amount",fg.call(null,u,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",fg.call(null,u,biomarket.utilities.ds__GT_date_hour_minute.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(user,fg,___$1,map__157786,map__157786__$1,cp))
,cljs.core.take.call(null,(4),cljs.core.drop.call(null,cp,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)))));
return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12", "style": {"min-height": "200px"}},om.core.build.call(null,biomarket.bids.show_table,data))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},(((cp > (0)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__157786,map__157786__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),(cp - (4)));
});})(data,user,fg,___$1,map__157786,map__157786__$1,cp))
},"Previous"):null)),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right"}},(((cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)) > ((4) + cp)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__157786,map__157786__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),((4) + cp));
});})(data,user,fg,___$1,map__157786,map__157786__$1,cp))
},"Next"):null))));
} else {
return null;
}
});

biomarket.bids.t_biomarket$bids157782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157783","meta157783",1694625659,null)], null);
});

biomarket.bids.t_biomarket$bids157782.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157782.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157782";

biomarket.bids.t_biomarket$bids157782.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157782");
});

biomarket.bids.__GT_t_biomarket$bids157782 = (function biomarket$bids$show_bids_$___GT_t_biomarket$bids157782(show_bids__$1,project__$1,owner__$1,meta157783){
return (new biomarket.bids.t_biomarket$bids157782(show_bids__$1,project__$1,owner__$1,meta157783));
});

}

return (new biomarket.bids.t_biomarket$bids157782(biomarket$bids$show_bids,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.bids.bid_display = (function biomarket$bids$bid_display(project,owner){
if(typeof biomarket.bids.t_biomarket$bids157797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids157797 = (function (bid_display,project,owner,meta157798){
this.bid_display = bid_display;
this.project = project;
this.owner = owner;
this.meta157798 = meta157798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157799,meta157798__$1){
var self__ = this;
var _157799__$1 = this;
return (new biomarket.bids.t_biomarket$bids157797(self__.bid_display,self__.project,self__.owner,meta157798__$1));
});

biomarket.bids.t_biomarket$bids157797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157799){
var self__ = this;
var _157799__$1 = this;
return self__.meta157798;
});

biomarket.bids.t_biomarket$bids157797.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids157797.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"bg","bg",-206688421),((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(self__.project),(2))))?"white":"#E7E7E7")], null);
});

biomarket.bids.t_biomarket$bids157797.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids157797.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__157800){
var self__ = this;
var map__157801 = p__157800;
var map__157801__$1 = ((((!((map__157801 == null)))?((((map__157801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157801):map__157801);
var visible = cljs.core.get.call(null,map__157801__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var bg = cljs.core.get.call(null,map__157801__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var ___$1 = this;
biomarket.utilities.log.call(null,cljs.core.mod.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(self__.project),(2)));

var bid = new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(self__.project);
var basis = new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project);
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div(null,React.DOM.div({"className": "row", "style": {"background-color": bg, "padding": "5px"}},React.DOM.div({"className": "col-md-6", "style": {"text-align": "left", "height": "40px", "line-height": "40px"}},React.DOM.span(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(bid)),cljs.core.str(" "),cljs.core.str(basis),cljs.core.str(" from ")].join('')),React.DOM.span(null,React.DOM.a({"href": "#"},new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(bid)))),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right", "height": "40px", "line-height": "40px"}},React.DOM.div({"className": "btn-group"},React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"discussion","discussion",-188707284)))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg){
return (function (){
if(cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"discussion","discussion",-188707284))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
}
});})(bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg))
},"Discussion"),React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"skills","skills",958701426)))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg){
return (function (){
if(cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"skills","skills",958701426))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"skills","skills",958701426));
}
});})(bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg))
},"Skills match"),React.DOM.a({"className": "btn btn-primary btn-sm", "onClick": ((function (bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg){
return (function (x){
return null;
});})(bid,basis,pid,___$1,map__157801,map__157801__$1,visible,bg))
},"Accept this bid")))),(cljs.core.truth_(visible)?React.DOM.div({"className": "row", "style": {"background-color": bg, "padding": "5px"}},React.DOM.div({"className": "col-md-12"},(function (){var pred__157803 = cljs.core._EQ_;
var expr__157804 = visible;
if(cljs.core.truth_(pred__157803.call(null,new cljs.core.Keyword(null,"discussion","discussion",-188707284),expr__157804))){
return om.core.build.call(null,biomarket.comments.comments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(bid)], null));
} else {
if(cljs.core.truth_(pred__157803.call(null,new cljs.core.Keyword(null,"skills","skills",958701426),expr__157804))){
return om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return null;
}
}
})())):null));
});

biomarket.bids.t_biomarket$bids157797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-display","bid-display",851681594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157798","meta157798",1515752515,null)], null);
});

biomarket.bids.t_biomarket$bids157797.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157797.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157797";

biomarket.bids.t_biomarket$bids157797.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157797");
});

biomarket.bids.__GT_t_biomarket$bids157797 = (function biomarket$bids$bid_display_$___GT_t_biomarket$bids157797(bid_display__$1,project__$1,owner__$1,meta157798){
return (new biomarket.bids.t_biomarket$bids157797(bid_display__$1,project__$1,owner__$1,meta157798));
});

}

return (new biomarket.bids.t_biomarket$bids157797(biomarket$bids$bid_display,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.bids.bid_manage = (function biomarket$bids$bid_manage(project,owner){
if(typeof biomarket.bids.t_biomarket$bids157813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids157813 = (function (bid_manage,project,owner,meta157814){
this.bid_manage = bid_manage;
this.project = project;
this.owner = owner;
this.meta157814 = meta157814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157815,meta157814__$1){
var self__ = this;
var _157815__$1 = this;
return (new biomarket.bids.t_biomarket$bids157813(self__.bid_manage,self__.project,self__.owner,meta157814__$1));
});

biomarket.bids.t_biomarket$bids157813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157815){
var self__ = this;
var _157815__$1 = this;
return self__.meta157814;
});

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,self__.project),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.call(null,(0))], null);
});

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,np));
});

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids157813.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__157816){
var self__ = this;
var map__157817 = p__157816;
var map__157817__$1 = ((((!((map__157817 == null)))?((((map__157817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157817):map__157817);
var best_bids = cljs.core.get.call(null,map__157817__$1,new cljs.core.Keyword(null,"best-bids","best-bids",36573545));
var counter = cljs.core.get.call(null,map__157817__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "container-fluid", "style": {"padding-top": "20px"}},cljs.core.map.call(null,((function (___$1,map__157817,map__157817__$1,best_bids,counter){
return (function (p1__157806_SHARP_){
return om.core.build.call(null,biomarket.bids.bid_display,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"bid","bid",-1944960257),p1__157806_SHARP_,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.swap_BANG_.call(null,counter,cljs.core.inc)));
});})(___$1,map__157817,map__157817__$1,best_bids,counter))
,best_bids));
});

biomarket.bids.t_biomarket$bids157813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-manage","bid-manage",-398018415,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157814","meta157814",814873614,null)], null);
});

biomarket.bids.t_biomarket$bids157813.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157813.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157813";

biomarket.bids.t_biomarket$bids157813.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157813");
});

biomarket.bids.__GT_t_biomarket$bids157813 = (function biomarket$bids$bid_manage_$___GT_t_biomarket$bids157813(bid_manage__$1,project__$1,owner__$1,meta157814){
return (new biomarket.bids.t_biomarket$bids157813(bid_manage__$1,project__$1,owner__$1,meta157814));
});

}

return (new biomarket.bids.t_biomarket$bids157813(biomarket$bids$bid_manage,project,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(cljs.core.not.call(null,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Make a bid"], null);
} else {
if(cljs.core._EQ_.call(null,ab,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)),"Update Bid"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Update Bid"], null);

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
if(typeof biomarket.bids.t_biomarket$bids157829 !== 'undefined'){
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
biomarket.bids.t_biomarket$bids157829 = (function (bid_widget,project,owner,meta157830){
this.bid_widget = bid_widget;
this.project = project;
this.owner = owner;
this.meta157830 = meta157830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids157829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157831,meta157830__$1){
var self__ = this;
var _157831__$1 = this;
return (new biomarket.bids.t_biomarket$bids157829(self__.bid_widget,self__.project,self__.owner,meta157830__$1));
});

biomarket.bids.t_biomarket$bids157829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157831){
var self__ = this;
var _157831__$1 = this;
return self__.meta157830;
});

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inputs","inputs",865803858),null,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),null,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),null,new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.gensym.call(null)], null);
});

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),np);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));
});

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillMount$ = true;

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));

return biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),((function (___$1){
return (function (o,p__157832){
var map__157833 = p__157832;
var map__157833__$1 = ((((!((map__157833 == null)))?((((map__157833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157833):map__157833);
var data = cljs.core.get.call(null,map__157833__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,o));

return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,o));
});})(___$1))
);
});

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillUnmount$ = true;

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)));
});

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids157829.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__157835){
var self__ = this;
var map__157836 = p__157835;
var map__157836__$1 = ((((!((map__157836 == null)))?((((map__157836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157836):map__157836);
var inputs = cljs.core.get.call(null,map__157836__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bid = cljs.core.get.call(null,map__157836__$1,new cljs.core.Keyword(null,"bid","bid",-1944960257));
var button_state = cljs.core.get.call(null,map__157836__$1,new cljs.core.Keyword(null,"button-state","button-state",-1211301176));
var form_state = cljs.core.get.call(null,map__157836__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var ___$1 = this;
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inputs);
return React.DOM.div({"style": {"text-align": "right"}},React.DOM.form(form_state,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "input-group"},React.DOM.div({"className": "input-group-addon"},"$"),om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount), "ref": "bid", "type": new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(amount), "onChange": ((function (amount,___$1,map__157836,map__157836__$1,inputs,bid,button_state,form_state){
return (function (p1__157819_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),new cljs.core.Keyword(null,"amount","amount",364489504),amount,p1__157819_SHARP_);
});})(amount,___$1,map__157836,map__157836__$1,inputs,bid,button_state,form_state))
}),React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project)))),cljs.core.apply.call(null,om.dom.a,button_state)));
});

biomarket.bids.t_biomarket$bids157829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157830","meta157830",1127643797,null)], null);
});

biomarket.bids.t_biomarket$bids157829.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids157829.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids157829";

biomarket.bids.t_biomarket$bids157829.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.bids/t_biomarket$bids157829");
});

biomarket.bids.__GT_t_biomarket$bids157829 = (function biomarket$bids$bid_widget_$___GT_t_biomarket$bids157829(bid_widget__$1,project__$1,owner__$1,meta157830){
return (new biomarket.bids.t_biomarket$bids157829(bid_widget__$1,project__$1,owner__$1,meta157830));
});

}

return (new biomarket.bids.t_biomarket$bids157829(biomarket$bids$bid_widget,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bids.js.map