import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
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
      path: "/services/:serviceName",
      name: "services",
      component: Services
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Porfolio
    }
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

export default router;
