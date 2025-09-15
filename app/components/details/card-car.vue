<script setup lang="ts">
import { getCarImage } from '~/utils.ts/get-image';
import type { CarBase } from '~~/types/car';

interface Props {
  car: CarBase;
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex flex-col">
      <h1 class="text-xl font-bold mb-2">
        {{ car.make }} {{ car.model }} {{ car.year }}
      </h1>
      <p class="mb-1">
        <span class="font-semibold">Make: </span>
        <span>{{ car.make }}</span>
      </p>
      <p class="mb-1">
        <span class="font-semibold">Model: </span>
        <span>{{ car.model }}</span>
      </p>
      <p>
        <span class="font-semibold">Year: </span>
        <span>{{ car.year }}</span>
      </p>
    </div>
    <div
      class="md:shrink-0 border border-neutral-100 rounded-xl overflow-hidden"
    >
      <img
        :src="getCarImage(car)"
        :alt="`${car.make} ${car.model}`"
        class="h-64 w-full object-cover"
      />
    </div>
  </div>
</template>
