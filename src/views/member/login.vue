<template>
  <div class="login">
    <div class="group">
      <div class="input-file">
        <i class="icon-personal-phone"></i>
        <input type="number" @touchstart.native.stop="show=true" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="account" :placeholder="accountPlaceholder">
      </div>
      <div class="input-file password-input">
        <i class="icon-lock"></i>
        <input type="password" v-model="pwd" :placeholder="pwdPlaceholder">
      </div>
      <commonBtn :btnName="btnName" @click.native="login()"></commonBtn>
    </div>
    <div class="tips">
      <router-link tag="div" :to="{name:'openMember'}" class="no-account" v-cloak>{{noAccount}}</router-link>
      <router-link tag="div" :to="{name:'forgetPassword'}" class="forget-pwd" v-cloak>{{forgetPwd}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { LOGIN } from "../../lang/zh";
import { request } from '../../config/request';
import { State, Action } from 'vuex-class';
import commonBtn from "../../components/common/button.vue"
import md5 from 'js-md5';
/* import wx from 'weixin-js-sdk'; */



@Component({
  components: {
    commonBtn
  }
})
export default class Login extends Vue {

  /*  @State(state => state.member.test) test; */
  /* @State('member') member; *///引用的是模块

  /* account = '15816093712';
  pwd = '123456'; */

  /* account = '13536540921';
  pwd = '123456'; */

  /* account = '13434771450';
  pwd = '123456'; */

  account = '13726298724';
  pwd = '123456';

  accountPlaceholder = "请输入手机号码";
  pwdPlaceholder = "请输入密码";
  noAccount = "还没有账号";
  forgetPwd = "忘记密码";

  @Action('authLogin') authLogin;

  btnName: string = '登录';

  login() {
    let data = {
      account: this.account,
      pwd: md5(this.pwd)
    };
    this.authLogin(data).then((res) => {
      this.$toast.success({ duration: 1000, message: '登录成功！' });
      setTimeout(() => this.$router.go(-1), 1000);

    }).catch((err) => {
      this.$toast.fail(err);
      throw new Error(err);
    });
  }

  /* getLocation() {
    wx.ready(function () {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          let speed = res.speed; // 速度，以米/每秒计
          let accuracy = res.accuracy; // 位置精度
        }
      });
    });
  } */

  test() {
  }
  mounted() {
    /* this.getLocation(); */
    this.test();
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
      margin-bottom: 24px;
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
    .password-input {
      margin-bottom: 0;
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

