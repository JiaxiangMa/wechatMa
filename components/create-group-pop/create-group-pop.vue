<template>
	<view>
		<u-popup :custom-style="customStyle"
				 v-model="groupModelFlag" mode="bottom"
				 :mask="false"
				 :height="(windowHeight)+'px'" :mask-close-able="false">
			<view class="pop-content" :style="'height:'+(windowHeight)+'px'">
				<view  class="qr-pop-class" :style="'height:'+(windowHeight*0.8)+'px'">
					<view class="qr-pop-class">
						<view>
							<avatar ref='avatar' selWidth="600upx" selHeight="600upx" @upload="myUpload"
								:avatarSrc="newGroup.chatGroupAvatar?newGroup.chatGroupAvatar:'/static/image/login/logo.png'"
								avatarStyle="width:300upx; height: 300upx;">
							</avatar>
							<view class="u-tips-color" style="text-align: center;">
								<text>点击头像上传</text>
							</view>
						</view>
						<view class="u-m-t-40">
						   <u-field v-model="newGroup.chatGroupName"
									placeholder="请输入群名称" 
									label="群名称"
									label-width="100" 
									required 
									border-top
									:error-message="errorMessage1"
									border-bottom trim></u-field>
							<u-field v-model="newGroup.maxCount" 
									placeholder="不限制群人数"
									label="群人数"
									label-width="100" 
									border-top
									border-bottom 
									trim></u-field>
						</view>
					</view>
					<view>
						<u-button type="success" @click="submitCreateGroup()">发起群聊</u-button>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
	export default {
		name:"create-group-pop",
		components: {
			avatar
		},
		props:{
			groupModelFlag:{
				type:Boolean,
				default:false
			},
			windowHeight:{
				type:Number,
				default:uni.getSystemInfoSync().windowHeight
			},
		},
		data() {
			return {
				customStyle:{
					backgroundColor:'#f0f0f0'
				},
				errorMessage1:'',
				errorMessage2:'',
				newGroup:{
					chatGroupName:'',
					maxCount:500,
					chatGroupAvatar:""
				}
			};
		},
		methods:{
			closeModel:function(){
				this.$emit("closeModel");
			},
			submitCreateGroup:function(){
				let that=this;
				if(this.newGroup.chatGroupName.length<1){
					this.errorMessage1="群名称不能为空!";
					setTimeout(function(){
						that.errorMessage1="";
					},3000);
					return;
				}
				/* if(this.newGroup.maxCount==""){
					this.newGroup.maxCount=-1;
				} */
				this.$emit("submitCreate",this.newGroup);
			},
			//上传返回图片
			myUpload(rsp) {
				let that=this;
				let obj = {
					type: "img",
					filePath: rsp.path,
					savePath: "/useravatars"  //文件存放目录
				}
				this.globalUtil.globalUpload(that,{
					param:obj,
					success: (res1) => {
						console.log("上传成功",res1);
						let avatar= res1.result.url;
						this.newGroup.chatGroupAvatar=avatar;
					},
					fail:(res1) => {
						console.log("上传失败",res1);
					},
					complete: (res1) => {
						console.log("上传完成",res1);
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pop-content{
		padding-top: 8%;
		background-color: #f0f0f0;
	}
	.qr-pop-class{
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		align-items: center;
		width: 100%;
	}
</style>
