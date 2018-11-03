<template>
  <div class="carNum">
    <div class="car-num-box car-num-num box-font box-margin" v-cloak>{{carNumArr[0]}}</div>
    <div class="car-num-box car-num-num box-font" v-cloak>{{carNumArr[1]}}</div>
    <div class="car-num-bar"></div>
    <div class="car-num-box car-num-num" v-cloak>{{carNumArr[2]}}</div>
    <div class="car-num-box car-num-num" v-cloak>{{carNumArr[3]}}</div>
    <div class="car-num-box car-num-num" v-cloak>{{carNumArr[4]}}</div>
    <div class="car-num-box car-num-num" v-cloak>{{carNumArr[5]}}</div>
    <div class="car-num-box car-num-num" v-cloak>{{carNumArr[6]}}</div>
    <div class="car-num-box">
      <div class="car-num-num" v-show="carNumArrLength===8" v-cloak>{{carNumArr[7]}}</div>
      <div class="new-energy-vehicle" v-show="!(carNumArrLength===8)">
        <div class="plus-photo">
          <img class="plus-image" src="../../../assets/image/parking/plus.png" alt="">
        </div>
        <div class="new-energy">新能源</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from "vuex-class"

@Component({
  components: {
  }
})
export default class CarNum extends Vue {
  @Action("queryPlateNumber") queryPlateNumber

  carNumArr: Array<string> = [];
  carNumArrLength: number = 0;

  /**
   * 获取车牌号码
   */
  async getPlateNumber() {
    await this.queryPlateNumber().then((res) => {
      //向父组件传递参数，第一个参数是父组件中绑定的自定义回调方法，第二个参数为传递的参数
      this.$emit('hasCarNum', res.data.isCarNum);
      this.carNumArr = res.data.carNum.split('');
      this.carNumArrLength = this.carNumArr.length;
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  mounted() {
    this.getPlateNumber();
  }
}
</script>

<style lang="scss" scoped>
.carNum {
  margin: auto;
  padding-top: 111px;
  .car-num-box {
    float: left;
    margin-right: 16px;
    width: 61px;
    height: 61px;
    font-size: 39px;
    color: $color-88;
    text-align: center;
    box-sizing: border-box;
    border: 1px dashed $color-d2;
    .plus-photo {
      margin: 7px 19px 0 16px;
      width: 24px;
      height: 24px;
      border: 1px dashed $color-88;
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
  .car-num-num {
    line-height: 61px;
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
    background: $color-f5;
  }
}
</style>
