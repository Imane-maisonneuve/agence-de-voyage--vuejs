<template>
  <div class="max-w-6xl mx-auto">
    <MainHeader />
    <router-view
      :voyages="voyages"
      :addInv="addVoyages"
      :updateInv="updateVoyages"
      :removeInv="removeVoyages"
    />

    <MainFooter />
  </div>
</template>

<script>
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";
import VoyageDataService from "./services/VoyageDataService";

export default {
  created() {},
  mounted() {
    VoyageDataService.getAll()
      .then((res) => {
        this.voyages = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      voyages: [],
    };
  },
  methods: {
    addVoyages(voyage) {
      this.voyages.push(voyage);
    },
    updateVoyages(index, data) {
      this.voyages[index] = data;
    },
    removeVoyages(index) {
      this.voyages.splice(index, 1);
    },
  },
};
</script>
