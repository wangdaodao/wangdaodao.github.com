---
date: 2014-07-14
layout: post
comments: yes
code: yes
title: Emmet使用手册：语法
categories: 笔记
tags: [emmet]
---

### Child: >
    
    nav>ul>li
    <nav>
        <ul>
            <li></li>
        </ul>
    </nav>

### Sibling: +

    div+p+bq
    <div></div>
    <p></p>
    <blockquote></blockquote>

### Climb-up: ^

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

### Grouping: ()

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

### Multiplication: *

    ul>li*5
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>

### Item numbering: $

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
-----
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

### ID and CLASS attributes

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

### Custom attributes

    p[title="Hello world"]
    <p title="Hello world"></p>
-----
    td[rowspan=2 colspan=3 title]
    <td rowspan="2" colspan="3" title=""></td>
-----
    [a='value1' b="value2"]
    <div a="value1" b="value2"></div>

### Text: {}

    a{Click me}
    <a href="">Click me</a>
-----
    p>{Click }+a{here}+{ to continue}
    <p>Click <a href="">here</a> to continue</p>

### Implicit tag names

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