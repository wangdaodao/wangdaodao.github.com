/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {
  $(".binding-lock").on("tap",function(){
    $(".dialog-binding").show();
    $(".dialog-bg").show();
  });
  $(".cancel-lock").on("tap",function(){
    $(".dialog-alert").show();
    $(".dialog-bg").show();
  });
  $(".close").on("tap",function(){
    $(".dialog").hide();
    $(".dialog-bg").hide();
  });
});