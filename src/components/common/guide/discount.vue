<template>
  <div class="discount">
    <div class="discount-info" v-show="discountInfo.discountTitle">
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
}
</script>
<style lang="scss" scoped>
.discount {
  margin-top: 2px;
  .discount-info {
    height: 130px;
    background: url("../../../assets/image/guide/discountBg.png") no-repeat;
    background-size: 100% 170px;
    padding: 25px 0 0 50px;
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
