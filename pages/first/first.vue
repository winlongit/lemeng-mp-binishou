<template>
	<view>
		<left v-if="PageCur=='left'"></left>
		<right v-if="PageCur=='right'"></right>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="left">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='left'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='left'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="navto">
				<view class="action text-gray add-action">
					<button class="cu-btn cuIcon-add bg-green shadow"></button>
					发起挑战
				</view>
			</view>
			<view class="action" @click="NavChange" data-cur="right">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'right'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='right'?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'left'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			navto: function(e) {
				uni.navigateTo({
					url: '/pages/mid/mid'
				});
			}
		}
	}
</script>

<style>

</style>
