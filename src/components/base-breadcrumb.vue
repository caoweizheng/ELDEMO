<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="breadItem in list"
      :key="breadItem.path"
      :to="{path: breadItem.path}"
    >{{breadItem.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'base-breadcrumb',
  data() {
    return {
      breadList: []
    }
  },
  created() {
    this.getBreadList()
  },
  methods:{
    getBreadList() {
      this.breadList = this.$route.matched
    }
  },
  computed: {
    list() {
      return this.breadList.filter(item => {
        return item.path && item.path !== '/dashboard'
      })
    }
  },
  watch:{
    $route() {
      this.getBreadList()
    }
  }
}
</script>
