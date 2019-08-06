<template>
	<view>
		<!-- 顶部导航栏 -->
		<cu-custom bgColor="bg-gradual-pink" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">比你兽</block>
		</cu-custom>
		
		<!-- #ifdef MP-WEIXIN -->
		<!-- 需要使用 button 来授权登录 -->
		<button v-if="!canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取微信用户信息</button>
		<!-- #endif -->
		
		<button open-type="share" >分享</button>
		
		<view>
			<!-- msecroll-uni 拉下加载，上拉刷新组件 ， 注意： 这个组件只能用在页面中，不能再 组件中调用这个组件，不然不会起作用 -->
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
			<view class="news-li" v-for="news in dataList" :key="news.id">
			<!-- 我的挑战 -->
			<view class="cu-card dynamic">
				<view class="cu-item shadow">
					<view class="cu-tag bg-purple">我的</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<!-- 头像图片 -->
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content flex-sub">
								<view>卡尔</view>
								<view class="text-gray text-sm flex justify-between">发起:2019年12月3日</view>
							</view>
							<view class="text-left margin-right-sm">
								<view class="text-green">开始:2019年12月3日</view>
								<view class="text-red">结束:2019年12月3日</view>
							</view>
						</view>
					</view>
					<view class="flex align-center">
						<view class="flex-sub solid-bottom text-xl padding title"><view class="text-black text-cut">5天减肥10斤5天减肥10斤</view></view>
					</view>
					<view class="grid flex-sub padding-lr col-1">
						<view class="bg-img only-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
					</view>
					<view class="flex align-center text-center justify-around text-lg padding-lr margin-top-xs">
						<view class="cu-tag bg-red light round">
							胜利投注
							<text class="text-price">10</text>
						</view>
						<view class="cu-tag bg-green light round">
							总投注
							<text class="text-price">10</text>
						</view>
						<view class="cu-tag bg-green light round">
							失败投注
							<text class="text-price">10</text>
						</view>
					</view>
					<view class="flex padding-lr margin-top-xs"><button class="cu-btn round flex-sub bg-red">加注</button></view>
				</view>
			</view>
			
			<!-- 好友的挑战 -->
			<view class="cu-card article">
				<view class="cu-item shadow">
					<view class="cu-tag bg-blue">好友</view>
					<view class="title"><view class="text-cut">5天减肥10斤，5天减肥10斤，5天减肥10斤，5天减肥10斤</view></view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<!-- 头像图片 -->
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="text-left margin-right-sm">
								<view>卡尔</view>
								<view class="text-gray">发起:2019年12月3日</view>
							</view>
							<view class="text-left margin-right-sm">
								<view class="text-green">开始:2019年12月3日</view>
								<view class="text-red">结束:2019年12月3日</view>
							</view>
						</view>
					</view>
					<view class="flex align-center text-center justify-around text-lg padding-lr margin-top-xs">
						<view class="cu-tag bg-red light round">
							胜利投注
							<text class="text-price">10</text>
						</view>
						<view class="cu-tag bg-green light round">
							总投注
							<text class="text-price">10</text>
						</view>
						<view class="cu-tag bg-green light round">
							失败投注
							<text class="text-price">10</text>
						</view>
					</view>
					<view class="flex padding-lr margin-top-xs"><button class="cu-btn round flex-sub bg-red">加注</button></view>
				</view>
			</view>
			
			</view>
			</mescroll-uni>

		</view>
		
		<bottom></bottom>
	</view>
</template>

<script>
	import api from '@/common/vmeitime-http/'
	import { localStorage } from '@/js_sdk/mp-storage/mp-storage/index.js'
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import bottom from "@/components/bottom.vue";
	
	export default {
		components: {
			bottom,
			// 上拉加载,下拉刷新组件
			MescrollUni
		},
		// 分享按钮触发
		onShareAppMessage(res) {
			if (res.from === 'button') {// 来自页面内分享按钮
			  console.log(res.target)
			}
			return {
			// 分享的页面配置，标题，点开后跳转的页面
			  title: '你看我比你兽吗？',
			  path: 'pages/mid/mid?id=123'
			}
		  },
		data() {
			return {
				canIUse: false,
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					// auto: true, //是否在初始化后,自动执行上拉回调callback; 默认true
					// page: {
					// 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					// 	size: 10 // 每页数据的数量
					// }
				},
				dataList: []
			}
		},
		//注册滚动到底部的事件,用于上拉加载
		onReachBottom() {
			this.mescroll && this.mescroll.onReachBottom();
		},
		//注册列表滚动事件,用于下拉刷新
		onPageScroll(e) {
			this.mescroll && this.mescroll.onPageScroll(e);
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			console.log(option.name); //打印出上个页面传递的参数。
			console.log("haha");
			console.log(this.dateTo);
			let that = this;
			
			// 通过 uni.getSetting 来判断 能不能使用 getUserInfo
			uni.getSetting({
			   success(res) {
					if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
								console.log(infoRes);
								console.log(infoRes.userInfo);
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							}
						});
						if (res.authSetting) {
							that.canIUse = true;
						}
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
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				//联网加载数据
				this.getListDataFromNet(0, 1, (data) => {
					//联网成功的回调,隐藏下拉刷新的状态
					mescroll.endSuccess();
					//设置列表数据
					this.dataList.unshift(data[0]);
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				//联网加载数据
				this.getListDataFromNet(mescroll.num, mescroll.size, (curPageData)=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					console.log("mescroll.num=" + mescroll.num + ", mescroll.size=" + mescroll.size + ", curPageData.length=" + curPageData.length);
			
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
			
					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
			
					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
			
					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
					mescroll.endSuccess(curPageData.length);
			
					//设置列表数据
					this.dataList=this.dataList.concat(curPageData);
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			/*联网加载列表数据
			在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
			请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
			实际项目以您服务器接口返回的数据为准,无需本地处理分页.
			* */
			getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
				//延时一秒,模拟联网
				setTimeout(function() {
					try {
						var newArr = [];
						if (pageNum == 0) {
							//此处模拟下拉刷新返回的数据
							var id=new Date().getTime();
							var newObj = {
								id:id,
								title: "【新增新闻" + id + "】 标题",
								content: "新增新闻的内容"
							};
							newArr.push(newObj);
						} else {
							//此处模拟上拉加载返回的数据
							for (var i = 0; i < pageSize; i++) {
								var upIndex = (pageNum - 1) * pageSize + i + 1;
								var newObj = {
									id:upIndex,
									title: "【新闻" + upIndex + "】 标题标题标题标题标题",
									content: "内容内容内容内容内容内容内容内容内容"
								};
								newArr.push(newObj);
							}
						}
						//联网成功的回调
						successCallback && successCallback(newArr);
					} catch (e) {
						//联网失败的回调
						errorCallback && errorCallback();
					}
				}, 1000)
			},
			// #ifdef MP-WEIXIN
			bindGetUserInfo(e) {
				console.log(e.detail.userInfo);
				this.canIUse = true;
			},
			// #endif

		}
	}
</script>

<style>

</style>
