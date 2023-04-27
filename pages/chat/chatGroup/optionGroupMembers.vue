<template>
	<view class="content">
		<view style="width: 100%;">
			<view v-for="(member,index) in memberList" :key="index" class="list-cell u-border-bottom">
				<view v-if="optionType==0">
					<!-- :disabled="member.isChecked" -->
					<u-checkbox shape="circle" active-color="#19be6b"
								@change="checkBoxChange"
								v-model="member.isChecked" 
								:name="member.friendId"
								:key="member.friendId">
					</u-checkbox>
				</view>
				<view v-if="optionType==1">
					<u-checkbox shape="circle" active-color="#19be6b"
								@change="checkBoxChange"
								v-model="member.isChecked" 
								:name="member.userId"
								:key="member.userId">
					</u-checkbox>
				</view>
				<view>
					<u-image :src="member.headImg"  mode="aspectFill" width="80" height="80" border-radius="12">
						<view slot="error">
							<u-image src="@/static/image/chat/defaultPhoto.png"  mode="aspectFill" width="80" height="80" border-radius="12">
							</u-image>
						</view>
					</u-image>
				</view>
				<view  class="list-cell-name">{{member.friendName?member.friendName:member.userName}}</view>
			</view>
		</view>
		<view>
			<!-- 群名称输入框 -->
			<u-modal v-model="confirmModelShow" 
				:show-cancel-button="true" @cancel="confirmModelShow=false"
				@confirm="confirmOption"  :title="confirmModelTitle" :content="confrimModelContent" negative-top="200">
			</u-modal>
		</view>
		
	</view>
</template>

<script>
import searchInput from '@/components/searchInput/index.vue';
export default {
	components:{searchInput},
	data() {
		return {
			chatGroupId:'',
			optionType:0,  // 0添加成员  1删除成员
			memberList:[],
			selectedUser:new Set(),
			currentUserId:'',
			confirmModelShow:false,
			chatGroupName:'',
			confirmModelTitle:'',
			confrimModelContent:'',
		};
	},
	//自定义导航栏button点击事件
	onNavigationBarButtonTap:function(e){
		let that=this;
		if(e.index==0){
		    if(that.selectedUser.size<1){
		    	console.log("没有选中人员");
		    	return;
		    }else{
		    	if(that.optionType==0){
		    		that.confirmModelTitle="添加成员";
		    		that.confrimModelContent="确认添加选中人员到群组吗?";
		    	}else{
		    		that.confirmModelTitle="删除成员";
		    		that.confrimModelContent="确认从群聊中剔除选中人员吗?";
		    	}
				that.confirmModelShow=true;
		    }
		}
	},
	
	onLoad:function(option){
		let that=this;
		console.log("页面初始化参数",option);
		let userId= that.vuex_userInfo.id;
		that.currentUserId=userId;
		let type= option.optionType;
		let chatGroupId= option.chatGroupId;
		that.optionType=type;
		that.chatGroupId=chatGroupId;
		let navBarTitle="添加成员";
		if(type==1){
			navBarTitle="删除成员"
		}
		that.$nextTick(function(){
			let currentWebview = that.$scope.$getAppWebview();
			let tn = currentWebview.getStyle().titleNView;
			tn.titleText = navBarTitle;
			currentWebview.setStyle({
				titleNView: tn
			});
		})
		that.initData();//获取通讯录好友
	},
	
	methods: {
		initData:function(){
		    let that=this;
			if(that.optionType==0){
				that.getMyFriendListForAdd();
			}else{
				that.getMyFriendListForDel();
			}   
		},
		
		//初始化通讯录列表
		getMyFriendListForAdd:function(){
		   let that=this;
		   let param={
			   chatGroupId:that.chatGroupId,
		   };
		    that.$u.api.imUser.getMyFriendListForAdd(param).then(res => {
				if(res.code==200){
					console.log("新增成员可选择列表",res);
					that.memberList=res.data;
				}
			})	   
		},
		//群成员
		getMyFriendListForDel:function(){
			let that=this;
			let param={
				chatGroupId:that.chatGroupId,
			};
			 that.$u.api.imUser.getMyFriendListForDel(param).then(res => {
				if(res.code==200){
					//console.log("群成员列表",res);
					that.memberList=res.data;
				}
			})	  
		},
		
	    //监听选中人员
		checkBoxChange:function(e){
			//console.log("checkBoxChange",e);
			if(this.optionType==0){
				let friendId= e.name;
				let isChecked=e.value;
				if(isChecked){
					this.selectedUser.add(friendId);
				}else{
					if(this.selectedUser.has(friendId)==true){
						this.selectedUser.delete(friendId);
					} 
				}
			}
			else{
				let friendId= e.name;
				let isChecked=e.value;
				if(isChecked){
					this.selectedUser.add(friendId);
				}else{
					if(this.selectedUser.has(friendId)==true){
						this.selectedUser.delete(friendId);
					} 
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
		confirmOption:function(){
			let that=this;
			let selectedFriends=[];
			that.selectedUser.forEach((item) => {
			  selectedFriends.push(item);
			})
			let param={
				chatGroupId:that.chatGroupId,
				members:selectedFriends,
				currentUserId:that.currentUserId
			};
			console.log("提交操作的参数",param);
			//添加
			if(that.optionType==0){
				that.$u.api.chatGroup.addMemberForGroup(param).then(res => {
					if(res.code==200){
						let num= res.data;
						if(num>0){
							that.selectedUser.clear();
							uni.navigateBack();
						}
						else{
							let msg="添加失败";
							if(num==-1){
								msg="群成员数量已满";
							}
							if(num==-2){
								msg="超出群成员最大数量限制";
							}
							if(num==-3){
								msg="超出群成员数量限制";
							}
							that.globalUtil.utilAlert(msg);
							return;
						}
					}	
				})
			}
			//删除
			if(that.optionType==1){
				that.$u.api.chatGroup.deleteMemberForGroup(param).then(res => {
					if(res.code==200){
						that.selectedUser.clear();
						uni.navigateBack();
					}
				})
			}
		},
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
