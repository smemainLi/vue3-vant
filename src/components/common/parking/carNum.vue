<template>
  <div class="carNum">
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
        <img class="plus-image" src="../../../assets/image/parking/plus.png" alt="">
      </div>
      <!-- <div class="new-energy">新能源</div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  components: {
  }
})
export default class CarNum extends Vue {
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
      /* box-sizing: border-box; */
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
