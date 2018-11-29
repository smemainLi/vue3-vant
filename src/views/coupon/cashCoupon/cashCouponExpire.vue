<template>
	<div class="cash-coupon-expire">
		<!-- top 店名和优惠 -->
		<!-- <ContentModel :contentText="item" v-for="(item,index) in contentText" :key="index"></ContentModel> -->
		<contentModel :contentText='contentText' v-show="couponTime.id"></contentModel>

		<!-- 卷码和消费时间 -->
		<msg :name="name" 
				 :status="contentText.status" 
				 :statusName="contentText.statusName"
				 :upperLimit="contentText.upperLimit"
				 :superposition="contentText.superposition"
				 :isShow="true"
				 v-show="couponTime.id"
		></msg>
		<couponCodeAndTime :couponTime="couponTime" v-show="couponTime.id"></couponCodeAndTime>

		<!-- 有效时间和适用范围 -->
		<scope :scopeMsg="scopeMsg" v-show="couponTime.id"></scope>

	</div>
</template>      

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import ContentModel from '@/components/common/coupon/contentModel.vue'
import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"
import msg from "@/components/common/coupon/msg.vue"
import { Action } from 'vuex-class'

  
@Component({
	props:["id"],
  components: {ContentModel,couponCodeAndTime,scope,msg}
})

export default class CashCouponExpire extends Vue {
	id
	name:string = ''
	scopeMsg:Array<any> = []       //有效时间和适用范围
	contentText = {}               //店铺信息
	couponTime = {}                // 券码和消费时间
	@Action('voucherDetail') voucherDetail  // 代金券已过期详情

	expireMethod(){
		this.voucherDetail({id:this.id}).then(res=>{
			this.$nextTick(()=>{
				this.name = res.data.name
				this.contentText = {...res.data,name:""}
				this.$Coupon.dataHandling(res,this.scopeMsg)
				this.couponTime = {...res.data,isUse:true}
				this.$toast.clear()
			})
		})
		.catch(err=>{
			this.$toast.clear()
			this.$toast.fail(err)
		})
	}

	created(){
		this.$pottingTosts("加载中")
		this.expireMethod()
	}
}
</script>
<style lang='scss' scoped>

// 小组件的样式
.cash-coupon-expire /deep/ .content-model{
	border-top: 0 !important;
}

.cash-coupon-expire /deep/ .couponCode .bottom{
  height: 178px;
} 

.cash-coupon-expire /deep/ .couponCode{
	margin-top:0 !important;
}

.cash-coupon-expire /deep/ .coupon{
	border-left: 0 !important;
  padding-left: 0 !important;
}
</style>