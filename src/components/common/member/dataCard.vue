<template>
  <router-link tag="div" :to="{name:component}" class="data-card">
    <div class="data">
      <div :class="['data-top',borderColor? 'border-color':'']">
        <div class="text">
          <img :src="imgUrl" alt="">
          <div v-text="title"></div>
        </div>
        <div class="data-right">
          {{ text }}
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  props:{
    borderColor:{   //给加上border-bottom
      type:Boolean,
      default:false
    },
    title:{
      type:String,
      default:''
    },
    text:{
      type:String,
      default:''
    },
    imgUrl:{
      type:String,
      default:require('@/assets/image/member/my.png')
    },
    component:{
      type:String,
      default:""
    }
  },
  components: {
  }
})
export default class DataCard extends Vue {
}
</script>

<style lang="scss" scoped>
.data-card{
  .data{
    font-size: $size28;
    padding: 0 36px;
    background-color: $color-w;
    .data-top{
      width: 100%;
      display: flex;
      justify-content:space-between;
      align-items: center;
      height: 110px;

      img{
        width: 40px;
        height: 40px;
        display: block;
        margin-right: 20px;
      }
      .text{
        display: flex;
      }

      .data-right{
        display: flex;
        align-items: center;
        color: #888888;
      }
    }
  }
}

.border-color{
  border-bottom: 1px solid #E5E5E5;
}

[class^='van-icon']{
  // color: #888888 !important;
  margin-left: 10px;
}
</style>