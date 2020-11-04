<template>
  <div class="wrapper nav">
    <div class="nav-logo">
      <router-link to="/Portfolio-Vue/">
        <img
          src="@/assets/img/logo.svg"
          alt="Marek Dzwonnik"
          class="nav-logo-img"
        />
      </router-link>
    </div>
    <div class="none-mobile">
      <ul>
        <template v-for="(item, index) in store.navItems">
          <router-link
            v-if="item.page"
            class="nav-link"
            :key="index"
            :to="item.url"
            >{{ item.title }}</router-link
          >
          <a v-else class="nav-link" :key="index" :href="item.url">{{
            item.title
          }}</a>
        </template>
      </ul>
    </div>
    <Sidebar class="none-desktop">
      <ul class="sidebar-menulist" @click="closeSidebarPanel">
        <template v-for="(item, index) in store.navItems">
          <router-link class="nav-link-sb" :key="index" :to="item.url">{{
            item.title
          }}</router-link>
        </template>
      </ul>
    </Sidebar>
    <Burger class="none-desktop" />
  </div>
</template>

<script>
import Burger from './menu/Burger.vue';
import Sidebar from './menu/Sidebar.vue';

import { store, mutations } from '@/store.js';

export default {
  name: 'Menu',
  components: {
    Burger,
    Sidebar,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  justify-content: space-between;
  align-items: center;
  &-logo-img {
    width: 300px;
  }
  &-link {
    color: black;
    text-decoration: none;
    margin-left: 40px;
    font-weight: bold;
    transition: all 250ms ease-in-out;
    &:hover {
      color: #f2c96e;
    }
    &-sb {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      margin: 5px 0;
      padding: 5px;
    }
  }
}
.router-link-active {
  color: #d04844;
}
.sidebar-menulist {
  display: flex;
  flex-direction: column;
}
@media (max-width: 890px) {
  .nav {
    &-logo-img {
      width: 60%;
    }
    &-link {
      margin-left: 20px;
    }
  }
}
@media (max-width: 769px) {
  .nav {
    &-logo-img {
      width: 70%;
    }
    &-link {
      margin-left: 20px;
    }
  }
}
</style>
