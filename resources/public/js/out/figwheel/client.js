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
var pred__39809 = cljs.core._EQ_;
var expr__39810 = (function (){var or__25812__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39809.call(null,"true",expr__39810))){
return true;
} else {
if(cljs.core.truth_(pred__39809.call(null,"false",expr__39810))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39810)].join('')));
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
var G__39812__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39813__i = 0, G__39813__a = new Array(arguments.length -  0);
while (G__39813__i < G__39813__a.length) {G__39813__a[G__39813__i] = arguments[G__39813__i + 0]; ++G__39813__i;}
  args = new cljs.core.IndexedSeq(G__39813__a,0);
} 
return G__39812__delegate.call(this,args);};
G__39812.cljs$lang$maxFixedArity = 0;
G__39812.cljs$lang$applyTo = (function (arglist__39814){
var args = cljs.core.seq(arglist__39814);
return G__39812__delegate(args);
});
G__39812.cljs$core$IFn$_invoke$arity$variadic = G__39812__delegate;
return G__39812;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39815){
var map__39818 = p__39815;
var map__39818__$1 = ((((!((map__39818 == null)))?((((map__39818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39818):map__39818);
var message = cljs.core.get.call(null,map__39818__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39818__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25812__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25800__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25800__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25800__auto__;
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
var c__29943__auto___39980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___39980,ch){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___39980,ch){
return (function (state_39949){
var state_val_39950 = (state_39949[(1)]);
if((state_val_39950 === (7))){
var inst_39945 = (state_39949[(2)]);
var state_39949__$1 = state_39949;
var statearr_39951_39981 = state_39949__$1;
(statearr_39951_39981[(2)] = inst_39945);

(statearr_39951_39981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (1))){
var state_39949__$1 = state_39949;
var statearr_39952_39982 = state_39949__$1;
(statearr_39952_39982[(2)] = null);

(statearr_39952_39982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (4))){
var inst_39902 = (state_39949[(7)]);
var inst_39902__$1 = (state_39949[(2)]);
var state_39949__$1 = (function (){var statearr_39953 = state_39949;
(statearr_39953[(7)] = inst_39902__$1);

return statearr_39953;
})();
if(cljs.core.truth_(inst_39902__$1)){
var statearr_39954_39983 = state_39949__$1;
(statearr_39954_39983[(1)] = (5));

} else {
var statearr_39955_39984 = state_39949__$1;
(statearr_39955_39984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (15))){
var inst_39909 = (state_39949[(8)]);
var inst_39924 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39909);
var inst_39925 = cljs.core.first.call(null,inst_39924);
var inst_39926 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39925);
var inst_39927 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39926)].join('');
var inst_39928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39927);
var state_39949__$1 = state_39949;
var statearr_39956_39985 = state_39949__$1;
(statearr_39956_39985[(2)] = inst_39928);

(statearr_39956_39985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (13))){
var inst_39933 = (state_39949[(2)]);
var state_39949__$1 = state_39949;
var statearr_39957_39986 = state_39949__$1;
(statearr_39957_39986[(2)] = inst_39933);

(statearr_39957_39986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (6))){
var state_39949__$1 = state_39949;
var statearr_39958_39987 = state_39949__$1;
(statearr_39958_39987[(2)] = null);

(statearr_39958_39987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (17))){
var inst_39931 = (state_39949[(2)]);
var state_39949__$1 = state_39949;
var statearr_39959_39988 = state_39949__$1;
(statearr_39959_39988[(2)] = inst_39931);

(statearr_39959_39988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (3))){
var inst_39947 = (state_39949[(2)]);
var state_39949__$1 = state_39949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39949__$1,inst_39947);
} else {
if((state_val_39950 === (12))){
var inst_39908 = (state_39949[(9)]);
var inst_39922 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39908,opts);
var state_39949__$1 = state_39949;
if(cljs.core.truth_(inst_39922)){
var statearr_39960_39989 = state_39949__$1;
(statearr_39960_39989[(1)] = (15));

} else {
var statearr_39961_39990 = state_39949__$1;
(statearr_39961_39990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (2))){
var state_39949__$1 = state_39949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39949__$1,(4),ch);
} else {
if((state_val_39950 === (11))){
var inst_39909 = (state_39949[(8)]);
var inst_39914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39915 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39909);
var inst_39916 = cljs.core.async.timeout.call(null,(1000));
var inst_39917 = [inst_39915,inst_39916];
var inst_39918 = (new cljs.core.PersistentVector(null,2,(5),inst_39914,inst_39917,null));
var state_39949__$1 = state_39949;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39949__$1,(14),inst_39918);
} else {
if((state_val_39950 === (9))){
var inst_39909 = (state_39949[(8)]);
var inst_39935 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39936 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39909);
var inst_39937 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39936);
var inst_39938 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39937)].join('');
var inst_39939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39938);
var state_39949__$1 = (function (){var statearr_39962 = state_39949;
(statearr_39962[(10)] = inst_39935);

return statearr_39962;
})();
var statearr_39963_39991 = state_39949__$1;
(statearr_39963_39991[(2)] = inst_39939);

(statearr_39963_39991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (5))){
var inst_39902 = (state_39949[(7)]);
var inst_39904 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39905 = (new cljs.core.PersistentArrayMap(null,2,inst_39904,null));
var inst_39906 = (new cljs.core.PersistentHashSet(null,inst_39905,null));
var inst_39907 = figwheel.client.focus_msgs.call(null,inst_39906,inst_39902);
var inst_39908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39907);
var inst_39909 = cljs.core.first.call(null,inst_39907);
var inst_39910 = figwheel.client.autoload_QMARK_.call(null);
var state_39949__$1 = (function (){var statearr_39964 = state_39949;
(statearr_39964[(8)] = inst_39909);

(statearr_39964[(9)] = inst_39908);

return statearr_39964;
})();
if(cljs.core.truth_(inst_39910)){
var statearr_39965_39992 = state_39949__$1;
(statearr_39965_39992[(1)] = (8));

} else {
var statearr_39966_39993 = state_39949__$1;
(statearr_39966_39993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (14))){
var inst_39920 = (state_39949[(2)]);
var state_39949__$1 = state_39949;
var statearr_39967_39994 = state_39949__$1;
(statearr_39967_39994[(2)] = inst_39920);

(statearr_39967_39994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (16))){
var state_39949__$1 = state_39949;
var statearr_39968_39995 = state_39949__$1;
(statearr_39968_39995[(2)] = null);

(statearr_39968_39995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (10))){
var inst_39941 = (state_39949[(2)]);
var state_39949__$1 = (function (){var statearr_39969 = state_39949;
(statearr_39969[(11)] = inst_39941);

return statearr_39969;
})();
var statearr_39970_39996 = state_39949__$1;
(statearr_39970_39996[(2)] = null);

(statearr_39970_39996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39950 === (8))){
var inst_39908 = (state_39949[(9)]);
var inst_39912 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39908,opts);
var state_39949__$1 = state_39949;
if(cljs.core.truth_(inst_39912)){
var statearr_39971_39997 = state_39949__$1;
(statearr_39971_39997[(1)] = (11));

} else {
var statearr_39972_39998 = state_39949__$1;
(statearr_39972_39998[(1)] = (12));

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
});})(c__29943__auto___39980,ch))
;
return ((function (switch__29831__auto__,c__29943__auto___39980,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____0 = (function (){
var statearr_39976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39976[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__);

(statearr_39976[(1)] = (1));

return statearr_39976;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____1 = (function (state_39949){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_39949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e39977){if((e39977 instanceof Object)){
var ex__29835__auto__ = e39977;
var statearr_39978_39999 = state_39949;
(statearr_39978_39999[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40000 = state_39949;
state_39949 = G__40000;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__ = function(state_39949){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____1.call(this,state_39949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29832__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___39980,ch))
})();
var state__29945__auto__ = (function (){var statearr_39979 = f__29944__auto__.call(null);
(statearr_39979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___39980);

return statearr_39979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___39980,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40001_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40001_SHARP_));
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
var base_path_40008 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40008){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40007 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40006,_STAR_print_newline_STAR_40007,base_path_40008){
return (function() { 
var G__40009__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40010__i = 0, G__40010__a = new Array(arguments.length -  0);
while (G__40010__i < G__40010__a.length) {G__40010__a[G__40010__i] = arguments[G__40010__i + 0]; ++G__40010__i;}
  args = new cljs.core.IndexedSeq(G__40010__a,0);
} 
return G__40009__delegate.call(this,args);};
G__40009.cljs$lang$maxFixedArity = 0;
G__40009.cljs$lang$applyTo = (function (arglist__40011){
var args = cljs.core.seq(arglist__40011);
return G__40009__delegate(args);
});
G__40009.cljs$core$IFn$_invoke$arity$variadic = G__40009__delegate;
return G__40009;
})()
;})(_STAR_print_fn_STAR_40006,_STAR_print_newline_STAR_40007,base_path_40008))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40007;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40006;
}}catch (e40005){if((e40005 instanceof Error)){
var e = e40005;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40008], null));
} else {
var e = e40005;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40008))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40012){
var map__40019 = p__40012;
var map__40019__$1 = ((((!((map__40019 == null)))?((((map__40019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40019):map__40019);
var opts = map__40019__$1;
var build_id = cljs.core.get.call(null,map__40019__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40019,map__40019__$1,opts,build_id){
return (function (p__40021){
var vec__40022 = p__40021;
var map__40023 = cljs.core.nth.call(null,vec__40022,(0),null);
var map__40023__$1 = ((((!((map__40023 == null)))?((((map__40023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40023):map__40023);
var msg = map__40023__$1;
var msg_name = cljs.core.get.call(null,map__40023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40022,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40022,map__40023,map__40023__$1,msg,msg_name,_,map__40019,map__40019__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40022,map__40023,map__40023__$1,msg,msg_name,_,map__40019,map__40019__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40019,map__40019__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40029){
var vec__40030 = p__40029;
var map__40031 = cljs.core.nth.call(null,vec__40030,(0),null);
var map__40031__$1 = ((((!((map__40031 == null)))?((((map__40031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40031):map__40031);
var msg = map__40031__$1;
var msg_name = cljs.core.get.call(null,map__40031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40030,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40033){
var map__40043 = p__40033;
var map__40043__$1 = ((((!((map__40043 == null)))?((((map__40043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40043):map__40043);
var on_compile_warning = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40043,map__40043__$1,on_compile_warning,on_compile_fail){
return (function (p__40045){
var vec__40046 = p__40045;
var map__40047 = cljs.core.nth.call(null,vec__40046,(0),null);
var map__40047__$1 = ((((!((map__40047 == null)))?((((map__40047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40047):map__40047);
var msg = map__40047__$1;
var msg_name = cljs.core.get.call(null,map__40047__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40046,(1));
var pred__40049 = cljs.core._EQ_;
var expr__40050 = msg_name;
if(cljs.core.truth_(pred__40049.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40050))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40049.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40050))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40043,map__40043__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__,msg_hist,msg_names,msg){
return (function (state_40266){
var state_val_40267 = (state_40266[(1)]);
if((state_val_40267 === (7))){
var inst_40190 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40190)){
var statearr_40268_40314 = state_40266__$1;
(statearr_40268_40314[(1)] = (8));

} else {
var statearr_40269_40315 = state_40266__$1;
(statearr_40269_40315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (20))){
var inst_40260 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40270_40316 = state_40266__$1;
(statearr_40270_40316[(2)] = inst_40260);

(statearr_40270_40316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (27))){
var inst_40256 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40271_40317 = state_40266__$1;
(statearr_40271_40317[(2)] = inst_40256);

(statearr_40271_40317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (1))){
var inst_40183 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40183)){
var statearr_40272_40318 = state_40266__$1;
(statearr_40272_40318[(1)] = (2));

} else {
var statearr_40273_40319 = state_40266__$1;
(statearr_40273_40319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (24))){
var inst_40258 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40274_40320 = state_40266__$1;
(statearr_40274_40320[(2)] = inst_40258);

(statearr_40274_40320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (4))){
var inst_40264 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40266__$1,inst_40264);
} else {
if((state_val_40267 === (15))){
var inst_40262 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40275_40321 = state_40266__$1;
(statearr_40275_40321[(2)] = inst_40262);

(statearr_40275_40321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (21))){
var inst_40221 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40276_40322 = state_40266__$1;
(statearr_40276_40322[(2)] = inst_40221);

(statearr_40276_40322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (31))){
var inst_40245 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40245)){
var statearr_40277_40323 = state_40266__$1;
(statearr_40277_40323[(1)] = (34));

} else {
var statearr_40278_40324 = state_40266__$1;
(statearr_40278_40324[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (32))){
var inst_40254 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40279_40325 = state_40266__$1;
(statearr_40279_40325[(2)] = inst_40254);

(statearr_40279_40325[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (33))){
var inst_40243 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40280_40326 = state_40266__$1;
(statearr_40280_40326[(2)] = inst_40243);

(statearr_40280_40326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (13))){
var inst_40204 = figwheel.client.heads_up.clear.call(null);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(16),inst_40204);
} else {
if((state_val_40267 === (22))){
var inst_40225 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40226 = figwheel.client.heads_up.append_message.call(null,inst_40225);
var state_40266__$1 = state_40266;
var statearr_40281_40327 = state_40266__$1;
(statearr_40281_40327[(2)] = inst_40226);

(statearr_40281_40327[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (36))){
var inst_40252 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40282_40328 = state_40266__$1;
(statearr_40282_40328[(2)] = inst_40252);

(statearr_40282_40328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (29))){
var inst_40236 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40283_40329 = state_40266__$1;
(statearr_40283_40329[(2)] = inst_40236);

(statearr_40283_40329[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (6))){
var inst_40185 = (state_40266[(7)]);
var state_40266__$1 = state_40266;
var statearr_40284_40330 = state_40266__$1;
(statearr_40284_40330[(2)] = inst_40185);

(statearr_40284_40330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (28))){
var inst_40232 = (state_40266[(2)]);
var inst_40233 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40234 = figwheel.client.heads_up.display_warning.call(null,inst_40233);
var state_40266__$1 = (function (){var statearr_40285 = state_40266;
(statearr_40285[(8)] = inst_40232);

return statearr_40285;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(29),inst_40234);
} else {
if((state_val_40267 === (25))){
var inst_40230 = figwheel.client.heads_up.clear.call(null);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(28),inst_40230);
} else {
if((state_val_40267 === (34))){
var inst_40247 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(37),inst_40247);
} else {
if((state_val_40267 === (17))){
var inst_40212 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40286_40331 = state_40266__$1;
(statearr_40286_40331[(2)] = inst_40212);

(statearr_40286_40331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (3))){
var inst_40202 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40202)){
var statearr_40287_40332 = state_40266__$1;
(statearr_40287_40332[(1)] = (13));

} else {
var statearr_40288_40333 = state_40266__$1;
(statearr_40288_40333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (12))){
var inst_40198 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40289_40334 = state_40266__$1;
(statearr_40289_40334[(2)] = inst_40198);

(statearr_40289_40334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (2))){
var inst_40185 = (state_40266[(7)]);
var inst_40185__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40266__$1 = (function (){var statearr_40290 = state_40266;
(statearr_40290[(7)] = inst_40185__$1);

return statearr_40290;
})();
if(cljs.core.truth_(inst_40185__$1)){
var statearr_40291_40335 = state_40266__$1;
(statearr_40291_40335[(1)] = (5));

} else {
var statearr_40292_40336 = state_40266__$1;
(statearr_40292_40336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (23))){
var inst_40228 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40228)){
var statearr_40293_40337 = state_40266__$1;
(statearr_40293_40337[(1)] = (25));

} else {
var statearr_40294_40338 = state_40266__$1;
(statearr_40294_40338[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (35))){
var state_40266__$1 = state_40266;
var statearr_40295_40339 = state_40266__$1;
(statearr_40295_40339[(2)] = null);

(statearr_40295_40339[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (19))){
var inst_40223 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40223)){
var statearr_40296_40340 = state_40266__$1;
(statearr_40296_40340[(1)] = (22));

} else {
var statearr_40297_40341 = state_40266__$1;
(statearr_40297_40341[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (11))){
var inst_40194 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40298_40342 = state_40266__$1;
(statearr_40298_40342[(2)] = inst_40194);

(statearr_40298_40342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (9))){
var inst_40196 = figwheel.client.heads_up.clear.call(null);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(12),inst_40196);
} else {
if((state_val_40267 === (5))){
var inst_40187 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40266__$1 = state_40266;
var statearr_40299_40343 = state_40266__$1;
(statearr_40299_40343[(2)] = inst_40187);

(statearr_40299_40343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (14))){
var inst_40214 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40214)){
var statearr_40300_40344 = state_40266__$1;
(statearr_40300_40344[(1)] = (18));

} else {
var statearr_40301_40345 = state_40266__$1;
(statearr_40301_40345[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (26))){
var inst_40238 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40266__$1 = state_40266;
if(cljs.core.truth_(inst_40238)){
var statearr_40302_40346 = state_40266__$1;
(statearr_40302_40346[(1)] = (30));

} else {
var statearr_40303_40347 = state_40266__$1;
(statearr_40303_40347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (16))){
var inst_40206 = (state_40266[(2)]);
var inst_40207 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40208 = figwheel.client.format_messages.call(null,inst_40207);
var inst_40209 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40210 = figwheel.client.heads_up.display_error.call(null,inst_40208,inst_40209);
var state_40266__$1 = (function (){var statearr_40304 = state_40266;
(statearr_40304[(9)] = inst_40206);

return statearr_40304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(17),inst_40210);
} else {
if((state_val_40267 === (30))){
var inst_40240 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40241 = figwheel.client.heads_up.display_warning.call(null,inst_40240);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(33),inst_40241);
} else {
if((state_val_40267 === (10))){
var inst_40200 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40305_40348 = state_40266__$1;
(statearr_40305_40348[(2)] = inst_40200);

(statearr_40305_40348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (18))){
var inst_40216 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40217 = figwheel.client.format_messages.call(null,inst_40216);
var inst_40218 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40219 = figwheel.client.heads_up.display_error.call(null,inst_40217,inst_40218);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(21),inst_40219);
} else {
if((state_val_40267 === (37))){
var inst_40249 = (state_40266[(2)]);
var state_40266__$1 = state_40266;
var statearr_40306_40349 = state_40266__$1;
(statearr_40306_40349[(2)] = inst_40249);

(statearr_40306_40349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40267 === (8))){
var inst_40192 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40266__$1 = state_40266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40266__$1,(11),inst_40192);
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
});})(c__29943__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29831__auto__,c__29943__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____0 = (function (){
var statearr_40310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40310[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__);

(statearr_40310[(1)] = (1));

return statearr_40310;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____1 = (function (state_40266){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_40266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e40311){if((e40311 instanceof Object)){
var ex__29835__auto__ = e40311;
var statearr_40312_40350 = state_40266;
(statearr_40312_40350[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40351 = state_40266;
state_40266 = G__40351;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__ = function(state_40266){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____1.call(this,state_40266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__,msg_hist,msg_names,msg))
})();
var state__29945__auto__ = (function (){var statearr_40313 = f__29944__auto__.call(null);
(statearr_40313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_40313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__,msg_hist,msg_names,msg))
);

return c__29943__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29943__auto___40414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto___40414,ch){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto___40414,ch){
return (function (state_40397){
var state_val_40398 = (state_40397[(1)]);
if((state_val_40398 === (1))){
var state_40397__$1 = state_40397;
var statearr_40399_40415 = state_40397__$1;
(statearr_40399_40415[(2)] = null);

(statearr_40399_40415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (2))){
var state_40397__$1 = state_40397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40397__$1,(4),ch);
} else {
if((state_val_40398 === (3))){
var inst_40395 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40397__$1,inst_40395);
} else {
if((state_val_40398 === (4))){
var inst_40385 = (state_40397[(7)]);
var inst_40385__$1 = (state_40397[(2)]);
var state_40397__$1 = (function (){var statearr_40400 = state_40397;
(statearr_40400[(7)] = inst_40385__$1);

return statearr_40400;
})();
if(cljs.core.truth_(inst_40385__$1)){
var statearr_40401_40416 = state_40397__$1;
(statearr_40401_40416[(1)] = (5));

} else {
var statearr_40402_40417 = state_40397__$1;
(statearr_40402_40417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (5))){
var inst_40385 = (state_40397[(7)]);
var inst_40387 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40385);
var state_40397__$1 = state_40397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40397__$1,(8),inst_40387);
} else {
if((state_val_40398 === (6))){
var state_40397__$1 = state_40397;
var statearr_40403_40418 = state_40397__$1;
(statearr_40403_40418[(2)] = null);

(statearr_40403_40418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (7))){
var inst_40393 = (state_40397[(2)]);
var state_40397__$1 = state_40397;
var statearr_40404_40419 = state_40397__$1;
(statearr_40404_40419[(2)] = inst_40393);

(statearr_40404_40419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40398 === (8))){
var inst_40389 = (state_40397[(2)]);
var state_40397__$1 = (function (){var statearr_40405 = state_40397;
(statearr_40405[(8)] = inst_40389);

return statearr_40405;
})();
var statearr_40406_40420 = state_40397__$1;
(statearr_40406_40420[(2)] = null);

(statearr_40406_40420[(1)] = (2));


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
});})(c__29943__auto___40414,ch))
;
return ((function (switch__29831__auto__,c__29943__auto___40414,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29832__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29832__auto____0 = (function (){
var statearr_40410 = [null,null,null,null,null,null,null,null,null];
(statearr_40410[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29832__auto__);

(statearr_40410[(1)] = (1));

return statearr_40410;
});
var figwheel$client$heads_up_plugin_$_state_machine__29832__auto____1 = (function (state_40397){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_40397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e40411){if((e40411 instanceof Object)){
var ex__29835__auto__ = e40411;
var statearr_40412_40421 = state_40397;
(statearr_40412_40421[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40422 = state_40397;
state_40397 = G__40422;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29832__auto__ = function(state_40397){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29832__auto____1.call(this,state_40397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29832__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29832__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto___40414,ch))
})();
var state__29945__auto__ = (function (){var statearr_40413 = f__29944__auto__.call(null);
(statearr_40413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto___40414);

return statearr_40413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto___40414,ch))
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
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_40443){
var state_val_40444 = (state_40443[(1)]);
if((state_val_40444 === (1))){
var inst_40438 = cljs.core.async.timeout.call(null,(3000));
var state_40443__$1 = state_40443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40443__$1,(2),inst_40438);
} else {
if((state_val_40444 === (2))){
var inst_40440 = (state_40443[(2)]);
var inst_40441 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40443__$1 = (function (){var statearr_40445 = state_40443;
(statearr_40445[(7)] = inst_40440);

return statearr_40445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40443__$1,inst_40441);
} else {
return null;
}
}
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____0 = (function (){
var statearr_40449 = [null,null,null,null,null,null,null,null];
(statearr_40449[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__);

(statearr_40449[(1)] = (1));

return statearr_40449;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____1 = (function (state_40443){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_40443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e40450){if((e40450 instanceof Object)){
var ex__29835__auto__ = e40450;
var statearr_40451_40453 = state_40443;
(statearr_40451_40453[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40454 = state_40443;
state_40443 = G__40454;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__ = function(state_40443){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____1.call(this,state_40443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29832__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_40452 = f__29944__auto__.call(null);
(statearr_40452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_40452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40455){
var map__40462 = p__40455;
var map__40462__$1 = ((((!((map__40462 == null)))?((((map__40462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);
var ed = map__40462__$1;
var formatted_exception = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40464_40468 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40465_40469 = null;
var count__40466_40470 = (0);
var i__40467_40471 = (0);
while(true){
if((i__40467_40471 < count__40466_40470)){
var msg_40472 = cljs.core._nth.call(null,chunk__40465_40469,i__40467_40471);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40472);

var G__40473 = seq__40464_40468;
var G__40474 = chunk__40465_40469;
var G__40475 = count__40466_40470;
var G__40476 = (i__40467_40471 + (1));
seq__40464_40468 = G__40473;
chunk__40465_40469 = G__40474;
count__40466_40470 = G__40475;
i__40467_40471 = G__40476;
continue;
} else {
var temp__4425__auto___40477 = cljs.core.seq.call(null,seq__40464_40468);
if(temp__4425__auto___40477){
var seq__40464_40478__$1 = temp__4425__auto___40477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40464_40478__$1)){
var c__26623__auto___40479 = cljs.core.chunk_first.call(null,seq__40464_40478__$1);
var G__40480 = cljs.core.chunk_rest.call(null,seq__40464_40478__$1);
var G__40481 = c__26623__auto___40479;
var G__40482 = cljs.core.count.call(null,c__26623__auto___40479);
var G__40483 = (0);
seq__40464_40468 = G__40480;
chunk__40465_40469 = G__40481;
count__40466_40470 = G__40482;
i__40467_40471 = G__40483;
continue;
} else {
var msg_40484 = cljs.core.first.call(null,seq__40464_40478__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40484);

var G__40485 = cljs.core.next.call(null,seq__40464_40478__$1);
var G__40486 = null;
var G__40487 = (0);
var G__40488 = (0);
seq__40464_40468 = G__40485;
chunk__40465_40469 = G__40486;
count__40466_40470 = G__40487;
i__40467_40471 = G__40488;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40489){
var map__40492 = p__40489;
var map__40492__$1 = ((((!((map__40492 == null)))?((((map__40492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40492):map__40492);
var w = map__40492__$1;
var message = cljs.core.get.call(null,map__40492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25800__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25800__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25800__auto__;
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
var seq__40500 = cljs.core.seq.call(null,plugins);
var chunk__40501 = null;
var count__40502 = (0);
var i__40503 = (0);
while(true){
if((i__40503 < count__40502)){
var vec__40504 = cljs.core._nth.call(null,chunk__40501,i__40503);
var k = cljs.core.nth.call(null,vec__40504,(0),null);
var plugin = cljs.core.nth.call(null,vec__40504,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40506 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40500,chunk__40501,count__40502,i__40503,pl_40506,vec__40504,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40506.call(null,msg_hist);
});})(seq__40500,chunk__40501,count__40502,i__40503,pl_40506,vec__40504,k,plugin))
);
} else {
}

var G__40507 = seq__40500;
var G__40508 = chunk__40501;
var G__40509 = count__40502;
var G__40510 = (i__40503 + (1));
seq__40500 = G__40507;
chunk__40501 = G__40508;
count__40502 = G__40509;
i__40503 = G__40510;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40500);
if(temp__4425__auto__){
var seq__40500__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40500__$1)){
var c__26623__auto__ = cljs.core.chunk_first.call(null,seq__40500__$1);
var G__40511 = cljs.core.chunk_rest.call(null,seq__40500__$1);
var G__40512 = c__26623__auto__;
var G__40513 = cljs.core.count.call(null,c__26623__auto__);
var G__40514 = (0);
seq__40500 = G__40511;
chunk__40501 = G__40512;
count__40502 = G__40513;
i__40503 = G__40514;
continue;
} else {
var vec__40505 = cljs.core.first.call(null,seq__40500__$1);
var k = cljs.core.nth.call(null,vec__40505,(0),null);
var plugin = cljs.core.nth.call(null,vec__40505,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40515 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40500,chunk__40501,count__40502,i__40503,pl_40515,vec__40505,k,plugin,seq__40500__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40515.call(null,msg_hist);
});})(seq__40500,chunk__40501,count__40502,i__40503,pl_40515,vec__40505,k,plugin,seq__40500__$1,temp__4425__auto__))
);
} else {
}

var G__40516 = cljs.core.next.call(null,seq__40500__$1);
var G__40517 = null;
var G__40518 = (0);
var G__40519 = (0);
seq__40500 = G__40516;
chunk__40501 = G__40517;
count__40502 = G__40518;
i__40503 = G__40519;
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
var args40520 = [];
var len__26882__auto___40523 = arguments.length;
var i__26883__auto___40524 = (0);
while(true){
if((i__26883__auto___40524 < len__26882__auto___40523)){
args40520.push((arguments[i__26883__auto___40524]));

var G__40525 = (i__26883__auto___40524 + (1));
i__26883__auto___40524 = G__40525;
continue;
} else {
}
break;
}

var G__40522 = args40520.length;
switch (G__40522) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40520.length)].join('')));

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
var args__26889__auto__ = [];
var len__26882__auto___40531 = arguments.length;
var i__26883__auto___40532 = (0);
while(true){
if((i__26883__auto___40532 < len__26882__auto___40531)){
args__26889__auto__.push((arguments[i__26883__auto___40532]));

var G__40533 = (i__26883__auto___40532 + (1));
i__26883__auto___40532 = G__40533;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((0) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26890__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40528){
var map__40529 = p__40528;
var map__40529__$1 = ((((!((map__40529 == null)))?((((map__40529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40529):map__40529);
var opts = map__40529__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40527){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40527));
});

//# sourceMappingURL=client.js.map