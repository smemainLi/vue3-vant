<template>
  <div class="dispense">

    <div class="carNum">
      <div class="car-num-box car-num-num box-font box-margin" id="font" @click="btnClickYue()" :class="[isYue?'is-click':'']">{{areaName}}</div>
      <div class="car-num-box car-num-num box-font" id="letter" @click="btnClickNum('a')" :class="[isA?'is-click':'']">{{areaLetter}}</div>
      <div class="car-num-bar"></div>
      <div class="car-num-box car-num-num" id="numOne" @click="btnClickNum('one')" :class="[isNumOne?'is-num-click':'']">{{numOne}}</div>
      <div class="car-num-box car-num-num" id="numTwo" @click="btnClickNum('two')" :class="[isNumTwo?'is-num-click':'']">{{numTwo}}</div>
      <div class="car-num-box car-num-num" id="numThree" @click="btnClickNum('three')" :class="[isNumThree?'is-num-click':'']">{{numThree}}</div>
      <div class="car-num-box car-num-num" id="numFour" @click="btnClickNum('four')" :class="[isNumFour?'is-num-click':'']">{{numFour}}</div>
      <div class="car-num-box car-num-num" id="numFive" @click="btnClickNum('five')" :class="[isNumFive?'is-num-click':'']">{{numFive}}</div>
      <!-- 切换为新能源车牌号 -->
      <input class="new-checkbox" type="checkbox" v-model="isNewEnergy">
      <div :class="['car-num-box',isNumSix?'is-num-click':'',]">
        <div class="car-num-num" id="numSix" @click="btnClickNum('six')" v-show="isNewEnergy" v-cloak>{{numSix}}</div>
        <div class="new-energy-vehicle" v-show="!isNewEnergy">
          <div class="plus-photo">
            <img class="plus-image" src="../../assets/image/parking/plus.png" alt="">
          </div>
          <div class="new-energy">新能源</div>
        </div>
      </div>
    </div>
    <common-btn :btnName="btnName" @click.native="addCarNumber()"></common-btn>

    <!-- 弹出键盘 -->
    <div class="keyboard" v-if="keyboardShow" :class='{animationDown:isDown,animationUp:isUp}'>
      <button class="btn-complete" @click="completeClick()"><span>完成</span></button>
      <div v-if="keyboard == 'txt'">
        <div class="keyboard-row" v-for="(item,rows) in carTxt" :key="rows">
          <button class="keyboard-row-item" v-for="(i,index) in item.name" :key="index" @click="btnWordClick(rows,index,i)">{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <button class="keyboard-row-item bottom" @click="btnBottomClick('新')">新</button>
          <button class="keyboard-row-item bottom" @click="btnBottomClick('临')">临</button>
          <button v-for="(j,index) in noneBottomtxt" :key="index" class="none-botton">{{j}}</button><!-- 空格，占据最底部一定的空格数 -->
          <div class="keyboard-row-item clear" @click="clearClick">×</div>
        </div>
      </div>
      <div v-if="keyboard == 'num'">
        <div class="keyboard-row" v-for="(item,rows) in carNum" :key="rows">
          <button :disabled="!isSelectl?isDisable && i<10 :isDisable&& rows!=0 " class="keyboard-row-item" v-for="(i,index) in item.name" :key="index" @click="btnWordClick(rows,index,i)">{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <button :disabled="isSelectl" v-for="(item,index) in carNumBottom" :key="index" class="keyboard-row-item bottom" @click="btnBottomNumClick(item)">{{item}}
          </button>
          <button v-for="(j,index) in noneBottom" :key="index+'botton'" class="none-botton">{{index}}</button><!-- 空格，占据最底部一定的空格数 -->
          <div class="keyboard-row-item clear" @click="clearClick()">×</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import commonBtn from '../../components/common/button.vue';
import { Action } from 'vuex-class';
import { carNumber } from '@/router/router-path';

@Component({
  components: {
    commonBtn
  }
})
export default class CarNumber extends Vue {
  @Action('queryPlateNumber') queryPlateNumber
  @Action('carNumEdit') carNumEdit

  isComplete = false; //车牌号码填写完成，开启按钮
  isNewEnergy = false; //新能源
  isDown = false; //键盘隐藏
  isUp = false; //键盘显示
  selected = null;
  isSelectx = false; //选中'新'
  isSelectl = false; //选中'临'
  key = 1; //车牌号对应位，1对应车牌号码第一位，2对应车牌号码第二位，...以此类推

  carNumList: Array<string> = [];//存储后台传回来的车牌号码数组，例如：["粤", "C", "1", "2", "1", "2", "1"]

  areaName = ""; //区域简称
  areaLetter = ""; //地市一级代码（车牌号的第二位）
  numOne = ""; //五位序号码的第一位
  numTwo = ""; //五位序号码的第二位
  numThree = ""; //五位序号码的第三位
  numFour = ""; //五位序号码的第四位
  numFive = ""; //五位序号码的第五位
  numSix = ""; //五位序号码的第六位

  keyboardShow = false; //键盘显示
  keyboard = ""; //键盘（两种显示状态'txt'--文字，'num'--包含数字）

  isYue = false; //是否是区域简称
  isA = false; //是否是地市一级代码（车牌号的第二位）
  isNumOne = false; //是否是五位序号码的第一位
  isNumTwo = false; //是否是五位序号码的第二位
  isNumThree = false; //是否是五位序号码的第三位
  isNumFour = false; //是否是五位序号码的第四位
  isNumFive = false; //是否是五位序号码的第五位
  isNumSix = false; //是否是五位序号码的第六位

  isDisable = false; //是否隐藏

  addedCarNum = "";
  btnName = "确定";

  carTxt = [{ name: ["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"] }, { name: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "桂"] }, { name: ["琼", "渝", "川", "贵", "云", "藏", "陕", "甘", "青", "宁"] }];
  carNumBottom = ["W", "X", "Y", "Z"];
  noneBottom = ["", "", "", ""];
  noneBottomtxt = ["", "", "", "", "", ""];
  carNum = [{ name: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] }, { name: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] }, { name: ["L", "M", "N", "P", "Q", "R", "S", "T", "U", "V"] }];

  @Watch('isNewEnergy')
  newEnergy(newVal, oldVal) {
    this.isNumOne = false; this.isNumTwo = false; this.isNumThree = false; this.isNumFour = false; this.isNumFive = false; this.isNumSix = false;
    if (!newVal) {
      // 切换到普通车牌
      if (this.numFour) {
        this.isNumFive = true;
        this.key = 7;
        /* console.log(4, newVal); */
      }
    } else {
      // 页面首次加载请求用户绑定的车牌号，如果用户没有绑定车牌号码，那新能源位码清空，防止用户在车牌号上绑定了后台传过来的车牌号码之后新能源位码被清空
      if (this.carNumList.length === 0) {
        this.numSix = "";
      }
      this.carNumList.length = 0;//如果用户有绑定车牌号码，初次加载页面的时候，获取到了carNumList，如果不清空，那catNumList不为空，当用户编辑车牌号码的时候，新能源位码不会被自动清空
      this.btnClickNum('six');
      // 切换到新能源车牌
      if (this.numFive) {
        this.isNumSix = true;
        this.key = 8;
        /* console.log(3, newVal); */
      }
    }
  }

  /**
   * 选中车牌号码的第一位，也就是地区简称位
   */
  btnClickYue() { this.isYue = true; this.isA = false; this.isUp = true; this.isNumOne = false; this.isNumTwo = false; this.isNumThree = false; this.isNumFour = false; this.isNumFive = false; this.isNumSix = false; this.keyboardShow = true; this.keyboard = "txt"; this.key = 1; };

  /**
   * carTxt: [{ name: ["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"] },{ name: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "桂"] },{ name: ["琼", "渝", "川", "贵", "云", "藏", "陕", "甘", "青", "宁"] }],
   * carNum: [{ name: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] },{ name: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] },{ name: ["L", "M", "N", "P", "Q", "R", "S", "T", "U", "V"] }],
   * rows 表示carTxt/carNum数据的下标，0、1、2行
   * index 表示具体行数据的下标，["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"]/["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]的下标
   * i 表示具体行里面具体的某个汉字，["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"]/["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]的具体文字
   */
  btnWordClick(rows, index, i) {
    this.selected = i;
    if (this.key === 1) {
      //key 车牌号对应位，1对应车牌号码第一位，2对应车牌号码第二位，...以此类推
      if (this.areaName === "临") {
        //'临'不在carTxt内，所以点击carTxt以外的字是不会触发btnWordClick方法
        this.areaLetter = ""; this.numOne = ""; this.numTwo = ""; this.numThree = ""; this.numFour = ""; this.numFive = ""; this.numSix = "";
      }
      this.areaName = i;
      this.isSelectl = false; //被修改了值======false--->true
      (<any>document).getElementById('letter').click();
      //如果选中的是车牌号码的第二位，第二位的内容为键盘中选中的内容，并且选中下一个车牌号方框
    } else if (this.key === 2) {    this.areaLetter = i; (<any>document).getElementById("numOne").click();
    } else if (this.key === 3) {    this.numOne = i; (<any>document).getElementById("numTwo").click();
    } else if (this.key === 4) {    this.numTwo = i; (<any>document).getElementById("numThree").click();
    } else if (this.key === 5) {    this.numThree = i; (<any>document).getElementById("numFour").click();
    } else if (this.key === 6) {    this.numFour = i; (<any>document).getElementById("numFive").click();
    } else if (this.key === 7) {    this.numFive = i;
      if (this.isNewEnergy) { (<any>document).getElementById("numSix").click(); }
    } else if (this.key === 8) { this.numSix = i; }
    //如果选中的是序号码的最后一个或者新能源车牌号添加的序号吗，修改键盘最底层文字，并且减少空格，即noneBottom的内容长度
    if (this.key === 7 || this.key === 8) {    this.carNumBottom = ["W", "X", "Y", "Z", "港", "澳", "学"]; this.noneBottom = [""];
      //否则换回原来的字母，并且添加空格，即noneBottom的内容长度
    } else if (this.key === 3 || this.key === 4 || this.key === 5 || this.key === 6
    ) { this.carNumBottom = ["W", "X", "Y", "Z"]; this.noneBottom = ["", "", "", ""]; }
  };

  /**
   * 选中"新"或者"临"
   */
  btnBottomClick(val) {
    if (val === "新") {
      if (this.areaName === "临") { this.areaLetter = ""; this.numOne = ""; this.numTwo = ""; this.numThree = ""; this.numFour = ""; this.numFive = ""; this.numSix = ""; }
      this.areaName = "新";
      this.isSelectx = true; //选中'新'置为true
      this.isSelectl = false; //选中'临'置为false
      (<any>document).getElementById("letter").click();
    } else if (val === "临") {
      this.areaName = "临";
      this.isSelectl = true; //选中'临'置为true
      this.isSelectx = false; //选中'新'置为false
      this.isDisable = true; this.areaLetter = ""; this.numOne = ""; this.numTwo = ""; this.numThree = ""; this.numFour = ""; this.numFive = ""; this.numSix = "";
      (<any>document).getElementById("letter").click(); //修改"isLin"======>"isLin"------>空
    }
  };

  /**
     * 键盘最后一行字母被选
     */
  btnBottomNumClick(i) {
    this.selected = i;
    if (this.key === 2) {    this.areaLetter = i; (<any>document).getElementById("numOne").click();
    } else if (this.key === 3) {    this.numOne = i; (<any>document).getElementById("numTwo").click();
    } else if (this.key === 4) {    this.numTwo = i; (<any>document).getElementById("numThree").click();
    } else if (this.key === 5) {    this.numThree = i; (<any>document).getElementById("numFour").click();
    } else if (this.key === 6) {    this.numFour = i; (<any>document).getElementById("numFive").click();
    } else if (this.key === 7) {    this.numFive = i;
      if (this.isNewEnergy) { (<any>document).getElementById("numSix").click(); }
    } else if (this.key === 8) {    this.numSix = i;
    }
  };

  /**
   * 点击车牌号序号码的时候，设置对应键盘字
   */
  btnClickNum(name) {
    if (this.isSelectl) {
      //如果选中'临'，在这里只是单纯的标志位
      this.isDisable = true;
    } else {
      this.isDisable = false;
    }
    this.keyboard = "num";
    this.keyboardShow = true;
    this.isUp = true;
    //先全部设置为false
    this.isYue = false; this.isA = false; this.isNumOne = false; this.isNumTwo = false; this.isNumThree = false; this.isNumFour = false; this.isNumFive = false; this.isNumSix = false;
    if (name === "a") {    this.isDisable = true; this.isA = true; this.key = 2;
    } else if (name === "one") {    this.isNumOne = true; this.key = 3;
    } else if (name === "two") {    this.isNumTwo = true; this.key = 4;
    } else if (name === "three") {    this.isNumThree = true; this.key = 5;
    } else if (name === "four") {    this.isNumFour = true; this.key = 6;
    } else if (name === "five") {    this.isNumFive = true; this.key = 7;
    } else if (name === "six") {    this.isNumSix = true; this.key = 8;
    }
    //如果目前点击的是车牌号序号码第五位，如果是新能源，那就包括第六位，键盘末行键盘字替换，并将留空设置为一个
    if (name === "five" || name === "six") {    this.carNumBottom = ["W", "X", "Y", "Z", "港", "澳", "学"]; this.noneBottom = [""];
      //否则，键盘末行仍然是字母，留空为四位
    } else {    this.carNumBottom = ["W", "X", "Y", "Z"]; this.noneBottom = ["", "", "", ""];
    }
  };

  /**
   * 隐藏键盘
   */
  completeClick() { this.isYue = false; this.isA = false; this.isNumOne = false; this.isNumTwo = false; this.isNumThree = false; this.isNumFour = false; this.isNumFive = false; this.isNumSix = false; this.isUp = false; this.isDown = true; this.keyboardShow = false; };

  /**
   * 清除函数
   */
  clearClick() {
    if (this.key === 1) {    this.areaName = "";
      //如果当前选中的是第二个空，切换第一个空被选中，然后删除当前空格中的内容
    } else if (this.key === 2) {      (<any>document).getElementById("font").click(); this.areaLetter = "";
    } else if (this.key === 3) {      (<any>document).getElementById("letter").click(); this.numOne = "";
    } else if (this.key === 4) {      (<any>document).getElementById("numOne").click(); this.numTwo = "";
    } else if (this.key === 5) {      (<any>document).getElementById("numTwo").click(); this.numThree = "";
    } else if (this.key === 6) {      (<any>document).getElementById("numThree").click(); this.numFour = "";
    } else if (this.key === 7) {      (<any>document).getElementById("numFour").click(); this.numFive = "";
    } else if (this.key === 8) {      (<any>document).getElementById("numFive").click(); this.numSix = "";
    }
  };

  /**
   * 添加车牌号
   */
  async addCarNumber() {
    let num;
    //不是新能源车牌号
    if (!this.isNewEnergy) {      num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive;
      //新能源车牌号
    } else if (this.isNewEnergy) { num = this.areaName + this.areaLetter + this.numOne + this.numTwo + this.numThree + this.numFour + this.numFive + this.numSix; }
    if (num === "") { this.$toast.fail("请输入车牌号码"); } else if (!this.isNewEnergy && (this.areaName === "" || this.areaLetter === "" || this.numOne === "" || this.numTwo === "" || this.numThree === "" || this.numFour === "" || this.numFive === "")
    ) { this.$toast.fail("请输入完整车牌号"); } else if (this.isNewEnergy && (this.areaName === "" || this.areaLetter === "" || this.numOne === "" || this.numTwo === "" || this.numThree === "" || this.numFour === "" || this.numFive === "" || this.numSix === "")
    ) { this.$toast.fail("请输入完整车牌号"); } else {
      /**
       * 编辑车牌号码
       */
      await this.carNumEdit({ carNum: num }).then((res) => {
        console.log(res);
        this.$toast.success("修改成功!");
        setTimeout(() => { this.$router.go(-1); }, 1000);
      }).catch((err) => {
        this.$toast.fail(err);
      });
    }
  };

  /**
   * 获取车牌号码
   */
  async getPlateNumber() {
    await this.queryPlateNumber().then((res) => {
      this.carNumList = res.data.carNum.split('');
      const carNumLength: number = this.carNumList.length;
      if (this.carNumList.length !== 0) {
        // 新能源车牌号
        if (carNumLength === 8) {
          this.isNewEnergy = true;
          this.numSix = this.carNumList[7];
        } else {
          this.isNewEnergy = false;
        }
        this.areaName = this.carNumList[0];
        this.areaLetter = this.carNumList[1];
        this.numOne = this.carNumList[2];
        this.numTwo = this.carNumList[3];
        this.numThree = this.carNumList[4];
        this.numFour = this.carNumList[5];
        this.numFive = this.carNumList[6];
      }

    }).catch((err) => {
      this.$toast.fail(err);
    });
  }

  mounted() {
    this.getPlateNumber();
    this.btnClickYue();
  };

  beforeRouteEnter(to, from, next) {
    next(vm => { vm.areaName = ""; vm.areaLetter = ""; vm.numOne = ""; vm.numTwo = ""; vm.numThree = ""; vm.numFour = ""; vm.numFive = ""; vm.numSix = ""; });
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../assets/css/page/carNumber.scss";
</style>
