<template>
  <div class="waiteUse">
    
    <!-- 店铺信息 -->
		<contentModel :contentText='contentText'></contentModel>

    <!-- 券码和二维码 -->
    <waitUse :codeMsg="codeMsg"></waitUse>

    <!-- 有效期及时间和适用范围 -->
		<scope :scopeMsg="scopeMsg" v-if="scopeMsg.length!==0"></scope>

  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import contentModel from "@/components/common/coupon/contentModel.vue"
import waitUse from "@/components/common/coupon/waitUse.vue"
import scope from "@/components/common/coupon/scope.vue"
import { Action } from 'vuex-class'

@Component({
  props:["id"], 
  components: { contentModel,waitUse,scope }
})

export default class WaitUses extends Vue {
id
scopeMsg:Array<any> = []
  
contentText = {}  // 店铺信息
codeMsg = {}      // 券码和二维码

@Action('couponDetail') couponDetail  // 优惠券待使用详情

  couponDetailMethod(){
    this.couponDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
      this.contentText = res.data
      this.codeMsg = res.data
      this.$Coupon.dataHandling(res,this.scopeMsg)
     })
    })
  }
  created () {
    this.couponDetailMethod()
  }




}
</script>

<style lang='scss' scoped>
.content-model{
	margin-top: 0;
}
</style>