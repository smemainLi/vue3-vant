<template>
  <div class="top">
    <div class="store-title">
      <div class="store-photo">
        <img class="store-image" :src="[mechantInfo.storeLogo?mechantInfo.storeLogo:defaultImage]" alt="">
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{mechantInfo.storeName}}</div>
        <div class="store-brief" v-cloak>{{mechantInfo.storeBrief}}</div>
      </div>
      <!-- 跳转店铺详情页面附带商店id -->
      <router-link class="benefits" tag="div" :to="{path:`/guide/detailPage/${mechantInfo.storeId}`}">
        <van-icon class="arrow-icon" name="arrow" />
        <div class="more-benefits" v-show="mechantInfo.isMore">更多优惠</div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["mechantInfo"],
  components: {
  }
})
export default class Top extends Vue {
  defaultImage = require('../../../assets/image/offer/head.png');
}
</script>
<style lang="scss" scoped>
.top {
  .store-title {
    width: 750px;
    height: 170px;
    background-color: $color-ff;
    .store-photo {
      width: 111px;
      height: 111px;
      float: left;
      margin: 41px 0 0 30px;
      .store-image {
        width: 100%;
        height: 100%;
      }
    }
    .describe {
      float: left;
      margin: 56px 0 0 18px;
      .store-name {
        font-size: 28px;
        color: $color-00;
      }
      .store-brief {
        font-size: 26px;
        color: $color-35;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
      }
    }
    .benefits {
      font-size: 26px;
      color: $color-88;
      .arrow-icon {
        float: right;
        padding: 85px 0 0 0;
        margin-right: 40px;
      }
      .more-benefits {
        float: right;
        padding: 78px 0 0 0;
        margin-right: 10px;
      }
    }
  }
}
</style>
