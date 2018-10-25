<template>
  <div class="goods-card">
   <div class="content">
     <div class="content-img">
       <img src="../../../assets/image/coupon/store.png" alt="">
     </div>
     <div class="content-bottom">
       <div class="title">超特价柔软毛巾</div>
       <div class="price">
         <div>¥100.00</div>
         <div>余998</div>
       </div>
     </div>
     <slot></slot>
   </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";



@Component({
  components: {
   
  }
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