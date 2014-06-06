$(document).ready(function() {
 api="21b13b1556f5eabe5239dd7d590c70ac";
 user="93942673@N02"
  $.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+api+'&user_id='+user+'&format=json&per_page=100&page=1&jsoncallback=?', 
  function(data) {
   if (data.stat != 'ok') return;
   if (data.photos.total <= 0) return;
   var strHtml = '<ul>';
   for (var i = 0; i < data.photos.total; i++) {
    var photo = data.photos.photo[i];
    strHtml += '<li><a href="http://www.flickr.com/photos/'+user+'/' + photo.id + '/" >';
    strHtml += '<img src="http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_s.jpg" alt="'+photo.id+'" />';
    strHtml += '</a></li>';
   }
   strHtml += '</ul>';
   $('#flickr').html(strHtml);
  });
 })