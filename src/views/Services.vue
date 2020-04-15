<template>
  <div class="pad-btm-reset">
    <template v-for="service in store.tile">
      <div :key="service" v-if="$route.params.serviceName == service.id">
        <div>{{ service.title }}</div>
        <div>{{ service.subtitle }}</div>
        <img :src="service.image.src" :alt="service.image.alt" />
        <div>{{ service.content }}</div>
      </div>
    </template>
    <template v-for="service in store.tile">
      <div
        :key="service"
        style="background:red"
        v-if="$route.params.serviceName !== service.id"
      >
        <img :src="service.image.src" :alt="service.image.alt" />
        <h3>{{ service.title }}</h3>
        <h3>{{ service.subtitle }}</h3>
        <router-link :to="service.button.link">{{
          service.button.text
        }}</router-link>
      </div>
    </template>

    <NextPage
      id="contact"
      class="pad-btm-reset"
      v-bind:sections="store.sections[2]"
    />
  </div>
</template>

<script>
import NextPage from "../components/NextPage.vue";

import { store } from "@/store.js";

export default {
  name: "services",
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
