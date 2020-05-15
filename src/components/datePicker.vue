<template>
  <el-date-picker
    v-model="localVal"
    :placeholder="placeholder"
    :type="type"
    :align="align"
    @change="changeVal">
  </el-date-picker>
</template>

<script>
import { DatePicker } from "element-ui";
export default {
  name: 'appDatePicker',
  data() {
    return {
      localVal: this.value
    }
  },
  props: ['value', "placeholder","type","align"],
  model: {
    prop: 'value',
    event: 'modelVal'
  },
  created(){
  },
  watch: {
    // 监听value改变再重新赋值(eg:重置)
    value(val){
      this.localVal = val;
    }
  },
  methods:{
    changeVal(val, lr){
      this.$emit('modelVal', val);    // 更新 model
      this.$emit('change', val);  // 事件传值
    }
  }
};
</script>

