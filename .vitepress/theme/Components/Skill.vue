<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  name: string
  label?: string
}>();
</script>

<template>
<div class="skill-list-item">
    <FontAwesomeIcon :icon="['fab', name]" size="6x" :class="name"/>
    <span>{{ label ?? name }}</span>
</div>
</template>

<style scoped>

.php {
    color: #8993be;
}

.laravel {
    color: #F05340;
}

.redis {
    color: #D82C20;
}

.mysql {
    color: #00549D;
}

.css3 {
    color: #264de4;
}

.sass {
    color: #CD6799;
}

.less {
    color: #1d365d;
}

.vuejs {
    color: #34495E;
}

.html5 {
    color: #e34c26;
}

.golang {
    color: #00ADD8;
}

.cpp {
    color: #00549D;
}

.git {
    color: #F1502F;
}

</style>