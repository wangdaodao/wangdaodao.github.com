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
  	$(".float_l").toggle(
  		function () {
    		$(this).siblings(".float_demo").addClass("fleft");
 		},
  		function () {
        $(this).siblings(".float_demo").removeClass("fleft");
  	});
});
