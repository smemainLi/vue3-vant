<template>
	<div class="use">

		<!--  店铺信息 -->
		<cashContentModel :contentText='contentText'></cashContentModel>
    <div class="add">
      <ul>
        <li>
          <span class="text" v-text="(contentText.superposition===0||contentText.upperLimit===null)
                                    ? '不可叠加'
                                    : contentText.upperLimit===undefined? '不可叠加': `可叠加${contentText.upperLimit}张`">
          </span>
        
        </li>
      </ul>
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
    ul{
      height: 100%;
      margin-left: 30px;
      li{
        color: $color-fb;
        .text{
          margin-left: -10px;
          color:#353535;
          font-size: $size26;
        }
      }
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

