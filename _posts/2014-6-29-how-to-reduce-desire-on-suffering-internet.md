---
date: 2014-06-29
layout:     post
comments:   yes
code:        yes
title:      如何有效克制上网的欲望，限制上网的时间？
category:   blog
tags: [自我控制]
---
##为何控制上网的欲望对现在的我们如此重要？
先引用知乎用户[采铜][1]的曾经一次发言：
>在沙坑里，我们总是一次次地把沙子抓起来，刚获得一点快感，沙子就已从指尖划下，然后重新来过。即便这个过程重复得再多次，我们还是得到相同的结果。每一天都是崭新的一天，但每一天都在重复昨天的故事。



这就是我们上网活动的真实写照，每天被网络上的各种没有价值的信息刺激，虽觉有趣，但确是「低收益值、短半衰期」的行为。所以如果你也有这种感觉，不想继续沉沦下去，就必须采取点措施了，不过你必须要清除出的是不要过分相信你的控制力。借助外力会让你事半功倍。
下面的几款神奇会强制屏蔽掉你指定的网站，他们就像戒毒所的工作人员，帮你解除网瘾！

* [RescueTime][]：自动统计每天在各种网站各停留了多少时间，屏蔽指定网站。可设定限额。
* [Freedom][]：完全切断互联网。
* [Anti-Social][]：屏蔽指定网站。
* [Self-Control][]：屏蔽指定网站。
* [Concentrate][]：制定一系列任务，每个任务各有屏蔽的和允许使用的应用或网站。
* [StayFocused][]：限制自己每天上某些网站的时间。
 
平台：

* Windows：Freedom，Anti-Social，RescueTime
* Mac OSX：Freedom，Anti-Social，RescueTime，Self-Control，Concentrate
* Linux：Self-Control，RescueTime，Anti-Social
* 安卓：Freedom，Anti-Social，RescueTime
* iOS：系统自带的访问限制
* 谷歌浏览器插件：RescueTime，StayFocused
* 火狐浏览器插件：RescueTime


费用：

免费：RescueTime（试用版），Self-Control，StayFocused

收费：

* RescueTime Pro：$9/月，$72/年
* Freedom：终身 $10，60 天免费试用
* Anti-Social：终身$15，60 天免费试用
* Freedom + Anti-Social 套餐：终身 $20
* Concentrate：终身 $29

建议屏蔽网站：

* 国内：人人网，新浪微博，知乎，优酷，豆瓣，煎蛋，果壳，天涯
* 国外：Facebook, Twitter, YouTube, Vimeo, 9GAG, Reddit
* 安装 RescueTime 试用版，根据统计结果屏蔽

我用了Anti-social,它可以屏蔽掉指定的网站，设置屏蔽时间（最长24小时，不过你在schedule设置里勾选所有选项就可以一直屏蔽了），一旦开始在时间结束前，你是无法退出的，逃掉监管的！原理很简单，就是修改了host文件，重定向而已，并且一直霸占该文件的读取权限，你无法在时间没到之前去修改它。我尝试过结束掉它的进程，结果进程虽然结束了，却还是无法修改，当然我估计想强制卸载肯定也是不行的，会提示“文件使用中”，当然这好歹是要花费15刀的，仅仅只是网瘾复发就要卸载掉，还要那么折腾的想绕过他，那就活脱脱的吸毒者毒瘾复发的表现啊，太可怕了！
>很遗憾，发现了两个bug，当我的用户组设置为可以修改host的权限时，在进程被杀，杀毒软件关掉后，改掉了Host之后，软件失效了，这应该可以避免的啊，要不然就只能监管小白啊。还有在电脑重启后，设定的时间会重置。我想在Linux下肯定表现要好点。不管了，写邮件反馈吧！

值得注意的是如果你的杀毒软件如果限制了无法修改Host文件，你要先关闭杀毒软件才能启用它。我首先想屏蔽的就是总舵！呵呵！

![Anti-social](http://media-clark.qiniudn.com/anti-social.png)

![Anti-social2](http://media-clark.qiniudn.com/anti-social2.png)




[1]:  http://www.zhihu.com/people/cai-tong

[RescueTime]: https://www.rescuetime.com/     "RescueTime"
[Freedom]: http://macfreedom.com/           "Freedom "
[Anti-social]: http://anti-social.cc/       "Anti-Social"     
[Self-Control]: http://selfcontrolapp.com/    "Self-Control"
[Concentrate]:  http://www.getconcentrating.com/    "Concentrate"   
[StayFocused]: https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji  "StayFocused"
