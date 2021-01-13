<!--
 * @Descripttion:
 * @version:
 * @Author: cwz0525
 * @Date: 2020-12-25 10:32:54
 * @LastEditors: cwz0525
 * @LastEditTime: 2020-12-28 16:04:56
-->
<template>
  <div class="base_control">
    <div
      :label="label"
      v-text="label"
      :style="titleStyle"
      :class="rootClass"
      class="base_control__title"
    >
    </div>
    <div :class="`base_control__input-${inputType} base_control__input`">
      <template v-if="!readOnly">
        <slot name="control"></slot>
      </template>
      <template v-else>
        <div
          class="base_control__value"
          v-html="inputValue"
        ></div>
      </template>
    </div>
  </div>
</template>

<script>
import { layout } from './props.config'
export default {
  name: 'base-layout',
  props: {
    ...layout
  },
  computed: {
    titleStyle () {
      let _width;
      if (isNaN(this.labelWidth) === true) {
        _width = this.labelWidth;
      } else {
        _width = `${this.labelWidth}px`
      }
      return {
        minWidth: _width,
        textAlign: this.textAlign
      };
    },
    inputValue () {
      return this.value
    },
    rootClass () {
      let calssName = '';
      if (this.isRequire) {
        calssName += 'isRequire'
      }
      return calssName
    }
  }
}
</script>

<style lang="scss" scoped>
.base_control {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  .base_control__title {
    margin-right: 10px;
    text-align: right;
    white-space: nowrap;
    &.isRequire {
      &::before {
        display: inline-block;
        content: "*";
        margin-right: 5px;
        color: red;
      }
    }
  }
  .base_control__input {
    padding: 0 16px;
  }
  .base_control__input-1 {
    .base_control__value {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border: 1px solid #999;
        border-top: none;
        height: 0;
      }
    }
  }
  .base_control__input-2 {
    .base_control__value {
      overflow: initial;
      text-overflow: initial;
      white-space: pre-wrap;
      height: auto;
      line-height: 1;
    }
  }
}
.table .base_control .base_control__input {
  padding: 0;
}
</style>
