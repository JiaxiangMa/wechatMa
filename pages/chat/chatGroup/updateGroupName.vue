<template>
	<view class="content">
		 <u-navbar :is-back="true" title="修改群名称">
			 <view slot="right" class="right">
				 <u-button @click="updateGroupName" size="mini"  type="success"   :disabled="groupName.length<1">完成</u-button>
			 </view>
		 </u-navbar>
		 <view class="input">
			  <u-field label="群名称:"  @input="onInput" v-model="groupName" placeholder="请输入群名称"  :maxlength="maxLength" :clearable="true" :focus="true" :trim="true">
			  </u-field>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupId:"",
				groupName:"",
				maxLength:16
			};
		},
		onLoad:function(e){
			this.groupId=e.groupId;
			this.groupName=e.groupName;
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
				if(val.length>=16){
					uni.hideKeyboard();
					// #ifndef H5
					  plus.key.hideSoftKeybord();
					// #endif
					this.globalUtil.utilAlert("抱歉,群名称不能超过16个字!");
					return;
				}
			},
			
			updateGroupName:function(){
				let that=this;
				uni.hideKeyboard();
				// #ifndef H5
				  plus.key.hideSoftKeybord();
				// #endif
				if(that.groupName.length<1){
					this.globalUtil.utilAlert("群名称不能为空!","warning");
					return;
				}
				//util.utilLoading("正在修改群名称",true);
				let param={
					"id":this.groupId,
					"chatGroupName":this.groupName
				};
				that.$u.api.chatGroup.updateGroupName(param).then(res=>{
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
