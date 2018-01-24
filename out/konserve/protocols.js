// Compiled by ClojureScript 1.9.542 {}
goog.provide('konserve.protocols');
goog.require('cljs.core');

/**
 * Allows to access a store similar to hash-map in EDN.
 * @interface
 */
konserve.protocols.PEDNAsyncKeyValueStore = function(){};

/**
 * Checks whether value is in the store.
 */
konserve.protocols._exists_QMARK_ = (function konserve$protocols$_exists_QMARK_(this$,key){
if((!((this$ == null))) && (!((this$.konserve$protocols$PEDNAsyncKeyValueStore$_exists_QMARK_$arity$2 == null)))){
return this$.konserve$protocols$PEDNAsyncKeyValueStore$_exists_QMARK_$arity$2(this$,key);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._exists_QMARK_[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key);
} else {
var m__10938__auto____$1 = (konserve.protocols._exists_QMARK_["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"PEDNAsyncKeyValueStore.-exists?",this$);
}
}
}
});

/**
 * Returns the value stored described by key-vec or nil if the path is not resolvable.
 */
konserve.protocols._get_in = (function konserve$protocols$_get_in(this$,key_vec){
if((!((this$ == null))) && (!((this$.konserve$protocols$PEDNAsyncKeyValueStore$_get_in$arity$2 == null)))){
return this$.konserve$protocols$PEDNAsyncKeyValueStore$_get_in$arity$2(this$,key_vec);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._get_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec);
} else {
var m__10938__auto____$1 = (konserve.protocols._get_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec);
} else {
throw cljs.core.missing_protocol.call(null,"PEDNAsyncKeyValueStore.-get-in",this$);
}
}
}
});

/**
 * Updates a position described by key-vec by applying up-fn and storing the result atomically. Returns a vector [old new] of the previous value and the result of applying up-fn (the newly stored value).
 */
konserve.protocols._update_in = (function konserve$protocols$_update_in(this$,key_vec,up_fn){
if((!((this$ == null))) && (!((this$.konserve$protocols$PEDNAsyncKeyValueStore$_update_in$arity$3 == null)))){
return this$.konserve$protocols$PEDNAsyncKeyValueStore$_update_in$arity$3(this$,key_vec,up_fn);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._update_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec,up_fn);
} else {
var m__10938__auto____$1 = (konserve.protocols._update_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec,up_fn);
} else {
throw cljs.core.missing_protocol.call(null,"PEDNAsyncKeyValueStore.-update-in",this$);
}
}
}
});

konserve.protocols._assoc_in = (function konserve$protocols$_assoc_in(this$,key_vec,val){
if((!((this$ == null))) && (!((this$.konserve$protocols$PEDNAsyncKeyValueStore$_assoc_in$arity$3 == null)))){
return this$.konserve$protocols$PEDNAsyncKeyValueStore$_assoc_in$arity$3(this$,key_vec,val);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._assoc_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec,val);
} else {
var m__10938__auto____$1 = (konserve.protocols._assoc_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec,val);
} else {
throw cljs.core.missing_protocol.call(null,"PEDNAsyncKeyValueStore.-assoc-in",this$);
}
}
}
});

konserve.protocols._dissoc = (function konserve$protocols$_dissoc(this$,key){
if((!((this$ == null))) && (!((this$.konserve$protocols$PEDNAsyncKeyValueStore$_dissoc$arity$2 == null)))){
return this$.konserve$protocols$PEDNAsyncKeyValueStore$_dissoc$arity$2(this$,key);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._dissoc[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key);
} else {
var m__10938__auto____$1 = (konserve.protocols._dissoc["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key);
} else {
throw cljs.core.missing_protocol.call(null,"PEDNAsyncKeyValueStore.-dissoc",this$);
}
}
}
});


/**
 * Decouples serialization format from storage.
 * @interface
 */
konserve.protocols.PStoreSerializer = function(){};

/**
 * For the JVM we use streams, while for JavaScript we return the value for now.
 */
konserve.protocols._serialize = (function konserve$protocols$_serialize(this$,output_stream,read_handlers,val){
if((!((this$ == null))) && (!((this$.konserve$protocols$PStoreSerializer$_serialize$arity$4 == null)))){
return this$.konserve$protocols$PStoreSerializer$_serialize$arity$4(this$,output_stream,read_handlers,val);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._serialize[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,output_stream,read_handlers,val);
} else {
var m__10938__auto____$1 = (konserve.protocols._serialize["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,output_stream,read_handlers,val);
} else {
throw cljs.core.missing_protocol.call(null,"PStoreSerializer.-serialize",this$);
}
}
}
});

konserve.protocols._deserialize = (function konserve$protocols$_deserialize(this$,write_handlers,input_stream){
if((!((this$ == null))) && (!((this$.konserve$protocols$PStoreSerializer$_deserialize$arity$3 == null)))){
return this$.konserve$protocols$PStoreSerializer$_deserialize$arity$3(this$,write_handlers,input_stream);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._deserialize[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,write_handlers,input_stream);
} else {
var m__10938__auto____$1 = (konserve.protocols._deserialize["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,write_handlers,input_stream);
} else {
throw cljs.core.missing_protocol.call(null,"PStoreSerializer.-deserialize",this$);
}
}
}
});


/**
 * SUBJECT TO CHANGE. Low-Level JSON implementation to give native performance. Might be merged into EDN later, when we find a comparable EDN solution. Assumes all values are JSON. 
 * @interface
 */
konserve.protocols.PJSONAsyncKeyValueStore = function(){};

/**
 * Returns the value stored described by key-vec or nil if the path is not resolvable.
 */
konserve.protocols._jget_in = (function konserve$protocols$_jget_in(this$,key_vec){
if((!((this$ == null))) && (!((this$.konserve$protocols$PJSONAsyncKeyValueStore$_jget_in$arity$2 == null)))){
return this$.konserve$protocols$PJSONAsyncKeyValueStore$_jget_in$arity$2(this$,key_vec);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._jget_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec);
} else {
var m__10938__auto____$1 = (konserve.protocols._jget_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec);
} else {
throw cljs.core.missing_protocol.call(null,"PJSONAsyncKeyValueStore.-jget-in",this$);
}
}
}
});

/**
 * Associates the key-vec to the value, any missing collections for the key-vec (nested maps and vectors) are newly created.
 */
konserve.protocols._jassoc_in = (function konserve$protocols$_jassoc_in(this$,key_vec,value){
if((!((this$ == null))) && (!((this$.konserve$protocols$PJSONAsyncKeyValueStore$_jassoc_in$arity$3 == null)))){
return this$.konserve$protocols$PJSONAsyncKeyValueStore$_jassoc_in$arity$3(this$,key_vec,value);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._jassoc_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec,value);
} else {
var m__10938__auto____$1 = (konserve.protocols._jassoc_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec,value);
} else {
throw cljs.core.missing_protocol.call(null,"PJSONAsyncKeyValueStore.-jassoc-in",this$);
}
}
}
});

/**
 * Updates a position described by key-vec by applying up-fn and storing the result atomically. Returns a vector [old new] of the previous value and the result of applying up-fn (the newly stored value).
 */
konserve.protocols._jupdate_in = (function konserve$protocols$_jupdate_in(this$,key_vec,up_fn){
if((!((this$ == null))) && (!((this$.konserve$protocols$PJSONAsyncKeyValueStore$_jupdate_in$arity$3 == null)))){
return this$.konserve$protocols$PJSONAsyncKeyValueStore$_jupdate_in$arity$3(this$,key_vec,up_fn);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._jupdate_in[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key_vec,up_fn);
} else {
var m__10938__auto____$1 = (konserve.protocols._jupdate_in["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key_vec,up_fn);
} else {
throw cljs.core.missing_protocol.call(null,"PJSONAsyncKeyValueStore.-jupdate-in",this$);
}
}
}
});


/**
 * Allows binary data byte array storage.
 * @interface
 */
konserve.protocols.PBinaryAsyncKeyValueStore = function(){};

/**
 * Calls locked-cb with a platform specific binary representation inside the lock, e.g. wrapped InputStream on the JVM and Blob in JavaScript. You need to properly close/dispose the object when you are done!
 */
konserve.protocols._bget = (function konserve$protocols$_bget(this$,key,locked_cb){
if((!((this$ == null))) && (!((this$.konserve$protocols$PBinaryAsyncKeyValueStore$_bget$arity$3 == null)))){
return this$.konserve$protocols$PBinaryAsyncKeyValueStore$_bget$arity$3(this$,key,locked_cb);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._bget[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key,locked_cb);
} else {
var m__10938__auto____$1 = (konserve.protocols._bget["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key,locked_cb);
} else {
throw cljs.core.missing_protocol.call(null,"PBinaryAsyncKeyValueStore.-bget",this$);
}
}
}
});

/**
 * Copies given value (InputStream, Reader, File, byte[] or String on JVM, Blob in JavaScript) under key in the store.
 */
konserve.protocols._bassoc = (function konserve$protocols$_bassoc(this$,key,val){
if((!((this$ == null))) && (!((this$.konserve$protocols$PBinaryAsyncKeyValueStore$_bassoc$arity$3 == null)))){
return this$.konserve$protocols$PBinaryAsyncKeyValueStore$_bassoc$arity$3(this$,key,val);
} else {
var x__10937__auto__ = (((this$ == null))?null:this$);
var m__10938__auto__ = (konserve.protocols._bassoc[goog.typeOf(x__10937__auto__)]);
if(!((m__10938__auto__ == null))){
return m__10938__auto__.call(null,this$,key,val);
} else {
var m__10938__auto____$1 = (konserve.protocols._bassoc["_"]);
if(!((m__10938__auto____$1 == null))){
return m__10938__auto____$1.call(null,this$,key,val);
} else {
throw cljs.core.missing_protocol.call(null,"PBinaryAsyncKeyValueStore.-bassoc",this$);
}
}
}
});


//# sourceMappingURL=protocols.js.map