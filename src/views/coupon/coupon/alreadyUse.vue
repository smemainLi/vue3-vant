<template>
	<div class="use">

		<!--  店铺信息 -->
		<contentModel :contentText='contentText'></contentModel>

		<!-- 券码和消费时间 -->
		<couponCodeAndTime :couponTime='couponTime'></couponCodeAndTime>

		<!-- 有效期及时间 适用范围 -->
		<scope :scopeMsg="scopeMsg"></scope>

	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import contentModel from "@/components/common/coupon/contentModel.vue"
import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"

@Component({
  components: {
		contentModel,
		couponCodeAndTime,
		scope
  }
})

export default class alreadyUse extends Vue {
	// 店铺信息
  contentText = {
			useText:'待使用',
			title:"小世界餐馆",
		  coupon:'满两百减一百',
		  imgUrl:require('@/assets/image/coupon/cashCoupon.png')
		}


	// 券码和消费时间
	couponTime = {
		code:'0878 7878 77878',
		isUse:true,
		useText:'已消费',
		time:'2018-10-12 12:00'
	}

	// 有效时间和适用范围
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

		

}
</script>



<style lang='scss' scoped>
.content-model{
	margin-top: 0;
}
</style>