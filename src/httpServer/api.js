import ajax from './ajax'
import {Toast} from 'vant'

/**
 *  业务接口成功或者失败的情况处理
 *
 */
const handleResponse = (res, success, failure) => {
  switch (res.code) {
    case 200:   //成功
      success && success(res);
      break;
    case 401:   //登录token失效
      break;
    default:
      // if (failure) {
        failure(res);
      // } else {
      //   Toast({message:res.msg || '请求失败，请稍后重试!'});
      // // }
      break;
  }
}

export default {
  get: async function (url, params, success, failure) {
    await ajax.get(url, {
      params: params
    }).then(res => {
      if (res.status == 200) {
        handleResponse(res.data, success, failure);
      }
    });
  },

  post: async function (url, params, success, failure) {
    await ajax.post(url, params).then(res => {
      if (res.status == 200) {
        handleResponse(res.data.data, success, failure);
      }
    })
  }
}
