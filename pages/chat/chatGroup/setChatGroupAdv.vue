<template>
	<view class="content">
		 <u-navbar :is-back="true" title="设置群公告">
			 <view slot="right" class="right">
				 <u-button @click="updateGroupAdv" size="mini"  type="success"   :disabled="groupAdv.length<1">完成</u-button>
			 </view>
		 </u-navbar>
		 <view class="input">
			  <u-field   label-width="10" label="" 
						 type="textarea"	
						@input="onInput" v-model="groupAdv" placeholder="请输入群公告"  
						:maxlength="maxLength" :clearable="true" :focus="true" :trim="true">
			  </u-field>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupId:"",
				groupAdv:"",
				maxLength:300
			};
		},
		onLoad:function(e){
			this.groupId=e.groupId;
			let adv=e.chatNotice;
			if(adv==undefined||adv==null){
				adv="";
			}
			this.groupAdv=adv;
		},
		onBackPress:function(event){
			console.log("监听修改群名称页面回退");
			//this.$store.commit('setPageRefresh',false);
			// #ifndef H5
			 plus.key.hideSoftKeybord();
			// #endif
			uni.hideKeyboard();
		},
		
		methods:{
			onInput:function(val){
				let that=this;
				if(val.length>=300){
					uni.hideKeyboard();
					// #ifndef H5
					  plus.key.hideSoftKeybord();
					// #endif
					this.globalUtil.utilAlert("抱歉,群公告内容不能超过300个字!");
					return;
				}
			},
			
			updateGroupAdv:function(){
				let that=this;
				uni.hideKeyboard();
				// #ifndef H5
				  plus.key.hideSoftKeybord();
				// #endif
				if(that.groupAdv.length<1){
					this.globalUtil.utilAlert("群公告不能为空!");
					return;
				}
				//util.utilLoading("正在修改群名称",true);
				let param={
					"id":this.groupId,
					"chatNotice":this.groupAdv
				};
				that.$u.api.chatGroup.updateGroupNotice(param).then(res=>{
					if(res.code==200){
						//uni.hideLoading();
						// #ifndef H5
						  plus.key.hideSoftKeybord();
						// #endif
						uni.hideKeyboard();
						uni.navigateBack({
							delta:1,
							animationType:'pop-out',
							animationDuration:200
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
   .right{
	   margin: 0px 10upx;
   }
</style>
