<template>
  <div class="guide">
    <tab :category="category" @categoryId="getCategoryId"></tab>
    <store :introduce="item" v-for="(item,index) in introduceInfo" @click.native="loopStoreDetail(item.merchantId)" :key="index"></store>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action, State } from 'vuex-class';
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

interface category {
  id: string,//类目id
  name: string,//类目名
}


@Component({
  components: {
    tab,
    store
  }
})
export default class Guide extends Vue {
  @Action classifiedGuide
  @Action storeDetail
  /* @State(state => state.guide.merchantId) merchantId */

  category: Array<category> = [];//类目数据
  introduceInfo: Array<introduce> = [];//商家列表
  merchantTypeId: string = "";//类目id
  pageNo: number = 1;//页码
  pageSize: number = 6;//每页有多少条记录
  noRecord: boolean = false;//没有更多数据
  data: any = {//存储传给后台的参数
    pageNo: 1,//页码
    pageSize: 6,//每页有多少条记录
  };
  flag = 0;//标志 0：第一次请求 1：非第一次请求

  /**
   * 回调方法，接收子组件传的参数categoryId（类目id）
   */
  getCategoryId(categoryId) {
    this.merchantTypeId = categoryId;//绑定类目id
    this.pageNo = 1;//切换类目之后，要将页面置1
    this.noRecord = false;//切换类目之后，noRecord置为false
    this.flag = 1;//标志置为1
    this.data = {
      merchantTypeId: categoryId,
      pageNo: this.pageNo,
      pageSize: this.pageSize
    };
    this.introduceInfo = [];//切换其他类目的时候，清除商家列表
    this.getGuideInfo();
  }

  /**
   * 获取分类导购数据
   */
  getGuideInfo() {
    if (this.flag === 0) {
      this.data = {//首次加载，默认加载类目的第一个类型的数据，不需要传merchantTypeId（类目id）
        pageNo: this.pageNo,//页码
        pageSize: this.pageSize,//每页有多少条记录
      }
    } else if (this.flag === 1) {
      this.data = {//切换了类目之后，需要将类目id一起传过去
        merchantTypeId: this.merchantTypeId,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }
    }
    this.$toast.loading({ mask: true, duration: 0, loadingType: 'spinner', forbidClick: true, message: '加载中...' })
    this.classifiedGuide(this.data).then(res => {
      this.$toast.clear();//清除toast
      this.category = res.data.merchantType;
      const introduceList = res.data.list;
      this.pageNo += 1;//满足条件页码加一
      if (res.data.list.length === 0) {
        this.noRecord = true;
        this.$toast.success("全部加载完了");
        return;
      }
      /**
       * 不在mounted()中向window添加"onscroll"事件
       * 在mounted()做一次数据请求，获取到数据之后向window添加"onscroll"事件
       * 防止可能进入页面之后触发两次请求事件
       */
      window.addEventListener("scroll", this.scrollFn);
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
      if (this.noRecord) { this.$toast.success("全部加载完了"); }
      else {
        this.getGuideInfo();//如果满足触发条件，执行
      }
    }
  }

  /**
   * 点击跳转店铺详情页面并携带参数merchantId（店铺id）
   */
  loopStoreDetail(merchantId) {
    this.$router.push({ path: `/guide/detailPage/${merchantId}` })
  }

  mounted() {
    this.getGuideInfo();
  }

  destroyed() {
    window.removeEventListener("scroll", this.scrollFn);//移除window添加的"onscroll"事件
  }

}
</script>
