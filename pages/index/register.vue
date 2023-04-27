<template>
	<view class="register-container">
		<view class="u-p-20">
			<u-form :model="newUser" ref="newUser" label-width="120" label-position="left" :label-style="labelStyle">
						<u-form-item label="QQ号/手机号" prop="qqNumber" label-width="200" required>
							<u-input v-model="newUser.qqNumber" @blur="qqBlur"
									placeholder="qq号可用来同步QQ昵称和头像"
									input-align="right"/>
						</u-form-item>
						<u-form-item label="头像" prop="avator" label-position="left" required>
							<view class="u-flex u-row-right u-col-center" style="width: 100%;" >
								<view  @click="changeDefaultAvatar">
									<u-image :src="newUser.avatar" width="70rpx" height="70rpx" border-radius="10"></u-image>
								</view> 
								<!-- <view class="u-m-l-10"  @click="changeDefaultAvatar">
									<u-icon name="arrow-right" size="32" color="#909399"></u-icon>
								</view> -->
							</view>
						</u-form-item>
						<u-form-item label="昵称" prop="userName" required>
							<u-input v-model="newUser.userName" placeholder="请输入您的昵称" input-align="right"/>
						</u-form-item>
						<!-- <u-form-item label="真实姓名" prop="realName">
							<u-input v-model="newUser.realName" placeholder="请输入您的真实姓名" input-align="right"/>
						</u-form-item> -->
						
					<!-- 	<u-form-item label="手机号" prop="mobile">
							<u-input v-model="newUser.mobile" placeholder="请输入您的手机号码" input-align="right"/>
						</u-form-item> -->
						<u-form-item label="密码" prop="password" required>
							<u-input :password-icon="true" type="password" input-align="right"
									  v-model="newUser.password" placeholder="请输入您的密码"/>
						</u-form-item>
						<u-form-item  label="地址" prop="address" label-position="left" required>
							<u-input :border="false" type="select" input-align="right"
									 :select-open="pickerShow" v-model="newUser.address" 
									 placeholder="请选择地址" @click="pickerShow = true"></u-input>
						</u-form-item>
						<!-- <u-form-item  label="" prop="addressDetail">
							<u-input height="70" maxlength="100"  clearable  type="textarea"  placeholder="请输入您的详细地址" v-model="newUser.addressDetail" />
						</u-form-item> -->
						<!-- <u-form-item label-position="left"  label="验证码" prop="smsCode">
							<u-input :border="false" placeholder="请输入手机验证码" v-model="newUser.smsCode" type="text"></u-input>
							<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
						</u-form-item> -->
			</u-form>
		</view>
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		<u-picker mode="region" v-model="pickerShow" @confirm="regionConfirm"></u-picker>
		<view class="submit-register">
			<!--  :disabled="validateFlag"  plain :ripple="true" ripple-bg-color="#19be6b"  -->
			<u-button  type="success" shape="circle" @click="submitRegist">提交</u-button>
		</view>
		<!-- <view class="agreement" v-if="newUser.qqNumber>0">
			<u-checkbox  active-color="#2979ff" v-model="qqAsyncFlag" @change="qqAsyncFlagChange"></u-checkbox>
			<view class="agreement-text">同步QQ昵称和头像</view>
		</view> -->
		<view class="agreement">
			<u-checkbox  active-color="#19be6b" v-model="agreementCheck" @change="agreementCheckChange"></u-checkbox>
			<view class="agreement-text" @click="toPrivacy">
				勾选代表同意应用的版权协议
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelStyle:{
				  "color":"#606266",
				   "fontSize":"32rpx"
				},
				placeholderStyle:{
					color:"#dbf1e1"
				},
				newUser:{
					userName:'',
					realName:'',
					password:'',
					mobile:'',
					qqNumber:'',
					smsCode:'123456',
					address:'',
					avatar:'',
				},
				validateFlag:true,
				pickerShow: false,
				addressObj:{},
				agreementCheck:false,
				agreement:false,
				qqAsyncFlag:false,
				codeTips:'',
				rules: {
					userName: [
						{ 
							required: true, 
							message: '请输入您的昵称', 
							trigger: ['change','blur'],
						},
					/* 	{
							required: true, 
							validator: (rule, value, callback) => {
								return this.$u.test.chinese(value);
							},
							message: '昵称只支持中文',
							trigger: ['change','blur'],
						}, */
					],
				/* 	realName: [
						{ 
							required: true, 
							message: '请输入您的姓名', 
							trigger: ['change','blur'],
						},
						{
							required: true, 
							validator: (rule, value, callback) => {
								return this.$u.test.chinese(value);
							},
							message: '昵称只支持中文',
							trigger: ['change','blur'],
						},
					], */
					address: [
						{ 
							required: true, 
							message: '请选择地址', 
							trigger: ['change','blur'],
						}
					],
				/* 	addressDetail: [
						{ 
							required: true, 
							message: '请选择地址', 
							trigger: ['change','blur'],
						}
					], */
			/* 		mobile: [
						{ 
							required: true, 
							message: '手机号不能为空!', 
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change','blur'],
						},
						// 校验用户是否已存在
						{
							asyncValidator: (rule, value, callback) => {
								console.log("校验手机号",value);
								this.$u.api.sys.checkMobile({'mobile':value}).then(res => {
									if(res.code!=200) {
										//'该手机号已经被注册'
										callback(new Error(res.message));
									} else {
										callback();
									}
								})
							},
							trigger: ['blur'],
						}
					], */
					qqNumber:[
						{
							required: true, 
							message: '手机/QQ号长度不能小于4位!', 
							trigger: ['change','blur'],
							min:4
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.digits(value);
							},
							message: '手机/QQ号码不正确',
							trigger: ['change','blur'],
						},
						// 校验用户是否已存在
						{
							asyncValidator: (rule, value, callback) => {
								console.log("校验手机号",value);
								this.$u.api.sys.checkMobile({'mobile':value}).then(res => {
									if(res.code!=200) {
										//'该手机号已经被注册'
										callback(new Error(res.message));
									} else {
										this.$u.api.sys.checkQQ({'chatNumber':value}).then(res => {
											if(res.code!=200) {
												callback(new Error('QQ号已经被注册'));
												return;
											} else {
												callback();
											}
										})
									}
								})
							},
							trigger: ['blur'],
						}
					],
					smsCode:[
						{
							required: true, 
							message: '验证码不能为空!', 
							trigger: ['change','blur'],
						},
						{
							len:6,
							type:'number',
							message: '验证码有误',
							trigger: ['change','blur'],
						},
					],
					password: [
						{
							required: true, 
							message: '密码不能为空', 
							trigger: ['change','blur'],
						},
						// 正则判断为字母或数字,// 正则不能含有两边的引号
						{
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message: '需同时含有字母和数字，长度在6-12之间',
							trigger: ['change','blur'],
						},
					]
				},
			};
		},
		onReady() {
			this.$refs.newUser.setRules(this.rules);
		},
		created:function(){
			this.changeDefaultAvatar();	
		},
		methods:{
			codeChange(text) {
				this.codeTips = text;
			},
			agreementCheckChange:function(e){
				console.log("是否统一协议",e);
				this.agreement=e.value;
			},
			toPrivacy:function(){
				this.$u.route({
					url:'/pages/index/privacy/privacy',
					params:{index:0}
				});
			},
			
			qqBlur:function(){
				let that=this;
				let qq=that.newUser.qqNumber;
				if(qq.length>=8){
					that.newUser.mobile=qq;
					this.$u.api.sys.checkQQ({'chatNumber':qq}).then(res => {
						if(res.code!=200) {
							that.globalUtil.utilAlert("QQ号已经被注册");
							return;
						} else {
							that.newUser.avatar="https://q.qlogo.cn/headimg_dl?dst_uin="+qq+"&spec=100";
							uni.request({
								url: 'https://v.api.aa1.cn/api/qqnicheng/index.php?qq='+qq,
								success: (res) => {
									//console.log("============",res);
									if(res.data.length>5){
										let qqName=res.data.substring(5,res.data.length-10);
										this.newUser.userName=this.$u.trim(qqName);
										console.log("同步qq昵称",this.newUser.userName);
									}else{
										//that.changeDefaultAvatar();
										that.newUser.userName="";
									}
								}
							});
						}
					})
				}else{
					//that.changeDefaultAvatar();
					//that.newUser.userName="";
				}	
			},
			
			qqAsyncFlagChange:function(e){
				let that=this;
				console.log("是否同步QQ信息",e);
				this.qqAsyncFlag=e.value;
				if(this.qqAsyncFlag){
					let qq=that.newUser.qqNumber;
					that.newUser.avatar="https://q.qlogo.cn/headimg_dl?dst_uin="+qq+"&spec=100";
					uni.request({
					    url: 'https://v.api.aa1.cn/api/qqnicheng/index.php?qq='+qq,
					    success: (res) => {
							let qqName=res.data.substring(5,res.data.length-10);
							this.newUser.userName=this.$u.trim(qqName);
					        console.log("同步qq昵称",this.newUser.userName);
					    }
					});
				}else{
					that.changeDefaultAvatar();
					that.newUser.userName="";
				}
			},
			// 选择地区回调
			regionConfirm(e) {
				this.newUser.address = e.province.label + '-' + e.city.label + '-' + e.area.label;
				this.addressObj=e;
			},
			// 获取验证码
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			checkSmsCode:function(smsCode){
				console.log("检验验证码",smsCode);
				return true;
			},
			changeDefaultAvatar:function(){
				let that=this;
				let avatarPrefix="/static/image/default/default-user/";
				let index=this.globalUtil.randomNum(1,14);
				let avatar=avatarPrefix+index+'.jpg';
				that.newUser.avatar=avatar;	
			},
			submitRegist:function(){
				console.log("提交注册");
				let that=this;
				this.$refs.newUser.validate(valid => {
					if (valid) {
						//console.log('验证通过',that.newUser);
						if(!that.agreement){
							this.globalUtil.utilAlert("请先勾选同意应用协议");
							return;
						}
						let smsCode= that.newUser.smsCode;
						let flag= that.checkSmsCode(smsCode);
						console.log("falg",flag);
						if(flag){
							let addressDetail= that.newUser.addressDetail;
							console.log("addressDetail",addressDetail);
							console.log("addressObj",this.addressObj);
							if(addressDetail!=undefined&&addressDetail.length>0){
								let detail={"label":addressDetail};
								that.addressObj.detail=detail
							}
							else{
								let detail={"label":""};
								that.addressObj.detail=detail
							}
							let addressStr=JSON.stringify(that.addressObj);
							console.log("addressStr",addressStr);
							let param={
								"userName": that.newUser.userName,
								//"realName": that.newUser.realName,
								"realName": that.newUser.userName,
								"password": that.newUser.password,
								"mobile": that.newUser.mobile,
								"address": addressStr,
								"userDeviceId":that.vuex_deviceMode,
								"avatar":that.newUser.avatar,
								"chatNumber":that.newUser.qqNumber,
							};
							
							console.log("注册参数",param);
							this.$u.api.sys.register(param).then(res => {
								if(res.code==200) {
									 this.globalUtil.utilAlert("注册成功");
									 let deviceMode=this.vuex_deviceMode;
									 let loginParam={
										mobile:that.newUser.mobile,
										password:that.newUser.password,
										userDeviceId:deviceMode
									 }
									 uni.clearStorageSync();
									 this.$u.vuex('vuex_loginParam',loginParam);
									 uni.navigateBack();
									 return;
								} else {
									this.globalUtil.utilAlert("注册失败");
								}
							})
							console.log("验证码校验通过");
						}else{
							this.globalUtil.utilAlert("验证码错误!");
							return;
						}
					} else {
						console.log('验证失败');
					}
				});
						
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register-container{
		padding: 0 20rpx;
	}
	.avatar{
		height: 200rpx;
		padding: 50rpx;
		margin-bottom: 0rpx;
		text-align: center;
		border-bottom: 1px solid #EEEEEE;
	}
	.agreement {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
		margin: 40rpx 0;
		
		.agreement-text {
			padding-left: 8rpx;
			color: #2979ff;
		}
	}
	.submit-register{
		margin: 50rpx;
	}
</style>
