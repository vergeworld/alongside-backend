<template>
  <div class="index-view" :style="{
    backgroundImage: `linear-gradient(135deg, ${leftColor}, ${rightColor})`
  }">
    <div class="login-wrapper">
      <div class="left-section">
        <img src="./../../assets/images/identify0.png" alt="">
      </div>
      <div class="right-section">
        <h3 class="title">Alonside Admin</h3>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="account">
            <el-input prefix-icon="el-icon-mobile-phone" placeholder="账号\手机号\邮箱" type="text" v-model="ruleForm.account"
              auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-view" placeholder="请输入密码" type="password" v-model="ruleForm.password"
              auto-complete="off"></el-input>
          </el-form-item>
          <div class="validator-box">
            <el-form-item prop="validator">
              <el-input type="text" prefix-icon="el-icon-circle-check-outline" placeholder="验证码"
                v-model="ruleForm.validator" auto-complete="off"></el-input>
            </el-form-item>
            <span class="validator-text">{{ defineValidator }}</span>
          </div>
          <el-form-item>
            <el-button class="btn-submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import generateColor from '@/unit/generateColor'
import { validateAccount, validatePassword, validateCode } from '@/unit/validate'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      leftColor: '#000000',
      rightColor: '#000000',
      defineValidator: 'XMBA',
      ruleForm: {
        account: '',
        password: '',
        validator: ''
      },
      rules: {
        account: [
          { validator: validateAccount, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        validator: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.leftColor = generateColor()
    this.rightColor = generateColor()
  },
  mounted() { },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const userInfo = {
            name: 'holysky',
            token: 'Bearer xxx'
          }
          this.$store.commit('setUserInfo', userInfo)
          this.$router.replace('/home')
          this.$message({ message: '登录成功！', type: 'success' })
        } else {
          alert('error submit!!')
          this.$message.error('登录失败！')
          return false
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.index-view {
  height: 100vh;
  display: flex;

  .login-wrapper {
    width: 600px;
    margin: auto;
    display: flex;
    background-color: white;
    border-radius: 10px;
    opacity: .8;

    .left-section {
      img {
        width: 300px;
      }
    }

    .right-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 20px 0 20px;

      /deep/.el-form-item__content {
        margin: 0 !important;
      }

      .title {
        color: v-bind(rightColor);
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 22px;
      }

      .validator-box {
        display: flex;
        justify-content: space-between;

        .validator-text {
          line-height: 40px;
          height: 40px;
          padding: 0 10px;
          border-radius: 5px;
          margin-left: 20px;
          background-color: v-bind(leftColor);
          color: white;
        }
      }

      .btn-submit {
        width: 100%;
      }
    }
  }
}
</style>
