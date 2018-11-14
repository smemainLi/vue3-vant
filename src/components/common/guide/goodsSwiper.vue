<template>
  <div class="goodsSwiper">
    <swiper :options="swiperOption">
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

  swiperOption = {
    notNextTick: true,
    initialSlide: 0,
    slidesPerView: 2.2,
    spaceBetween: 5,
    freeMode: true,
    speed: 800,
    direction: 'horizontal',
    grabCursor: true,
  };

  goods: Array<goods> = [
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
    {
      image: require("../../../assets/image/guide/goodsImage.png"),
      name: "橙色蕾丝衬衫",
      price: "¥99",
    },
  ];

  mounted() {
  }

}
</script>
<style lang="scss" scoped>
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
