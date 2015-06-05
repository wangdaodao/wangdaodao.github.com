/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {
  $('body').bind('scrollstart', function(event) {
　　$(".foot-pages").show()
　　});
  $('body').bind('scrollstop', function(event) {
    // alert($(window).scrollTop())
    // alert($(window).height())
    // alert($(document).height())
    if($(window).scrollTop()+$(window).height()+100 <= $(document).height() ){
        setTimeout(function(){
          $(".foot-pages").hide()
         }, 3000)
      } else {
        $(".foot-pages").show()
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