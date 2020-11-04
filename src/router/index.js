import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import Porfolio from '../views/Portfolio.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Portfolio-Vue/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Portfolio-Vue/services/:serviceName',
      name: 'services',
      component: Services,
    },
    {
      path: '/Portfolio-Vue/portfolio',
      name: 'portfolio',
      component: Porfolio,
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;
