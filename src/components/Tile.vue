<template>
  <div class="flex width anime" :class="tile.class">
    <h3 class="weight-xs">{{ tile.title }}</h3>
    <h3 class="margin">{{ tile.subtitle }}</h3>
    <div class="center">
      <img :src="tile.image.src" :alt="tile.image.alt" />
    </div>
    <p>{{ tile.content }}</p>
    <ButtonBorder class="margin">
      <router-link :to="tile.button.link">{{ tile.button.text }}</router-link>
    </ButtonBorder>
  </div>
</template>

<script>
import ButtonBorder from "./ButtonBorder.vue";

export default {
  name: "Tile",
  props: ["tile"],
  components: {
    ButtonBorder
  }
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
  }
  p {
    margin: 20px 0;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}

.width {
  max-width: 32%;
  border-radius: 4px;
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
@media (max-width: 1210px) {
  .flex {
    padding: 10px;
    h3 {
      font-size: 23px;
    }
  }
}
@media (max-width: 769px) {
  .flex {
    margin-bottom: 40px;
    h3 {
      font-size: 27px;
    }
    img {
      width: 90%;
    }
    .center {
      display: flex;
      justify-content: center;
    }
  }
  .width {
    max-width: 100%;
  }
}
</style>
