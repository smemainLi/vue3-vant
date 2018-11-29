<template>
	<div class="use">
		<!--  店铺信息 -->
		<contentModel :contentText='contentText' v-show="contentText.id"></contentModel>

		<!-- 券码和消费时间 -->
		<couponCodeAndTime :couponTime='couponTime' v-show="contentText.id"></couponCodeAndTime>

		<!-- 有效期及时间 适用范围 -->
		<scope :scopeMsg="scopeMsg" v-show="contentText.id"></scope>

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

export default class alreadyUse extends Vue {
id

scopeMsg:Array<any> = []       //有效时间和适用范围
contentText = {}   //店铺信息
couponTime = {}                // 券码和消费时间
@Action('couponDetail') couponDetail  // 优惠券待使用详情

  couponDetailMethod(){
    this.couponDetail({id:this.id}).then(res=>{
			this.$nextTick(()=>{
				this.$Coupon.dataHandling(res,this.scopeMsg)
				this.couponTime = {...res.data,time:res.data.usedDate,isUse:true}
				this.contentText = res.data
				this.$toast.clear()
			})
		})
		.catch(err=>{
			this.$toast.clear()
			this.$toast.fail(err)
		})
	}
  created () {
		this.$pottingTosts("加载中")
    this.couponDetailMethod()
  }
}
</script>



<style lang='scss' scoped>
.use /deep/ .content-model{
	// margin-top: 0;
	border-top:0;
}

</style>