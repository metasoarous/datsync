// Compiled by ClojureScript 1.9.542 {}
goog.provide('dat.sync.db');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('datascript.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26875){
return cljs.core.map_QMARK_.call(null,G__26875);
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096));
}),(function (G__26875){
return cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109));
})], null),(function (G__26875){
return (cljs.core.map_QMARK_.call(null,G__26875)) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096))) && (cljs.core.contains_QMARK_.call(null,G__26875,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618),new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304),new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363),new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515),new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496),new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910),new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),cljs.core.list(new cljs.core.Symbol("cljs.core","complement","cljs.core/complement",-498493640,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core.complement.call(null,cljs.core.nil_QMARK_));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26876){
return cljs.core.map_QMARK_.call(null,G__26876);
}),(function (G__26876){
return cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537));
}),(function (G__26876){
return cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104));
}),(function (G__26876){
return cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847));
}),(function (G__26876){
return cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109));
})], null),(function (G__26876){
return (cljs.core.map_QMARK_.call(null,G__26876)) && (cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537))) && (cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104))) && (cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847))) && (cljs.core.contains_QMARK_.call(null,G__26876,new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104),new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("dat.sync.db","SYNC","dat.sync.db/SYNC",1617094077),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720)], null),null));
if(typeof dat.sync.db.conn_QMARK_ !== 'undefined'){
} else {
dat.sync.db.conn_QMARK_ = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.db","conn?"),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
if(typeof dat.sync.db.db_QMARK_ !== 'undefined'){
} else {
dat.sync.db.db_QMARK_ = (function (){var method_table__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11252__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11254__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.sync.db","db?"),new cljs.core.Keyword("dat.sync.db","kind","dat.sync.db/kind",-21741109),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11254__auto__,method_table__11250__auto__,prefer_table__11251__auto__,method_cache__11252__auto__,cached_hierarchy__11253__auto__));
})();
}
dat.sync.db.sync_QMARK_ = (function dat$sync$db$sync_QMARK_(dat_sync_db_or_conn){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("dat.sync.db","SYNC","dat.sync.db/SYNC",1617094077),dat_sync_db_or_conn);
});
dat.sync.db.inject_db_api = (function dat$sync$db$inject_db_api(db,api){
return cljs.core.assoc.call(null,api,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381),db);
});
dat.sync.db.inject_conn_api = (function dat$sync$db$inject_conn_api(conn,api){
return cljs.core.assoc.call(null,api,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537),conn);
});
dat.sync.db.entity = (function dat$sync$db$entity(db,eid){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26879 = db;
var map__26879__$1 = ((((!((map__26879 == null)))?((((map__26879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26879):map__26879);
var entity = cljs.core.get.call(null,map__26879__$1,new cljs.core.Keyword("dat.sync.db","entity","dat.sync.db/entity",-698754618));
var db__$1 = cljs.core.get.call(null,map__26879__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return entity.call(null,db__$1,eid);
});
dat.sync.db.pull = (function dat$sync$db$pull(db,pull_expr,eid){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26883 = db;
var map__26883__$1 = ((((!((map__26883 == null)))?((((map__26883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
var pull = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword("dat.sync.db","pull","dat.sync.db/pull",-1177010363));
var db__$1 = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return pull.call(null,db__$1,pull_expr,eid);
});
dat.sync.db.pull_many = (function dat$sync$db$pull_many(db,pull_expr,eids){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26887 = db;
var map__26887__$1 = ((((!((map__26887 == null)))?((((map__26887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26887):map__26887);
var pull_many = cljs.core.get.call(null,map__26887__$1,new cljs.core.Keyword("dat.sync.db","pull-many","dat.sync.db/pull-many",1513376304));
var db__$1 = cljs.core.get.call(null,map__26887__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return pull_many.call(null,db__$1,pull_expr,eids);
});
dat.sync.db.q = (function dat$sync$db$q(var_args){
var args__11447__auto__ = [];
var len__11440__auto___26894 = arguments.length;
var i__11441__auto___26895 = (0);
while(true){
if((i__11441__auto___26895 < len__11440__auto___26894)){
args__11447__auto__.push((arguments[i__11441__auto___26895]));

var G__26896 = (i__11441__auto___26895 + (1));
i__11441__auto___26895 = G__26896;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((2) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((2)),(0),null)):null);
return dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11448__auto__);
});

dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic = (function (q_expr,db,inputs){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26892 = db;
var map__26892__$1 = ((((!((map__26892 == null)))?((((map__26892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26892):map__26892);
var q = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword("dat.sync.db","q","dat.sync.db/q",2144105515));
var db__$1 = cljs.core.get.call(null,map__26892__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return cljs.core.apply.call(null,q,q_expr,db__$1,inputs);
});

dat.sync.db.q.cljs$lang$maxFixedArity = (2);

dat.sync.db.q.cljs$lang$applyTo = (function (seq26889){
var G__26890 = cljs.core.first.call(null,seq26889);
var seq26889__$1 = cljs.core.next.call(null,seq26889);
var G__26891 = cljs.core.first.call(null,seq26889__$1);
var seq26889__$2 = cljs.core.next.call(null,seq26889__$1);
return dat.sync.db.q.cljs$core$IFn$_invoke$arity$variadic(G__26890,G__26891,seq26889__$2);
});

dat.sync.db.datoms = (function dat$sync$db$datoms(var_args){
var args__11447__auto__ = [];
var len__11440__auto___26901 = arguments.length;
var i__11441__auto___26902 = (0);
while(true){
if((i__11441__auto___26902 < len__11440__auto___26901)){
args__11447__auto__.push((arguments[i__11441__auto___26902]));

var G__26903 = (i__11441__auto___26902 + (1));
i__11441__auto___26902 = G__26903;
continue;
} else {
}
break;
}

var argseq__11448__auto__ = ((((1) < args__11447__auto__.length))?(new cljs.core.IndexedSeq(args__11447__auto__.slice((1)),(0),null)):null);
return dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11448__auto__);
});

dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic = (function (db,args){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26899 = db;
var map__26899__$1 = ((((!((map__26899 == null)))?((((map__26899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26899):map__26899);
var datoms = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword("dat.sync.db","datoms","dat.sync.db/datoms",753829496));
var db__$1 = cljs.core.get.call(null,map__26899__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return cljs.core.apply.call(null,datoms,db__$1,args);
});

dat.sync.db.datoms.cljs$lang$maxFixedArity = (1);

dat.sync.db.datoms.cljs$lang$applyTo = (function (seq26897){
var G__26898 = cljs.core.first.call(null,seq26897);
var seq26897__$1 = cljs.core.next.call(null,seq26897);
return dat.sync.db.datoms.cljs$core$IFn$_invoke$arity$variadic(G__26898,seq26897__$1);
});

dat.sync.db.with$ = (function dat$sync$db$with(db,txs){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26906 = db;
var map__26906__$1 = ((((!((map__26906 == null)))?((((map__26906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26906):map__26906);
var with$ = cljs.core.get.call(null,map__26906__$1,new cljs.core.Keyword("dat.sync.db","with","dat.sync.db/with",1865586910));
var db__$1 = cljs.core.get.call(null,map__26906__$1,new cljs.core.Keyword("dat.sync.db","db","dat.sync.db/db",1375678381));
return with$.call(null,db__$1,txs);
});
dat.sync.db.db_with = (function dat$sync$db$db_with(db,txs){
return dat.sync.db.inject_db_api.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(dat.sync.db.with$.call(null,db,txs)),db);
});
dat.sync.db.tempid = (function dat$sync$db$tempid(db,part){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","DB","dat.sync.db/DB",-1171294736),db);
} else {
}
} else {
}

var map__26910 = db;
var map__26910__$1 = ((((!((map__26910 == null)))?((((map__26910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26910):map__26910);
var tempid = cljs.core.get.call(null,map__26910__$1,new cljs.core.Keyword("dat.sync.db","tempid","dat.sync.db/tempid",-1948960096));
return tempid.call(null,part);
});
dat.sync.db.db = (function dat$sync$db$db(conn){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720),conn);
} else {
}
} else {
}

var map__26914 = conn;
var map__26914__$1 = ((((!((map__26914 == null)))?((((map__26914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26914):map__26914);
var deref = cljs.core.get.call(null,map__26914__$1,new cljs.core.Keyword("dat.sync.db","deref","dat.sync.db/deref",1081990847));
var conn__$1 = cljs.core.get.call(null,map__26914__$1,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537));
return deref.call(null,conn__$1);
});
dat.sync.db.transact_BANG_ = (function dat$sync$db$transact_BANG_(conn,txs){
if(cljs.spec.alpha._STAR_compile_asserts_STAR_){
if(cljs.spec.alpha._STAR_runtime_asserts_STAR_){
cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("dat.sync.db","CONN","dat.sync.db/CONN",1389243720),conn);
} else {
}
} else {
}

var map__26918 = conn;
var map__26918__$1 = ((((!((map__26918 == null)))?((((map__26918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26918):map__26918);
var transact_BANG_ = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword("dat.sync.db","transact!","dat.sync.db/transact!",1677530104));
var conn__$1 = cljs.core.get.call(null,map__26918__$1,new cljs.core.Keyword("dat.sync.db","conn","dat.sync.db/conn",1167804537));
return transact_BANG_.call(null,conn__$1,txs);
});
dat.sync.db.gen_uuid = (function dat$sync$db$gen_uuid(){
return datascript.core.squuid.call(null);
});
dat.sync.db.destructure_fn_args = (function dat$sync$db$destructure_fn_args(args){
if(cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,args))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.first.call(null,args),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.rest.call(null,args)], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,cljs.core.second.call(null,args))){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.second.call(null,args),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.drop.call(null,(2),args)], null),((typeof cljs.core.first.call(null,args) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,args)], null):cljs.core.first.call(null,args)));
} else {
if(cljs.core.sequential_QMARK_.call(null,cljs.core.nth.call(null,args,(2)))){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,args),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.nth.call(null,args,(2)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.drop.call(null,(3),args)], null),cljs.core.second.call(null,args));
} else {
throw cljs.core.ex_info.call(null,"Could not destructure fn args",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));

}
}
}
});

//# sourceMappingURL=db.js.map