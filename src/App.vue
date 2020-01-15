<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
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
