<template>
  <div class="location">
    <div class="coordinates">
      <i class="icon-coordinates">
        <span class="path1"></span><span class="path2"></span>
      </i>
    </div>
    <div :class="['site',locationInfo.noSite?'':'noSite']" v-cloak>{{locationInfo.site}}</div>
    <div class="telephone">
      <a :href="locationInfo.phone" v-show="!isShare"><i class="icon-telephone"></i></a>
      <i class="icon-telephone" v-show="isShare" @click="downApp"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["locationInfo", "isShare"],
  components: {
  }
})
export default class Location extends Vue {
  site = "4楼12层";
  phone = "tel:13726298724";

  /**
   * 跳转下载
   */
  downApp() { return new this.$JumpDownload() }

}
</script>
<style lang="scss" scoped>
.location {
  margin-top: 10px;
  height: 134px;
  width: 100%;
  background-color: $color-ff;
  font-size: 24px;
  .coordinates {
    line-height: 134px;
    margin-left: 19px;
    float: left;
    .icon-coordinates {
      font-size: 34px;
    }
  }
  .site {
    margin-left: 10px;
    line-height: 126px;
    float: left;
    color: $color-88;
  }
  .noSite {
    visibility: hidden;
  }
  .telephone {
    float: right;
    margin-right: 32px;
    color: #fbdf12;
    font-size: 66px;
    line-height: 134px;
    a {
      text-decoration: none;
      color: #fbdf12;
    }
  }
}
</style>
