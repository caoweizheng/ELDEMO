/*
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-28 15:18:45
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 16:04:05
 */
// 不显示 input，只显示内容，用于表格编辑(不可编辑时的显示模式)
const readOnly = {
  type: Boolean,
  default: false
}
const inputType = {
  type: String,
  default: 'string'
}
const label = {
  type: String,
  default: ''
}
const value = {
  default: ''
}
const labelWidth = {
  type: [Number, String],
  default: 100
}
const disabled = {
  type: Boolean,
  default: false
}
const textAlign = {
  type: String,
  default: 'right'
}
const isRequire = {
  type: Boolean,
  default: false
}
const rows = {
  type: Number,
  default: 2
}
const icon = {
  type: String,
  default: null
}
// readOnly 为 true 时，内容的显示样式
const styleType = {
  type: [Number, String],
  default: 1
}
const isDipatchStyle = {
  type: Boolean,
  default: true
}

export const layout = {
  labelWidth,
  label,
  readOnly,
  value,
  textAlign,
  styleType,
  isRequire,
  isDipatchStyle,
  inputType
}
