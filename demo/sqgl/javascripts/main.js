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
    if ($(this).scrollTop() + $(window).height() + 30 >= $(document).height() && $(this).scrollTop() > 30) {
       $(".foot-pages").show()
      } else {
      setTimeout(function(){
         $(".foot-pages").hide()
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