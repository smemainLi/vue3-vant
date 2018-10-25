<template>
  <div class="select-card">
    <div :class='["content",data.length==(index+1)? " ":"border-color"]' v-for="(item,index) in data" :key="index" @click="popup(index)">
      <div v-text="item.textLeft"></div>
      <div class="box-right">
        <div class="sex" v-text="item.select"></div>
        <van-icon name="arrow" />
      </div>
    </div>


    <!-- 性别 出生年月日 车牌号 弹出框 -->
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="sexData" v-if="indexs===0" :show-toolbar="true" @cancel="show=false" @change="onChange" @confirm="Mothed(Identification,'sexMothed','sex',indexs)"/>
      <van-datetime-picker
        v-else-if="indexs===1"
        @cancel="show=false"
        @confirm="Mothed(currentDate,'dateMothed','date',indexs)"
        v-model="currentDate"
        type="date"
        :max-date="new Date()"
        :formatter="formatter"
      />
    </van-popup>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
interface content{
  textLeft:string,
  select:string|Date
}
@Component({
  props:{
    borderColor:{
      type:Boolean,
      default:false
    }
  },
  components: {
  }
})
export default class SelectCard extends Vue {
  show:Boolean = false  //选择性别弹框
  sexData:Array<string> = ["男","女"]  //性别选项
  sex:string = "男"  //默认值
  currentDate:any = new Date()
  selectDate:any = new Date()
  indexs:number = 0
  data:Array<content> = [{textLeft:"性别",     select:"男"},
                        {textLeft:"出生年月日", select:this.$momentTime(this.currentDate,"YYYY年MM月DD日")},
                        {textLeft:"车牌号",    select:""}] 
  Identification:any = ''
  
      //  数据        方法         要改变是哪个 
  Mothed(data:string,mothed:string,name:string,index:number){
    if(data==='') return this.show = false  //防止选择同一个选项，造成数据不改变就为空
    this.$emit(mothed,data)
    this.$set(this.data[index],'select',index===1? this.$momentTime(data,"YYYY年MM月DD日"):data )

    this.show = false
  }

// 当性别和出生年月数据改变
  onChange(picker:any, value:any, index:number){
    switch (value instanceof Date) {
      case true:
        this.Identification = this.$momentTime(value)
        break;
      default:
        this.Identification = value
        break;
    }
  }

  // 出生年月日
  formatter(type:string,value:string){
     if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }else{
        return `${value}日`
      }
  }

// 弹出框
  popup(index:number){
    if(index==2) return
    this.indexs = index
    this.show = true
  }
}
</script>

<style lang="scss" scoped>
.select-card{
  font-size: $size28;
  background-color: $color-w;
  padding: 0 45px 0 35px;

  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 110px;

    .box-right{
      display: flex;
      align-items: center;

      .sex{
        margin-right: 20px;
      }
    }
  }
}

.border-color{
  border-bottom: 1px solid $color-e5;
}
.box-right /deep/ .van-icon{
  font-size: $size26 !important;
  color: $color-g2;
}
</style>