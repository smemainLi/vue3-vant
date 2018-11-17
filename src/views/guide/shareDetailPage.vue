<template>
  <div class="detailPage">
    <top :storeInfo="storeInfo" :isShare="isShare"></top>
    <location :locationInfo="locationInfo" :isShare="isShare"></location>
    <discount :discountInfo="discountInfo"></discount>
    <goods-swiper :goodsInfoList="goodsInfoList"></goods-swiper>
    <card :cardInfo="cardInfoList" :isShare="isShare"></card>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';
import top from '../../components/common/guide/top.vue';
import location from '../../components/common/guide/location.vue';
import discount from '../../components/common/guide/discount.vue';
import goodsSwiper from '../../components/common/guide/goodsSwiper.vue';
import card from '../../components/common/guide/card.vue';

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
  isOffer?: boolean,/* true表示是[抢优惠]页面触发的点击事件(卡片点击事件) */
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
    card,
  }
})
export default class ShareDetailPage extends Vue {
  @Action storeDetailUnauth

  isShare = true;
  storeInfo = {};
  locationInfo = {};
  discountInfo = {};
  goodsInfo = {};
  goodsInfoList: any = [];
  cardInfo = {};
  cardInfoList: any = [];

  metaTitle = "ONLY服饰店";
  couTitle = "优惠券&代金券";

  getStoreDetailUnauth() {
    this.storeDetailUnauth({ merchantId: this.$route.query.merchantId }).then((res) => {
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
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  created() {
    document.title = this.metaTitle;
    this.getStoreDetailUnauth();
  }
}
</script>
