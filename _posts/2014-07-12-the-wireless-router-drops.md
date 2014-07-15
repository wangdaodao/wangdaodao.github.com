---
date: 2014-07-12
layout: post
comments: yes
code: no
title: 解决无线路由器掉线问题
categories: 生活
tags: [wireless_router]
---

好吧，这篇文章可能只对我有用（很水），但是我还是记录下来吧！

症状：路由器联网，而且也能搜到，但是，电脑连无线的时候，每隔几分钟掉线！

路由器：磊科NW714，刷了最新的固件

无线网卡（坑爹货）：Atheros AR9285 Wireless Network Adapter，驱动版本9.2.0.500

软件工具：无线网络检测连接工具(PassMark WirelessMon)

没图我说什（J）么（B）

![WirelessMon](/uploads/2014/07/WirelessMon.jpg)

主要原理是同一信道干扰，导致电脑掉线！！！用WirelessMon搜下，看看哪个信道用的少，就换成少的！

什么，就这样就解决了？

对的，针对我的症状，用此办法解决了我频繁掉线的问题了（抠鼻屎）……