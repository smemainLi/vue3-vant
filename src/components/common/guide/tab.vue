<template>
  <div class="tab">
    <van-tabs v-model="active" @click="selectCategory">
      <van-tab v-for="(item,index) in category" :title="item.name" :key="index">
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
  active = 0;
  category: any;

  selectCategory(index: string, title: string) {
    console.log(`子组件${this.category[index].id}`);
    //向父组件传递参数，第一个参数是父组件中绑定的自定义回调方法，第二个参数为传递的参数
    this.$emit("categoryId", this.category[index].id);
  }
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
