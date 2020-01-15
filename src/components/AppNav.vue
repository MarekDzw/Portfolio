<template>
  <div class="wrapper nav">
    <div class="nav-logo">
      <router-link to="/">
        <img
          src="../assets/img/logo.svg"
          alt="Marek Dzwonnik - Logo"
          class="nav-logo-img"
        />
      </router-link>
    </div>
    <div class="nav-list">
      <ul>
        <template v-for="(item, index) in navItems">
          <router-link class="nav-link" :key="index" :to="item.url">{{
            item.title
          }}</router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      navItems: [
        { title: "usługi", url: "/services" },
        { title: "współpraca", url: "/partnership" },
        { title: "portfolio", url: "/portfolio" },
        { title: "kontakt", url: "/contact" }
      ]
    };
  }
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
