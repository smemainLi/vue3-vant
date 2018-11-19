<template>
  <div class="forget-password">
    <div class="content">
      <!-- 手机号 -->
      <myInput class="myInput" v-model="data.phoneNum" placeholder='请输入手机号' icon='icon-phone-number'></myInput>

      <!-- 图形验证码 -->
      <div class="only">
        <myInput class="myInput width" v-model="data.vcode" placeholder='请输入图形验证码' icon='icon-graphics'></myInput>
        <div class="smallDiv" @click="getVcodeUrl">
          <img class="img" :src="`data:image/png;base64,${baseUrl}`" alt="">
        </div>
      </div>

      <!-- 验证码 -->
      <div class="only">
        <myInput class="myInput width" v-model="data.smsCode" placeholder='请输入验证码' icon='icon-verification-code'></myInput>
        <div class="smallDiv color" v-text="(countDown===0||countDown===60)? '获取验证码':`${countDown}s`" @click="getCode"></div>
      </div>

      <!-- 设置密码 -->
      <myInput class="myInput" v-model="data.newPwd" placeholder='请设置登录密码（6-12位）' icon='icon-lock'></myInput>

      <!-- 确认密码 -->
      <myInput class="myInput" v-model="data.resetPwd" placeholder='请再次确认密码' icon='icon-lock'></myInput>

      <!-- 完成 -->
      <button class="button" @click="finish(data)">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import myInput from '@/components/common/myInput.vue'
import { Action } from 'vuex-class'
import md5 from 'js-md5'
@Component({components: {myInput}})
export default class ForgetPassword extends Vue {
  data = {
    phoneNum: "",            //手机号码
    vcode: "",               //图形验证码
    smsCode: "",             //验证码
    newPwd: "",              //密码
    resetPwd: ""             //再次输入密码
  }
  baseUrl: string = ""
  countDown: number = 60     // 验证码倒计时
  time: any                  //计时器
  notClick:boolean = true //禁止点击

  // vuex action
  @Action('forgetPassword') resetPassword  // 修改密码
  @Action('getGraphCode')   getGraphCode   // 获取图形验证码
  @Action("getSmsCode")     getSmsCode     //获取手机验证码


  // 修改密码
  finish(data): void {
    if (!this.passwordMethod()) return
    // 修改密码请求
    this.resetPassword({...data,newPwd:md5(data.newPwd)}).then(res => {
      this.$toast.success('修改密码成功');
      let _this = this
      setTimeout(function(){ 
        _this.$router.push({ name: 'login' })
       }, 1000);
    })
      .catch(err => {
        this.$toast.fail(err)
        this.getVcodeUrl()
      })
  }

  // 密码和再次输入密码
  passwordMethod() {
    for (let item in this.data) {
      if (this.data[item] === '') {
        this.$toast.fail("请完善信息后再提交");
        return false
      }
    }
    let password = this.data.newPwd
    if (password.length < 6 && password.length > 12) {
      this.$toast.fail("密码要在6-12位");
      return false
    } else if(this.data.phoneNum.length!==11){
      this.$toast.fail("请输入完整的电话号码");
      return false
    } else if (password !== this.data.resetPwd) {
      this.$toast.fail("两次输入的密码不一致");
      return false
    } 
    return true
  }

  // 获取手机验证码
  getCode() {
    if (this.countDown !== 60||!this.notClick) return
    this.notClick = false

    this.getSmsCode({  phoneNum: this.data.phoneNum,
                       vcode: this.data.vcode    })
      .then(res => {
        // 60s倒计时
        this.countDownTime()
      })
      .catch(err => {
        this.$toast.fail(err);
        // 输入图形验证码错误后，就更新一个图形验证码
        this.getVcodeUrl()
        this.notClick = true
      })
  }

  // 获取图形验证码
  getVcodeUrl() {
    this.getGraphCode().then(res => {
      this.baseUrl = res.data.vcodeImage
      // 当重新获取图形验证码的时候，就清除计时器
      clearInterval(this.time)
      this.countDown = 60
    })
      .catch(err => {
        this.$toast.fail(err);
      })
  }

  // 计时器
  countDownTime() {
    let _this = this
    this.countDown = 60
    this.time = setInterval(function () {
      _this.countDown--
      if (_this.countDown === 0) {
        clearInterval(_this.time)
        _this.countDown = 60
        _this.getVcodeUrl()
      }
    }, 1000)
  }

  created() {
    this.getVcodeUrl()
  }

}
</script>

<style lang="scss" scoped>
.forget-password {
  height: 100%;
  background-color: $color-ff;

  .only {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .smallDiv {
      height: 88px;
      width: 178px;
      line-height: 88px;
      border-radius: 10px;
      border: 1px solid #e3e3e3;
      background-color: #e3e3e3;
      margin-left: 12px;
      object-fit: cover;

      .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $color-ff;
    padding-top: 70px;
    .myInput {
      width: 686px;
      margin-bottom: 24px;
    }
  }

  .button {
    border: 0;
    width: 686px;
    height: 88px;
    border-radius: 10px;
    background-color: $color-fb;
    color: #353535;
    font-size: $size36;
    font-weight: 500;
    margin-top: 76px;
  }
}

.width {
  width: 496px !important;
}
.color {
  background-color: #fbde19 !important;
  font-size: $size28;
  text-align: center;
  color: #353535;
  font-weight: 500;
  border: 0 !important;
}
</style>