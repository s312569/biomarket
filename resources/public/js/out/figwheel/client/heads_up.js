// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__23640__auto__ = [];
var len__23633__auto___32511 = arguments.length;
var i__23634__auto___32512 = (0);
while(true){
if((i__23634__auto___32512 < len__23633__auto___32511)){
args__23640__auto__.push((arguments[i__23634__auto___32512]));

var G__32513 = (i__23634__auto___32512 + (1));
i__23634__auto___32512 = G__32513;
continue;
} else {
}
break;
}

var argseq__23641__auto__ = ((((2) < args__23640__auto__.length))?(new cljs.core.IndexedSeq(args__23640__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23641__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32503_32514 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32504_32515 = null;
var count__32505_32516 = (0);
var i__32506_32517 = (0);
while(true){
if((i__32506_32517 < count__32505_32516)){
var k_32518 = cljs.core._nth.call(null,chunk__32504_32515,i__32506_32517);
e.setAttribute(cljs.core.name.call(null,k_32518),cljs.core.get.call(null,attrs,k_32518));

var G__32519 = seq__32503_32514;
var G__32520 = chunk__32504_32515;
var G__32521 = count__32505_32516;
var G__32522 = (i__32506_32517 + (1));
seq__32503_32514 = G__32519;
chunk__32504_32515 = G__32520;
count__32505_32516 = G__32521;
i__32506_32517 = G__32522;
continue;
} else {
var temp__4425__auto___32523 = cljs.core.seq.call(null,seq__32503_32514);
if(temp__4425__auto___32523){
var seq__32503_32524__$1 = temp__4425__auto___32523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32503_32524__$1)){
var c__23374__auto___32525 = cljs.core.chunk_first.call(null,seq__32503_32524__$1);
var G__32526 = cljs.core.chunk_rest.call(null,seq__32503_32524__$1);
var G__32527 = c__23374__auto___32525;
var G__32528 = cljs.core.count.call(null,c__23374__auto___32525);
var G__32529 = (0);
seq__32503_32514 = G__32526;
chunk__32504_32515 = G__32527;
count__32505_32516 = G__32528;
i__32506_32517 = G__32529;
continue;
} else {
var k_32530 = cljs.core.first.call(null,seq__32503_32524__$1);
e.setAttribute(cljs.core.name.call(null,k_32530),cljs.core.get.call(null,attrs,k_32530));

var G__32531 = cljs.core.next.call(null,seq__32503_32524__$1);
var G__32532 = null;
var G__32533 = (0);
var G__32534 = (0);
seq__32503_32514 = G__32531;
chunk__32504_32515 = G__32532;
count__32505_32516 = G__32533;
i__32506_32517 = G__32534;
continue;
}
} else {
}
}
break;
}

var seq__32507_32535 = cljs.core.seq.call(null,children);
var chunk__32508_32536 = null;
var count__32509_32537 = (0);
var i__32510_32538 = (0);
while(true){
if((i__32510_32538 < count__32509_32537)){
var ch_32539 = cljs.core._nth.call(null,chunk__32508_32536,i__32510_32538);
e.appendChild(ch_32539);

var G__32540 = seq__32507_32535;
var G__32541 = chunk__32508_32536;
var G__32542 = count__32509_32537;
var G__32543 = (i__32510_32538 + (1));
seq__32507_32535 = G__32540;
chunk__32508_32536 = G__32541;
count__32509_32537 = G__32542;
i__32510_32538 = G__32543;
continue;
} else {
var temp__4425__auto___32544 = cljs.core.seq.call(null,seq__32507_32535);
if(temp__4425__auto___32544){
var seq__32507_32545__$1 = temp__4425__auto___32544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32507_32545__$1)){
var c__23374__auto___32546 = cljs.core.chunk_first.call(null,seq__32507_32545__$1);
var G__32547 = cljs.core.chunk_rest.call(null,seq__32507_32545__$1);
var G__32548 = c__23374__auto___32546;
var G__32549 = cljs.core.count.call(null,c__23374__auto___32546);
var G__32550 = (0);
seq__32507_32535 = G__32547;
chunk__32508_32536 = G__32548;
count__32509_32537 = G__32549;
i__32510_32538 = G__32550;
continue;
} else {
var ch_32551 = cljs.core.first.call(null,seq__32507_32545__$1);
e.appendChild(ch_32551);

var G__32552 = cljs.core.next.call(null,seq__32507_32545__$1);
var G__32553 = null;
var G__32554 = (0);
var G__32555 = (0);
seq__32507_32535 = G__32552;
chunk__32508_32536 = G__32553;
count__32509_32537 = G__32554;
i__32510_32538 = G__32555;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq32500){
var G__32501 = cljs.core.first.call(null,seq32500);
var seq32500__$1 = cljs.core.next.call(null,seq32500);
var G__32502 = cljs.core.first.call(null,seq32500__$1);
var seq32500__$2 = cljs.core.next.call(null,seq32500__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__32501,G__32502,seq32500__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__23488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23489__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23492__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__23488__auto__,prefer_table__23489__auto__,method_cache__23490__auto__,cached_hierarchy__23491__auto__,hierarchy__23492__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__23488__auto__,prefer_table__23489__auto__,method_cache__23490__auto__,cached_hierarchy__23491__auto__,hierarchy__23492__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23492__auto__,method_table__23488__auto__,prefer_table__23489__auto__,method_cache__23490__auto__,cached_hierarchy__23491__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_32556 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_32556.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_32556.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_32556.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_32556);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__32557,st_map){
var map__32562 = p__32557;
var map__32562__$1 = ((((!((map__32562 == null)))?((((map__32562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32562):map__32562);
var container_el = cljs.core.get.call(null,map__32562__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32562,map__32562__$1,container_el){
return (function (p__32564){
var vec__32565 = p__32564;
var k = cljs.core.nth.call(null,vec__32565,(0),null);
var v = cljs.core.nth.call(null,vec__32565,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32562,map__32562__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__32566,dom_str){
var map__32569 = p__32566;
var map__32569__$1 = ((((!((map__32569 == null)))?((((map__32569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32569):map__32569);
var c = map__32569__$1;
var content_area_el = cljs.core.get.call(null,map__32569__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__32571){
var map__32574 = p__32571;
var map__32574__$1 = ((((!((map__32574 == null)))?((((map__32574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32574):map__32574);
var content_area_el = cljs.core.get.call(null,map__32574__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_32617){
var state_val_32618 = (state_32617[(1)]);
if((state_val_32618 === (1))){
var inst_32602 = (state_32617[(7)]);
var inst_32602__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32603 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32604 = ["10px","10px","100%","68px","1.0"];
var inst_32605 = cljs.core.PersistentHashMap.fromArrays(inst_32603,inst_32604);
var inst_32606 = cljs.core.merge.call(null,inst_32605,style);
var inst_32607 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32602__$1,inst_32606);
var inst_32608 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32602__$1,msg);
var inst_32609 = cljs.core.async.timeout.call(null,(300));
var state_32617__$1 = (function (){var statearr_32619 = state_32617;
(statearr_32619[(8)] = inst_32608);

(statearr_32619[(7)] = inst_32602__$1);

(statearr_32619[(9)] = inst_32607);

return statearr_32619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32617__$1,(2),inst_32609);
} else {
if((state_val_32618 === (2))){
var inst_32602 = (state_32617[(7)]);
var inst_32611 = (state_32617[(2)]);
var inst_32612 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32613 = ["auto"];
var inst_32614 = cljs.core.PersistentHashMap.fromArrays(inst_32612,inst_32613);
var inst_32615 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32602,inst_32614);
var state_32617__$1 = (function (){var statearr_32620 = state_32617;
(statearr_32620[(10)] = inst_32611);

return statearr_32620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32617__$1,inst_32615);
} else {
return null;
}
}
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____1 = (function (state_32617){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_32617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e32625){if((e32625 instanceof Object)){
var ex__26586__auto__ = e32625;
var statearr_32626_32628 = state_32617;
(statearr_32626_32628[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32629 = state_32617;
state_32617 = G__32629;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__ = function(state_32617){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____1.call(this,state_32617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_32627 = f__26695__auto__.call(null);
(statearr_32627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__32631 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__32631,(0),null);
var ln = cljs.core.nth.call(null,vec__32631,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__32634 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__32634,(0),null);
var file_line = cljs.core.nth.call(null,vec__32634,(1),null);
var file_column = cljs.core.nth.call(null,vec__32634,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32634,file_name,file_line,file_column){
return (function (p1__32632_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__32632_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__32634,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__22563__auto__ = file_line;
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
var and__22551__auto__ = cause;
if(cljs.core.truth_(and__22551__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__22551__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__32637 = figwheel.client.heads_up.ensure_container.call(null);
var map__32637__$1 = ((((!((map__32637 == null)))?((((map__32637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32637):map__32637);
var content_area_el = cljs.core.get.call(null,map__32637__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_32685){
var state_val_32686 = (state_32685[(1)]);
if((state_val_32686 === (1))){
var inst_32668 = (state_32685[(7)]);
var inst_32668__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32669 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32670 = ["0.0"];
var inst_32671 = cljs.core.PersistentHashMap.fromArrays(inst_32669,inst_32670);
var inst_32672 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32668__$1,inst_32671);
var inst_32673 = cljs.core.async.timeout.call(null,(300));
var state_32685__$1 = (function (){var statearr_32687 = state_32685;
(statearr_32687[(7)] = inst_32668__$1);

(statearr_32687[(8)] = inst_32672);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,(2),inst_32673);
} else {
if((state_val_32686 === (2))){
var inst_32668 = (state_32685[(7)]);
var inst_32675 = (state_32685[(2)]);
var inst_32676 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32677 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32678 = cljs.core.PersistentHashMap.fromArrays(inst_32676,inst_32677);
var inst_32679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32668,inst_32678);
var inst_32680 = cljs.core.async.timeout.call(null,(200));
var state_32685__$1 = (function (){var statearr_32688 = state_32685;
(statearr_32688[(9)] = inst_32679);

(statearr_32688[(10)] = inst_32675);

return statearr_32688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,(3),inst_32680);
} else {
if((state_val_32686 === (3))){
var inst_32668 = (state_32685[(7)]);
var inst_32682 = (state_32685[(2)]);
var inst_32683 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32668,"");
var state_32685__$1 = (function (){var statearr_32689 = state_32685;
(statearr_32689[(11)] = inst_32682);

return statearr_32689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32685__$1,inst_32683);
} else {
return null;
}
}
}
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__26583__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__26583__auto____0 = (function (){
var statearr_32693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32693[(0)] = figwheel$client$heads_up$clear_$_state_machine__26583__auto__);

(statearr_32693[(1)] = (1));

return statearr_32693;
});
var figwheel$client$heads_up$clear_$_state_machine__26583__auto____1 = (function (state_32685){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_32685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e32694){if((e32694 instanceof Object)){
var ex__26586__auto__ = e32694;
var statearr_32695_32697 = state_32685;
(statearr_32695_32697[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32698 = state_32685;
state_32685 = G__32698;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__26583__auto__ = function(state_32685){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__26583__auto____1.call(this,state_32685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__26583__auto____0;
figwheel$client$heads_up$clear_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__26583__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_32696 = f__26695__auto__.call(null);
(statearr_32696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_32696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__26694__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26694__auto__){
return (function (){
var f__26695__auto__ = (function (){var switch__26582__auto__ = ((function (c__26694__auto__){
return (function (state_32730){
var state_val_32731 = (state_32730[(1)]);
if((state_val_32731 === (1))){
var inst_32720 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32730__$1,(2),inst_32720);
} else {
if((state_val_32731 === (2))){
var inst_32722 = (state_32730[(2)]);
var inst_32723 = cljs.core.async.timeout.call(null,(400));
var state_32730__$1 = (function (){var statearr_32732 = state_32730;
(statearr_32732[(7)] = inst_32722);

return statearr_32732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32730__$1,(3),inst_32723);
} else {
if((state_val_32731 === (3))){
var inst_32725 = (state_32730[(2)]);
var inst_32726 = figwheel.client.heads_up.clear.call(null);
var state_32730__$1 = (function (){var statearr_32733 = state_32730;
(statearr_32733[(8)] = inst_32725);

return statearr_32733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32730__$1,(4),inst_32726);
} else {
if((state_val_32731 === (4))){
var inst_32728 = (state_32730[(2)]);
var state_32730__$1 = state_32730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32730__$1,inst_32728);
} else {
return null;
}
}
}
}
});})(c__26694__auto__))
;
return ((function (switch__26582__auto__,c__26694__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____0 = (function (){
var statearr_32737 = [null,null,null,null,null,null,null,null,null];
(statearr_32737[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__);

(statearr_32737[(1)] = (1));

return statearr_32737;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____1 = (function (state_32730){
while(true){
var ret_value__26584__auto__ = (function (){try{while(true){
var result__26585__auto__ = switch__26582__auto__.call(null,state_32730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26585__auto__;
}
break;
}
}catch (e32738){if((e32738 instanceof Object)){
var ex__26586__auto__ = e32738;
var statearr_32739_32741 = state_32730;
(statearr_32739_32741[(5)] = ex__26586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32742 = state_32730;
state_32730 = G__32742;
continue;
} else {
return ret_value__26584__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__ = function(state_32730){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____1.call(this,state_32730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__26583__auto__;
})()
;})(switch__26582__auto__,c__26694__auto__))
})();
var state__26696__auto__ = (function (){var statearr_32740 = f__26695__auto__.call(null);
(statearr_32740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26694__auto__);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26696__auto__);
});})(c__26694__auto__))
);

return c__26694__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map