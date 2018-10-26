<template>
  <div class="successDeduct">
    <div class="successDeduct-content">
      <div class="tick-photo">
        <img class="tick-image" src="../../assets/image/parking/tick.png" alt="">
      </div>
      <div class="success-mark" v-cloak>{{successMark}}</div>
      <div class="cut-line"></div>
      <div class="deduct-data">
        <div class="car-number row-data">
          <div class="title" v-cloak>{{carNumberTitle}}</div>
          <div class="content" v-cloak>{{carNumberContent}}</div>
        </div>
        <div class="parking-cost row-data">
          <div class="title" v-cloak>{{parkingCostTitle}}</div>
          <div class="content content-cost" v-cloak>{{parkingCostContent}}</div>
        </div>
      </div>
    </div>
    <div class="successDeduct-button">
      <commonBtn></commonBtn>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import commonBtn from '../../components/common/button.vue'

@Component({
  components: {
    commonBtn
  }
})
export default class ParkingFee extends Vue {
  @Provide()
  btnName: string = "返回首页"

  successMark = "积分抵扣成功";
  carNumberTitle = "车牌号";
  carNumberContent = "粤CT6767";
  parkingCostTitle = "费用";
  parkingCostContent = "5元（8888积分）";
}
</script>
<style lang="scss" scoped>
.successDeduct {
  padding-top: 10px;
  text-align: center;
  .successDeduct-content {
    background-color: $color-ff;
    .tick-photo {
      padding-top: 92px;
      .tick-image {
        width: 167px;
        height: 167px;
      }
    }
    .success-mark {
      font-size: 36px;
      padding-top: 35px;
      color: $color-35;
    }
    .cut-line {
      width: 684px;
      /* height: 8px; */
      margin: 0 auto;
      padding-top: 76px;
      border-bottom: 1px solid #e5e5e5;
    }
    .deduct-data {
      margin-top: 60px;
      padding-bottom: 55px;
      .row-data {
        font-size: 28px;
        text-align: left;
        margin: 30px 0 0 45px;
        .title {
          color: $color-88;
          display: inline-block;
        }
        .content {
          color: $color-35;
          display: inline-block;
          margin-left: 59px;
        }
        .content-cost {
          margin-left: 89px;
        }
      }
    }
  }
}
</style>
