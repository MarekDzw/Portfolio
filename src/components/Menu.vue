<template>
  <div class="wrapper nav">
    <div class="nav-logo">
      <router-link to="/">
        <img
          src="@/assets/img/logo.svg"
          alt="Marek Dzwonnik"
          class="nav-logo-img"
        />
      </router-link>
    </div>
    <div class="nav-list none-mobile">
      <MenuList class="" :store="store" />
    </div>
    <Sidebar class="none-desktop">
      <MenuList :store="store" />
    </Sidebar>
    <Burger class="none-desktop" />
  </div>
</template>

<script>
import Burger from "./menu/Burger.vue";
import Sidebar from "./menu/Sidebar.vue";
import MenuList from "./menu/MenuList.vue";

import { store } from "@/store.js";

export default {
  name: "Menu",
  components: {
    Burger,
    Sidebar,
    MenuList
  },
  data() {
    return {
      store
    };
  }
};
</script>

<style lang="scss" scoped>
.none-desktop {
  display: none;
}
.none-mobile {
  display: flex;
}
.nav {
  justify-content: space-between;
  align-items: center;
  &-link {
    color: black;
    text-decoration: none;
    margin-left: 30px;
  }
  &-logo-img {
    width: 300px;
  }
}
.router-link-active {
  text-decoration: underline;
  text-decoration-color: gold;
}
@media (max-width: 769px) {
  .none-desktop  {
    display: block;
  }
  .none-mobile {
    display: none;
  }
}
</style>
