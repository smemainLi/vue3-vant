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
  scoreNum: string;//分数
  scoreWord: string;//"分"字
  detailsInfo: string;//明细
  content: string;//时间
  plus?: boolean;//判断加减分
}

@Component({
  components: {
    record
  }
})
export default class IntegralDetail extends Vue {
  @Action integralDetail;

  recordInfoList: any = [];

  /**
   * 获取积分明细
   */
  getIntegralDetail() {
    this.integralDetail().then((res) => {
      const detailList = res.data.list;
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
