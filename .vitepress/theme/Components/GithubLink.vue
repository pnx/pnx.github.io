<script setup lang="ts">
import GithubIcon from './Icons/GithubIcon.vue';
const props = defineProps<{
  username: string
}>();
</script>

<template>
    <a target="_blank" :href="'https://github.com/' + props.username">
        <span class="icon icon--github"><GithubIcon /></span>
        <span class="username">{{ props.username }}</span>
    </a>
</template>