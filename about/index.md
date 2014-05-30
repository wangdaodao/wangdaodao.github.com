---
title: 关于
layout: page
comments: no
---

{{ site.about }}

----

###联系方式：

{% if site.qq %}
ＱＱ：[{{ site.qq }}](http://wpa.qq.com/msgrd?v=3&uin={{ site.qq }}&site=qq&menu=yes)
{% endif %}
网站：[{{ site.name }}]({{ site.url }})

邮箱：[{{ site.email }}](mailto:{{ site.email }})

GitHub : [http://github.com/{{ site.github }}](http://github.com/{{ site.github }})

----