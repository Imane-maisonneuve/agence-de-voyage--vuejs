<template>
  <div class="border-t border-gray-100">
    <section v-if="voyage" class="py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="flex flex-col lg:flex-row items-center lg:items-start">
          <div class="lg:w-1/2 mb-5 lg:mb-0 p-6">
            <img
              class="w-full mb-5 lg:mb-0"
              :src="voyage.imageUrl"
              :alt="voyage.name"
            />
          </div>
          <div class="lg:w-1/2 p-6">
            <h1 class="font-bold text-lg flex justify-between items-center">
              {{ voyage.name }}
            </h1>
            <p class="text-sm text-gray-700">
              {{ voyage.description }}
            </p>
            <p class="font-semibold mt-2">$ {{ Number(voyage.price) }}</p>
            <p class="text-xs text-blue-900 mt-1">{{ voyage.category }}</p>
            <hr class="my-4" />
            <div class="flex">
              <router-link
                :to="{ name: 'edit-voyage', params: { id: voyage.id } }"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >Edit voyage</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["voyages"],
  computed: {
    voyage() {
      const voyage = this.voyages.find((p) => {
        return p.id === Number(this.$route.params.id);
      });
      //console.log(voyage);
      return voyage;
    },
    voyageIndex() {
      const index = this.voyages.findIndex((p) => {
        return p.id === Number(this.$route.params.id);
      });
      //console.log(voyage);
      return index;
    },
  },
};
</script>
