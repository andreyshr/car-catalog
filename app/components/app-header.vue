<script setup lang="ts">
import type { AcceptableValue } from '@nuxt/ui';

const router = useRouter();
const carsStore = useCarsStore();

function onInput(val: AcceptableValue) {
  if (typeof val === 'string') carsStore.search = val;
}

function onEnter() {
  router.push('/');
}
</script>

<template>
  <div class="grid grid-cols-3 items-center p-3 border-b-1 border-neutral-300">
    <NuxtLink to="/" class="font-semibold text-lg">CarCatalog</NuxtLink>
    <UInput
      type="text"
      icon="i-lucide-search"
      size="md"
      variant="outline"
      placeholder="Search..."
      class="w-full col-span-2 md:col-span-1"
      @update:model-value="onInput"
      @keyup.enter="onEnter"
    />
  </div>
</template>
