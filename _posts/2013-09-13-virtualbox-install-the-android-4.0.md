---
date: 2013-09-13
layout: post
comments: yes
title: VirtualBox安装Android 4.0
categories: 工作
tags: [android]
---

*VirtualBox*确实是一个轻量级的虚拟机，大小还不到100M，但是做测试各种的折腾，今天就简单叙述下VirtualBox安装Android 4.0。

先放出需要下载的软件：[VirtualBox-4.2.18-88780-Win.exe](http://pan.baidu.com/share/link?shareid=1053344929&uk=1158070176)和[android-x86-4.0-r1-eeepc.iso](http://pan.baidu.com/share/link?shareid=1057838040&uk=1158070176)，我还导出了一份，不过大家先自己装着玩吧，不行了我再放出我导出的。

因为这次主要介绍的是安装Android 4.0，所以虚拟机的安装我就不过多的介绍了。

首先就新建一个虚拟机吧，值得注意的是，因为Android是基于Linux的，所以新建虚拟机的时候要选择**Linux（Linux2.6）**，内存512M就好了，硬盘选择8G就好。建好之后，先别启动，先设置一些东西！

首先是把下载下来的镜像挂载上去，如图：

![镜像挂载](/uploads/2013/09/1.jpg)

然后是设置网络，如图：

![设置网络](/uploads/2013/09/22.jpg)

好了，这里已经算是把准备工作做完了，接着就是启动！

![启动](/uploads/2013/09/2.png)

在这里我们把光标移到到*Installation*，然后按下*TAB*键，手动调整启动参数，在*DEBUG=*的后面加上*DADA=sda1 SDCARD=sda2*，为什么这么加我不太明白，官网上市这么说的，调整好后按回车键：

![Installation](/uploads/2013/09/3.png)

接下来是创建分区，选择*Create/Modify partitions*：

![创建分区](/uploads/2013/09/4.png)

选择*New*然后调整大小，最后选择*Quit*：

![调整大小](/uploads/2013/09/5.png)

之后就是格式化分区，这里格式化成*Ext3*文件系统：

![格式化分区](/uploads/2013/09/6.png)

![格式化分区](/uploads/2013/09/7.png)

<img src="http://wangdaodao.com/wp-content/uploads/2013/09/7.png" alt="7" width="580" height="381" class="aligncenter size-full wp-image-7318" />

然后Adndroid就自己展开文件，这个过程很快，比安装Windows快多了：

![展开文件](/uploads/2013/09/8.png)

安装好后把镜像从虚拟机上移除，然后选择*Reboot*，重启虚拟机：

![重启虚拟机](/uploads/2013/09/9.png)

这是重启后启动Android的引导界面，是GRUB：

![引导界面](/uploads/2013/09/10.png)

启动了自己进去可以设置下其他参数了！