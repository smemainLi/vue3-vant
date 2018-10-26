<template>
  <div class="detailPage">
    <top :metaTitle="metaTitle"></top>
    <location></location>
    <discount :discountInfo="discountInfo"></discount>
    <goods-swiper></goods-swiper>
    <coupon-title :titleContent="couTitle"></coupon-title>
    <card :cardInfo="cardInfo"></card>
    <coupon-title class="feel" :titleContent="feelTitle"></coupon-title>
    <feeling></feeling>
    <van-popup class="pop-box" v-model="nonExistence" :close-on-click-overlay="false">
      <div class="pop-box-top">
        <div class="box-top-title" v-cloak>{{boxTitle}}</div>
        <router-link class="box-top-close" tag="div" :to="{path:'/guide/index'}">×</router-link>
      </div>
      <div class="pop-box-middle" v-cloak>{{boxMiddle}}</div>
      <router-link :to="{path:'/guide/index'}">
        <common-Btn class="pop-box-bottom-btn"></common-Btn>
      </router-link>

    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import top from '../../components/common/guide/top.vue';
import location from '../../components/common/guide/location.vue';
import discount from '../../components/common/guide/discount.vue';
import goodsSwiper from '../../components/common/guide/goodsSwiper.vue';
import couponTitle from '../../components/common/guide/couponTitle.vue';
import card from '../../components/common/guide/card.vue';
import feeling from '../../components/common/guide/feeling.vue';
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
    location,
    discount,
    goodsSwiper,
    couponTitle,
    card,
    feeling,
    commonBtn
  }
})
export default class DetailPage extends Vue {
  metaTitle = "ONLY服饰店";

  couTitle = "优惠券&代金券";
  feelTitle = "大家对该店的感觉";

  nonExistence = true;
  boxTitle = "该店铺装修中";
  boxMiddle = "肯定你姿势不对呀~";

  @Provide()
  btnName: string = "换个姿势";

  discountInfo: discountInfo = {
    discountTitle: "全场9折全场9折全场9折全场折",
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
      isMask: false,
      finish: "抢光了，下次早点来哦",
    },
    {
      bgImage: require("../../assets/image/guide/cash.png"),
      parValue: "¥50",
      fullReduction: "满100可用",
      range: "部分换季衣物可用",
      time: "2018.05.31-2018.06.30",
      cardType: false,
      isMask: true,
      finish: "抢光了，下次早点来哦",
    },
    {
      bgImage: require("../../assets/image/guide/discount.png"),
      parValue: "¥50",
      fullReduction: "代金券",
      range: "部分换季衣物可用",
      time: "2018.05.31-2018.06.30",
      cardType: true,
      isMask: false,
      finish: "抢光了，下次早点来哦",
    },
  ];

  mounted() {
    document.title = this.metaTitle;
  }
}
</script>
<style lang="scss" scoped>
.detailPage {
  .pop-box {
    width: 686px;
    height: 542px;
    border-radius: 10px;
    text-align: center;
    .pop-box-top {
      height: 124px;
      background-color: #fbde19;
      .box-top-title {
        line-height: 124px;
        font-size: 34px;
        color: $color-00;
      }
      .box-top-close {
        position: absolute;
        top: 0;
        right: 32px;
        line-height: 124px;
        font-size: 70px;
        color: $color-ff;
      }
    }
    .pop-box-middle {
      margin-top: 122px;
      font-size: 36px;
      color: $color-35;
    }
    .pop-box-bottom-btn {
      width: 326px;
      font-size: 36px;
      color: $color-35;
    }
  }
}
</style>
