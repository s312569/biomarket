// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__39902 = cljs.core._EQ_;
var expr__39903 = (function (){var or__25840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39902.call(null,"true",expr__39903))){
return true;
} else {
if(cljs.core.truth_(pred__39902.call(null,"false",expr__39903))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39903)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39905__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39906__i = 0, G__39906__a = new Array(arguments.length -  0);
while (G__39906__i < G__39906__a.length) {G__39906__a[G__39906__i] = arguments[G__39906__i + 0]; ++G__39906__i;}
  args = new cljs.core.IndexedSeq(G__39906__a,0);
} 
return G__39905__delegate.call(this,args);};
G__39905.cljs$lang$maxFixedArity = 0;
G__39905.cljs$lang$applyTo = (function (arglist__39907){
var args = cljs.core.seq(arglist__39907);
return G__39905__delegate(args);
});
G__39905.cljs$core$IFn$_invoke$arity$variadic = G__39905__delegate;
return G__39905;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39908){
var map__39911 = p__39908;
var map__39911__$1 = ((((!((map__39911 == null)))?((((map__39911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39911):map__39911);
var message = cljs.core.get.call(null,map__39911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39911__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25828__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29971__auto___40073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___40073,ch){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___40073,ch){
return (function (state_40042){
var state_val_40043 = (state_40042[(1)]);
if((state_val_40043 === (7))){
var inst_40038 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40044_40074 = state_40042__$1;
(statearr_40044_40074[(2)] = inst_40038);

(statearr_40044_40074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (1))){
var state_40042__$1 = state_40042;
var statearr_40045_40075 = state_40042__$1;
(statearr_40045_40075[(2)] = null);

(statearr_40045_40075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (4))){
var inst_39995 = (state_40042[(7)]);
var inst_39995__$1 = (state_40042[(2)]);
var state_40042__$1 = (function (){var statearr_40046 = state_40042;
(statearr_40046[(7)] = inst_39995__$1);

return statearr_40046;
})();
if(cljs.core.truth_(inst_39995__$1)){
var statearr_40047_40076 = state_40042__$1;
(statearr_40047_40076[(1)] = (5));

} else {
var statearr_40048_40077 = state_40042__$1;
(statearr_40048_40077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (15))){
var inst_40002 = (state_40042[(8)]);
var inst_40017 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40002);
var inst_40018 = cljs.core.first.call(null,inst_40017);
var inst_40019 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40018);
var inst_40020 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40019)].join('');
var inst_40021 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40020);
var state_40042__$1 = state_40042;
var statearr_40049_40078 = state_40042__$1;
(statearr_40049_40078[(2)] = inst_40021);

(statearr_40049_40078[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (13))){
var inst_40026 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40050_40079 = state_40042__$1;
(statearr_40050_40079[(2)] = inst_40026);

(statearr_40050_40079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (6))){
var state_40042__$1 = state_40042;
var statearr_40051_40080 = state_40042__$1;
(statearr_40051_40080[(2)] = null);

(statearr_40051_40080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (17))){
var inst_40024 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40052_40081 = state_40042__$1;
(statearr_40052_40081[(2)] = inst_40024);

(statearr_40052_40081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (3))){
var inst_40040 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40042__$1,inst_40040);
} else {
if((state_val_40043 === (12))){
var inst_40001 = (state_40042[(9)]);
var inst_40015 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40001,opts);
var state_40042__$1 = state_40042;
if(cljs.core.truth_(inst_40015)){
var statearr_40053_40082 = state_40042__$1;
(statearr_40053_40082[(1)] = (15));

} else {
var statearr_40054_40083 = state_40042__$1;
(statearr_40054_40083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (2))){
var state_40042__$1 = state_40042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40042__$1,(4),ch);
} else {
if((state_val_40043 === (11))){
var inst_40002 = (state_40042[(8)]);
var inst_40007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40008 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40002);
var inst_40009 = cljs.core.async.timeout.call(null,(1000));
var inst_40010 = [inst_40008,inst_40009];
var inst_40011 = (new cljs.core.PersistentVector(null,2,(5),inst_40007,inst_40010,null));
var state_40042__$1 = state_40042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40042__$1,(14),inst_40011);
} else {
if((state_val_40043 === (9))){
var inst_40002 = (state_40042[(8)]);
var inst_40028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40029 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40002);
var inst_40030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40029);
var inst_40031 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40030)].join('');
var inst_40032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40031);
var state_40042__$1 = (function (){var statearr_40055 = state_40042;
(statearr_40055[(10)] = inst_40028);

return statearr_40055;
})();
var statearr_40056_40084 = state_40042__$1;
(statearr_40056_40084[(2)] = inst_40032);

(statearr_40056_40084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (5))){
var inst_39995 = (state_40042[(7)]);
var inst_39997 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39998 = (new cljs.core.PersistentArrayMap(null,2,inst_39997,null));
var inst_39999 = (new cljs.core.PersistentHashSet(null,inst_39998,null));
var inst_40000 = figwheel.client.focus_msgs.call(null,inst_39999,inst_39995);
var inst_40001 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40000);
var inst_40002 = cljs.core.first.call(null,inst_40000);
var inst_40003 = figwheel.client.autoload_QMARK_.call(null);
var state_40042__$1 = (function (){var statearr_40057 = state_40042;
(statearr_40057[(8)] = inst_40002);

(statearr_40057[(9)] = inst_40001);

return statearr_40057;
})();
if(cljs.core.truth_(inst_40003)){
var statearr_40058_40085 = state_40042__$1;
(statearr_40058_40085[(1)] = (8));

} else {
var statearr_40059_40086 = state_40042__$1;
(statearr_40059_40086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (14))){
var inst_40013 = (state_40042[(2)]);
var state_40042__$1 = state_40042;
var statearr_40060_40087 = state_40042__$1;
(statearr_40060_40087[(2)] = inst_40013);

(statearr_40060_40087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (16))){
var state_40042__$1 = state_40042;
var statearr_40061_40088 = state_40042__$1;
(statearr_40061_40088[(2)] = null);

(statearr_40061_40088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (10))){
var inst_40034 = (state_40042[(2)]);
var state_40042__$1 = (function (){var statearr_40062 = state_40042;
(statearr_40062[(11)] = inst_40034);

return statearr_40062;
})();
var statearr_40063_40089 = state_40042__$1;
(statearr_40063_40089[(2)] = null);

(statearr_40063_40089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40043 === (8))){
var inst_40001 = (state_40042[(9)]);
var inst_40005 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40001,opts);
var state_40042__$1 = state_40042;
if(cljs.core.truth_(inst_40005)){
var statearr_40064_40090 = state_40042__$1;
(statearr_40064_40090[(1)] = (11));

} else {
var statearr_40065_40091 = state_40042__$1;
(statearr_40065_40091[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
});})(c__29971__auto___40073,ch))
;
return ((function (switch__29859__auto__,c__29971__auto___40073,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_40069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40069[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__);

(statearr_40069[(1)] = (1));

return statearr_40069;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1 = (function (state_40042){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_40042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e40070){if((e40070 instanceof Object)){
var ex__29863__auto__ = e40070;
var statearr_40071_40092 = state_40042;
(statearr_40071_40092[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40093 = state_40042;
state_40042 = G__40093;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__ = function(state_40042){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1.call(this,state_40042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___40073,ch))
})();
var state__29973__auto__ = (function (){var statearr_40072 = f__29972__auto__.call(null);
(statearr_40072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___40073);

return statearr_40072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___40073,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40094_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40094_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40101 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40101){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40100 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40099,_STAR_print_newline_STAR_40100,base_path_40101){
return (function() { 
var G__40102__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40103__i = 0, G__40103__a = new Array(arguments.length -  0);
while (G__40103__i < G__40103__a.length) {G__40103__a[G__40103__i] = arguments[G__40103__i + 0]; ++G__40103__i;}
  args = new cljs.core.IndexedSeq(G__40103__a,0);
} 
return G__40102__delegate.call(this,args);};
G__40102.cljs$lang$maxFixedArity = 0;
G__40102.cljs$lang$applyTo = (function (arglist__40104){
var args = cljs.core.seq(arglist__40104);
return G__40102__delegate(args);
});
G__40102.cljs$core$IFn$_invoke$arity$variadic = G__40102__delegate;
return G__40102;
})()
;})(_STAR_print_fn_STAR_40099,_STAR_print_newline_STAR_40100,base_path_40101))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40100;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40099;
}}catch (e40098){if((e40098 instanceof Error)){
var e = e40098;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40101], null));
} else {
var e = e40098;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40101))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40105){
var map__40112 = p__40105;
var map__40112__$1 = ((((!((map__40112 == null)))?((((map__40112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40112):map__40112);
var opts = map__40112__$1;
var build_id = cljs.core.get.call(null,map__40112__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40112,map__40112__$1,opts,build_id){
return (function (p__40114){
var vec__40115 = p__40114;
var map__40116 = cljs.core.nth.call(null,vec__40115,(0),null);
var map__40116__$1 = ((((!((map__40116 == null)))?((((map__40116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40116):map__40116);
var msg = map__40116__$1;
var msg_name = cljs.core.get.call(null,map__40116__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40115,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40115,map__40116,map__40116__$1,msg,msg_name,_,map__40112,map__40112__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40115,map__40116,map__40116__$1,msg,msg_name,_,map__40112,map__40112__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40112,map__40112__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40122){
var vec__40123 = p__40122;
var map__40124 = cljs.core.nth.call(null,vec__40123,(0),null);
var map__40124__$1 = ((((!((map__40124 == null)))?((((map__40124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40124):map__40124);
var msg = map__40124__$1;
var msg_name = cljs.core.get.call(null,map__40124__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40123,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40126){
var map__40136 = p__40126;
var map__40136__$1 = ((((!((map__40136 == null)))?((((map__40136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);
var on_compile_warning = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40136,map__40136__$1,on_compile_warning,on_compile_fail){
return (function (p__40138){
var vec__40139 = p__40138;
var map__40140 = cljs.core.nth.call(null,vec__40139,(0),null);
var map__40140__$1 = ((((!((map__40140 == null)))?((((map__40140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40140):map__40140);
var msg = map__40140__$1;
var msg_name = cljs.core.get.call(null,map__40140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40139,(1));
var pred__40142 = cljs.core._EQ_;
var expr__40143 = msg_name;
if(cljs.core.truth_(pred__40142.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40143))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40142.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40143))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40136,map__40136__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__,msg_hist,msg_names,msg){
return (function (state_40359){
var state_val_40360 = (state_40359[(1)]);
if((state_val_40360 === (7))){
var inst_40283 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40283)){
var statearr_40361_40407 = state_40359__$1;
(statearr_40361_40407[(1)] = (8));

} else {
var statearr_40362_40408 = state_40359__$1;
(statearr_40362_40408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (20))){
var inst_40353 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40363_40409 = state_40359__$1;
(statearr_40363_40409[(2)] = inst_40353);

(statearr_40363_40409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (27))){
var inst_40349 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40364_40410 = state_40359__$1;
(statearr_40364_40410[(2)] = inst_40349);

(statearr_40364_40410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (1))){
var inst_40276 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40276)){
var statearr_40365_40411 = state_40359__$1;
(statearr_40365_40411[(1)] = (2));

} else {
var statearr_40366_40412 = state_40359__$1;
(statearr_40366_40412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (24))){
var inst_40351 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40367_40413 = state_40359__$1;
(statearr_40367_40413[(2)] = inst_40351);

(statearr_40367_40413[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (4))){
var inst_40357 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40359__$1,inst_40357);
} else {
if((state_val_40360 === (15))){
var inst_40355 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40368_40414 = state_40359__$1;
(statearr_40368_40414[(2)] = inst_40355);

(statearr_40368_40414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (21))){
var inst_40314 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40369_40415 = state_40359__$1;
(statearr_40369_40415[(2)] = inst_40314);

(statearr_40369_40415[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (31))){
var inst_40338 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40338)){
var statearr_40370_40416 = state_40359__$1;
(statearr_40370_40416[(1)] = (34));

} else {
var statearr_40371_40417 = state_40359__$1;
(statearr_40371_40417[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (32))){
var inst_40347 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40372_40418 = state_40359__$1;
(statearr_40372_40418[(2)] = inst_40347);

(statearr_40372_40418[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (33))){
var inst_40336 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40373_40419 = state_40359__$1;
(statearr_40373_40419[(2)] = inst_40336);

(statearr_40373_40419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (13))){
var inst_40297 = figwheel.client.heads_up.clear.call(null);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(16),inst_40297);
} else {
if((state_val_40360 === (22))){
var inst_40318 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40319 = figwheel.client.heads_up.append_message.call(null,inst_40318);
var state_40359__$1 = state_40359;
var statearr_40374_40420 = state_40359__$1;
(statearr_40374_40420[(2)] = inst_40319);

(statearr_40374_40420[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (36))){
var inst_40345 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40375_40421 = state_40359__$1;
(statearr_40375_40421[(2)] = inst_40345);

(statearr_40375_40421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (29))){
var inst_40329 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40376_40422 = state_40359__$1;
(statearr_40376_40422[(2)] = inst_40329);

(statearr_40376_40422[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (6))){
var inst_40278 = (state_40359[(7)]);
var state_40359__$1 = state_40359;
var statearr_40377_40423 = state_40359__$1;
(statearr_40377_40423[(2)] = inst_40278);

(statearr_40377_40423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (28))){
var inst_40325 = (state_40359[(2)]);
var inst_40326 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40327 = figwheel.client.heads_up.display_warning.call(null,inst_40326);
var state_40359__$1 = (function (){var statearr_40378 = state_40359;
(statearr_40378[(8)] = inst_40325);

return statearr_40378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(29),inst_40327);
} else {
if((state_val_40360 === (25))){
var inst_40323 = figwheel.client.heads_up.clear.call(null);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(28),inst_40323);
} else {
if((state_val_40360 === (34))){
var inst_40340 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(37),inst_40340);
} else {
if((state_val_40360 === (17))){
var inst_40305 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40379_40424 = state_40359__$1;
(statearr_40379_40424[(2)] = inst_40305);

(statearr_40379_40424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (3))){
var inst_40295 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40295)){
var statearr_40380_40425 = state_40359__$1;
(statearr_40380_40425[(1)] = (13));

} else {
var statearr_40381_40426 = state_40359__$1;
(statearr_40381_40426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (12))){
var inst_40291 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40382_40427 = state_40359__$1;
(statearr_40382_40427[(2)] = inst_40291);

(statearr_40382_40427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (2))){
var inst_40278 = (state_40359[(7)]);
var inst_40278__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40359__$1 = (function (){var statearr_40383 = state_40359;
(statearr_40383[(7)] = inst_40278__$1);

return statearr_40383;
})();
if(cljs.core.truth_(inst_40278__$1)){
var statearr_40384_40428 = state_40359__$1;
(statearr_40384_40428[(1)] = (5));

} else {
var statearr_40385_40429 = state_40359__$1;
(statearr_40385_40429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (23))){
var inst_40321 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40321)){
var statearr_40386_40430 = state_40359__$1;
(statearr_40386_40430[(1)] = (25));

} else {
var statearr_40387_40431 = state_40359__$1;
(statearr_40387_40431[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (35))){
var state_40359__$1 = state_40359;
var statearr_40388_40432 = state_40359__$1;
(statearr_40388_40432[(2)] = null);

(statearr_40388_40432[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (19))){
var inst_40316 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40316)){
var statearr_40389_40433 = state_40359__$1;
(statearr_40389_40433[(1)] = (22));

} else {
var statearr_40390_40434 = state_40359__$1;
(statearr_40390_40434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (11))){
var inst_40287 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40391_40435 = state_40359__$1;
(statearr_40391_40435[(2)] = inst_40287);

(statearr_40391_40435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (9))){
var inst_40289 = figwheel.client.heads_up.clear.call(null);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(12),inst_40289);
} else {
if((state_val_40360 === (5))){
var inst_40280 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40359__$1 = state_40359;
var statearr_40392_40436 = state_40359__$1;
(statearr_40392_40436[(2)] = inst_40280);

(statearr_40392_40436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (14))){
var inst_40307 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40307)){
var statearr_40393_40437 = state_40359__$1;
(statearr_40393_40437[(1)] = (18));

} else {
var statearr_40394_40438 = state_40359__$1;
(statearr_40394_40438[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (26))){
var inst_40331 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40359__$1 = state_40359;
if(cljs.core.truth_(inst_40331)){
var statearr_40395_40439 = state_40359__$1;
(statearr_40395_40439[(1)] = (30));

} else {
var statearr_40396_40440 = state_40359__$1;
(statearr_40396_40440[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (16))){
var inst_40299 = (state_40359[(2)]);
var inst_40300 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40301 = figwheel.client.format_messages.call(null,inst_40300);
var inst_40302 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40303 = figwheel.client.heads_up.display_error.call(null,inst_40301,inst_40302);
var state_40359__$1 = (function (){var statearr_40397 = state_40359;
(statearr_40397[(9)] = inst_40299);

return statearr_40397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(17),inst_40303);
} else {
if((state_val_40360 === (30))){
var inst_40333 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40334 = figwheel.client.heads_up.display_warning.call(null,inst_40333);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(33),inst_40334);
} else {
if((state_val_40360 === (10))){
var inst_40293 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40398_40441 = state_40359__$1;
(statearr_40398_40441[(2)] = inst_40293);

(statearr_40398_40441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (18))){
var inst_40309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40310 = figwheel.client.format_messages.call(null,inst_40309);
var inst_40311 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40312 = figwheel.client.heads_up.display_error.call(null,inst_40310,inst_40311);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(21),inst_40312);
} else {
if((state_val_40360 === (37))){
var inst_40342 = (state_40359[(2)]);
var state_40359__$1 = state_40359;
var statearr_40399_40442 = state_40359__$1;
(statearr_40399_40442[(2)] = inst_40342);

(statearr_40399_40442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40360 === (8))){
var inst_40285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40359__$1 = state_40359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40359__$1,(11),inst_40285);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29971__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29859__auto__,c__29971__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0 = (function (){
var statearr_40403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40403[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__);

(statearr_40403[(1)] = (1));

return statearr_40403;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1 = (function (state_40359){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_40359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e40404){if((e40404 instanceof Object)){
var ex__29863__auto__ = e40404;
var statearr_40405_40443 = state_40359;
(statearr_40405_40443[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40444 = state_40359;
state_40359 = G__40444;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__ = function(state_40359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1.call(this,state_40359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__,msg_hist,msg_names,msg))
})();
var state__29973__auto__ = (function (){var statearr_40406 = f__29972__auto__.call(null);
(statearr_40406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_40406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__,msg_hist,msg_names,msg))
);

return c__29971__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29971__auto___40507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto___40507,ch){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto___40507,ch){
return (function (state_40490){
var state_val_40491 = (state_40490[(1)]);
if((state_val_40491 === (1))){
var state_40490__$1 = state_40490;
var statearr_40492_40508 = state_40490__$1;
(statearr_40492_40508[(2)] = null);

(statearr_40492_40508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (2))){
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40490__$1,(4),ch);
} else {
if((state_val_40491 === (3))){
var inst_40488 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40490__$1,inst_40488);
} else {
if((state_val_40491 === (4))){
var inst_40478 = (state_40490[(7)]);
var inst_40478__$1 = (state_40490[(2)]);
var state_40490__$1 = (function (){var statearr_40493 = state_40490;
(statearr_40493[(7)] = inst_40478__$1);

return statearr_40493;
})();
if(cljs.core.truth_(inst_40478__$1)){
var statearr_40494_40509 = state_40490__$1;
(statearr_40494_40509[(1)] = (5));

} else {
var statearr_40495_40510 = state_40490__$1;
(statearr_40495_40510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (5))){
var inst_40478 = (state_40490[(7)]);
var inst_40480 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40478);
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40490__$1,(8),inst_40480);
} else {
if((state_val_40491 === (6))){
var state_40490__$1 = state_40490;
var statearr_40496_40511 = state_40490__$1;
(statearr_40496_40511[(2)] = null);

(statearr_40496_40511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (7))){
var inst_40486 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40497_40512 = state_40490__$1;
(statearr_40497_40512[(2)] = inst_40486);

(statearr_40497_40512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (8))){
var inst_40482 = (state_40490[(2)]);
var state_40490__$1 = (function (){var statearr_40498 = state_40490;
(statearr_40498[(8)] = inst_40482);

return statearr_40498;
})();
var statearr_40499_40513 = state_40490__$1;
(statearr_40499_40513[(2)] = null);

(statearr_40499_40513[(1)] = (2));


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
});})(c__29971__auto___40507,ch))
;
return ((function (switch__29859__auto__,c__29971__auto___40507,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_40503 = [null,null,null,null,null,null,null,null,null];
(statearr_40503[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29860__auto__);

(statearr_40503[(1)] = (1));

return statearr_40503;
});
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1 = (function (state_40490){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_40490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e40504){if((e40504 instanceof Object)){
var ex__29863__auto__ = e40504;
var statearr_40505_40514 = state_40490;
(statearr_40505_40514[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40515 = state_40490;
state_40490 = G__40515;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__ = function(state_40490){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1.call(this,state_40490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto___40507,ch))
})();
var state__29973__auto__ = (function (){var statearr_40506 = f__29972__auto__.call(null);
(statearr_40506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto___40507);

return statearr_40506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto___40507,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29971__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29971__auto__){
return (function (){
var f__29972__auto__ = (function (){var switch__29859__auto__ = ((function (c__29971__auto__){
return (function (state_40536){
var state_val_40537 = (state_40536[(1)]);
if((state_val_40537 === (1))){
var inst_40531 = cljs.core.async.timeout.call(null,(3000));
var state_40536__$1 = state_40536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40536__$1,(2),inst_40531);
} else {
if((state_val_40537 === (2))){
var inst_40533 = (state_40536[(2)]);
var inst_40534 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40536__$1 = (function (){var statearr_40538 = state_40536;
(statearr_40538[(7)] = inst_40533);

return statearr_40538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40536__$1,inst_40534);
} else {
return null;
}
}
});})(c__29971__auto__))
;
return ((function (switch__29859__auto__,c__29971__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_40542 = [null,null,null,null,null,null,null,null];
(statearr_40542[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__);

(statearr_40542[(1)] = (1));

return statearr_40542;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1 = (function (state_40536){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_40536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e40543){if((e40543 instanceof Object)){
var ex__29863__auto__ = e40543;
var statearr_40544_40546 = state_40536;
(statearr_40544_40546[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40547 = state_40536;
state_40536 = G__40547;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__ = function(state_40536){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1.call(this,state_40536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29971__auto__))
})();
var state__29973__auto__ = (function (){var statearr_40545 = f__29972__auto__.call(null);
(statearr_40545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29971__auto__);

return statearr_40545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29973__auto__);
});})(c__29971__auto__))
);

return c__29971__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40548){
var map__40555 = p__40548;
var map__40555__$1 = ((((!((map__40555 == null)))?((((map__40555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40555):map__40555);
var ed = map__40555__$1;
var formatted_exception = cljs.core.get.call(null,map__40555__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40555__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40555__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40557_40561 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40558_40562 = null;
var count__40559_40563 = (0);
var i__40560_40564 = (0);
while(true){
if((i__40560_40564 < count__40559_40563)){
var msg_40565 = cljs.core._nth.call(null,chunk__40558_40562,i__40560_40564);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40565);

var G__40566 = seq__40557_40561;
var G__40567 = chunk__40558_40562;
var G__40568 = count__40559_40563;
var G__40569 = (i__40560_40564 + (1));
seq__40557_40561 = G__40566;
chunk__40558_40562 = G__40567;
count__40559_40563 = G__40568;
i__40560_40564 = G__40569;
continue;
} else {
var temp__4425__auto___40570 = cljs.core.seq.call(null,seq__40557_40561);
if(temp__4425__auto___40570){
var seq__40557_40571__$1 = temp__4425__auto___40570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40557_40571__$1)){
var c__26651__auto___40572 = cljs.core.chunk_first.call(null,seq__40557_40571__$1);
var G__40573 = cljs.core.chunk_rest.call(null,seq__40557_40571__$1);
var G__40574 = c__26651__auto___40572;
var G__40575 = cljs.core.count.call(null,c__26651__auto___40572);
var G__40576 = (0);
seq__40557_40561 = G__40573;
chunk__40558_40562 = G__40574;
count__40559_40563 = G__40575;
i__40560_40564 = G__40576;
continue;
} else {
var msg_40577 = cljs.core.first.call(null,seq__40557_40571__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40577);

var G__40578 = cljs.core.next.call(null,seq__40557_40571__$1);
var G__40579 = null;
var G__40580 = (0);
var G__40581 = (0);
seq__40557_40561 = G__40578;
chunk__40558_40562 = G__40579;
count__40559_40563 = G__40580;
i__40560_40564 = G__40581;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40582){
var map__40585 = p__40582;
var map__40585__$1 = ((((!((map__40585 == null)))?((((map__40585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40585):map__40585);
var w = map__40585__$1;
var message = cljs.core.get.call(null,map__40585__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25828__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40593 = cljs.core.seq.call(null,plugins);
var chunk__40594 = null;
var count__40595 = (0);
var i__40596 = (0);
while(true){
if((i__40596 < count__40595)){
var vec__40597 = cljs.core._nth.call(null,chunk__40594,i__40596);
var k = cljs.core.nth.call(null,vec__40597,(0),null);
var plugin = cljs.core.nth.call(null,vec__40597,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40599 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40593,chunk__40594,count__40595,i__40596,pl_40599,vec__40597,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40599.call(null,msg_hist);
});})(seq__40593,chunk__40594,count__40595,i__40596,pl_40599,vec__40597,k,plugin))
);
} else {
}

var G__40600 = seq__40593;
var G__40601 = chunk__40594;
var G__40602 = count__40595;
var G__40603 = (i__40596 + (1));
seq__40593 = G__40600;
chunk__40594 = G__40601;
count__40595 = G__40602;
i__40596 = G__40603;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40593);
if(temp__4425__auto__){
var seq__40593__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40593__$1)){
var c__26651__auto__ = cljs.core.chunk_first.call(null,seq__40593__$1);
var G__40604 = cljs.core.chunk_rest.call(null,seq__40593__$1);
var G__40605 = c__26651__auto__;
var G__40606 = cljs.core.count.call(null,c__26651__auto__);
var G__40607 = (0);
seq__40593 = G__40604;
chunk__40594 = G__40605;
count__40595 = G__40606;
i__40596 = G__40607;
continue;
} else {
var vec__40598 = cljs.core.first.call(null,seq__40593__$1);
var k = cljs.core.nth.call(null,vec__40598,(0),null);
var plugin = cljs.core.nth.call(null,vec__40598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40608 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40593,chunk__40594,count__40595,i__40596,pl_40608,vec__40598,k,plugin,seq__40593__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40608.call(null,msg_hist);
});})(seq__40593,chunk__40594,count__40595,i__40596,pl_40608,vec__40598,k,plugin,seq__40593__$1,temp__4425__auto__))
);
} else {
}

var G__40609 = cljs.core.next.call(null,seq__40593__$1);
var G__40610 = null;
var G__40611 = (0);
var G__40612 = (0);
seq__40593 = G__40609;
chunk__40594 = G__40610;
count__40595 = G__40611;
i__40596 = G__40612;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args40613 = [];
var len__26910__auto___40616 = arguments.length;
var i__26911__auto___40617 = (0);
while(true){
if((i__26911__auto___40617 < len__26910__auto___40616)){
args40613.push((arguments[i__26911__auto___40617]));

var G__40618 = (i__26911__auto___40617 + (1));
i__26911__auto___40617 = G__40618;
continue;
} else {
}
break;
}

var G__40615 = args40613.length;
switch (G__40615) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40613.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26917__auto__ = [];
var len__26910__auto___40624 = arguments.length;
var i__26911__auto___40625 = (0);
while(true){
if((i__26911__auto___40625 < len__26910__auto___40624)){
args__26917__auto__.push((arguments[i__26911__auto___40625]));

var G__40626 = (i__26911__auto___40625 + (1));
i__26911__auto___40625 = G__40626;
continue;
} else {
}
break;
}

var argseq__26918__auto__ = ((((0) < args__26917__auto__.length))?(new cljs.core.IndexedSeq(args__26917__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40621){
var map__40622 = p__40621;
var map__40622__$1 = ((((!((map__40622 == null)))?((((map__40622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40622):map__40622);
var opts = map__40622__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40620){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40620));
});

//# sourceMappingURL=client.js.map