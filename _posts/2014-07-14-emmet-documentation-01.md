---
date: 2014-07-14
layout: post
comments: yes
code: yes
title: Emmet使用手册：语法
categories: 笔记
tags: [emmet]
---

### Child: `>` (子元素)
    
    nav>ul>li
    <nav>
        <ul>
            <li></li>
        </ul>
    </nav>

### Sibling: `+` (兄弟元素)

    div+p+bq
    <div></div>
    <p></p>
    <blockquote></blockquote>

### Climb-up: `^` (返回上层)

    div+div>p>span+em^bq
    <div></div>
    <div>
        <p><span></span><em></em></p>
        <blockquote></blockquote>
    </div>
-----
    div+div>p>span+em^^bq
    <div></div>
    <div>
        <p><span></span><em></em></p>
    </div>
    <blockquote></blockquote>

### Grouping: `()` (分组)

    div>(header>ul>li*2>a)+footer>p
    <div>
        <header>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </header>
        <footer>
            <p></p>
        </footer>
    </div>
-----
    (div>dl>(dt+dd)*3)+footer>p
    <div>
        <dl>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
            <dt></dt>
            <dd></dd>
        </dl>
    </div>
    <footer>
        <p></p>
    </footer>

### Multiplication: `*` (乘法)

    ul>li*5
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

### Item numbering: `$` (编号)

    ul>li.item$*5
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
    </ul>
-----
    h$[title=item$]{Header $}*3
    <h1 title="item1">Header 1</h1>
    <h2 title="item2">Header 2</h2>
    <h3 title="item3">Header 3</h3>
-----
    ul>li.item$$$*5
    <ul>
        <li class="item001"></li>
        <li class="item002"></li>
        <li class="item003"></li>
        <li class="item004"></li>
        <li class="item005"></li>
    </ul>

使用 `@` 修饰符，可以改变编号的方向（升序或降序）及起点。

    ul>li.item$@-*5
    <ul>
        <li class="item5"></li>
        <li class="item4"></li>
        <li class="item3"></li>
        <li class="item2"></li>
        <li class="item1"></li>
    </ul>
-----
    ul>li.item$@3*5
    <ul>
        <li class="item3"></li>
        <li class="item4"></li>
        <li class="item5"></li>
        <li class="item6"></li>
        <li class="item7"></li>
    </ul>

### ID and CLASS attributes (属性操作符)

    #header
    <div id="header"></div>
-----
    .title
    <div class="title"></div>
-----
    form#search.wide
    <form id="search" class="wide"></form>
-----
    p.class1.class2.class3
    <p class="class1 class2 class3"></p>

### Custom attributes (自定义属性)

    p[title="Hello world"]
    <p title="Hello world"></p>
-----
    td[rowspan=2 colspan=3 title]
    <td rowspan="2" colspan="3" title=""></td>
-----
    [a='value1' b="value2"]
    <div a="value1" b="value2"></div>

### Text: `{}` (文本)

    a{Click me}
    <a href="">Click me</a>
-----
    p>{Click }+a{here}+{ to continue}
    <p>Click <a href="">here</a> to continue</p>

### Implicit tag names (隐式标签名称)

    .class
    <div class="class"></div>
-----
    em>.class
    <em><span class="class"></span></em>
-----
    ul>.class
    <ul>
        <li class="class"></li>
    </ul>
-----
    table>.row>.col
    <table>
        <tr class="row">
            <td class="col"></td>
        </tr>
    </table>