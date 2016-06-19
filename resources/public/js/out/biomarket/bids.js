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
goog.require('biomarket.components');
biomarket.bids.best_bid = (function biomarket$bids$best_bid(bids){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.map.call(null,(function (p1__133201_SHARP_){
return cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__133201_SHARP_));
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),bids)))));
});
biomarket.bids.sort_best_bids = (function biomarket$bids$sort_best_bids(project){
return cljs.core.sort_by.call(null,(function (p1__133202_SHARP_){
return new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(p1__133202_SHARP_);
}),cljs.core._LT_,cljs.core.map.call(null,cljs.core.first,cljs.core.map.call(null,(function (p1__133203_SHARP_){
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,p1__133203_SHARP_);
}),cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(project))))));
});
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"bids-read","bids-read",-717721789),(function (owner,p__133205){
var map__133206 = p__133205;
var map__133206__$1 = ((((!((map__133206 == null)))?((((map__133206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133206):map__133206);
var data = cljs.core.get.call(null,map__133206__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.remove.call(null,((function (map__133206,map__133206__$1,data){
return (function (p1__133204_SHARP_){
var and__25886__auto__ = cljs.core.set.call(null,data).call(null,p1__133204_SHARP_);
if(cljs.core.truth_(and__25886__auto__)){
return cljs.core.contains_QMARK_.call(null,p1__133204_SHARP_,new cljs.core.Keyword(null,"bid","bid",-1944960257));
} else {
return and__25886__auto__;
}
});})(map__133206,map__133206__$1,data))
,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"bids-read","bids-read",-717721789),(function (p__133208){
var map__133209 = p__133208;
var map__133209__$1 = ((((!((map__133209 == null)))?((((map__133209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133209):map__133209);
var m = map__133209__$1;
var type = cljs.core.get.call(null,map__133209__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__133209__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"bids-read","bids-read",-717721789));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"new-bid-comment","new-bid-comment",1880332580),(function (owner,p__133211){
var map__133212 = p__133211;
var map__133212__$1 = ((((!((map__133212 == null)))?((((map__133212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133212):map__133212);
var data = cljs.core.get.call(null,map__133212__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.log.call(null,"here");

if(cljs.core._EQ_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pid","pid",1018387698)),new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(data))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572),cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], true, false),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"unread","unread",-1950424572))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,biomarket.server.publish_update,new cljs.core.Keyword(null,"new-bid-comment","new-bid-comment",1880332580),(function (p__133214){
var map__133215 = p__133214;
var map__133215__$1 = ((((!((map__133215 == null)))?((((map__133215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133215):map__133215);
var m = map__133215__$1;
var type = cljs.core.get.call(null,map__133215__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var data = cljs.core.get.call(null,map__133215__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.server.default_publish.call(null,m,new cljs.core.Keyword(null,"new-bid-comment","new-bid-comment",1880332580));
}));
biomarket.bids.bid_bbutton = (function biomarket$bids$bid_bbutton(p__133219,owner){
var vec__133224 = p__133219;
var project = cljs.core.nth.call(null,vec__133224,(0),null);
var tag = cljs.core.nth.call(null,vec__133224,(1),null);
if(typeof biomarket.bids.t_biomarket$bids133225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133225 = (function (bid_bbutton,p__133219,owner,vec__133224,project,tag,meta133226){
this.bid_bbutton = bid_bbutton;
this.p__133219 = p__133219;
this.owner = owner;
this.vec__133224 = vec__133224;
this.project = project;
this.tag = tag;
this.meta133226 = meta133226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__133224,project,tag){
return (function (_133227,meta133226__$1){
var self__ = this;
var _133227__$1 = this;
return (new biomarket.bids.t_biomarket$bids133225(self__.bid_bbutton,self__.p__133219,self__.owner,self__.vec__133224,self__.project,self__.tag,meta133226__$1));
});})(vec__133224,project,tag))
;

biomarket.bids.t_biomarket$bids133225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__133224,project,tag){
return (function (_133227){
var self__ = this;
var _133227__$1 = this;
return self__.meta133226;
});})(vec__133224,project,tag))
;

biomarket.bids.t_biomarket$bids133225.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids133225.prototype.om$core$IRender$render$arity$1 = ((function (vec__133224,project,tag){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.components.badged_button,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),self__.tag,new cljs.core.Keyword(null,"bcast","bcast",1374687141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bids-read","bids-read",-717721789),cljs.core.async.chan.call(null)], null).call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-bid-comment","new-bid-comment",1880332580),cljs.core.async.chan.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comments-read","comments-read",1258983100),cljs.core.async.chan.call(null)], null)),new cljs.core.Keyword(null,"db-unread","db-unread",1099058015),new cljs.core.Keyword(null,"unread-bids","unread-bids",-65052488),new cljs.core.Keyword(null,"db-mark","db-mark",770252850),new cljs.core.Keyword(null,"bids-read","bids-read",-717721789),new cljs.core.Keyword(null,"text","text",-1790561697),"Show bids",new cljs.core.Keyword(null,"badges","badges",-288609067),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dfunc","dfunc",1344197993),((function (this__28872__auto____$1,vec__133224,project,tag){
return (function (x){
var c = cljs.core.count.call(null,cljs.core.filter.call(null,((function (this__28872__auto____$1,vec__133224,project,tag){
return (function (p1__133217_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__133217_SHARP_,new cljs.core.Keyword(null,"bid","bid",-1944960257));
});})(this__28872__auto____$1,vec__133224,project,tag))
,x));
if((c > (0))){
return [cljs.core.str(c),cljs.core.str(" new bids")].join('');
} else {
return null;
}
});})(this__28872__auto____$1,vec__133224,project,tag))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dfunc","dfunc",1344197993),((function (this__28872__auto____$1,vec__133224,project,tag){
return (function (x){
var c = cljs.core.count.call(null,cljs.core.filter.call(null,((function (this__28872__auto____$1,vec__133224,project,tag){
return (function (p1__133218_SHARP_){
return cljs.core.contains_QMARK_.call(null,p1__133218_SHARP_,new cljs.core.Keyword(null,"comment","comment",532206069));
});})(this__28872__auto____$1,vec__133224,project,tag))
,x));
if((c > (0))){
return [cljs.core.str(c),cljs.core.str(" new comments")].join('');
} else {
return null;
}
});})(this__28872__auto____$1,vec__133224,project,tag))
], null)], null)], null));
});})(vec__133224,project,tag))
;

biomarket.bids.t_biomarket$bids133225.getBasis = ((function (vec__133224,project,tag){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-bbutton","bid-bbutton",1355451439,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__133219","p__133219",406052040,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__133224","vec__133224",-1109476100,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta133226","meta133226",2014467475,null)], null);
});})(vec__133224,project,tag))
;

biomarket.bids.t_biomarket$bids133225.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133225.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133225";

biomarket.bids.t_biomarket$bids133225.cljs$lang$ctorPrWriter = ((function (vec__133224,project,tag){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133225");
});})(vec__133224,project,tag))
;

biomarket.bids.__GT_t_biomarket$bids133225 = ((function (vec__133224,project,tag){
return (function biomarket$bids$bid_bbutton_$___GT_t_biomarket$bids133225(bid_bbutton__$1,p__133219__$1,owner__$1,vec__133224__$1,project__$1,tag__$1,meta133226){
return (new biomarket.bids.t_biomarket$bids133225(bid_bbutton__$1,p__133219__$1,owner__$1,vec__133224__$1,project__$1,tag__$1,meta133226));
});})(vec__133224,project,tag))
;

}

return (new biomarket.bids.t_biomarket$bids133225(biomarket$bids$bid_bbutton,p__133219,owner,vec__133224,project,tag,null));
});
biomarket.bids.bid_history_button = (function biomarket$bids$bid_history_button(p__133228){
var vec__133233 = p__133228;
var p = cljs.core.nth.call(null,vec__133233,(0),null);
var tag = cljs.core.nth.call(null,vec__133233,(1),null);
if(typeof biomarket.bids.t_biomarket$bids133234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133234 = (function (bid_history_button,p__133228,vec__133233,p,tag,meta133235){
this.bid_history_button = bid_history_button;
this.p__133228 = p__133228;
this.vec__133233 = vec__133233;
this.p = p;
this.tag = tag;
this.meta133235 = meta133235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__133233,p,tag){
return (function (_133236,meta133235__$1){
var self__ = this;
var _133236__$1 = this;
return (new biomarket.bids.t_biomarket$bids133234(self__.bid_history_button,self__.p__133228,self__.vec__133233,self__.p,self__.tag,meta133235__$1));
});})(vec__133233,p,tag))
;

biomarket.bids.t_biomarket$bids133234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__133233,p,tag){
return (function (_133236){
var self__ = this;
var _133236__$1 = this;
return self__.meta133235;
});})(vec__133233,p,tag))
;

biomarket.bids.t_biomarket$bids133234.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids133234.prototype.om$core$IRender$render$arity$1 = ((function (vec__133233,p,tag){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return om.core.build.call(null,biomarket.components.bottom_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"project","project",1124394579),self__.p,new cljs.core.Keyword(null,"view-tag","view-tag",-1197278670),self__.tag,new cljs.core.Keyword(null,"text","text",-1790561697),"Bid history"], null));
});})(vec__133233,p,tag))
;

biomarket.bids.t_biomarket$bids133234.getBasis = ((function (vec__133233,p,tag){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-history-button","bid-history-button",-353358972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null)], null)))], null)),new cljs.core.Symbol(null,"p__133228","p__133228",966648341,null),new cljs.core.Symbol(null,"vec__133233","vec__133233",61981345,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta133235","meta133235",1002511011,null)], null);
});})(vec__133233,p,tag))
;

biomarket.bids.t_biomarket$bids133234.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133234.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133234";

biomarket.bids.t_biomarket$bids133234.cljs$lang$ctorPrWriter = ((function (vec__133233,p,tag){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133234");
});})(vec__133233,p,tag))
;

biomarket.bids.__GT_t_biomarket$bids133234 = ((function (vec__133233,p,tag){
return (function biomarket$bids$bid_history_button_$___GT_t_biomarket$bids133234(bid_history_button__$1,p__133228__$1,vec__133233__$1,p__$1,tag__$1,meta133235){
return (new biomarket.bids.t_biomarket$bids133234(bid_history_button__$1,p__133228__$1,vec__133233__$1,p__$1,tag__$1,meta133235));
});})(vec__133233,p,tag))
;

}

return (new biomarket.bids.t_biomarket$bids133234(biomarket$bids$bid_history_button,p__133228,vec__133233,p,tag,null));
});
biomarket.bids.show_table = (function biomarket$bids$show_table(data,owner){
if(typeof biomarket.bids.t_biomarket$bids133242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133242 = (function (show_table,data,owner,meta133243){
this.show_table = show_table;
this.data = data;
this.owner = owner;
this.meta133243 = meta133243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133244,meta133243__$1){
var self__ = this;
var _133244__$1 = this;
return (new biomarket.bids.t_biomarket$bids133242(self__.show_table,self__.data,self__.owner,meta133243__$1));
});

biomarket.bids.t_biomarket$bids133242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133244){
var self__ = this;
var _133244__$1 = this;
return self__.meta133243;
});

biomarket.bids.t_biomarket$bids133242.prototype.om$core$IRender$ = true;

biomarket.bids.t_biomarket$bids133242.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.table({"className": "table table-striped table hover"},React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (p1__133237_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__133237_SHARP_);
});})(this__28872__auto____$1))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (p1__133238_SHARP_){
return React.DOM.td({"style": {"text-align": "center", "border": "0"}},p1__133238_SHARP_);
});})(this__28872__auto____$1))
,cljs.core.vals.call(null,x)));
});})(this__28872__auto____$1))
,self__.data)));
});

biomarket.bids.t_biomarket$bids133242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-table","show-table",-2144991522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133243","meta133243",-617847469,null)], null);
});

biomarket.bids.t_biomarket$bids133242.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133242.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133242";

biomarket.bids.t_biomarket$bids133242.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133242");
});

biomarket.bids.__GT_t_biomarket$bids133242 = (function biomarket$bids$show_table_$___GT_t_biomarket$bids133242(show_table__$1,data__$1,owner__$1,meta133243){
return (new biomarket.bids.t_biomarket$bids133242(show_table__$1,data__$1,owner__$1,meta133243));
});

}

return (new biomarket.bids.t_biomarket$bids133242(biomarket$bids$show_table,data,owner,null));
});
biomarket.bids.show_bids = (function biomarket$bids$show_bids(project,owner){
if(typeof biomarket.bids.t_biomarket$bids133251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133251 = (function (show_bids,project,owner,meta133252){
this.show_bids = show_bids;
this.project = project;
this.owner = owner;
this.meta133252 = meta133252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133253,meta133252__$1){
var self__ = this;
var _133253__$1 = this;
return (new biomarket.bids.t_biomarket$bids133251(self__.show_bids,self__.project,self__.owner,meta133252__$1));
});

biomarket.bids.t_biomarket$bids133251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133253){
var self__ = this;
var _133253__$1 = this;
return self__.meta133252;
});

biomarket.bids.t_biomarket$bids133251.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids133251.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cp","cp",-678439312),(0)], null);
});

biomarket.bids.t_biomarket$bids133251.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids133251.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133254){
var self__ = this;
var map__133255 = p__133254;
var map__133255__$1 = ((((!((map__133255 == null)))?((((map__133255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133255):map__133255);
var cp = cljs.core.get.call(null,map__133255__$1,new cljs.core.Keyword(null,"cp","cp",-678439312));
var ___$1 = this;
var user = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"user-bids","user-bids",-736079184).cljs$core$IFn$_invoke$arity$1(self__.project)));
var fg = ((function (user,___$1,map__133255,map__133255__$1,cp){
return (function (bid_user,text){
if(cljs.core._EQ_.call(null,bid_user,user)){
return biomarket.utilities.color_span.call(null,text,"red");
} else {
return biomarket.utilities.color_span.call(null,text,"green");
}
});})(user,___$1,map__133255,map__133255__$1,cp))
;
if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project))){
var data = cljs.core.map.call(null,((function (user,fg,___$1,map__133255,map__133255__$1,cp){
return (function (x){
var u = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentArrayMap(null, 3, ["User",fg.call(null,u,cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(x)))),"Amount",fg.call(null,u,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(x))].join('')),"Time",fg.call(null,u,biomarket.utilities.ds__GT_date_hour_minute.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x)))], null);
});})(user,fg,___$1,map__133255,map__133255__$1,cp))
,cljs.core.take.call(null,(4),cljs.core.drop.call(null,cp,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._GT_,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)))));
return React.DOM.div(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12", "style": {"min-height": "200px"}},om.core.build.call(null,biomarket.bids.show_table,data))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},(((cp > (0)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__133255,map__133255__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),(cp - (4)));
});})(data,user,fg,___$1,map__133255,map__133255__$1,cp))
},"Previous"):null)),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right"}},(((cljs.core.count.call(null,new cljs.core.Keyword(null,"bids","bids",-1493194652).cljs$core$IFn$_invoke$arity$1(self__.project)) > ((4) + cp)))?React.DOM.a({"onClick": ((function (data,user,fg,___$1,map__133255,map__133255__$1,cp){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cp","cp",-678439312),((4) + cp));
});})(data,user,fg,___$1,map__133255,map__133255__$1,cp))
},"Next"):null))));
} else {
return null;
}
});

biomarket.bids.t_biomarket$bids133251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-bids","show-bids",1253393431,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133252","meta133252",1506348551,null)], null);
});

biomarket.bids.t_biomarket$bids133251.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133251.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133251";

biomarket.bids.t_biomarket$bids133251.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133251");
});

biomarket.bids.__GT_t_biomarket$bids133251 = (function biomarket$bids$show_bids_$___GT_t_biomarket$bids133251(show_bids__$1,project__$1,owner__$1,meta133252){
return (new biomarket.bids.t_biomarket$bids133251(show_bids__$1,project__$1,owner__$1,meta133252));
});

}

return (new biomarket.bids.t_biomarket$bids133251(biomarket$bids$show_bids,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.bids.bid_display = (function biomarket$bids$bid_display(project,owner){
if(typeof biomarket.bids.t_biomarket$bids133266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133266 = (function (bid_display,project,owner,meta133267){
this.bid_display = bid_display;
this.project = project;
this.owner = owner;
this.meta133267 = meta133267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133268,meta133267__$1){
var self__ = this;
var _133268__$1 = this;
return (new biomarket.bids.t_biomarket$bids133266(self__.bid_display,self__.project,self__.owner,meta133267__$1));
});

biomarket.bids.t_biomarket$bids133266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133268){
var self__ = this;
var _133268__$1 = this;
return self__.meta133267;
});

biomarket.bids.t_biomarket$bids133266.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids133266.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"bg","bg",-206688421),((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(self__.project),(2))))?"white":"#E7E7E7")], null);
});

biomarket.bids.t_biomarket$bids133266.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids133266.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133269){
var self__ = this;
var map__133270 = p__133269;
var map__133270__$1 = ((((!((map__133270 == null)))?((((map__133270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133270):map__133270);
var visible = cljs.core.get.call(null,map__133270__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var bg = cljs.core.get.call(null,map__133270__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var ___$1 = this;
var bid = new cljs.core.Keyword(null,"bid","bid",-1944960257).cljs$core$IFn$_invoke$arity$1(self__.project);
var basis = new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project);
var pid = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div(null,React.DOM.div({"className": "row", "style": {"background-color": bg, "padding": "5px"}},React.DOM.div({"className": "col-md-6", "style": {"text-align": "left", "height": "40px", "line-height": "40px"}},React.DOM.span(null,[cljs.core.str("$"),cljs.core.str(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(bid)),cljs.core.str(" "),cljs.core.str(basis),cljs.core.str(" from ")].join('')),React.DOM.span(null,React.DOM.a({"href": "#"},new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(bid)))),React.DOM.div({"className": "col-md-6", "style": {"text-align": "right", "height": "40px", "line-height": "40px"}},React.DOM.div({"className": "btn-group"},om.core.build.call(null,biomarket.comments.comment_bbutton,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.Keyword(null,"discussion","discussion",-188707284),((cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"discussion","discussion",-188707284)))?"btn btn-default btn-sm active":"btn btn-default btn-sm"),((function (bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg){
return (function (){
if(cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"discussion","discussion",-188707284))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"discussion","discussion",-188707284));
}
});})(bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg))
,visible], null)),React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"skills","skills",958701426)))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg){
return (function (){
if(cljs.core._EQ_.call(null,visible,new cljs.core.Keyword(null,"skills","skills",958701426))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),false);
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"skills","skills",958701426));
}
});})(bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg))
},"Skills match"),React.DOM.a({"className": "btn btn-primary btn-sm", "onClick": ((function (bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg){
return (function (x){
return null;
});})(bid,basis,pid,___$1,map__133270,map__133270__$1,visible,bg))
},"Accept this bid")))),(cljs.core.truth_(visible)?React.DOM.div({"className": "row", "style": {"background-color": bg, "padding": "5px"}},React.DOM.div({"className": "col-md-12"},(function (){var pred__133272 = cljs.core._EQ_;
var expr__133273 = visible;
if(cljs.core.truth_(pred__133272.call(null,new cljs.core.Keyword(null,"discussion","discussion",-188707284),expr__133273))){
return om.core.build.call(null,biomarket.comments.comments,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(bid)], null));
} else {
if(cljs.core.truth_(pred__133272.call(null,new cljs.core.Keyword(null,"skills","skills",958701426),expr__133273))){
return om.core.build.call(null,biomarket.skills.skill_tags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.project,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return null;
}
}
})())):null));
});

biomarket.bids.t_biomarket$bids133266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-display","bid-display",851681594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133267","meta133267",554128579,null)], null);
});

biomarket.bids.t_biomarket$bids133266.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133266.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133266";

biomarket.bids.t_biomarket$bids133266.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133266");
});

biomarket.bids.__GT_t_biomarket$bids133266 = (function biomarket$bids$bid_display_$___GT_t_biomarket$bids133266(bid_display__$1,project__$1,owner__$1,meta133267){
return (new biomarket.bids.t_biomarket$bids133266(bid_display__$1,project__$1,owner__$1,meta133267));
});

}

return (new biomarket.bids.t_biomarket$bids133266(biomarket$bids$bid_display,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.bids.bid_manage = (function biomarket$bids$bid_manage(project,owner){
if(typeof biomarket.bids.t_biomarket$bids133282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillReceiveProps}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.bids.t_biomarket$bids133282 = (function (bid_manage,project,owner,meta133283){
this.bid_manage = bid_manage;
this.project = project;
this.owner = owner;
this.meta133283 = meta133283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133284,meta133283__$1){
var self__ = this;
var _133284__$1 = this;
return (new biomarket.bids.t_biomarket$bids133282(self__.bid_manage,self__.project,self__.owner,meta133283__$1));
});

biomarket.bids.t_biomarket$bids133282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133284){
var self__ = this;
var _133284__$1 = this;
return self__.meta133283;
});

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,self__.project),new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.atom.call(null,(0))], null);
});

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"best-bids","best-bids",36573545),biomarket.bids.sort_best_bids.call(null,np));
});

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids133282.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133285){
var self__ = this;
var map__133286 = p__133285;
var map__133286__$1 = ((((!((map__133286 == null)))?((((map__133286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133286):map__133286);
var best_bids = cljs.core.get.call(null,map__133286__$1,new cljs.core.Keyword(null,"best-bids","best-bids",36573545));
var counter = cljs.core.get.call(null,map__133286__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "container-fluid", "style": {"padding-top": "20px"}},cljs.core.map.call(null,((function (___$1,map__133286,map__133286__$1,best_bids,counter){
return (function (p1__133275_SHARP_){
return om.core.build.call(null,biomarket.bids.bid_display,cljs.core.assoc.call(null,self__.project,new cljs.core.Keyword(null,"bid","bid",-1944960257),p1__133275_SHARP_,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.swap_BANG_.call(null,counter,cljs.core.inc)));
});})(___$1,map__133286,map__133286__$1,best_bids,counter))
,best_bids));
});

biomarket.bids.t_biomarket$bids133282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-manage","bid-manage",-398018415,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133283","meta133283",-1161131887,null)], null);
});

biomarket.bids.t_biomarket$bids133282.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133282.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133282";

biomarket.bids.t_biomarket$bids133282.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133282");
});

biomarket.bids.__GT_t_biomarket$bids133282 = (function biomarket$bids$bid_manage_$___GT_t_biomarket$bids133282(bid_manage__$1,project__$1,owner__$1,meta133283){
return (new biomarket.bids.t_biomarket$bids133282(bid_manage__$1,project__$1,owner__$1,meta133283));
});

}

return (new biomarket.bids.t_biomarket$bids133282(biomarket$bids$bid_manage,project,owner,cljs.core.PersistentArrayMap.EMPTY));
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
if(typeof biomarket.bids.t_biomarket$bids133298 !== 'undefined'){
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
biomarket.bids.t_biomarket$bids133298 = (function (bid_widget,project,owner,meta133299){
this.bid_widget = bid_widget;
this.project = project;
this.owner = owner;
this.meta133299 = meta133299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.bids.t_biomarket$bids133298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_133300,meta133299__$1){
var self__ = this;
var _133300__$1 = this;
return (new biomarket.bids.t_biomarket$bids133298(self__.bid_widget,self__.project,self__.owner,meta133299__$1));
});

biomarket.bids.t_biomarket$bids133298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_133300){
var self__ = this;
var _133300__$1 = this;
return self__.meta133299;
});

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IInitState$ = true;

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"inputs","inputs",865803858),null,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),null,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),null,new cljs.core.Keyword(null,"project","project",1124394579),self__.project,new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.gensym.call(null)], null);
});

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillReceiveProps$ = true;

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = (function (_,np){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"project","project",1124394579),np);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));
});

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillMount$ = true;

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"inputs","inputs",865803858),biomarket.bids.inputs.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,self__.owner));

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,self__.owner));

return biomarket.utilities.register_loop.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),((function (___$1){
return (function (o,p__133301){
var map__133302 = p__133301;
var map__133302__$1 = ((((!((map__133302 == null)))?((((map__133302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133302):map__133302);
var data = cljs.core.get.call(null,map__133302__$1,new cljs.core.Keyword(null,"data","data",-232669377));
biomarket.utilities.get_input.call(null,o,data);

om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"button-state","button-state",-1211301176),biomarket.bids.button_state.call(null,o));

return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),biomarket.bids.form_state.call(null,o));
});})(___$1))
);
});

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillUnmount$ = true;

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)));
});

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IRenderState$ = true;

biomarket.bids.t_biomarket$bids133298.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__133304){
var self__ = this;
var map__133305 = p__133304;
var map__133305__$1 = ((((!((map__133305 == null)))?((((map__133305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133305):map__133305);
var inputs = cljs.core.get.call(null,map__133305__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bid = cljs.core.get.call(null,map__133305__$1,new cljs.core.Keyword(null,"bid","bid",-1944960257));
var button_state = cljs.core.get.call(null,map__133305__$1,new cljs.core.Keyword(null,"button-state","button-state",-1211301176));
var form_state = cljs.core.get.call(null,map__133305__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var ___$1 = this;
var amount = new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(inputs);
return React.DOM.div({"style": {"text-align": "right"}},React.DOM.form(form_state,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "input-group"},React.DOM.div({"className": "input-group-addon"},"$"),om.dom.input.call(null,{"className": "form-control", "value": new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(amount), "ref": "bid", "type": new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(amount), "onChange": ((function (amount,___$1,map__133305,map__133305__$1,inputs,bid,button_state,form_state){
return (function (p1__133288_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"bid","bid",-1944960257)),new cljs.core.Keyword(null,"amount","amount",364489504),amount,p1__133288_SHARP_);
});})(amount,___$1,map__133305,map__133305__$1,inputs,bid,button_state,form_state))
}),React.DOM.div({"className": "input-group-addon"},new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(self__.project)))),cljs.core.apply.call(null,om.dom.a,button_state)));
});

biomarket.bids.t_biomarket$bids133298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bid-widget","bid-widget",-2027290212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta133299","meta133299",-114845594,null)], null);
});

biomarket.bids.t_biomarket$bids133298.cljs$lang$type = true;

biomarket.bids.t_biomarket$bids133298.cljs$lang$ctorStr = "biomarket.bids/t_biomarket$bids133298";

biomarket.bids.t_biomarket$bids133298.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.bids/t_biomarket$bids133298");
});

biomarket.bids.__GT_t_biomarket$bids133298 = (function biomarket$bids$bid_widget_$___GT_t_biomarket$bids133298(bid_widget__$1,project__$1,owner__$1,meta133299){
return (new biomarket.bids.t_biomarket$bids133298(bid_widget__$1,project__$1,owner__$1,meta133299));
});

}

return (new biomarket.bids.t_biomarket$bids133298(biomarket$bids$bid_widget,project,owner,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=bids.js.map