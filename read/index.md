---
title: Read
layout: page
comments: no
---

<p>以下是我的书单，数据来自豆瓣，欢迎<a href="http://www.douban.com/people/wang_daodao/">关注</a>！</p>
<div id="douban"></div>
<script type="text/javascript" src="/media/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/media/js/douban.js"></script>
<script type="text/javascript">
 var dbapi = new DoubanApi();
 var dbapi = {
        user:"wang_daodao", //这里换成你的豆瓣ID
        api:"05236daf832df7500f6a490e8989e5f0"          //这里换成你的豆瓣APIKEY
    }
 $(document).ready(function(){
  dbapi.show();
 });
</script>