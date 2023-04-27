<template>
	<view>
		<u-navbar :is-back="false" title="" :border-bottom="false" :background="background">
			<view class="slot-wrap">
				<u-search action-text="取消" placeholder="账号/手机号" v-model="searchWord"
				 shape="square" :height="70" :focus="autoFocus"
				:input-style="{fontSize:'34rpx'}" :action-style="{fontSize:'34rpx',color:'#270c5c'}"
				color="#000000" bg-color="#ffffff" search-icon-color="#909399"
				@custom="customBack()" @change="change" @search="search"></u-search>
			</view>
		</u-navbar>

		<view v-if="searchWord.length>0&&emptyFlag==false" :style="'height:'+pageHeight+'px;margin-top:20rpx; background-color:#ffffff'">
			<view class="u-flex u-row-left u-col-center u-p-20 u-border-bottom">
				<view class="u-flex u-row-center u-col-center"
						style="width: 100rpx;height: 100rpx;background-color: #19BE6B;border-radius: 16rpx;">
					<view>
						<u-icon name="search" size="50" color="#ffffff"></u-icon>
					</view>
				</view>
				<view class="u-m-l-20" @click="search(searchWord)">
					<text style="color: #000000;font-size: 32rpx;font-weight: bold;">搜索:</text>
					<text style="color: #19BE6B;margin-left: 10rpx;font-size: 32rpx;font-weight: bold;">{{searchWord}}</text>
				</view>
			</view>
		</view>

		<view v-if="emptyFlag" class="u-m-t-20">
			<view  style="text-align: center;font-size: 32rpx;color: #cccccc;background-color: #FFFFFF;padding: 50rpx 0rpx;">
				该用户不存在
			</view>
			<view  class="u-m-t-20"
					style="text-align: center;font-size: 32rpx;color: #cccccc;background-color: #FFFFFF;">
				<view>
				   <u-cell-item  title="" label="小程序,公众号,文章,朋友圈,表情等">
					  <view slot="icon" class="u-m-r-20">
						<view style="margin-top: 20rpx;">
							 <u-icon name="/static/image/chat/addFriend/yanhua.png" size="64"></u-icon>
						</view>
					  </view>
					   <view slot="title" style="font-size: 32rpx;">
						   <text class="u-m-r-10" style="color: #000000;font-size: 34rpx;">搜索</text>
						   <text style="color: #19BE6B;">{{searchWord}}</text>
					   </view>
				   </u-cell-item>
				</view>
			</view>
		</view>


		<u-modal v-model="errorShow" content="你不能添加自己到通讯录" :content-style="{padding:'80rpx 0rpx',fontSize:'34rpx',fontWeight:'bold',color:'#000000'}"
					 confirm-color="#270c5c" :confirm-style="{fontSize:'34rpx',fontWeight:'bold'}"  :show-title="false"></u-modal>

	</view>
</template>

<script>
	import config from '@/common/environment.js';
	export default {
		data() {
			return {
				autoFocus:true,
				searchWord:'',
				searchFriendsList:[],
				emptyFlag:false,
				background:{
					backgroundColor: '#f0f0f0',
				},
				pageHeight:0,
				errorShow:false
			};
		},
		onLoad:function(option){
			this.pageHeight = uni.getSystemInfoSync().windowHeight - uni.getSystemInfoSync().statusBarHeight - 45;
			//加客服为好友
			if(option.type==1){
				this.autoFocus=false;
				this.searchWord=this.vuex_app_config.appAdministrator;
				this.search(this.searchWord);
			}
		},
		methods:{
			customBack:function(){
				let that=this;
				uni.navigateBack();
				that.emptyFlag=false;
			},
			change:function(value){
				this.emptyFlag=false;
			},
			search:function(value){
				let that=this;
				if(value.length>0){
					let param={
						keyWord:value,
					};
					console.log("搜索内容",value);
					//that.searchWord="";
					if(value==that.vuex_userInfo.mobile){
						//that.globalUtil.utilAlert("你不能添加自己到通讯录");
						that.errorShow=true;
						return;
					}
					that.$u.api.imUser.searchUser(param).then(res => {
						if(res.code==200){
						   console.log("搜索用户结果",res);
						   if(res.data!=null&&res.data.length>0){
							     that.searchFriendsList=res.data;
								 that.toPersonalHome(that.searchFriendsList[0]);
								 that.searchWord="";
						   }else{
							   // that.searchEmptyWord=value;
							    that.emptyFlag=true;
						    }
						}
					})
				}
			},
			toPersonalHome:function(user){
				let that=this;
				console.log("user",user);
				let isFriend=user.isFriend;
				if(isFriend==true){
					this.$u.route({
						url: 'pages/chat/friends/friendHome',
						params: {friendId:user.id}
					});
				}else{
					this.$u.route({
						url: '/pages/chat/friends/newFriendInfo',
						params: {newFriendInfo:encodeURIComponent(JSON.stringify(user)),fromPage:2}
					});
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
</style>
<style>
	page{
		background-color: #F1F1F1;
	}
</style>
