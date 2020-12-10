<template>
  <div class="app-login">
    <h2 class="title">东咕隆东锵</h2>
    <div class="content">
      <el-form>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" @click="submitForm('ruleForm')">
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
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度3 - 10', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 18, message: '长度5 - 18', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async submitForm (ruleFormName) {
      // 登入
      // this.$refs[ruleFormName].validate(async (valid) => {
      //   if(valid){

          let loginRes = await this.$http.login({
            ...this.ruleForm
          })
          if(loginRes) {
            // 缓存session
            this.$router.push('/')
          }
        }
      // })
    // }
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

