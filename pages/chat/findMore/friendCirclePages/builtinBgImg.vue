<template>
	<view class="content">
		<u-navbar title="选择背景图" :background="{ background: '#ffffff'}"
					:border-bottom="false">
			<view class="slot-wrap" slot="right">
				<u-button :custom-style="customBtnStyle" size="mini" :disabled="submitFlag"
							:type="submitFlag?'info ':'success'" @click="handleLink()">设置</u-button>
			</view>		
		</u-navbar>
		<u-grid @click="clickGrid">
			<u-grid-item v-for="(item, index) in bgList" :key="index"  :index="index" :custom-style="item.isCheck?girdItemCustomStyle:{}">
				<u-image :src="item.src" width="200rpx" height="200rpx" mode="aspectFill"></u-image>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bgList:[],
			customBtnStyle: {
				fontSize: '30rpx',
				padding: '28rpx',
				width:'100rpx'
			},
			submitFlag:true,
			girdItemCustomStyle:{
				backgroundColor:'#71d5a1',
				// maring:'0rpx',
				 padding:'20rpx'
			}
		};
	},
	methods: {
		clickGrid(index){
			this.bgList.forEach((item,i)=>{
				if(index == i) item.isCheck = !item.isCheck;
				else item.isCheck = false;
			})
			this.submitFlag=false;
		},
	
		//处理跳转逻辑
		handleLink(){
			const item = this.bgList.find(it=>it.isCheck);
			if(item){
				this.$u.vuex('circleBgImg', item.src);
				this.$u.route({ type: 'back',delta:2});
			}
		},
		
	},
	onShow() {
		this.bgList = JSON.parse(JSON.stringify(this.circleBgList))
	}
};
</script>

<style lang="scss" scoped>
.content {
	.slot-wrap {
		display: flex;
		align-items: center;
		padding: 0 30rpx; 
	}
}
</style>
