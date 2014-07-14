---
date: 2014-07-14
layout: post
comments: yes
code: yes
title: Emmet使用手册
categories: 笔记
tags: [emmet]
---

## 语法

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