import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
     path: '/homeShape',
     name: 'homeShape',
     component: () => import('@/views/homeShape.vue'),
  },
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, saveTop) { if (saveTop) { return saveTop; } return { x: 0, y: 0 }; },
});

export default router;
