// Compiled by ClojureScript 1.9.542 {}
goog.provide('hasch.platform');
goog.require('cljs.core');
goog.require('goog.crypt.Sha512');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('incognito.base');
goog.require('hasch.benc');
hasch.platform.uuid4 = cljs.core.random_uuid;
hasch.platform.byte__GT_hex = (function hasch$platform$byte__GT_hex(b){
return ((b & (255)) + (256)).toString((16)).substring((1));
});
hasch.platform.hash__GT_str = (function hasch$platform$hash__GT_str(bytes){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hasch.platform.byte__GT_hex,bytes));
});
/**
 * Encodes a string as UTF-8 in an unsigned js array.
 */
hasch.platform.utf8 = (function hasch$platform$utf8(s){
return cljs.core.into_array.call(null,cljs.core.mapcat.call(null,(function (pos){
var c = s.charCodeAt(pos);
if((c <= (127))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c & (255))], null);
} else {
if((c <= (2047))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((192) | (c >> (6))),((128) | (c & (63)))], null);
} else {
if((c <= (65535))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((224) | (c >> (12))),((128) | ((c >> (6)) & (63))),((128) | (c & (63)))], null);
} else {
var j = (function (){var j = (4);
while(true){
if(((c >> (j * (6))) > (0))){
var G__42282 = (j + (1));
j = G__42282;
continue;
} else {
return j;
}
break;
}
})();
var init = ((((65280) >> j) & (255)) | (c >> ((6) * (j - (1)))));
return cljs.core.conj.call(null,cljs.core.map.call(null,((function (j,init,c){
return (function (p1__42281_SHARP_){
return ((128) | ((c >> ((6) * p1__42281_SHARP_)) & (63)));
});})(j,init,c))
,cljs.core.reverse.call(null,cljs.core.range.call(null,(j - (1))))),init);

}
}
}
}),cljs.core.range.call(null,s.length)));
});
/**
 * Generates a uuid5 from a sha-1 hash byte sequence.
 * Our hash version is coded in first 2 bits.
 */
hasch.platform.uuid5 = (function hasch$platform$uuid5(sha_hash){
var vec__42286 = sha_hash;
var hb1 = cljs.core.nth.call(null,vec__42286,(0),null);
var hb2 = cljs.core.nth.call(null,vec__42286,(1),null);
var hb3 = cljs.core.nth.call(null,vec__42286,(2),null);
var hb4 = cljs.core.nth.call(null,vec__42286,(3),null);
var hb5 = cljs.core.nth.call(null,vec__42286,(4),null);
var hb6 = cljs.core.nth.call(null,vec__42286,(5),null);
var hb7 = cljs.core.nth.call(null,vec__42286,(6),null);
var hb8 = cljs.core.nth.call(null,vec__42286,(7),null);
var lb1 = cljs.core.nth.call(null,vec__42286,(8),null);
var lb2 = cljs.core.nth.call(null,vec__42286,(9),null);
var lb3 = cljs.core.nth.call(null,vec__42286,(10),null);
var lb4 = cljs.core.nth.call(null,vec__42286,(11),null);
var lb5 = cljs.core.nth.call(null,vec__42286,(12),null);
var lb6 = cljs.core.nth.call(null,vec__42286,(13),null);
var lb7 = cljs.core.nth.call(null,vec__42286,(14),null);
var lb8 = cljs.core.nth.call(null,vec__42286,(15),null);
return cljs.core.uuid.call(null,((function (vec__42286,hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8){
return (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(8),s))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(4),cljs.core.drop.call(null,(8),s)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(4),cljs.core.drop.call(null,(12),s)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,(4),cljs.core.drop.call(null,(16),s)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,(20),s)))].join('');
});})(vec__42286,hb1,hb2,hb3,hb4,hb5,hb6,hb7,hb8,lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8))
.call(null,hasch.platform.hash__GT_str.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [((hb1 & ~(1 << (7))) & ~(1 << (6))),hb2,hb3,hb4,hb5,hb6,((80) | ((95) & hb7)),hb8,((lb1 | (1 << (7))) & ~(1 << (6))),lb2,lb3,lb4,lb5,lb6,lb7,lb8], null))));
});
hasch.platform.sha512_message_digest = (function hasch$platform$sha512_message_digest(){
return (new goog.crypt.Sha512());
});
hasch.platform.encode = (function hasch$platform$encode(magic,a){
return [magic].concat(a);
});
hasch.platform.str__GT_utf8 = (function hasch$platform$str__GT_utf8(x){
return hasch.platform.utf8.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
});
(hasch.benc.PHashCoercion["null"] = true);

(hasch.benc._coerce["null"] = (function (this$,md_create_fn,write_handlers){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),[]);
}));

(hasch.benc.PHashCoercion["boolean"] = true);

(hasch.benc._coerce["boolean"] = (function (this$,md_create_fn,write_handlers){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),[((this$)?(41):(40))]);
}));

(hasch.benc.PHashCoercion["string"] = true);

(hasch.benc._coerce["string"] = (function (this$,md_create_fn,write_handlers){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.encode_safe.call(null,hasch.platform.str__GT_utf8.call(null,this$),md_create_fn));
}));

(hasch.benc.PHashCoercion["number"] = true);

(hasch.benc._coerce["number"] = (function (this$,md_create_fn,write_handlers){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.platform.str__GT_utf8.call(null,this$));
}));

Date.prototype.hasch$benc$PHashCoercion$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.hasch$benc$PHashCoercion$_coerce$arity$3 = (function (this$,md_create_fn,write_handlers){
var this$__$1 = this;
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.platform.str__GT_utf8.call(null,this$__$1.getTime()));
});

cljs.core.UUID.prototype.hasch$benc$PHashCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.hasch$benc$PHashCoercion$_coerce$arity$3 = (function (this$,md_create_fn,write_handlers){
var this$__$1 = this;
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.platform.str__GT_utf8.call(null,this$__$1.uuid));
});

cljs.core.Symbol.prototype.hasch$benc$PHashCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.hasch$benc$PHashCoercion$_coerce$arity$3 = (function (this$,md_create_fn,write_handlers){
var this$__$1 = this;
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.encode_safe.call(null,hasch.platform.str__GT_utf8.call(null,this$__$1),md_create_fn));
});

cljs.core.Keyword.prototype.hasch$benc$PHashCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hasch$benc$PHashCoercion$_coerce$arity$3 = (function (this$,md_create_fn,write_handlers){
var this$__$1 = this;
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.encode_safe.call(null,hasch.platform.str__GT_utf8.call(null,this$__$1),md_create_fn));
});

(hasch.benc.PHashCoercion["_"] = true);

(hasch.benc._coerce["_"] = (function (this$,md_create_fn,write_handlers){
if((this$ instanceof incognito.base.IncognitoTaggedLiteral)){
var map__42291 = this$;
var map__42291__$1 = ((((!((map__42291 == null)))?((((map__42291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42291):map__42291);
var tag = cljs.core.get.call(null,map__42291__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__42291__$1,new cljs.core.Keyword(null,"value","value",305978217));
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.coerce_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,value], null),md_create_fn,write_handlers));
} else {
if(((!((this$ == null)))?((((this$.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$IRecord$)))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,this$))){
var map__42294 = incognito.base.incognito_writer.call(null,write_handlers,this$);
var map__42294__$1 = ((((!((map__42294 == null)))?((((map__42294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42294):map__42294);
var tag = cljs.core.get.call(null,map__42294__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__42294__$1,new cljs.core.Keyword(null,"value","value",305978217));
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"literal","literal",1664775605).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.coerce_seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,value], null),md_create_fn,write_handlers));
} else {
if(((!((this$ == null)))?((((this$.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$ISeq$)))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,this$))){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.coerce_seq.call(null,this$,md_create_fn,write_handlers));
} else {
if(((!((this$ == null)))?((((this$.cljs$lang$protocol_mask$partition0$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$IVector$)))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,this$))){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.coerce_seq.call(null,this$,md_create_fn,write_handlers));
} else {
if(((!((this$ == null)))?((((this$.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$IMap$)))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,this$))){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.xor_hashes.call(null,cljs.core.map.call(null,(function (p1__42289_SHARP_){
return hasch.benc._coerce.call(null,p1__42289_SHARP_,md_create_fn,write_handlers);
}),cljs.core.seq.call(null,this$))));
} else {
if(((!((this$ == null)))?((((this$.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === this$.cljs$core$ISet$)))?true:(((!this$.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,this$))){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.xor_hashes.call(null,cljs.core.map.call(null,(function (p1__42290_SHARP_){
return hasch.benc.digest.call(null,hasch.benc._coerce.call(null,p1__42290_SHARP_,md_create_fn,write_handlers),md_create_fn);
}),cljs.core.seq.call(null,this$))));
} else {
if((this$ instanceof Uint8Array)){
return hasch.platform.encode.call(null,new cljs.core.Keyword(null,"binary","binary",-1802232288).cljs$core$IFn$_invoke$arity$1(hasch.benc.magics),hasch.benc.encode_safe.call(null,Array.prototype.slice.call(this$),md_create_fn));
} else {
throw cljs.core.ex_info.call(null,"Cannot hash unknown type, you can extend PHashCoercion protocol for:",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,this$),new cljs.core.Keyword(null,"value","value",305978217),this$], null));

}
}
}
}
}
}
}
}));

//# sourceMappingURL=platform.js.map