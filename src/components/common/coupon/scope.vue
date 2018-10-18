<template>
  <div class="scope">

		<!-- 有效期及时间 -->
		<div v-for="(items,indexs) in scopeMsg" :key="indexs">
			<div class="time">
				<i class="icon-time"></i><div class="time-msg" v-text="items.title">有效期及时间</div>
			</div>
			<ul>
				<li v-for="(item,index) in items.content" :key="index">
					<!-- <div class="dot"></div> -->
					<span class="dots">●</span>
					<span v-text="item"></span>
				</li>
			</ul>

		</div>

		<!-- 使用范围 -->
		<!-- <div class="time">
			<i class="icon-time"></i>
			<div class="time-msg">使用范围</div>
		</div>
		<ul>
			<li v-for="(item,index) in scopeMsg" :key="index">
				<div class="dot"></div>
				<span v-text="item"></span>
			</li>
		</ul> -->
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  props:['scopeMsg'],
  components: {

  }
})

export default class Scope extends Vue {

}
</script>

<style lang='scss' scoped>
.scope{
  padding-left: 32px;
	padding-top:10px;
	padding-bottom: 92px;
	background-color: $color-w;
	min-height:405px;

  .time{
		height: 108px;
		line-height: 108px;
		font-size: $size28;
		font-weight:800;
		display:inline-flex;
		align-items: center;

		.icon-time{
			margin-right: 10px;
			font-size: $size30;
			margin-bottom: 4px;
			// vertical-align: middle;
		}
	}

	ul{
		li{
			display: flex;
			align-items: center;
			color: $color-g2;
			font-size: $size26;
			margin-bottom: 10px;
			letter-spacing:2px;
		}
	}
	

// .dot{
// 	width: 10px;
// 	height: 10px;
// 	background-color: $color-g2;
// 	border-radius: 50% !important;
// 	display: inline-block;
// 	margin-right: 10px;
// 	}
.dots{
	font-size: 20px;
	margin-right: 8px;
	line-height: 35px;
	}
}


</style>