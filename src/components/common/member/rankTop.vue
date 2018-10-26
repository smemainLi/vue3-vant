<template>
  <div class="member-info">
    <div class="msg-top">
      <div class="msg-left">
        <img src="../../../assets/image/member/rank.png" alt="">
        <div class="font-size">黄金会员</div>
      </div>
      <div class="msg-right">
        <div class="font-size">成长值</div>
        <div>4000</div>
      </div>
    </div>
    <!-- 进度条 -->
    <div class="progress">
      <van-progress
        color="#FBDE19"
        :percentage="25"
        :show-pivot="false"
      />
    </div>
    <div class="foot">
      <div>再获取20000即可升级成铂金会员</div>
      <div>60000</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { index } from '@/router/router-path';
@Component({
  components: {
  }
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