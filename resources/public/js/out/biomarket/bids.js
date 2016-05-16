// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.bids');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('clojure.string');
goog.require('cljs_time.format');
biomarket.bids.submit_bid = (function biomarket$bids$submit_bid(owner,bid,pid){
var h = (function (p__133344){
var map__133345 = p__133344;
var map__133345__$1 = ((((!((map__133345 == null)))?((((map__133345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133345):map__133345);
var status = cljs.core.get.call(null,map__133345__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__133345__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/save-bid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(bid)], null),h);
});
biomarket.bids.bid_server_call = (function biomarket$bids$bid_server_call(owner,pid){
var h = (function (p__133350){
var map__133351 = p__133350;
var map__133351__$1 = ((((!((map__133351 == null)))?((((map__133351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133351):map__133351);
var status = cljs.core.get.call(null,map__133351__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__133351__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/bids",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid], null),h);
});
biomarket.bids.show_bids = (function biomarket$bids$show_bids(project,owner){
if(typeof biomarket.bids.t_biomarket$bids133356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133356 = (function (show_bids,project,owner,meta133357){
this.show_bids = show_bids;
this.project = project;
this.owner = owner;
this.meta133357 = meta133357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133358,meta133357__$1){
var self__ = this;
var _133358__$1 = this;
return (new biomarket.bids.t_biomarket$bids133356(self__.show_bids,self__.project,self__.owner,meta133357__$1));
});

biomarket.bids.t_biomarket$bids133356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133358){
var self__ = this;
var _133358__$1 = this;
return self__.meta133357;
});

biomarket.bids.t_biomarket$bids133356.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids133356.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
var user = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var fg = ((function (user,this__25716__auto____$1){
return (function (bid_user,text){
if(cljs.core._EQ_.call(null,bid_user,user)){
return biomarket.utilities.color_span.call(null,text,"red");
} else {
return biomarket.utilities.color_span.call(null,text,"green");
}
});})(user,this__25716__auto____$1))
;
var data = cljs.core.map.call(null,((function (user,fg,this__25716__auto____$1){
return (function (x){
var u = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 3, ["User",fg.call(null,u,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x)),"Amount",fg.call(null,u,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",fg.call(null,u,biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(user,fg,this__25716__auto____$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)));
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"striped","striped",-628686784),true,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"hover","hover",-341141711),true], null));
});

biomarket.bids.t_biomarket$bids133356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133357","meta133357",-87137654,null)], null);
});

biomarket.bids.t_biomarket$bids133356.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133356.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133356";

biomarket.bids.t_biomarket$bids133356.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.bids/t_biomarket$bids133356");
});

biomarket.bids.__GT_t_biomarket$bids133356 = (function biomarket$bids$show_bids_$___GT_t_biomarket$bids133356(show_bids__$1,project__$1,owner__$1,meta133357){
return (new biomarket.bids.t_biomarket$bids133356(show_bids__$1,project__$1,owner__$1,meta133357));
});

}

return (new biomarket.bids.t_biomarket$bids133356(biomarket$bids$show_bids,project,owner,null));
});
biomarket.bids.bid_history = (function biomarket$bids$bid_history(bids){
if(typeof biomarket.bids.t_biomarket$bids133363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133363 = (function (bid_history,bids,meta133364){
this.bid_history = bid_history;
this.bids = bids;
this.meta133364 = meta133364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133365,meta133364__$1){
var self__ = this;
var _133365__$1 = this;
return (new biomarket.bids.t_biomarket$bids133363(self__.bid_history,self__.bids,meta133364__$1));
});

biomarket.bids.t_biomarket$bids133363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133365){
var self__ = this;
var _133365__$1 = this;
return self__.meta133364;
});

biomarket.bids.t_biomarket$bids133363.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids133363.prototype.om$core$IRender$render$arity$1 = (function (this__25716__auto__){
var self__ = this;
var this__25716__auto____$1 = this;
return React.DOM.div({"style": {"text-align": "center"}},React.DOM.label(null,"Bid history"),((cljs.core.not.call(null,cljs.core.seq.call(null,self__.bids)))?React.DOM.div({"className": "well"},"No bid history yet"):(function (){var f = ((function (this__25716__auto____$1){
return (function (p1__133359_SHARP_){
return React.DOM.span({"style": {"font-size": "small"}},p1__133359_SHARP_);
});})(this__25716__auto____$1))
;
var data = cljs.core.map.call(null,((function (f,this__25716__auto____$1){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, ["Amount",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",f.call(null,biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(f,this__25716__auto____$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,self__.bids));
return om.core.build.call(null,biomarket.utilities.fixed_head_table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"tparams","tparams",-275294317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"table table-striped table-hover"], null)], null));
})()));
});

biomarket.bids.t_biomarket$bids133363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-history","bid-history",-82015691,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bids","bids",147336875,null)], null)))], null)),new cljs.core.Symbol(null,"bids","bids",147336875,null),new cljs.core.Symbol(null,"meta133364","meta133364",34950589,null)], null);
});

biomarket.bids.t_biomarket$bids133363.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133363.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133363";

biomarket.bids.t_biomarket$bids133363.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.bids/t_biomarket$bids133363");
});

biomarket.bids.__GT_t_biomarket$bids133363 = (function biomarket$bids$bid_history_$___GT_t_biomarket$bids133363(bid_history__$1,bids__$1,meta133364){
return (new biomarket.bids.t_biomarket$bids133363(bid_history__$1,bids__$1,meta133364));
});

}

return (new biomarket.bids.t_biomarket$bids133363(biomarket$bids$bid_history,bids,null));
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
return biomarket.utilities.pub_info.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))], null));
});
biomarket.bids.button_state = (function biomarket$bids$button_state(owner){
var cb = biomarket.bids.current_bid.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652))));
var ab = parseFloat(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)))));
if(cljs.core.not.call(null,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Submit bid"], null);
} else {
if(cljs.core._EQ_.call(null,ab,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)),"Update bid"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Update bid"], null);

}
}
});
biomarket.bids.reset_inputs = (function biomarket$bids$reset_inputs(owner){
var ub = cljs.core.seq.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.not.call(null,ub))?"0":new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,ub)))),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"bid",new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.not.call(null,ub))?"Enter a bid:":"Your current bid:"),new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"addon","addon",931813532),new cljs.core.Keyword(null,"after","after",594996914),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339)),new cljs.core.Keyword(null,"before","before",-1633692388),"$"], null)], null);
});
biomarket.bids.bid_widget = (function biomarket$bids$bid_widget(project,owner){
if(typeof biomarket.bids.t_biomarket$bids133376 !== 'undefined'){
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
biomarket.bids.t_biomarket$bids133376 = (function (bid_widget,project,owner,meta133377){
this.bid_widget = bid_widget;
this.project = project;
this.owner = owner;
this.meta133377 = meta133377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133378,meta133377__$1){
var self__ = this;
var _133378__$1 = this;
return (new biomarket.bids.t_biomarket$bids133376(self__.bid_widget,self__.project,self__.owner,meta133377__$1));
});

biomarket.bids.t_biomarket$bids133376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133378){
var self__ = this;
var _133378__$1 = this;
return self__.meta133377;
});

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inputs","inputs",865803858),null,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),null,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"bids","bids",-1493194652),null,new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.gensym.call(null)], null);
});

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),cljs.core.select_keys.call(null,np,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-bids","user-bids",-736079184),new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.reset_inputs.call(null,self__.owner));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));
});

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillMount$ = true;

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),cljs.core.select_keys.call(null,self__.project,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-bids","user-bids",-736079184),new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)));

return biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),((function (___$1){
return (function (o,p__133379){
var map__133380 = p__133379;
var map__133380__$1 = ((((!((map__133380 == null)))?((((map__133380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133380):map__133380);
var data = cljs.core.get.call(null,map__133380__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,o));
});})(___$1))
);
});

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillUnmount$ = true;

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)));
});

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids133376.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133382){
var self__ = this;
var map__133383 = p__133382;
var map__133383__$1 = ((((!((map__133383 == null)))?((((map__133383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133383):map__133383);
var inputs = cljs.core.get.call(null,map__133383__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bid = cljs.core.get.call(null,map__133383__$1,new cljs.core.Keyword(null,"bid","bid",-1944960257));
var button_state = cljs.core.get.call(null,map__133383__$1,new cljs.core.Keyword(null,"button-state","button-state",-1211301176));
var ___$1 = this;
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inputs);
return React.DOM.form({"className": "form-inline"},React.DOM.div({"className": "form-group"},React.DOM.div({"className": "input-group"},React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(amount)),om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount), "type": new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(amount), "onChange": ((function (amount,___$1,map__133383,map__133383__$1,inputs,bid,button_state){
return (function (p1__133366_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,bid,new cljs.core.Keyword(null,"amount","amount",364489504),amount,p1__133366_SHARP_);
});})(amount,___$1,map__133383,map__133383__$1,inputs,bid,button_state))
}),React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(amount))),cljs.core.apply.call(null,om.dom.a,button_state),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)))?React.DOM.a({"className": "btn btn-primary"},"Delete bid"):null)));
});

biomarket.bids.t_biomarket$bids133376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133377","meta133377",1066009613,null)], null);
});

biomarket.bids.t_biomarket$bids133376.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133376.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133376";

biomarket.bids.t_biomarket$bids133376.cljs$lang$ctorPrWriter = (function (this__23363__auto__,writer__23364__auto__,opt__23365__auto__){
return cljs.core._write.call(null,writer__23364__auto__,"biomarket.bids/t_biomarket$bids133376");
});

biomarket.bids.__GT_t_biomarket$bids133376 = (function biomarket$bids$bid_widget_$___GT_t_biomarket$bids133376(bid_widget__$1,project__$1,owner__$1,meta133377){
return (new biomarket.bids.t_biomarket$bids133376(bid_widget__$1,project__$1,owner__$1,meta133377));
});

}

return (new biomarket.bids.t_biomarket$bids133376(biomarket$bids$bid_widget,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bids.js.map