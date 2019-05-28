<template name="mid">
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">发布挑战</block>
		</cu-custom>

		<form>
			<view class="cu-form-group margin-top">
				<view class="title">标题</view>
				<input placeholder="取一个响亮标题吧" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">体重目标(绝对值)</view>
				<input placeholder="打算控制体重到55kg,填写(55)" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">体重目标(相对值)</view>
				<input placeholder="小目标:准备减肥5kg,填写(5)" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">投注上限</view>
				<input placeholder="设定投注的上限,例(100)" name="input"></input>
				<text class="cuIcon-moneybag lg text-yellow"></text>
			</view>
		</form>

	</view>
</template>

<script>
	export default {
		name: "mid",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
