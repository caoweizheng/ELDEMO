<template>
  <div class="app-header">
    <div class="nav-auto-btn">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="$store.commit('AUTO_COLLAPSE')"/>
      <span class="title">
        洞幺洞幺这是总部
      </span>
    </div>
    <p>
      洞拐洞拐
    </p>
    <p class="logout">
      <el-button type="text" @click="logout">
      {{$store.state.user.userInfo.userName}} - {{$store.state.user.userInfo.nickName}} &nbsp;注销
      </el-button>
    </p>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  name: 'app-header',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
    }
  },
  computed: {
    isCollapse () {
      return this.$store.state.common.autoCollapse
    }
  },
  methods:{
    logout () {
      // 登出
      // 跳转登录，清空session
      this.$store.commit('clearToken');
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 10px;
  line-height: 60px;
  background-color: #000;
  color: #fff;
  .nav-auto-btn {
    font-size: 22px;
    line-height: 60px;
    i {
      margin-right: 5px;
      color: #fff;
    }
  }
}
.el-button {
  padding: 0;
  color: #fff;
}
</style>


