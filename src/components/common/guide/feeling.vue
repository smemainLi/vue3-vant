<template>
  <div class="feeling">
    <vote></vote>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import vote from "../guide/vote.vue"

@Component({
  components: {
    vote
  }
})
export default class Feeling extends Vue {
}
</script>
<style lang="scss" scoped>
.feeling {
  margin: 23px 0 39px 0;
  height: 426px;
  background-color: $color-ff;
}
</style>
