<template>
  <div class="head">
    <van-nav-bar title="万悦湾" left-text="返回" left-arrow>
      <van-icon name="search" slot="right"></van-icon>
    </van-nav-bar>
    <div >{{codeImage}}</div>
    <div >{{testCode}}</div>
    <div>{{name}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { NAV } from "../../lang/zh";

@Component
export default class Head extends Vue {
  name = NAV.NAME;
  @Inject()
  codeImage: any;
  @Inject()
  testCode: any;
}
</script>
<style lang="scss" scoped>
</style>