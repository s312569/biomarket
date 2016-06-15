// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('ajax.protocols');
goog.require('goog.net.ErrorCode');
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27186,handler){
var map__27187 = p__27186;
var map__27187__$1 = ((((!((map__27187 == null)))?((((map__27187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27187):map__27187);
var uri = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27187__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__27189 = this$__$1;
goog.events.listen(G__27189,goog.net.EventType.COMPLETE,((function (G__27189,this$__$1,map__27187,map__27187__$1,uri,method,body,headers,timeout,with_credentials){
return (function (p1__27185_SHARP_){
return handler.call(null,p1__27185_SHARP_.target);
});})(G__27189,this$__$1,map__27187,map__27187__$1,uri,method,body,headers,timeout,with_credentials))
);

G__27189.setTimeoutInterval(timeout);

G__27189.setWithCredentials(with_credentials);

G__27189.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__27189;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27190,handler){
var map__27191 = p__27190;
var map__27191__$1 = ((((!((map__27191 == null)))?((((map__27191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27191):map__27191);
var uri = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var id = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var priority = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__27191__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});

//# sourceMappingURL=xhrio.js.map