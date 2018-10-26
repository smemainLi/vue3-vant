<template>
  <div class="guide">
  <!-- 签到 -->
    <earnTitle :register="register"></earnTitle>

  <!-- 做任务赚积分 title -->
    <couponTitle titleContent="做任务赚积分" class="coupon-title"></couponTitle>
    <!-- 做任务赚积分 -->
    <taskCard class="task-crad" :isActive="true"></taskCard>
    <taskCard class="task-crad" btnText="去分享" @goShare="goShare" :isActive="false" number="1"></taskCard>
    <taskCard class="task-crad" btnText="去邀请" @goShare="goShare" :isActive="false" number="100"></taskCard>

<!-- 更多积分方式 title-->
    <couponTitle titleContent="更多积分方式" class="more"></couponTitle>

  <!-- 更多积分方式 -->
    <!-- 消费后向商家索取积分 -->
    <moreIntegral></moreIntegral>
    <!-- 适用优惠券代金券买单 -->
    <moreIntegral text="使用优惠券代金券买单" :imgUrl="require('@/assets/image/earn/ticket.png')" component="offer"  skipText="去抢劵 >>"></moreIntegral>
  
<!-- 点击分享或者点击去邀请的弹出框 -->
  <van-popup v-model="show" :close-on-click-overlay="false">
    <img src="../../assets/image/earn/share.png" alt="">
    <div class="pupup-model">
      点击<span class="font-color">右上角</span>，分享给好友或朋友圈好友打开你分享的链接并注册成功你即可<span class="font-color">获得积分</span>
    </div>
    <button @click="show=false">知道了</button>
  </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import earnTitle from "@/components/common/earn/earnTitle.vue"
import couponTitle from "@/components/common/guide/couponTitle.vue"
import taskCard from "@/components/common/earn/taskCard.vue"
import moreIntegral from "@/components/common/earn/moreIntegral.vue"

@Component({
  components: {
    earnTitle:earnTitle,
    couponTitle:couponTitle,
    taskCard:taskCard,
    moreIntegral:moreIntegral
  }
})
export default class Guide extends Vue {
  register:Boolean = false;   //是否签到
  show:Boolean = false

  // 分享，子组件触发父组件的方法
  goShare(){
    this.show = true
  }

}
</script>

<style lang="scss" scoped>
.guide{
  .coupon-title{
    margin:15px 0 24px 0;
  }

  .task-crad{
    margin-bottom: 24px;
  }

  .more{
    margin-bottom: 24px;
  }

  [class^="van-popup"]{
    background-color: rgba(0,0,0,0) !important;
    top:32%;
    left: 50% !important;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 378px;
      height: 312px;
      position: fixed;
      top:0;
      right: 0;
    }

    button{
      border:4px solid $color-ff;
      border-radius: 10px;
      height: 88px;
      width: 240px;
      background-color: rgba(0,0,0,0);
      color:$color-ff;
      font-size: $size40;
      font-weight: bold;
      margin-top:62px;
    }
  }

  .van-popup /deep/ .pupup-model{
    font-size: $size40;
    color: $color-ff;
    font-weight:bold;
    width: 604px;
    height: 146px;
    margin-top:350px;

  }

  .font-color{
    color:$color-fb !important;
  }
}
</style>
