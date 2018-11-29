<template>
  <div class="all-coupon">
    <Tab :swipeable='true' @activeChange="activeChange">

      <!-- 待使用   -->
      <div slot="待使用">
        <emptyImg v-if="contentText1.length===0"></emptyImg>   <!-- 占位图 -->
        <ContentModel v-else component="waitUse" :contentText="item" v-for="item in contentText1" :key="item.id"></ContentModel>
        <prompt :bool="notUsedStatus" v-if="contentText1.length!==0"></prompt>
      </div>

      <!-- 已使用  -->
      <div slot="已使用">
        <emptyImg v-if="contentText2.length===0"></emptyImg>   <!-- 占位图 -->
        <ContentModel v-else component="alreadyUse"  v-for="item in contentText2" :key="item.id" :contentText="item"></ContentModel>
        <prompt :bool="usedStatus" v-if="contentText2.length!==0"></prompt>
      </div>

      <!-- 已过期 -->
      <div slot="已过期">
        <emptyImg v-if="contentText3.length===0"></emptyImg>   <!-- 占位图 -->
        <ContentModel v-else component="expire" :contentText="item" v-for="item in contentText3" :key="item.id"></ContentModel>
        <prompt :bool="expiredStatus" v-if="contentText3.length!==0"></prompt>
      </div>

    </Tab>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import Tab from "@/components/common/coupon/tab.vue"
import ContentModel from '@/components/common/coupon/contentModel.vue'
import prompt from "@/components/common/coupon/loadingPrompt.vue"
import emptyImg from '@/components/common/coupon/emptyImg.vue'



// 定义内容模块的接口信息
interface contentMsg {
  isUse: boolean, //是否已经使用
  title: string,  //餐馆标题
  coupon: string, //优惠信息
  imgUrl?: string, 
  useText?: string
}

@Component({ components: { Tab, ContentModel, prompt, emptyImg } })

export default class allCoupon extends Vue {
  activeNum:number       = 0   //切换到第几个 0 1 2
// 三个表示相应页码
  notUsedPageNo:number   = 1
  usedPageNo   :number   = 1
  expiredPageNo:number   = 1

// 三个代表相应的状态
  notUsedStatus:Boolean  = false
  usedStatus   :Boolean  = false
  expiredStatus:Boolean  = false

// 优惠券对应的是action的名字
  couponNotUsed:string   ='couponNotUsed'      // 优惠券待使用列表
  couponExpired:string   ="couponExpired"      // 优惠券已过期列表
  couponUsed   :string   ='couponUsed'         // 优惠券已使用列表




  listenScroll:any = new this.$ListenScroll(this.handleScroll)

  page = { pageNo:1, pageSize:15}

// 子组件切换的时候触发父组件的方法
  activeChange(data):void{
    this.activeNum = data
    if(data===0&&this.contentText1.length==0){
      this.couponNotUsedMethod()
    }else if(data===1&&this.contentText2.length==0){
      this.couponUsedMethod()
    }else if(data===2&&this.contentText3.length==0){
      this.couponExpiredMethod()
    }
  }

// 优惠券
  // 待使用
  couponNotUsedMethod(){
    if(this.notUsedStatus) return
    if(this.contentText1.length===0)  this.$pottingTosts("加载中")   //加载提示
    let coupon = {
      pageNo        :this.notUsedPageNo,
      methodName    :this.couponNotUsed,
      arr           :this.contentText1,
      isUse         :false,
      status        :this.notUsedStatus
    }
    this.$Coupon.Method(coupon).then(res=>{
      this.contentText1  = res.arr
      this.notUsedStatus = res.status
      this.notUsedPageNo = res.pageNo

      this.$toast.clear()  //清除加载动画
    })
  }
  //已使用
  couponUsedMethod(){
    if(this.usedStatus)return
    if(this.contentText2.length===0)  this.$pottingTosts("加载中")   //加载提示
    let coupon = {
      pageNo       :this.usedPageNo,
      methodName   :this.couponUsed,
      arr          :this.contentText2,
      isUse        :true,
      status       :this.usedStatus
    }
    this.$Coupon.Method(coupon)
    .then(res=>{
      this.contentText2  = res.arr
      this.usedStatus    = res.status
      this.usedPageNo    = res.pageNo

      this.$toast.clear()  //清除加载动画
    })
  }
  // 已过期
  couponExpiredMethod(){
    if(this.expiredStatus) return
    if(this.contentText3.length===0)  this.$pottingTosts("加载中")   //加载提示
    let coupon = {
      pageNo       :this.expiredPageNo,
      methodName   :this.couponExpired,
      arr          :this.contentText3,
      isUse        :true,
      status       :this.expiredStatus
    }
    this.$Coupon.Method(coupon)
    .then(res=>{
      this.contentText3  = res.arr
      this.expiredStatus = res.status
      this.expiredPageNo = res.pageNo

      this.$toast.clear()  //清除加载动画
    })
  }




handleScroll () {
  this.activeNum===0
  if(this.activeNum===0){
    this.couponNotUsedMethod()
  }else if(this.activeNum===1){
    this.couponUsedMethod()
  }else if(this.activeNum===2){
    this.couponExpiredMethod()
  }
}

  created () {
    this.couponNotUsedMethod()
    this.listenScroll.monitoringScroll()
  }
  destroyed () {
    this.listenScroll.removeScroll()
  }

  contentText1: Array<contentMsg> = [ ]

  contentText2: Array<contentMsg> = [ ]

  contentText3: Array<contentMsg> = [ ]

}
</script>