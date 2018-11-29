<template>
  <!-- 创意集市 -->
  <div class="createBazaar" @click="downApp">
    <!-- 蒙层 -->
    <layer></layer>
    <h2 class="create-title" v-cloak>{{title}}</h2>
    <div class="create-content" v-html="content"></div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import layer from "../../components/common/layer.vue";

@Component({
  components: {
    layer
  }
})
export default class CreateBazaar extends Vue {
  @Action createBazaar

  title: string = "";
  content: string = "";

  /**
   * 跳转下载
   */
  downApp() {
    return new this.$JumpDownload();
  }

  /**
   * 获取创意集市的html文本
   */
  getCreateBazaar() {
    this.createBazaar({ articleId: this.$route.query.articleId }).then((res) => {
      console.log(res.data);
      this.title = res.data.title;
      this.content = res.data.content;
    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  mounted() {
    this.getCreateBazaar();
  }

}
</script>

<style lang="scss" scoped>
.createBazaar {
  .create-title {
    text-align: center;
  }
}
</style>
