<template>
  <div class="all-coupon">
    <Tab :swipeable='true'>

      <!-- 待使用   -->
      <div slot="待使用">
        <router-link :to='{name:"waitUse"}'>
          <ContentModel :contentText="item" v-for="(item,index) in contentText1" :key="index"></ContentModel>
        </router-link>
      </div>

      <!-- 已使用  -->
      <div slot="已使用">
        <router-link :to="{name:'use'}" v-for="(item,index) in contentText2" :key="index">
          <ContentModel :contentText="item"></ContentModel>
        </router-link>
      </div>

      <!-- 已过期 -->
      <div slot="已过期">
        <router-link :to="{name:'expire'}" v-for="(item,index) in contentText3" :key="index">
          <ContentModel :contentText="item"></ContentModel>
        </router-link>
      </div>

    </Tab>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import Tab from "@/components/common/coupon/tab.vue"
import tabUse from '@/components/common/coupon/tabUse.vue'
import ContentModel from '@/components/common/coupon/contentModel.vue'

// 定义内容模块的接口信息
interface contentMsg {
  isUse: boolean, //是否已经使用
  title: string,  //餐馆标题
  coupon: string,
  imgUrl?: string,
  useText?: string
}

@Component({
  components: {
    Tab,
    tabUse,
    ContentModel
  }
})

export default class allCoupon extends Vue {

  contentText1: Array<contentMsg> = [
    {
      isUse: false,
      useText: '待使用',
      title: "小世界餐馆",
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    },
    {
      isUse: false,
      useText: '待使用',
      title: "小世界餐馆",
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    }
  ]


  contentText2: Array<contentMsg> = [
    {
      isUse: true,
      title: "小世界餐馆",
      useText: '已使用',
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    },
    {
      isUse: true,
      title: "小世界餐馆",
      useText: '已使用',
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    }
  ]

  contentText3: Array<contentMsg> = [
    {
      isUse: true,
      useText: '已过期',
      title: "小世界餐馆",
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    },
    {
      isUse: true,
      useText: '已过期',
      title: "世界餐馆",
      coupon: '满两百减一百',
      imgUrl: require('@/assets/image/coupon/cashCoupon.png')
    }
  ]

}
</script>
