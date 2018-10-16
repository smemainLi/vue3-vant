<template>
  <div class="parking">
    <div class="car-info">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";


@Component({
  components: {
  }
})
export default class Parking extends Vue {

}
</script>

<style lang="scss" scoped>
.parking {
  .car-info {
    width: 750px;
    height: 507px;
    background: #ffffff;
    border: 1px solid black;
  }
}
</style>