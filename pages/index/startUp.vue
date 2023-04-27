<template>
	<view>
		<u-mask :show="maskShow"  :custom-style="{background: 'rgba(255, 255, 255, 0.1)'}">
				<view class="warp">
					<u-image :width="width"    mode="widthFix"  
							 :src="startUp" :fade="true" duration="450">
					</u-image>
				</view>
		</u-mask>
	</view>
</template>

<script>
	import config from "@/common/environment.js";
	export default {
		data() {
			return {
				startUp: '../../static/start.png',
				width:0,
				height:0,
				maskShow:true,
				useCount:0,
			};
		},

		created:function(){
			this.height=this.$u.sys().windowHeight*2;
			this.width=this.$u.sys().windowWidth*2;
			console.log("height",this.height);
			console.log("width",this.width);
		},

		onLoad() {
		 	let that = this;
			setTimeout(function() {
				that.loginByLocalStrorge();
			}, 500)
		},
		
		
		methods:{
			loginByLocalStrorge:function() {
				let that=this;
				//从缓存中获取用户名、密码尝试登录，如果成功自动跳到首页；如果不成功回到登录界面
				let obj= this.vuex_loginParam;
				//console.log("缓存登录的信息",obj);
				if (obj!={}&&obj.mobile.length>0 && obj.password.length>0 &&obj.userDeviceId!=undefined&&obj.userDeviceId.length>0) {
					this.$u.api.sys.login(obj).then(res => {
						if(res.code==200){
							console.log("登录响应结果",res.data);
							let userInfo= res.data.userInfo;
							if(userInfo!=null&&userInfo!=undefined){
								this.$u.vuex("vuex_userInfo",userInfo);
							}
							let token=res.data.token;
							if(token!=null&&token!=undefined&&token.length>0){
								this.$u.vuex('vuex_token', token);
							}
							// #ifdef APP-PLUS
							this.trcApi.TRCLogin(that);
							let platfrom= this.$u.os();
							if(platfrom=="android"){
								setTimeout(function(){
									that.getLatestVersion();
								},500);
								return;
							}
							else{
								that.$u.route({
									type:'reLaunch',
									url:"/pages/chat/chatGroupList",
								})
								return;
							}
							// #endif
							// #ifdef H5
								that.$u.route({
									type:'reLaunch',
									url:"/pages/chat/chatGroupList",
								})
								return;
							// #endif
						}else{
							this.globalUtil.utilAlert(res.message);
							that.toLogin();
							return;
						}
					}).catch(res => {
						console.log("缓存登录异常",res);
						that.toLogin();
					})
				} else {
					console.log("缓存中没有登录信息");
					that.$u.route({
						type:'reLaunch',
						url:"/pages/index/login",
						params: {}
					})
				}
			},

			toLogin:function(){
				let that=this;
				this.$u.toast('身份已失效,请重新登录!');
				this.$u.vuex("vuex_userInfo",{});
				this.$u.vuex('vuex_token', "");
				this.$u.vuex('vuex_loginParam', {
					mobile:'',
					password:'',
					userDeviceId:''
				});
				setTimeout(function(){
					that.$u.route({
						type:'reLaunch',
						url:"/pages/index/login",
						params: {}
					})
				},500);
			},

			getLatestVersion: function() {
				let that = this;
				let oldVersion = config.version;
				console.log("oldVersion",oldVersion);
				let params = {
					platFrom:0
				};
				that.$u.api.sys.getLatestVersion(params).then(res => {
					if (res != null) {
						if (res.code === 200&&res.data!=null) {
							console.log("检查版本响应结果",res);
							let newVersion = res.data;
							let v = newVersion.versionNum;
							console.log("新版本号",v);
							if (v == oldVersion) {
								console.log("没有新版本",v);
								that.$u.route({
									type:'reLaunch',
									url:"/pages/chat/chatGroupList",
								})
								return;
							} else {
								newVersion.fromPage = 0;
								that.$u.route({
									url: '/components/updateVersion/updateVersion',
									params: {newVersion:JSON.stringify(newVersion)}
								})
							}
						} else {
							that.$u.route({
								type:'reLaunch',
								url:"/pages/chat/chatGroupList",
							})
						}
					}
					// 获得数据
				}).catch(res => {
					console.log("获取最新版本异常", res);
					that.$u.route({
						type:'reLaunch',
						url:"/pages/chat/chatGroupList",
					})
				})
			},
		}
	}
</script>



<style lang="scss" scoped>
		.warp {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 100%;
		}
</style>

