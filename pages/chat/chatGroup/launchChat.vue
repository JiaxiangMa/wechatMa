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
		
		<template v-if="groupNameModal">
			<create-group-pop ref="groupPop"
						:windowHeight="windowHeight"
						:groupModelFlag="groupNameModal"
						@submitCreate="submitCreate"
						@closeModel="closeModel"></create-group-pop>
		</template>
		
	</view>
</template>

<script>
import searchInput from '@/components/searchInput/index.vue';
import createGroupPop from '@/components/create-group-pop/create-group-pop.vue';
export default {
	components:{searchInput,createGroupPop},
	data() {
		return {
			scrollTop: 0,
			indexList:[],
			myFirendList:[],
			selectedUser:new Set(),
			currentUserId:'',
			groupNameModal:false,
			chatGroupName:'',
			windowHeight:0,
			butOptionType:0,
		};
	},
	//自定义导航栏button点击事件
	onNavigationBarButtonTap:function(e){
		if(this.butOptionType==0){
			if(e.index==0){
			   this.launchChatGroup();
			}
		}
		else{
			this.groupNameModal=false;
			this.butOptionType=0;
			this.customNavBarStatusChange();
		}
	},
	
	created:function(){
		this.windowHeight=this.$u.sys().windowHeight;
	},
	
	onLoad:function(){
		let that=this;
		let userId= that.vuex_userInfo.id;
		that.currentUserId=userId;
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
			if(this.butOptionType==1){
				titleObj.buttons[0].text = "取消";
				titleObj.buttons[0].color = "#333333";
				titleObj.buttons[0].fontSize = "16";
			}else{
				if (this.selectedUser.size > 0) {
					titleObj.buttons[0].text = "确定(" + this.selectedUser.size + ")";
					titleObj.buttons[0].color = "#18b566";
					titleObj.buttons[0].fontSize = 14;
				} else {
					titleObj.buttons[0].text = "确定";
					titleObj.buttons[0].color = "#dbf1e1";
					titleObj.buttons[0].fontSize = 14;
				}
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
				that.groupNameModal=true;
				that.butOptionType=1;
				that.customNavBarStatusChange();
			}
		},
		closeModel:function(){
			that.groupNameModal=false;
		},
		submitCreate:function(newGroup){
			console.log("群信息",newGroup);
			this.buildChatGroup(newGroup);
		},
		buildChatGroup:function(newGroup){
			let that=this;
			let selectedFriends=[];
			that.selectedUser.forEach((item) => {
			  selectedFriends.push(item);
			})
			selectedFriends.push(that.currentUserId);
			console.log("选择人员",selectedFriends);
			that.globalUtil.utilLoading("正在发起群聊...",true);
			let obj={"createUser":that.currentUserId,"chatGroupMembers":selectedFriends};
			let param=Object.assign(obj,newGroup);
			console.log("发起群聊参数",param);
			that.$u.api.chatGroup.launchChatGroup(param).then(res => {	
			  console.log("发起群聊响应结果",res);
			  if (res!=null&&res.data!=null&&res.code===200) {
			       that.globalUtil.utilAlert("创建成功!","success");  
				   that.selectedUser.clear();
				   let chatGroupId=res.data.id;
				   let param="?chatGroupId="+chatGroupId;
				   let _url="/pages/chat/chatGroup/chatting";
				   let chatUrl=_url+param;
				   uni.navigateTo({
				     url: chatUrl,
				     success() {
				     
				     }
				   });
				   return;
			  }else{
			    uni.hideLoading();
			    that.globalUtil.utilAlert("发起聊天失败!","error");
			    return;
			  }
			}).catch(res => {
			  uni.hideLoading();
			  that.globalUtil.utilAlert("发起聊天失败!","error");
			  console.log("会话列表加载触发异常",res);
			})
		},
		
		//跳转个人信息界面
		linkToCard(friend){
			//console.log("跳转朋友信息中心",friend);
			this.$u.route({
			  url: 'pages/chat/friends/friendHome',
			  params:friend,
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
