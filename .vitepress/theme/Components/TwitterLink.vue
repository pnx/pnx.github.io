<script setup lang="ts">
import TwitterIcon from './Icons/TwitterIcon.vue';
const props = defineProps<{
  username: string
}>();
</script>

<template>
    <a target="_blank" :href="'https://twitter.com/' + props.username">
        <span class="icon icon--github"><TwitterIcon /></span>
        <span class="username">{{ props.username }}</span>
    </a>
</template>