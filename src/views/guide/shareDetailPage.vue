<template>
  <div class="shareDetailPage">
    <top :storeInfo="storeInfo" :isShare="isShare"></top>
    <discount :discountInfo="discountInfo"></discount>
    <goods-swiper :goodsInfoList="goodsInfoList"></goods-swiper>
    <coupon-title :titleContent="couTitle"></coupon-title>
    <card :cardInfo="cardInfoList" :isShare="isShare"></card>
    <!-- 蒙层 -->
    <layer></layer>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';
import layer from '../../components/common/layer.vue';
import top from '../../components/common/guide/top.vue';
import discount from '../../components/common/guide/discount.vue';
import goodsSwiper from '../../components/common/guide/goodsSwiper.vue';
import couponTitle from '../../components/common/guide/couponTitle.vue';
import card from '../../components/common/guide/card.vue';

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
    layer
  }
})
export default class ShareDetailPage extends Vue {
  @Action storeDetailUnauth

  isShare = true;/* 判断标识，是否是app分享至微信端的页面 */
  storeInfo = {};
  discountInfo: string = "";/* 线下活动标题 */
  goodsInfo = {};
  goodsInfoList: any = [];
  cardInfo = {};
  cardInfoList: any = [];

  couTitle = "优惠券&代金券";

  getStoreDetailUnauth() {
    this.storeDetailUnauth({ merchantId: this.$route.query.merchantId }).then((res) => {
      this.storeInfo = {
        storeId: this.$route.params.merchantId,
        storeLogo: res.data.logo,
        metaTitle: res.data.storeName,
        storeBrief: res.data.storeDesc,
        perCapita: `人均：${res.data.percapita}`,
        isFocus: res.data.isFocus,
        site: `${res.data.floor}${res.data.floorAddr}`,
        noSite: !res.data.floor || !res.data.floor ? false : true,
        phone: `tel:${res.data.contactPhone}`,
      }
      document.title = res.data.storeName;/* 设置页面的title */
      this.discountInfo = res.data.activityName;
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
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  created() {
    this.getStoreDetailUnauth();
  }
}
</script>
