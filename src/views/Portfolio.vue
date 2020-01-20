<template>
  <div class="pad-btm-reset">
    <div class="wrapper column center">
      <h2 class="padding">galeria realizacji</h2>
      <div class="portfolio-items">
        <PortfolioItem v-for="(item) in store.portfolio" :key="item.id" v-bind:portfolio="item" />
      </div>
    </div>
    <NextPage id="contact" class="pad-btm-reset" v-bind:sections="store.sections[2]" />
  </div>
</template>

<script>
import NextPage from "../components/NextPage.vue";
import PortfolioItem from "../components/PortfolioItem.vue";

import { store } from "@/store.js";

export default {
  name: "portfolio",
  components: {
    NextPage,
    PortfolioItem
  },
  data() {
    return {
      store
    };
  }
};
</script>

<style>
.center {
  text-align: center;
}
.portfolio-items {
  display: flex;
  justify-content: space-evenly;
}
@media (max-width: 769px) {
  .portfolio-items {
    flex-direction: column;
  }
}
</style>
