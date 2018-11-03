<template>
  <div class="revise-phone-number">
    <myInput icon="icon-phone-number" class="input-one" placeholder="请输入手机号"></myInput>

    <div class="center">
      <myInput icon="icon-graphics" class="input-two" placeholder="请输入图形验证码"></myInput>
      <div class="identifying" v-text="(countDown===0||countDown===60)? '获取验证码':`${countDown}s`" @click="smsCode"></div>
    </div>

    <div class="center">
      <myInput icon="icon-graphics" class="input-two" placeholder="请输入验证码"></myInput>
      <div class="identifying-two">获取验证码</div>
    </div>

    <button>确定</button>
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
  @Action('changePhone')  changePhone     // 修改手机号码
  @Action('getGraphCode') getGraphCode   // 获取图形验证码
  @Action('getSmsCode')   getSmsCode       // 获取手机验证码

  data = {
    imgUrl:'',
    smsCode:'',
    newPhoneNum:''
  }
  countDown:number=60
  time:any

// 图形验证码
  graphCode(){
    this.getGraphCode().then(res=>{
      this.data.imgUrl = res.data.vcodeImage
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }
 
  smsCode(data){
    this.getSmsCode(data).then(res=>{

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
      width: 178px;
      height: 88px;
      border-radius: 10px;
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