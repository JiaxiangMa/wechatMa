<template>
	<view>
		<u-cell-group>
			 <u-cell-item  title="头像" :arrow="false" hover-class="cell-hover-calss" @click="toSetAvatar">
				 <view slot="right-icon">
					<view class="u-flex  u-col-center">
						<u-avatar mode="square" :src="userAvatar"></u-avatar>
						<u-icon class="u-margin-left-10" name="arrow-right" color="#909399" size="28"></u-icon>
					</view>
				 </view>
			 </u-cell-item>
			 <u-cell-item title="昵称" :value="currentUser.userName" @click="openUserNameModel()"></u-cell-item>
			 <u-modal v-model="userNameModel" title="修改昵称" show-cancel-button
						@confirm="comfirmUpdateUserName()" @cancel="cancelUpdateUserName()">
				<view class="slot-content">
				 	<u-field	v-model="updatedUserName" label-width="10" 	label="" placeholder="请填写昵称"></u-field>
				</view>
			 </u-modal>
			 <u-cell-item title="姓名" :value="currentUser.realName" @click="openRealNameModel()"></u-cell-item>
			 <u-modal v-model="realNameModel" title="修改姓名" show-cancel-button
			 						@confirm="comfirmUpdateRealName()" @cancel="cancelUpdateRealName()">
					<view class="slot-content">
						<u-field	v-model="updatedRealName" label-width="10" 	label="" placeholder="请填写姓名"></u-field>
					</view>
			 </u-modal>
			 <u-cell-item title="身份证" :value="currentUser.idCard?currentUser.idCard:'去绑定'"></u-cell-item>
			 <u-cell-item title="手机" :value="currentUser.mobile"></u-cell-item>
			 <u-cell-item title="账号" :value="currentUser.chatNumber"  @click="openChatNumberModel()"></u-cell-item>
			 <u-modal v-model="chatNumberModel" title="修改账号" show-cancel-button :show-confirm-button="errorMessage.length<1"
			 						@confirm="comfirmUpdatechatNumber()" @cancel="cancelUpdatechatNumber()">
					<view class="slot-content">
						<u-field :error-message="errorMessage" @input="onInputChatNumber"	v-model="updatedchatNumber" label-width="10" 	label="" placeholder="请填写账号"></u-field>
					</view>
			 </u-modal>
			 <view  @click="sexSelectShow=true">
				 <u-cell-item title="性别" value="男" v-if="currentUser.sex==0"></u-cell-item>
				 <u-cell-item title="性别" value="女" v-if="currentUser.sex==1"></u-cell-item>
				 <u-cell-item title="性别" value="去设置" v-if="currentUser.sex!=1&&currentUser.sex!=0"></u-cell-item>
			 </view>
			 <u-select v-model="sexSelectShow" :list="sexOptions" @confirm="confirmUpdateSex"></u-select>
			 <view v-if="currentUser.address.length>0">
				  <u-cell-item  @click="addressPickerShow=true"   title="地址" :value="parseAddress(currentUser.address)">
				     <view slot="label" v-if="addressDetail.length>0">{{addressDetail}}</view>
				  </u-cell-item> 
			 </view>
			 <u-picker mode="region" @confirm="comfirmUpdateAddress"  v-model="addressPickerShow" :area-code='setDefaultAddress(currentUser.address)'></u-picker>
			 <u-modal v-model="addressDetailModel" title="修改地址详情" show-cancel-button cancel-text="暂不设置"
			 						@confirm="comfirmUpdateAddressDetail()" @cancel="cancelUpdateAddressDetail()">
					<view class="slot-content">
						<u-field   	v-model="addressDetail" label-width="10" label="" placeholder="请填写详细地址"></u-field>
					</view>
			 </u-modal>
			 <u-cell-item  @click="openSignatureModel()"  title="个性签名" :value="currentUser.signature?currentUser.signature:'去设置'"></u-cell-item>
			 <u-modal v-model="signatureModel" title="设置个性签名" show-cancel-button 
			 						@confirm="comfirmUpdateSignature()" @cancel="cancelUpdateSignature()">
						<view class="slot-content">
							<u-field   	v-model="newSignature" label-width="10" label="" placeholder="请填写个性签名"></u-field>
						</view>
			 </u-modal>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressDetail:'',
				addressDetailModel:false,
				
				userAvatar:'',
				currentUser:{},
				userNameModel:false,
				updatedUserName:'',
				realNameModel:false,
				updatedRealName:'',
				chatNumberModel:false,
				updatedchatNumber:'',
				errorMessage:'',
				sexSelectShow:false,
				sexOptions:[
					{
						value: 0,
						label: '男'
					},
					{
						value: 1,
						label: '女'
					}
				],
				addressPickerShow:false,
				signatureModel:false,
				newSignature:'',
				
			};
		},
		
		onShow:function(){
		   let currentUser= this.vuex_userInfo;	
		   //console.log("==============currentUser==============",currentUser);
		   this.currentUser=currentUser;
		   this.userAvatar=this.currentUser.avatar;
		},
		methods:{
			toSetAvatar:function(){
				this.$u.route("/pages/my/setAvatar");
			},
			openUserNameModel:function(){
				this.userNameModel=true;
				this.updatedUserName=this.currentUser.userName;
			},
			comfirmUpdateUserName:function(){
				if(this.updatedUserName.length<1){
					this.globalUtil.utilAlert("不能为空!");
					this.openUserNameModel();
				}else{
					this.currentUser.userName=this.updatedUserName;
					this.updateUserInfo();
				}
			},
			cancelUpdateUserName:function(){
				this.userNameModel=false;
			},
			openRealNameModel:function(){
				this.realNameModel=true;
				this.updatedRealName=this.currentUser.realName;
			},
			comfirmUpdateRealName:function(){
				if(this.updatedRealName.length<1){
					this.globalUtil.utilAlert("不能为空!");
					this.openRealNameModel();
				}else{
					this.currentUser.realName=this.updatedRealName;
					this.updateUserInfo();
				}
			},
			cancelUpdateRealName:function(){
				this.realNameModel=false;
			},
			
			onInputChatNumber:function(value){
				console.log("value",value);
				if(value.length>0){
					let reg = /[\u4e00-\u9fa5]+/g;
				    let chArr=value.match(reg);
					if(chArr!=null&&chArr.length>0){
						//this.globalUtil.utilAlert("不支持中文!");
						this.errorMessage="不支持中文!";
						return;
					}else{
						this.errorMessage="";
						return;
					}
				}
			},
			openChatNumberModel:function(){
				this.chatNumberModel=true;
				this.updatedchatNumber=this.currentUser.chatNumber;
			},
			comfirmUpdatechatNumber:function(){
				if(this.updatedchatNumber.length<1){
					this.globalUtil.utilAlert("不能为空!");
					this.openChatNumberModel();
				}else{
					this.currentUser.chatNumber=this.updatedchatNumber;
					this.updateUserInfo();
				}
			},
			cancelUpdatechatNumber:function(){
				this.chatNumberModel=false;
			},
			
			openSignatureModel:function(){
			   this.signatureModel=true;
			   this.newSignature=this.currentUser.signature;	   
			},
			
			comfirmUpdateSignature:function(){
				this.currentUser.signature=this.newSignature;
				this.updateUserInfo();
			},
			cancelUpdateSignature:function(){
				 this.signatureModel=false;
				 this.newSignature=";"
			},
			
			confirmUpdateSex:function(e){
				console.log(e);
				this.currentUser.sex=e[0].value;
				this.updateUserInfo();
			},
			//修改用户信息
			updateUserInfo:function(){
				let that=this;
				let param=that.currentUser;
				that.$u.api.imUser.updateUserInfo(param).then(res => {
					if(res.code==200){
						that.globalUtil.utilAlert("修改成功!");
						that.$u.vuex('vuex_userInfo',param);
					}
				})
			},
		
		   //选择地址
			comfirmUpdateAddress:function(obj){
				//console.log("obj",obj);
				this.currentUser.address=JSON.stringify(obj);
				this.addressDetailModel=true;
				//this.addressDetail="";
			},
			comfirmUpdateAddressDetail:function(){
				let addressStr=	this.currentUser.address;
				let addr=JSON.parse(addressStr);
				if(this.addressDetail.length>0){
				    addr.detail={"label":this.addressDetail};
				}
				this.currentUser.address=JSON.stringify(addr);
				this.updateUserInfo();
			},
			cancelUpdateAddressDetail:function(){
					this.addressDetailModel=false;
					this.updateUserInfo();
			},
			//解析地址
			parseAddress:function(address){
				let addressStr="设置"
				if(address!=null&&address.length>0){
					let addressObj= JSON.parse(address);
					let provice= addressObj.province.label;
					let city=addressObj.city.label;
					let area=addressObj.area.label;
					addressStr=provice+"-"+city+"-"+area;
					let detail=addressObj.detail;
					if(detail!=null&&detail!=undefined){
						this.addressDetail=detail.label;
					}
				}
				return addressStr;
			},
			setDefaultAddress:function(address){
				let addressObj= JSON.parse(address);
				let provice= addressObj.province.value;
				let city=addressObj.city.value;
				let area=addressObj.area.value;
				return [provice,city,area];
			},
		}
	}
</script>

<style lang="scss">
	.cell-hover-calss{
		background-color: rgb(235, 237, 238) !important;
	}
</style>
