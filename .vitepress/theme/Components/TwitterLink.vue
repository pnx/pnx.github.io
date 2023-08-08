<script setup lang="ts">
const props = defineProps<{
  username: string
}>();
</script>

<template>
    <a target="_blank" :href="'https://twitter.com/' + props.username">
        <span class="icon"><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></span>
        <span class="username">{{ props.username }}</span>
    </a>
</template>