{% if site.duoshuo %}
    <!-- <div class="ds-thread" data-thread-key="{{ page.id }}" data-url="{{ page.url }}" data-title="{{ page.title }}"></div> -->
    <div class="ds-thread"></div>
    <script type="text/javascript">
    var duoshuoQuery = {short_name:"{{ site.duoshuo }}"};
    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = 'http://static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
        || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
    </script>
{% endif %}