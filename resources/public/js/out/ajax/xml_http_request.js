// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23998,handler){
var map__23999 = p__23998;
var map__23999__$1 = ((((!((map__23999 == null)))?((((map__23999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23999):map__23999);
var uri = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23999,map__23999__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23997_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23997_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23999,map__23999__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___24007 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___24007)){
var response_type_24008 = temp__4425__auto___24007;
this$__$1.responseType = cljs.core.name.call(null,response_type_24008);
} else {
}

var seq__24001_24009 = cljs.core.seq.call(null,headers);
var chunk__24002_24010 = null;
var count__24003_24011 = (0);
var i__24004_24012 = (0);
while(true){
if((i__24004_24012 < count__24003_24011)){
var vec__24005_24013 = cljs.core._nth.call(null,chunk__24002_24010,i__24004_24012);
var k_24014 = cljs.core.nth.call(null,vec__24005_24013,(0),null);
var v_24015 = cljs.core.nth.call(null,vec__24005_24013,(1),null);
this$__$1.setRequestHeader(k_24014,v_24015);

var G__24016 = seq__24001_24009;
var G__24017 = chunk__24002_24010;
var G__24018 = count__24003_24011;
var G__24019 = (i__24004_24012 + (1));
seq__24001_24009 = G__24016;
chunk__24002_24010 = G__24017;
count__24003_24011 = G__24018;
i__24004_24012 = G__24019;
continue;
} else {
var temp__4425__auto___24020 = cljs.core.seq.call(null,seq__24001_24009);
if(temp__4425__auto___24020){
var seq__24001_24021__$1 = temp__4425__auto___24020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24001_24021__$1)){
var c__23674__auto___24022 = cljs.core.chunk_first.call(null,seq__24001_24021__$1);
var G__24023 = cljs.core.chunk_rest.call(null,seq__24001_24021__$1);
var G__24024 = c__23674__auto___24022;
var G__24025 = cljs.core.count.call(null,c__23674__auto___24022);
var G__24026 = (0);
seq__24001_24009 = G__24023;
chunk__24002_24010 = G__24024;
count__24003_24011 = G__24025;
i__24004_24012 = G__24026;
continue;
} else {
var vec__24006_24027 = cljs.core.first.call(null,seq__24001_24021__$1);
var k_24028 = cljs.core.nth.call(null,vec__24006_24027,(0),null);
var v_24029 = cljs.core.nth.call(null,vec__24006_24027,(1),null);
this$__$1.setRequestHeader(k_24028,v_24029);

var G__24030 = cljs.core.next.call(null,seq__24001_24021__$1);
var G__24031 = null;
var G__24032 = (0);
var G__24033 = (0);
seq__24001_24009 = G__24030;
chunk__24002_24010 = G__24031;
count__24003_24011 = G__24032;
i__24004_24012 = G__24033;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__22863__auto__ = body;
if(cljs.core.truth_(or__22863__auto__)){
return or__22863__auto__;
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