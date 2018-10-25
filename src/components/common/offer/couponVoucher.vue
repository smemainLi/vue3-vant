<template>

</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

interface cardInfo {
  bgImage: string,
  parValue: string,
  fullReduction: string,
  range: string,
  time: string,
  cardType?: boolean,/* false表示满减，true表示代金券 */
  isMask?: boolean,/* false表示还有券，true表示已抢光 */
  finish?: string,
}

@Component({
  components: {
  }
})
export default class CouponVoucher extends Vue {

  cardInfo: Array<cardInfo> = [
    {
      bgImage: require("../../assets/image/guide/cash.png"),
      parValue: "¥50",
      fullReduction: "满100可用",
      range: "部分换季衣物可用",
      time: "2018.05.31-2018.06.30",
      cardType: false,
    }
  ];
}
</script>
<style lang="scss" scoped>
</style>

