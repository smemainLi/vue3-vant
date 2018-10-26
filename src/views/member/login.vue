<template>
  <div class="login">
    <div class="group">
      <div class="input-file">
        <i class="icon-personal-phone"></i>
        <input type="number" @touchstart.native.stop="show=true" v-model="account" :placeholder="accountPlaceholder">
      </div>
      <div class="input-file">
        <i class="icon-lock"></i>
        <input type="password" v-model="pwd" :placeholder="pwdPlaceholder">
      </div>
      <commonBtn @click.native="login()"></commonBtn>
    </div>
    <div class="tips">
      <router-link tag="div" :to="{name:'openMember'}" class="no-account" v-cloak>{{noAccount}}</router-link>
      <router-link tag="div" :to="{name:'forgetPassword'}" class="forget-pwd" v-cloak>{{forgetPwd}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { codePic, isLogin, login } from "@/service/getData";
import { LOGIN } from "../../lang/zh";
import { getCookie } from '../../config/utils';
import commonBtn from "../../components/common/button.vue"
import md5 from 'js-md5';

@Component({
  components: {
    commonBtn
  }
})
export default class Login extends Vue {
  account = '13536540921';
  pwd = '';

  accountPlaceholder = "请输入手机号码";
  pwdPlaceholder = "请输入密码";
  noAccount = "还没有账号";
  forgetPwd = "忘记密码";

  @Provide()
  btnName: string = '登录';

  async login() {
    const res = await login(this.account, this.pwd = md5(this.pwd));
    console.log(res);
    console.log(res.message);
  }

}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: $color-ff;
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
        color: $color-88;
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

