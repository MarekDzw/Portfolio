import Vue from "vue";

export const store = Vue.observable({
  isNavOpen: false,
  navItems: [
    { title: "usługi", url: "/services" },
    { title: "współpraca", url: "/partnership" },
    { title: "portfolio", url: "/portfolio" },
    { title: "kontakt", url: "/contact" }
  ]
});
export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};

