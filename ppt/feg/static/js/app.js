require.config({
    urlArgs: "v="+(new Date()).getTime(),
    waitSeconds: 10,
    baseUrl: "static/js/libs",
    paths: {
      app: '../app',
      "jquery": "jquery/jquery"
    }
});
require(['jquery'],function($) {
  
})