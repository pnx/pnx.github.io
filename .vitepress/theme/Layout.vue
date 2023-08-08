<script setup lang="ts">
import { useData } from 'vitepress'

import Header from './Header.vue';
import Footer from './Footer.vue';

import NotFound from './Pages/NotFound.vue';
import BlogIndex from './Pages/BlogIndex.vue';
import BlogPost from './Pages/BlogPost.vue';
import DefaultPage from './Pages/DefaultPage.vue';

// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData()
</script>

<template>
    <Header />

    <main class="page-content" aria-label="Content">
        <div class="container">
            <NotFound v-if="page.isNotFound" />
            <BlogIndex v-else-if="frontmatter.layout == 'blog-index'" />
            <BlogPost v-else-if="frontmatter.layout == 'blog-post'" />
            <DefaultPage v-else />
        </div>
    </main>

    <Footer />
</template>
