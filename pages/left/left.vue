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

		<view v-if="2 == TabCur">
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

		<!-- <view class="cu-tabbar-height"></view> -->
		<!-- </scroll-view> -->
	</view>
</template>

<script>
export default {
	name: 'left',
	data() {
		return {
			pdList: [], // 数据列表
			TabCur: 0
		};
	},
	onLoad: function(option) {
		let that = this;
		console.log(option.id);

	},
	methods: {

		tabSelect(e) {
			this.TabCur = e.currentTarget.dataset.id;
		}
	}
};
</script>

<style></style>
