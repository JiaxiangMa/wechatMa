<template>
  <view class="content">
    <view>
      <u-navbar :is-back="false" title="" :background="{backgroundColor:'#f1f1f1'}">
        <view class="custom-navbar">
          <view class="nav-left u-font-32" @click="customBack">
            <!-- <u-icon  name="arrow-left" color="#000000" size="34"></u-icon> -->
            <text>取消</text>
          </view>
          <view class="nav-center u-flex u-row-center u-col-center">
            <view>{{currentChatGroup.chatGroupName}}</view>
            <view v-if="currentChatGroup.memberCounts!=undefined&&currentChatGroup.chatGroupType!=0">
              {{"("+currentChatGroup.memberCounts+")"}}</view>
            <view v-if="currentChatGroup.memberTipStatus==1">
              <u-icon v-show="currentChatGroup.memberTipStatus==1" name="/static/image/chat/pinbi.png"
                      color="#c0c4cc" size="28"></u-icon>
            </view>
          </view>
          <view class="nav-right">
            <u-icon @click="openShareAction" name="zhuanfa" color="#606266" size="40"></u-icon>
          </view>
        </view>
      </u-navbar>
    </view>
    <scroll-view :scroll-y="true" class="hidden-scroll-bar" :style="'height:'+scrollViewHeight+'px'"
                 :scroll-into-view="scrollIntoView"
                 @scrolltoupper="lower"
                 @scroll="scrollViewScrolling"
                 :scroll-with-animation="scrollAnimation">
      <view v-for="(msgItem,index) in messageList" :key="index">
        <chat-item :chatGroupType="currentChatGroup.chatGroupType"
                   @change="changeChecked"
                   :item="msgItem">
        </chat-item>
      </view>
    </scroll-view>
    <u-action-sheet :list="sendTypeList" v-model="sendTypeShow" @click="sendTypeClick" :cancel-btn="true"></u-action-sheet>
  </view>
</template>

<script>
import chatItem from '@/components/chat-item/chat-item.vue';
export default {
  components: {
    chatItem
  },
  data() {
    return {
      scrollViewHeight: 0,
      currentChatGroup: {
        id: '',
        chatGroupName: '群聊',
        chatGroupType: 1
      },
      loadingmMore: false,
      pageNum: 1,
      pageSize: 10,
      messageList: [],
      scrollAnimation: false,
      scrollIntoView: '',
      selectMsgId:"",
      selectedMsgList:new Set(),
      sendTypeList:[
        {text: '逐条转发',value:1},
        {text: '合并转发',value:2},
      ],
      sendTypeShow:false,
    }
  },
  watch:{
    messageList(newValue,oldValue){
      //console.log("监听信息记录有变化",newValue.length);
      // this.$u.vuex("vuex_messageList",newValue);
    }
  },
  onReady() {
    let scrollViewHeight = this.$u.sys().windowHeight * 0.88;
    this.scrollViewHeight = scrollViewHeight;
  },

  onLoad: function(option) {
    let that = this;
    console.log("option",option);
    if(option.pageNum){
      that.pageNum=Number(option.pageNum);
    }
    if(option.selectMsgId){
      that.selectMsgId=option.selectMsgId;
    }
    if(option.groupId){
      that.currentChatGroup.id=option.groupId;
      that.getChatGroupInfo();
    }
  },
  methods: {
    customBack: function() {
      uni.navigateBack();
    },
    //获取群组信息
    getChatGroupInfo: function() {
      let that = this;
      let param = {
        chatGroupId: that.currentChatGroup.id
      };
      that.scrollAnimation=false;
      that.$u.api.chatGroup.getChatGroupInfo(param).then(res => {
        if (res.code == 200) {
          let data = res.data;
          that.currentChatGroup = data.imGroup;
          console.log("群信息", that.currentChatGroup);
          //that.getHistoryMessage();
          that.messageList=JSON.parse(JSON.stringify(that.vuex_messageList));
          that.$nextTick(function(){
            setTimeout(function(){
              that.scrollAnimation=true;
              that.scrollIntoView="msg_"+that.selectMsgId;
            },300)
          })
        } else {
          that.globalUtil.utilAlert("群信息获取失败");
          return;
        }
      })
    },
    //获取历史消息,带分页
    getHistoryMessage: function() {
      let that = this;
      that.messageList = [];
      that.globalUtil.utilLoading("页面加载中...");
      let param = {
        chatGroupId: that.currentChatGroup.id,
        pageNum: 1,
        pageSize: 10,
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
            that.messageList = data.reverse();
            console.log("信息列表", that.messageList.length);
          }
          uni.hideLoading();
        } else {
          that.globalUtil.utilAlert("群信息获取失败");
          uni.hideLoading();
          return;
        }
      })
    },

    scrollViewScrolling:function(){
    },
    //向上滑动加载更多历史信息数据
    lower: function() {
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
      that.loadingmMore = true;
      let oldScrollViewId=that.messageList[0].id;
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
            setTimeout(function(){
              that.scrollIntoView="msg_"+oldScrollViewId;
              setTimeout(function(){
                that.loadingmMore=false;
              },500);
            },500)
          } else {
            that.pageNum--;
            that.loadingmMore = false;
            return;
          }
        } else {
          that.pageNum--;
          that.loadingmMore = false;
          return;
        }
      })
    },
    //子组件传递过来的
    changeChecked:function(msg,option){
      if(option==0){
        console.log("添加",msg.id);
        this.selectedMsgList.add(msg);
      }
      else{
        this.selectedMsgList.delete(msg);
      }
    },
    //打开发送类型选择器
    openShareAction:function(){
      let size= this.selectedMsgList.size;
      if(size<1){
        this.globalUtil.utilAlert("请选择要转发的信息!");
        return;
      }
      this.sendTypeShow=true;
      return;
    },
    //转发
    sendTypeClick:function(index){
      let sendType= this.sendTypeList[index].value;
      let sendTypeText=this.sendTypeList[index].text;
      console.log(`点击了第${index + 1}项，内容为：${sendTypeText}`);
      this.sendMushMsg(sendType);
    },
    //合并发送
    sendMushMsg:function(sendType){
		let that=this;
		let selectList= Array.from(this.selectedMsgList);
		selectList.sort(function(x,y){
        if(x.id<y.id){
          return -1;
        }else{
          return 1;
        }
		})
		let param={
			msgList:encodeURIComponent(JSON.stringify(selectList)),
			sendType:sendType,
			fromChatGroupId:that.currentChatGroup.id,
			delta:2,
		}
      console.log("转发的参数",param);
      that.$u.route({
        url:'/pages/chat/chatGroup/msgForward',
        params:param
      })
    },
  },
}
</script>

<style scoped lang="scss">
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

.list-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 24rpx;
  overflow: hidden;
  color: #323233;
  font-size: 28rpx;
  line-height: 48rpx;
  background-color: #fff;
  align-items: center;
}
</style>
<style>
page {
  background-color: #f1f1f1;
}
</style>
