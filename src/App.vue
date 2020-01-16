<template>
  <div id="app">
    <div class="dark-grad-bg">
      <Menu />
    </div>
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
@import url("https://fonts.googleapis.com/css?family=Raleway:400,500,600,700");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Raleway";
}
.wrapper {
  width: 1250px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: auto;
  display: flex;
}
.flex {
  display: flex;
  flex-direction: column;
}
.column {
  flex-direction: column;
}
.row {
  display: flex;
  justify-content: space-between;
}
.padding {
  padding-top: 100px;
  padding-bottom: 100px;
}
.pad-btm-reset {
  padding-bottom: 0px;
}
.none-desktop {
  display: none;
}
.none-mobile {
  display: flex;
}

h2 {
  font-size: 40px;
  padding-bottom: 20px;
}
h3 {
  font-size: 27px;
}
p {
  font-size: 18px;
  line-height: 24px;
}
.dark-grad-bg {
  background: linear-gradient(90deg, black 50%, white 0%);
}
.dark-bg {
  background: black;
}
.white {
  color: white;
}
@media (max-width: 1250px) {
  .wrapper {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  .pad-btm-reset {
    padding-bottom: 0px;
  }
}
@media (max-width: 769px) {
  .none-desktop {
    display: block;
  }
  .none-mobile {
    display: none;
  }
  .dark-grad-bg {
    background: black;
  }
  .padding {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .pad-btm-reset {
    padding-bottom: 0px;
  }
  .row {
  flex-direction: column;
  justify-content: space-between;
}
}
</style>
