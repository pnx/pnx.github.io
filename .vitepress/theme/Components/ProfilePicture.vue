<script setup lang="ts">

defineProps<{
  img: string
}>();

</script>

<template>
<img class="profile-picture" :src="img" />
</template>