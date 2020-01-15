import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Partnership from "../views/Partnership.vue";
import Porfolio from "../views/Portfolio.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/partnership",
      name: "partnership",
      component: Partnership
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Porfolio
    }
  ]
});

export default router;
