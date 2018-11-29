<template>
  <div :class="[goodsInfoList.length!==0?'goodsSwiper':'noGoods']">
    <div class="no-goods" v-show="goodsInfoList.length===0">
      <img class="no-goods-img" :src="noGoodsImg" alt="">
    </div>
    <swiper :options="swiperOption" v-show="goodsInfoList.length!==0">
      <swiper-slide v-for="(item,index) in goodsInfoList" :key="index">
        <div class="goods-photo">
          <img class="goods-image" :src="item.image" alt="">
        </div>
        <div class="goods-info">
          <div class="goods-name" v-cloak>{{item.name}}</div>
          <div class="goods-price" v-cloak>{{item.price}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

interface goods {
  image: string,
  name: string,
  price: string,
}

@Component({
  props: ["goodsInfoList"],
  components: {
    swiper,
    swiperSlide
  }
})
export default class GoodsSwiper extends Vue {
  goodsInfoList: any;
  noGoodsImg = require('../../../assets/image/guide/noGoods.png');

  swiperOption = {
    notNextTick: true,/* notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true */
    initialSlide: 0,/* 设定初始化时slide的索引 */
    slidesPerView: 2.2,/* 设置slider容器能够同时显示的slides数量 */
    spaceBetween: 5,/* 在slide之间设置距离（单位px） */
    freeMode: true,/* 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合 */
    speed: 800,/* 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间 */
    direction: 'horizontal',/* Slides的滑动方向，可设置水平(horizontal)或垂直(vertical) */
    grabCursor: true,/* 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同） */
  };

  mounted() {
  }

}
</script>
<style lang="scss" scoped>
.noGoods {
  margin: 0;
  .no-goods {
    margin-bottom: 24px;
    .no-goods-img {
      width: 100%;
      height: 410px;
      display: block;
    }
  }
}
.goodsSwiper {
  margin-left: 32px;
  .swiper-container {
    width: 100%;
    height: 470px;
    margin: 24px auto;
    .swiper-wrapper {
      .swiper-slide {
        .goods-photo {
          .goods-image {
            display: block;
            width: 322px;
            height: 388px;
          }
        }
        .goods-info {
          margin-top: 19px;
          font-size: 24px;
          .goods-name {
            color: $color-35;
          }
          .goods-price {
            color: $color-88;
          }
        }
      }
    }
  }
}
</style>
