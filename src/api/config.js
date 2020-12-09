import axios from "@/utils/axios";

// import tools from "../common/tools";

export default {
  queryProductList (params) {
    return axios.post('/queryProductList', params).then(resp => {
      return resp
    })
  },
  queryProductDetail (params) {
    return axios.post('/queryProductDetail', params).then(resp => {
      return resp
    })
  },
  login(params) {
    return axios.post('/app/user/login', params).then(resp => {
      return resp
    })
  }
}

