/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {
//   $('body').on('scrollstart', function(event) {
// 　　$(".foot-pages").show()
// 　　});
//   $('body').on('scrollstop', function(event) {
//     // alert($(window).scrollTop())
//     // alert($(window).height())
//     // alert($(document).height())
//     setTimeout(function(){
//     if($(window).scrollTop()+$(window).height()+100 >= $(document).height() ){
//         $(".foot-pages").show()
//       } else {
//           $(".foot-pages").hide()
//       }}, 3000)
// 　　});
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
// 防止内容区域滚到底后引起页面整体的滚动
// var content = document.querySelector('main');
// var startY;

// content.addEventListener('touchstart', function (e) {
//     startY = e.touches[0].clientY;
// });

// content.addEventListener('touchmove', function (e) {
//     // 高位表示向上滚动
//     // 底位表示向下滚动
//     // 1容许 0禁止
//     var status = '11';
//     var ele = this;

//     var currentY = e.touches[0].clientY;

//     if (ele.scrollTop === 0) {
//         // 如果内容小于容器则同时禁止上下滚动
//         status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
//     } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
//         // 已经滚到底部了只能向上滚动
//         status = '10';
//     }

//     if (status != '11') {
//         // 判断当前的滚动方向
//         var direction = currentY - startY > 0 ? '10' : '01';
//         // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
//         if (!(parseInt(status, 2) & parseInt(direction, 2))) {
//             stopEvent(e);
//         }
//     }
// });
