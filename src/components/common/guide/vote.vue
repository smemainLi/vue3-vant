<template>
  <div class="vote">
    <div class="feel-progress" :class="[index===1?'pro-one':'',index===2?'pro-two':'']" v-for="(item,index) in voteInfoList" :key="index">
      <van-progress color="#FBDE19" :show-pivot="false" :percentage="parseInt(item.num)/fullPoint*100" />
      <div class="emoticon" @click="test(index)">
        <img class="emoticon-image" :src="item.emoticon" alt="">
      </div>
      <div class="num" v-cloak>{{item.num}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

interface voteInfo {
  percentage: string,
  emoticon: string,
  num: string;
}

@Component({
  props: ["voteInfoList", "feelNumMax", "merchantId"],
  components: {
  }
})
export default class Vote extends Vue {
  voteInfoList: any;
  feelNumMax: any;
  feelTempMax: any;
  feelCurrentMax: any;
  merchantId: any;
  selected: boolean = false;
  fullPoint: number = 999999;//满值
  flag0 = 0; flag1 = 0; flag2 = 0;

  /**
   * 重置满值fullPoint，将满值设置为用户对本店'感觉值'最大值除以0.9
   */
  resetFullPoint() {
    setTimeout(() => {
      this.feelCurrentMax = this.feelNumMax;
      this.fullPoint = this.feelCurrentMax / 0.9;
    }, 500);
  }

  test(index) {
    if (index === 0) {
      if (this.flag0 === 0) {
        this.flag0 = 1;
        this.voteInfoList[index].num += 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[1].num, this.voteInfoList[2].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      } else {
        this.flag0 = 0;
        this.voteInfoList[index].num -= 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[1].num, this.voteInfoList[2].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      }
    } else if (index === 1) {
      if (this.flag1 === 0) {
        this.flag1 = 1;
        this.voteInfoList[index].num += 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[0].num, this.voteInfoList[2].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      } else {
        this.flag1 = 0;
        this.voteInfoList[index].num -= 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[0].num, this.voteInfoList[2].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      }
    } else if (index === 2) {
      if (this.flag2 === 0) {
        this.flag2 = 1;
        this.voteInfoList[index].num += 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[1].num, this.voteInfoList[0].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      } else {
        this.flag2 = 0;
        this.voteInfoList[index].num -= 1;
        this.feelCurrentMax = this.checkMax(this.voteInfoList[index].num, this.voteInfoList[1].num, this.voteInfoList[0].num);
        this.fullPoint = this.feelCurrentMax / 0.9;
      }
    }
  }

  checkMax(numF, numS, numT) {
    let tempMax: number = 0;
    if (numF >= numS && numF >= numT) {
      return tempMax = numF;
    } else if (numS >= numT) {
      return tempMax = numS;
    } else {
      return tempMax = numT;
    }
  }

  mounted() {
    this.resetFullPoint();
  }

}
</script>
<style lang="scss" scoped>
.vote {
  width: 750px;
  .feel-progress {
    padding-top: 162px;
    padding-left: 85px;
    float: left;
    /deep/ .van-progress {
      transform: rotate(-90deg);
      height: 14px;
      width: 196px;
      border-radius: 0;
    }
    .emoticon {
      .emoticon-image {
        width: 48px;
        height: 48px;
        display: block;
        margin: auto;
        padding: 100px 0 10px 0;
      }
    }
    .num {
      font-size: 28px;
      text-align: center;
    }
  }
  .pro-one {
    padding-left: 0px;
  }
  .pro-two {
    padding-left: 0px;
  }
}
</style>

