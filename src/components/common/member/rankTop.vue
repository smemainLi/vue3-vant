<template>
  <div class="member-info">
    <div class="msg-top">
      <div class="msg-left">
        <img :src="memberLevel.image" alt="">
        <div class="font-size" v-text="memberLevel.name"></div>
      </div>
      <div class="msg-right">
        <div class="font-size">成长值</div>
        <div v-text="memberLevel.nowCondition"></div>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="progress">
      <van-progress
        color="#FBDE19"
        :percentage="!(memberLevel.nowCondition/memberLevel.nextCondition)?  0:(memberLevel.nextCondition===''? 100:(memberLevel.nowCondition/memberLevel.nextCondition).toFixed(2)*100)"
        :show-pivot="false"
      />
    </div>
    <div class="foot">
      <div v-cloak>{{ memberLevel.nextLevelName===""? "您已经是最高级会员":`再获取${memberLevel.needCondition}即可升级成${memberLevel.nextLevelName}` }}</div>
      <div v-text="memberLevel.nextCondition"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { index } from '@/router/router-path';
@Component({
  props:["memberLevel"]
})
export default class RankTop extends Vue {


}
</script>

<style lang="scss" scoped>
.member-info{
  height: 280px;
  background-color: $color-ff;
  overflow: hidden;
  padding: 0 27px;

  .msg-top{
    display: flex;
    justify-content: space-between;
    height: 80px;
    margin-top:50px;

    .msg-left{
      display: flex;
      align-items: center;
      img{
        width: 70px;
        margin-right: 12px;
      }
      div{
        color:$color-35 !important;
      }
    }

    .msg-right{
      div:last-child{
        color: $color-00;
        font-size: 44px;
      }
      div{
        height: 40px;
        line-height: 40px;
        text-align: right;
      }

    }
  }

  .progress{
    margin:24px 0;
  }

  .foot{
    display: flex;
    justify-content: space-between;
    color:$color-88;
    font-size: $size28;
  }
}

.font-size{
  font-size:$size28;
  color:$color-00;
}

// 进度条高度
[class^='van-progress']{
  height: 24px;
  background:$color-35;
}
</style>