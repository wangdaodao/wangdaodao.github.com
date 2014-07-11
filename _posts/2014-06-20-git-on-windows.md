---
date: 2014-06-20
layout: post
comments: yes
code: yes
title: 初探Git
categories: 工作
tags: [git]
---

一直以来，都是在[GitHub for Windows](https://windows.github.com/)上面来管理*github*的，这次主要是想试一试在*cmd*下面来搞一搞*github*，顺便把一些项目转移到*gitcafe*上面，于是就有了这次的折腾。我对*git*还不是很熟练，只会几个常用的命令，而且也不是很懂，所以下面的文章也许有不对的地方，只是作为一个记录……

##安装git

首先，*windows*下安装[Git for Windows](http://msysgit.github.io/)，安装之后，如果这时你运行*cmd*，在里面打*git*命令会提示“不是内部或外部命令，也不是可运行的程序”，想要直接在*windows*的*cmd*里使用git命令要多加如下两步：

1、找到git安装路径中bin的位置，如：

     D:\Program Files\Git\bin

找到git安装路径中git-core的位置，如：

    D:\Program Files\Git\libexec\git-core;

**注："D:\Program Files\Git\"是安装路径，可能与你的安装路径不一样，要按照你自己的路径替换"D:\Program Files\Git\"**

2、右键“计算机”->“属性”->“高级系统设置”->“环境变量”->在下方的“系统变量”中找到“path”->选中“path”并选择“编辑”->将1中找到的bin和git-core路径复制到其中->保存并退出

**注：“path”中，每个路径之间要以英文输入状态下的分号——“;”作为间隔**

就可以在cmd里尽情的使用git了！

但是在使用的时候还要git在windows上配置ssh公钥
 
设置git的user name和email：
 
    $ git config --global user.name "wangdaodao"
    $ git config --global user.email "hi@wangdaodao.com"

生成密钥

    ssh-keygen -t rsa -C "hi@wangdaodao.com"

按3个回车，密码为空。(不要输密码)
 
然后到.ssh下面将id_rsa.pub里的内容复制出来粘贴到个人中心的账户设置的ssh key里面

----

##git一般使用

到这里，操作基本上就不分*windows*或者*linux*了。

我一般的步骤是以下几步，例如我以我的*F盘*为例，我先进入到F盘，然后建立一个文件夹（也可以在电脑里面新建一个文件夹）

    mkdir git

建立好文件夹了，然后就执行*clone*这一步了，前提是你已经有仓库了

    git clone git@github.com:wangdaodao/Dao-ui.git

这样就把你的代码复制到本地了，如果你想复制到git文件夹下的一个文件夹，可以这样：

    git clone git@github.com:wangdaodao/Dao-ui.git wangdaodao

这样就把项目复制到了git/wangdaodao这个文件夹下面了。

如果是克隆某一个分支，可以这样：

     git clone -b fenzhi git@github.com:wangdaodao/Dao-ui.git

查看分支：

    git branch

在本地新建分支：

    git branch <新分支名字>

切换分支

    git checkout <新分支名字>

提交分支，需要remote add后，再提交！

如果把项目的文件修改了一些，需要重新提交，可以用下面的命令

    #add .是添加所有的修改文件
    git add .
    #提交所有的文件，如果只是修改原有的文件，上一步add可以省略
    git commit -m "描述" -a

我一般会做一个这样标记，以后再提交的时候就会很方便

    #其中github和gitcafe都是这个项目的标注，我理解为缩写
    git remote add github https://github.com/wangdaodao/Dao-ui.git
    git remote add gitcafe https://gitcafe.com/wangdaodao/Dao-ui.git

查看命令：

    git remote -v

删除命令：

    #删除github
    git remote rm github

例如我要提交Dao-ui.git到github的master上，我可以这么写

    git push github master

例如我要提交Dao-ui.git到gitcafe的gitcafe-pages分支上，我可以这么写

    git push gitcafe gitcafe-pages

然后就是输入账号和密码了！

如果想删除文件，使用这样的命令：

    git rm index.html

如果想删除文件夹，使用这样的命令：

    git rm test -r

删除之后，别忘记了commit啊！

如果要更新本地代码

    #如果刚才remote了，这里origin就是刚才标记的了（有点说不明白了）
    git pull origin

更新分支代码

    git pull origin 分支名

附：
[http://rogerdudler.github.io/git-guide/index.zh.html](http://rogerdudler.github.io/git-guide/index.zh.html)