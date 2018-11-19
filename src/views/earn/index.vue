<template>
  <div class="guide">
  <!-- 签到 -->
    <earnTitle  :numberValue="numberValue" :integral="signIntegral" :register="register" :isShow="isShow" ref="earnTitle" :isRange="isRange" @receiveMethod="receiveMethod">

    </earnTitle>

  <!-- 做任务赚积分 title -->
    <couponTitle v-if="infoPerfect.status||dayShare.status||invitation.status" titleContent="做任务赚积分"  class="coupon-title"></couponTitle>
    <!-- 做任务赚积分 -->
    <taskCard v-if="infoPerfect.status" class="task-crad" :isActive="infoPerfect.isInfoPerfect" :number="infoPerfect.integral"></taskCard>
    <taskCard v-if="dayShare.status"  class="task-crad" :btnText="dayShare.isDayShare? '今天已分享':'去分享'" @goShare="goShare" :isActive="dayShare.isDayShare" :number="dayShare.integral"></taskCard>
    <taskCard v-if="invitation.status" class="task-crad" btnText="去邀请" @goShare="goShare" :value="invitation.inviteSum" :isActive="false" :number="invitation.integral"></taskCard>

<!-- 更多积分方式 title-->
    <couponTitle titleContent="更多积分方式" class="more"></couponTitle>

  <!-- 更多积分方式 -->
    <!-- 消费后向商家索取积分 -->
    <moreIntegral></moreIntegral>
    <!-- 适用优惠券代金券买单 -->
    <moreIntegral text="使用优惠券代金券买单" :imgUrl="require('@/assets/image/earn/ticket.png')" component="offer"  skipText="去抢劵 >>"></moreIntegral>
  
<!-- 点击分享或者点击去邀请的弹出框 -->
  <van-popup v-model="show" :close-on-click-overlay="false">
    <img src="../../assets/image/earn/share.png" alt="">
    <div class="pupup-model">
      点击<span class="font-color">右上角</span>，分享给好友或朋友圈好友打开你分享的链接并注册成功你即可<span class="font-color">获得积分</span>
    </div>
    <button @click="show=false">知道了</button>
  </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import earnTitle from "@/components/common/earn/earnTitle.vue"
import couponTitle from "@/components/common/guide/couponTitle.vue"
import taskCard from "@/components/common/earn/taskCard.vue"
import moreIntegral from "@/components/common/earn/moreIntegral.vue"
import { Action } from 'vuex-class'
import json from "../../lang/wx"
// import { wxShare } from "../../config/wxConfig"


@Component({
  components: {earnTitle:earnTitle, couponTitle:couponTitle, taskCard:taskCard, moreIntegral:moreIntegral}
})
export default class Guide extends Vue {
  register:Boolean = false;      //是否签到
  show:Boolean = false
  isShow:number = 0              //是否禁用签到
  signIntegral:number = 0        //签到赠送积分
  numberValue:number  = 0        //签到分值
  isRangeText:string  = ""       //授权或者不在范围内的信息提示文本 

  infoPerfect = {status:0}       //完善资料
  invitation  = {status:0}       //邀请
  dayShare    = {status:0}       //分享

// 腾讯地图获取的南方软件园坐标
  dimension:number = 22.372540   //维度
  longitude:number = 113.574840  //经度
  isRange:boolean = false        //是否在商场范围大概是方圆1.1公里左右的范围

  @Action("punchClock")            punchClock             //签到
  @Action("exchangeVoucherIndex")  exchangeVoucherIndex   //首页展示

  // 签到 子组件触发父组件的方法
  receiveMethod(){
    this.punchClock().then(res=>{
      this.$refs.earnTitle['showDialong'](this.isRangeText)
      this.register = true
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

  indexShow(){
    this.exchangeVoucherIndex().then(res=>{
      this.numberValue = res.data.daySign.integral
      this.register = res.data.daySign.isDaySign
      this.isShow = res.data.daySign.status
      this.dayShare = res.data.dayShare
      this.signIntegral =res.data.daySign.integral
      this.invitation = res.data.invitation
      this.infoPerfect = res.data.infoPerfect
    })
  }

  share(){
    // const _this = this
    // this.$wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
    // _this.$wx.updateTimelineShareData({ 
    //     title: '这是一个有趣的页面', // 分享标题
    //     link: 'http://wyw-wx.test.qi-cloud.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //     imgUrl: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a0417f4137292df588c3aa158c305ce2/9345d688d43f8794906df240df1b0ef41ad53ac9.jpg', // 分享图标
    //     success: function () { 
    //       console.log("这是js sdk成功")
    //     }
    //     })
    //   })
   }



  // 分享,邀请，子组件触发父组件的方法
  goShare(data){

    if(data==="share"){
      this.$router.push({name:'guide'})
      return
      }else if(data==="invitation"){
      this.show = true
    }
  }

  wxMethod(){
    let _this = this
    this.$wx.ready(function () {
    _this.$wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res) {
        let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        let speed = res.speed; // 速度，以米/每秒计
        let accuracy = res.accuracy; // 位置精度
        //   0.01大概等于1.11KM
        if((_this.dimension-latitude<0.01&&_this.dimension-latitude>-0.01)
          &&(_this.longitude-longitude<0.01&&_this.longitude-longitude>-0.01)){
        _this.isRange = true
        }else{
          _this.isRange = false
        }
      }
    })
    _this.$wx.error( (err)=>{
      _this.isRangeText = "位置授权失败，请重新授权" 
      })
    })
  }

  created(){
    this.wxMethod()
    this.indexShow()


  }

  mounted () {

    let share = document.cookie.split(";").filter(item=>{
      return item.includes("qi_openid")
    })
    let _this = this
    this.$wx.ready(function(){
      _this.$wx.onMenuShareAppMessage({
        title: '邀请您注册', // 分享标题
        desc: '快点注册', // 分享描述
        link: `${window.location.href.split("?")[0]}/${share.length===0? "":"?"+share[0]}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542364545336&di=63240e8f0bb2d92c4f09ff3b226a3782&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F83025aafa40f4bfb0786420f0e4f78f0f7361813.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
        // 用户点击了分享后执行的回调函数
        }
      })
    })
  }

}
</script>

<style lang="scss" scoped>
.guide{
  .coupon-title{
    margin:15px 0 24px 0;
  }

  .task-crad{
    margin-bottom: 24px;
  }

  .more{
    margin-bottom: 24px;
  }

  [class^="van-popup"]{
    background-color: rgba(0,0,0,0) !important;
    top:32%;
    left: 50% !important;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 378px;
      height: 312px;
      position: fixed;
      top:0;
      right: 0;
    }

    button{
      border:4px solid $color-ff;
      border-radius: 10px;
      height: 88px;
      width: 240px;
      background-color: rgba(0,0,0,0);
      color:$color-ff;
      font-size: $size40;
      font-weight: bold;
      margin-top:62px;
    }
  }

  .van-popup /deep/ .pupup-model{
    font-size: $size40;
    color: $color-ff;
    font-weight:bold;
    width: 604px;
    height: 146px;
    margin-top:350px;

  }

  .font-color{
    color:$color-fb !important;
  }
}
</style>
