<template>
  <div>
    <record :recordItem="item" v-for="(item,index) in recordInfo" :key="index"></record>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import record from '../../components/common/parking/record.vue'

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
  recordInfo: Array<recordInfo> = [
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
    },
    {
      money: "￥5",
      number: "粤CY8767",
      integral: "8989积分",
      time: "2018-07-27  10:45:25",
    },
  ];
}
</script>
<style lang="scss" scoped>
</style>
