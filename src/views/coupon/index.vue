<template>
  <div class="coupon">

    <!-- 优惠券 -->
    <router-link :to="{name:'allCoupon'}">
      <img src="@/assets/image/coupon/coupon.png" alt="">
    </router-link>

    <!-- 代金券 -->
    <router-link :to="{name:'allCashCoupon'}">
      <img src="@/assets/image/coupon/cashCoupon.png" alt="">
    </router-link>

    <!-- 兑换 -->
    <router-link :to="{name:'exchangeVoucherIndex'}">
      <img src="@/assets/image/coupon/exchangeVoucher.png" alt="">
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  components: {
  }
})

export default class Coupon extends Vue {


}
</script>

<style lang="scss" scoped>
img{
  width: 686px;
  height: 240px;
  margin-top: 30px;
  display: block
}

.coupon{
  background-color: $color-w;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding-bottom: 26px;
}
</style>
