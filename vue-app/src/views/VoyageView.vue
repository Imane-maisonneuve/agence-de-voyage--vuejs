<template>
  <div class="min-h-screen border-t border-gray-100">
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
          <div class="lg:w-1/2 p-6 flex flex-col gap-4">
            <h1 class="font-bold text-2xl flex">
              {{ voyage.name }}
            </h1>
            <p class="text-sm text-gray-700 leading-relaxed">
              {{ voyage.description }}
            </p>
            <div class="flex items-center justify-between mt-2">
              <p class="font-semibold text-lg">$ {{ Number(voyage.price) }}</p>

              <p class="text-sm text-blue-900">
                Catégorie : {{ voyage.category }}
              </p>
            </div>
            <router-link
              :to="{ name: 'home' }"
              class="text-blue-700 hover:underline mt-4"
              >Retour à l'accueil</router-link
            >
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
      return voyage;
    },
    voyageIndex() {
      const index = this.voyages.findIndex((p) => {
        return p.id === Number(this.$route.params.id);
      });
      return index;
    },
  },
};
</script>
