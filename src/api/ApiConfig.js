/*
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-03-30 11:29:09
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 19:40:18
 */
import axios from "./axios";


export default {
  queryProductList (params) {
    return axios.post('/app/allocate/shipmentList', params).then(resp => {
      return resp
    })
  },
  queryProductDetail (params) {
    return axios.post('/queryProductDetail', params).then(resp => {
      return resp
    })
  },
  login (params) {
    return axios.post('/app/user/login', params).then(resp => {
      return resp
    })
  }
}

