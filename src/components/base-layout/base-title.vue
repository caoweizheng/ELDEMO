<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-24 10:45:20
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-24 14:03:59
-->
<template>
  <p
    :style="style"
    class="base-title"
    :class="`base-title-${borderType}`"
  >{{title}}</p>
</template>

<script>
export default {
  name: 'base-title',
  props:{
    style: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    borderType: {
      type: [String, Number],
      default: 1
    }
  },

}
</script>

<style scoped lang="scss">
.base-title {
  padding: 20px 5px;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  &.base-title-1 {
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  &.base-title-2 {
    margin-top: 20px;
    border-top: 1px solid #ddd;
  }
}
</style>
