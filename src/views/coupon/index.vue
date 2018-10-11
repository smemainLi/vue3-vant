<template>
  <div class="guide">
    <h1>我的券包</h1>
    <img src="../../assets/image/coupon/cashCoupon.png" alt="" class="image">
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  components: {
  }
})
export default class Guide extends Vue {

}
</script>

<style lang="scss" scoped>
.image {
  // width: 42.875rem;
  width: 686px;
  // width: 686px
  // height: 15rem;
  // height: px2rem(423);
}
</style>
