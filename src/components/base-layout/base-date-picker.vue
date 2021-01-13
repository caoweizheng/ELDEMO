<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-28 15:05:35
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 20:36:28
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
    <el-date-picker
      slot="control"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      :align="align"
      @change="handleEmitValue"
    >
    </el-date-picker>
  </base-layout>
</template>

<script>
import { DatePicker } from "element-ui";
import { layout } from './props.config'
export default {
  name: 'base-date-picker',
  components: {
    'el-date-picker': DatePicker
  },
  props: {
    ...layout,
    // year/month/date/week/ datetime/datetimerange/daterange
    type: {
      type: String,
      default: 'date'
    },
    align: {
      type: String,
      default: 'left'
    },
    format: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  // props: ['value', "placeholder", "type", "align"],
  // model: {
  //   prop: 'value',
  //   event: 'modelVal'
  // },
  computed: {
    inputValue: {
      set (val) {
        if (this.type === 'daterange') {
          this.$emit('input', [
            this.$utils.formatTime(val[0], this.format),
            this.$utils.formatTime(val[1], this.format)
          ])
        } else {
          this.$emit('input', this.$utils.formatTime(val, this.format))
        }
      },
      get () {
        console.log(this.value)
        return this.value
      },
    }
  },
  watch: {
    // 监听value改变再重新赋值(eg:重置)
    value (val) {
      this.localVal = val;
    }
  },
  methods: {
    handleEmitValue (val, lr) {
      // this.$emit('modelVal', val);    // 更新 model
      // this.$emit('change', val);  // 事件传值
      this.$emit('handleEmitValue', val)
    }
  },
  created () {
  },
};
</script>

