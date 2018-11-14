<template>
  <div class="integralDetail">
    <record :recordInfo="item" v-for="(item,index) in recordInfoList" :key="index"></record>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from '../../components/common/redeem/record.vue';
import { Action } from 'vuex-class';

interface recordInfo {
  scoreNum: string;
  scoreWord: string;
  detailsInfo: string;
  content: string;
  plus?: boolean;//判断加减
}

@Component({
  components: {
    record
  }
})
export default class IntegralDetail extends Vue {
  @Action integralDetail;

  recordInfoList: any = [];

  /* recordInfo: Array<recordInfo> = [
    {
      scoreNum: "+5",
      scoreWord: "分",
      detailsInfo: "优惠券买单(小精灵茶餐厅)",
      content: "2018-07-27 10:45:25",
      plus: true,
    },
    {
      scoreNum: "+5",
      scoreWord: "分",
      detailsInfo: "优惠券买单(小精灵茶餐厅)",
      content: "2018-07-27 10:45:25",
      plus: true,
    },
    {
      scoreNum: "-5",
      scoreWord: "分",
      detailsInfo: "兑换礼品",
      content: "2018-07-27 10:45:25",
      plus: false,
    },
    {
      scoreNum: "+5",
      scoreWord: "分",
      detailsInfo: "优惠券买单(小精灵茶餐厅)",
      content: "2018-07-27 10:45:25",
      plus: true,
    },
  ] */

  getIntegralDetail() {
    this.integralDetail().then((res) => {
      const detailList = res.data.list;
      console.log(detailList);
      for (let i = 0; i < detailList.length; i++) {
        const record = detailList[i];
        const recordInfo: recordInfo = {
          scoreNum: record.raise,
          scoreWord: '分',
          detailsInfo: record.comment,
          content: record.createDate,
          plus: record.isAdd,
        }
        this.recordInfoList.push(recordInfo);
      }
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  mounted() {
    this.getIntegralDetail();
  }

}
</script>
<style lang="scss" scoped>
</style>
