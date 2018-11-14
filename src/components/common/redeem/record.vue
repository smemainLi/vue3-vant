<template>
  <div class="record">
    <div class="record-row">
      <div :class="['score',recordInfo.plus?'':'minus']">
        <span class="score-num" v-cloak>{{recordInfo.scoreNum}}</span>
        <span class="score-word" v-cloak>{{recordInfo.scoreWord}}</span>
      </div>
      <div class="details">
        <div class="details-info" v-cloak>{{recordInfo.detailsInfo}}</div>
        <div class="time">
          <i class="icon-time-color">
            <span class="path1"></span><span class="path2"></span>
          </i>
          <div class="content" v-cloak>{{recordInfo.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props: ["recordInfo"],
  components: {
  }
})
export default class Record extends Vue {
}
</script>
<style lang="scss" scoped>
.record {
  padding-top: 10px;
  .record-row {
    width: 750px;
    height: 180px;
    background-color: $color-ff;
    box-sizing: border-box;
    margin-bottom: 24px;
    .score {
      width: auto;
      height: 56px;
      padding: 0 14px 0 8px;
      background: #fbde19;
      border-radius: 10px;
      color: $color-ff;
      text-align: center;
      margin: 62px 0 0 40px;
      float: left;
      .score-num {
        font-size: 41px;
      }
      .score-word {
        font-size: 32px;
      }
    }
    .minus {
      background-color: $color-d2;
    }
    .details {
      margin-right: 31px;
      padding-top: 56px;
      .details-info {
        font-size: 28px;
        color: $color-35;
        float: right;
      }
      .time {
        line-height: 24px;
        clear: both;
        float: right;
        margin-top: -17px;
        .icon-time-color {
          display: inline-block;
          vertical-align: middle;
        }
        .content {
          display: inline-block;
          margin-left: 16px;
          font-size: 24px;
          color: $color-88;
        }
      }
    }
  }
}
</style>
