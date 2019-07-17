<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true"><block slot="backText">返回</block><block slot="content">时间轴</block></cu-custom>
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
						<view class="news-li" v-for="news in dataList" :key="news.id">
		<view class="cu-timeline">
			<view class="cu-time">昨天</view>
			<view class="cu-item cur cuIcon-noticefill">
				<view class="content bg-green shadow-blur">
					<text>22:22</text> 【广州市】快件已到达地球
				</view>
			</view>
			<view class="cu-item cur cuIcon-noticefill">
				<view class="cu-capsule radius">
					<view class="cu-tag bg-cyan">上午</view>
					<view class="cu-tag line-cyan">10:00</view>
				</view>
				<image src="/static/componentBg.png" mode="widthFix" class="response"></image>
				<image src="http://swu.mynatapp.cc/img/img_download" mode="widthFix" class="response"></image>
			</view>
			<view class="cu-item text-red cuIcon-attentionforbidfill">
				<view class="cu-list menu-avatar radius">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">文晓港</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
						</view>
					</view>
				</view>
				<view class="content bg-red shadow-blur">
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item text-red cuIcon-attentionforbidfill">
				<view class="content bg-red shadow-blur">
					这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
				</view>
			</view>
			<view class="cu-item text-grey cuIcon-evaluate_fill">
				<view class="content bg-grey shadow-blur">
					这是第一次，我家的铲屎官走了这么久。
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue content">
					<text>20:00</text> 【月球】快件已到达月球，准备发往地球
				</view>
				<view class="bg-cyan content">
					<text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
				</view>
			</view>
		</view>

		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<text>01:30</text> 【喵星】 MX-12138 已揽收，准备发往银河系
				</view>
			</view>
		</view>

		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item">
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-cyan">上午</view>
						<view class="cu-tag line-cyan">10:00</view>
						<text>hahahaah</text>
					</view>
					<view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
				</view>
			</view>
			<view class="cu-item text-blue">
				<view class="bg-blue shadow-blur content">
					<view class="cu-list menu-avatar radius">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content">
								<view class="text-grey">文晓港</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-infofill text-red"></text> 消息未送达</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
								<view class="cu-tag badge">99+</view>
							</view>
							<view class="content">
								<view class="text-grey">文晓港
									<view class="cu-tag round orange sm">SVIP</view>
								</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-redpacket_fill text-red"></text> 收到红包</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">22:20</view>
								<text class="cuIcon-notice_forbid_fill text-gray"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	export default {
		components: {
					MescrollUni
				},
		data() {
			return {
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
			}
		},
		onLoad: (option) => {
			console.log(option.id);
		}
	}
</script>

<style>

</style>
