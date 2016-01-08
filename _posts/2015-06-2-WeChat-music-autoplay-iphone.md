---
date: 2015-06-02
layout: post
comments: yes
code: yes
title: iPhone微信自动播放音乐
categories: 笔记
tags: [front_end,ios]
---

前段时间做了一个微信推广页面，运营那边需要让用户在微信中打开页面的时候音乐就要自动播放（用户体验都去哪了），然后乔帮主固执的认为自动播放对用户是不友好的，于是autoplay属性就失效了（摊手）！

这问题应该不止我一个人遇见，所以就在网上搜，果然什么文章都有，不过大都不能用！例如腾讯ISUX的[《玩转HTML5移动页面（动效篇）》](http://isux.tencent.com/play-with-html5-animate.html)使用的方法：

> 通过`new`一张图片，监听一张图片的`onload`事件，结束后回调执行音频播放`audio.play()`即可。

    var audio = document.getElementById('audio');
    var Img = new Image();
    Img.src = "http://wangdaodao.github.io/demo/wx/img/p1_img1.png";
    Img.onload = function (){
      audio.play();
    }

好吧，可能是我写的代码不对，没能起作用！

还有就是通过模拟用户触发屏幕来播放音乐的，但是用户把音乐关了，再一滚屏，音乐又开始播放了！！！

    document.addEventListener('touchstart', function () {
      document.getElementsByTagName('audio')[0].play();
      document.getElementsByTagName('audio')[0].pause();
    });

最后的代码：只能保证在微信上使用

    $(function() {
      document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
          document.getElementById('audio').play();
        });
      }, false);
    })
    <audio id="audio" preload="auto" autoplay="true" >
      <source src="bg.mp3" type="audio/mpeg">
      <source src="bg.ogg" type="audio/ogg">
    </audio>

最后在找代码的时候，又发现了几个和微信相关的代码

隐藏微信网页右上角的按钮

    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 通过下面这个API隐藏右上角按钮
      WeixinJSBridge.call('hideOptionMenu');
    });
                
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 通过下面这个API显示右上角按钮
      WeixinJSBridge.call('showOptionMenu');
    });

隐藏微信网页底部的导航栏

    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 通过下面这个API隐藏底部导航栏
      WeixinJSBridge.call('hideToolbar');
    });
               
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
      // 通过下面这个API显示底部导航栏
      WeixinJSBridge.call('showToolbar');
    });

在微信网页中获取用户的网络状态

    WeixinJSBridge.invoke('getNetworkType',{},function(e){
      // 在这里拿到e.err_msg，这里面就包含了所有的网络类型
      // network_type:wifi         wifi网络
      // network_type:edge      非wifi,包含3G/2G
      // network_type:fail         网络断开连接
      // network_type:wwan     2g或者3g
      alert(e.err_msg);
    });