<template>
  <div class="waiteUse">
    
    <!-- 店铺信息 -->
		<contentModel :contentText='contentText'></contentModel>

    <!-- 券码和二维码 -->
    <msg :name="name" v-show="codeMsg.id"></msg>
    <waitUse :codeMsg="codeMsg" v-show="codeMsg.id"></waitUse>

    <!-- 有效期及时间和适用范围 -->
		<scope :scopeMsg="scopeMsg" v-show="scopeMsg.length!==0"></scope>

  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import contentModel from "@/components/common/coupon/contentModel.vue"
import waitUse from "@/components/common/coupon/waitUse.vue"
import scope from "@/components/common/coupon/scope.vue"
import msg from "@/components/common/coupon/msg.vue"
import { Action } from 'vuex-class'

@Component({
  props:["id"], 
  components: { contentModel,waitUse,scope, msg }
})

export default class WaitUses extends Vue {
id
scopeMsg:Array<any> = []
name:string = ""    //优惠信息名称
  
contentText = {}  // 店铺信息
codeMsg = {}      // 券码和二维码

@Action('couponDetail') couponDetail  // 优惠券待使用详情

  couponDetailMethod(){
    this.couponDetail({id:this.id}).then(res=>{
     this.$nextTick(()=>{
       this.name = res.data.name
      this.contentText = {...res.data,name:""}
      this.codeMsg = res.data
      this.$Coupon.dataHandling(res,this.scopeMsg)
      // setTimeout(()=>{this.$toast.clear()},300)
      
     })
    })
  }
  created () {
    this.couponDetailMethod()
    // this.$toast.loading({
    //   duration: 0,       // 持续展示 toast
    //   forbidClick: true, // 禁用背景点击
    //   loadingType: 'spinner'
    // });
  }




}
</script>

<style lang='scss' scoped>
.content-model{
	// margin-top: 0;
	border-top: 0;
}
 .waiteUse /deep/ .Code-and-QRCode{
   margin-top: 0;
 }

 .waiteUse /deep/ .coupon{
    border-left: 0 !important;
    padding-left: 0 !important;
  }

</style>