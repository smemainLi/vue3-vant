<template>
  <div class="tab">
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in category" :title="item" :key="index">
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["category"],
  components: {
  }
})
export default class Tab extends Vue {
  active = 1;
}
</script>
<style lang="scss" scoped>
.tab {
  padding-top: 10px;
  // 样式渗透
  /deep/ .van-tab {
    color: $color-88;
  }
  /deep/ .van-tab--active {
    color: $color-35;
  }
  /deep/ .van-tabs__line {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
