<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(voyage, i) in voyages"
        :key="i"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img
          class="p-8 rounded-t-lg"
          :src="voyage.imageUrl"
          :alt="voyage.name"
        />
        <div class="px-5 pb-5 text-center">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2"
          >
            {{ voyage.name }}
          </h5>
          <div class="mb-2">
            <router-link
              :to="{ name: 'voyage', params: { id: voyage.id } }"
              class="hover:text-blue-600 cursor-pointer hover:underline"
            >
              Découvrir..</router-link
            >
          </div>
          <span class="text-xl text-gray-900 dark:text-white"
            >${{ Number(voyage.price) }}</span
          >
          <p class="text-xs text-blue-900 mt-1">
            Catégorie : {{ voyage.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["voyages"],
};
</script>
