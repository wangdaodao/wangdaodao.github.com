---
date: 2015-04-22
layout: post
comments: yes
code: yes
title: 如何写好CSS？
categories: 笔记
tags: [front_end,css]
---

## 真正的问题是什么？

CSS即层叠样式表，所以一层一层覆盖其实是其本质特征。真正的问题在于维护，许多人认为CSS仅是样式，不是代码，无需维护，所以任意书写，只要将自己需要的样式的优先级设为最高即可，才导致了深层级CSS的出现，因为每次添加一个样式就必须比以前的优先级高才能在页面看到。深层级不仅造成维护性降低，可读性也是一个问题，人不是机器，无法很优雅的按优先级阅读，所以很难确认一个样式用于哪里，其实还存在许多的冗余样式，在任何地方都被覆盖的样式。这样的代码在扩展性上，一开始反而是有优势的，因为添加一个新class，无需担心影响其他地方，但慢慢随着项目规模的增大，页面增多，需要复制样式的地方也越来越多，它们之间又存在微小的差异，设计的更改，需求的变化，这一切都会将这种快餐式的CSS推进柏油坑。因为难以维护，所以无法响应需求，所以无法复用，只能复制，恶性循环。

正如上面所说的，问题在于可读性、维护性、扩展性、复用性这几个方面。所以只要提高它们就能解决问题, 虽然这么说，也不是如此简单的。先来谈谈在CSS中，这些概念都有着怎样的意义。

### 可读性

有人认为CSS不是程序，不需要可读性，有人认为CSS只要写出来就有可读性，因为很简单。抛开各种预处理器不说，原生CSS结构确实简单，没有需要编程的部分，但仍然可能导致混乱。原因有二，一是CSS可以层叠，其中涉及到了优先级和作用范围，如果写的不好，人很难读出其中的意义，二是CSS属性众多，加上CSS3引入了很多用法独特的属性，一个选择器可能包含几十个属性。比如下面这段我随便写的CSS代码：

    span {
        -webkit-box-shadow: 6px 4px 4px red;
        -moz-box-shadow: 6px 4px 4px red;
        box-shadow: 6px 4px 4px red;
    }
    div span {
        border-width: 4px;
        border-style: dotted;
        border-color: blue;
    }
    #box {
        border-left: 2px solid red;
        border-bottom: 2px solid red; 
    }

乍一看也没什么，都是border，大致能看出来这段CSS只是为了添加一个红色的阴影让box看起来比较立体。但中间的部分似乎是捣乱的，你可能会说这太傻了，看不到吗。是的，当这3部分散落在上万行的CSS中时，肯定看不到。于是有人很自然的想起了我们可爱的浏览器，没错，在浏览器中可以快速找到作用于目标的CSS样式，但这也是万恶之源。首先我假设你不知道中间那部分东西是为了什么而写的，因为你是靠浏览器找到它的。然后剩下两种可能，不管三七二十一改了再说和看看它为什么存在。前者悲剧的可能性是100%，后者悲剧的可能性是90%，因为你已经掉坑里了，很快我们会发现要修改它还牵扯到了另外的地方，接着在浏览器中探索到另一个莫名其妙的样式，当你弄懂全部的时候，你应该已经把上万行的代码弄了个一清二楚了，也许最幸运的是，浪费了几个小时的时间发现只需要修改一行就能达到目的。

当然，我们可以天真的认为，只要把他们写在一起就可以了，这样找起来很简单。而我将继续顺着这样的思路来尝试曝露问题。

### 维护性

所谓物以类聚是很有道理的，人们习惯将事物归类，但问题是分类标准，样式并不关心业务，无论是什么文字内容，还是功能有何不同，它在乎的只是样式，比如文字的尺寸，间距和宽高，颜色等等。如果简单的将一个组件的样式放在一起，势必带来的就是小段代码的重复书写。不觉得有多严重？我来举个栗子。

    aside {
        box-shadow: 6px 4px 4px #AA3343;
    }
    nav {
        box-shadow: 6px 4px 4px #AB3633;    
    }
    .item {
        box-shadow: 6px 4px 4px #AA3732;
    }
    .item.otherStatus {
        box-shadow: 6px 4px 4px #AA3132;
    }

继续说上面的例子，box需要阴影，但如果这个项目的UI统一风格，包括sidebar，navigator以及item都需要这样的阴影呢？再如果，明天客户或者UX一拍脑袋，这个阴影应该是灰色的不该是红色的呢？不要继续天真的认为全局替换是救命稻草。首先，没有几个网站会用red，blur做色调的，你用的应该是#AA3333，这样的代码，然后你发现sidebar用了#A43433，而navigator是#AB3633，等等，item有两个状态，而两个状态对应的颜色是不一样的。这怎么可能？但当你打开浏览器的时候你会发现本来就相差无几的颜色，在阴影中变得一模一样了，谁看的出来呢，当初使用的时候可能也不过是随意的在mockup中取的一个颜色。

大量的重复带来的不仅仅是代码的冗余，我们必须靠人力去同步它们，而人很难保证它们的修改是完全一致的，尤其是当它们中引入了一些不一致的独特的东西时。不要小看CSS，其后果就是进度和人力的压力，后面就是PM有没有读过《人月神话》的事了。

肯定有人在想，谁让你当初要写成这样呢。我们在读代码的时候最喜欢问，当初为什么要这么写？但慢慢的你会读出它的历史，有时候它是身不由己的。这就涉及到了下一个要讨论的内容。

### 扩展性

扩展性是一个具有欺骗性的东西，所谓的扩展性其实就是在现有基础上再次开发新东西的性能，但我认为它还必须有前提条件，那就是保持可读性与维护性。

简单的追求可维护性是自取灭亡，原因很简单，将新旧代码完全分离的时候扩展性最高，因为不必担心对以前的部分有影响，新的样式可以随意发挥。是不是很神奇，这样想的我们写下的代码，肯定就是前面我们追问的代码。所以自己回答自己吧，当初没考虑可读性和维护性，只想着快点增加新的样式，就这么写了。

那什么才是一个好的扩展性呢，简单来说，就是多功能产品。比如一个box，也许它的样式就是。

### 复用性

似乎我一直在说的就是重复，那我们就来说说复用性，如何才能复用CSS代码是一个很大的问题，比如粒度，是一两个属性进行复用还是一大组选择器进行复用呢，再比如对象，是为了class复用属性，还是为了html复用class呢。这些选择不算太重要，但是带来的影响却很重大，可以说是整个CSS结构的改变。下面继续用box的阴影来讨论复用。

    .shadow {
        -webkit-box-shadow: 6px 4px 4px #A93334;
        -moz-box-shadow: 6px 4px 4px #A93334;
        box-shadow: 6px 4px 4px #A93334;
        border-left: 2px solid #A93334\9;
        border-bottom: 2px solid #A93334\9; 
    }

这样看起来我有了一个shadow的class可以给任意的目标加上这个阴影了，但这导致了一个复用的问题，和上面那段捣乱的CSS样式一样，如果item已有另外2个border了，那这个class是无法去除的。所以复用时不仅要考虑需要什么，还要考虑不需要什么。另外一些必须的属性比如display还有overflow等也是要考虑的，因为user agent的原因，很多属性是隐藏在element中的。

-----

## 如何解决问题？

主流的CSS原则有OOCSS，DRY，SMACSS以及BEM，他们皆是为解决CSS的各种问题而生。

### OOCSS

OOCSS即面向对象的CSS，这里对象指的是页面中的元素对象，与传统编程中的面向对象不太相同，比如不存在方法这种东西，硬要说的话，附加的一些class可以看作是继承或者接口之类的东西来实现对象的差异化。比如电商网站中的商品就是一个典型的对象，它们既有许多相同的部分，又有许多差异，宽高、按钮、图片、标题等基本布局都是相同的，而边距、线框、背景颜色、字号等都是差异化的。由此按照OOCSS的指导原则，我们应该写一个product class，然后为其添加一些border、theme之类的class来差异化它：

    .product {
        display: block;
        overflow: hidden;
        float: left;
        width: 200px;
        height: auto;
    }
    .product-head{...}
    .product-body{...}
    .product-foot{...}
    .product-theme-black {
        background: black;
        color: white;
    }
    .product-border {
        border: 1px solid #333;
    }

这样在以上两种附加class的作用下，我们在html中就可以获得4种不同的product样式，随着附加class增加，product的样式也会呈指数增加，千变万化。这仅仅是一个简单的例子，意在点出OOCSS的理念，但并没有突出它的意义所在。别着急，先来看看OOCSS的两大原则。

#### 1. 分离容器与内容，减少对 HTML 结构的依赖

所谓的容器即包裹对象的元素，比如一个div，我们经常会命名为wrap、container、body等。那么如何才算是分离容器与内容呢？很简单，一句话，内容在哪都可用。也就是说不应该出现这样的情况：

    .container .product {
        ...
    }

这样干的结果就是复用性大大降低，因为只能在这个容器内使用它了。但这并不代表我们应该将所需的样式全部一股脑的扔进单独的class中，对于差异化应该单独放在一个class中，这才是OOCSS的精髓。

举个例子，当我们既不想牺牲太多性能，又想来个瀑布流显摆显摆的时候，大部分前端都会使用column，类似泳道的设计。你想说哦不，这是伪pinterest，但是谁在乎呢，用户是不会有闲工夫拖拽浏览器的宽度来鉴别它的，在IE下商品多的时候至少不会太卡。哈，别较真，首先分为几个column，然后按照高度往里填放商品，先来看看下面的代码吧，我有省略一些样式避免误导：

    .column {
        height: auto;
        width: 200px;
    }
    .product {
        width: 180px;
        margin-right: 20px;
        margin-bottom: 10px;
    }

看起来不错，每列200px宽，商品放入其中，水平间距要大，垂直间距要小些才像column。但是等等，我们总还是需要整齐摆放的商品列表的对不对。也许margin并不是product的必要属性，至少它应该是可变的。我们抽出它来：

    .product {
        width: 180px;
    }
    .vertical-product {
        height: 400px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .horizontal-product {
        height: auto;
        margin-right: 20px;
        margin-bottom: 10px;
    }

这样便将column或list之类的容器与product分开来毫无关系了，即使以后出现了其他组织形式，只要product的基本结构没有变都可以直接复用，无非是添加一些附属样式到新的xxx-product的class中。另外这样做还有一个好处，设计逻辑放在了HTML中，CSS更加强大。

什么是样式逻辑？商品在瀑布流中不定高，在列表中定高，这就是一种样式的逻辑，如果用父子选择器的形式写在CSS中，那它就失去了自由。而放在HTML通过选择添加何种附属class来展现不同形式的product，则非常的自由与灵活。另外值得一说的是，margin-bottom是一样的，但我们应该各自放在各自的class里面，原因很简单，它们仅仅是一不小心恰好一样，在设计逻辑中它们并不是一样的bottom，这里并不是重复，而是看起来一样。如果以后需要改变其中的一个bottom，共用则显得非常别扭。

#### 2. 分离皮肤与结构，增加 CSS class 的重复使用

第二点很容易理解，皮肤（theme）就是视觉效果，即使被剔除网页也没有什么影响的就是皮肤；而结构指地并不是像HTML这样抽象的结构，因为CSS毕竟还是样式，所以结构只是相对的页面结构。

先来看看我们的product吧，添加一些背景色和边框：

    .product {
        width: 200px;
        background: #F6F2F2;
        border: 1px solid #C4A0A0;
    }

看起来还不错，不过设计师都是自大狂，精心的调色，完美的搭配，绝对不会让你仅仅使用这么一次的，页面的其他模块、sidebar甚至是header都可能采用相同的背景颜色与边框，它们甚至可能互相嵌套。好吧，这其实在设计上是为了视觉统一，毕竟没有几个设计大师能hold住3，4种以上的颜色。所以我们能做的并不是在每个class中添加这样的样式，而是把它提出来成为独立的class，原因就像我开篇说的那样，颜色为混沌之源。

    .main-bg {
        background: #F6F2F2;
    }
    .main-border {
        border: 1px solid #C4A0A0;
    }

这样就可以在页面中随时使用主要的设计元素了，而且需要修改时也非常的简单，不用担心有什么地方漏掉。另外我将背景与边框分为了两个class，原因还是设计逻辑应该放在HTML，背景与边框并不是一定同时出现的，两者的关系应该由HTML决定，即使设计上逻辑决定了两者的绑定，在实现时也有可能因为HTML结构而放在两个不同的元素上。

OOCSS强调class，将每组样式写成一个class方便HTML中使用，众多class组合起来能千变万化组成一个对象。所以如果是想一劳永逸的写一套UI作为开发时使用的样式，我建议使用OOCSS来进行开发。但它也有缺点，过多的将设计逻辑放在HTML中，极大的自由化了页面开发时的选择，如果写HTML的开发者不能很好的理解整套CSS的结构，较易在HTML中造成class混乱。

### DRY CSS

DRY就是Donot repeat youself 不要重复。但其实这个名字有点无趣，哪个理论不是消除重复呢，但如何消除才是意义所在。总的来说我认为DRYCSS与OOCSS是两个极端，所以我将会以对比的方式来讲讲DRYCSS的内容。使用DRYCSS很简单，三步。

#### 1. 分组可复用属性

DRYCSS跟OOCSS有点像，第一步都是分组样式，消除重复，但就像我说的，关键在于如何。OOCSS将样式集合看作对象，所以分组的逻辑是，某个元素本身应该是什么样的，而DRYCSS则关注重复，无论什么逻辑，只要是一样的就应该只有一个。其中粒度是值得思考的问题，如果太细，那只会成为一行样式一组这样无意义的情况，如果太粗，又会变成毫无复用性的庞然大物。我认为可以将一些有关联的缺了A时B就没作用的样式分为一组，还可以将某些惯用搭配分为一组。下面举个例子：

    {
        float: left;
        position: absolute;
        display: inline-block;
        overflow: hidden;
    }

这是一组样式，可用来触发[Block formatting Contexts（块级格式化上下文）](http://kayosite.com/block-formatting-contexts-in-detail.html)，如此就完成了一组样式。接着再写2组关于尺寸的样式吧。

    {
        width: 960px;
        height: auto;
    }
    {
        width: 720px;
        height: 600px;
    }
    {
        width: 220px;
        height: 600px;
    }

这是三组样式用来布局，将页面分为左右两部分。

#### 2. 按逻辑为分组命名

接着我们来为其命名，其实就是添加一个ID选择器，但是我们并不真的使用它，而是用来标示该组样式。下面就来命名上面所分组的样式。

    #BLOCK_FORMATTING_CONTEXTS
    {
        float: left;
        position: absolute;
        display: inline-block;
        overflow: hidden;
    }
    #LAYOUT_FULL
    {
        width: 960px;
        height: auto;
    }
    #LAYOUT_CONTENT
    {
        width: 720px;
        height: 600px;
    }
    #LAYOUT_SIDEBAR
    {
        width: 220px;
        height: 600px;
    }

这一步类似OOCSS的class，它决定了每组样式所代表的逻辑或用途，然而DRYCSS多了最关键的下一步，也是与OOCSS本质区别。

#### 3. 为各个分组添加选择器

DRYCSS在使用时和OOCSS有着巨大的差异，在CSS文件中写入HTML中的class选择器来使用这些分组后的样式，而不是直接在HTML中使用CSS文件中写好的class。

    .header,
    .container,
    .content-right,
    .content-left,
    #BLOCK_FORMATTING_CONTEXTS
    {
        float: left;
        position: absolute;
        display: inline-block;
        overflow: hidden;
    }
    .header,
    .navigator,
    .container,
    #LAYOUT_FULL
    {
        width: 960px;
        height: auto;
    }
    .content-right,
    .section,
    #LAYOUT_CONTENT
    {
        width: 720px;
        height: 600px;
    }
    .content-right,
    .sidebar,
    .profile,
    #LAYOUT_SIDEBAR
    {
        width: 220px;
        height: 600px;
    }

可以看到，使用DRYCSS时，在HTML中所写的class将会非常表意，元素本身是什么用来做什么，就使用其意义的class命名，而且基本上是一个元素对应一个class，HTML将变的简单明了。另外DRYCSS也是相对于OOCSS的一种逆向思维，这才是最有趣的地方。在开发中，不应该像OOCSS那样思考如何应对未来假象的HTML，而是仅仅思考CSS本身。

总的来说，OOCSS适合开发CSS框架或整套UI模版，是自外向内的UI开发方式；而DRYCSS则适合拯救混沌的HTML，或者加强HTML的结构性和表意性，是自内向外的UI开发方式。这里的内指地是HTML结构，外指地是CSS样式。

### SMACSS

这是一个相对繁杂的CSS理论，分为Base、Layout、Module、Status和Theme共五个部分。不过它的核心思想仍然和OOCSS类似，鼓励使用class。

#### 1. Base 基本属性

基础属性很容易理解，就是最基本的东西，很多样式简单的网站都采用一个简单的二级CSS文件模式，一个base.css通用于所有页面，而每个页面有一个特定的CSS文件，我想这就是Base的雏形。要说具体是什么，比如reset文件，再比如放置clearfix或BFC的一些类似工具集的文件。

其实最终会发现，在Base中的CSS属性将会是几乎全站都要用到的属性，但我不想这么描述Base，因为这会误导人。大多数情况下，在一个网站建立之初也只会有几个简单的页面，于是这几个页面都要用到的属性就变成了通用属性，但并不是这么简单的。随着网站规模的扩大，需求的增加，设计师们灵感的迸发，所谓的通用和统一也在发生着潜移默化。所以在编写Base时，应该遵循的基准是，哪些样式是你做下一个网站时也会想用的，哪些样式即使设计改变了也只需要改变一些数值和颜色，哪些样式是一些基本原则；而不应该将目前大部分页面都在使用的样式放在Base中，还是那个道理，它们也许仅仅是恰好相同，而非逻辑一致。

#### 2. Layout 布局

布局是一个网站的基本，无论是左右还是居中，甚至其他什么布局，要实现页面的基本浏览功能，布局必不可少。SMACSS将这一功能单独提出也是非常正确的，另外还约定了一个前缀l-/layout-来标识布局的class。举个最普遍的例子。

    .l-header {}
        .l-brand {}
        .l-navigator {}
    .l-container {}
        .l-sidebar {}
        .l-content {}
    .l-footer {}

这就是一个简单的左右布局，导航和Logo中规中矩在最顶部。

#### 3. Module 模块

模块是SMACSS最基本的思想，同时也是大部分CSS理论的基本，将样式模块化就能达到复用和可维护的目的，但是SMACSS提出了更具体的模块化方案。首先表象上来看，SMACSS中的模块应该拥有一个名字，并且为其class名，而模块其他class皆以为前缀。比如：

    .product {}
        .product-title {}
        .product-image {}
        .product-border {}
        .product-shadow {}

可以看到例子中product是一个模块，title和image是包含在模块内的组件，可用可不用；border和shadow是类似OOCSS的附加class用来改变模块本身。总之，在模块内可以使用其名称做前缀任意组织模块结构，但目前是让其变得更易用，提高可扩展性和灵活度，如果仅仅为了某些功能而特意写一些class就有点有形无实的感觉了。

#### 4. State 状态

状态经常和JavaScript放在一起使用，它是一种用来标识页面状态的class，无论是为用户标识还是用程序标识。还是一个常见的例子，马上就明白。active经常用来表示当前的tab，或者当前选中的目标，这就是一种状态，无论是样式还是程序都需要知道它。

SMACSS仍然有一个对应的前缀用于标示状态class，is-是一个合适的词，指明某一元素是什么状态。

#### 5. Theme 主题

主题就是皮肤，和OOCSS的分离皮肤与结构不谋而合。更重要的是对于可更换皮肤的站点来说，这样的分离是非常必要的，只需要更换加载的theme文件即可将皮肤更换。

总的来说，SMACSS是一个较为注意细节与实现的CSS理论，非常适合初涉CSS的人，它可以让你的CSS跑在轨道上而不至于脱轨。其思想也与OOCSS有很多相通之处，如果没有适合的方案，我建议新手可以适当的融入OOCSS的思想而使用SMACSS的结构，这样写出来的网站样式至少不会马上陷入泥沼。

-----

## 哪一个好用呢？

谈了许多的CSS原理，已经有点眼花缭乱，到底哪个好呢？这个问题又归结到了最佳实践上，虽然我并不认为有这样的实践，但我认为一个项目一定会有适合的实践，比如前面说的，如果你想做一个CSS框架然后再写HTML，那就用OOCSS；如果你想先写HTML或者已经有一个旧的页面，那DRYCSS应该很适合你；如果新手不知如何下手，那SMACSS可以指导你入门。

[原文地址：http://www.tychio.net/tech/2014/03/16/css-principle.html](http://www.tychio.net/tech/2014/03/16/css-principle.html)