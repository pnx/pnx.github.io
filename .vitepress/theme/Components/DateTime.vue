<script setup lang="ts">
import GithubIcon from './Icons/GithubIcon.vue';
const props = defineProps<{
  date: moment
}>();
</script>

<template>
    {{ date }}
</template>