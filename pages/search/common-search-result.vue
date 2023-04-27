<template>
	<view>
		<u-navbar :is-back="true" title="" :border-bottom="false">
			<view class="slot-wrap u-font-32">
				<u-search 	placeholder="搜索"
							border-color="#eeeeee"
							bg-color="#ffffff"
							shape="square"
							:clearabled="true"
							:show-action="true"
							:action-style="actionStyle"
							:animation="false"
							height="80"
							@search="search"
							@custom="search"
							v-model="searchWord">
				</u-search>
			</view>	
		</u-navbar>
	     <view>
			<view>
				<u-tabs :list="tabList"
						:height="80"
						:is-scroll="true" 
						:current="currentTab"
						active-color="#000000"
						inactive-color="#606266"
						bar-width="60"
						class="hidden-scroll-bar"
						@change="tabChange"></u-tabs>
			</view>
			<view>
				<u-gap height="12" bg-color="#cccccc"></u-gap>
			</view> 
		 </view>		
		 
		 <scroll-view :scroll-x="false" :scroll-y="true"
		 		:style="'height:'+scrollViewHeight+'px;'"
		 		class="hidden-scroll-bar u-font-32">
			<view v-if="searchResults.length>0">
				<view v-for="(result,index) in searchResults" :key="index">
					<view class="u-border-bottom u-p-20">
						<text style="color: #19be6b;">{{result.title}}</text>
						 <text class="u-m-r-10 u-m-l-10">-</text>
						<text>{{result.type}}</text>
					</view>
					<view class="u-p-20">
						<u-row>
							<u-col :span="3">
								<view class="u-flex u-row-center u-col-top">
									<view>
										<u-image width="130" height="130"  :src="result.iconPath"></u-image>
									</view>
								</view>
							</u-col>
							<u-col :span="9">
								<view>
									<view class="u-m-b-16">
										<text>
											{{result.content.title}}
										</text>
										<text class="u-m-l-12 u-font-26" style="color: #2979ff;">
											{{result.content.tag}}
										</text>
									</view>
									<view class="u-line-2 u-m-b-16 u-tips-color u-font-28 u-p-l-8">
										{{result.content.description}}
									</view>
									<view v-if="result.type=='小程序'" 
										  class="u-flex u-row-between u-col-center 
												u-font-28 u-tips-color u-p-l-8">
										<view class="u-line-1" style="width: 60%;">
											{{result.content.belong}}
										</view>
										<view  style="color: #19be6b;">
											{{result.content.friendViews}}个朋友使用过
										</view>
									</view>
									<view v-else class="u-p-l-8">
										<view class="u-line-1 u-font-28 u-tips-color">
											{{result.content.belong}}
										</view>
									</view>
								</view>
							</u-col>
						</u-row>
						<view v-if="result.type=='公众号'&&result.content.menuList.length>0"
							 class="u-m-t-20">
							<u-row>
								<u-col :span="3">
								</u-col>
								<u-col :span="9">
									<view>
										<u-row>
											<u-col :span="6" v-for="(menu,mIndex) in result.content.menuList" :key="mIndex">
												<view class="u-line-2 menu-item" 
													:style="menu.title.length<7?'line-height:80rpx':''">
													{{menu.title}}
												</view>
											</u-col>
										</u-row>
									</view>
								</u-col>	
							</u-row>
						</view>
					</view>
					<u-gap height="12" bg-color="#cccccc"></u-gap>
				</view>
			</view> 
			<view v-else class="u-flex u-row-center u-col-center" style="height: 80%;">
				<view>
					<u-empty mode="search"></u-empty>
				</view> 
			</view>
		 </scroll-view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actionStyle:{
					backgroundColor:'#19be6b',
					color:'#ffffff',
					height:'80rpx',
					lineHeight:'80rpx',
					position:'relative',
					left:'-16rpx',
					textAlign:'center',
					width:'100rpx',
					borderTopRightRadius:'10rpx',
					borderBottomRightRadius:'10rpx'
				},
				searchWord:'',
				currentTab:0,
				tabList:[
					{
						name: '全部'
					},
					{
						name: '视频'
					}, 
					{
						name: '文章',
					},
					{
						name: '公众号',
					},
					{
						name: '小程序',
					},
					{
						name: '百科',
					},
					{
						name: '直播',
					}
				],
				scrollViewHeight:0,
				tempData:[],
				searchResults:[
					{
						id:1,
						type:'小程序',
						title:'德阳市民通',
						iconPath:'https://img2.baidu.com/it/u=2626635628,991819188&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=350',
						content:{
							title:'德阳市明通',
							tag:'政府',
							belong:'德阳市政务服务和大数据管理中心',
							friendViews:3,
							menuList:[
								
							],
							description:`"德阳市明通" 由德阳市政府服务和大数据管理局主办,致力打造集政务服务,公共卫生,哈哈哈哈哈哈哈哈哈哈`
						}
					},
					{
						id:2,
						type:'公众号',
						title:'德阳市民通',
						iconPath:'https://img1.baidu.com/it/u=3186340345,4073884601&fm=253&fmt=auto&app=138&f=PNG?w=500&h=497',
						content:{
							title:'德阳服务',
							tag:'政府',
							belong:'德阳市政务服务和大数据管理中心',
							friendViews:0,
							menuList:[
								{title:'德阳市民通'},
								{title:'城市服务'},
								{title:'各地疫情防控措施'},
								{title:'12345'}
							],
							description:`"德阳市明通" 由德阳市政府服务和大数据管理局主办,致力打造集政务服务,公共卫生,哈哈哈哈哈哈哈哈哈哈`
						}
					}
				]
			};
		},
		onLoad:function(option){
			this.searchWord=option.keyWord;
			let height = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 45;
			this.scrollViewHeight=height*0.92;	
			//  tempData是临时变量,动态取的时候不需要这个变量/
			this.tempData=this.searchResults;
		},
		methods:{
			search:function(value){
				let that=this;
				if(value.length>0){
					let param={
						keyWord:value,
					};
				}
				console.log("搜索关键字",value);
				//模拟请求
				this.searchWord="";
				this.tabChange(0);
			},
			tabChange:function(index){
				this.currentTab = index;
				//模拟从后台拉取数据 tempData是临时变量,动态取的时候不需要这个变量
				if(this.currentTab==0){
					this.searchResults=this.tempData;
				}
				else if(this.currentTab==3){
					this.searchResults=this.tempData.filter(function(item,index){
						return item.type=='公众号'
					})
				}
				else if(this.currentTab==4){
					this.searchResults=this.tempData.filter(function(item,index){
						return item.type=='小程序'
					})
				}else{
					this.searchResults=[];
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hidden-scroll-bar{
			::-webkit-scrollbar{
				display: none;
				height: 0;
				width: 0;
			}
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx;
	}
	.menu-item{
		color: #414666; 
		padding:20rpx;
		margin-bottom:16rpx;
		background-color: #f3f4f6;
		height: 120rpx;
	}
</style>
