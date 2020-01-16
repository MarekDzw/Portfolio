<template>
  <div class="wrapper flex padding">
    <div
      class="two-column"
      :class="{ contact: sections.contact.state, white: sections.background.all, grad: sections.background.grad   }"
    >
      <img :src="sections.image.src" :alt="sections.image.alt" />
      <div class="two-column-content">
        <h2>{{ sections.title }}</h2>
        <p>{{ sections.contentText }}</p>
        <div class="margin" v-if="sections.contact.state">
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
        <Button class="margin" v-if="sections.button.text" v-bind:button="sections.button" />
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
    width: 45%;
    margin: auto 0;
  }
  .margin {
    margin-top: 10px;
  }
  .phone,
  .mail {
    font-size: 20px;
    display: flex;
    font-weight: 500;
    color: #d04844;
    text-decoration: none;
    width: fit-content;
    line-height: 30px;
  }
  img {
    width: 55%;
  }
}
.grad img {
  margin-top: -120px;
}
@media (max-width: 769px) {
  .two-column {
    flex-direction: column;
    &-content {
      position: static;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }
    .phone,
    .mail {
      margin: 10px 0px;
      font-size: 20px;
      display: flex;
      font-weight: 500;
      color: #d04844;
      text-decoration: none;
    }
    img {
      width: 100%;
    }
  }
  .contact {
    flex-direction: column-reverse;
  }
}
</style>
