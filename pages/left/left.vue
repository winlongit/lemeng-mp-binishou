<template name="left">
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">卡片</block>
		</cu-custom>

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
			<view class="padding-sm margin-xs radius" :class="0==TabCur?'bg-green':'bg-white '" @tap="tabSelect" data-id="0">
				<text :class="'cuIcon-crown'+ [0==TabCur?'fill':'']"></text> 我的游戏
			</view>
			<view class="padding-sm margin-xs radius" :class="1==TabCur?'bg-green':'bg-white '" @tap="tabSelect" data-id="1">
				<text :class="'cuIcon-friend'+ [1==TabCur?'fill':'']"></text> 好友的游戏
			</view>
			<view class="padding-sm margin-xs radius" :class="2==TabCur?'bg-green':'bg-white '" @tap="tabSelect" data-id="2">
				<text :class="'cuIcon-hot'+ [2==TabCur?'fill':'']"></text> 热门
			</view>
		</view>
		<view v-if="0==TabCur">
			<view class="cu-card dynamic" :class="isCard?'no-card':''">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
					</view>
					<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
						<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in isCard?9:1" :key="index">
						</view>
					</view>
					<view class="text-gray text-sm text-right padding">
						<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
						<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
						<text class="cuIcon-messagefill margin-lr-xs"></text> 30
					</view>

					<view class="cu-list menu-avatar comment solids-top">
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
					</view>
				</view>
			</view>

			<view class="cu-card dynamic" :class="isCard?'no-card':''">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
					</view>
					<view class="grid flex-sub padding-lr" :class="isCard?'col-3 grid-square':'col-1'">
						<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in isCard?9:1" :key="index">
						</view>
					</view>
					<view class="text-gray text-sm text-right padding">
						<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
						<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
						<text class="cuIcon-messagefill margin-lr-xs"></text> 30
					</view>

					<view class="cu-list menu-avatar comment solids-top">
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
					</view>
				</view>
			</view>

		</view>
		<view v-if="1==TabCur">
			bbbbb
		</view>
		<view v-if="2==TabCur">
			cccccc
		</view>
	</view>
</template>

<script>
	export default {
		name: "left",
		data() {
			return {
				TabCur: 0,
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
			}

		}
	}
</script>

<style>

</style>
