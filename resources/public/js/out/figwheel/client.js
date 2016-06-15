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
var pred__38153 = cljs.core._EQ_;
var expr__38154 = (function (){var or__24089__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38153.call(null,"true",expr__38154))){
return true;
} else {
if(cljs.core.truth_(pred__38153.call(null,"false",expr__38154))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38154)].join('')));
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
var G__38156__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38157__i = 0, G__38157__a = new Array(arguments.length -  0);
while (G__38157__i < G__38157__a.length) {G__38157__a[G__38157__i] = arguments[G__38157__i + 0]; ++G__38157__i;}
  args = new cljs.core.IndexedSeq(G__38157__a,0);
} 
return G__38156__delegate.call(this,args);};
G__38156.cljs$lang$maxFixedArity = 0;
G__38156.cljs$lang$applyTo = (function (arglist__38158){
var args = cljs.core.seq(arglist__38158);
return G__38156__delegate(args);
});
G__38156.cljs$core$IFn$_invoke$arity$variadic = G__38156__delegate;
return G__38156;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38159){
var map__38162 = p__38159;
var map__38162__$1 = ((((!((map__38162 == null)))?((((map__38162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38162):map__38162);
var message = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38162__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24089__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24089__auto__)){
return or__24089__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24077__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24077__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24077__auto__;
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
var c__28220__auto___38324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___38324,ch){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___38324,ch){
return (function (state_38293){
var state_val_38294 = (state_38293[(1)]);
if((state_val_38294 === (7))){
var inst_38289 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38295_38325 = state_38293__$1;
(statearr_38295_38325[(2)] = inst_38289);

(statearr_38295_38325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (1))){
var state_38293__$1 = state_38293;
var statearr_38296_38326 = state_38293__$1;
(statearr_38296_38326[(2)] = null);

(statearr_38296_38326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (4))){
var inst_38246 = (state_38293[(7)]);
var inst_38246__$1 = (state_38293[(2)]);
var state_38293__$1 = (function (){var statearr_38297 = state_38293;
(statearr_38297[(7)] = inst_38246__$1);

return statearr_38297;
})();
if(cljs.core.truth_(inst_38246__$1)){
var statearr_38298_38327 = state_38293__$1;
(statearr_38298_38327[(1)] = (5));

} else {
var statearr_38299_38328 = state_38293__$1;
(statearr_38299_38328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (15))){
var inst_38253 = (state_38293[(8)]);
var inst_38268 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38253);
var inst_38269 = cljs.core.first.call(null,inst_38268);
var inst_38270 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38269);
var inst_38271 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38270)].join('');
var inst_38272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38271);
var state_38293__$1 = state_38293;
var statearr_38300_38329 = state_38293__$1;
(statearr_38300_38329[(2)] = inst_38272);

(statearr_38300_38329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (13))){
var inst_38277 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38301_38330 = state_38293__$1;
(statearr_38301_38330[(2)] = inst_38277);

(statearr_38301_38330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (6))){
var state_38293__$1 = state_38293;
var statearr_38302_38331 = state_38293__$1;
(statearr_38302_38331[(2)] = null);

(statearr_38302_38331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (17))){
var inst_38275 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38303_38332 = state_38293__$1;
(statearr_38303_38332[(2)] = inst_38275);

(statearr_38303_38332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (3))){
var inst_38291 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38293__$1,inst_38291);
} else {
if((state_val_38294 === (12))){
var inst_38252 = (state_38293[(9)]);
var inst_38266 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38252,opts);
var state_38293__$1 = state_38293;
if(cljs.core.truth_(inst_38266)){
var statearr_38304_38333 = state_38293__$1;
(statearr_38304_38333[(1)] = (15));

} else {
var statearr_38305_38334 = state_38293__$1;
(statearr_38305_38334[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (2))){
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38293__$1,(4),ch);
} else {
if((state_val_38294 === (11))){
var inst_38253 = (state_38293[(8)]);
var inst_38258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38259 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38253);
var inst_38260 = cljs.core.async.timeout.call(null,(1000));
var inst_38261 = [inst_38259,inst_38260];
var inst_38262 = (new cljs.core.PersistentVector(null,2,(5),inst_38258,inst_38261,null));
var state_38293__$1 = state_38293;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38293__$1,(14),inst_38262);
} else {
if((state_val_38294 === (9))){
var inst_38253 = (state_38293[(8)]);
var inst_38279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38280 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38253);
var inst_38281 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38280);
var inst_38282 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38281)].join('');
var inst_38283 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38282);
var state_38293__$1 = (function (){var statearr_38306 = state_38293;
(statearr_38306[(10)] = inst_38279);

return statearr_38306;
})();
var statearr_38307_38335 = state_38293__$1;
(statearr_38307_38335[(2)] = inst_38283);

(statearr_38307_38335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (5))){
var inst_38246 = (state_38293[(7)]);
var inst_38248 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38249 = (new cljs.core.PersistentArrayMap(null,2,inst_38248,null));
var inst_38250 = (new cljs.core.PersistentHashSet(null,inst_38249,null));
var inst_38251 = figwheel.client.focus_msgs.call(null,inst_38250,inst_38246);
var inst_38252 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38251);
var inst_38253 = cljs.core.first.call(null,inst_38251);
var inst_38254 = figwheel.client.autoload_QMARK_.call(null);
var state_38293__$1 = (function (){var statearr_38308 = state_38293;
(statearr_38308[(8)] = inst_38253);

(statearr_38308[(9)] = inst_38252);

return statearr_38308;
})();
if(cljs.core.truth_(inst_38254)){
var statearr_38309_38336 = state_38293__$1;
(statearr_38309_38336[(1)] = (8));

} else {
var statearr_38310_38337 = state_38293__$1;
(statearr_38310_38337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (14))){
var inst_38264 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38311_38338 = state_38293__$1;
(statearr_38311_38338[(2)] = inst_38264);

(statearr_38311_38338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (16))){
var state_38293__$1 = state_38293;
var statearr_38312_38339 = state_38293__$1;
(statearr_38312_38339[(2)] = null);

(statearr_38312_38339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (10))){
var inst_38285 = (state_38293[(2)]);
var state_38293__$1 = (function (){var statearr_38313 = state_38293;
(statearr_38313[(11)] = inst_38285);

return statearr_38313;
})();
var statearr_38314_38340 = state_38293__$1;
(statearr_38314_38340[(2)] = null);

(statearr_38314_38340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (8))){
var inst_38252 = (state_38293[(9)]);
var inst_38256 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38252,opts);
var state_38293__$1 = state_38293;
if(cljs.core.truth_(inst_38256)){
var statearr_38315_38341 = state_38293__$1;
(statearr_38315_38341[(1)] = (11));

} else {
var statearr_38316_38342 = state_38293__$1;
(statearr_38316_38342[(1)] = (12));

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
});})(c__28220__auto___38324,ch))
;
return ((function (switch__28108__auto__,c__28220__auto___38324,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____0 = (function (){
var statearr_38320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38320[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__);

(statearr_38320[(1)] = (1));

return statearr_38320;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____1 = (function (state_38293){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38321){if((e38321 instanceof Object)){
var ex__28112__auto__ = e38321;
var statearr_38322_38343 = state_38293;
(statearr_38322_38343[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38344 = state_38293;
state_38293 = G__38344;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__ = function(state_38293){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____1.call(this,state_38293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28109__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___38324,ch))
})();
var state__28222__auto__ = (function (){var statearr_38323 = f__28221__auto__.call(null);
(statearr_38323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___38324);

return statearr_38323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___38324,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38345_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38345_SHARP_));
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
var base_path_38352 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38352){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_38350 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38351 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38350,_STAR_print_newline_STAR_38351,base_path_38352){
return (function() { 
var G__38353__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38354__i = 0, G__38354__a = new Array(arguments.length -  0);
while (G__38354__i < G__38354__a.length) {G__38354__a[G__38354__i] = arguments[G__38354__i + 0]; ++G__38354__i;}
  args = new cljs.core.IndexedSeq(G__38354__a,0);
} 
return G__38353__delegate.call(this,args);};
G__38353.cljs$lang$maxFixedArity = 0;
G__38353.cljs$lang$applyTo = (function (arglist__38355){
var args = cljs.core.seq(arglist__38355);
return G__38353__delegate(args);
});
G__38353.cljs$core$IFn$_invoke$arity$variadic = G__38353__delegate;
return G__38353;
})()
;})(_STAR_print_fn_STAR_38350,_STAR_print_newline_STAR_38351,base_path_38352))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38351;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38350;
}}catch (e38349){if((e38349 instanceof Error)){
var e = e38349;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38352], null));
} else {
var e = e38349;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38352))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38356){
var map__38363 = p__38356;
var map__38363__$1 = ((((!((map__38363 == null)))?((((map__38363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38363):map__38363);
var opts = map__38363__$1;
var build_id = cljs.core.get.call(null,map__38363__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38363,map__38363__$1,opts,build_id){
return (function (p__38365){
var vec__38366 = p__38365;
var map__38367 = cljs.core.nth.call(null,vec__38366,(0),null);
var map__38367__$1 = ((((!((map__38367 == null)))?((((map__38367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38367):map__38367);
var msg = map__38367__$1;
var msg_name = cljs.core.get.call(null,map__38367__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38366,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38366,map__38367,map__38367__$1,msg,msg_name,_,map__38363,map__38363__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38366,map__38367,map__38367__$1,msg,msg_name,_,map__38363,map__38363__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38363,map__38363__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38373){
var vec__38374 = p__38373;
var map__38375 = cljs.core.nth.call(null,vec__38374,(0),null);
var map__38375__$1 = ((((!((map__38375 == null)))?((((map__38375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38375):map__38375);
var msg = map__38375__$1;
var msg_name = cljs.core.get.call(null,map__38375__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38374,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38377){
var map__38387 = p__38377;
var map__38387__$1 = ((((!((map__38387 == null)))?((((map__38387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38387):map__38387);
var on_compile_warning = cljs.core.get.call(null,map__38387__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38387__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38387,map__38387__$1,on_compile_warning,on_compile_fail){
return (function (p__38389){
var vec__38390 = p__38389;
var map__38391 = cljs.core.nth.call(null,vec__38390,(0),null);
var map__38391__$1 = ((((!((map__38391 == null)))?((((map__38391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38391):map__38391);
var msg = map__38391__$1;
var msg_name = cljs.core.get.call(null,map__38391__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38390,(1));
var pred__38393 = cljs.core._EQ_;
var expr__38394 = msg_name;
if(cljs.core.truth_(pred__38393.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38394))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38393.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38394))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38387,map__38387__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__,msg_hist,msg_names,msg){
return (function (state_38610){
var state_val_38611 = (state_38610[(1)]);
if((state_val_38611 === (7))){
var inst_38534 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38534)){
var statearr_38612_38658 = state_38610__$1;
(statearr_38612_38658[(1)] = (8));

} else {
var statearr_38613_38659 = state_38610__$1;
(statearr_38613_38659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (20))){
var inst_38604 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38614_38660 = state_38610__$1;
(statearr_38614_38660[(2)] = inst_38604);

(statearr_38614_38660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (27))){
var inst_38600 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38615_38661 = state_38610__$1;
(statearr_38615_38661[(2)] = inst_38600);

(statearr_38615_38661[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (1))){
var inst_38527 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38527)){
var statearr_38616_38662 = state_38610__$1;
(statearr_38616_38662[(1)] = (2));

} else {
var statearr_38617_38663 = state_38610__$1;
(statearr_38617_38663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (24))){
var inst_38602 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38618_38664 = state_38610__$1;
(statearr_38618_38664[(2)] = inst_38602);

(statearr_38618_38664[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (4))){
var inst_38608 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38610__$1,inst_38608);
} else {
if((state_val_38611 === (15))){
var inst_38606 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38619_38665 = state_38610__$1;
(statearr_38619_38665[(2)] = inst_38606);

(statearr_38619_38665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (21))){
var inst_38565 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38620_38666 = state_38610__$1;
(statearr_38620_38666[(2)] = inst_38565);

(statearr_38620_38666[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (31))){
var inst_38589 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38589)){
var statearr_38621_38667 = state_38610__$1;
(statearr_38621_38667[(1)] = (34));

} else {
var statearr_38622_38668 = state_38610__$1;
(statearr_38622_38668[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (32))){
var inst_38598 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38623_38669 = state_38610__$1;
(statearr_38623_38669[(2)] = inst_38598);

(statearr_38623_38669[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (33))){
var inst_38587 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38624_38670 = state_38610__$1;
(statearr_38624_38670[(2)] = inst_38587);

(statearr_38624_38670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (13))){
var inst_38548 = figwheel.client.heads_up.clear.call(null);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(16),inst_38548);
} else {
if((state_val_38611 === (22))){
var inst_38569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38570 = figwheel.client.heads_up.append_message.call(null,inst_38569);
var state_38610__$1 = state_38610;
var statearr_38625_38671 = state_38610__$1;
(statearr_38625_38671[(2)] = inst_38570);

(statearr_38625_38671[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (36))){
var inst_38596 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38626_38672 = state_38610__$1;
(statearr_38626_38672[(2)] = inst_38596);

(statearr_38626_38672[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (29))){
var inst_38580 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38627_38673 = state_38610__$1;
(statearr_38627_38673[(2)] = inst_38580);

(statearr_38627_38673[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (6))){
var inst_38529 = (state_38610[(7)]);
var state_38610__$1 = state_38610;
var statearr_38628_38674 = state_38610__$1;
(statearr_38628_38674[(2)] = inst_38529);

(statearr_38628_38674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (28))){
var inst_38576 = (state_38610[(2)]);
var inst_38577 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38578 = figwheel.client.heads_up.display_warning.call(null,inst_38577);
var state_38610__$1 = (function (){var statearr_38629 = state_38610;
(statearr_38629[(8)] = inst_38576);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(29),inst_38578);
} else {
if((state_val_38611 === (25))){
var inst_38574 = figwheel.client.heads_up.clear.call(null);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(28),inst_38574);
} else {
if((state_val_38611 === (34))){
var inst_38591 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(37),inst_38591);
} else {
if((state_val_38611 === (17))){
var inst_38556 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38630_38675 = state_38610__$1;
(statearr_38630_38675[(2)] = inst_38556);

(statearr_38630_38675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (3))){
var inst_38546 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38546)){
var statearr_38631_38676 = state_38610__$1;
(statearr_38631_38676[(1)] = (13));

} else {
var statearr_38632_38677 = state_38610__$1;
(statearr_38632_38677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (12))){
var inst_38542 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38633_38678 = state_38610__$1;
(statearr_38633_38678[(2)] = inst_38542);

(statearr_38633_38678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (2))){
var inst_38529 = (state_38610[(7)]);
var inst_38529__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38610__$1 = (function (){var statearr_38634 = state_38610;
(statearr_38634[(7)] = inst_38529__$1);

return statearr_38634;
})();
if(cljs.core.truth_(inst_38529__$1)){
var statearr_38635_38679 = state_38610__$1;
(statearr_38635_38679[(1)] = (5));

} else {
var statearr_38636_38680 = state_38610__$1;
(statearr_38636_38680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (23))){
var inst_38572 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38572)){
var statearr_38637_38681 = state_38610__$1;
(statearr_38637_38681[(1)] = (25));

} else {
var statearr_38638_38682 = state_38610__$1;
(statearr_38638_38682[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (35))){
var state_38610__$1 = state_38610;
var statearr_38639_38683 = state_38610__$1;
(statearr_38639_38683[(2)] = null);

(statearr_38639_38683[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (19))){
var inst_38567 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38567)){
var statearr_38640_38684 = state_38610__$1;
(statearr_38640_38684[(1)] = (22));

} else {
var statearr_38641_38685 = state_38610__$1;
(statearr_38641_38685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (11))){
var inst_38538 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38642_38686 = state_38610__$1;
(statearr_38642_38686[(2)] = inst_38538);

(statearr_38642_38686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (9))){
var inst_38540 = figwheel.client.heads_up.clear.call(null);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(12),inst_38540);
} else {
if((state_val_38611 === (5))){
var inst_38531 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38610__$1 = state_38610;
var statearr_38643_38687 = state_38610__$1;
(statearr_38643_38687[(2)] = inst_38531);

(statearr_38643_38687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (14))){
var inst_38558 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38558)){
var statearr_38644_38688 = state_38610__$1;
(statearr_38644_38688[(1)] = (18));

} else {
var statearr_38645_38689 = state_38610__$1;
(statearr_38645_38689[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (26))){
var inst_38582 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38610__$1 = state_38610;
if(cljs.core.truth_(inst_38582)){
var statearr_38646_38690 = state_38610__$1;
(statearr_38646_38690[(1)] = (30));

} else {
var statearr_38647_38691 = state_38610__$1;
(statearr_38647_38691[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (16))){
var inst_38550 = (state_38610[(2)]);
var inst_38551 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38552 = figwheel.client.format_messages.call(null,inst_38551);
var inst_38553 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38554 = figwheel.client.heads_up.display_error.call(null,inst_38552,inst_38553);
var state_38610__$1 = (function (){var statearr_38648 = state_38610;
(statearr_38648[(9)] = inst_38550);

return statearr_38648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(17),inst_38554);
} else {
if((state_val_38611 === (30))){
var inst_38584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38585 = figwheel.client.heads_up.display_warning.call(null,inst_38584);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(33),inst_38585);
} else {
if((state_val_38611 === (10))){
var inst_38544 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38649_38692 = state_38610__$1;
(statearr_38649_38692[(2)] = inst_38544);

(statearr_38649_38692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (18))){
var inst_38560 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38561 = figwheel.client.format_messages.call(null,inst_38560);
var inst_38562 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38563 = figwheel.client.heads_up.display_error.call(null,inst_38561,inst_38562);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(21),inst_38563);
} else {
if((state_val_38611 === (37))){
var inst_38593 = (state_38610[(2)]);
var state_38610__$1 = state_38610;
var statearr_38650_38693 = state_38610__$1;
(statearr_38650_38693[(2)] = inst_38593);

(statearr_38650_38693[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38611 === (8))){
var inst_38536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38610__$1 = state_38610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38610__$1,(11),inst_38536);
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
});})(c__28220__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28108__auto__,c__28220__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____0 = (function (){
var statearr_38654 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38654[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__);

(statearr_38654[(1)] = (1));

return statearr_38654;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____1 = (function (state_38610){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38655){if((e38655 instanceof Object)){
var ex__28112__auto__ = e38655;
var statearr_38656_38694 = state_38610;
(statearr_38656_38694[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38695 = state_38610;
state_38610 = G__38695;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__ = function(state_38610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____1.call(this,state_38610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__,msg_hist,msg_names,msg))
})();
var state__28222__auto__ = (function (){var statearr_38657 = f__28221__auto__.call(null);
(statearr_38657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_38657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__,msg_hist,msg_names,msg))
);

return c__28220__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28220__auto___38758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto___38758,ch){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto___38758,ch){
return (function (state_38741){
var state_val_38742 = (state_38741[(1)]);
if((state_val_38742 === (1))){
var state_38741__$1 = state_38741;
var statearr_38743_38759 = state_38741__$1;
(statearr_38743_38759[(2)] = null);

(statearr_38743_38759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (2))){
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38741__$1,(4),ch);
} else {
if((state_val_38742 === (3))){
var inst_38739 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38741__$1,inst_38739);
} else {
if((state_val_38742 === (4))){
var inst_38729 = (state_38741[(7)]);
var inst_38729__$1 = (state_38741[(2)]);
var state_38741__$1 = (function (){var statearr_38744 = state_38741;
(statearr_38744[(7)] = inst_38729__$1);

return statearr_38744;
})();
if(cljs.core.truth_(inst_38729__$1)){
var statearr_38745_38760 = state_38741__$1;
(statearr_38745_38760[(1)] = (5));

} else {
var statearr_38746_38761 = state_38741__$1;
(statearr_38746_38761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (5))){
var inst_38729 = (state_38741[(7)]);
var inst_38731 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38729);
var state_38741__$1 = state_38741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38741__$1,(8),inst_38731);
} else {
if((state_val_38742 === (6))){
var state_38741__$1 = state_38741;
var statearr_38747_38762 = state_38741__$1;
(statearr_38747_38762[(2)] = null);

(statearr_38747_38762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (7))){
var inst_38737 = (state_38741[(2)]);
var state_38741__$1 = state_38741;
var statearr_38748_38763 = state_38741__$1;
(statearr_38748_38763[(2)] = inst_38737);

(statearr_38748_38763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38742 === (8))){
var inst_38733 = (state_38741[(2)]);
var state_38741__$1 = (function (){var statearr_38749 = state_38741;
(statearr_38749[(8)] = inst_38733);

return statearr_38749;
})();
var statearr_38750_38764 = state_38741__$1;
(statearr_38750_38764[(2)] = null);

(statearr_38750_38764[(1)] = (2));


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
});})(c__28220__auto___38758,ch))
;
return ((function (switch__28108__auto__,c__28220__auto___38758,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28109__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28109__auto____0 = (function (){
var statearr_38754 = [null,null,null,null,null,null,null,null,null];
(statearr_38754[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28109__auto__);

(statearr_38754[(1)] = (1));

return statearr_38754;
});
var figwheel$client$heads_up_plugin_$_state_machine__28109__auto____1 = (function (state_38741){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38755){if((e38755 instanceof Object)){
var ex__28112__auto__ = e38755;
var statearr_38756_38765 = state_38741;
(statearr_38756_38765[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38766 = state_38741;
state_38741 = G__38766;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28109__auto__ = function(state_38741){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28109__auto____1.call(this,state_38741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28109__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28109__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto___38758,ch))
})();
var state__28222__auto__ = (function (){var statearr_38757 = f__28221__auto__.call(null);
(statearr_38757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto___38758);

return statearr_38757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto___38758,ch))
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
var c__28220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28220__auto__){
return (function (){
var f__28221__auto__ = (function (){var switch__28108__auto__ = ((function (c__28220__auto__){
return (function (state_38787){
var state_val_38788 = (state_38787[(1)]);
if((state_val_38788 === (1))){
var inst_38782 = cljs.core.async.timeout.call(null,(3000));
var state_38787__$1 = state_38787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38787__$1,(2),inst_38782);
} else {
if((state_val_38788 === (2))){
var inst_38784 = (state_38787[(2)]);
var inst_38785 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38787__$1 = (function (){var statearr_38789 = state_38787;
(statearr_38789[(7)] = inst_38784);

return statearr_38789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38787__$1,inst_38785);
} else {
return null;
}
}
});})(c__28220__auto__))
;
return ((function (switch__28108__auto__,c__28220__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____0 = (function (){
var statearr_38793 = [null,null,null,null,null,null,null,null];
(statearr_38793[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__);

(statearr_38793[(1)] = (1));

return statearr_38793;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____1 = (function (state_38787){
while(true){
var ret_value__28110__auto__ = (function (){try{while(true){
var result__28111__auto__ = switch__28108__auto__.call(null,state_38787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28111__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28111__auto__;
}
break;
}
}catch (e38794){if((e38794 instanceof Object)){
var ex__28112__auto__ = e38794;
var statearr_38795_38797 = state_38787;
(statearr_38795_38797[(5)] = ex__28112__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28110__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38798 = state_38787;
state_38787 = G__38798;
continue;
} else {
return ret_value__28110__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__ = function(state_38787){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____1.call(this,state_38787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28109__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28109__auto__;
})()
;})(switch__28108__auto__,c__28220__auto__))
})();
var state__28222__auto__ = (function (){var statearr_38796 = f__28221__auto__.call(null);
(statearr_38796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28220__auto__);

return statearr_38796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28222__auto__);
});})(c__28220__auto__))
);

return c__28220__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38799){
var map__38806 = p__38799;
var map__38806__$1 = ((((!((map__38806 == null)))?((((map__38806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38806):map__38806);
var ed = map__38806__$1;
var formatted_exception = cljs.core.get.call(null,map__38806__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38806__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38806__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38808_38812 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38809_38813 = null;
var count__38810_38814 = (0);
var i__38811_38815 = (0);
while(true){
if((i__38811_38815 < count__38810_38814)){
var msg_38816 = cljs.core._nth.call(null,chunk__38809_38813,i__38811_38815);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38816);

var G__38817 = seq__38808_38812;
var G__38818 = chunk__38809_38813;
var G__38819 = count__38810_38814;
var G__38820 = (i__38811_38815 + (1));
seq__38808_38812 = G__38817;
chunk__38809_38813 = G__38818;
count__38810_38814 = G__38819;
i__38811_38815 = G__38820;
continue;
} else {
var temp__4425__auto___38821 = cljs.core.seq.call(null,seq__38808_38812);
if(temp__4425__auto___38821){
var seq__38808_38822__$1 = temp__4425__auto___38821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38808_38822__$1)){
var c__24900__auto___38823 = cljs.core.chunk_first.call(null,seq__38808_38822__$1);
var G__38824 = cljs.core.chunk_rest.call(null,seq__38808_38822__$1);
var G__38825 = c__24900__auto___38823;
var G__38826 = cljs.core.count.call(null,c__24900__auto___38823);
var G__38827 = (0);
seq__38808_38812 = G__38824;
chunk__38809_38813 = G__38825;
count__38810_38814 = G__38826;
i__38811_38815 = G__38827;
continue;
} else {
var msg_38828 = cljs.core.first.call(null,seq__38808_38822__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38828);

var G__38829 = cljs.core.next.call(null,seq__38808_38822__$1);
var G__38830 = null;
var G__38831 = (0);
var G__38832 = (0);
seq__38808_38812 = G__38829;
chunk__38809_38813 = G__38830;
count__38810_38814 = G__38831;
i__38811_38815 = G__38832;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38833){
var map__38836 = p__38833;
var map__38836__$1 = ((((!((map__38836 == null)))?((((map__38836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38836):map__38836);
var w = map__38836__$1;
var message = cljs.core.get.call(null,map__38836__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24077__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24077__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24077__auto__;
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
var seq__38844 = cljs.core.seq.call(null,plugins);
var chunk__38845 = null;
var count__38846 = (0);
var i__38847 = (0);
while(true){
if((i__38847 < count__38846)){
var vec__38848 = cljs.core._nth.call(null,chunk__38845,i__38847);
var k = cljs.core.nth.call(null,vec__38848,(0),null);
var plugin = cljs.core.nth.call(null,vec__38848,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38850 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38844,chunk__38845,count__38846,i__38847,pl_38850,vec__38848,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38850.call(null,msg_hist);
});})(seq__38844,chunk__38845,count__38846,i__38847,pl_38850,vec__38848,k,plugin))
);
} else {
}

var G__38851 = seq__38844;
var G__38852 = chunk__38845;
var G__38853 = count__38846;
var G__38854 = (i__38847 + (1));
seq__38844 = G__38851;
chunk__38845 = G__38852;
count__38846 = G__38853;
i__38847 = G__38854;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38844);
if(temp__4425__auto__){
var seq__38844__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38844__$1)){
var c__24900__auto__ = cljs.core.chunk_first.call(null,seq__38844__$1);
var G__38855 = cljs.core.chunk_rest.call(null,seq__38844__$1);
var G__38856 = c__24900__auto__;
var G__38857 = cljs.core.count.call(null,c__24900__auto__);
var G__38858 = (0);
seq__38844 = G__38855;
chunk__38845 = G__38856;
count__38846 = G__38857;
i__38847 = G__38858;
continue;
} else {
var vec__38849 = cljs.core.first.call(null,seq__38844__$1);
var k = cljs.core.nth.call(null,vec__38849,(0),null);
var plugin = cljs.core.nth.call(null,vec__38849,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38859 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38844,chunk__38845,count__38846,i__38847,pl_38859,vec__38849,k,plugin,seq__38844__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38859.call(null,msg_hist);
});})(seq__38844,chunk__38845,count__38846,i__38847,pl_38859,vec__38849,k,plugin,seq__38844__$1,temp__4425__auto__))
);
} else {
}

var G__38860 = cljs.core.next.call(null,seq__38844__$1);
var G__38861 = null;
var G__38862 = (0);
var G__38863 = (0);
seq__38844 = G__38860;
chunk__38845 = G__38861;
count__38846 = G__38862;
i__38847 = G__38863;
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
var args38864 = [];
var len__25159__auto___38867 = arguments.length;
var i__25160__auto___38868 = (0);
while(true){
if((i__25160__auto___38868 < len__25159__auto___38867)){
args38864.push((arguments[i__25160__auto___38868]));

var G__38869 = (i__25160__auto___38868 + (1));
i__25160__auto___38868 = G__38869;
continue;
} else {
}
break;
}

var G__38866 = args38864.length;
switch (G__38866) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38864.length)].join('')));

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
var args__25166__auto__ = [];
var len__25159__auto___38875 = arguments.length;
var i__25160__auto___38876 = (0);
while(true){
if((i__25160__auto___38876 < len__25159__auto___38875)){
args__25166__auto__.push((arguments[i__25160__auto___38876]));

var G__38877 = (i__25160__auto___38876 + (1));
i__25160__auto___38876 = G__38877;
continue;
} else {
}
break;
}

var argseq__25167__auto__ = ((((0) < args__25166__auto__.length))?(new cljs.core.IndexedSeq(args__25166__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25167__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38872){
var map__38873 = p__38872;
var map__38873__$1 = ((((!((map__38873 == null)))?((((map__38873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38873):map__38873);
var opts = map__38873__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38871){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38871));
});

//# sourceMappingURL=client.js.map