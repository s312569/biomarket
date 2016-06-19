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
var args__26975__auto__ = [];
var len__26968__auto___58389 = arguments.length;
var i__26969__auto___58390 = (0);
while(true){
if((i__26969__auto___58390 < len__26968__auto___58389)){
args__26975__auto__.push((arguments[i__26969__auto___58390]));

var G__58391 = (i__26969__auto___58390 + (1));
i__26969__auto___58390 = G__58391;
continue;
} else {
}
break;
}

var argseq__26976__auto__ = ((((0) < args__26975__auto__.length))?(new cljs.core.IndexedSeq(args__26975__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26976__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq58388){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58388));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__58392){
var map__58395 = p__58392;
var map__58395__$1 = ((((!((map__58395 == null)))?((((map__58395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58395):map__58395);
var status = cljs.core.get.call(null,map__58395__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__58395__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function() { 
var G__58397__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__58397 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__58398__i = 0, G__58398__a = new Array(arguments.length -  2);
while (G__58398__i < G__58398__a.length) {G__58398__a[G__58398__i] = arguments[G__58398__i + 2]; ++G__58398__i;}
  args = new cljs.core.IndexedSeq(G__58398__a,0);
} 
return G__58397__delegate.call(this,o,d,args);};
G__58397.cljs$lang$maxFixedArity = 2;
G__58397.cljs$lang$applyTo = (function (arglist__58399){
var o = cljs.core.first(arglist__58399);
arglist__58399 = cljs.core.next(arglist__58399);
var d = cljs.core.first(arglist__58399);
var args = cljs.core.rest(arglist__58399);
return G__58397__delegate(o,d,args);
});
G__58397.cljs$core$IFn$_invoke$arity$variadic = G__58397__delegate;
return G__58397;
})()
;})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__58403__delegate = function (owner,p__58400,_){
var map__58401 = p__58400;
var map__58401__$1 = ((((!((map__58401 == null)))?((((map__58401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58401):map__58401);
var data = cljs.core.get.call(null,map__58401__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__58403 = function (owner,p__58400,var_args){
var _ = null;
if (arguments.length > 2) {
var G__58404__i = 0, G__58404__a = new Array(arguments.length -  2);
while (G__58404__i < G__58404__a.length) {G__58404__a[G__58404__i] = arguments[G__58404__i + 2]; ++G__58404__i;}
  _ = new cljs.core.IndexedSeq(G__58404__a,0);
} 
return G__58403__delegate.call(this,owner,p__58400,_);};
G__58403.cljs$lang$maxFixedArity = 2;
G__58403.cljs$lang$applyTo = (function (arglist__58405){
var owner = cljs.core.first(arglist__58405);
arglist__58405 = cljs.core.next(arglist__58405);
var p__58400 = cljs.core.first(arglist__58405);
var _ = cljs.core.rest(arglist__58405);
return G__58403__delegate(owner,p__58400,_);
});
G__58403.cljs$core$IFn$_invoke$arity$variadic = G__58403__delegate;
return G__58403;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__58406,func){
var map__58407 = p__58406;
var map__58407__$1 = ((((!((map__58407 == null)))?((((map__58407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58407):map__58407);
var data = cljs.core.get.call(null,map__58407__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__58409){
var map__58410 = p__58409;
var map__58410__$1 = ((((!((map__58410 == null)))?((((map__58410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58410):map__58410);
var data = cljs.core.get.call(null,map__58410__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__58414){
var map__58415 = p__58414;
var map__58415__$1 = ((((!((map__58415 == null)))?((((map__58415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58415):map__58415);
var data = cljs.core.get.call(null,map__58415__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__58415,map__58415__$1,data){
return (function (p1__58412_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__58412_SHARP_);
});})(map__58415,map__58415__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__58415,map__58415__$1,data){
return (function (p1__58413_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58413_SHARP_));
});})(status__GT_view,cv,projs,map__58415,map__58415__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args58417 = [];
var len__26968__auto___58457 = arguments.length;
var i__26969__auto___58458 = (0);
while(true){
if((i__26969__auto___58458 < len__26968__auto___58457)){
args58417.push((arguments[i__26969__auto___58458]));

var G__58459 = (i__26969__auto___58458 + (1));
i__26969__auto___58458 = G__58459;
continue;
} else {
}
break;
}

var G__58419 = args58417.length;
switch (G__58419) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58417.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__28713__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28713__auto__,c,nc,events){
return (function (){
var f__28714__auto__ = (function (){var switch__28692__auto__ = ((function (c__28713__auto__,c,nc,events){
return (function (state_58438){
var state_val_58439 = (state_58438[(1)]);
if((state_val_58439 === (1))){
var state_58438__$1 = state_58438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58438__$1,(2),events);
} else {
if((state_val_58439 === (2))){
var inst_58421 = (state_58438[(2)]);
var inst_58422 = inst_58421;
var state_58438__$1 = (function (){var statearr_58440 = state_58438;
(statearr_58440[(7)] = inst_58422);

return statearr_58440;
})();
var statearr_58441_58461 = state_58438__$1;
(statearr_58441_58461[(2)] = null);

(statearr_58441_58461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (3))){
var inst_58422 = (state_58438[(7)]);
var inst_58424 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_58422);
var inst_58425 = cljs.core._EQ_.call(null,inst_58424,new cljs.core.Keyword(null,"end","end",-268185958));
var state_58438__$1 = state_58438;
if(inst_58425){
var statearr_58442_58462 = state_58438__$1;
(statearr_58442_58462[(1)] = (5));

} else {
var statearr_58443_58463 = state_58438__$1;
(statearr_58443_58463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (4))){
var inst_58436 = (state_58438[(2)]);
var state_58438__$1 = state_58438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58438__$1,inst_58436);
} else {
if((state_val_58439 === (5))){
var state_58438__$1 = state_58438;
var statearr_58444_58464 = state_58438__$1;
(statearr_58444_58464[(2)] = null);

(statearr_58444_58464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (6))){
var inst_58422 = (state_58438[(7)]);
var inst_58428 = func.call(null,owner,inst_58422);
var state_58438__$1 = (function (){var statearr_58445 = state_58438;
(statearr_58445[(8)] = inst_58428);

return statearr_58445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58438__$1,(8),events);
} else {
if((state_val_58439 === (7))){
var inst_58433 = (state_58438[(2)]);
var inst_58434 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_58438__$1 = (function (){var statearr_58446 = state_58438;
(statearr_58446[(9)] = inst_58433);

return statearr_58446;
})();
var statearr_58447_58465 = state_58438__$1;
(statearr_58447_58465[(2)] = inst_58434);

(statearr_58447_58465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58439 === (8))){
var inst_58430 = (state_58438[(2)]);
var inst_58422 = inst_58430;
var state_58438__$1 = (function (){var statearr_58448 = state_58438;
(statearr_58448[(7)] = inst_58422);

return statearr_58448;
})();
var statearr_58449_58466 = state_58438__$1;
(statearr_58449_58466[(2)] = null);

(statearr_58449_58466[(1)] = (3));


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
});})(c__28713__auto__,c,nc,events))
;
return ((function (switch__28692__auto__,c__28713__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__28693__auto__ = null;
var biomarket$utilities$state_machine__28693__auto____0 = (function (){
var statearr_58453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58453[(0)] = biomarket$utilities$state_machine__28693__auto__);

(statearr_58453[(1)] = (1));

return statearr_58453;
});
var biomarket$utilities$state_machine__28693__auto____1 = (function (state_58438){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_58438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e58454){if((e58454 instanceof Object)){
var ex__28696__auto__ = e58454;
var statearr_58455_58467 = state_58438;
(statearr_58455_58467[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58468 = state_58438;
state_58438 = G__58468;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
biomarket$utilities$state_machine__28693__auto__ = function(state_58438){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__28693__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__28693__auto____1.call(this,state_58438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__28693__auto____0;
biomarket$utilities$state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__28693__auto____1;
return biomarket$utilities$state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28713__auto__,c,nc,events))
})();
var state__28715__auto__ = (function (){var statearr_58456 = f__28714__auto__.call(null);
(statearr_58456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28713__auto__);

return statearr_58456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28715__auto__);
});})(c__28713__auto__,c,nc,events))
);

return c__28713__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26975__auto__ = [];
var len__26968__auto___58475 = arguments.length;
var i__26969__auto___58476 = (0);
while(true){
if((i__26969__auto___58476 < len__26968__auto___58475)){
args__26975__auto__.push((arguments[i__26969__auto___58476]));

var G__58477 = (i__26969__auto___58476 + (1));
i__26969__auto___58476 = G__58477;
continue;
} else {
}
break;
}

var argseq__26976__auto__ = ((((1) < args__26975__auto__.length))?(new cljs.core.IndexedSeq(args__26975__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26976__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__58471 = cljs.core.seq.call(null,topics);
var chunk__58472 = null;
var count__58473 = (0);
var i__58474 = (0);
while(true){
if((i__58474 < count__58473)){
var t = cljs.core._nth.call(null,chunk__58472,i__58474);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__58478 = seq__58471;
var G__58479 = chunk__58472;
var G__58480 = count__58473;
var G__58481 = (i__58474 + (1));
seq__58471 = G__58478;
chunk__58472 = G__58479;
count__58473 = G__58480;
i__58474 = G__58481;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__58471);
if(temp__4425__auto__){
var seq__58471__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58471__$1)){
var c__26709__auto__ = cljs.core.chunk_first.call(null,seq__58471__$1);
var G__58482 = cljs.core.chunk_rest.call(null,seq__58471__$1);
var G__58483 = c__26709__auto__;
var G__58484 = cljs.core.count.call(null,c__26709__auto__);
var G__58485 = (0);
seq__58471 = G__58482;
chunk__58472 = G__58483;
count__58473 = G__58484;
i__58474 = G__58485;
continue;
} else {
var t = cljs.core.first.call(null,seq__58471__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__58486 = cljs.core.next.call(null,seq__58471__$1);
var G__58487 = null;
var G__58488 = (0);
var G__58489 = (0);
seq__58471 = G__58486;
chunk__58472 = G__58487;
count__58473 = G__58488;
i__58474 = G__58489;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq58469){
var G__58470 = cljs.core.first.call(null,seq58469);
var seq58469__$1 = cljs.core.next.call(null,seq58469);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__58470,seq58469__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__28713__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28713__auto__,nc,events){
return (function (){
var f__28714__auto__ = (function (){var switch__28692__auto__ = ((function (c__28713__auto__,nc,events){
return (function (state_58545){
var state_val_58546 = (state_58545[(1)]);
if((state_val_58546 === (1))){
var state_58545__$1 = state_58545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58545__$1,(2),events);
} else {
if((state_val_58546 === (2))){
var inst_58528 = (state_58545[(2)]);
var inst_58529 = inst_58528;
var state_58545__$1 = (function (){var statearr_58547 = state_58545;
(statearr_58547[(7)] = inst_58529);

return statearr_58547;
})();
var statearr_58548_58564 = state_58545__$1;
(statearr_58548_58564[(2)] = null);

(statearr_58548_58564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58546 === (3))){
var inst_58529 = (state_58545[(7)]);
var inst_58531 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_58529);
var inst_58532 = cljs.core._EQ_.call(null,inst_58531,new cljs.core.Keyword(null,"end","end",-268185958));
var state_58545__$1 = state_58545;
if(inst_58532){
var statearr_58549_58565 = state_58545__$1;
(statearr_58549_58565[(1)] = (5));

} else {
var statearr_58550_58566 = state_58545__$1;
(statearr_58550_58566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58546 === (4))){
var inst_58543 = (state_58545[(2)]);
var state_58545__$1 = state_58545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58545__$1,inst_58543);
} else {
if((state_val_58546 === (5))){
var state_58545__$1 = state_58545;
var statearr_58551_58567 = state_58545__$1;
(statearr_58551_58567[(2)] = null);

(statearr_58551_58567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58546 === (6))){
var inst_58529 = (state_58545[(7)]);
var inst_58535 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_58529);
var state_58545__$1 = (function (){var statearr_58552 = state_58545;
(statearr_58552[(8)] = inst_58535);

return statearr_58552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58545__$1,(8),events);
} else {
if((state_val_58546 === (7))){
var inst_58540 = (state_58545[(2)]);
var inst_58541 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_58545__$1 = (function (){var statearr_58553 = state_58545;
(statearr_58553[(9)] = inst_58540);

return statearr_58553;
})();
var statearr_58554_58568 = state_58545__$1;
(statearr_58554_58568[(2)] = inst_58541);

(statearr_58554_58568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58546 === (8))){
var inst_58537 = (state_58545[(2)]);
var inst_58529 = inst_58537;
var state_58545__$1 = (function (){var statearr_58555 = state_58545;
(statearr_58555[(7)] = inst_58529);

return statearr_58555;
})();
var statearr_58556_58569 = state_58545__$1;
(statearr_58556_58569[(2)] = null);

(statearr_58556_58569[(1)] = (3));


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
});})(c__28713__auto__,nc,events))
;
return ((function (switch__28692__auto__,c__28713__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____0 = (function (){
var statearr_58560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58560[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__);

(statearr_58560[(1)] = (1));

return statearr_58560;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____1 = (function (state_58545){
while(true){
var ret_value__28694__auto__ = (function (){try{while(true){
var result__28695__auto__ = switch__28692__auto__.call(null,state_58545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28695__auto__;
}
break;
}
}catch (e58561){if((e58561 instanceof Object)){
var ex__28696__auto__ = e58561;
var statearr_58562_58570 = state_58545;
(statearr_58562_58570[(5)] = ex__28696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58571 = state_58545;
state_58545 = G__58571;
continue;
} else {
return ret_value__28694__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__ = function(state_58545){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____1.call(this,state_58545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__28693__auto__;
})()
;})(switch__28692__auto__,c__28713__auto__,nc,events))
})();
var state__28715__auto__ = (function (){var statearr_58563 = f__28714__auto__.call(null);
(statearr_58563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28713__auto__);

return statearr_58563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28715__auto__);
});})(c__28713__auto__,nc,events))
);

return c__28713__auto__;
});
biomarket.utilities.unsub_broadcast_loop = (function biomarket$utilities$unsub_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
return cljs.core.async.unsub.call(null,nc,topic,chan);
});
biomarket.utilities.split_projects = (function biomarket$utilities$split_projects(projects){
var pn = cljs.core.count.call(null,projects);
var n = ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,pn,(2))))?cljs.core.quot.call(null,pn,(2)):((1) + cljs.core.quot.call(null,pn,(2))));
return cljs.core.partition_all.call(null,n,projects);
});
biomarket.utilities.color_span = (function biomarket$utilities$color_span(text,color){
return React.DOM.span({"style": {"color": color, "font-weight": "bold"}},text);
});
biomarket.utilities.more_less_text = (function biomarket$utilities$more_less_text(text,owner){
if(typeof biomarket.utilities.t_biomarket$utilities58581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58581 = (function (more_less_text,text,owner,meta58582){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta58582 = meta58582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58583,meta58582__$1){
var self__ = this;
var _58583__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58581(self__.more_less_text,self__.text,self__.owner,meta58582__$1));
});

biomarket.utilities.t_biomarket$utilities58581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58583){
var self__ = this;
var _58583__$1 = this;
return self__.meta58582;
});

biomarket.utilities.t_biomarket$utilities58581.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities58581.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities58581.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities58581.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__58584){
var self__ = this;
var map__58585 = p__58584;
var map__58585__$1 = ((((!((map__58585 == null)))?((((map__58585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58585):map__58585);
var showing = cljs.core.get.call(null,map__58585__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__58587 = cljs.core._EQ_;
var expr__58588 = showing;
if(cljs.core.truth_(pred__58587.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__58588))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__58587,expr__58588,___$1,map__58585,map__58585__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__58587,expr__58588,___$1,map__58585,map__58585__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__58587.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__58588))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__58587,expr__58588,___$1,map__58585,map__58585__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__58587,expr__58588,___$1,map__58585,map__58585__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__58588)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities58581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58582","meta58582",343669728,null)], null);
});

biomarket.utilities.t_biomarket$utilities58581.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58581.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58581";

biomarket.utilities.t_biomarket$utilities58581.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58581");
});

biomarket.utilities.__GT_t_biomarket$utilities58581 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities58581(more_less_text__$1,text__$1,owner__$1,meta58582){
return (new biomarket.utilities.t_biomarket$utilities58581(more_less_text__$1,text__$1,owner__$1,meta58582));
});

}

return (new biomarket.utilities.t_biomarket$utilities58581(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities58594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58594 = (function (control_buttons,inputs,owner,meta58595){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta58595 = meta58595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58596,meta58595__$1){
var self__ = this;
var _58596__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58594(self__.control_buttons,self__.inputs,self__.owner,meta58595__$1));
});

biomarket.utilities.t_biomarket$utilities58594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58596){
var self__ = this;
var _58596__$1 = this;
return self__.meta58595;
});

biomarket.utilities.t_biomarket$utilities58594.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58594.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__28872__auto____$1){
return (function (p1__58590_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__58590_SHARP_)},cljs.core.first.call(null,p1__58590_SHARP_));
});})(this__28872__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities58594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58595","meta58595",644366814,null)], null);
});

biomarket.utilities.t_biomarket$utilities58594.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58594.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58594";

biomarket.utilities.t_biomarket$utilities58594.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58594");
});

biomarket.utilities.__GT_t_biomarket$utilities58594 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities58594(control_buttons__$1,inputs__$1,owner__$1,meta58595){
return (new biomarket.utilities.t_biomarket$utilities58594(control_buttons__$1,inputs__$1,owner__$1,meta58595));
});

}

return (new biomarket.utilities.t_biomarket$utilities58594(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__58597,owner){
var vec__58602 = p__58597;
var text = cljs.core.nth.call(null,vec__58602,(0),null);
var topic = cljs.core.nth.call(null,vec__58602,(1),null);
var tag = cljs.core.nth.call(null,vec__58602,(2),null);
var current = cljs.core.nth.call(null,vec__58602,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities58603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58603 = (function (menu_item,p__58597,owner,vec__58602,text,topic,tag,current,meta58604){
this.menu_item = menu_item;
this.p__58597 = p__58597;
this.owner = owner;
this.vec__58602 = vec__58602;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta58604 = meta58604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58602,text,topic,tag,current){
return (function (_58605,meta58604__$1){
var self__ = this;
var _58605__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58603(self__.menu_item,self__.p__58597,self__.owner,self__.vec__58602,self__.text,self__.topic,self__.tag,self__.current,meta58604__$1));
});})(vec__58602,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities58603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58602,text,topic,tag,current){
return (function (_58605){
var self__ = this;
var _58605__$1 = this;
return self__.meta58604;
});})(vec__58602,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities58603.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58603.prototype.om$core$IRender$render$arity$1 = ((function (vec__58602,text,topic,tag,current){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__28872__auto____$1,vec__58602,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__28872__auto____$1,vec__58602,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__58602,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities58603.getBasis = ((function (vec__58602,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58597","p__58597",1280865999,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58602","vec__58602",703007999,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta58604","meta58604",-947266889,null)], null);
});})(vec__58602,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities58603.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58603.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58603";

biomarket.utilities.t_biomarket$utilities58603.cljs$lang$ctorPrWriter = ((function (vec__58602,text,topic,tag,current){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58603");
});})(vec__58602,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities58603 = ((function (vec__58602,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities58603(menu_item__$1,p__58597__$1,owner__$1,vec__58602__$1,text__$1,topic__$1,tag__$1,current__$1,meta58604){
return (new biomarket.utilities.t_biomarket$utilities58603(menu_item__$1,p__58597__$1,owner__$1,vec__58602__$1,text__$1,topic__$1,tag__$1,current__$1,meta58604));
});})(vec__58602,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities58603(biomarket$utilities$menu_item,p__58597,owner,vec__58602,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__58607,owner){
var vec__58612 = p__58607;
var current = cljs.core.nth.call(null,vec__58612,(0),null);
var inputs = cljs.core.nth.call(null,vec__58612,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__58612,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities58613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58613 = (function (top_navigation,p__58607,owner,vec__58612,current,inputs,nav_tag,meta58614){
this.top_navigation = top_navigation;
this.p__58607 = p__58607;
this.owner = owner;
this.vec__58612 = vec__58612;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta58614 = meta58614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58612,current,inputs,nav_tag){
return (function (_58615,meta58614__$1){
var self__ = this;
var _58615__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58613(self__.top_navigation,self__.p__58607,self__.owner,self__.vec__58612,self__.current,self__.inputs,self__.nav_tag,meta58614__$1));
});})(vec__58612,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities58613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58612,current,inputs,nav_tag){
return (function (_58615){
var self__ = this;
var _58615__$1 = this;
return self__.meta58614;
});})(vec__58612,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities58613.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58613.prototype.om$core$IRender$render$arity$1 = ((function (vec__58612,current,inputs,nav_tag){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__28872__auto____$1,vec__58612,current,inputs,nav_tag){
return (function (p1__58606_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__58606_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__28872__auto____$1,vec__58612,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__58612,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities58613.getBasis = ((function (vec__58612,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58607","p__58607",-1727797010,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58612","vec__58612",-66262723,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta58614","meta58614",1983024559,null)], null);
});})(vec__58612,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities58613.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58613.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58613";

biomarket.utilities.t_biomarket$utilities58613.cljs$lang$ctorPrWriter = ((function (vec__58612,current,inputs,nav_tag){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58613");
});})(vec__58612,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities58613 = ((function (vec__58612,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities58613(top_navigation__$1,p__58607__$1,owner__$1,vec__58612__$1,current__$1,inputs__$1,nav_tag__$1,meta58614){
return (new biomarket.utilities.t_biomarket$utilities58613(top_navigation__$1,p__58607__$1,owner__$1,vec__58612__$1,current__$1,inputs__$1,nav_tag__$1,meta58614));
});})(vec__58612,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities58613(biomarket$utilities$top_navigation,p__58607,owner,vec__58612,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__58616,owner){
var vec__58621 = p__58616;
var padding = cljs.core.nth.call(null,vec__58621,(0),null);
var value = cljs.core.nth.call(null,vec__58621,(1),null);
var func = cljs.core.nth.call(null,vec__58621,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities58622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58622 = (function (padded_button,p__58616,owner,vec__58621,padding,value,func,meta58623){
this.padded_button = padded_button;
this.p__58616 = p__58616;
this.owner = owner;
this.vec__58621 = vec__58621;
this.padding = padding;
this.value = value;
this.func = func;
this.meta58623 = meta58623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58621,padding,value,func){
return (function (_58624,meta58623__$1){
var self__ = this;
var _58624__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58622(self__.padded_button,self__.p__58616,self__.owner,self__.vec__58621,self__.padding,self__.value,self__.func,meta58623__$1));
});})(vec__58621,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities58622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58621,padding,value,func){
return (function (_58624){
var self__ = this;
var _58624__$1 = this;
return self__.meta58623;
});})(vec__58621,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities58622.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58622.prototype.om$core$IRender$render$arity$1 = ((function (vec__58621,padding,value,func){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__58621,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities58622.getBasis = ((function (vec__58621,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58616","p__58616",1261349460,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58621","vec__58621",-1327133875,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta58623","meta58623",-907017518,null)], null);
});})(vec__58621,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities58622.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58622.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58622";

biomarket.utilities.t_biomarket$utilities58622.cljs$lang$ctorPrWriter = ((function (vec__58621,padding,value,func){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58622");
});})(vec__58621,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities58622 = ((function (vec__58621,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities58622(padded_button__$1,p__58616__$1,owner__$1,vec__58621__$1,padding__$1,value__$1,func__$1,meta58623){
return (new biomarket.utilities.t_biomarket$utilities58622(padded_button__$1,p__58616__$1,owner__$1,vec__58621__$1,padding__$1,value__$1,func__$1,meta58623));
});})(vec__58621,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities58622(biomarket$utilities$padded_button,p__58616,owner,vec__58621,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__58625,owner){
var vec__58630 = p__58625;
var padding = cljs.core.nth.call(null,vec__58630,(0),null);
var value = cljs.core.nth.call(null,vec__58630,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities58631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58631 = (function (padded_button_disabled,p__58625,owner,vec__58630,padding,value,meta58632){
this.padded_button_disabled = padded_button_disabled;
this.p__58625 = p__58625;
this.owner = owner;
this.vec__58630 = vec__58630;
this.padding = padding;
this.value = value;
this.meta58632 = meta58632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58630,padding,value){
return (function (_58633,meta58632__$1){
var self__ = this;
var _58633__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58631(self__.padded_button_disabled,self__.p__58625,self__.owner,self__.vec__58630,self__.padding,self__.value,meta58632__$1));
});})(vec__58630,padding,value))
;

biomarket.utilities.t_biomarket$utilities58631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58630,padding,value){
return (function (_58633){
var self__ = this;
var _58633__$1 = this;
return self__.meta58632;
});})(vec__58630,padding,value))
;

biomarket.utilities.t_biomarket$utilities58631.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58631.prototype.om$core$IRender$render$arity$1 = ((function (vec__58630,padding,value){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__58630,padding,value))
;

biomarket.utilities.t_biomarket$utilities58631.getBasis = ((function (vec__58630,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58625","p__58625",-673269756,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58630","vec__58630",-946335528,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta58632","meta58632",-193937960,null)], null);
});})(vec__58630,padding,value))
;

biomarket.utilities.t_biomarket$utilities58631.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58631.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58631";

biomarket.utilities.t_biomarket$utilities58631.cljs$lang$ctorPrWriter = ((function (vec__58630,padding,value){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58631");
});})(vec__58630,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities58631 = ((function (vec__58630,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities58631(padded_button_disabled__$1,p__58625__$1,owner__$1,vec__58630__$1,padding__$1,value__$1,meta58632){
return (new biomarket.utilities.t_biomarket$utilities58631(padded_button_disabled__$1,p__58625__$1,owner__$1,vec__58630__$1,padding__$1,value__$1,meta58632));
});})(vec__58630,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities58631(biomarket$utilities$padded_button_disabled,p__58625,owner,vec__58630,padding,value,null));
});
biomarket.utilities.fade_in = (function biomarket$utilities$fade_in(var_args){
var args58634 = [];
var len__26968__auto___58637 = arguments.length;
var i__26969__auto___58638 = (0);
while(true){
if((i__26969__auto___58638 < len__26968__auto___58637)){
args58634.push((arguments[i__26969__auto___58638]));

var G__58639 = (i__26969__auto___58638 + (1));
i__26969__auto___58638 = G__58639;
continue;
} else {
}
break;
}

var G__58636 = args58634.length;
switch (G__58636) {
case 0:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58634.length)].join('')));

}
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return biomarket.utilities.fade_in.call(null,cljs.core.PersistentArrayMap.EMPTY,(2));
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (os){
return biomarket.utilities.fade_in.call(null,os,(2));
});

biomarket.utilities.fade_in.cljs$core$IFn$_invoke$arity$2 = (function (os,time){
var t = [cljs.core.str("fadein "),cljs.core.str(time),cljs.core.str("s")].join('');
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,os,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"-webkit-animation","-webkit-animation",561031553),t,new cljs.core.Keyword(null,"-moz-animation","-moz-animation",922344036),t,new cljs.core.Keyword(null,"-ms-animation","-ms-animation",-1168924282),t,new cljs.core.Keyword(null,"-o-animation","-o-animation",194639525),t,new cljs.core.Keyword(null,"animation","animation",-1248293244),t], null)));
});

biomarket.utilities.fade_in.cljs$lang$maxFixedArity = 2;
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities58644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58644 = (function (waiting,_,owner,meta58645){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta58645 = meta58645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58646,meta58645__$1){
var self__ = this;
var _58646__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58644(self__.waiting,self__._,self__.owner,meta58645__$1));
});

biomarket.utilities.t_biomarket$utilities58644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58646){
var self__ = this;
var _58646__$1 = this;
return self__.meta58645;
});

biomarket.utilities.t_biomarket$utilities58644.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58644.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities58644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58645","meta58645",206878536,null)], null);
});

biomarket.utilities.t_biomarket$utilities58644.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58644.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58644";

biomarket.utilities.t_biomarket$utilities58644.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58644");
});

biomarket.utilities.__GT_t_biomarket$utilities58644 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities58644(waiting__$1,___$1,owner__$1,meta58645){
return (new biomarket.utilities.t_biomarket$utilities58644(waiting__$1,___$1,owner__$1,meta58645));
});

}

return (new biomarket.utilities.t_biomarket$utilities58644(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__58649,owner){
var map__58655 = p__58649;
var map__58655__$1 = ((((!((map__58655 == null)))?((((map__58655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58655):map__58655);
var data = cljs.core.get.call(null,map__58655__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__58655__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities58657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58657 = (function (make_a_table,p__58649,owner,map__58655,data,tparam,meta58658){
this.make_a_table = make_a_table;
this.p__58649 = p__58649;
this.owner = owner;
this.map__58655 = map__58655;
this.data = data;
this.tparam = tparam;
this.meta58658 = meta58658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58655,map__58655__$1,data,tparam){
return (function (_58659,meta58658__$1){
var self__ = this;
var _58659__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58657(self__.make_a_table,self__.p__58649,self__.owner,self__.map__58655,self__.data,self__.tparam,meta58658__$1));
});})(map__58655,map__58655__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities58657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58655,map__58655__$1,data,tparam){
return (function (_58659){
var self__ = this;
var _58659__$1 = this;
return self__.meta58658;
});})(map__58655,map__58655__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities58657.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58657.prototype.om$core$IRender$render$arity$1 = ((function (map__58655,map__58655__$1,data,tparam){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.div({"className": "table-responsive"},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam){
return (function (p1__58647_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__58647_SHARP_);
});})(tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam){
return (function (p1__58648_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__58648_SHARP_);
});})(tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__28872__auto____$1,map__58655,map__58655__$1,data,tparam))
,self__.data)))));
});})(map__58655,map__58655__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities58657.getBasis = ((function (map__58655,map__58655__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58649","p__58649",-95084434,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__58655","map__58655",-1192260348,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta58658","meta58658",-942661382,null)], null);
});})(map__58655,map__58655__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities58657.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58657.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58657";

biomarket.utilities.t_biomarket$utilities58657.cljs$lang$ctorPrWriter = ((function (map__58655,map__58655__$1,data,tparam){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58657");
});})(map__58655,map__58655__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities58657 = ((function (map__58655,map__58655__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities58657(make_a_table__$1,p__58649__$1,owner__$1,map__58655__$2,data__$1,tparam__$1,meta58658){
return (new biomarket.utilities.t_biomarket$utilities58657(make_a_table__$1,p__58649__$1,owner__$1,map__58655__$2,data__$1,tparam__$1,meta58658));
});})(map__58655,map__58655__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities58657(biomarket$utilities$make_a_table,p__58649,owner,map__58655__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function() { 
var G__58663__delegate = function (owner,p__58660,args){
var map__58661 = p__58660;
var map__58661__$1 = ((((!((map__58661 == null)))?((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58661):map__58661);
var fname = cljs.core.get.call(null,map__58661__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__58661__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__58663 = function (owner,p__58660,var_args){
var args = null;
if (arguments.length > 2) {
var G__58664__i = 0, G__58664__a = new Array(arguments.length -  2);
while (G__58664__i < G__58664__a.length) {G__58664__a[G__58664__i] = arguments[G__58664__i + 2]; ++G__58664__i;}
  args = new cljs.core.IndexedSeq(G__58664__a,0);
} 
return G__58663__delegate.call(this,owner,p__58660,args);};
G__58663.cljs$lang$maxFixedArity = 2;
G__58663.cljs$lang$applyTo = (function (arglist__58665){
var owner = cljs.core.first(arglist__58665);
arglist__58665 = cljs.core.next(arglist__58665);
var p__58660 = cljs.core.first(arglist__58665);
var args = cljs.core.rest(arglist__58665);
return G__58663__delegate(owner,p__58660,args);
});
G__58663.cljs$core$IFn$_invoke$arity$variadic = G__58663__delegate;
return G__58663;
})()
;})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__58674 = null;
var G__58674__2 = (function (owner,p__58666){
var map__58668 = p__58666;
var map__58668__$1 = ((((!((map__58668 == null)))?((((map__58668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58668):map__58668);
var m = map__58668__$1;
var fname = cljs.core.get.call(null,map__58668__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__58668__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__58674__3 = (function (owner,p__58667,param_name){
var map__58670 = p__58667;
var map__58670__$1 = ((((!((map__58670 == null)))?((((map__58670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58670):map__58670);
var fname = cljs.core.get.call(null,map__58670__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__58670__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__58670,map__58670__$1,fname,element){
return (function (p__58672){
var vec__58673 = p__58672;
var k = cljs.core.nth.call(null,vec__58673,(0),null);
var v = cljs.core.nth.call(null,vec__58673,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__58670,map__58670__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__58674 = function(owner,p__58667,param_name){
switch(arguments.length){
case 2:
return G__58674__2.call(this,owner,p__58667);
case 3:
return G__58674__3.call(this,owner,p__58667,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58674.cljs$core$IFn$_invoke$arity$2 = G__58674__2;
G__58674.cljs$core$IFn$_invoke$arity$3 = G__58674__3;
return G__58674;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26823__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26824__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26825__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26826__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26827__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__,hierarchy__26827__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26827__auto__,method_table__26823__auto__,prefer_table__26824__auto__,method_cache__26825__auto__,cached_hierarchy__26826__auto__));
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
var x__26732__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26732__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26732__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto____$2);
})(),x__26732__auto____$1);
})(),x__26732__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26732__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})(),(function (){var x__26732__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26732__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})(),(function (){var x__26732__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26732__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})(),(function (){var x__26732__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26732__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities58678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58678 = (function (the_input,js,owner,meta58679){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta58679 = meta58679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58680,meta58679__$1){
var self__ = this;
var _58680__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58678(self__.the_input,self__.js,self__.owner,meta58679__$1));
});

biomarket.utilities.t_biomarket$utilities58678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58680){
var self__ = this;
var _58680__$1 = this;
return self__.meta58679;
});

biomarket.utilities.t_biomarket$utilities58678.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58678.prototype.om$core$IRender$render$arity$1 = (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities58678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58679","meta58679",-2006809186,null)], null);
});

biomarket.utilities.t_biomarket$utilities58678.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58678.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58678";

biomarket.utilities.t_biomarket$utilities58678.cljs$lang$ctorPrWriter = (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58678");
});

biomarket.utilities.__GT_t_biomarket$utilities58678 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities58678(the_input__$1,js__$1,owner__$1,meta58679){
return (new biomarket.utilities.t_biomarket$utilities58678(the_input__$1,js__$1,owner__$1,meta58679));
});

}

return (new biomarket.utilities.t_biomarket$utilities58678(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__58683,owner){
var vec__58691 = p__58683;
var fname = cljs.core.nth.call(null,vec__58691,(0),null);
var element = cljs.core.nth.call(null,vec__58691,(1),null);
var tag = cljs.core.nth.call(null,vec__58691,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities58692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58692 = (function (input,p__58683,owner,vec__58691,fname,element,tag,meta58693){
this.input = input;
this.p__58683 = p__58683;
this.owner = owner;
this.vec__58691 = vec__58691;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta58693 = meta58693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58691,fname,element,tag){
return (function (_58694,meta58693__$1){
var self__ = this;
var _58694__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58692(self__.input,self__.p__58683,self__.owner,self__.vec__58691,self__.fname,self__.element,self__.tag,meta58693__$1));
});})(vec__58691,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities58692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58691,fname,element,tag){
return (function (_58694){
var self__ = this;
var _58694__$1 = this;
return self__.meta58693;
});})(vec__58691,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities58692.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities58692.prototype.om$core$IRender$render$arity$1 = ((function (vec__58691,fname,element,tag){
return (function (this__28872__auto__){
var self__ = this;
var this__28872__auto____$1 = this;
var oc = ((function (this__28872__auto____$1,vec__58691,fname,element,tag){
return (function (p1__58681_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__58681_SHARP_);
});})(this__28872__auto____$1,vec__58691,fname,element,tag))
;
var classes = (function (){var pred__58695 = cljs.core._EQ_;
var expr__58696 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__58695.call(null,false,expr__58696))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__58695.call(null,null,expr__58696))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__58695,expr__58696,oc,this__28872__auto____$1,vec__58691,fname,element,tag){
return (function (p1__58682_SHARP_){
return React.DOM.div(null,p1__58682_SHARP_);
});})(pred__58695,expr__58696,oc,this__28872__auto____$1,vec__58691,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__58691,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities58692.getBasis = ((function (vec__58691,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58683","p__58683",-506092315,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58691","vec__58691",-827736756,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta58693","meta58693",-1558862240,null)], null);
});})(vec__58691,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities58692.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58692.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58692";

biomarket.utilities.t_biomarket$utilities58692.cljs$lang$ctorPrWriter = ((function (vec__58691,fname,element,tag){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58692");
});})(vec__58691,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities58692 = ((function (vec__58691,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities58692(input__$1,p__58683__$1,owner__$1,vec__58691__$1,fname__$1,element__$1,tag__$1,meta58693){
return (new biomarket.utilities.t_biomarket$utilities58692(input__$1,p__58683__$1,owner__$1,vec__58691__$1,fname__$1,element__$1,tag__$1,meta58693));
});})(vec__58691,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities58692(biomarket$utilities$input,p__58683,owner,vec__58691,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__58699,owner){
var vec__58707 = p__58699;
var name = cljs.core.nth.call(null,vec__58707,(0),null);
var element = cljs.core.nth.call(null,vec__58707,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities58708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities58708 = (function (in_line_radio,p__58699,owner,vec__58707,name,element,meta58709){
this.in_line_radio = in_line_radio;
this.p__58699 = p__58699;
this.owner = owner;
this.vec__58707 = vec__58707;
this.name = name;
this.element = element;
this.meta58709 = meta58709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities58708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__58707,name,element){
return (function (_58710,meta58709__$1){
var self__ = this;
var _58710__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities58708(self__.in_line_radio,self__.p__58699,self__.owner,self__.vec__58707,self__.name,self__.element,meta58709__$1));
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__58707,name,element){
return (function (_58710){
var self__ = this;
var _58710__$1 = this;
return self__.meta58709;
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__58707,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__58707,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities58708.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__58707,name,element){
return (function (_,p__58711){
var self__ = this;
var map__58712 = p__58711;
var map__58712__$1 = ((((!((map__58712 == null)))?((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58712):map__58712);
var element__$1 = cljs.core.get.call(null,map__58712__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__58712,map__58712__$1,element__$1,vec__58707,name,element){
return (function (p1__58698_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__58698_SHARP_), "onChange": ((function (___$1,map__58712,map__58712__$1,element__$1,vec__58707,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__58712,map__58712__$1,element__$1,vec__58707,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__58698_SHARP_)));
});})(___$1,map__58712,map__58712__$1,element__$1,vec__58707,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.getBasis = ((function (vec__58707,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__58699","p__58699",2094654828,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__58707","vec__58707",1951641428,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta58709","meta58709",469707558,null)], null);
});})(vec__58707,name,element))
;

biomarket.utilities.t_biomarket$utilities58708.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities58708.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities58708";

biomarket.utilities.t_biomarket$utilities58708.cljs$lang$ctorPrWriter = ((function (vec__58707,name,element){
return (function (this__26504__auto__,writer__26505__auto__,opt__26506__auto__){
return cljs.core._write.call(null,writer__26505__auto__,"biomarket.utilities/t_biomarket$utilities58708");
});})(vec__58707,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities58708 = ((function (vec__58707,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities58708(in_line_radio__$1,p__58699__$1,owner__$1,vec__58707__$1,name__$1,element__$1,meta58709){
return (new biomarket.utilities.t_biomarket$utilities58708(in_line_radio__$1,p__58699__$1,owner__$1,vec__58707__$1,name__$1,element__$1,meta58709));
});})(vec__58707,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities58708(biomarket$utilities$in_line_radio,p__58699,owner,vec__58707,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map