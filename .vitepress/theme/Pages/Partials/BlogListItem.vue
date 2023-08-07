<script setup lang="ts">

import { type Post } from '../../types'

import BlogPostMeta from './BlogPostMeta.vue';

defineProps<{
  post: Post
}>();

</script>

<template>

<li class="blog-list-item">
    <h1 class="blog-list-item-title">
        <a :href="post.url">{{ post.title }}</a>
    </h1>

    <BlogPostMeta :post="post" />

    <div class="blog-post-content" v-html="post.excerpt"></div>
</li>
</template>