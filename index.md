---
layout: default
title: Blog
order: 1
---

<ul class="blog-list">
{% for post in site.posts %}
    <li class="blog-list-item">
        <h6 class="blog-list-item-title">
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h6>
      
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <div class="blog-post-meta">
            <i class="ion-ios-clock-outline"></i>
            <div class="blog-post-meta-item">
                {{ post.date | date: date_format }}
                {% if post.author %}
                by 
                <span itemprop="author" itemscope itemtype="http://schema.org/Person">
                    <span itemprop="name">{{ post.author }}</span>
                </span>
                {% endif %}
            </div>

            <div class="blog-post-meta-item">
                <i class="ion-pricetags"></i>
                <ul class="tag-list">
                {% for cat in post.categories %}
                    <li>{{ cat }}</li>
                {% endfor %}
                </ul>
            </div>
        </div>
        
        <div class="blog-post-content">
            {{ post.excerpt }}
        </div>
    </li>
{% endfor %}
</ul>