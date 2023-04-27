<template>
	<view>
		<u-navbar :is-back="true" title="群二维码名片" title-size="34"></u-navbar>
		<template v-if="qrFlag">
			<create-new-qr-code :title="currentGroupInfo.chatGroupName"
								:titleIconSrc="currentGroupInfo.chatGroupAvatar" 
								:qrInfoObj="qrInfoObj"></create-new-qr-code>
		</template>
	</view>
</template>

<script>
	import createNewQrCode from '@/components/create-qr-code/create-qr-code.vue';
	export default {
		components:{
			createNewQrCode
		},
		data() {
			return {
				currentGroupInfo:"",
				qrInfoObj:"下载链接",
				qrFlag:false,
			};
		},
		onLoad:function(option){
			let that=this;
			if(option.group){
				let  groupStr= option.group;
				let groupObj= JSON.parse(groupStr);
				this.currentGroupInfo=groupObj;
				if(this.currentGroupInfo.id){
					let qrValueObj={
						businessCode:that.globalUtil.scan_business_code.invited_join_group.code,//业务类型
						expireTime:that.globalUtil.scan_business_code.invited_join_group.expireTime,	//二维码过期时间 -1表示永不过期 单位是H
						createTimeStamp:new Date().getTime(),
						createTime:that.$u.timeFormat(new Date().getTime(),'yyyy-mm-dd hh:MM'),
						createUser:that.vuex_userInfo.id,
						qrValue:{
							chatGroupId:that.currentGroupInfo.id,
						}
					};
					console.log("二维码的值",qrValueObj);
					this.qrInfoObj=JSON.stringify(qrValueObj);
					this.qrFlag=true;
				}else{
					this.appDownloadUrl();
				}
			} 
		},
		methods:{
			appDownloadUrl:function(){
				 let that=this;
				 let downloadUrl="";
				 let platfrom=uni.getSystemInfoSync().osName;
				 if("android"===platfrom){
				 	downloadUrl="安卓下载链接";
				 }
				 else{
				 	downloadUrl= "苹果下载链接";
				 }
				 let obj={
					businessCode:0,//业务类型
					expireTime:-1,	//二维码过期时间 -1表示永不过期 单位是H
					createTimeStamp:new Date().getTime(),
					createTime:that.$u.timeFormat(new Date().getTime(),'yyyy-mm-dd hh:MM'),
					createUser:that.vuex_userInfo.id,
					qrValue:{
						"downloadUrl":downloadUrl
					}
				}
				this.qrInfoObj=JSON.stringify(obj);
				this.qrFlag=true;
			},
		}
	}
</script>

<style lang="scss">
   .right{
	   margin: 0px 20upx;
   }
</style>
<style>
	page {
		background-color: #f1f1f1;
	}
</style>
