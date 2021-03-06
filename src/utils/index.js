/*
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-28 19:39:01
 * @LastEditors: cwz0525
 * @LastEditTime: 2021-01-13 17:34:02
 */

import jsx from "babel-plugin-syntax-jsx";

/**
 * @name: filterParams
 * @msg:  删除值为空的参数
 * @param {* 传入的参数} params
 * @return {* 过滤后的参数}
 */
export function filterParams (params) {
  for (const iterator in params) {
    if (!params[iterator]) {
      delete params[iterator]
    }
  }
  return params
}

/**
 * @name: formatTime
 * @msg:  时间格式化
 * @param {* 需要格式化的时间} time
 * @param {* 格式类型} format
 * @return {* 格式化后的时间 }
 */
export function formatTime (time = '', _format) {
  let date
  let format = _format || '{y}-{m}-{d} {h}:{i}:{s}'
  if (!time) return null;
  if (typeof time === 'object') {
    date = time;
  } else {
    date = new Date(time)
  }
  let formatObject = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  let formatResult = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, val) => {
    let value = formatObject[val]
    if (val === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || ''
  })
  return formatResult
}


function myMap (array, callback) {
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    let item = callback(array[index])
    newArr.push(item)
  }
  return newArr
}


function myFilter (array, callback) {
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    let key = callback(array[index])
    if (key) newArr.push(array[index])
  }
  return newArr
}

// let obj = { a: 1, b: { b: 2, c: { c: 3, d: [{ d: 4 }] } } }
function deepClone (originObj, cloneObj = {}) {
  let _toString = Object.prototype.toString
  if (!originObj || typeof originObj !== 'object') {
    return originObj
  }

  for (const key in originObj) {
    if (originObj.hasOwnProperty(key)) {
      let item = originObj[key]
      let pro = _toString.call(item) === '[object Object]' ? {} : []
      cloneObj[key] = deepClone(item, pro)
    }
    else {
      cloneObj[key] = item
    }
  }
  return cloneObj;
}


