<template>
  <button v-cloak>{{btnName}}</button>
</template>
<script lang="ts">
import { Component, Inject, Vue } from "vue-property-decorator";

@Component({
  props: ['btnName'],
  components: {
  }
})
export default class CommonBtn extends Vue {
}
</script>
<style lang="scss" scoped>
button {
  font-size: 36px;
  width: 686px;
  height: 88px;
  border: 0;
  background: #fbde19;
  border-radius: 10px;
  margin-top: 100px;
  color: $color-35;
}
</style>
