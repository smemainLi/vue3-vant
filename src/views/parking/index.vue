<template>
  <!-- 积分停车页面 -->
  <div class="parking">
    <router-link class="charge-description" tag="div" :to="{path:`/protocol/${type}`}">收费说明>></router-link>
    <div class="car-info">
      <div class="car-photo">
        <img class="car-image" src="../../assets/image/parking/car.png" alt="">
      </div>
      <!-- 车牌号码组件 -->
      <!--绑定isCarNum()方法，@hasCarNum的hasCarNum为子组件中$emit()中第一个参数，hasCarNum为回调方法，
          在hasCarNum后面不能加括号，不然会被默认为空，拿不到子组件传过来的值-->
      <car-num @hasCarNum="hasCarNum"></car-num>
    </div>
    <!-- 如果已经绑定车辆了，点击按钮跳转'/parking/parkingFee'，否则跳转'/member/carNumber' -->
    <router-link :to="isCarNum?{path:'/parking/parkingFee'}:{path:'/member/carNumber'}">
      <!-- 按钮组件 -->
      <commonBtn :btnName="btnName"></commonBtn>
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
  btnName: string = "";//按钮名称
  isCarNum: boolean = false;//是否已经绑定了车牌号码
  type: number = 3;//文明文档的类型，3----停车收费

  /**
   * 回调方法，接收子组件传的参数
   */
  hasCarNum(isCarNum) {
    this.isCarNum = isCarNum;
    //如果已经有绑定的车辆了，按钮文字显示为“查询”，否则显示为“绑定车辆”
    if (isCarNum) this.btnName = "查询";
    else this.btnName = "绑定车辆";
  }
}
</script>


<style lang="scss" scoped>
.parking {
  height: 100%;
  background-color: $color-ff;
  text-align: center;
  .charge-description {
    position: absolute;
    top: 51px;
    right: 32px;
    font-size: 28px;
    color: $color-35;
  }
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