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
var pred__39836 = cljs.core._EQ_;
var expr__39837 = (function (){var or__25809__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__39836.call(null,"true",expr__39837))){
return true;
} else {
if(cljs.core.truth_(pred__39836.call(null,"false",expr__39837))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__39837)].join('')));
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
var G__39839__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__39839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39840__i = 0, G__39840__a = new Array(arguments.length -  0);
while (G__39840__i < G__39840__a.length) {G__39840__a[G__39840__i] = arguments[G__39840__i + 0]; ++G__39840__i;}
  args = new cljs.core.IndexedSeq(G__39840__a,0);
} 
return G__39839__delegate.call(this,args);};
G__39839.cljs$lang$maxFixedArity = 0;
G__39839.cljs$lang$applyTo = (function (arglist__39841){
var args = cljs.core.seq(arglist__39841);
return G__39839__delegate(args);
});
G__39839.cljs$core$IFn$_invoke$arity$variadic = G__39839__delegate;
return G__39839;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39842){
var map__39845 = p__39842;
var map__39845__$1 = ((((!((map__39845 == null)))?((((map__39845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39845):map__39845);
var message = cljs.core.get.call(null,map__39845__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39845__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25809__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25797__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25797__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25797__auto__;
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
var c__29940__auto___40007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___40007,ch){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___40007,ch){
return (function (state_39976){
var state_val_39977 = (state_39976[(1)]);
if((state_val_39977 === (7))){
var inst_39972 = (state_39976[(2)]);
var state_39976__$1 = state_39976;
var statearr_39978_40008 = state_39976__$1;
(statearr_39978_40008[(2)] = inst_39972);

(statearr_39978_40008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (1))){
var state_39976__$1 = state_39976;
var statearr_39979_40009 = state_39976__$1;
(statearr_39979_40009[(2)] = null);

(statearr_39979_40009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (4))){
var inst_39929 = (state_39976[(7)]);
var inst_39929__$1 = (state_39976[(2)]);
var state_39976__$1 = (function (){var statearr_39980 = state_39976;
(statearr_39980[(7)] = inst_39929__$1);

return statearr_39980;
})();
if(cljs.core.truth_(inst_39929__$1)){
var statearr_39981_40010 = state_39976__$1;
(statearr_39981_40010[(1)] = (5));

} else {
var statearr_39982_40011 = state_39976__$1;
(statearr_39982_40011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (15))){
var inst_39936 = (state_39976[(8)]);
var inst_39951 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39936);
var inst_39952 = cljs.core.first.call(null,inst_39951);
var inst_39953 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39952);
var inst_39954 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_39953)].join('');
var inst_39955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39954);
var state_39976__$1 = state_39976;
var statearr_39983_40012 = state_39976__$1;
(statearr_39983_40012[(2)] = inst_39955);

(statearr_39983_40012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (13))){
var inst_39960 = (state_39976[(2)]);
var state_39976__$1 = state_39976;
var statearr_39984_40013 = state_39976__$1;
(statearr_39984_40013[(2)] = inst_39960);

(statearr_39984_40013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (6))){
var state_39976__$1 = state_39976;
var statearr_39985_40014 = state_39976__$1;
(statearr_39985_40014[(2)] = null);

(statearr_39985_40014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (17))){
var inst_39958 = (state_39976[(2)]);
var state_39976__$1 = state_39976;
var statearr_39986_40015 = state_39976__$1;
(statearr_39986_40015[(2)] = inst_39958);

(statearr_39986_40015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (3))){
var inst_39974 = (state_39976[(2)]);
var state_39976__$1 = state_39976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39976__$1,inst_39974);
} else {
if((state_val_39977 === (12))){
var inst_39935 = (state_39976[(9)]);
var inst_39949 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39935,opts);
var state_39976__$1 = state_39976;
if(cljs.core.truth_(inst_39949)){
var statearr_39987_40016 = state_39976__$1;
(statearr_39987_40016[(1)] = (15));

} else {
var statearr_39988_40017 = state_39976__$1;
(statearr_39988_40017[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (2))){
var state_39976__$1 = state_39976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39976__$1,(4),ch);
} else {
if((state_val_39977 === (11))){
var inst_39936 = (state_39976[(8)]);
var inst_39941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39942 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39936);
var inst_39943 = cljs.core.async.timeout.call(null,(1000));
var inst_39944 = [inst_39942,inst_39943];
var inst_39945 = (new cljs.core.PersistentVector(null,2,(5),inst_39941,inst_39944,null));
var state_39976__$1 = state_39976;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39976__$1,(14),inst_39945);
} else {
if((state_val_39977 === (9))){
var inst_39936 = (state_39976[(8)]);
var inst_39962 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39936);
var inst_39964 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39963);
var inst_39965 = [cljs.core.str("Not loading: "),cljs.core.str(inst_39964)].join('');
var inst_39966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39965);
var state_39976__$1 = (function (){var statearr_39989 = state_39976;
(statearr_39989[(10)] = inst_39962);

return statearr_39989;
})();
var statearr_39990_40018 = state_39976__$1;
(statearr_39990_40018[(2)] = inst_39966);

(statearr_39990_40018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (5))){
var inst_39929 = (state_39976[(7)]);
var inst_39931 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39932 = (new cljs.core.PersistentArrayMap(null,2,inst_39931,null));
var inst_39933 = (new cljs.core.PersistentHashSet(null,inst_39932,null));
var inst_39934 = figwheel.client.focus_msgs.call(null,inst_39933,inst_39929);
var inst_39935 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39934);
var inst_39936 = cljs.core.first.call(null,inst_39934);
var inst_39937 = figwheel.client.autoload_QMARK_.call(null);
var state_39976__$1 = (function (){var statearr_39991 = state_39976;
(statearr_39991[(8)] = inst_39936);

(statearr_39991[(9)] = inst_39935);

return statearr_39991;
})();
if(cljs.core.truth_(inst_39937)){
var statearr_39992_40019 = state_39976__$1;
(statearr_39992_40019[(1)] = (8));

} else {
var statearr_39993_40020 = state_39976__$1;
(statearr_39993_40020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (14))){
var inst_39947 = (state_39976[(2)]);
var state_39976__$1 = state_39976;
var statearr_39994_40021 = state_39976__$1;
(statearr_39994_40021[(2)] = inst_39947);

(statearr_39994_40021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (16))){
var state_39976__$1 = state_39976;
var statearr_39995_40022 = state_39976__$1;
(statearr_39995_40022[(2)] = null);

(statearr_39995_40022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (10))){
var inst_39968 = (state_39976[(2)]);
var state_39976__$1 = (function (){var statearr_39996 = state_39976;
(statearr_39996[(11)] = inst_39968);

return statearr_39996;
})();
var statearr_39997_40023 = state_39976__$1;
(statearr_39997_40023[(2)] = null);

(statearr_39997_40023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39977 === (8))){
var inst_39935 = (state_39976[(9)]);
var inst_39939 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39935,opts);
var state_39976__$1 = state_39976;
if(cljs.core.truth_(inst_39939)){
var statearr_39998_40024 = state_39976__$1;
(statearr_39998_40024[(1)] = (11));

} else {
var statearr_39999_40025 = state_39976__$1;
(statearr_39999_40025[(1)] = (12));

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
});})(c__29940__auto___40007,ch))
;
return ((function (switch__29828__auto__,c__29940__auto___40007,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____0 = (function (){
var statearr_40003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40003[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__);

(statearr_40003[(1)] = (1));

return statearr_40003;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____1 = (function (state_39976){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_39976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e40004){if((e40004 instanceof Object)){
var ex__29832__auto__ = e40004;
var statearr_40005_40026 = state_39976;
(statearr_40005_40026[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40027 = state_39976;
state_39976 = G__40027;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__ = function(state_39976){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____1.call(this,state_39976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29829__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___40007,ch))
})();
var state__29942__auto__ = (function (){var statearr_40006 = f__29941__auto__.call(null);
(statearr_40006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___40007);

return statearr_40006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___40007,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40028_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40028_SHARP_));
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
var base_path_40035 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40035){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40033 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40034 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_40033,_STAR_print_newline_STAR_40034,base_path_40035){
return (function() { 
var G__40036__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__40036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40037__i = 0, G__40037__a = new Array(arguments.length -  0);
while (G__40037__i < G__40037__a.length) {G__40037__a[G__40037__i] = arguments[G__40037__i + 0]; ++G__40037__i;}
  args = new cljs.core.IndexedSeq(G__40037__a,0);
} 
return G__40036__delegate.call(this,args);};
G__40036.cljs$lang$maxFixedArity = 0;
G__40036.cljs$lang$applyTo = (function (arglist__40038){
var args = cljs.core.seq(arglist__40038);
return G__40036__delegate(args);
});
G__40036.cljs$core$IFn$_invoke$arity$variadic = G__40036__delegate;
return G__40036;
})()
;})(_STAR_print_fn_STAR_40033,_STAR_print_newline_STAR_40034,base_path_40035))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40034;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40033;
}}catch (e40032){if((e40032 instanceof Error)){
var e = e40032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40035], null));
} else {
var e = e40032;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40035))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40039){
var map__40046 = p__40039;
var map__40046__$1 = ((((!((map__40046 == null)))?((((map__40046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40046):map__40046);
var opts = map__40046__$1;
var build_id = cljs.core.get.call(null,map__40046__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40046,map__40046__$1,opts,build_id){
return (function (p__40048){
var vec__40049 = p__40048;
var map__40050 = cljs.core.nth.call(null,vec__40049,(0),null);
var map__40050__$1 = ((((!((map__40050 == null)))?((((map__40050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40050):map__40050);
var msg = map__40050__$1;
var msg_name = cljs.core.get.call(null,map__40050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40049,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40049,map__40050,map__40050__$1,msg,msg_name,_,map__40046,map__40046__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40049,map__40050,map__40050__$1,msg,msg_name,_,map__40046,map__40046__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40046,map__40046__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40056){
var vec__40057 = p__40056;
var map__40058 = cljs.core.nth.call(null,vec__40057,(0),null);
var map__40058__$1 = ((((!((map__40058 == null)))?((((map__40058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40058):map__40058);
var msg = map__40058__$1;
var msg_name = cljs.core.get.call(null,map__40058__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40057,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40060){
var map__40070 = p__40060;
var map__40070__$1 = ((((!((map__40070 == null)))?((((map__40070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40070):map__40070);
var on_compile_warning = cljs.core.get.call(null,map__40070__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40070__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40070,map__40070__$1,on_compile_warning,on_compile_fail){
return (function (p__40072){
var vec__40073 = p__40072;
var map__40074 = cljs.core.nth.call(null,vec__40073,(0),null);
var map__40074__$1 = ((((!((map__40074 == null)))?((((map__40074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40074):map__40074);
var msg = map__40074__$1;
var msg_name = cljs.core.get.call(null,map__40074__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40073,(1));
var pred__40076 = cljs.core._EQ_;
var expr__40077 = msg_name;
if(cljs.core.truth_(pred__40076.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40077))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40076.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40077))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40070,map__40070__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__,msg_hist,msg_names,msg){
return (function (state_40293){
var state_val_40294 = (state_40293[(1)]);
if((state_val_40294 === (7))){
var inst_40217 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40217)){
var statearr_40295_40341 = state_40293__$1;
(statearr_40295_40341[(1)] = (8));

} else {
var statearr_40296_40342 = state_40293__$1;
(statearr_40296_40342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (20))){
var inst_40287 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40297_40343 = state_40293__$1;
(statearr_40297_40343[(2)] = inst_40287);

(statearr_40297_40343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (27))){
var inst_40283 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40298_40344 = state_40293__$1;
(statearr_40298_40344[(2)] = inst_40283);

(statearr_40298_40344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (1))){
var inst_40210 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40210)){
var statearr_40299_40345 = state_40293__$1;
(statearr_40299_40345[(1)] = (2));

} else {
var statearr_40300_40346 = state_40293__$1;
(statearr_40300_40346[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (24))){
var inst_40285 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40301_40347 = state_40293__$1;
(statearr_40301_40347[(2)] = inst_40285);

(statearr_40301_40347[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (4))){
var inst_40291 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40293__$1,inst_40291);
} else {
if((state_val_40294 === (15))){
var inst_40289 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40302_40348 = state_40293__$1;
(statearr_40302_40348[(2)] = inst_40289);

(statearr_40302_40348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (21))){
var inst_40248 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40303_40349 = state_40293__$1;
(statearr_40303_40349[(2)] = inst_40248);

(statearr_40303_40349[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (31))){
var inst_40272 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40272)){
var statearr_40304_40350 = state_40293__$1;
(statearr_40304_40350[(1)] = (34));

} else {
var statearr_40305_40351 = state_40293__$1;
(statearr_40305_40351[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (32))){
var inst_40281 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40306_40352 = state_40293__$1;
(statearr_40306_40352[(2)] = inst_40281);

(statearr_40306_40352[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (33))){
var inst_40270 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40307_40353 = state_40293__$1;
(statearr_40307_40353[(2)] = inst_40270);

(statearr_40307_40353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (13))){
var inst_40231 = figwheel.client.heads_up.clear.call(null);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(16),inst_40231);
} else {
if((state_val_40294 === (22))){
var inst_40252 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40253 = figwheel.client.heads_up.append_message.call(null,inst_40252);
var state_40293__$1 = state_40293;
var statearr_40308_40354 = state_40293__$1;
(statearr_40308_40354[(2)] = inst_40253);

(statearr_40308_40354[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (36))){
var inst_40279 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40309_40355 = state_40293__$1;
(statearr_40309_40355[(2)] = inst_40279);

(statearr_40309_40355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (29))){
var inst_40263 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40310_40356 = state_40293__$1;
(statearr_40310_40356[(2)] = inst_40263);

(statearr_40310_40356[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (6))){
var inst_40212 = (state_40293[(7)]);
var state_40293__$1 = state_40293;
var statearr_40311_40357 = state_40293__$1;
(statearr_40311_40357[(2)] = inst_40212);

(statearr_40311_40357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (28))){
var inst_40259 = (state_40293[(2)]);
var inst_40260 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40261 = figwheel.client.heads_up.display_warning.call(null,inst_40260);
var state_40293__$1 = (function (){var statearr_40312 = state_40293;
(statearr_40312[(8)] = inst_40259);

return statearr_40312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(29),inst_40261);
} else {
if((state_val_40294 === (25))){
var inst_40257 = figwheel.client.heads_up.clear.call(null);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(28),inst_40257);
} else {
if((state_val_40294 === (34))){
var inst_40274 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(37),inst_40274);
} else {
if((state_val_40294 === (17))){
var inst_40239 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40313_40358 = state_40293__$1;
(statearr_40313_40358[(2)] = inst_40239);

(statearr_40313_40358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (3))){
var inst_40229 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40229)){
var statearr_40314_40359 = state_40293__$1;
(statearr_40314_40359[(1)] = (13));

} else {
var statearr_40315_40360 = state_40293__$1;
(statearr_40315_40360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (12))){
var inst_40225 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40316_40361 = state_40293__$1;
(statearr_40316_40361[(2)] = inst_40225);

(statearr_40316_40361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (2))){
var inst_40212 = (state_40293[(7)]);
var inst_40212__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40293__$1 = (function (){var statearr_40317 = state_40293;
(statearr_40317[(7)] = inst_40212__$1);

return statearr_40317;
})();
if(cljs.core.truth_(inst_40212__$1)){
var statearr_40318_40362 = state_40293__$1;
(statearr_40318_40362[(1)] = (5));

} else {
var statearr_40319_40363 = state_40293__$1;
(statearr_40319_40363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (23))){
var inst_40255 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40255)){
var statearr_40320_40364 = state_40293__$1;
(statearr_40320_40364[(1)] = (25));

} else {
var statearr_40321_40365 = state_40293__$1;
(statearr_40321_40365[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (35))){
var state_40293__$1 = state_40293;
var statearr_40322_40366 = state_40293__$1;
(statearr_40322_40366[(2)] = null);

(statearr_40322_40366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (19))){
var inst_40250 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40250)){
var statearr_40323_40367 = state_40293__$1;
(statearr_40323_40367[(1)] = (22));

} else {
var statearr_40324_40368 = state_40293__$1;
(statearr_40324_40368[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (11))){
var inst_40221 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40325_40369 = state_40293__$1;
(statearr_40325_40369[(2)] = inst_40221);

(statearr_40325_40369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (9))){
var inst_40223 = figwheel.client.heads_up.clear.call(null);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(12),inst_40223);
} else {
if((state_val_40294 === (5))){
var inst_40214 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40293__$1 = state_40293;
var statearr_40326_40370 = state_40293__$1;
(statearr_40326_40370[(2)] = inst_40214);

(statearr_40326_40370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (14))){
var inst_40241 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40241)){
var statearr_40327_40371 = state_40293__$1;
(statearr_40327_40371[(1)] = (18));

} else {
var statearr_40328_40372 = state_40293__$1;
(statearr_40328_40372[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (26))){
var inst_40265 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40265)){
var statearr_40329_40373 = state_40293__$1;
(statearr_40329_40373[(1)] = (30));

} else {
var statearr_40330_40374 = state_40293__$1;
(statearr_40330_40374[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (16))){
var inst_40233 = (state_40293[(2)]);
var inst_40234 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40235 = figwheel.client.format_messages.call(null,inst_40234);
var inst_40236 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40237 = figwheel.client.heads_up.display_error.call(null,inst_40235,inst_40236);
var state_40293__$1 = (function (){var statearr_40331 = state_40293;
(statearr_40331[(9)] = inst_40233);

return statearr_40331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(17),inst_40237);
} else {
if((state_val_40294 === (30))){
var inst_40267 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40268 = figwheel.client.heads_up.display_warning.call(null,inst_40267);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(33),inst_40268);
} else {
if((state_val_40294 === (10))){
var inst_40227 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40332_40375 = state_40293__$1;
(statearr_40332_40375[(2)] = inst_40227);

(statearr_40332_40375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (18))){
var inst_40243 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40244 = figwheel.client.format_messages.call(null,inst_40243);
var inst_40245 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40246 = figwheel.client.heads_up.display_error.call(null,inst_40244,inst_40245);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(21),inst_40246);
} else {
if((state_val_40294 === (37))){
var inst_40276 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40333_40376 = state_40293__$1;
(statearr_40333_40376[(2)] = inst_40276);

(statearr_40333_40376[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (8))){
var inst_40219 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40293__$1,(11),inst_40219);
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
});})(c__29940__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29828__auto__,c__29940__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____0 = (function (){
var statearr_40337 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40337[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__);

(statearr_40337[(1)] = (1));

return statearr_40337;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____1 = (function (state_40293){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_40293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e40338){if((e40338 instanceof Object)){
var ex__29832__auto__ = e40338;
var statearr_40339_40377 = state_40293;
(statearr_40339_40377[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40378 = state_40293;
state_40293 = G__40378;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__ = function(state_40293){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____1.call(this,state_40293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__,msg_hist,msg_names,msg))
})();
var state__29942__auto__ = (function (){var statearr_40340 = f__29941__auto__.call(null);
(statearr_40340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_40340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__,msg_hist,msg_names,msg))
);

return c__29940__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29940__auto___40441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto___40441,ch){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto___40441,ch){
return (function (state_40424){
var state_val_40425 = (state_40424[(1)]);
if((state_val_40425 === (1))){
var state_40424__$1 = state_40424;
var statearr_40426_40442 = state_40424__$1;
(statearr_40426_40442[(2)] = null);

(statearr_40426_40442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (2))){
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40424__$1,(4),ch);
} else {
if((state_val_40425 === (3))){
var inst_40422 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40424__$1,inst_40422);
} else {
if((state_val_40425 === (4))){
var inst_40412 = (state_40424[(7)]);
var inst_40412__$1 = (state_40424[(2)]);
var state_40424__$1 = (function (){var statearr_40427 = state_40424;
(statearr_40427[(7)] = inst_40412__$1);

return statearr_40427;
})();
if(cljs.core.truth_(inst_40412__$1)){
var statearr_40428_40443 = state_40424__$1;
(statearr_40428_40443[(1)] = (5));

} else {
var statearr_40429_40444 = state_40424__$1;
(statearr_40429_40444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (5))){
var inst_40412 = (state_40424[(7)]);
var inst_40414 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40412);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40424__$1,(8),inst_40414);
} else {
if((state_val_40425 === (6))){
var state_40424__$1 = state_40424;
var statearr_40430_40445 = state_40424__$1;
(statearr_40430_40445[(2)] = null);

(statearr_40430_40445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (7))){
var inst_40420 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
var statearr_40431_40446 = state_40424__$1;
(statearr_40431_40446[(2)] = inst_40420);

(statearr_40431_40446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (8))){
var inst_40416 = (state_40424[(2)]);
var state_40424__$1 = (function (){var statearr_40432 = state_40424;
(statearr_40432[(8)] = inst_40416);

return statearr_40432;
})();
var statearr_40433_40447 = state_40424__$1;
(statearr_40433_40447[(2)] = null);

(statearr_40433_40447[(1)] = (2));


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
});})(c__29940__auto___40441,ch))
;
return ((function (switch__29828__auto__,c__29940__auto___40441,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29829__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29829__auto____0 = (function (){
var statearr_40437 = [null,null,null,null,null,null,null,null,null];
(statearr_40437[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29829__auto__);

(statearr_40437[(1)] = (1));

return statearr_40437;
});
var figwheel$client$heads_up_plugin_$_state_machine__29829__auto____1 = (function (state_40424){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_40424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e40438){if((e40438 instanceof Object)){
var ex__29832__auto__ = e40438;
var statearr_40439_40448 = state_40424;
(statearr_40439_40448[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40449 = state_40424;
state_40424 = G__40449;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29829__auto__ = function(state_40424){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29829__auto____1.call(this,state_40424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29829__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29829__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto___40441,ch))
})();
var state__29942__auto__ = (function (){var statearr_40440 = f__29941__auto__.call(null);
(statearr_40440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto___40441);

return statearr_40440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto___40441,ch))
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
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_40470){
var state_val_40471 = (state_40470[(1)]);
if((state_val_40471 === (1))){
var inst_40465 = cljs.core.async.timeout.call(null,(3000));
var state_40470__$1 = state_40470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40470__$1,(2),inst_40465);
} else {
if((state_val_40471 === (2))){
var inst_40467 = (state_40470[(2)]);
var inst_40468 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40470__$1 = (function (){var statearr_40472 = state_40470;
(statearr_40472[(7)] = inst_40467);

return statearr_40472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40470__$1,inst_40468);
} else {
return null;
}
}
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____0 = (function (){
var statearr_40476 = [null,null,null,null,null,null,null,null];
(statearr_40476[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__);

(statearr_40476[(1)] = (1));

return statearr_40476;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____1 = (function (state_40470){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_40470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e40477){if((e40477 instanceof Object)){
var ex__29832__auto__ = e40477;
var statearr_40478_40480 = state_40470;
(statearr_40478_40480[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40481 = state_40470;
state_40470 = G__40481;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__ = function(state_40470){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____1.call(this,state_40470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29829__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_40479 = f__29941__auto__.call(null);
(statearr_40479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_40479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40482){
var map__40489 = p__40482;
var map__40489__$1 = ((((!((map__40489 == null)))?((((map__40489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40489):map__40489);
var ed = map__40489__$1;
var formatted_exception = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40489__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40491_40495 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40492_40496 = null;
var count__40493_40497 = (0);
var i__40494_40498 = (0);
while(true){
if((i__40494_40498 < count__40493_40497)){
var msg_40499 = cljs.core._nth.call(null,chunk__40492_40496,i__40494_40498);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40499);

var G__40500 = seq__40491_40495;
var G__40501 = chunk__40492_40496;
var G__40502 = count__40493_40497;
var G__40503 = (i__40494_40498 + (1));
seq__40491_40495 = G__40500;
chunk__40492_40496 = G__40501;
count__40493_40497 = G__40502;
i__40494_40498 = G__40503;
continue;
} else {
var temp__4425__auto___40504 = cljs.core.seq.call(null,seq__40491_40495);
if(temp__4425__auto___40504){
var seq__40491_40505__$1 = temp__4425__auto___40504;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40491_40505__$1)){
var c__26620__auto___40506 = cljs.core.chunk_first.call(null,seq__40491_40505__$1);
var G__40507 = cljs.core.chunk_rest.call(null,seq__40491_40505__$1);
var G__40508 = c__26620__auto___40506;
var G__40509 = cljs.core.count.call(null,c__26620__auto___40506);
var G__40510 = (0);
seq__40491_40495 = G__40507;
chunk__40492_40496 = G__40508;
count__40493_40497 = G__40509;
i__40494_40498 = G__40510;
continue;
} else {
var msg_40511 = cljs.core.first.call(null,seq__40491_40505__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40511);

var G__40512 = cljs.core.next.call(null,seq__40491_40505__$1);
var G__40513 = null;
var G__40514 = (0);
var G__40515 = (0);
seq__40491_40495 = G__40512;
chunk__40492_40496 = G__40513;
count__40493_40497 = G__40514;
i__40494_40498 = G__40515;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40516){
var map__40519 = p__40516;
var map__40519__$1 = ((((!((map__40519 == null)))?((((map__40519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40519):map__40519);
var w = map__40519__$1;
var message = cljs.core.get.call(null,map__40519__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__25797__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25797__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25797__auto__;
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
var seq__40527 = cljs.core.seq.call(null,plugins);
var chunk__40528 = null;
var count__40529 = (0);
var i__40530 = (0);
while(true){
if((i__40530 < count__40529)){
var vec__40531 = cljs.core._nth.call(null,chunk__40528,i__40530);
var k = cljs.core.nth.call(null,vec__40531,(0),null);
var plugin = cljs.core.nth.call(null,vec__40531,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40527,chunk__40528,count__40529,i__40530,pl_40533,vec__40531,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40533.call(null,msg_hist);
});})(seq__40527,chunk__40528,count__40529,i__40530,pl_40533,vec__40531,k,plugin))
);
} else {
}

var G__40534 = seq__40527;
var G__40535 = chunk__40528;
var G__40536 = count__40529;
var G__40537 = (i__40530 + (1));
seq__40527 = G__40534;
chunk__40528 = G__40535;
count__40529 = G__40536;
i__40530 = G__40537;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40527);
if(temp__4425__auto__){
var seq__40527__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40527__$1)){
var c__26620__auto__ = cljs.core.chunk_first.call(null,seq__40527__$1);
var G__40538 = cljs.core.chunk_rest.call(null,seq__40527__$1);
var G__40539 = c__26620__auto__;
var G__40540 = cljs.core.count.call(null,c__26620__auto__);
var G__40541 = (0);
seq__40527 = G__40538;
chunk__40528 = G__40539;
count__40529 = G__40540;
i__40530 = G__40541;
continue;
} else {
var vec__40532 = cljs.core.first.call(null,seq__40527__$1);
var k = cljs.core.nth.call(null,vec__40532,(0),null);
var plugin = cljs.core.nth.call(null,vec__40532,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40527,chunk__40528,count__40529,i__40530,pl_40542,vec__40532,k,plugin,seq__40527__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40542.call(null,msg_hist);
});})(seq__40527,chunk__40528,count__40529,i__40530,pl_40542,vec__40532,k,plugin,seq__40527__$1,temp__4425__auto__))
);
} else {
}

var G__40543 = cljs.core.next.call(null,seq__40527__$1);
var G__40544 = null;
var G__40545 = (0);
var G__40546 = (0);
seq__40527 = G__40543;
chunk__40528 = G__40544;
count__40529 = G__40545;
i__40530 = G__40546;
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
var args40547 = [];
var len__26879__auto___40550 = arguments.length;
var i__26880__auto___40551 = (0);
while(true){
if((i__26880__auto___40551 < len__26879__auto___40550)){
args40547.push((arguments[i__26880__auto___40551]));

var G__40552 = (i__26880__auto___40551 + (1));
i__26880__auto___40551 = G__40552;
continue;
} else {
}
break;
}

var G__40549 = args40547.length;
switch (G__40549) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40547.length)].join('')));

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
var args__26886__auto__ = [];
var len__26879__auto___40558 = arguments.length;
var i__26880__auto___40559 = (0);
while(true){
if((i__26880__auto___40559 < len__26879__auto___40558)){
args__26886__auto__.push((arguments[i__26880__auto___40559]));

var G__40560 = (i__26880__auto___40559 + (1));
i__26880__auto___40559 = G__40560;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((0) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26887__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40555){
var map__40556 = p__40555;
var map__40556__$1 = ((((!((map__40556 == null)))?((((map__40556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40556):map__40556);
var opts = map__40556__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40554){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40554));
});

//# sourceMappingURL=client.js.map