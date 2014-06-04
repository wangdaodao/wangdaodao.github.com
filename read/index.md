---
title: Read
layout: page
comments: no
---

<div id="archives">
<p>以下是我的书单，数据来自豆瓣！时不时的会刷不出来数据，是因为豆瓣每分钟只能请求10次，多了的话就停了……</p>
  <div id="douban">
  </div>
</div>
<script type="text/javascript" src="/media/js/douban.js"></script>
<script type="text/javascript">
 var dbapi = new DoubanApi();
 $(document).ready(function(){
  dbapi.show();
 });
</script>