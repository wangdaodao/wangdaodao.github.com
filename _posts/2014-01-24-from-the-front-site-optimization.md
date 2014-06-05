---
date: 2014-01-24
layout: post
comments: no
title: 从前端优化网站
categories: 工作
tags: [optimization,front-end]
---

以前对网站优化有了一套自己的方法，最近也在着手优化公司的网站，分享出来，也为自己做下记录！

要说怎么来衡量优化的结果呢，我觉得分主观和客观！

先说客观，就是用工具来测量出来的，Yslow 和 Page-Speed 就是这样的工具！分享一个网址，输入地址就可以把这两个分数都测试出来，并且把优化方案和建议还有压缩好的图片都输出了！[http://gtmetrix.com](http://gtmetrix.com)<a href="http://gtmetrix.com"></a>

![2014012313043711111](/uploads/2014/01/2014012313043711111.jpg)

我总结出来，就是减少加载次数，合理的运用 Css Sprite 和 Img Sprite，压缩前端展示的东西（img，css，js，html），编写高质量代码去除冗余的嵌套（有点难）！

减少加载次数就是把一些样式和脚本尽量的合并到一起，例如我优化的时候，样式只有2个，一个是公用样式一个是栏目的样式！这需要一开始编写的时候都要考虑到，不能弄完了再回头优化，这样会很麻烦！

合理的合并图片，我见过一个，把整个网站所用到的图片全部都合并到一起，这样就不太合理了，用户可能有些图片根本就不会看到，干嘛还要加载过来呢？按需加载，按需合并就好了！

压缩代码，在上线之前，保留一个未压缩版本的来供以后维护，上线的代码注释什么都删除，减小体积。

编写高质量的代码，我这点感觉自己还没做的很好，所以我就不说了！

再说主观，这个就比较纠结了，凭感觉来说的东西！不过建议使用给力的主机，再配合cdn加速，这样主观上能感觉快点吧！