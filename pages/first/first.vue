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
			<view class="action" @click="navto">挑啊挑</view>
			<view class="action text-gray add-action" @tap="showModal" data-target="DialogModal1">
				<button class="cu-btn cuIcon-add bg-green shadow"></button>
				发起挑战
			</view>
			<!-- </view> -->
			<view class="action" @click="NavChange" data-cur="right">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/about' + [PageCur == 'right'?'_cur':''] + '.png'"></image>
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
					<view class="action margin-0 flex-treble text-green solid-left" @tap="resPay">发布挑战</view>
					<view class="action margin-0 flex-sub  solid-left text-gray" @tap="hideModal">取消</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js'
	
	export default {
		data() {
			return {
				PageCur: 'left',
				modalName: null,
				dateFrom: '2019-06-01',
				dateTo: '2019-06-25'
			}
		},

		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
			console.log("haha");
			console.log(this.dateTo);
			uni.getSetting({
			   success(res) {
					console.log("getsetting hahahaaha111");
					console.log(res.authSetting)
					console.log("getsetting hahahaaha222");
					if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称
					wx.getUserInfo({
						success: function(res) {
							console.log("getsetting hahahaaha3333");
							console.log(res.userInfo);
							console.log("getsetting hahahaaha4444");
						}
					})
					}
			   }
			}),

			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log(loginRes);
										uni.request({
						url: 'https://swu.mynatapp.cc/wx/user/wxd6aefbe7d94175f6/login', //仅为示例，并非真实接口地址。
						data: {
							"code": loginRes.code
						},
						header: {
							//自定义请求头信息
							// 'content-type':'application/json'
							'content-type':'application/x-www-form-urlencoded'
						},
						method:"GET",
						success: (res) => {
							console.log(res);
							// 推荐用法,缓存
							localStorage.setItem('openid', res.data.openid);
						}
					});
				}
			});
		},
		methods: {
			kk: function(){
				console.log(this.dateTo);
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
			navto: function(e) {
				uni.navigateTo({
					url: '/pages/mescroll/mescroll-test'
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			resPay(e){
				this.modalName = null
				// 推荐用法,获取缓存
				console.log(localStorage.getItem('openid'));
				this.$api.get("/xccPay/reqPay",{openid: localStorage.getItem('openid')}).then((res)=>{
				        console.log('request success', res)
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.timeStamp,
							nonceStr: res.data.nonceStr,
							package: res.data.package,
							signType: res.data.signType,
							paySign: res.data.paySign,
							success: function (res) {
								console.log('success:' + JSON.stringify(res));
							},
							fail: function (err) {
								console.log('fail:' + JSON.stringify(err));
							}
						});
				    }).catch((err)=>{
				        console.log('request fail', err);
				    })
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
