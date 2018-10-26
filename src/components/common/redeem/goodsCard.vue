<template>
  <div class="goods-card">
   <div class="content">
     <div class="content-img">
       <img src="../../../assets/image/coupon/store.png" alt="">
     </div>
     <div class="content-bottom">
       <div class="title" v-text="goodsInfo.goodsName"></div>
       <div class="price">
         <div v-text="goodsInfo.price"></div>
         <div v-text="goodsInfo.surplus"></div>
       </div>
     </div>
     <slot></slot>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
/**
 *      goodsInfo     -----  Object
 *          goodsName   商品名字
 *          price       价格
 *          surplus     剩余多少件商品
 */

@Component({
  props:["goodsInfo"]
})
export default class GoodsCard extends Vue {
  
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.goods-card{
  .content{
    width: 332px;
    font-size:$size28;
    .content-img{
      width: 332px;
      height: 332px;
      object-fit: cover;
      margin-bottom: 22px;
      img{
        width: 100%;
        height: 100%;
      }
    }

    .content-bottom{
      .title{
        color:$color-35;
        margin-bottom: 26px;
      }
      .price{
        height: 22px;
        line-height: 22px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
        color:$color-35;
      }
    }
  }
}

</style>