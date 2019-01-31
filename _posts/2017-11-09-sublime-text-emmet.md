---
date: 2017-11-09
layout: post
comments: yes
code: yes
title: Sublime Text Emmet的用法及相关语法
categories: 笔记
tags: [sublime_text]
---
## 一、生成 HTML 文档初始结构
HTML 文档的初始结构，就是包括 doctype、html、head、body 以及 meta 等内容。你只需要输入一个 `“!”` 就可以生成一个 HTML5 的标准文档初始结构，你没有看错，输入一个感叹号（当然是英文符号），然后摁下 `ctrl+E` 键，就会发现生成了下面的结构：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```


<!--more-->


这就是一个 HTML5 的标准结构，也是默认的 HTML 结构。如果你想生成 HTML4 的过渡型结构，那么输入指令 `html:xt`,然后ctrl+E, 即可生成如下结构：

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

> Emmet 会自动把 doctype 给你补全了，怎么样，这样的功能会不会让你动心？简单总结一下常用的 HTML 结构指令：  
> `html:5` 或者 `!` 生成 HTML5 结构  
> `html:xt` 生成 `HTML4` 过渡型  
> `html:4s` 生成 `HTML4` 严格型  

## 二、生成带有 id 、class 的 HTML 标签
Emmet 的语法有点类似 CSS 的语法，生成 id 为 aaa 的 div 标签，我们只需要编写下面指令：

```
#aaa
```

Emmet 默认的标签为 div ，如果我们不给出标签名称的话，默认就生成 div 标签。如果编写一个 class 为 bbb 的 span 标签，我们需要编写下面指令：

```
span.bbb
```

然后就生成了对应的结构。同理，如果想要编写一个 id 为 ccc 的 class 为 ddd 的 ul 标签，我们可以这样写：

```
ul#ccc.ddd
```

很简单吧？比你用手写 id 、class 方便多了吧

## 三、生成后代：>
大于号表示后面要生成的内容是当前标签的后代。例如我要生成一个无序列表，而且被 class 为 aaa 的 div 包裹，那么可以使用下面指令：

```
div.aaa>ul>li
```

可以生成如下的结构：

```
<div class="aaa">
  <ul>
    <li></li>
  </ul>
</div>
```

## 四、生成兄弟：+
上面是生成下级元素，如果想要生成平级的元素，就需要使用 + 号。例如下面指令：

```
div+p+bq
```

就可以生成如下的 HTML 结构：

```
<div></div>
<p></p>
<blockquote></blockquote>
```

## 五、生成上级元素：^
上级 （Climb-up）元素是什么意思呢？前面咱们说过了生成下级元素的符号“>”，当使用 div>ul>li 的指令之后，再继续写下去，那么后续内容都是在 li 下级的。如果我想编写一个跟 ul 平级的 span 标签，那么我需要先用 “^” 提升一下层次。例如：

```
div>ul>li^span
```

就会生成如下结构：

```
<div>
  <ul>
    <li></li>
  </ul>
  <span></span>
</div>
```

如果我想相对与 div 生成一个平级元素，那么就再上升一个层次，多用一个“^”符号：

```
div>ul>li^^span
```

就会生成如下结构：

```
<div>
  <ul>
    <li></li>
  </ul>
</div>
<span></span>
```

## 六、重复生成多份：
特别是一个无序列表，ul 下面的 li 肯定不只是一份，通常要生成很多个 li 标签。那么我们可以直接在 li 后面 * 上一些数字：

```
ul>li*5
```

这样就直接生成五个项目的无序列表了。如果想要生成多份其他结构，方法类似。

```
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

## 七、生成分组：()
用括号进行分组，这样可以更加明确要生成的结构，特别是层次关系，例如：

```
div>(header>ul>li*2>a)+footer>p
```

这样很明显就可以看出层次关系和并列关系，生成如下结构：

```
<div>
  <header>
    <ul>
      <li><a href="javascript:void(0)"></a></li>
      <li><a href="javascript:void(0)"></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>
```

## 八、此外，分组还可以很方便的结合上面说的 “*” 符号生成重复结构：

```
(div>dl>(dt+dd)*3)+footer>p
```

生成结构：

```
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
```

## 九、生成自定义属性：[attr]
a 标签中往往需要附带 href 属性和 title 属性，如果我们想生成一个 href 为 “http://www.xxx.com/ ，title 为“xxx 博客”的 a 标签，可以这样写：

```
a[href="http://www.xxx.com/" title="xxx 博客"]
```

其他标签和属性都类似。

## 十、对生成内容编号：$
例如无序列表，我想为五个个 li 增加一个 class 属性值 item1 ，然后依次递增从 1-5，那么就需要使用 $ 符号：
  
```
ul>li.item$*5
```

这样就生成了如下结构：

```
<ul>
 <li class="item1"></li>
 <li class="item2"></li>
 <li class="item3"></li>
 <li class="item4"></li>
 <li class="item5"></li>
</ul>
```
$ 就表示一位数字，只出现一个的话，就从1开始。如果出现多个，就从0开始。如果我想生成三位数的序号，那么要写三个 $：


```
ul>li.item$$$*5
```
输出：

```
<ul> 
  <li class="item001"></li>
  <li class="item002"></li> 
  <li class="item003"></li> 
  <li class="item004"></li> 
  <li class="item005"></li>
</ul>
```

只能这样单调的生成序号？对于强大的 Emmet 来说，肯定不会会了，我们也可以在 $ 后面增加 @- 来实现倒序排列：


```
ul>li.item$@-*5
```
输出：

```
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>
```
同样，我们也可以使用 @N 指定开始的序号：

```
ul>li.item$@3*5
```
这样就会从 3 开始排序，生成如下代码：

```
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```
配合上面倒序输出，可以这样写：

```
ul>li.item$@-3*5
```
生成的就是以 3 为底倒序：

```
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```
## 十一、生成文本内容：{}
上面讲解了如何生成 HTML 标签，那里面的内容呢？当然也可以生成了：

a[href="http://www.xxx.com/"]{点击这里到}

这样就生成了一个到我博客的超链接了。在生成内容的时候，特别要注意前后的符号关系，虽然 a>{Click me} 和 a{Click me} 生成的结构是相同的，但是加上其他的内容就不一定了，例如：

```
<!-- a{click}+b{here} -->
<a href="">click</a><b>here</b>

<!-- a>{click}+b{here} -->
<a href="">click<b>here</b></a>
```
这样就生成了完全不同的结构，注意这些小细节哦。

## 不要有空格

在写指令的时候，你可能为了代码的可读性，使用一些空格什么的排版一下。这就会导致代码无法使用。例如下面这句：

```
(header > ul.nav > li*5) + footer
```
而去掉空格之后，就可以正常执行生成结构了。