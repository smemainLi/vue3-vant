<template>
  <div class="store">
  <!-- top -->
    <indexTop redeem="5800"></indexTop>
    
  <!-- 去赚积分和积分明细 -->
    <div class="exchange">
      <div class="border-color">去赚积分</div>
      <router-link tag="div" :to="{name:'integralDetail'}">积分明细</router-link>
    </div>

  <!-- 游戏币和停车缴费 -->
    <div class="function">
      <functionCard text="100积分/1个" @trigger="exchangeGame" :imgUrl="require('../../assets/image/redeem/gemeBG.png')"></functionCard>
      <functionCard text="100积分/1元" @trigger="$router.push({name:'parking'})" :imgUrl="require('../../assets/image/redeem/parkingBG.png')"></functionCard>
    </div>

    <!-- 礼品专区 -->
    <div class="arrondi">-礼品专区-</div>

    <!-- 商品展示 -->
    <div class="arrondi-content">
      <goodsCard v-for="item in 4" :key="item" :goodsInfo="goodsInfo" class="arrondi-item">
        <Mybutton bgColor="#F56E72" v-if="item===1">
          100分/个 点击兑换
        </Mybutton>
        <Mybutton v-else-if="item===2">
          100分/个 点击兑换
        </Mybutton>
        <Mybutton bgColor="#F56E72" v-else-if="item===3">
          100分/个 点击兑换
        </Mybutton>
        <Mybutton bgColor="#A6B5F7" v-else>
          100分/个 点击兑换
        </Mybutton>
      </goodsCard>
    </div>


    <dialong ref="dialong" @confirm="confirm"></dialong>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import indexTop from "@/components/common/redeem/indexTop.vue"
import functionCard from "@/components/common/redeem/functionCard.vue"
import Mybutton from "@/components/common/redeem/myButton.vue"
import goodsCard from "@/components/common/redeem/goodsCard.vue"
import dialong from "@/components/common/redeem/dialong.vue"

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
  value:Number = 0  //输入框的数字

// 礼品的信息
  goodsInfo = {
    goodsName:"超特价柔软毛巾",
    price:"¥100.00",
    surplus:"余998"
  }

// 弹框的子组件点击确定后触发父组件的方法
// 把输入框的数值传递给父组件
  confirm(data){
    this.value = data
  }

// 子组件触发父组件的方法
  exchangeGame(){
    // this.$refs.dialong.showDialong(true)
    this.$refs.dialong["showDialong"](true)
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
