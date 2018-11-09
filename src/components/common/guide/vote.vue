<template>
  <div class="vote">
    <div class="feel-progress" :class="[index===1?'pro-one':'',index===2?'pro-two':'']" v-for="(item,index) in voteInfo" :key="index">
      <van-progress color="#FBDE19" :show-pivot="false" :percentage="parseInt(item.percentage)" />
      <div class="emoticon">
        <img class="emoticon-image" :src="item.emoticon" alt="">
      </div>
      <div class="num" v-cloak>{{item.num}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

interface voteInfo {
  percentage: string,
  emoticon: string,
  num: string;
}

@Component({
  components: {
  }
})
export default class Vote extends Vue {
  fullPoint = 100;

  voteInfo: Array<voteInfo> = [
    {
      percentage: "70",
      emoticon: require("../../../assets/image/guide/like.png"),
      num: "100",
    },
    {
      percentage: "50",
      emoticon: require("../../../assets/image/guide/ordinary.png"),
      num: "55",
    },
    {
      percentage: "10",
      emoticon: require("../../../assets/image/guide/dislike.png"),
      num: "36",
    },
  ];

  test() {
    for (let i = 0; i < this.voteInfo.length; i++) {
      const element = this.voteInfo[i];
      console.log(Number.parseInt(element.num) / this.fullPoint);
      if (Number.parseInt(element.num) / this.fullPoint >= 0.9) {
        this.fullPoint += this.fullPoint * 0.1;
        console.log(this.fullPoint);
        return;
      }
    }
  }

  mounted() {
    this.test();
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
        /* text-align: center;
        margin-top: 100px;
        margin-left: 74px; */
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

