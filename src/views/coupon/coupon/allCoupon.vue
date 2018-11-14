<template>
  <div class="all-coupon">
    <Tab :swipeable='true' @activeChange="activeChange">

      <!-- 待使用   -->
      <div slot="待使用">
        <ContentModel component="waitUse" :contentText="item" v-for="item in contentText1" :key="item.id"></ContentModel>
      </div>

      <!-- 已使用  -->
      <div slot="已使用">
        <ContentModel component="alreadyUse"  v-for="item in contentText2" :key="item.id" :contentText="item"></ContentModel>
      </div>

      <!-- 已过期 -->
      <div slot="已过期">
        <ContentModel component="expire" :contentText="item" v-for="item in contentText3" :key="item.id"></ContentModel>
      </div>

    </Tab>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import Tab from "@/components/common/coupon/tab.vue"
import ContentModel from '@/components/common/coupon/contentModel.vue'

// 定义内容模块的接口信息
interface contentMsg {
  isUse: boolean, //是否已经使用
  title: string,  //餐馆标题
  coupon: string, //优惠信息
  imgUrl?: string, 
  useText?: string
}

@Component({ components: { Tab,ContentModel } })

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
      this.notUsedPageNo    = res.pageNo
    })
  }
  //已使用
  couponUsedMethod(){
    if(this.usedStatus)return
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
      this.usedPageNo = res.pageNo
    })
  }
  // 已过期
  couponExpiredMethod(){
    let coupon = {
      pageNo       :this.expiredPageNo,
      methodName   :this.couponExpired,
      arr          :this.contentText3,
      isUse        :true,
      status       :this.expiredStatus
    }
     if(this.expiredStatus) return
    this.$Coupon.Method(coupon)
    .then(res=>{
       this.contentText3  = res.arr
      this.expiredStatus  = res.status
      this.expiredPageNo  = res.pageNo
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