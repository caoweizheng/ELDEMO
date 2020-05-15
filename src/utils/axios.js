/**
 * axios二次封装
 */
import Vue from "vue"
import axios from 'axios'
import Qs from 'qs'
import { baseURL } from "./config"

const http = axios.create({

})
// axios请求拦截器， 在发送请求之前做些什么
axios.interceptors.request.use((config) => {
  // loadding
  // Toast.loading({
  //   message: '加载中...',
  //   forbidClick: true,
  //   loadingType: 'spinner'
  // });
  return config
}, (error) => {
  // 请求错误
  // Toast.fail()
  return Promise.reject(error);
})

// 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
axios.interceptors.response.use(async(response) => {
  return response
}, (error) => {
  // Toast.fail()
  return Promise.reject(error)
})

// 封装数据返回失败
function errorState (response) {
  // 隐藏loadding
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response;
  } else {
    // 数据返回失败处理
    // Toast('请求失败')
  }
}
// 封装数据返回成功
function successState(resp) {
  console.log(resp)
  if(resp.code === 0) { // 后端返回的code
    // to do?
    return resp;
  } else {
    // Toast('异常的状态码')
  }
}

// 封装axios
function apiAxios(method, url, params) {
  console.log(params)
  let httpDefault = {
    method: method,
    baseURL: baseURL,
    url: url,
    params: (method === 'GET' || method === 'DELETE') ? params : null,
    data: (method === 'POST' || method === 'PUT') ? Qs.stringify(params) : null,
    timeout: 20 * 1000
  }
  return new Promise((resolve, reject) => {
    axios(httpDefault)
    .then(res => { // 此处.then属于axios
      successState(res)
      resolve(res)
    })
    .catch(response => {
      errorState(response)
      reject(response)
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
