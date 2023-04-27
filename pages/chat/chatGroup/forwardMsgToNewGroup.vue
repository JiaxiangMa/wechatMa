<template>
	<view class="content">
		<view style="width: 100%;">
			<u-index-list :scrollTop="scrollTop"  :active-color="'#3CC51F'"  :index-list="indexList">
				<view v-for="(item, index) in myFirendList" :key="index" style="width: 100%;">
					<u-index-anchor :index="item.firstLetter"/>
						<view v-for="friend in item.friends" :key="friend.id" class="list-cell">
							<view>
								<u-checkbox shape="circle" active-color="#19be6b"
											@change="checkBoxChange"
											v-model="friend.isChecked" 
											:name="friend.friendId"
											 :key="friend.friendId" 
								></u-checkbox>
							</view>
							<view>
								<u-image :src="friend.headImg"  mode="aspectFill" width="80" height="80" border-radius="12">
									<view slot="error">
										<u-image src="@/static/image/chat/defaultPhoto.png"  mode="aspectFill" width="80" height="80" border-radius="12">
										</u-image>
									</view>
								</u-image>
							</view>
							<view  class="list-cell-name">{{friend.friendName?friend.friendName:friend.userName}}</view>
						</view>
				</view>
			</u-index-list>
		</view>
		
		<view>
			<!-- 群名称输入框 -->
			<u-modal v-model="groupNameModal" 
				:show-cancel-button="true" @cancel="groupNameModal=false"
				@confirm="buildChatGroup()" title="自定义群名称" negative-top="200">
				<view class="slot-content">
					<u-field v-model="chatGroupName" placeholder="请自定义群名称" label-width="10" required border-top
						border-bottom trim></u-field>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			delta:2,
			sendType:1,
			msgList:[],
			scrollTop: 0,
			indexList:[],
			myFirendList:[],
			selectedUser:new Set(),
			groupNameModal:false,
			chatGroupName:'',
		};
	},
	//自定义导航栏button点击事件
	onNavigationBarButtonTap:function(e){
		if(e.index==0){
		   this.launchChatGroup();
		}
	},
	onLoad:function(option){
		let that=this;
		if (option.sendType) {
			this.sendType = Number(option.sendType);
		}
		if (option.delta) {
			this.delta = Number(option.delta);
		}
		let messageList= option.messageList;
		if(messageList!=null&&messageList!=undefined&&messageList.length>0){
			this.msgList=JSON.parse(messageList);
			console.log("要转发的信息",this.msgList);
		}
		let userId= that.vuex_userInfo.id;
		that.getMyFriendList();//获取通讯录好友
	},
	methods: {
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
				}
			})	   
		},
	    //监听选中人员
		checkBoxChange:function(e){
			//console.log("checkBoxChange",e);
			let friendId= e.name;
			let isChecked=e.value;
			if(isChecked){
				this.selectedUser.add(friendId);
			}else{
				if(this.selectedUser.has(friendId)==true){
					this.selectedUser.delete(friendId);
				} 
			}
			this.customNavBarStatusChange();
		},
		//根据选择的人员动态改动导航栏状态显示
		customNavBarStatusChange:function(){
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];
			let currentWebview = page.$getAppWebview();
			let titleObj = currentWebview.getStyle().titleNView;
			if (!titleObj.buttons) {
				return;
			}
			if (this.selectedUser.size > 0) {
				titleObj.buttons[0].text = "确定(" + this.selectedUser.size + ")";
				titleObj.buttons[0].color = "#18b566";
				titleObj.buttons[0].fontSize = 14;
			} else {
				titleObj.buttons[0].text = "确定";
				titleObj.buttons[0].color = "#dbf1e1";
				titleObj.buttons[0].fontSize = 14;
			}
			currentWebview.setStyle({
				titleNView: titleObj
			});
		},
		//发起群聊
		launchChatGroup:function(){
			let that=this;
			if(that.selectedUser.size<1){
				console.log("没有选中人员")
				return;
			}
			else{
				that.buildChatGroup();
				//that.groupNameModal=true;
			}
		},
		buildChatGroup:function(){
			let that=this;
			let selectedFriends=[];
			that.selectedUser.forEach((item) => {
			  selectedFriends.push(item);
			})
			let obj={
				'sendType':that.sendType,
				'messageList':that.msgList,
				'targetFriends':selectedFriends
			};
			console.log("转发信息参数",obj);
			that.$u.api.chatGroup.forwardMsgToFriends(obj).then(res => {	
			  console.log("转发信息响应结果",res);
			  if (res!=null&&res.data!=null&&res.code===200) {
			       uni.navigateBack({
			       	delta:that.delta?that.delta:2,
					success:function(){
						that.globalUtil.utilAlert("信息已发送!");
					}
			       })
			  }else{
			    uni.hideLoading();
			    that.globalUtil.utilAlert("转发信息失败!","error");
			    return;
			  }
			}).catch(res => {
			  uni.hideLoading();
			  that.globalUtil.utilAlert("转发信息失败!","error");
			  console.log("转发信息失败",res);
			})
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
