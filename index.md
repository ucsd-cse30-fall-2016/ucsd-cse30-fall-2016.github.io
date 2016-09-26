---
layout: default
title: "CSE 30 Fall 2016: Computer Organization and Systems Programming"
---


<img style="float: right;width:80px;height:100px;" src="images/Pi.jpg">

# {{site.course}}, {{site.year}} 


<div id="info" data-role="collapsible" data-collapsed="false">
<h2>Course Information</h2>
<ul>
{% for item in site.info %}
<li><a href="{{item.url}}"  data-ajax="false">{{item.title }}</a></li>
{% endfor %}
</ul>
</div>



<div data-role="collapsible" data-collapsed="false" markdown="0">
<h2 id="labs">Lectures</h2>
  {% include lectures_for_week.html week="0"
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="1"
    collapsible="true" collapsed="false" %}
  {% include lectures_for_week.html week="2"
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="3"
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="4"
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="5" 
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="6" 
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="7" 
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="8" 
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="9" 
    collapsible="true" collapsed="true" %}
  {% include lectures_for_week.html week="10" 
    collapsible="true" collapsed="true" %}
</div>



<div data-role="collapsible" data-collapsed="false" >
<h2 id="labs">Labs</h2>
{% include lab_table.html %}
</div>

<div data-role="collapsible" data-collapsed="false" >
<h2 id="labs">Quiz</h2>
{% include quiz_table.html %}

</div>

<div data-role="collapsible" data-collapsed="false" >
<h2 id="labs">Exams</h2>
{% include exam_table.html %}

</div>

<div data-role="collapsible" data-collapsed="false" >
<h2 id="labs">Topics</h2>
 <ul>
 {% for item in site.topics %}
   <li><a href="{{item.url}}">{{item.topic}}&mdash;{{item.desc}}</a></li>
 {% endfor %}
 </ul>
</div>

Copyright (c) 2016, Diba Mirza and Phill Conrad 




----


