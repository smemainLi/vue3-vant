<template>
  <div class="grow-up-value">
    <div class="title">
      <div class="upright"></div>
      <div>获取成长值</div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { index } from '@/router/router-path';
@Component({
  components: {
  }
})
export default class GrowUpValue extends Vue {


}
</script>

<style lang="scss" scoped>
.grow-up-value{
  // overflow: hidden;
  // min-height: 712px;
  background: $color-ff;
  padding: 23px 30px 0 30px;
  
  .title{
    // height: 11px;
    display: flex;
    align-items: center;
    // padding:0 30px;
    
    .upright{
      width:11px;
      height:37px;
      background: $color-fb;
      margin-right: 15px;
    }
  }
}
</style>