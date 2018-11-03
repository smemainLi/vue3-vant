<template>
  <div class="grow-value-illustrate">
    <div class="top">
      <div class="upright"></div>
      <div class="title" v-text="title"></div>
    </div>
    <div class="bottom" v-html="content">
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
@Component({ 
  props:{
    title:{
      type:String,
      default:''
    },
    content:{
      type:String,
      default:''
    }
  }
 })
export default class GrowValueIllustrate extends Vue { }
</script>

<style lang="scss" scoped>
.grow-value-illustrate{
  background:$color-ff;
  padding:21px 25px 113px 25px;
  .top{
    display: flex;
    align-items: center;
    height: 37px;

    .upright{
      width:11px;
      height:37px;
      background:$color-fb;
      margin-right: 15px;
    }
    .title{
     color: $color-35;
     font-size: $size32; 
    }
  }

  .bottom{
    color: $color-88;
    font-size: $size27;
    margin-top:40px;
  }
}
</style>