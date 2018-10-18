<template>
	<div class="cash-coupon-expire">
		<!-- top 店名和优惠 -->
		<ContentModel :contentText="item" v-for="(item,index) in contentText" :key="index"></ContentModel>

		<!-- 卷码和消费时间 -->
		<couponCodeAndTime :couponTime="couponTime"></couponCodeAndTime>

		<!-- 有效时间和适用范围 -->
		<scope :scopeMsg="scopeMsg"></scope>

	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import ContentModel from '@/components/common/coupon/contentModel.vue'
import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"

@Component({
  components: {
		ContentModel,
		couponCodeAndTime,
		scope
  }
})

export default class CashCouponExpire extends Vue {

	// 券码或者时间
	couponTime = {
		code:'0878 7878 77878',
		isUse:true,
    useText:'已过期',
    time:'2018-5-24'
	}

	// 有效期和时间
	scopeMsg = [
		{
      title:"有效期及时间",
      content:{scopeTime : '2017.8-2018-20',
	            useTime: '周一至周日可用,11:00-次日1:00,其中2018年5月'}
    },
    {
      title:"适用范围",
      content:{useTime: '非工作日'}
		}
	]
	

// top 的contentModel
	contentText = [
		{
			useText:'待使用',
			title:"小世界餐馆",
		  coupon:'满两百减一百',
		  imgUrl:require('@/assets/image/coupon/cashCoupon.png')
		}
		]
}
</script>
<style lang='scss' scoped>

// 小组件的样式
.content-model{
	margin-top: 0;
}

.cash-coupon-expire /deep/ .couponCode .bottom{
  height: 178px;
} 
</style>