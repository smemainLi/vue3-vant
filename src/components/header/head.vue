<template>
  <div class="head">
    <van-nav-bar title="万悦湾" left-text="返回" left-arrow>
      <van-icon name="search" slot="right"></van-icon>
    </van-nav-bar>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component
export default class Head extends Vue { }
</script>
<style lang="scss" scoped>
</style>