<template>
	<view>
		<view>
			<u-navbar :is-back="false" title="" :background="{backgroundColor:'#f1f1f1'}">
				<view class="custom-navbar">
					<view class="nav-left u-font-32" @click="customBack">
						<u-icon  name="arrow-left" color="#000000" size="34"></u-icon>
					</view>
					<view class="nav-center u-flex u-row-center u-col-center">
						<view class="u-line-1" style="max-width: 500rpx;">{{navbarTitle}}</view>
					</view>
					<view class="nav-right"  @click="openProviderAction">
						<!-- <u-icon @click="openProviderAction" name="more-dot-fill" color="#606266" size="40"></u-icon> -->
						<text>分享</text>
					</view>
				</view>
			</u-navbar>
		</view>
		<scroll-view v-show="forceShareFlag==false" 
					:scroll-y="true" class="hidden-scroll-bar" :style="'height:'+scrollViewHeight+'px'">
			<view v-for="(msgItem,index) in contentList" :key="index">
				<chat-item :chatGroupType="1" :showCheck="false"  :item="msgItem" :previewSrcArr="previewSrcArr">
				</chat-item>
			</view>
		</scroll-view>
		<u-action-sheet :list="providerList" v-model="providerShow" :tips="titleObj"
						:mask-close-able="false"
						@click="providerClick" :cancel-btn="false"></u-action-sheet>
		
		<u-modal v-model="forceShareFlag" :mask-close-able="false"
				width="90%"	:content-style="{'fontSize':'32rpx','color':'#000000'}"
				:show-title="false" content="亲~分享后才可以查看内容~"
				:show-confirm-button="true" confirm-text="去分享"
				@confirm="openProviderAction" @cancel="cancelShare"
				:show-cancel-button="true" cancel-text="放弃浏览"></u-modal>
	</view>
</template>

<script>
	const weixinShare = uni.requireNativePlugin('AThree-weixinShare');
	import chatItem from '@/components/chat-item/chat-item.vue';
	export default {
	  components:{
	    chatItem
    },
		data() {
			return {
				forceShareFlag:false,
				contentList:[],	 //信息记录
				contentObjStr:"",//保存到数据库的记录
				shareContent:"", //分享出去的展示
				navbarTitle:"聊天记录",
				scrollViewHeight:0,
				providerShow:false,
				titleObj: {
					text: '分享到',
					color: '#000000',
					fontSize: 28
				},
				providerList:[
					{text: '微信',value:1},
					{text: 'QQ',value:2},
				],
				saveObj:null,
				previewSrcArr:[],
			};
		},
		onReady() {
			let scrollViewHeight = this.$u.sys().windowHeight * 0.88;
			this.scrollViewHeight = scrollViewHeight;
		},
		onLoad:function(option){
			let that=this;
			this.previewSrcArr=[];
			if(option.navbarTitle){
				this.navbarTitle=option.navbarTitle;
			};
			let contentObjStr= option.chatRecordContentObj;
			if(contentObjStr){
				this.contentObjStr=contentObjStr;
				let contentObj=JSON.parse(decodeURIComponent(contentObjStr));
				//console.log("当前对象",contentObj);
				let contentStr= contentObj.content;
				let contentList= JSON.parse(contentStr);
				this.contentList=contentList;
				//console.log("聊天记录",this.contentList);
				this.contentList.sort(function(x,y){
					if(x.id<y.id){
						return -1;
					}else{
						return 1;
					}
				})
				this.contentList.map(function(item){
				   let contentType=item.contentType;
				   that.saveLocal(item);					
				   if(item.contentType==2||item.contentType==11){
					   let imageObj=JSON.parse(item.content);
					   let src=imageObj.url;
					   that.previewSrcArr.push(src);
				   }
				})
				this.shareContent=this.formatShareContent();
				//console.log("this.shareContent",this.shareContent);
				this.getShareMsgByUserId();
			}
		},

		methods:{
			getShareMsgByUserId:function(){
				let that=this;
				let param={
					msgId:JSON.parse(this.contentObjStr).id,
				};
				that.$u.api.chatGroup.getShareMsgByUserId(param).then(res => {
					console.log("是否已经分享过",res);
					if(res.code==200){
					   let data=res.data;
					   this.forceShareFlag=!data;
					}else{
						this.forceShareFlag=true;
						return;
					}
				});
			},
			
			customBack: function() {
				uni.navigateBack();
			},
			//格式化分享的内容字符串
			formatShareContent:function(){
				let that=this;
				let parseStr="";
				let contentList=JSON.parse(JSON.stringify(this.contentList));
				for (let i = 0; i < contentList.length; i++) {
					let contentObj= contentList[i];
					//let msgObj= JSON.parse(contentObj);
					//console.log("msgObj",contentObj);
					let str= this.parseChatRecord(contentObj);
					parseStr=parseStr+str+"\r\n";
				}
				//console.log("parseStr",parseStr);
				return parseStr;
			},
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
						//let transText= this.globalUtil.transform(text, "", "");
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


			cancelShare:function(){
				uni.navigateBack();	
			},
			//打开选择器
			openProviderAction:function(){
				let that=this;
				that.forceShareFlag=false;
				let platfrom= this.$u.os();
				if('ios'==platfrom){
					let param={
						content:this.contentObjStr,
						msgId:JSON.parse(this.contentObjStr).id,
						href:this.navbarTitle,
					}
					that.$u.api.chatGroup.saveShareMsg(param).then(res => {
						console.log("保存记录结果",res);
						if(res.code==200){
						   let data=res.data;
						   that.saveObj=data;
						   that.iosShare();
						}else{
							that.globalUtil.utilAlert("分享保存失败!");
							return;
						}
					});
					return;
				}else if("android"===platfrom){
					//that.providerShow=true;//弹窗选择分享到微信还是QQ
					that.providerClick(0);
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
			//选择分享平台
			providerClick:function(index){
				let that=this;
				let provideId= this.providerList[index].value;
				let provideText=this.providerList[index].text;
				console.log("安卓分享到"+provideText);
				let param={
					content:this.contentObjStr,
					msgId:JSON.parse(this.contentObjStr).id,
					href:this.navbarTitle,
				}
				that.$u.api.chatGroup.saveShareMsg(param).then(res => {
					console.log("保存记录结果",res);
					if(res.code==200){
					   let data=res.data;
					   that.saveObj=data;
					   this.androidShare(provideId);
					}else{
						that.globalUtil.utilAlert("分享保存失败!");
						return;
					}
				});
				return;
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
						this.qqShareNative(href);
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
			
			
			qqShareNative(href) {
				let that=this;
				console.log("分享",href);
			    let shareObj = {
					appid:'',//102031944
					apppackage:'',//com.tomato.chat
					url:href,
					title:this.navbarTitle,
					content:this.shareContent,
					icon:this.vuex_app_config.shareIcon?this.vuex_app_config.shareIcon:'/static/image/login/login-icon.png',
			    };
				console.log("分享到QQ的参数",shareObj);
				//let jsonShareObj = JSON.stringify(shareObj);
				weixinShare.qqShare(shareObj,this.shareCallback);
			},
			

			//分享回调
			shareCallback() {
			   uni.showToast({
				title: '成功',
				duration:3000,
			   });
			},
			//将图片，视频信息放入缓存中
			saveLocal:function(messageObj){
				let that=this;
				let msgId= messageObj.id;
				let contentType= messageObj.contentType;
				let contentObj=JSON.parse(messageObj.content);
				switch (contentType+''){
					case "2":
						let url =contentObj.url;
						//console.log("聊天记录文件存入缓存",url);
						that.messageApi.setImageLocalSrc(url,msgId);
						break;
					case "3":
						let subImgInfo = contentObj.subImgInfo;
						if (subImgInfo) {
							let url= subImgInfo.url;
							//console.log("聊天记录文件存入缓存",url);
							that.messageApi.setImageLocalSrc(url,msgId);
						}
						break;
					case "4":
						break;
					case "11":
						break;
					case "12":
						break;
					default:
						break;
				};
			},
		}
	}
</script>

<style lang="scss" scoped>
	.custom-navbar {
		width: 100%;
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		padding: 0 30rpx;

		.nav-left {
		
		}

		.nav-center {
			font-size: 36rpx;
			font-weight: bold;
			
		}

		.nav-right {
		
		}
	}
</style>
<style>
	page {
		background-color: #f1f1f1;
	}
</style>
