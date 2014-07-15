---
date: 2012-09-16
layout: post
comments: yes
title: GAE翻墙教程
categories: 笔记
tags: [gae,gfw]
---

站在墙内，总是想爬墙头上看看墙外的世界，*GFW*的存在，导致了各种个样的办法来翻过这堵墙！现在，叨叨终于会翻墙了，使用的是*GoAgent*，经常翻墙的应该不会陌生吧！下面就记录下教程，也算做一个备份吧！

使用*GoAgent*浏览“某些网站”的具体步骤：

##第一步：申请创建一个Application

###Step 1 -申请Google App Engine账号

登录[http://appengine.google.com](http://appengine.google.com)，如果你已经拥有一个*Gmail*账户，直接输入账号密码就可以登录；如果没有则需要新申请一个*Gmail*账户。

###Step 2 -创建Application

![create-application](/uploads/2012/09/create-application.jpg)

###Step 3 -通过短信验证你的账户

![verify-your-account-by-SMS](/uploads/2012/09/verify-your-account-by-SMS.jpg)

需要短信验证才可以进行下一步操作，*Country and Carrier*（国家和运营商）处选择*Other*，*Mobile Number*（手机号码）处填写你的个人手机号码号码，格式为+8613912345678

###Step 4 -将手机收到的验证码输入并Send

![authentication-code](/uploads/2012/09/authentication-code.jpg)

你将会收到谷歌发给你的短信，短信内容大致为：**Google App Engine：XXXXXX（六位数字）**。

###Step 5 -创建一个属于你的Application

![Create-an-Application](/uploads/2012/09/Create-an-Application.jpg)

1）输入一个*Application ID*，允许使用英文字母和短横杆；
2）点击*Check Available*，检查一下是否可用；
3）输入*Application*名称，这里可以随便填；
4）如果您的应用程序使用验证，任何人都可以与一个有效的*Google*帐户登录；
5）最后*Creat Application*

![Application-registered-successfully](/uploads/2012/09/Application-registered-successfully.jpg)

**注：每个Gmail账户最多只能够创建10个Google App Engine应用，每个应用每天有1GB免费流量。如果你经常下载或者观看视频，建议多创建几个Google App Engine应用。**

##第二步：修改谷歌账号两步验证

###Step 1 -进入[谷歌账户设置页面](https://www.google.com/settings)

在安全性-两步认证处，点击修改；

![Google-Account-Setting](/uploads/2012/09/Google-Account-Setting.jpg)

###Step 2 -开始设置Google账户

这一步会用手机验证！此处你需要点击发送验证码，获取验证码后提交确认进入下一步；

![phone-setting](/uploads/2012/09/phone-setting.jpg)

通过验证后，会让你选择，是否信任当前计算机，如果当前计算机不是你个人的计算机，不要勾选信任此计算机，然后就是激活！这里，由于我已经激活过了，就没办法截图了，相信大家应该可以激活！

###Step 3 -开始为你的Application创建密码，非常重要！

![Generate-password](/uploads/2012/09/Generate-password.jpg)

1）输入刚才申请的*Application ID*，例如daodao-wang；
2）点击*Generate password*，创建密码；

###Step 4 -把生成的密码记下来，后面会用到的。

![get-a-password](/uploads/2012/09/get-a-password.jpg)

##第三步：配置goagent客户端

###Step 1 -下载goagent客户端

[Download](http://code.google.com/p/goagent/)

###Step 2 -修改local\proxy.ini

修改local\proxy.ini中的[gae]下的appid=你的*appid*(多appid请用|隔开)，即前面创建创建*Application*所设定的*Application ID*，如我设定的daodao-wang；

![change-your-appid](/uploads/2012/09/change-your-appid.jpg)

###Step 3 -双击server\uploader.bat

**Windows 7或Windows 8用户最好以管理员身份运行**，根据提示依次输入*Application ID*，邮箱地址，和修改谷歌账号两步验证Step 8中生成的16位密码。（注，输入密码时，文字是不可见的，确定输入后回车确认即可。

![uploader1](/uploads/2012/09/uploader1.jpg)

![uploader2](/uploads/2012/09/uploader2.jpg)

##第四步：开始使用GoAgent

使用*GoAgent*上网前，你必须运行local\goagent.exe（以管理员身份运行），就刚才下载的*goagent*压缩包里面的文件。

![GoAgent](/uploads/2012/09/GoAgent.jpg)

如果你使用的是*Chrome*，请参考以下教程：

1）*Chrome*请安装*SwitchySharp*插件；

2）导入*SwitchySharp*配置，[下载地址:http://goagent.googlecode.com/files/SwitchyOptions.bak](http://goagent.googlecode.com/files/SwitchyOptions.bak)，进入*SwitchySharp*设置界面，点击“导入/导出”-“从文件恢复”，导入刚才下载的*SwitchyOptions.bak*

![switchysharp](/uploads/2012/09/switchysharp.jpg)

3）使用*Chrome*浏览*Twitter*、*Facebook*，*YouTube*等网站时，记得切换到*GoAgent*

![chrome-goagent](/uploads/2012/09/chrome-goagent.jpg)

如果你使用的是*Firefox*，请参考以下教程：

1）安装火狐附加组件[AutoProxy](https://addons.mozilla.org/zh-cn/firefox/addon/autoproxy/)；安装完毕后重启*Firefox*，提示规则列表，记得选中确定；

![gfwlist](/uploads/2012/09/gfwlist.jpg)

2）FireFox->选项->高级->加密->查看证书->证书机构->导入证书, 选择*local\ca.crt*, 勾选所有项，导入。

![certificate](/uploads/2012/09/certificate.jpg)

3）添加代理设置，点击*AutoProxy*图标旁边的三角按钮，在下拉菜单中选择*preferences*或者使用快捷键*Ctrl+Alt+P*进入附加组件首选项设置，然后点击*Proxy Server*，选择*Edit Proxy Server*，添加代理地址，如下图：

![Edit-Proxy-Server](/uploads/2012/09/Edit-Proxy-Server.jpg)

4）修改默认代理，同样是*preferences*界面点击*Proxy Server*，选择*Choose Proxy Server*，将默认的Proxy改成刚才添加的；

![choose-proxy-server](/uploads/2012/09/choose-proxy-server.jpg)

5）使用*AutoProxy*会自动根据已定规则决定是否使用*Proxy*的。

注意：切记需要连接外网时运行文件夹*local*下的goagent.exe，否则无法连接外网。

教程很长，看到这里大家照着做，应该可以搞定，如果搞不定了，那就用这个[工具](https://code.google.com/p/icefox/)吧，安装下就可以翻墙了！