<template>
  <div class="card">
    <div :class="['no-card',cardInfo.length===0?'':'have-card']">
      <img class="no-card-image" src="../../../assets/image/guide/noCard.png" alt="">
    </div>
    <div :class="['store-card',cardInfo.length!==0?'':'no-store-card']" v-for="(item,index) in cardInfo" @click="[!item.isMask&&item.isOffer?getCard(item):'']" :key="index">
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
          <div class="lower-part-range">
            <div :class="['circle',item.cardType?'discount-circle':'']">●</div>
            <div class="range" v-cloak>{{item.range}}</div>
          </div>
          <div class="lower-part-time">
            <div :class="['circle',item.cardType?'discount-circle':'']">●</div>
            <div class="time" v-cloak>{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from 'vuex-class';

@Component({
  props: ["cardInfo"],
  components: {
  }
})
export default class Card extends Vue {
  @Action rushQuan


  mask = true;

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
}
</script>
<style lang="scss" scoped>
.card {
  margin: 27px 0;
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
  .have-card {
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
      margin-left: 18px;
      .lower-part-range,
      .lower-part-time {
        font-size: 28px;
        color: #582929;
        .circle {
          display: inline-block;
          color: #fbde19;
          margin-right: 15px;
        }
        .discount-circle {
          color: #f56e72;
        }
      }
      .lower-part-range {
        .range {
          display: inline-block;
          margin-top: 4px;
        }
      }
      .lower-part-time {
        .time {
          display: inline-block;
          margin-top: 4px;
        }
      }
    }
  }
  .no-store-card {
    display: none;
  }
}
</style>
