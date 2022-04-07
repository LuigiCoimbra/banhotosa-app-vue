import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Recover from '../views/Recover.vue';

import EventTable from '../components/EventTable.vue';
import MyPets from '../components/MyPets.vue';
import Agendamento from '../components/Agendamento.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/historico-servicos',
        component: EventTable,
      },
      {
        path: '/meus-pets',
        component: MyPets,
      },
      {
        path: '/agendamento',
        component: Agendamento,
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('arrUser') !== undefined) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
