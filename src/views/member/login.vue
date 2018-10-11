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
import { codePic, isLogin, getAuthorizeUrl, login } from "@/service/getData";
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
  pwd = '4A2F8C7EC323C0EFDFF54CCBAF64CA91';
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

  async getAuthorizeUrl() {
    const res = await getAuthorizeUrl();
    console.log(res);
  }

  async login() {
    /**
     * 测试账号
     * 13536540921
     * 测试密码
     * 4A2F8C7EC323C0EFDFF54CCBAF64CA91
     */
    const res = await login(this.account, this.pwd);
    console.log(res);
    console.log(res.message);
    if (res.message === '操作成功') {
      console.log(`${location.origin}/member/login`);
      const coo = await getCookie('1');
      console.log(coo);
    }
  }
}
</script>

<style lang="scss" scoped>
.testDiv {
  font-size: 3.5rem;
}
</style>
