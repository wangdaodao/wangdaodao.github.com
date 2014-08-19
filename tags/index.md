---
title: Tags
layout: page
---
<div id='tag_cloud'>{% for tag in site.tags %}<a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a>{% endfor %}</div>
<ul class="listing">{% for tag in site.tags %}
<dl>
  <dt class="listing-seperator" id="{{ tag[0] }}">{{ tag[0] }}</dt>{% for post in tag[1] %}
  <dd class="listing-item"><span class="time">{{ post.date | date:"%Y-%m-%d" }}</span><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></dd>{% endfor %}{% endfor %}
</dl>
</ul>