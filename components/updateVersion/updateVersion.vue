<template>
	<u-modal v-model="show" :show-cancel-button="newVersionInfo.forceUpdateFlag==false"  
			title="发现新版本,更新吗?"
			cancel-text="以后升级"
			:confirm-text="newVersionInfo.forceUpdateFlag==false?'现在升级':'立即升级'"
			@cancel="cancel" @confirm="confirm">
		<view class="u-update-content">
			<rich-text :nodes="newVersionInfo.updateNote?newVersionInfo.updateNote:'修复已知bug'"></rich-text>
		</view>
	</u-modal>
</template>

<script>
	export default {
		data() {
			return {
				newVersionInfo:{},
				show: false,
				content: `
					1. 修复badge组件的size参数无效问题<br>
					2. 新增Modal模态框组件<br>
					3. 新增压窗屏组件，可以在APP上以弹窗的形式遮盖导航栏和底部tabbar<br>
					4. 修复键盘组件在微信小程序上遮罩无效的问题
				`,
			}
		},
	
		onLoad(option) {
			if(option!=null&&option.newVersion!=null&&option.newVersion!=undefined&&option.newVersion.length>0){
				this.newVersionInfo=JSON.parse(option.newVersion);
				console.log("最新版本信息",this.newVersionInfo);
				this.show = true;
			}else{
				 this.globalUtil.utilAlert("页面加载失败!");
				 return;
			}
		},
		
		methods: {
			cancel() {
				let that=this;
				let fromPage=this.newVersionInfo.fromPage;
				if(fromPage<2){
					uni.reLaunch({
						url: '/pages/chat/chatGroupList',
						success: function() {
							that.getUnReadMsg();
						}
					})
				}else{
					this.show=false;
					uni.navigateBack();
				}
			},
			confirm() {
				let that=this;
				let url=that.newVersionInfo.versionUrl;
				if(url==null||url==undefined|url.length<1){
					plus.nativeUI.toast('无安装包可用，请联系管理员');
					return;
				}
				that.hotUpdateFun(url);
				return;
			},
			/**获取未读信息数量并且更新角标显示*/
			getUnReadMsg() {
				let that = this;
				let userId = this.vuex_userInfo.id;
				let param = {
					"userId": userId
				};
				return;
				/* api.chatGroup.countUnreadNum(param).then(res => {
					if (res.code == 1) {
						let unReadMsg = "0";
						if (res.data > 99) {
							unReadMsg = '99+';
						} else {
							unReadMsg = res.data + '';
						}
						if (res.data === 0) {
							uni.removeTabBarBadge({
								index: 1
							});
						
						} else {
							uni.setTabBarBadge({
								index: 1,
								text: unReadMsg.toString()
							})
						
						}
					} else {
						console.log("请求未读信息数量接口出现异常");
					}
				}); */
			},
			
			hotUpdateFun(url) {
			    let _this = this
			    var watiting = plus.nativeUI.showWaiting("开始下载：0%");
			    // 创建下载任务
			    const downloadTask = uni.downloadFile({
			        url: url,
			        success: (res) => {
			            if (res.statusCode === 200) {
			                watiting.setTitle("安装中...");
			                plus.runtime.install(res.tempFilePath, {
			                    force: true
			                }, function (succ) {
								this.$u.vuex("vuex_version",this.newVersionInfo.versionName);
			                    plus.nativeUI.closeWaiting();
								plus.runtime.restart();
								return;
			                  /*  plus.nativeUI.alert('更新完成！', function () {
								let v= that.newVersionInfo.version;
								service.updateVersion(v);
								//热更新完成自动重启
			                     plus.runtime.restart();
			                    }); */
			                }, function (e) {
			                    plus.nativeUI.closeWaiting();
			                    plus.nativeUI.alert('更新失败', function () {
			                        plus.runtime.openURL(url);
			                        plus.runtime.quit();
			                    });
			                });
			            }
			        }
			    });
			    downloadTask.onProgressUpdate((res) => {
					 watiting.setTitle("正在下载...");
			      //  watiting.setTitle("已下载：" + res.progress + "%");
			    });
			},
		}
	}
</script>

<style scoped lang="scss">
	.u-full-content {
		background-color: #00C777;
	}
	
	.u-update-content {
		font-size: 26rpx;
		color: $u-content-color;
		line-height: 1.7;
		padding: 30rpx;
	}
</style>
