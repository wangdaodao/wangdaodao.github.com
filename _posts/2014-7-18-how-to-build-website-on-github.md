---
date: 2014-07-18
layout:     post
comments:   yes
code:        yes
title:      如何利用github快速创建免费不限流量的个人站点？
category:   blog
tags: [github,blog,域名]
---
> **很多人都想拥有一个以自己名字命名或个性化昵称作为顶级域名的网站，比如“yourname.com”,较为常见的做法是购买vps服务器，安装wordpress,然后开始写文章，但一来vps价格不菲，安装wordpress不难但也会让很多人止于尝试。二来现在wordpress已经变得越来越大，让单纯只想写文字博客，不想被纷繁的主题和多样的所诱惑人无所适从。好在有了github,你可以在30min内拥有无限流量的个人站点！**

##Github是什么？

github是一个开源的代码库托管系统，想了解它的话你可以花很多时间了解，但如果你只是想快速的搭建一个站点的话就不需要了。只需知道你可以通过它的GithubPages功能来快速搭建你的不限流量，拥有300m空间并且可以绑定域名(太厚道了)的个人站点就够了。

具体工作可分为以下几步：

#购买域名

* 你可以通过[Godaddy](http://www.godaddy.com/),这个全球最大的域名提供商来购买域名，或者国内的[万网](http://www.net.cn/)来购买，具体操作就不说了，网上教程很多。通常一个域名一年的价格为50元，买之前搜一下优惠码，可以便宜很多。

#注册github

* 登陆[github](https://github.com),简单注册一下即可，如果你根本不打算为开源界做贡献。那么其他的事你就不用管了。

#下面介绍一下搭建博客的原理

`本介绍来自[阮一峰的日志](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)`

![原理](http://media-clark.qiniudn.com/yuanli.png)

**原理介绍完了，下面就是具体的建站过程了。显然自定义站点的话那还不如用wordpress呢，但感谢gihub的开源性，你可以简单的fork别人做好的网站**

****
#具体建站过程

* fork别人已做好的站点

	这是一个寻觅的过程，通常牛人都会在自己的github上建立自己的主页。找到这样的牛人是一个美妙的过程。比如这次我选择了牛人[wangdaodao](https://github.com/wangdaodao/wangdaodao.github.com)的模板来建站。登陆到他的这个项目主页后，点击右上角的fork按钮，这样就会在复制一份到你的空间里了。顺手点个赞吧！
	![](http://media-clark.qiniudn.com/deephelper%20wangdaodao.github.com.png)
* 更换站点名称
	
	在自己的主页点击这个项目，点击右边的settings按钮
	
	![setting](http://media-clark.qiniudn.com/edit.png)
	
	**将名称改为自己github账号的登录名，这是关键，否则这个站点是建立不了的！**

	![rename](http://media-clark.qiniudn.com/rename.png)
	
	**大约过个10分钟（github渲染时间）,在浏览器输入yourname.github.com,你将会惊喜的发现你的站点已经建好了！只不过是完全拷贝了别人的站点。接下来你要做的就是把他变成自己的！**

	![yourwebsite](http://media-clark.qiniudn.com/website.png)

* 绑定自己的域名

	就是到你的域名提供商的主页里增加A记录或CNAME指向github的ip，具体教程可以看[这篇](http://jingyan.baidu.com/article/3c343ff70fb6e60d3779632f.html),至于ip你可以不用Ping，直接填192.30.252.153即可。注意这个ip是github官方的，有可能会变，具体见[这儿]()
* 在github上修改cname文件

	github绑定域名的方法是在项目文件夹里增加一个cname文件,里面填上你的域名即可.由于我们是fork了别人的站点，你可以直接在github上进行编辑。点击这个项目里的文件，进去之后会有编辑按钮，点击即可。

	![domain](http://media-clark.qiniudn.com/cname.png)
	
	**试着在浏览器上输入你的域名，怎么样，很神奇吧？感谢github!!**

	![](http://media-clark.qiniudn.com/blog_dengck.png)

* 自定义站点，具体就不多说了，你可以深入学习，或者只要学会简单的命令或通过 Gitub for Windows来同步站点。你要知道的事情包括
  
  - 站点的自定义样式通常在_config.yml文件里进行修改。具体你可以研究你fork的站点
  - github原生支持makrkdown语法，这也是最重要的特性之一，你可以轻松创建排版精美的文章
  - 博文都保存在_posts文件夹下，所以fork回来的站点请把别人的文章**删除！**
  - **请不要修改站点的版权信息，这是对别人最起码的尊重！**
  - 以后写博文只要同步到_post文件夹下就行了

#至于其他的高级操作我就无能为力了，比如自己制作主题什么的？呵呵

#最后感谢[wangdaodao](https://github.com/wangdaodao)!

