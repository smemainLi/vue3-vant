<template>
	<div class="expire">
		<!-- top 店名和优惠 -->
		<contentModel :contentText='contentText'></contentModel>

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
import { Action } from 'vuex-class'


@Component({
	props:["id"],
  components: {ContentModel,couponCodeAndTime,scope}
})

export default class Expire extends Vue {
	id
	scopeMsg:Array<any> = []       //有效时间和适用范围
	contentText = {}               //店铺信息
	couponTime = {}                // 券码和消费时间
	@Action('couponDetail') couponDetail  // 优惠券已过期详情

	expireMethod(){
		this.couponDetail({id:this.id}).then(res=>{
			this.$nextTick(()=>{
				this.contentText = res.data
				console.log(this.contentText,'---')
				this.$Coupon.dataHandling(res,this.scopeMsg)
				this.couponTime = {...res.data,isUse:true}
			})
		})
	}


	created(){
		this.expireMethod()
	}



















// 	// 券码或者时间
// 	couponTime = {
// 		code:'0878 7878 77878',
// 		isUse:true,
// 		useText:'已过期'
// 	}

// 	// 有效期和时间
// 	scopeMsg = [
// 		{
//       title:"有效期及时间",
//       content:{scopeTime : '2017.8-2018-20',
// 	            useTime: '周一至周日可用,11:00-次日1:00,其中2018年5月'}
//     },
//     {
//       title:"适用范围",
//       content:{useTime: '非工作日'}
// 		}
// 	]
	

// // top 的contentModel
// 	contentText = [
// 		{
// 			useText:'待使用',
// 			mechantName:"小世界餐馆",
// 		  coupon:'满两百减一百',
// 		  imgUrl:require('@/assets/image/coupon/cashCoupon.png')
// 		}
// 		]
}
</script>
<style lang='scss' scoped>
.content-model{
	margin-top: 0;

}
</style>