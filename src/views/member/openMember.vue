<template>
  <div class="open-member">
    <div class="content">
      <!-- 邀请码 -->
      <myInput class="myInput" placeholder='请输入邀请码（选填）' type="number" icon='icon-invite'></myInput>

      <!-- 手机号 -->
      <myInput class="myInput" placeholder='请输入手机号' type="number" icon='icon-phone-number'></myInput>


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

      <!-- 完成 -->
      <button class="button" @click="openMember">同意协议并注册</button>

      <!-- 协议 已开通 -->
      <div class="foot">
        <div class="agree">
          <div>已阅读并同意</div>
          <div class="color2">《用户协议》</div>
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




@Component({
  components: {
    myInput
  }
})
export default class OpenMember extends Vue {

  openMember(){
    // 跳到我的卡券包
    this.$router.push({name:'coupon'})
  }

}
</script>

<style lang="scss" scoped>
.open-member{
  height: calc(100%-70px);
  background-color: $color-w;
  padding-top: 70px;

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
    background-color:$color-y;
    color:#353535;
    font-size: $size36;
    font-weight:500;
    margin-top:76px;
  }

  .foot{
    width: 686px;
    display: flex;
    justify-content: space-between;
    margin-top: 76px;
    font-size: $size28;
    color: #353535;

    .agree{
      width: 400px;
      display: flex;
      justify-content: flex-start;
    }
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
.color2{
  color: #FBDE19;
}
</style>
