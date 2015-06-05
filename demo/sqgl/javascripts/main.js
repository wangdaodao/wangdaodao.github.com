/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {
  $('body').bind('scrollstart', function(event) {
　　$(".foot-pages").fadeIn()
　　});
  $('body').bind('scrollstop', function(event) {
    if($(window).scrollTop() == $(document).height() - $(window).height()){
       $(".foot-pages").fadeIn()
      } else {
      setTimeout(function(){
         $(".foot-pages").fadeOut()
        }, 3000)
      }
　　});
  $(".binding-lock").on("click",function(){
    $(".dialog-bg").show();
    $(".dialog-binding").show();
  });
  $(".alert").on("click",function(){
    $(".dialog-alert").show();
    $(".dialog-bg").show();
  });
  $(".close").on("click",function(){
    $(".dialog").hide();
    $(".dialog-bg").hide();
  });
});