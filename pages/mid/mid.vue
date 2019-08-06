<template name="mid">
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
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
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-green margin-tb-sm lg" @tap="resPay">发布挑战</button>
		</view>
		
		
		<view class="cu-tabbar-height"></view>
		<bottom></bottom>
	</view>
</template>

<script>
// 自定义的 Promise 类型的 http 请求方法,后期需要完善
import api from '@/common/vmeitime-http/'
// 本地存储,是用的 vuex 还没有持久化,后期需要加入持久化
import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js'
// 通用底部
import bottom from "@/components/bottom.vue";

export default {
	name: 'mid',
	components: {
		bottom,
	},
	data() {
		return {
			// 从缓存中查看当前页是什么页
			PageCur: localStorage.getItem('PageCur')||"PageIndex",
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
