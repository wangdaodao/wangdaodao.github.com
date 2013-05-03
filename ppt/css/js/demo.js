/*
 Name:
 Description:
 Version:
 Author: wangzhe
 email hi@wangdaodao.com
*/
jQuery(document).ready(function($) {
	$(".demo_relative").hover(
  		function () {
    		$(this).next().css({ "position": "relative"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  		},
  		function () {
    		$(this).next().css({ "position": "static"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  	});
  	$(".demo_absolute").hover(
  		function () {
    		$(this).next().css({ "position": "absolute"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  		},
  		function () {
    		$(this).next().css({ "position": "static"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  	});
  	$(".demo_fixed").hover(
  		function () {
    		$(this).next().css({ "position": "fixed"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  		},
  		function () {
    		$(this).next().css({ "position": "static"});
    		var demo_relative =$(this).next().attr("style");
    		$(this).next().html(demo_relative);
  	});
  	$(".float_1l").toggle(
  		function () {
    		$(".float1").addClass("fleft");
    		$(".float_1l").html("1号无浮动")
 		},
  		function () {
    		$(".float1").removeClass("fleft");
    		$(".float_1l").html("1号左浮动")
  	});
  	$(".float_1r").toggle(
  		function () {
    		$(".float1").addClass("fright");
    		$(".float_1r").html("1号无浮动")
 		},
  		function () {
    		$(".float1").removeClass("fright");
    		$(".float_1r").html("1号右浮动")
  	});
  	$(".float_2l").toggle(
  		function () {
    		$(".float2").addClass("fleft");
    		$(".float_2l").html("2号无浮动")
 		},
  		function () {
    		$(".float2").removeClass("fleft");
    		$(".float_2l").html("2号左浮动")
  	});
  	$(".float_2r").toggle(
  		function () {
    		$(".float2").addClass("fright");
    		$(".float_2r").html("2号无浮动")
 		},
  		function () {
    		$(".float2").removeClass("fright");
    		$(".float_2r").html("2号右浮动")
  	});
  	$(".float_3l").toggle(
  		function () {
    		$(".float3").addClass("fleft");
    		$(".float_3l").html("3号无浮动")
 		},
  		function () {
    		$(".float3").removeClass("fleft");
    		$(".float_3l").html("3号左浮动")
  	});
  	$(".float_3r").toggle(
  		function () {
    		$(".float3").addClass("fright");
    		$(".float_3r").html("3号无浮动")
 		},
  		function () {
    		$(".float3").removeClass("fright");
    		$(".float_3r").html("3号右浮动")
  	});
});
