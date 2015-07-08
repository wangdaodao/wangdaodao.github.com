---
date: 2015-07-08
layout: post
comments: yes
title: SublimeText3 snippet 编写
categories: 笔记
tags: [sublime_text]
---

继上次[Sublime Text 3设置](/2014-06-24/sublime-text-3.html)后，这次又补上了代码片段的编写。

在菜单tool->New Snippet中定义.打开后是空白的snippet模板.

在 `<content><![CDATA[`  和  `]]></content>`之前为要定义的内容块,在`<tabTrigger>`  与  `</tabTrigger>` 之间定义快捷名称,在 `<scope>`  与  `</scope>`之间定义该snippet作用的文件类型.

例如当需要输入html5这几个字符后按tab, 就能展开为红色部分:

    <snippet>
    <content><![CDATA[
    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${1}</title>
    </head>
    <body>
        <h1>${1}</h1>

        Hello, ${2:this} is a ${3:snippet}!

    </body>
    </html>
    ]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <tabTrigger>html5</tabTrigger>
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <scope>text.html</scope>
    </snippet>

编写好此文件后ctrl+s会弹出默认的保存路径, 一般是`..\Data\Packages\User`,

文件名必须以`.sublime-snippet`为后缀.

如此文件可保存为`html5.sublime-snippet`或者其他前缀名称. 一个文件中只能有一个snippet.

`${1}`支持补全后光标默认停留的位置, 编辑完成此处内容后按tab可以跳转到`${2}`的位置,this表示2处默认内容,tab之后会选中this,${3:snippet}同理.

关于`<scope>`,官方定义如下:

    ActionScript: source.actionscript.2
    AppleScript: source.applescript
    ASP: source.asp
    Batch FIle: source.dosbatch
    C#: source.cs
    C++: source.c++
    Clojure: source.clojure
    CoffeeScript: source.coffee
    CSS: source.css
    D: source.d
    Diff: source.diff
    Erlang: source.erlang
    Go: source.go
    GraphViz: source.dot
    Groovy: source.groovy
    Haskell: source.haskell
    HTML: text.html(.basic)
    JSP: text.html.jsp
    Java: source.java
    Java Properties: source.java-props
    Java Doc: text.html.javadoc
    JSON: source.json
    Javascript: source.js
    BibTex: source.bibtex
    Latex Log: text.log.latex
    Latex Memoir: text.tex.latex.memoir
    Latex: text.tex.latex
    LESS: source.css.less
    TeX: text.tex
    Lisp: source.lisp
    Lua: source.lua
    MakeFile: source.makefile
    Markdown: text.html.markdown
    Multi Markdown: text.html.markdown.multimarkdown
    Matlab: source.matlab
    Objective-C: source.objc
    Objective-C++: source.objc++
    OCaml campl4: source.camlp4.ocaml
    OCaml: source.ocaml
    OCamllex: source.ocamllex
    Perl: source.perl
    PHP: source.php
    Regular Expression(python): source.regexp.python
    Python: source.python
    R Console: source.r-console
    R: source.r
    Ruby on Rails: source.ruby.rails
    Ruby HAML: text.haml
    SQL(Ruby): source.sql.ruby
    Regular Expression: source.regexp
    RestructuredText: text.restructuredtext
    Ruby: source.ruby
    SASS: source.sass
    Scala: source.scala
    Shell Script: source.shell
    SQL: source.sql
    Stylus: source.stylus
    TCL: source.tcl
    HTML(TCL): text.html.tcl
    Plain text: text.plain
    Textile: text.html.textile
    XML: text.xml
    XSL: text.xml.xsl
    YAML: source.yaml