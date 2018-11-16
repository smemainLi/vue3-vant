<template>
  <div class="cash-coupon-wait-use">
    	<!--  店铺信息 -->
		<cashContentModel :contentText='contentText'></cashContentModel>
    <div class="supplement"></div>

		<!-- 券码和消费时间 -->
    <msg :name="name" 
				 :status="contentText.status" 
				 :statusName="contentText.statusName"
				 :upperLimit="contentText.upperLimit"
				 :superposition="contentText.superposition"
		></msg>
		<waitUse :codeMsg='codeMsg'></waitUse>

		<!-- 有效期及时间 适用范围 -->
		<scope :scopeMsg="scopeMsg"></scope>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import cashContentModel from "@/components/common/coupon/cashContentModel.vue"
// import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"
import waitUse from "@/components/common/coupon/waitUse.vue"
import msg from "@/components/common/coupon/msg.vue"
import { Action } from 'vuex-class'


@Component({
  props:["id"],
  components: {cashContentModel, waitUse, scope, msg}
})
export default class CashCouponWaitUse extends Vue {
id
name:string = ""   //优惠名称
scopeMsg:Array<any> = []
upperLimit:string = ''
contentText = {}  // 店铺信息
codeMsg = {}      // 券码和消费时间
couponTime = {}   //券码和二维码

@Action('voucherDetail') voucherDetail  // 优惠券待使用详情

  couponDetailMethod(){
    this.voucherDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
      this.name = res.data.name
      this.upperLimit = res.data.upperLimit
      this.contentText = {...res.data,name:""}
      this.codeMsg = res.data
		  this.couponTime = {...res.data,time:res.data.usedDate,isUse:true}
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
.cash-coupon-wait-use{
  .supplement{
    background-color: $color-ff;
    height: 30px;
  }
}



// 小组件里面的样式
.content-model{
	margin-top: 0;
}
.use /deep/ .couponCode .bottom{
  height: 178px;
} 

.cash-coupon-wait-use /deep/ .Code-and-QRCode{
  margin-top: 0 !important;
	// border-left: 0 !important;
  // padding-left: 0 !important;
}

.cash-coupon-wait-use /deep/ .coupon{
	border-left: 0 !important;
  padding-left: 0 !important;
}
</style>
