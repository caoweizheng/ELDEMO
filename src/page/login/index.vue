<template>
  <div class="app-login">
    <h2 class="title">东咕隆东锵</h2>
    <div class="content">
      <el-form>
        <el-form-item>
          <el-input v-model="username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" @click="login">
              登录
          </el-button>
          <a class="forget" href="">忘记密码？</a>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Form, FormItem, Input, Button } from "element-ui";
export default {
  name: 'Login',
  components: {
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input,
    [Button.name]: Button,
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // 登入
      // 缓存session

      this.$router.push('/')
    }
  }

}
</script>

<style lang="scss" scoped>
.app-login {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  height: 300px;
  padding-top: 50px;
  margin: auto 0;
  background-color: #2c3142;
  .title {
    text-align: center;
    color: #eee;
    margin-bottom: 10px;
  }
  .content {
    width: 300px;
    margin: auto;
  }
  .login-btn {
    width: 100px;
    background: #ccc;
    color: #2c3142;
    margin-right: 20px;
  }
  .forget {
    color: #fff;
  }
}
</style>

