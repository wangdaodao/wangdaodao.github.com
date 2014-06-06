---
title: Photo
layout: page
comments: no
---

<h4>flickr</h4>
<div id="flickr" class="flickr"></div>
<script type="text/javascript" src="/media/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/media/js/douban.js"></script>
<script type="text/javascript">
$(document).ready(function() {
 api_key="21b13b1556f5eabe5239dd7d590c70ac";
 user_id="93942673@N02";
  $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api_key+'&user_id='+user_id+'&format=json&per_page=50&page=1&jsoncallback=?', 
  function(data) {
   if (data.stat != 'ok') return;
   if (data.photos.total <= 0) return;
   var strHtml = '<ul>';
   for (var i = 0; i < data.photos.total; i++) {
    var photo = data.photos.photo[i];
    strHtml += '<li><a href="http://www.flickr.com/photos/93942673@N02/' + photo.id + '/">';
    strHtml += '<img src="http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg" />';
    strHtml += '</a></li>';
   }
   strHtml += '</ul>';
   $('#flickr').html(strHtml);
  });
 })
</script>