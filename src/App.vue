<template>
  <div id="app">
    <AppNav></AppNav>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from "./components/AppNav.vue";

export default {
  name: "App",
  components: {
    AppNav
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
</style>
