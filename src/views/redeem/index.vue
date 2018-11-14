<template>
  <div class="store">
  <!-- top -->
    <indexTop :redeem="curIntegral"></indexTop>
    
  <!-- 去赚积分和积分明细 -->
    <div class="exchange">
      <router-link tag="div" :to="{name:'earn'}" class="border-color">去赚积分</router-link>
      <router-link tag="div" :to="{name:'integralDetail'}">积分明细</router-link>
    </div>

  <!-- 游戏币和停车缴费 -->
    <div class="function">
      <functionCard :text="`${gameCoinRatio}积分/1个`" @trigger="exchangeGame" :imgUrl="gameCoinRatioStatus===0? require('@/assets/image/redeem/gameBan.png'):require('@/assets/image/redeem/gemeBG.png')"></functionCard>
      <functionCard :text="`${parkingFeeRatio}积分/1元`" @trigger="parkingFeeRatioStatus===0? '': $router.push({name:'parking'})" :imgUrl="parkingFeeRatioStatus===0? require('@/assets/image/redeem/parkingBan.png'):require('@/assets/image/redeem/parkingBG.png')"></functionCard>
    </div>

    <!-- 礼品专区 -->
    <div class="arrondi">-礼品专区-</div>

    <!-- 商品展示 -->
    <div class="arrondi-content">
      <goodsCard v-for="item in goodsInfo" :key="item.id" :goodsInfo="item" class="arrondi-item">
        <!-- 兑换 -->
        <Mybutton @exchange="exchange" :buttonData="item"></Mybutton>
      </goodsCard>
    </div>


    <dialong ref="dialong" :dialongData="gameCoinRatio" @confirm="confirm"></dialong>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import indexTop from "@/components/common/redeem/indexTop.vue"
import functionCard from "@/components/common/redeem/functionCard.vue"
import Mybutton from "@/components/common/redeem/myButton.vue"
import goodsCard from "@/components/common/redeem/goodsCard.vue"
import dialong from "@/components/common/redeem/dialong.vue"
import { Action } from 'vuex-class'

@Component({
  components: {
    indexTop: indexTop,
    functionCard: functionCard,
    Mybutton: Mybutton,
    goodsCard: goodsCard,
    dialong: dialong
  }
})
export default class Store extends Vue {
  value:Number = 0                //输入框的数字
  curIntegral:number = 0          //当前积分
  gameCoinRatio:number = 0        //游戏币兑换比例
  gameCoinRatioStatus:number = 1  //游戏币是否禁用
  parkingFeeRatio:number = 0      //积分停车兑换比例  
  parkingFeeRatioStatus:number = 1//积分停车兑换是否禁用
  goodsInfo:Array<any> = []       //商品信息

  @Action("redeemIndex")  redeemIndex                      //首页展示数据
  @Action("gameExchange")  gameExchange                    //游戏币积分兑换
  @Action("integralGoodsExchange")  integralGoodsExchange  //积分商品兑换

// 首页数据展示  identification ---> 当兑换游戏币的时候，就只更新当前积分的标识
  redeemIndexMethod(identification=true){
    this.redeemIndex().then(res=>{
      if(identification===false){
        let result = res.data        
        this.curIntegral = result.curIntegral
        return
      }
      let result = res.data
      this.curIntegral = result.curIntegral
      this.gameCoinRatio = result.gameCoinRatio
      this.gameCoinRatioStatus = result.gameCoinRatioStatus
      this.parkingFeeRatio = result.parkingFeeRatio
      this.parkingFeeRatioStatus = result.parkingFeeRatioStatus
      this.goodsInfo = result.listIntegralGoods
    }).catch(err=>{
      this.$toast.fail(err);
    })
  }

// 点击按钮兑换商品 子-->父
  exchange(id){
    console.log(id)
    this.integralGoodsExchange({id}).then(res=>{
      this.$toast.success('兑换成功')
      this.redeemIndexMethod()
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

    
  // 弹框的子组件点击确定后触发父组件的方法
  // 把输入框的数值传递给父组件
  confirm(data){
    this.value = data
  }
    
  // 子组件触发父组件的方法
  exchangeGame(){
    if(this.gameCoinRatioStatus===0) return
    // this.$refs.dialong.showDialong(true)
    this.$refs.dialong["showDialong"](true)
  }

  @Watch("value")
  valueChange(news,old){
    this.gameExchange({count:news}).then(res=>{
      this.$toast.success('兑换成功')
      let identification:boolean = false
      this.redeemIndexMethod(identification)
    }).catch(err=>{
      this.$toast.fail(err)
    })
  }

  mounted () {
    this.redeemIndexMethod()
  }
}
</script>

<style lang="scss" scoped>
.store {
  .exchange {
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $color-ff;
    margin: 15px 0;

    div {
      width: 375px;
      text-align: center;
      color: $color-35;
      font-size: $size28;
    }
  }
  .function {
    height: 218px;
    background-color: $color-ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 69px;
  }

  .arrondi {
    color: $color-35;
    font-size: $size28;
    text-align: center;
    margin: 37px auto 32px auto;
  }

  .arrondi-content {
    padding: 0 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .arrondi-item {
      margin-bottom: 32px;
    }
  }

  .border-color {
    border-right: 1px $color-d2 solid;
  }
}
</style>
