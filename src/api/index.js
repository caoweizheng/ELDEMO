import Vue from "vue";
import config from './config'

const api =  {
  install(Vue) {
    Vue.prototype.$http = api
  },
  ...config
}

export default api
