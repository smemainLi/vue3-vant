<template>
  <div class="guide">
    <router-link tag="div" :to="{name:'allCoupon'}">
      <img src="../../assets/image/coupon/coupon.png" alt="">
    </router-link>
    <img src="../../assets/image/coupon/cashCoupon.png" alt="">
    <img src="../../assets/image/coupon/exchangeVoucher.png" alt="">
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
img {
  // width: 42.875rem;
  width: 686px;
  // width: 686px
  // height: 15rem;
  // height: px2rem(423);
}
</style>
