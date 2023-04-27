<template>
	<view>
		<view class="newFriendInfo">
			<view class="img" style="width: 15%;">
				<u-image 	:src="newFriendInfo.avatar"
							@tap="previewImg(newFriendInfo.avatar)"
							mode="aspectFill" width="110" height="110" border-radius="12">
					<u-loading slot="loading"></u-loading>
					<view slot="error">
							<u-icon name="account" size="64"></u-icon>
					</view>		
				</u-image>
			</view>
		
			<view class="newFriendInfo-desc" style="width: 70%; display: flex;flex-direction: column;justify-content: center;align-items: flex-start;">
				<view class="newFriendInfo-desc-gray">昵称：{{newFriendInfo.userName}}</view>
				<!-- <view class="newFriendInfo-desc-gray">账号：{{newFriendInfo.mobile}}</view> -->
				<view class="newFriendInfo-desc-gray">地区：{{parseAddress(newFriendInfo.address)}}</view>
			</view>
			
			<view style="width: 13%;">
				<!-- <u-icon name="arrow-right" color="#909399" size="32" label="更多" label-color="#909399" label-pos="left" margin-right="2rpx"></u-icon> -->
			</view>
		</view>
		<u-gap height="16" bg-color="#eee" margin-top="10" margin-bottom="1"></u-gap>
		
		<view class="u-p-l-30 u-p-r-30 u-m-t-20" style="font-size: 32rpx;color: #000000;">
			<u-form :model="form" ref="uForm" label-position="top"  :label-style="formLabelStyle">
				<u-form-item label="发送添加申请:" label-position="left" label-width="250rpx">
					<u-input v-model="form.applyUserName" input-align="right"  placeholder="输入申请昵称" class="u-m-l-20"/>
				</u-form-item>
				<u-form-item label="设置备注:" label-position="left" label-width="250rpx">
					<u-input v-model="form.friendName" placeholder="设置朋友昵称" input-align="right"  class="u-m-l-20"/>
				</u-form-item>
				<u-form-item label="标签:" label-position="left" label-width="250rpx">
					 <u-input v-model="form.friendTag"   placeholder="设置标签(亲人/朋友/同事/同学)" input-align="right" class="u-m-l-20 "/>
				</u-form-item>
			<!-- 	<u-form-item label="" style="margin-top: -20rpx;padding: 10rpx;">
					<u-radio-group v-model="tagValue" @change="tagChange"  :wrap="false"  active-color="#19be6b"  class="u-m-l-40">
						<u-radio v-for="(item, index) in tagList" :key="index" :name="item.name" :disabled="item.disabled">
							<view  style="color: #909399;">{{ item.name }}</view>
						</u-radio>
					</u-radio-group>
				</u-form-item> -->
				
				<u-form-item label="设置朋友权限:" :border-bottom="false">
					<u-radio-group v-model="radioValue" @change="radioValueChange"  :wrap="false" size="32rpx" width="50%" active-color="#19be6b"  class="u-m-l-20">
						<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
							<view class="u-m-b-10 u-m-t-10">{{ item.name }}</view>
						</u-radio>
					</u-radio-group>
				</u-form-item>
			</u-form>	
		</view>
		
		<u-gap height="16" bg-color="#eee" margin-top="10" margin-bottom="1"></u-gap>
		
		<view style="width: 100%;position: absolute;bottom: 30rpx;" class="u-flex u-row-center u-col-center">
			<u-button type="success" :loading="submitFlag" :disabled="submitFlag"  size="medium" @click="submitApply">发送</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formLabelStyle: {
					color: '#909399',
					fontSize: "32rpx",
				},
				newFriendInfo:{},
				form:{
					applyUserId:'',
					applyUserName: '',
					friendName:'',
					friendTag:'',
					friendPower:0,
				},
				radioValue: '公开',
				radioList:[
					{
						name: '公开',
						disabled: false,
						value:0
					},
					{
						name: '仅聊天',
						disabled: false,
						value:1
					},
					{
						name: '不看他(她)',
						disabled: false,
						value:2
					},
					{
						name: '不让他(她)看',
						disabled: false,
						value:3
					}
				],
				tagValue:'',
				tagList:[
					{
						name: '亲人',
						disabled: false,
						value:0
					},
					{
						name: '朋友',
						disabled: false,
						value:1
					},
					{
						name: '同学',
						disabled: false,
						value:2
					},
					{
						name: '同事',
						disabled: false,
						value:3
					},
					{
						name: '其他',
						disabled: false,
						value:4
					}
				],
				submitFlag:false,
				backPageDelta:2
			};
		},
		onLoad:function(option){
			let that=this;
			let fromPage= option.fromPage;
			if(fromPage!=null&&fromPage!=undefined){
				that.backPageDelta=fromPage;
			}
			that.newFriendInfo=JSON.parse(decodeURIComponent(option.newFriendInfo));
			this.form.friendName=that.newFriendInfo.userName;
			this.form.applyUserName=that.vuex_userInfo.userName;
			this.form.applyUserId=that.vuex_userInfo.id;
		},
		methods:{
			submitApply:function(){
				let that=this;
				that.submitFlag=true;
				let param={
					friendId:that.newFriendInfo.id,
					friendName:that.form.friendName,
					friendTag:that.form.friendTag,
					friendMobile:that.newFriendInfo.mobile,
					friendPower:that.form.friendPower,
					description:that.form.applyUserName
				}
				console.log("param",param);
				that.$u.api.imUser.addFriend(param).then(res => {
					if(res.code==200){
					   console.log("申请添加好友结果",res);
					   if(that.backPageDelta==1){
						   uni.navigateBack();
					   }else{
						    uni.navigateBack({delta:2});
					   }
					}
				})
				setTimeout(function(){
					that.submitFlag=false;
				},5000);
			},
			//解析地址
			parseAddress:function(address){
				let addressStr="中国";
				if(address!=null&&address.length>0){
					let addressObj= JSON.parse(address);
					let provice= addressObj.province.label;
					let city=addressObj.city.label;
					let area=addressObj.area.label;
					if(provice&&city&&area){
						addressStr=provice+" "+city+" "+area;
					}
				}
				return addressStr;
			},
			//监听单选框值变化
			radioValueChange:function(option){
				//console.log("朋友权限",option);
				let that=this;
				for (var i = 0; i < that.radioList.length; i++) {
					let radioItem= that.radioList[i];
					if(radioItem.name===option){
						that.form.friendPower=radioItem.value;
						break;
					}
				}
				console.log("设置了朋友权限",that.form.friendPower);
			},
			tagChange:function(tag){
				this.form.friendTag=tag
			}
		}
	}
</script>

<style lang="scss">
	.newFriendInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		.img {
			display: block;
			width: 110rpx;
			height: 110rpx;
			border-radius: 10rpx;
		}
	
		&-desc {
			padding-left: 20rpx;	
			&-name {
				font-weight: bold;
				font-size: 36rpx;
				transform: translateY(-10rpx);
				color: #000000;
			}
	
			&-gray {
				color: $u-tips-color;
				font-size: 29rpx;
			}
		}
	}
</style>
