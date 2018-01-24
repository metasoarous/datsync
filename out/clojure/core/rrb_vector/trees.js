// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.core.rrb_vector.trees');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.trees.tail_offset = (function clojure$core$rrb_vector$trees$tail_offset(cnt,tail){
return (cnt - tail.length);
});
clojure.core.rrb_vector.trees.array_for = (function clojure$core$rrb_vector$trees$array_for(cnt,shift,root,tail,i){
if((((0) <= i)) && ((i < cnt))){
if((i >= clojure.core.rrb_vector.trees.tail_offset.call(null,cnt,tail))){
return tail;
} else {
var i__$1 = i;
var node = root;
var shift__$1 = shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__35491 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__35492 = (shift__$2 - (5));
node__$1 = G__35491;
shift__$2 = G__35492;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__35493 = (j + (1));
j = G__35493;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__35494 = i__$2;
var G__35495 = (node.arr[j]);
var G__35496 = (shift__$1 - (5));
i__$1 = G__35494;
node = G__35495;
shift__$1 = G__35496;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,cnt);
}
});
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

var G__35497 = (s + (5));
var G__35498 = ret;
s = G__35497;
n = G__35498;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__35499 = (s + (5));
var G__35500 = ret;
s = G__35499;
n = G__35500;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var arr = cljs.core.aclone.call(null,current_node.arr);
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var n_35501 = ret;
var shift_35502__$1 = shift;
while(true){
var arr_35503__$1 = n_35501.arr;
var subidx_35504 = (((cnt - (1)) >> shift_35502__$1) & (31));
if((shift_35502__$1 === (5))){
(arr_35503__$1[subidx_35504] = tail_node);
} else {
var temp__6736__auto___35505 = (arr_35503__$1[subidx_35504]);
if(cljs.core.truth_(temp__6736__auto___35505)){
var child_35506 = temp__6736__auto___35505;
var new_carr_35507 = cljs.core.aclone.call(null,child_35506.arr);
var new_child_35508 = cljs.core.__GT_VectorNode.call(null,root_edit,new_carr_35507);
(arr_35503__$1[subidx_35504] = new_child_35508);

var G__35509 = new_child_35508;
var G__35510 = (shift_35502__$1 - (5));
n_35501 = G__35509;
shift_35502__$1 = G__35510;
continue;
} else {
(arr_35503__$1[subidx_35504] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_35502__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
return clojure.core.rrb_vector.trees.push_tail.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var new_child = clojure.core.rrb_vector.trees.pop_tail.call(null,(shift - (5)),cnt,root_edit,(current_node.arr[subidx]));
if(((new_child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__35511 = (subidx__$1 + (1));
subidx__$1 = G__35511;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone.call(null,rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = clojure.core.rrb_vector.trees.pop_tail.call(null,(shift - (5)),child_cnt,root_edit,child);
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child))){
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var child = (arr[subidx__$1]);
var new_rngs__$1 = cljs.core.aclone.call(null,rngs);
(arr[subidx__$1] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx__$1] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node))){
var node = clojure.core.rrb_vector.nodes.clone.call(null,shift,current_node);
var shift_35512__$1 = shift;
var node_35513__$1 = node;
while(true){
if((shift_35512__$1 === (0))){
var arr_35514 = node_35513__$1.arr;
(arr_35514[(i & (31))] = val);
} else {
var arr_35515 = node_35513__$1.arr;
var subidx_35516 = ((i >> shift_35512__$1) & (31));
var child_35517 = clojure.core.rrb_vector.nodes.clone.call(null,shift_35512__$1,(arr_35515[subidx_35516]));
(arr_35515[subidx_35516] = child_35517);

var G__35518 = (shift_35512__$1 - (5));
var G__35519 = child_35517;
shift_35512__$1 = G__35518;
node_35513__$1 = G__35519;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__35520 = (subidx__$1 + (1));
subidx__$1 = G__35520;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = clojure.core.rrb_vector.trees.do_assoc.call(null,(shift - (5)),(arr[subidx__$1]),i__$1,val));

return cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
}
});

//# sourceMappingURL=trees.js.map