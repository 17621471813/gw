import Vue from 'vue';
import App from './App.vue';
import router from './router';



import 'utils/element-ui'
//element ui
// import Api from '@/httpServer/api';

//调用pc的rem
import 'utils/rem.js'
import axios from 'axios'
Vue.prototype.$axios = axios

//axios挂载到vue的全局属性上
// Vue.prototype.$https = Api

Vue.config.productionTip = false;

new Vue({
  router,
  mounted() {
    var d = new Date();

    var hour = d.getHours();//得到小时数

    var minute = d.getMinutes();//得到分钟数

    var second = d.getSeconds();//得到秒
    console.log('预渲染1', `${hour}:${minute}:${second}`)
    document.dispatchEvent(new Event('render-event'))
    var d = new Date();

    var hou = d.getHours();//得到小时数

    var minut = d.getMinutes();//得到分钟数

    var secon = d.getSeconds();//得到秒
    console.log('预渲染2', `${hou}:${minut}:${secon}`)
  },
  render: (h) => h(App),
}).$mount('#app');
