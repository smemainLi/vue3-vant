<template>
  <div class="store">
    <!-- top -->
    <indexTop redeem="5800"></indexTop>

    <div class="exchange">
      <div class="border-color">去赚积分</div>
      <router-link tag="div" :to="{name:'integralDetail'}">积分明细</router-link>
    </div>

    <div class="function">
      <functionCard text="100积分/1个" @trigger="exchangeGame" :imgUrl="require('../../assets/image/redeem/gemeBG.png')"></functionCard>
      <functionCard text="100积分/1元" @trigger="$router.push({name:'parking'})" :imgUrl="require('../../assets/image/redeem/parkingBG.png')"></functionCard>
    </div>

    <!-- 礼品专区 -->
    <div class="arrondi">-礼品专区-</div>

    <!-- 商品展示 -->
    <div class="arrondi-content">
      <goodsCard v-for="item in 4" :key="item" class="arrondi-item">
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
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import path from "../../config/componentsPath"

@Component({
  components: {
    indexTop: path.indexTop,
    functionCard: path.functionCard,
    Mybutton: path.Mybutton,
    goodsCard: path.goodsCard
  }
})
export default class Store extends Vue {

  exchangeGame() {
    this.$dialog.confirm({
      title: '标题',
      message: '大佬说，她还没决定好,等她决定好了，再来弄'
    }).then(() => {
      // on confirm
    }).catch(() => {
      // on cancel
    });

  }

  mounted() {
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
    background: $color-w;
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
    background-color: $color-w;
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