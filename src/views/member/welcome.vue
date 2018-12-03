<template>
  <!-- 万悦湾 -->
  <div class="welcome">
    <img class="welcome-img" :src="welcomeImg" alt="">
    <img class="qrcode" src="../../assets/image/member/qrcode.png" alt="">
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Welcome extends Vue {
  welcomeImg = require('../../assets/image/member/welcomeBg.png');
}
</script>

<style lang="scss" scoped>
.welcome {
  overflow: scroll;
  .welcome-img {
    width: 100%;
    display: block;
  }
  .qrcode {
    position: absolute;
    width: 100%;
    top: 700px;
  }
}
</style>
