<template>
	<view>
		
		<left v-if="PageCur=='left'"></left>
		<right v-if="PageCur=='right'"></right>
		<!-- #ifdef MP-WEIXIN -->
		
		<!-- 需要使用 button 来授权登录 -->
		<button v-if="!canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取微信用户信息</button>
		<!-- #endif -->
		<button open-type="share" >分享</button>
		
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
						<input placeholder="取一个响亮标题吧" v-model="challenge_data.title"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">当前体重(kg)</view>
						<input placeholder=" " v-model="challenge_data.current_weight"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">体重目标(kg)</view>
						<input placeholder=" " v-model="challenge_data.goal_weight"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">投注(娱乐一下)</view>
						<input placeholder="一点点就好了" v-model="challenge_data.toatal_fee"></input>
						<text class="cuIcon-moneybag lg text-yellow"></text>
					</view>
					<view class="cu-form-group">
						<view class="title">开始日期</view>
						<!-- <picker mode="date" :value="dateFrom" start="2019-06-01" end="2090-09-01" @change="DateChange"> -->
						<picker mode="date" v-model="challenge_data.dateFrom" start="2019-06-01" end="2090-09-01" @change="DateChange1">
							<view class="picker">
								{{dateFrom}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">结束日期</view>
						<picker mode="date" v-model="challenge_data.dateTo" start="2019-06-01" end="2090-09-01" @change="DateChange2">
							<view class="picker">
								{{dateTo}}
							</view>
						</picker>
					</view>
					<view class="cu-form-group">
						<view class="title">上传一张图片吧</view>
						<button type="primary" :loading="loading" :disabled="disabled" @click="upload">选择照片</button>
						<text class="cuIcon-moneybag lg text-yellow"></text>
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
		onShareAppMessage(res) {
			if (res.from === 'button') {// 来自页面内分享按钮
			  console.log(res.target)
			}
			return {
			  title: '你看我比你兽吗？',
			  path: 'pages/mid/mid?id=123'
			}
		  },
		data() {
			return {
				canIUse: false,
				PageCur: 'left',
				modalName: null,
				dateFrom: '2019-06-01',
				dateTo: '2019-06-25',
				challenge_data: {
					title:"",
					current_weight:null,
					goal_weight:null,
					toatal_fee:null,
					dateFrom:null,
					dateTo:null,
				},
				percent:0,
				loading:false,
				disabled:false
			}
		},

		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
			console.log("haha");
			console.log(this.dateTo);
			let that = this;
			uni.getSetting({
			   success(res) {
					console.log("getsetting hahahaaha111");
					console.log(res.authSetting)
					console.log("getsetting hahahaaha222");
					if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称
						uni.getSetting({
							success: (res) => {
								console.log("getsetting hahahaaha3333");
								console.log(res.userInfo);
								console.log("getsetting hahahaaha4444");
								console.log(that.canIUse);
								console.log('getsetting hahahaaha');
								console.log(res.authSetting);
								if (res.authSetting) {
									that.canIUse = true;
								}
								console.log(that.canIUse);
							}
						});
					}
			   }
			}),

			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					console.log(loginRes);
										uni.request({
						url: 'https://swu.mynatapp.cc/wx/user/login', //仅为示例，并非真实接口地址。
						data: {
							"code": loginRes.code
						},
						header: {
							//自定义请求头信息
							'content-type':'application/json'
							// 'content-type':'application/x-www-form-urlencoded'
						},
						method:"POST",
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
			// #ifdef MP-WEIXIN
			bindGetUserInfo(e) {
				console.log(e.detail.userInfo);
				this.canIUse = false;
			},
			// #endif
			upload : function(){
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						const uploadTask = uni.uploadFile({
							url: 'https://swu.mynatapp.cc/img/img_upload',
							filePath: tempFilePaths[0],
							name: 'img',
							formData: {
								'user': 'test'
							},
							success: function (uploadFileRes) {
								console.log(uploadFileRes.data);
								}
							});
						uploadTask.onProgressUpdate(function (res) {
							that.percent = res.progress;
							console.log('上传进度' + res.progress);
							console.log('已经上传的数据长度' + res.totalBytesSent);
							console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
							});
						},
					error: function(e){
						console.log(e);
						}
					});
				},
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
				this.$api.get("/wx/pay/reqPay",{openid: localStorage.getItem('openid')}).then((res)=>{
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
							},
							complete:function(res){
								uni.navigateTo({
									url: '/pages/challengedetail/challengedetail?id=11&name=uniapp'
								});
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
