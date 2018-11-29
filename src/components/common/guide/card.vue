<template>
  <div class="card">
    <div :class="['no-card',cardInfo.length===0?'':'have-card']">
      <img class="no-card-image" src="../../../assets/image/guide/noCard.png" alt="">
    </div>
    <div :class="['store-card',cardInfo.length!==0?'':'no-store-card']" v-for="(item,index) in cardInfo" @click="[!item.isMask&&item.isOffer?getCard(item):isShare?downApp():'']" :key="index">
      <div class="">
        <div :class="['no-mask',item.isMask?'mask':'']" v-cloak>{{item.finish}}</div>
        <div class="bg-photo">
          <img class="bg-image" :src="item.bgImage" alt="">
        </div>
        <div :class="['upper-part',item.cardType?'is-discount':'']">
          <div class="par-value" v-cloak>{{item.parValue}}</div>
          <div class="full-reduction" v-cloak>{{item.fullReduction}}</div>
        </div>
        <div :class="[item.cardType?'discount-cut-line':'cut-line']"></div>
        <div class="lower-part">
          <ul class="lower-part-range">
            <li :class="['part-circle',item.cardType?'discount-card':'']" v-cloak><span class="part-content">{{item.range}}</span></li>
          </ul>
          <ul class="lower-part-time">
            <li :class="['part-circle',item.cardType?'discount-card':'']" v-cloak><span class="part-content">{{item.time}}</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component({
  props: ["cardInfo", "isShare"],//isShare是通过shareDetailPage页面传过来的判断标识，判断是否是通过app分享至微信端的页面
  components: {
  }
})
export default class Card extends Vue {
  @Action rushQuan

  mask = true;

  /**
   * 抢券
   */
  getCard(card) {
    let data = {
      id: card.cardId,
      type: card.cardType
    };
    this.rushQuan(data).then((res) => {
      console.log(res);
      this.$toast.success('抢成功！')
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
.card {
  margin: 2px 0;
  padding: 14px 32px;
  box-sizing: border-box;
  position: relative;
  background-color: $color-ff;
  z-index: 1;
  .no-card {
    height: 410px;
    .no-card-image {
      width: 100%;
      height: 100%;
    }
  }
  .have-card,
  .no-store-card {
    display: none;
  }
  .store-card {
    width: 686px;
    height: 240px;
    padding: 14px 0;
    .no-mask {
      display: none;
    }
    .mask {
      display: block;
      width: 686px;
      height: 240px;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      z-index: 2;
      color: $color-ff;
      font-size: 40px;
      text-align: center;
      line-height: 240px;
      font-weight: 800;
    }
    .bg-photo {
      .bg-image {
        display: block;
        width: 686px;
        height: 240px;
        position: absolute;
        z-index: -2;
      }
    }
    .upper-part {
      color: #fbde19;
      margin-left: 20px;
      .par-value {
        display: inline-block;
        font-size: 56px;
        margin-top: 41px;
      }
      .full-reduction {
        display: inline-block;
        font-size: 34px;
        margin-left: 22px;
        margin-top: 62px;
      }
    }
    .is-discount {
      color: #f56e72;
    }
    .cut-line {
      width: 292px;
      margin: 4px 0 0 22px;
      border-bottom: 2px solid #fbde19;
    }
    .discount-cut-line {
      width: 292px;
      margin: 4px 0 0 22px;
      border-bottom: 2px solid #f56e72;
    }
    .lower-part {
      margin: 12px 0 0 52px;
      .lower-part-time {
        margin-top: 12px;
      }
      .part-circle {
        color: #fbde19;
      }
      .discount-card {
        color: #f56e72;
      }
      .part-content {
        font-size: 28px;
        color: #582929;
      }
    }
  }
}
</style>
