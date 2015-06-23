/*
 @Name:main.js
 @Description:
 @Version:
 @Author:
*/
jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
    "extensions": [
      "pageshadow"
    ],
    "offCanvas": {
      "position": "right"
    },
    "navbar": {
      "title": "导航"
    },
    "navbars": [{
      "position": "top",
      "content": [
        "prev",
        "title",
        "close"
      ]}
   ],
    "counters": true
  });
});