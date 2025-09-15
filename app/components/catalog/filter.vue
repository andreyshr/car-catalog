<script setup lang="ts">
interface Props {
  makes: string[];
  models: string[];
  years: string[];
}

defineProps<Props>();

const carsStore = useCarsStore();

const hasActiveFilter = computed(
  () => carsStore.make || carsStore.model || carsStore.year
);
</script>

<template>
  <div class="flex flex-col">
    <USelect
      v-model="carsStore.make"
      placeholder="Select make"
      :items="makes"
      class="w-full mb-4 h-10"
    />
    <USelect
      v-model="carsStore.model"
      placeholder="Select model"
      :items="models"
      class="w-full mb-4 h-10"
    />
    <USelect
      v-model="carsStore.year"
      placeholder="Select year"
      :items="years"
      class="w-full h-10 mb-4"
    />
    <UButton
      class="mx-auto"
      :disabled="!hasActiveFilter"
      @click="carsStore.clearFilters"
      >Reset</UButton
    >
  </div>
</template>
