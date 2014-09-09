---
date: 2014-06-24
layout: post
comments: yes
code: yes
title: Sublime Text 3设置
categories: 生活
tags: [sublime_text]
---

一直用的都是3056的，今天用的时候突然调不出侧边栏了，不知道是装啥插件给搞的！3059已经出了一段时间了，顺手来一个最新的吧，顺便备份下配置什么的！

[这里](https://gitcafe.com/wangdaodao/sublime-config)是我备份的一些东西，以后再用，直接可以下载用了！不过把这东西放GitCafe上是不是不太厚道啊！

至于用不用破解，全凭各自喜好了，不过真心有点贵啊！！

## 按 Ctrl+` 调出控制台安装源

    import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

## 安装插件
* [Emmet](https://sublime.wbond.net/packages/Emmet)
* [AutoBackups](https://sublime.wbond.net/packages/Automatic%20Backups)
* [Tag](https://sublime.wbond.net/packages/Tag)
* [jQuery](https://sublime.wbond.net/packages/jQuery)
* [ConvertToUTF8](https://sublime.wbond.net/packages/ConvertToUTF8)
* [SASS Build](https://sublime.wbond.net/packages/SASS%20Build)

## Sublime Text 3推荐主题
* Theme - [Spacegray](https://sublime.wbond.net/packages/Theme%20-%20Spacegray)
* Theme - [Flatland](https://sublime.wbond.net/packages/Theme%20-%20Flatland)
* Theme - [Centurion](https://sublime.wbond.net/packages/Theme%20-%20Centurion)
* Theme - [Nil](https://sublime.wbond.net/packages/Theme%20-%20Nil)
* Theme - [Soda](https://sublime.wbond.net/packages/Theme%20-%20Soda)

## 注册码

    —– BEGIN LICENSE —–
    Andrew Weber
    Single User License
    EA7E-855605
    813A03DD 5E4AD9E6 6C0EEB94 BC99798F
    942194A6 02396E98 E62C9979 4BB979FE
    91424C9D A45400BF F6747D88 2FB88078
    90F5CC94 1CDC92DC 8457107A F151657B
    1D22E383 A997F016 42397640 33F41CFC
    E1D0AE85 A0BBD039 0E9C8D55 E1B89D5D
    5CDB7036 E56DE1C0 EFCC0840 650CD3A6
    B98FC99C 8FAC73EE D2B95564 DF450523
    —— END LICENSE ——