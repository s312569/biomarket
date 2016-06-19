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
var pred__40015 = cljs.core._EQ_;
var expr__40016 = (function (){var or__25880__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40015.call(null,"true",expr__40016))){
return true;
} else {
if(cljs.core.truth_(pred__40015.call(null,"false",expr__40016))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40016)].join('')));
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
var G__40018__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40019__i = 0, G__40019__a = new Array(arguments.length -  0);
while (G__40019__i < G__40019__a.length) {G__40019__a[G__40019__i] = arguments[G__40019__i + 0]; ++G__40019__i;}
  args = new cljs.core.IndexedSeq(G__40019__a,0);
} 
return G__40018__delegate.call(this,args);};
G__40018.cljs$lang$maxFixedArity = 0;
G__40018.cljs$lang$applyTo = (function (arglist__40020){
var args = cljs.core.seq(arglist__40020);
return G__40018__delegate(args);
});
G__40018.cljs$core$IFn$_invoke$arity$variadic = G__40018__delegate;
return G__40018;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40021){
var map__40024 = p__40021;
var map__40024__$1 = ((((!((map__40024 == null)))?((((map__40024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40024):map__40024);
var message = cljs.core.get.call(null,map__40024__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40024__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25880__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25880__auto__)){
return or__25880__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25868__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25868__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25868__auto__;
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
var c__30011__auto___40186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___40186,ch){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___40186,ch){
return (function (state_40155){
var state_val_40156 = (state_40155[(1)]);
if((state_val_40156 === (7))){
var inst_40151 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40157_40187 = state_40155__$1;
(statearr_40157_40187[(2)] = inst_40151);

(statearr_40157_40187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (1))){
var state_40155__$1 = state_40155;
var statearr_40158_40188 = state_40155__$1;
(statearr_40158_40188[(2)] = null);

(statearr_40158_40188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (4))){
var inst_40108 = (state_40155[(7)]);
var inst_40108__$1 = (state_40155[(2)]);
var state_40155__$1 = (function (){var statearr_40159 = state_40155;
(statearr_40159[(7)] = inst_40108__$1);

return statearr_40159;
})();
if(cljs.core.truth_(inst_40108__$1)){
var statearr_40160_40189 = state_40155__$1;
(statearr_40160_40189[(1)] = (5));

} else {
var statearr_40161_40190 = state_40155__$1;
(statearr_40161_40190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (15))){
var inst_40115 = (state_40155[(8)]);
var inst_40130 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40115);
var inst_40131 = cljs.core.first.call(null,inst_40130);
var inst_40132 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40131);
var inst_40133 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40132)].join('');
var inst_40134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40133);
var state_40155__$1 = state_40155;
var statearr_40162_40191 = state_40155__$1;
(statearr_40162_40191[(2)] = inst_40134);

(statearr_40162_40191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (13))){
var inst_40139 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40163_40192 = state_40155__$1;
(statearr_40163_40192[(2)] = inst_40139);

(statearr_40163_40192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (6))){
var state_40155__$1 = state_40155;
var statearr_40164_40193 = state_40155__$1;
(statearr_40164_40193[(2)] = null);

(statearr_40164_40193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (17))){
var inst_40137 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40165_40194 = state_40155__$1;
(statearr_40165_40194[(2)] = inst_40137);

(statearr_40165_40194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (3))){
var inst_40153 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40155__$1,inst_40153);
} else {
if((state_val_40156 === (12))){
var inst_40114 = (state_40155[(9)]);
var inst_40128 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40114,opts);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40128)){
var statearr_40166_40195 = state_40155__$1;
(statearr_40166_40195[(1)] = (15));

} else {
var statearr_40167_40196 = state_40155__$1;
(statearr_40167_40196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (2))){
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40155__$1,(4),ch);
} else {
if((state_val_40156 === (11))){
var inst_40115 = (state_40155[(8)]);
var inst_40120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40121 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40115);
var inst_40122 = cljs.core.async.timeout.call(null,(1000));
var inst_40123 = [inst_40121,inst_40122];
var inst_40124 = (new cljs.core.PersistentVector(null,2,(5),inst_40120,inst_40123,null));
var state_40155__$1 = state_40155;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40155__$1,(14),inst_40124);
} else {
if((state_val_40156 === (9))){
var inst_40115 = (state_40155[(8)]);
var inst_40141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40142 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40115);
var inst_40143 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40142);
var inst_40144 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40143)].join('');
var inst_40145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40144);
var state_40155__$1 = (function (){var statearr_40168 = state_40155;
(statearr_40168[(10)] = inst_40141);

return statearr_40168;
})();
var statearr_40169_40197 = state_40155__$1;
(statearr_40169_40197[(2)] = inst_40145);

(statearr_40169_40197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (5))){
var inst_40108 = (state_40155[(7)]);
var inst_40110 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40111 = (new cljs.core.PersistentArrayMap(null,2,inst_40110,null));
var inst_40112 = (new cljs.core.PersistentHashSet(null,inst_40111,null));
var inst_40113 = figwheel.client.focus_msgs.call(null,inst_40112,inst_40108);
var inst_40114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40113);
var inst_40115 = cljs.core.first.call(null,inst_40113);
var inst_40116 = figwheel.client.autoload_QMARK_.call(null);
var state_40155__$1 = (function (){var statearr_40170 = state_40155;
(statearr_40170[(8)] = inst_40115);

(statearr_40170[(9)] = inst_40114);

return statearr_40170;
})();
if(cljs.core.truth_(inst_40116)){
var statearr_40171_40198 = state_40155__$1;
(statearr_40171_40198[(1)] = (8));

} else {
var statearr_40172_40199 = state_40155__$1;
(statearr_40172_40199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (14))){
var inst_40126 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40173_40200 = state_40155__$1;
(statearr_40173_40200[(2)] = inst_40126);

(statearr_40173_40200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (16))){
var state_40155__$1 = state_40155;
var statearr_40174_40201 = state_40155__$1;
(statearr_40174_40201[(2)] = null);

(statearr_40174_40201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (10))){
var inst_40147 = (state_40155[(2)]);
var state_40155__$1 = (function (){var statearr_40175 = state_40155;
(statearr_40175[(11)] = inst_40147);

return statearr_40175;
})();
var statearr_40176_40202 = state_40155__$1;
(statearr_40176_40202[(2)] = null);

(statearr_40176_40202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (8))){
var inst_40114 = (state_40155[(9)]);
var inst_40118 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40114,opts);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40118)){
var statearr_40177_40203 = state_40155__$1;
(statearr_40177_40203[(1)] = (11));

} else {
var statearr_40178_40204 = state_40155__$1;
(statearr_40178_40204[(1)] = (12));

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
});})(c__30011__auto___40186,ch))
;
return ((function (switch__29899__auto__,c__30011__auto___40186,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____0 = (function (){
var statearr_40182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40182[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__);

(statearr_40182[(1)] = (1));

return statearr_40182;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____1 = (function (state_40155){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_40155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e40183){if((e40183 instanceof Object)){
var ex__29903__auto__ = e40183;
var statearr_40184_40205 = state_40155;
(statearr_40184_40205[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40206 = state_40155;
state_40155 = G__40206;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__ = function(state_40155){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____1.call(this,state_40155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29900__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___40186,ch))
})();
var state__30013__auto__ = (function (){var statearr_40185 = f__30012__auto__.call(null);
(statearr_40185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___40186);

return statearr_40185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___40186,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40207_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40207_SHARP_));
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
var base_path_40214 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40214){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40212 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40213 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40212,_STAR_print_newline_STAR_40213,base_path_40214){
return (function() { 
var G__40215__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40216__i = 0, G__40216__a = new Array(arguments.length -  0);
while (G__40216__i < G__40216__a.length) {G__40216__a[G__40216__i] = arguments[G__40216__i + 0]; ++G__40216__i;}
  args = new cljs.core.IndexedSeq(G__40216__a,0);
} 
return G__40215__delegate.call(this,args);};
G__40215.cljs$lang$maxFixedArity = 0;
G__40215.cljs$lang$applyTo = (function (arglist__40217){
var args = cljs.core.seq(arglist__40217);
return G__40215__delegate(args);
});
G__40215.cljs$core$IFn$_invoke$arity$variadic = G__40215__delegate;
return G__40215;
})()
;})(_STAR_print_fn_STAR_40212,_STAR_print_newline_STAR_40213,base_path_40214))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40213;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40212;
}}catch (e40211){if((e40211 instanceof Error)){
var e = e40211;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40214], null));
} else {
var e = e40211;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40214))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40218){
var map__40225 = p__40218;
var map__40225__$1 = ((((!((map__40225 == null)))?((((map__40225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40225):map__40225);
var opts = map__40225__$1;
var build_id = cljs.core.get.call(null,map__40225__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40225,map__40225__$1,opts,build_id){
return (function (p__40227){
var vec__40228 = p__40227;
var map__40229 = cljs.core.nth.call(null,vec__40228,(0),null);
var map__40229__$1 = ((((!((map__40229 == null)))?((((map__40229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40229):map__40229);
var msg = map__40229__$1;
var msg_name = cljs.core.get.call(null,map__40229__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40228,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40228,map__40229,map__40229__$1,msg,msg_name,_,map__40225,map__40225__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40228,map__40229,map__40229__$1,msg,msg_name,_,map__40225,map__40225__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40225,map__40225__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40235){
var vec__40236 = p__40235;
var map__40237 = cljs.core.nth.call(null,vec__40236,(0),null);
var map__40237__$1 = ((((!((map__40237 == null)))?((((map__40237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40237):map__40237);
var msg = map__40237__$1;
var msg_name = cljs.core.get.call(null,map__40237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40236,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40239){
var map__40249 = p__40239;
var map__40249__$1 = ((((!((map__40249 == null)))?((((map__40249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40249):map__40249);
var on_compile_warning = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40249__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40249,map__40249__$1,on_compile_warning,on_compile_fail){
return (function (p__40251){
var vec__40252 = p__40251;
var map__40253 = cljs.core.nth.call(null,vec__40252,(0),null);
var map__40253__$1 = ((((!((map__40253 == null)))?((((map__40253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40253):map__40253);
var msg = map__40253__$1;
var msg_name = cljs.core.get.call(null,map__40253__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40252,(1));
var pred__40255 = cljs.core._EQ_;
var expr__40256 = msg_name;
if(cljs.core.truth_(pred__40255.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40256))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40255.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40256))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40249,map__40249__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__,msg_hist,msg_names,msg){
return (function (state_40472){
var state_val_40473 = (state_40472[(1)]);
if((state_val_40473 === (7))){
var inst_40396 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40396)){
var statearr_40474_40520 = state_40472__$1;
(statearr_40474_40520[(1)] = (8));

} else {
var statearr_40475_40521 = state_40472__$1;
(statearr_40475_40521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (20))){
var inst_40466 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40476_40522 = state_40472__$1;
(statearr_40476_40522[(2)] = inst_40466);

(statearr_40476_40522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (27))){
var inst_40462 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40477_40523 = state_40472__$1;
(statearr_40477_40523[(2)] = inst_40462);

(statearr_40477_40523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (1))){
var inst_40389 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40389)){
var statearr_40478_40524 = state_40472__$1;
(statearr_40478_40524[(1)] = (2));

} else {
var statearr_40479_40525 = state_40472__$1;
(statearr_40479_40525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (24))){
var inst_40464 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40480_40526 = state_40472__$1;
(statearr_40480_40526[(2)] = inst_40464);

(statearr_40480_40526[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (4))){
var inst_40470 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40472__$1,inst_40470);
} else {
if((state_val_40473 === (15))){
var inst_40468 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40481_40527 = state_40472__$1;
(statearr_40481_40527[(2)] = inst_40468);

(statearr_40481_40527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (21))){
var inst_40427 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40482_40528 = state_40472__$1;
(statearr_40482_40528[(2)] = inst_40427);

(statearr_40482_40528[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (31))){
var inst_40451 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40451)){
var statearr_40483_40529 = state_40472__$1;
(statearr_40483_40529[(1)] = (34));

} else {
var statearr_40484_40530 = state_40472__$1;
(statearr_40484_40530[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (32))){
var inst_40460 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40485_40531 = state_40472__$1;
(statearr_40485_40531[(2)] = inst_40460);

(statearr_40485_40531[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (33))){
var inst_40449 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40486_40532 = state_40472__$1;
(statearr_40486_40532[(2)] = inst_40449);

(statearr_40486_40532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (13))){
var inst_40410 = figwheel.client.heads_up.clear.call(null);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(16),inst_40410);
} else {
if((state_val_40473 === (22))){
var inst_40431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40432 = figwheel.client.heads_up.append_message.call(null,inst_40431);
var state_40472__$1 = state_40472;
var statearr_40487_40533 = state_40472__$1;
(statearr_40487_40533[(2)] = inst_40432);

(statearr_40487_40533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (36))){
var inst_40458 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40488_40534 = state_40472__$1;
(statearr_40488_40534[(2)] = inst_40458);

(statearr_40488_40534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (29))){
var inst_40442 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40489_40535 = state_40472__$1;
(statearr_40489_40535[(2)] = inst_40442);

(statearr_40489_40535[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (6))){
var inst_40391 = (state_40472[(7)]);
var state_40472__$1 = state_40472;
var statearr_40490_40536 = state_40472__$1;
(statearr_40490_40536[(2)] = inst_40391);

(statearr_40490_40536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (28))){
var inst_40438 = (state_40472[(2)]);
var inst_40439 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40440 = figwheel.client.heads_up.display_warning.call(null,inst_40439);
var state_40472__$1 = (function (){var statearr_40491 = state_40472;
(statearr_40491[(8)] = inst_40438);

return statearr_40491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(29),inst_40440);
} else {
if((state_val_40473 === (25))){
var inst_40436 = figwheel.client.heads_up.clear.call(null);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(28),inst_40436);
} else {
if((state_val_40473 === (34))){
var inst_40453 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(37),inst_40453);
} else {
if((state_val_40473 === (17))){
var inst_40418 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40492_40537 = state_40472__$1;
(statearr_40492_40537[(2)] = inst_40418);

(statearr_40492_40537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (3))){
var inst_40408 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40408)){
var statearr_40493_40538 = state_40472__$1;
(statearr_40493_40538[(1)] = (13));

} else {
var statearr_40494_40539 = state_40472__$1;
(statearr_40494_40539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (12))){
var inst_40404 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40495_40540 = state_40472__$1;
(statearr_40495_40540[(2)] = inst_40404);

(statearr_40495_40540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (2))){
var inst_40391 = (state_40472[(7)]);
var inst_40391__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40472__$1 = (function (){var statearr_40496 = state_40472;
(statearr_40496[(7)] = inst_40391__$1);

return statearr_40496;
})();
if(cljs.core.truth_(inst_40391__$1)){
var statearr_40497_40541 = state_40472__$1;
(statearr_40497_40541[(1)] = (5));

} else {
var statearr_40498_40542 = state_40472__$1;
(statearr_40498_40542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (23))){
var inst_40434 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40434)){
var statearr_40499_40543 = state_40472__$1;
(statearr_40499_40543[(1)] = (25));

} else {
var statearr_40500_40544 = state_40472__$1;
(statearr_40500_40544[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (35))){
var state_40472__$1 = state_40472;
var statearr_40501_40545 = state_40472__$1;
(statearr_40501_40545[(2)] = null);

(statearr_40501_40545[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (19))){
var inst_40429 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40429)){
var statearr_40502_40546 = state_40472__$1;
(statearr_40502_40546[(1)] = (22));

} else {
var statearr_40503_40547 = state_40472__$1;
(statearr_40503_40547[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (11))){
var inst_40400 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40504_40548 = state_40472__$1;
(statearr_40504_40548[(2)] = inst_40400);

(statearr_40504_40548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (9))){
var inst_40402 = figwheel.client.heads_up.clear.call(null);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(12),inst_40402);
} else {
if((state_val_40473 === (5))){
var inst_40393 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40472__$1 = state_40472;
var statearr_40505_40549 = state_40472__$1;
(statearr_40505_40549[(2)] = inst_40393);

(statearr_40505_40549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (14))){
var inst_40420 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40420)){
var statearr_40506_40550 = state_40472__$1;
(statearr_40506_40550[(1)] = (18));

} else {
var statearr_40507_40551 = state_40472__$1;
(statearr_40507_40551[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (26))){
var inst_40444 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40472__$1 = state_40472;
if(cljs.core.truth_(inst_40444)){
var statearr_40508_40552 = state_40472__$1;
(statearr_40508_40552[(1)] = (30));

} else {
var statearr_40509_40553 = state_40472__$1;
(statearr_40509_40553[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (16))){
var inst_40412 = (state_40472[(2)]);
var inst_40413 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40414 = figwheel.client.format_messages.call(null,inst_40413);
var inst_40415 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40416 = figwheel.client.heads_up.display_error.call(null,inst_40414,inst_40415);
var state_40472__$1 = (function (){var statearr_40510 = state_40472;
(statearr_40510[(9)] = inst_40412);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(17),inst_40416);
} else {
if((state_val_40473 === (30))){
var inst_40446 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40447 = figwheel.client.heads_up.display_warning.call(null,inst_40446);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(33),inst_40447);
} else {
if((state_val_40473 === (10))){
var inst_40406 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40511_40554 = state_40472__$1;
(statearr_40511_40554[(2)] = inst_40406);

(statearr_40511_40554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (18))){
var inst_40422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40423 = figwheel.client.format_messages.call(null,inst_40422);
var inst_40424 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40425 = figwheel.client.heads_up.display_error.call(null,inst_40423,inst_40424);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(21),inst_40425);
} else {
if((state_val_40473 === (37))){
var inst_40455 = (state_40472[(2)]);
var state_40472__$1 = state_40472;
var statearr_40512_40555 = state_40472__$1;
(statearr_40512_40555[(2)] = inst_40455);

(statearr_40512_40555[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40473 === (8))){
var inst_40398 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40472__$1 = state_40472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40472__$1,(11),inst_40398);
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
});})(c__30011__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29899__auto__,c__30011__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____0 = (function (){
var statearr_40516 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40516[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__);

(statearr_40516[(1)] = (1));

return statearr_40516;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____1 = (function (state_40472){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_40472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e40517){if((e40517 instanceof Object)){
var ex__29903__auto__ = e40517;
var statearr_40518_40556 = state_40472;
(statearr_40518_40556[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40557 = state_40472;
state_40472 = G__40557;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__ = function(state_40472){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____1.call(this,state_40472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__,msg_hist,msg_names,msg))
})();
var state__30013__auto__ = (function (){var statearr_40519 = f__30012__auto__.call(null);
(statearr_40519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_40519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__,msg_hist,msg_names,msg))
);

return c__30011__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30011__auto___40620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto___40620,ch){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto___40620,ch){
return (function (state_40603){
var state_val_40604 = (state_40603[(1)]);
if((state_val_40604 === (1))){
var state_40603__$1 = state_40603;
var statearr_40605_40621 = state_40603__$1;
(statearr_40605_40621[(2)] = null);

(statearr_40605_40621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (2))){
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(4),ch);
} else {
if((state_val_40604 === (3))){
var inst_40601 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40603__$1,inst_40601);
} else {
if((state_val_40604 === (4))){
var inst_40591 = (state_40603[(7)]);
var inst_40591__$1 = (state_40603[(2)]);
var state_40603__$1 = (function (){var statearr_40606 = state_40603;
(statearr_40606[(7)] = inst_40591__$1);

return statearr_40606;
})();
if(cljs.core.truth_(inst_40591__$1)){
var statearr_40607_40622 = state_40603__$1;
(statearr_40607_40622[(1)] = (5));

} else {
var statearr_40608_40623 = state_40603__$1;
(statearr_40608_40623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (5))){
var inst_40591 = (state_40603[(7)]);
var inst_40593 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40591);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(8),inst_40593);
} else {
if((state_val_40604 === (6))){
var state_40603__$1 = state_40603;
var statearr_40609_40624 = state_40603__$1;
(statearr_40609_40624[(2)] = null);

(statearr_40609_40624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (7))){
var inst_40599 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40610_40625 = state_40603__$1;
(statearr_40610_40625[(2)] = inst_40599);

(statearr_40610_40625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (8))){
var inst_40595 = (state_40603[(2)]);
var state_40603__$1 = (function (){var statearr_40611 = state_40603;
(statearr_40611[(8)] = inst_40595);

return statearr_40611;
})();
var statearr_40612_40626 = state_40603__$1;
(statearr_40612_40626[(2)] = null);

(statearr_40612_40626[(1)] = (2));


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
});})(c__30011__auto___40620,ch))
;
return ((function (switch__29899__auto__,c__30011__auto___40620,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29900__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29900__auto____0 = (function (){
var statearr_40616 = [null,null,null,null,null,null,null,null,null];
(statearr_40616[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29900__auto__);

(statearr_40616[(1)] = (1));

return statearr_40616;
});
var figwheel$client$heads_up_plugin_$_state_machine__29900__auto____1 = (function (state_40603){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_40603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e40617){if((e40617 instanceof Object)){
var ex__29903__auto__ = e40617;
var statearr_40618_40627 = state_40603;
(statearr_40618_40627[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40628 = state_40603;
state_40603 = G__40628;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29900__auto__ = function(state_40603){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29900__auto____1.call(this,state_40603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29900__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29900__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto___40620,ch))
})();
var state__30013__auto__ = (function (){var statearr_40619 = f__30012__auto__.call(null);
(statearr_40619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto___40620);

return statearr_40619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto___40620,ch))
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
var c__30011__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30011__auto__){
return (function (){
var f__30012__auto__ = (function (){var switch__29899__auto__ = ((function (c__30011__auto__){
return (function (state_40649){
var state_val_40650 = (state_40649[(1)]);
if((state_val_40650 === (1))){
var inst_40644 = cljs.core.async.timeout.call(null,(3000));
var state_40649__$1 = state_40649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40649__$1,(2),inst_40644);
} else {
if((state_val_40650 === (2))){
var inst_40646 = (state_40649[(2)]);
var inst_40647 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40649__$1 = (function (){var statearr_40651 = state_40649;
(statearr_40651[(7)] = inst_40646);

return statearr_40651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40649__$1,inst_40647);
} else {
return null;
}
}
});})(c__30011__auto__))
;
return ((function (switch__29899__auto__,c__30011__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____0 = (function (){
var statearr_40655 = [null,null,null,null,null,null,null,null];
(statearr_40655[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__);

(statearr_40655[(1)] = (1));

return statearr_40655;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____1 = (function (state_40649){
while(true){
var ret_value__29901__auto__ = (function (){try{while(true){
var result__29902__auto__ = switch__29899__auto__.call(null,state_40649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29902__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29902__auto__;
}
break;
}
}catch (e40656){if((e40656 instanceof Object)){
var ex__29903__auto__ = e40656;
var statearr_40657_40659 = state_40649;
(statearr_40657_40659[(5)] = ex__29903__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40660 = state_40649;
state_40649 = G__40660;
continue;
} else {
return ret_value__29901__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__ = function(state_40649){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____1.call(this,state_40649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29900__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29900__auto__;
})()
;})(switch__29899__auto__,c__30011__auto__))
})();
var state__30013__auto__ = (function (){var statearr_40658 = f__30012__auto__.call(null);
(statearr_40658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30011__auto__);

return statearr_40658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30013__auto__);
});})(c__30011__auto__))
);

return c__30011__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40661){
var map__40668 = p__40661;
var map__40668__$1 = ((((!((map__40668 == null)))?((((map__40668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40668):map__40668);
var ed = map__40668__$1;
var formatted_exception = cljs.core.get.call(null,map__40668__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40668__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40668__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40670_40674 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40671_40675 = null;
var count__40672_40676 = (0);
var i__40673_40677 = (0);
while(true){
if((i__40673_40677 < count__40672_40676)){
var msg_40678 = cljs.core._nth.call(null,chunk__40671_40675,i__40673_40677);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40678);

var G__40679 = seq__40670_40674;
var G__40680 = chunk__40671_40675;
var G__40681 = count__40672_40676;
var G__40682 = (i__40673_40677 + (1));
seq__40670_40674 = G__40679;
chunk__40671_40675 = G__40680;
count__40672_40676 = G__40681;
i__40673_40677 = G__40682;
continue;
} else {
var temp__4425__auto___40683 = cljs.core.seq.call(null,seq__40670_40674);
if(temp__4425__auto___40683){
var seq__40670_40684__$1 = temp__4425__auto___40683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40670_40684__$1)){
var c__26691__auto___40685 = cljs.core.chunk_first.call(null,seq__40670_40684__$1);
var G__40686 = cljs.core.chunk_rest.call(null,seq__40670_40684__$1);
var G__40687 = c__26691__auto___40685;
var G__40688 = cljs.core.count.call(null,c__26691__auto___40685);
var G__40689 = (0);
seq__40670_40674 = G__40686;
chunk__40671_40675 = G__40687;
count__40672_40676 = G__40688;
i__40673_40677 = G__40689;
continue;
} else {
var msg_40690 = cljs.core.first.call(null,seq__40670_40684__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40690);

var G__40691 = cljs.core.next.call(null,seq__40670_40684__$1);
var G__40692 = null;
var G__40693 = (0);
var G__40694 = (0);
seq__40670_40674 = G__40691;
chunk__40671_40675 = G__40692;
count__40672_40676 = G__40693;
i__40673_40677 = G__40694;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40695){
var map__40698 = p__40695;
var map__40698__$1 = ((((!((map__40698 == null)))?((((map__40698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40698):map__40698);
var w = map__40698__$1;
var message = cljs.core.get.call(null,map__40698__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25868__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25868__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25868__auto__;
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
var seq__40706 = cljs.core.seq.call(null,plugins);
var chunk__40707 = null;
var count__40708 = (0);
var i__40709 = (0);
while(true){
if((i__40709 < count__40708)){
var vec__40710 = cljs.core._nth.call(null,chunk__40707,i__40709);
var k = cljs.core.nth.call(null,vec__40710,(0),null);
var plugin = cljs.core.nth.call(null,vec__40710,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40706,chunk__40707,count__40708,i__40709,pl_40712,vec__40710,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40712.call(null,msg_hist);
});})(seq__40706,chunk__40707,count__40708,i__40709,pl_40712,vec__40710,k,plugin))
);
} else {
}

var G__40713 = seq__40706;
var G__40714 = chunk__40707;
var G__40715 = count__40708;
var G__40716 = (i__40709 + (1));
seq__40706 = G__40713;
chunk__40707 = G__40714;
count__40708 = G__40715;
i__40709 = G__40716;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40706);
if(temp__4425__auto__){
var seq__40706__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40706__$1)){
var c__26691__auto__ = cljs.core.chunk_first.call(null,seq__40706__$1);
var G__40717 = cljs.core.chunk_rest.call(null,seq__40706__$1);
var G__40718 = c__26691__auto__;
var G__40719 = cljs.core.count.call(null,c__26691__auto__);
var G__40720 = (0);
seq__40706 = G__40717;
chunk__40707 = G__40718;
count__40708 = G__40719;
i__40709 = G__40720;
continue;
} else {
var vec__40711 = cljs.core.first.call(null,seq__40706__$1);
var k = cljs.core.nth.call(null,vec__40711,(0),null);
var plugin = cljs.core.nth.call(null,vec__40711,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40706,chunk__40707,count__40708,i__40709,pl_40721,vec__40711,k,plugin,seq__40706__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40721.call(null,msg_hist);
});})(seq__40706,chunk__40707,count__40708,i__40709,pl_40721,vec__40711,k,plugin,seq__40706__$1,temp__4425__auto__))
);
} else {
}

var G__40722 = cljs.core.next.call(null,seq__40706__$1);
var G__40723 = null;
var G__40724 = (0);
var G__40725 = (0);
seq__40706 = G__40722;
chunk__40707 = G__40723;
count__40708 = G__40724;
i__40709 = G__40725;
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
var args40726 = [];
var len__26950__auto___40729 = arguments.length;
var i__26951__auto___40730 = (0);
while(true){
if((i__26951__auto___40730 < len__26950__auto___40729)){
args40726.push((arguments[i__26951__auto___40730]));

var G__40731 = (i__26951__auto___40730 + (1));
i__26951__auto___40730 = G__40731;
continue;
} else {
}
break;
}

var G__40728 = args40726.length;
switch (G__40728) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40726.length)].join('')));

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
var args__26957__auto__ = [];
var len__26950__auto___40737 = arguments.length;
var i__26951__auto___40738 = (0);
while(true){
if((i__26951__auto___40738 < len__26950__auto___40737)){
args__26957__auto__.push((arguments[i__26951__auto___40738]));

var G__40739 = (i__26951__auto___40738 + (1));
i__26951__auto___40738 = G__40739;
continue;
} else {
}
break;
}

var argseq__26958__auto__ = ((((0) < args__26957__auto__.length))?(new cljs.core.IndexedSeq(args__26957__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26958__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40734){
var map__40735 = p__40734;
var map__40735__$1 = ((((!((map__40735 == null)))?((((map__40735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40735):map__40735);
var opts = map__40735__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40733){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40733));
});

//# sourceMappingURL=client.js.map