---
title: DouBan
layout: page
comments: no
---

<div id="archives">
  <div id="douban">
  </div>
</div>
<script type="text/javascript" src="{{site.url}}/media/js/douban.api.js"></script>
<script type="text/javascript">
 var dbapi = new DoubanApi();
 $(document).ready(function(){
  dbapi.show();
 });
</script>