import Vue from 'vue';
import App from './App.vue';
import router from './router';




//element ui
import 'utils/element-components';
import Api from '@/httpServer/api';
//调用mock
// if(process.env.NODE_ENV == 'development') {
//   require('@/mock')
// }
//调用pc的rem
import 'utils/rem.js'
//图片的展示效果，可放大
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)



//axios挂载到vue的全局属性上
Vue.prototype.$https = Api

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
