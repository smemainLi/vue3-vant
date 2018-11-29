<template>
  <div class="vote">
    <div class="feel-progress" :class="[index===1?'pro-one':'',index===2?'pro-two':'']" v-for="(item,index) in voteInfoList" :key="index">
      <van-progress color="#FBDE19" :show-pivot="false" :percentage="voteInfoList[index].sum===0?0:parseInt(item.num)/voteInfoList[index].sum*100" />
      <div class="emoticon" @click="choice(index)">
        <img class="emoticon-image" :src="[item.feel?item.selected:item.unSelected]" alt="">
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component({
  props: ["voteInfoList", "merchantId"],
  components: {
  }
})
export default class Vote extends Vue {
  @Action updateFeelGood
  @Action updateFeelSoso
  @Action updateFeelBad

  voteInfoList: any;
  merchantId: any;
  selected: boolean = false;//表情小图标的是否被选中的状态

  /**
   * 点击表情小图标
   */
  choice(index) {
    if (this.voteInfoList[index].feel) {//如果已是选中状态
      this.voteInfoList[index].feel = false;//将原来的feel值置为false
      this.voteInfoList[index].num -= 1;//对应小表情的对应数量减1
      this.selected = false;//选中状态置为false
    } else {
      this.voteInfoList[index].feel = true;//将原来的feel值置为true
      this.voteInfoList[index].num += 1;//对应小表情的对应数量加1
      this.selected = true;//选中状态置为true
    }
    if (index === 0) {
      this.updateFeelGood({ merchantId: this.merchantId, selected: this.selected }).then((res) => {
        console.log(res);
      }).catch((err) => {
        this.$toast.fail(err);
      });
    } else if (index === 1) {
      this.updateFeelSoso({ merchantId: this.merchantId, selected: this.selected }).then((res) => {
        console.log(res);
      }).catch((err) => {
        this.$toast.fail(err);
      });
    } else if (index === 2) {
      this.updateFeelBad({ merchantId: this.merchantId, selected: this.selected }).then((res) => {
        console.log(res);
      }).catch((err) => {
        this.$toast.fail(err);
      });
    }
    let sum = 0;
    /**
     * 用户改变了某个表情小图标的选中数量之后，重新计算三个小图标被选中的总数
     */
    this.voteInfoList.forEach(item => {
      sum += item.num;
    });
    /**
     * 将总数赋值给列表voteInfoList中每一项的sum值
     * 目的是为了重新计算每一个小表情被选中数量占总数的百分比：parseInt(item.num)/voteInfoList[index].sum*100
     */
    this.voteInfoList.forEach(element => {
      element.sum = sum;
    });
  }

  mounted() {
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

