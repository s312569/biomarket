// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23698,handler){
var map__23699 = p__23698;
var map__23699__$1 = ((((!((map__23699 == null)))?((((map__23699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23699):map__23699);
var uri = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23699,map__23699__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23697_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23697_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23699,map__23699__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___23707 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___23707)){
var response_type_23708 = temp__4425__auto___23707;
this$__$1.responseType = cljs.core.name.call(null,response_type_23708);
} else {
}

var seq__23701_23709 = cljs.core.seq.call(null,headers);
var chunk__23702_23710 = null;
var count__23703_23711 = (0);
var i__23704_23712 = (0);
while(true){
if((i__23704_23712 < count__23703_23711)){
var vec__23705_23713 = cljs.core._nth.call(null,chunk__23702_23710,i__23704_23712);
var k_23714 = cljs.core.nth.call(null,vec__23705_23713,(0),null);
var v_23715 = cljs.core.nth.call(null,vec__23705_23713,(1),null);
this$__$1.setRequestHeader(k_23714,v_23715);

var G__23716 = seq__23701_23709;
var G__23717 = chunk__23702_23710;
var G__23718 = count__23703_23711;
var G__23719 = (i__23704_23712 + (1));
seq__23701_23709 = G__23716;
chunk__23702_23710 = G__23717;
count__23703_23711 = G__23718;
i__23704_23712 = G__23719;
continue;
} else {
var temp__4425__auto___23720 = cljs.core.seq.call(null,seq__23701_23709);
if(temp__4425__auto___23720){
var seq__23701_23721__$1 = temp__4425__auto___23720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23701_23721__$1)){
var c__23374__auto___23722 = cljs.core.chunk_first.call(null,seq__23701_23721__$1);
var G__23723 = cljs.core.chunk_rest.call(null,seq__23701_23721__$1);
var G__23724 = c__23374__auto___23722;
var G__23725 = cljs.core.count.call(null,c__23374__auto___23722);
var G__23726 = (0);
seq__23701_23709 = G__23723;
chunk__23702_23710 = G__23724;
count__23703_23711 = G__23725;
i__23704_23712 = G__23726;
continue;
} else {
var vec__23706_23727 = cljs.core.first.call(null,seq__23701_23721__$1);
var k_23728 = cljs.core.nth.call(null,vec__23706_23727,(0),null);
var v_23729 = cljs.core.nth.call(null,vec__23706_23727,(1),null);
this$__$1.setRequestHeader(k_23728,v_23729);

var G__23730 = cljs.core.next.call(null,seq__23701_23721__$1);
var G__23731 = null;
var G__23732 = (0);
var G__23733 = (0);
seq__23701_23709 = G__23730;
chunk__23702_23710 = G__23731;
count__23703_23711 = G__23732;
i__23704_23712 = G__23733;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__22563__auto__ = body;
if(cljs.core.truth_(or__22563__auto__)){
return or__22563__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map