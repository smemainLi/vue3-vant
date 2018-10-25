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
      <commonBtn></commonBtn>
    </div>
    <div class="tips">
      <div class="no-account">还没有账号</div>
      <router-link tag="div" :to="{name:'forgetPassword'}" class="forget-pwd">忘记密码</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { codePic, isLogin, login } from "@/service/getData";
import { LOGIN } from "../../lang/zh";
import { getCookie } from '../../config/utils';
import commonBtn from "../../components/common/button.vue"

@Component({
  components: {
    commonBtn
  }
})
export default class Login extends Vue {
  account = '';
  pwd = '';

  @Provide()
  btnName: string = '登录';
  /* mainButton = LOGIN.TEST01; */

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
  height: 100%;
  background-color: $color-w;
  .group {
    text-align: center;
    padding-top: 74px;
    .input-file {
      position: relative;
      margin-top: 24px;
      i {
        position: absolute;
        left: 53px;
        top: 36px;
        font-size: 34px;
        color: $color-g2;
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
  }
  .tips {
    margin-top: 75px;
    font-size: 28px;
    color: $color-35;
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

