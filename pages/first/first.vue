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
			<!-- <view class="action" @click="navto"> -->
			<view class="action text-gray add-action" @tap="showModal" data-target="DialogModal1">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发起挑战
			</view>
			<!-- </view> -->
			<view class="action" @click="NavChange" data-cur="right">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'right'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='right'?'text-green':'text-gray'">我的</view>
			</view>
		</view>





		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">发起挑战</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>

				<form>
					<view class="cu-form-group margin-top">
						<view class="title">标题</view>
						<input placeholder="取一个响亮标题吧" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">体重目标(绝对值)</view>
						<input placeholder="目标体重(kg)" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">体重目标(相对值)</view>
						<input placeholder="目标减重(kg)" name="input"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">投注上限</view>
						<input placeholder="投注的上限(10-100)" name="input"></input>
						<text class="cuIcon-moneybag lg text-yellow"></text>
					</view>
					<view class="cu-form-group">
						<view class="title">开始日期</view>
						<!-- <picker mode="date" :value="dateFrom" start="2019-06-01" end="2090-09-01" @change="DateChange"> -->
						<picker mode="date" :value="dateFrom" start="2019-06-01" end="2090-09-01" @change="DateChange1">
							<view class="picker">
								{{dateFrom}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">结束日期</view>
						<picker mode="date" :value="dateTo" start="2019-06-01" end="2090-09-01" @change="DateChange2">
							<view class="picker">
								{{dateTo}}
							</view>
						</picker>
					</view>
				</form>

				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-treble text-green solid-left" @tap="hideModal">发布挑战</view>
					<view class="action margin-0 flex-sub  solid-left text-gray" @tap="hideModal">取消</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'left',
				modalName: null,
				dateFrom: '2019-06-01',
				dateTo: '2019-06-25'
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
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			DateChange1(e) {
				this.dateFrom = e.detail.value
			},
			DateChange2(e) {
				this.dateTo = e.detail.value
			}
		}
	}
</script>

<style>

</style>
