---
date: 2014-06-20
layout: post
comments: no
title: 在windows下使用git
categories: 工作
tags: [git]
---

一直以来，都是在[GitHub for Windows](https://windows.github.com/)上面来管理*github*的，这次主要是想试一试在*cmd*下面来搞一搞*github*，顺便把一些项目转移到*gitcafe*上面，于是就有了这次的折腾。我对*git*还不是很熟练，只会几个常用的命令，而且也不是很懂，所以下面的文章也许有不对的地方，只是作为一个记录……

首先，*windows*下安装[Git for Windows](http://code.google.com/p/msysgit/downloads/list)，安装之后，如果这时你运行*cmd*，在里面打*git*命令会提示“不是内部或外部命令，也不是可运行的程序”，想要直接在*windows*的*cmd*里使用git命令要多加如下两步：

1、找到git安装路径中bin的位置，如：

     D:\Program Files\Git\bin

找到git安装路径中git-core的位置，如：

    D:\Program Files\Git\libexec\git-core;

**注："D:\Program Files\Git\"是安装路径，可能与你的安装路径不一样，要按照你自己的路径替换"D:\Program Files\Git\"**

2、右键“计算机”->“属性”->“高级系统设置”->“环境变量”->在下方的“系统变量”中找到“path”->选中“path”并选择“编辑”->将1中找到的bin和git-core路径复制到其中->保存并退出

**注：“path”中，每个路径之间要以英文输入状态下的分号——“;”作为间隔**

就可以在cmd里尽情的使用git了！

我一般的步骤是以下几步，例如我以我的*F盘*为例，我先进入到F盘，然后建立一个文件夹（也可以在电脑里面新建一个文件夹）

    mkdir git

建立好文件夹了，然后就执行*clone*这一步了，前提是你已经有仓库了

    git clone git@github.com:wangdaodao/Dao-ui.git

这样就把你的代码复制到本地了，如果你想复制到git文件夹下的一个文件夹，可以这样：

    git clone git@github.com:wangdaodao/Dao-ui.git wangdaodao

这样就把项目复制到了git/wangdaodao这个文件夹下面了。

如果把项目的文件修改了一些，需要重新提交，可以用下面的命令

    #add .是添加所有的修改文件
    git add .
    #提交所有的文件，如果只是修改原有的文件，上一步add可以省略
    git commit -m "描述" -a

我一般会做一个这样标记，以后再提交的时候就会很方便

    #其中github和gitcafe都是这个项目的标注，我理解为缩写
    git remote add github https://github.com/wangdaodao/Dao-ui.git
    git remote add gitcafe https://gitcafe.com/wangdaodao/Dao-ui.git

例如我要提交Dao-ui.git到github的master上，我可以这么写

    git push github master

例如我要提交Dao-ui.git到gitcafe的gitcafe-pages分支上，我可以这么写

    git push gitcafe gitcafe-pages

然后就是输入账号和密码了！

如果想删除文件，使用这样的命令：

    git rm index.html

这样就把index.html删除了，删除之后，别忘记了commit啊！

附：
[http://rogerdudler.github.io/git-guide/index.zh.html](http://rogerdudler.github.io/git-guide/index.zh.html)