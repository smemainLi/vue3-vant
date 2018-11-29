<template>
  <div class="open-member">
    <div class="content">
      <!-- 邀请码 -->
      <!-- <myInput v-model="data.invitationCode" :inputValue="data.invitationCode" class="myInput" placeholder='请输入邀请码（选填）' icon='icon-invite'></myInput> -->

      <!-- 手机号 -->
      <myInput v-model="data.phoneNum" class="myInput" placeholder='请输入手机号' icon='icon-phone-number'></myInput>

      <!-- 图形验证码 -->
      <div class="only">
        <myInput v-model="data.vcode" class="myInput width" placeholder='请输入图形验证码' icon='icon-graphics'></myInput>
        <div class="smallDiv" @click="getVcodeUrl">
          <img class="img" :src="`data:image/png;base64,${baseUrl}`" alt="">
        </div>
      </div>

      <!-- 验证码 -->
      <div class="only">
        <myInput v-model="data.smsCode" class="myInput width" placeholder='请输入验证码' icon='icon-verification-code'></myInput>
        <div class="smallDiv" style="border:0" v-text="(countDown===0||countDown===60)? '获取验证码':`${countDown}s`" @click="getCode"></div>
      </div>

      <!-- 设置密码 -->
      <myInput v-model="data.pwd" class="myInput" placeholder='请设置登录密码（6-12位）' icon='icon-lock'></myInput>

      <!-- 完成 -->
      <button class="button" @click="openMember">同意协议并注册</button>

      <!-- 协议 已开通 -->
      <div class="foot">
        <div class="agree">
          <div>已阅读并同意</div>
          <router-link tag="div" :to="{name:'protocol', params:{type:1}}" class="color2">《用户协议》</router-link>
        </div>
        <router-link tag="div" :to="{name:'login'}">
          已有账号
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import myInput from '@/components/common/myInput.vue'
import { Action } from 'vuex-class'
import md5 from 'js-md5';

@Component({ components: { myInput } })

export default class OpenMember extends Vue {
  @Action('getGraphCode') getGraphCode       // 获取图形验证码
  @Action('getSmsCode') getSmsCode         // 获取短信验证码
  @Action('openMember') openMemberMethod   // 开通会员卡
  @Action('bindInvite') bindInvite         // 邀请积分

  data = {
    inviterOpenId: JSON.parse((<any>localStorage).getItem("inviterOpenId"))? JSON.parse((<any>localStorage).getItem("inviterOpenId")):"",     //邀请码
    phoneNum: "",	         //手机号码
    pwd: "",	               //密码
    smsCode: "",           //短信验证码
    vcode: ""               //图形验证码
  }

  baseUrl: string = ""      //图形验证码（base64）
  countDown: number = 60    //倒计时
  time: any                 //计时器
  notClick: boolean = true //禁止点击

  // 获取手机验证码
  getCode(): void {
    if (this.countDown !== 60 || !this.notClick) return
    this.$pottingTosts("发送中")
    this.notClick = false

    this.getSmsCode({   phoneNum: this.data.phoneNum,
                        vcode: this.data.vcode    })
      .then(res => {
        this.$toast.success('验证码已发送');
        this.countDownTime()    // 60s倒计时
        this.$toast.clear()     //清除加载动画
      })
      .catch(err => {
        this.$toast.fail(err);
        this.getVcodeUrl()      // 输入图形验证码错误后，就更新一个图形验证码
        this.notClick = true
        this.$toast.clear()     //清除加载动画
      })
  }

  // 计时器
  countDownTime(): void {
    let _this = this
    this.countDown = 60
    this.time = setInterval(function () {
      _this.countDown--
      if (_this.countDown === 0) {
        clearInterval(_this.time)
        _this.countDown = 60
        // 60s 之后重新请求一个图形验证码
        _this.getVcodeUrl()
        _this.notClick = true
        _this.$toast.clear() 
      }
    }, 1000)
  }

  // 开通会员卡
  openMember(): void {
    if (!this.testInfo()) return
    this.$pottingTosts("")
    this.openMemberMethod({ ...this.data, pwd: md5(this.data.pwd) }).then(res => {

      // +++++++ 如果是别人分享出去的，新用户啊注册的就加相应积分 +++++++
      // let inviteeOpenId = JSON.parse((<any>localStorage).getItem("inviteeOpenId"))
      // let inviterOpenId = JSON.parse((<any>localStorage).getItem("inviterOpenId"))
      // if (inviteeOpenId && inviterOpenId) {
      //   this.bindInvite({ inviteeOpenId, inviterOpenId }).then(res => {
      //     this.$toast.success("注册成功")
      //     this.$router.push({ name: 'coupon' })
      //   }).catch(err => {
      //     this.$toast.success("注册成功")
      //     this.$router.push({ name: 'coupon' })
      //   })
      //   return
      // }

      
      //   ============== 结束 ==================
      this.$toast.clear()
      // 跳到我的卡券包
      this.$toast.success("注册成功")
      setTimeout(()=>{ this.$router.push({ name: 'coupon' }) },1000 )
      
    }).catch(err => {
      this.$toast.fail(err)
    })
  }

  // 检验信息是否填写完整和密码是否在6-12这个区间
  testInfo() {
    // 信息是否都填写，邀请码可不填
    for (let item in this.data) {
      if (this.data[item] === '' && item !== 'invitationCode') {
        this.$toast.fail("请完善信息后再提交");
        return false
      }
    }
    // 密码
    let data = this.data
    // 6 - 12这个区间才正确
    if (data.phoneNum.length !== 11) {
      this.$toast.fail("请输入完整的手机号码");
      return false
    } else if (data.pwd.length < 6 || data.pwd.length > 12) {
      this.$toast.fail("密码要在6-12位");
      return false
    }
    return true
  }


  // 获取图形验证码
  getVcodeUrl(): void {
    this.getGraphCode().then(res => {
      this.baseUrl = res.data.vcodeImage
    }).catch(err => {
      this.$toast.fail(err)
    })
  }

  created() {
    this.getVcodeUrl()
  }

}
</script>

<style lang="scss" scoped>
.open-member {
  height: calc(100%-70px);
  background-color: $color-ff;
  padding-top: 70px;

  .only {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .smallDiv {
      height: 88px;
      width: 178px;
      line-height: 88px;
      text-align: center;
      border-radius: 10px;
      border: 1px solid #e3e3e3;
      background-color: $color-fb;
      margin-left: 12px;
      object-fit: cover;

      .img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  .foot {
    width: 686px;
    display: flex;
    justify-content: space-between;
    margin-top: 76px;
    font-size: $size28;
    color: #353535;

    .agree {
      width: 400px;
      display: flex;
      justify-content: flex-start;
    }
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
}
.color2 {
  color: #fbde19;
}
</style>
