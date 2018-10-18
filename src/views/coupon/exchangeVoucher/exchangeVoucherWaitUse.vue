<template>
  <div class="exchange-voucher-waite-use">
    
    <!-- 兑换券标题信息 -->
		<contentModel :contentText='contentText'></contentModel>

    <!-- 券码和二维码 -->
    <waitUse :codeMsg="codeMsg"></waitUse>

    <!-- 有效期及时间和适用范围 -->
		  <scope :scopeMsg="scopeMsg"></scope>


  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import contentModel from "@/components/common/coupon/contentModel.vue"
import waitUse from "@/components/common/coupon/waitUse.vue"
import scope from "@/components/common/coupon/scope.vue"




@Component({
  components: {
    contentModel,
    waitUse,
    scope
  }
})

export default class ExchangeVoucherWaitUses extends Vue {
  // 店铺信息
  contentText = {
			useText:'待使用',
			title:"清风150抽纸巾2盒 ",
		  coupon:'5000积分兑换',
		  imgUrl:require('@/assets/image/coupon/cashCoupon.png')
    }
    
  // 券码和二维码
  codeMsg = {
    code:"123456789",
    codeUrl:require("@/assets/image/coupon/code.png")
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
      content:{
        useTime: '非工作日',
        useTime1: '非工作日',
        useTime2: '非工作日',
        useTime3: '非工作日'
        }
		}
	]

}
</script>

<style lang='scss' scoped>
.content-model{
	margin-top: 0;
}
</style>