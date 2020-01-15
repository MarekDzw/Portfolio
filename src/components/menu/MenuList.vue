<template>
  <ul>
    <template v-for="(item, index) in store.navItems">
      <router-link class="nav-link" :key="index" :to="item.url">
        {{ item.title }}
      </router-link>
    </template>
  </ul>
</template>

<script>
export default {
  name: "MenuList",
  props: ["store"]
};
</script>

<style lang="scss" scoped>
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
</style>
