<template>
  <div class="parkingFee">
    <!-- 点击‘收费说明’跳转/protocol页面并且传入参数type -->
    <router-link class="charge-description" tag="div" :to="{path:`/protocol/${type}`}">收费说明>></router-link>
    <!-- <router-link class="charge-description" tag="div" :to="{name:'protocol',params:{type:type}}">收费说明>></router-link> -->
    <deduction :deductionInfo="deductionInfo"></deduction>
    <router-link :to="{path:'/parking/successDeduct'}">
      <commonBtn :btnName="btnName" :class="[{commonBtn:!needToPay}]"></commonBtn>
    </router-link>

  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import deduction from '../../components/common/parking/deduction.vue'
import commonBtn from '../../components/common/button.vue'

interface deductionInfo {
  carNumNormal: string;
  carNumEnergy: string;
  entryTimeTitle: string;
  entryTimeContent: string;
  timeLengthTitle: string;
  timeLengthContent: string;
  parkingRateTitle: string;
  parkingRateContent: string;
  integralDeductTitle: string;
  integralDeductContent: string;
}

@Component({
  components: {
    deduction,
    commonBtn
  }
})
export default class ParkingFee extends Vue {
  points = "3333";
  needToPay = true;
  btnName: string = this.needToPay ? `使用${this.points}积分抵扣` : '暂无需支付';
  type: number = 3;//文明文档的类型，3----停车收费

  deductionInfo: Array<deductionInfo> = [
    {
      carNumNormal: "粤C-MP888",
      carNumEnergy: "6",
      entryTimeTitle: "入场时间",
      entryTimeContent: "2018-07-18 18:34",
      timeLengthTitle: "停车时长",
      timeLengthContent: "8小时00分",
      parkingRateTitle: "停车费",
      parkingRateContent: "￥10",
      integralDeductTitle: "抵扣积分",
      integralDeductContent: "-33333"
    },
    {
      carNumNormal: "粤C-MP888",
      carNumEnergy: "6",
      entryTimeTitle: "入场时间",
      entryTimeContent: "2018-07-18 18:34",
      timeLengthTitle: "停车时长",
      timeLengthContent: "8小时00分",
      parkingRateTitle: "停车费",
      parkingRateContent: "￥0",
      integralDeductTitle: "抵扣积分",
      integralDeductContent: "0"
    }
  ];

  /* @Provide()
  deduction: Array<deductionInfo> = this.deductionInfo; */

}
</script>
<style lang="scss">
body {
  background-color: $color-f5;
}
</style>
<style lang="scss" scoped>
.parkingFee {
  text-align: center;
  .charge-description {
    position: absolute;
    top: 51px;
    right: 32px;
    font-size: 28px;
    color: $color-35;
  }
  .commonBtn {
    background-color: #d2d2d2;
    color: #f5f5f5;
  }
}
</style>
