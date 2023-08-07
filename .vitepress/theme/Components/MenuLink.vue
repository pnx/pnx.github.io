<script setup lang="ts">

import { useData } from 'vitepress'
import { isActive } from 'vitepress/dist/client/shared'

const { page } = useData();

defineProps<{
  link: string
}>();

</script>

<template>
<a class="site-nav-link" :class="{ active: isActive(page.relativePath, link) }" :href="link">
    <slot />
</a>
</template>