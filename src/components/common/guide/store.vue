<template>
  <div class="store">
    <div class="introduce">
      <div class="shop-picture">
        <img class="shop-image" :src="[introduce.storeLogo?introduce.storeLogo:defaultImg]" alt="">
        <div class="per-capita" v-show="introduce.perCapita" v-cloak>人均{{introduce.perCapita}}元</div>
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{introduce.storeName}}</div>
        <div :class="['store-brief',introduce.storeBrief?'':'store-no-brief']" v-cloak>{{introduce.storeBrief}}</div>
        <div class="store-label">
          <Tag :tagItem="item" v-for="(item,index) in introduce.tags" :key="index" v-cloak>{{introduce.storeLabel}}</Tag>
        </div>
      </div>
      <div class="floor" v-cloak>{{introduce.floor}}</div>
    </div>
    <div class="discount">
      <div class="benefit row" v-show="introduce.benefitContent">
        <div class="title">{{introduce.benefitTitle}}</div>
        <div class="content" v-cloak>{{introduce.benefitContent}}</div>
      </div>
      <div class="ticket row" v-show="introduce.ticketContent">
        <div class="title">{{introduce.ticketTitle}}</div>
        <div class="content" v-cloak>{{introduce.ticketContent}}</div>
      </div>

      <div class="voucher row" v-show="introduce.voucherContent">
        <div class="title">{{introduce.voucherTitle}}</div>
        <div class="content" v-cloak>{{introduce.voucherContent}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import Tag from './tag.vue'

@Component({
  props: ["introduce"],
  components: {
    Tag
  }
})
export default class Tab extends Vue {
  defaultImg = require('../../../assets/image/coupon/store.png');
}
</script>
<style lang="scss" scoped>
.store {
  background-color: $color-ff;
  border-top: 1px solid $color-f5;
  padding-bottom: 28px;
  .introduce,
  .discount {
    padding-top: 32px;
    margin-left: 30px;
  }
  .introduce {
    .shop-picture {
      position: relative;
      float: left;
      .shop-image {
        display: block;
        width: 154px;
        height: 154px;
      }
      .per-capita {
        position: absolute;
        bottom: 0;
        width: 154px;
        height: 32px;
        font-size: 22px;
        line-height: 32px;
        padding-left: 9px;
        box-sizing: border-box;
        color: $color-f5;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
    .describe {
      float: left;
      margin-left: 21px;
      .store-name {
        color: $color-00;
        font-size: 28px;
      }
      .store-brief {
        color: $color-88;
        font-size: 24px;
        padding-top: 12px;
      }
      .store-no-brief {
        height: 32px;
        visibility: hidden;
      }
      .store-label {
        margin-top: 28px;
      }
    }
    .floor {
      color: $color-00;
      float: right;
      margin-right: 39px;
      font-size: 32px;
    }
  }
  .discount {
    clear: both;
    .row {
      font-size: 24px;
      margin-bottom: 14px;
      .title {
        width: 30px;
        height: 30px;
        color: $color-f5;
        line-height: 30px;
        text-align: center;
        display: inline-block;
      }
      .content {
        color: $color-88;
        display: inline-block;
        line-height: 26px;
        margin-left: 19px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 668px;
      }
    }
    .benefit {
      .title {
        background-color: #f56e72;
      }
    }
    .ticket {
      .title {
        background-color: #c2bcff;
      }
    }
    .voucher {
      .title {
        background-color: #aae3bf;
      }
    }
  }
}
</style>
