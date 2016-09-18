---
layout: default
title: Info for staff
---

# {{site.course}}, {{site.year}} Mentor Info

<ul>
 {% for item in site.staff %}
   <li><a href="{{item.url}}">{{item.topic}}&mdash;{{item.desc}}</a></li>
 {% endfor %}
</ul>

