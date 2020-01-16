<template>
  <div class="wrapper pad-btm-reset">
    <NextPage id="contact" class="pad-btm-reset" v-bind:sections="store.sections[2]" />
  </div>
</template>

<script>
import NextPage from "../components/NextPage.vue";

import { store } from "@/store.js";

export default {
  name: "portfolio",
  components: {
    NextPage
  },
  data() {
    return {
      store
    };
  }
};
</script>

<style></style>
