<template>
  <div class="discount">
    <div class="discount-info" v-show="true">
      <div class="left-icon">
        <img class="left-icon-img" :src="leftImg" alt="">
      </div>
      <div class="discount-content" v-cloak>{{discountInfo}}</div>
      <div class="right-icon">
        <img class="right-icon-img" :src="rightImg" alt="">
      </div>
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
export default class Discount extends Vue {
  leftImg = require('../../../assets/image/offer/left.png');
  rightImg = require('../../../assets/image/offer/right.png');
}
</script>
<style lang="scss" scoped>
.discount {
  .discount-info {
    height: 63px;
    background-color: $color-ff;
    color: $color-35;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .left-icon,
    .right-icon {
      width: 52px;
      height: 36px;
      display: inline-block;
    }
    .left-icon {
      width: 52px;
      height: 36px;
      .left-icon-img {
        width: 100%;
        height: 100%;
      }
    }
    .discount-content {
      display: inline-block;
      font-size: 28px;
      font-weight: bold;
      margin: 0 20px;
    }
    .right-icon {
      width: 63px;
      height: 37px;
      .right-icon-img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
