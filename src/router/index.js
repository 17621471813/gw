import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from 'views/HomePage.vue';

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
     path: '/productCenter',
     name: 'productCenter',
     component: () => import('@/views/productCenter.vue'),
  },
  {
    path: '/joinIn',
    name: 'joinIn',
    component: () => import('@/views/joinIn.vue'),
 },

 {
  path: '/information',
  name: 'information',
  component: () => import('@/views/information.vue'),
},
{
  path: '/aboutUs',
  name: 'aboutUs',
  component: () => import('@/views/aboutUs.vue'),
},
];

const router = new VueRouter({
  // base: '/',
  mode: 'history',
  // base: process.env.,
  routes,
  // scrollBehavior(to, from, saveTop) { if (saveTop) { return saveTop; } return { x: 0, y: 0 }; },
});

export default router;
