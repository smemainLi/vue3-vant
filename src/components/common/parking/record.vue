<template>
  <div class="record">
    <div class="details">
      <div class="row">
        <div class="money left" v-cloak>{{recordItem.money}}</div>
        <div class="number right" v-cloak>{{recordItem.number}}</div>
      </div>
      <div class="row">
        <div class="integral left" v-cloak>{{recordItem.integral}}</div>
        <div class="time right" v-cloak>{{recordItem.time}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["recordItem"],
  components: {
  }
})
export default class Record extends Vue {
}
</script>
<style lang="scss" scoped>
.record {
  padding-top: 10px;
  margin-bottom: 14px;
  .details {
    padding: 56px 0;
    background-color: $color-ff;
    .row {
      .left {
        display: inline-block;
        margin-left: 33px;
      }
      .right {
        float: right;
        text-align: right;
        margin-right: 31px;
      }
      .money {
        font-size: 41px;
        color: #fbde19;
      }
      .number {
        font-size: 28px;
        color: #353535;
      }
      .integral {
        font-size: 26px;
        color: $color-88;
      }
      .time {
        font-size: 24px;
        color: $color-88;
      }
    }
  }
}
</style>
