<template>
  <div class="top">
    <div class="store-title">
      <div class="store-photo">
        <img class="store-image" src="../../../assets/image/offer/head.png" alt="">
      </div>
      <div class="describe">
        <div class="store-name" v-cloak>{{storeName}}</div>
        <div class="full-reduction" v-cloak>{{fullReduction}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Top extends Vue {
  storeName = "ONLY服饰店";
  fullReduction = "满100减20";

}
</script>
<style lang="scss" scoped>
.top {
  padding-top: 10px;
  .store-title {
    width: 750px;
    height: 194px;
    background-color: $color-ff;
    .store-photo {
      width: 111px;
      height: 111px;
      float: left;
      margin: 41px 0 0 30px;
      .store-image {
        width: 100%;
        height: 100%;
      }
    }
    .describe {
      float: left;
      margin: 56px 0 0 18px;
    }
  }
}
</style>
