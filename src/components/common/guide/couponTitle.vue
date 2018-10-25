<template>
  <div class="couponTitle">
    <div class="title-content" v-cloak>{{titleContent}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["titleContent"],
  components: {
  }
})
export default class CouponTitle extends Vue {
}
</script>
<style lang="scss" scoped>
.couponTitle {
  height: 96px;
  background-color: $color-w;
  padding: 29px 0;
  box-sizing: border-box;
  .title-content {
    color: $color-35;
    font-size: 32px;
    margin-left: 30px;
    border-left: 10px solid #fbde19;
    padding-left: 15px;
  }
}
</style>
