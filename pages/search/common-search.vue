<template>
	<view>
		<u-navbar :is-back="false" title="" :border-bottom="false" :background="background">
			<view class="slot-wrap">
				<u-search 	action-text="取消" placeholder="搜索"
							v-model="searchWord"
							shape="square" :height="70" :focus="inputFocus"
							:input-style="{fontSize:'34rpx'}" :action-style="{fontSize:'34rpx',color:'#270c5c'}"
							color="#000000"
							bg-color="#ffffff"
							search-icon-color="#909399"
							@custom="customBack()"
							@change="change"
							@search="search"></u-search>
			</view>
		</u-navbar>
		<view v-if="searchResults.length>0">
			<scroll-view :scroll-x="false" :scroll-y="true"
					:style="'height:'+scrollViewHeight+'px;'"
					class="hidden-scroll-bar">
				<view style="background-color: #ffffff;">
					<u-cell-item title="" @click="toSearch(2)">
						<view slot="icon" class="u-m-r-20">
							<u-icon name="chat-fill" size="60" color="#19be6b"></u-icon>
						</view>
						<view slot="title" style="font-size: 32rpx;color: #333333;">
							<text style="margin-right: 10rpx;">搜索</text>
							<text style="color: #19be6b;font-size: 34rpx;">{{searchWord}}</text>
						</view>
						<view slot="label">
							<text>聊天群组</text>
						</view>
					</u-cell-item>
				</view>
				<view style="background-color: #ffffff;">
					<u-cell-item title="" @click="toSearch(1)">
						<view slot="icon" class="u-m-r-20">
							<u-icon name="star" size="60" color="#fa5332"></u-icon>
						</view>
						<view slot="title" style="font-size: 32rpx;color: #333333;">
							<text style="margin-right: 10rpx;">搜索</text>
							<text style="color: #19be6b;font-size: 34rpx;">{{searchWord}}</text>
						</view>
						<view slot="label">
							<text>小程序,公众号,文章,朋友圈和表情等</text>
						</view>
					</u-cell-item>
				</view>

				<!-- <view v-for="(result,index) in searchResults" :key="index"
					class="u-flex u-row-left u-col-center u-border-bottom">
					<view style="width: 100%;background-color:#ffffff">
						<u-cell-item  title="" @click="itemClick(result)">
							<view slot="icon" class="u-m-r-20 u-m-t-10">
								<u-icon name="search" size="36" color="#909399"></u-icon>
							</view>
							<view slot="title" style="font-size: 32rpx;color: #333333;">
								<text>{{result.title}}</text>
							</view>
						</u-cell-item>
					</view>
				</view>	 -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background:{
					backgroundColor: '#f0f0f0',
				},
				searchType:1,
				searchWord:'',
				scrollViewHeight:0,
				emptyFlag:false,
				searchResults:[],
        inputFocus:false,
			};
		},
		onLoad:function(){
      let that=this;
			this.scrollViewHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 45;
      setTimeout(function(){
        that.inputFocus=true
      },500);
		},
		methods:{
			//返回事件
			customBack:function(){
				let that=this;
				uni.navigateBack();
				that.emptyFlag=false;
			},
			//搜索结果点击事件
			itemClick:function(result){
				this.globalUtil.utilAlert("点击了-"+result.title);
			},
			//监听搜索框值变化
			change:function(value){
				this.emptyFlag=false;
				if(value.length>0){
					this.searchData();
				}else{
					this.searchResults=[];
				}
			},
			//去搜索界面
			toSearch:function(type){
				if(type==1){
					this.searchType=1;
				}
				else{
					this.searchType=2;
				}
				this.search(this.searchWord);
			},
			//跳转搜索结果页面
			search:function(value){
				let that=this;
				if(value.length>0){
					let param={
						keyWord:value,
					};
					if(this.searchType==1){
						this.$u.route({
							url:'/pages/search/common-search-result',
							params:param
						})
					}
					if(this.searchType==2){
						this.$u.route({
							url:'/pages/search/search-group',
							params:param
						})
					}
				}
			},
			//实时检索数据
			searchData:function(){
				if(this.searchWord.length>0){
					this.searchResults.push({
						title:this.searchWord,
						id:1,
					})
				}else{
					this.searchResults=[];
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding: 0 15rpx;
	}
.hidden-scroll-bar{
		::-webkit-scrollbar{
			display: none;
			height: 0;
			width: 0;
		}
}
</style>
<style>
	page{
		background-color: #F1F1F1;
	}
</style>
