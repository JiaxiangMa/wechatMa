<template>
	<view>
		<u-popup v-model="popShowFlag" mode="bottom" border-radius="14"
				 :height="(innerWindowHeight)+'px'" :mask-close-able="false">
				 <view style="padding-top: 10%;">
					 <view class="u-p-30 u-flex u-row-between u-col-center u-border-bottom" @click="closePopUp()">
						<view>
							<u-icon name="close" size="34"></u-icon>
						</view> 
						 <view style="font-size: 34rpx;font-weight: bold;">{{innerRecordTitle}}</view>
						 <view @click="saveShareMsg()"> 
							<u-icon  name="more-dot-fill" color="#606266" size="40"></u-icon>
						 </view>
					 </view>
					<scroll-view v-if="contentList.length>0"
								 :scroll-y="true" class="hidden-scroll-bar" 
								 :style="'height:'+scrollViewHeight+'px'">
						<view v-for="(msgItem,index) in contentList" :key="index">
							<inner-chat-item :chatGroupType="1" :showCheck="false"  :item="msgItem"  :previewSrcArr="previewSrcArr"></inner-chat-item>
						</view>
					</scroll-view>
				</view>	
		</u-popup>
	</view>
</template>

<script>
	import innerChatItem from '@/components/chat-item/inner-chat-item.vue';
	const weixinShare = uni.requireNativePlugin('AThree-weixinShare');
	export default {
	    components:{
			innerChatItem
		},
		props:{
			innerRecordTitle:'',
			contentObjStr:{
				type: String,
				default:'',
			}
		},
		data() {
			return {
				contentList:[],	 //信息记录
				scrollViewHeight:0,
				popShowFlag:false,
				innerWindowHeight:0,
				headerHeight:0,
				saveObj:'',
				previewSrcArr:[],
			};
		},
		mounted:function(option){
			let that=this;
			let pageHeight= this.$u.sys().windowHeight;
			that.innerWindowHeight =pageHeight;
			that.scrollViewHeight =pageHeight * 0.88;
			if(that.contentObjStr.length>0){
				let contentObj=JSON.parse(that.contentObjStr);
				let contentStr= contentObj.content;
				let contentList= JSON.parse(contentStr);
				that.contentList=contentList;
				that.popShowFlag=true;
				console.log("contentList",that.contentList);
				that.contentList.sort(function(x,y){
					if(x.id<y.id){
						return -1;
					}else{
						return 1;
					}
				})
				that.contentList.map(function(item){
				   if(item.contentType==2||item.contentType==11){
					   that.messageApi.saveLocal(item);
					   let imageObj=JSON.parse(item.content);
					   let src=imageObj.url;
					   that.previewSrcArr.push(src);
				   }
				})
			}
		},

		methods:{
			//解析分享内容
			parseChatRecord: function(content) {
				let userName = content.userName;
				let contentType = content.contentType;
				let innerContent = content.content;
				let str = userName + ": [不可识别的信息类型]";
				switch (contentType) {
					case 1:
						let text = JSON.parse(innerContent).text;
						text = text.replace(/face/g, '');
						str = userName + ": " + text;
						break;
					case 2:
						str = userName + ": [图片]";
						break;
					case 3:
						str = userName + ": [视频]";
						break;
					case 4:
						str = userName + ": [语音]";
						break;
					case 5:
						str = userName + ": [文件]";
						break;
					case 7:
						str = userName + ": [红包]";
						break;
					case 8:
						str = userName + ": [名片]";
					case 9:
						str = userName + ": [位置]";
						break;
					case 10:
						str = userName + ": [聊天记录]";
						break;
					case 11:
						str=userName+": [图文信息]";
						break;
					case 12:
						str=userName+": [视频文字混合]";
						break;		
					default:
						break;
				}
				return str;
			},
			closePopUp:function(){
				let that=this;
				console.log("关闭")
				that.popShowFlag=false;
				that.$emit("closeRecordPop",false);
			},
			
			//保存分享的记录
			saveShareMsg:function(){
				let that=this;
				let param={
					content:that.contentObjStr,
					msgId:JSON.parse(that.contentObjStr).id,
					href:that.innerRecordTitle,
				}
				that.$u.api.chatGroup.saveShareMsg(param).then(res => {
					console.log("保存记录结果",res);
					if(res.code==200){
					   let data=res.data;
					   that.saveObj=data;
					   that.openProviderAction();
					}else{
						that.globalUtil.utilAlert("分享保存失败!");
						return;
					}
				});
			},
			
			
			//打开选择器
			openProviderAction:function(){
				let that=this;
				let platfrom= this.$u.os();
				if('ios'==platfrom){
					that.iosShare();
					return;
				}else if("android"===platfrom){
					this.androidShare(1);
					return;
				}else{
					that.globalUtil.utilAlert("不支持此操作!");
					return;
				}
			},
			//分享到苹果
			iosShare:function(){
				let that=this;
				if(that.saveObj!=null&&that.saveObj.id){
					let jiaMiID= btoa("Tomato_"+that.saveObj.id);
					//console.log("加密后的",jiaMiID);
					let href=that.vuex_app_config.shareURL+"/index.html#/pages/tabbar/home?shareID="+jiaMiID;
					let encodeUrl= encodeURI(href);
					console.log("encodeUrl",encodeUrl);
					plus.share.sendWithSystem(
						{
							type:'web',
							title:this.navbarTitle,
							content:this.shareContent,
							href:href,
							thumbs:[that.vuex_app_config.shareIcon?that.vuex_app_config.shareIcon:'/static/image/login/login-icon.png']
						},
						function(){
							console.log('分享成功');
						},
						function(e)
						{
							console.log('分享失败：'+JSON.stringify(e));
						}
					);
				}else{
					this.globalUtil.utilAlert("分享保存失败!");
				}
			},
		
			//分享
			androidShare:function(providerId){
				let that=this;
				let data= that.saveObj;
				if(data!=null&&data.id){
					let jiaMiID= btoa("Tomato_"+data.id);
					console.log("加密后的",jiaMiID);
					let href=that.vuex_app_config.shareURL+"/index.html#/pages/tabbar/home?shareID="+jiaMiID;
					if(providerId==1){
						this.weixinShareNative(href);
					}else{
						console.log("分享到qq");
						this.globalUtil.utilAlert("暂不支持分享");
					}
				}
				else{
					this.globalUtil.utilAlert("分享保存失败!");
				}
			},
			//分享到安卓
			weixinShareNative(href) {
				console.log("分享",href);
			    let shareObj = {
					appid: '',
					apppackage: '',
					url: href,
					title:this.navbarTitle,
					flag:'2',
					content:this.shareContent,
					icon: this.vuex_app_config.shareIcon?this.vuex_app_config.shareIcon:'/static/image/login/login-icon.png',
			    };
				let jsonShareObj = JSON.stringify(shareObj);
				weixinShare.shareAppURL(jsonShareObj,this.shareCallback);
			  },
			
			//分享回调
			shareCallback() {
			   uni.showToast({
				title: 'success'
			   });
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
<style>
	page {
		background-color: #f1f1f1;
	}
</style>
