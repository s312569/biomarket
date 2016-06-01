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
var args__26889__auto__ = [];
var len__26882__auto___76219 = arguments.length;
var i__26883__auto___76220 = (0);
while(true){
if((i__26883__auto___76220 < len__26882__auto___76219)){
args__26889__auto__.push((arguments[i__26883__auto___76220]));

var G__76221 = (i__26883__auto___76220 + (1));
i__26883__auto___76220 = G__76221;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq76218){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76218));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__76222){
var map__76225 = p__76222;
var map__76225__$1 = ((((!((map__76225 == null)))?((((map__76225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76225):map__76225);
var status = cljs.core.get.call(null,map__76225__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__76225__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function() { 
var G__76227__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__76227 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__76228__i = 0, G__76228__a = new Array(arguments.length -  2);
while (G__76228__i < G__76228__a.length) {G__76228__a[G__76228__i] = arguments[G__76228__i + 2]; ++G__76228__i;}
  args = new cljs.core.IndexedSeq(G__76228__a,0);
} 
return G__76227__delegate.call(this,o,d,args);};
G__76227.cljs$lang$maxFixedArity = 2;
G__76227.cljs$lang$applyTo = (function (arglist__76229){
var o = cljs.core.first(arglist__76229);
arglist__76229 = cljs.core.next(arglist__76229);
var d = cljs.core.first(arglist__76229);
var args = cljs.core.rest(arglist__76229);
return G__76227__delegate(o,d,args);
});
G__76227.cljs$core$IFn$_invoke$arity$variadic = G__76227__delegate;
return G__76227;
})()
;})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__76233__delegate = function (owner,p__76230,_){
var map__76231 = p__76230;
var map__76231__$1 = ((((!((map__76231 == null)))?((((map__76231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76231):map__76231);
var data = cljs.core.get.call(null,map__76231__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__76233 = function (owner,p__76230,var_args){
var _ = null;
if (arguments.length > 2) {
var G__76234__i = 0, G__76234__a = new Array(arguments.length -  2);
while (G__76234__i < G__76234__a.length) {G__76234__a[G__76234__i] = arguments[G__76234__i + 2]; ++G__76234__i;}
  _ = new cljs.core.IndexedSeq(G__76234__a,0);
} 
return G__76233__delegate.call(this,owner,p__76230,_);};
G__76233.cljs$lang$maxFixedArity = 2;
G__76233.cljs$lang$applyTo = (function (arglist__76235){
var owner = cljs.core.first(arglist__76235);
arglist__76235 = cljs.core.next(arglist__76235);
var p__76230 = cljs.core.first(arglist__76235);
var _ = cljs.core.rest(arglist__76235);
return G__76233__delegate(owner,p__76230,_);
});
G__76233.cljs$core$IFn$_invoke$arity$variadic = G__76233__delegate;
return G__76233;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__76236,func){
var map__76237 = p__76236;
var map__76237__$1 = ((((!((map__76237 == null)))?((((map__76237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76237):map__76237);
var data = cljs.core.get.call(null,map__76237__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__76239){
var map__76240 = p__76239;
var map__76240__$1 = ((((!((map__76240 == null)))?((((map__76240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76240):map__76240);
var data = cljs.core.get.call(null,map__76240__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__76242){
var map__76243 = p__76242;
var map__76243__$1 = ((((!((map__76243 == null)))?((((map__76243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76243):map__76243);
var data = cljs.core.get.call(null,map__76243__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__76247){
var map__76248 = p__76247;
var map__76248__$1 = ((((!((map__76248 == null)))?((((map__76248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76248):map__76248);
var data = cljs.core.get.call(null,map__76248__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__76248,map__76248__$1,data){
return (function (p1__76245_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__76245_SHARP_);
});})(map__76248,map__76248__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__76248,map__76248__$1,data){
return (function (p1__76246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__76246_SHARP_));
});})(status__GT_view,cv,projs,map__76248,map__76248__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args76250 = [];
var len__26882__auto___76290 = arguments.length;
var i__26883__auto___76291 = (0);
while(true){
if((i__26883__auto___76291 < len__26882__auto___76290)){
args76250.push((arguments[i__26883__auto___76291]));

var G__76292 = (i__26883__auto___76291 + (1));
i__26883__auto___76291 = G__76292;
continue;
} else {
}
break;
}

var G__76252 = args76250.length;
switch (G__76252) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76250.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,c,nc,events){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,c,nc,events){
return (function (state_76271){
var state_val_76272 = (state_76271[(1)]);
if((state_val_76272 === (1))){
var state_76271__$1 = state_76271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76271__$1,(2),events);
} else {
if((state_val_76272 === (2))){
var inst_76254 = (state_76271[(2)]);
var inst_76255 = inst_76254;
var state_76271__$1 = (function (){var statearr_76273 = state_76271;
(statearr_76273[(7)] = inst_76255);

return statearr_76273;
})();
var statearr_76274_76294 = state_76271__$1;
(statearr_76274_76294[(2)] = null);

(statearr_76274_76294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76272 === (3))){
var inst_76255 = (state_76271[(7)]);
var inst_76257 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_76255);
var inst_76258 = cljs.core._EQ_.call(null,inst_76257,new cljs.core.Keyword(null,"end","end",-268185958));
var state_76271__$1 = state_76271;
if(inst_76258){
var statearr_76275_76295 = state_76271__$1;
(statearr_76275_76295[(1)] = (5));

} else {
var statearr_76276_76296 = state_76271__$1;
(statearr_76276_76296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76272 === (4))){
var inst_76269 = (state_76271[(2)]);
var state_76271__$1 = state_76271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76271__$1,inst_76269);
} else {
if((state_val_76272 === (5))){
var state_76271__$1 = state_76271;
var statearr_76277_76297 = state_76271__$1;
(statearr_76277_76297[(2)] = null);

(statearr_76277_76297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76272 === (6))){
var inst_76255 = (state_76271[(7)]);
var inst_76261 = func.call(null,owner,inst_76255);
var state_76271__$1 = (function (){var statearr_76278 = state_76271;
(statearr_76278[(8)] = inst_76261);

return statearr_76278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76271__$1,(8),events);
} else {
if((state_val_76272 === (7))){
var inst_76266 = (state_76271[(2)]);
var inst_76267 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_76271__$1 = (function (){var statearr_76279 = state_76271;
(statearr_76279[(9)] = inst_76266);

return statearr_76279;
})();
var statearr_76280_76298 = state_76271__$1;
(statearr_76280_76298[(2)] = inst_76267);

(statearr_76280_76298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76272 === (8))){
var inst_76263 = (state_76271[(2)]);
var inst_76255 = inst_76263;
var state_76271__$1 = (function (){var statearr_76281 = state_76271;
(statearr_76281[(7)] = inst_76255);

return statearr_76281;
})();
var statearr_76282_76299 = state_76271__$1;
(statearr_76282_76299[(2)] = null);

(statearr_76282_76299[(1)] = (3));


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
});})(c__29943__auto__,c,nc,events))
;
return ((function (switch__29831__auto__,c__29943__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__29832__auto__ = null;
var biomarket$utilities$state_machine__29832__auto____0 = (function (){
var statearr_76286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76286[(0)] = biomarket$utilities$state_machine__29832__auto__);

(statearr_76286[(1)] = (1));

return statearr_76286;
});
var biomarket$utilities$state_machine__29832__auto____1 = (function (state_76271){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_76271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e76287){if((e76287 instanceof Object)){
var ex__29835__auto__ = e76287;
var statearr_76288_76300 = state_76271;
(statearr_76288_76300[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76301 = state_76271;
state_76271 = G__76301;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
biomarket$utilities$state_machine__29832__auto__ = function(state_76271){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__29832__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__29832__auto____1.call(this,state_76271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__29832__auto____0;
biomarket$utilities$state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__29832__auto____1;
return biomarket$utilities$state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,c,nc,events))
})();
var state__29945__auto__ = (function (){var statearr_76289 = f__29944__auto__.call(null);
(statearr_76289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_76289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,c,nc,events))
);

return c__29943__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26889__auto__ = [];
var len__26882__auto___76308 = arguments.length;
var i__26883__auto___76309 = (0);
while(true){
if((i__26883__auto___76309 < len__26882__auto___76308)){
args__26889__auto__.push((arguments[i__26883__auto___76309]));

var G__76310 = (i__26883__auto___76309 + (1));
i__26883__auto___76309 = G__76310;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((1) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26890__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__76304 = cljs.core.seq.call(null,topics);
var chunk__76305 = null;
var count__76306 = (0);
var i__76307 = (0);
while(true){
if((i__76307 < count__76306)){
var t = cljs.core._nth.call(null,chunk__76305,i__76307);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__76311 = seq__76304;
var G__76312 = chunk__76305;
var G__76313 = count__76306;
var G__76314 = (i__76307 + (1));
seq__76304 = G__76311;
chunk__76305 = G__76312;
count__76306 = G__76313;
i__76307 = G__76314;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__76304);
if(temp__4425__auto__){
var seq__76304__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76304__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__76304__$1);
var G__76315 = cljs.core.chunk_rest.call(null,seq__76304__$1);
var G__76316 = c__26623__auto__;
var G__76317 = cljs.core.count.call(null,c__26623__auto__);
var G__76318 = (0);
seq__76304 = G__76315;
chunk__76305 = G__76316;
count__76306 = G__76317;
i__76307 = G__76318;
continue;
} else {
var t = cljs.core.first.call(null,seq__76304__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__76319 = cljs.core.next.call(null,seq__76304__$1);
var G__76320 = null;
var G__76321 = (0);
var G__76322 = (0);
seq__76304 = G__76319;
chunk__76305 = G__76320;
count__76306 = G__76321;
i__76307 = G__76322;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq76302){
var G__76303 = cljs.core.first.call(null,seq76302);
var seq76302__$1 = cljs.core.next.call(null,seq76302);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__76303,seq76302__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,nc,events){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,nc,events){
return (function (state_76378){
var state_val_76379 = (state_76378[(1)]);
if((state_val_76379 === (1))){
var state_76378__$1 = state_76378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76378__$1,(2),events);
} else {
if((state_val_76379 === (2))){
var inst_76361 = (state_76378[(2)]);
var inst_76362 = inst_76361;
var state_76378__$1 = (function (){var statearr_76380 = state_76378;
(statearr_76380[(7)] = inst_76362);

return statearr_76380;
})();
var statearr_76381_76397 = state_76378__$1;
(statearr_76381_76397[(2)] = null);

(statearr_76381_76397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76379 === (3))){
var inst_76362 = (state_76378[(7)]);
var inst_76364 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_76362);
var inst_76365 = cljs.core._EQ_.call(null,inst_76364,new cljs.core.Keyword(null,"end","end",-268185958));
var state_76378__$1 = state_76378;
if(inst_76365){
var statearr_76382_76398 = state_76378__$1;
(statearr_76382_76398[(1)] = (5));

} else {
var statearr_76383_76399 = state_76378__$1;
(statearr_76383_76399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76379 === (4))){
var inst_76376 = (state_76378[(2)]);
var state_76378__$1 = state_76378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76378__$1,inst_76376);
} else {
if((state_val_76379 === (5))){
var state_76378__$1 = state_76378;
var statearr_76384_76400 = state_76378__$1;
(statearr_76384_76400[(2)] = null);

(statearr_76384_76400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76379 === (6))){
var inst_76362 = (state_76378[(7)]);
var inst_76368 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_76362);
var state_76378__$1 = (function (){var statearr_76385 = state_76378;
(statearr_76385[(8)] = inst_76368);

return statearr_76385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76378__$1,(8),events);
} else {
if((state_val_76379 === (7))){
var inst_76373 = (state_76378[(2)]);
var inst_76374 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_76378__$1 = (function (){var statearr_76386 = state_76378;
(statearr_76386[(9)] = inst_76373);

return statearr_76386;
})();
var statearr_76387_76401 = state_76378__$1;
(statearr_76387_76401[(2)] = inst_76374);

(statearr_76387_76401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76379 === (8))){
var inst_76370 = (state_76378[(2)]);
var inst_76362 = inst_76370;
var state_76378__$1 = (function (){var statearr_76388 = state_76378;
(statearr_76388[(7)] = inst_76362);

return statearr_76388;
})();
var statearr_76389_76402 = state_76378__$1;
(statearr_76389_76402[(2)] = null);

(statearr_76389_76402[(1)] = (3));


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
});})(c__29943__auto__,nc,events))
;
return ((function (switch__29831__auto__,c__29943__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____0 = (function (){
var statearr_76393 = [null,null,null,null,null,null,null,null,null,null];
(statearr_76393[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__);

(statearr_76393[(1)] = (1));

return statearr_76393;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____1 = (function (state_76378){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_76378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e76394){if((e76394 instanceof Object)){
var ex__29835__auto__ = e76394;
var statearr_76395_76403 = state_76378;
(statearr_76395_76403[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76404 = state_76378;
state_76378 = G__76404;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__ = function(state_76378){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____1.call(this,state_76378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,nc,events))
})();
var state__29945__auto__ = (function (){var statearr_76396 = f__29944__auto__.call(null);
(statearr_76396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_76396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,nc,events))
);

return c__29943__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities76408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76408 = (function (show_default,_,owner,meta76409){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta76409 = meta76409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76410,meta76409__$1){
var self__ = this;
var _76410__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76408(self__.show_default,self__._,self__.owner,meta76409__$1));
});

biomarket.utilities.t_biomarket$utilities76408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76410){
var self__ = this;
var _76410__$1 = this;
return self__.meta76409;
});

biomarket.utilities.t_biomarket$utilities76408.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76408.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities76408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76409","meta76409",1082004420,null)], null);
});

biomarket.utilities.t_biomarket$utilities76408.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76408.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76408";

biomarket.utilities.t_biomarket$utilities76408.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76408");
});

biomarket.utilities.__GT_t_biomarket$utilities76408 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities76408(show_default__$1,___$1,owner__$1,meta76409){
return (new biomarket.utilities.t_biomarket$utilities76408(show_default__$1,___$1,owner__$1,meta76409));
});

}

return (new biomarket.utilities.t_biomarket$utilities76408(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__76411,owner){
var map__76422 = p__76411;
var map__76422__$1 = ((((!((map__76422 == null)))?((((map__76422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76422):map__76422);
var project = map__76422__$1;
var links = cljs.core.get.call(null,map__76422__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__76422__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities76424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76424 = (function (bottom_skel,p__76411,owner,map__76422,project,links,widget,meta76425){
this.bottom_skel = bottom_skel;
this.p__76411 = p__76411;
this.owner = owner;
this.map__76422 = map__76422;
this.project = project;
this.links = links;
this.widget = widget;
this.meta76425 = meta76425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__76422,map__76422__$1,project,links,widget){
return (function (_76426,meta76425__$1){
var self__ = this;
var _76426__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76424(self__.bottom_skel,self__.p__76411,self__.owner,self__.map__76422,self__.project,self__.links,self__.widget,meta76425__$1));
});})(map__76422,map__76422__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities76424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__76422,map__76422__$1,project,links,widget){
return (function (_76426){
var self__ = this;
var _76426__$1 = this;
return self__.meta76425;
});})(map__76422,map__76422__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities76424.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76424.prototype.om$core$IRender$render$arity$1 = ((function (map__76422,map__76422__$1,project,links,widget){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__36757__auto____$1,map__76422,map__76422__$1,project,links,widget){
return (function (p__76427){
var vec__76428 = p__76427;
var tag = cljs.core.nth.call(null,vec__76428,(0),null);
var ele = cljs.core.nth.call(null,vec__76428,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__76428,tag,ele,visible,this__36757__auto____$1,map__76422,map__76422__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__76428,tag,ele,visible,this__36757__auto____$1,map__76422,map__76422__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__36757__auto____$1,map__76422,map__76422__$1,project,links,widget))
,self__.links)))),(function (){var pred__76429 = cljs.core._EQ_;
var expr__76430 = visible;
if(cljs.core.truth_(pred__76429.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__76430))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__76422,map__76422__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities76424.getBasis = ((function (map__76422,map__76422__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76411","p__76411",798950521,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__76422","map__76422",-1715016088,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta76425","meta76425",72937647,null)], null);
});})(map__76422,map__76422__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities76424.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76424.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76424";

biomarket.utilities.t_biomarket$utilities76424.cljs$lang$ctorPrWriter = ((function (map__76422,map__76422__$1,project,links,widget){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76424");
});})(map__76422,map__76422__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities76424 = ((function (map__76422,map__76422__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities76424(bottom_skel__$1,p__76411__$1,owner__$1,map__76422__$2,project__$1,links__$1,widget__$1,meta76425){
return (new biomarket.utilities.t_biomarket$utilities76424(bottom_skel__$1,p__76411__$1,owner__$1,map__76422__$2,project__$1,links__$1,widget__$1,meta76425));
});})(map__76422,map__76422__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities76424(biomarket$utilities$bottom_skel,p__76411,owner,map__76422__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
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
if(typeof biomarket.utilities.t_biomarket$utilities76441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76441 = (function (more_less_text,text,owner,meta76442){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta76442 = meta76442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76443,meta76442__$1){
var self__ = this;
var _76443__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76441(self__.more_less_text,self__.text,self__.owner,meta76442__$1));
});

biomarket.utilities.t_biomarket$utilities76441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76443){
var self__ = this;
var _76443__$1 = this;
return self__.meta76442;
});

biomarket.utilities.t_biomarket$utilities76441.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities76441.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities76441.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities76441.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__76444){
var self__ = this;
var map__76445 = p__76444;
var map__76445__$1 = ((((!((map__76445 == null)))?((((map__76445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76445):map__76445);
var showing = cljs.core.get.call(null,map__76445__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__76447 = cljs.core._EQ_;
var expr__76448 = showing;
if(cljs.core.truth_(pred__76447.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__76448))){
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__76447,expr__76448,___$1,map__76445,map__76445__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__76447,expr__76448,___$1,map__76445,map__76445__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__76447.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__76448))){
return React.DOM.div(null,React.DOM.span(null,self__.text),React.DOM.a({"onClick": ((function (pred__76447,expr__76448,___$1,map__76445,map__76445__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__76447,expr__76448,___$1,map__76445,map__76445__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__76448)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities76441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76442","meta76442",-856366819,null)], null);
});

biomarket.utilities.t_biomarket$utilities76441.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76441.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76441";

biomarket.utilities.t_biomarket$utilities76441.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76441");
});

biomarket.utilities.__GT_t_biomarket$utilities76441 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities76441(more_less_text__$1,text__$1,owner__$1,meta76442){
return (new biomarket.utilities.t_biomarket$utilities76441(more_less_text__$1,text__$1,owner__$1,meta76442));
});

}

return (new biomarket.utilities.t_biomarket$utilities76441(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities76454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76454 = (function (control_buttons,inputs,owner,meta76455){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta76455 = meta76455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76456,meta76455__$1){
var self__ = this;
var _76456__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76454(self__.control_buttons,self__.inputs,self__.owner,meta76455__$1));
});

biomarket.utilities.t_biomarket$utilities76454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76456){
var self__ = this;
var _76456__$1 = this;
return self__.meta76455;
});

biomarket.utilities.t_biomarket$utilities76454.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76454.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__36757__auto____$1){
return (function (p1__76450_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__76450_SHARP_)},cljs.core.first.call(null,p1__76450_SHARP_));
});})(this__36757__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities76454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76455","meta76455",-1697085855,null)], null);
});

biomarket.utilities.t_biomarket$utilities76454.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76454.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76454";

biomarket.utilities.t_biomarket$utilities76454.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76454");
});

biomarket.utilities.__GT_t_biomarket$utilities76454 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities76454(control_buttons__$1,inputs__$1,owner__$1,meta76455){
return (new biomarket.utilities.t_biomarket$utilities76454(control_buttons__$1,inputs__$1,owner__$1,meta76455));
});

}

return (new biomarket.utilities.t_biomarket$utilities76454(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__76457,owner){
var vec__76462 = p__76457;
var text = cljs.core.nth.call(null,vec__76462,(0),null);
var topic = cljs.core.nth.call(null,vec__76462,(1),null);
var tag = cljs.core.nth.call(null,vec__76462,(2),null);
var current = cljs.core.nth.call(null,vec__76462,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities76463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76463 = (function (menu_item,p__76457,owner,vec__76462,text,topic,tag,current,meta76464){
this.menu_item = menu_item;
this.p__76457 = p__76457;
this.owner = owner;
this.vec__76462 = vec__76462;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta76464 = meta76464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76462,text,topic,tag,current){
return (function (_76465,meta76464__$1){
var self__ = this;
var _76465__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76463(self__.menu_item,self__.p__76457,self__.owner,self__.vec__76462,self__.text,self__.topic,self__.tag,self__.current,meta76464__$1));
});})(vec__76462,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities76463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76462,text,topic,tag,current){
return (function (_76465){
var self__ = this;
var _76465__$1 = this;
return self__.meta76464;
});})(vec__76462,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities76463.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76463.prototype.om$core$IRender$render$arity$1 = ((function (vec__76462,text,topic,tag,current){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__36757__auto____$1,vec__76462,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__36757__auto____$1,vec__76462,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__76462,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities76463.getBasis = ((function (vec__76462,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76457","p__76457",-1510873229,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76462","vec__76462",-442641857,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta76464","meta76464",2144137356,null)], null);
});})(vec__76462,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities76463.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76463.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76463";

biomarket.utilities.t_biomarket$utilities76463.cljs$lang$ctorPrWriter = ((function (vec__76462,text,topic,tag,current){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76463");
});})(vec__76462,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities76463 = ((function (vec__76462,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities76463(menu_item__$1,p__76457__$1,owner__$1,vec__76462__$1,text__$1,topic__$1,tag__$1,current__$1,meta76464){
return (new biomarket.utilities.t_biomarket$utilities76463(menu_item__$1,p__76457__$1,owner__$1,vec__76462__$1,text__$1,topic__$1,tag__$1,current__$1,meta76464));
});})(vec__76462,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities76463(biomarket$utilities$menu_item,p__76457,owner,vec__76462,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__76467,owner){
var vec__76472 = p__76467;
var current = cljs.core.nth.call(null,vec__76472,(0),null);
var inputs = cljs.core.nth.call(null,vec__76472,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__76472,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities76473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76473 = (function (top_navigation,p__76467,owner,vec__76472,current,inputs,nav_tag,meta76474){
this.top_navigation = top_navigation;
this.p__76467 = p__76467;
this.owner = owner;
this.vec__76472 = vec__76472;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta76474 = meta76474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76472,current,inputs,nav_tag){
return (function (_76475,meta76474__$1){
var self__ = this;
var _76475__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76473(self__.top_navigation,self__.p__76467,self__.owner,self__.vec__76472,self__.current,self__.inputs,self__.nav_tag,meta76474__$1));
});})(vec__76472,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities76473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76472,current,inputs,nav_tag){
return (function (_76475){
var self__ = this;
var _76475__$1 = this;
return self__.meta76474;
});})(vec__76472,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities76473.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76473.prototype.om$core$IRender$render$arity$1 = ((function (vec__76472,current,inputs,nav_tag){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__36757__auto____$1,vec__76472,current,inputs,nav_tag){
return (function (p1__76466_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__76466_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__36757__auto____$1,vec__76472,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__76472,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities76473.getBasis = ((function (vec__76472,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76467","p__76467",-508046631,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76472","vec__76472",-1715984948,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta76474","meta76474",-1559357685,null)], null);
});})(vec__76472,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities76473.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76473.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76473";

biomarket.utilities.t_biomarket$utilities76473.cljs$lang$ctorPrWriter = ((function (vec__76472,current,inputs,nav_tag){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76473");
});})(vec__76472,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities76473 = ((function (vec__76472,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities76473(top_navigation__$1,p__76467__$1,owner__$1,vec__76472__$1,current__$1,inputs__$1,nav_tag__$1,meta76474){
return (new biomarket.utilities.t_biomarket$utilities76473(top_navigation__$1,p__76467__$1,owner__$1,vec__76472__$1,current__$1,inputs__$1,nav_tag__$1,meta76474));
});})(vec__76472,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities76473(biomarket$utilities$top_navigation,p__76467,owner,vec__76472,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__76476,owner){
var vec__76481 = p__76476;
var padding = cljs.core.nth.call(null,vec__76481,(0),null);
var value = cljs.core.nth.call(null,vec__76481,(1),null);
var func = cljs.core.nth.call(null,vec__76481,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities76482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76482 = (function (padded_button,p__76476,owner,vec__76481,padding,value,func,meta76483){
this.padded_button = padded_button;
this.p__76476 = p__76476;
this.owner = owner;
this.vec__76481 = vec__76481;
this.padding = padding;
this.value = value;
this.func = func;
this.meta76483 = meta76483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76481,padding,value,func){
return (function (_76484,meta76483__$1){
var self__ = this;
var _76484__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76482(self__.padded_button,self__.p__76476,self__.owner,self__.vec__76481,self__.padding,self__.value,self__.func,meta76483__$1));
});})(vec__76481,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities76482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76481,padding,value,func){
return (function (_76484){
var self__ = this;
var _76484__$1 = this;
return self__.meta76483;
});})(vec__76481,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities76482.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76482.prototype.om$core$IRender$render$arity$1 = ((function (vec__76481,padding,value,func){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__76481,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities76482.getBasis = ((function (vec__76481,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76476","p__76476",997035444,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76481","vec__76481",-442080822,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta76483","meta76483",-1337938446,null)], null);
});})(vec__76481,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities76482.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76482.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76482";

biomarket.utilities.t_biomarket$utilities76482.cljs$lang$ctorPrWriter = ((function (vec__76481,padding,value,func){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76482");
});})(vec__76481,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities76482 = ((function (vec__76481,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities76482(padded_button__$1,p__76476__$1,owner__$1,vec__76481__$1,padding__$1,value__$1,func__$1,meta76483){
return (new biomarket.utilities.t_biomarket$utilities76482(padded_button__$1,p__76476__$1,owner__$1,vec__76481__$1,padding__$1,value__$1,func__$1,meta76483));
});})(vec__76481,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities76482(biomarket$utilities$padded_button,p__76476,owner,vec__76481,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__76485,owner){
var vec__76490 = p__76485;
var padding = cljs.core.nth.call(null,vec__76490,(0),null);
var value = cljs.core.nth.call(null,vec__76490,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities76491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76491 = (function (padded_button_disabled,p__76485,owner,vec__76490,padding,value,meta76492){
this.padded_button_disabled = padded_button_disabled;
this.p__76485 = p__76485;
this.owner = owner;
this.vec__76490 = vec__76490;
this.padding = padding;
this.value = value;
this.meta76492 = meta76492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76490,padding,value){
return (function (_76493,meta76492__$1){
var self__ = this;
var _76493__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76491(self__.padded_button_disabled,self__.p__76485,self__.owner,self__.vec__76490,self__.padding,self__.value,meta76492__$1));
});})(vec__76490,padding,value))
;

biomarket.utilities.t_biomarket$utilities76491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76490,padding,value){
return (function (_76493){
var self__ = this;
var _76493__$1 = this;
return self__.meta76492;
});})(vec__76490,padding,value))
;

biomarket.utilities.t_biomarket$utilities76491.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76491.prototype.om$core$IRender$render$arity$1 = ((function (vec__76490,padding,value){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__76490,padding,value))
;

biomarket.utilities.t_biomarket$utilities76491.getBasis = ((function (vec__76490,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76485","p__76485",-188016095,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76490","vec__76490",1788270411,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta76492","meta76492",2089318132,null)], null);
});})(vec__76490,padding,value))
;

biomarket.utilities.t_biomarket$utilities76491.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76491.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76491";

biomarket.utilities.t_biomarket$utilities76491.cljs$lang$ctorPrWriter = ((function (vec__76490,padding,value){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76491");
});})(vec__76490,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities76491 = ((function (vec__76490,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities76491(padded_button_disabled__$1,p__76485__$1,owner__$1,vec__76490__$1,padding__$1,value__$1,meta76492){
return (new biomarket.utilities.t_biomarket$utilities76491(padded_button_disabled__$1,p__76485__$1,owner__$1,vec__76490__$1,padding__$1,value__$1,meta76492));
});})(vec__76490,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities76491(biomarket$utilities$padded_button_disabled,p__76485,owner,vec__76490,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities76497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76497 = (function (waiting,_,owner,meta76498){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta76498 = meta76498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76499,meta76498__$1){
var self__ = this;
var _76499__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76497(self__.waiting,self__._,self__.owner,meta76498__$1));
});

biomarket.utilities.t_biomarket$utilities76497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76499){
var self__ = this;
var _76499__$1 = this;
return self__.meta76498;
});

biomarket.utilities.t_biomarket$utilities76497.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76497.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities76497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76498","meta76498",164547490,null)], null);
});

biomarket.utilities.t_biomarket$utilities76497.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76497.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76497";

biomarket.utilities.t_biomarket$utilities76497.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76497");
});

biomarket.utilities.__GT_t_biomarket$utilities76497 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities76497(waiting__$1,___$1,owner__$1,meta76498){
return (new biomarket.utilities.t_biomarket$utilities76497(waiting__$1,___$1,owner__$1,meta76498));
});

}

return (new biomarket.utilities.t_biomarket$utilities76497(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__76502,owner){
var map__76508 = p__76502;
var map__76508__$1 = ((((!((map__76508 == null)))?((((map__76508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76508):map__76508);
var data = cljs.core.get.call(null,map__76508__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__76508__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities76510 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76510 = (function (make_a_table,p__76502,owner,map__76508,data,tparam,meta76511){
this.make_a_table = make_a_table;
this.p__76502 = p__76502;
this.owner = owner;
this.map__76508 = map__76508;
this.data = data;
this.tparam = tparam;
this.meta76511 = meta76511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__76508,map__76508__$1,data,tparam){
return (function (_76512,meta76511__$1){
var self__ = this;
var _76512__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76510(self__.make_a_table,self__.p__76502,self__.owner,self__.map__76508,self__.data,self__.tparam,meta76511__$1));
});})(map__76508,map__76508__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities76510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__76508,map__76508__$1,data,tparam){
return (function (_76512){
var self__ = this;
var _76512__$1 = this;
return self__.meta76511;
});})(map__76508,map__76508__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities76510.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76510.prototype.om$core$IRender$render$arity$1 = ((function (map__76508,map__76508__$1,data,tparam){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam){
return (function (p1__76500_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__76500_SHARP_);
});})(tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam){
return (function (p1__76501_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__76501_SHARP_);
});})(tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__36757__auto____$1,map__76508,map__76508__$1,data,tparam))
,self__.data))));
});})(map__76508,map__76508__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities76510.getBasis = ((function (map__76508,map__76508__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76502","p__76502",-1722415323,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__76508","map__76508",1668599800,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta76511","meta76511",-616872534,null)], null);
});})(map__76508,map__76508__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities76510.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76510.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76510";

biomarket.utilities.t_biomarket$utilities76510.cljs$lang$ctorPrWriter = ((function (map__76508,map__76508__$1,data,tparam){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76510");
});})(map__76508,map__76508__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities76510 = ((function (map__76508,map__76508__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities76510(make_a_table__$1,p__76502__$1,owner__$1,map__76508__$2,data__$1,tparam__$1,meta76511){
return (new biomarket.utilities.t_biomarket$utilities76510(make_a_table__$1,p__76502__$1,owner__$1,map__76508__$2,data__$1,tparam__$1,meta76511));
});})(map__76508,map__76508__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities76510(biomarket$utilities$make_a_table,p__76502,owner,map__76508__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function() { 
var G__76516__delegate = function (owner,p__76513,args){
var map__76514 = p__76513;
var map__76514__$1 = ((((!((map__76514 == null)))?((((map__76514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76514):map__76514);
var fname = cljs.core.get.call(null,map__76514__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__76514__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__76516 = function (owner,p__76513,var_args){
var args = null;
if (arguments.length > 2) {
var G__76517__i = 0, G__76517__a = new Array(arguments.length -  2);
while (G__76517__i < G__76517__a.length) {G__76517__a[G__76517__i] = arguments[G__76517__i + 2]; ++G__76517__i;}
  args = new cljs.core.IndexedSeq(G__76517__a,0);
} 
return G__76516__delegate.call(this,owner,p__76513,args);};
G__76516.cljs$lang$maxFixedArity = 2;
G__76516.cljs$lang$applyTo = (function (arglist__76518){
var owner = cljs.core.first(arglist__76518);
arglist__76518 = cljs.core.next(arglist__76518);
var p__76513 = cljs.core.first(arglist__76518);
var args = cljs.core.rest(arglist__76518);
return G__76516__delegate(owner,p__76513,args);
});
G__76516.cljs$core$IFn$_invoke$arity$variadic = G__76516__delegate;
return G__76516;
})()
;})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__76527 = null;
var G__76527__2 = (function (owner,p__76519){
var map__76521 = p__76519;
var map__76521__$1 = ((((!((map__76521 == null)))?((((map__76521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76521):map__76521);
var m = map__76521__$1;
var fname = cljs.core.get.call(null,map__76521__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__76521__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__76527__3 = (function (owner,p__76520,param_name){
var map__76523 = p__76520;
var map__76523__$1 = ((((!((map__76523 == null)))?((((map__76523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76523):map__76523);
var fname = cljs.core.get.call(null,map__76523__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__76523__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__76523,map__76523__$1,fname,element){
return (function (p__76525){
var vec__76526 = p__76525;
var k = cljs.core.nth.call(null,vec__76526,(0),null);
var v = cljs.core.nth.call(null,vec__76526,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__76523,map__76523__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__76527 = function(owner,p__76520,param_name){
switch(arguments.length){
case 2:
return G__76527__2.call(this,owner,p__76520);
case 3:
return G__76527__3.call(this,owner,p__76520,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__76527.cljs$core$IFn$_invoke$arity$2 = G__76527__2;
G__76527.cljs$core$IFn$_invoke$arity$3 = G__76527__3;
return G__76527;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
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
var x__26646__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26646__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26646__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto____$2);
})(),x__26646__auto____$1);
})(),x__26646__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26646__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})(),(function (){var x__26646__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26646__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})(),(function (){var x__26646__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26646__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})(),(function (){var x__26646__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26646__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities76531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76531 = (function (the_input,js,owner,meta76532){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta76532 = meta76532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76533,meta76532__$1){
var self__ = this;
var _76533__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76531(self__.the_input,self__.js,self__.owner,meta76532__$1));
});

biomarket.utilities.t_biomarket$utilities76531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76533){
var self__ = this;
var _76533__$1 = this;
return self__.meta76532;
});

biomarket.utilities.t_biomarket$utilities76531.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76531.prototype.om$core$IRender$render$arity$1 = (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities76531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta76532","meta76532",-2021466075,null)], null);
});

biomarket.utilities.t_biomarket$utilities76531.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76531.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76531";

biomarket.utilities.t_biomarket$utilities76531.cljs$lang$ctorPrWriter = (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76531");
});

biomarket.utilities.__GT_t_biomarket$utilities76531 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities76531(the_input__$1,js__$1,owner__$1,meta76532){
return (new biomarket.utilities.t_biomarket$utilities76531(the_input__$1,js__$1,owner__$1,meta76532));
});

}

return (new biomarket.utilities.t_biomarket$utilities76531(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__76536,owner){
var vec__76544 = p__76536;
var fname = cljs.core.nth.call(null,vec__76544,(0),null);
var element = cljs.core.nth.call(null,vec__76544,(1),null);
var tag = cljs.core.nth.call(null,vec__76544,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities76545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76545 = (function (input,p__76536,owner,vec__76544,fname,element,tag,meta76546){
this.input = input;
this.p__76536 = p__76536;
this.owner = owner;
this.vec__76544 = vec__76544;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta76546 = meta76546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76544,fname,element,tag){
return (function (_76547,meta76546__$1){
var self__ = this;
var _76547__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76545(self__.input,self__.p__76536,self__.owner,self__.vec__76544,self__.fname,self__.element,self__.tag,meta76546__$1));
});})(vec__76544,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities76545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76544,fname,element,tag){
return (function (_76547){
var self__ = this;
var _76547__$1 = this;
return self__.meta76546;
});})(vec__76544,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities76545.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities76545.prototype.om$core$IRender$render$arity$1 = ((function (vec__76544,fname,element,tag){
return (function (this__36757__auto__){
var self__ = this;
var this__36757__auto____$1 = this;
var oc = ((function (this__36757__auto____$1,vec__76544,fname,element,tag){
return (function (p1__76534_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__76534_SHARP_);
});})(this__36757__auto____$1,vec__76544,fname,element,tag))
;
var classes = (function (){var pred__76548 = cljs.core._EQ_;
var expr__76549 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__76548.call(null,false,expr__76549))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__76548.call(null,null,expr__76549))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__76548,expr__76549,oc,this__36757__auto____$1,vec__76544,fname,element,tag){
return (function (p1__76535_SHARP_){
return React.DOM.div(null,p1__76535_SHARP_);
});})(pred__76548,expr__76549,oc,this__36757__auto____$1,vec__76544,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__76544,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities76545.getBasis = ((function (vec__76544,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76536","p__76536",-1855477922,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76544","vec__76544",-572550149,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta76546","meta76546",-954256532,null)], null);
});})(vec__76544,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities76545.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76545.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76545";

biomarket.utilities.t_biomarket$utilities76545.cljs$lang$ctorPrWriter = ((function (vec__76544,fname,element,tag){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76545");
});})(vec__76544,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities76545 = ((function (vec__76544,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities76545(input__$1,p__76536__$1,owner__$1,vec__76544__$1,fname__$1,element__$1,tag__$1,meta76546){
return (new biomarket.utilities.t_biomarket$utilities76545(input__$1,p__76536__$1,owner__$1,vec__76544__$1,fname__$1,element__$1,tag__$1,meta76546));
});})(vec__76544,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities76545(biomarket$utilities$input,p__76536,owner,vec__76544,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__76552,owner){
var vec__76560 = p__76552;
var name = cljs.core.nth.call(null,vec__76560,(0),null);
var element = cljs.core.nth.call(null,vec__76560,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities76561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities76561 = (function (in_line_radio,p__76552,owner,vec__76560,name,element,meta76562){
this.in_line_radio = in_line_radio;
this.p__76552 = p__76552;
this.owner = owner;
this.vec__76560 = vec__76560;
this.name = name;
this.element = element;
this.meta76562 = meta76562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities76561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__76560,name,element){
return (function (_76563,meta76562__$1){
var self__ = this;
var _76563__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities76561(self__.in_line_radio,self__.p__76552,self__.owner,self__.vec__76560,self__.name,self__.element,meta76562__$1));
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__76560,name,element){
return (function (_76563){
var self__ = this;
var _76563__$1 = this;
return self__.meta76562;
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__76560,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__76560,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities76561.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__76560,name,element){
return (function (_,p__76564){
var self__ = this;
var map__76565 = p__76564;
var map__76565__$1 = ((((!((map__76565 == null)))?((((map__76565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76565):map__76565);
var element__$1 = cljs.core.get.call(null,map__76565__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__76565,map__76565__$1,element__$1,vec__76560,name,element){
return (function (p1__76551_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__76551_SHARP_), "onChange": ((function (___$1,map__76565,map__76565__$1,element__$1,vec__76560,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__76565,map__76565__$1,element__$1,vec__76560,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__76551_SHARP_)));
});})(___$1,map__76565,map__76565__$1,element__$1,vec__76560,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.getBasis = ((function (vec__76560,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__76552","p__76552",-825907422,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__76560","vec__76560",-799950301,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta76562","meta76562",207862287,null)], null);
});})(vec__76560,name,element))
;

biomarket.utilities.t_biomarket$utilities76561.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities76561.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities76561";

biomarket.utilities.t_biomarket$utilities76561.cljs$lang$ctorPrWriter = ((function (vec__76560,name,element){
return (function (this__26418__auto__,writer__26419__auto__,opt__26420__auto__){
return cljs.core._write.call(null,writer__26419__auto__,"biomarket.utilities/t_biomarket$utilities76561");
});})(vec__76560,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities76561 = ((function (vec__76560,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities76561(in_line_radio__$1,p__76552__$1,owner__$1,vec__76560__$1,name__$1,element__$1,meta76562){
return (new biomarket.utilities.t_biomarket$utilities76561(in_line_radio__$1,p__76552__$1,owner__$1,vec__76560__$1,name__$1,element__$1,meta76562));
});})(vec__76560,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities76561(biomarket$utilities$in_line_radio,p__76552,owner,vec__76560,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map