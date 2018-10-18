<template>
  <van-tabs>
    <van-tab v-for="index in 8" :title="'标签'+index" :key="index">
      内容{{index}}
    </van-tab>
  </van-tabs>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Tab extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
