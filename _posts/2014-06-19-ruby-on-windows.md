---
date: 2014-06-19
layout: post
comments: no
title: 在windows下搭建ruby开发环境
categories: 工作
tags: [ruby]
---

在*windows*下搭建*ruby*开发环境，需要原料：

[rubyinstaller](http://rubyinstaller.org/)：自行下载需要的ruby版本，我这里用的Ruby 1.9.3

可能需要的原料：mysql，这样我只用mysql-connector，自行搜索下载。

安装完*rubyinstaller*，可以查看下版本

    ruby -v
    rails -v
    gem -v

[![查看版本](/uploads/2014/06/ruby1.png)](/uploads/2014/06/ruby1.png)

到这里，环境算是搭完一半了，然后进入到项目里面，执行命令：

    bundle

[![bundle](/uploads/2014/06/ruby2.png)](/uploads/2014/06/ruby2.png)

提示有错，没有装*libv8*

[![libv8](/uploads/2014/06/ruby3.png)](/uploads/2014/06/ruby3.png)

安装*libv8*

    gem install libv8 -v '3.16.14.3' -- --with-system-v8

[![libv8完成](/uploads/2014/06/ruby4.png)](/uploads/2014/06/ruby4.png)

再次执行*bundle*，提示有错，没有装*mysql2*，搜索下载*mysql-connector*，我这里用的是32位，下载后解压到任意盘符下，我这里是*C盘*，然后执行命令：

    gem install mysql2 --platform=ruby -v '0.3.16' -- '--with-mysql-dir="C:\mysql-connector"

[![mysql2](/uploads/2014/06/ruby5.png)](/uploads/2014/06/ruby5.png)

[![mysql2](/uploads/2014/06/ruby7.png)](/uploads/2014/06/ruby7.png)

我安装完**0.3.15**又提示我没安装**'0.3.16**

[![mysql2安装完成](/uploads/2014/06/ruby8.png)](/uploads/2014/06/ruby8.png)

[![mysql2安装完成](/uploads/2014/06/ruby6.png)](/uploads/2014/06/ruby6.png)

终于安装好了，启动下项目吧：

    rails s

[![项目启动](/uploads/2014/06/ruby9.png)](/uploads/2014/06/ruby9.png)

后记：项目中用到了*therubyracer*包，但是搜索了下，发现windows下面没有解决办法：[therubyracer gem on windows](http://stackoverflow.com/questions/6356450/therubyracer-gem-on-windows)，真坑，如果真需要，linux或者mac下搞吧……