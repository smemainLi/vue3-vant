<template>
  <div class="scope">

		<!-- 有效期及时间和适用范围等适用 -->
		<div v-for="(items,indexs) in scopeMsg" :key="indexs">
			<div class="time">
				<i class="icon-time"></i><div class="time-msg" v-text="items.title"></div>
			</div>
			<ul>
				<li v-for="(item,index) in items.content" :key="index">
					<span v-text="item" class="span"></span>
				</li>
			</ul>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

/**
 * 			scopeMsg --- Array
 * 				title  标题 （比如有效期及时间）
 * 				content	 --- Object
 * 						在 content 对象内随意定义字段就行
 */


@Component({
  props:['scopeMsg']
})

export default class Scope extends Vue {

}
</script>

<style lang='scss' scoped>
.scope{
  padding-left: 32px;
	padding-top:10px;
	padding-bottom: 92px;
	background-color: $color-ff;
	// min-height:405px;
	min-height: 150px;

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
		}
	}

	ul{
		li{
			margin-left: 32px;
			color: $color-88;
			font-size: $size26;
			margin-bottom: 10px;
			letter-spacing:2px;

			.span{
				margin-left: -10px;
			}
		}
	}
}
</style>