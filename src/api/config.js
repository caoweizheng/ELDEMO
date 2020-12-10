import axios from "@/utils/axios";
import { DEV_LOCAL } from '../../config/local_config'

// import tools from "../common/tools";

export default {
  queryProductList (params) {
    return axios.get(DEV_LOCAL.apiHost + '/app/blog/list', params).then(resp => {
      return resp
    })
  },
  queryProductDetail (params) {
    return axios.post(DEV_LOCAL.apiHost + '/queryProductDetail', params).then(resp => {
      return resp
    })
  },
  login (params) {
    return axios.post(DEV_LOCAL.apiHost + '/app/user/login', params).then(resp => {
      return resp
    })
  }
}

