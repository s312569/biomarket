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
goog.require('biomarket.components');
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),(function (owner,p__66236){
var map__66237 = p__66236;
var map__66237__$1 = ((((!((map__66237 == null)))?((((map__66237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66237):map__66237);
var data = cljs.core.get.call(null,map__66237__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.remove.call(null,((function (map__66237,map__66237__$1,data){
return (function (p1__66235_SHARP_){
return cljs.core.set.call(null,data).call(null,p1__66235_SHARP_);
});})(map__66237,map__66237__$1,data))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),(function (p__66239){
var map__66240 = p__66239;
var map__66240__$1 = ((((!((map__66240 == null)))?((((map__66240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66240):map__66240);
var m = map__66240__$1;
var type = cljs.core.get.call(null,map__66240__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__66240__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),(function (owner,p__66242){
var map__66243 = p__66242;
var map__66243__$1 = ((((!((map__66243 == null)))?((((map__66243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66243):map__66243);
var data = cljs.core.get.call(null,map__66243__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"username","username",1605666410)),new cljs.core.Keyword(null,"receiver","receiver",1768630781).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698)),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sender","sender",1557303285)),new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.cons.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),(function (p__66245){
var map__66246 = p__66245;
var map__66246__$1 = ((((!((map__66246 == null)))?((((map__66246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66246):map__66246);
var m = map__66246__$1;
var type = cljs.core.get.call(null,map__66246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__66246__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"new-comment","new-comment",1342914881));
}));
biomarket.comments.comment_bbutton = (function biomarket$comments$comment_bbutton(p__66248,owner){
var vec__66253 = p__66248;
var project = cljs.core.nth.call(null,vec__66253,(0),null);
var tag = cljs.core.nth.call(null,vec__66253,(1),null);
var bclass = cljs.core.nth.call(null,vec__66253,(2),null);
var bclick = cljs.core.nth.call(null,vec__66253,(3),null);
var visible = cljs.core.nth.call(null,vec__66253,(4),null);
var sender = cljs.core.nth.call(null,vec__66253,(5),null);
if(typeof biomarket.comments.t_biomarket$comments66254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments66254 = (function (tag,visible,owner,comment_bbutton,bclick,bclass,project,sender,p__66248,vec__66253,meta66255){
this.tag = tag;
this.visible = visible;
this.owner = owner;
this.comment_bbutton = comment_bbutton;
this.bclick = bclick;
this.bclass = bclass;
this.project = project;
this.sender = sender;
this.p__66248 = p__66248;
this.vec__66253 = vec__66253;
this.meta66255 = meta66255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments66254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function (_66256,meta66255__$1){
var self__ = this;
var _66256__$1 = this;
return (new biomarket.comments.t_biomarket$comments66254(self__.tag,self__.visible,self__.owner,self__.comment_bbutton,self__.bclick,self__.bclass,self__.project,self__.sender,self__.p__66248,self__.vec__66253,meta66255__$1));
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

biomarket.comments.t_biomarket$comments66254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function (_66256){
var self__ = this;
var _66256__$1 = this;
return self__.meta66255;
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

biomarket.comments.t_biomarket$comments66254.prototype.om$core$IRender$ = true;

biomarket.comments.t_biomarket$comments66254.prototype.om$core$IRender$render$arity$1 = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function (this__28885__auto__){
var self__ = this;
var this__28885__auto____$1 = this;
return om.core.build.call(null,biomarket.components.badged_button,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bcast","bcast",1374687141),new cljs.core.Keyword(null,"bclick","bclick",1509940070),new cljs.core.Keyword(null,"db-mark","db-mark",770252850),new cljs.core.Keyword(null,"bclass","bclass",-762241902),new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Keyword(null,"sender","sender",1557303285),new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"db-unread","db-unread",1099058015)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),cljs.core.async.chan.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-comment","new-comment",1342914881),cljs.core.async.chan.call(null)], null)], null),self__.bclick,new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),self__.bclass,self__.tag,self__.project,self__.sender,self__.visible,"Discussion",new cljs.core.Keyword(null,"unread-comments","unread-comments",-2085679445)]));
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

biomarket.comments.t_biomarket$comments66254.getBasis = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"comment-bbutton","comment-bbutton",1329053994,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"visible","visible",616314722,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"bclick","bclick",-1144495699,null),new cljs.core.Symbol(null,"bclass","bclass",878289625,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"sender","sender",-1097132484,null),new cljs.core.Symbol(null,"p__66248","p__66248",-1319612803,null),new cljs.core.Symbol(null,"vec__66253","vec__66253",1358760479,null),new cljs.core.Symbol(null,"meta66255","meta66255",-1037457686,null)], null);
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

biomarket.comments.t_biomarket$comments66254.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments66254.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments66254";

biomarket.comments.t_biomarket$comments66254.cljs$lang$ctorPrWriter = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.comments/t_biomarket$comments66254");
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

biomarket.comments.__GT_t_biomarket$comments66254 = ((function (vec__66253,project,tag,bclass,bclick,visible,sender){
return (function biomarket$comments$comment_bbutton_$___GT_t_biomarket$comments66254(tag__$1,visible__$1,owner__$1,comment_bbutton__$1,bclick__$1,bclass__$1,project__$1,sender__$1,p__66248__$1,vec__66253__$1,meta66255){
return (new biomarket.comments.t_biomarket$comments66254(tag__$1,visible__$1,owner__$1,comment_bbutton__$1,bclick__$1,bclass__$1,project__$1,sender__$1,p__66248__$1,vec__66253__$1,meta66255));
});})(vec__66253,project,tag,bclass,bclick,visible,sender))
;

}

return (new biomarket.comments.t_biomarket$comments66254(tag,visible,owner,biomarket$comments$comment_bbutton,bclick,bclass,project,sender,p__66248,vec__66253,null));
});
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__66257){
var map__66258 = p__66257;
var map__66258__$1 = ((((!((map__66258 == null)))?((((map__66258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66258):map__66258);
var data = cljs.core.get.call(null,map__66258__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"comment","comment",532206069),(function (p__66260){
var map__66261 = p__66260;
var map__66261__$1 = ((((!((map__66261 == null)))?((((map__66261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66261):map__66261);
var type = cljs.core.get.call(null,map__66261__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__66261__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,biomarket.server.app_state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));
biomarket.comments.show_comment = (function biomarket$comments$show_comment(comment,owner){
return React.DOM.div(null,React.DOM.div({"style": {"font-size": "small", "text-align": "left", "color": ((cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"bidder","bidder",1514778257)),new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)))?"red":"green")}},[cljs.core.str("On "),cljs.core.str(biomarket.utilities.datestring__GT_readable.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(comment))),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"sender","sender",1557303285).cljs$core$IFn$_invoke$arity$1(comment)),cljs.core.str(" said:")].join('')),React.DOM.div({"style": {"margin": "5px", "font-weight": "bold"}},new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(comment),React.DOM.hr(null)));
});
biomarket.comments.comment_display_panel = (function biomarket$comments$comment_display_panel(comments,owner){
if(typeof biomarket.comments.t_biomarket$comments66268 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.comments.t_biomarket$comments66268 = (function (comment_display_panel,comments,owner,meta66269){
this.comment_display_panel = comment_display_panel;
this.comments = comments;
this.owner = owner;
this.meta66269 = meta66269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments66268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66270,meta66269__$1){
var self__ = this;
var _66270__$1 = this;
return (new biomarket.comments.t_biomarket$comments66268(self__.comment_display_panel,self__.comments,self__.owner,meta66269__$1));
});

biomarket.comments.t_biomarket$comments66268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66270){
var self__ = this;
var _66270__$1 = this;
return self__.meta66269;
});

biomarket.comments.t_biomarket$comments66268.prototype.om$core$IDidUpdate$ = true;

biomarket.comments.t_biomarket$comments66268.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var n = om.core.get_node.call(null,self__.owner,"cd");
return (n["scrollTop"] = "10000");
});

biomarket.comments.t_biomarket$comments66268.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments66268.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "panel-body", "ref": "cd", "style": {"margin": "5px", "height": "200", "overflow-y": "scroll", "position": "relative"}},((cljs.core.not.call(null,cljs.core.seq.call(null,self__.comments)))?(function (){var x__26745__auto__ = React.DOM.div({"style": {"text-align": "center"}},"No discussion yet!");
return cljs.core._conj.call(null,(function (){var x__26745__auto____$1 = React.DOM.hr(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26745__auto____$1);
})(),x__26745__auto__);
})():cljs.core.map.call(null,((function (___$2){
return (function (p1__66263_SHARP_){
return biomarket.comments.show_comment.call(null,p1__66263_SHARP_,self__.owner);
});})(___$2))
,cljs.core.filter.call(null,((function (___$2){
return (function (p1__66264_SHARP_){
return !(cljs.core._EQ_.call(null,"",clojure.string.trim.call(null,new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(p1__66264_SHARP_))));
});})(___$2))
,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._LT_,self__.comments)))));
});

biomarket.comments.t_biomarket$comments66268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comment-display-panel","comment-display-panel",-1346116709,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta66269","meta66269",1447526025,null)], null);
});

biomarket.comments.t_biomarket$comments66268.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments66268.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments66268";

biomarket.comments.t_biomarket$comments66268.cljs$lang$ctorPrWriter = (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.comments/t_biomarket$comments66268");
});

biomarket.comments.__GT_t_biomarket$comments66268 = (function biomarket$comments$comment_display_panel_$___GT_t_biomarket$comments66268(comment_display_panel__$1,comments__$1,owner__$1,meta66269){
return (new biomarket.comments.t_biomarket$comments66268(comment_display_panel__$1,comments__$1,owner__$1,meta66269));
});

}

return (new biomarket.comments.t_biomarket$comments66268(biomarket$comments$comment_display_panel,comments,owner,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__66271_SHARP_){
return biomarket.utilities.on_change_function.call(null,owner,utag,new cljs.core.Keyword(null,"comment","comment",532206069),comment,p1__66271_SHARP_);
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
biomarket.comments.comments = (function biomarket$comments$comments(p__66273,owner){
var vec__66281 = p__66273;
var project = cljs.core.nth.call(null,vec__66281,(0),null);
var receiver = cljs.core.nth.call(null,vec__66281,(1),null);
if(typeof biomarket.comments.t_biomarket$comments66282 !== 'undefined'){
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
biomarket.comments.t_biomarket$comments66282 = (function (comments,p__66273,owner,vec__66281,project,receiver,meta66283){
this.comments = comments;
this.p__66273 = p__66273;
this.owner = owner;
this.vec__66281 = vec__66281;
this.project = project;
this.receiver = receiver;
this.meta66283 = meta66283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.comments.t_biomarket$comments66282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__66281,project,receiver){
return (function (_66284,meta66283__$1){
var self__ = this;
var _66284__$1 = this;
return (new biomarket.comments.t_biomarket$comments66282(self__.comments,self__.p__66273,self__.owner,self__.vec__66281,self__.project,self__.receiver,meta66283__$1));
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__66281,project,receiver){
return (function (_66284){
var self__ = this;
var _66284__$1 = this;
return self__.meta66283;
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IInitState$ = true;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__66281,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"invalid","invalid",412869516),false], null)], null),new cljs.core.Keyword(null,"pid","pid",1018387698),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.Keyword(null,"receiver","receiver",1768630781),(function (){var or__25911__auto__ = self__.receiver;
if(cljs.core.truth_(or__25911__auto__)){
return or__25911__auto__;
} else {
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(self__.project);
}
})(),new cljs.core.Keyword(null,"update-topic","update-topic",-406732688),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718),cljs.core.async.chan.call(null)], null);
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IWillMount$ = true;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (vec__66281,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var pid = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698));
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),pid], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var receiver__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"receiver","receiver",1768630781));
biomarket.utilities.register_loop.call(null,self__.owner,ut,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver){
return (function (o,d){
return biomarket.utilities.loop_manager.call(null,o,d,((function (pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver){
return (function (){
return biomarket.comments.submit_func.call(null,o);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver))
);
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver))
);

biomarket.utilities.register_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.server.get_data.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"pid","pid",1018387698),pid,new cljs.core.Keyword(null,"username2","username2",799725987),receiver__$1], null),((function (pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver){
return (function (p1__66272_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__66272_SHARP_));
});})(pid,bct,bc,ut,receiver__$1,___$1,vec__66281,project,receiver))
);
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IWillUnmount$ = true;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (vec__66281,project,receiver){
return (function (_){
var self__ = this;
var ___$1 = this;
var bct = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comment","comment",532206069),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"pid","pid",1018387698))], null);
var bc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"broadcast-chan","broadcast-chan",723781718));
var ut = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
biomarket.utilities.unsub_broadcast_loop.call(null,self__.owner,bct,bc);

return biomarket.utilities.unsubscribe.call(null,self__.owner,ut);
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IRenderState$ = true;

biomarket.comments.t_biomarket$comments66282.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__66281,project,receiver){
return (function (_,p__66285){
var self__ = this;
var map__66286 = p__66285;
var map__66286__$1 = ((((!((map__66286 == null)))?((((map__66286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66286):map__66286);
var inputs = cljs.core.get.call(null,map__66286__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var update_topic = cljs.core.get.call(null,map__66286__$1,new cljs.core.Keyword(null,"update-topic","update-topic",-406732688));
var comments__$1 = cljs.core.get.call(null,map__66286__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
var ___$1 = this;
return React.DOM.div({"style": {"margin-top": "10px"}},React.DOM.label(null,"Discussion"),React.DOM.div({"className": "panel panel-default", "style": {"min-height": "100%"}},om.core.build.call(null,biomarket.comments.comment_display_panel,comments__$1),React.DOM.div({"className": "panel-footer"},biomarket.comments.comment_control.call(null,inputs,update_topic,self__.owner))));
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.getBasis = ((function (vec__66281,project,receiver){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"comments","comments",1347185104,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__66273","p__66273",132480823,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__66281","vec__66281",1171912668,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"receiver","receiver",-885804988,null),new cljs.core.Symbol(null,"meta66283","meta66283",-1850917818,null)], null);
});})(vec__66281,project,receiver))
;

biomarket.comments.t_biomarket$comments66282.cljs$lang$type = true;

biomarket.comments.t_biomarket$comments66282.cljs$lang$ctorStr = "biomarket.comments/t_biomarket$comments66282";

biomarket.comments.t_biomarket$comments66282.cljs$lang$ctorPrWriter = ((function (vec__66281,project,receiver){
return (function (this__26517__auto__,writer__26518__auto__,opt__26519__auto__){
return cljs.core._write.call(null,writer__26518__auto__,"biomarket.comments/t_biomarket$comments66282");
});})(vec__66281,project,receiver))
;

biomarket.comments.__GT_t_biomarket$comments66282 = ((function (vec__66281,project,receiver){
return (function biomarket$comments$comments_$___GT_t_biomarket$comments66282(comments__$1,p__66273__$1,owner__$1,vec__66281__$1,project__$1,receiver__$1,meta66283){
return (new biomarket.comments.t_biomarket$comments66282(comments__$1,p__66273__$1,owner__$1,vec__66281__$1,project__$1,receiver__$1,meta66283));
});})(vec__66281,project,receiver))
;

}

return (new biomarket.comments.t_biomarket$comments66282(biomarket$comments$comments,p__66273,owner,vec__66281,project,receiver,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=comments.js.map