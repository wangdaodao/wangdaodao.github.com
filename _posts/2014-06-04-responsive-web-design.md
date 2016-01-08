---
date: 2014-06-4
layout: post
comments: yes
code: yes
title: 给现在用的主题加上了响应式菜单
categories: 笔记
tags: [jekyll,themes]
---

今天把主题修改完毕了，各位客官可以拖动下窗口大小来看看！

考虑到用 *JS* 来实现响应式菜单，但是还是放弃了！还是使用 *CSS* 简单的粗暴的来搞吧！

放一个示例的源码

    <!doctype html>
    <html>
    <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>
    <title>Responsive Menu Demo</title>
    <style>
    header{
     background-color:#000;
     color:#FFF;
     height:auto;
     padding:5px;
     height:30px;
     z-index:1;
    }
    header ul{
     z-index:999;
     background-color:#000;
     right:10px;
     position: absolute;
    }
    header ul li{
     cursor:pointer;
     width:80px;
     float:left;
     margin:0px 10px;
     height:30px;
     text-align:center;
     line-height:30px;
    }
    header ul li a{
     color:#FFF;
     text-decoration:none;
    }
    header ul li:hover,header ul li.active{
     background-color:#F5F5F5;
     border-radius:2px;
    }
    header ul li:hover > a,header ul li.active > a{
     color:#000;
     text-decoration:none;
    }
    header ul li:first-child{
     display:none;
    }
    a.Link{
     display:none;
    }
    @media (max-width: 640px){
    header ul li{
     float:none;
     display:none;
     margin:10px;
    }
    header ul li:first-child{
     display:list-item;
     margin:0px 10px;
    }
    header ul:hover > li,header ul:focus > li,header ul:active > li{
     display:list-item;
    }
    header ul li:first-child:hover{
     background-color:#000;
     color:#FFF;
    }
    a.Link{
     display:block;
     text-align:center;
     margin-top:30%;
     color:#5AC9C4;
     font-size:20px;
     font-family:Verdana;
    }
    </style>
    </head>
    <body ontouchstart="">
     <header class="clearfix">
      <ul>
       <li>Menu</li>
       <li class="active"><a href="?1">Home</a></li>
       <li><a href="?2">Docs</a></li>
       <li><a href="?3">Download</a></li>
       <li><a href="?4">Demo</a></li>
       <li><a href="?5">About us</a></li>
      </ul>
     </header>
    </body>
    </html>