<template>
  <div class="detailPage">
    <top :storeInfo="storeInfo"></top>
    <discount class="discount" :discountInfo="discountInfo"></discount>
    <goods-swiper :goodsInfoList="goodsInfoList"></goods-swiper>
    <coupon-title :titleContent="couTitle"></coupon-title>
    <card :cardInfo="cardInfoList"></card>
    <coupon-title class="feel" :titleContent="feelTitle"></coupon-title>
    <feeling :voteInfoList="voteInfoList" :merchantId="this.$route.params.merchantId"></feeling>
    <pop :storeNoOpen="noExistence"></pop>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';
import top from '../../components/common/guide/top.vue';
import discount from '../../components/common/guide/discount.vue';
import goodsSwiper from '../../components/common/guide/goodsSwiper.vue';
import couponTitle from '../../components/common/guide/couponTitle.vue';
import card from '../../components/common/guide/card.vue';
import feeling from '../../components/common/guide/feeling.vue';
import pop from '../../components/common/guide/pop.vue';

interface storeInfo {
  storeId: string,/* 店铺id */
  storeLogo: string,/* 店铺logo */
  metaTitle: string,/* 店铺名称 */
  storeBrief: string,/* 店铺简介 */
  perCapita: string,/* 人均 */
  isFocus: boolean,/* 是否已经关注 */
  site: string,/* 店铺位置 */
  noSite: boolean,/* 判断地理位置是否为空 */
  phone: string,/* 店铺电话 */
}


interface goodsInfo {
  goodsId: string,/* 商品id */
  image: string,/* 商品图片 */
  name: string,/* 商品名称 */
  price: string,/* 商品价格 */
}

interface cardInfo {
  cardId: string,/* 卡片 */
  bgImage: string,/* 卡片背景图 */
  parValue: string,/* 面值 */
  fullReduction: string,/* 满减 */
  range: string,/* 适用范围 */
  time: string,/* 适用期限 */
  cardType: number,/* 0表示满减(黄色卡片背景)，1表示代金券(红色卡片背景) */
  isMask?: boolean,/* false表示还有券，true表示已抢光 */
  isOffer?: boolean,/* true表示是[抢优惠]页面触发的点击事件(卡片点击事件) */
  finish?: string,/* 判断标识，是否已经被抢光 */
}

@Component({
  components: {
    top,
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

  storeInfo = {};
  discountInfo: string = "";/* 线下活动标题 */
  goodsInfo = {};
  goodsInfoList: any = [];
  cardInfo = {};
  cardInfoList: any = [];
  voteInfoList: any = [];/* 数据列表：用户对店铺的感觉 */
  noExistence: boolean = false;
  feelSum: number = 0;

  couTitle = "优惠券&代金券";
  feelTitle = "大家对该店的感觉";
  boxTitle = "该店铺装修中";
  boxMiddle = "肯定你姿势不对呀~";
  btnName: string = "换个姿势";

  getStoreDetail() {
    this.storeDetail({ merchantId: this.$route.params.merchantId }).then((res) => {
      const storeDetailList = res.data;
      this.noExistence = storeDetailList.openStatus === 0 ? false : true;
      this.storeInfo = {
        storeId: this.$route.params.merchantId,
        storeLogo: storeDetailList.logo,
        metaTitle: storeDetailList.storeName,
        storeBrief: storeDetailList.storeDesc,
        perCapita: `人均：${storeDetailList.percapita}`,
        isFocus: storeDetailList.isFocus,
        site: `${storeDetailList.floor}${storeDetailList.floorAddr}`,
        noSite: !storeDetailList.floor || !storeDetailList.floorAddr ? false : true,
        phone: `tel:${storeDetailList.contactPhone}`,
      }
      document.title = storeDetailList.storeName;/* 设置页面的title */
      this.discountInfo = storeDetailList.activityName;
      for (let i = 0; i < storeDetailList.goodsList.length; i++) {
        const goods = storeDetailList.goodsList[i];
        this.goodsInfo = {
          goodsId: goods.goodsId,
          image: goods.goodsImage,
          name: goods.goodsName,
          price: `￥${goods.netPrice}`,
        }
        this.goodsInfoList.push(this.goodsInfo);
      }
      for (let i = 0; i < storeDetailList.quanList.length; i++) {
        const card = storeDetailList.quanList[i];
        this.cardInfo = {
          cardId: card.quanId,
          bgImage: card.typeName === "优惠券" ? require("../../assets/image/guide/cash.png") : require("../../assets/image/guide/discount.png"),
          parValue: `￥${card.discount}`,
          fullReduction: card.typeName === "优惠券" ? `满${card.amount}可用` : card.typeName,
          range: card.usable,
          time: `${card.startDateStr}-${card.endDateStr}`,
          cardType: card.typeName === "优惠券" ? 0 : 1,/* 0表示满减(黄色卡片背景)，1表示代金券(红色卡片背景) */
          isMask: false,
          isOffer: false,/* true表示是抢优惠券页面触发的点击事件(卡片点击事件) */
          finish: "抢光了，下次早点来哦",
        }
        this.cardInfoList.push(this.cardInfo);
      }
      //计算各种小表情被选中数量的总数
      this.feelSum = storeDetailList.feels.feelGoodNum + storeDetailList.feels.feelSosoNum + storeDetailList.feels.feelBadNum;
      this.voteInfoList.push({
        percentage: "0",/* 进度条百分比 */
        unSelected: require('../../assets/image/guide/olike.png'),/* 未选中的图标 */
        selected: require('../../assets/image/guide/like.png'),/* 选中后的图标 */
        num: storeDetailList.feels.feelGoodNum,/* 数量 */
        sum: this.feelSum,/* 所有数量的总和 */
        feel: storeDetailList.feels.feelGood,/* 是否已经被选过 true:已选过 false:未选过 */
      });
      this.voteInfoList.push({
        percentage: "0",/* 进度条百分比 */
        unSelected: require('../../assets/image/guide/oordinary.png'),/* 未选中的图标 */
        selected: require('../../assets/image/guide/ordinary.png'),/* 选中后的图标 */
        num: storeDetailList.feels.feelSosoNum,/* 数量 */
        sum: this.feelSum,/* 所有数量的总和 */
        feel: storeDetailList.feels.feelSoso,/* 是否已经被选过 true:已选过 false:未选过 */
      });
      this.voteInfoList.push({
        percentage: "0",/* 进度条百分比 */
        unSelected: require('../../assets/image/guide/odislike.png'),/* 未选中的图标 */
        selected: require('../../assets/image/guide/dislike.png'),/* 选中后的图标 */
        num: storeDetailList.feels.feelBadNum,/* 数量 */
        sum: this.feelSum,/* 所有数量的总和 */
        feel: storeDetailList.feels.feelBad,/* 是否已经被选过 true:已选过 false:未选过 */
      });
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  created() {
    this.getStoreDetail();
  }
}
</script>
<style lang="scss" scoped>
.detailPage {
  .discount {
    margin: 24px 0;
  }
}
</style>
