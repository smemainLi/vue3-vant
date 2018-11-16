<template>
	<div class="use">

		<!--  店铺信息 -->
		<contentModel :contentText='contentText' component="exchange"></contentModel>

		<!-- 券码和消费时间 -->
		<couponCodeAndTime :couponTime='couponTime'></couponCodeAndTime>

		<!-- 有效期及时间 适用范围 -->
		<scope :scopeMsg="scopeMsg" v-if="scopeMsg.length!==0"></scope>

	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import contentModel from "@/components/common/coupon/contentModel.vue"
import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"
import { Action } from 'vuex-class'


@Component({
	props:["id"],
  components: { contentModel, couponCodeAndTime, scope }
})

export default class ExchangeVoucherUse extends Vue {
id

scopeMsg:Array<any> = []       //有效时间和适用范围
contentText = {}   //店铺信息
couponTime = { }                // 券码和消费时间
@Action('integralExchangeDetail') integralExchangeDetail  // 兑换券待使用详情

  couponDetailMethod(){
    this.integralExchangeDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
			this.contentText = {...res.data,
													id:res.data.goodsId===null? (<any>Math).random(1)*100:res.data.goodsId,
													mechantLogo:res.data.goodsImage,
													mechantName:res.data.name,
													name:res.data.type===1? `${res.data.deductionIntegral}积分兑换${res.data.coinNum}个`
																									:`${res.data.deductionIntegral}积分兑换`
													}
		  this.$Coupon.dataHandling(res,this.scopeMsg,true)
		  this.couponTime = {...res.data,time:res.data.usedDate,isUse:true}
			})
		})
	}
  created () {
    this.couponDetailMethod()
  }
}
</script>



<style lang='scss' scoped>
.use /deep/ .content-model{
	// margin-top: 0;
	border-top: 0 !important;
}
</style>