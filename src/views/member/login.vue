<template>
  <div class="login">
    <headTop></headTop>

    <van-cell-group>
      <van-field v-model="account" required label="手机号码" icon="question" placeholder="请输入用户名" @click-icon="$toast('question')" />
      <van-field v-model="pwd" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button slot="button" size="small" type="primary" @click="login()">登录</van-button>

  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { codePic, isLogin, login } from "@/service/getData";
import { LOGIN } from "../../lang/zh"
import { getCookie } from '../../config/utils'

import headTop from "@/components/header/head.vue";

@Component({
  components: {
    headTop
  }
})
export default class Login extends Vue {
  account = '13536540921';
  pwd = 'e10adc3949ba59abbe56e057f20f883e';
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
.testDiv {
  font-size: 3.5rem;
}
</style>
