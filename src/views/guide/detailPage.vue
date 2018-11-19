<template>
  <div class="detailPage">
    <top :storeInfo="storeInfo"></top>
    <location :locationInfo="locationInfo"></location>
    <discount :discountInfo="discountInfo"></discount>
    <goods-swiper :goodsInfoList="goodsInfoList"></goods-swiper>
    <coupon-title :titleContent="couTitle"></coupon-title>
    <card :cardInfo="cardInfoList"></card>
    <coupon-title class="feel" :titleContent="feelTitle"></coupon-title>
    <feeling :voteInfoList="voteInfoList" :feelNumMax="feelNumMax" :merchantId="this.$route.params.merchantId"></feeling>
    <!-- <van-popup class="pop-box" v-model="noExistence" :close-on-click-overlay="false">
      <div class="pop-box-top">
        <div class="box-top-title" v-cloak>{{boxTitle}}</div>
        <router-link class="box-top-close" tag="div" :to="{path:'/guide/index'}">×</router-link>
      </div>
      <div class="pop-box-middle" v-cloak>{{boxMiddle}}</div>
      <router-link :to="{path:'/guide/index'}">
        <common-Btn :btnName="btnName" class="pop-box-bottom-btn"></common-Btn>
      </router-link>
    </van-popup> -->
    <pop :storeNoOpen="noExistence"></pop>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';
import top from '../../components/common/guide/top.vue';
import location from '../../components/common/guide/location.vue';
import discount from '../../components/common/guide/discount.vue';
import goodsSwiper from '../../components/common/guide/goodsSwiper.vue';
import couponTitle from '../../components/common/guide/couponTitle.vue';
import card from '../../components/common/guide/card.vue';
import feeling from '../../components/common/guide/feeling.vue';
import pop from '../../components/common/guide/pop.vue';

interface storeInfo {
  storeId: string,
  storeLogo: string,
  metaTitle: string,
  storeBrief: string,
  perCapita: string,
  isFocus: boolean,
}

interface locationInfo {
  site: string,
  noSite: boolean,//判断地理位置是否为空
  phone: string,
}

interface discountInfo {
  discountTitle: string,
  discountTime: string
}

interface goodsInfo {
  goodsId: string,
  image: string,
  name: string,
  price: string,
}

interface cardInfo {
  cardId: string,
  bgImage: string,
  parValue: string,//面值
  fullReduction: string,//满减
  range: string,//适用范围
  time: string,
  cardType: number,/* 0表示满减(黄色卡片背景)，1表示代金券(红色卡片背景) */
  isMask?: boolean,/* false表示还有券，true表示已抢光 */
  isOffer?: boolean,/* true表示是抢优惠券页面触发的点击事件(卡片点击事件) */
  finish?: string,
}

interface voteInfo {
  percentage: string,
  emoticon: string,
  num: string,
  status: boolean,
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
    pop
  }
})
export default class DetailPage extends Vue {
  @Action storeDetail

  /* merchantId = this.$route.params.merchantId; */
  storeInfo = {};
  locationInfo = {};
  discountInfo = {};
  goodsInfo = {};
  goodsInfoList: any = [];
  cardInfo = {};
  cardInfoList: any = [];
  voteInfoList: any = [];
  noExistence: boolean = false;
  feelNumMax: number = 0;

  metaTitle = "ONLY服饰店";
  couTitle = "优惠券&代金券";
  feelTitle = "大家对该店的感觉";
  boxTitle = "该店铺装修中";
  boxMiddle = "肯定你姿势不对呀~";
  btnName: string = "换个姿势";

  /* discountInfo: discountInfo = {
    discountTitle: "全场9折全场9折全场9折全场折",
    discountTime: "20180504 ~ 20190603"
  } */

  getStoreDetail() {
    console.log(this.$route.params.merchantId);
    this.storeDetail({ merchantId: this.$route.params.merchantId }).then((res) => {
      this.noExistence = res.data.openStatus === 0 ? false : true;
      this.storeInfo = {
        storeId: this.$route.params.merchantId,
        storeLogo: res.data.logo,
        metaTitle: res.data.storeName,
        storeBrief: res.data.storeDesc,
        perCapita: res.data.percapita,
        isFocus: res.data.isFocus,
      }
      this.locationInfo = {
        site: `${res.data.floor}${res.data.floorAddr}`,
        noSite: !res.data.floor || !res.data.floor ? false : true,
        phone: `tel:${res.data.contactPhone}`,
      }
      this.discountInfo = {
        discountTitle: res.data.activity.activityName,
        discountTime: res.data.activity.activityContent,
      }
      for (let i = 0; i < res.data.goodsList.length; i++) {
        const goods = res.data.goodsList[i];
        this.goodsInfo = {
          goodsId: goods.goodsId,
          image: goods.goodsImage,
          name: goods.goodsName,
          price: `￥${goods.netPrice}`,
        }
        this.goodsInfoList.push(this.goodsInfo);
      }
      for (let i = 0; i < res.data.quanList.length; i++) {
        const card = res.data.quanList[i];
        this.cardInfo = {
          cardId: card.quanId,
          bgImage: card.typeName === "优惠券" ? require("../../assets/image/guide/cash.png") : require("../../assets/image/guide/discount.png"),
          parValue: `￥${card.discount}`,
          fullReduction: card.typeName === "优惠券" ? `满amount可用` : card.typeName,
          range: card.usable,
          time: `${card.startDateStr}-${card.endDateStr}`,
          cardType: card.typeName === "优惠券" ? 0 : 1,/* 0表示满减(黄色卡片背景)，1表示代金券(红色卡片背景) */
          isMask: false,
          isOffer: false,/* true表示是抢优惠券页面触发的点击事件(卡片点击事件) */
          finish: "抢光了，下次早点来哦",
        }
        this.cardInfoList.push(this.cardInfo);
      }

      this.voteInfoList.push({
        percentage: "0",
        emoticon: require("../../assets/image/guide/like.png"),
        num: res.data.feels.feelGoodNum,
        status: res.data.feels.feelGood,
      });
      this.voteInfoList.push({
        percentage: "0",
        emoticon: require("../../assets/image/guide/ordinary.png"),
        num: res.data.feels.feelSosoNum,
        status: res.data.feels.feelSoso,
      });
      this.voteInfoList.push({
        percentage: "0",
        emoticon: require("../../assets/image/guide/dislike.png"),
        num: res.data.feels.feelBadNum,
        status: res.data.feels.feelBad,
      });
      this.feelNumMax = this.checkMax(this.voteInfoList[0].num, this.voteInfoList[1].num, this.voteInfoList[2].num)

      console.log(this.voteInfoList);
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  checkMax(numF, numS, numT) {
    let tempMax: number = 0;
    if (numF >= numS && numF >= numT) {
      return tempMax = numF;
    } else if (numS >= numT) {
      return tempMax = numS;
    } else {
      return tempMax = numT;
    }
  }

  created() {
    document.title = this.metaTitle;
    this.getStoreDetail();
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
