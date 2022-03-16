import axios from 'axios'
import {Toast} from 'vant'


const ajax = axios.create({
     timeout:6000,
     baseURL:process.env.VUE_APP_BASE_URL   //基础域名
})

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
ajax.interceptors.request.use(
  config => {
    //判断token(根据实际情况拦截)
   
    return config;
  },
  error => Promise.error(error)
)

/**
 * 响应拦截器
 */
ajax.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
    const {response} = error;
    if (response) { // 请求已发出，但是不在2xx的范围
      Toast({message: response.message});
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      Toast({message: '网络开小差，请稍后重试'});
    }
  }
)

export default ajax;
