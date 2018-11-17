<template>
  <div class="layer"></div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Layer extends Vue {
}
</script>

<style lang="scss" scoped>
.layer {
  height: 88px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  top: 0;
}
</style>
