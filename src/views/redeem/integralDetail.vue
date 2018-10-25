<template>
  <div class="integralDetail">
    <record :recordInfo="item" v-for="(item,index) in recordInfo" :key="index"></record>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from '../../components/common/redeem/record.vue';

interface recordInfo {
  scoreNum: string;
  scoreWord: string;
  detailsInfo: string;
  content: string;
  plus?: boolean;
}

@Component({
  components: {
    record
  }
})
export default class IntegralDetail extends Vue {
  recordInfo: Array<recordInfo> = [
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
  ]
}
</script>
<style lang="scss" scoped>
</style>
