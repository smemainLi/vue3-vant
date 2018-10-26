<template>
  <div class="more-integral">
    <div class="box"> 
      <div class="box-left">
        <div class="img">
          <img :src="imgUrl" alt="">
        </div>
        <div v-text="text"></div>
      </div>
      <router-link tag="div" :to="{name:component}" v-text="skipText"></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:{
    imgUrl:{    //img url
      type:String,
      default:require("@/assets/image/earn/integral.png")
    },
    text:{      //获取积分的方式，文字描述
      type:String,
      default:'消费后向卖家索取'
    },
    component:{ //要跳转的页面 模板 name
      type:String,
      default:'guide'
    },
    skipText:{  //获取积分的方式，右边的文字描述
      type:String,
      default:"去逛逛 >>"
    }
  }
})
export default class MoreIntegral extends Vue {

  
    

}
</script>

<style lang="scss" scoped>
.more-integral{
  margin-bottom: 24px;
  .box{
    height: 218px;
    background-color:$color-ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px 0 31px;

    .box-left{
      display:flex;
      align-items: center;
      .img{
        height: 120px;
        width: 120px;
        object-fit: cover;
        margin-right: 35px;
        img{
          width: 100%;
          height: 100%;
          }
      }
    }
    
  }
}

</style>