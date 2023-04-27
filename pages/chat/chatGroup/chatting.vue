<template>
	<view class="chatting-container">
		<!-- 自定义导航栏 -->
		<view>
			<u-navbar :is-back="false" title="" :background="{backgroundColor:'#f1f1f1'}">
				<view class="custom-navbar">
					<view class="nav-left" @click="customBack">
						<u-icon name="arrow-left" color="#000000" size="34"></u-icon>
					</view>
					<view class="nav-center u-flex u-row-center u-col-center">
						<view>{{currentChatGroup.chatGroupName}}</view>
						<view v-if="currentChatGroup.memberCounts!=undefined&&currentChatGroup.chatGroupType!=0">
							{{"("+currentChatGroup.memberCounts+")"}}
						</view>
						<view v-if="currentChatGroup.memberTipStatus==1">
							<u-icon v-show="currentChatGroup.memberTipStatus==1" name="/static/image/chat/pinbi.png"
								color="#c0c4cc" size="28"></u-icon>
						</view>
					</view>
					<view class="nav-right" @click="toGroupDetail">
						<u-icon name="more-dot-fill" color="#000000" size="34"></u-icon>
					</view>
				</view>
			</u-navbar>
		</view>
		<view style="width: 100%;" class="u-flex u-row-center u-col-center">
			<u-loading :show="loadingmMore" mode="flower" size="38"></u-loading>
		</view>
		<!-- 公告 -->
		<view style="position: fixed;z-index: 1000;width: 100%;"
			v-if="loadingmMore==false&&currentChatGroup.advShowFlag==2&&currentChatGroup.chatNotice!=null&&currentChatGroup.chatNotice.length>0">
			<u-notice-bar @close="closeAdvFlag" padding="20rpx 24rpx" close-icon speed="180" type="success"
				:list="currentChatGroup.chatNotice.split(',')"></u-notice-bar>
		</view>
		<!-- 信息盒子 -->
		<view class="msg-container" v-show="messageList.length>0">
			<scroll-view :scroll-y="true" class="msg-box-scroller" :style="'height:'+scrollViewHeight+'px'"
				:scroll-into-view="scrollIntoView" @scrolltoupper="loadMoreHistoryMsg"
				:scroll-with-animation="scrollAnimation" @scroll="scrollViewScrolling" @touchstart="hideDrawer">
				<view class="message" v-for="(item, index) in messageList" :key="index" :id="'msg_'+item.id">
					<!-- 系统信息 -->
					<!-- &&JSON.parse(item.content).optionType!=-2 加上这个判断以后撤回提醒信息就看不到了 -->
					<view v-if="item.msgType==2" class="sys-msg-box">
						<view style="text-align: center;color:#909399;">{{item.createTime.substring(10,16)}}</view>
						<view style="text-align: center;color:#909399;">{{parseContent(item)}}</view>
					</view>
					<!-- 信息时间展示 -->
					<view v-else class="sys-msg-box u-m-b-30" v-show="index%10==0">
						<view style="text-align: center;color:#909399;">{{item.createTime.substring(10,16)}}</view>
					</view>
					<!-- 用户名 -->
					<view v-if="item.msgType==1" class="message-item " :class="item.meFlag ? 'right' : 'left'"
						style="margin-bottom: 4rpx; color:#909399;font-size: 24rpx;">
						<text v-if="currentChatGroup.chatGroupType!=0"
							:class="item.meFlag?'marginLeft-100':'margentRight-100'">{{item.userName}}</text>
					</view>
					<view v-if="item.msgType==1" class="message-item " :class="item.meFlag ? 'right' : 'left'">
						<!-- 用户头像 -->
						<u-image :style="currentChatGroup.chatGroupType!=0?'position: relative;top: -16rpx;':''"
							:src="item.userAvatar" :width="80" :height="80" :border-radius="5" :lazy-load="true"
							@click="showPersonalInfo(item)">
							<view slot="error">
								<u-icon name="chat-fill" color="#19be6b" size="64"></u-icon>
							</view>
							<u-loading slot="loading"></u-loading>
						</u-image>
						<!-- contentType = 1 文本信息 -->
						<view class="content" v-if="item.contentType == 1" @longpress="showToolTip($event,index)">
							<view class="richTextImg">
								<!-- <rich-text :nodes="parseContent(item)" :selectable="false" preview="false"></rich-text> -->
								<u-parse :html="parseContent(item)"
									:tag-style="{'img':'width:26px;height:26px;position:relative;top: 10rpx;'}">
								</u-parse>
							</view>
						</view>

						<!--  图片信息 -->
						<view v-if="item.contentType == 2" @tap="showPic(item)" @longpress="showToolTip($event,index)"
							class="content contentType3">
							<u-image :width="parseImgSize(item,'w')" :height="parseImgSize(item,'h')" :lazy-load="false"
								mode="widthFix" :src="parseContent(item)">
								<u-loading slot="loading"></u-loading>
							</u-image>
						</view>

						<!-- 视频信息 -->
						<view v-if="item.contentType == 3" @click="boFangVideo(item)"
							@longpress="showToolTip($event,index)" class="content contentType3">
							<view>
								<image :src="parseContent(item)" :style="(parseContent(item)==''?'background-color:#000000;':'')+
									'width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx'">
								</image>
							</view>
							<view class="u-flex u-row-center u-col-center"
								:style="'width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx;margin-top:-'+parseImgSize(item,'h')+'rpx;'">
								<u-icon name="play-circle-fill" color="#f0f0f0" :size="80"></u-icon>
							</view>
						</view>
						<!-- 语音信息   -->
						<view v-if="item.contentType == 4" @tap="handleAudio(item)"
							@longpress="showToolTip($event,index)" class="content contentType2"
							:class="[{ 'content-type-right': item.meFlag }]" hover-class="contentType2-hover-class"
							:style="{width:`${130+(JSON.parse(item.content).contentDuration*2)}rpx`}">
							<view class="voice_icon" :class="[
										{ voice_icon_right: item.meFlag },
										{ voice_icon_left: !item.meFlag },
										{ voice_icon_right_an: item.anmitionPlay && item.meFlag },
										{ voice_icon_left_an: item.anmitionPlay && !item.meFlag }
									]"></view>
							<view class="">{{JSON.parse(item.content).contentDuration}}''</view>
						</view>

						<!-- 文件信息 -->
						<view v-if="item.contentType==5" class="content contentType5"
							@longpress="showToolTip($event,index)" @click="previewFile(item)">
							<view class="u-flex u-row-between u-col-center" style="padding: 20rpx 10rpx 5rpx 20rpx;">
								<view style="width: 300rpx;">
									<view class="u-line-2  u-p-b-10" style="width: 300rpx;font-size: 30rpx;">
										{{JSON.parse(item.content).fileName}}
									</view>
									<view class="u-m-t-10" style="font-size: 24rpx;color: #909399;">
										{{JSON.parse(item.content).fileSize}}
									</view>
								</view>
								<view>
									<view style="width: 90rpx;">
										<u-image v-if="JSON.parse(item.content).fileSuffix.indexOf('xls')!=-1"
											src="@/static/image/fileType/xls.png" width="80rpx" height="80rpx"
											mode="aspectFill">
										</u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='doc'"
											src="@/static/image/fileType/docx.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='txt'"
											src="@/static/image/fileType/txt.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='ppt'"
											src="@/static/image/fileType/ppt.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='pdf'"
											src="@/static/image/fileType/pdf.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='mp4'"
											src="@/static/image/chat/bofang.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileType=='ZIP'"
											src="@/static/image/fileType/zip.png" width="80rpx" height="80rpx"
											mode="aspectFill"></u-image>
										<u-image v-else-if="JSON.parse(item.content).fileSuffix==='img'"
											:src="JSON.parse(item.content).url" width="80rpx" height="80rpx"
											mode="aspectFill">
										</u-image>
										<u-image v-else-if="JSON.parse(item.content).fileType==='img'"
											:src="JSON.parse(item.content).url" width="80rpx" height="80rpx"
											mode="aspectFill">
										</u-image>
										<u-image v-else width="80rpx" height="80rpx"
											src="@/static/image/fileType/unknowfile.png" mode="aspectFill"></u-image>
									</view>
								</view>
							</view>
							<view style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;" class="u-border-top">聊呗
							</view>
						</view>
						<!-- 个人名片信息 -->
						<view v-if="item.contentType==8" class="content contentType5"
							@click="showUserInfoFromForward(item)" @longpress="showToolTip($event,index)">
							<view class="u-flex u-row-between u-col-center" style="padding: 20rpx 10rpx 10rpx 20rpx;">
								<view style="width: 300rpx;">
									<view class="u-line-2" style="width: 300rpx;font-size: 32rpx;">
										{{formatForwardUserInfo(item)}}
									</view>
								</view>
								<view>
									<view style="width: 90rpx;">
										<u-image v-if="JSON.parse(item.content).avatar!=null"
											:src="JSON.parse(item.content).avatar" width="80rpx" height="80rpx"
											mode="aspectFill">
											<view slot="error">
												<u-image src="@/static/image/chat/defaultPhoto.png" mode="aspectFill"
													width="80" height="80" border-radius="12">
												</u-image>
											</view>
										</u-image>
									</view>
								</view>
							</view>
							<view style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;" class="u-border-top">个人名片
							</view>
						</view>
						<!-- 位置信息 -->
						<view v-if="item.contentType==9" class="content contentType9">
							<view class="u-flex u-row-between u-col-center" @longpress="showToolTip($event,index)"
								@click="openLocation(item)">
								<view style="margin-left: -10rpx;">
									<u-icon name="map-fill" size="80" color="#19be6b"></u-icon>
								</view>
								<view style="margin-top:16rpx;margin-bottom: 8rpx;">
									<view class="u-line-2" style="max-height: 70rpx;">{{JSON.parse(item.content).name}}
									</view>
									<view class="u-line-2" style="font-size: 24rpx;color: #909399;margin-top: 10rpx;">
										{{JSON.parse(item.content).address}}
									</view>
								</view>
							</view>
						</view>
						<!-- 红包信息 -->
						<view v-if="item.contentType == 7"
							:style="(JSON.parse(item.content).receiveAllFlag==true||isReceive(item)==true)?'opacity: 0.5;':''"
							class="content contentType6" @longpress="showToolTip($event,index)"
							@click="openRedBag(item,index)">
							<view class="u-flex u-row-between u-col-center">
								<view class="u-m-r-20">
									<u-image v-if="JSON.parse(item.content).receiveAllFlag==false" mode="scaleToFill"
										src="/static/image/chat/redbag.png" width="70rpx" height="80rpx"></u-image>
									<u-image v-else mode="scaleToFill" src="/static/image/chat/redbag-open.png"
										width="70rpx" height="80rpx"></u-image>
								</view>
								<view style="font-size: 36rpx;min-width: 320rpx;">
									<view class="u-line-1">{{JSON.parse(item.content).redBagRemark}}</view>
									<view v-if="JSON.parse(item.content).receiveAllFlag==true"
										style="font-size: 12px;margin-top: 10rpx;">
										<text>已被领完</text>
									</view>
									<view v-else>
										<view v-if="isReceive(item)==true&&currentChatGroup.chatGroupType!=0"
											style="font-size: 12px;margin-top: 10rpx;">
											<text>已经领取</text>
										</view>
									</view>
								</view>
							</view>
							<view
								style="font-size: 24rpx;border-top: 1rpx solid #ffffff;margin-top: 20rpx;padding-top: 10rpx;">
								微信红包</view>
						</view>
						<!-- 折叠的聊天记录信息 -->
						<view v-if="item.contentType==10" class="content contentType5"
							@click="openChatRecord(item,index)" @longpress="showToolTip($event,index)">
							<view style="padding: 20rpx 10rpx 10rpx 20rpx;">
								<view style="width: 400rpx;">
									<view class="u-line-2" style="font-size: 32rpx;">{{parseChatRecordTitle(item)}}
									</view>
								</view>
								<view class="u-m-t-10 u-m-b-10">
									<view style="font-size: 28rpx;color: #aaaaaa;" class="u-line-1"
										v-for="(contentItem,contentIndex) in JSON.parse(item.content).splice(0,3)"
										:key="contentIndex">
										<text>{{parseChatRecord(contentItem)}}</text>
									</view>
									<view v-if="JSON.parse(item.content).length>3"
										style="font-size: 28rpx;color: #aaaaaa;">
										<text>......</text>
									</view>
								</view>
							</view>
							<view style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;" class="u-border-top">聊天记录
							</view>
						</view>
						<!-- 图文或者视频文字 -->
						<view v-if="item.contentType==11||item.contentType==12" class="content contentType-fixed">
							<view @longpress="showToolTip($event,index)">
								<view class="u-m-b-10">
									<u-parse :html="formatComponetContent(item,1)"
										:tag-style="{'img':'width:26px;height:26px;position:relative;top: 10rpx;'}">
									</u-parse>
									<!-- <rich-text :nodes="formatComponetContent(item,1)" :selectable="false" preview="false"></rich-text> -->
								</view>
								<!-- 图片文字组合-->
								<view v-if="item.contentType==11" @tap="showPic(item)"
									class="u-flex u-row-center u-col-center">
									<u-image :width="parseImgSize(item,'w')" :height="parseImgSize(item,'h')"
										:lazy-load="false" :border-radius="10" mode="widthFix"
										:src="formatComponetContent(item,2)">
										<u-loading slot="loading"></u-loading>
									</u-image>
								</view>
								<!-- 视频文字组合-->
								<view v-else class="u-flex u-row-left u-col-center">
									<view @click="boFangVideo(item)">
										<view>
											<image :src="formatComponetContent(item,2)" :style="(formatComponetContent(item,2)==''?'background-color:#000000;':'')+
												'width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx'">
											</image>
										</view>
										<view class="u-flex u-row-center u-col-center"
											:style="'width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx;margin-top:-'+parseImgSize(item,'h')+'rpx;'">
											<u-icon name="play-circle-fill" color="#f0f0f0" :size="80"></u-icon>
										</view>
									</view>
								</view>
							</view>
						</view>
						<!--音视频通话结果-->
						<view v-if="item.contentType==13" class="content">
							<!-- @click="launchSingleCalling(1)"-->
							<view class="u-flex u-row-left u-col-center"
								:style="item.meFlag?'flex-direction: row-reverse;':'flex-direction: row;'">
								<view class="u-m-l-16 u-m-r-16">
									<u-image src="/static/image/chat/audio-call.png" width="44rpx" height="44rpx">
									</u-image>
								</view>
								<view>{{parseVideoContent(item)}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>


		<!-- 底部模块盒子 -->
		<view class="content" v-show="wsOnlion">
			<view v-if="forbidFlag==true||(currentChatGroup.chatGroupStatus==2&&currentChatGroup.memberType==0)"  
				class="input-box">
				<view class="u-p-20" style="height: 100%; text-align:center;font-size: 32rpx;font-weight: bold;">
					<view>全员禁言中</view>
				</view>
			</view>
			<!-- 底部聊天输入框 -->
			<view v-else class="input-box">
				<view class="input-box-flex">
					<view>
						<image v-if="chatType === 'voice'" class="icon_img" :src="require('@/static/voice.png')"
							@click="switchChatType('keyboard')"></image>
						<image v-if="chatType === 'keyboard'" class="icon_img" :src="require('@/static/keyboard.png')"
							@click="switchChatType('voice')"></image>
					</view>
					<view class="input-box-flex-grow">
						<view class="textArea-box " v-if="chatType === 'voice'">
							<view v-if="fileRemarkObj.showFlag==true&&fileRemarkObj.fileInfo"
								style="width:100rpx;font-size: 28rpx;color:#fa3534">
								<text>[{{fileRemarkObj.tag}}]</text>
							</view>

							<scroll-view :scroll-y="true" :scroll-x="false" class="inputScroll" :show-scrollbar="true">
								<textarea :disabled="connError" style="text-indent:5upx;" auto-height="true"
									placeholder-style="color:#DDDDDD;" :cursor-spacing="10" :confirm-hold="true"
									confirm-type="send" :show-confirm-bar="false" :focus="inputFocusFlag"
									:auto-focus="false" :hold-keyboard="true" @blur="onBlur"
									@confirm="$noClicks(confirmSendText)" v-model="sendStr" :cursor="sendStr.length"
									:maxlength="-1" />
							</scroll-view>

						</view>

						<view class="voice_title" v-if="chatType === 'keyboard'" @touchstart.stop.prevent="startVoice"
							@touchmove.stop.prevent="moveVoice" @touchend.stop="endVoice"
							@touchcancel.stop="cancelVoice" :style="{ background: recording ? '#c7c6c6' : '#FFFFFF' }">
							{{ voiceTitle }}
						</view>
					</view>
					<!-- 功能性按钮 -->
					<view>
						<image class="icon_btn_add" :src="require('@/static/emoji.png')" @click="changeEmojiBox">
						</image>
					</view>
					<view>
						<image class="icon_btn_add" :src="require('@/static/add.png')" @click="changeDrawer"></image>
					</view>

					<view v-show="platos=='android'" @touchend.prevent="$noClicks(sendText)" class="send u-m-l-16"
						:class="chatType === 'voice'?'hidden':''">
						<u-button type="success" @tap="$noClicks(sendText)" :custom-style="customSendBtnStyle">
							<text>发送</text>
						</u-button>
					</view>
				</view>
				<view class="fun-box u-border-top" :class="{'show-fun-box':showFunBtn}">
					<u-grid :col="4" hover-class="contentType2-hover-class" :border="false" @click="clickGrid">
						<u-grid-item v-for="(item, index) in funList" :index="index" :key="index"
							:custom-style="{padding:'20rpx 0'}" bg-color="#f8f8f8">
							<view class="u-flex u-row-center u-col-center"
								style="background-color: #FFFFFF;width: 110rpx;height: 110rpx;border-radius: 30rpx;">
								<u-icon :name="item.icon" :size="60"></u-icon>
							</view>
							<view class="grid-text" style="font-size: 24rpx;">{{ item.title }}</view>
						</u-grid-item>
					</u-grid>
				</view>
				<view class="fun-box u-border-top" :class="{'show-fun-box':showEmojiBox}">
					<!-- 表情 :class="{hidden:hideEmoji}"-->
					<swiper class="emoji-swiper" indicator-dots="true" duration="150">
						<swiper-item v-for="(page,pid) in faceList" :key="pid">
							<view v-for="(em,eid) in page" :key="eid" @tap="addEmoji(em)">
								<image mode="widthFix" :src="'/static/emoji/'+em.url"></image>
							</view>
						</swiper-item>
					</swiper>
					<view v-if="showEmojiBox" style="padding:0rpx 20rpx;position: absolute;bottom: 1rpx;right: 10rpx;
												width: 250rpx;height: 150rpx;z-index: 1000;opacity: 0.9;" class="u-flex u-row-right u-col-center">
						<view class="u-flex u-row-center u-col-center"
							style="border: 1px solid #f1f1f1;border-radius: 10rpx; background-color: #82848a;width: 100rpx;padding: 15rpx 20rpx;margin-right: 8rpx;">
							<view @click="delSendStr()">
								<u-icon name="backspace" size="46" color="#ffffff"></u-icon>
							</view>
						</view>
						<view>
							<u-button @click="$noClicks(sendText)" type="success" :custom-style="{padding:'20rpx'}">发送
							</u-button>
						</view>
					</view>
				</view>
			</view>
			<!-- //语音动画 -->
			<view class="voice_an" v-if="recording">
				<view class="voice_an_icon">
					<view id="one" class="wave"></view>
					<view id="two" class="wave"></view>
					<view id="three" class="wave"></view>
					<view id="four" class="wave"></view>
					<view id="five" class="wave"></view>
					<view id="six" class="wave"></view>
					<view id="seven" class="wave"></view>
				</view>
				<view class="text">{{voiceIconText}}</view>
			</view>
		</view>

		<!-- 长按菜单 -->
		<chunLei-popups v-model="toolTipFlag" :popData="toolTipData" @tapPopup="tapPopup" :x="toolTipX" :y="toolTipY"
			direction="row" theme="dark" :dynamic="true">
		</chunLei-popups>

		<!-- 是否撤回信息弹窗 -->
		<u-popup v-model="delPopUpObj.isShow" ref="delPopup" border-radius="10rpx" mode="bottom" :mask="true">
			<view class="uni-tip-delMsg">
				<view class="uni-tip-content u-border-bottom"
					style="text-align: center;padding: 30rpx 0rpx;font-weight: bold;">确认撤回该条信息?</view>
				<view class="u-flex-col u-row-around u-col-center u-margin-top-20">
					<view class="uni-tip-button" style="color: red;" @click="delPopConfirm()">确定</view>
					<view
						style="width: 100%; height: 10rpx;line-height: 10rpx;background-color: #dcdfe6;margin: 20rpx 0rpx;">
						<u-line color="#dcdfe6" margin="1rpx" />
					</view>
					<view class="uni-tip-button" @click="delPopCancel()">取消</view>
				</view>
			</view>
		</u-popup>

		<!-- 红包领取情况 -->
		<u-popup mode="center" v-model="showRedPopFlag" :border-radius="20" :mask-close-able="false"
			@close="showRedPopFlag=false" height="1000rpx" width="90%">
			<view>
				<view class="u-border-bottom" style="text-align: center;color: #000000;padding: 20rpx;">
					<view style="font-size: 40rpx;font-weight: bold;" class="u-flex u-row-center u-col-center">
						<view class="u-m-r-20">
							<u-image :src="currentRedBag.avatar" width="70rpx" height="70rpx" :border-radius="10">
								<view slot="error">
									<u-icon name="chat-fill" color="#19be6b" size="64"></u-icon>
								</view>
							</u-image>
						</view>
						<view class="u-flex u-row-left u-col-center">
							<view class="u-line-1" style="max-width:  300rpx;">
								<text v-if="currentRedBag.currentUserId==vuex_userInfo.id">我</text>
								<text v-else>{{currentRedBag.currentUserName}}</text>
							</view>
							<view v-if="currentRedBag.redBagRule==1"
								style="margin-left: 8rpx; font-size: 26rpx;color: #fa9100;">拼</view>
						</view>
					</view>
					<view style="font-size: 32rpx;color: #909399;" class="u-m-t-20">{{currentRedBag.redBagRemark}}
					</view>
					<view v-if="currentChatGroup.chatGroupType!=0"
						style="font-size: 32rpx;text-align: left;color: #909399;">共{{currentRedBag.redBagNums}}个</view>
				</view>
				<scroll-view class="showRedPopScrollView u-m-b-20" :scroll-y="true" :scroll-x="false"
					style="height: 650rpx;">
					<view style="color: #000000;" v-if="receiveRedBagList.length>0">
						<view v-for="(record,index) in receiveRedBagList" :key="index"
							:style="record.userId==vuex_userInfo.id?'background-color:#f0f0f0;':''"
							class="u-flex u-row-between u-col-center u-p-20 u-border-bottom">
							<view class="u-flex u-row-left u-col-center">
								<view>
									<u-image :border-radius="10" :src="record.avatar" width="80rpx" height="80rpx">
									</u-image>
								</view>
								<view class="u-m-l-10">
									<view>
										<text v-if="record.userId==vuex_userInfo.id">我</text>
										<text v-else>{{record.userName}}</text>
									</view>
									<view style="color: #909399;margin-top: 6rpx;">{{record.createTime.substring(5,16)}}
									</view>
								</view>
							</view>
							<view style="text-align: right;">
								<view style="font-weight: bold;font-size: 32rpx;">{{record.tradeValue}}元</view>
								<view style="color: #fa9100;margin-top: 6rpx;"
									v-if="currentRedBag.redBagRule==1&&record.maxFlag==true&&currentRedBag.receiveAllFlag==true">
									<u-icon name="thumb-up-fill" :size="32" color="#fa9100" label="手气最佳"
										label-color="#fa9100"></u-icon>
								</view>
							</view>
						</view>
					</view>
					<view v-else style="text-align: center;color: #909399;font-size: 40rpx;margin-top: 200rpx;">
						<view v-if="currentRedBag.receiveAllFlag">
							<text>已领取~</text>
						</view>
						<view v-else>
							<text>待领取~</text>
						</view>
					</view>
				</scroll-view>
				<view class="u-flex u-row-center u-col-center u-p-20"
					style="width: 100%; position: absolute;bottom: 1rpx;">
					<u-icon @click="showRedPopFlag=false" name="close" size="40" label="关闭" label-pos="bottom"></u-icon>
				</view>
			</view>
		</u-popup>
		

		<!-- 断网重连 -->
		<ls-loading :text="reConnTips" animation="twinkle" v-if="reconnFlag"></ls-loading>

		<!-- 二维码解析结果界面 -->
		<template v-if="qrModelFlag">
			<qr-info-pop :qrModelFlag="qrModelFlag" :windowHeight="windowHeight" :qrModelInfo="qrModelInfo"
				@closeQRModel="closeQRModel"></qr-info-pop>
		</template>
		<!-- 视频预览 -->
		<view v-if="previewVideoFlag==true">
			<videoPlayer :previewVideoFlag="previewVideoFlag" :previewVideoSrc="previewVideoSrc"
				@quitPlay="stopPlayVideo()"></videoPlayer>
		</view>
	</view>
</template>

<script>
	import config from '@/common/environment.js';
	import permission from '@/util/mobilePermission/permission.js';
	const WEBSOCKET_SERVICE = config.WEBSOCKET_SERVICE;
	import {
		faceUtils
	} from '@/util/util.js';
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	import lsLoading from '@/uni_modules/ls-loading/components/ls-loading/ls-loading.vue';
	import qrInfoPop from '@/components/qr-info-pop/qr-info-pop.vue';
	import videoPlayer from '@/components/videoPlayer/videoPlayer.vue';
	var previewSrcArr = [];
	export default {
		components: {
			chunLeiPopups,
			qrInfoPop,
			videoPlayer
		},
		data() {
			return {
				timmer: null,
				reConnTips: "数据加载中...",
				reConntask: null,
				reconnFlag: false,
				noClick: true,
				platos: 'ios',
				socketTask: null,
				//当前群聊
				currentChatGroup: {
					id: '',
					chatGroupName: '群聊',
				},
				wsOnlion: false, //websocket是否在线,
				forbidFlag: false, //禁言
				pageNum: 1,
				pageSize: 15,
				messageList: [],
				scrollAnimation: false,
				scrollIntoView: '',
				loadingmMore: false,
				loadingMsg: true, //标识是否正在获取数据
				chatType: 'voice', // 图标类型 'voice'语音 'keyboard'键盘
				customSendBtnStyle: {
					padding: '10rpx 20rpx',
				},
				sendStr: '', //发送的文字信息
				Recorder: uni.getRecorderManager(),
				Audio: uni.createInnerAudioContext(),
				recording: false, //标识是否正在录音
				isStopVoice: false, //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
				voiceInterval: null,
				voiceTime: 0, //总共录音时长
				canSend: true, //是否可以发送
				PointY: 0, //坐标位置
				voiceIconText: "正在录音...",
				voiceTitle: '按住 说话',
				AudioExam: null, //正在播放音频的实例
				showFunBtn: false, //是否展示功能型按钮
				showEmojiBox: false, //是否显示表情弹窗
				funList: [{
						id: 1,
						icon: "photo-fill",
						title: "照片",
						uploadType: ["album"]
					},
					{
						id: 2,
						icon: "camera-fill",
						title: "视频",
						uploadType: ["camera"]
					},
					{
						id: 3,
						icon: "/static/image/chat/video.png",
						title: "视频通话",
					},
					{
						id: 4,
						icon: "map-fill",
						title: "位置",
					},
					{
						id: 5,
						icon: "/static/image/chat/gird/redbag.png",
						title: "红包",
					},
					{
						id: 6,
						icon: "/static/image/chat/gird/zhuanzhang.png",
						title: "个人名片",
					},
					{
						id: 7,
						icon: "/static/image/chat/call.png",
						title: "语音通话",
					},
					{
						id: 8,
						icon: "/static/image/chat/dir.png",
						title: "文件",
						uploadType: ["camera"]
					},
					/* 		{
								id:9,
								icon: "/static/image/chat/gird/collcetion.png",
								title: "收藏",
							},
							{
								id:10,
								icon: "/static/image/chat/gird/voiceInput.png",
								title: "语音输入",
							}, */
				],
				addressObj: {
					chooseFlag: false,
				},
				showFileRemark: false,
				sendLoading: false,
				//发送视频,图片等信息的时候附带的备注信息
				fileRemarkObj: {
					showFlag: false,
					tag: "图片",
					fileInfo: null,
				},
				inputFocusFlag: false,
				windowHeight: 0,
				scrollViewHeight: 600,
				faceList: faceUtils.emojiList(),
				faceMap: faceUtils.faces(),
				connError: false,
				toolTipFlag: false,
				toolTipData: [],
				toolTipX: 0,
				toolTipY: 0,
				currentHandleMsg: {},
				delPopUpObj: {
					isShow: false,
					param: '',
				},
				currentRedBag: {},
				showRedPopFlag: false,
				receiveRedBagList: [],
				qrModelFlag: false,
				qrModelInfo: {},
				previewVideoFlag: false,
				previewVideoSrc: '',
				videoMsgFlag: true,
				autoBackToBottom:true, //有信息的时候是否回到底部位置
			};
		},
		created: function() {
			let scrollViewHeight = this.$u.sys().windowHeight - 160;
			this.windowHeight = this.$u.sys().windowHeight;
			this.scrollViewHeight = scrollViewHeight;
			if (uni.getSystemInfoSync().platform == "android") {
				this.platos = "android"
			} else {
				this.platos = "ios"
			}
			previewSrcArr=[];
		},
		watch: {
			scrollViewHeight(newVal, oldVal) {
				let that = this;
				if (that.messageList.length > 0) {
					that.scrollIntoView = "msg_" + that.messageList[that.messageList.length - 2].id;
					//console.log("当前位置", that.scrollIntoView);
					that.scrollAnimation = false;
					setTimeout(function() {
						that.scrollAnimation = true;
						that.scrollIntoView = "msg_" + that.messageList[that.messageList.length - 1].id;
						//console.log("最新位置", that.scrollIntoView);
					}, 500);
				}
			},
			messageList(newValue, oldValue) {
				//console.log("监听信息记录有变化", newValue.length);
				//多选的时候用vuex里面的信息记录
				this.$u.vuex("vuex_messageList", newValue);
			}
		},
		//监听信息滚动
		onReady() {
			let that = this;
			uni.onKeyboardHeightChange(res => {
				//如果键盘弹起
				if (res.height != 0) {
					this.showFunBtn = false;
					this.showEmojiBox = false;
					this.scrollViewHeight = this.$u.sys().windowHeight - res.height - 130;
				}
				//键盘收起
				else {
					if (!(this.showEmojiBox || this.showFunBtn)) {
						this.scrollViewHeight = this.$u.sys().windowHeight - 150;
					}
				}
			});
		},


		//页面加载获取群聊信息
		onLoad(option) {
			previewSrcArr=[];
			//console.log("聊天界面初始化参数", option);
			this.currentChatGroup.id = option.chatGroupId;
			this.currentChatGroup.id = option.chatGroupId;
			this.getChatGroupInfo(true);
			this.initWebScoket();
			//录音开始事件
			this.Recorder.onStart(e => {

				this.beginVoice();
			});
			//录音结束事件
			this.Recorder.onStop(res => {
				clearInterval(this.voiceInterval);
				this.handleRecorder(res);
			});

			//音频停止事件
			this.Audio.onStop(e => {
				this.closeAnmition();
			});

			//音频播放结束事件
			this.Audio.onEnded(e => {
				this.closeAnmition();
			});
		},
		//页面显示初始化
		onShow: function() {
			this.getChatGroupInfo(false);
		},
		onHide: function() {
			let that = this;
			that.Audio.stop();
		},
		onUnload() {
			let that = this;
			that.scrollIntoView = "";
			that.Audio.stop();
			that.closeWebScoket();
			previewSrcArr=[];
		},
		//监听返回
		onBackPress(options) {
			this.customBack();
			return true;
		},

		methods: {
			//自定义返回
			customBack: function() {
				this.Audio.stop();
				//退出聊天界面的时候也需要重置用户的未读信息为已读,因为存储的时候非发送者都是存的未读状态
				let chatGroupId = this.currentChatGroup.id;
				let currentUserId = this.vuex_userInfo.id;
				let paramData = {
					"chatGroupId": chatGroupId,
					"userId": currentUserId
				};
				this.$u.api.chatGroup.clearUnReadNum(paramData).then(res => {
					this.$u.route({
						url: "pages/chat/chatGroupList",
						type: 'switchTab'
					})
				})
			},
			//跳转群组详情
			toGroupDetail: function() {
				let that = this;
				if (that.connError) {
					that.globalUtil.utilAlert("您已被踢出群聊");
					return;
				}
				let param = {
					chatGroupId: that.currentChatGroup.id,
					chatGroupType: that.currentChatGroup.chatGroupType,
				};
				that.$u.route({
					url: 'pages/chat/chatGroup/chatDetail',
					params: param
				});
				return;
			},
			//获取群组信息
			getChatGroupInfo: function(historyMsgLoadFlag) {
				let that = this;
				let param = {
					chatGroupId: that.currentChatGroup.id
				};
				that.$u.api.chatGroup.getChatGroupInfo(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						that.currentChatGroup = data.imGroup;
						if (that.currentChatGroup.chatGroupStatus == 2) {
							this.forbidFlag = true;
						} else {
							this.forbidFlag = false;
						}
						//console.log("群信息", that.currentChatGroup);
						if(historyMsgLoadFlag){
							console.log("需要重新加载历史记录");
							that.getHistoryMessage();
						}
					} else {
						that.globalUtil.utilAlert("群信息获取失败");
						return;
					}
				})
			},
			//主动关闭websocket
			closeWebScoket: function() {
				let that = this;
				if (that.timmer) {
					console.log("清除心跳机制");
					clearInterval(that.timmer);
				};
				that.wsOnlion = false;
				if (!that.socketTask) {
					return;
				}
				that.socketTask.close({
					success(res) {
						that.wsOnlion = false;
						console.log("聊天界面websocket关闭成功", res)
					},
					fail(err) {
						console.log("聊天界面websocket关闭失败", err)
					}
				})
			},
			// 重连
			reconnect: function() {
				let that = this;
				if (that.wsOnlion) {
					that.reconnFlag = false;
					return;
				}
				that.reConnTips = "断线重连中...";
				that.reConntask = setTimeout(function() {
					that.wsOnlion = false;
					that.reconnFlag = true;
					that.initWebScoket(that.url);
				}, 3000);
			},
			//初始话websocket服务
			initWebScoket: function() {
				let that = this;
				let userId = that.vuex_userInfo.id;
				let chatGroupId = that.currentChatGroup.id;
				let url = WEBSOCKET_SERVICE + userId + "/" + chatGroupId;
				that.closeWebScoket();
				console.log("webSocket链接地址:" + url);
				that.socketTask = uni.connectSocket({
					url: url,
					success(data) {
						console.log("聊天长连接已建立完成");
					},
				});
				that.socketTask.onOpen(function(res) {
					console.log('WebSocket连接已打开！');
					that.wsOnlion = true;
					that.sendPingPong();
					if (that.reConntask) {
						that.scrollIntoView = "";
						that.pageNum == 1;
						that.getChatGroupInfo(true); //重新拉群数据信息,
						that.reConnTips = "数据加载中...";
						that.reconnFlag = false;
						clearTimeout(that.reConntask);
					}
					uni.hideLoading();
					that.socketTask.onMessage(function(res) {
						if (res.data == "pang") {
							//console.log("收到心跳回复信息");
						} else {
							//console.log("有收到新的后台信息", res);
							//delayFn(res);
							that.msgToScreen(res);
							that.sendLoading = false;
						}
					});
				});
				that.socketTask.onError(function(res) {
					console.log('WebSocket链接异常,请检查！');
					that.closeWebScoket();
					//异常断开,重连服务;
					uni.hideKeyboard();
					that.hideDrawer();
					setTimeout(function() {
						that.reconnect();
					}, 500)
				});
				that.socketTask.onClose(function(res) {
					console.log('WebSocket 已关闭！');
					that.wsOnlion = false;
				});
			},
			sendPingPong: function() {
				let that = this;
				that.timmer = setInterval(function() {
					if (that.wsOnlion == true) {
						that.socketTask.send({
							data: 'ping',
							success() {
								//console.log("webscoket发送[心跳]信息成功");
							},
							fail() {
								//console.log("webscoket发送[心跳]信息失败");
							}
						});
					}
				}, 10000);
			},
			//获取历史消息,带分页
			getHistoryMessage: function() {
				let that = this;
				that.messageList = [];
				that.globalUtil.utilLoading("页面加载中...");
				let param = {
					chatGroupId: that.currentChatGroup.id,
					pageNum: 1,
					pageSize: that.pageSize,
				};
				that.$u.api.chatGroup.getChatGroupHistoryMessage(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						if (data.length > 0) {
							for (var i = 0; i < data.length; i++) {
								let contentType = data[i].contentType;
								if (contentType == 4) {
									data[i].anmitionPlay = false;
								}
							}
							//console.log("信息列表",data);
							that.messageList = data.reverse();
							//渲染完成以后让滚动到底部
							setTimeout(function() {
								that.scrollIntoView = "msg_" + that.messageList[that.messageList
									.length -
									1].id;
								uni.hideLoading();
							}, 500);
						}
					} else {
						that.globalUtil.utilAlert("群信息获取失败");
						uni.hideLoading();
						return;
					}
				})
			},
			//向上滑动加载更多历史信息数据
			loadMoreHistoryMsg: function() {
				let that = this;
				/* 防止滑动太快,导致记录重复 */
				if (that.loadingmMore) {
					that.loadingmMore = false;
					console.log("=========防止滑动太快,导致记录重复=============");
					return;
				}
				that.pageNum++;
				let param = {
					chatGroupId: that.currentChatGroup.id,
					pageNum: that.pageNum,
					pageSize: that.pageSize,
				};
				console.log("上划加载更多历史数据分页参数", param);
				let oldScrollViewId = that.messageList[0].id;
				that.loadingmMore = true;
				that.$u.api.chatGroup.getChatGroupHistoryMessage(param).then(res => {
					if (res.code == 200) {
						let data = res.data;
						if (data != null && data.length > 0) {
							for (var i = 0; i < data.length; i++) {
								let contentType = data[i].contentType;
								if (contentType == 4) {
									data[i].anmitionPlay = false;
								}
							}
							let moreData = data.reverse();
							that.messageList = moreData.concat(that.messageList);
							setTimeout(function() {
								that.scrollIntoView = "msg_" + oldScrollViewId;
								setTimeout(function() {
									that.loadingmMore = false;
								}, 500);
							}, 500)
						} else {
							that.pageNum--;
							that.loadingmMore = false;
							return;
						}
					} else {
						that.pageNum--;
						that.loadingmMore = false;
						//that.globalUtil.utilAlert("暂无更多信息记录");
						return;
					}
				})
			},
			//操作项
			showToolTip: function(e, index) {
				if (this.forbidFlag) {
					return;
				}
				this.toolTipX = e.touches[0].clientX;
				this.toolTipY = e.touches[0].clientY;
				this.toolTipFlag = !this.toolTipFlag;
				this.currentHandleMsg = this.messageList[index];
				console.log("this.currentHandleMsg", this.currentHandleMsg);
				this.currentHandleMsg.msgIndex = index;
				let contentType = this.currentHandleMsg.contentType;
				if (this.currentHandleMsg.meFlag == false) {
					this.toolTipData = [{
							id: 1,
							icon: '/static/image/chat/copy.png',
							title: '复制',
							disabled: (contentType != 1)
						},
						{
							id: 2,
							icon: '/static/image/chat/zhuanfa.png',
							title: '转发',
							disabled: false
						},
						{
							id: 4,
							icon: '/static/image/chat/revert.png',
							title: '多选',
							disabled: false
						},
						{
							id: 5,
							icon: '/static/image/chat/collection.png',
							title: '收藏',
							disabled: false
						},
					]
					return;
				} else {
					let sendTimeMills = this.globalUtil.parseTime(this.currentHandleMsg.createTime).getTime();
					let nowTimeMills = new Date().getTime();
					let diff = nowTimeMills - sendTimeMills;
					console.log("diff", diff);
					let twoMinutes = 60 * 1000 * 2; //2分钟
					//let twoMinutes = 60 * 1000 * 60 * 24 * 30; //30天
					if (diff > twoMinutes) {
						console.log("不能撤回");
						this.toolTipData = [{
								id: 1,
								icon: '/static/image/chat/copy.png',
								title: '复制',
								disabled: (contentType != 1)
							},
							{
								id: 2,
								icon: '/static/image/chat/zhuanfa.png',
								title: '转发',
								disabled: false
							},
							{
								id: 4,
								icon: '/static/image/chat/checkbox.png',
								title: '多选',
								disabled: false
							},
							{
								id: 5,
								icon: '/static/image/chat/collection.png',
								title: '收藏',
								disabled: false
							},
							/* 	{id:3,icon:'/static/image/chat/revert.png', title:'撤回',disabled:true}, */
						]
						return;
					} else {
						this.toolTipData = [{
								id: 1,
								icon: '/static/image/chat/copy.png',
								title: '复制',
								disabled: (contentType != 1)
							},
							{
								id: 2,
								icon: '/static/image/chat/zhuanfa.png',
								title: '转发',
								disabled: false
							},
							{
								id: 3,
								icon: '/static/image/chat/revert.png',
								title: '撤回',
								disabled: false
							},
							{
								id: 4,
								icon: '/static/image/chat/checkbox.png',
								title: '多选',
								disabled: false
							},
							{
								id: 5,
								icon: '/static/image/chat/collection.png',
								title: '收藏',
								disabled: false
							},
						]
						return;
					}
				}
			},
			tapPopup(e) {
				let that = this;
				console.log(" that.currentHandleMsg", that.currentHandleMsg);
				//console.log("操作选项",e);
				if (e.title == "撤回") {
					that.revertMsg();
				}
				if (e.title == "复制") {
					let content = that.currentHandleMsg.content;
					if (content.length > 0) {
						let copyContent = JSON.parse(content).text;
						console.log("复制的内容", copyContent);
						let formatStr = this.replaceReseverEmoji(copyContent);
						console.log("复制转义后的内容", formatStr);
						that.globalUtil.uniCopy({
							content: formatStr,
							success: (res) => {
								uni.showToast({
									title: res,
									icon: 'none'
								})
							},
							error: (e) => {
								uni.showToast({
									title: e,
									icon: 'none',
									duration: 3000,
								})
							}
						})
					}
					that.toolTipFlag = false;
					return;
				}
				if (e.title == "转发") {
					that.toolTipFlag = false;
					that.$u.route({
						url: '/pages/chat/chatGroup/msgForward',
						params: {
							msgList:encodeURIComponent(JSON.stringify([that.currentHandleMsg])),
							sendType: 1, //1 单条转发 2多条转发
							fromChatGroupId: that.currentChatGroup.id
						}
					})
					return
				}
				if (e.title == "多选") {
					that.toolTipFlag = false;
					that.$u.route({
						url: '/pages/chat/chatting/chatting-checkbox',
						params: {
							groupId: that.currentChatGroup.id,
							pageNum: that.pageNum,
							selectMsgId: that.currentHandleMsg.id,
						}
					})
					return
				}
				if (e.title == "收藏") {
					this.globalUtil.utilAlert("已添加到收藏");
				}
			},

			//判断是否可以撤回信息,根据时间推算
			revertMsg() {
				let that = this;
				that.toolTipFlag = false;
				that.delPopUpObj.isShow = true;
				that.$refs.delPopup.open();
			},

			delPopConfirm: function() {
				let that = this;
				console.log("打开删除消息弹框", that.currentHandleMsg);
				that.$u.api.chatGroup.revertMessageById(that.currentHandleMsg).then(res => {
					console.log("撤回消息成功", res);
					if (res.code == 200) {
						console.log("撤回消息成功", delIndex);
					} else {
						that.globalUtil.utilAlert("撤回信息失败!");
						uni.hideLoading();
						return;
					}
				});
				setTimeout(function() {
					that.delPopCancel();
				}, 500)

			},

			delPopCancel: function() {
				let that = this;
				that.delPopUpObj.isShow = false;
				that.$refs.delPopup.close();
				that.currentHandleMsg = {};
				that.toolTipFlag = false;
			},

			/*----------------------------------------------------录音相关 start-------------------------------------- */
			//准备开始录音
			startVoice(e) {
				if (!this.Audio.paused) {
					//如果音频正在播放 先暂停。
					this.stopAudio(this.AudioExam)
				}
				this.recording = true;
				this.isStopVoice = false;
				this.canSend = true;
				this.voiceIconText = "正在录音..."
				this.PointY = e.touches[0].clientY;
				this.Recorder.start({
					format: 'mp3'
				});
			},
			//录音已经开始
			beginVoice() {
				let that = this;
				if (that.isStopVoice) {
					that.Recorder.stop();
					return;
				}
				that.voiceTitle = '松开 结束'
				that.voiceInterval = setInterval(() => {
					console.log("that.voiceTime", that.voiceTime);
					if (that.voiceTime > 49) {
						that.voiceIconText = "录音结束倒计时[" + (60 - that.voiceTime) + "]s";
					};
					if (that.voiceTime == 60) {
						clearInterval(that.voiceInterval);
						that.endVoice();
					}
					that.voiceTime++;
				}, 1000)
			},
			//move 正在录音中
			moveVoice(e) {
				const PointY = e.touches[0].clientY;
				const slideY = this.PointY - PointY;
				if (slideY > uni.upx2px(120)) {
					this.canSend = false;
					this.voiceIconText = '松开手指 取消发送 '
				} else if (slideY > uni.upx2px(60)) {
					this.canSend = true;
					this.voiceIconText = '手指上滑 取消发送 '
				} else {
					this.voiceIconText = '正在录音... '
				}
			},
			//结束录音
			endVoice() {
				this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
				this.Recorder.stop();
				this.voiceTitle = '按住 说话'
			},
			//录音被打断
			cancelVoice(e) {
				console.log("路由被打断", e);
				this.voiceTime = 0;
				this.voiceTitle = '按住 说话';
				this.canSend = false;
				this.Recorder.stop();
			},
			//处理录音文件
			handleRecorder({
				tempFilePath,
				duration
			}) {
				if (this.voiceTime < 1) {
					this.voiceIconText = "说话时间过短";
					setTimeout(() => {
						this.recording = false;
					}, 500)
					return;
				}
				let contentDuration = this.voiceTime;
				this.voiceTime = 0;
				this.recording = false;
				clearInterval(this.voiceInterval);
				//文件放在自己的服务器
				let uploadFileUrl = this.$u.api.multipartAddress.updload + "/chattingFiles";
				//文件放在阿里云oss
				//let uploadFileUrl= this.$u.api.multipartAddress.uploadAliYun+"/chattingAudio";
				let voiceFile = {
					type: 4, //信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
					filePath: tempFilePath,
					uploadUrl: uploadFileUrl,
					contentDuration: Math.ceil(contentDuration)
				}
				console.log("语音文件", voiceFile);
				if (this.canSend) {
					this.uploadFile(voiceFile);
					return;
				} else {
					console.log("=====已经取消发送语音信息====")
					return;
				}
			},
			//控制播放还是暂停音频文件
			handleAudio(item) {
				this.AudioExam = item;
				this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
			},
			//播放音频
			playAudio(item) {
				this.Audio.src = JSON.parse(item.content).url;
				this.Audio.hasBeenSentId = item.id;
				this.Audio.play();
				item.anmitionPlay = true;
			},
			//停止音频
			stopAudio(item) {
				item.anmitionPlay = false;
				this.Audio.src = '';
				this.Audio.stop();
			},
			//关闭动画
			closeAnmition() {
				const hasBeenSentId = this.Audio.hasBeenSentId;
				const item = this.messageList.find(it => it.id == hasBeenSentId);
				item.anmitionPlay = false;
			},
			/*-------------------------------------录音相关方法块  end---------------------------------------------------*/
			//添加表情
			addEmoji(em) {
				this.sendStr += em.alt;
			},
			//输入框失去焦点事件
			onBlur: function(event) {
				//console.log("失去焦点",event);
				let that = this;
				let text = event.target.value;
				console.log("文字输入事件", text);
				if (text.length < 1 && this.fileRemarkObj.showFlag) {
					uni.showModal({
						title: '是否清除附件',
						success: function(res) {
							if (res.confirm) {
								that.fileRemarkObj.showFlag = false;
								that.fileRemarkObj.fileInfo = null;
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},


			confirmSendText: function(e) {
				let that = this;
				that.sendText();
			},

			//发送文本信息
			sendText: function() {
				let that = this;
				if (that.sendStr.length < 1) {
					uni.hideKeyboard();
					that.globalUtil.utilAlert("不能发送空字符串");
					return;
				}
				//如果文字中有表情,需要转换处理
				let formatStr = this.replaceEmoji(this.sendStr);
				let content = {
					"text": formatStr, //文本内容
				}
				//判断是不是图文结合的
				let showFlag = this.fileRemarkObj.showFlag;
				let fileInfo = this.fileRemarkObj.fileInfo;
				if (showFlag && fileInfo) {

					that.sendComponentMsg(formatStr);
				} else {
					that.sendMsg(1, 1, content);
				}
			},


			delSendStr: function() {
				if (this.sendStr.length > 0) {
					this.sendStr = this.sendStr.substring(0, this.sendStr.length - 4);
				}
			},

			replaceEmoji(str) {
				let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
					for (let i = 0; i < this.faceList.length; i++) {
						let row = this.faceList[i];
						for (let j = 0; j < row.length; j++) {
							let EM = row[j];
							if (EM.alt == item) {
								//在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径
								//比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
								// let onlinePath = 'https://s2.ax1x.com/2019/04/12/'
								// let imgstr = '<img alt="'+EM.alt+'" src="'+onlinePath+this.onlineEmoji[EM.url]+'">';
								let imgstr = "face" + EM.alt;
								console.log("imgstr: " + imgstr);
								return imgstr;
							}
						}
					}
				});
				//console.log("replacedStr", replacedStr);
				return replacedStr;
			},

			replaceReseverEmoji: function(str) {
				let replacedStr = str.replace(/face\[([^\s\[\]]+?)]/g, function(face) {
					let alt = face.replace(/^face/g, '');
					return alt;
				})
				console.log("replacedStr", replacedStr);
				return replacedStr;
			},

			//发送消息
			sendMsg: function(msgType, contentType, contentObj) {
				let that = this;
				that.autoBackToBottom=true;
				that.$u.api.sys.checkLoginStatus({}).then(res => {
					//console.log("登录状态",res);
					if (res.code == 200) {
						let msg = {
							messageType: msgType == null ? 1 : msgType, //信息类型0:系统信息   1表示用户信息
							fromUserId: that.vuex_userInfo.id, //发送信息的人
							chatGroupId: that.currentChatGroup.id, //聊天群聊id
							platFrom: 1, //手机端
							contentType: contentType, //信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
							content: JSON.stringify(contentObj),
						}
						if (that.wsOnlion == true) {
							that.socketTask.send({
								data: JSON.stringify(msg),
								success() {
									console.log("webscoket发送信息成功");
									that.sendStr = "";
								},
								fail() {
									that.globalUtil.utilAlert("网络不佳,发送失败");
									that.sendLoading = false;
								}
							});
						} else {
							console.log("websocket已经掉线");
							if (that.connError == true) {
								that.sendLoading = false;
								that.globalUtil.utilAlert("您已被退出群聊!");
								return;
							}
							that.globalUtil.utilAlert("信息发送失败");
							that.reconnect();
							that.sendLoading = false;
							return;
						}
					} else {
						that.sendLoading = false;
						that.loginOut();
						return;
					}
				})
			},
			//接收到信息,渲染到信息面板上去,
			// 不能滚动到底部
			msgToScreen: function(res) {
				let that = this;
				if (res != null && res.data != null && res.data.length > 0) {
					let msgFromServer = JSON.parse(res.data);
					console.log("收到服务端的信息",msgFromServer);
					//群聊被解散
					if (msgFromServer.messageType == -1) {
						that.closeWebScoket();
						that.globalUtil.utilAlert("群聊已经被解散");
						that.$u.route({
							url: "pages/chat/chatGroupList",
							type: 'switchTab'
						})
						return;
					}
					if (msgFromServer.contentType == 4) {
						msgFromServer.anmitionPlay = false;
					}
					msgFromServer.msgType = msgFromServer.messageType;
					//这里对sendStr进行置空
					if (msgFromServer.meFlag == true) {
						that.sendStr = "";
					}
					let msgType = msgFromServer.msgType;
					let content = msgFromServer.content;
					//系统消息
					if (msgType == 2) {
						let contentObj = JSON.parse(content);
						let currentUserId = that.vuex_userInfo.id;
						console.log("系统消息", contentObj);
						if (contentObj.contentType == 2 && contentObj.delMember == currentUserId) {
							contentObj.text = "您已经被剔除群聊!";
							msgFromServer.content = JSON.stringify(contentObj);
							that.messageList.push(msgFromServer);
							that.closeWebScoket();
							that.connError = true;
						}
						//红包信息
						if (contentObj.contentType == 7||contentObj.contentType==14) {
							console.log("收到红包信息了", msgFromServer);
							that.messageList.push(msgFromServer);
							let messageId=contentObj.messageId;
							let redBagContent=contentObj.redBagContent;
							if(messageId!=null&&redBagContent!=null&&redBagContent!=undefined){
								that.messageList.map(function(item){
									let mid= item.id;
									if(mid==messageId){
										console.log("原来的红包",item);
										item.content=JSON.stringify(redBagContent);
									}
								})
							}
						}
						//撤回信息
						if (contentObj.optionType == -2) {
							let revertMsg = contentObj.delMsg;
							let delIndex = -1;
							console.log("有人撤回了一条信息", contentObj);
							for (var i = 0; i < that.messageList.length; i++) {
								let messageItem = that.messageList[i];
								if (revertMsg.id == messageItem.id) {
									delIndex = i;
								}
							}
							if (delIndex != -1) {
								that.messageList.splice(delIndex, 1);
							}
							let userName = msgFromServer.meFlag ? "我" : contentObj.optionUserName;
							msgFromServer.userName = userName;
							msgFromServer.content = JSON.stringify(contentObj);
							that.messageList.push(msgFromServer);
						}
						//禁言
						if (contentObj.optionType == -3) {
							console.log("群主已禁言", msgFromServer);
							that.messageList.push(msgFromServer);
							//that.forbidFlag = true;
							if(that.currentChatGroup.memberType==0){
								that.forbidFlag=true;
							}
						}
						if (contentObj.optionType == -4) {
							console.log("解除全体禁言", msgFromServer);
							that.messageList.push(msgFromServer);
							that.forbidFlag = false;
						}
					} else {
						let userName = msgFromServer.meFlag ? "我" :msgFromServer.userName;
						msgFromServer.userName = userName;
						that.saveLocal(msgFromServer);
						that.messageList.push(msgFromServer);
					}
					let fromUserId = msgFromServer.fromUserId;
					let chatGroupId = msgFromServer.chatGroupId;
					if (fromUserId != that.vuex_userInfo.id) {
						that.globalUtil.palyMsgTipSelected(that, chatGroupId);
					}
					if (msgFromServer.msgType == 2) {
						let that = this;
						let param = {
							chatGroupId: that.currentChatGroup.id
						};
						that.$u.api.chatGroup.getChatGroupInfo(param).then(res => {
							if (res.code == 200) {
								let data = res.data;
								that.currentChatGroup = data.imGroup;
								if (that.currentChatGroup.chatGroupStatus == 2&&that.currentChatGroup.memberType==0) {
									that.forbidFlag = true;
								} else {
									that.forbidFlag = false;
								}
							} else {
								that.globalUtil.utilAlert("获取最新群信息失败");
								//return;
							}
						})
					}
					
					if(that.autoBackToBottom==true){
						that.$nextTick(function() {
							setTimeout(function() {
								that.scrollIntoView = "msg_" + msgFromServer.id;
								console.log("that.scrollIntoView", that.scrollIntoView);
							}, 200)
						})
					}					
					
				/* 	that.$nextTick(function() {
						setTimeout(function() {
							that.scrollIntoView = "msg_" + msgFromServer.id;
							console.log("that.scrollIntoView", that.scrollIntoView);
						}, 200)
					}) */
				}
			},
			//格式化信息内容
			parseContent: function(item) {
				let that=this;
				let msgType = item.msgType; //1用户信息 2系统信息
				let contentType = item.contentType;//文本信息
				if (contentType == 1) {
					//防止json解析失败
					if(msgType==2){
						//console.log("===================",item.content.indexOf("\\n"));
						item.content=item.content.replace(/\s+/g," ");
					}
					let content = JSON.parse(item.content);
					let msgStr = content.text;
					let sysType = content.contentType;
					let optionType = content.optionType;
					if (sysType != null && sysType != undefined && sysType == 1) {
						if (msgStr.length > 0) {
							return "群主发布了新的公告";
						} else {
							return "群主作废了群公告";
						}
					}
					if (optionType == -2) {
						return item.userName + ":撤回了一条消息";
					}
					if (sysType == 7) {
						if (this.currentChatGroup.chatGroupType == 0) {
							if (item.fromUserId != this.vuex_userInfo.id) {
								return item.userName + "领取了你的红包";
							}
						} else {
							if (item.fromUserId != this.vuex_userInfo.id) {
								return item.userName + "领取了红包";
							} else {
								return "你领取了红包";
							}
						}
					}
					if(msgType!=2){
						let transText = this.globalUtil.transform(msgStr, "", "");
						return transText;
					}
					else{
						//console.log("系统信息",msgStr);
						return msgStr;
					}
				}
				//图片信息
				else if (contentType == 2) {
					let msgId= item.id;
					let localSrc= uni.getStorageSync("image"+msgId);
					if(localSrc){
						return localSrc;
					}
					let url = JSON.parse(item.content).url;
					if (url) {
						if(previewSrcArr.indexOf(url)==-1){
							previewSrcArr.unshift(url);
						};
						that.saveLocal(item);
					}
					return url;
				} else if (contentType == 3) {
					let msgId= item.id;
					let localSrc= uni.getStorageSync("image"+msgId);
					if(localSrc){
						return localSrc;
					};
					let videoContent = JSON.parse(item.content);
					let subImgInfo = videoContent.subImgInfo;
					if (subImgInfo) {
						that.saveLocal(item);
						return subImgInfo.url;
					} else {
						return "";
					}					
				} else {
					return JSON.parse(item.content).url;
				}
			},

			parseVideoContent: function(item) {
				let content = JSON.parse(item.content);
				let totalTime = content.totalTime;
				if (totalTime == 0) {
					return "通话未接通";
				} else {
					let timeDuring = this.globalUtil.formatSeconds(totalTime);
					return "通话时长 " + timeDuring;
				}
			},

			//格式化组合信息内容
			formatComponetContent: function(item, type) {
				let that = this;
				if (type == 1) {
					let msgStr = JSON.parse(item.content).textDesc;
					let transText = this.globalUtil.transform(msgStr, "", "");
					return transText;
				}
				if (type == 2) {
					let content = JSON.parse(item.content);
					if (item.contentType == 12) {
						let subImgInfo = content.fileInfo.subImgInfo;
						if (subImgInfo) {
							return subImgInfo.url;
						} else {
							return "";
						}
					}
					if (item.contentType == 11) {
						let url= content.url;
						if(previewSrcArr.indexOf(url)==-1){
							previewSrcArr.unshift(url);
						};
						return content.url;
					}

				}
			},

			showNotice: function() {
				let that = this;
				console.log("查看群公告");
			},

			parseShowTime: function(item) {
				if (item.createTime == null) {
					return false;
				}
				let crteateTimeStr = item.createTime.replace(/-/g, "/"); //时间转换
				let createTime = new Date(crteateTimeStr).getTime();
				let nowTime = new Date().getTime();
				let during = nowTime - createTime;
				if (during > 1000 * 60 * 3) {
					return true;
				} else {
					return false;
				}
				//Date.now()-new Date(create_time)>3*60*60*1000

			},

			//内容转换(暂时不用)
			transformContent: function(message) {
				let contentStr = message.content;
				let contentObj = JSON.parse(contentStr);
				let text = contentObj.text;
				let fileSuffix = contentObj.fileSuffix;
				let fileSize = contentObj.fileSize;
				//信息内容转换
				let transText = this.globalUtil.transform(text, fileSize, fileSuffix);
				contentObj.text = transText;
				message.content = JSON.stringify(contentObj);
			},



			parseImgSize: function(item, type) {
				if (type == "h") {
					let height = JSON.parse(item.content).height;
					if (item.contentType == 11 || item.contentType == 12) {
						height = JSON.parse(item.content).fileInfo.height;
						//console.log("附件高度",height);
					}
					if (height == null || height == undefined) {
						return "auto";
					} else {
						return height * 2;
					}
				} else {
					let width = JSON.parse(item.content).width;
					if (item.contentType == 11 || item.contentType == 12) {
						width = JSON.parse(item.content).fileInfo.width;
						//console.log("附件宽度",width);
					}
					if (width == null || width == undefined) {
						return 300;
					} else {
						return width * 2;
					}
				}
			},
			//切换语音或者键盘方式
			switchChatType(type) {
				let that = this;
				if (that.connError) {
					that.globalUtil.utilAlert("您已被踢出群聊");
					return;
				}
				this.chatType = type;
				//底部菜单隐藏
				if (this.showFunBtn == true) {
					this.showFunBtn = false;
					that.scrollViewHeight = that.$u.sys().windowHeight - 150;
				}
				//表情弹窗
				if (this.showEmojiBox == true) {
					this.showEmojiBox = false;
					that.scrollViewHeight = that.$u.sys().windowHeight - 150;
				}
				if (type == "voice") {
					this.inputFocusFlag = true;
				} else {
					if (uni.getSystemInfoSync().platform == "android") {
						permission.requestAndroid("android.permission.RECORD_AUDIO"); //Android请求录音权限
					} else {
						permission.requestIOS("record"); //ios请求录音权限
					}
				}
			},
			//切换功能性按钮
			changeDrawer() {
				let that = this;
				that.showEmojiBox = false;
				that.showFunBtn = !that.showFunBtn;
				uni.hideKeyboard();
				if (that.showFunBtn) {
					that.scrollViewHeight = that.$u.sys().windowHeight - 350;
				} else {
					that.scrollViewHeight = that.$u.sys().windowHeight - 150;
				}
			},
			//表情弹窗
			changeEmojiBox: function() {
				let that = this;
				that.showFunBtn = false;
				that.showEmojiBox = !that.showEmojiBox;
				uni.hideKeyboard();
				if (that.showEmojiBox) {
					this.chatType = "voice";
					that.scrollViewHeight = that.$u.sys().windowHeight - 350;
				} else {
					that.scrollViewHeight = that.$u.sys().windowHeight - 150;
				}
			},
			scrollViewScrolling: function(e) {
				this.toolTipFlag = false;
				//console.log("监听到滚动了---scrollTop-------",e.detail.scrollTop);
				//console.log("监听到滚动了---scrollHeight-------",e.detail.scrollHeight);
				let scrollTop= e.detail.scrollTop;
				let scrollHeight=e.detail.scrollHeight;
				let precent=(scrollTop/scrollHeight).toFixed(2);
				//console.log("precent",Number(precent));
				if(Number(precent)<0.5){
					this.autoBackToBottom=false;
				}else{
					this.autoBackToBottom=true;
				}
				//this.$forceUpdate();
			},
			//触摸页面
			hideDrawer() {
				this.toolTipFlag = false;
				if (this.showFunBtn == true) {
					uni.hideKeyboard();
					this.showFunBtn = false;
					this.scrollViewHeight = this.$u.sys().windowHeight - 150;
				}
				if (this.showEmojiBox == true) {
					uni.hideKeyboard();
					this.showEmojiBox = false;
					this.scrollViewHeight = this.$u.sys().windowHeight - 150;
				}
			},
			//点击宫格时触发
			clickGrid(index) {
				let that = this;
				if (that.connError) {
					that.globalUtil.utilAlert("您已被踢出群聊");
					return;
				}
				let id = that.funList[index].id;
				that.inputFocusFlag = false;
				//组合方式清楚
				that.fileRemarkObj.showFlag = false;
				that.fileRemarkObj.fileInfo = null;
				that.fileRemarkObj.tag = "";
				if (id == 1) {
					this.chooseImage();
				} else if (id == 2) {
					this.chooseVideo();
				} else if (id == 3) {
					let chatGroupType = that.currentChatGroup.chatGroupType;
					if (chatGroupType == 0) {
						that.launchSingleCalling(2);
						return;
					} else {
						this.globalUtil.utilAlert("功能尚未开放!");
						return;
						/* this.$u.route({
							url: '/pages/chattingroom/videoCalling',
							params: {
								'userId':that.vuex_userInfo.mobile+"_"+that.vuex_userInfo.id,
								'userSign':that.vuex_userInfo.userSign
							}
						}) */
					}
				} else if (id == 4) {
					console.log("位置");
					//去选择所在位置
					let that = this;
					uni.chooseLocation({
						success: function(res) {
							that.addressObj = res;
							that.addressObj.chooseFlag = true;
							that.sendLocation(that.addressObj);
						},
						fail: function() {
							that.address = {};
							that.address.chooseFlag = false;
						}
					});
					return;
				} else if (id == 5) {
					let chatGroupType = that.currentChatGroup.chatGroupType;
					if (chatGroupType == 0) {
						this.$u.route({
							url: '/pages/chat/redbag/redbag',
							params: {
								chatGroupId: this.currentChatGroup.id
							},
							animationType: 'slide-in-bottom'
						})
					} else {
						this.$u.route({
							url: '/pages/chat/redbag/redbagForGroup',
							params: {
								currentChatGroup: JSON.stringify(this.currentChatGroup)
							},
							animationType: 'slide-in-bottom'
						})
					}
					return;
				} else if (id == 6) {
					//console.log("转账");
					//this.globalUtil.utilAlert("功能尚未开放!");
					this.$u.route({
						url: '/pages/chat/chatGroup/forwardFriendToGroup',
						params: {
							currentChatGroupId: this.currentChatGroup.id
						},
						animationType: 'slide-in-bottom'
					})
					return;
				} else if (id == 7) {
					console.log("语音通话");
					let chatGroupType = that.currentChatGroup.chatGroupType;
					if (chatGroupType == 0) {
						that.launchSingleCalling(1);
						return;
					} else {
						this.globalUtil.utilAlert("功能尚未开放!");
						return;
						/* this.$u.route({
							url: '/pages/chattingroom/videoCalling',
							params: {
								'userId':that.vuex_userInfo.mobile+"_"+that.vuex_userInfo.id,
								'userSign':that.vuex_userInfo.userSign
							}
						}) */
					}
				} else if (id == 8) {
					this.chooseFile();
					return;
				} else {
					this.globalUtil.utilAlert("功能尚未开放!");
					return;
				}
			},
			//单聊发起音视频通话  type 1:语音通话 2视频通话
			launchSingleCalling: function(type) {
				let that = this;
				let remoteUserIds = [];
				let chatGroupId = that.currentChatGroup.id;
				let param = {
					chatGroupId: that.currentChatGroup.id
				};
				that.$u.api.chatGroup.getChatGroupTrcMembers(param).then(res => {
					if (res.code == 200) {
						let groupMemberList = res.data;
						if (groupMemberList.length > 0) {
							for (let i = 0; i < groupMemberList.length; i++) {
								let trcUserId = groupMemberList[i].trcRemoteUserId;
								remoteUserIds.push(trcUserId);
							}
						}
						console.log("remoteUserIds", remoteUserIds);
						let callResult= this.trcApi.singleCall(remoteUserIds[0],type);
						that.trcApi.listenCallStatus({
							onError:function(res){
								console.log(res);
							},
							onCallReceived:function(res){
								console.log(res);
							},
							onCallCancelled:function(res){
								console.log(res);
							},
							onCallBegin:function(res){
								console.log(res);
							},
							onCallEnd:function(res){
								console.log(res);
							},
						});
					} else {
						that.globalUtil.utilAlert("音视频通话远程用户信息获取失败");
						return;
					}
				})
			},

			onCallEnd: function(res) {
				let that = this;
				let result = "";
				let callRole = "";
				if (that.platos == "ios") {
					result = res.data;
					callRole = result[3];
				} else {
					result = res;
					callRole = res.callRole;
				}
				if (callRole == 0) {
					let param = {
						roomID: '',
						type: '1', //1是音频 2是视频
						totalTime: 0, //通话时长
						targetUserID: '', //对方userId
						fromUserId: '',
						callRole: 0, //0 是主叫 1被叫
					}
					if (that.platos == "ios") {
						param.totalTime = result[4];
						param.callRole = result[3];
						param.type = result[2];
						param.roomID = result[1];
						param.targetUserID = result[0][0];
						param.fromUserId = that.vuex_userInfo.id;
					} else {
						param.totalTime = result.totalTime;
						param.callRole = result.callRole;
						param.type = result.type;
						param.roomID = result.roomID;
						param.targetUserID = result.userIDs[0];
						param.fromUserId = that.vuex_userInfo.id;
					}
					console.log("音视频通话记录保存", param);
					that.videoMsgFlag = false;
					let videoMsgTimmer = setTimeout(function() {
						that.videoMsgFlag = true;
						clearTimeout(videoMsgTimmer);
					}, 3000);
					//that.sendMsg(1, 13, param);
				}
			},


			//发送位置
			sendLocation: function(addressObj) {
				let that = this;
				console.log("that.address", that.addressObj);
				that.sendMsg(1, 9, that.addressObj);
			},
			//重置复合信息
			resetComponentInfo: function() {
				let that = this;
				that.fileRemarkObj.fileInfo = null;
				that.fileRemarkObj.showFlag = false;
				that.fileRemarkObj.tag = "";

			},
			//选照片 or 拍照
			chooseImage() {
				let that = this;
				uni.chooseImage({
					count: 6,
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						for (let i = 0; i < res.tempFilePaths.length; i++) {
							uni.getImageInfo({
								src: res.tempFilePaths[i],
								success: (image) => {
									image.type = 2; ///信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
									image.filePath = image.path;
									//文件放在自己服务器
									let uploadFileUrl = this.$u.api.multipartAddress.updload;
									//文件放在阿里云oss
									//let uploadFileUrl= this.$u.api.multipartAddress.uploadAliYun;
									image.uploadUrl = uploadFileUrl + "/chattingFiles";
									let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
									let maxH = uni.upx2px(350); //350是定义消息图片最大高度
									if (image.width > maxW || image.height > maxH) {
										let scale = image.width / image.height;
										image.width = scale > 1 ? maxW : maxH * scale;
										image.height = scale > 1 ? maxW / scale : maxH;
									}
									//如果是多张直接发送
									if (res.tempFilePaths.length > 1) {
										setTimeout(function(){
											that.uploadFile(image);
										},1500);
									}else{
										//如果只有一张,提示是否加备注
										//图片信息
										uni.showModal({
											title: '是否立即发送?',
											confirmText: '立即发送',
											cancelText: '图文发送',
											success: function(res) {
												if (res.confirm) {
													console.log('用户点击确定');
													that.uploadFile(image);
												} else if (res.cancel) {
													that.fileRemarkObj.showFlag = true;
													that.fileRemarkObj.fileInfo = image;
													that.fileRemarkObj.tag = "图片";
													that.inputFocusFlag = true;
												}
											}
										});
									}
									return;
								}
							});
						}
					},
					fail() {
						console.log("选择图片上传发送异常");
					}
				});
			},
			//选择视频或者 拍摄视频
			chooseVideo() {
				let that = this;
				uni.chooseVideo({
					sourceType: ['camera', 'album'],
					compressed:false,
					success: function(res) {
						let video = JSON.parse(JSON.stringify(res));
						delete video.errMsg;
						let tempFilePath = video.tempFilePath;
						console.log("tempFilePath", tempFilePath);
						if (!tempFilePath) {
							that.globalUtil.utilAlert("失败!");
							return;
						}
						//获取视频第一帧图片
						if (that.platos == 'ios') {
							that.globalUtil.iosCreateVideoThumbnail(that, {
								tempFilePath: tempFilePath,
								success: function(result) {
									console.log("获取到视频的第一帧信息", result);
									video.subImgInfo = result.result;
								},
								fail: function(result) {
									console.log("ios获取视频第一帧信息失败");
								}
							});
						}
						if (that.platos == 'android') {
							//console.log("安卓获取视频第一帧");
							that.globalUtil.androidCreateVideoThumbnail(that, {
								tempFilePath: tempFilePath,
								success: function(result) {
									console.log("安卓获取视频第一帧信息", result);
									video.subImgInfo = result.result;
								},
								fail: function(result) {
									console.log("安卓获取视频第一帧信息失败");
								}
							});
						}
						that.sendVideoMsg(video, tempFilePath)
					}
				});
			},
			//发送视频信息
			sendVideoMsg: function(video, tempFilePath) {
				let that = this;
				//处理视频
				let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
				let maxH = uni.upx2px(350); //350是定义消息图片最大高度
				if (video.width > maxW || video.height > maxH) {
					let scale = video.width / video.height;
					video.width = scale > 1 ? maxW : maxH * scale;
					video.height = scale > 1 ? maxW / scale : maxH;
				}
				//console.log("选择的视频结果",video);
				let obj = {
					type: "video",
					filePath: tempFilePath,
					savePath: "/chattingFiles" //文件存放目录
				}
				uni.showModal({
					title: '是否立即发送?',
					confirmText: '立即发送',
					cancelText: '视频图文发送',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.showLoading({
								title: '视频处理中',
								mask: true
							});
							that.globalUtil.globalUpload(that, {
								param: obj,
								success: (res1) => {
									//console.log("上传视频成功",res1);
									if (res1.code == 1) {
										video = Object.assign(video, res1.result);
										console.log("发送视频信息对象", video);
										that.sendMsg(1, 3, video);
									};
									uni.hideLoading();
								},
								fail: (res1) => {
									uni.hideLoading();
									that.globalUtil.utilAlert("上传视频失败!");
									console.log("上传视频失败", res1);
								},
								complete: (res1) => {
									uni.hideLoading();
									that.globalUtil.utilAlert("上传视频失败!");
									console.log("上传视频完成", res1);
								}
							});
						} else if (res.cancel) {
							obj = Object.assign(video, obj);
							that.fileRemarkObj.showFlag = true;
							that.fileRemarkObj.fileInfo = obj;
							that.fileRemarkObj.tag = "视频";
							that.inputFocusFlag = true;
						}
					}
				});
			},

			//发送图文或者视频图文的信息
			sendComponentMsg: function(textDesc) {
				let that = this;
				let tag = that.fileRemarkObj.tag;
				let fileInfo = that.fileRemarkObj.fileInfo;
				let tempFilePath = fileInfo.filePath;
				if (tempFilePath == null || tempFilePath == undefined || tempFilePath.length < 1) {
					console.log("组合信息文件丢失", tempFilePath);
					that.resetComponentInfo();
					return;
				}
				that.resetComponentInfo();
				that.sendStr = "";
				uni.hideKeyboard();
				uni.showLoading({
					mask: true,
					title: '发送中',
				})
				if (fileInfo.type == 2) {
					delete fileInfo.orientation;
					delete fileInfo.errMsg;
					delete fileInfo.path;
				}
				let obj = {
					textDesc: textDesc,
					fileInfo: fileInfo
				}
				let param = {
					type: fileInfo.type,
					filePath: tempFilePath,
					savePath: "/chattingFiles" //文件存放目录
				}
				console.log("上传组合信息的文件,参数", param);
				that.globalUtil.globalUpload(that, {
					param: param,
					success: (res1) => {
						if (res1.code == 1) {
							obj = Object.assign(obj, res1.result);
							console.log("发送组合信息", obj);
							if (obj.type == 2) {
								that.sendMsg(1, 11, obj); //图文
							} else {
								that.sendMsg(1, 12, obj); //视频图文
							}
							that.resetComponentInfo();
						};
						uni.hideLoading();
					},
					fail: (res1) => {
						that.resetComponentInfo();
						uni.hideLoading();
						that.globalUtil.utilAlert("发送失败!");
						console.log("组合信息上传文件失败", res1);

					},
					complete: (res1) => {
						that.resetComponentInfo();
						uni.hideLoading();
						that.globalUtil.utilAlert("发送失败!");
						console.log("组合信息上传文件失败", res1);

					}
				});
			},

			//选择文件
			chooseFile() {
				let that = this;
				that.$u.route({
					url: '/pages/chat/chooseFileList/chooseFileList',
					params: {
						chatGroupId: that.currentChatGroup.id
					}
				});
			},


			//上传文件到服务器
			uploadFile(obj) {
				let that = this;
				console.log("上传文件的参数", obj);
				if (that.connError) {
					that.globalUtil.utilAlert("您已被踢出群聊");
					return;
				}
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
							'TOKEN_OA': that.vuex_token,
						},
						success: (uploadFileRes) => {
							if (uploadFileRes.statusCode == 200 && uploadFileRes.data.length > 0) {
								let resObj = JSON.parse(uploadFileRes.data);
								console.log("文件上传响应回调数据", resObj);
								if (resObj.code == 200) {
									//文件放在自己的服务器
									let _url = that.$u.api.multipartAddress.getFileByPath + resObj.data;
									//文件放在阿里云服务器
									// let _url=resObj.data;
									msg.url = _url;
									let suffix = resObj.data.substring(resObj.data.lastIndexOf('.') + 1, resObj
										.data.length);
									msg.fileSuffix = suffix;
									msg.fileName = resObj.data;
									if (obj.type == 2) {
										msg.width = obj.width;
										msg.height = obj.height;
									}
									if (obj.type == 4) {
										msg.contentDuration = obj.contentDuration;
									}
									isSuccess = true;
									uni.hideLoading();
									
									that.sendMsg(1, obj.type, msg);
								} else {
									that.globalUtil.utilAlert("发送失败!");
									return;
								}
							} else {
								that.globalUtil.utilAlert("发送异常!");
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
			openLocation: function(item) {
				let that = this;
				let contentObj = JSON.parse(item.content);
				uni.openLocation({
					latitude: contentObj.latitude,
					longitude: contentObj.longitude,
					name: contentObj.name,
					address: contentObj.address,
					success: function() {
						console.log('success');
					}
				});
			},
			showTimeJudge: function(item, index) {
				let dayTime = item.createTime.substring(5, 10);
				let firstTime = this.messageList[0].createTime.substring(5, 10);
				if (firstTime == dayTime) {
					return false
				}
				if (this.messageList.length > 0 && index > 0) {
					let lastDayTime = this.messageList[index - 1].createTime.substring(5, 10);
					if (dayTime == lastDayTime) {
						return false
					} else {
						return true;
					}
				} else {
					return false
				}
			},
			openRedBag: function(item, index) {
				let that = this;
				let conentStr = this.messageList[index].content;
				let contentObj = JSON.parse(conentStr);
				console.log("item", item);
				console.log("contentObj", contentObj);
				if (contentObj.redBagType == 0) {
					this.openSingleGroupRedBag(item, contentObj, index);
					return;
				} else {
					this.openGroupRedBag(item, contentObj, index);
					return;
				}
			},
			//领取单聊的红包
			openSingleGroupRedBag: function(item, contentObj, index) {
				let that = this;
				if (contentObj.fromUser == this.vuex_userInfo.id) {
					console.log("自己不能领取自己发出的红包");
					contentObj.avatar = item.userAvatar;
					that.showRedPopFlag = true;
					that.currentRedBag = contentObj;
					that.currentRedBag.redBagNums = 1;
					return;
				} else {
					if (contentObj.receiveAllFlag == false) {
						that.$u.api.chatGroup.receviceRedBag(item).then(res => {
							if (res.code == 200) {
								console.log("红包已被领取");
								contentObj.receiveAllFlag = true;
								this.messageList[index].content = JSON.stringify(contentObj);
							}
						})
					} else {
						console.log("红包已经被领取");
						contentObj.avatar = item.userAvatar;
						this.showRedPop(contentObj);
					}
				}
			},
			//是否领取过
			isReceive: function(item) {
				let that = this;
				let contentObj = JSON.parse(item.content);
				let receiveUsers = contentObj.receiveUsers;
				if (receiveUsers != null && receiveUsers != undefined) {
					for (var i = 0; i < receiveUsers.length; i++) {
						let receiveInfo = receiveUsers[i];
						let receiveUserId = receiveInfo.userId;
						if (receiveUserId == that.vuex_userInfo.id) {
							//that.globalUtil.utilAlert("您已经领取过红包~");
							return true;
						}
					}
				};
				return false;
			},

			//领取群聊红包
			openGroupRedBag: function(item, contentObj, index) {
				let that = this;
				let receiveUsers = contentObj.receiveUsers;
				if (receiveUsers != null && receiveUsers != undefined) {
					for (var i = 0; i < receiveUsers.length; i++) {
						let receiveInfo = receiveUsers[i];
						let receiveUserId = receiveInfo.userId;
						if (receiveUserId == that.vuex_userInfo.id) {
							contentObj.avatar = item.userAvatar;
							this.showRedPop(contentObj);
							return;
						}
					}
				}
				if (contentObj.receiveAllFlag == false) {
					that.$u.api.chatGroup.receviceRedBagForGroup(item).then(res => {
						console.log("领取群聊红包结果", res);
						if (res.code == 200) {
							if (res.data == 1) {
								//contentObj.receiveAllFlag=true;
								if (contentObj.receiveUsers != null && contentObj.receiveUsers != undefined) {
									contentObj.receiveUsers.push({
										userId: this.vuex_userInfo.id
									});
								} else {
									contentObj.receiveUsers = [{
										userId: this.vuex_userInfo.id
									}];
								}
								this.messageList[index].content = JSON.stringify(contentObj);
							}
							if (res.data == -1) {
								that.globalUtil.utilAlert("您已经领取过红包~");
								contentObj.receiveAllFlag = true;
								this.messageList[index].content = JSON.stringify(contentObj);
								return;
							}
							if (res.data == -2 || res.data == -3) {
								if (res.data == -2) {
									that.globalUtil.utilAlert("手速太慢,红包已被领完~");
								}
								contentObj.receiveAllFlag = true;
								this.messageList[index].content = JSON.stringify(contentObj);
								return;
							}
						}
					})
				} else {
					console.log("手速太慢.红包已经被领完");
					//that.globalUtil.utilAlert("手速太慢.红包已经被领完");
					contentObj.avatar = item.userAvatar;
					this.showRedPop(contentObj);
					return;
				}
			},

			showRedPop: function(contentObj) {
				let that = this;
				//that.globalUtil.utilAlert("您已经领取过红包~");
				that.receiveRedBagList = [];
				that.currentRedBag = {};
				that.$u.api.chatGroup.getRedBagReceiveList(contentObj).then(res => {
					console.log("获取红包领取记录", res);
					if (res.code == 200) {
						that.showRedPopFlag = true;
						that.currentRedBag = contentObj;
						console.log("currentRedBag.avatar", that.currentRedBag.avatar);
						that.receiveRedBagList = res.data;
					}
				})
			},

			previewFile: function(item) {
				let fileObj = JSON.parse(item.content);
				let url = fileObj.url
				if (url) {
					console.log("url", url);
					if (fileObj.fileType == "img") {
						uni.previewImage({
							urls: [url],
						});
						return;
					} else if (fileObj.fileSuffix === 'mp4') {
						this.previewVideoSrc = url;
						this.previewVideoFlag = true;
						return;
					} else {
						uni.downloadFile({
							url: url,
							success: function(res) {
								var filePath = res.tempFilePath;
								uni.openDocument({
									filePath: filePath,
									showMenu: true,
									success: function(res) {
										console.log('打开文档成功');
									},
									error: function(error) {
										console.log("文件打开失败", error);
										this.globalUtil.utilAlert("暂不支持查看");
										return;
									}
								});
							}
						});
					}
				}
			},

			showPic(item) {
				let that = this;
				//console.log("item",item);
				let content = JSON.parse(item.content);
				let src = content.url;
				//console.log("src", src);
				let subType = content.subContentType;
				if (subType) {
					uni.previewImage({
						urls: [src],
						longPressActions: {
							itemList: ['保存图片', '识别二维码'],
							success: function(data) {
								//console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								if (data.tapIndex == 0) {
									uni.downloadFile({
										url: src, //仅为示例，并非真实的资源
										success: (res) => {
											if (res.statusCode === 200) {
												console.log('下载成功', res.tempFilePath);
												let filePath = res.tempFilePath;
												uni.saveImageToPhotosAlbum({
													filePath: filePath,
													success: function() {
														that.globalUtil.utilAlert(
															"保存成功");
													},
													complete: function(res) {
														console.log("保存到相册结果", res)
													}
												});
											}
										}
									});
								}
								if (data.tapIndex == 1) {
									console.log("识别二维码", content);
									let qrInfo = content.qrInfo;
									if (qrInfo && qrInfo.length > 0) {
										let qrObj = JSON.parse(qrInfo);
										let businessCode = qrObj.businessCode;
										console.log("businessCode", businessCode);
										let valueInfo = qrObj.qrValue;
										if (businessCode) {
											//这里识别到二维码信息
											console.log("这里识别到二维码信息", valueInfo);
											//这里关闭
											uni.closePreviewImage({
												success: function() {
													that.qrModelInfo = qrObj;
													that.qrModelFlag = true;
												}
											});
										} else {
											that.globalUtil.utilAlert("无效的二维码!");
										}
									} else {
										that.globalUtil.utilAlert("无效的二维码!");
										return;
									}
								}

							},
							fail: function(err) {
								console.log(err.errMsg);
							}
						}
					});
				} else {
					uni.previewImage({
						urls: previewSrcArr.length > 0 ? previewSrcArr : [src], //[src]
						current: src,
						loop: false,
					});
				}
				return;
			},


			//播放视频
			boFangVideo: function(item) {
				let that=this;
				let msgId= item.id;
				let localSrc= uni.getStorageSync("video"+msgId);
				if(localSrc){
					console.log("视频本地缓存",localSrc);
					this.previewVideoSrc=localSrc;
					this.previewVideoFlag=true;
				}else{
					let videoContent = JSON.parse(item.content);
					let videoSrc= videoContent.url;
					this.previewVideoSrc=videoSrc;
					this.messageApi.setVideoLocalSrc(videoSrc,msgId);
					this.previewVideoFlag=true;
				}
			},


			//关闭播放视频
			stopPlayVideo: function() {
				this.previewVideoFlag = false;
			},

			//查看群成员信息
			showPersonalInfo: function(item) {
				let that = this;
				let groupUserId = item.fromUserId;
				console.log("群成员信息", item);
				if (item.meFlag == true) {
					return;
				}
				//根据userId去查询是否是好友
				let param = {
					groupUserId: groupUserId
				}
				that.$u.api.imUser.getGroupMemberInfo(param).then(res => {
					if (res.code == 200) {
						let groupUserInfo = res.data;
						console.log("查询群成员信息结果", groupUserInfo);
						if (groupUserInfo.isFriend) {
							that.$u.route({
								url: 'pages/chat/friends/friendHome',
								params: {
									friendId: groupUserId
								},
							})
						} else {
							console.log("不是朋友关系");
							this.$u.route({
								url: 'pages/chat/friends/newFriendInfo',
								params: {
									newFriendInfo: encodeURIComponent(JSON.stringify(groupUserInfo)),
									fromPage: 1
								}
							});
						}
					}
				})
			},
			formatForwardUserInfo: function(item) {
				let that = this;
				let forwardUser = JSON.parse(item.content);
				let currentUserId = that.vuex_userInfo.id;
				if (forwardUser.id == currentUserId) {
					return "我";
				} else {
					return forwardUser.userName;
				}
			},
			//解析聊天记录类型的标题
			parseChatRecordTitle: function(item) {
				//console.log("item",item);
				let title = "聊天记录";
				let titleSet = new Set();
				let obj = JSON.parse(item.content);
				for (let i = 0; i < obj.length; i++) {
					let userName = obj[i].userName;
					titleSet.add(userName);
				}
				let userNames = Array.from(titleSet);
				if (userNames.length < 3) {
					return userNames.join("与") + "的聊天记录";
				} else {
					return title;
				}
			},

			//解析群聊记录
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
						str = userName + ": [图文信息]";
						break;
					case 12:
						str = userName + ": [视频文字混合]";
						break;
					default:
						break;
				}
				return str;
			},
			//查看聊天记录
			openChatRecord: function(item, index) {
				let that = this;
				let navbarTitle = this.parseChatRecordTitle(item);
				console.log("查看聊天记录", item);
				that.$u.route({
					url: '/pages/chat/chatting/chat-record-content',
					params: {
						chatRecordContentObj: encodeURIComponent(JSON.stringify(item)),
						navbarTitle: navbarTitle
					},
					animationType: 'slide-in-bottom'
				})
			},


			showUserInfoFromForward: function(item) {
				let that = this;
				console.log("群成员信息", item);
				let fromUserId = item.fromUserId;
				let groupUserId = JSON.parse(item.content).id;
				//如果是自己,就不用处理了
				if (fromUserId == groupUserId) {
					return;
				}
				let currentUserId = that.vuex_userInfo.id;
				if (groupUserId == currentUserId) {
					return;
				}
				let param = {
					groupUserId: groupUserId
				}
				//根据userId去查询是否是好友
				that.$u.api.imUser.getGroupMemberInfo(param).then(res => {
					if (res.code == 200) {
						let groupUserInfo = res.data;
						console.log("查询群成员信息结果", groupUserInfo);
						if (groupUserInfo.isFriend) {
							that.$u.route({
								url: 'pages/chat/friends/friendHome',
								params: {
									friendId: groupUserId
								},
							})
						} else {
							console.log("不是朋友关系");
							this.$u.route({
								url: '/pages/chat/friends/newFriendInfo',
								params: {
									newFriendInfo: encodeURIComponent(JSON.stringify(groupUserInfo)),
									fromPage: 1
								}
							});
						}
					}
				})
			},

			closeAdvFlag: function() {
				let that = this;
				let param = {
					chatGroupId: that.currentChatGroup.id,
					hiddenFlag: 0
				}
				that.$u.api.chatGroup.updateMyChatGroupInfo(param).then(res => {
					if (res.code == 200) {
						console.log("关闭公告");
						that.currentChatGroup.advShowFlag = 0;
					} else {
						that.globalUtil.utilAlert("error");
						return;
					}
				})
			},

			loginOut: function() {
				let that = this;
				that.closeWebScoket();
				//调用service请求后台的接口
				this.$u.api.sys.loginOut({}).then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.globalUtil.clearVuex(that);
						setTimeout(function() {
							that.$u.route({
								type: 'reLaunch',
								url: "/pages/index/login",
								params: {}
							})
						}, 500);
						return;
					} else {
						//密码错误提示
						this.globalUtil.utilAlert(res.message, "none");
						return;
					}
				}).catch(res => {
					this.globalUtil.utilAlert("后台请求失败,请联系管理员!");
				})
			},

			closeQRModel: function() {
				this.qrModelInfo = {};
				this.qrModelFlag = false;
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
						that.messageApi.setImageLocalSrc(url,msgId);
						break;
					case "3":
						let subImgInfo = contentObj.subImgInfo;
						if (subImgInfo) {
							let url= subImgInfo.url;
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
		},
	};
</script>

<style lang="scss" scoped>
	@import './chatting.scss';

	.chatting-container {
		.custom-navbar {
			width: 100%;
			display: flex;
			flex: 1;
			flex-direction: row;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			padding: 0 30rpx;

			.nav-left {}

			.nav-center {
				font-size: 36rpx;
				font-weight: bold;
			}

			.nav-right {}
		}

		.msg-container {
			width: 100%;

			.msg-box-scroller {

				/* direction: rtl;
				max-height: 100%;
				transform:rotate(180deg);
				-ms-transform:rotate(180deg);
				-moz-transform:rotate(180deg);
				-webkit-transform:rotate(180deg);
				-o-transform:rotate(180deg); */
				::-webkit-scrollbar {
					display: none;
					height: 0;
					width: 0;
				}

				.message {
					padding: 13rpx 20rpx;
					/* direction: ltr;transform:rotate(180deg);
						-ms-transform:rotate(180deg);
						-moz-transform:rotate(180deg);
						-webkit-transform:rotate(180deg);
						-o-transform:rotate(180deg); */
				}

				.message-item {
					font-size: 32rpx;
					color: #000000;
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					align-content: flex-start;
					flex-wrap: nowrap;
					flex-direction: row;

					.marginLeft-100 {
						margin-right: 110rpx;
					}

					.margentRight-100 {
						margin-left: 110rpx;
					}

					.img {
						width: 80rpx;
						height: 80rpx;
						border-radius: 5rpx;
					}

					.content {
						padding: 25rpx 20rpx;
						max-width: 500rpx;
						border-radius: 10rpx;
						font-size: 32rpx;
						word-break: break-word;

						//margin-top: 10rpx;
						.richTextImg {

							//border: 1px solid red;
							.emoji {
								//border: 1px solid black;
								position: relative;
								top: 10rpx;
								width: 26px;
								height: 26px;
							}
						}
					}

					// 语音
					.contentType2 {
						display: flex;
						flex-direction: row;
						align-items: center;

						.voice_icon {
							height: 34rpx;
							width: 34rpx;
							background-repeat: no-repeat;
							background-size: 100%;
						}

						.voice_icon_right {
							background-image: url(@/static/voice-left-3.png);
							margin-left: 10rpx;
						}

						.voice_icon_left {
							background-image: url(@/static/voice-right-3.png);
							margin-right: 10rpx;
						}

						.voice_icon_right_an {
							animation: voiceAn_right 1s linear alternate infinite;
						}

						.voice_icon_left_an {
							animation: voiceAn_left 1s linear alternate infinite;
						}

						@keyframes voiceAn_right {
							0% {
								background-image: url(@/static/voice-left-1.png);
							}

							50% {
								background-image: url(@/static/voice-left-2.png);
							}

							100% {
								background-image: url(@/static/voice-left-3.png);
							}
						}

						@keyframes voiceAn_left {
							0% {
								background-image: url(@/static/voice-right-1.png);
							}

							50% {
								background-image: url(@/static/voice-right-2.png);
							}

							100% {
								background-image: url(@/static/voice-right-3.png);
							}
						}
					}

					//图片
					.contentType3 {
						padding: 0;
						border-radius: 2rpx;
						background-color: transparent !important;
						border: 1rpx solid #e4e7ed;

						.img {
							width: 200rpx;
							height: auto;
							max-width: 300rpx;
							max-height: 400rpx;
						}
					}

					.contentType3::after {
						border: none !important;
						display: none !important;
					}

					.contentType5 {
						width: 450rpx;
						padding: 0;
						border-radius: 10rpx;
						//background-color: transparent !important;
						border: 1rpx solid #e4e7ed;
						background-color: #ffffff !important;
					}

					.contentType3::after {
						border-top: 10rpx solid transparent;
						border-bottom: 10rpx solid transparent;
						border-left: 16rpx solid #ffffff !important;
					}

					.contentType-fixed {
						padding: 20;
						border-radius: 6rpx;
						background-color: #95ec69 !important;
						border: 1rpx solid #e4e7ed;
						max-width: 400rpx;

						.img {
							width: 200rpx;
							height: auto;
							max-width: 300rpx;
							max-height: 400rpx;
						}
					}

					.contentType-fixed::after {
						border: none !important;
						display: none !important;
					}


					.contentType6 {
						padding: 20rpx 30rpx;
						padding-bottom: 6rpx;
						border-radius: 10rpx;
						background-color: #f29100;
						color: #ffffff;
					}

					.contentType9 {
						width: 500rpx;
						padding: 0rpx 10rpx;
						border-radius: 10rpx;
						border: 1rpx solid #e4e7ed;
						background-color: #ffffff !important;
					}

					.content-type-right {
						flex-direction: row-reverse;
					}

					&.right {
						flex-direction: row-reverse;

						.content {
							background-color: #95ec69;
							margin-right: 28rpx;
							word-break: break-all;
							line-height: 36rpx;
							position: relative;

							&::after {
								content: '';
								display: block;
								width: 0;
								height: 0;
								border-top: 10rpx solid transparent;
								border-bottom: 10rpx solid transparent;
								border-left: 16rpx solid #95ec69;
								position: absolute;
								right: -16rpx;
								top: 30rpx;
							}
						}

						.contentType5 {
							background-color: #ffffff !important;

							&::after {
								border-left: 16rpx solid #fff !important;
							}
						}

						.contentType9 {
							background-color: #ffffff !important;

							&::after {
								border-left: 16rpx solid #fff !important;
							}
						}

						.contentType6 {
							background-color: #f29100;

							&::after {
								border-left: 16rpx solid #f29100;
							}
						}


					}

					&.left {
						.content {
							background-color: #ffffff;
							margin-left: 28rpx;
							word-break: break-all;
							line-height: 36rpx;
							position: relative;

							&::after {
								content: '';
								display: block;
								width: 0;
								height: 0;
								border-top: 10rpx solid transparent;
								border-bottom: 10rpx solid transparent;
								border-right: 16rpx solid #ffffff;
								position: absolute;
								left: -16rpx;
								top: 30rpx;
							}
						}

						.contentType6 {
							background-color: #f29100;

							&::after {
								border-right: 16rpx solid #f29100;
							}
						}

						.contentType9 {
							background-color: #ffffff !important;

							&::after {
								border-right: 16rpx solid #ffffff !important;
							}
						}
					}
				}

			}
		}

		.textArea-box {
			width: 100%;
			background-color: #FFFFFF;
			border-radius: 10upx;
			//padding-left: 30upx;
			min-height: 70upx;
			display: flex;
			align-items: center;

			textarea {
				width: 100%;
			}
		}

		.inputScroll {
			max-height: 180upx;
		}

		.bongfang {
			background-color: transparent;
		}



	}

	.showRedPopScrollView {

		//border: 1px solid red;
		::-webkit-scrollbar {
			display: none;
			height: 0;
			width: 0;
		}
	}
</style>
<style>
	page {
		background-color: #f1f1f1;
	}
</style>
