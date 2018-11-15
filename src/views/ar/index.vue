<template>
  <div class="ar">
    <div class="actual-scenery">
      <div class="title" v-cloak>{{actualSceneryTitle}}</div>
      <div class="content" v-cloak>{{actualSceneryContent}}</div>
    </div>
    <commonBtn :btnName="btnName"></commonBtn>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import commonBtn from '../../components/common/button.vue';


@Component({
  components: {
    commonBtn
  }
})
export default class Guide extends Vue {
  btnName: string = "马上去找红包";

  actualSceneryTitle = "AR实景红包";
  actualSceneryContent = "超多红包藏起来了，快去找吧";
}
</script>

<style lang="scss" scoped>
.ar {
  height: 100%;
  background-color: $color-ff;
  text-align: center;
  .actual-scenery {
    padding-top: 300px;
    padding-bottom: 200px;
    .title {
      font-size: 50px;
      font-weight: bold;
    }
    .content {
      font-size: 36px;
    }
  }
}
</style>
