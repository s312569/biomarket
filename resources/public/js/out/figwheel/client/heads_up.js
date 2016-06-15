// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__26886__auto__ = [];
var len__26879__auto___39602 = arguments.length;
var i__26880__auto___39603 = (0);
while(true){
if((i__26880__auto___39603 < len__26879__auto___39602)){
args__26886__auto__.push((arguments[i__26880__auto___39603]));

var G__39604 = (i__26880__auto___39603 + (1));
i__26880__auto___39603 = G__39604;
continue;
} else {
}
break;
}

var argseq__26887__auto__ = ((((2) < args__26886__auto__.length))?(new cljs.core.IndexedSeq(args__26886__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26887__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39594_39605 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39595_39606 = null;
var count__39596_39607 = (0);
var i__39597_39608 = (0);
while(true){
if((i__39597_39608 < count__39596_39607)){
var k_39609 = cljs.core._nth.call(null,chunk__39595_39606,i__39597_39608);
e.setAttribute(cljs.core.name.call(null,k_39609),cljs.core.get.call(null,attrs,k_39609));

var G__39610 = seq__39594_39605;
var G__39611 = chunk__39595_39606;
var G__39612 = count__39596_39607;
var G__39613 = (i__39597_39608 + (1));
seq__39594_39605 = G__39610;
chunk__39595_39606 = G__39611;
count__39596_39607 = G__39612;
i__39597_39608 = G__39613;
continue;
} else {
var temp__4425__auto___39614 = cljs.core.seq.call(null,seq__39594_39605);
if(temp__4425__auto___39614){
var seq__39594_39615__$1 = temp__4425__auto___39614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39594_39615__$1)){
var c__26620__auto___39616 = cljs.core.chunk_first.call(null,seq__39594_39615__$1);
var G__39617 = cljs.core.chunk_rest.call(null,seq__39594_39615__$1);
var G__39618 = c__26620__auto___39616;
var G__39619 = cljs.core.count.call(null,c__26620__auto___39616);
var G__39620 = (0);
seq__39594_39605 = G__39617;
chunk__39595_39606 = G__39618;
count__39596_39607 = G__39619;
i__39597_39608 = G__39620;
continue;
} else {
var k_39621 = cljs.core.first.call(null,seq__39594_39615__$1);
e.setAttribute(cljs.core.name.call(null,k_39621),cljs.core.get.call(null,attrs,k_39621));

var G__39622 = cljs.core.next.call(null,seq__39594_39615__$1);
var G__39623 = null;
var G__39624 = (0);
var G__39625 = (0);
seq__39594_39605 = G__39622;
chunk__39595_39606 = G__39623;
count__39596_39607 = G__39624;
i__39597_39608 = G__39625;
continue;
}
} else {
}
}
break;
}

var seq__39598_39626 = cljs.core.seq.call(null,children);
var chunk__39599_39627 = null;
var count__39600_39628 = (0);
var i__39601_39629 = (0);
while(true){
if((i__39601_39629 < count__39600_39628)){
var ch_39630 = cljs.core._nth.call(null,chunk__39599_39627,i__39601_39629);
e.appendChild(ch_39630);

var G__39631 = seq__39598_39626;
var G__39632 = chunk__39599_39627;
var G__39633 = count__39600_39628;
var G__39634 = (i__39601_39629 + (1));
seq__39598_39626 = G__39631;
chunk__39599_39627 = G__39632;
count__39600_39628 = G__39633;
i__39601_39629 = G__39634;
continue;
} else {
var temp__4425__auto___39635 = cljs.core.seq.call(null,seq__39598_39626);
if(temp__4425__auto___39635){
var seq__39598_39636__$1 = temp__4425__auto___39635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39598_39636__$1)){
var c__26620__auto___39637 = cljs.core.chunk_first.call(null,seq__39598_39636__$1);
var G__39638 = cljs.core.chunk_rest.call(null,seq__39598_39636__$1);
var G__39639 = c__26620__auto___39637;
var G__39640 = cljs.core.count.call(null,c__26620__auto___39637);
var G__39641 = (0);
seq__39598_39626 = G__39638;
chunk__39599_39627 = G__39639;
count__39600_39628 = G__39640;
i__39601_39629 = G__39641;
continue;
} else {
var ch_39642 = cljs.core.first.call(null,seq__39598_39636__$1);
e.appendChild(ch_39642);

var G__39643 = cljs.core.next.call(null,seq__39598_39636__$1);
var G__39644 = null;
var G__39645 = (0);
var G__39646 = (0);
seq__39598_39626 = G__39643;
chunk__39599_39627 = G__39644;
count__39600_39628 = G__39645;
i__39601_39629 = G__39646;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39591){
var G__39592 = cljs.core.first.call(null,seq39591);
var seq39591__$1 = cljs.core.next.call(null,seq39591);
var G__39593 = cljs.core.first.call(null,seq39591__$1);
var seq39591__$2 = cljs.core.next.call(null,seq39591__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__39592,G__39593,seq39591__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26736__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26737__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26738__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__,hierarchy__26738__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26738__auto__,method_table__26734__auto__,prefer_table__26735__auto__,method_cache__26736__auto__,cached_hierarchy__26737__auto__));
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
var el_39647 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_39647.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39647.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39647.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39647);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39648,st_map){
var map__39653 = p__39648;
var map__39653__$1 = ((((!((map__39653 == null)))?((((map__39653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39653):map__39653);
var container_el = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39653,map__39653__$1,container_el){
return (function (p__39655){
var vec__39656 = p__39655;
var k = cljs.core.nth.call(null,vec__39656,(0),null);
var v = cljs.core.nth.call(null,vec__39656,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__39653,map__39653__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39657,dom_str){
var map__39660 = p__39657;
var map__39660__$1 = ((((!((map__39660 == null)))?((((map__39660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39660):map__39660);
var c = map__39660__$1;
var content_area_el = cljs.core.get.call(null,map__39660__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39662){
var map__39665 = p__39662;
var map__39665__$1 = ((((!((map__39665 == null)))?((((map__39665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39665):map__39665);
var content_area_el = cljs.core.get.call(null,map__39665__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_39708){
var state_val_39709 = (state_39708[(1)]);
if((state_val_39709 === (1))){
var inst_39693 = (state_39708[(7)]);
var inst_39693__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39694 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39695 = ["10px","10px","100%","68px","1.0"];
var inst_39696 = cljs.core.PersistentHashMap.fromArrays(inst_39694,inst_39695);
var inst_39697 = cljs.core.merge.call(null,inst_39696,style);
var inst_39698 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39693__$1,inst_39697);
var inst_39699 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39693__$1,msg);
var inst_39700 = cljs.core.async.timeout.call(null,(300));
var state_39708__$1 = (function (){var statearr_39710 = state_39708;
(statearr_39710[(7)] = inst_39693__$1);

(statearr_39710[(8)] = inst_39698);

(statearr_39710[(9)] = inst_39699);

return statearr_39710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(2),inst_39700);
} else {
if((state_val_39709 === (2))){
var inst_39693 = (state_39708[(7)]);
var inst_39702 = (state_39708[(2)]);
var inst_39703 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39704 = ["auto"];
var inst_39705 = cljs.core.PersistentHashMap.fromArrays(inst_39703,inst_39704);
var inst_39706 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39693,inst_39705);
var state_39708__$1 = (function (){var statearr_39711 = state_39708;
(statearr_39711[(10)] = inst_39702);

return statearr_39711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39708__$1,inst_39706);
} else {
return null;
}
}
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____0 = (function (){
var statearr_39715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39715[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__);

(statearr_39715[(1)] = (1));

return statearr_39715;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____1 = (function (state_39708){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_39708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e39716){if((e39716 instanceof Object)){
var ex__29832__auto__ = e39716;
var statearr_39717_39719 = state_39708;
(statearr_39717_39719[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39720 = state_39708;
state_39708 = G__39720;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__ = function(state_39708){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____1.call(this,state_39708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_39718 = f__29941__auto__.call(null);
(statearr_39718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_39718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
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
var vec__39722 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__39722,(0),null);
var ln = cljs.core.nth.call(null,vec__39722,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__39725 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__39725,(0),null);
var file_line = cljs.core.nth.call(null,vec__39725,(1),null);
var file_column = cljs.core.nth.call(null,vec__39725,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__39725,file_name,file_line,file_column){
return (function (p1__39723_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__39723_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__39725,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__25809__auto__ = file_line;
if(cljs.core.truth_(or__25809__auto__)){
return or__25809__auto__;
} else {
var and__25797__auto__ = cause;
if(cljs.core.truth_(and__25797__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__25797__auto__;
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
var map__39728 = figwheel.client.heads_up.ensure_container.call(null);
var map__39728__$1 = ((((!((map__39728 == null)))?((((map__39728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39728):map__39728);
var content_area_el = cljs.core.get.call(null,map__39728__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_39776){
var state_val_39777 = (state_39776[(1)]);
if((state_val_39777 === (1))){
var inst_39759 = (state_39776[(7)]);
var inst_39759__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39760 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39761 = ["0.0"];
var inst_39762 = cljs.core.PersistentHashMap.fromArrays(inst_39760,inst_39761);
var inst_39763 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39759__$1,inst_39762);
var inst_39764 = cljs.core.async.timeout.call(null,(300));
var state_39776__$1 = (function (){var statearr_39778 = state_39776;
(statearr_39778[(8)] = inst_39763);

(statearr_39778[(7)] = inst_39759__$1);

return statearr_39778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39776__$1,(2),inst_39764);
} else {
if((state_val_39777 === (2))){
var inst_39759 = (state_39776[(7)]);
var inst_39766 = (state_39776[(2)]);
var inst_39767 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39768 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39769 = cljs.core.PersistentHashMap.fromArrays(inst_39767,inst_39768);
var inst_39770 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39759,inst_39769);
var inst_39771 = cljs.core.async.timeout.call(null,(200));
var state_39776__$1 = (function (){var statearr_39779 = state_39776;
(statearr_39779[(9)] = inst_39766);

(statearr_39779[(10)] = inst_39770);

return statearr_39779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39776__$1,(3),inst_39771);
} else {
if((state_val_39777 === (3))){
var inst_39759 = (state_39776[(7)]);
var inst_39773 = (state_39776[(2)]);
var inst_39774 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39759,"");
var state_39776__$1 = (function (){var statearr_39780 = state_39776;
(statearr_39780[(11)] = inst_39773);

return statearr_39780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39776__$1,inst_39774);
} else {
return null;
}
}
}
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29829__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29829__auto____0 = (function (){
var statearr_39784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39784[(0)] = figwheel$client$heads_up$clear_$_state_machine__29829__auto__);

(statearr_39784[(1)] = (1));

return statearr_39784;
});
var figwheel$client$heads_up$clear_$_state_machine__29829__auto____1 = (function (state_39776){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_39776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e39785){if((e39785 instanceof Object)){
var ex__29832__auto__ = e39785;
var statearr_39786_39788 = state_39776;
(statearr_39786_39788[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39789 = state_39776;
state_39776 = G__39789;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29829__auto__ = function(state_39776){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29829__auto____1.call(this,state_39776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29829__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29829__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_39787 = f__29941__auto__.call(null);
(statearr_39787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_39787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29940__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29940__auto__){
return (function (){
var f__29941__auto__ = (function (){var switch__29828__auto__ = ((function (c__29940__auto__){
return (function (state_39821){
var state_val_39822 = (state_39821[(1)]);
if((state_val_39822 === (1))){
var inst_39811 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(2),inst_39811);
} else {
if((state_val_39822 === (2))){
var inst_39813 = (state_39821[(2)]);
var inst_39814 = cljs.core.async.timeout.call(null,(400));
var state_39821__$1 = (function (){var statearr_39823 = state_39821;
(statearr_39823[(7)] = inst_39813);

return statearr_39823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(3),inst_39814);
} else {
if((state_val_39822 === (3))){
var inst_39816 = (state_39821[(2)]);
var inst_39817 = figwheel.client.heads_up.clear.call(null);
var state_39821__$1 = (function (){var statearr_39824 = state_39821;
(statearr_39824[(8)] = inst_39816);

return statearr_39824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(4),inst_39817);
} else {
if((state_val_39822 === (4))){
var inst_39819 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39821__$1,inst_39819);
} else {
return null;
}
}
}
}
});})(c__29940__auto__))
;
return ((function (switch__29828__auto__,c__29940__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____0 = (function (){
var statearr_39828 = [null,null,null,null,null,null,null,null,null];
(statearr_39828[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__);

(statearr_39828[(1)] = (1));

return statearr_39828;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____1 = (function (state_39821){
while(true){
var ret_value__29830__auto__ = (function (){try{while(true){
var result__29831__auto__ = switch__29828__auto__.call(null,state_39821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29831__auto__;
}
break;
}
}catch (e39829){if((e39829 instanceof Object)){
var ex__29832__auto__ = e39829;
var statearr_39830_39832 = state_39821;
(statearr_39830_39832[(5)] = ex__29832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39833 = state_39821;
state_39821 = G__39833;
continue;
} else {
return ret_value__29830__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__ = function(state_39821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____1.call(this,state_39821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29829__auto__;
})()
;})(switch__29828__auto__,c__29940__auto__))
})();
var state__29942__auto__ = (function (){var statearr_39831 = f__29941__auto__.call(null);
(statearr_39831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29940__auto__);

return statearr_39831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29942__auto__);
});})(c__29940__auto__))
);

return c__29940__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map