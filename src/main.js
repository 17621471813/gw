import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';




//element ui
import Api from '@/httpServer/api';

//调用pc的rem
import 'utils/rem.js'


Vue.use(ElementUI);
//axios挂载到vue的全局属性上
Vue.prototype.$https = Api

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
