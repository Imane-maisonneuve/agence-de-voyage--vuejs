<template>
  <div
    class="min-h-screen flex items-center justify-center border-t border-gray-100 mb-10 px-10"
  >
    <div class="border mt-2 p-6 rounded-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <div v-show="message" class="bg-red-500 mb-2 text-white p-2 rounded">
        {{ message }}
      </div>
      <h2 class="text-2xl font-semibold mb-4">Mettre à jour le voyage</h2>
      <img class="mb-4 rounded-md" :src="voyage.imageUrl" :alt="voyage.name" />
      <div v-if="!submitted">
        <form>
          <div class="mb-4">
            <label>Nom du voyage</label>
            <input
              v-model="voyage.name"
              type="text"
              id="voyageName"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label>Description du voyage </label>
            <textarea
              v-model="voyage.description"
              id="voyageDescription"
              class="mt-1 p-2 border w-full rounded-md h-40"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label>Prix du forfait (CAD)</label>
            <input
              v-model.number="voyage.price"
              type="number"
              id="voyagePrice"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label>Image du voyage</label>
            <input
              v-model="voyage.imageUrl"
              type="text"
              id="voyagePhoto"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          <div class="mb-4">
            <label>Catégorie</label>
            <select
              v-model="voyage.category"
              id="voyageCategory"
              class="mt-1 p-2 border w-full rounded-md"
              required
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="Plage">Plage</option>
              <option value="Culture">Culture</option>
              <option value="Aventure">Aventure</option>
            </select>
          </div>
          <div class="mb-6">
            <button
              type="button"
              @click="updateVoyage"
              class="w-full bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 mt-4"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="text-green-600 font-semibold mb-4 flex justify-center mt-4">
          Mise a jour effectuée avec succès
        </div>
        <div class="flex justify-center mt-4">
          <router-link
            :to="{ name: 'allVoyages' }"
            class="text-blue-700 hover:underline"
          >
            Retour aux forfaits
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VoyageDataService from "../services/VoyageDataService";
export default {
  mounted() {
    VoyageDataService.get(this.id).then((response) => {
      this.voyage = response.data;
    });
  },
  props: ["updateInv", "voyages"],
  data() {
    return {
      message: null,
      submitted: false,
      voyage: {},
      id: parseInt(this.$route.params.id),
    };
  },
  methods: {
    updateVoyage() {
      VoyageDataService.update(this.id, this.voyage)
        .then((response) => {
          this.updateInv(this.voyageIndex, this.voyage);
          this.message = null;
          this.submitted = true;
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  computed: {
    voyageIndex() {
      const index = this.voyages.findIndex((p) => {
        return p.id == this.id;
      });
      return index;
    },
  },
};
</script>
