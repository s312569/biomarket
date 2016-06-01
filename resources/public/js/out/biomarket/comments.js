// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.comments');
goog.require('cljs.core');
goog.require('biomarket.utilities');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.server');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.comments.show_comment = (function biomarket$comments$show_comment(comment,owner){
return React.DOM.div(null,React.DOM.div({"style": {"font-size": "small", "text-align": "left", "color": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bidder","bidder",1514778257)),new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)))?"red":"green")}},[cljs.core.str("On "),cljs.core.str(biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(comment))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)),cljs.core.str(" said:")].join('')),React.DOM.div({"style": {"margin": "5px", "font-weight": "bold"}},new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(comment),React.DOM.hr(null)));
});
biomarket.comments.comment_display_panel = (function biomarket$comments$comment_display_panel(comments,owner){
if(typeof biomarket.comments.t_biomarket$comments76709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments76709 = (function (comment_display_panel,comments,owner,meta76710){
this.comment_display_panel = comment_display_panel;
this.comments = comments;
this.owner = owner;
this.meta76710 = meta76710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments76709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76711,meta76710__$1){
var self__ = this;
var _76711__$1 = this;
return (new biomarket.comments.t_biomarket$comments76709(self__.comment_display_panel,self__.comments,self__.owner,meta76710__$1));
});

biomarket.comments.t_biomarket$comments76709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76711){
var self__ = this;
var _76711__$1 = this;
return self__.meta76710;
});

biomarket.comments.t_biomarket$comments76709.prototype.om$core$IDidUpdate$ = true;

biomarket.comments.t_biomarket$comments76709.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var n = om.core.get_node.call(null,self__.owner,"cd");
return (n["scrollTop"] = "10000");
});

biomarket.comments.t_biomarket$comments76709.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments76709.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "panel-body", "ref": "cd", "style": {"margin": "5px", "height": "200", "overflow-y": "scroll", "position": "relative"}},((cljs.core.not.call(null,cljs.core.seq.call(null,self__.comments)))?(function (){var x__26646__auto__ = React.DOM.div({"style": {"text-align": "center"}},"No discussion yet!");
return cljs.core._conj.call(null,(function (){var x__26646__auto____$1 = React.DOM.hr(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto____$1);
})(),x__26646__auto__);
})():cljs.core.map.call(null,((function (___$2){
return (function (p1__76704_SHARP_){
return biomarket.comments.show_comment.call(null,p1__76704_SHARP_,self__.owner);
});})(___$2))
,cljs.core.filter.call(null,((function (___$2){
return (function (p1__76705_SHARP_){
return !(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(p1__76705_SHARP_))));
});})(___$2))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._LT_,self__.comments)))));
});

biomarket.comments.t_biomarket$comments76709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-display-panel","comment-display-panel",-1346116709,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76710","meta76710",-1925279031,null)], null);
});

biomarket.comments.t_biomarket$comments76709.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments76709.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments76709";

biomarket.comments.t_biomarket$comments76709.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.comments/t_biomarket$comments76709");
});

biomarket.comments.__GT_t_biomarket$comments76709 = (function biomarket$comments$comment_display_panel_$___GT_t_biomarket$comments76709(comment_display_panel__$1,comments__$1,owner__$1,meta76710){
return (new biomarket.comments.t_biomarket$comments76709(comment_display_panel__$1,comments__$1,owner__$1,meta76710));
});

}

return (new biomarket.comments.t_biomarket$comments76709(biomarket$comments$comment_display_panel,comments,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.comments.comment_control = (function biomarket$comments$comment_control(inputs,utag,owner){
var comment = new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)));
var current_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(comment);
var ut = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
return React.DOM.form({"className": "form-horizontal", "onSubmit": ((function (comment,current_value,ut){
return (function (_){
return false;
});})(comment,current_value,ut))
},React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-sm-3"}," "),React.DOM.div({"className": "col-sm-12"},om.dom.textarea.call(null,{"className": "form-control", "value": current_value, "placeholder": "Type comment - Press return to submit", "onKeyDown": biomarket.utilities.capture_return.call(null,((function (comment,current_value,ut){
return (function (){
return biomarket.utilities.on_submit_function.call(null,owner,utag);
});})(comment,current_value,ut))
), "rows": "1", "onChange": ((function (comment,current_value,ut){
return (function (p1__76712_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,utag,new cljs.core.Keyword(null,"comment","comment",532206069),comment,p1__76712_SHARP_);
});})(comment,current_value,ut))
}))));
});
biomarket.comments.submit_func = (function biomarket$comments$submit_func(owner){
var comment = clojure.string.trim.call(null,cljs.core.get_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217)], null)));
var pid = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698));
var receiver = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"receiver","receiver",1768630781));
var new_inputs = cljs.core.assoc_in.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"value","value",305978217)], null),"");
biomarket.server.save_data.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comment","comment",532206069),comment,new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"receiver","receiver",1768630781),receiver], null)], null));

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),new_inputs);
});
biomarket.comments.comments = (function biomarket$comments$comments(p__76714,owner){
var vec__76722 = p__76714;
var project = cljs.core.nth.call(null,vec__76722,(0),null);
var receiver = cljs.core.nth.call(null,vec__76722,(1),null);
if(typeof biomarket.comments.t_biomarket$comments76723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments76723 = (function (comments,p__76714,owner,vec__76722,project,receiver,meta76724){
this.comments = comments;
this.p__76714 = p__76714;
this.owner = owner;
this.vec__76722 = vec__76722;
this.project = project;
this.receiver = receiver;
this.meta76724 = meta76724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments76723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76722,project,receiver){
return (function (_76725,meta76724__$1){
var self__ = this;
var _76725__$1 = this;
return (new biomarket.comments.t_biomarket$comments76723(self__.comments,self__.p__76714,self__.owner,self__.vec__76722,self__.project,self__.receiver,meta76724__$1));
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76722,project,receiver){
return (function (_76725){
var self__ = this;
var _76725__$1 = this;
return self__.meta76724;
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IInitState$ = true;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__76722,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"receiver","receiver",1768630781),(function (){var or__25812__auto__ = self__.receiver;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})(),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IWillMount$ = true;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__76722,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var pid = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698));
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),pid], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var receiver__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"receiver","receiver",1768630781));
biomarket.utilities.register_loop.call(null,self__.owner,ut,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver){
return (function (o,d){
return biomarket.utilities.loop_manager.call(null,o,d,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver){
return (function (){
return biomarket.comments.submit_func.call(null,o);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver))
);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver))
);

biomarket.utilities.register_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"username2","username2",799725987),receiver__$1], null),((function (pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver){
return (function (p1__76713_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__76713_SHARP_));
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__76722,project,receiver))
);
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IWillUnmount$ = true;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__76722,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698))], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.utilities.unsubscribe.call(null,self__.owner,ut);
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments76723.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__76722,project,receiver){
return (function (_,p__76726){
var self__ = this;
var map__76727 = p__76726;
var map__76727__$1 = ((((!((map__76727 == null)))?((((map__76727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76727):map__76727);
var inputs = cljs.core.get.call(null,map__76727__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var update_topic = cljs.core.get.call(null,map__76727__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var comments__$1 = cljs.core.get.call(null,map__76727__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var ___$1 = this;
return React.DOM.div({"style": {"margin-top": "10px"}},React.DOM.label(null,"Discussion"),React.DOM.div({"className": "panel panel-default", "style": {"min-height": "100%"}},om.core.build.call(null,biomarket.comments.comment_display_panel,comments__$1),React.DOM.div({"className": "panel-footer"},biomarket.comments.comment_control.call(null,inputs,update_topic,self__.owner))));
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.getBasis = ((function (vec__76722,project,receiver){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76714","p__76714",1790474060,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76722","vec__76722",1793985192,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null),new cljs.core.Symbol(null,"meta76724","meta76724",-1680491554,null)], null);
});})(vec__76722,project,receiver))
;

biomarket.comments.t_biomarket$comments76723.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments76723.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments76723";

biomarket.comments.t_biomarket$comments76723.cljs$lang$ctorPrWriter = ((function (vec__76722,project,receiver){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.comments/t_biomarket$comments76723");
});})(vec__76722,project,receiver))
;

biomarket.comments.__GT_t_biomarket$comments76723 = ((function (vec__76722,project,receiver){
return (function biomarket$comments$comments_$___GT_t_biomarket$comments76723(comments__$1,p__76714__$1,owner__$1,vec__76722__$1,project__$1,receiver__$1,meta76724){
return (new biomarket.comments.t_biomarket$comments76723(comments__$1,p__76714__$1,owner__$1,vec__76722__$1,project__$1,receiver__$1,meta76724));
});})(vec__76722,project,receiver))
;

}

return (new biomarket.comments.t_biomarket$comments76723(biomarket$comments$comments,p__76714,owner,vec__76722,project,receiver,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=comments.js.map