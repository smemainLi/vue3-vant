<template>
  <div class="paymentRecord">
    <record :recordItem="item" v-for="(item,index) in recordInfo" :key="index"></record>
    <div class="no-record" v-show="recordInfo.length===0">
      <img class="placeholder-img" :src="placeholderImg" alt="">
      <div class="no-payment-record" v-cloak>{{noPaymentRecord}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from "../../components/common/parking/record.vue";
import { Action } from "vuex-class";

interface recordInfo {
  money: string;//消费的金额
  number: string;//车牌号码
  integral: string;//抵扣积分
  time: string;//抵扣时间
}

@Component({
  components: {
    record
  }
})
export default class PaymentRecord extends Vue {
  pageNo: number = 1; //页码
  pageSize: number = 6; //每页有多少条记录
  noRecord: boolean = false; //没有更多数据
  recordInfo: Array<recordInfo> = [];//存储缴费记录
  placeholderImg = require('../../assets/image/coupon/empty.png');
  noPaymentRecord = "暂无缴费记录";

  @Action parkingPayRecord

  /**
   * 获取缴费记录
   */
  getParkingPayRecord() {
    let data = {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    };
    this.parkingPayRecord(data).then(res => {
      const recordList = res.data.list;
      this.noRecord = false;
      this.pageNo += 1;
      if (recordList.length === 0) {
        this.noRecord = true;
        this.$toast.success("全部加载完了");//防止第一次不触发提示
      }
      for (const key in recordList) {
        if (recordList.hasOwnProperty(key)) {// 只遍历自身属性
          const recordItem: recordInfo = {
            money: `￥${recordList[key].fee}`,
            number: recordList[key].carNum,
            integral: `${recordList[key].deductionIntegral}积分`,
            time: recordList[key].payTime
          };
          this.recordInfo.push(recordItem);//将元素recordItem添加到数组recordInfo中
        }
      }
    }).catch(err => {
      this.$toast.fail(err);
    });
  }

  scrollFn() {
    //真实内容的高度
    var pageHeight = Math.max((<any>document).body.scrollHeight, (<any>document).body.offsetHeight);
    //视窗的高度
    var viewportHeight = window.innerHeight || (<any>document).documentElement.clientHeight || (<any>document).body.clientHeight || 0;
    //隐藏的高度
    var scrollHeight = window.pageYOffset || (<any>document).documentElement.scrollTop || (<any>document).body.scrollTop || 0;
    if (pageHeight - viewportHeight - scrollHeight === 0) {
      if (this.noRecord) this.$toast.success("全部加载完了");
      else this.getParkingPayRecord();//如果满足触发条件，执行
    }
  }

  mounted() {
    this.getParkingPayRecord();
    window.addEventListener("scroll", this.scrollFn);//向window添加"onscroll"事件
  }

  destroyed() {
    window.removeEventListener("scroll", this.scrollFn);//移除window添加的"onscroll"事件
  }
}
</script>
<style lang="scss" scoped>
.paymentRecord {
  .no-record {
    width: 100%;
    margin-top: 82px;
    display: flex;
    justify-content: center;
    .placeholder-img {
      width: 258px;
      height: 263px;
      display: block;
    }
    .no-payment-record {
      font-size: 28px;
      color: $color-88;
      position: absolute;
      top: 319px;
    }
  }
}
</style>
