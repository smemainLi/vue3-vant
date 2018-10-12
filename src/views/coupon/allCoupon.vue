<template>
  <div>
    <van-tabs v-model="active">
      <Tab v-model="tabMsg"></Tab>
      <!-- <van-tab title="标签 1">内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab> -->
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import Tab from "../../components/common/coupon/tab.vue";
interface tabMsg {
  title: string,
  couponArry: Array<any>
}

@Component({
  components: {
    Tab
  }
})

export default class AllCoupon extends Vue {
  active: any = 2
  tabMsg = {
    title: "123",
    msgArray: [123]
  }

}
</script>