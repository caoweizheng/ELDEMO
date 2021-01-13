/*
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-03-30 11:28:58
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 19:36:47
 */
import Vue from "vue";
import config from './ApiConfig'

const api =  {
  install(Vue) {
    Vue.prototype.$http = api
  },
  ...config
}

export default api
