<template>
  <div class="ar">
    <layer></layer>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import layer from '../../components/common/layer.vue';

@Component({
  components: {
    layer,
  }
})
export default class Guide extends Vue {

  /**
   * 跳转下载
   */
  downApp() { return new this.$JumpDownload() }
}
</script>

<style lang="scss" scoped>
.ar {
  height: 100%;
  background: url("../../assets/image/ar/arBg.png") no-repeat center fixed;
  background-size: 100%;
  text-align: center;
}
</style>
