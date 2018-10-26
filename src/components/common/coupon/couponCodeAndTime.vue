<template>
  <div class="couponCode">
    <div class="top">
      <div class="coupon" v-text="`券码：${couponTime.code}`"></div>
	    <button :class="['button',couponTime.isUse? 'yes':'']" v-text="couponTime.useText"></button>
    </div>
    <div class="bottom" v-if="'time' in couponTime">
      <div class="time">消费时间</div>
      <div class="time-text" v-text="couponTime.time"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

/**
 *  这是优惠券中的券码和消费时间 
    （过期-消费）两种适用 
    判断是否有时间就可以确定是否为过期还是消费 
    （不传时间就是已消费）

  couponTime ---- Object
      code     券码
      isUse    主要是控制按钮样式backgroundColor
      useText  按钮文字
      time     消费时间 （如果不传此字段，就为待适用）
 *  */ 

@Component({
  props:['couponTime']
})

export default class CouponCodeAndTime extends Vue {

}
</script>



<style lang='scss' scoped>
.couponCode{
  background-color: $color-ff;
  padding: 0 30px;
  margin-top: 24px;
  margin-bottom: 23px;

  .top{
    height: 110px;
    line-height: 110px;
    display: flex;
    align-items: center;
	  justify-content: space-between;

    .coupon{
      height: 37px;
      // height: 35px;
      line-height: 37px;
      font-size: $size32;
      border-left: 11px solid $color-fb;
      padding-left: 15px;

    }
    .button{
      font-weight:bold;
      display: block;
      background-color:#F56E72;
      height: 36px;
      line-height: 36px;
      width: 138px;
      padding: 0;
      border: 0;
      font-size: $size28;
      color: #fff;
      border-radius: 18px;
    }
  }

  .bottom{
    height: 88px;
    display: flex;
    align-items: center;
    border-top: 1px solid#E5E5E5;
    .time{
      font-size: $size28;
      font-weight:bold;
      margin-right: 10px;
    }
    .time-text{
      font-size: $size26;
      color: $color-88;
    }
  }
  .yes{
		background-color: #888888 !important;
	}
}

</style>