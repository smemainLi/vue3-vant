<template>
  <div class="top">
    <div class="store-picture">
      <div class="store-head">
        <img class="head-portrait" :src="storeInfo.storeLogo?storeInfo.storeLogo:defaultLogo" alt="店铺logo">
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{storeInfo.metaTitle}}</div>
        <div class="store-brief" v-cloak>{{storeInfo.storeBrief}}</div>
        <div class="per-capita" v-cloak>{{storeInfo.perCapita}}</div>
      </div>
      <div class="follow">
        <i class="icon-attention" @click="follow(!storeInfo.isFocus)"></i>
        <div class="follow-word" v-cloak>{{focus}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component({
  props: ["storeInfo"],
  components: {
  }
})
export default class Top extends Vue {
  @Action updateFocus

  defaultLogo = require('../../../assets/image/coupon/mechantLogo.png');
  storeInfo: any;
  storeId = "";
  storeLogo = "";
  metaTitle = "ONLY服饰店";
  storeBrief = "年轻，时尚，就是好";
  perCapita = "人均：45";
  focus = "关注";

  /**
   * 点击切换'取消'与'关注'
   */
  follow(isFocus) {
    if (isFocus) {
      (<any>document).getElementsByClassName('icon-attention')[0].style.color = '#f56e73';
      this.focus = "取消";
    } else {
      (<any>document).getElementsByClassName('icon-attention')[0].style.color = '#d2d2d2';
      this.focus = "关注";
    }
    this.toUpdateFocus(isFocus);
    /* this.recordIsFocus(isFocus);//当切换状态的时候需要将状态存储起来 */
    this.storeInfo.isFocus = !this.storeInfo.isFocus;
  }

  toUpdateFocus(isFocus) {
    let data = { merchantId: this.storeInfo.storeId, selected: isFocus }
    this.updateFocus(data).then((res) => {
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  initUpdateFocus() {
    setTimeout(() => {
      console.log(this.storeInfo.isFocus);
      if (this.storeInfo.isFocus) {
        (<any>document).getElementsByClassName('icon-attention')[0].style.color = '#f56e73';
        this.focus = "取消";
      } else {
        (<any>document).getElementsByClassName('icon-attention')[0].style.color = '#d2d2d2';
        this.focus = "关注";
      }
    }, 500);
  }

  mounted() {
    this.initUpdateFocus();
  }
}
</script>
<style lang="scss" scoped>
.top {
  .store-picture {
    height: 280px;
    padding-top: 35px;
    box-sizing: border-box;
    background: url("../../../assets/image/guide/storeBg.png") no-repeat;
    background-size: 100% 280px;
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
    }
    .follow {
      float: right;
      margin-right: 33px;
      .icon-attention {
        display: block;
        font-size: 48px;
        color: #d2d2d2;
      }
      .follow-word {
        color: $color-00;
        font-size: 24px;
      }
    }
  }
}
</style>
