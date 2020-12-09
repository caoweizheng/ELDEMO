<template>
  <el-row type="flex" justify="space-between" class="row-bg">
    <el-col :span="24">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="基础信息"></el-step>
        <el-step title="商品信息"></el-step>
        <el-step title="已完成"></el-step>
      </el-steps>
    </el-col>
    <el-col :span="8">
      <div v-if="active === 1">
        <el-button type="info" @click="cancel">取消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </div>
      <div v-if="active === 2">
        <el-button type="primary" @click="save">保存</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
      <div v-if="active === 3">
        <el-button type="info" @click="toShipment">返回列表</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app-steps',
  data(){
    return {
      currentStep: 1,
      active: 1
    }
  },
  methods:{
    cancel(){

    },
    next() {
      this.active ++
    },
    save() {
      this.$alert('保存成功')
    },
    submit() {
      this.active ++
    },
    toShipment() {

    }
  }
};
</script>
