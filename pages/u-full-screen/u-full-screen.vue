<template>
	<view>
		<u-navbar title="最近" title-color="#ffffff"
				  :border-bottom="false" :is-back="false" :background="background"></u-navbar>
		<scroll-view :scroll-x="false" :scroll-y="true"
					 class="hidden-scroll-bar"
					:style="'height:'+scrollViewHeight+'px'">
			<view class="u-p-l-40 u-p-r-40">
				<view style="padding: 26rpx 0rpx;margin: 0rpx 20rpx; background-color:#77797e;opacity: 0.5;text-align: center;">
					<u-icon color="#ffffff" label="搜索小程序" label-color="#ffffff" name="search"
							:size="32"></u-icon>
				</view>
				<view>
				<view style="color: #f7f7f7;font-size: 30rpx;margin:20rpx;"
						class="u-flex u-row-between u-col-center u-m-t-30">
					<view>最近使用的小程序</view>
					<view>
						<u-icon name="arrow-right" label="更多" color="#f7f7f7" label-color="#f7f7f7" label-pos="left" margin-right="10rpx"></u-icon>
					</view>
				</view>
				<view>
					<u-grid :col="4" :border="false">
						<u-grid-item bg-color="#373752" v-for="(girdItem,index) in girdList" :key="index">
							<view @click="toWebView(girdItem,index)" style="height: 150rpx;display: flex;flex-direction: column;justify-content: space-between;align-items: center;">
								<view>
									<u-image :src="girdItem.imgSrc" 
											shape="circle"	
											width="96rpx" height="96rpx"></u-image>
								</view>
								<view style="color: #ffffff;width: 120rpx;text-align: center;" class="u-line-1">
									<text>{{girdItem.title}}</text>
								</view>
							</view>
						</u-grid-item>
					</u-grid>	
				</view>
				</view>
				
				<view>
				<view style="color: #f7f7f7;font-size: 30rpx;margin:20rpx;"
						class="u-flex u-row-between u-col-center u-m-t-30">
					<view>我的小程序</view>
					<view>
						<u-icon name="arrow-right" label="更多" color="#f7f7f7" label-color="#f7f7f7" label-pos="left" margin-right="10rpx"></u-icon>
					</view>
				</view>
				<view>
					<u-grid :col="4" :border="false">
						<u-grid-item bg-color="#373752" v-for="(girdItem,index) in girdList" :key="index">
							<view style="height: 150rpx;display: flex;flex-direction: column;justify-content: space-between;align-items: center;">
								<view>
									<u-image :src="girdItem.imgSrc" 
											shape="circle"	
											width="96rpx" height="96rpx"></u-image>
								</view>
								<view style="color: #ffffff;width: 120rpx;text-align: center;" class="u-line-1">
									<text>{{girdItem.title}}</text>
								</view>
							</view>
						</u-grid-item>
					</u-grid>	
				</view>
				</view>
			</view>
		</scroll-view>
		<view class="footer"	
				:style="'height:'+footerHeight+'px'">
			<u-row>
				<u-col :span="5">
					<view> </view>
				</u-col>
				<u-col :span="7">
					<view @click="customBack()" class="u-flex u-row-between u-col-center u-p-t-10">
						<view>微信(1)</view>
						<view>
							<u-icon size="36" color="#ffffff" name="plus-circle"></u-icon>
						</view>
					</view>
				</u-col>
			</u-row>	
		</view>
	</view>
</template>

<script>
	export default {
		name:"u-full-screen",
		data() {
			return {
				scrollViewHeight:0,
				footerHeight:0,
				background:{
					backgroundColor: '#373752',
				},
				girdList:[
					{title:'行程卡',imgSrc:''},
					{title:'场所码',imgSrc:''},
					{title:'腾讯会议',imgSrc:''},
					{title:'美团外卖',imgSrc:''},
					{title:'青豆',imgSrc:''},
					{title:'商城1',imgSrc:''},
					{title:'商城小程序1',imgSrc:''},
					{title:'商城小程序2',imgSrc:''},
				]
			};
		},
		onLoad:function(){
			let windowHeight=this.$u.sys().windowHeight-uni.getSystemInfoSync().statusBarHeight;
			this.scrollViewHeight =windowHeight/10*8.5;
			this.footerHeight=windowHeight/10*0.9;
		},
		methods:{
			customBack:function(){
				uni.navigateBack({
					delta: 1,
					animationType: 'slide-out-top',
					animationDuration: 400
				});
			},
			toWebView:function(item,index){
				console.log("item",item);
				console.log("index",index);
				this.$u.route({
					url:"/pages/webview/web-view",
					params:item,
					animationType:'slide-in-bottom',
					animationDuration:700
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.footer{
	width: 100%;
	padding: 30rpx;
	font-size: 32rpx;
	background-color: #69767e;
	color: #ffffff;
}
</style>
<style>
	page{
		background-color: #373752;
		backgroundImage: linear-gradient(180deg, #373752, #5c5c8a);
	}
</style>