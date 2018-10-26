<template>

<!-- 待使用的券码和 二维码 -->
  <div class="couponCode">
    <div class="Code-and-QRCode">

      <!-- 券码 -->
      <div class="top">
        <div class="coupon" v-text="`券码：${codeMsg.code}`"></div>
      </div>

      <!-- 二维码 -->
        <img :src="codeMsg.codeUrl" alt="">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


// 券码  判断按钮的class，文字
// 消费时间
/**
 *      codeMsg  --- Object
 *          code     券码
 *          codeUrl  二维码的url
 */

@Component({
  props:["codeMsg"]
})

export default class Waituse extends Vue {

}

</script>

<style lang='scss' scoped>
.couponCode{
  .Code-and-QRCode{
    background-color: $color-ff;
    padding: 0 30px;
    margin-top: 24px;
    margin-bottom: 23px;
    height: 518px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .top{
      height: 110px;
      line-height: 110px;
      width: 100%;
      display: flex;
      align-items: center;
      .coupon{
        height: 37px;
        line-height: 37px;
        font-size: $size32;
        border-left: 11px solid $color-fb;
        padding-left: 15px;
      }
    }
    img{
      width: 370px;
      height: 370px;
    }
  }
}

</style>