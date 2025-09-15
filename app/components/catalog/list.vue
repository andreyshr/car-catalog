<script setup lang="ts">
import type { CarBase } from '~~/types/car';

interface Props {
  cars: CarBase[];
}

defineProps<Props>();
</script>

<template>
  <ul class="flex flex-col">
    <li
      v-for="car in cars"
      :key="car.id"
      class="flex rounded-xl bg-white shadow p-4 mb-4 hover:shadow-lg transition"
    >
      <CatalogCardCar :car="car" />
    </li>
  </ul>
</template>
