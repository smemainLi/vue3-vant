<template>
  <!-- 游戏转盘页面 -->
  <div class="turntableGame" @click="downApp">
    <img class="game-img" :src="gameImg" alt="">
    <!-- 蒙层 -->
    <layer></layer>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import layer from '../../components/common/layer.vue';

@Component({
  components: {
    layer
  }
})
export default class TurntableGame extends Vue {
  gameImg = require("../../assets/image/offer/game.png");

  /**
   * 跳转下载
   */
  downApp() {
    return new this.$JumpDownload();
  }
}
</script>
<style lang="scss" scoped>
.turntableGame {
  overflow: scroll;
  .game-img {
    width: 100%;
    display: block;
  }
}
</style>
