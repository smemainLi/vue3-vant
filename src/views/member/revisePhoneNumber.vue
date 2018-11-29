<template>
  <div class="revise-phone-number">
    <myInput icon="icon-phone-number" v-model="data.newPhoneNum" class="input-one" placeholder="请输入手机号"></myInput>

    <div class="center">
      <myInput icon="icon-graphics" v-model="data.vcode" class="input-two" placeholder="请输入图形验证码"></myInput>
      <div class="identifying" @click="graphCode">
        <img class="img" :src="`data:image/png;base64,${imgUrl}`" alt="">
      </div>
    </div>

    <div class="center">
      <myInput icon="icon-graphics" v-model="data.smsCode" class="input-two" placeholder="请输入验证码"></myInput>
      <div class="identifying-two" v-text="(countDown===0||countDown===60)? '获取验证码':`${countDown}s`" @click="smsCode(data)"></div>
      <!-- <div class="identifying-two">获取验证码</div> -->
    </div>

    <button @click="changePhoneMouted(data)">确定</button>
    <p>提示：更换手机号后，下次登录需用新的手机号登录</p>
  </div>
</template>


<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import  path  from "../../config/componentsPath"
import { Action } from 'vuex-class'

// changePhone
@Component({components: { myInput:path.myInput }})

export default class RevisePhoneNumber extends Vue {
  @Action('changePhone')  changePhone      // 修改手机号码
  @Action('getGraphCode') getGraphCode     // 获取图形验证码
  @Action('getSmsCode')   getSmsCode       // 获取手机验证码

  data = {
    newPhoneNum:'',
    smsCode:'',
    vcode:''
  }

  imgUrl:string=""
  countDown:number=60
  time:any
  notClick:boolean = true //禁止点击

// 图形验证码
  graphCode(){
    this.getGraphCode().then(res=>{
      this.imgUrl = res.data.vcodeImage
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

// 获取手机验证码
  smsCode(data){
    if (this.countDown !== 60||!this.notClick) return
    this.$pottingTosts("发送中")
    this.notClick = false

    this.getSmsCode({phoneNum:data.newPhoneNum,vcode:data.vcode})
    .then(res=>{
      this.$toast.success('验证码已发送')
      this.countDownTime()  // 60s倒计时
      this.$toast.clear()   //清除加载动画
    }).catch(err=>{
      this.$toast.fail(err)
      this.graphCode()
      this.notClick = true
      this.$toast.clear()  //清除加载动画
    })
  }

// 修改手机号码
  changePhoneMouted(){
    this.changePhone().then(res=>{
      this.$toast.success('修改完成')
      // 修改完成之后跳转到登陆
      setTimeout(()=>{ this.$router.push({ name: 'login' }) },1000 )
    }).catch(err=>{
      this.$toast.fail(err)
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
        _this.graphCode()
        _this.notClick = true
      }
    }, 1000)
  }

  mounted () {
    this.graphCode()
  }
}
</script>

<style lang="scss" scoped>
.revise-phone-number{
  height: 100%;
  width: calc(100%-64px);
  padding:0 32px;
  background-color: $color-ff;
  overflow: hidden;

  .input-one{
    width: 100%;
    margin:70px 0 0 0;
  }

  .center{
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:24px 0;
    .input-two{
      width: 496px;
    }
    .identifying{
      background-color: $color-e3;
      border:1px $color-e3 solid;
      width: 178px;
      height: 88px;
      border-radius: 10px;
      object-fit: cover;

      img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
    .identifying-two{
      background-color: $color-fb;
      width: 178px;
      height: 88px;
      line-height: 88px;
      text-align: center;
      border-radius: 10px;
      font-size: $size28;
      color:$color-35;
    }
  }

  button{
    height: 88px;
    width: 100%;
    border:0;
    background-color: $color-fb;
    font-size: $size36;
    color:$color-35;
    border-radius: 10px;
    margin-bottom: 31px;
  }

  p{
    color:$color-88;
    font-size: $size26;
  }
}

</style>