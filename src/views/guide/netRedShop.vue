<template>
  <div class="netRedShop">
    <!-- 蒙层 -->
    <layer></layer>
    <div class="banner">
      <img
        class="banner-image"
        :src="bannerImg"
        alt=""
      >
    </div>
    <store
      :introduce="item"
      v-for="(item,index) in introduceInfo"
      @click.native="downApp"
      :key="index"
    ></store>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action, State } from 'vuex-class';
import layer from '../../components/common/layer.vue';
import tab from '../../components/common/guide/tab.vue';
import store from '../../components/common/guide/store.vue';

interface introduce {
  storeLogo: string,//商店logo
  merchantId: string,//商家id
  perCapita: string,//人均
  storeName: string,//商店名称
  storeBrief: string,//商店简介
  tags: Array<string>,//商店标签
  floor: string,//商店所在楼层
  benefitTitle: string,//'惠'字
  benefitContent: string,//线下活动
  ticketTitle: string,//'券'字
  ticketContent: string,//优惠券
  voucherTitle: string,//'代'字
  voucherContent: string,//代金券
}

@Component({
  components: {
    layer,
    tab,
    store
  }
})
export default class NetRedShop extends Vue {
  @Action dissertationShare

  bannerImg = require('../../assets/image/guide/netRedShopBg.png');
  introduceInfo: Array<introduce> = [];//专题列表
  pageNo: number = 1;//页码
  pageSize: number = 6;//每页有多少条记录
  noRecord: boolean = false;//没有更多数据

  /**
   * 获取专题列表数据
   */
  getDissertationShare() {
    let data = {
      dissertationId: this.$route.query.dissertationId,//获取url上携带的参数dissertationId（专题id）
      pageNo: this.pageNo,
      pageSize: this.pageSize,
    }
    this.$toast.loading({ mask: true, duration: 0, forbidClick: true, message: '加载中...' })
    this.dissertationShare(data).then(res => {
      this.$toast.clear();//清除toast
      const introduceList = res.data.listMerchant;
      this.pageNo += 1;//满足条件页码加一
      if (res.data.listMerchant.length === 0) {
        this.noRecord = true;
        this.$toast.success("全部加载完了");
      }
      for (const key in introduceList) {
        if (introduceList.hasOwnProperty(key)) {
          const introduceItem: introduce = {
            storeLogo: introduceList[key].logo,
            merchantId: introduceList[key].merchantId,
            perCapita: introduceList[key].percapita,
            storeName: introduceList[key].storeName,
            storeBrief: introduceList[key].merchantDesc,
            tags: introduceList[key].labelList,
            floor: introduceList[key].floor,
            benefitTitle: '惠',
            benefitContent: introduceList[key].activityContent,
            ticketTitle: '券',
            ticketContent: introduceList[key].couponContent,
            voucherTitle: '代',
            voucherContent: introduceList[key].voucherContent,
          };
          this.introduceInfo.push(introduceItem);
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
    if (pageHeight - viewportHeight - scrollHeight === 0) {//如果滚轮滚到了底部
      if (this.noRecord) this.$toast.success("全部加载完了");
      else {
        this.getDissertationShare();//如果满足触发条件，执行
      }
    }
  }

  /**
    * 跳转下载
    */
  downApp() {
    return new this.$JumpDownload();
  }

  mounted() {
    this.getDissertationShare();
    this.introduceInfo = [];//清空列表
    window.addEventListener("scroll", this.scrollFn);//向window添加"onscroll"事件
  }

  destroyed() {
    window.removeEventListener("scroll", this.scrollFn);//移除window添加的"onscroll"事件
  }

}
</script>

<style lang="scss" scoped>
.netRedShop {
  .banner {
    width: 750px;
    height: 250px;
    margin-bottom: 15px;
    .banner-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

