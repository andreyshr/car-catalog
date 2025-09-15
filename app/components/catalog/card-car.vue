<script setup lang="ts">
import { getCarImage } from '~/utils.ts/get-image';
import type { CarBase } from '~~/types/car';

interface Props {
  car: CarBase;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="`/cars/${car.id}`" class="flex justify-between w-full">
    <div>
      <div class="text-lg font-semibold mb-2">
        {{ car.make }} {{ car.model }}
      </div>
      <div class="text-gray-600 text-sm mb-1">Make: {{ car.make }}</div>
      <div class="text-gray-600 text-sm mb-1">Model: {{ car.model }}</div>
      <div class="text-gray-600 text-sm">Year: {{ car.year }}</div>
    </div>
    <div
      class="md:shrink-0 border border-neutral-100 rounded-md overflow-hidden"
    >
      <img
        :src="getCarImage(car)"
        :alt="`${car.make} ${car.model}`"
        class="w-48 h-32 object-cover"
      />
    </div>
  </NuxtLink>
</template>
