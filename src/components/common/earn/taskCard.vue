<template>
  <div class="task-card">
    <div class="content">
      <div class="content-left">
        <div class="value" v-text="value"></div>
        <div v-if="btnText==='去分享'||btnText==='今天已分享'" class="value-title">
          分享店铺、活动到朋友圈即可，每天可获得
          <span style="color:#F56E72" v-text="number"></span>
          次
        </div>
        <div v-else-if="btnText==='去邀请'" class="value-title">
          邀请1人注册可获
            <span style="color:#F56E72" v-text="number"></span>
          积分，上不封顶
        </div>
        <div class="value-title" v-else v-text="content"></div>
      </div>
      <button @click="skip(btnText)" :class='{"bg-color":!isActive}' v-text="btnText"></button>
      <div class="invite" v-if="btnText==='去邀请'">
        <img src="../../../assets/image/earn/number.png" alt="">
        已邀请99人
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

// ！！注意  邀请人数还没有该字段

@Component({
  props:{
    btnText:{     // 按钮文字
      type:String,
      default:"已完善"
    },
    isActive:{    // 是否已分享，或者是已完善
      type:Boolean,
      default:false
    },
    number:{     // 分享次数或者是邀请可获积分
      type:String,
      default:''
    },
    value:{     // 分值左边的那些
      type:String,
      default:"+5分"
    },
    content:{  // 完善资料
      type:String,
      default:'完善资料后即可获得'
    }
  }
})
export default class TaskCard extends Vue {
  register:Boolean = false;   //是否签到
  
  // 点击按钮
  skip(name){
    if(name==="去完善"){
      this.$router.push({name:'selectData'})
    }else if(name==='去分享'){
      this.$emit('goShare')
    }else if(name==="去邀请"){
      this.$emit('goShare')
    }
  }
}
</script>

<style lang="scss" scoped>
.task-card{
  .content{
    height: 218px;
    background-color: $color-ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 50px 0 38px;
    color: $color-35;
    position: relative;

    button{
      padding: 0;
      border: 0;
      height: 74px;
      width: 226px;
      border-radius: 10px;
      background-color: $color-d2;
      color:$color-ff;
    }

    .content-left{
      width: 351px;
      .value{
        font-size: $size50;
      }
      .value-title{
        font-size: $size28;
        word-wrap: break-word;
      }
    }

    .bg-color{
      background-color:$color-f56;
    }

    .invite{
      font-size: $size28;
      color:$color-88;
      position: absolute;
      right: 54px;
      bottom: 24px;
      // height: 25px;
      // line-height: 25px;

      img{
        height: 25px;
        width: 30px;
        vertical-align:inherit;
      }
    }
  }
}
</style>
