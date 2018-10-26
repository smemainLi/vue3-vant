<template>
  <div class="forget-password">
    <div class="content">
      <!-- 手机号 -->
      <myInput class="myInput" v-model="phoneNumber" placeholder='请输入手机号' type="number" icon='icon-phone-number'></myInput>
     
      <!-- 图形验证码 -->
      <div class="only">
        <myInput class="myInput width" placeholder='请输入图形验证码' icon='icon-graphics'></myInput>
        <div class="smallDiv"></div>
      </div>
      
      <!-- 验证码 -->
      <div class="only">
        <myInput class="myInput width" placeholder='请输入验证码' icon='icon-verification-code'></myInput>
        <div class="smallDiv color">获取验证码</div>
      </div>
      
      <!-- 设置密码 -->
      <myInput class="myInput" placeholder='请设置登录密码（6-12位）' icon='icon-lock'></myInput>
      
      <!-- 确认密码 -->
      <myInput class="myInput" placeholder='请输入验证码' icon='icon-lock'></myInput>

      <!-- 完成 -->
      <button class="button" @click="finish()">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import myInput from '@/components/common/myInput.vue'


@Component({
  components: {
    myInput
  }
})
export default class ForgetPassword extends Vue {
  phoneNumber:number= 121
  finish():void{
    this.$router.push({name:'login'})
  }

  @Watch('phoneNumber')
  phoneChange(){
    console.log(this.phoneNumber,'父组件')
  }
}
</script>

<style lang="scss" scoped>
.forget-password{
  height: 100%;
  background-color: $color-ff;

  .only{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    
    .smallDiv{
      height: 88px;
      width: 178px;
      line-height: 88px;
      border-radius:10px;
      border:1px solid #E3E3E3;
      background-color:#E3E3E3;
      margin-left: 12px;
    }
  }
  
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:$color-ff;
    padding-top: 70px;
    .myInput{
      width: 686px;
      margin-bottom: 24px;
    }
  }

  .button{
    border: 0;
    width: 686px;
    height: 88px;
    border-radius: 10px;
    background-color:$color-fb;
    color:#353535;
    font-size: $size36;
    font-weight:500;
    margin-top:76px;
  }

}


.width{
  width: 496px !important;
}
.color{
  background-color:#FBDE19 !important;
  font-size: $size28;
  text-align: center;
  color: #353535;
  font-weight:500;
}



</style>