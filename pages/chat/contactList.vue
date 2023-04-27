<template>
	<view class="content">
		<view>
			<u-cell-item :arrow="false" @click="toApplyList()">
				<view 	slot="icon" class="u-flex u-row-center u-col-center u-m-r-20" 
						style="width: 80rpx;height: 80rpx;background-color: #ff9900;border-radius: 12rpx;">
					<u-icon name="plus-people-fill" size="60" color="#ffffff"></u-icon>
				</view>
				<view slot="title">新的朋友</view>
				<view slot="right-icon" v-if="applyList.length>0" 
					class="u-flex u-row-center u-col-center" 
					style="width: 40rpx;height: 40rpx;border-radius: 20rpx;background-color: #fa3534;">
					<view style="color: #FFFFFF;">{{applyList.length}}</view>
				</view>
			</u-cell-item>
			<u-index-list :scrollTop="scrollTop"  :active-color="'#3CC51F'"  :index-list="indexList">
			   <view v-for="(item, index) in myFirendList" :key="index">
			        <u-index-anchor :index="item.firstLetter"/>
			        <view v-for="user in item.friends" :key="user.id" class="list-cell" @tap="linkToCard(user)" hover-class="message-hover-class">
						<u-image :src="user.headImg"  mode="aspectFill" width="80" height="80" border-radius="12">
							<view slot="error">
								<u-image src="@/static/image/chat/defaultPhoto.png"  mode="aspectFill" width="80" height="80" border-radius="12">
								</u-image>
							</view>
						</u-image>
			          <view  class="list-cell-name">{{user.friendName?user.friendName:user.userName}}</view>
			        </view>
			    </view>
			</u-index-list>
		</view>
</view>
</template>

<script>
import searchInput from '@/components/searchInput/index.vue';
export default {
	components:{searchInput},
	data() {
		return {
			scrollTop: 0,
			indexList:[],
			myFirendList:[],
			applyList:[],
		};
	},
	onNavigationBarButtonTap:function(e){
		if(e.index==0){
			this.$u.route({
				url: '/pages/chat/friends/addFriend',
			})
		}
	},
	onLoad:function(){
		let that=this;
		that.getMyFriendList();
	},
	onPullDownRefresh:function(){
		let that=this;
		that.getMyFriendList();
		setTimeout(function(){
			uni.stopPullDownRefresh();
		},5000)
	},
	onShow:function(){
	  let that=this;
	  let userId= that.vuex_userInfo.id;
	  //检查是否有人添加我为好友	
	  that.checkFriendApply();
	},
	onHide:function(){
		//wx.closeSocket();	
	},
	
	
	methods: {
		//检查是否有人添加我为好友  2022年1月17日21:21:13
		checkFriendApply:function(){
			let that=this;
			that.$u.api.imUser.checkFriendApply({}).then(res => {
				if(res.code==200&&res.data!=null){
					that.applyList=res.data;
					let badgeNumber=res.data.length.toString();
					uni.setTabBarBadge({
					  index: 1,
					  text: badgeNumber
					})
				}else{
					that.applyList=[];
					uni.removeTabBarBadge({
						index:1
					})
				}
			})
		},
		
		//初始化通讯录列表
		getMyFriendList:function(){
		   let that=this;
		   let param={};
		    that.$u.api.imUser.getMyFriendList(param).then(res => {
				if(res.code==200){
					//console.log("获取通讯录结果",res);
					let data=res.data;
					let indexList= data.myFriendsIndexList;
					if(indexList!=null&&indexList!=undefined){
						that.indexList=indexList;
					}
					let myFriendList= data.myFriendList;
					if(myFriendList!=null&&myFriendList!=undefined){
						that.myFirendList=myFriendList;
					}
					uni.stopPullDownRefresh();
				}
			})	   
		},
		
		//跳转个人信息界面
		linkToCard(friend){
			//console.log("跳转朋友信息中心",friend);
			this.$u.route({
			  url: 'pages/chat/friends/friendHome',
			  params:{
				  friendId:friend.friendId,
			  },
			})
		},
		//查询申请列表
		toApplyList:function(){
			let that=this;
			this.$u.route({
			  url: 'pages/chat/friends/friendApply',
			  params:{
				  applyList:JSON.stringify(that.applyList)
			  },
			})
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	}
};
</script>

<style lang="scss" scoped>
.content {
	height: 100%;
	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx; 
	}
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 28rpx;
		line-height: 48rpx;
		background-color: #fff;
		align-items: center;
		image {
			width: 76rpx;
			height: 76rpx;
			border-radius: 12rpx;
			flex: 0 0 76rpx;
		}
		&-name{
			padding-left: 20rpx;
		}
	}
}
</style>
