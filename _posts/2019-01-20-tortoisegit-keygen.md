---
date: 2019-01-20
layout: post
comments: yes
code: no
title: TortoiseGit之配置密钥
categories: 笔记
tags: [Git]
---

TortoiseGit 使用扩展名为ppk的密钥，而不是ssh-keygen生成的rsa密钥。使用命令`ssh-keygen -C "邮箱地址" -t rsa`产生的密钥在TortoiseGit中不能用。而基于git的开发必须要用到rsa密钥，因此需要用到TortoiseGit的putty key generator工具来生成既适用于git的rsa密钥也适用于TortoiseGit的ppk密钥，具体配置步骤如下：

 1. **运行TortoiseGit开始菜单中的`puttygen`程序**
    ![puttygen.png][1]
 2. **点击Generate按钮，鼠标在上图的空白地方来回移动直到进度条完毕，就会自动生一个随机的key，如下图示**
    ![key.png][2]
 3. **将上图中多行文本框的内容全选、复制，并粘贴到git账户的 SSH public key中，这就是适用于git的公钥。**
 4. **点击上图中的Save private key按钮,将生成的key保存为适用于TortoiseGit的私钥（扩展名为.ppk）。**
 5. **运行TortoiseGit开始菜单中的Pageant程序，程序启动后将自动停靠在任务栏中，双击该图标，弹出key管理列表，如下图示**
    ![Pageant.png][3]
 6. **点击上图中的Add Key按钮，将第4步保存的ppk私钥添加进来，关闭对话框即可。**

  [1]: https://wangdaodao.com/usr/uploads/2019/01/3048424348.png
  [2]: https://wangdaodao.com/usr/uploads/2019/01/3942870075.png
  [3]: https://wangdaodao.com/usr/uploads/2019/01/123226250.png