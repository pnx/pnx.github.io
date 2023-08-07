<script setup lang="ts">
import { Content, useData } from 'vitepress'
const { page } = useData()
import BlogPostMeta from './Partials/BlogPostMeta.vue';
import { usePost } from '../Composeables/usePost';

</script>

<template>
<article class="blog-post" itemscope itemtype="http://schema.org/BlogPosting">

    <header class="blog-post-header">
        <h1 class="blog-post-title" itemprop="name headline">{{ page.title }}</h1>
        <BlogPostMeta :post="usePost()" />
    </header>

    <div class="blog-post-content markdown" itemprop="articleBody">
        <Content />
    </div>

</article>
</template>