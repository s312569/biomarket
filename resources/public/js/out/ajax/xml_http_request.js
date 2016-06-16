// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26975,handler){
var map__26976 = p__26975;
var map__26976__$1 = ((((!((map__26976 == null)))?((((map__26976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26976):map__26976);
var uri = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__26976__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26976,map__26976__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26974_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__26974_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__26976,map__26976__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___26984 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___26984)){
var response_type_26985 = temp__4425__auto___26984;
this$__$1.responseType = cljs.core.name.call(null,response_type_26985);
} else {
}

var seq__26978_26986 = cljs.core.seq.call(null,headers);
var chunk__26979_26987 = null;
var count__26980_26988 = (0);
var i__26981_26989 = (0);
while(true){
if((i__26981_26989 < count__26980_26988)){
var vec__26982_26990 = cljs.core._nth.call(null,chunk__26979_26987,i__26981_26989);
var k_26991 = cljs.core.nth.call(null,vec__26982_26990,(0),null);
var v_26992 = cljs.core.nth.call(null,vec__26982_26990,(1),null);
this$__$1.setRequestHeader(k_26991,v_26992);

var G__26993 = seq__26978_26986;
var G__26994 = chunk__26979_26987;
var G__26995 = count__26980_26988;
var G__26996 = (i__26981_26989 + (1));
seq__26978_26986 = G__26993;
chunk__26979_26987 = G__26994;
count__26980_26988 = G__26995;
i__26981_26989 = G__26996;
continue;
} else {
var temp__4425__auto___26997 = cljs.core.seq.call(null,seq__26978_26986);
if(temp__4425__auto___26997){
var seq__26978_26998__$1 = temp__4425__auto___26997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26978_26998__$1)){
var c__26651__auto___26999 = cljs.core.chunk_first.call(null,seq__26978_26998__$1);
var G__27000 = cljs.core.chunk_rest.call(null,seq__26978_26998__$1);
var G__27001 = c__26651__auto___26999;
var G__27002 = cljs.core.count.call(null,c__26651__auto___26999);
var G__27003 = (0);
seq__26978_26986 = G__27000;
chunk__26979_26987 = G__27001;
count__26980_26988 = G__27002;
i__26981_26989 = G__27003;
continue;
} else {
var vec__26983_27004 = cljs.core.first.call(null,seq__26978_26998__$1);
var k_27005 = cljs.core.nth.call(null,vec__26983_27004,(0),null);
var v_27006 = cljs.core.nth.call(null,vec__26983_27004,(1),null);
this$__$1.setRequestHeader(k_27005,v_27006);

var G__27007 = cljs.core.next.call(null,seq__26978_26998__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26978_26986 = G__27007;
chunk__26979_26987 = G__27008;
count__26980_26988 = G__27009;
i__26981_26989 = G__27010;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25840__auto__ = body;
if(cljs.core.truth_(or__25840__auto__)){
return or__25840__auto__;
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