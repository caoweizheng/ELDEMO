<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-24 11:57:20
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-25 16:30:30
-->
<template>
  <base-layout
    :label="label"
    :text-align="textAlign"
    :label-width="labelWidth"
    :read-only="readOnly"
    :style-type="styleType"
    :value="value"
    :is-require="isRequire"
  >
    <el-input
      slot="control"
      :clearable="true"
      v-model="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :icon="icon"
      :type="type"
      :rows="rows"
      @input="handleEmitValue"
      @keyup.enter.native="handleEmitEnter"
      @blur="handleBlur"
    ></el-input>
  </base-layout>
</template>

<script>
export default {
  name: 'base-string',
  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    disabled: {
      type: Boolean,
      default:  false
    },
    // 不显示 input，只显示内容，用于表格编辑(不可编辑时的显示模式)
    readOnly: {
      type: Boolean,
      default:  false
    },
    isRequire: {
      type: Boolean,
      default:  false
    },
    // readOnly 为 true 时，内容的显示样式
    styleType: {
      type: [String, Number],
      default: 1
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    // textarea 的行数
    rows: {
      type: [String, Number],
      default: '1'
    },
    labelWidth: null,
    textAlign: null
  },
  methods: {
    handleEmitValue(val) {
      this.$emit('handleEmitValue', val)
    },
    handleEmitEnter(val) {
      this.$emit('handleEmitEnter', val)
    },
    handleBlur(selectItem) {
      this.$$emit('handleBlur', selectItem)
    }
  },
  computed: {
    inputValue: {
      get(){
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
