<template>
  <div class="portfolio-item">
    <a :href="portfolio.link" target="blank">
      <img v-bind:src="portfolio.img" alt />
    </a>
    <div class="overlay" @click.stop="showAll" v-bind:class="{ active: isActive }">
      <div class="overlay-title">
        <h4>{{ portfolio.title }}</h4>
      </div>
      <div class="overlay-content">
        <p>{{ portfolio.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioTile",
  props: ["portfolio"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    showAll() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-item {
  position: relative;
  width: calc(33% - 40px);
  margin: 20px;
  overflow: hidden;
  padding-bottom: 40px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 0px 20px 2px grey;
  transition: all 250ms;
  &:hover {
    transform: translate(10px, 10px) scale(1.1);
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
}
h4 {
  font-size: 20px;
}
.overlay {
  position: absolute;
  top: 82%;
  bottom: 0;
  color: #d04844;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
  &-title {
    background: #f2c96e;
    padding: 10px 0;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 400ms;
      opacity: 0;
      transform: translate(-100%, -10%) rotate(-40deg);
      background-color: rgba(255, 255, 255, 0.9);
    }
    &:hover:before {
      opacity: 0.7;
      transform: translate(80%, -10%) rotate(-40deg);
    }
  }
  &-content {
    margin-top: -5px;
    padding-top: 10px;
    background: #ffecc3;
    height: 100%;
    transition: all 50ms;
    transition-delay: 400ms;
  }
}
.active {
  top: 50%;
  .overlay-content {
    opacity: 1;
    transition-delay: 0s;
  }
}
@media (max-width: 1250px) {
  .portfolio-item {
    width: calc(50% - 40px);
    padding-bottom: 25px;
    &:hover {
      transform: none;
    }
  }

  .active {
    top: 50%;
  }
}
@media (max-width: 769px) {
  .portfolio-item {
    width: 100%;
    margin: 0px;
    margin-bottom: 100px;
  }
  .overlay {
    top: 88%;
    &-content p {
      font-size: initial;
    }
  }
  h4 {
    font-size: initial;
  }
  .active {
    top: 60%;
  }
}
@media (max-width: 510px) {
  .overlay {
    top: 84%;
  }
  .active {
    top: 50%;
  }
}
@media (max-width: 375px) {
  .overlay {
    top: 80%;
  }
  .active {
    top: 40%;
  }
}
</style>
