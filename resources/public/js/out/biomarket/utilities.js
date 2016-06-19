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
var args__26917__auto__ = [];
var len__26910__auto___157162 = arguments.length;
var i__26911__auto___157163 = (0);
while(true){
if((i__26911__auto___157163 < len__26910__auto___157162)){
args__26917__auto__.push((arguments[i__26911__auto___157163]));

var G__157164 = (i__26911__auto___157163 + (1));
i__26911__auto___157163 = G__157164;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return console.log(cljs.core.apply.call(null,cljs.core.str,s));
});

biomarket.utilities.log.cljs$lang$maxFixedArity = (0);

biomarket.utilities.log.cljs$lang$applyTo = (function (seq157161){
return biomarket.utilities.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157161));
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
biomarket.utilities.error_handler = (function biomarket$utilities$error_handler(p__157165){
var map__157168 = p__157165;
var map__157168__$1 = ((((!((map__157168 == null)))?((((map__157168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157168):map__157168);
var status = cljs.core.get.call(null,map__157168__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__157168__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return biomarket.utilities.log.call(null,[cljs.core.str("Something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
biomarket.utilities.post_params = (function biomarket$utilities$post_params(url,params,handler){
return ajax.core.POST.call(null,url,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),biomarket.utilities.error_handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
if(typeof biomarket.utilities.loop_manager !== 'undefined'){
} else {
biomarket.utilities.loop_manager = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","loop-manager"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function() { 
var G__157170__delegate = function (o,d,args){
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d));
};
var G__157170 = function (o,d,var_args){
var args = null;
if (arguments.length > 2) {
var G__157171__i = 0, G__157171__a = new Array(arguments.length -  2);
while (G__157171__i < G__157171__a.length) {G__157171__a[G__157171__i] = arguments[G__157171__i + 2]; ++G__157171__i;}
  args = new cljs.core.IndexedSeq(G__157171__a,0);
} 
return G__157170__delegate.call(this,o,d,args);};
G__157170.cljs$lang$maxFixedArity = 2;
G__157170.cljs$lang$applyTo = (function (arglist__157172){
var o = cljs.core.first(arglist__157172);
arglist__157172 = cljs.core.next(arglist__157172);
var d = cljs.core.first(arglist__157172);
var args = cljs.core.rest(arglist__157172);
return G__157170__delegate(o,d,args);
});
G__157170.cljs$core$IFn$_invoke$arity$variadic = G__157170__delegate;
return G__157170;
})()
;})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
if(typeof biomarket.utilities.broadcast_loop_manager !== 'undefined'){
} else {
biomarket.utilities.broadcast_loop_manager = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","broadcast-loop-manager"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (o,d){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"input-update","input-update",902761778),(function() { 
var G__157176__delegate = function (owner,p__157173,_){
var map__157174 = p__157173;
var map__157174__$1 = ((((!((map__157174 == null)))?((((map__157174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157174):map__157174);
var data = cljs.core.get.call(null,map__157174__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return biomarket.utilities.get_input.call(null,owner,data);
};
var G__157176 = function (owner,p__157173,var_args){
var _ = null;
if (arguments.length > 2) {
var G__157177__i = 0, G__157177__a = new Array(arguments.length -  2);
while (G__157177__i < G__157177__a.length) {G__157177__a[G__157177__i] = arguments[G__157177__i + 2]; ++G__157177__i;}
  _ = new cljs.core.IndexedSeq(G__157177__a,0);
} 
return G__157176__delegate.call(this,owner,p__157173,_);};
G__157176.cljs$lang$maxFixedArity = 2;
G__157176.cljs$lang$applyTo = (function (arglist__157178){
var owner = cljs.core.first(arglist__157178);
arglist__157178 = cljs.core.next(arglist__157178);
var p__157173 = cljs.core.first(arglist__157178);
var _ = cljs.core.rest(arglist__157178);
return G__157176__delegate(owner,p__157173,_);
});
G__157176.cljs$core$IFn$_invoke$arity$variadic = G__157176__delegate;
return G__157176;
})()
);
cljs.core._add_method.call(null,biomarket.utilities.loop_manager,new cljs.core.Keyword(null,"submitted","submitted",-131658962),(function (owner,p__157179,func){
var map__157180 = p__157179;
var map__157180__$1 = ((((!((map__157180 == null)))?((((map__157180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157180):map__157180);
var data = cljs.core.get.call(null,map__157180__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return func.call(null);
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"project","project",1124394579),(function (owner,p__157182){
var map__157183 = p__157182;
var map__157183__$1 = ((((!((map__157183 == null)))?((((map__157183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157183):map__157183);
var data = cljs.core.get.call(null,map__157183__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view-type","view-type",-1848894559))));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"comment","comment",532206069),(function (owner,p__157185){
var map__157186 = p__157185;
var map__157186__$1 = ((((!((map__157186 == null)))?((((map__157186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157186):map__157186);
var data = cljs.core.get.call(null,map__157186__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.conj.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"comments","comments",-293346423)),data));
}));
cljs.core._add_method.call(null,biomarket.utilities.broadcast_loop_manager,new cljs.core.Keyword(null,"amend-project-status","amend-project-status",-1452060792),(function (owner,p__157190){
var map__157191 = p__157190;
var map__157191__$1 = ((((!((map__157191 == null)))?((((map__157191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157191):map__157191);
var data = cljs.core.get.call(null,map__157191__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var status__GT_view = ((function (map__157191,map__157191__$1,data){
return (function (p1__157188_SHARP_){
return new cljs.core.PersistentArrayMap(null, 5, ["open",new cljs.core.Keyword(null,"open-projects","open-projects",2070746586),"expired",new cljs.core.Keyword(null,"expired-projects","expired-projects",-250517250),"completed",new cljs.core.Keyword(null,"completed-projects","completed-projects",-2087821354),"active",new cljs.core.Keyword(null,"active-projects","active-projects",-1563434750),"deleted",new cljs.core.Keyword(null,"deleted-projects","deleted-projects",93328533)], null).call(null,p1__157188_SHARP_);
});})(map__157191,map__157191__$1,data))
;
var cv = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"view","view",1247994814));
var projs = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983));
if(cljs.core._EQ_.call(null,cv,status__GT_view.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(data)))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.conj.call(null,projs,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"view-type","view-type",-1848894559),om.core.get_state.call(null,new cljs.core.Keyword(null,"view-type","view-type",-1848894559)))));
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"projects","projects",-364845983),cljs.core.remove.call(null,((function (status__GT_view,cv,projs,map__157191,map__157191__$1,data){
return (function (p1__157189_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__157189_SHARP_));
});})(status__GT_view,cv,projs,map__157191,map__157191__$1,data))
,projs));
}
}));
biomarket.utilities.pub_info = (function biomarket$utilities$pub_info(owner,topic,data){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
biomarket.utilities.register_loop = (function biomarket$utilities$register_loop(var_args){
var args157193 = [];
var len__26910__auto___157233 = arguments.length;
var i__26911__auto___157234 = (0);
while(true){
if((i__26911__auto___157234 < len__26910__auto___157233)){
args157193.push((arguments[i__26911__auto___157234]));

var G__157235 = (i__26911__auto___157234 + (1));
i__26911__auto___157234 = G__157235;
continue;
} else {
}
break;
}

var G__157195 = args157193.length;
switch (G__157195) {
case 2:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157193.length)].join('')));

}
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$2 = (function (owner,topic){
return biomarket.utilities.register_loop.call(null,owner,topic,biomarket.utilities.loop_manager);
});

biomarket.utilities.register_loop.cljs$core$IFn$_invoke$arity$3 = (function (owner,topic,func){
var c = cljs.core.async.chan.call(null);
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,c);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,c,nc,events){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,c,nc,events){
return (function (state_157214){
var state_val_157215 = (state_157214[(1)]);
if((state_val_157215 === (1))){
var state_157214__$1 = state_157214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157214__$1,(2),events);
} else {
if((state_val_157215 === (2))){
var inst_157197 = (state_157214[(2)]);
var inst_157198 = inst_157197;
var state_157214__$1 = (function (){var statearr_157216 = state_157214;
(statearr_157216[(7)] = inst_157198);

return statearr_157216;
})();
var statearr_157217_157237 = state_157214__$1;
(statearr_157217_157237[(2)] = null);

(statearr_157217_157237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157215 === (3))){
var inst_157198 = (state_157214[(7)]);
var inst_157200 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_157198);
var inst_157201 = cljs.core._EQ_.call(null,inst_157200,new cljs.core.Keyword(null,"end","end",-268185958));
var state_157214__$1 = state_157214;
if(inst_157201){
var statearr_157218_157238 = state_157214__$1;
(statearr_157218_157238[(1)] = (5));

} else {
var statearr_157219_157239 = state_157214__$1;
(statearr_157219_157239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157215 === (4))){
var inst_157212 = (state_157214[(2)]);
var state_157214__$1 = state_157214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157214__$1,inst_157212);
} else {
if((state_val_157215 === (5))){
var state_157214__$1 = state_157214;
var statearr_157220_157240 = state_157214__$1;
(statearr_157220_157240[(2)] = null);

(statearr_157220_157240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157215 === (6))){
var inst_157198 = (state_157214[(7)]);
var inst_157204 = func.call(null,owner,inst_157198);
var state_157214__$1 = (function (){var statearr_157221 = state_157214;
(statearr_157221[(8)] = inst_157204);

return statearr_157221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157214__$1,(8),events);
} else {
if((state_val_157215 === (7))){
var inst_157209 = (state_157214[(2)]);
var inst_157210 = cljs.core.async.unsub.call(null,nc,topic,c);
var state_157214__$1 = (function (){var statearr_157222 = state_157214;
(statearr_157222[(9)] = inst_157209);

return statearr_157222;
})();
var statearr_157223_157241 = state_157214__$1;
(statearr_157223_157241[(2)] = inst_157210);

(statearr_157223_157241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157215 === (8))){
var inst_157206 = (state_157214[(2)]);
var inst_157198 = inst_157206;
var state_157214__$1 = (function (){var statearr_157224 = state_157214;
(statearr_157224[(7)] = inst_157198);

return statearr_157224;
})();
var statearr_157225_157242 = state_157214__$1;
(statearr_157225_157242[(2)] = null);

(statearr_157225_157242[(1)] = (3));


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
});})(c__29971__auto__,c,nc,events))
;
return ((function (switch__29859__auto__,c__29971__auto__,c,nc,events){
return (function() {
var biomarket$utilities$state_machine__29860__auto__ = null;
var biomarket$utilities$state_machine__29860__auto____0 = (function (){
var statearr_157229 = [null,null,null,null,null,null,null,null,null,null];
(statearr_157229[(0)] = biomarket$utilities$state_machine__29860__auto__);

(statearr_157229[(1)] = (1));

return statearr_157229;
});
var biomarket$utilities$state_machine__29860__auto____1 = (function (state_157214){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_157214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e157230){if((e157230 instanceof Object)){
var ex__29863__auto__ = e157230;
var statearr_157231_157243 = state_157214;
(statearr_157231_157243[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157244 = state_157214;
state_157214 = G__157244;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
biomarket$utilities$state_machine__29860__auto__ = function(state_157214){
switch(arguments.length){
case 0:
return biomarket$utilities$state_machine__29860__auto____0.call(this);
case 1:
return biomarket$utilities$state_machine__29860__auto____1.call(this,state_157214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$state_machine__29860__auto____0;
biomarket$utilities$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$state_machine__29860__auto____1;
return biomarket$utilities$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,c,nc,events))
})();
var state__29973__auto__ = (function (){var statearr_157232 = f__29972__auto__.call(null);
(statearr_157232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_157232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,c,nc,events))
);

return c__29971__auto__;
});

biomarket.utilities.register_loop.cljs$lang$maxFixedArity = 3;
biomarket.utilities.unsubscribe = (function biomarket$utilities$unsubscribe(var_args){
var args__26917__auto__ = [];
var len__26910__auto___157251 = arguments.length;
var i__26911__auto___157252 = (0);
while(true){
if((i__26911__auto___157252 < len__26910__auto___157251)){
args__26917__auto__.push((arguments[i__26911__auto___157252]));

var G__157253 = (i__26911__auto___157252 + (1));
i__26911__auto___157252 = G__157253;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((1) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((1)),(0),null)):null);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26918__auto__);
});

biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic = (function (owner,topics){
var pc = new cljs.core.Keyword(null,"pub-chan","pub-chan",-46915593).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var seq__157247 = cljs.core.seq.call(null,topics);
var chunk__157248 = null;
var count__157249 = (0);
var i__157250 = (0);
while(true){
if((i__157250 < count__157249)){
var t = cljs.core._nth.call(null,chunk__157248,i__157250);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__157254 = seq__157247;
var G__157255 = chunk__157248;
var G__157256 = count__157249;
var G__157257 = (i__157250 + (1));
seq__157247 = G__157254;
chunk__157248 = G__157255;
count__157249 = G__157256;
i__157250 = G__157257;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__157247);
if(temp__4425__auto__){
var seq__157247__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__157247__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__157247__$1);
var G__157258 = cljs.core.chunk_rest.call(null,seq__157247__$1);
var G__157259 = c__26651__auto__;
var G__157260 = cljs.core.count.call(null,c__26651__auto__);
var G__157261 = (0);
seq__157247 = G__157258;
chunk__157248 = G__157259;
count__157249 = G__157260;
i__157250 = G__157261;
continue;
} else {
var t = cljs.core.first.call(null,seq__157247__$1);
cljs.core.async.put_BANG_.call(null,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),t,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"end","end",-268185958)], null));

var G__157262 = cljs.core.next.call(null,seq__157247__$1);
var G__157263 = null;
var G__157264 = (0);
var G__157265 = (0);
seq__157247 = G__157262;
chunk__157248 = G__157263;
count__157249 = G__157264;
i__157250 = G__157265;
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

biomarket.utilities.unsubscribe.cljs$lang$applyTo = (function (seq157245){
var G__157246 = cljs.core.first.call(null,seq157245);
var seq157245__$1 = cljs.core.next.call(null,seq157245);
return biomarket.utilities.unsubscribe.cljs$core$IFn$_invoke$arity$variadic(G__157246,seq157245__$1);
});
biomarket.utilities.register_broadcast_loop = (function biomarket$utilities$register_broadcast_loop(owner,topic,chan){
var nc = new cljs.core.Keyword(null,"notif-chan","notif-chan",551651026).cljs$core$IFn$_invoke$arity$1(om.core.get_shared.call(null,owner));
var events = cljs.core.async.sub.call(null,nc,topic,chan);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,nc,events){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,nc,events){
return (function (state_157321){
var state_val_157322 = (state_157321[(1)]);
if((state_val_157322 === (1))){
var state_157321__$1 = state_157321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157321__$1,(2),events);
} else {
if((state_val_157322 === (2))){
var inst_157304 = (state_157321[(2)]);
var inst_157305 = inst_157304;
var state_157321__$1 = (function (){var statearr_157323 = state_157321;
(statearr_157323[(7)] = inst_157305);

return statearr_157323;
})();
var statearr_157324_157340 = state_157321__$1;
(statearr_157324_157340[(2)] = null);

(statearr_157324_157340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157322 === (3))){
var inst_157305 = (state_157321[(7)]);
var inst_157307 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_157305);
var inst_157308 = cljs.core._EQ_.call(null,inst_157307,new cljs.core.Keyword(null,"end","end",-268185958));
var state_157321__$1 = state_157321;
if(inst_157308){
var statearr_157325_157341 = state_157321__$1;
(statearr_157325_157341[(1)] = (5));

} else {
var statearr_157326_157342 = state_157321__$1;
(statearr_157326_157342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157322 === (4))){
var inst_157319 = (state_157321[(2)]);
var state_157321__$1 = state_157321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157321__$1,inst_157319);
} else {
if((state_val_157322 === (5))){
var state_157321__$1 = state_157321;
var statearr_157327_157343 = state_157321__$1;
(statearr_157327_157343[(2)] = null);

(statearr_157327_157343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157322 === (6))){
var inst_157305 = (state_157321[(7)]);
var inst_157311 = biomarket.utilities.broadcast_loop_manager.call(null,owner,inst_157305);
var state_157321__$1 = (function (){var statearr_157328 = state_157321;
(statearr_157328[(8)] = inst_157311);

return statearr_157328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157321__$1,(8),events);
} else {
if((state_val_157322 === (7))){
var inst_157316 = (state_157321[(2)]);
var inst_157317 = cljs.core.async.unsub.call(null,nc,topic,chan);
var state_157321__$1 = (function (){var statearr_157329 = state_157321;
(statearr_157329[(9)] = inst_157316);

return statearr_157329;
})();
var statearr_157330_157344 = state_157321__$1;
(statearr_157330_157344[(2)] = inst_157317);

(statearr_157330_157344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157322 === (8))){
var inst_157313 = (state_157321[(2)]);
var inst_157305 = inst_157313;
var state_157321__$1 = (function (){var statearr_157331 = state_157321;
(statearr_157331[(7)] = inst_157305);

return statearr_157331;
})();
var statearr_157332_157345 = state_157321__$1;
(statearr_157332_157345[(2)] = null);

(statearr_157332_157345[(1)] = (3));


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
});})(c__29971__auto__,nc,events))
;
return ((function (switch__29859__auto__,c__29971__auto__,nc,events){
return (function() {
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__ = null;
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0 = (function (){
var statearr_157336 = [null,null,null,null,null,null,null,null,null,null];
(statearr_157336[(0)] = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__);

(statearr_157336[(1)] = (1));

return statearr_157336;
});
var biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1 = (function (state_157321){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_157321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e157337){if((e157337 instanceof Object)){
var ex__29863__auto__ = e157337;
var statearr_157338_157346 = state_157321;
(statearr_157338_157346[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157347 = state_157321;
state_157321 = G__157347;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__ = function(state_157321){
switch(arguments.length){
case 0:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0.call(this);
case 1:
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1.call(this,state_157321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____0;
biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto____1;
return biomarket$utilities$register_broadcast_loop_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,nc,events))
})();
var state__29973__auto__ = (function (){var statearr_157339 = f__29972__auto__.call(null);
(statearr_157339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_157339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,nc,events))
);

return c__29971__auto__;
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
if(typeof biomarket.utilities.t_biomarket$utilities157357 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157357 = (function (more_less_text,text,owner,meta157358){
this.more_less_text = more_less_text;
this.text = text;
this.owner = owner;
this.meta157358 = meta157358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157359,meta157358__$1){
var self__ = this;
var _157359__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157357(self__.more_less_text,self__.text,self__.owner,meta157358__$1));
});

biomarket.utilities.t_biomarket$utilities157357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157359){
var self__ = this;
var _157359__$1 = this;
return self__.meta157358;
});

biomarket.utilities.t_biomarket$utilities157357.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities157357.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198)], null);
});

biomarket.utilities.t_biomarket$utilities157357.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities157357.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__157360){
var self__ = this;
var map__157361 = p__157360;
var map__157361__$1 = ((((!((map__157361 == null)))?((((map__157361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157361):map__157361);
var showing = cljs.core.get.call(null,map__157361__$1,new cljs.core.Keyword(null,"showing","showing",798009604));
var ___$1 = this;
return React.DOM.div(null,(((cljs.core.count.call(null,self__.text) < (400)))?React.DOM.div(null,self__.text):(function (){var pred__157363 = cljs.core._EQ_;
var expr__157364 = showing;
if(cljs.core.truth_(pred__157363.call(null,new cljs.core.Keyword(null,"less","less",-428869198),expr__157364))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(300),self__.text))),cljs.core.str(" ... ")].join('')),React.DOM.a({"onClick": ((function (pred__157363,expr__157364,___$1,map__157361,map__157361__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"more","more",-2058821800));
});})(pred__157363,expr__157364,___$1,map__157361,map__157361__$1,showing))
, "className": "flinka"}," More"));
} else {
if(cljs.core.truth_(pred__157363.call(null,new cljs.core.Keyword(null,"more","more",-2058821800),expr__157364))){
return React.DOM.div(null,React.DOM.span({"style": {"white-space": "pre-line"}},self__.text),React.DOM.a({"onClick": ((function (pred__157363,expr__157364,___$1,map__157361,map__157361__$1,showing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"showing","showing",798009604),new cljs.core.Keyword(null,"less","less",-428869198));
});})(pred__157363,expr__157364,___$1,map__157361,map__157361__$1,showing))
, "className": "flinka"}," Less"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__157364)].join('')));
}
}
})()));
});

biomarket.utilities.t_biomarket$utilities157357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"more-less-text","more-less-text",-1737643469,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157358","meta157358",28310722,null)], null);
});

biomarket.utilities.t_biomarket$utilities157357.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157357.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157357";

biomarket.utilities.t_biomarket$utilities157357.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157357");
});

biomarket.utilities.__GT_t_biomarket$utilities157357 = (function biomarket$utilities$more_less_text_$___GT_t_biomarket$utilities157357(more_less_text__$1,text__$1,owner__$1,meta157358){
return (new biomarket.utilities.t_biomarket$utilities157357(more_less_text__$1,text__$1,owner__$1,meta157358));
});

}

return (new biomarket.utilities.t_biomarket$utilities157357(biomarket$utilities$more_less_text,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
biomarket.utilities.control_buttons = (function biomarket$utilities$control_buttons(inputs,owner){
if(typeof biomarket.utilities.t_biomarket$utilities157370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157370 = (function (control_buttons,inputs,owner,meta157371){
this.control_buttons = control_buttons;
this.inputs = inputs;
this.owner = owner;
this.meta157371 = meta157371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157372,meta157371__$1){
var self__ = this;
var _157372__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157370(self__.control_buttons,self__.inputs,self__.owner,meta157371__$1));
});

biomarket.utilities.t_biomarket$utilities157370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157372){
var self__ = this;
var _157372__$1 = this;
return self__.meta157371;
});

biomarket.utilities.t_biomarket$utilities157370.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157370.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"className": "panel panel-default"},cljs.core.apply.call(null,om.dom.div,{"className": "panel-heading"},cljs.core.map.call(null,((function (this__36785__auto____$1){
return (function (p1__157366_SHARP_){
return React.DOM.a({"className": "btn btn-default", "onClick": cljs.core.second.call(null,p1__157366_SHARP_)},cljs.core.first.call(null,p1__157366_SHARP_));
});})(this__36785__auto____$1))
,self__.inputs)));
});

biomarket.utilities.t_biomarket$utilities157370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"control-buttons","control-buttons",285817705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157371","meta157371",1952343077,null)], null);
});

biomarket.utilities.t_biomarket$utilities157370.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157370.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157370";

biomarket.utilities.t_biomarket$utilities157370.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157370");
});

biomarket.utilities.__GT_t_biomarket$utilities157370 = (function biomarket$utilities$control_buttons_$___GT_t_biomarket$utilities157370(control_buttons__$1,inputs__$1,owner__$1,meta157371){
return (new biomarket.utilities.t_biomarket$utilities157370(control_buttons__$1,inputs__$1,owner__$1,meta157371));
});

}

return (new biomarket.utilities.t_biomarket$utilities157370(biomarket$utilities$control_buttons,inputs,owner,null));
});
biomarket.utilities.menu_item = (function biomarket$utilities$menu_item(p__157373,owner){
var vec__157378 = p__157373;
var text = cljs.core.nth.call(null,vec__157378,(0),null);
var topic = cljs.core.nth.call(null,vec__157378,(1),null);
var tag = cljs.core.nth.call(null,vec__157378,(2),null);
var current = cljs.core.nth.call(null,vec__157378,(3),null);
if(typeof biomarket.utilities.t_biomarket$utilities157379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157379 = (function (menu_item,p__157373,owner,vec__157378,text,topic,tag,current,meta157380){
this.menu_item = menu_item;
this.p__157373 = p__157373;
this.owner = owner;
this.vec__157378 = vec__157378;
this.text = text;
this.topic = topic;
this.tag = tag;
this.current = current;
this.meta157380 = meta157380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157378,text,topic,tag,current){
return (function (_157381,meta157380__$1){
var self__ = this;
var _157381__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157379(self__.menu_item,self__.p__157373,self__.owner,self__.vec__157378,self__.text,self__.topic,self__.tag,self__.current,meta157380__$1));
});})(vec__157378,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities157379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157378,text,topic,tag,current){
return (function (_157381){
var self__ = this;
var _157381__$1 = this;
return self__.meta157380;
});})(vec__157378,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities157379.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157379.prototype.om$core$IRender$render$arity$1 = ((function (vec__157378,text,topic,tag,current){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.li({"className": ((cljs.core._EQ_.call(null,self__.current,self__.topic))?"active":null), "role": "presentation"},React.DOM.a({"onClick": ((function (this__36785__auto____$1,vec__157378,text,topic,tag,current){
return (function (){
return biomarket.utilities.pub_info.call(null,self__.owner,self__.tag,self__.topic);
});})(this__36785__auto____$1,vec__157378,text,topic,tag,current))
, "style": {"cursor": "pointer"}},self__.text));
});})(vec__157378,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities157379.getBasis = ((function (vec__157378,text,topic,tag,current){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157373","p__157373",-1189477979,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157378","vec__157378",849240281,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"meta157380","meta157380",1913689493,null)], null);
});})(vec__157378,text,topic,tag,current))
;

biomarket.utilities.t_biomarket$utilities157379.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157379.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157379";

biomarket.utilities.t_biomarket$utilities157379.cljs$lang$ctorPrWriter = ((function (vec__157378,text,topic,tag,current){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157379");
});})(vec__157378,text,topic,tag,current))
;

biomarket.utilities.__GT_t_biomarket$utilities157379 = ((function (vec__157378,text,topic,tag,current){
return (function biomarket$utilities$menu_item_$___GT_t_biomarket$utilities157379(menu_item__$1,p__157373__$1,owner__$1,vec__157378__$1,text__$1,topic__$1,tag__$1,current__$1,meta157380){
return (new biomarket.utilities.t_biomarket$utilities157379(menu_item__$1,p__157373__$1,owner__$1,vec__157378__$1,text__$1,topic__$1,tag__$1,current__$1,meta157380));
});})(vec__157378,text,topic,tag,current))
;

}

return (new biomarket.utilities.t_biomarket$utilities157379(biomarket$utilities$menu_item,p__157373,owner,vec__157378,text,topic,tag,current,null));
});
biomarket.utilities.top_navigation = (function biomarket$utilities$top_navigation(p__157383,owner){
var vec__157388 = p__157383;
var current = cljs.core.nth.call(null,vec__157388,(0),null);
var inputs = cljs.core.nth.call(null,vec__157388,(1),null);
var nav_tag = cljs.core.nth.call(null,vec__157388,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities157389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157389 = (function (top_navigation,p__157383,owner,vec__157388,current,inputs,nav_tag,meta157390){
this.top_navigation = top_navigation;
this.p__157383 = p__157383;
this.owner = owner;
this.vec__157388 = vec__157388;
this.current = current;
this.inputs = inputs;
this.nav_tag = nav_tag;
this.meta157390 = meta157390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157388,current,inputs,nav_tag){
return (function (_157391,meta157390__$1){
var self__ = this;
var _157391__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157389(self__.top_navigation,self__.p__157383,self__.owner,self__.vec__157388,self__.current,self__.inputs,self__.nav_tag,meta157390__$1));
});})(vec__157388,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities157389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157388,current,inputs,nav_tag){
return (function (_157391){
var self__ = this;
var _157391__$1 = this;
return self__.meta157390;
});})(vec__157388,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities157389.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157389.prototype.om$core$IRender$render$arity$1 = ((function (vec__157388,current,inputs,nav_tag){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"role": "navigation"},cljs.core.apply.call(null,om.dom.ul,{"className": "nav nav-pills nav-justified"},cljs.core.map.call(null,((function (this__36785__auto____$1,vec__157388,current,inputs,nav_tag){
return (function (p1__157382_SHARP_){
return om.core.build.call(null,biomarket.utilities.menu_item,cljs.core.concat.call(null,p1__157382_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.nav_tag,self__.current], null)));
});})(this__36785__auto____$1,vec__157388,current,inputs,nav_tag))
,self__.inputs)));
});})(vec__157388,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities157389.getBasis = ((function (vec__157388,current,inputs,nav_tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-navigation","top-navigation",-1053916026,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157383","p__157383",-1843703358,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157388","vec__157388",1398300310,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),new cljs.core.Symbol(null,"nav-tag","nav-tag",-1502638942,null),new cljs.core.Symbol(null,"meta157390","meta157390",127943996,null)], null);
});})(vec__157388,current,inputs,nav_tag))
;

biomarket.utilities.t_biomarket$utilities157389.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157389.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157389";

biomarket.utilities.t_biomarket$utilities157389.cljs$lang$ctorPrWriter = ((function (vec__157388,current,inputs,nav_tag){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157389");
});})(vec__157388,current,inputs,nav_tag))
;

biomarket.utilities.__GT_t_biomarket$utilities157389 = ((function (vec__157388,current,inputs,nav_tag){
return (function biomarket$utilities$top_navigation_$___GT_t_biomarket$utilities157389(top_navigation__$1,p__157383__$1,owner__$1,vec__157388__$1,current__$1,inputs__$1,nav_tag__$1,meta157390){
return (new biomarket.utilities.t_biomarket$utilities157389(top_navigation__$1,p__157383__$1,owner__$1,vec__157388__$1,current__$1,inputs__$1,nav_tag__$1,meta157390));
});})(vec__157388,current,inputs,nav_tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities157389(biomarket$utilities$top_navigation,p__157383,owner,vec__157388,current,inputs,nav_tag,null));
});
biomarket.utilities.padded_button = (function biomarket$utilities$padded_button(p__157392,owner){
var vec__157397 = p__157392;
var padding = cljs.core.nth.call(null,vec__157397,(0),null);
var value = cljs.core.nth.call(null,vec__157397,(1),null);
var func = cljs.core.nth.call(null,vec__157397,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities157398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157398 = (function (padded_button,p__157392,owner,vec__157397,padding,value,func,meta157399){
this.padded_button = padded_button;
this.p__157392 = p__157392;
this.owner = owner;
this.vec__157397 = vec__157397;
this.padding = padding;
this.value = value;
this.func = func;
this.meta157399 = meta157399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157397,padding,value,func){
return (function (_157400,meta157399__$1){
var self__ = this;
var _157400__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157398(self__.padded_button,self__.p__157392,self__.owner,self__.vec__157397,self__.padding,self__.value,self__.func,meta157399__$1));
});})(vec__157397,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities157398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157397,padding,value,func){
return (function (_157400){
var self__ = this;
var _157400__$1 = this;
return self__.meta157399;
});})(vec__157397,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities157398.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157398.prototype.om$core$IRender$render$arity$1 = ((function (vec__157397,padding,value,func){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},(cljs.core.truth_(self__.func)?React.DOM.button({"className": "pure-button pure-button-primary", "onClick": self__.func},self__.value):React.DOM.button({"className": "pure-button pure-button-primary"},self__.value)));
});})(vec__157397,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities157398.getBasis = ((function (vec__157397,padding,value,func){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button","padded-button",875344236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157392","p__157392",1531851917,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157397","vec__157397",994458305,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"meta157399","meta157399",377058674,null)], null);
});})(vec__157397,padding,value,func))
;

biomarket.utilities.t_biomarket$utilities157398.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157398.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157398";

biomarket.utilities.t_biomarket$utilities157398.cljs$lang$ctorPrWriter = ((function (vec__157397,padding,value,func){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157398");
});})(vec__157397,padding,value,func))
;

biomarket.utilities.__GT_t_biomarket$utilities157398 = ((function (vec__157397,padding,value,func){
return (function biomarket$utilities$padded_button_$___GT_t_biomarket$utilities157398(padded_button__$1,p__157392__$1,owner__$1,vec__157397__$1,padding__$1,value__$1,func__$1,meta157399){
return (new biomarket.utilities.t_biomarket$utilities157398(padded_button__$1,p__157392__$1,owner__$1,vec__157397__$1,padding__$1,value__$1,func__$1,meta157399));
});})(vec__157397,padding,value,func))
;

}

return (new biomarket.utilities.t_biomarket$utilities157398(biomarket$utilities$padded_button,p__157392,owner,vec__157397,padding,value,func,null));
});
biomarket.utilities.padded_button_disabled = (function biomarket$utilities$padded_button_disabled(p__157401,owner){
var vec__157406 = p__157401;
var padding = cljs.core.nth.call(null,vec__157406,(0),null);
var value = cljs.core.nth.call(null,vec__157406,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities157407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157407 = (function (padded_button_disabled,p__157401,owner,vec__157406,padding,value,meta157408){
this.padded_button_disabled = padded_button_disabled;
this.p__157401 = p__157401;
this.owner = owner;
this.vec__157406 = vec__157406;
this.padding = padding;
this.value = value;
this.meta157408 = meta157408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157406,padding,value){
return (function (_157409,meta157408__$1){
var self__ = this;
var _157409__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157407(self__.padded_button_disabled,self__.p__157401,self__.owner,self__.vec__157406,self__.padding,self__.value,meta157408__$1));
});})(vec__157406,padding,value))
;

biomarket.utilities.t_biomarket$utilities157407.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157406,padding,value){
return (function (_157409){
var self__ = this;
var _157409__$1 = this;
return self__.meta157408;
});})(vec__157406,padding,value))
;

biomarket.utilities.t_biomarket$utilities157407.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157407.prototype.om$core$IRender$render$arity$1 = ((function (vec__157406,padding,value){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"padding": self__.padding}},React.DOM.button({"className": "pure-button pure-button-primary", "disabled": "true"},self__.value));
});})(vec__157406,padding,value))
;

biomarket.utilities.t_biomarket$utilities157407.getBasis = ((function (vec__157406,padding,value){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"padded-button-disabled","padded-button-disabled",1594106929,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157401","p__157401",-1331625066,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157406","vec__157406",-1880112771,null),new cljs.core.Symbol(null,"padding","padding",-994131076,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta157408","meta157408",225897251,null)], null);
});})(vec__157406,padding,value))
;

biomarket.utilities.t_biomarket$utilities157407.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157407.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157407";

biomarket.utilities.t_biomarket$utilities157407.cljs$lang$ctorPrWriter = ((function (vec__157406,padding,value){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157407");
});})(vec__157406,padding,value))
;

biomarket.utilities.__GT_t_biomarket$utilities157407 = ((function (vec__157406,padding,value){
return (function biomarket$utilities$padded_button_disabled_$___GT_t_biomarket$utilities157407(padded_button_disabled__$1,p__157401__$1,owner__$1,vec__157406__$1,padding__$1,value__$1,meta157408){
return (new biomarket.utilities.t_biomarket$utilities157407(padded_button_disabled__$1,p__157401__$1,owner__$1,vec__157406__$1,padding__$1,value__$1,meta157408));
});})(vec__157406,padding,value))
;

}

return (new biomarket.utilities.t_biomarket$utilities157407(biomarket$utilities$padded_button_disabled,p__157401,owner,vec__157406,padding,value,null));
});
biomarket.utilities.waiting = (function biomarket$utilities$waiting(_,owner){
if(typeof biomarket.utilities.t_biomarket$utilities157413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157413 = (function (waiting,_,owner,meta157414){
this.waiting = waiting;
this._ = _;
this.owner = owner;
this.meta157414 = meta157414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157415,meta157414__$1){
var self__ = this;
var _157415__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157413(self__.waiting,self__._,self__.owner,meta157414__$1));
});

biomarket.utilities.t_biomarket$utilities157413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157415){
var self__ = this;
var _157415__$1 = this;
return self__.meta157414;
});

biomarket.utilities.t_biomarket$utilities157413.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157413.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return React.DOM.div({"style": {"position": "absolute", "top": "50%", "left": "50%", "-webkit-animation": "fadein 2s", "-moz-animation": "fadein 2s", "-ms-animation": "fadein 2s", "-o-animation": "fadein 2s", "animation": "fadein 2s"}},React.DOM.i({"className": "fa fa-refresh fa-spin fa-5x fa-fw"}));
});

biomarket.utilities.t_biomarket$utilities157413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157414","meta157414",1223247024,null)], null);
});

biomarket.utilities.t_biomarket$utilities157413.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157413.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157413";

biomarket.utilities.t_biomarket$utilities157413.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157413");
});

biomarket.utilities.__GT_t_biomarket$utilities157413 = (function biomarket$utilities$waiting_$___GT_t_biomarket$utilities157413(waiting__$1,___$1,owner__$1,meta157414){
return (new biomarket.utilities.t_biomarket$utilities157413(waiting__$1,___$1,owner__$1,meta157414));
});

}

return (new biomarket.utilities.t_biomarket$utilities157413(biomarket$utilities$waiting,_,owner,null));
});
biomarket.utilities.make_a_table = (function biomarket$utilities$make_a_table(p__157418,owner){
var map__157424 = p__157418;
var map__157424__$1 = ((((!((map__157424 == null)))?((((map__157424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157424):map__157424);
var data = cljs.core.get.call(null,map__157424__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var tparam = cljs.core.get.call(null,map__157424__$1,new cljs.core.Keyword(null,"tparam","tparam",1161386584));
if(typeof biomarket.utilities.t_biomarket$utilities157426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157426 = (function (make_a_table,p__157418,owner,map__157424,data,tparam,meta157427){
this.make_a_table = make_a_table;
this.p__157418 = p__157418;
this.owner = owner;
this.map__157424 = map__157424;
this.data = data;
this.tparam = tparam;
this.meta157427 = meta157427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__157424,map__157424__$1,data,tparam){
return (function (_157428,meta157427__$1){
var self__ = this;
var _157428__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157426(self__.make_a_table,self__.p__157418,self__.owner,self__.map__157424,self__.data,self__.tparam,meta157427__$1));
});})(map__157424,map__157424__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities157426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__157424,map__157424__$1,data,tparam){
return (function (_157428){
var self__ = this;
var _157428__$1 = this;
return self__.meta157427;
});})(map__157424,map__157424__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities157426.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157426.prototype.om$core$IRender$render$arity$1 = ((function (map__157424,map__157424__$1,data,tparam){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var tjs = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"table",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),self__.tparam));
return React.DOM.div({"style": {"background-color": "white"}},React.DOM.div({"className": "table-responsive"},React.DOM.table(tjs,React.DOM.thead(null,cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam){
return (function (p1__157416_SHARP_){
return React.DOM.th({"style": {"text-align": "center"}},p1__157416_SHARP_);
});})(tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam))
,cljs.core.keys.call(null,cljs.core.first.call(null,self__.data))))),cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam){
return (function (x){
return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.map.call(null,((function (tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam){
return (function (p1__157417_SHARP_){
return React.DOM.td({"style": {"text-align": "center"}},p1__157417_SHARP_);
});})(tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam))
,cljs.core.vals.call(null,x)));
});})(tjs,this__36785__auto____$1,map__157424,map__157424__$1,data,tparam))
,self__.data)))));
});})(map__157424,map__157424__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities157426.getBasis = ((function (map__157424,map__157424__$1,data,tparam){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-a-table","make-a-table",-346613799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null)], null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157418","p__157418",838542116,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__157424","map__157424",-55743709,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"tparam","tparam",-1493049185,null),new cljs.core.Symbol(null,"meta157427","meta157427",-1830623751,null)], null);
});})(map__157424,map__157424__$1,data,tparam))
;

biomarket.utilities.t_biomarket$utilities157426.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157426.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157426";

biomarket.utilities.t_biomarket$utilities157426.cljs$lang$ctorPrWriter = ((function (map__157424,map__157424__$1,data,tparam){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157426");
});})(map__157424,map__157424__$1,data,tparam))
;

biomarket.utilities.__GT_t_biomarket$utilities157426 = ((function (map__157424,map__157424__$1,data,tparam){
return (function biomarket$utilities$make_a_table_$___GT_t_biomarket$utilities157426(make_a_table__$1,p__157418__$1,owner__$1,map__157424__$2,data__$1,tparam__$1,meta157427){
return (new biomarket.utilities.t_biomarket$utilities157426(make_a_table__$1,p__157418__$1,owner__$1,map__157424__$2,data__$1,tparam__$1,meta157427));
});})(map__157424,map__157424__$1,data,tparam))
;

}

return (new biomarket.utilities.t_biomarket$utilities157426(biomarket$utilities$make_a_table,p__157418,owner,map__157424__$1,data,tparam,null));
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
biomarket.utilities.get_input = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","get-input"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function() { 
var G__157432__delegate = function (owner,p__157429,args){
var map__157430 = p__157429;
var map__157430__$1 = ((((!((map__157430 == null)))?((((map__157430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157430):map__157430);
var fname = cljs.core.get.call(null,map__157430__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__157430__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return fname;
};
var G__157432 = function (owner,p__157429,var_args){
var args = null;
if (arguments.length > 2) {
var G__157433__i = 0, G__157433__a = new Array(arguments.length -  2);
while (G__157433__i < G__157433__a.length) {G__157433__a[G__157433__i] = arguments[G__157433__i + 2]; ++G__157433__i;}
  args = new cljs.core.IndexedSeq(G__157433__a,0);
} 
return G__157432__delegate.call(this,owner,p__157429,args);};
G__157432.cljs$lang$maxFixedArity = 2;
G__157432.cljs$lang$applyTo = (function (arglist__157434){
var owner = cljs.core.first(arglist__157434);
arglist__157434 = cljs.core.next(arglist__157434);
var p__157429 = cljs.core.first(arglist__157434);
var args = cljs.core.rest(arglist__157434);
return G__157432__delegate(owner,p__157429,args);
});
G__157432.cljs$core$IFn$_invoke$arity$variadic = G__157432__delegate;
return G__157432;
})()
;})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
})();
}
cljs.core._add_method.call(null,biomarket.utilities.get_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__157443 = null;
var G__157443__2 = (function (owner,p__157435){
var map__157437 = p__157435;
var map__157437__$1 = ((((!((map__157437 == null)))?((((map__157437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157437):map__157437);
var m = map__157437__$1;
var fname = cljs.core.get.call(null,map__157437__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__157437__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return biomarket.utilities.get_input.call(null,owner,m,new cljs.core.Keyword(null,"inputs","inputs",865803858));
});
var G__157443__3 = (function (owner,p__157436,param_name){
var map__157439 = p__157436;
var map__157439__$1 = ((((!((map__157439 == null)))?((((map__157439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157439):map__157439);
var fname = cljs.core.get.call(null,map__157439__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var element = cljs.core.get.call(null,map__157439__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var inputs = om.core.get_state.call(null,owner,param_name);
var iv = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (inputs,map__157439,map__157439__$1,fname,element){
return (function (p__157441){
var vec__157442 = p__157441;
var k = cljs.core.nth.call(null,vec__157442,(0),null);
var v = cljs.core.nth.call(null,vec__157442,(1),null);
if(cljs.core.not.call(null,k.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(element)))){
return v;
} else {
return null;
}
});})(inputs,map__157439,map__157439__$1,fname,element))
,new cljs.core.Keyword(null,"tests","tests",-1041085625).cljs$core$IFn$_invoke$arity$1(element))));
return om.core.set_state_BANG_.call(null,owner,param_name,cljs.core.assoc.call(null,om.core.get_state.call(null,owner,param_name),fname,cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"invalid","invalid",412869516),iv)));
});
G__157443 = function(owner,p__157436,param_name){
switch(arguments.length){
case 2:
return G__157443__2.call(this,owner,p__157436);
case 3:
return G__157443__3.call(this,owner,p__157436,param_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__157443.cljs$core$IFn$_invoke$arity$2 = G__157443__2;
G__157443.cljs$core$IFn$_invoke$arity$3 = G__157443__3;
return G__157443;
})()
);
if(typeof biomarket.utilities.clean_input !== 'undefined'){
} else {
biomarket.utilities.clean_input = (function (){var method_table__26765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"biomarket.utilities","clean-input"),((function (method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__){
return (function (element,classes,oc){
return new cljs.core.Keyword(null,"input-type","input-type",856973840).cljs$core$IFn$_invoke$arity$1(element);
});})(method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__,hierarchy__26769__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26769__auto__,method_table__26765__auto__,prefer_table__26766__auto__,method_cache__26767__auto__,cached_hierarchy__26768__auto__));
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
var x__26674__auto__ = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)));
return cljs.core._conj.call(null,(function (){var x__26674__auto____$1 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spid","spid",1854581004).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"className","className",-1983287057),"sr-only"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,(function (){var x__26674__auto____$2 = React.DOM.span(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"help-block"], null)),new cljs.core.Keyword(null,"fb","fb",-1331669322).cljs$core$IFn$_invoke$arity$1(classes));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto____$2);
})(),x__26674__auto____$1);
})(),x__26674__auto__);
});
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"addon","addon",931813532),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
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
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"no-icon","no-icon",-1734606666),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})()));
}));
cljs.core._add_method.call(null,biomarket.utilities.clean_input,new cljs.core.Keyword(null,"default","default",-1987822328),(function (element,classes,oc){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var x__26674__auto__ = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),(function (){var x__26674__auto__ = (function (){var js = biomarket.utilities.js.call(null,element,classes,oc);
if(cljs.core._EQ_.call(null,"textarea",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element))){
return om.dom.textarea.call(null,js);
} else {
return om.dom.input.call(null,js);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26674__auto__);
})(),biomarket.utilities.icons.call(null,element,classes)));
}));
biomarket.utilities.the_input = (function biomarket$utilities$the_input(js,owner){
if(typeof biomarket.utilities.t_biomarket$utilities157447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157447 = (function (the_input,js,owner,meta157448){
this.the_input = the_input;
this.js = js;
this.owner = owner;
this.meta157448 = meta157448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_157449,meta157448__$1){
var self__ = this;
var _157449__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157447(self__.the_input,self__.js,self__.owner,meta157448__$1));
});

biomarket.utilities.t_biomarket$utilities157447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_157449){
var self__ = this;
var _157449__$1 = this;
return self__.meta157448;
});

biomarket.utilities.t_biomarket$utilities157447.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157447.prototype.om$core$IRender$render$arity$1 = (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,self__.js);
});

biomarket.utilities.t_biomarket$utilities157447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"the-input","the-input",1976764503,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"js","js",-886355190,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta157448","meta157448",-1499819483,null)], null);
});

biomarket.utilities.t_biomarket$utilities157447.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157447.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157447";

biomarket.utilities.t_biomarket$utilities157447.cljs$lang$ctorPrWriter = (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157447");
});

biomarket.utilities.__GT_t_biomarket$utilities157447 = (function biomarket$utilities$the_input_$___GT_t_biomarket$utilities157447(the_input__$1,js__$1,owner__$1,meta157448){
return (new biomarket.utilities.t_biomarket$utilities157447(the_input__$1,js__$1,owner__$1,meta157448));
});

}

return (new biomarket.utilities.t_biomarket$utilities157447(biomarket$utilities$the_input,js,owner,null));
});
biomarket.utilities.input = (function biomarket$utilities$input(p__157452,owner){
var vec__157460 = p__157452;
var fname = cljs.core.nth.call(null,vec__157460,(0),null);
var element = cljs.core.nth.call(null,vec__157460,(1),null);
var tag = cljs.core.nth.call(null,vec__157460,(2),null);
if(typeof biomarket.utilities.t_biomarket$utilities157461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157461 = (function (input,p__157452,owner,vec__157460,fname,element,tag,meta157462){
this.input = input;
this.p__157452 = p__157452;
this.owner = owner;
this.vec__157460 = vec__157460;
this.fname = fname;
this.element = element;
this.tag = tag;
this.meta157462 = meta157462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157460,fname,element,tag){
return (function (_157463,meta157462__$1){
var self__ = this;
var _157463__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157461(self__.input,self__.p__157452,self__.owner,self__.vec__157460,self__.fname,self__.element,self__.tag,meta157462__$1));
});})(vec__157460,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities157461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157460,fname,element,tag){
return (function (_157463){
var self__ = this;
var _157463__$1 = this;
return self__.meta157462;
});})(vec__157460,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities157461.prototype.om$core$IRender$ = true;

biomarket.utilities.t_biomarket$utilities157461.prototype.om$core$IRender$render$arity$1 = ((function (vec__157460,fname,element,tag){
return (function (this__36785__auto__){
var self__ = this;
var this__36785__auto____$1 = this;
var oc = ((function (this__36785__auto____$1,vec__157460,fname,element,tag){
return (function (p1__157450_SHARP_){
return biomarket.utilities.on_change_function.call(null,self__.owner,self__.tag,self__.fname,self__.element,p1__157450_SHARP_);
});})(this__36785__auto____$1,vec__157460,fname,element,tag))
;
var classes = (function (){var pred__157464 = cljs.core._EQ_;
var expr__157465 = new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element);
if(cljs.core.truth_(pred__157464.call(null,false,expr__157465))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group",new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
if(cljs.core.truth_(pred__157464.call(null,null,expr__157465))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-success has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-ok form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),""], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fg","fg",-101797208),"form-group has-error has-feedback",new cljs.core.Keyword(null,"icon","icon",1679606541),"glyphicon glyphicon-remove form-control-feedback",new cljs.core.Keyword(null,"fb","fb",-1331669322),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (pred__157464,expr__157465,oc,this__36785__auto____$1,vec__157460,fname,element,tag){
return (function (p1__157451_SHARP_){
return React.DOM.div(null,p1__157451_SHARP_);
});})(pred__157464,expr__157465,oc,this__36785__auto____$1,vec__157460,fname,element,tag))
,new cljs.core.Keyword(null,"invalid","invalid",412869516).cljs$core$IFn$_invoke$arity$1(self__.element)))], null);
}
}
})();
return React.DOM.div({"className": new cljs.core.Keyword(null,"fg","fg",-101797208).cljs$core$IFn$_invoke$arity$1(classes)},React.DOM.label({"className": "control-label", "htmlFor": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.element)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.element)),om.core.build.call(null,biomarket.utilities.the_input,biomarket.utilities.clean_input.call(null,self__.element,classes,oc)));
});})(vec__157460,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities157461.getBasis = ((function (vec__157460,fname,element,tag){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157452","p__157452",1076556835,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157460","vec__157460",-56744061,null),new cljs.core.Symbol(null,"fname","fname",-1154144278,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta157462","meta157462",133184083,null)], null);
});})(vec__157460,fname,element,tag))
;

biomarket.utilities.t_biomarket$utilities157461.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157461.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157461";

biomarket.utilities.t_biomarket$utilities157461.cljs$lang$ctorPrWriter = ((function (vec__157460,fname,element,tag){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157461");
});})(vec__157460,fname,element,tag))
;

biomarket.utilities.__GT_t_biomarket$utilities157461 = ((function (vec__157460,fname,element,tag){
return (function biomarket$utilities$input_$___GT_t_biomarket$utilities157461(input__$1,p__157452__$1,owner__$1,vec__157460__$1,fname__$1,element__$1,tag__$1,meta157462){
return (new biomarket.utilities.t_biomarket$utilities157461(input__$1,p__157452__$1,owner__$1,vec__157460__$1,fname__$1,element__$1,tag__$1,meta157462));
});})(vec__157460,fname,element,tag))
;

}

return (new biomarket.utilities.t_biomarket$utilities157461(biomarket$utilities$input,p__157452,owner,vec__157460,fname,element,tag,null));
});
biomarket.utilities.set_radio_state = (function biomarket$utilities$set_radio_state(owner,element,e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.assoc.call(null,element,new cljs.core.Keyword(null,"current","current",-1088038603),biomarket.utilities.get_text.call(null,e)));
});
biomarket.utilities.in_line_radio = (function biomarket$utilities$in_line_radio(p__157468,owner){
var vec__157476 = p__157468;
var name = cljs.core.nth.call(null,vec__157476,(0),null);
var element = cljs.core.nth.call(null,vec__157476,(1),null);
if(typeof biomarket.utilities.t_biomarket$utilities157477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
biomarket.utilities.t_biomarket$utilities157477 = (function (in_line_radio,p__157468,owner,vec__157476,name,element,meta157478){
this.in_line_radio = in_line_radio;
this.p__157468 = p__157468;
this.owner = owner;
this.vec__157476 = vec__157476;
this.name = name;
this.element = element;
this.meta157478 = meta157478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
biomarket.utilities.t_biomarket$utilities157477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__157476,name,element){
return (function (_157479,meta157478__$1){
var self__ = this;
var _157479__$1 = this;
return (new biomarket.utilities.t_biomarket$utilities157477(self__.in_line_radio,self__.p__157468,self__.owner,self__.vec__157476,self__.name,self__.element,meta157478__$1));
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__157476,name,element){
return (function (_157479){
var self__ = this;
var _157479__$1 = this;
return self__.meta157478;
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IInitState$ = true;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IInitState$init_state$arity$1 = ((function (vec__157476,name,element){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),self__.name,new cljs.core.Keyword(null,"element","element",1974019749),self__.element], null);
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IWillUpdate$ = true;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (vec__157476,name,element){
return (function (_,np,ns){
var self__ = this;
var ___$1 = this;
return biomarket.utilities.pub_info.call(null,self__.owner,new cljs.core.Keyword(null,"radiod","radiod",450568867),ns);
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IRenderState$ = true;

biomarket.utilities.t_biomarket$utilities157477.prototype.om$core$IRenderState$render_state$arity$2 = ((function (vec__157476,name,element){
return (function (_,p__157480){
var self__ = this;
var map__157481 = p__157480;
var map__157481__$1 = ((((!((map__157481 == null)))?((((map__157481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157481):map__157481);
var element__$1 = cljs.core.get.call(null,map__157481__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "pure-u-1"},cljs.core.map.call(null,((function (___$1,map__157481,map__157481__$1,element__$1,vec__157476,name,element){
return (function (p1__157467_SHARP_){
return React.DOM.span(null,React.DOM.div({"className": "pure-u-1-5"},om.dom.input.call(null,{"type": "radio", "name": new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(element__$1), "value": cljs.core.first.call(null,p1__157467_SHARP_), "onChange": ((function (___$1,map__157481,map__157481__$1,element__$1,vec__157476,name,element){
return (function (e){
return biomarket.utilities.set_radio_state.call(null,self__.owner,element__$1,e);
});})(___$1,map__157481,map__157481__$1,element__$1,vec__157476,name,element))
})),React.DOM.div({"className": "pure-u-1-4"},cljs.core.second.call(null,p1__157467_SHARP_)));
});})(___$1,map__157481,map__157481__$1,element__$1,vec__157476,name,element))
,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(element__$1)));
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.getBasis = ((function (vec__157476,name,element){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"in-line-radio","in-line-radio",803575522,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null)], null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"p__157468","p__157468",25919810,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"vec__157476","vec__157476",-641933054,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"element","element",-680416020,null),new cljs.core.Symbol(null,"meta157478","meta157478",780193922,null)], null);
});})(vec__157476,name,element))
;

biomarket.utilities.t_biomarket$utilities157477.cljs$lang$type = true;

biomarket.utilities.t_biomarket$utilities157477.cljs$lang$ctorStr = "biomarket.utilities/t_biomarket$utilities157477";

biomarket.utilities.t_biomarket$utilities157477.cljs$lang$ctorPrWriter = ((function (vec__157476,name,element){
return (function (this__26446__auto__,writer__26447__auto__,opt__26448__auto__){
return cljs.core._write.call(null,writer__26447__auto__,"biomarket.utilities/t_biomarket$utilities157477");
});})(vec__157476,name,element))
;

biomarket.utilities.__GT_t_biomarket$utilities157477 = ((function (vec__157476,name,element){
return (function biomarket$utilities$in_line_radio_$___GT_t_biomarket$utilities157477(in_line_radio__$1,p__157468__$1,owner__$1,vec__157476__$1,name__$1,element__$1,meta157478){
return (new biomarket.utilities.t_biomarket$utilities157477(in_line_radio__$1,p__157468__$1,owner__$1,vec__157476__$1,name__$1,element__$1,meta157478));
});})(vec__157476,name,element))
;

}

return (new biomarket.utilities.t_biomarket$utilities157477(biomarket$utilities$in_line_radio,p__157468,owner,vec__157476,name,element,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=utilities.js.map