<script setup lang="ts">

import { type Post } from '../../types'
import { formatDate } from '../../Support/blog'

defineProps<{
  post: Post
}>();
</script>

<template>
<div class="blog-post-meta">
    <div class="blog-post-meta-item">
        <span class="icon"><font-awesome-icon icon="fa-regular fa-clock" /></span>
        <time v-if="post.date" datetime="" itemprop="datePublished">
            {{ formatDate(post.date) }}
        </time>

        • <span itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">{{ post.author }}</span></span>
    </div>

    <div v-if="post.tags && post.tags.length > 0" class="blog-post-meta-item">
        <span class="icon"><font-awesome-icon icon="fa-solid fa-tags" rotation="90" /></span>
        <ul class="tag-list">
            <li v-for="tag in post.tags" v-bind:key="tag"><a :href="'/posts/category/' + tag">{{ tag }}</a></li>
        </ul>
    </div>
</div>
</template>