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
var args__26886__auto__ = [];
var len__26879__auto___37311 = arguments.length;
var i__26880__auto___37312 = (0);
while(true){
if((i__26880__auto___37312 < len__26879__auto___37311)){
args__26886__auto__.push((arguments[i__26880__auto___37312]));

var G__37313 = (i__26880__auto___37312 + (1));
i__26880__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq37310){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37310));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__37314){
var map__37317 = p__37314;
var map__37317__$1 = ((((!((map__37317 == null)))?((((map__37317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37317):map__37317);
var status = cljs.core.get.call(null,map__37317__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__37317__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function() { 
var G__37319__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__37319 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__37320__i = 0, G__37320__a = new Array(arguments.length -  2);
while (G__37320__i < G__37320__a.length) {G__37320__a[G__37320__i] = arguments[G__37320__i + 2]; ++G__37320__i;}
  args = new cljs.core.IndexedSeq(G__37320__a,0);
} 
return G__37319__delegate.call(this,o,d,args);};
G__37319.cljs$lang$maxFixedArity = 2;
G__37319.cljs$lang$applyTo = (function (arglist__37321){
var o = cljs.core.first(arglist__37321);
arglist__37321 = cljs.core.next(arglist__37321);
var d = cljs.core.first(arglist__37321);
var args = cljs.core.rest(arglist__37321);
return G__37319__delegate(o,d,args);
});
G__37319.cljs$core$IFn$_invoke$arity$variadic = G__37319__delegate;
return G__37319;
})()
;})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__37325__delegate = function (owner,p__37322,_){
var map__37323 = p__37322;
var map__37323__$1 = ((((!((map__37323 == null)))?((((map__37323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37323):map__37323);
var data = cljs.core.get.call(null,map__37323__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__37325 = function (owner,p__37322,var_args){
var _ = null;
if (arguments.length > 2) {
var G__37326__i = 0, G__37326__a = new Array(arguments.length -  2);
while (G__37326__i < G__37326__a.length) {G__37326__a[G__37326__i] = arguments[G__37326__i + 2]; ++G__37326__i;}
  _ = new cljs.core.IndexedSeq(G__37326__a,0);
} 
return G__37325__delegate.call(this,owner,p__37322,_);};
G__37325.cljs$lang$maxFixedArity = 2;
G__37325.cljs$lang$applyTo = (function (arglist__37327){
var owner = cljs.core.first(arglist__37327);
arglist__37327 = cljs.core.next(arglist__37327);
var p__37322 = cljs.core.first(arglist__37327);
var _ = cljs.core.rest(arglist__37327);
return G__37325__delegate(owner,p__37322,_);
});
G__37325.cljs$core$IFn$_invoke$arity$variadic = G__37325__delegate;
return G__37325;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__37328,func){
var map__37329 = p__37328;
var map__37329__$1 = ((((!((map__37329 == null)))?((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37329):map__37329);
var data = cljs.core.get.call(null,map__37329__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__37331){
var map__37332 = p__37331;
var map__37332__$1 = ((((!((map__37332 == null)))?((((map__37332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37332):map__37332);
var data = cljs.core.get.call(null,map__37332__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__37334){
var map__37335 = p__37334;
var map__37335__$1 = ((((!((map__37335 == null)))?((((map__37335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37335):map__37335);
var data = cljs.core.get.call(null,map__37335__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__37339){
var map__37340 = p__37339;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var data = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__37340,map__37340__$1,data){
return (function (p1__37337_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__37337_SHARP_);
});})(map__37340,map__37340__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__37340,map__37340__$1,data){
return (function (p1__37338_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37338_SHARP_));
});})(status__GT_view,cv,projs,map__37340,map__37340__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args37342 = [];
var len__26879__auto___37382 = arguments.length;
var i__26880__auto___37383 = (0);
while(true){
if((i__26880__auto___37383 < len__26879__auto___37382)){
args37342.push((arguments[i__26880__auto___37383]));

var G__37384 = (i__26880__auto___37383 + (1));
i__26880__auto___37383 = G__37384;
continue;
} else {
}
break;
}

var G__37344 = args37342.length;
switch (G__37344) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37342.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,c,nc,events){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,c,nc,events){
return (function (state_37363){
var state_val_37364 = (state_37363[(1)]);
if((state_val_37364 === (1))){
var state_37363__$1 = state_37363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37363__$1,(2),events);
} else {
if((state_val_37364 === (2))){
var inst_37346 = (state_37363[(2)]);
var inst_37347 = inst_37346;
var state_37363__$1 = (function (){var statearr_37365 = state_37363;
(statearr_37365[(7)] = inst_37347);

return statearr_37365;
})();
var statearr_37366_37386 = state_37363__$1;
(statearr_37366_37386[(2)] = null);

(statearr_37366_37386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37364 === (3))){
var inst_37347 = (state_37363[(7)]);
var inst_37349 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_37347);
var inst_37350 = cljs.core._EQ_.call(null,inst_37349,new cljs.core.Keyword(null,"end","end",-268185958));
var state_37363__$1 = state_37363;
if(inst_37350){
var statearr_37367_37387 = state_37363__$1;
(statearr_37367_37387[(1)] = (5));

} else {
var statearr_37368_37388 = state_37363__$1;
(statearr_37368_37388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37364 === (4))){
var inst_37361 = (state_37363[(2)]);
var state_37363__$1 = state_37363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37363__$1,inst_37361);
} else {
if((state_val_37364 === (5))){
var state_37363__$1 = state_37363;
var statearr_37369_37389 = state_37363__$1;
(statearr_37369_37389[(2)] = null);

(statearr_37369_37389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37364 === (6))){
var inst_37347 = (state_37363[(7)]);
var inst_37353 = func.call(null,owner,inst_37347);
var state_37363__$1 = (function (){var statearr_37370 = state_37363;
(statearr_37370[(8)] = inst_37353);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37363__$1,(8),events);
} else {
if((state_val_37364 === (7))){
var inst_37358 = (state_37363[(2)]);
var inst_37359 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_37363__$1 = (function (){var statearr_37371 = state_37363;
(statearr_37371[(9)] = inst_37358);

return statearr_37371;
})();
var statearr_37372_37390 = state_37363__$1;
(statearr_37372_37390[(2)] = inst_37359);

(statearr_37372_37390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37364 === (8))){
var inst_37355 = (state_37363[(2)]);
var inst_37347 = inst_37355;
var state_37363__$1 = (function (){var statearr_37373 = state_37363;
(statearr_37373[(7)] = inst_37347);

return statearr_37373;
})();
var statearr_37374_37391 = state_37363__$1;
(statearr_37374_37391[(2)] = null);

(statearr_37374_37391[(1)] = (3));


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
});})(c__29940__auto__,c,nc,events))
;
return ((function (switch__29828__auto__,c__29940__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__29829__auto__ = null;
var biomarket$utilities$state_machine__29829__auto____0 = (function (){
var statearr_37378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37378[(0)] = biomarket$utilities$state_machine__29829__auto__);

(statearr_37378[(1)] = (1));

return statearr_37378;
});
var biomarket$utilities$state_machine__29829__auto____1 = (function (state_37363){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_37363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e37379){if((e37379 instanceof Object)){
var ex__29832__auto__ = e37379;
var statearr_37380_37392 = state_37363;
(statearr_37380_37392[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37393 = state_37363;
state_37363 = G__37393;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
biomarket$utilities$state_machine__29829__auto__ = function(state_37363){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__29829__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__29829__auto____1.call(this,state_37363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__29829__auto____0;
biomarket$utilities$state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__29829__auto____1;
return biomarket$utilities$state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,c,nc,events))
})();
var state__29942__auto__ = (function (){var statearr_37381 = f__29941__auto__.call(null);
(statearr_37381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_37381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,c,nc,events))
);

return c__29940__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26886__auto__ = [];
var len__26879__auto___37400 = arguments.length;
var i__26880__auto___37401 = (0);
while(true){
if((i__26880__auto___37401 < len__26879__auto___37400)){
args__26886__auto__.push((arguments[i__26880__auto___37401]));

var G__37402 = (i__26880__auto___37401 + (1));
i__26880__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((1) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26887__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__37396 = cljs.core.seq.call(null,topics);
var chunk__37397 = null;
var count__37398 = (0);
var i__37399 = (0);
while(true){
if((i__37399 < count__37398)){
var t = cljs.core._nth.call(null,chunk__37397,i__37399);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__37403 = seq__37396;
var G__37404 = chunk__37397;
var G__37405 = count__37398;
var G__37406 = (i__37399 + (1));
seq__37396 = G__37403;
chunk__37397 = G__37404;
count__37398 = G__37405;
i__37399 = G__37406;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37396);
if(temp__4425__auto__){
var seq__37396__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37396__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__37396__$1);
var G__37407 = cljs.core.chunk_rest.call(null,seq__37396__$1);
var G__37408 = c__26620__auto__;
var G__37409 = cljs.core.count.call(null,c__26620__auto__);
var G__37410 = (0);
seq__37396 = G__37407;
chunk__37397 = G__37408;
count__37398 = G__37409;
i__37399 = G__37410;
continue;
} else {
var t = cljs.core.first.call(null,seq__37396__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__37411 = cljs.core.next.call(null,seq__37396__$1);
var G__37412 = null;
var G__37413 = (0);
var G__37414 = (0);
seq__37396 = G__37411;
chunk__37397 = G__37412;
count__37398 = G__37413;
i__37399 = G__37414;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq37394){
var G__37395 = cljs.core.first.call(null,seq37394);
var seq37394__$1 = cljs.core.next.call(null,seq37394);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__37395,seq37394__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,nc,events){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,nc,events){
return (function (state_37470){
var state_val_37471 = (state_37470[(1)]);
if((state_val_37471 === (1))){
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37470__$1,(2),events);
} else {
if((state_val_37471 === (2))){
var inst_37453 = (state_37470[(2)]);
var inst_37454 = inst_37453;
var state_37470__$1 = (function (){var statearr_37472 = state_37470;
(statearr_37472[(7)] = inst_37454);

return statearr_37472;
})();
var statearr_37473_37489 = state_37470__$1;
(statearr_37473_37489[(2)] = null);

(statearr_37473_37489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (3))){
var inst_37454 = (state_37470[(7)]);
var inst_37456 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_37454);
var inst_37457 = cljs.core._EQ_.call(null,inst_37456,new cljs.core.Keyword(null,"end","end",-268185958));
var state_37470__$1 = state_37470;
if(inst_37457){
var statearr_37474_37490 = state_37470__$1;
(statearr_37474_37490[(1)] = (5));

} else {
var statearr_37475_37491 = state_37470__$1;
(statearr_37475_37491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (4))){
var inst_37468 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37470__$1,inst_37468);
} else {
if((state_val_37471 === (5))){
var state_37470__$1 = state_37470;
var statearr_37476_37492 = state_37470__$1;
(statearr_37476_37492[(2)] = null);

(statearr_37476_37492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (6))){
var inst_37454 = (state_37470[(7)]);
var inst_37460 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_37454);
var state_37470__$1 = (function (){var statearr_37477 = state_37470;
(statearr_37477[(8)] = inst_37460);

return statearr_37477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37470__$1,(8),events);
} else {
if((state_val_37471 === (7))){
var inst_37465 = (state_37470[(2)]);
var inst_37466 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_37470__$1 = (function (){var statearr_37478 = state_37470;
(statearr_37478[(9)] = inst_37465);

return statearr_37478;
})();
var statearr_37479_37493 = state_37470__$1;
(statearr_37479_37493[(2)] = inst_37466);

(statearr_37479_37493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (8))){
var inst_37462 = (state_37470[(2)]);
var inst_37454 = inst_37462;
var state_37470__$1 = (function (){var statearr_37480 = state_37470;
(statearr_37480[(7)] = inst_37454);

return statearr_37480;
})();
var statearr_37481_37494 = state_37470__$1;
(statearr_37481_37494[(2)] = null);

(statearr_37481_37494[(1)] = (3));


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
});})(c__29940__auto__,nc,events))
;
return ((function (switch__29828__auto__,c__29940__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____0 = (function (){
var statearr_37485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37485[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__);

(statearr_37485[(1)] = (1));

return statearr_37485;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____1 = (function (state_37470){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_37470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e37486){if((e37486 instanceof Object)){
var ex__29832__auto__ = e37486;
var statearr_37487_37495 = state_37470;
(statearr_37487_37495[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37496 = state_37470;
state_37470 = G__37496;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__ = function(state_37470){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____1.call(this,state_37470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,nc,events))
})();
var state__29942__auto__ = (function (){var statearr_37488 = f__29941__auto__.call(null);
(statearr_37488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_37488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,nc,events))
);

return c__29940__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.show_default = (function biomarket$utilities$show_default(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37500 = (function (show_default,_,owner,meta37501){
this.show_default = show_default;
this._ = _;
this.owner = owner;
this.meta37501 = meta37501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37502,meta37501__$1){
var self__ = this;
var _37502__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37500(self__.show_default,self__._,self__.owner,meta37501__$1));
});

biomarket.utilities.t_biomarket$utilities37500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37502){
var self__ = this;
var _37502__$1 = this;
return self__.meta37501;
});

biomarket.utilities.t_biomarket$utilities37500.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37500.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div(null);
});

biomarket.utilities.t_biomarket$utilities37500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"show-default","show-default",-609967859,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37501","meta37501",385973000,null)], null);
});

biomarket.utilities.t_biomarket$utilities37500.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37500.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37500";

biomarket.utilities.t_biomarket$utilities37500.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37500");
});

biomarket.utilities.__GT_t_biomarket$utilities37500 = (function biomarket$utilities$show_default_$___GT_t_biomarket$utilities37500(show_default__$1,___$1,owner__$1,meta37501){
return (new biomarket.utilities.t_biomarket$utilities37500(show_default__$1,___$1,owner__$1,meta37501));
});

}

return (new biomarket.utilities.t_biomarket$utilities37500(biomarket$utilities$show_default,_,owner,null));
});
biomarket.utilities.bottom_skel = (function biomarket$utilities$bottom_skel(p__37503,owner){
var map__37514 = p__37503;
var map__37514__$1 = ((((!((map__37514 == null)))?((((map__37514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37514):map__37514);
var project = map__37514__$1;
var links = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var widget = cljs.core.get.call(null,map__37514__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
if(typeof biomarket.utilities.t_biomarket$utilities37516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37516 = (function (bottom_skel,p__37503,owner,map__37514,project,links,widget,meta37517){
this.bottom_skel = bottom_skel;
this.p__37503 = p__37503;
this.owner = owner;
this.map__37514 = map__37514;
this.project = project;
this.links = links;
this.widget = widget;
this.meta37517 = meta37517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37514,map__37514__$1,project,links,widget){
return (function (_37518,meta37517__$1){
var self__ = this;
var _37518__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37516(self__.bottom_skel,self__.p__37503,self__.owner,self__.map__37514,self__.project,self__.links,self__.widget,meta37517__$1));
});})(map__37514,map__37514__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37514,map__37514__$1,project,links,widget){
return (function (_37518){
var self__ = this;
var _37518__$1 = this;
return self__.meta37517;
});})(map__37514,map__37514__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37516.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37516.prototype.om$core$IRender$render$arity$1 = ((function (map__37514,map__37514__$1,project,links,widget){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
var visible = new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585).cljs$core$IFn$_invoke$arity$1(self__.project);
return React.DOM.div({"className": "container-fluid"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group", "role": "group"},cljs.core.map.call(null,((function (visible,this__36754__auto____$1,map__37514,map__37514__$1,project,links,widget){
return (function (p__37519){
var vec__37520 = p__37519;
var tag = cljs.core.nth.call(null,vec__37520,(0),null);
var ele = cljs.core.nth.call(null,vec__37520,(1),null);
return React.DOM.a({"className": ((cljs.core._EQ_.call(null,visible,tag))?"btn btn-default btn-sm active":"btn btn-default btn-sm"), "onClick": ((function (vec__37520,tag,ele,visible,this__36754__auto____$1,map__37514,map__37514__$1,project,links,widget){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.project),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"show-bottom","show-bottom",-1162121528),new cljs.core.Keyword(null,"bottom-view","bottom-view",1740669585),((cljs.core._EQ_.call(null,visible,tag))?new cljs.core.Keyword(null,"default","default",-1987822328):tag)], null));
});})(vec__37520,tag,ele,visible,this__36754__auto____$1,map__37514,map__37514__$1,project,links,widget))
},cljs.core.first.call(null,ele));
});})(visible,this__36754__auto____$1,map__37514,map__37514__$1,project,links,widget))
,self__.links)))),(function (){var pred__37521 = cljs.core._EQ_;
var expr__37522 = visible;
if(cljs.core.truth_(pred__37521.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__37522))){
return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},om.core.build.call(null,biomarket.utilities.show_default,null)));
} else {
return om.core.build.call(null,cljs.core.second.call(null,visible.call(null,self__.links)),((cljs.core.seq.call(null,cljs.core.drop.call(null,(2),visible.call(null,self__.links))))?cljs.core.vec.call(null,cljs.core.cons.call(null,self__.project,cljs.core.drop.call(null,(2),visible.call(null,self__.links)))):self__.project));
}
})());
});})(map__37514,map__37514__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37516.getBasis = ((function (map__37514,map__37514__$1,project,links,widget){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-skel","bottom-skel",24371686,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"project","project",-1530041190,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37503","p__37503",-426346508,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__37514","map__37514",-523360228,null),new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.Symbol(null,"meta37517","meta37517",2123125174,null)], null);
});})(map__37514,map__37514__$1,project,links,widget))
;

biomarket.utilities.t_biomarket$utilities37516.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37516.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37516";

biomarket.utilities.t_biomarket$utilities37516.cljs$lang$ctorPrWriter = ((function (map__37514,map__37514__$1,project,links,widget){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37516");
});})(map__37514,map__37514__$1,project,links,widget))
;

biomarket.utilities.__GT_t_biomarket$utilities37516 = ((function (map__37514,map__37514__$1,project,links,widget){
return (function biomarket$utilities$bottom_skel_$___GT_t_biomarket$utilities37516(bottom_skel__$1,p__37503__$1,owner__$1,map__37514__$2,project__$1,links__$1,widget__$1,meta37517){
return (new biomarket.utilities.t_biomarket$utilities37516(bottom_skel__$1,p__37503__$1,owner__$1,map__37514__$2,project__$1,links__$1,widget__$1,meta37517));
});})(map__37514,map__37514__$1,project,links,widget))
;

}

return (new biomarket.utilities.t_biomarket$utilities37516(biomarket$utilities$bottom_skel,p__37503,owner,map__37514__$1,project,links,widget,null));
});
if(typeof biomarket.utilities.bottom !== 'undefined'){
} else {
biomarket.utilities.bottom = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","bottom"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (p){
return new cljs.core.Keyword(null,"view-type","view-type",-1848894559).cljs$core$IFn$_invoke$arity$1(p);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
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
if(typeof biomarket.utilities.t_biomarket$utilities37533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37533 = (function (more_less_text,text,owner,meta37534){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta37534 = meta37534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37535,meta37534__$1){
var self__ = this;
var _37535__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37533(self__.more_less_text,self__.text,self__.owner,meta37534__$1));
});

biomarket.utilities.t_biomarket$utilities37533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37535){
var self__ = this;
var _37535__$1 = this;
return self__.meta37534;
});

biomarket.utilities.t_biomarket$utilities37533.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities37533.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities37533.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities37533.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__37536){
var self__ = this;
var map__37537 = p__37536;
var map__37537__$1 = ((((!((map__37537 == null)))?((((map__37537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37537):map__37537);
var showing = cljs.core.get.call(null,map__37537__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__37539 = cljs.core._EQ_;
var expr__37540 = showing;
if(cljs.core.truth_(pred__37539.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__37540))){
return React.DOM.div(null,React.DOM.span(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__37539,expr__37540,___$1,map__37537,map__37537__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__37539,expr__37540,___$1,map__37537,map__37537__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__37539.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__37540))){
return React.DOM.div(null,React.DOM.span(null,self__.text),React.DOM.a({"onClick": ((function (pred__37539,expr__37540,___$1,map__37537,map__37537__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__37539,expr__37540,___$1,map__37537,map__37537__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37540)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities37533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37534","meta37534",-1406804378,null)], null);
});

biomarket.utilities.t_biomarket$utilities37533.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37533.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37533";

biomarket.utilities.t_biomarket$utilities37533.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37533");
});

biomarket.utilities.__GT_t_biomarket$utilities37533 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities37533(more_less_text__$1,text__$1,owner__$1,meta37534){
return (new biomarket.utilities.t_biomarket$utilities37533(more_less_text__$1,text__$1,owner__$1,meta37534));
});

}

return (new biomarket.utilities.t_biomarket$utilities37533(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37546 = (function (control_buttons,inputs,owner,meta37547){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta37547 = meta37547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37548,meta37547__$1){
var self__ = this;
var _37548__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37546(self__.control_buttons,self__.inputs,self__.owner,meta37547__$1));
});

biomarket.utilities.t_biomarket$utilities37546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37548){
var self__ = this;
var _37548__$1 = this;
return self__.meta37547;
});

biomarket.utilities.t_biomarket$utilities37546.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37546.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__36754__auto____$1){
return (function (p1__37542_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__37542_SHARP_)},cljs.core.first.call(null,p1__37542_SHARP_));
});})(this__36754__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities37546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37547","meta37547",-2123051032,null)], null);
});

biomarket.utilities.t_biomarket$utilities37546.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37546.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37546";

biomarket.utilities.t_biomarket$utilities37546.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37546");
});

biomarket.utilities.__GT_t_biomarket$utilities37546 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities37546(control_buttons__$1,inputs__$1,owner__$1,meta37547){
return (new biomarket.utilities.t_biomarket$utilities37546(control_buttons__$1,inputs__$1,owner__$1,meta37547));
});

}

return (new biomarket.utilities.t_biomarket$utilities37546(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__37549,owner){
var vec__37554 = p__37549;
var text = cljs.core.nth.call(null,vec__37554,(0),null);
var topic = cljs.core.nth.call(null,vec__37554,(1),null);
var tag = cljs.core.nth.call(null,vec__37554,(2),null);
var current = cljs.core.nth.call(null,vec__37554,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities37555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37555 = (function (menu_item,p__37549,owner,vec__37554,text,topic,tag,current,meta37556){
this.menu_item = menu_item;
this.p__37549 = p__37549;
this.owner = owner;
this.vec__37554 = vec__37554;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta37556 = meta37556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37554,text,topic,tag,current){
return (function (_37557,meta37556__$1){
var self__ = this;
var _37557__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37555(self__.menu_item,self__.p__37549,self__.owner,self__.vec__37554,self__.text,self__.topic,self__.tag,self__.current,meta37556__$1));
});})(vec__37554,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37554,text,topic,tag,current){
return (function (_37557){
var self__ = this;
var _37557__$1 = this;
return self__.meta37556;
});})(vec__37554,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37555.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37555.prototype.om$core$IRender$render$arity$1 = ((function (vec__37554,text,topic,tag,current){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__36754__auto____$1,vec__37554,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__36754__auto____$1,vec__37554,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__37554,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37555.getBasis = ((function (vec__37554,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37549","p__37549",1994722492,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37554","vec__37554",1984811999,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta37556","meta37556",1947526733,null)], null);
});})(vec__37554,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities37555.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37555.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37555";

biomarket.utilities.t_biomarket$utilities37555.cljs$lang$ctorPrWriter = ((function (vec__37554,text,topic,tag,current){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37555");
});})(vec__37554,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities37555 = ((function (vec__37554,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities37555(menu_item__$1,p__37549__$1,owner__$1,vec__37554__$1,text__$1,topic__$1,tag__$1,current__$1,meta37556){
return (new biomarket.utilities.t_biomarket$utilities37555(menu_item__$1,p__37549__$1,owner__$1,vec__37554__$1,text__$1,topic__$1,tag__$1,current__$1,meta37556));
});})(vec__37554,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities37555(biomarket$utilities$menu_item,p__37549,owner,vec__37554,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__37559,owner){
var vec__37564 = p__37559;
var current = cljs.core.nth.call(null,vec__37564,(0),null);
var inputs = cljs.core.nth.call(null,vec__37564,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__37564,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37565 = (function (top_navigation,p__37559,owner,vec__37564,current,inputs,nav_tag,meta37566){
this.top_navigation = top_navigation;
this.p__37559 = p__37559;
this.owner = owner;
this.vec__37564 = vec__37564;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta37566 = meta37566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37564,current,inputs,nav_tag){
return (function (_37567,meta37566__$1){
var self__ = this;
var _37567__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37565(self__.top_navigation,self__.p__37559,self__.owner,self__.vec__37564,self__.current,self__.inputs,self__.nav_tag,meta37566__$1));
});})(vec__37564,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37564,current,inputs,nav_tag){
return (function (_37567){
var self__ = this;
var _37567__$1 = this;
return self__.meta37566;
});})(vec__37564,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37565.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37565.prototype.om$core$IRender$render$arity$1 = ((function (vec__37564,current,inputs,nav_tag){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__36754__auto____$1,vec__37564,current,inputs,nav_tag){
return (function (p1__37558_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__37558_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__36754__auto____$1,vec__37564,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__37564,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37565.getBasis = ((function (vec__37564,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37559","p__37559",-1068741420,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37564","vec__37564",2033647231,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta37566","meta37566",953841845,null)], null);
});})(vec__37564,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities37565.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37565.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37565";

biomarket.utilities.t_biomarket$utilities37565.cljs$lang$ctorPrWriter = ((function (vec__37564,current,inputs,nav_tag){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37565");
});})(vec__37564,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities37565 = ((function (vec__37564,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities37565(top_navigation__$1,p__37559__$1,owner__$1,vec__37564__$1,current__$1,inputs__$1,nav_tag__$1,meta37566){
return (new biomarket.utilities.t_biomarket$utilities37565(top_navigation__$1,p__37559__$1,owner__$1,vec__37564__$1,current__$1,inputs__$1,nav_tag__$1,meta37566));
});})(vec__37564,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities37565(biomarket$utilities$top_navigation,p__37559,owner,vec__37564,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__37568,owner){
var vec__37573 = p__37568;
var padding = cljs.core.nth.call(null,vec__37573,(0),null);
var value = cljs.core.nth.call(null,vec__37573,(1),null);
var func = cljs.core.nth.call(null,vec__37573,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37574 = (function (padded_button,p__37568,owner,vec__37573,padding,value,func,meta37575){
this.padded_button = padded_button;
this.p__37568 = p__37568;
this.owner = owner;
this.vec__37573 = vec__37573;
this.padding = padding;
this.value = value;
this.func = func;
this.meta37575 = meta37575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37573,padding,value,func){
return (function (_37576,meta37575__$1){
var self__ = this;
var _37576__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37574(self__.padded_button,self__.p__37568,self__.owner,self__.vec__37573,self__.padding,self__.value,self__.func,meta37575__$1));
});})(vec__37573,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37573,padding,value,func){
return (function (_37576){
var self__ = this;
var _37576__$1 = this;
return self__.meta37575;
});})(vec__37573,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37574.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37574.prototype.om$core$IRender$render$arity$1 = ((function (vec__37573,padding,value,func){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__37573,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37574.getBasis = ((function (vec__37573,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37568","p__37568",-1326653400,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37573","vec__37573",916185698,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta37575","meta37575",1834602848,null)], null);
});})(vec__37573,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities37574.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37574.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37574";

biomarket.utilities.t_biomarket$utilities37574.cljs$lang$ctorPrWriter = ((function (vec__37573,padding,value,func){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37574");
});})(vec__37573,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities37574 = ((function (vec__37573,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities37574(padded_button__$1,p__37568__$1,owner__$1,vec__37573__$1,padding__$1,value__$1,func__$1,meta37575){
return (new biomarket.utilities.t_biomarket$utilities37574(padded_button__$1,p__37568__$1,owner__$1,vec__37573__$1,padding__$1,value__$1,func__$1,meta37575));
});})(vec__37573,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities37574(biomarket$utilities$padded_button,p__37568,owner,vec__37573,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__37577,owner){
var vec__37582 = p__37577;
var padding = cljs.core.nth.call(null,vec__37582,(0),null);
var value = cljs.core.nth.call(null,vec__37582,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities37583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37583 = (function (padded_button_disabled,p__37577,owner,vec__37582,padding,value,meta37584){
this.padded_button_disabled = padded_button_disabled;
this.p__37577 = p__37577;
this.owner = owner;
this.vec__37582 = vec__37582;
this.padding = padding;
this.value = value;
this.meta37584 = meta37584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37582,padding,value){
return (function (_37585,meta37584__$1){
var self__ = this;
var _37585__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37583(self__.padded_button_disabled,self__.p__37577,self__.owner,self__.vec__37582,self__.padding,self__.value,meta37584__$1));
});})(vec__37582,padding,value))
;

biomarket.utilities.t_biomarket$utilities37583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37582,padding,value){
return (function (_37585){
var self__ = this;
var _37585__$1 = this;
return self__.meta37584;
});})(vec__37582,padding,value))
;

biomarket.utilities.t_biomarket$utilities37583.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37583.prototype.om$core$IRender$render$arity$1 = ((function (vec__37582,padding,value){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__37582,padding,value))
;

biomarket.utilities.t_biomarket$utilities37583.getBasis = ((function (vec__37582,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37577","p__37577",-1665178440,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37582","vec__37582",-1025788229,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta37584","meta37584",1199767672,null)], null);
});})(vec__37582,padding,value))
;

biomarket.utilities.t_biomarket$utilities37583.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37583.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37583";

biomarket.utilities.t_biomarket$utilities37583.cljs$lang$ctorPrWriter = ((function (vec__37582,padding,value){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37583");
});})(vec__37582,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities37583 = ((function (vec__37582,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities37583(padded_button_disabled__$1,p__37577__$1,owner__$1,vec__37582__$1,padding__$1,value__$1,meta37584){
return (new biomarket.utilities.t_biomarket$utilities37583(padded_button_disabled__$1,p__37577__$1,owner__$1,vec__37582__$1,padding__$1,value__$1,meta37584));
});})(vec__37582,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities37583(biomarket$utilities$padded_button_disabled,p__37577,owner,vec__37582,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37589 = (function (waiting,_,owner,meta37590){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta37590 = meta37590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37591,meta37590__$1){
var self__ = this;
var _37591__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37589(self__.waiting,self__._,self__.owner,meta37590__$1));
});

biomarket.utilities.t_biomarket$utilities37589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37591){
var self__ = this;
var _37591__$1 = this;
return self__.meta37590;
});

biomarket.utilities.t_biomarket$utilities37589.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37589.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities37589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37590","meta37590",-1097793849,null)], null);
});

biomarket.utilities.t_biomarket$utilities37589.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37589.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37589";

biomarket.utilities.t_biomarket$utilities37589.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37589");
});

biomarket.utilities.__GT_t_biomarket$utilities37589 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities37589(waiting__$1,___$1,owner__$1,meta37590){
return (new biomarket.utilities.t_biomarket$utilities37589(waiting__$1,___$1,owner__$1,meta37590));
});

}

return (new biomarket.utilities.t_biomarket$utilities37589(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__37594,owner){
var map__37600 = p__37594;
var map__37600__$1 = ((((!((map__37600 == null)))?((((map__37600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37600):map__37600);
var data = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__37600__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities37602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37602 = (function (make_a_table,p__37594,owner,map__37600,data,tparam,meta37603){
this.make_a_table = make_a_table;
this.p__37594 = p__37594;
this.owner = owner;
this.map__37600 = map__37600;
this.data = data;
this.tparam = tparam;
this.meta37603 = meta37603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37600,map__37600__$1,data,tparam){
return (function (_37604,meta37603__$1){
var self__ = this;
var _37604__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37602(self__.make_a_table,self__.p__37594,self__.owner,self__.map__37600,self__.data,self__.tparam,meta37603__$1));
});})(map__37600,map__37600__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37600,map__37600__$1,data,tparam){
return (function (_37604){
var self__ = this;
var _37604__$1 = this;
return self__.meta37603;
});})(map__37600,map__37600__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37602.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37602.prototype.om$core$IRender$render$arity$1 = ((function (map__37600,map__37600__$1,data,tparam){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam){
return (function (p1__37592_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__37592_SHARP_);
});})(tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam){
return (function (p1__37593_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__37593_SHARP_);
});})(tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__36754__auto____$1,map__37600,map__37600__$1,data,tparam))
,self__.data))));
});})(map__37600,map__37600__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37602.getBasis = ((function (map__37600,map__37600__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37594","p__37594",397765956,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__37600","map__37600",175617287,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta37603","meta37603",2132593883,null)], null);
});})(map__37600,map__37600__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities37602.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37602.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37602";

biomarket.utilities.t_biomarket$utilities37602.cljs$lang$ctorPrWriter = ((function (map__37600,map__37600__$1,data,tparam){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37602");
});})(map__37600,map__37600__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities37602 = ((function (map__37600,map__37600__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities37602(make_a_table__$1,p__37594__$1,owner__$1,map__37600__$2,data__$1,tparam__$1,meta37603){
return (new biomarket.utilities.t_biomarket$utilities37602(make_a_table__$1,p__37594__$1,owner__$1,map__37600__$2,data__$1,tparam__$1,meta37603));
});})(map__37600,map__37600__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities37602(biomarket$utilities$make_a_table,p__37594,owner,map__37600__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function() { 
var G__37608__delegate = function (owner,p__37605,args){
var map__37606 = p__37605;
var map__37606__$1 = ((((!((map__37606 == null)))?((((map__37606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37606):map__37606);
var fname = cljs.core.get.call(null,map__37606__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37606__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__37608 = function (owner,p__37605,var_args){
var args = null;
if (arguments.length > 2) {
var G__37609__i = 0, G__37609__a = new Array(arguments.length -  2);
while (G__37609__i < G__37609__a.length) {G__37609__a[G__37609__i] = arguments[G__37609__i + 2]; ++G__37609__i;}
  args = new cljs.core.IndexedSeq(G__37609__a,0);
} 
return G__37608__delegate.call(this,owner,p__37605,args);};
G__37608.cljs$lang$maxFixedArity = 2;
G__37608.cljs$lang$applyTo = (function (arglist__37610){
var owner = cljs.core.first(arglist__37610);
arglist__37610 = cljs.core.next(arglist__37610);
var p__37605 = cljs.core.first(arglist__37610);
var args = cljs.core.rest(arglist__37610);
return G__37608__delegate(owner,p__37605,args);
});
G__37608.cljs$core$IFn$_invoke$arity$variadic = G__37608__delegate;
return G__37608;
})()
;})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__37619 = null;
var G__37619__2 = (function (owner,p__37611){
var map__37613 = p__37611;
var map__37613__$1 = ((((!((map__37613 == null)))?((((map__37613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37613):map__37613);
var m = map__37613__$1;
var fname = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__37619__3 = (function (owner,p__37612,param_name){
var map__37615 = p__37612;
var map__37615__$1 = ((((!((map__37615 == null)))?((((map__37615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37615):map__37615);
var fname = cljs.core.get.call(null,map__37615__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__37615__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__37615,map__37615__$1,fname,element){
return (function (p__37617){
var vec__37618 = p__37617;
var k = cljs.core.nth.call(null,vec__37618,(0),null);
var v = cljs.core.nth.call(null,vec__37618,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__37615,map__37615__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__37619 = function(owner,p__37612,param_name){
switch(arguments.length){
case 2:
return G__37619__2.call(this,owner,p__37612);
case 3:
return G__37619__3.call(this,owner,p__37612,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37619.cljs$core$IFn$_invoke$arity$2 = G__37619__2;
G__37619.cljs$core$IFn$_invoke$arity$3 = G__37619__3;
return G__37619;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
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
var x__26643__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26643__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26643__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto____$2);
})(),x__26643__auto____$1);
})(),x__26643__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26643__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})(),(function (){var x__26643__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26643__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})(),(function (){var x__26643__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26643__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})(),(function (){var x__26643__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26643__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities37623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37623 = (function (the_input,js,owner,meta37624){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta37624 = meta37624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37625,meta37624__$1){
var self__ = this;
var _37625__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37623(self__.the_input,self__.js,self__.owner,meta37624__$1));
});

biomarket.utilities.t_biomarket$utilities37623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37625){
var self__ = this;
var _37625__$1 = this;
return self__.meta37624;
});

biomarket.utilities.t_biomarket$utilities37623.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37623.prototype.om$core$IRender$render$arity$1 = (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities37623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37624","meta37624",365852845,null)], null);
});

biomarket.utilities.t_biomarket$utilities37623.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37623.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37623";

biomarket.utilities.t_biomarket$utilities37623.cljs$lang$ctorPrWriter = (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37623");
});

biomarket.utilities.__GT_t_biomarket$utilities37623 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities37623(the_input__$1,js__$1,owner__$1,meta37624){
return (new biomarket.utilities.t_biomarket$utilities37623(the_input__$1,js__$1,owner__$1,meta37624));
});

}

return (new biomarket.utilities.t_biomarket$utilities37623(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__37628,owner){
var vec__37636 = p__37628;
var fname = cljs.core.nth.call(null,vec__37636,(0),null);
var element = cljs.core.nth.call(null,vec__37636,(1),null);
var tag = cljs.core.nth.call(null,vec__37636,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities37637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37637 = (function (input,p__37628,owner,vec__37636,fname,element,tag,meta37638){
this.input = input;
this.p__37628 = p__37628;
this.owner = owner;
this.vec__37636 = vec__37636;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta37638 = meta37638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37636,fname,element,tag){
return (function (_37639,meta37638__$1){
var self__ = this;
var _37639__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37637(self__.input,self__.p__37628,self__.owner,self__.vec__37636,self__.fname,self__.element,self__.tag,meta37638__$1));
});})(vec__37636,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37636,fname,element,tag){
return (function (_37639){
var self__ = this;
var _37639__$1 = this;
return self__.meta37638;
});})(vec__37636,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37637.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities37637.prototype.om$core$IRender$render$arity$1 = ((function (vec__37636,fname,element,tag){
return (function (this__36754__auto__){
var self__ = this;
var this__36754__auto____$1 = this;
var oc = ((function (this__36754__auto____$1,vec__37636,fname,element,tag){
return (function (p1__37626_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__37626_SHARP_);
});})(this__36754__auto____$1,vec__37636,fname,element,tag))
;
var classes = (function (){var pred__37640 = cljs.core._EQ_;
var expr__37641 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__37640.call(null,false,expr__37641))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__37640.call(null,null,expr__37641))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__37640,expr__37641,oc,this__36754__auto____$1,vec__37636,fname,element,tag){
return (function (p1__37627_SHARP_){
return React.DOM.div(null,p1__37627_SHARP_);
});})(pred__37640,expr__37641,oc,this__36754__auto____$1,vec__37636,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__37636,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37637.getBasis = ((function (vec__37636,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37628","p__37628",963789675,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37636","vec__37636",1020693249,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta37638","meta37638",959917676,null)], null);
});})(vec__37636,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities37637.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37637.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37637";

biomarket.utilities.t_biomarket$utilities37637.cljs$lang$ctorPrWriter = ((function (vec__37636,fname,element,tag){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37637");
});})(vec__37636,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities37637 = ((function (vec__37636,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities37637(input__$1,p__37628__$1,owner__$1,vec__37636__$1,fname__$1,element__$1,tag__$1,meta37638){
return (new biomarket.utilities.t_biomarket$utilities37637(input__$1,p__37628__$1,owner__$1,vec__37636__$1,fname__$1,element__$1,tag__$1,meta37638));
});})(vec__37636,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities37637(biomarket$utilities$input,p__37628,owner,vec__37636,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__37644,owner){
var vec__37652 = p__37644;
var name = cljs.core.nth.call(null,vec__37652,(0),null);
var element = cljs.core.nth.call(null,vec__37652,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities37653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities37653 = (function (in_line_radio,p__37644,owner,vec__37652,name,element,meta37654){
this.in_line_radio = in_line_radio;
this.p__37644 = p__37644;
this.owner = owner;
this.vec__37652 = vec__37652;
this.name = name;
this.element = element;
this.meta37654 = meta37654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities37653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37652,name,element){
return (function (_37655,meta37654__$1){
var self__ = this;
var _37655__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities37653(self__.in_line_radio,self__.p__37644,self__.owner,self__.vec__37652,self__.name,self__.element,meta37654__$1));
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37652,name,element){
return (function (_37655){
var self__ = this;
var _37655__$1 = this;
return self__.meta37654;
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__37652,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__37652,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities37653.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__37652,name,element){
return (function (_,p__37656){
var self__ = this;
var map__37657 = p__37656;
var map__37657__$1 = ((((!((map__37657 == null)))?((((map__37657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37657):map__37657);
var element__$1 = cljs.core.get.call(null,map__37657__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__37657,map__37657__$1,element__$1,vec__37652,name,element){
return (function (p1__37643_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__37643_SHARP_), "onChange": ((function (___$1,map__37657,map__37657__$1,element__$1,vec__37652,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__37657,map__37657__$1,element__$1,vec__37652,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__37643_SHARP_)));
});})(___$1,map__37657,map__37657__$1,element__$1,vec__37652,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.getBasis = ((function (vec__37652,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__37644","p__37644",1246858650,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__37652","vec__37652",1805678434,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta37654","meta37654",1140551746,null)], null);
});})(vec__37652,name,element))
;

biomarket.utilities.t_biomarket$utilities37653.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities37653.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities37653";

biomarket.utilities.t_biomarket$utilities37653.cljs$lang$ctorPrWriter = ((function (vec__37652,name,element){
return (function (this__26415__auto__,writer__26416__auto__,opt__26417__auto__){
return cljs.core._write.call(null,writer__26416__auto__,"biomarket.utilities/t_biomarket$utilities37653");
});})(vec__37652,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities37653 = ((function (vec__37652,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities37653(in_line_radio__$1,p__37644__$1,owner__$1,vec__37652__$1,name__$1,element__$1,meta37654){
return (new biomarket.utilities.t_biomarket$utilities37653(in_line_radio__$1,p__37644__$1,owner__$1,vec__37652__$1,name__$1,element__$1,meta37654));
});})(vec__37652,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities37653(biomarket$utilities$in_line_radio,p__37644,owner,vec__37652,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map