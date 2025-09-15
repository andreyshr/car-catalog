<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<template>
  <p class="text-gray-500 text-center p-8">
    {{ text }}
  </p>
</template>
