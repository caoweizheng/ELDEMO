<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-05-12 11:17:41
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 15:57:04
-->
<template>
  <el-date-picker
    v-model="localVal"
    :placeholder="placeholder"
    :type="type"
    :align="align"
    @change="changeVal"
  >
  </el-date-picker>
</template>

<script>
import { DatePicker } from "element-ui";
export default {
  name: 'appDatePicker',
  components: {
    'el-date-picker': DatePicker
  },
  data () {
    return {
      localVal: this.value
    }
  },
  props: ['value', "placeholder", "type", "align"],
  model: {
    prop: 'value',
    event: 'modelVal'
  },
  created () {
  },
  watch: {
    // 监听value改变再重新赋值(eg:重置)
    value (val) {
      this.localVal = val;
    }
  },
  methods: {
    changeVal (val, lr) {
      this.$emit('modelVal', val);    // 更新 model
      this.$emit('change', val);  // 事件传值
    }
  }
};
</script>

