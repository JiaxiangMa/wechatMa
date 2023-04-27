<template>
	<view>
		<view v-if="emptyFlag==false">
			<scroll-view scroll-y  class="phoneContacts">
				<u-cell-item :arrow="false" v-for="(item,index) in contacts" :key="index"  :value="item.mobile">
					<view slot="icon" class="u-m-r-10">
						<view  style="width: 64rpx;height: 64rpx;background-color: #EEEEEE;" class="u-flex u-col-center u-row-center">
							<u-icon   v-if="item.avatar==null||item.avatar==undefined" color="#ccc" size="48" name="account"></u-icon>
							<!-- <u-icon v-else    size="64"  name="http://10.168.5.177:8081/tj-chat/fileServer/getFileFromParam?filePath=useravatars/1620541932089.png"></u-icon> -->
							 <u-image  v-else width="100%" height="100%" :src="item.avatar"></u-image>
						</view>
					</view> 
					<view slot="title"  style="padding: 0rpx;height: 18px;line-height: 18px;">
						{{item.realName}}
					</view>
					<view slot="label" v-if="item.userName!=null&&item.userName!=undefined">
						<view>昵称:{{item.userName}}</view>
					</view>
					<view slot="right-icon" class="u-margin-left-20">
						<u-button  v-if="item.status==-1"  @click="inviteFriend(item)" size="mini" type="success" shape="square">邀请</u-button>
						<u-button  v-if="item.status==0"  @click="addFriend(item)" size="mini" type="primary" shape="square">添加</u-button>
						<text  style="color: #909399;" v-if="item.status==1">已添加</text>
						<text  style="color: #909399;" v-if="item.status==2">等待验证</text>
					</view>
				</u-cell-item>
			</scroll-view>
		</view>
		<view v-if="emptyFlag==true"  class="empty">
			<u-empty  mode="list" icon-size="150"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contacts:[],
				emptyFlag:false,
			};
		},
		onLoad:function(){
			let that=this;
			let phoneContacts=[];
			plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,
				function(addressbook) {
					addressbook.find(["displayName","phoneNumbers"],function(contacts){
							if(contacts!=null&&contacts.length>0){
								for (var i = 0; i < contacts.length; i++) {
									let  phoneContactMan= contacts[i];
									let displayName= phoneContactMan.displayName;
									let phoneNum= phoneContactMan.phoneNumbers[0].value;
									phoneContacts.push({mobile:phoneNum,realName:displayName});
								}
								setTimeout(function(){
									that.syncContacts(phoneContacts);
								},500)
							}else{
								this.globalUtil.utilAlert("通讯录为空!");
								this.emptyFlag=true;
								return;
							}
					})
				},
				function (e){
					this.globalUtil.utilAlert("获取手机通讯录失败!");
					this.emptyFlag=true;
				}
			)
		},
		methods:{
			inviteFriend:function(){
			   this.globalUtil.utilAlert("开发中...");	
			},
			//发送添加好友请求
			addFriend:function(item){
				let that=this;
				 console.log("item",item);
				 let param={
					 friendId:item.userId,
					 friendName:item.userName,
					 friendMobile:item.mobile,
				 }
				 that.$u.api.imUser.addFriend(param).then(res => {
				 	if(res.code==200){
						//对列表状态做修改,等待验证
				 		for (var i = 0; i < that.contacts.length; i++) {
				 			let obj= that.contacts[i];
				 			if(obj.mobile==item.mobile){
				 				obj.status=2;
				 				return;
				 			}
				 		}
				 	}
				 })
			},
			syncContacts:function(contacts){
				let that=this;
				if(contacts.length>0){
					let param={phoneContacts:contacts};
					that.$u.api.imUser.syncContacts(param).then(res => {
						if(res.code==200){
							console.log("同步通讯录结果",res);
							that.contacts=res.data;
						}
					})
				}else{
					console.log("手机通讯录为空");
					return ;
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
   .phoneContacts{
	   min-height: 1200rpx;
   }
   .empty{
   		 min-height: 1000rpx;
   		 padding: auto;
   		 padding-top: 50%;
   	}
</style>
