<template>
	<view class="content">
		<view class="status_bar"></view>
		<view class="header">
		  <view>
		    <u-image  width="200rpx" height="200rpx" bg-color="none"
					  mode="aspectFit" :src="vuex_app_config.logoIcon">
				<view slot="error">
					<u-image  width="200rpx" height="200rpx" bg-color="none"
							  mode="aspectFit" src="/static/image/login/logo.png">
					</u-image>		  
				</view>	
			</u-image>
		  </view>
		  <view class="title-text">
			  <!-- 仿微信即时通讯 we chat Tomato -->
		    <text>{{vuex_app_config.appName}}</text>
		  </view>
		</view>
		<view class="list">
		  <view class="list-call">
				<image class="img" :src="phoneImg"></image>
				<input :adjust-position="false" class="biaoti" type="text" maxlength="32" placeholder="输入账号" v-model="loginParam.mobile" @input="bindPhoneInput" />
		  </view>
		  <view class="list-call">
				<image class="img" :src="pwdImg"></image>
				<input :adjust-position="false" class="biaoti" type="text" maxlength="17" placeholder="输入密码" password="true" v-model="loginParam.password" @input="bindPwdInput" />
		  </view>
		  <view class="dlbutton-hover" v-if="isInputFinish">
			 <u-button type="info"  shape="circle" disabled>登录</u-button>
		  </view>
		  <view class="dlbutton-hover" v-if="!isInputFinish">
				<u-button type="success" shape="circle" @click="bindLogin">登录</u-button>
		  </view>
		  
		  <view class="agreement">
		  	<!-- !!!隐私协议代码块 误删!!! -->
		  	<view :class="[warningFlag ? 'warningClass':'','serviceDesc']">
		  		<view style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
		  			<radio @click="changeServiceAggrement" style="transform:scale(0.7);" color="#2979ff"
		  				:checked="serviceAgreementChecked" />
		  			<text style="color: #909399;">我已阅读并同意</text>
		  		</view>
		  		<view style="color:#19be6b" @click="toAgreement(0)"><text>《用户协议》 </text></view>
		  		<view style="color:#19be6b;" @click="toAgreement(1)"><text>《隐私政策》</text></view>
		  	</view>
		  </view>
		  
		</view>
		<view class=" u-flex u-row-around  content_footer">
			<text>找回密码</text>
			<text @tap="actionClick">立即注册</text>
		</view>
	</view>
</template>

<script>
import config from "@/common/environment.js";
export default {
	data() {
		return {
			phoneImg: "../../static/image/login/iPhone0.png",
			pwdImg: '../../static/image/login/noInputPwd.png',
			isInputFinish: true,
			loginParam:{
				mobile: "",
				password: "",
			},
			warningFlag: false,
			serviceAgreementChecked: false,
		};
	},
	onLoad() {},
	onShow() {
		let that=this;
		let loginParam= this.vuex_loginParam;
		if(loginParam.mobile.length>0){
			that.loginParam.mobile=loginParam.mobile;
			that.phoneImg = "../../static/image/login/iphone.png";
		}
	},
	methods: {
		//监听号码输入
		bindPhoneInput:function(e) {
		  if (e.detail.value.toString().length > 0) {
		    this.phoneImg = "../../static/image/login/iphone.png";
		    if (this.loginParam.password.length > 0) {
		      this.isInputFinish = false;
		    }
		  } else {
		    this.phoneImg = "../../static/image/login/iPhone0.png";
		    this.isInputFinish = true;
		  }
		},
		//监听密码输入
		bindPwdInput:function(e) {
		  if (e.detail.value.toString().length > 0) {
		    this.pwdImg = "../../static/image/login/passord.png";
		    if (this.loginParam.mobile.length > 0) {
		      this.isInputFinish = false;
		    }
		  } else {
		    this.pwdImg = "../../static/image/login/noInputPwd.png";
		    this.isInputFinish = true;
		  }
		},
		actionClick:function(index){
			this.$u.route({
				url:"/pages/index/register",
				params: {}
			})
			return;
		},
		bindLogin:function() {
			let that=this;
			let deviceMode=this.vuex_deviceMode;
			let data = that.loginParam;
			data.userDeviceId=deviceMode;
			console.log("登录参数",data);
			if(!that.showWarning()){
				return;
			};
			this.$u.api.sys.login(data).then(res => {
				console.log("登录响应结果",res);
				if(res.code==200){
					//存用户信息和token;
					let userInfo= res.data.userInfo;
					if(userInfo!=null&&userInfo!=undefined){
						this.$u.vuex("vuex_userInfo",userInfo);
					}
					let token=res.data.token;
					if(token!=null&&token!=undefined&&token.length>0){
						this.$u.vuex('vuex_token', token);
					}
					//将登录的用户名和密码放入vuex缓存中
					this.$u.vuex('vuex_loginParam',data);
					// #ifdef APP-PLUS
					this.trcApi.TRCLogin(that);
					// #endif
					setTimeout(function(){
						that.$u.route({
							type:'reLaunch',
							url:"/pages/chat/chatGroupList",
							params: {}
						})
					},500);
				}else{
					this.globalUtil.utilAlert(res.message);
					return;
				}
			})
		},
		//勾选协议变化
		changeServiceAggrement: function() {
			let that = this;
			that.serviceAgreementChecked = !that.serviceAgreementChecked;
		},
		//是否勾选协议
		showWarning: function() {
			let that = this;
			if (that.serviceAgreementChecked == false) {
				that.warningFlag = true;
				that.globalUtil.utilAlert("请先阅读并同意用户协议和隐私政策");
				setTimeout(function() {
					that.warningFlag = false;
				}, 1000);
				return false;
			}
			return true;
		},
		//用户协议,隐私政策
		toAgreement: function(index) {
			this.$u.route({
				url:"/pages/index/privacy/privacy",
				params:{
					index
				}
			});
		},
	}
};
</script>

<style lang="scss" scoped>
.content {
	overflow: hidden;
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	&_body {
		margin-top: 170rpx;
		text-align: center;
		&_tel {
			margin-top: 10rpx;
		}
		&_pswd {
			margin-top: 40rpx;
		}
		&_btn {
			margin-top: 120rpx;
			padding: 0 20rpx;
		}
	}
	&_footer {
		position: absolute;
		bottom: 50rpx;
		width: 100%;
		padding: 0 30rpx;
		text {
			color: #19be6b;
			//color: #f29100;
		}
	}
}
.header {
   margin: 180upx 10upx 100upx 10upx;
   display: flex;
   flex-direction: column;
   justify-content: center;
   justify-items: center;
   align-content: center;
   align-items: center;
}

.image {
  width: 200upx;
  height: 200upx;
  //border-radius: 50%;
  // border: 1px solid #19be6b;
  padding: 1rpx;
}

.title-text {
  font-size: 40rpx;
  color: #000000;
  font-weight: bolder;
  letter-spacing: 2px;
  font-family: PingFangSC-Regular, PingFangSC;
}

.list {
  position: relative;
  display: flex;
  z-index: 2;
  flex-direction: column;
  padding-top: 0upx;
  padding-left: 40rpx;
  padding-right: 40rpx;
}

.list-call {
  height: 100rpx;
  width: 100%;
  line-height: 100rpx;
  color: #353535;
  font-size: 32rpx;
  box-sizing: border-box;
  appearance: none;
  border: 2rpx solid #e5e5e5;
  box-shadow: none;
  border-radius: 44rpx;
  outline: 0;
  display: block;
  padding-left: 30rpx;
  margin: 0;
  font-family: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.list-call .img {
  width: 40upx;
  height: 40upx;
}

.list-call .biaoti {
  flex: 1;
  text-align: left;
  font-size: 32upx;
  line-height: 36upx;
  margin-left: 16upx;
}

.dlbutton {
  color: rgba(155, 155, 155, 1);
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  font-size: 34upx;
  padding: 30rpx 165rpx;
  box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
  line-height: 100upx;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50upx;
  background: rgba(237, 237, 237, 1);
  border-radius: 10px;
}

.dlbutton-hover {
  //margin-left: auto;
  //margin-right: auto;
  margin: 80rpx;
  height: 30rpx;
}
.dlbutton-hover_1{
  margin-left: auto;
  margin-right: auto;
  height: 20rpx;
  margin-top: 40rpx;
}

.text {
  font-size: 34upx;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 100upx;
  text-align: center;
  z-index: 2;
  position: absolute;
  padding: 15rpx 180rpx;
}

.imageButton {
  width: 440rpx;
  height: 150rpx;
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
		color: $u-tips-color;
	}
}


.serviceDesc {
	font-size: 32rpx;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* border: 1px solid black; */
	height: 50rpx;
	line-height: 50rpx;
}

.warningClass {
	/* border: 1px solid red; */
	animation: warningClass 1000ms ease-in-out;
}

@keyframes warningClass {

	10%,
	90% {
		transform: translate3d(-1px, 0, 0);
	}

	20%,
	80% {
		transform: translate3d(+2px, 0, 0);
	}

	30%,
	70% {
		transform: translate3d(-4px, 0, 0);
	}

	40%,
	60% {
		transform: translate3d(+4px, 0, 0);
	}

	50% {
		transform: translate3d(-4px, 0, 0);
	}
}



</style>
<style scoped>
>>> .u-border-top:after {
	border-top-width: 0px;
}
</style>
