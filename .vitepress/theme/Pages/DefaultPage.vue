<script setup lang="ts">
import { Content, useData } from 'vitepress'
const { page } = useData()
</script>

<template>
<article class="post section">

    <header v-if="page.title" class="post-header">
        <h1 class="post-title">{{ page.title }}</h1>
    </header>

    <div class="post-content markdown">
        <Content />
    </div>

</article>
</template>