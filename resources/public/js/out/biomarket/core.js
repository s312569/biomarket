// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.core');
goog.require('cljs.core');
goog.require('biomarket.login');
goog.require('biomarket.utilities');
goog.require('taoensso.sente');
goog.require('secretary.core');
goog.require('biomarket.projects');
goog.require('om.dom');
goog.require('goog.history.EventType');
goog.require('biomarket.find');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('biomarket.dashboard');
var map__28840_28842 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__28840_28843__$1 = ((((!((map__28840_28842 == null)))?((((map__28840_28842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28840_28842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28840_28842):map__28840_28842);
var chsk_28844 = cljs.core.get.call(null,map__28840_28843__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_28845 = cljs.core.get.call(null,map__28840_28843__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_28846 = cljs.core.get.call(null,map__28840_28843__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_28847 = cljs.core.get.call(null,map__28840_28843__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
biomarket.core.chsk = chsk_28844;

biomarket.core.ch_chsk = ch_recv_28845;

biomarket.core.chsk_send_BANG_ = send_fn_28846;

biomarket.core.chsk_state = state_28847;
if(typeof biomarket.core._event_msg_handler !== 'undefined'){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
biomarket.core._event_msg_handler = (function (){var method_table__26596__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26597__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26598__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26600__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.core","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26600__auto__,method_table__26596__auto__,prefer_table__26597__auto__,method_cache__26598__auto__,cached_hierarchy__26599__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
biomarket.core.event_msg_handler = (function biomarket$core$event_msg_handler(p__28848){
var map__28851 = p__28848;
var map__28851__$1 = ((((!((map__28851 == null)))?((((map__28851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28851):map__28851);
var ev_msg = map__28851__$1;
var id = cljs.core.get.call(null,map__28851__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__28851__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__28851__$1,new cljs.core.Keyword(null,"event","event",301435442));
return biomarket.core._event_msg_handler.call(null,ev_msg);
});
cljs.core._add_method.call(null,biomarket.core._event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28853){
var map__28854 = p__28853;
var map__28854__$1 = ((((!((map__28854 == null)))?((((map__28854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28854):map__28854);
var ev_msg = map__28854__$1;
var event = cljs.core.get.call(null,map__28854__$1,new cljs.core.Keyword(null,"event","event",301435442));
return biomarket.utilities.log.call(null,[cljs.core.str("Unhandled event: "),cljs.core.str(event)].join(''));
}));
cljs.core._add_method.call(null,biomarket.core._event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28856){
var map__28857 = p__28856;
var map__28857__$1 = ((((!((map__28857 == null)))?((((map__28857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28857):map__28857);
var ev_msg = map__28857__$1;
var _QMARK_data = cljs.core.get.call(null,map__28857__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(_QMARK_data))){
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket successfully established!: "),cljs.core.str(_QMARK_data)].join(''));
} else {
return biomarket.utilities.log.call(null,[cljs.core.str("Channel socket state change: "),cljs.core.str(_QMARK_data)].join(''));
}
}));
cljs.core._add_method.call(null,biomarket.core._event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28859){
var map__28860 = p__28859;
var map__28860__$1 = ((((!((map__28860 == null)))?((((map__28860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28860):map__28860);
var ev_msg = map__28860__$1;
var _QMARK_data = cljs.core.get.call(null,map__28860__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return biomarket.utilities.log.call(null,[cljs.core.str("Push event from server: "),cljs.core.str(_QMARK_data)].join(''));
}));
cljs.core._add_method.call(null,biomarket.core._event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__28862){
var map__28863 = p__28862;
var map__28863__$1 = ((((!((map__28863 == null)))?((((map__28863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28863):map__28863);
var ev_msg = map__28863__$1;
var _QMARK_data = cljs.core.get.call(null,map__28863__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__28865 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__28865,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__28865,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__28865,(2),null);
return biomarket.utilities.log.call(null,[cljs.core.str("Handshake: "),cljs.core.str(_QMARK_data)].join(''));
}));
if(typeof biomarket.core.router_ !== 'undefined'){
} else {
biomarket.core.router_ = cljs.core.atom.call(null,null);
}
biomarket.core.stop_router_BANG_ = (function biomarket$core$stop_router_BANG_(){
var temp__4425__auto__ = cljs.core.deref.call(null,biomarket.core.router_);
if(cljs.core.truth_(temp__4425__auto__)){
var stop_f = temp__4425__auto__;
return stop_f.call(null);
} else {
return null;
}
});
biomarket.core.start_router_BANG_ = (function biomarket$core$start_router_BANG_(){
biomarket.core.stop_router_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,biomarket.core.router_,taoensso.sente.start_client_chsk_router_BANG_.call(null,biomarket.core.ch_chsk,biomarket.core.event_msg_handler));
});
biomarket.core.start_BANG_ = (function biomarket$core$start_BANG_(){
return biomarket.core.start_router_BANG_.call(null);
});
if(typeof biomarket.core._start_once !== 'undefined'){
} else {
biomarket.core._start_once = biomarket.core.start_BANG_.call(null);
}
biomarket.core.history = (new goog.History());
goog.events.listen(biomarket.core.history,goog.history.EventType.NAVIGATE,(function (e){
return secretary.core.dispatch_BANG_.call(null,e.token);
}));
biomarket.core.history.setEnabled(true);
biomarket.core.header = (function biomarket$core$header(current,owner){
if(typeof biomarket.core.t_biomarket$core28873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.core.t_biomarket$core28873 = (function (header,current,owner,meta28874){
this.header = header;
this.current = current;
this.owner = owner;
this.meta28874 = meta28874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core28873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28875,meta28874__$1){
var self__ = this;
var _28875__$1 = this;
return (new biomarket.core.t_biomarket$core28873(self__.header,self__.current,self__.owner,meta28874__$1));
});

biomarket.core.t_biomarket$core28873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28875){
var self__ = this;
var _28875__$1 = this;
return self__.meta28874;
});

biomarket.core.t_biomarket$core28873.prototype.om$core$IInitState$ = true;

biomarket.core.t_biomarket$core28873.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nav-items","nav-items",1888876708),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dashboard",new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Profile",new cljs.core.Keyword("biomarket.core","profile","biomarket.core/profile",1314416805)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["My jobs",new cljs.core.Keyword("biomarket.core","jobs","biomarket.core/jobs",979629095)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["My projects",new cljs.core.Keyword("biomarket.core","projects","biomarket.core/projects",-1689011104)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Find a project",new cljs.core.Keyword("biomarket.core","find","biomarket.core/find",-1434876009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Logout",new cljs.core.Keyword("biomarket.core","logout","biomarket.core/logout",-1518163198)], null)], null)], null);
});

biomarket.core.t_biomarket$core28873.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core28873.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__28876){
var self__ = this;
var map__28877 = p__28876;
var map__28877__$1 = ((((!((map__28877 == null)))?((((map__28877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28877):map__28877);
var nav_items = cljs.core.get.call(null,map__28877__$1,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708));
var ___$1 = this;
return React.DOM.nav({"className": "navbar navbar-default navbar-fixed-top"},React.DOM.div({"className": "container"},React.DOM.div({"className": "navbar-header"},React.DOM.a({"type": "button", "className": "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"},React.DOM.span({"className": "sr-only"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})),React.DOM.a({"className": "navbar-brand"},"Biomarket")),React.DOM.div({"id": "navbar", "class": "navbar-collapse collapse"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav navbar-nav"},cljs.core.map.call(null,((function (___$1,map__28877,map__28877__$1,nav_items){
return (function (p1__28866_SHARP_){
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,cljs.core.second.call(null,p1__28866_SHARP_)))?"active":null)},React.DOM.a({"onClick": ((function (___$1,map__28877,map__28877__$1,nav_items){
return (function (___$2){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436),cljs.core.second.call(null,p1__28866_SHARP_));
});})(___$1,map__28877,map__28877__$1,nav_items))
, "style": {"cursor": "pointer"}},cljs.core.first.call(null,p1__28866_SHARP_)));
});})(___$1,map__28877,map__28877__$1,nav_items))
,nav_items)))));
});

biomarket.core.t_biomarket$core28873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28874","meta28874",-1763566884,null)], null);
});

biomarket.core.t_biomarket$core28873.cljs$lang$type = true;

biomarket.core.t_biomarket$core28873.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core28873";

biomarket.core.t_biomarket$core28873.cljs$lang$ctorPrWriter = (function (this__26277__auto__,writer__26278__auto__,opt__26279__auto__){
return cljs.core._write.call(null,writer__26278__auto__,"biomarket.core/t_biomarket$core28873");
});

biomarket.core.__GT_t_biomarket$core28873 = (function biomarket$core$header_$___GT_t_biomarket$core28873(header__$1,current__$1,owner__$1,meta28874){
return (new biomarket.core.t_biomarket$core28873(header__$1,current__$1,owner__$1,meta28874));
});

}

return (new biomarket.core.t_biomarket$core28873(biomarket$core$header,current,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.app_control = (function biomarket$core$app_control(_,owner){
if(typeof biomarket.core.t_biomarket$core28891 !== 'undefined'){
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
biomarket.core.t_biomarket$core28891 = (function (app_control,_,owner,meta28892){
this.app_control = app_control;
this._ = _;
this.owner = owner;
this.meta28892 = meta28892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.core.t_biomarket$core28891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28893,meta28892__$1){
var self__ = this;
var _28893__$1 = this;
return (new biomarket.core.t_biomarket$core28891(self__.app_control,self__._,self__.owner,meta28892__$1));
});

biomarket.core.t_biomarket$core28891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28893){
var self__ = this;
var _28893__$1 = this;
return self__.meta28892;
});

biomarket.core.t_biomarket$core28891.prototype.om$core$IInitState$ = true;

biomarket.core.t_biomarket$core28891.prototype.om$core$IInitState$init_state$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093)], null);
});

biomarket.core.t_biomarket$core28891.prototype.om$core$IWillMount$ = true;

biomarket.core.t_biomarket$core28891.prototype.om$core$IWillMount$will_mount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.register_loop.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436),((function (___$2){
return (function (o,p__28894){
var map__28895 = p__28894;
var map__28895__$1 = ((((!((map__28895 == null)))?((((map__28895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);
var data = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,o,new cljs.core.Keyword(null,"current","current",-1088038603),data);
});})(___$2))
);
});

biomarket.core.t_biomarket$core28891.prototype.om$core$IWillUnmount$ = true;

biomarket.core.t_biomarket$core28891.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return biomarket.utilities.unsubscribe.call(null,self__.owner,new cljs.core.Keyword("biomarket.core","navigation","biomarket.core/navigation",1861020436));
});

biomarket.core.t_biomarket$core28891.prototype.om$core$IRenderState$ = true;

biomarket.core.t_biomarket$core28891.prototype.om$core$IRenderState$render_state$arity$2 = (function (___$1,p__28897){
var self__ = this;
var map__28898 = p__28897;
var map__28898__$1 = ((((!((map__28898 == null)))?((((map__28898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28898):map__28898);
var current = cljs.core.get.call(null,map__28898__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var nav_items = cljs.core.get.call(null,map__28898__$1,new cljs.core.Keyword(null,"nav-items","nav-items",1888876708));
var ___$2 = this;
return React.DOM.div({"text-align": "center"},om.core.build.call(null,biomarket.core.header,current),React.DOM.div({"style": {"padding-top": "20px"}}," "),(function (){var pred__28900 = cljs.core._EQ_;
var expr__28901 = current;
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","dash","biomarket.core/dash",1346561093),expr__28901))){
return om.core.build.call(null,biomarket.dashboard.dashboard,null);
} else {
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","profile","biomarket.core/profile",1314416805),expr__28901))){
return "Profile";
} else {
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","jobs","biomarket.core/jobs",979629095),expr__28901))){
return "Jobs";
} else {
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","find","biomarket.core/find",-1434876009),expr__28901))){
return om.core.build.call(null,biomarket.find.find_view,null);
} else {
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","projects","biomarket.core/projects",-1689011104),expr__28901))){
return om.core.build.call(null,biomarket.projects.projects_view_control,null);
} else {
if(cljs.core.truth_(pred__28900.call(null,new cljs.core.Keyword("biomarket.core","logout","biomarket.core/logout",-1518163198),expr__28901))){
return document.location = "/logout";
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28901)].join('')));
}
}
}
}
}
}
})());
});

biomarket.core.t_biomarket$core28891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app-control","app-control",-1831897035,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta28892","meta28892",425095378,null)], null);
});

biomarket.core.t_biomarket$core28891.cljs$lang$type = true;

biomarket.core.t_biomarket$core28891.cljs$lang$ctorStr = "biomarket.core/t_biomarket$core28891";

biomarket.core.t_biomarket$core28891.cljs$lang$ctorPrWriter = (function (this__26277__auto__,writer__26278__auto__,opt__26279__auto__){
return cljs.core._write.call(null,writer__26278__auto__,"biomarket.core/t_biomarket$core28891");
});

biomarket.core.__GT_t_biomarket$core28891 = (function biomarket$core$app_control_$___GT_t_biomarket$core28891(app_control__$1,___$1,owner__$1,meta28892){
return (new biomarket.core.t_biomarket$core28891(app_control__$1,___$1,owner__$1,meta28892));
});

}

return (new biomarket.core.t_biomarket$core28891(biomarket$core$app_control,_,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.core.init = (function biomarket$core$init(){
return om.core.root.call(null,biomarket.core.app_control,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app"),new cljs.core.Keyword(null,"shared","shared",-384145993),cljs.core.deref.call(null,biomarket.utilities.app_state)], null));
});
goog.exportSymbol('biomarket.core.init', biomarket.core.init);

//# sourceMappingURL=core.js.map