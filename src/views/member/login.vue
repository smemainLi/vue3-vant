<template>
  <div class="login">
    <div class="group">
      <div class="input-file">
        <i class="icon-personal-phone"></i>
        <input type="text" v-model="account" placeholder="请输入手机号码">
      </div>
      <div class="input-file">
        <i class="icon-lock"></i>
        <input type="password" v-model="pwd" placeholder="请输入手机号码">
      </div>
      <button class="input-button">登录</button>
    </div>
    <div class="tips">
      <div class="no-account">还没有账号</div>
      <div class="forget-pwd">忘记密码</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { codePic, isLogin, login } from "@/service/getData";
import { LOGIN } from "../../lang/zh"
import { getCookie } from '../../config/utils'

@Component({
  components: {
  }
})
export default class Login extends Vue {
  account = '';
  pwd = '';
  phone = '';
  sms = '';
  testParam = "hh";
  mainButton = LOGIN.TEST01;
  checkLogin = LOGIN.TEST02;

  @Provide()
  title: string = '登录'

  /* async getCodePic() {
    const res = await codePic();
    console.log(res);
  }
  async isLogin() {
    const res = await isLogin();
    console.log(res);
    console.log(res.data.login);
  } */

  async login() {
    /**
     * 测试账号
     * 13536540921
     * 测试密码
     * e10adc3949ba59abbe56e057f20f883e
     */
    const res = await login(this.account, this.pwd);
    console.log(res);
    console.log(res.message);
    const coo1 = await getCookie('qi_openid');
    console.log(coo1);
  }
}
</script>

<style lang="scss" scoped>
.login {
  .group {
    text-align: center;
    margin-top: 74px;
    .input-file {
      position: relative;
      margin-top: 24px;
      i {
        position: absolute;
        left: 53px;
        top: 29px;
        font-size: 34px;
        color: #888888;
      }
      input {
        /* outline: none; */
        width: 617px;
        height: 88px;
        font-size: 28px;
        border: 1px solid #e5e5e5;
        border-radius: 10px;
        padding-left: 69px;
      }
    }
    .input-button {
      margin-top: 100px;
      font-size: 36px;
      width: 686px;
      height: 88px;
      border: 0;
      background: #fbde19;
      border-radius: 10px;
    }
  }
  .tips {
    margin-top: 75px;
    font-size: 28px;
    color: #353535;
    .no-account {
      margin-left: 32px;
      float: left;
    }
    .forget-pwd {
      margin-right: 32px;
      float: right;
    }
  }
}
</style>
