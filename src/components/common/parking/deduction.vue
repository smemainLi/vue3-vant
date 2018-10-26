<template>
  <div class="deduction">
    <div class="confirm">请再次确认</div>
    <div class="car-number">
      <div class="normal" v-cloak>{{deduction[0].carNumNormal}}</div>
      <div class="new-energy" v-cloak>{{deduction[0].carNumEnergy}}</div>
    </div>
    <div class="cut-line"></div>
    <div class="parking-data">
      <div class="entry-time row-data">
        <div class="title" v-cloak>{{deduction[0].entryTimeTitle}}</div>
        <div class="content" v-cloak>{{deduction[0].entryTimeContent}}</div>
      </div>
      <div class="time-length row-data">
        <div class="title" v-cloak>{{deduction[0].timeLengthTitle}}</div>
        <div class="content" v-cloak>{{deduction[0].timeLengthContent}}</div>
      </div>
      <div class="parking-rate row-data">
        <div class="title" v-cloak>{{deduction[0].parkingRateTitle}}</div>
        <div class="content content-rate" v-cloak>{{deduction[0].parkingRateContent}}</div>
      </div>
      <div class="integral-deduct row-data">
        <div class="title" v-cloak>{{deduction[0].integralDeductTitle}}</div>
        <div class="content content-integral" v-cloak>{{deduction[0].integralDeductContent}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Deduction extends Vue {
  @Inject()
  deduction: any;
}
</script>
<style lang="scss" scoped>
.deduction {
  background-color: $color-ff;
  padding-top: 10px;
  text-align: left;
  .confirm {
    padding-top: 68px;
    margin-left: 36px;
    font-size: 28px;
    color: $color-35;
  }
  .car-number {
    padding-top: 34px;
    margin-left: 36px;
    font-size: 50px;
    color: $color-35;
    .normal {
      letter-spacing: 6px;
      display: inline-block;
    }
    .new-energy {
      display: inline-block;
      width: 44px;
      height: 53px;
      margin-left: 12px;
      font-size: 50px;
      border: 1px solid #d2d2d2;
      line-height: 53px;
      text-align: center;
    }
  }
  .cut-line {
    width: 684px;
    /* height: 8px; */
    margin: 0 auto;
    margin-top: 76px;
    border-bottom: 1px solid #e5e5e5;
  }
  .parking-data {
    margin-top: 80px;
    padding-bottom: 95px;
    .row-data {
      margin-left: 30px;
      margin-top: 30px;
      color: $color-35;
      .title {
        display: inline-block;
      }
      .content {
        display: inline-block;
        margin-left: 60px;
      }
      .content-rate {
        margin-left: 88px;
        color: #f56e72;
      }
      .content-integral {
        color: $color-88;
      }
    }
  }
}
</style>
