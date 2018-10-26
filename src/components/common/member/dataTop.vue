<template>
  <div class="data-top">
    <div class="member-top">
      <div class="msg">
        <div class="img-content">
          <img :src="userInfo.imgUrl" alt="">
        </div>
        <div class="info">
          <div class="personal-info">
            <div v-text="userInfo.name"></div>
            <router-link tag="div" :to="{name:'memberRank'}" class="grade">青铜</router-link>
          </div>
          <div class="QR-code">
            <img :src="userInfo.qrCode" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="integration">
      <div class="model">
        <div v-text="userInfo.integrationRanking"></div>
        <div class="color">积分排名</div>
      </div>
      <div class="model">
        <div v-text="userInfo.myIntegral"></div>
        <div class="color">我的积分</div>
      </div>
      <div class="model">
        <router-link :to="{name:'redeem'}" class="color model-only">积分专区
          <van-icon name="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
/**
 *        ！！！！ 注意等级的字段和相应的逻辑还没写
 * 
 *     userInfo  --- Object
 *        name                    用户名字
 *        myIntegral              我的积分
 *        integrationRanking      积分排名
 *        imgUrl                  头像url
 *        qrCode                  二维码
 */

@Component({
  props:["userInfo"]
})
export default class DataTop extends Vue {
}
</script>

<style lang="scss" scoped>
.data-top{
  .member-top{
    height: 280px;
    background-image: url('../../../assets/image/member/bg.png');
    background-size: 100%;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 71px;

    .msg{
      margin-top: 24px;
      margin-left: 32px;
      display: flex;
      align-items: center;
      width: 100%;
      .img-content{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        object-fit: cover;
        margin-right: 20px;
        img{
          height: 120px;
          width: 120px;
          border-radius: 100%
        }
      }

      .info{
        width: calc(100%-204px);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .personal-info{
          display: flex;
          flex-direction:column;
          padding-right: 33px;
          .grade{
            background-color: #F56E72;
            width:68px;
            height:32px;
            font-size: $size22;
            text-align: center;
            border-radius:16px;
            color:$color-ff;
            margin-top:22px;
          }
        }
        .QR-code{
          width: 48px;
          height: 48px;
          object-fit: cover;
          img{
            width: 48px;
            height: 48px;
          }
        }
      }
    }
  }

  .integration{
    width: 622px;
    height: 120px;
    padding: 0 32px;
    font-size: $size28;
    text-align: center;
    margin-left: 32px;
    background-color: $color-ff;
    position: absolute;
    top: 206px;
    display: flex;
    justify-content: space-between;
    .model{
      // width: 150px;
      height: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      .color{
        color: #888888
      }

      .model-only{
        display: flex;
        align-items: center;
      }
    }
  }
}

// 修改vant组件的样式
[class^='van-icon']{
  margin-left: 10px;
}
</style>