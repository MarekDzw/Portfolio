<template>
  <div class="pad-btm-reset flex">
    <!-- <div class="dark-grad-bg">
      <NextPage v-bind:sections="store.sections[0]" />
    </div>
    <div class="dark-bg">
      <div class="wrapper column padding">
        <h2>oferta</h2>
        <div class="row">
          <Tile v-bind:tile="store.tile[0]" />
          <Tile v-bind:tile="store.tile[1]" />
          <Tile v-bind:tile="store.tile[2]" />
        </div>
      </div>
    </div>
    <div class="dark-bg">
      <div class="wrapper padding">
        <Partner />
      </div>
    </div>
    <NextPage v-bind:sections="store.sections[1]" />
    <NextPage id="contact" class="pad-btm-reset" v-bind:sections="store.sections[2]" /> -->
  </div>
</template>

<script>
// import NextPage from "../components/NextPage.vue";
// import Tile from "../components/Tile.vue";
// import Partner from "../components/Partner.vue";

import { store } from "@/store.js";

export default {
  name: "home",
  components: {
    // NextPage,
    // Tile,
    // Partner
  },
  data() {
    return {
      store
    };
  }
};
</script>

<style scoped></style>
