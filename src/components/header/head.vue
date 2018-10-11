<template>
  <div class="head">
    <van-nav-bar title="万悦湾" left-text="返回" left-arrow class="navFont">
      <van-icon name="search" slot="right"></van-icon>
    </van-nav-bar>
    <div>{{name}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { NAV } from "../../lang/zh";

@Component
export default class Head extends Vue {
  name = NAV.NAME;
}
</script>
<style lang="scss" scoped>
</style>