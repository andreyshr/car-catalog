<script setup lang="ts">
const route = useRoute();
const toast = useToast();
const carDetailsStore = useCarDetailsStore();
const id = String(route.params.id);

await callOnce(() => carDetailsStore.fetchCarDetails(id), {
  mode: 'navigation',
});

const car = computed(() => carDetailsStore.carDetails.get(id)?.car);
const details = computed(() => carDetailsStore.carDetails.get(id)?.details);

watch(
  () => carDetailsStore.error,
  (val) => {
    if (val) {
      toast.add({ title: val, progress: false, color: 'error' });
      carDetailsStore.error = null;
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="h-full grid grid-cols-1">
    <DetailsCardCar v-if="car" :car="car" class="mb-4" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <template v-if="details && details.length">
        <DetailsCardDetails
          v-for="(detail, i) in details"
          :key="i"
          :details="detail"
        />
      </template>
      <NoData
        v-else-if="details && !details.length"
        text="No additional details about this car."
        class="col-span-2"
      />
    </div>
  </div>
</template>
