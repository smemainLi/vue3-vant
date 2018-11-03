<template>
  <div class="member-info">
    <!-- 等级信息 -->
  <rankTop class="top" :memberLevel="memberLevel"></rankTop>

   <!-- 成长值 -->
  <growUpValue>
    <growUpValueCard :borderColor="content.length==(index+1)? false:true" v-for="(item,index) in content" :key="index"></growUpValueCard>
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
    image:'',
    name:"",
    needCondition:"",
    nextCondition:"",
    nextLevelName:"",
    nowCondition:""
  }

  @Action('memberRights')   memberRights         // 会员权益
  @Action('memberIndex')    memberIndex          // 等级首页展示


   RightsMethod(){
     this.memberIndex().then(res=>{
       this.conditionDesc.title = res.data.conditionDesc.name
       this.conditionDesc.contents = res.data.conditionDesc.content
       this.memberLevel = res.data.memberLevel
     })
   }

  //  Rights(){
  //   this.memberRights().then(res=>{
  //     this.title = res.data.name
  //     this.contents = res.data.content
  //   }).catch(err=>{
  //     this.$toast.fail(err)
  //   })
  //  }

   mounted () {
    this.RightsMethod()
    // this.Rights()
   }

  
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