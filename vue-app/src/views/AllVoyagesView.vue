<template>
  <div>
    <div class="flex justify-end">
      <router-link
        :to="{ name: 'add-voyage' }"
        class="text-blue-700 hover:underline"
        >Ajouter un voyage</router-link
      >
    </div>

    <div class="grid grid-cols-3 gap-4 my-4">
      <div
        v-for="(voyage, i) in voyages"
        :key="i"
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex items-center">
          <button
            type="button"
            @click="deleteVoyage(voyage.id, i)"
            class="text-red-600 cursor-pointer ml-auto p-2"
          >
            <MinusCircleIcon class="w-5 h-5" />
          </button>
        </div>

        <img
          class="p-5 rounded-t-lg"
          :src="voyage.imageUrl"
          :alt="voyage.name"
        />
        <div class="px-5 pb-5">
          <div class="flex">
            <h5
              class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2"
            >
              {{ voyage.name }}
            </h5>
            <button
              type="button"
              class="text-red-600 cursor-pointer ml-auto p-2"
            >
              <router-link
                :to="{ name: 'edit-voyage', params: { id: voyage.id } }"
                ><PencilIcon class="w-5 h-5"
              /></router-link>
            </button>
          </div>
          <div class="mb-2">
            <p class="text-sm text-gray-700">
              {{ voyage.description.slice(0, 120) }}...
            </p>
          </div>

          <span class="text-xl text-gray-900 dark:text-white"
            >${{ Number(voyage.price) }}</span
          >

          <p class="text-xs text-blue-900 mt-1">
            Catégorie : {{ voyage.category }}
          </p>
        </div>
        <div class="flex items-center">
          <!-- <button
            type="button"
            @click="updateVoyage(voyage.id, voyage, i)"
            class="text-red-600 cursor-pointer ml-auto p-2"
          >
            <PencilIcon class="w-5 h-5" />
            <router-link
              :to="{ name: 'edit-voyage', params: { id: voyage.id } }"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            ></router-link>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MinusCircleIcon } from "@heroicons/vue/24/solid";
import { PencilIcon } from "@heroicons/vue/24/solid";
</script>

<script>
import VoyageDataService from "../services/VoyageDataService";
export default {
  components: {},
  props: ["voyages", "updateInv", "removeInv"],
  data() {
    return {
      message: null,
      submitted: false,
      voyage: {},
    };
  },
  methods: {
    // updateVoyage(id, voyage, i) {
    //   VoyageDataService.update(id, voyage)
    //     .then((response) => {
    //       this.updateInv(i, voyage);
    //       this.message = null;
    //       this.submitted = true;
    //     })
    //     .catch((e) => {
    //       this.message = e.response.data.message;
    //     });
    // },
    deleteVoyage(id) {
      VoyageDataService.delete(id)
        .then((response) => {
          this.removeInv(this.voyageIndex);
          this.$router.push({ name: "allVoyages" });
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
