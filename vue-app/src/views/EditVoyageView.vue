<template>
  <div
    class="min-h-screen flex items-center justify-center border-t border-gray-100"
  >
    <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <div v-show="message" class="bg-red-500 mb-2 text-white p-2 rounded">
        {{ message }}
      </div>
      <h2 class="text-2xl font-semibold mb-6">Edit Voyage</h2>
      <div v-if="!submitted">
        <form>
          <div class="mb-4">
            <label
              for="voyageName"
              class="block text-sm font-medium text-gray-700"
              >Voyage Name</label
            >
            <input
              v-model="voyage.name"
              type="text"
              id="voyageName"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="voyagePhoto"
              class="block text-sm font-medium text-gray-700"
              >Voyage Photo</label
            >
            <input
              v-model="voyage.photo"
              type="text"
              id="voyagePhoto"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="voyagePrice"
              class="block text-sm font-medium text-gray-700"
              >Price (CAD)</label
            >
            <input
              v-model.number="voyage.price"
              type="text"
              id="voyagePrice"
              class="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="voyageDescription"
              class="block text-sm font-medium text-gray-700"
              >Voyage Description</label
            >
            <textarea
              v-model="voyage.description"
              id="voyageDescription"
              class="mt-1 p-2 border w-full rounded-md"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label
              for="voyageType"
              class="block text-sm font-medium text-gray-700"
              >Voyage Type</label
            >
            <select
              v-model="voyage.type"
              id="voyageType"
              class="mt-1 p-2 border w-full rounded-md"
              required
            >
              <option value="">Select</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
              <option value="Electronics">Electronics</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Footwear">Footwear</option>
              <option value="Beauty">Beauty</option>
              <option value="Travel Accessories">Travel Accessories</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
          <div class="mb-6">
            <button
              type="button"
              @click="updateVoyage"
              class="w-full cursor-pointer bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
            <button
              type="button"
              @click="deleteVoyage"
              class="mt-5 cursor-pointer w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="text-green-600 font-semibold mb-4">Success Message</div>
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
  props: ["updateInv", "inventory", "removeInv", "remItem"],
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
    deleteVoyage() {
      VoyageDataService.delete(this.id)
        .then((response) => {
          this.remItem(this.voyage.name);
          this.removeInv(this.voyageIndex);
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          this.message = e.response.data.message;
        });
    },
  },
  computed: {
    voyageIndex() {
      const index = this.inventory.findIndex((p) => {
        return p.id == this.id;
      });
      return index;
    },
  },
};
</script>
