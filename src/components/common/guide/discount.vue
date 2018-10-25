<template>
  <div class="discount">
    <div class="discount-info">
      <div class="discount-title" v-cloak>{{discountInfo.discountTitle}}</div>
      <div class="discount-time" v-cloak>{{discountInfo.discountTime}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["discountInfo"],
  components: {
  }
})
export default class Ddiscount extends Vue {
  discountTitle = "全场9折全场9折全场9折全场折";
  discountTime = "20180504 ~ 20190603";
}
</script>
<style lang="scss" scoped>
.discount {
  margin-top: 24px;
  .discount-info {
    height: 170px;
    background: url("../../../assets/image/guide/discountBg.png") no-repeat;
    background-size: 100% 170px;
    padding: 50px 0 0 50px;
    box-sizing: border-box;

    color: $color-35;
    .discount-title {
      font-size: 40px;
      font-weight: bold;
    }
    .discount-time {
      font-size: 22px;
    }
  }
}
</style>
