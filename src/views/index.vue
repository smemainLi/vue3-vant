<template>
  <div class="index">
    <router-link :key="index" v-for="(item,index) in list" tag="h3" :to="item.url">
      {{item.name}}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class Index extends Vue {
  list = [
    { name: '积分停车', url: '/parking/index' },
    { name: '免费wifi', url: '/wifi/index' },
    { name: '找商家', url: '/guide/index' },
    { name: '抢优惠', url: '/offer/index' },
    { name: 'AR红包', url: '/ar/index' },
    { name: '我的券包', url: '/coupon/index' },
    { name: '积分兑换', url: '/redeem/index' },
    { name: '赚积分', url: '/earn/index' },
    { name: '会员信息', url: '/member/index' },
    { name: '登录', url: '/login' },
    { name: '开通会员卡', url: '/member/openMember' },
    // { name: '店铺详情分享1', url: 'http://wyw-wx.test.qi-cloud.com/guide/shareDetailPage?merchantId=ff808081665d09da016661bff7f701f3' },
    // { name: '店铺详情分享2', url: 'http://wyw-wx.test.qi-cloud.com/guide/shareDetailPage?merchantId=8a8ae43865d7db200165d800262a000c' },
    { name: '十大网红店', url: 'http://wyw-wx.test.qi-cloud.com/guide/netRedShop?merchantId=ff8080816685f45c01668a54fb200006' },
  ]
}
</script>

<style lang="scss" scoped>
.index {
  text-align: center;
  h3 {
    cursor: pointer;
  }
}
</style>
