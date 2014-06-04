---
title: Read
layout: page
comments: no
---

<div id="archives">
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