// Compiled by ClojureScript 1.8.51 {}
goog.provide('biomarket.utilities');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('taoensso.sente');
goog.require('cljs.pprint');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs_time.format');
goog.require('om.core');
goog.require('clojure.string');
biomarket.utilities.get_text = (function biomarket$utilities$get_text(e){
return e.target.value;
});
biomarket.utilities.log = (function biomarket$utilities$log(var_args){
var args__26945__auto__ = [];
var len__26938__auto___82698 = arguments.length;
var i__26939__auto___82699 = (0);
while(true){
if((i__26939__auto___82699 < len__26938__auto___82698)){
args__26945__auto__.push((arguments[i__26939__auto___82699]));

var G__82700 = (i__26939__auto___82699 + (1));
i__26939__auto___82699 = G__82700;
continue;
} else {
}
break;
}

var argseq__26946__auto__ = ((((0) < args__26945__auto__.length))?(new cljs.core.IndexedSeq(args__26945__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26946__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq82697){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq82697));
});
biomarket.utilities.datestring__GT_readable = (function biomarket$utilities$datestring__GT_readable(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"rfc822","rfc822",-404628697));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.ds__GT_date_hour_minute = (function biomarket$utilities$ds__GT_date_hour_minute(string){
var rfc = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-hour-minute","date-hour-minute",1629918346));
var f = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"basic-date-time","basic-date-time",1525413604));
return cljs_time.format.unparse.call(null,rfc,cljs_time.format.parse.call(null,f,string));
});
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__82701){
var map__82704 = p__82701;
var map__82704__$1 = ((((!((map__82704 == null)))?((((map__82704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82704):map__82704);
var status = cljs.core.get.call(null,map__82704__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__82704__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function() { 
var G__82706__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__82706 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__82707__i = 0, G__82707__a = new Array(arguments.length -  2);
while (G__82707__i < G__82707__a.length) {G__82707__a[G__82707__i] = arguments[G__82707__i + 2]; ++G__82707__i;}
  args = new cljs.core.IndexedSeq(G__82707__a,0);
} 
return G__82706__delegate.call(this,o,d,args);};
G__82706.cljs$lang$maxFixedArity = 2;
G__82706.cljs$lang$applyTo = (function (arglist__82708){
var o = cljs.core.first(arglist__82708);
arglist__82708 = cljs.core.next(arglist__82708);
var d = cljs.core.first(arglist__82708);
var args = cljs.core.rest(arglist__82708);
return G__82706__delegate(o,d,args);
});
G__82706.cljs$core$IFn$_invoke$arity$variadic = G__82706__delegate;
return G__82706;
})()
;})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__82712__delegate = function (owner,p__82709,_){
var map__82710 = p__82709;
var map__82710__$1 = ((((!((map__82710 == null)))?((((map__82710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82710):map__82710);
var data = cljs.core.get.call(null,map__82710__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__82712 = function (owner,p__82709,var_args){
var _ = null;
if (arguments.length > 2) {
var G__82713__i = 0, G__82713__a = new Array(arguments.length -  2);
while (G__82713__i < G__82713__a.length) {G__82713__a[G__82713__i] = arguments[G__82713__i + 2]; ++G__82713__i;}
  _ = new cljs.core.IndexedSeq(G__82713__a,0);
} 
return G__82712__delegate.call(this,owner,p__82709,_);};
G__82712.cljs$lang$maxFixedArity = 2;
G__82712.cljs$lang$applyTo = (function (arglist__82714){
var owner = cljs.core.first(arglist__82714);
arglist__82714 = cljs.core.next(arglist__82714);
var p__82709 = cljs.core.first(arglist__82714);
var _ = cljs.core.rest(arglist__82714);
return G__82712__delegate(owner,p__82709,_);
});
G__82712.cljs$core$IFn$_invoke$arity$variadic = G__82712__delegate;
return G__82712;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__82715,func){
var map__82716 = p__82715;
var map__82716__$1 = ((((!((map__82716 == null)))?((((map__82716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82716):map__82716);
var data = cljs.core.get.call(null,map__82716__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__82718){
var map__82719 = p__82718;
var map__82719__$1 = ((((!((map__82719 == null)))?((((map__82719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82719):map__82719);
var data = cljs.core.get.call(null,map__82719__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__82721){
var map__82722 = p__82721;
var map__82722__$1 = ((((!((map__82722 == null)))?((((map__82722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82722):map__82722);
var data = cljs.core.get.call(null,map__82722__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__82726){
var map__82727 = p__82726;
var map__82727__$1 = ((((!((map__82727 == null)))?((((map__82727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82727):map__82727);
var data = cljs.core.get.call(null,map__82727__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__82727,map__82727__$1,data){
return (function (p1__82724_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__82724_SHARP_);
});})(map__82727,map__82727__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__82727,map__82727__$1,data){
return (function (p1__82725_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82725_SHARP_));
});})(status__GT_view,cv,projs,map__82727,map__82727__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args82729 = [];
var len__26938__auto___82769 = arguments.length;
var i__26939__auto___82770 = (0);
while(true){
if((i__26939__auto___82770 < len__26938__auto___82769)){
args82729.push((arguments[i__26939__auto___82770]));

var G__82771 = (i__26939__auto___82770 + (1));
i__26939__auto___82770 = G__82771;
continue;
} else {
}
break;
}

var G__82731 = args82729.length;
switch (G__82731) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args82729.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__28683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28683__auto__,c,nc,events){
return (function (){
var f__28684__auto__ = (function (){var switch__28662__auto__ = ((function (c__28683__auto__,c,nc,events){
return (function (state_82750){
var state_val_82751 = (state_82750[(1)]);
if((state_val_82751 === (1))){
var state_82750__$1 = state_82750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82750__$1,(2),events);
} else {
if((state_val_82751 === (2))){
var inst_82733 = (state_82750[(2)]);
var inst_82734 = inst_82733;
var state_82750__$1 = (function (){var statearr_82752 = state_82750;
(statearr_82752[(7)] = inst_82734);

return statearr_82752;
})();
var statearr_82753_82773 = state_82750__$1;
(statearr_82753_82773[(2)] = null);

(statearr_82753_82773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82751 === (3))){
var inst_82734 = (state_82750[(7)]);
var inst_82736 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_82734);
var inst_82737 = cljs.core._EQ_.call(null,inst_82736,new cljs.core.Keyword(null,"end","end",-268185958));
var state_82750__$1 = state_82750;
if(inst_82737){
var statearr_82754_82774 = state_82750__$1;
(statearr_82754_82774[(1)] = (5));

} else {
var statearr_82755_82775 = state_82750__$1;
(statearr_82755_82775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82751 === (4))){
var inst_82748 = (state_82750[(2)]);
var state_82750__$1 = state_82750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82750__$1,inst_82748);
} else {
if((state_val_82751 === (5))){
var state_82750__$1 = state_82750;
var statearr_82756_82776 = state_82750__$1;
(statearr_82756_82776[(2)] = null);

(statearr_82756_82776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82751 === (6))){
var inst_82734 = (state_82750[(7)]);
var inst_82740 = func.call(null,owner,inst_82734);
var state_82750__$1 = (function (){var statearr_82757 = state_82750;
(statearr_82757[(8)] = inst_82740);

return statearr_82757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82750__$1,(8),events);
} else {
if((state_val_82751 === (7))){
var inst_82745 = (state_82750[(2)]);
var inst_82746 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_82750__$1 = (function (){var statearr_82758 = state_82750;
(statearr_82758[(9)] = inst_82745);

return statearr_82758;
})();
var statearr_82759_82777 = state_82750__$1;
(statearr_82759_82777[(2)] = inst_82746);

(statearr_82759_82777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82751 === (8))){
var inst_82742 = (state_82750[(2)]);
var inst_82734 = inst_82742;
var state_82750__$1 = (function (){var statearr_82760 = state_82750;
(statearr_82760[(7)] = inst_82734);

return statearr_82760;
})();
var statearr_82761_82778 = state_82750__$1;
(statearr_82761_82778[(2)] = null);

(statearr_82761_82778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28683__auto__,c,nc,events))
;
return ((function (switch__28662__auto__,c__28683__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__28663__auto__ = null;
var biomarket$utilities$state_machine__28663__auto____0 = (function (){
var statearr_82765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_82765[(0)] = biomarket$utilities$state_machine__28663__auto__);

(statearr_82765[(1)] = (1));

return statearr_82765;
});
var biomarket$utilities$state_machine__28663__auto____1 = (function (state_82750){
while(true){
var ret_value__28664__auto__ = (function (){try{while(true){
var result__28665__auto__ = switch__28662__auto__.call(null,state_82750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28665__auto__;
}
break;
}
}catch (e82766){if((e82766 instanceof Object)){
var ex__28666__auto__ = e82766;
var statearr_82767_82779 = state_82750;
(statearr_82767_82779[(5)] = ex__28666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82780 = state_82750;
state_82750 = G__82780;
continue;
} else {
return ret_value__28664__auto__;
}
break;
}
});
biomarket$utilities$state_machine__28663__auto__ = function(state_82750){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__28663__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__28663__auto____1.call(this,state_82750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__28663__auto____0;
biomarket$utilities$state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__28663__auto____1;
return biomarket$utilities$state_machine__28663__auto__;
})()
;})(switch__28662__auto__,c__28683__auto__,c,nc,events))
})();
var state__28685__auto__ = (function (){var statearr_82768 = f__28684__auto__.call(null);
(statearr_82768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28683__auto__);

return statearr_82768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28685__auto__);
});})(c__28683__auto__,c,nc,events))
);

return c__28683__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26945__auto__ = [];
var len__26938__auto___82787 = arguments.length;
var i__26939__auto___82788 = (0);
while(true){
if((i__26939__auto___82788 < len__26938__auto___82787)){
args__26945__auto__.push((arguments[i__26939__auto___82788]));

var G__82789 = (i__26939__auto___82788 + (1));
i__26939__auto___82788 = G__82789;
continue;
} else {
}
break;
}

var argseq__26946__auto__ = ((((1) < args__26945__auto__.length))?(new cljs.core.IndexedSeq(args__26945__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26946__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__82783 = cljs.core.seq.call(null,topics);
var chunk__82784 = null;
var count__82785 = (0);
var i__82786 = (0);
while(true){
if((i__82786 < count__82785)){
var t = cljs.core._nth.call(null,chunk__82784,i__82786);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__82790 = seq__82783;
var G__82791 = chunk__82784;
var G__82792 = count__82785;
var G__82793 = (i__82786 + (1));
seq__82783 = G__82790;
chunk__82784 = G__82791;
count__82785 = G__82792;
i__82786 = G__82793;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__82783);
if(temp__4425__auto__){
var seq__82783__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82783__$1)){
var c__26679__auto__ = cljs.core.chunk_first.call(null,seq__82783__$1);
var G__82794 = cljs.core.chunk_rest.call(null,seq__82783__$1);
var G__82795 = c__26679__auto__;
var G__82796 = cljs.core.count.call(null,c__26679__auto__);
var G__82797 = (0);
seq__82783 = G__82794;
chunk__82784 = G__82795;
count__82785 = G__82796;
i__82786 = G__82797;
continue;
} else {
var t = cljs.core.first.call(null,seq__82783__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__82798 = cljs.core.next.call(null,seq__82783__$1);
var G__82799 = null;
var G__82800 = (0);
var G__82801 = (0);
seq__82783 = G__82798;
chunk__82784 = G__82799;
count__82785 = G__82800;
i__82786 = G__82801;
continue;
}
} else {
return null;
}
}
break;
}
});

biomarket.utilities.unsubscribe.cljs$lang$maxFixedArity = (1);

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq82781){
var G__82782 = cljs.core.first.call(null,seq82781);
var seq82781__$1 = cljs.core.next.call(null,seq82781);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__82782,seq82781__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__28683__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28683__auto__,nc,events){
return (function (){
var f__28684__auto__ = (function (){var switch__28662__auto__ = ((function (c__28683__auto__,nc,events){
return (function (state_82857){
var state_val_82858 = (state_82857[(1)]);
if((state_val_82858 === (1))){
var state_82857__$1 = state_82857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82857__$1,(2),events);
} else {
if((state_val_82858 === (2))){
var inst_82840 = (state_82857[(2)]);
var inst_82841 = inst_82840;
var state_82857__$1 = (function (){var statearr_82859 = state_82857;
(statearr_82859[(7)] = inst_82841);

return statearr_82859;
})();
var statearr_82860_82876 = state_82857__$1;
(statearr_82860_82876[(2)] = null);

(statearr_82860_82876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82858 === (3))){
var inst_82841 = (state_82857[(7)]);
var inst_82843 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_82841);
var inst_82844 = cljs.core._EQ_.call(null,inst_82843,new cljs.core.Keyword(null,"end","end",-268185958));
var state_82857__$1 = state_82857;
if(inst_82844){
var statearr_82861_82877 = state_82857__$1;
(statearr_82861_82877[(1)] = (5));

} else {
var statearr_82862_82878 = state_82857__$1;
(statearr_82862_82878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82858 === (4))){
var inst_82855 = (state_82857[(2)]);
var state_82857__$1 = state_82857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_82857__$1,inst_82855);
} else {
if((state_val_82858 === (5))){
var state_82857__$1 = state_82857;
var statearr_82863_82879 = state_82857__$1;
(statearr_82863_82879[(2)] = null);

(statearr_82863_82879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82858 === (6))){
var inst_82841 = (state_82857[(7)]);
var inst_82847 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_82841);
var state_82857__$1 = (function (){var statearr_82864 = state_82857;
(statearr_82864[(8)] = inst_82847);

return statearr_82864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_82857__$1,(8),events);
} else {
if((state_val_82858 === (7))){
var inst_82852 = (state_82857[(2)]);
var inst_82853 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_82857__$1 = (function (){var statearr_82865 = state_82857;
(statearr_82865[(9)] = inst_82852);

return statearr_82865;
})();
var statearr_82866_82880 = state_82857__$1;
(statearr_82866_82880[(2)] = inst_82853);

(statearr_82866_82880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82858 === (8))){
var inst_82849 = (state_82857[(2)]);
var inst_82841 = inst_82849;
var state_82857__$1 = (function (){var statearr_82867 = state_82857;
(statearr_82867[(7)] = inst_82841);

return statearr_82867;
})();
var statearr_82868_82881 = state_82857__$1;
(statearr_82868_82881[(2)] = null);

(statearr_82868_82881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28683__auto__,nc,events))
;
return ((function (switch__28662__auto__,c__28683__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0 = (function (){
var statearr_82872 = [null,null,null,null,null,null,null,null,null,null];
(statearr_82872[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__);

(statearr_82872[(1)] = (1));

return statearr_82872;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1 = (function (state_82857){
while(true){
var ret_value__28664__auto__ = (function (){try{while(true){
var result__28665__auto__ = switch__28662__auto__.call(null,state_82857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28665__auto__;
}
break;
}
}catch (e82873){if((e82873 instanceof Object)){
var ex__28666__auto__ = e82873;
var statearr_82874_82882 = state_82857;
(statearr_82874_82882[(5)] = ex__28666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_82857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82883 = state_82857;
state_82857 = G__82883;
continue;
} else {
return ret_value__28664__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__ = function(state_82857){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1.call(this,state_82857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__28663__auto__;
})()
;})(switch__28662__auto__,c__28683__auto__,nc,events))
})();
var state__28685__auto__ = (function (){var statearr_82875 = f__28684__auto__.call(null);
(statearr_82875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28683__auto__);

return statearr_82875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28685__auto__);
});})(c__28683__auto__,nc,events))
);

return c__28683__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities82887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82887 = (function (show_default,_,owner,meta82888){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta82888 = meta82888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82889,meta82888__$1){
var self__ = this;
var _82889__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82887(self__.show_default,self__._,self__.owner,meta82888__$1));
});

biomarket.utilities.t_biomarket$utilities82887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82889){
var self__ = this;
var _82889__$1 = this;
return self__.meta82888;
});

biomarket.utilities.t_biomarket$utilities82887.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82887.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities82887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta82888","meta82888",2003915043,null)], null);
});

biomarket.utilities.t_biomarket$utilities82887.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82887.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82887";

biomarket.utilities.t_biomarket$utilities82887.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82887");
});

biomarket.utilities.__GT_t_biomarket$utilities82887 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities82887(show_default__$1,___$1,owner__$1,meta82888){
return (new biomarket.utilities.t_biomarket$utilities82887(show_default__$1,___$1,owner__$1,meta82888));
});

}

return (new biomarket.utilities.t_biomarket$utilities82887(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__82890,owner){
var map__82901 = p__82890;
var map__82901__$1 = ((((!((map__82901 == null)))?((((map__82901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82901):map__82901);
var project = map__82901__$1;
var links = cljs.core.get.call(null,map__82901__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__82901__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities82903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82903 = (function (bottom_skel,p__82890,owner,map__82901,project,links,widget,meta82904){
this.bottom_skel = bottom_skel;
this.p__82890 = p__82890;
this.owner = owner;
this.map__82901 = map__82901;
this.project = project;
this.links = links;
this.widget = widget;
this.meta82904 = meta82904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__82901,map__82901__$1,project,links,widget){
return (function (_82905,meta82904__$1){
var self__ = this;
var _82905__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82903(self__.bottom_skel,self__.p__82890,self__.owner,self__.map__82901,self__.project,self__.links,self__.widget,meta82904__$1));
});})(map__82901,map__82901__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities82903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__82901,map__82901__$1,project,links,widget){
return (function (_82905){
var self__ = this;
var _82905__$1 = this;
return self__.meta82904;
});})(map__82901,map__82901__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities82903.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82903.prototype.om$core$IRender$render$arity$1 = ((function (map__82901,map__82901__$1,project,links,widget){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-6"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__28842__auto____$1,map__82901,map__82901__$1,project,links,widget){
return (function (p__82906){
var vec__82907 = p__82906;
var tag = cljs.core.nth.call(null,vec__82907,(0),null);
var ele = cljs.core.nth.call(null,vec__82907,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default active":"btn btn-default"), "onClick": ((function (vec__82907,tag,ele,visible,this__28842__auto____$1,map__82901,map__82901__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__82907,tag,ele,visible,this__28842__auto____$1,map__82901,map__82901__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__28842__auto____$1,map__82901,map__82901__$1,project,links,widget))
,self__.links))),React.DOM.div({"className": "col-md-6"},(cljs.core.truth_(self__.widget)?cljs.core.apply.call(null,om.core.build,cljs.core.first.call(null,self__.widget),cljs.core.rest.call(null,self__.widget)):null))),(function (){var pred__82908 = cljs.core._EQ_;
var expr__82909 = visible;
if(cljs.core.truth_(pred__82908.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__82909))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__82901,map__82901__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities82903.getBasis = ((function (map__82901,map__82901__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82890","p__82890",256147562,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__82901","map__82901",-2019005383,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta82904","meta82904",1484737529,null)], null);
});})(map__82901,map__82901__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities82903.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82903.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82903";

biomarket.utilities.t_biomarket$utilities82903.cljs$lang$ctorPrWriter = ((function (map__82901,map__82901__$1,project,links,widget){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82903");
});})(map__82901,map__82901__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities82903 = ((function (map__82901,map__82901__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities82903(bottom_skel__$1,p__82890__$1,owner__$1,map__82901__$2,project__$1,links__$1,widget__$1,meta82904){
return (new biomarket.utilities.t_biomarket$utilities82903(bottom_skel__$1,p__82890__$1,owner__$1,map__82901__$2,project__$1,links__$1,widget__$1,meta82904));
});})(map__82901,map__82901__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities82903(biomarket$utilities$bottom_skel,p__82890,owner,map__82901__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
biomarket.utilities.split_projects = (function biomarket$utilities$split_projects(projects){
var pn = cljs.core.count.call(null,projects);
var n = ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,pn,(2))))?cljs.core.quot.call(null,pn,(2)):((1) + cljs.core.quot.call(null,pn,(2))));
return cljs.core.partition_all.call(null,n,projects);
});
biomarket.utilities.color_span = (function biomarket$utilities$color_span(text,color){
return React.DOM.span({"style": {"color": color, "font-weight": "bold"}},text);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities82920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82920 = (function (more_less_text,text,owner,meta82921){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta82921 = meta82921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82922,meta82921__$1){
var self__ = this;
var _82922__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82920(self__.more_less_text,self__.text,self__.owner,meta82921__$1));
});

biomarket.utilities.t_biomarket$utilities82920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82922){
var self__ = this;
var _82922__$1 = this;
return self__.meta82921;
});

biomarket.utilities.t_biomarket$utilities82920.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities82920.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities82920.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities82920.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__82923){
var self__ = this;
var map__82924 = p__82923;
var map__82924__$1 = ((((!((map__82924 == null)))?((((map__82924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82924):map__82924);
var showing = cljs.core.get.call(null,map__82924__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__82926 = cljs.core._EQ_;
var expr__82927 = showing;
if(cljs.core.truth_(pred__82926.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__82927))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__82926,expr__82927,___$1,map__82924,map__82924__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__82926,expr__82927,___$1,map__82924,map__82924__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__82926.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__82927))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__82926,expr__82927,___$1,map__82924,map__82924__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__82926,expr__82927,___$1,map__82924,map__82924__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__82927)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities82920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta82921","meta82921",-804354314,null)], null);
});

biomarket.utilities.t_biomarket$utilities82920.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82920.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82920";

biomarket.utilities.t_biomarket$utilities82920.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82920");
});

biomarket.utilities.__GT_t_biomarket$utilities82920 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities82920(more_less_text__$1,text__$1,owner__$1,meta82921){
return (new biomarket.utilities.t_biomarket$utilities82920(more_less_text__$1,text__$1,owner__$1,meta82921));
});

}

return (new biomarket.utilities.t_biomarket$utilities82920(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities82933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82933 = (function (control_buttons,inputs,owner,meta82934){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta82934 = meta82934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82935,meta82934__$1){
var self__ = this;
var _82935__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82933(self__.control_buttons,self__.inputs,self__.owner,meta82934__$1));
});

biomarket.utilities.t_biomarket$utilities82933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82935){
var self__ = this;
var _82935__$1 = this;
return self__.meta82934;
});

biomarket.utilities.t_biomarket$utilities82933.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82933.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__28842__auto____$1){
return (function (p1__82929_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__82929_SHARP_)},cljs.core.first.call(null,p1__82929_SHARP_));
});})(this__28842__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities82933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta82934","meta82934",838933342,null)], null);
});

biomarket.utilities.t_biomarket$utilities82933.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82933.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82933";

biomarket.utilities.t_biomarket$utilities82933.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82933");
});

biomarket.utilities.__GT_t_biomarket$utilities82933 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities82933(control_buttons__$1,inputs__$1,owner__$1,meta82934){
return (new biomarket.utilities.t_biomarket$utilities82933(control_buttons__$1,inputs__$1,owner__$1,meta82934));
});

}

return (new biomarket.utilities.t_biomarket$utilities82933(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__82936,owner){
var vec__82941 = p__82936;
var text = cljs.core.nth.call(null,vec__82941,(0),null);
var topic = cljs.core.nth.call(null,vec__82941,(1),null);
var tag = cljs.core.nth.call(null,vec__82941,(2),null);
var current = cljs.core.nth.call(null,vec__82941,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities82942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82942 = (function (menu_item,p__82936,owner,vec__82941,text,topic,tag,current,meta82943){
this.menu_item = menu_item;
this.p__82936 = p__82936;
this.owner = owner;
this.vec__82941 = vec__82941;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta82943 = meta82943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__82941,text,topic,tag,current){
return (function (_82944,meta82943__$1){
var self__ = this;
var _82944__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82942(self__.menu_item,self__.p__82936,self__.owner,self__.vec__82941,self__.text,self__.topic,self__.tag,self__.current,meta82943__$1));
});})(vec__82941,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities82942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__82941,text,topic,tag,current){
return (function (_82944){
var self__ = this;
var _82944__$1 = this;
return self__.meta82943;
});})(vec__82941,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities82942.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82942.prototype.om$core$IRender$render$arity$1 = ((function (vec__82941,text,topic,tag,current){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__28842__auto____$1,vec__82941,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__28842__auto____$1,vec__82941,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__82941,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities82942.getBasis = ((function (vec__82941,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82936","p__82936",1404605504,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__82941","vec__82941",-291770743,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta82943","meta82943",1855875278,null)], null);
});})(vec__82941,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities82942.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82942.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82942";

biomarket.utilities.t_biomarket$utilities82942.cljs$lang$ctorPrWriter = ((function (vec__82941,text,topic,tag,current){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82942");
});})(vec__82941,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities82942 = ((function (vec__82941,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities82942(menu_item__$1,p__82936__$1,owner__$1,vec__82941__$1,text__$1,topic__$1,tag__$1,current__$1,meta82943){
return (new biomarket.utilities.t_biomarket$utilities82942(menu_item__$1,p__82936__$1,owner__$1,vec__82941__$1,text__$1,topic__$1,tag__$1,current__$1,meta82943));
});})(vec__82941,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities82942(biomarket$utilities$menu_item,p__82936,owner,vec__82941,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__82946,owner){
var vec__82951 = p__82946;
var current = cljs.core.nth.call(null,vec__82951,(0),null);
var inputs = cljs.core.nth.call(null,vec__82951,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__82951,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities82952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82952 = (function (top_navigation,p__82946,owner,vec__82951,current,inputs,nav_tag,meta82953){
this.top_navigation = top_navigation;
this.p__82946 = p__82946;
this.owner = owner;
this.vec__82951 = vec__82951;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta82953 = meta82953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__82951,current,inputs,nav_tag){
return (function (_82954,meta82953__$1){
var self__ = this;
var _82954__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82952(self__.top_navigation,self__.p__82946,self__.owner,self__.vec__82951,self__.current,self__.inputs,self__.nav_tag,meta82953__$1));
});})(vec__82951,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities82952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__82951,current,inputs,nav_tag){
return (function (_82954){
var self__ = this;
var _82954__$1 = this;
return self__.meta82953;
});})(vec__82951,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities82952.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82952.prototype.om$core$IRender$render$arity$1 = ((function (vec__82951,current,inputs,nav_tag){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__28842__auto____$1,vec__82951,current,inputs,nav_tag){
return (function (p1__82945_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__82945_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__28842__auto____$1,vec__82951,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__82951,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities82952.getBasis = ((function (vec__82951,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82946","p__82946",1193934553,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__82951","vec__82951",-2136065553,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta82953","meta82953",-2012690187,null)], null);
});})(vec__82951,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities82952.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82952.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82952";

biomarket.utilities.t_biomarket$utilities82952.cljs$lang$ctorPrWriter = ((function (vec__82951,current,inputs,nav_tag){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82952");
});})(vec__82951,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities82952 = ((function (vec__82951,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities82952(top_navigation__$1,p__82946__$1,owner__$1,vec__82951__$1,current__$1,inputs__$1,nav_tag__$1,meta82953){
return (new biomarket.utilities.t_biomarket$utilities82952(top_navigation__$1,p__82946__$1,owner__$1,vec__82951__$1,current__$1,inputs__$1,nav_tag__$1,meta82953));
});})(vec__82951,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities82952(biomarket$utilities$top_navigation,p__82946,owner,vec__82951,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__82955,owner){
var vec__82960 = p__82955;
var padding = cljs.core.nth.call(null,vec__82960,(0),null);
var value = cljs.core.nth.call(null,vec__82960,(1),null);
var func = cljs.core.nth.call(null,vec__82960,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities82961 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82961 = (function (padded_button,p__82955,owner,vec__82960,padding,value,func,meta82962){
this.padded_button = padded_button;
this.p__82955 = p__82955;
this.owner = owner;
this.vec__82960 = vec__82960;
this.padding = padding;
this.value = value;
this.func = func;
this.meta82962 = meta82962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__82960,padding,value,func){
return (function (_82963,meta82962__$1){
var self__ = this;
var _82963__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82961(self__.padded_button,self__.p__82955,self__.owner,self__.vec__82960,self__.padding,self__.value,self__.func,meta82962__$1));
});})(vec__82960,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities82961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__82960,padding,value,func){
return (function (_82963){
var self__ = this;
var _82963__$1 = this;
return self__.meta82962;
});})(vec__82960,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities82961.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82961.prototype.om$core$IRender$render$arity$1 = ((function (vec__82960,padding,value,func){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__82960,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities82961.getBasis = ((function (vec__82960,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82955","p__82955",-1747813632,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__82960","vec__82960",1839904165,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta82962","meta82962",-521076113,null)], null);
});})(vec__82960,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities82961.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82961.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82961";

biomarket.utilities.t_biomarket$utilities82961.cljs$lang$ctorPrWriter = ((function (vec__82960,padding,value,func){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82961");
});})(vec__82960,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities82961 = ((function (vec__82960,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities82961(padded_button__$1,p__82955__$1,owner__$1,vec__82960__$1,padding__$1,value__$1,func__$1,meta82962){
return (new biomarket.utilities.t_biomarket$utilities82961(padded_button__$1,p__82955__$1,owner__$1,vec__82960__$1,padding__$1,value__$1,func__$1,meta82962));
});})(vec__82960,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities82961(biomarket$utilities$padded_button,p__82955,owner,vec__82960,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__82964,owner){
var vec__82969 = p__82964;
var padding = cljs.core.nth.call(null,vec__82969,(0),null);
var value = cljs.core.nth.call(null,vec__82969,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities82970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82970 = (function (padded_button_disabled,p__82964,owner,vec__82969,padding,value,meta82971){
this.padded_button_disabled = padded_button_disabled;
this.p__82964 = p__82964;
this.owner = owner;
this.vec__82969 = vec__82969;
this.padding = padding;
this.value = value;
this.meta82971 = meta82971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__82969,padding,value){
return (function (_82972,meta82971__$1){
var self__ = this;
var _82972__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82970(self__.padded_button_disabled,self__.p__82964,self__.owner,self__.vec__82969,self__.padding,self__.value,meta82971__$1));
});})(vec__82969,padding,value))
;

biomarket.utilities.t_biomarket$utilities82970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__82969,padding,value){
return (function (_82972){
var self__ = this;
var _82972__$1 = this;
return self__.meta82971;
});})(vec__82969,padding,value))
;

biomarket.utilities.t_biomarket$utilities82970.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82970.prototype.om$core$IRender$render$arity$1 = ((function (vec__82969,padding,value){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__82969,padding,value))
;

biomarket.utilities.t_biomarket$utilities82970.getBasis = ((function (vec__82969,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82964","p__82964",618620228,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__82969","vec__82969",2130051998,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta82971","meta82971",1171733000,null)], null);
});})(vec__82969,padding,value))
;

biomarket.utilities.t_biomarket$utilities82970.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82970.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82970";

biomarket.utilities.t_biomarket$utilities82970.cljs$lang$ctorPrWriter = ((function (vec__82969,padding,value){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82970");
});})(vec__82969,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities82970 = ((function (vec__82969,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities82970(padded_button_disabled__$1,p__82964__$1,owner__$1,vec__82969__$1,padding__$1,value__$1,meta82971){
return (new biomarket.utilities.t_biomarket$utilities82970(padded_button_disabled__$1,p__82964__$1,owner__$1,vec__82969__$1,padding__$1,value__$1,meta82971));
});})(vec__82969,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities82970(biomarket$utilities$padded_button_disabled,p__82964,owner,vec__82969,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities82976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82976 = (function (waiting,_,owner,meta82977){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta82977 = meta82977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82978,meta82977__$1){
var self__ = this;
var _82978__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82976(self__.waiting,self__._,self__.owner,meta82977__$1));
});

biomarket.utilities.t_biomarket$utilities82976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82978){
var self__ = this;
var _82978__$1 = this;
return self__.meta82977;
});

biomarket.utilities.t_biomarket$utilities82976.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82976.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities82976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta82977","meta82977",-1074710896,null)], null);
});

biomarket.utilities.t_biomarket$utilities82976.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82976.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82976";

biomarket.utilities.t_biomarket$utilities82976.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82976");
});

biomarket.utilities.__GT_t_biomarket$utilities82976 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities82976(waiting__$1,___$1,owner__$1,meta82977){
return (new biomarket.utilities.t_biomarket$utilities82976(waiting__$1,___$1,owner__$1,meta82977));
});

}

return (new biomarket.utilities.t_biomarket$utilities82976(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__82981,owner){
var map__82987 = p__82981;
var map__82987__$1 = ((((!((map__82987 == null)))?((((map__82987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82987):map__82987);
var data = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__82987__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities82989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities82989 = (function (make_a_table,p__82981,owner,map__82987,data,tparam,meta82990){
this.make_a_table = make_a_table;
this.p__82981 = p__82981;
this.owner = owner;
this.map__82987 = map__82987;
this.data = data;
this.tparam = tparam;
this.meta82990 = meta82990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities82989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__82987,map__82987__$1,data,tparam){
return (function (_82991,meta82990__$1){
var self__ = this;
var _82991__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities82989(self__.make_a_table,self__.p__82981,self__.owner,self__.map__82987,self__.data,self__.tparam,meta82990__$1));
});})(map__82987,map__82987__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities82989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__82987,map__82987__$1,data,tparam){
return (function (_82991){
var self__ = this;
var _82991__$1 = this;
return self__.meta82990;
});})(map__82987,map__82987__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities82989.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities82989.prototype.om$core$IRender$render$arity$1 = ((function (map__82987,map__82987__$1,data,tparam){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.div({"className": "table-responsive"},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam){
return (function (p1__82979_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__82979_SHARP_);
});})(tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam){
return (function (p1__82980_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__82980_SHARP_);
});})(tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__28842__auto____$1,map__82987,map__82987__$1,data,tparam))
,self__.data)))));
});})(map__82987,map__82987__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities82989.getBasis = ((function (map__82987,map__82987__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__82981","p__82981",-1736682662,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__82987","map__82987",1632874730,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta82990","meta82990",985251577,null)], null);
});})(map__82987,map__82987__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities82989.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities82989.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities82989";

biomarket.utilities.t_biomarket$utilities82989.cljs$lang$ctorPrWriter = ((function (map__82987,map__82987__$1,data,tparam){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities82989");
});})(map__82987,map__82987__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities82989 = ((function (map__82987,map__82987__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities82989(make_a_table__$1,p__82981__$1,owner__$1,map__82987__$2,data__$1,tparam__$1,meta82990){
return (new biomarket.utilities.t_biomarket$utilities82989(make_a_table__$1,p__82981__$1,owner__$1,map__82987__$2,data__$1,tparam__$1,meta82990));
});})(map__82987,map__82987__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities82989(biomarket$utilities$make_a_table,p__82981,owner,map__82987__$1,data,tparam,null));
});
biomarket.utilities.capture_return = (function biomarket$utilities$capture_return(func){
return (function (x){
if(cljs.core._EQ_.call(null,(13),x.which)){
func.call(null);

return false;
} else {
return null;
}
});
});
biomarket.utilities.on_change_function = (function biomarket$utilities$on_change_function(owner,tag,fname,element,e){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"input-update","input-update",902761778),new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"value","value",305978217),e.target.value)], null));
});
biomarket.utilities.on_submit_function = (function biomarket$utilities$on_submit_function(owner,tag){
return biomarket.utilities.pub_info.call(null,owner,tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"submitted","submitted",-131658962)], null));
});
if(typeof biomarket.utilities.get_input !== 'undefined'){
} else {
biomarket.utilities.get_input = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function() { 
var G__82995__delegate = function (owner,p__82992,args){
var map__82993 = p__82992;
var map__82993__$1 = ((((!((map__82993 == null)))?((((map__82993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82993):map__82993);
var fname = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__82993__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__82995 = function (owner,p__82992,var_args){
var args = null;
if (arguments.length > 2) {
var G__82996__i = 0, G__82996__a = new Array(arguments.length -  2);
while (G__82996__i < G__82996__a.length) {G__82996__a[G__82996__i] = arguments[G__82996__i + 2]; ++G__82996__i;}
  args = new cljs.core.IndexedSeq(G__82996__a,0);
} 
return G__82995__delegate.call(this,owner,p__82992,args);};
G__82995.cljs$lang$maxFixedArity = 2;
G__82995.cljs$lang$applyTo = (function (arglist__82997){
var owner = cljs.core.first(arglist__82997);
arglist__82997 = cljs.core.next(arglist__82997);
var p__82992 = cljs.core.first(arglist__82997);
var args = cljs.core.rest(arglist__82997);
return G__82995__delegate(owner,p__82992,args);
});
G__82995.cljs$core$IFn$_invoke$arity$variadic = G__82995__delegate;
return G__82995;
})()
;})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__83006 = null;
var G__83006__2 = (function (owner,p__82998){
var map__83000 = p__82998;
var map__83000__$1 = ((((!((map__83000 == null)))?((((map__83000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83000):map__83000);
var m = map__83000__$1;
var fname = cljs.core.get.call(null,map__83000__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__83000__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__83006__3 = (function (owner,p__82999,param_name){
var map__83002 = p__82999;
var map__83002__$1 = ((((!((map__83002 == null)))?((((map__83002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83002):map__83002);
var fname = cljs.core.get.call(null,map__83002__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__83002__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__83002,map__83002__$1,fname,element){
return (function (p__83004){
var vec__83005 = p__83004;
var k = cljs.core.nth.call(null,vec__83005,(0),null);
var v = cljs.core.nth.call(null,vec__83005,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__83002,map__83002__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__83006 = function(owner,p__82999,param_name){
switch(arguments.length){
case 2:
return G__83006__2.call(this,owner,p__82999);
case 3:
return G__83006__3.call(this,owner,p__82999,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__83006.cljs$core$IFn$_invoke$arity$2 = G__83006__2;
G__83006.cljs$core$IFn$_invoke$arity$3 = G__83006__3;
return G__83006;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26793__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26794__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26795__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26796__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26797__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__,hierarchy__26797__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26797__auto__,method_table__26793__auto__,prefer_table__26794__auto__,method_cache__26795__auto__,cached_hierarchy__26796__auto__));
})();
}
biomarket.utilities.js = (function biomarket$utilities$js(element,classes,oc){
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"form-control",new cljs.core.Keyword(null,"aria-describedby","aria-describedby",1826540471),new cljs.core.Keyword(null,"aria","aria",1737868339).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(cljs.core.truth_(new cljs.core.Keyword(null,"submitf","submitf",657741776).cljs$core$IFn$_invoke$arity$1(element))?(function (x){
if(cljs.core._EQ_.call(null,(13),x.which)){
return new cljs.core.Keyword(null,"submitf","submitf",657741776).cljs$core$IFn$_invoke$arity$1(element).call(null);
} else {
return null;
}
}):null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),oc], null),cljs.core.dissoc.call(null,element,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"tests","tests",-1041085625))));
});
biomarket.utilities.icons = (function biomarket$utilities$icons(element,classes){
var x__26702__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26702__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26702__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto____$2);
})(),x__26702__auto____$1);
})(),x__26702__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
return React.DOM.div({"className": "input-group"},(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.truth_(temp__4423__auto__)){
var b = temp__4423__auto__;
return React.DOM.div({"className": "input-group-addon"},b);
} else {
return null;
}
})(),om.dom.input.call(null,js),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(element);
if(cljs.core.truth_(temp__4423__auto__)){
var a = temp__4423__auto__;
return React.DOM.div({"className": "input-group-addon"},a);
} else {
return null;
}
})());
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26702__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),(function (){var x__26702__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26702__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities83010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities83010 = (function (the_input,js,owner,meta83011){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta83011 = meta83011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities83010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83012,meta83011__$1){
var self__ = this;
var _83012__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities83010(self__.the_input,self__.js,self__.owner,meta83011__$1));
});

biomarket.utilities.t_biomarket$utilities83010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83012){
var self__ = this;
var _83012__$1 = this;
return self__.meta83011;
});

biomarket.utilities.t_biomarket$utilities83010.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities83010.prototype.om$core$IRender$render$arity$1 = (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities83010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta83011","meta83011",1276566097,null)], null);
});

biomarket.utilities.t_biomarket$utilities83010.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities83010.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities83010";

biomarket.utilities.t_biomarket$utilities83010.cljs$lang$ctorPrWriter = (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities83010");
});

biomarket.utilities.__GT_t_biomarket$utilities83010 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities83010(the_input__$1,js__$1,owner__$1,meta83011){
return (new biomarket.utilities.t_biomarket$utilities83010(the_input__$1,js__$1,owner__$1,meta83011));
});

}

return (new biomarket.utilities.t_biomarket$utilities83010(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__83015,owner){
var vec__83023 = p__83015;
var fname = cljs.core.nth.call(null,vec__83023,(0),null);
var element = cljs.core.nth.call(null,vec__83023,(1),null);
var tag = cljs.core.nth.call(null,vec__83023,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities83024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities83024 = (function (input,p__83015,owner,vec__83023,fname,element,tag,meta83025){
this.input = input;
this.p__83015 = p__83015;
this.owner = owner;
this.vec__83023 = vec__83023;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta83025 = meta83025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities83024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__83023,fname,element,tag){
return (function (_83026,meta83025__$1){
var self__ = this;
var _83026__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities83024(self__.input,self__.p__83015,self__.owner,self__.vec__83023,self__.fname,self__.element,self__.tag,meta83025__$1));
});})(vec__83023,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities83024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__83023,fname,element,tag){
return (function (_83026){
var self__ = this;
var _83026__$1 = this;
return self__.meta83025;
});})(vec__83023,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities83024.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities83024.prototype.om$core$IRender$render$arity$1 = ((function (vec__83023,fname,element,tag){
return (function (this__28842__auto__){
var self__ = this;
var this__28842__auto____$1 = this;
var oc = ((function (this__28842__auto____$1,vec__83023,fname,element,tag){
return (function (p1__83013_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__83013_SHARP_);
});})(this__28842__auto____$1,vec__83023,fname,element,tag))
;
var classes = (function (){var pred__83027 = cljs.core._EQ_;
var expr__83028 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__83027.call(null,false,expr__83028))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__83027.call(null,null,expr__83028))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__83027,expr__83028,oc,this__28842__auto____$1,vec__83023,fname,element,tag){
return (function (p1__83014_SHARP_){
return React.DOM.div(null,p1__83014_SHARP_);
});})(pred__83027,expr__83028,oc,this__28842__auto____$1,vec__83023,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__83023,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities83024.getBasis = ((function (vec__83023,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__83015","p__83015",-1517541012,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__83023","vec__83023",465534120,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta83025","meta83025",736851282,null)], null);
});})(vec__83023,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities83024.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities83024.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities83024";

biomarket.utilities.t_biomarket$utilities83024.cljs$lang$ctorPrWriter = ((function (vec__83023,fname,element,tag){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities83024");
});})(vec__83023,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities83024 = ((function (vec__83023,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities83024(input__$1,p__83015__$1,owner__$1,vec__83023__$1,fname__$1,element__$1,tag__$1,meta83025){
return (new biomarket.utilities.t_biomarket$utilities83024(input__$1,p__83015__$1,owner__$1,vec__83023__$1,fname__$1,element__$1,tag__$1,meta83025));
});})(vec__83023,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities83024(biomarket$utilities$input,p__83015,owner,vec__83023,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__83031,owner){
var vec__83039 = p__83031;
var name = cljs.core.nth.call(null,vec__83039,(0),null);
var element = cljs.core.nth.call(null,vec__83039,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities83040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities83040 = (function (in_line_radio,p__83031,owner,vec__83039,name,element,meta83041){
this.in_line_radio = in_line_radio;
this.p__83031 = p__83031;
this.owner = owner;
this.vec__83039 = vec__83039;
this.name = name;
this.element = element;
this.meta83041 = meta83041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities83040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__83039,name,element){
return (function (_83042,meta83041__$1){
var self__ = this;
var _83042__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities83040(self__.in_line_radio,self__.p__83031,self__.owner,self__.vec__83039,self__.name,self__.element,meta83041__$1));
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__83039,name,element){
return (function (_83042){
var self__ = this;
var _83042__$1 = this;
return self__.meta83041;
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__83039,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__83039,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities83040.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__83039,name,element){
return (function (_,p__83043){
var self__ = this;
var map__83044 = p__83043;
var map__83044__$1 = ((((!((map__83044 == null)))?((((map__83044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__83044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__83044):map__83044);
var element__$1 = cljs.core.get.call(null,map__83044__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__83044,map__83044__$1,element__$1,vec__83039,name,element){
return (function (p1__83030_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__83030_SHARP_), "onChange": ((function (___$1,map__83044,map__83044__$1,element__$1,vec__83039,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__83044,map__83044__$1,element__$1,vec__83039,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__83030_SHARP_)));
});})(___$1,map__83044,map__83044__$1,element__$1,vec__83039,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.getBasis = ((function (vec__83039,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__83031","p__83031",-697048708,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__83039","vec__83039",-1124127769,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta83041","meta83041",-2016439656,null)], null);
});})(vec__83039,name,element))
;

biomarket.utilities.t_biomarket$utilities83040.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities83040.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities83040";

biomarket.utilities.t_biomarket$utilities83040.cljs$lang$ctorPrWriter = ((function (vec__83039,name,element){
return (function (this__26474__auto__,writer__26475__auto__,opt__26476__auto__){
return cljs.core._write.call(null,writer__26475__auto__,"biomarket.utilities/t_biomarket$utilities83040");
});})(vec__83039,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities83040 = ((function (vec__83039,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities83040(in_line_radio__$1,p__83031__$1,owner__$1,vec__83039__$1,name__$1,element__$1,meta83041){
return (new biomarket.utilities.t_biomarket$utilities83040(in_line_radio__$1,p__83031__$1,owner__$1,vec__83039__$1,name__$1,element__$1,meta83041));
});})(vec__83039,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities83040(biomarket$utilities$in_line_radio,p__83031,owner,vec__83039,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map