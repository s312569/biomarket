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
var h = (function (p__32050){
var map__32051 = p__32050;
var map__32051__$1 = ((((!((map__32051 == null)))?((((map__32051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32051):map__32051);
var status = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32051__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/save-bid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(bid)], null),h);
});
biomarket.bids.bid_server_call = (function biomarket$bids$bid_server_call(owner,pid){
var h = (function (p__32056){
var map__32057 = p__32056;
var map__32057__$1 = ((((!((map__32057 == null)))?((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);
var status = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var result = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core._EQ_.call(null,"success",status)){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),result);
} else {
return null;
}
});
return biomarket.utilities.post_params.call(null,"/bids",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),pid], null),h);
});
biomarket.bids.show_bids = (function biomarket$bids$show_bids(project,owner){
if(typeof biomarket.bids.t_biomarket$bids32062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids32062 = (function (show_bids,project,owner,meta32063){
this.show_bids = show_bids;
this.project = project;
this.owner = owner;
this.meta32063 = meta32063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids32062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32064,meta32063__$1){
var self__ = this;
var _32064__$1 = this;
return (new biomarket.bids.t_biomarket$bids32062(self__.show_bids,self__.project,self__.owner,meta32063__$1));
});

biomarket.bids.t_biomarket$bids32062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32064){
var self__ = this;
var _32064__$1 = this;
return self__.meta32063;
});

biomarket.bids.t_biomarket$bids32062.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids32062.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
var user = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var fg = ((function (user,this__28640__auto____$1){
return (function (bid_user,text){
if(cljs.core._EQ_.call(null,bid_user,user)){
return biomarket.utilities.color_span.call(null,text,"red");
} else {
return biomarket.utilities.color_span.call(null,text,"green");
}
});})(user,this__28640__auto____$1))
;
var data = cljs.core.map.call(null,((function (user,fg,this__28640__auto____$1){
return (function (x){
var u = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 3, ["User",fg.call(null,u,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x)),"Amount",fg.call(null,u,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",fg.call(null,u,biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(user,fg,this__28640__auto____$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)));
return om.core.build.call(null,biomarket.utilities.make_a_table,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"striped","striped",-628686784),true,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"hover","hover",-341141711),true], null));
});

biomarket.bids.t_biomarket$bids32062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32063","meta32063",-1052187554,null)], null);
});

biomarket.bids.t_biomarket$bids32062.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids32062.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids32062";

biomarket.bids.t_biomarket$bids32062.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.bids/t_biomarket$bids32062");
});

biomarket.bids.__GT_t_biomarket$bids32062 = (function biomarket$bids$show_bids_$___GT_t_biomarket$bids32062(show_bids__$1,project__$1,owner__$1,meta32063){
return (new biomarket.bids.t_biomarket$bids32062(show_bids__$1,project__$1,owner__$1,meta32063));
});

}

return (new biomarket.bids.t_biomarket$bids32062(biomarket$bids$show_bids,project,owner,null));
});
biomarket.bids.bid_history = (function biomarket$bids$bid_history(bids){
if(typeof biomarket.bids.t_biomarket$bids32069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids32069 = (function (bid_history,bids,meta32070){
this.bid_history = bid_history;
this.bids = bids;
this.meta32070 = meta32070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids32069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32071,meta32070__$1){
var self__ = this;
var _32071__$1 = this;
return (new biomarket.bids.t_biomarket$bids32069(self__.bid_history,self__.bids,meta32070__$1));
});

biomarket.bids.t_biomarket$bids32069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32071){
var self__ = this;
var _32071__$1 = this;
return self__.meta32070;
});

biomarket.bids.t_biomarket$bids32069.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids32069.prototype.om$core$IRender$render$arity$1 = (function (this__28640__auto__){
var self__ = this;
var this__28640__auto____$1 = this;
return React.DOM.div({"style": {"text-align": "center"}},React.DOM.label(null,"Bid history"),((cljs.core.not.call(null,cljs.core.seq.call(null,self__.bids)))?React.DOM.div({"className": "well"},"No bid history yet"):(function (){var f = ((function (this__28640__auto____$1){
return (function (p1__32065_SHARP_){
return React.DOM.span({"style": {"font-size": "small"}},p1__32065_SHARP_);
});})(this__28640__auto____$1))
;
var data = cljs.core.map.call(null,((function (f,this__28640__auto____$1){
return (function (x){
return new cljs.core.PersistentArrayMap(null, 2, ["Amount",f.call(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",f.call(null,biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(f,this__28640__auto____$1))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,self__.bids));
return om.core.build.call(null,biomarket.utilities.fixed_head_table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"tparams","tparams",-275294317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"table table-striped table-hover"], null)], null));
})()));
});

biomarket.bids.t_biomarket$bids32069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-history","bid-history",-82015691,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bids","bids",147336875,null)], null)))], null)),new cljs.core.Symbol(null,"bids","bids",147336875,null),new cljs.core.Symbol(null,"meta32070","meta32070",-1303904236,null)], null);
});

biomarket.bids.t_biomarket$bids32069.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids32069.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids32069";

biomarket.bids.t_biomarket$bids32069.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.bids/t_biomarket$bids32069");
});

biomarket.bids.__GT_t_biomarket$bids32069 = (function biomarket$bids$bid_history_$___GT_t_biomarket$bids32069(bid_history__$1,bids__$1,meta32070){
return (new biomarket.bids.t_biomarket$bids32069(bid_history__$1,bids__$1,meta32070));
});

}

return (new biomarket.bids.t_biomarket$bids32069(biomarket$bids$bid_history,bids,null));
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
if((cljs.core.not.call(null,cb)) && (!(cljs.core._EQ_.call(null,ab,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Submit"], null);
} else {
if(cljs.core._EQ_.call(null,ab,cb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled"], null)),"Update"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (cb,ab){
return (function (){
return biomarket.bids.button_func.call(null,owner);
});})(cb,ab))
], null)),"Update"], null);

}
}
});
biomarket.bids.form_state = (function biomarket$bids$form_state(owner){
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var cb = biomarket.bids.current_bid.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652))));
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
biomarket.bids.reset_inputs = (function biomarket$bids$reset_inputs(owner){
var ub = cljs.core.seq.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bids","bids",-1493194652))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"value","value",305978217),((cljs.core.not.call(null,ub))?"0":new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,ub)))),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"name","name",1843675177),"bid",new cljs.core.Keyword(null,"title","title",636505583),((cljs.core.not.call(null,ub))?"Enter a bid:":"Your current bid:"),new cljs.core.Keyword(null,"invalid","invalid",412869516),false,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"addon","addon",931813532),new cljs.core.Keyword(null,"after","after",594996914),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"basis","basis",1865819339)),new cljs.core.Keyword(null,"before","before",-1633692388),"$"], null)], null);
});
biomarket.bids.bid_widget = (function biomarket$bids$bid_widget(project,owner){
if(typeof biomarket.bids.t_biomarket$bids32082 !== 'undefined'){
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
biomarket.bids.t_biomarket$bids32082 = (function (bid_widget,project,owner,meta32083){
this.bid_widget = bid_widget;
this.project = project;
this.owner = owner;
this.meta32083 = meta32083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids32082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32084,meta32083__$1){
var self__ = this;
var _32084__$1 = this;
return (new biomarket.bids.t_biomarket$bids32082(self__.bid_widget,self__.project,self__.owner,meta32083__$1));
});

biomarket.bids.t_biomarket$bids32082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32084){
var self__ = this;
var _32084__$1 = this;
return self__.meta32083;
});

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"inputs","inputs",865803858),null,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),null,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),null,new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"basis","basis",1865819339),new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"bids","bids",-1493194652),null,new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.gensym.call(null)], null);
});

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),cljs.core.select_keys.call(null,np,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-bids","user-bids",-736079184),new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.reset_inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));
});

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillMount$ = true;

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"bids","bids",-1493194652),cljs.core.select_keys.call(null,self__.project,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-bids","user-bids",-736079184),new cljs.core.Keyword(null,"bids","bids",-1493194652)], null)));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.reset_inputs.call(null,self__.owner));

return biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),((function (___$1){
return (function (o,p__32085){
var map__32086 = p__32085;
var map__32086__$1 = ((((!((map__32086 == null)))?((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32086):map__32086);
var data = cljs.core.get.call(null,map__32086__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,o));

return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,o));
});})(___$1))
);
});

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillUnmount$ = true;

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)));
});

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids32082.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__32088){
var self__ = this;
var map__32089 = p__32088;
var map__32089__$1 = ((((!((map__32089 == null)))?((((map__32089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32089):map__32089);
var inputs = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bid = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"bid","bid",-1944960257));
var button_state = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"button-state","button-state",-1211301176));
var form_state = cljs.core.get.call(null,map__32089__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var ___$1 = this;
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inputs);
return React.DOM.form(form_state,React.DOM.label({"className": "control-label"},"Your current bid: "),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "input-group"},React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(amount)),om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount), "width": "10px", "type": new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(amount), "onChange": ((function (amount,___$1,map__32089,map__32089__$1,inputs,bid,button_state,form_state){
return (function (p1__32072_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),new cljs.core.Keyword(null,"amount","amount",364489504),amount,p1__32072_SHARP_);
});})(amount,___$1,map__32089,map__32089__$1,inputs,bid,button_state,form_state))
}),React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(amount))),cljs.core.apply.call(null,om.dom.a,button_state),((cljs.core.seq.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)))?React.DOM.a({"className": "btn btn-danger"},"X"):null)));
});

biomarket.bids.t_biomarket$bids32082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta32083","meta32083",-1684081562,null)], null);
});

biomarket.bids.t_biomarket$bids32082.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids32082.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids32082";

biomarket.bids.t_biomarket$bids32082.cljs$lang$ctorPrWriter = (function (this__26272__auto__,writer__26273__auto__,opt__26274__auto__){
return cljs.core._write.call(null,writer__26273__auto__,"biomarket.bids/t_biomarket$bids32082");
});

biomarket.bids.__GT_t_biomarket$bids32082 = (function biomarket$bids$bid_widget_$___GT_t_biomarket$bids32082(bid_widget__$1,project__$1,owner__$1,meta32083){
return (new biomarket.bids.t_biomarket$bids32082(bid_widget__$1,project__$1,owner__$1,meta32083));
});

}

return (new biomarket.bids.t_biomarket$bids32082(biomarket$bids$bid_widget,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bids.js.map