// import Vue from 'vue';
import App from './App.vue';
import router from './router';



// import 'utils/element-ui'
//element ui
// import Api from '@/httpServer/api';

//调用pc的rem
import 'utils/rem.js'
// import axios from 'axios'
// Vue.prototype.$axios = axios

//axios挂载到vue的全局属性上
// Vue.prototype.$https = Api

Vue.config.productionTip = false;

new Vue({
  router,
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
  render: (h) => h(App),
}).$mount('#app');
