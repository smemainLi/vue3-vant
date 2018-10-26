<template>
  <div class="parking">
    <div class="car-info">
      <div class="car-photo">
        <img class="car-image" src="../../assets/image/parking/car.png" alt="">
      </div>
      <car-num></car-num>
    </div>
    <router-link :to="{path:'/parking/parkingFee'}">
      <commonBtn></commonBtn>
    </router-link>

    <div class="tips">
      <div class="no-car">找不到车？</div>
      <router-link class="payment-records" tag="div" :to="{path:'/parking/paymentRecord'}">我的缴费记录</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import carNum from '../../components/common/parking/carNum.vue';
import commonBtn from '../../components/common/button.vue';


@Component({
  components: {
    carNum,
    commonBtn
  }
})
export default class Parking extends Vue {
  @Provide()
  btnName: string = "查询";
}
</script>


<style lang="scss" scoped>
.parking {
  height: 100%;
  background-color: $color-ff;
  text-align: center;
  .car-info {
    padding-top: 10px;
    width: 750px;
    height: 507px;
    background: #ffffff;
    .car-photo {
      margin: auto;
      padding-top: 135px;
      width: 348px;
      height: 125px;
      .car-image {
        width: 100%;
        height: 100%;
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