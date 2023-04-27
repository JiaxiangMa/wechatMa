<template>
	<view>
		<view class="custom-head-navbar">
			<u-navbar :title="navbarTitle" :border-bottom="false" :title-bold="true"></u-navbar>
		</view>
		<template  v-if="groupMemberList.length>0">
		<view class="content-body">
			<scroll-view  scroll-y="true" class="scroll-Y" >
				<view>
					<view class="grid-box">
						<view class="grid-body">
							<u-grid :col="5" :border="false">
								<u-grid-item @click="clickUser"
											v-for="(user, index) in groupMemberList" :index="index" :key="index">
									<u-image show-loading width="80rpx" height="80rpx" :src="user.userAvatar" border-radius="4">
										<view slot="loading" style="background-color: #FFFFFF;width: 80rpx;height: 80rpx;">
											<u-icon name="/static/image/chat/defaultPhoto.png"  size="80"></u-icon>
										</view>
										<view slot="error" style="background-color: #FFFFFF;">
											<u-image show-loading bgColor="#ffffff"  width="80rpx" height="80rpx" src="@/static/image/chat/defaultPhoto.png" border-radius="4"></u-image>
										</view>
									</u-image>
									<view class="grid-text u-line-1">{{ user.userName?user.userName:'未知用户' }}</view>
								</u-grid-item>
							</u-grid>
						</view>
					</view>
				</view>
				<view v-if="currentChatGroup.memberCounts>20">
					<view style="text-align: center;font-size: 32rpx;padding-bottom: 20rpx;">
						<u-icon @click="showMoreMember()" name="arrow-right" color="#909399" label-size="32rpx"
								label-color="#909399" label="查看更多群成员" label-pos="left"></u-icon>
					</view>
				</view>
			</scroll-view>
			<u-gap  height="24" bg-color="#dddddd" margin-top="20" margin-bottom="20"></u-gap>
			<view class="list-option">
				<u-cell-group  v-if="currentChatGroup.chatGroupType!=0" >
						<u-cell-item  :titleStyle="titleStyle"  title="群组名称"
									:value="currentChatGroup.chatGroupName"
									 @click="toUpdateChatName()"></u-cell-item>
						<u-cell-item :titleStyle="titleStyle"  title="群公告"  @click="toSetChatNotice()" :label="currentChatGroup.chatNotice?currentChatGroup.chatNotice:'无'"></u-cell-item>
						<u-cell-item :titleStyle="titleStyle"  title="公告显示"  :arrow="false" hover-class="none">
							<u-switch active-color="#19be6b" slot="right-icon" v-model="advShowFlag" @change="changeAdvFlag"></u-switch>
						</u-cell-item>
						<!-- :arrow="false" -->
						<u-cell-item :titleStyle="titleStyle"  title="群二维码"  @click="toGroupQRCode()" >
							<view slot="right-icon">
								<u-icon name="grid" :size="36"></u-icon>
							</view>
						</u-cell-item>
						<!-- 群主和管理员的权限 -->
						<template v-if="currentChatGroup.memberType>0">
							<u-cell-item :titleStyle="titleStyle"  title="全员禁言"  :arrow="false" hover-class="none">
								<u-switch active-color="#fa3534" slot="right-icon" v-model="forbidFlag" @change="changeForbidFlag"></u-switch>
							</u-cell-item>
						</template>
						<template v-if="currentChatGroup.memberType==2">
							<u-cell-item  @click="toGroupAdminMember"
									:titleStyle="titleStyle"
									title="群管理员"
									hover-class="none"></u-cell-item>
						</template>
						<template v-if="currentChatGroup.memberType==2">
							<u-cell-item  @click="setGroupNumber"
									:titleStyle="titleStyle"
									title="群成员数量"  :value="parseMaxCount()"
									hover-class="none"></u-cell-item>
							<u-select title="最大群成员数量" v-model="memberCountShow"
									  :list="memberCountList" @confirm="memberCountClick"></u-select>
						</template>
				</u-cell-group>
				<!-- <u-cell-group>
						<u-cell-item :titleStyle="titleStyle"  title="查找聊天内容" @click="toSearchChatContent()"></u-cell-item>
				</u-cell-group> -->
				<u-cell-group>
						<u-cell-item :titleStyle="titleStyle"  title="消息免打扰"  :arrow="false" hover-class="none">
							<u-switch active-color="#19be6b" slot="right-icon" v-model="pingbiFlag" @change="changePingBiFlag"></u-switch>
						</u-cell-item>
						<u-cell-item :titleStyle="titleStyle"  title="置顶聊天"  :arrow="false" hover-class="none">
							<u-switch active-color="#19be6b" slot="right-icon" v-model="topFlag" @change="changeTopFlag"></u-switch>
						</u-cell-item>
				</u-cell-group>
				<u-cell-group>
						<u-cell-item v-if="currentChatGroup.chatGroupType==0"  :titleStyle="titleStyle"
								title="清空聊天内容" @click="openConfrimModel(2)"></u-cell-item>

						<u-cell-item  v-if="currentChatGroup.chatGroupType==0&&vuex_userInfo.level==1"
									:titleStyle="titleStyle"  title="发起群聊权限"  :arrow="false" hover-class="none">
							<u-switch active-color="#19be6b" slot="right-icon" v-model="crateGroupPowerFlag"
									 @change="changePowerFlag"></u-switch>
						</u-cell-item>

				</u-cell-item>
				</u-cell-group>
			</view>
		</view>

		<view class="footer-option" v-if="currentChatGroup.chatGroupType!=0">
			<u-gap  height="24" bg-color="#dddddd" margin-top="20" margin-bottom="20"></u-gap>
			<view class="u-m-l-10 u-m-r-10">
				<u-button :custom-style="btnCustomStyle" @click="openConfrimModel(2)"    :hair-line="false" :ripple="true" ripple-bg-color="#dd6161">
					<text style="color:#fa3534;font-size: 34rpx;">清空聊天记录</text>
				</u-button>
			</view>
			<view class="u-m-t-10 u-m-b-10">
				<u-line/>
			</view>
			<view class="u-m-l-10 u-m-r-10">
				<u-button  v-if="currentChatGroup.chatGroupMaster!=currentUserId"  :custom-style="btnCustomStyle" @click="openConfrimModel(0)"   :hair-line="false" :ripple="true" ripple-bg-color="#dd6161">
					<text  style="color:#fa3534;font-size: 34rpx;">退出群聊</text>
				</u-button>
				<u-button v-else  :custom-style="btnCustomStyle" @click="openConfrimModel(1)"   :hair-line="false" :ripple="true" ripple-bg-color="#dd6161">
					<text  style="color:#fa3534;font-size: 34rpx;">解散群组</text>
				</u-button>
			</view>
		</view>
		</template>
		<template v-else>
			<view>
				<ls-loading text="数据加载中"  animation="rise"></ls-loading>
			</view>
		</template>
		<u-modal v-model="confirmModelFlag" :content="confirmContent"
				show-cancel-button confirm-color="#19be6b"
				@confirm="confirmOption()" @cancel="closeConfirmModel()">
		</u-modal>

	</view>
</template>

<script>
	import lsLoading from '@/uni_modules/ls-loading/components/ls-loading/ls-loading.vue';
	export default {
		data() {
			return {
				navbarTitle:'聊天信息',
				currentChatGroup:{},
				groupMemberList:[],
				currentUserId:'',
				pingbiFlag:false,
				topFlag:false,
				advShowFlag:false,
				forbidFlag:false,
				titleStyle:{
					fontSize:"32rpx",
					color:"#333333",
				},
				btnCustomStyle:{
					border:'none',
					backgroundColor:'none',
				},
				confirmModelFlag:false,
				confirmContent:'',
				optionType:0,
				memberCountShow:false,
				memberCountList:[
					{label: '不限制',value:-1},
					{label: '50人',value:50},
					{label: '100人',value:100},
					{label: '150人',value:150},
					{label: '200人',value:200},
					{label: '250人',value:250},
					{label: '300人',value:300},
					{label: '350人',value:350},
					{label: '400人',value:400},
					{label: '450人',value:450},
					{label: '500人',value:500}
				],
				crateGroupPowerFlag:false,
			};
		},
		onLoad:function(option){
			let that=this;
			that.currentUserId=that.vuex_userInfo.id;
			console.log("=====详情页面初始化参数======",option);
			let chatGroupId= option.chatGroupId;
			//let chatGroupMember=option.chatGroupType;
			that.currentChatGroup.id=chatGroupId;
		},
		onShow:function(option){
			let that=this;
			that.getChatGroupInfo();
		},
		methods:{
			//获取群组信息
			getChatGroupInfo: function() {
				let that = this;
				let param = {
					chatGroupId: that.currentChatGroup.id
				};
				that.$u.api.chatGroup.getChatGroupInfo(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						that.currentChatGroup = data.imGroup;
						if(that.currentChatGroup.chatGroupType==0){
							that.navbarTitle="聊天详情";
						}else{
							that.navbarTitle="聊天信息("+that.currentChatGroup.memberCounts+")";
						}
						console.log("=========currentChatGroup======",that.currentChatGroup);
						let pingBiStaus= that.currentChatGroup.memberTipStatus;
						if(pingBiStaus==1){
							this.pingbiFlag=true;
						}else{
							this.pingbiFlag=false;
						}
						let topStatus= that.currentChatGroup.memberTopFlag;
						if(topStatus==1){
							this.topFlag=true;
						}else{
							this.topFlag=false;
						}
						let advShowFlag= that.currentChatGroup.advShowFlag;
						if(advShowFlag==2){
							this.advShowFlag=true;
						}else{
							this.advShowFlag=false;
						}
						let chatGroupStatus= that.currentChatGroup.chatGroupStatus;
						if(chatGroupStatus==2){
							this.forbidFlag=true;
						}else{
							this.forbidFlag=false;
						}
						that.getChatGroupMembers();
					} else {
						that.globalUtil.utilAlert("群信息获取失败");
						return;
					}
				})
			},
			//获取群成员
			getChatGroupMembers:function(){
				let that = this;
				let param = {
					chatGroupId: that.currentChatGroup.id,
					limitFlag:1, //前10条
				};
				that.$u.api.chatGroup.getChatGroupMembers(param).then(res => {
					if (res.code == 200) {
						 that.groupMemberList=res.data;
						 //如果是单聊的,查询一下这个用户是否有发起群聊的权限
						 if(that.currentChatGroup.chatGroupType==0&&that.vuex_userInfo.level==1){
							that.checkUserPower();
						 }
						 if(that.groupMemberList.length>0){
							 setTimeout(function() {
							    if(that.currentChatGroup.chatGroupType!=0){
								   let addItem={userAvatar:'../../../static/image/chat/addMember.png',"id":-1,"userName":"添加","userId":-1};
								   that.groupMemberList.push(addItem);
								   //that.currentUserId==that.currentChatGroup.chatGroupMaster
								   if(that.currentChatGroup.memberType>0){
									 let delItem={userAvatar:'../../../static/image/chat/delete.png',"id":-2,"userName":"移除","userId":-2};
									 that.groupMemberList.push(delItem);
								   }
							   }
							 }, 200);
							//console.log("群成员列表", that.groupMemberList);
						 }
					} else {
						that.globalUtil.utilAlert("群成员获取失败");
						return;
					}
				})
			},
			clickUser:function(index){
				let that=this;
				let userInfo=that.groupMemberList[index];
				if (userInfo.userId>0) {
					console.log("点击用户",userInfo);
					let userId= userInfo.userId;
					if(that.currentUserId==userId){
						return;
					}
					//根据userId去查询是否是好友
					let param={
						groupUserId:userId
					}
					that.$u.api.imUser.getGroupMemberInfo(param).then(res => {
					if(res.code==200){
						   let groupUserInfo= res.data;
						   //console.log("查询群成员信息结果",groupUserInfo);
						   if(groupUserInfo.isFriend){
							   that.$u.route({
							     url: 'pages/chat/friends/friendHome',
							     params:{
							   	  friendId:userId
							     },
							   })
						   }else{
							   console.log("不是朋友关系");
							   this.$u.route({
							   	url: 'pages/chat/friends/newFriendInfo',
							   	params: {newFriendInfo:encodeURIComponent(JSON.stringify(groupUserInfo)),fromPage:1}
							   });
						   }
						}
					})
					return;
				}
				if(userInfo.userId==-1)
				{
					let param={
						optionType:0,
						chatGroupId: that.currentChatGroup.id
					}
					this.$u.route("pages/chat/chatGroup/optionGroupMembers",param);
					return;
				}
				if(userInfo.userId==-2){
					let param={
						optionType:1,
						chatGroupId: that.currentChatGroup.id
					}
					this.$u.route("/pages/chat/chatGroup/optionGroupMembers",param);
					return;
				}
			},
			//查看更多群成员
			showMoreMember:function(){
				let param={
					chatGroupId: this.currentChatGroup.id,
					optionType:0
				}
				this.$u.route("pages/chat/chatGroup/showMoreGroupMember",param);
				return;
			},
			//是否屏蔽群信息
			changePingBiFlag:function(pingBiFlag){
				let that=this;
				console.log("pingBiFlag",pingBiFlag);
				let pingBiStaus= that.currentChatGroup.memberTipStatus;
				if(pingBiFlag==true){
					pingBiStaus=1;
				}else{
					pingBiStaus=0;
				}
				let param={
					chatGroupId: that.currentChatGroup.id,
					chatStatus:pingBiStaus
				}
				that.updateMyChatGroupInfo(param);
			},
			//是否显示群公告
			changeAdvFlag:function(advFlag){
				let that=this;
				let hiddenFlag=0;
				if(advFlag==true){
					hiddenFlag=2;
				}else{
					hiddenFlag=0;
				}
				let param={
					chatGroupId: that.currentChatGroup.id,
					hiddenFlag:hiddenFlag
				}
				console.log("改变公告显示状态",param);
				that.updateMyChatGroupInfo(param);
				//that.advShowFlag=advFlag;
			},
			//禁言设置
			changeForbidFlag:function(forbidFlag){
				let that=this;
				let chatGroupStatus=0;
				if(forbidFlag==true){
					chatGroupStatus=2;
				}else{
					chatGroupStatus=0;
				}
				let param={
					id: that.currentChatGroup.id,
					chatGroupStatus:chatGroupStatus
				}
				console.log("改变禁言设置状态",param);
				that.$u.api.chatGroup.updateGroupStatus(param).then(res=>{
					console.log("禁言状态发送变化",res);
					if(res.code==200){
						if (res.code == 200) {
							 that.globalUtil.utilAlert("更新成功!");
						} else {
							that.globalUtil.utilAlert("更新失败");
							return;
						}
						that.getChatGroupInfo();
					}
				})
			},
			//检查是否有权限
			checkUserPower:function(){
				let that=this;
				let targetUser=that.groupMemberList.find(function(item,index,arr){
					let userId= item.userId;
					let currentUserId=that.vuex_userInfo.id;
					return userId!=currentUserId;
				})
				let param={
					userId:targetUser.userId,
					powerCode:that.globalUtil.im_power_code.create_group
				}
				that.$u.api.sys.checkUserPower(param).then(res => {
					 if(res.code==200&&res.data){
						that.crateGroupPowerFlag=true;
					 }else{
						that.crateGroupPowerFlag=false;
					 }
				})
			},

			//设置发起群聊的权限
			changePowerFlag:function(powerFlag){
				let that=this;
				let targetUser=that.groupMemberList.find(function(item,index,arr){
					let userId= item.userId;
					let currentUserId=that.vuex_userInfo.id;
					return userId!=currentUserId;
				})
				//console.log("targetUser",targetUser);
				let param={
					userId:targetUser.userId,
					powerFlag:powerFlag,
					powerCode:that.globalUtil.im_power_code.create_group
				}
				//console.log("设置用户发起群聊的权限参数",param);
				that.$u.api.sys.updateUserPower(param).then(res => {
					//console.log("设置用户发起群聊的权限结果",res);
					if(res.code==200){
						that.globalUtil.utilAlert("设置成功");
						that.checkUserPower();
					}
				})
			},

			//是否置顶聊天
			changeTopFlag:function(topFlag){
				let that=this;
				console.log("topFlag",topFlag);
				let topStatus= that.currentChatGroup.memberTopFlag;
				if(topFlag==true){
					topStatus=1;
				}else{
					topStatus=0;
				}
				let param={
					chatGroupId: that.currentChatGroup.id,
					topFlag:topStatus
				}
				that.updateMyChatGroupInfo(param);
			},
			//搜索聊天内容(未开发完成)
			toSearchChatContent:function(){
			    this.globalUtil.utilAlert("发量不足,疲于开发~");
				return
			},
			//清空聊天记录
			toClearChatContent:function(){
				let that=this;
				let groupId=that.currentChatGroup.id;
				let param={
					"chatGroupId":groupId
				}
				that.$u.api.chatGroup.clearChatContent(param).then(res => {
					if (res.code == 200) {
						 that.globalUtil.utilAlert("已清空聊天记录");
					} else {
						return;
					}
					that.getChatGroupInfo();
				})
				return;
			},
			//打开确认操作的弹窗
			openConfrimModel:function(optionType){
				let that=this;
				that.optionType=optionType;
				console.log("optionType",optionType);
				if(optionType==0){
					that.confirmContent="确认要退出群聊吗?";
				}
				if(optionType==1){
					that.confirmContent="确认要解散群聊吗?";
				}
				if(optionType==2){
					that.confirmContent="确认要清空聊天记录吗?";
				}
				console.log("confirmContent",that.confirmContent);
				that.confirmModelFlag=true;
			},
			//关闭弹窗
			closeConfirmModel:function(){
				let that=this;
				that.optionType=0;
				that.confirmContent="";
				that.confirmModelFlag=false;
			},
			//确认操作
			confirmOption:function(){
				let that=this;
				let param={
					chatGroupId: that.currentChatGroup.id,
				}
				//退出群聊
				if(that.optionType==0){
					 that.$u.api.chatGroup.quitChatGroup(param).then(res => {
					 	if (res.code == 200) {
					 		 that.globalUtil.utilAlert("您已退出群聊!");
					 		 that.$u.route({
					 			url: "pages/chat/chatGroupList",
					 			type: 'switchTab'
					 		})
					 	} else {
					 		that.globalUtil.utilAlert("退出群聊失败");
					 		return;
					 	}
					 })
					 return;
				}
				//解散群聊
				if(that.optionType==1){
					that.$u.api.chatGroup.delChatGroup(param).then(res => {
						if (res.code == 200) {
							 that.globalUtil.utilAlert("群聊已经解散!");
							 that.$u.route({
							 	url: "pages/chat/chatGroupList",
							 	type: 'switchTab'
							 })
						} else {
							that.globalUtil.utilAlert("群聊解散异常");
							return;
						}
					})
					return;
				}
				//清空聊天记录
				if(that.optionType==2){
					that.toClearChatContent();
					return;
				}
			},
			//去设置名字
			toUpdateChatName:function(){
				/* let chatGroupMaster=this.currentChatGroup.chatGroupMaster;
				if(chatGroupMaster!==this.currentUserId){
					this.globalUtil.utilAlert("无权限修改!");
					return;
				} */
				if(this.currentChatGroup.memberType<1){
					this.globalUtil.utilAlert("无权限修改!");
					return;
				}
				let groupName=this.currentChatGroup.chatGroupName;
				let groupId=this.currentChatGroup.id;
				let param={
					"groupName":groupName,
					"groupId":groupId
				}
				this.$u.route("/pages/chat/chatGroup/updateGroupName",param);
			},
			//去设置公告
			toSetChatNotice:function(){
			 /*  let chatGroupMaster=this.currentChatGroup.chatGroupMaster;
			   if(chatGroupMaster!==this.currentUserId){
			   	this.globalUtil.utilAlert("无权限!");
			   	return;
			   } */
			   if(this.currentChatGroup.memberType<1){
			   	this.globalUtil.utilAlert("无权限修改!");
			   	return;
			   }
			   let chatNotice=this.currentChatGroup.chatNotice;
			   let groupId=this.currentChatGroup.id;
			   let param={
			   	"chatNotice":chatNotice?chatNotice:'',
			   	"groupId":groupId
			   }
			   this.$u.route("/pages/chat/chatGroup/setChatGroupAdv",param);
			},
			//去查看群二维码
			toGroupQRCode:function(){
				let param={
						group:JSON.stringify(this.currentChatGroup)
				};
				this.$u.route("/pages/chat/chatGroup/groupQRCode",param);
			},
			//设置群管理员
			toGroupAdminMember:function(){
				let param={
					group:JSON.stringify(this.currentChatGroup)
				};
				this.$u.route("/pages/chat/chatGroup/group-admin-member",param);
			},
			//打开群数量设置
			setGroupNumber:function(){
				this.memberCountShow=true;
			},
			//设置群容量
			memberCountClick:function(e){
				let that=this;
				let maxCount= e[0].value;
				let param={
					id: that.currentChatGroup.id,
					maxCount:maxCount
				}
				console.log("====设置群最大人数====",param);
				that.$u.api.chatGroup.updateGroupMaxCount(param).then(res=>{
					if(res.code==200){
						if (res.code == 200) {
							 that.globalUtil.utilAlert("更新成功!");
						} else {
							that.globalUtil.utilAlert("更新失败");
							return;
						}
						that.getChatGroupInfo();
					}
				})
			},
			//
			parseMaxCount:function(){
				let that=this;
				let maxCount= that.currentChatGroup.maxCount;
				if(maxCount==null||maxCount==-1){
					return "未限制";
				}else{
					return maxCount+"人";
				}
			},
			/**修改我在群聊的信息*/
			updateMyChatGroupInfo(param){
				let that = this;
				that.$u.api.chatGroup.updateMyChatGroupInfo(param).then(res => {
					if (res.code == 200) {
						 that.globalUtil.utilAlert("更新成功!");
					} else {
						that.globalUtil.utilAlert("群聊信息更新失败");
						return;
					}
					that.getChatGroupInfo();
				})
			},

		}

	}
</script>

<style lang="scss" scoped>
    .content-body{
		.scroll-Y{
			::-webkit-scrollbar{
				display: none;
				height: 0;
				width: 0;
			}
			max-height: 590rpx;
		}
		/* 九宫格start */
		.grid-box {
			//box-shadow: 1px 0px 1px 0px #D8D8D8;
			//text-align: center;
			//width: 100%;
			//margin: 10rpx 8rpx;
			background-color: #FFFFFF;
			border-radius: 10px;
			//border: 1rpx solid #D8D8D8;
		}

		.grid-body {
			padding: 30upx;
		}

		.grid-box .gird-item{
		   display: flex;
		   flex-direction: column;
		   justify-content:center;
		   align-items: center;
		   margin-bottom: 20upx;
		}

		.grid-box .image {
			width: 80upx;
			height: 80upx;
		}

		.grid-text {
			font-size: 28rpx;
			margin-top: 4rpx;
			color: $u-type-info;
			width: 120rpx;
			text-align: center;
		}

		.grid-box .text {
			font-size: 26upx;
			margin-top: 10upx;
			font-family: PingFangSC-Regular, PingFangSC;
			font-weight: 400;
			color: rgba(74, 74, 74, 1);
			line-height: 26 upx;
		}

		/deep/ .uni-grid-item__box.border-top {
			border-top: hidden;
		}

		/deep/ .uni-grid-item__box.border {
			border-bottom: hidden;
		  //  border-right: hidden;
		}
		/* 九宫格end */
	}

	.footer-option{
		//border: 1px solid red;
		width: 100%;
		position: relative;
		top: 30rpx;
	}
</style>
<style>
	.footer-option button:after {
		border: none !important;
	}
</style>
