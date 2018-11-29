<template>
  <div class="pop">
    <van-popup :class="[storeNoOpen?'pop-box':'',plusScore?'pop-plus':'']" v-model="popModel" :close-on-click-overlay="false" :overlay="storeNoOpen">
      <!-- :overlay="storeNoOpen" 当店铺处于关闭状态的时候需要蒙层，其他时候都将蒙层去掉 -->
      <div class="store-no-open" v-show="storeNoOpen">
        <div class="pop-box-top">
          <div class="box-top-title" v-cloak>{{boxTitle}}</div>
          <router-link class="box-top-close" tag="div" :to="{path:'/guide/index'}">×</router-link>
        </div>
        <div class="pop-box-middle" v-cloak>{{boxMiddle}}</div>
        <router-link :to="{path:'/guide/index'}">
          <common-Btn :btnName="btnName" class="pop-box-bottom-btn"></common-Btn>
        </router-link>
      </div>
      <div class="plus-score" v-show="plusScore">
        <div class="plus-content">
          <div class="score-value" v-cloak>{{scoreValue}}</div>
          <div class="tip-value" v-cloak>{{tipValue}}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { getStore, getCookie } from "../../../config/utils";
import { gotoShare } from "../../../service/getData";
import { State, Mutation } from "vuex-class";
import commonBtn from "../../../components/common/button.vue";
import wx from "weixin-js-sdk";

@Component({
  props: {
    storeNoOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    commonBtn
  }
})
export default class Pop extends Vue {
  @State(State => State.guide.winPoints) winPoints

  popModel: boolean = false;//van-popup绑定的v-model，表示当前组件是否显示 true:显示 false:不显示
  storeNoOpen: any;//店铺是否处于关闭状态的判断标识
  plusScore: any = false;//是否显示+5分的判断标识

  scoreValue = "+5分";
  tipValue = "成功积分";

  boxTitle = "该店铺装修中";
  boxMiddle = "肯定你姿势不对呀~";
  btnName: string = "换个姿势";

  @Watch("storeNoOpen")
  storeChange(newVal, oldVal) {
    if (newVal) {//storeNoOpen的值为true，表示该店铺处于关闭状态，不允许分享
      this.forbidShare();
      this.popModel = newVal;
    }
  }

  @Watch("winPoints")
  plusChange(newVal, oldVal) {
    if (newVal) {//winPoints的值为true，表示是首次分享店铺，+5分
      this.popModel = newVal;
      this.plusScore = newVal;
      setTimeout(() => {//+5分的提示框只显示1秒
        this.popModel = false;
        this.plusScore = false;
      }, 1000);
    }
  }

  /**
   * 禁止分享朋友圈
   */
  forbidShare() {
    wx.ready(function () {
      wx.hideOptionMenu();
    });
  }

  /**
   * 允许分享朋友圈
   */
  allowShare() {
    wx.ready(function () {
      wx.showOptionMenu();
    })
  }

  mounted() {
    this.allowShare();//默认允许用户分享朋友圈
  }
}
</script>

<style lang="scss" scoped>
.pop {
  .buttonbtn {
    width: 200px;
    height: 200px;
  }
  .pop-box {
    width: 686px;
    height: 542px;
    border-radius: 10px;
    text-align: center;
    .store-no-open {
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
  .pop-plus {
    .plus-score {
      background: #0c0c0c;
      opacity: 0.72;
      border-radius: 10px;
      .plus-content {
        width: 230px;
        height: 230px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color: $color-ff;
        .score-value {
          font-size: 48px;
          font-weight: bold;
        }
        .tip-value {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
