<template name="left">
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">比你兽</block>
		</cu-custom>
		<!-- <scroll-view scroll-y class="page"> -->

		<!-- 		<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
		 mode="widthFix" class="response"></image>

		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-titles text-orange"></text> 案例类卡片
			</view>
			<view class="action">
				<switch :class="isCard?'checked':''" :checked="isCard?true:false" @change="IsCard"></switch>
			</view>
		</view> -->
		<view class="bg-gradual-blue flex solid-bottom padding justify-center" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
			<view class="padding-sm margin-xs radius" :class="0 == TabCur ? 'bg-green' : 'bg-white '" @tap="tabSelect" data-id="0">
				<text :class="'cuIcon-crown' + [0 == TabCur ? 'fill' : '']"></text>
				我的游戏
			</view>
			<view class="padding-sm margin-xs radius" :class="1 == TabCur ? 'bg-green' : 'bg-white '" @tap="tabSelect" data-id="1">
				<text :class="'cuIcon-friend' + [1 == TabCur ? 'fill' : '']"></text>
				好友的游戏
			</view>
			<view class="padding-sm margin-xs radius" :class="2 == TabCur ? 'bg-green' : 'bg-white '" @tap="tabSelect" data-id="2">
				<text :class="'cuIcon-hot' + [2 == TabCur ? 'fill' : '']"></text>
				热门
			</view>
		</view>
		<view v-if="0 == TabCur">
			<view class="cu-card dynamic">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<!-- <view class="cu-tag bg-blue">史诗</view> -->
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
					<!-- 		<view class="cu-list menu-avatar comment solids-top">
						<view class="cu-item">
							<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
							<view class="content">
								<view class="text-grey">莫甘娜</view>
								<view class="text-gray text-content text-df">
									凯尔，你被自己的光芒变的盲目。
								</view>
								<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
									<view class="flex">
										<view>凯尔：</view>
										<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
									</view>
								</view>
								<view class="margin-top-sm flex justify-between">
									<view class="text-gray text-df">2018年12月4日</view>
									<view>
										<text class="cuIcon-appreciatefill text-red"></text>
										<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
									</view>
								</view>
							</view>
						</view>

						<view class="cu-item">
							<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content">
								<view class="text-grey">凯尔</view>
								<view class="text-gray text-content text-df">
									妹妹，如果不是为了飞翔，我们要这翅膀有什么用?
								</view>
								<view class="bg-grey padding-sm radius margin-top-sm  text-sm">
									<view class="flex">
										<view>莫甘娜：</view>
										<view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
									</view>
								</view>
								<view class="margin-top-sm flex justify-between">
									<view class="text-gray text-df">2018年12月4日</view>
									<view>
										<text class="cuIcon-appreciate text-gray"></text>
										<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
									</view>
								</view>
							</view>
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<view v-if="1 == TabCur">
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
		<!-- mescroll-uni 是 uni-app 下拉刷新和上拉加载的组件 http://www.mescroll.com/uni.html -->
		<view v-if="2 == TabCur">
			<mescroll-uni top="100" bottom="100" @down="downCallback" @up="upCallback" @init="mescrollInit">
				<!-- 模拟的内容 -->
				<!-- 分页的数据列表 -->
				<view class="data-li" v-for="pd in pdList" :key="pd.id">
					<view class="cu-card article">
						<view class="cu-item shadow">
							<view class="cu-tag bg-red">热门</view>
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

		<!-- <view class="cu-tabbar-height"></view> -->
		<!-- </scroll-view> -->
	</view>
</template>

<script>
// 自定义的mescroll-meituan.vue
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
// 模拟数据
import mockData from "@/common/pdlist.js";

export default {
	name: 'left',
	components: {
		MescrollUni
	},
	data() {
		return {
			mescroll: null, //mescroll实例对象
			pdList: [], // 数据列表
			TabCur: 0
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
		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
		},
		// mescroll组件初始化的回调,可获取到mescroll对象
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		// 下拉刷新的回调
		downCallback(mescroll){
			mescroll.resetUpScroll() // 重置列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
		},
		/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
		upCallback(mescroll) {
			//联网加载数据
			this.getListDataFromNet(mescroll.num, mescroll.size, (curPageData)=>{
				//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置
				
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
				if(mescroll.num == 1) this.pdList = []; //如果是第一页需手动制空列表
				this.pdList=this.pdList.concat(curPageData); //追加新数据
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
		getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
			//延时一秒,模拟联网
			// setTimeout(()=> {
			// 	try{
			// 		//模拟分页数据
			// 		var listData=[];
			// 		for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
			// 			if(i==mockData.length) break;
			// 			listData.push(mockData[i]);
			// 		}
			// 		//联网成功的回调
			// 		successCallback && successCallback(listData);
			// 	} catch (e) {
			// 		//联网失败的回调
			// 		errorCallback && errorCallback();
			// 	}
			// },1000)
			this.$api.get("/task/getTask",{noncestr: Date.now()}).then((res)=>{
                    console.log('request success', res)
                    uni.showToast({
                        title: '请求成功',
                        icon: 'success',
                        mask: true
                    });
					// 模拟分页数据
					var listData=[];
					for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
						if(i==mockData.length) break;
						listData.push(mockData[i]);
					}
					//联网成功的回调
					successCallback && successCallback(listData);

                }).catch((err)=>{
                    console.log('request fail', err);
					errorCallback && errorCallback();
                })
		}
	}
};

</script>

<style></style>
