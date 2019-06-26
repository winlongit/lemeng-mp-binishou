<template name="right">
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">比你兽</block>
		</cu-custom>

		<!-- <view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']"> -->
		<view class="cu-list menu">
			<view class="cu-item arrow" @tap="$_click('avatar')">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">头像</text>
				</view>
				<!-- 				<view class="cu-avatar round lg margin-left" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]">
					<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view> -->
				<view class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg); ">
					<view class="cu-tag badge cuIcon-female bg-pink"></view>
				</view>
			</view>
			<!-- <view class="cu-item" :class="menuArrow?'arrow':''"> -->
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-crownfill lg text-brown"></text>
					<text class="text-grey">昵称</text>
				</view>
				<view class="action"><text class="text-black">养生达人</text></view>
			</view>
			<view class="cu-item arrow">
				<!-- open-type="contact" 进入客户会话 -->
				<view class="content">
					<text class="cuIcon-upstagefill lg text-yellow"></text>
					<text class="text-grey">积分</text>
				</view>
				<view class="action"><text class="text-grey">4000</text></view>
			</view>
			<view class="cu-item arrow">
				<!-- open-type="contact" 进入客户会话 -->
				<view class="content">
					<text class="cuIcon-likefill lg text-red"></text>
					<text class="text-grey">爱好</text>
				</view>
				<view class="action">
					<view class="cu-tag round bg-orange light">音乐</view>
					<view class="cu-tag round bg-olive light">电影</view>
					<view class="cu-tag round bg-blue light">旅行</view>
				</view>
			</view>
			<view class="cu-item arrow">
				<!-- <navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
					<text class="cuIcon-discoverfill text-orange"></text>
					<text class="text-grey">联系方式</text>
				</navigator> -->
				<view class="content">
					<!-- mode="aspectFit" 自适应 -->
					<text class="cuIcon-dianhua lg text-blue"></text>
					<text class="text-grey">联系方式</text>
				</view>
				<view class="action"><text class="text-black">17701580237</text></view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-homefill lg text-grey"></text>
					<text class="text-grey">我的地址</text>
				</view>
				<view class="action"><text class="text-black">南京市xxx区xxx街道</text></view>
			</view>
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-moneybagfill lg text-yellow"></text>
					<text class="text-grey">钱包</text>
				</view>
				<view class="action"><text class="text-black">481</text></view>
			</view>
		</view>
		<!-- <view class="cu-tabbar-height"></view> -->

		<mescroll-uni top="100" bottom="100" :down="downOption" :up="upOption" @down="downCallback" @up="upCallback" @init="mescrollInit">
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
</template>

<script>
// 自定义的mescroll-meituan.vue
import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue';
// 模拟数据
import mockData from '@/common/pdlist.js';

export default {
	name: 'right',
	components: {
		MescrollUni
	},
	data() {
		return {
			mescroll: null, //mescroll实例对象
			pdList: [], // 数据列表
			index: 2,
			avatar: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
			],
			// 下拉刷新的配置
			downOption: {
				use: true, // 是否启用下拉刷新; 默认true
				auto: true // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
			},
			// 上拉加载的配置
			upOption: {
				use: true, // 是否启用上拉加载; 默认true
				auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				isLock: false, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 3, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			}
		};
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
		$_click(itemname) {
			console.log(itemname);
		},
		// mescroll组件初始化的回调,可获取到mescroll对象
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		// 下拉刷新的回调
		downCallback(mescroll) {
			mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
		},
		/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
		upCallback(mescroll) {
			//联网加载数据
			this.getListDataFromNet(
				mescroll.num,
				mescroll.size,
				curPageData => {
					//curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					console.log('mescroll.num=' + mescroll.num + ', mescroll.size=' + mescroll.size + ', curPageData.length=' + curPageData.length);

					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
					mescroll.endSuccess(curPageData.length);

					//设置列表数据
					if (mescroll.num == 1) this.pdList = []; //如果是第一页需手动制空列表
					this.pdList = this.pdList.concat(curPageData); //追加新数据
				},
				() => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				}
			);
		},
		/*联网加载列表数据
		在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
		请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
		实际项目以您服务器接口返回的数据为准,无需本地处理分页.
		* */
		getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
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
			this.$api
				.get('/task/getTask', { noncestr: Date.now() })
				.then(res => {
					console.log('request success', res);
					uni.showToast({
						title: '请求成功',
						icon: 'success',
						mask: true
					});
					// 模拟分页数据
					var listData = [];
					for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
						if (i == mockData.length) break;
						listData.push(mockData[i]);
					}
					//联网成功的回调
					successCallback && successCallback(listData);
				})
				.catch(err => {
					console.log('request fail', err);
					errorCallback && errorCallback();
				});
		}
	}
};
</script>

<style></style>
