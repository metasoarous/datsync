// Compiled by ClojureScript 1.9.542 {}
goog.provide('onyx.windowing.window_id');
goog.require('cljs.core');
onyx.windowing.window_id.extent_lower = (function onyx$windowing$window_id$extent_lower(min_windowing_attr,w_range,w_slide,w){
var x__10557__auto__ = min_windowing_attr;
var y__10558__auto__ = ((min_windowing_attr + (w_slide * (w + (1)))) - w_range);
return ((x__10557__auto__ > y__10558__auto__) ? x__10557__auto__ : y__10558__auto__);
});
onyx.windowing.window_id.extent_upper = (function onyx$windowing$window_id$extent_upper(min_windowing_attr,w_slide,w){
return ((min_windowing_attr + (w_slide * (w + (1)))) - (1));
});
onyx.windowing.window_id.extents = (function onyx$windowing$window_id$extents(min_windowing_attr,w_range,w_slide,w){
return cljs.core.range.call(null,onyx.windowing.window_id.extent_lower.call(null,min_windowing_attr,w_range,w_slide,w),(onyx.windowing.window_id.extent_upper.call(null,min_windowing_attr,w_slide,w) + (1)));
});
onyx.windowing.window_id.floor = (function onyx$windowing$window_id$floor(x){
return Math.floor(x);
});
onyx.windowing.window_id.wids_lower = (function onyx$windowing$window_id$wids_lower(min_windowing_attr,w_slide,w_val){
return (cljs.core.long$.call(null,onyx.windowing.window_id.floor.call(null,((w_val - min_windowing_attr) / w_slide))) - (1));
});
onyx.windowing.window_id.wids_upper = (function onyx$windowing$window_id$wids_upper(min_windowing_attr,w_range,w_slide,w_val){
return (cljs.core.long$.call(null,onyx.windowing.window_id.floor.call(null,(((w_val + w_range) - min_windowing_attr) / w_slide))) - (1));
});
onyx.windowing.window_id.wids = (function onyx$windowing$window_id$wids(min_windowing_attr,w_range,w_slide,w_val){
var lower = onyx.windowing.window_id.wids_lower.call(null,min_windowing_attr,w_slide,w_val);
var upper = onyx.windowing.window_id.wids_upper.call(null,min_windowing_attr,w_range,w_slide,w_val);
return cljs.core.range.call(null,(lower + (1)),(upper + (1)));
});

//# sourceMappingURL=window_id.js.map