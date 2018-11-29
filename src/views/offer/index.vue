<template>
  <div class="offer">
    <div class="store" v-for="(item,index) in mechantInfoList" :key="index">
      <top :mechantInfo="mechantInfoList[index]"></top>
      <discount :discountInfo="discountInfoList[index]"></discount>
      <div class="coupon-voucher">
        <card class="card" :cardInfo="cardInfoList[index]"></card>
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
import { Action } from 'vuex-class';

interface mechantInfo {
  storeId: string,/* 商店id */
  storeLogo: string,/* 商店logo */
  storeName: string,/* 商店名称 */
  storeBrief: string,/* 商店简介 */
  isMore: boolean/* 判断标识，是否有更多优惠 */
}

interface cardInfo {
  cardId: string,/* 卡片id */
  bgImage: string,/* 卡片背景图 */
  parValue: string,/* 卡片面值 */
  fullReduction: string,/* 满减值 */
  range: string,/* 适用范围 */
  time: string,/* 适用期限 */
  cardType: number,/* 0表示满减(黄色卡片背景)，1表示代金券(红色卡片背景) */
  isMask?: boolean,/* false表示还有券，true表示已抢光 */
  isOffer?: boolean,/* true表示是抢优惠券页面触发的点击事件(卡片点击事件) */
  finish?: string,/* 判断标识，是否已经被抢光 */
}

@Component({
  components: {
    top,
    discount,
    couponTitle,
    card
  }
})
export default class Member extends Vue {
  @Action storeDiscount

  length: number = 0;
  mechantInfoList: Array<mechantInfo> = [];
  discountInfoList: Array<Object> = [];
  cardInfoList: any = [];

  async getStoreDiscount() {
    await this.storeDiscount().then((res) => {
      const mechantList = res.data.list;
      this.length = mechantList.length;
      for (let i = 0; i < this.length; i++) {
        const mechant = mechantList[i];
        const mechantInfo: mechantInfo = {
          storeId: mechant.mechantInfo.mechantId,
          storeLogo: mechant.mechantInfo.mechantLogo,
          storeName: mechant.mechantInfo.mechantName,
          storeBrief: mechant.mechantInfo.merchantDesc,
          isMore: mechant.mechantInfo.isMore,
        }
        this.mechantInfoList.push(mechantInfo);

        const discountInfo = mechant.mechantInfo.activityName;//线下活动标题
        this.discountInfoList.push(discountInfo);

        const cardInfo: cardInfo = {
          cardId: mechant.mechantQuan.quanId,
          bgImage: mechant.mechantQuan.type === 0 ? require("../../assets/image/guide/cash.png") : require("../../assets/image/guide/discount.png"),
          parValue: `￥${mechant.mechantQuan.discount}`,
          fullReduction: `满${mechant.mechantQuan.amount}可用`,
          range: mechant.mechantQuan.usable,
          time: `${mechant.mechantQuan.startDateStr}-${mechant.mechantQuan.endDateStr}`,
          cardType: mechant.mechantQuan.type,
          isMask: false,//默认没被抢光
          isOffer: true,
        }
        //将cardInfo放到一个数组中，然后再推入另一个数组中
        this.cardInfoList.push([cardInfo]);
      }
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  mounted() {
    this.getStoreDiscount();
  }

}
</script>

<style lang="scss" scoped>
.offer {
  padding-top: 10px;
  .store {
    margin-bottom: 24px;
    .coupon-title {
      margin-top: 24px;
    }
    .coupon-voucher {
      .card {
        margin: 0;
        padding: 0 32px;
      }
    }
  }
}
</style>