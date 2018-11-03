<template>
  <div>
    <record :recordItem="item" v-for="(item,index) in recordInfo" :key="index"></record>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from '../../components/common/parking/record.vue';
import { Action } from 'vuex-class';

interface recordInfo {
  money: string,
  number: string,
  integral: string,
  time: string,
}

@Component({
  components: {
    record
  }
})
export default class PaymentRecord extends Vue {
  @Action('parkingPayRecord') parkingPayRecord;

  pageNo: number = 1;//页码
  pageSize: number = 6;//每页有多少条记录
  totalPages: number = 0;//总页面

  recordInfo: Array<recordInfo> = [
    /* {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    }, */
  ];

  /**
   * 未做分页处理
   */
  getParkingPayRecord() {
    let data = {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    };
    this.parkingPayRecord(data).then((res) => {
      console.log(res);
      const recordList = res.data.list;
      for (const key in recordList) {
        if (recordList.hasOwnProperty(key)) {// 只遍历自身属性
          const recordItem: recordInfo = {
            money: `￥${recordList[key].fee}`,
            number: recordList[key].carNum,
            integral: `${recordList[key].deductionIntegral}积分`,
            time: recordList[key].payTime,
          };
          this.recordInfo.push(recordItem);
        }
      }
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  scrollFn() {
    //真实内容的高度
    var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
    //视窗的高度
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    //隐藏的高度
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // if (falgNoData) { //数据全部加载完了
    //   return;
    // } else if (pageHeight - viewportHeight - scrollHeight < 10) {    //如果满足触发条件，执行
    //   showAjax(page);
    // }
  }


  mounted() {
    this.getParkingPayRecord();
    window.addEventListener('scroll', this.scrollFn);
  }
}
</script>
<style lang="scss" scoped>
</style>
