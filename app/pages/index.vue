<script setup lang="ts">
const toast = useToast();
const carsStore = useCarsStore();
await callOnce(() => carsStore.fetchCars());

const makes = computed(() =>
  Array.from(new Set(carsStore.filteredCars.map((car) => car.make).sort()))
);
const models = computed(() =>
  Array.from(new Set(carsStore.filteredCars.map((car) => car.model).sort()))
);
const years = computed(() =>
  Array.from(
    new Set(carsStore.filteredCars.map((car) => car.year.toString()).sort())
  )
);

watch(
  () => carsStore.error,
  (val) => {
    if (val) {
      toast.add({ title: val, progress: false, color: 'error' });
      carsStore.error = null;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-6">
    <CatalogFilter
      class="md:col-span-1"
      :makes="makes"
      :models="models"
      :years="years"
    />
    <CatalogList
      v-if="carsStore.filteredCars.length"
      class="md:col-span-3"
      :cars="carsStore.filteredCars"
    />
    <NoData v-else text="No cars found." class="col-span-3" />
  </div>
</template>
