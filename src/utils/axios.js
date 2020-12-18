/**
 * axios二次封装
 */
import Vue from "vue"
import axios from 'axios'
import Qs from 'qs'
import { baseURL, baseHOST } from "./config"
import router from '../router'
import store from '../store'

const http = axios.create({

})

// axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios请求拦截器， 在发送请求之前做些什么
axios.interceptors.request.use((config) => {
  // config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
  // config.timeout = 20 * 1000
  let token = localStorage.getItem('BLOG_TOKEN')
  // loadding
  // Toast.loading({
  //   message: '加载中...',
  //   forbidClick: true,
  //   loadingType: 'spinner'
  // });
  if (token) {
    config.headers = {
      'access-token': token
    }
  }
  return config
}, (error) => {
  // 请求错误
  // Toast.fail()
  return Promise.reject(error);
})

// 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
axios.interceptors.response.use(async (response) => {
  // 后端返回新的token， 更新.
  const token = response.headers['access-token'];

  if(token) {
    store.commit('setToken', { token });
  }

  // 后端返回的 code
  if (response && response.data && response.data.code === 0) {
    return response;
  } else if (response && response.data && response.data.code === -2) {
    router.push('/login');
  } else {
    return Promise.reject(response)
  }
}, (error) => {
  // Toast.fail()
  return Promise.reject(error)
})

// 封装数据返回失败
function errorState (response) {
  // 隐藏loadding
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    Vue.prototype.$message({
      type: 'warning',
      message: response.data.message || '请求失败'
    })
  } else {
    // 数据返回失败处理
    Vue.prototype.$message({
      type: 'error',
      message: '请求失败'
    })
  }
}
// 封装数据返回成功
function successState (resp) {
  Vue.prototype.$message({
    type: 'success',
    message: '操作成功'
  })
  // to do?
  return resp;

}

// 封装axios
function apiAxios (method, url, params) {
  console.log('request:', { method, url, params, baseURL })
  let httpDefault = {
    method: method,
    baseURL: baseHOST,
    url: url,
    params: (method === 'GET' || method === 'DELETE') ? params : null,
    data: (method === 'POST' || method === 'PUT') ? params : null,
    // timeout: 20 * 1000
  }
  return new Promise((resolve, reject) => {
    axios(httpDefault)
      .then(res => { // 此处.then属于axios
        successState(res)
        resolve(res)
      })
      .catch(response => {
        errorState(response)
        // reject(response)
      })
  })
}
export default {
  // install: Vue.js的插件应当有一个公开方法
  // install(Vue) {
  //   Vue.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
  //   Vue.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
  //   // to do
  // },
  post: (url, params) => apiAxios('POST', url, params),
  get: (url, params) => apiAxios('GET', url, params)
}
