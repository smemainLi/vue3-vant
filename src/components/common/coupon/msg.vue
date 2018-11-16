<template>
  <div class="msg"> 
		<div :class='["content",status===2? "font-color":""]'>
      <div class="content-box">
        <div class="content-left" v-text="name"></div>
        <button :class='["button",status===2? "button-color":""]' v-if="status===2" v-text="statusName"></button>
      </div>
      <div class="content-right" v-if="status!==0&&isShow">
        <div :class='["spot",status===2? "button-color":""]'></div>
        <div v-text="(superposition===0||upperLimit===null)? '不可叠加':`可叠加${upperLimit}张`"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";


@Component({
   props:{
     name:{             // 优惠名称
      type:String,
       default:""
     },
    superposition:{    // 是否可叠加
      type:Number,
      default:0
    },
    status:{           // 券状态 （0：未使用；1：已使用；2：已过期）
      type:Number,
      default:0
    },
    upperLimit:{        // 可叠加上限
      type:Number,
      default:0
    },
    statusName:{        //  按钮文字
      type:String,
      default:""
    },
    isShow:{            // 是否显示叠加数
      type:Boolean,
      default:false
    }
  }
})

export default class Msg extends Vue {


}
</script>
<style lang="scss" scoped>
.msg{
  .content{
    margin-top: 24px;
    height: 67px;
    background-color: $color-ff;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding:0 30px;
    color: $color-f56;
    // border:1px solid black;
    .content-box{
      // display: flex;
      // align-items: flex-end;
      // border: 1px solid red;
      position: relative;
      bottom: -1px;

      
      .content-left{
        font-weight:800;
        font-size: $size36;
        position: relative;
        bottom:-8px;
        display: inline-block;
      }

      .button{
        font-weight:bold;
        // display: block;
        // display: inline-block;
        // background-color:#F56E72;
        height: 36px;
        line-height: 40px;
        text-align: center;
        width: 138px;
        padding-right: 0;
        padding-left: 0;
        border: 0;
        font-size: $size28;
        color: #fff;
        border-radius: 18px;
        position: relative;
        bottom: -7px;
        margin-left: 25px;
        // margin-top:17px;
      }

    }
    .content-right{
      font-weight: 500;
      font-size: $size26;
      display: flex;
      align-items: center;
      position: relative;
      bottom: -7.5px;
      // border:1px solid red;

      .spot{
        display: inline-block;
        width: 9px;
        height: 9px;
        border-radius: 100%;
        background-color: $color-f56;
        margin-right: 10px;
      }
    }
  }

  .font-color{
    color:$color-88
  }

  .button-color{
    background-color: $color-88 !important;
  }
}
</style>


