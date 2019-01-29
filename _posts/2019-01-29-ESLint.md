---
date: 2017-11-08
layout: post
comments: yes
code: yes
title: Typecho Apache Rewrite规则
categories: 笔记
tags: [Typecho]
---

环境是LAMP，网站根目录新建`.htaccess`文件：

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

Nginx的话，看这篇[《Typecho Nginx Rewrite规则》][1]。


  [1]: http://wangdaodao.com/20180703/typecho-nginx-rewrite.html