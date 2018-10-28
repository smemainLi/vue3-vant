<template>
  <div id="dispense">
    <div class="content-car-number">
      <div class="car-content-title">
        <span>车牌号</span>
        <label class="ze-checkbox">
          <input type="checkbox" v-model="checkbox">
          <span class="ze-checkbox-icon" style="width: 20px;height: 20px;">
            <i style="width: 6px;height: 12px;"></i>
          </span>
          <span class="ze-checkbox-text">新能源</span>
        </label>
      </div>
      <div class="content-section">
        <div class="content-section-flex flex-card">
          <div class="content-section-flex flex-card-border">
            <button id="font" class="flex-btn" @click="btnClickYue()" v-bind:class="{isClick: isYue }">
              <!-- isClick样式 -->
              {{areaName}}
            </button>
            <span class="blank-border blank-border-first"></span>
            <button id='letter' class="flex-btn" @click="btnClickA()" v-bind:class="{isClick: isA}">
              <!-- isClick样式 -->
              {{areaLetter}}
            </button>
            <div class="flex-mid"><span></span></div><!-- 圆点-->
            <div class="flex-btns">
              <button id='numOne' @click="btnClickNum('one')" v-bind:class="{isNumClick: isNumOne }">{{numOne}}</button>

              <span class="blank-border"></span>

              <button id='numTwo' @click="btnClickNum('two')" v-bind:class="{isNumClick: isNumTwo }">{{numTwo}}</button>

              <span class="blank-border"></span>

              <button id='numThree' @click="btnClickNum('three')" v-bind:class="{isNumClick: isNumThree }">{{numThree}}</button>

              <span class="blank-border"></span>

              <button id='numFour' @click="btnClickNum('four')" v-bind:class="{isNumClick: isNumFour }">{{numFour}}</button>

              <span class="blank-border"></span>

              <button id='numFive' @click="btnClickNum('five')" v-bind:class="{isNumClick: isNumFive }">{{numFive}}</button>

              <span class="blank-border" v-if="checkbox"></span>

              <button v-if="checkbox" id='numSix' @click="btnClickNum('six')" v-bind:class="{isNumClick: isNumSix }">{{numSix}}</button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="fee-hours">
      <div class="fee-hours-title">优免时长</div>
      <div class="fee-hours-content">
        <div class="fee-hours-num" @click="feeHourClick('one')" v-bind:class="{isFeeHour: isOne }">1小时</div>
        <div class="fee-hours-num" @click="feeHourClick('two')" v-bind:class="{isFeeHour: isTwo }">2小时</div>
        <div class="fee-hours-num" @click="feeHourClick('three')" v-bind:class="{isFeeHour: isThree}">3小时</div>
        <div class="fee-hours-num" @click="feeHourClick('four')" v-bind:class="{isFeeHour: isFour }">4小时</div>
      </div>
      <div class="fee-hours-content">
        <div class="fee-hours-num" @click="feeHourClick('five')" v-bind:class="{isFeeHour: isFive }">5小时</div>
        <div class="fee-hours-num" @click="feeHourClick('six')" v-bind:class="{isFeeHour: isSix }">6小时</div>
        <div class="fee-hours-num" @click="feeHourClick('seven')" v-bind:class="{isFeeHour: isSeven }">7小时</div>
        <div class="fee-hours-num" @click="feeHourClick('eight')" v-bind:class="{isFeeHour: isEight }">8小时</div>
      </div>
      <div class="fee-hours-content fee-hours-num" @click="feeHourClick('other')" v-bind:class="{isFeeHour: isOther }">
        自定义
      </div>
    </div> -->

    <div class="searchPay-btn">
      <!-- <button v-if="!isComplete">发放</button> -->
      <!-- <button class="searchPay-btn-click" v-if="isComplete" @click="addCar()">发放</button> -->
      <button class="searchPay-btn-click" @click="addCarNumber()">发放</button>
    </div>
    <div class="keyboard" v-if="keyboardShow" :class='{animationDown:isDown,animationUp:isUp}'>
      <button class="btn-complete" @click="completeClick()"><span>完成</span></button>
      <div v-if="keyboard == 'txt'">
        <div class="keyboard-row" v-for="(item,rows) in carTxt" :key="rows">
          <button class="keyboard-row-item" v-for="(i,index) in item.name" :key="index" @click="btnWordClick(rows,index,i)">{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <!-- <div class="keyboard-row-items"> -->
          <button class="keyboard-row-item bottom" @click="btnBottomClick('新')">新</button>
          <button class="keyboard-row-item bottom" @click="btnBottomClick('临')">临</button>
          <button v-for="(j,index) in noneBottomtxt" :key="index" class="none-botton">{{j}}</button><!-- 空格，占据最底部一定的空格数 -->
          <div class="keyboard-row-item clear" @click="clearClick">
            <img src="../../assets/image/guide/like.png" alt="删除">
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div v-if="keyboard == 'num'">

        <div class="keyboard-row" v-for="(item,rows) in carNum" :key="rows">{{rows}}{{rows}}
          <button :disabled="!isSelectl?isDisable && i<10 :isDisable&& rows!=0 " class="keyboard-row-item" v-for="(i,index) in item.name" :key="index" @click="btnWordClick(rows,index,i)">{{i}}{{i}}
          </button>
        </div>
        <div class="keyboard-row">
          <button :disabled="isSelectl" v-for="(item,index) in carNumBottom" :key="index" class="keyboard-row-item bottom" @click="btnBottomNumClick(item)">{{item}}{{index}}{{index}}
          </button>
          <button v-for="(j,index) in noneBottom" :key="index+'botton'" class="none-botton">{{index}}</button><!-- 空格，占据最底部一定的空格数 -->
          <div class="keyboard-row-item clear" @click="clearClick()">
            <img src="../../assets/image/guide/like.png" alt="删除">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dispense",
  data() {
    return {
      isComplete: false, //车牌号码填写完成，开启按钮
      checkbox: false, //新能源
      isDown: false, //键盘隐藏
      isUp: false, //键盘显示
      selected: null,
      isSelectx: false, //选中'新'
      isSelectl: false, //选中'临'
      key: 1, //车牌号对应位，1对应车牌号码第一位，2对应车牌号码第二位，...以此类推

      areaName: "", //区域简称
      areaLetter: "", //地市一级代码（车牌号的第二位）
      numOne: "", //五位序号码的第一位
      numTwo: "", //五位序号码的第二位
      numThree: "", //五位序号码的第三位
      numFour: "", //五位序号码的第四位
      numFive: "", //五位序号码的第五位
      numSix: "", //五位序号码的第六位

      keyboardShow: false, //键盘显示
      keyboard: false, //键盘（两种显示状态'txt'--文字，'num'--包含数字）

      isYue: false, //是否是区域简称
      isA: false, //是否是地市一级代码（车牌号的第二位）
      isNumOne: false, //是否是五位序号码的第一位
      isNumTwo: false, //是否是五位序号码的第二位
      isNumThree: false, //是否是五位序号码的第三位
      isNumFour: false, //是否是五位序号码的第四位
      isNumFive: false, //是否是五位序号码的第五位
      isNumSix: false, //是否是五位序号码的第六位

      isDisable: false, //是否隐藏

      /* isOne: false, //优免时长1小时
      isTwo: false, //优免时长2小时
      isThree: false, //优免时长3小时
      isFour: false, //优免时长4小时
      isFive: false, //优免时长5小时
      isSix: false, //优免时长6小时
      isSeven: false, //优免时长7小时
      isEight: false, //优免时长8小时 */
      /* isOther: false, */
      carTxt: [
        { name: ["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"] },
        { name: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "桂"] },
        { name: ["琼", "渝", "川", "贵", "云", "藏", "陕", "甘", "青", "宁"] }
      ],
      carNumBottom: ["W", "X", "Y", "Z"],
      noneBottom: ["", "", "", ""],
      noneBottomtxt: ["", "", "", "", "", ""],
      carNum: [
        { name: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] },
        { name: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] },
        { name: ["L", "M", "N", "P", "Q", "R", "S", "T", "U", "V"] }
      ],
      addedCarNum: ""
    };
  },
  watch: {
    checkbox: function(val, old) {
      //当新能源复选框变化的时候触发，val为this.checkbox的值
      // console.log("dsfhkshdfkhsdkfhksdhfhskfh");
      // console.log(this.checkbox);
      // console.log(val);
      // console.log(old);
      // console.log("dsfhkshdfkhsdkfhksdhfhskfh");
      this.isNumOne = false;
      this.isNumTwo = false;
      this.isNumThree = false;
      this.isNumFour = false;
      this.isNumFive = false;
      this.isNumSix = false;
      const vm = this;
      if (!val) {
        //val-----this.checkbox
        // 切换到普通车牌
        if (vm.numFour) {
          vm.isNumFive = true;
          vm.key = 7;
          console.log(4, val);
        }
      } else {
        console.log(vm.numFive);
        // 切换到新能源车牌
        if (vm.numFive) {
          vm.isNumSix = true;
          vm.key = 8;
          console.log(3, val);
        }
      }
    }
  },
  methods: {
    /**
     * 选择优免时长之后判断车牌号
     */
    /* feeHourClick(val) {
      if (
        this.areaName &&
        this.areaLetter &&
        this.numOne &&
        this.numTwo &&
        this.numThree &&
        this.numFour &&
        this.numFive
      ) {
        //如果优免时长已经选择并且车牌号码都已经都填上了，那'发放'按钮就会开启
        if (this.checkbox && this.numSix) {
          //如果选择了新能源，那车牌号码会加上一位，这里要确保两个参数，已经选上了新能源且第六位序号码已经被填上
          this.isFeeHourClick = true;
        } else if (!this.checkbox) {
          this.isFeeHourClick = true;
        }
      }
      this.keyboardShow = false;
      if (val === "one") {
        this.isOne = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "two") {
        this.isTwo = true;
        this.isOne = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "three") {
        this.isThree = true;
        this.isTwo = false;
        this.isOne = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "four") {
        this.isFour = true;
        this.isTwo = false;
        this.isThree = false;
        this.isOne = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "five") {
        this.isFive = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isOne = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "six") {
        this.isSix = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isOne = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "seven") {
        this.isSeven = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isOne = false;
        this.isEight = false;
        this.isOther = false;
      } else if (val === "eight") {
        this.isEight = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isOne = false;
        this.isOther = false;
      } else if (val === "other") {
        this.isOther = true;
        this.isTwo = false;
        this.isThree = false;
        this.isFour = false;
        this.isFive = false;
        this.isSix = false;
        this.isSeven = false;
        this.isEight = false;
        this.isOne = false;
      }
    }, */

    /**
     * 选中车牌号码的第一位，也就是地区简称位
     */
    btnClickYue() {
      this.isYue = true;
      this.isA = false;
      this.isUp = true;
      this.isNumOne = false;
      this.isNumTwo = false;
      this.isNumThree = false;
      this.isNumFour = false;
      this.isNumFive = false;
      this.isNumSix = false;
      this.keyboardShow = true;
      this.keyboard = "txt";
      this.key = 1;
    },

    /**
     * carTxt: [
     *       { name: ["粤", "京", "冀", "沪", "津", "晋", "蒙", "辽", "吉", "黑"] },
     *       { name: ["苏", "浙", "皖", "闽", "赣", "鲁", "豫", "鄂", "湘", "桂"] },
     *       { name: ["琼", "渝", "川", "贵", "云", "藏", "陕", "甘", "青", "宁"] }
     *    ],
     * carNum: [
        { name: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] },
        { name: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] },
        { name: ["L", "M", "N", "P", "Q", "R", "S", "T", "U", "V"] }
      ],
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
          this.areaLetter = "";
          this.numOne = "";
          this.numTwo = "";
          this.numThree = "";
          this.numFour = "";
          this.numFive = "";
          this.numSix = "";
        }
        this.areaName = i;
        this.isSelectl = false; //被修改了值======false--->true
        document.getElementById("letter").click();
      } else if (this.key === 2) {
        //如果选中的是车牌号码的第二位，第二位的内容为键盘中选中的内容，并且选中下一个车牌号方框
        this.areaLetter = i;
        document.getElementById("numOne").click();
      } else if (this.key === 3) {
        this.numOne = i;
        document.getElementById("numTwo").click();
      } else if (this.key === 4) {
        this.numTwo = i;
        document.getElementById("numThree").click();
      } else if (this.key === 5) {
        this.numThree = i;
        document.getElementById("numFour").click();
      } else if (this.key === 6) {
        this.numFour = i;
        document.getElementById("numFive").click();
      } else if (this.key === 7) {
        this.numFive = i;
        if (this.checkbox) {
          document.getElementById("numSix").click();
        }
      } else if (this.key === 8) {
        this.numSix = i;
      }
      if (this.key === 7 || this.key === 8) {
        //如果选中的是序号码的最后一个或者新能源车牌号添加的序号吗，修改键盘最底层文字，并且减少空格，即noneBottom的内容长度
        this.carNumBottom = ["W", "X", "Y", "Z", "港", "澳", "学"];
        this.noneBottom = [""];
      } else if (
        //否则换回原来的字母，并且添加空格，即noneBottom的内容长度
        this.key === 3 ||
        this.key === 4 ||
        this.key === 5 ||
        this.key === 6
      ) {
        this.carNumBottom = ["W", "X", "Y", "Z"];
        this.noneBottom = ["", "", "", ""];
      }
    },

    /**
     * 选中"新"或者"临"
     */
    btnBottomClick(val) {
      if (val === "新") {
        if (this.areaName === "临") {
          this.areaLetter = "";
          this.numOne = "";
          this.numTwo = "";
          this.numThree = "";
          this.numFour = "";
          this.numFive = "";
          this.numSix = "";
        }
        this.areaName = "新";
        this.isSelectx = true; //选中'新'置为true
        this.isSelectl = false; //选中'临'置为false
        document.getElementById("letter").click();
      } else if (val === "临") {
        this.areaName = "临";
        this.isSelectl = true; //选中'临'置为true
        this.isSelectx = false; //选中'新'置为false
        this.isDisable = true;
        this.areaLetter = "";
        this.numOne = "";
        this.numTwo = "";
        this.numThree = "";
        this.numFour = "";
        this.numFive = "";
        this.numSix = "";
        document.getElementById("letter").click("isLin"); //修改"isLin"======>"isLin"------>空
      }
    },

    /**
     * 键盘最后一行字母被选
     */
    btnBottomNumClick(i) {
      this.selected = i;
      if (this.key === 2) {
        this.areaLetter = i;
        document.getElementById("numOne").click();
      } else if (this.key === 3) {
        this.numOne = i;
        document.getElementById("numTwo").click();
      } else if (this.key === 4) {
        this.numTwo = i;
        document.getElementById("numThree").click();
      } else if (this.key === 5) {
        this.numThree = i;
        document.getElementById("numFour").click();
      } else if (this.key === 6) {
        this.numFour = i;
        document.getElementById("numFive").click();
      } else if (this.key === 7) {
        this.numFive = i;
        if (this.checkbox) {
          document.getElementById("numSix").click();
        }
      } else if (this.key === 8) {
        this.numSix = i;
      }
    },

    /**
     * 选中的是地市一级代码
     */
    btnClickA() {
      this.isDisable = true;
      this.isA = true;
      this.isYue = false;
      this.isUp = true;
      this.isNumOne = false;
      this.isNumTwo = false;
      this.isNumThree = false;
      this.isNumFour = false;
      this.isNumFive = false;
      this.isNumSix = false;
      this.keyboardShow = true;
      this.keyboard = "num";
      this.key = 2;
    },

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
      //先全部设置为false
      this.isYue = false;
      this.isA = false;
      this.isNumOne = false;
      this.isNumTwo = false;
      this.isNumThree = false;
      this.isNumFour = false;
      this.isNumFive = false;
      this.isNumSix = false;

      this.isUp = true;
      if (name === "one") {
        this.isNumOne = true;
        this.key = 3;
      } else if (name === "two") {
        this.isNumTwo = true;
        this.key = 4;
      } else if (name === "three") {
        this.isNumThree = true;
        this.key = 5;
      } else if (name === "four") {
        this.isNumFour = true;
        this.key = 6;
      } else if (name === "five") {
        this.isNumFive = true;
        this.key = 7;
      } else if (name === "six") {
        this.isNumSix = true;
        this.key = 8;
      }
      if (name === "five" || name === "six") {
        //如果目前点击的是车牌号序号码第五位，如果是新能源，那就包括第六位，键盘末行键盘字替换，并将留空设置为一个
        this.carNumBottom = ["W", "X", "Y", "Z", "港", "澳", "学"];
        this.noneBottom = [""];
      } else {
        //否则，键盘末行仍然是字母，留空为四位
        this.carNumBottom = ["W", "X", "Y", "Z"];
        this.noneBottom = ["", "", "", ""];
      }
    },

    /**
     * 隐藏键盘
     */
    completeClick() {
      this.isYue = false;
      this.isA = false;
      this.isNumOne = false;
      this.isNumTwo = false;
      this.isNumThree = false;
      this.isNumFour = false;
      this.isNumFive = false;
      this.isNumSix = false;
      this.isUp = false;
      this.isDown = true;
      this.keyboardShow = false;
    },

    /**
     *
     */
    clearClick() {
      if (this.key === 1) {
        this.areaName = "";
      } else if (this.key === 2) {
        //如果当前选中的是第二个空，切换第一个空被选中，然后删除当前空格中的内容
        document.getElementById("font").click();
        this.areaLetter = "";
      } else if (this.key === 3) {
        document.getElementById("letter").click();
        this.numOne = "";
      } else if (this.key === 4) {
        document.getElementById("numOne").click();
        this.numTwo = "";
      } else if (this.key === 5) {
        document.getElementById("numTwo").click();
        this.numThree = "";
      } else if (this.key === 6) {
        document.getElementById("numThree").click();
        this.numFour = "";
      } else if (this.key === 7) {
        document.getElementById("numFour").click();
        this.numFive = "";
      } else if (this.key === 8) {
        document.getElementById("numFive").click();
        this.numSix = "";
      }
    },

    /**
     * 添加车牌号
     */
    addCarNumber() {
      var num;
      if (!this.checkbox) {
        //不是新能源车牌号
        num =
          this.areaName +
          this.areaLetter +
          this.numOne +
          this.numTwo +
          this.numThree +
          this.numFour +
          this.numFive;
      } else if (this.checkbox) {
        //新能源车牌号
        num =
          this.areaName +
          this.areaLetter +
          this.numOne +
          this.numTwo +
          this.numThree +
          this.numFour +
          this.numFive +
          this.numSix;
      }
      if (num === "") {
        this.$toast("请输入车牌号码");
      } else if (
        !this.checkbox &&
        (this.areaName === "" ||
          this.areaLetter === "" ||
          this.numOne === "" ||
          this.numTwo === "" ||
          this.numThree === "" ||
          this.numFour === "" ||
          this.numFive === "")
      ) {
        this.$toast("请输入完整车牌号");
      } else if (
        this.checkbox &&
        (this.areaName === "" ||
          this.areaLetter === "" ||
          this.numOne === "" ||
          this.numTwo === "" ||
          this.numThree === "" ||
          this.numFour === "" ||
          this.numFive === "" ||
          this.numSix === "")
      ) {
        this.$toast("请输入完整车牌号");
      } else {
        /**
         * 接口调用以及页面请求
         */
        // let data = {
        //     vehiclenum: num
        // }
        // this.$http.post(ADD_VEHICLE, data).then(res => {
        //   if (res.data.ret === 0) {
        //     this.addedCarNum = num
        //     this.$router.push({name: 'AddSuccess', params: {addedCarNum: this.addedCarNum}})
        //   } else {
        //     this.$dialog.toast({mes:res.data.message,timeout:1200})
        //   }
        // })
      }
    }
  },
  mounted() {
    this.btnClickYue();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.areaName = "";
      vm.areaLetter = "";
      vm.numOne = "";
      vm.numTwo = "";
      vm.numThree = "";
      vm.numFour = "";
      vm.numFive = "";
      vm.numSix = "";
    });
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
#dispense {
  .navbar {
    .right {
      a {
        font-size: 30px;
        color: #ffc200;
      }
    }
  }
  .ze-checkbox > input[type="checkbox"] {
    position: absolute;
    left: -9999em;
  }

  .ze-checkbox > input[type="checkbox"]:checked + .ze-checkbox-icon {
    background-color: currentColor;
    border-color: #ffc400;
  }

  .ze-checkbox-icon {
    border: 1px solid #ccc; /*no*/
    border-radius: 2px;
    display: inline-block;
    position: relative;
    z-index: 10;
    vertical-align: bottom;
    pointer-events: none;
    > i {
      position: absolute;
      top: 45%;
      left: 50%;
      border: 3px solid #ffc400; /*no*/
      border-top: 0;
      border-left: 0;
      transform: translate(-50%, -50%) rotate(45deg) scale(0);
    }
  }

  .ze-checkbox > input[type="checkbox"]:checked + .ze-checkbox-icon > i {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
    transition: all 0.2s ease-in-out;
  }
  background-color: #fff;
  .content-car-number {
    padding: 64px 0 0;
    .car-content-title {
      display: flex;
      justify-content: space-between;
      padding: 0 32px;
      margin-bottom: 16px;
      span {
        font-size: 34px;
      }
      .ze-checkbox {
        display: flex;
        align-items: center;
      }
      .ze-radio-text {
        font-size: 28px;
      }
      .ze-checkbox-icon {
        color: #ffedb1 !important;
        margin-right: 8px;
      }
    }
    .content-section {
      .content-section-flex {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        margin-bottom: 35px;
        .blank-border {
          height: 44px;
          width: 1px; /*no*/
          border-right: 1px solid #ddd; /*no*/
          margin-top: 27px;
          float: left;
          margin-left: -15px;
          z-index: 1;
          &.blank-border-first {
            margin-top: 0px;
          }
        }
        &.flex-card {
          color: #000;
          .flex-btn {
            width: 98px;
            height: 98px;
            border: none;
            text-align: center;
            background: #fff;
            font-size: 40px;
            color: #000;
          }
          .flex-btns {
            text-align: center;
            background: #fff;
            width: fit-content;
            position: relative;
            height: 98px;
            button {
              width: 98px;
              height: 98px;
              border: none;
              font-size: 40px;
              color: #000;
              border-radius: 50%;
              background: transparent;
              float: left;
              margin-left: -20px;
              z-index: 2;
              position: relative;
              &:first-child {
                margin-left: 0;
              }
            }
          }
          .flex-mid {
            margin: 0 0.1rem;
            span {
              display: block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #ddd;
            }
          }
          .isClick {
            border: 1px solid #ffc200; /*no*/
            z-index: 50;
            border-radius: 8px;
          }
          .isNumClick {
            border-radius: 8px !important;
            border: 1px solid #ffc200 !important; /*no*/
            z-index: 10;
            background-color: #fff !important;
          }
        }
        .flex-card-border {
          border: 1px solid #ddd; /*no*/
          border-radius: 8px;
        }
      }
    }
  }
  .fee-hours {
    padding: 0 32px;
    margin-bottom: 80px;
    .fee-hours-title {
      margin-bottom: 16px;
      font-size: 34px;
    }
    .fee-hours-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;
      &.fee-hours-num {
        display: block;
      }
    }
    .fee-hours-num {
      width: 152px;
      height: 64px;
      font-size: 28px;
      background: #ececec;
      border-radius: 8px;
      text-align: center;
      line-height: 64px;
    }
    .isFeeHour {
      background: #ffeeb1;
    }
  }
  .searchPay-btn {
    text-align: center;
    /*background-color: #f6f6f6;*/
    margin: 0 32px 0;
    button {
      width: 686px;
      height: 88px;
      color: #ffffff;
      font-size: 32px;
      background: #ececec;
      border: none;
      border-radius: 8px;
      &.searchPay-btn-click {
        box-shadow: 0px 5px 10px 0px rgba(255, 227, 135, 1);
        background: #ffc200;
        color: #101010;
      }
    }
  }
  .keyboard {
    width: 100%;
    height: 502px;
    position: fixed;
    bottom: -502px;
    background: #eeeeee;
    z-index: 10;
    &.animationDown {
      animation: slide_dowms 0.3s ease-out;
      animation-fill-mode: forwards;
    }
    &.animationUp {
      animation: slide_ups 0.3s ease-out;
      animation-fill-mode: forwards;
    }
    .btn-complete {
      height: 72px;
      text-align: right;
      color: #ffc200;
      font-size: 30px;
      width: 100%;
      background: #fff;
      border: none;
      border-top: 1px solid #eee;
      margin-bottom: 30px;
      span {
        margin-right: 30px;
      }
    }
    .keyboard-row {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      padding: 0 8px;
      color: #333;
      &:first-child {
        margin-top: 0;
      }
      .keyboard-row-items {
        display: flex;
        justify-content: left;
      }
      .keyboard-row-bottom {
        display: flex;
        justify-content: space-between;
      }
      .keyboard-row-item {
        width: 66px;
        height: 80px;
        background: #fff;
        font-size: 34px;
        text-align: center;
        border: 1px solid #ccc; /*no*/
        border-radius: 10px;
        color: #333;
        &.bottom {
          height: 80px;
          width: 66px;
          line-height: 80px;
          background: #fff;
          color: #333;
          /*margin-right: 0.08rem;*/
        }
        &.clear {
          width: 140px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 62px;
          }
        }
      }
      .none-botton {
        border: none;
        height: 80px;
        width: 66px;
        /* visibility: hidden; */
      }
    }
    button {
      &:active {
        background: #f4f4f4 !important;
        color: #999 !important;
      }
    }
  }
  @keyframes slide_ups {
    from {
      bottom: -502px;
    }
    to {
      bottom: 0px;
    }
  }
  @keyframes slide_dowms {
    from {
      bottom: 0px;
    }
    to {
      bottom: -502px;
    }
  }
  button:disabled {
    background: #f4f4f4 !important;
    color: #8f8f8f !important;
  }
  .active {
    &:active {
      background: #f4f4f4 !important;
      color: #999 !important;
    }
  }
}
</style>
