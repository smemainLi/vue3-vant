<template>
  <div class="guide">
  <!-- 上部 -->
    <earnTitile :register="register"></earnTitile>
  <!-- title -->
    <couponTitle titleContent="做任务赚积分" class="coupon-title"></couponTitle>
    <!-- 做任务赚积分 -->
    <taskCard class="task-crad" :isActive="true"></taskCard>
    <taskCard class="task-crad" btnText="去分享" :isActive="false" number="1"></taskCard>
    <taskCard class="task-crad" btnText="去邀请" :isActive="false" number="100"></taskCard>
  
  <!-- 更多积分方式 -->
    <couponTitle titleContent="更多积分方式" class="more"></couponTitle>

    <moreIntegral></moreIntegral>
    <moreIntegral :imgUrl="require('@/assets/image/earn/ticket.png')" component="offer"  skipText="去抢劵 >>"></moreIntegral>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import  path  from "../../config/componentsPath"

@Component({
  components: {
    earnTitile:path.earnTitle,
    couponTitle:path.couponTitle,
    taskCard:path.taskCard,
    moreIntegral:path.moreIntegral
  }
})
export default class Guide extends Vue {
  register:Boolean = false;   //是否签到

  mounted () {
    // this.$toast.success('成功积分')
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
}
</style>
