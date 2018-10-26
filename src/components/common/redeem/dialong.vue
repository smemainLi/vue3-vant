<template>
  <div class="store">
  <!-- 弹出层 -->
    <van-popup v-model="dialongs" @showDialong="showDialong" :close-on-click-overlay="false">
      <div class="ponup-dialog">
        <div class="title">
          <div>兑换游戏积分</div>
          <img src="@/assets/image/redeem/close.png" alt="" @click="dialongs=false">
        </div>
        <div class="center">
          <div class="stepper-box">
            <div class="reduce some" @click="values<1? values:values--">
              <img src="@/assets/image/redeem/reduce.png" alt="">
            </div>
            <div>
              <input type="number" v-model="values">
            </div>
            <div class="add some" @click="values++">
              <img src="@/assets/image/redeem/add.png" alt="">
            </div>
          </div>
          <div class="content-text">所需积分100</div>
        </div>
        <div class="botton">
          <div class="botton-left" @click="dialongs=false">取消</div>
          <div class="botton-right" @click="$emit('confirm',values);dialongs=false">确定</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

/**
 *    ！！！！！注意   有可能需要把所需积分100中的积分数量作为一个变量，目前还没添加此变量
 */

@Component({})
export default class Dialongs extends Vue {
  values:Number = 0           //输入框的信息
  dialongs:Boolean = false    //弹出框是否隐藏和显示

// 父组件触发子组件的方法
  showDialong(show:any):void{
    this.dialongs = show
    this.values = 0   
  }
}
</script>

<style lang="scss" scoped>
.store {
  border-radius: 10px;
// 弹框
  [class^="van-popup"]{
    border-radius: 10px;
  }
  .ponup-dialog{
    width: 686px;
    height: 530px;
    .title{
      border-radius: 10px 10px 0 0;
      background-color:$color-fb;
      height: 124px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:$color-00;
      font-size: $size34;
      overflow: hidden;
      img{
        position: absolute;
        right: -60px;
        top:37px;
        height: 70px;
        // width: 48px;
      }
    }
    .center{
      height: 234px;

      .stepper-box{
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:84px;
        margin-bottom: 34px;

        input{
          border:1px solid $color-e5;
          border-radius: 10px;
          width: 130px;
          height: 90px;
          text-align: center;
          font-size: $size36;
          font-weight: bold;
          margin: 0 24px;
        }

        .some{
          object-fit: cover;
          height: 48px;
          width: 48px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }

      .content-text{
        text-align: center;
        color: $color-35;
        font-size: $size28;
      }
    }
    .botton{
      height: 88px;
      display: flex;
      justify-content: space-between;
      font-size: $size36;
      color: $color-35;
      div{
        width: 50%;
        text-align: center;
        line-height: 88px;
      }
      .botton-left{
        background-color: $color-f3;
        border-radius: 0 0 0 10px;

      }
      .botton-right{
        background-color: $color-fb;
        border-radius: 0 0 10px 0;
      }
    }
  }
}
</style>
