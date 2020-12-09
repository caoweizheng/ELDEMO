<template>
  <el-form :inline="true">
    <div class="m-b-20">
      <label class="m-r-20">单据类型 </label>
      <el-radio-group v-model="params.orderType">
        <el-radio
          v-if="item.key"
          v-for="item in allocateConst.basicOrderType"
          :key="item.key"
          :label="item.key"
        >
          {{item.value}}
        </el-radio>
      </el-radio-group>
    </div>
    <div class="m-b-20">
      <label class="m-r-20">发货方</label>
      <el-select
        v-model="params.storeFrom"
        placeholder="请选择"
      >
        <el-option
          v-for="item in allocateConst.storeLocationList"
          :key="item.key"
          :label="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="m-b-20">
      <el-form-item label="单据备注">
        <el-input
          type="text"
          :value="params.remark"
          placeholder="请输入备注"
          size="medium"
        ></el-input>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import allocateConst from './const.config';
export default {
  name: 'basic-info',
  data () {
    return {
      allocateConst,
      params: {
        orderType: '',
        storeFrom: '',
        remark: ''
      }
    }
  },
  methods:{
    fnA() {
      console.log( 1==1)
    }
  }
}
</script>

<style scope>
.el-input__inner {
  width: 350px;
}
</style>
