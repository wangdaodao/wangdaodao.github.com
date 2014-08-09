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

## Emmet.sublime-settings

    {
        "snippets": {
            "css": {
                "snippets": {
                    // put snippets definition here
                    "bsh": "box-shadow:$1;",
                    "tsh": "text-shadow:$1",
                }
            },
            "html": {
                "snippets": {
                    // put snippets definition here\
                    "if:ie6": "<!--[if lte IE 6]>\n\t${child}|\n<![endif]-->",
                    "if:ie": "<!--[if IE]>\n\t${child}|\n<![endif]-->",
                },
                "abbreviations": {
                    "html:4": "!!!xxs+doc4[xmlns=http://www.w3.org/1999/xhtml xml:lang=${lang}]",
                    "style": "<style type=\"text/css\"></style>",
                    "sty": "<style type=\"text/css\"></style>",
                    "link:c": "<link rel=\"stylesheet\" href=\"${1:style}.css\" />",
                    "script": "<script type=\"text/javascript\"></script>",
                    "scr": "<script type=\"text/javascript\"></script>",
                    "script:s": "<script type=\"text/javascript\" src=\"\"></script>",
                    "scr:s": "<script type=\"text/javascript\" src=\"\"></script>",
                    "table+": "table[width=\"100%\" cellspacing=\"0\" cellpadding=\"0\"]>(caption)+(thead>tr>th)+(tbody>tr>td)+(tfoot>tr>td)",
                    "fst+": "fieldset>(legend+form)",
                }
            }
        },
        "preferences": {
            "css.valueSeparator": ":"
        }
    }