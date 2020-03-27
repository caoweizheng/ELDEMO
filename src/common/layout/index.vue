<template>
  <el-container>
    <el-header style="background: red;">
      <app-header />
    </el-header>

    <el-container>
      <!-- <el-aside> -->
        <app-navigation />
      <!-- </el-aside> -->
      <el-main>
        <app-main />
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import appHeader from "./appHeader"
import appNavigation from "./appNav"
import appMain from "./appMain";
import { Container, Header, Aside, Main } from 'element-ui'
export default {
  name: 'layout',
  components: {
    appHeader,
    appNavigation,
    appMain,
    ElContainer: Container,
    ElHeader: Header,
    ElAside: Aside,
    ElMain: Main,
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-main {
  padding: 0;
}
</style>


