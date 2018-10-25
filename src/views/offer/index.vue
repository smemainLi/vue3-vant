<template>
  <div class="member">
    <top></top>
    <discount :discountInfo="discountInfo"></discount>
    <coupon-title class="coupon-title" :titleContent="titleContent"></coupon-title>
    <div class="coupon-voucher">
      <card class="card" :cardInfo="cardInfo"></card>
      <div class="btn">
        <commonBtn class="commonBtn"></commonBtn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import top from '../../components/common/offer/top.vue';
import discount from '../../components/common/guide/discount.vue';
import couponTitle from '../../components/common/guide/couponTitle.vue';
import card from '../../components/common/guide/card.vue';
import commonBtn from '../../components/common/button.vue';

interface discountInfo {
  discountTitle: string,
  discountTime: string
}

interface cardInfo {
  bgImage: string,
  parValue: string,
  fullReduction: string,
  range: string,
  time: string,
  cardType?: boolean,/* false表示满减，true表示代金券 */
  isMask?: boolean,/* false表示还有券，true表示已抢光 */
  finish?: string,
}

@Component({
  components: {
    top,
    discount,
    couponTitle,
    card,
    commonBtn
  }
})
export default class Member extends Vue {
  discountInfo: discountInfo = {
    discountTitle: "全场9折，嗨翻暑假",
    discountTime: "20180504 ~ 20190603"
  }

  cardInfo: Array<cardInfo> = [
    {
      bgImage: require("../../assets/image/guide/cash.png"),
      parValue: "¥50",
      fullReduction: "满100可用",
      range: "部分换季衣物可用",
      time: "2018.05.31-2018.06.30",
      cardType: false,
    }
  ];

  titleContent = "优惠券&代金券";

  @Provide()
  btnName: string = '更多优惠';
}
</script>

<style lang="scss" scoped>
.member {
  .coupon-title {
    margin-top: 24px;
  }
  .coupon-voucher {
    .card {
      margin: 1px 0 0;
    }
    .btn {
      text-align: center;
      background-color: $color-w;
      .commonBtn {
        margin: 72px 0 65px 0;
        width: 326px;
      }
    }
  }
}
</style>