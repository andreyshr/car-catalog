<script setup lang="ts">
import type { CarDetails } from '~~/types/car-details';

interface Props {
  details: CarDetails;
}

defineProps<Props>();
</script>

<template>
  <div class="h-full flex flex-col rounded-xl bg-white shadow p-4">
    <p>
      <span class="text-sm font-medium">Trim: </span>
      <span class="text-sm">{{ details.modelTrim ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Body: </span>
      <span class="text-sm">{{ details.modelBody ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Engine Position: </span>
      <span class="text-sm">{{ details.modelEnginePosition ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Engine Cylinders: </span>
      <span class="text-sm">{{ details.modelEngineCyl ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Engine Power, Ps: </span>
      <span class="text-sm">{{ details.modelEnginePowerPs ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Engine Torque, Nm: </span>
      <span class="text-sm">{{ details.modelEngineTorqueNm ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Fuel: </span>
      <span class="text-sm">{{ details.modelEngineFuel ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Seats: </span>
      <span class="text-sm">{{ details.modelSeats ?? '-' }}</span>
    </p>
    <p>
      <span class="text-sm font-medium">Doors: </span>
      <span class="text-sm">{{ details.modelDoors ?? '-' }}</span>
    </p>
  </div>
</template>
