<template>
  <div class="empty-img">
    <div class="content-box">
      <img src="@/assets/image/coupon/empty.png" alt="">
      <span v-text="message" v-if="$route.meta.title!=='兑换券'"></span>
    </div>
    <router-link tag="button" :to="{name:'offer'}" v-if="$route.meta.title!=='兑换券'">免费抢券</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

// 优惠券等的占位图

@Component({ })

export default class Waituse extends Vue { 
  message:string = ""

  mounted () {
    this.message = `土豪，${this.$route.meta.title}都不抢？`
  }
 }

</script>

<style lang='scss' scoped>
.empty-img{
  font-size: $size28;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-box{
    position: relative;
    height: 263px;
    width: 270px;
    font-size: $size28;
    color: $color-88;
    margin-top:82px;
    margin-bottom: 195px;
    img{
      height: 235px;
      width: 258px;
    }
    span{
      position: absolute;
      white-space:nowrap;
      bottom: 0;
      left: 0;

    }
  }

  button{
    background-color: $color-fb;
    border-radius: 10px;
    width: 326px;
    height: 74px;
    padding: 0;
    border:0;
    font-size: $size36;
    color: $color-35;
    font-weight:500;
  }
}
</style>