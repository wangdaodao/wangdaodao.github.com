/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function($) {

  $(".j-drop").hover(function() {
    $(this).addClass("ui-arrow-hover");
    $(this).children(".j-drop-menu").show();
  }, function() {
    $(this).removeClass("ui-arrow-hover");
    $(this).children(".j-drop-menu").hide();
  });

  $(".j-search-btn").hover(function() {
    $(this).children(".j-search-list").show();
  }, function() {
    $(this).children(".j-search-list").hide();
  });

  $(".j-hd-sidenav").hover(function() {
    $(this).children(".j-hd-sidenav-list").show();
  }, function() {
    $(this).children(".j-hd-sidenav-list").hide();
  });

  $(".j-search-list li").click(function(event) {
    var search_value = $(this).text();
    $("#m-hd-search-tag").val(search_value);
    $(".j-search-list").hide();
    $(this).siblings().show();
    $(this).hide();
  });

  $(".j-hd-login,.m-hd-cw").hover(function() {
    $(this).addClass("ui-arrow-hover");
    $(this).children(".ui-arrow-bottom").css('height', '46px');
    $(this).children(".j-hd-box").show();
  }, function() {
    $(this).removeClass("ui-arrow-hover");
    $(this).children(".j-hd-box").hide();
    $(this).children(".ui-arrow-bottom").css('height', '40px');
  });

});

$(function() {
    var $banner = $('.m-home-banner');
    var $banner_ul = $('.m-home-banner-img');
    var $btn = $('.m-home-banner-btn');
    var $btn_a = $btn.find('a')
    var v_width = $banner.width();
    var page = 1;
    var timer = null;
    var btnClass = null;
    var page_count = $banner_ul.find('li').length;//把这个值赋给小圆点的个数
    var banner_cir = "<li class='selected'><a href='####'></a></li>";
    for (var i = 1; i < page_count; i++) {
      //动态添加小圆点
      banner_cir += "<li><a href='####'></a></li>";
    }
    $('.m-home-banner-circle').append(banner_cir);
    var cirLeft = $('.m-home-banner-circle').width() * ( - 0.5);
    $('.m-home-banner-circle').css({
        'marginLeft': cirLeft
    });
    $banner_ul.width(page_count * v_width);
    function move(obj, classname) {
      //手动及自动播放
      if (!$banner_ul.is(':animated')) {
          if (classname == 'm-home-banner-prevBtn') {
              if (page == 1) {
                  $banner_ul.animate({
                      left: -v_width * (page_count - 1)
                  });
                  page = page_count;
                  cirMove();
              }
              else {
                  $banner_ul.animate({
                      left: '+=' + v_width
                  },
                  "slow");
                  page--;
                  cirMove();
              }
          }
          else {
              if (page == page_count) {
                  $banner_ul.animate({
                      left: 0
                  });
                  page = 1;
                  cirMove();
              }
              else {
                  $banner_ul.animate({
                      left: '-=' + v_width
                  },
                  "slow");
                  page++;
                  cirMove();
              }
          }
      }
    }
    function cirMove() {
    $('.m-home-banner-circle li').eq(page - 1).addClass('selected')
        .siblings().removeClass('selected');
    }
    $banner.mouseover(function() {
        $btn.css({
            'display': 'block'
        });
        clearInterval(timer);
    }).mouseout(function() {
        $btn.css({
            'display': 'none'
        });
        clearInterval(timer);
        timer = setInterval(move, 3000);
    }).trigger("mouseout");
    //激活自动播放
$btn_a.mouseover(function() {
        //实现透明渐变，阻止冒泡
        $(this).animate({
            opacity: 0.6
        },
        'fast');
        $btn.css({
            'display': 'block'
        });
        return false;
    }).mouseleave(function() {
        $(this).animate({
            opacity: 0.3
        },
        'fast');
        $btn.css({
            'display': 'none'
        });
        return false;
    }).click(function() {
        //手动点击清除计时器
        btnClass = this.className;
        clearInterval(timer);
        timer = setInterval(move, 3000);
        move($(this), this.className);
    });
    $('.m-home-banner-circle li').live('click', 
    function() {
        var index = $('.m-home-banner-circle li').index(this);
        $banner_ul.animate({
            left: -v_width * index
        },
        'slow');
        page = index + 1;
        cirMove();
    });
});