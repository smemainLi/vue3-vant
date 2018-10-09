<template>
  <div class="login">
    <headTop></headTop>
    <!-- <img @click="getCodePic()" src="" alt=""> -->
    <!-- <van-cell-group>
      <van-field v-model="phone" required clearable label="手机号码" icon="question" placeholder="请输入用户名" @click-icon="$toast('question')" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" />
      <van-field v-model="phone" required clearable label="手机验证码" placeholder="请输入手机验证码" />
    </van-cell-group>
    <van-button type="primary" @click="getCodePic()">{{mainButton}}</van-button>
    <van-button type="primary" @click="isLogin()">{{checkLogin}}</van-button>
    <div class="testDiv">{{testParam}}</div> -->
    <van-cell-group>
      <van-field v-model="mobile" required clearable label="手机号码" icon="question" placeholder="请输入用户名" @click-icon="$toast('question')" />
      <van-field v-model="pwd" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button slot="button" size="small" type="primary">登录</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { codePic, isLogin } from "@/service/getData";
import { LOGIN } from "../../lang/zh"

import headTop from "@/components/header/head.vue";

@Component({
  components: {
    headTop
  }
})
export default class Login extends Vue {
  mobile = '';
  pwd = '';
  phone = '';
  sms = '';
  testParam = "hh";
  mainButton = LOGIN.TEST01;
  checkLogin = LOGIN.TEST02;

  @Provide()
  title: string = '登录'

  async getCodePic() {
    const res = await codePic();
    console.log(res);
  }
  async isLogin() {
    const res = await isLogin();
    console.log(res);
    console.log(res.data.login);
  }
}
</script>

<style lang="scss" scoped>
.testDiv {
  font-size: 3.5rem;
}
</style>
