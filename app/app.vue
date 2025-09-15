<script setup lang="ts">
import AppHeader from './components/app-header.vue';
</script>

<template>
  <NuxtLoadingIndicator />
  <AppHeader />
  <NuxtLayout>
    <UApp :toaster="{ position: 'top-right' }">
      <NuxtPage />
    </UApp>
  </NuxtLayout>
</template>
