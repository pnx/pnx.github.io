<script setup lang="ts">

import { usePosts } from '../Composeables/usePosts'
import { useData } from 'vitepress';
import BlogListItem from './Partials/BlogListItem.vue';

const { page } = useData();
</script>

<template>
    <h2 v-if="page.params?.category">
        Blog posts regarding {{ page.params?.category }}
    </h2>

    <ul class="blog-list">
        <BlogListItem v-for="post in usePosts(page.params?.category)" v-bind:key="post.url" :post="post" />
    </ul>
</template>