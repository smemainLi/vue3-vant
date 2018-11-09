<template>
	<div class="use">

		<!--  店铺信息 -->
		<cashContentModel :contentText='contentText'></cashContentModel>
    <div class="add">
      <span class="dot-index">●</span>
      <span class="text">可叠加两张</span>
    </div>

		<!-- 券码和消费时间 -->
		<couponCodeAndTime :couponTime='couponTime'></couponCodeAndTime>

		<!-- 有效期及时间 适用范围 -->
		<scope :scopeMsg="scopeMsg"></scope>

	</div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator"
import cashContentModel from "@/components/common/coupon/cashContentModel.vue"
import couponCodeAndTime from "@/components/common/coupon/couponCodeAndTime.vue"
import scope from "@/components/common/coupon/scope.vue"
import { Action } from 'vuex-class'


@Component({
  props:["id"],
  components: {cashContentModel,couponCodeAndTime,scope}
})

export default class CashCouponUse extends Vue {
id

scopeMsg:Array<any> = []                 //有效时间和适用范围
contentText = {}                        //店铺信息
couponTime = {}                         // 券码和消费时间
@Action('voucherDetail') voucherDetail  // 代金券待使用详情

  couponDetailMethod(){
    this.voucherDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
      this.contentText = res.data
		  this.$Coupon.dataHandling(res,this.scopeMsg)
		  this.couponTime = {...res.data,time:res.data.usedDate,isUse:true}
			})
		})
	}
  created () {
    this.couponDetailMethod()
  }













	// // 店铺信息
  // contentText = {
	// 		useText:'待使用',
	// 		title:"小世界餐馆",
	// 	  coupon:'满两百减一百',
	// 	  imgUrl:require('@/assets/image/coupon/cashCoupon.png')
	// 	}


	// 券码和消费时间
	// couponTime = {
	// 	code:'0878 7878 77878',
	// 	isUse:true,
	// 	useText:'已消费',
	// 	time:'2018-10-12 12:00'
	// }

	// // 有效时间和适用范围
	// scopeMsg = [
	// 	{
  //     title:"有效期及时间",
  //     content:{scopeTime : '2017.8-2018-20',
	//             useTime: '周一至周日可用,11:00-次日1:00,其中2018年5月'}
  //   },
  //   {
  //     title:"适用范围",
  //     content:{useTime: '非工作日'}
  //   },
  //   {
  //     title:"使用规则",
  //     content:{useTime: '最多使用两张'}
	// 	}
	// ]

		

}
</script>



<style lang='scss' scoped>
.use{
  .add{
    height: 87px;
    background-color: $color-ff;
    padding-left: 30px;
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    span{
      display: block;
      height: 99px;
      line-height: 99px;
    }
    .text{
      color:#353535;
      font-size: $size26;
    }

    .dot-index{
      color: $color-fb;
      font-size: 20px;
      margin-right: 8px;
    }
  }
}



// 小组件里面的样式
.content-model{
	margin-top: 0;
}
.use /deep/ .couponCode .bottom{
  height: 178px;
} 
</style>

