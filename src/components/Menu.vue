<template>
  <div class="wrapper nav ">
    <div class="nav-logo">
      <router-link to="/">
        <img src="@/assets/img/logo.svg" alt="Marek Dzwonnik" class="nav-logo-img" />
      </router-link>
    </div>
    <div class="none-mobile">
      <ul>
        <template v-for="(item, index) in store.navItems">
          <router-link v-if="item.page" class="nav-link" :key="index" :to="item.url">{{ item.title }}</router-link>
          <a v-else class="nav-link" :key="index" :href="item.url">{{ item.title }}</a>
        </template>
      </ul>
    </div>
    <Sidebar class="none-desktop">
      <ul class="sidebar-menulist" @click="closeSidebarPanel">
        <template v-for="(item, index) in store.navItems">
          <router-link class="nav-link" :key="index" :to="item.url">{{ item.title }}</router-link>
        </template>
      </ul>
    </Sidebar>
    <Burger class="none-desktop" />
  </div>
</template>

<script>
import Burger from "./menu/Burger.vue";
import Sidebar from "./menu/Sidebar.vue";

import { store, mutations } from "@/store.js";

export default {
  name: "Menu",
  components: {
    Burger,
    Sidebar
  },
  data() {
    return {
      store
    };
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
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
  &-logo-img {
    width: 300px;
  }
}
.nav-link {
  color: black;
  text-decoration: none;
  margin-left: 40px;
  font-weight: bold;
  &:hover {
    color: #f2c96e;
  }
}
.router-link-active {
  color: #f2c96e;
}
.sidebar-menulist {
  display: flex;
  flex-direction: column;
}
@media (max-width: 769px) {
  .none-desktop {
    display: block;
  }
  .none-mobile {
    display: none;
  }
}
</style>
