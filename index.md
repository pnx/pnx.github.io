---
layout: default
title: Blog
order: 1
---

<h1 class="page-heading">Posts</h1>
  
<ul class="blog-list">
{% for post in site.posts %}
  <li class="blog-list-item">
    <h6 class="blog-list-item-title">
      <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    </h6>

    {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
    <span class="blog-list-item-meta">
        {{ post.date | date: date_format }}
        {% if post.author %}
        by 
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">{{ post.author }}</span>
        </span>
        {% endif %}
    </span>

    <ul class="blog-list-item-categories">
    {% for cat in post.categories %}
        <li>{{ cat }}</li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>