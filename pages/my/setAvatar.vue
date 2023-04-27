<template>
	<view>
		<u-navbar title="个人头像" :border-bottom="false"></u-navbar>
		<view style="width: 100%;padding: 30% 20rpx;text-align: center;color: #909399;">
			<avatar ref='avatar' selWidth="600upx" selHeight="600upx" @upload="myUpload" 
			:avatarSrc="vuex_userInfo.avatar?vuex_userInfo.avatar:useravatar"
				avatarStyle="width:500upx; height: 500upx;">
			</avatar>
			<view>点击更新头像</view>
		</view>
	</view>
</template>

<script>
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
	export default {
		components: {
			avatar
		},
		data() {
			return {
				background: {
					backgroundColor: '#000000',
				},
				useravatar:'',
			};
		},
		methods: {
			//上传返回图片
			myUpload(rsp) {
				 //自己的服务器
				 let uploadFileUrl = this.$u.api.multipartAddress.updload;
				//阿里云oss
				//let uploadFileUrl = this.$u.api.multipartAddress.uploadAliYun;
				let obj = {
					type: "img",
					filePath: rsp.path,
					uploadUrl: uploadFileUrl+"/useravatars"  //自己的服务器
					//uploadUrl: uploadFileUrl+"/useravatars" //阿里云
				}
				this.uploadFile(obj);
			},
			updateUserInfo:function(){
				let that=this;
				let param=this.vuex_userInfo;
				this.$u.api.imUser.updateUserInfo(param).then(res => {
					console.log("修改用户头像结果",res);
					if(res.code==200){
						/* if(res.data!=null&&res.data.avatar!=null&&res.data.avatar!=undefined&&res.data.avatar.length>0){
							let _url = that.$u.api.multipartAddress.getFileByPath + res.data.avatar;
							console.log("修改后的用户头像",_url);
							this.$u.vuex("vuex_userInfo.avatar",_url);
						} */
					}
				})
			},
			
			//上传文件到服务器
			uploadFile(obj) {
				console.log("上传文件的参数", obj);
				let that = this;
				let uploadUrl = obj.uploadUrl;
				let filePath = obj.filePath;
				let isSuccess = false;
				let sizeError = 0;
				if (uploadUrl && filePath) {
					let msg = {};
					const uploadTask = uni.uploadFile({
						url: uploadUrl,
						filePath: filePath,
						name: 'fileName',
						header: {
							'Access-Control-Allow-Origin': '*',
							'TOKEN_OA': this.vuex_token,
						},
						success: (uploadFileRes) => {
							if (uploadFileRes.statusCode == 200 && uploadFileRes.data.length > 0) {
								let resObj = JSON.parse(uploadFileRes.data);
								console.log("文件上传响应回调数据", resObj);
								if (resObj.code == 200) {
									let _url = that.$u.api.multipartAddress.getFileByPath + resObj.data;//自己的服务器
									//let _url=resObj.data;//阿里云
									that.$u.vuex('vuex_userInfo.avatar',_url);
									that.useravatar=_url;
									msg.url = _url;
									// 文件后缀
									let suffix = resObj.data.substring(resObj.data.lastIndexOf('.') + 1, resObj
										.data.length);
									if (obj.type == "img") {
										msg.fileName = resObj.data;
										msg.fileSuffix = suffix;
										msg.fileUrl = _url;
										msg.contentType = 2;
									} else if (obj.type == "voice") {
										msg.length = obj.length;
										msg.fileSuffix = suffix;
										msg.fileName = resObj.data;
										msg.fileUrl = _url;
										msg.contentType = 3;
										msg.text = "audio" + "[" + _url + "]";
										msg.during = obj.during;
									} else if (obj.type == "file") {
										msg.fileSuffix = obj.fileSuffix;
										msg.fileName = obj.fileName;
										msg.fileUrl = _url;
										msg.text = 'file(' + _url + ')[' + obj.fileName + ']';
										msg.contentType = 5;
									} else if (obj.type == "video") {

									} else {

									};
									isSuccess = true;
									uni.hideLoading();
									that.globalUtil.utilAlert("上传成功!");
									console.log("msg",msg);
									that.updateUserInfo();
								} else {
									that.globalUtil.utilAlert("文件错误");
									return;
								}
							} else {
								that.globalUtil.utilAlert("文件错误");
								return;
							}
						},
						fail: function() {
							if (isSuccess == false && sizeError == 1) {
								uni.showModal({
									title: '提示:',
									confirmText: '我知道了',
									cancelText: '重新上传',
									confirmColor: '#007AFF',
									cancelColor: '#48CC94',
									content: "【失败! 文件上传不允许超出300M...】",
									success: function(res) {
										if (res.confirm) {
											console.log('用户点击确认按钮');
										} else if (res.cancel) {
											console.log("取消上传");
										}
									}
								});
							} else {
								that.globalUtil.utilAlert("文件上传异常");
							}
							uni.hideLoading();
							return;
						}
					});
					uploadTask.onProgressUpdate((res) => {
						if (res.totalBytesExpectedToSend > 314572800) {
							sizeError = 1;
							uploadTask.abort();
							return;
						} else {
							msg.fileSize = this.globalUtil.byteConvert(res.totalBytesExpectedToSend);
						}
					});
				} else {
					this.globalUtil.utilAlert("上传文件的参数丢失");
					console.log("上传文件的参数丢失");
					return;
				}
			},
		}
	}
</script>

<style lang="scss">
	page {
		// background-color: #000000;
	}
</style>
