<template>
  <div class="top">
    <div class="store-picture">
      <div class="store-head">
        <img class="head-portrait" src="../../../assets/image/guide/head.png" alt="">
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{metaTitle}}</div>
        <div class="store-brief" v-cloak>{{storeBrief}}</div>
        <div class="per-capita" v-cloak>{{perCapita}}</div>
      </div>
      <div class="follow">
        <i class="icon-attention"></i>
        <!-- <img class="follow-image" src="../../../assets/image/guide/follow.png" alt=""> -->
        <div class="follow-word" v-cloak>{{follow}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["metaTitle"],
  components: {
  }
})
export default class Top extends Vue {
  storeBrief = "年轻，时尚，就是好";
  perCapita = "人均：45";
  follow = "关注";

}
</script>
<style lang="scss" scoped>
.top {
  .store-picture {
    height: 280px;
    padding-top: 35px;
    box-sizing: border-box;
    background: url("../../../assets/image/guide/storeBg.png") no-repeat;
    background-size: 100% 280px;
    .store-head {
      float: left;
      margin-left: 32px;
      .head-portrait {
        display: block;
        width: 120px;
        height: 120px;
      }
    }
    .describe {
      float: left;
      margin-left: 17px;
      color: $color-00;
      font-size: 28px;
    }
    .follow {
      float: right;
      margin-right: 33px;
      .icon-attention {
        display: block;
        font-size: 48px;
        color: #f56e73;
      }
      .follow-word {
        color: $color-00;
        font-size: 24px;
      }
    }
  }
}
</style>
