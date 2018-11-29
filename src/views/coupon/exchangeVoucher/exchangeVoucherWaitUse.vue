<template>
  <div class="exchange-voucher-waite-use">
    
    <!-- 兑换券标题信息 -->
		<contentModel :contentText='contentText' component="exchange"></contentModel>

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
  props:['id'],
  components: {contentModel,waitUse,scope}
})

export default class ExchangeVoucherWaitUses extends Vue {
  id
scopeMsg:Array<any> = [ ]
upperLimit:string = ''
contentText = {}  // 店铺信息
codeMsg = {}      // 券码和消费时间
couponTime = {}   //券码和二维码

@Action('integralExchangeDetail') integralExchangeDetail  // 兑换券待使用详情

  couponDetailMethod(){
    this.integralExchangeDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
      this.upperLimit = res.data.upperLimit
      this.contentText = {...res.data,id:res.data.goodsId,
                          mechantName:res.data.name,
                          mechantLogo:res.data.goodsImage,
                          name:res.data.type===1? `${res.data.deductionIntegral}积分兑换${res.data.coinNum}个`
                                                  :`${res.data.deductionIntegral}积分兑换`,
                        }
      this.codeMsg = res.data
		  this.couponTime = {...res.data,time:res.data.usedDate,isUse:true}
      this.$Coupon.dataHandling(res,this.scopeMsg,true)
      this.$toast.clear()
     })
    })
    .catch(err=>{
			this.$toast.clear()
			this.$toast.fail(err)
		})
  }
  mounted () {
    this.$pottingTosts("加载中")
    this.couponDetailMethod()
  }
}
</script>

<style lang='scss' scoped>
.content-model{
	// margin-top: 0;
	border-top: 0;
}
</style>