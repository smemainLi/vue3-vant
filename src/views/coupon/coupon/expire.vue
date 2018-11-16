<template>
	<div class="expire">
		<!-- top 店名和优惠 -->
		<contentModel :contentText='contentText' v-show="couponTime.id"></contentModel>

		<!-- 卷码和消费时间 -->
		<msg :name="name" 
				 :status="contentText.status" 
				 :statusName="contentText.statusName"
				 :upperLimit="contentText.upperLimit"
				 :superposition="contentText.superposition"
				 v-show="couponTime.id"
		></msg>
		<couponCodeAndTime :couponTime="couponTime" v-show="couponTime.id"></couponCodeAndTime>

		<!-- 有效时间和适用范围 -->
		<scope :scopeMsg="scopeMsg"></scope>

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
  components: {ContentModel,couponCodeAndTime,scope, msg}
})

export default class Expire extends Vue {
	id
	name:string = ""
	scopeMsg:Array<any> = []       //有效时间和适用范围
	contentText = {}               //店铺信息
	couponTime = {}                // 券码和消费时间
	@Action('couponDetail') couponDetail  // 优惠券已过期详情

	expireMethod(){
		this.couponDetail({id:this.id}).then(res=>{
			this.$nextTick(()=>{
				this.name = res.data.name
				this.contentText = {...res.data,name:""}
				console.log(this.contentText,'---')
				this.$Coupon.dataHandling(res,this.scopeMsg)
				this.couponTime = {...res.data,isUse:true}
			})
		})
	}


	created(){
		this.expireMethod()
	}
}
</script>
<style lang='scss' scoped>
.content-model{
	// margin-top: 0;
	border-top: 0;
}

.expire /deep/ .couponCode{
	margin-top: 0;
}
.expire /deep/ .coupon{
	border-left: 0 !important;
  padding-left: 0 !important;
}
</style>