<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-24 11:57:20
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 16:06:18
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
import { layout } from './props.config'
export default {
  name: 'base-string',
  props: {
    ...layout,
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: null
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
    }
  },
  methods: {
    handleEmitValue (val) {
      this.$emit('handleEmitValue', val)
    },
    handleEmitEnter (val) {
      this.$emit('handleEmitEnter', val)
    },
    handleBlur (selectItem) {
      this.$emit('handleBlur', selectItem)
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
