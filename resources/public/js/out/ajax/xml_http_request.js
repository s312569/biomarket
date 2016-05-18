// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26778,handler){
var map__26779 = p__26778;
var map__26779__$1 = ((((!((map__26779 == null)))?((((map__26779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26779):map__26779);
var uri = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26779__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26779,map__26779__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26777_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26777_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26779,map__26779__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___26787 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___26787)){
var response_type_26788 = temp__4425__auto___26787;
this$__$1.responseType = cljs.core.name.call(null,response_type_26788);
} else {
}

var seq__26781_26789 = cljs.core.seq.call(null,headers);
var chunk__26782_26790 = null;
var count__26783_26791 = (0);
var i__26784_26792 = (0);
while(true){
if((i__26784_26792 < count__26783_26791)){
var vec__26785_26793 = cljs.core._nth.call(null,chunk__26782_26790,i__26784_26792);
var k_26794 = cljs.core.nth.call(null,vec__26785_26793,(0),null);
var v_26795 = cljs.core.nth.call(null,vec__26785_26793,(1),null);
this$__$1.setRequestHeader(k_26794,v_26795);

var G__26796 = seq__26781_26789;
var G__26797 = chunk__26782_26790;
var G__26798 = count__26783_26791;
var G__26799 = (i__26784_26792 + (1));
seq__26781_26789 = G__26796;
chunk__26782_26790 = G__26797;
count__26783_26791 = G__26798;
i__26784_26792 = G__26799;
continue;
} else {
var temp__4425__auto___26800 = cljs.core.seq.call(null,seq__26781_26789);
if(temp__4425__auto___26800){
var seq__26781_26801__$1 = temp__4425__auto___26800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26781_26801__$1)){
var c__26454__auto___26802 = cljs.core.chunk_first.call(null,seq__26781_26801__$1);
var G__26803 = cljs.core.chunk_rest.call(null,seq__26781_26801__$1);
var G__26804 = c__26454__auto___26802;
var G__26805 = cljs.core.count.call(null,c__26454__auto___26802);
var G__26806 = (0);
seq__26781_26789 = G__26803;
chunk__26782_26790 = G__26804;
count__26783_26791 = G__26805;
i__26784_26792 = G__26806;
continue;
} else {
var vec__26786_26807 = cljs.core.first.call(null,seq__26781_26801__$1);
var k_26808 = cljs.core.nth.call(null,vec__26786_26807,(0),null);
var v_26809 = cljs.core.nth.call(null,vec__26786_26807,(1),null);
this$__$1.setRequestHeader(k_26808,v_26809);

var G__26810 = cljs.core.next.call(null,seq__26781_26801__$1);
var G__26811 = null;
var G__26812 = (0);
var G__26813 = (0);
seq__26781_26789 = G__26810;
chunk__26782_26790 = G__26811;
count__26783_26791 = G__26812;
i__26784_26792 = G__26813;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25643__auto__ = body;
if(cljs.core.truth_(or__25643__auto__)){
return or__25643__auto__;
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