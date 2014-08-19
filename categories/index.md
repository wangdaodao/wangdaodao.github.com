---
title: Categories
layout: page
---
<div id='tag_cloud'>{% for cat in site.categories %}<a href="#{{ cat[0] }}" title="{{ cat[0] }}" rel="{{ cat[1].size }}">{{ cat[0] }} ({{ cat[1].size }})</a>{% endfor %}</div>
<ul class="listing">{% for cat in site.categories %}
<dl>
  <dt class="listing-seperator" id="{{ cat[0] }}">{{ cat[0] }}</dt>{% for post in cat[1] %}
  <dd class="listing-item"><span class="time">{{ post.date | date:"%Y-%m-%d" }}</span><a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></dd>{% endfor %}{% endfor %}
</dl>
</ul>