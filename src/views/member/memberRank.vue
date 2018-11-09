<template>
  <div class="member-info">
    <!-- 等级信息 -->
  <rankTop class="top" :memberLevel="memberLevel"></rankTop>

   <!-- 获取成长值方法 -->
  <growUpValue>
    <growUpValueCard :getValueText="memberArr.includes(key)? memberRule[key+'Text']:''" :getValue="item" v-if="memberRule[key+'Status']===1? true:false" v-for="(item,key,index) in memberRule" :key="index"></growUpValueCard>
  </growUpValue>

  <!-- 成长值说明 -->
  <div class="foot">
    <growValueIllustrate :title="conditionDesc.title" :content="conditionDesc.contents"></growValueIllustrate>
  </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import rankTop from "@/components/common/member/rankTop.vue"
import growUpValue from "@/components/common/member/growUpValue.vue"
import growUpValueCard from "@/components/common/member/growValueCard.vue"
import growValueIllustrate from "@/components/common/member/growValueIllustrate.vue"
import { Action } from 'vuex-class'

@Component({
  components: {
    rankTop,
    growUpValue,
    growUpValueCard,
    growValueIllustrate
  }
})
export default class MemberInfo extends Vue {
  // 成长值说明
  conditionDesc = {
    title:"",
    contents:""
  }

  // 等级相关信息
  memberLevel = {
    image:'',            //等级图标
    name:"",             //等级名称
    needCondition:"",    //距离下一级需要成长值
    nextCondition:"",    //下一级目标成长值
    nextLevelName:"",    //下一等级名称
    nowCondition:""      //当前成长值
  }

  // 获取成长值   //0：禁用，1：启用
  memberRule = { }
  
  memberArr = ['daySign','lottery','parkingPayment','snatchRedArEnvelopes','verificationCoupon','verificationVouchers']
  memberBol = ['daySignStatus','lotteryStatus','parkingPaymentStatus','snatchRedArEnvelopesStatus','verificationCouponStatus','verificationVouchersStatus']
  memberText = {
    daySignText:"每日签到获得成长值",
    lotteryText:"抽奖1次获得成长值",
    parkingPaymentText:"积分停车1次获得成长值",
    snatchRedArEnvelopesText:"抢AR红包获得成长值",
    verificationCouponText:"核销优惠券一次获得成长值",
    verificationVouchersText:"核销代金券获得成长值"
  }
  // {
  //   daySign:Number,                       //每日签到获得成长值
  //   daySignStatus:Number,   
  //   lottery:Number,                       //抽奖1次获得成长值
  //   lotteryStatus:Number, 
  //   parkingPayment:Number,                //积分停车1次获得成长值
  //   parkingPaymentStatus:Number,    
  //   snatchRedArEnvelopes:Number,          //抢AR红包获得成长值
  //   snatchRedArEnvelopesStatus:Number,      
  //   verificationCoupon:Number,            //核销优惠券一次获得成长值
  //   verificationCouponStatus:Number,
  //   verificationVouchers:Number,          //核销代金券获得成长值
  //   verificationVouchersStatus:Number
  // }

  @Action('memberIndex')    memberIndex          // 等级首页展示


   RightsMethod(){
     this.memberIndex().then(res=>{
      this.conditionDesc.title = res.data.conditionDesc.name
      this.conditionDesc.contents = res.data.conditionDesc.content
      this.memberLevel = res.data.memberLevel
      this.memberRule = {...res.data.memberRule,...this.memberText}
     }).catch(err=>{
       this.$toast.fail(err)
     })
   }

   mounted () {
    this.RightsMethod()
   }

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