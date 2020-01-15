<template>
  <div class="flex">
    <template v-for="(item, index) in sections">
      <div class="two-column" :key="index">
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.contentText }}</p>
          <div v-if="item.contact.phone">
            <a :href="`tel:${item.contact.phone}`" class="phone">
              {{ item.contact.phone }}
            </a>
            <a
              target="blank"
              :href="`mailto:${item.contact.mail}`"
              class="mail"
              >{{ item.contact.mail }}</a
            >
          </div>
          <Button v-if="item.button.text" v-bind:button="item.button" />
        </div>
        <div>
          <img :src="item.image.src" :alt="item.image.alt" />
        </div>
      </div>
    </template>
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
.flex {
  display: flex;
  flex-direction: column;
  .two-column{
      display: flex;
  }
}
</style>
