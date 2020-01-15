<template>
  <div class="flex">
    <div class="two-column">
      <div>
        <h2>{{ sections.title }}</h2>
        <p>{{ sections.contentText }}</p>
        <div v-if="sections.contact.phone">
          <a :href="`tel:${sections.contact.phone}`" class="phone">{{
            sections.contact.phone
          }}</a>
          <a
            target="blank"
            :href="`mailto:${sections.contact.mail}`"
            class="mail"
            >{{ sections.contact.mail }}</a
          >
        </div>
        <Button v-if="sections.button.text" v-bind:button="sections.button" />
      </div>
      <div>
        <img :src="sections.image.src" :alt="sections.image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "NextPage",
  components: {
    Button
  },
  props: ["sections"]
};
</script>

<style lang="scss" scoped>
.two-column {
  display: flex;
  justify-content: space-between;
}
img {
  width: 80%;
}
</style>
