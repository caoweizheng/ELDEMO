<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-24 10:45:28
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-24 12:04:50
-->


<template>
  <el-button
    :type="type"
    :disabled="getDisabled || disabled"
    :loading="loading"
    :round="round"
    :size="size"
    :icon="icon"
    @click="click"
  >
    {{this.$slots.default}}
  </el-button>
</template>

<script>
import { Button } from 'element-ui'
export default {
  name: 'base-button',
  props:{
    size: {
      type: String,
      default: 'small'
    },
    type: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  methods: {
    click() {
      this.$emit('click');
    }
  },
  computed: {
    getDisabled() {
      return false;
    }
  }

}
</script>
