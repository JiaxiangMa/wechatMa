<template>
	<view class="content">
		<view>
			<u-index-list :scrollTop="scrollTop"  :active-color="'#3CC51F'"  :index-list="indexList">
			   <view v-for="(item, index) in myFirendList" :key="index">
			        <u-index-anchor :index="item.firstLetter"/>
			        <view v-for="user in item.friends" :key="user.id" class="list-cell" @tap="forwardFriend(user)" hover-class="message-hover-class">
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
export default {
	data() {
		return {
			scrollTop: 0,
			indexList:[],
			myFirendList:[],
			chatGroupId:'',
			currentChatGroupId:'',	
		};
	},
	onLoad:function(option){
		let that=this;
		that.currentChatGroupId= option.currentChatGroupId;
		
		that.getMyFriendList();
	},
	methods: {
		//初始化通讯录列表
		getMyFriendList:function(){
		   let that=this;
		   let param={};
		    that.$u.api.imUser.getMyFriendList(param).then(res => {
				if(res.code==200){
					let data=res.data;
					let indexList= data.myFriendsIndexList;
					if(indexList!=null&&indexList!=undefined){
						that.indexList=indexList;
					}
					let myFriendList= data.myFriendList;
					if(myFriendList!=null&&myFriendList!=undefined){
						that.myFirendList=myFriendList;
					}
				}
			})	   
		},
		
		//跳转个人信息界面
		forwardFriend(friend){
			let that=this;
			//console.log("currentChatGroupId",that.currentChatGroupId);
			//console.log("发送的朋友信息",friend);
			let param={
				chatGroupId:that.currentChatGroupId,
				friendId:friend.friendId,
				friendAvatar:friend.headImg,
				userName:friend.userName
			};
			console.log("发送名片信息",param);
			that.$u.api.chatGroup.forwardFriendToGroup(param).then(res => {
				console.log("转发朋友到群组结果",res);
				if(res.code==200){
					uni.navigateBack();
				}
			});
		},
	
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
