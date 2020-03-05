import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import AddPost from '../views/AddPost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    component: AddPost
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
