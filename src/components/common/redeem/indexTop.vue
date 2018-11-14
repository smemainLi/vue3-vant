<template>
  <div class="index-top">
    <div class="content">
      <div class="content-left">
        <div class="top">当前积分</div>
        <div class="bottom" v-text="redeem"></div>
      </div>
      <router-link tag="div" :to="{name:'protocol',params:{type:2}}" class="explain">积分说明 >></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
  @Component({
    props:{
      redeem:{       //当前积分
        type:Number,
        default:0
      }
    }
  })

export default class IndexTop extends Vue {


}
</script>

<style lang="scss" scoped>
.index-top{
  .content{
    height: 280px;
    background: url('../../../assets/image/redeem/indexBG.png') no-repeat;
    background-size: 100% 100% ;

    .content-left{
      color:$color-ff;
      position: absolute;
      top:31px;
      left: 34px;

      .top{
        font-size: $size28;
      }
      .bottom{
        font-size: $size94;
        font-weight:bold;
        height: 71px;
        line-height: 71px;
        margin-top:20px;
      }
    }
    
    .explain{
      font-size: $size26;
      color:$color-00;
      position:absolute;
      top:23px;
      right:32px;
    }
  }
}
</style>