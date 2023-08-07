<script setup lang="ts">

import { usePosts } from '../Composeables/usePosts'

import BlogListItem from './Partials/BlogListItem.vue';

</script>

<template>
    <ul class="blog-list">
        <BlogListItem v-for="post in usePosts()" v-bind:key="post.url" :post="post" />
    </ul>
</template>