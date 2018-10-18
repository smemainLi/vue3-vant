<template>
  <div class="parking">
    <div class="car-info">
      <div class="car-photo">
        <img class="car-image" src="../../assets/image/parking/car.png" alt="">
      </div>
      <div class="car-number">
        <div class="car-num-box box-font box-margin">粤</div>
        <div class="car-num-box box-font">C</div>
        <div class="car-num-bar"></div>
        <div class="car-num-box">M</div>
        <div class="car-num-box">P</div>
        <div class="car-num-box">8</div>
        <div class="car-num-box">8</div>
        <div class="car-num-box">8</div>
        <div class="car-num-box">
          <div class="plus-photo">
            <img class="plus-image" src="../../assets/image/parking/plus.png" alt="">
          </div>
          <!-- <div class="new-energy">新能源</div> -->
        </div>
      </div>
    </div>
    <commonBtn @click.native="check()"></commonBtn>
    <div class="tips">
      <div class="no-car">找不到车？</div>
      <div class="payment-records" @click="record()">我的缴费记录</div>
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
export default class Parking extends Vue {
  @Provide()
  btnName: string = "查询";

  check() {
    this.$router.push({ path: '/parking/parkingFee' });
  }

  record() {
    this.$router.push({ path: '/parking/paymentRecord' });
  }
}
</script>


<style lang="scss" scoped>
.parking {
  height: 100%;
  background-color: $color-w;
  text-align: center;
  .car-info {
    padding-top: 10px;
    /* position: relative; */
    /* display: flex; */
    width: 750px;
    height: 507px;
    background: #ffffff;
    .car-photo {
      margin: auto;
      padding-top: 135px;
      width: 348px;
      height: 125px;
      .car-image {
        /* display: block;
        width: 348px;
        height: 125px; */
        width: 100%;
        height: 100%;
      }
    }
    .car-number {
      margin: auto;
      margin-top: 111px;
      background: khaki;
      .car-num-box {
        float: left;
        margin-right: 16px;
        width: 61px;
        height: 61px;
        font-size: 39px;
        color: $color-g2;
        text-align: center;
        box-sizing: border-box;
        border: 1px dashed #d2d2d2;
        .plus-photo {
          margin: 7px 19px 0 16px;
          width: 24px;
          height: 24px;
          /* box-sizing: border-box; */
          border: 1px dashed $color-g2;
          .plus-image {
            display: block;
            width: 24px;
            height: 24px;
          }
        }
        .new-energy {
          font-size: 15px;
        }
      }
      .box-margin {
        margin-left: 52px;
      }
      .box-font {
        color: $color-35;
      }
      .car-num-bar {
        float: left;
        width: 24px;
        height: 5px;
        margin: 21px 16px 0 0;
        background: #f5f5f5;
      }
    }
  }
  .tips {
    margin-top: 47px;
    font-size: 28px;
    color: $color-35;
    .no-car {
      margin-left: 32px;
      float: left;
    }
    .payment-records {
      margin-right: 32px;
      float: right;
    }
  }
}
</style>