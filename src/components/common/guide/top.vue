<template>
  <div class="top">
    <div class="store-info">
      <div class="store-head">
        <img class="head-portrait" :src="storeInfo.storeLogo?storeInfo.storeLogo:defaultLogo" alt="店铺logo">
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{storeInfo.metaTitle}}</div>
        <div class="store-brief" v-cloak>{{storeInfo.storeBrief}}</div>
        <div class="per-capita" v-cloak>{{storeInfo.perCapita}}</div>
      </div>
    </div>
    <div class="store-detail">
      <div class="coordinates">
        <i class="icon-coordinates">
          <span class="path1"></span><span class="path2"></span>
        </i>
      </div>
      <div class="site" v-cloak>{{storeInfo.noSite?storeInfo.site:''}}</div>
      <div class="follow">
        <i class="icon-attention" :id="[storeInfo.isFocus?'already-focus':'un-foucus']" @click="follow()" v-show="!isShare"></i>
        <i class="icon-attention" @click="downApp" v-show="isShare"></i>
        <div class="follow-word" v-text="storeInfo.isFocus?unFocus:focus"></div>
      </div>
      <div class="telephone">
        <div class="phone-info" v-show="!isShare">
          <a :href="storeInfo.phone">
            <img class="phone-img" :src="phoneImg" alt="">
          </a>
          <div class="phone-word">{{phoneWord}}</div>
        </div>
        <div class="phone-info" v-show="isShare">
          <a @click="downApp">
            <img class="phone-img" :src="phoneImg" alt="">
          </a>
          <div class="phone-word">{{phoneWord}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component({
  props: ["storeInfo", "isShare"],
  components: {
  }
})
export default class Top extends Vue {
  @Action updateFocus

  defaultLogo = require('../../../assets/image/coupon/mechantLogo.png');
  phoneImg = require('../../../assets/image/guide/phone.png');
  storeInfo: any;
  focus = "关注";
  unFocus = "取消";
  phoneWord = "电话";

  site = "4楼12层";
  phone = "tel:13726298724";

  /**
   * 关注或取消
   */
  follow() {
    this.storeInfo.isFocus = !this.storeInfo.isFocus;
    const data = { merchantId: this.storeInfo.storeId, selected: this.storeInfo.isFocus };
    this.updateFocus(data).then((res) => {
      console.log(res);
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  /**
   * 跳转下载
   */
  downApp() { return new this.$JumpDownload() }

}
</script>
<style lang="scss" scoped>
.top {
  background: url("../../../assets/image/guide/storeBg.png") no-repeat;
  background-size: 100% 280px;
  height: 280px;
  padding-top: 35px;
  box-sizing: border-box;
  .store-info {
    .store-head {
      float: left;
      margin-left: 32px;
      .head-portrait {
        display: block;
        width: 120px;
        height: 120px;
      }
    }
    .describe {
      float: left;
      margin-left: 17px;
      color: $color-00;
      font-size: 28px;
      .store-brief {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 417px;
      }
    }
  }
  .store-detail {
    clear: both;
    font-size: 24px;
    color: $color-00;
    .coordinates {
      float: left;
      margin: 70px 10px 0 32px;
      font-size: 22px;
      color: $color-35;
    }
    .site {
      float: left;
      margin-top: 65px;
      font-size: 28px;
      color: $color-00;
    }
    .telephone {
      float: right;
      margin: 16px 61px 0 0;
      .phone-info {
        text-align: center;
        .phone-img {
          width: 60px;
          height: 60px;
        }
      }
    }
    .follow {
      float: right;
      margin: 20px 28px 0 0;
      .icon-attention {
        font-size: 48px;
        color: $color-d2;
      }
      #already-focus {
        color: #f56e73;
      }
      #un-foucus {
        color: $color-d2;
      }
      .follow-word {
        margin-top: 10.5px;
      }
    }
  }
}
</style>
