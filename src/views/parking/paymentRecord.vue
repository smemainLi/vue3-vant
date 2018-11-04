<template>
  <div>
    <record :recordItem="item" v-for="(item,index) in recordInfo" :key="index"></record>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from "../../components/common/parking/record.vue";
import { Action } from "vuex-class";

interface recordInfo {
  money: string;
  number: string;
  integral: string;
  time: string;
}

@Component({
  components: {
    record
  }
})
export default class PaymentRecord extends Vue {
  @Action("parkingPayRecord")
  parkingPayRecord;

  pageNo: number = 1; //页码
  pageSize: number = 6; //每页有多少条记录
  noRecord: boolean = true; //没有数据

  recordInfo: Array<recordInfo> = [
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25"
    }
  ];

  /**
   * 未做分页处理
   */
  getParkingPayRecord() {
    let data = {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    };
    this.parkingPayRecord(data)
      .then(res => {
        console.log(res);
        const recordList = res.data.list;
        this.noRecord = false;
        if (recordList.length === 0) {
          this.noRecord = true;
        }
        for (const key in recordList) {
          if (recordList.hasOwnProperty(key)) {
            // 只遍历自身属性
            const recordItem: recordInfo = {
              money: `￥${recordList[key].fee}`,
              number: recordList[key].carNum,
              integral: `${recordList[key].deductionIntegral}积分`,
              time: recordList[key].payTime
            };
            this.recordInfo.push(recordItem);
          }
        }
      })
      .catch(err => {
        this.$toast.fail(err);
      });
  }

  scrollFn() {
    //真实内容的高度
    var pageHeight = Math.max(
      (<any>document).body.scrollHeight,
      (<any>document).body.offsetHeight
    );
    //视窗的高度
    var viewportHeight =
      window.innerHeight ||
      (<any>document).documentElement.clientHeight ||
      (<any>document).body.clientHeight ||
      0;
    //隐藏的高度
    var scrollHeight =
      window.pageYOffset ||
      (<any>document).documentElement.scrollTop ||
      (<any>document).body.scrollTop ||
      0;
    if (this.noRecord) {
      //数据全部加载完了
      this.$toast.success("全部加载完了");
      return;
    } else if (pageHeight - viewportHeight - scrollHeight < 10) {
      //如果满足触发条件，执行
      this.pageNo += 1;
      this.getParkingPayRecord();
    }
  }

  mounted() {
    /* this.getParkingPayRecord(); */
    window.addEventListener("scroll", this.scrollFn);
  }
}
</script>
<style lang="scss" scoped>
</style>
