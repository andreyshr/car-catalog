import { defineStore } from 'pinia';
import { ref } from 'vue';
import { DEFAULT_ERROR_MESSAGE } from '~/utils.ts/constants';
import type { CarBase } from '~~/types/car';
import type { CarDetails } from '~~/types/car-details';
import type { Nullable } from '../../types/utils';

export const useCarDetailsStore = defineStore('car-details', () => {
  const carDetails = ref<Map<string, { car: CarBase; details: CarDetails[] }>>(
    new Map()
  );
  const loading = ref(false);
  const error = ref<Nullable<string>>(null);

  const carsStore = useCarsStore();

  async function fetchCarDetails(id: string) {
    if (carDetails.value.has(id)) return;

    try {
      error.value = null;
      loading.value = true;
      const car = await carsStore.getCarById(id);

      if (!car)
        throw createError({
          statusCode: 404,
          statusMessage: 'Model not found',
        });

      const details = await $fetch('/api/car-details', {
        query: {
          make: car.make,
          model: car.model,
          year: car.year,
        },
      });

      carDetails.value.set(id, {
        car,
        details,
      });
    } catch (err) {
      if (err instanceof Error && 'statusMessage' in err)
        error.value = err.statusMessage as string;
      else error.value = DEFAULT_ERROR_MESSAGE;
    } finally {
      loading.value = false;
    }
  }

  return {
    carDetails,
    error,
    loading,
    fetchCarDetails,
  };
});
