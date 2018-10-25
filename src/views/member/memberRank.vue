<template>
  <div class="member-info">
    <!-- 等级信息 -->
   <rankTop class="top"></rankTop>

   <!-- 成长值 -->
  <growUpValue>
    <growUpValueCard :borderColor="content.length==(index+1)? false:true" v-for="(item,index) in content" :key="index"></growUpValueCard>
  </growUpValue>

  <!-- 成长值说明 -->
  <div class="foot">
    <growValueIllustrate></growValueIllustrate>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import rankTop from "@/components/common/member/rankTop.vue"
import growUpValue from "@/components/common/member/growUpValue.vue"
import growUpValueCard from "@/components/common/member/growValueCard.vue"
import growValueIllustrate from "@/components/common/member/growValueIllustrate.vue"
@Component({
  components: {
    rankTop,
    growUpValue,
    growUpValueCard,
    growValueIllustrate

  }
})
export default class MemberInfo extends Vue {
  
  content:Array<any> = [
    {
      textLeft:'核销1张优惠券',
      textRight:"+5",
    },
    {
      textLeft:'核销1张代金券',
      textRight:"+5",
    },
    {
      textLeft:'积分停车1次',
      textRight:"+5",
    },
    {
      textLeft:'打卡',
      textRight:"+5",
    },
    {
      textLeft:'抽奖一次',
      textRight:"+5",
    },
    {
      textLeft:'抢AR红包1次',
      textRight:"+5",
    },
    
  ]

}
</script>

<style lang="scss" scoped>
.member-info{
  .top{
    margin-bottom: 24px;
  }
  .foot{
    margin-top:26px;
  }
}
</style>