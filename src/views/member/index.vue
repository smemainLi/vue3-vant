<template>
  <div class="member">
    <!-- 会员信息头部 -->
    <dataTop :userInfo="userInfo"></dataTop>

    <!-- 功能卡片tab 上-->
    <div class="center">
      <dataCard borderColor title="我的资料" text="完善即+5积分" component="selectData"></dataCard>
      <dataCard title="135***66896"  text="修改手机号码" component="revisePhoneNumber" :imgUrl="require('../../assets/image/member/phone.png')"></dataCard>
    </div>

    <!-- 功能卡片tab 下-->
    <div class="bottom">
      <dataCard borderColor title="修改密码" component="revisePassword" :imgUrl="require('../../assets/image/member/revise.png')"></dataCard>
      <dataCard title="联系我们" :imgUrl="require('../../assets/image/member/contact.png')"></dataCard>
    </div>

    <!-- bar -->
    <bar class="bar"></bar>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import dataTop from "@/components/common/member/dataTop.vue"
import dataCard from "@/components/common/member/dataCard.vue"
import bar from "@/components/common/member/bar.vue"

  @Component({
    components: {
      dataTop,
      dataCard,
      bar
    }
  })


export default class Member extends Vue {
  userInfo={
    name:"小小星星高高挂",                               //用户名
    myIntegral:"16850",                                 //我的积分
    integrationRanking:"112",                           //积分排名
    imgUrl:require("@/assets/image/coupon/store.png"),  //头像
    qrCode:require("@/assets/image/member/QR-code.png") //二维码
  }
}
</script>

<style lang="scss" scoped>
.member{
  .center{
    margin: 24px 0;
  }
  .bar{
    position: fixed;
    bottom:0;
    left: 0;
  }
}


</style>