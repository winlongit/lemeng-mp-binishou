<template name="bottom">
	<!-- 所有页面的公共底部菜单栏 -->
	<view>
	<!-- 底部菜单栏 -->
	<view class="cu-bar tabbar bg-white shadow foot">
		<view class="action" @click="NavChangeIndex">
			<view class='cuIcon-cu-image'>
				<image :src="'/static/tabbar/basics' + [PageCur=='PageIndex'?'_cur':''] + '.png'"></image>
			</view>
			<view :class="PageCur=='PageIndex'?'text-green':'text-gray'">首页</view>
		</view>
		<!-- <view class="action" @click="navto">挑啊挑</view> -->
		<view class="action text-gray add-action" @tap="showModal" data-target="DialogModal1">
			<button class="cu-btn cuIcon-add bg-green shadow"></button>
			发起挑战
		</view>
		<!-- </view> -->
		<view class="action" @click="NavChangeUserInfo">
			<view class='cuIcon-cu-image'>
				<image :src="'/static/tabbar/about' + [PageCur == 'PageUserInfo'?'_cur':''] + '.png'"></image>
			</view>
			<view :class="PageCur=='PageUserInfo'?'text-green':'text-gray'">我的</view>
		</view>
	</view>
	
	<!-- 发起挑战弹出框 -->
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
							{{challenge_data.dateFrom}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">结束日期</view>
					<picker mode="date" v-model="challenge_data.dateTo" start="2019-06-01" end="2090-09-01" @change="DateChange2">
						<view class="picker">
							{{challenge_data.dateTo}}
						</view>
					</picker>
				</view>
				<!-- 图片上传， /1 表示上传一张图片，也可以上传多张，以下的 1 都需要相应的修改 	that.imgList = res.tempFilePaths 也需要修改，增减的时候加入判断是否为空的判断-->
				<view class="cu-bar bg-white margin-top">
					<view class="action">
						图片上传
					</view>
					<view class="action">
						{{imgList.length}}/1
					</view>
				</view>
				<view class="cu-form-group">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						 <image :src="imgList[index]" mode="aspectFill"></image>
							<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
								<text class='cuIcon-close'></text>
							</view>
						</view>
						<view class="solids" @tap="upload" v-if="imgList.length<1">
							<text class='cuIcon-cameraadd'></text>
						</view>
					</view>
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
	// 自定义的 Promise 类型的 http 请求方法,后期需要完善
	import api from '@/common/vmeitime-http/'
	// 本地存储,是用的 vuex 还没有持久化,后期需要加入持久化
	import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js'
	export default {
		name: 'bottom',
		data() {
			return {
				// 从缓存中查看当前页是什么页
				PageCur: localStorage.getItem('PageCur')||"PageIndex",
				// 控制弹出框
				modalName: null,
				// 上传图片打印上传进度 需要1个百分比参数
				percent:0,
				imgList: [],
				// 时间控件
				challenge_data: {
					title:"",
					current_weight:null,
					goal_weight:null,
					toatal_fee:null,
					dateFrom:'2019-08-01',
					dateTo:'2019-08-25',
				},
			}
		},
		methods:{
			// 跳转到首页
			NavChangeIndex: function(e) {
				// 如果当前也不是首页才跳转,不然跳转的话需要重新刷新页面,影响体验
				if (this.PageCur !== "PageIndex") {
					localStorage.setItem('PageCur', "PageIndex");
					uni.navigateTo({
						url: '/pages/first/first'
					});
				}
			},
			// 跳转到个人信息页
			NavChangeUserInfo: function(e) {
				if (this.PageCur !== "PageUserInfo") {
					localStorage.setItem('PageCur', "PageUserInfo");
					uni.navigateTo({
						url: '/pages/right/right'
					});
				}
			},
			showModal(e) {
				console.log(e.currentTarget.dataset.target);
				this.modalName = e.currentTarget.dataset.target;
			},
			hideModal(e) {
				this.modalName = null
			},
			// 上传照片
			upload : function(){
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						// 预览图片
/* 						uni.previewImage({
							urls: res.tempFilePaths,
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						}); */
						const tempFilePaths = res.tempFilePaths;
						that.imgList = res.tempFilePaths;
						that.loading = true;
						const uploadTask = uni.uploadFile({
							url: 'https://swu.mynatapp.cc/img/img_upload',
							filePath: tempFilePaths[0],
							name: 'img',
							formData: {
								'user': 'test'
							},
							success: function (uploadFileRes) {
								that.loading = false;
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
			// 预览图片
			ViewImage(e) {
				uni.previewImage({
					// 这里预览传入的是所有图片，可以左右滑动切换
					urls: this.imgList,
					// 当前图片
					current: e.currentTarget.dataset.url
				});
			},
			// 图片左上角的 x 删除这张图片
			DelImg(e) {
				this.imgList.splice(e.currentTarget.dataset.index, 1)
			},
			// 请求付款
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
			
			// 时间设置
			DateChange1(e) {
				this.challenge_data.dateFrom = e.detail.value
			},
			DateChange2(e) {
				this.challenge_data.dateTo = e.detail.value
			}
		}
	
	}
</script>

<style>
</style>
