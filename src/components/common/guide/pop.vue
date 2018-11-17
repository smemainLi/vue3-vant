<template>
  <div class="pop">
    <van-popup :class="[false?'pop-box':'',false?'pop-plus':'']" v-model="test" :close-on-click-overlay="false" :overlay="false">

      <div class="store-no-open" v-show="false">
        <div class="pop-box-top">
          <div class="box-top-title" v-cloak>sdkhfksdhfkjsdf</div>
          <router-link class="box-top-close" tag="div" :to="{path:'/guide/index'}">×</router-link>
        </div>
        <div class="pop-box-middle" v-cloak>sdfasdfasdfsdaf</div>
        <router-link :to="{path:'/guide/index'}">
          <common-Btn :btnName="btnName" class="pop-box-bottom-btn"></common-Btn>
        </router-link>
      </div>

      <div class="plus-score" v-show="false">
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
import { getStore } from "../../../config/utils";
import commonBtn from '../../../components/common/button.vue';

@Component({
  // props: ["modelVal", "tt1", "tt2"],
  props: {
    modelVal: {
      type: Boolean,
      default: false
    },
    tt1: {
      type: Boolean,
      default: false
    },
    tt2: {
      type: Boolean,
      default: false
    },
  },
  components: {
    commonBtn
  }
})
export default class Pop extends Vue {
  show = true;

  test = true;
  tt = true;
  testWinPoints = getStore("winPoints");
  scoreValue = "+5分";
  tipValue = "成功积分";

  boxTitle = "该店铺装修中";
  boxMiddle = "肯定你姿势不对呀~";
  btnName: string = "换个姿势";

  @Watch("tt1")
  nishi() {

  }

}
</script>

<style lang="scss" scoped>
.pop {
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
}
</style>
