/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {
  $(".binding-lock").on("tap",function(){
    $(".dialog-binding").delay(500).show();
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