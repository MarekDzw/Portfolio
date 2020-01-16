<template>
  <div class="flex" :class="tile.class">
    <h3 class="weight-xs">{{ tile.title }}</h3>
    <h3 class="margin">{{ tile.subtitle }}</h3>
    <img :src="tile.image.src" :alt="tile.image.alt" />
    <p>{{ tile.content }}</p>
    <router-link :to="tile.button.link">{{ tile.button.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: ["tile"]
};
</script>

<style lang="scss" scoped>
.flex {
  justify-content: space-around;
  padding: 20px;
  .weight-xs {
    font-weight: 500;
  }
  h3 {
    padding: 5px 0;
  }
  .margin {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: 321px;
  }
  p {
    margin: 20px 0;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    width: fit-content;
    &:hover {
      color: red;
    }
  }
}
.color-st {
  background: white;
}
.color-nd {
  background: #ffe09a;
}
.color-rd {
  background: #f2c96e;
}
</style>
