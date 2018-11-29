<template>
  <div class="layer">
    <img class="close" src="../../assets/image/redeem/close.png" alt="">
    <div class="logo" @click="downApp"></div>
    <div class="introduce" @click="downApp">
      <div class="title" v-cloak>{{title}}</div>
      <div class="brief" v-cloak>{{brief}}</div>
    </div>
    <div class="receive" @click="downApp" v-cloak>{{receive}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Layer extends Vue {
  title = "万悦湾";
  brief = "免费停车、半价购物、惊喜不断";
  receive = "领取礼物";

  /**
    * 跳转下载
    */
  downApp() {
    return new this.$JumpDownload();
  }
}
</script>

<style lang="scss" scoped>
.layer {
  height: 115px;
  width: 100%;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.84);
  position: fixed;
  z-index: 1;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .close {
    margin: 0 13px 0 21px;
  }
  .logo {
    width: 76px;
    height: 76px;
    background-color: #fbde19;
    border-radius: 10px;
    margin-right: 9px;
  }
  .introduce {
    color: $color-e5;
    .title {
      font-size: 34px;
      padding-bottom: 8px;
    }
    .brief {
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 336px;
    }
  }
  .receive {
    width: 183px;
    height: 71px;
    background-color: #fbde19;
    border-radius: 10px;
    color: $color-35;
    font-size: 34px;
    margin-left: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
