import Vue from 'vue';
import App from './help.vue';
import router from './router';






//调用pc的rem
import 'utils/rem.js'

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
