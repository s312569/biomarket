// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__26889__auto__ = [];
var len__26882__auto___39575 = arguments.length;
var i__26883__auto___39576 = (0);
while(true){
if((i__26883__auto___39576 < len__26882__auto___39575)){
args__26889__auto__.push((arguments[i__26883__auto___39576]));

var G__39577 = (i__26883__auto___39576 + (1));
i__26883__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var argseq__26890__auto__ = ((((2) < args__26889__auto__.length))?(new cljs.core.IndexedSeq(args__26889__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26890__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39567_39578 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39568_39579 = null;
var count__39569_39580 = (0);
var i__39570_39581 = (0);
while(true){
if((i__39570_39581 < count__39569_39580)){
var k_39582 = cljs.core._nth.call(null,chunk__39568_39579,i__39570_39581);
e.setAttribute(cljs.core.name.call(null,k_39582),cljs.core.get.call(null,attrs,k_39582));

var G__39583 = seq__39567_39578;
var G__39584 = chunk__39568_39579;
var G__39585 = count__39569_39580;
var G__39586 = (i__39570_39581 + (1));
seq__39567_39578 = G__39583;
chunk__39568_39579 = G__39584;
count__39569_39580 = G__39585;
i__39570_39581 = G__39586;
continue;
} else {
var temp__4425__auto___39587 = cljs.core.seq.call(null,seq__39567_39578);
if(temp__4425__auto___39587){
var seq__39567_39588__$1 = temp__4425__auto___39587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39567_39588__$1)){
var c__26623__auto___39589 = cljs.core.chunk_first.call(null,seq__39567_39588__$1);
var G__39590 = cljs.core.chunk_rest.call(null,seq__39567_39588__$1);
var G__39591 = c__26623__auto___39589;
var G__39592 = cljs.core.count.call(null,c__26623__auto___39589);
var G__39593 = (0);
seq__39567_39578 = G__39590;
chunk__39568_39579 = G__39591;
count__39569_39580 = G__39592;
i__39570_39581 = G__39593;
continue;
} else {
var k_39594 = cljs.core.first.call(null,seq__39567_39588__$1);
e.setAttribute(cljs.core.name.call(null,k_39594),cljs.core.get.call(null,attrs,k_39594));

var G__39595 = cljs.core.next.call(null,seq__39567_39588__$1);
var G__39596 = null;
var G__39597 = (0);
var G__39598 = (0);
seq__39567_39578 = G__39595;
chunk__39568_39579 = G__39596;
count__39569_39580 = G__39597;
i__39570_39581 = G__39598;
continue;
}
} else {
}
}
break;
}

var seq__39571_39599 = cljs.core.seq.call(null,children);
var chunk__39572_39600 = null;
var count__39573_39601 = (0);
var i__39574_39602 = (0);
while(true){
if((i__39574_39602 < count__39573_39601)){
var ch_39603 = cljs.core._nth.call(null,chunk__39572_39600,i__39574_39602);
e.appendChild(ch_39603);

var G__39604 = seq__39571_39599;
var G__39605 = chunk__39572_39600;
var G__39606 = count__39573_39601;
var G__39607 = (i__39574_39602 + (1));
seq__39571_39599 = G__39604;
chunk__39572_39600 = G__39605;
count__39573_39601 = G__39606;
i__39574_39602 = G__39607;
continue;
} else {
var temp__4425__auto___39608 = cljs.core.seq.call(null,seq__39571_39599);
if(temp__4425__auto___39608){
var seq__39571_39609__$1 = temp__4425__auto___39608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39571_39609__$1)){
var c__26623__auto___39610 = cljs.core.chunk_first.call(null,seq__39571_39609__$1);
var G__39611 = cljs.core.chunk_rest.call(null,seq__39571_39609__$1);
var G__39612 = c__26623__auto___39610;
var G__39613 = cljs.core.count.call(null,c__26623__auto___39610);
var G__39614 = (0);
seq__39571_39599 = G__39611;
chunk__39572_39600 = G__39612;
count__39573_39601 = G__39613;
i__39574_39602 = G__39614;
continue;
} else {
var ch_39615 = cljs.core.first.call(null,seq__39571_39609__$1);
e.appendChild(ch_39615);

var G__39616 = cljs.core.next.call(null,seq__39571_39609__$1);
var G__39617 = null;
var G__39618 = (0);
var G__39619 = (0);
seq__39571_39599 = G__39616;
chunk__39572_39600 = G__39617;
count__39573_39601 = G__39618;
i__39574_39602 = G__39619;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39564){
var G__39565 = cljs.core.first.call(null,seq39564);
var seq39564__$1 = cljs.core.next.call(null,seq39564);
var G__39566 = cljs.core.first.call(null,seq39564__$1);
var seq39564__$2 = cljs.core.next.call(null,seq39564__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__39565,G__39566,seq39564__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26738__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26741__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__,hierarchy__26741__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26741__auto__,method_table__26737__auto__,prefer_table__26738__auto__,method_cache__26739__auto__,cached_hierarchy__26740__auto__));
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
var el_39620 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_39620.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39620.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39620.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39620);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39621,st_map){
var map__39626 = p__39621;
var map__39626__$1 = ((((!((map__39626 == null)))?((((map__39626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39626):map__39626);
var container_el = cljs.core.get.call(null,map__39626__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39626,map__39626__$1,container_el){
return (function (p__39628){
var vec__39629 = p__39628;
var k = cljs.core.nth.call(null,vec__39629,(0),null);
var v = cljs.core.nth.call(null,vec__39629,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__39626,map__39626__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39630,dom_str){
var map__39633 = p__39630;
var map__39633__$1 = ((((!((map__39633 == null)))?((((map__39633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39633):map__39633);
var c = map__39633__$1;
var content_area_el = cljs.core.get.call(null,map__39633__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39635){
var map__39638 = p__39635;
var map__39638__$1 = ((((!((map__39638 == null)))?((((map__39638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39638):map__39638);
var content_area_el = cljs.core.get.call(null,map__39638__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_39681){
var state_val_39682 = (state_39681[(1)]);
if((state_val_39682 === (1))){
var inst_39666 = (state_39681[(7)]);
var inst_39666__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39667 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39668 = ["10px","10px","100%","68px","1.0"];
var inst_39669 = cljs.core.PersistentHashMap.fromArrays(inst_39667,inst_39668);
var inst_39670 = cljs.core.merge.call(null,inst_39669,style);
var inst_39671 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39666__$1,inst_39670);
var inst_39672 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39666__$1,msg);
var inst_39673 = cljs.core.async.timeout.call(null,(300));
var state_39681__$1 = (function (){var statearr_39683 = state_39681;
(statearr_39683[(8)] = inst_39671);

(statearr_39683[(9)] = inst_39672);

(statearr_39683[(7)] = inst_39666__$1);

return statearr_39683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39681__$1,(2),inst_39673);
} else {
if((state_val_39682 === (2))){
var inst_39666 = (state_39681[(7)]);
var inst_39675 = (state_39681[(2)]);
var inst_39676 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39677 = ["auto"];
var inst_39678 = cljs.core.PersistentHashMap.fromArrays(inst_39676,inst_39677);
var inst_39679 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39666,inst_39678);
var state_39681__$1 = (function (){var statearr_39684 = state_39681;
(statearr_39684[(10)] = inst_39675);

return statearr_39684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39681__$1,inst_39679);
} else {
return null;
}
}
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____0 = (function (){
var statearr_39688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39688[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__);

(statearr_39688[(1)] = (1));

return statearr_39688;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____1 = (function (state_39681){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_39681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e39689){if((e39689 instanceof Object)){
var ex__29835__auto__ = e39689;
var statearr_39690_39692 = state_39681;
(statearr_39690_39692[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39693 = state_39681;
state_39681 = G__39693;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__ = function(state_39681){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____1.call(this,state_39681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_39691 = f__29944__auto__.call(null);
(statearr_39691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_39691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
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
var vec__39695 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__39695,(0),null);
var ln = cljs.core.nth.call(null,vec__39695,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__39698 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__39698,(0),null);
var file_line = cljs.core.nth.call(null,vec__39698,(1),null);
var file_column = cljs.core.nth.call(null,vec__39698,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__39698,file_name,file_line,file_column){
return (function (p1__39696_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__39696_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__39698,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25812__auto__ = file_line;
if(cljs.core.truth_(or__25812__auto__)){
return or__25812__auto__;
} else {
var and__25800__auto__ = cause;
if(cljs.core.truth_(and__25800__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25800__auto__;
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
var map__39701 = figwheel.client.heads_up.ensure_container.call(null);
var map__39701__$1 = ((((!((map__39701 == null)))?((((map__39701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39701):map__39701);
var content_area_el = cljs.core.get.call(null,map__39701__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_39749){
var state_val_39750 = (state_39749[(1)]);
if((state_val_39750 === (1))){
var inst_39732 = (state_39749[(7)]);
var inst_39732__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39733 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39734 = ["0.0"];
var inst_39735 = cljs.core.PersistentHashMap.fromArrays(inst_39733,inst_39734);
var inst_39736 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39732__$1,inst_39735);
var inst_39737 = cljs.core.async.timeout.call(null,(300));
var state_39749__$1 = (function (){var statearr_39751 = state_39749;
(statearr_39751[(7)] = inst_39732__$1);

(statearr_39751[(8)] = inst_39736);

return statearr_39751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39749__$1,(2),inst_39737);
} else {
if((state_val_39750 === (2))){
var inst_39732 = (state_39749[(7)]);
var inst_39739 = (state_39749[(2)]);
var inst_39740 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39741 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39742 = cljs.core.PersistentHashMap.fromArrays(inst_39740,inst_39741);
var inst_39743 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39732,inst_39742);
var inst_39744 = cljs.core.async.timeout.call(null,(200));
var state_39749__$1 = (function (){var statearr_39752 = state_39749;
(statearr_39752[(9)] = inst_39743);

(statearr_39752[(10)] = inst_39739);

return statearr_39752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39749__$1,(3),inst_39744);
} else {
if((state_val_39750 === (3))){
var inst_39732 = (state_39749[(7)]);
var inst_39746 = (state_39749[(2)]);
var inst_39747 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39732,"");
var state_39749__$1 = (function (){var statearr_39753 = state_39749;
(statearr_39753[(11)] = inst_39746);

return statearr_39753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39749__$1,inst_39747);
} else {
return null;
}
}
}
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29832__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29832__auto____0 = (function (){
var statearr_39757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39757[(0)] = figwheel$client$heads_up$clear_$_state_machine__29832__auto__);

(statearr_39757[(1)] = (1));

return statearr_39757;
});
var figwheel$client$heads_up$clear_$_state_machine__29832__auto____1 = (function (state_39749){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_39749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e39758){if((e39758 instanceof Object)){
var ex__29835__auto__ = e39758;
var statearr_39759_39761 = state_39749;
(statearr_39759_39761[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39762 = state_39749;
state_39749 = G__39762;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29832__auto__ = function(state_39749){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29832__auto____1.call(this,state_39749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29832__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29832__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_39760 = f__29944__auto__.call(null);
(statearr_39760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_39760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29943__auto__){
return (function (){
var f__29944__auto__ = (function (){var switch__29831__auto__ = ((function (c__29943__auto__){
return (function (state_39794){
var state_val_39795 = (state_39794[(1)]);
if((state_val_39795 === (1))){
var inst_39784 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39794__$1 = state_39794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39794__$1,(2),inst_39784);
} else {
if((state_val_39795 === (2))){
var inst_39786 = (state_39794[(2)]);
var inst_39787 = cljs.core.async.timeout.call(null,(400));
var state_39794__$1 = (function (){var statearr_39796 = state_39794;
(statearr_39796[(7)] = inst_39786);

return statearr_39796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39794__$1,(3),inst_39787);
} else {
if((state_val_39795 === (3))){
var inst_39789 = (state_39794[(2)]);
var inst_39790 = figwheel.client.heads_up.clear.call(null);
var state_39794__$1 = (function (){var statearr_39797 = state_39794;
(statearr_39797[(8)] = inst_39789);

return statearr_39797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39794__$1,(4),inst_39790);
} else {
if((state_val_39795 === (4))){
var inst_39792 = (state_39794[(2)]);
var state_39794__$1 = state_39794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39794__$1,inst_39792);
} else {
return null;
}
}
}
}
});})(c__29943__auto__))
;
return ((function (switch__29831__auto__,c__29943__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____0 = (function (){
var statearr_39801 = [null,null,null,null,null,null,null,null,null];
(statearr_39801[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__);

(statearr_39801[(1)] = (1));

return statearr_39801;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____1 = (function (state_39794){
while(true){
var ret_value__29833__auto__ = (function (){try{while(true){
var result__29834__auto__ = switch__29831__auto__.call(null,state_39794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29834__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29834__auto__;
}
break;
}
}catch (e39802){if((e39802 instanceof Object)){
var ex__29835__auto__ = e39802;
var statearr_39803_39805 = state_39794;
(statearr_39803_39805[(5)] = ex__29835__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39806 = state_39794;
state_39794 = G__39806;
continue;
} else {
return ret_value__29833__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__ = function(state_39794){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____1.call(this,state_39794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29832__auto__;
})()
;})(switch__29831__auto__,c__29943__auto__))
})();
var state__29945__auto__ = (function (){var statearr_39804 = f__29944__auto__.call(null);
(statearr_39804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29943__auto__);

return statearr_39804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29945__auto__);
});})(c__29943__auto__))
);

return c__29943__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map