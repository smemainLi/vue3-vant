<template>
  <div class="guide">
    <tab :category="guideInfo[0].category"></tab>
    <store @click.native="storeDetail()" :introduce="item" :tags="guideInfo[0].tags" v-for="(item,index) in guideInfo[0].introduce" :key="index"></store>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import tab from '../../components/common/guide/tab.vue'
import store from '../../components/common/guide/store.vue'

interface introduce {
  perCapita: string,
  storeName: string,
  storeBrief: string,
  storeLabel1: string,
  storeLabel2: string,
  floor: string,
  benefitTitle: string,
  benefitContent: string,
  ticketTitle: string,
  ticketContent: string,
  voucherTitle: string,
  voucherContent: string,
}

interface guideInfo {
  category: Array<string>,
  tags: Array<string>,
  introduce: Array<introduce>,
}

@Component({
  components: {
    tab,
    store
  }
})
export default class Guide extends Vue {
  guideInfo: Array<guideInfo> = [
    {
      category: ["美食", "服装服饰", "悠闲娱乐", "美容美体", "家电电器"],
      tags: ["新店", "品牌连锁"],
      introduce: [
        {
          perCapita: "人均88元",
          storeName: "小世界咖啡馆",
          storeBrief: `"简餐，小食，啤酒"`,
          storeLabel1: "新店",
          storeLabel2: "品牌连锁",
          floor: "4F",
          benefitTitle: "惠",
          benefitContent: "全场送小吃",
          ticketTitle: "券",
          ticketContent: "满100减10；满1000减100",
          voucherTitle: "代",
          voucherContent: "20元代金券；50元代金券",
        },
        {
          perCapita: "人均88元",
          storeName: "小世界咖啡馆",
          storeBrief: `"简餐，小食，啤酒"`,
          storeLabel1: "新店",
          storeLabel2: "品牌连锁",
          floor: "4F",
          benefitTitle: "惠",
          benefitContent: "全场送小吃",
          ticketTitle: "券",
          ticketContent: "满100减10；满1000减100",
          voucherTitle: "代",
          voucherContent: "20元代金券；50元代金券",
        },
        {
          perCapita: "人均88元",
          storeName: "小世界咖啡馆",
          storeBrief: `"简餐，小食，啤酒"`,
          storeLabel1: "新店",
          storeLabel2: "品牌连锁",
          floor: "4F",
          benefitTitle: "惠",
          benefitContent: "全场送小吃",
          ticketTitle: "券",
          ticketContent: "满100减10；满1000减100",
          voucherTitle: "代",
          voucherContent: "20元代金券；50元代金券",
        },
        {
          perCapita: "人均88元",
          storeName: "小世界咖啡馆",
          storeBrief: `"简餐，小食，啤酒"`,
          storeLabel1: "新店",
          storeLabel2: "品牌连锁",
          floor: "4F",
          benefitTitle: "惠",
          benefitContent: "全场送小吃",
          ticketTitle: "券",
          ticketContent: "满100减10；满1000减100",
          voucherTitle: "代",
          voucherContent: "20元代金券；50元代金券",
        },
      ]
    },
  ];

  storeDetail() {
    this.$router.push({ path: "/guide/detailPage" });
  }
}
</script>

<style lang="scss" scoped>
</style>
