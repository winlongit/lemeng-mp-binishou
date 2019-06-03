<template name="right">
	<view>
		<scroll-view scroll-y class="page">

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
					<view class="action">
						<text class="text-black">养生达人</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<!-- open-type="contact" 进入客户会话 -->
					<view class="content">
						<text class="cuIcon-upstagefill lg text-yellow"></text>
						<text class="text-grey">积分</text>
					</view>
					<view class="action">
						<text class="text-grey">4000</text>
					</view>
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
					<view class="action">
						<text class="text-black">17701580237</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-homefill lg text-grey"></text>
						<text class="text-grey">我的地址</text>
					</view>
					<view class="action">
						<text class="text-black">南京市xxx区xxx街道</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-moneybagfill lg text-yellow"></text>
						<text class="text-grey">钱包</text>
					</view>
					<view class="action">
						<text class="text-black">481</text>
					</view>
				</view>


			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "right",
		components: {

		},
		data() {
			return {
				index: 2,
				avatar: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
				],
			};
		},
		methods: {
			$_click(itemname) {
				console.log(itemname);
			}
		}
	}
</script>

<style>

</style>
