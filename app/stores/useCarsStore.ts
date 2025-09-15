import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CarBase } from '../../types/car';
import type { Nullable } from '../../types/utils';
import { DEFAULT_ERROR_MESSAGE } from '~/utils.ts/constants';

export const useCarsStore = defineStore('cars', () => {
  const cars = ref<CarBase[]>([]);
  const search = ref('');
  const make = ref('');
  const model = ref('');
  const year = ref('');
  const loading = ref(false);
  const error = ref<Nullable<string>>(null);

  const filteredCars = computed(() => {
    return cars.value.filter((car) => {
      const matchesSearch =
        !search.value ||
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(search.value.toLowerCase());

      const matchesMake = !make.value || car.make === make.value;
      const matchesModel = !model.value || car.model === model.value;
      const matchesYear = !year.value || car.year === Number(year.value);

      return matchesSearch && matchesMake && matchesModel && matchesYear;
    });
  });

  async function fetchCars() {
    if (cars.value.length) return;

    try {
      error.value = null;
      loading.value = true;
      cars.value = await $fetch('/api/cars');
    } catch (err) {
      if (err instanceof Error && 'statusMessage' in err)
        error.value = err.statusMessage as string;
      else error.value = DEFAULT_ERROR_MESSAGE;
    } finally {
      loading.value = false;
    }
  }

  async function getCarById(id: string) {
    if (!cars.value.length) await fetchCars();
    return cars.value.find((car) => car.id === id);
  }

  function clearFilters() {
    make.value = '';
    model.value = '';
    year.value = '';
  }

  return {
    cars,
    filteredCars,
    make,
    model,
    year,
    search,
    loading,
    error,
    clearFilters,
    fetchCars,
    getCarById,
  };
});
