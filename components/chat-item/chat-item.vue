<template>
  <view class="chat-item">
    <view class="u-flex u-row-between u-col-center u-p-b-10"
          :class="(item.isChecked&&showCheck==true)?'selected-msg':''">
      <template v-if="showCheck==true">
        <view v-show="item.msgType!=2">
          <u-checkbox shape="circle" active-color="#19be6b"
                      @change="selectChange($event,item)"
                      v-model="item.isChecked"
                      :name="item.id"
                      :key="item.id">
          </u-checkbox>
        </view>
      </template>
      <view  :style="showCheck==true?'width:98%;':'width:100%'"  :id="'msg_'+item.id">
        <template v-if="item.msgType==2">
          <view style="text-align: center;color:#aaaaaa;font-size: 28rpx;">{{item.createTime.substring(10,16)}}</view>
          <view  style="text-align: center;color:#909399;">{{parseContent(item)}}</view>
        </template>
        <template v-else>
          <view class="chat-time">
            <text  v-if="item.createTime&&item.createTime.length">
              {{item.createTime}}
            </text>
          </view>
          <view  :class="{'chat-container':true,'chat-location-me':item.meFlag}">
            <view class="chat-icon-container">
              <image
                  :class="{'chat-icon':true,'chat-icon-me':item.meFlag}"
                  :src="item.userAvatar?item.userAvatar:'/static/image/chat/defaultPhoto.png'" mode="aspectFill" />
            </view>
            <view class="chat-content-container">
              <view :class="{'chat-user-name':true,'chat-location-me':item.meFlag}">
                <text>
                  {{item.userName}}
                </text>
              </view>
              <!-- 文本信息 -->
              <template  v-if="item.contentType == 1">
                <view :class="{'chat-text-container':true,'chat-text-container-me u-text-reserve':item.meFlag}">
                  <u-parse :html="parseContent(item)"
                           :tag-style="{'img':'width:26px;height:26px;position:relative;top: 10rpx;'}">
                  </u-parse>
                </view>
              </template>
              <!-- 图片信息 -->
              <template v-if="item.contentType == 2">
                <view class="content contentType3" @tap="showPic(item)">
                  <u-image :width="parseImgSize(item,'w')"
                           :height="parseImgSize(item,'h')"
                           :lazy-load="false"
                           mode="widthFix"
                           :src="parseContent(item)">
                    <u-loading slot="loading"></u-loading>
                  </u-image>
                </view>
              </template>
              <!--视频信息-->
              <template v-if="item.contentType == 3">
                <view class="content contentType3" @click="boFangVideo(item)">
                  <view>
                    <image :src="parseContent(item)"
                           :style="'background-color:#000000;width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx'">
                    </image>
                  </view>
                  <view class="u-flex u-row-center u-col-center"
                        :style="'width:'+parseImgSize(item,'w')+'rpx;height:'+parseImgSize(item,'h')+'rpx;margin-top:-'+parseImgSize(item,'h')+'rpx;'">
                    <u-icon name="play-circle-fill" color="#f0f0f0" :size="80"></u-icon>
                  </view>
                </view>
              </template>
              <!-- 语音消息 -->
              <template v-if="item.contentType==4">
                <view   :class="{'content-audio-container':true,'chat-audio-container-me':item.meFlag}"
                        :style="'width:'+((JSON.parse(item.content).contentDuration)*2+130)+'rpx'">
                  <view class="voice_icon"
                        :class="[
												{ voice_icon_right: item.meFlag },
												{ voice_icon_left: !item.meFlag },
												{ voice_icon_right_an: item.anmitionPlay && item.meFlag },
												{ voice_icon_left_an: item.anmitionPlay && !item.meFlag }
											]"></view>
                  <view class="">{{JSON.parse(item.content).contentDuration}}''</view>
                </view>
              </template>
              <!-- 文件信息 -->
              <template v-if="item.contentType==5">
                <view class="contentType-file">
                  <view class="u-flex u-row-between u-col-center"
                        :class="item.meFlag?'u-flex-reserve':''"
                        style="padding: 20rpx 10rpx 10rpx 20rpx;">
                    <view  style="width: 300rpx;">
                      <view class="u-line-2" style="width: 300rpx;font-size: 32rpx;">{{JSON.parse(item.content).fileName}}</view>
                      <view class="u-m-t-10" style="font-size: 24rpx;color: #909399;">{{JSON.parse(item.content).fileSize}}</view>
                    </view>
                    <view>
                      <view style="width: 90rpx;">
                        <u-image v-if="JSON.parse(item.content).fileSuffix.indexOf('xls')!=-1"
                                 src="@/static/image/fileType/xls.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill">
                        </u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileSuffix==='doc'"
                                 src="@/static/image/fileType/docx.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileSuffix==='txt'"
                                 src="@/static/image/fileType/txt.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileSuffix==='ppt'"
                                 src="@/static/image/fileType/ppt.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileSuffix==='pdf'"
                                 src="@/static/image/fileType/pdf.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileType==7||JSON.parse(item.content).fileSuffix==='zip'"
                                 src="@/static/image/fileType/zip.png"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else-if="JSON.parse(item.content).fileSuffix==='img'"
                                 :src="fileObj.fileUrl"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill"></u-image>
                        <u-image v-else
                                 width="80rpx" height="80rpx"
                                 src="@/static/image/fileType/unknowfile.png"
                                 mode="aspectFill"></u-image>
                      </view>
                    </view>
                  </view>
                  <view style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;"
                        :class="item.meFlag?'u-text-reserve':''"
                        class="u-border-top">聊呗</view>
                </view>
              </template>
              <!-- 红包信息 -->
              <template v-if="item.contentType==7">
                <view :style="(JSON.parse(item.content).receiveAllFlag==true||redBagIsReceive(item)==true)?'opacity: 0.5;':''"
                      class="contentType-redbag">
                  <view    class="u-flex u-row-between u-col-center">
                    <view class="u-m-r-20">
                      <u-image v-if="JSON.parse(item.content).receiveAllFlag==false"
                               mode="scaleToFill"
                               src="/static/image/chat/redbag.png"
                               width="70rpx" height="80rpx">
                      </u-image>
                      <u-image v-else
                               mode="scaleToFill"
                               src="/static/image/chat/redbag-open.png"
                               width="70rpx" height="80rpx">
                      </u-image>
                    </view>
                    <view style="font-size: 36rpx;min-width: 320rpx;"
                          :class="item.meFlag?'u-text-reserve':''">
                      <view class="u-line-1">{{JSON.parse(item.content).redBagRemark}}</view>
                      <view   v-if="JSON.parse(item.content).receiveAllFlag==true"
                              style="font-size: 12px;">
                        <text>已被领完</text>
                      </view>
                      <view v-else>
                        <view   v-if="redBagIsReceive(item)==true&&chatGroupType!=0"
                                style="font-size: 12px;">
                          <text>已经领取</text>
                        </view>
                      </view>
                    </view>
                  </view>
                  <view :class="item.meFlag?'u-text-reserve':''"
                        style="font-size: 24rpx;border-top: 1rpx solid #ffffff;margin-top: 10rpx;padding-top: 10rpx;">微信红包</view>
                </view>
              </template>
              <!-- 名片信息 -->
              <template v-if="item.contentType==8">
                <view  class="contentType-file">
                  <!--  :class="item.meFlag?'u-flex-reserve':''" -->
                  <view class="u-flex u-row-between u-col-center"
                        style="padding: 20rpx 10rpx 10rpx 20rpx;">
                    <view  style="width: 300rpx;" :class="item.meFlag?'u-text-reserve':''">
                      <view class="u-line-2" style="width: 300rpx;font-size: 32rpx;">{{formatForwardUserInfo(item)}}</view>
                    </view>
                    <view>
                      <view style="width: 90rpx;">
                        <u-image v-if="JSON.parse(item.content).avatar!=null"
                                 :src="JSON.parse(item.content).avatar"
                                 width="80rpx" height="80rpx"
                                 mode="aspectFill">
                          <view slot="error">
                            <u-image src="@/static/image/chat/defaultPhoto.png"  mode="aspectFill" width="80" height="80" border-radius="12">
                            </u-image>
                          </view>
                        </u-image>
                      </view>
                    </view>
                  </view>
                  <view   style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;"
                          :class="item.meFlag?'u-text-reserve':''"
                          class="u-border-top">个人名片</view>
                </view>
              </template>
              <!-- 位置信息 -->
              <template  v-if="item.contentType==9">
                <view   class="contentType-location">
                  <view class="u-flex u-row-between u-col-center">
                    <view style="margin-left: -10rpx;">
                      <u-icon name="map-fill" size="80" color="#19be6b"></u-icon>
                    </view>
                    <view   :class="item.meFlag?'u-text-reserve':''"
                            style="margin-top:16rpx;margin-bottom: 8rpx;">
                      <view class="u-line-2" style="max-height: 70rpx;">{{JSON.parse(item.content).name}}</view>
                      <view class="u-line-2" style="font-size: 24rpx;color: #909399;margin-top: 10rpx;">{{JSON.parse(item.content).address}}</view>
                    </view>
                  </view>
                </view>
              </template>
              <!-- 聊天记录 -->
              <template  v-if="item.contentType==10">
                <view   class="contentType-file"
                        @click="openChatRecord(item)"
                        :class="item.meFlag?'u-text-reserve':''" >
                  <view   style="padding: 20rpx 10rpx 10rpx 20rpx;">
                    <view  style="width: 400rpx;">
                      <view class="u-line-2" style="font-size: 32rpx;">{{parseChatRecordTitle(item)}}</view>
                    </view>
                    <view class="u-m-t-10 u-m-b-10">
                      <view  style="font-size: 28rpx;color: #aaaaaa;"
                             class="u-line-1"
                             v-for="(contentItem,contentIndex) in JSON.parse(item.content).splice(0,3)"
                             :key="contentIndex">
                        <text>{{parseChatRecord(contentItem)}}</text>
                      </view>
                      <view  v-if="JSON.parse(item.content).length>3"
                             style="font-size: 28rpx;color: #aaaaaa;">
                        <text>......</text>
                      </view>
                    </view>
                  </view>
                  <view style="font-size: 12px;padding: 10rpx 20rpx;color: #909399;" class="u-border-top">聊天记录</view>
                </view>
              </template>

              <!-- 图文或者视频文字 -->
              <template v-if="item.contentType==11||item.contentType==12"  >
                <view  class="contentType-fixed">
                  <view class="u-m-b-10" :class="item.meFlag?'u-text-reserve':''">
                    <u-parse :html="formatComponetContent(item,1)"
                             :tag-style="{'img':'width:26px;height:26px;position:relative;top: 10rpx;'}">
                    </u-parse>
                  </view>
                  <!-- 图片文字组合-->
                  <view v-if="item.contentType==11"
                        @tap="showPic(item)"
                        class="u-flex u-row-center u-col-center">
                    <u-image :width="parseImgSize(item,'w')" :height="parseImgSize(item,'h')"
                             :lazy-load="false" :border-radius="10"
                             mode="widthFix" :src="formatComponetContent(item,2)">
                      <u-loading slot="loading"></u-loading>
                    </u-image>
                  </view>
                  <!-- 视频文字组合-->
                  <view v-else  class="u-flex u-row-left u-col-center">
                    <view @click="boFangVideo(item)">
                      <view>
                        <image :src="formatComponetContent(item,2)"
                               :style="(formatComponetContent(item,2)==''?'background-color:#000000;':'')+
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
              </template>
            </view>
          </view>
        </template>
      </view>
    </view>
    <!-- 视频预览 -->
    <view v-if="previewVideoFlag==true">
      <videoPlayer :previewVideoFlag="previewVideoFlag"
                   :previewVideoSrc="previewVideoSrc"
                   @quitPlay="stopPlayVideo()"></videoPlayer>
    </view>
    <!-- 内部聊天记录 -->
    <view v-if="previewChatRecordFlag==true">
      <inner-chat-record :contentObjStr="chatRecotdContentObjStr"
                         :innerRecordTitle="innerRecordTitle"
                         @closeRecordPop="closeRecordPop"></inner-chat-record>
    </view>
  </view>
</template>

<script>
import globalUtil from '@/util/util.js';
import parseHtml from '@/util/html-parser.js';
import videoPlayer from '@/components/videoPlayer/videoPlayer.vue';
import innerChatRecord from '@/components/chat-item/chat-record-content-mask.vue';
export default {
  name:"chat-item",
  components: {videoPlayer,innerChatRecord},
  props: {
    item: {
      type: Object,
      default: function() {
        return {
          id: '',
          msgType: '',
          userName: '',
          userAvatar: '',
          content:{},
          meFlag: false,
          createTime:'',
        }
      }
    },
    chatGroupType:{
      type:Number,
      default:1
    },
    showCheck:{
      type:Boolean,
      default:true
    },
    previewSrcArr:{
      type:Array,
      default:[],
    }
  },
  data() {
    return {
      currentUserInfo:'',
      previewVideoFlag:false,
      previewVideoSrc:'',
      previewChatRecordFlag:false,
      chatRecotdContentObjStr:'',
      innerRecordTitle:'',
    };
  },
  mounted:function(){
    this.currentUserInfo=this.vuex_userInfo;
  },
  methods:{
    //复选框点击事件
    selectChange:function(event,msg){
      let that=this;
      //console.log("event",event);
      if(event.value==true){
        that.$emit("change",msg,0);
      }else{
        that.$emit("change",msg,1);
      }
    },
    //内容格式化
    parseContent:function(item){
      let msgType= item.msgType;
      let contentType=item.contentType;
      //信息类型 1文本
      if(contentType==1){
        let content= JSON.parse(item.content);
        let msgStr=content.text;
        let sysType= content.contentType; //内容类型
        let optionType= content.optionType;
        //系统信息
        if(sysType!=null&&sysType!=undefined&&sysType==1){
          if(msgStr.length>0){
            return "群主发布了新的公告";
          }
          else{
            return "群主作废了群公告";
          }
        }
        //用户撤回信息
        if(optionType==-2){
          return item.userName+":撤回了一条消息";
        }
        //红包类型
        if(sysType==7){
          //单聊
          if(this.chatGroupType==0){
            if(item.fromUserId!=this.currentUserInfo.id){
              return item.userName+"领取了你的红包";
            }
          }
          //群聊
          else{
            if(item.fromUserId!=this.currentUserInfo.id){
              return item.userName+"领取了红包";
            }else{
              return "你领取了红包";
            }
          }
        }
        let transText= globalUtil.transform(msgStr, "", "");
        return transText;
        //return parseHtml(transText);
      }
      else if(contentType==3){
        let videoContent= JSON.parse(item.content);
        let subImgInfo= videoContent.subImgInfo;
        if(subImgInfo){
          return subImgInfo.url;
        }
        else{
          return "";
        }
      }
      else{
        return JSON.parse(item.content).url;
      }
    },
    //图片信息计算高度
    parseImgSize:function(item,type){
      if (type == "h") {
        let height = JSON.parse(item.content).height;
        if(item.contentType==11||item.contentType==12){
          height= JSON.parse(item.content).fileInfo.height;
          //console.log("附件高度",height);
        }
        if (height == null || height == undefined) {
          return "auto";
        } else {
          return height * 2;
        }
      } else {
        let width = JSON.parse(item.content).width;
        if(item.contentType==11||item.contentType==12){
          width= JSON.parse(item.content).fileInfo.width;
          //console.log("附件宽度",width);
        }
        if (width == null || width == undefined) {
          return 300;
        } else {
          return width * 2;
        }
      }
    },
    formatForwardUserInfo:function(item){
      let that=this;
      let forwardUser= JSON.parse(item.content);
      let currentUserId=that.vuex_userInfo.id;
      if(forwardUser.id==currentUserId){
        return "我";
      }else{
        return forwardUser.userName;
      }
    },
    //红包是否领取过
    redBagIsReceive:function(item){
      let that=this;
      let contentObj= JSON.parse(item.content);
      let receiveUsers= contentObj.receiveUsers;
      if(receiveUsers!=null&&receiveUsers!=undefined){
        for (var i = 0; i < receiveUsers.length; i++) {
          let receiveInfo= receiveUsers[i];
          let receiveUserId= receiveInfo.userId;
          if(receiveUserId==that.vuex_userInfo.id){
            //that.globalUtil.utilAlert("您已经领取过红包~");
            return true;
          }
        }
      };
      return false;
    },
    //解析聊天记录类型的标题
    parseChatRecordTitle:function(item){
      let title="聊天记录";
      let titleSet=new Set();
      let obj= JSON.parse(item.content);
      for (let i = 0; i < obj.length; i++) {
        let userName= obj[i].userName;
        titleSet.add(userName);
      }
      let userNames=Array.from(titleSet);
      if(userNames.length<3){
        return userNames.join("与")+"的聊天记录";
      }
      else{
        return title;
      }
    },

    //解析群聊记录
    parseChatRecord:function(content){
      let userName= content.userName;
      let contentType=content.contentType;
      let innerContent=content.content;
      let str=userName+": [不可识别的信息类型]";
      switch (contentType){
        case 1:
          let text=JSON.parse(innerContent).text;
          text=text.replace(/face/g, '');
          //let transText= this.globalUtil.transform(text, "", "");
          str=userName+": "+text;
          break;
        case 2:
          str=userName+": [图片]";
          break;
        case 3:
          str=userName+": [视频]";
          break;
        case 4:
          str=userName+": [语音]";
          break;
        case 5:
          str=userName+": [文件]";
          break;
        case 7:
          str=userName+": [红包]";
          break;
        case 8:
          str=userName+": [名片]";
        case 9:
          str=userName+": [位置]";
          break;
        case 10:
          str=userName+": [聊天记录]";
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

    //格式化组合信息内容
    formatComponetContent:function(item,type){
      let that=this;
      if(type==1){
        let msgStr = JSON.parse(item.content).textDesc;
        let transText = this.globalUtil.transform(msgStr, "", "");
        return transText;
      }
      if(type==2){
        let content= JSON.parse(item.content);
        if(item.contentType==12){
          let subImgInfo= content.fileInfo.subImgInfo;
          if(subImgInfo){
            return subImgInfo.url;
          }else{
            return "";
          }
        }
        if(item.contentType==11){
          return content.url;
        }

      }
    },

    //预览图片
    showPic(item) {
      let that=this;
      //console.log("item",item);
      let content = JSON.parse(item.content);
      let src = content.url;
      //console.log("src", src);
      let subType= content.subContentType;
      if(subType){
        uni.previewImage({
          urls: [src],
          longPressActions: {
            itemList: ['保存图片','识别二维码'],
            success: function(data) {
              //console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
              if(data.tapIndex==0){
                uni.downloadFile({
                  url: src, //仅为示例，并非真实的资源
                  success: (res) => {
                    if (res.statusCode === 200) {
                      console.log('下载成功',res.tempFilePath);
                      let filePath=res.tempFilePath;
                      uni.saveImageToPhotosAlbum({
                        filePath:filePath,
                        success: function () {
                          that.globalUtil.utilAlert("保存成功");
                        },
                        complete:function(res){
                          console.log("保存到相册结果",res)
                        }
                      });
                    }
                  }
                });
              }if(data.tapIndex==1){
                console.log("识别二维码",content);
                let qrInfo= content.qrInfo;
                if(qrInfo&&qrInfo.length>0){
                  let qrObj=JSON.parse(qrInfo);
                  let businessCode=qrObj.businessCode;
                  console.log("businessCode",businessCode);
                  let valueInfo= qrObj.qrValue;
                  if(businessCode){
                    //这里识别到二维码信息
                    console.log("这里识别到二维码信息",valueInfo);
                    //这里关闭
                    uni.closePreviewImage({
                      success:function(){
                        that.qrModelInfo=qrObj;
                        that.qrModelFlag=true;
                      }
                    });
                  }else{
                    that.globalUtil.utilAlert("无效的二维码!");
                  }
                }else{
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
      }else{
        uni.previewImage({
          urls: that.previewSrcArr?that.previewSrcArr:[src], //[src]
          current:src
        });
      }
      return;
    },
    //播放视频
    boFangVideo:function(item){
      let that=this;
      let videoContent = JSON.parse(item.content);
      let videoSrc= videoContent.url;
      this.previewVideoSrc=videoSrc;
      this.previewVideoFlag=true;
    },
    //关闭播放视频
    stopPlayVideo:function(){
      this.previewVideoFlag=false;
    },
    //查看聊天记录
    openChatRecord:function(item){
      let that=this;
      that.chatRecotdContentObjStr=JSON.stringify(item);
      that.innerRecordTitle=that.parseChatRecordTitle(item);
      that.previewChatRecordFlag=true;
    },
    closeRecordPop:function(value){
      let that=this;
      that.previewChatRecordFlag=false;
      that.chatRecotdContentObjStr="";
    }
  }
}
</script>

<style scoped lang="scss">
.selected-msg{
  border:1px solid #909399;
}
.chat-item{
  display: flex;
  flex-direction: column;
  padding: 20rpx;
}
.chat-time{
  padding: 4rpx 0rpx;
  text-align: center;
  font-size: 28rpx;
  color: #aaaaaa;
}
.chat-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

}
.chat-location-me{
  flex-direction: row-reverse;
  text-align: right;
}
.chat-icon-me{
  margin-right: 10rpx;
}
.chat-icon-container{
  margin-top: 12rpx;
}
.chat-icon{
  width: 80rpx;
  height: 80rpx;
  border-radius: 10rpx;
  background-color: #ffffff;
}
.chat-content-container{
  margin: 0rpx 15rpx;
}
.chat-user-name{
  font-size: 26rpx;
  color: #888888;
}
.chat-text-container{
  word-break: break-word;
  background-color: #ffffff;
  border-radius: 10rpx;
  padding: 25rpx 20rpx;
  margin-top: 5rpx;
  /* #ifndef APP-NVUE */
  max-width: 500rpx;
  /* #endif */
}
.chat-text-container-me{
  background-color: #95ec69;
}
.char-richtext{
  font-size: 30rpx;
  background-color: #ffffff;
  /* #ifndef APP-NVUE */
  word-break: break-all;
  /* #endif */
  /* #ifdef APP-NVUE */
  max-width: 500rpx;
  /* #endif */
}
.char-richtext-me{
  font-size: 30rpx;
  color: #000000;
  background-color: #95ec69;
}
.emoji{
  width:40rpx !important;
  height:40rpx !important;
  position: relative;
  top: 10rpx;
}
//语音信息样式
.content-audio-container{
  background-color: #ffffff;
  border-radius: 10rpx;
  padding: 25rpx 20rpx;
  margin-top: 5rpx;
  /* #ifndef APP-NVUE */
  max-width: 500rpx;
  /* #endif */
  display: flex;
  flex-direction: row;
  align-items: center;
  .voice_icon{
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
//我的语音信息样式
.chat-audio-container-me{
  background-color: #95ec69;
  flex-direction: row-reverse;
}
//文件信息样式
.contentType-file{
  width: 450rpx;
  padding: 0;
  border-radius: 10rpx;
  border: 1rpx solid #e4e7ed;
  background-color: #ffffff !important;
}
//红包
.contentType-redbag{
  padding:20rpx 30rpx;
  padding-bottom: 6rpx;
  border-radius: 10rpx;
  background-color:#f29100;
  color: #ffffff;
}
//位置
.contentType-location{
  width: 500rpx;
  padding:0rpx 10rpx;
  border-radius: 10rpx;
  border: 1rpx solid #e4e7ed;
  background-color: #ffffff !important;
}
//组合信息
.contentType-fixed{
  border-radius: 10rpx;
  font-size: 32rpx;
  word-break: break-word;
  padding:20rpx;
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

.u-flex-reserve{
  flex-direction: row-reverse;
}
.u-text-reserve{
  text-align: left;
}
</style>
