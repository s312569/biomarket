// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23711,handler){
var map__23712 = p__23711;
var map__23712__$1 = ((((!((map__23712 == null)))?((((map__23712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23712):map__23712);
var uri = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23712,map__23712__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23710_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23710_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23712,map__23712__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___23720 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___23720)){
var response_type_23721 = temp__4425__auto___23720;
this$__$1.responseType = cljs.core.name.call(null,response_type_23721);
} else {
}

var seq__23714_23722 = cljs.core.seq.call(null,headers);
var chunk__23715_23723 = null;
var count__23716_23724 = (0);
var i__23717_23725 = (0);
while(true){
if((i__23717_23725 < count__23716_23724)){
var vec__23718_23726 = cljs.core._nth.call(null,chunk__23715_23723,i__23717_23725);
var k_23727 = cljs.core.nth.call(null,vec__23718_23726,(0),null);
var v_23728 = cljs.core.nth.call(null,vec__23718_23726,(1),null);
this$__$1.setRequestHeader(k_23727,v_23728);

var G__23729 = seq__23714_23722;
var G__23730 = chunk__23715_23723;
var G__23731 = count__23716_23724;
var G__23732 = (i__23717_23725 + (1));
seq__23714_23722 = G__23729;
chunk__23715_23723 = G__23730;
count__23716_23724 = G__23731;
i__23717_23725 = G__23732;
continue;
} else {
var temp__4425__auto___23733 = cljs.core.seq.call(null,seq__23714_23722);
if(temp__4425__auto___23733){
var seq__23714_23734__$1 = temp__4425__auto___23733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23714_23734__$1)){
var c__23387__auto___23735 = cljs.core.chunk_first.call(null,seq__23714_23734__$1);
var G__23736 = cljs.core.chunk_rest.call(null,seq__23714_23734__$1);
var G__23737 = c__23387__auto___23735;
var G__23738 = cljs.core.count.call(null,c__23387__auto___23735);
var G__23739 = (0);
seq__23714_23722 = G__23736;
chunk__23715_23723 = G__23737;
count__23716_23724 = G__23738;
i__23717_23725 = G__23739;
continue;
} else {
var vec__23719_23740 = cljs.core.first.call(null,seq__23714_23734__$1);
var k_23741 = cljs.core.nth.call(null,vec__23719_23740,(0),null);
var v_23742 = cljs.core.nth.call(null,vec__23719_23740,(1),null);
this$__$1.setRequestHeader(k_23741,v_23742);

var G__23743 = cljs.core.next.call(null,seq__23714_23734__$1);
var G__23744 = null;
var G__23745 = (0);
var G__23746 = (0);
seq__23714_23722 = G__23743;
chunk__23715_23723 = G__23744;
count__23716_23724 = G__23745;
i__23717_23725 = G__23746;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__22576__auto__ = body;
if(cljs.core.truth_(or__22576__auto__)){
return or__22576__auto__;
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