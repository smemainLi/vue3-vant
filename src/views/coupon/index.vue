<template>
  <div class="coupon">
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
img{
  width: 686px;
  height: 240px;
  margin-top: 30px;
  display: block
}

.coupon{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
</style>
