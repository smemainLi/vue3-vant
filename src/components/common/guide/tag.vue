<template>
  <div class="tag" v-cloak>{{tagItem}}</div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["tagItem"],
  components: {
  }
})
export default class Tag extends Vue {
}
</script>
<style lang="scss" scoped>
.tag {
  border: 1px solid $color-88;
  display: inline;
  line-height: 24px;
  font-size: 24px;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  border-radius: 20px;
  color: $color-88;
  margin-right: 22px;
}
</style>
