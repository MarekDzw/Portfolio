<template>
  <div class="wrapper flex padding">
    <div class="two-column" :class="{ white: sections.background }">
      <img :src="sections.image.src" :alt="sections.image.alt" />
      <div class="two-column-content">
        <h2>{{ sections.title }}</h2>
        <p>{{ sections.contentText }}</p>
        <div v-if="sections.contact.phone">
          <a :href="`tel:${sections.contact.phone}`" class="phone">
            {{
            sections.contact.phone
            }}
          </a>
          <a
            target="blank"
            :href="`mailto:${sections.contact.mail}`"
            class="mail"
          >{{ sections.contact.mail }}</a>
        </div>
        <Button v-if="sections.button.text" v-bind:button="sections.button" />
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
  position: relative;
  display: flex;
  justify-content: flex-end;
  &-content {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    width: 40%;
    margin: auto 0;
  }
}
.phone,
.mail {
  font-size: 20px;
  display: flex;
  font-weight: 500;
  color: #d04844;
  text-decoration: none;
}
img {
  width: 60%;
}
</style>
