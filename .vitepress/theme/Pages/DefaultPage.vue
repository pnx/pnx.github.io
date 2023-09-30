<script setup lang="ts">
import { Content, useData } from 'vitepress'
const { page } = useData()
</script>

<template>
<article class="section">

    <header v-if="page.title" class="page-heading">
        <h1>{{ page.title }}</h1>
    </header>

    <div class="markdown">
        <Content />
    </div>

</article>
</template>