<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Menu,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Raleway";
}
.wrapper {
  width: 1250px;
  padding: 20px;
  margin: auto;
  display: flex;
}
.flex {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1250px) {
  .wrapper {
    width: 100%;
  }
}
</style>
