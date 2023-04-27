<template>
	<view>
		<u-navbar   :is-back="true" title="收藏" :title-bold="true" :title-size="34"
					:background="{background:'#f1f1f1'}"
					title-color="#404133" :border-bottom="false"  z-index="1001">
			<view slot="right" class="u-m-r-20" @click="toAddCollection">
				<u-icon name="plus-circle" size="48"></u-icon>
			</view>		
		</u-navbar>
		<view class="u-p-20">
			<view>
				 <u-search 
					 v-model="searchWord"
					 placeholder="搜索群名,标签等" 
					 shape="square" :height="80" 
					 :show-action="false"
					:input-style="{fontSize:'34rpx'}" 
					 color="#000000" bg-color="#ffffff" search-icon-color="#909399"
					 @change="search"
					 @blur="search" @search="search">
				</u-search>
			</view>
			 <view class="u-m-t-10" style="background-color: #ffffff;border-radius: 10rpx;">
			 	<u-dropdown ref="uDropdown" @open="open" @close="close" border-bottom>
					<u-dropdown-item v-model="collType" height="800"  title="类型" :options="collTypeOptions" @change="typeChange"></u-dropdown-item>
					<u-dropdown-item v-model="collTag"  height="800"  title="标签" :options="collTagOptions"  @change="tagChange"></u-dropdown-item>
			 	</u-dropdown>
			 </view>
			 <view v-if="searchCase.tagCase||searchCase.typeCase" class="u-flex u-row-left u-col-center u-m-t-6">
			 	<view v-if="searchCase.typeCase" class="u-m-r-10">
			 		<u-tag :text="searchCase.typeCase.label" mode="dark" type='info' 
					 @close="tagClose(0)"  :closeable ="true"></u-tag>
			 	</view>
			 	<view v-if="searchCase.tagCase" class="u-m-l-10">
			 		<u-tag :text="searchCase.tagCase.label" mode="dark"  type='info' 
					 @close="tagClose(1)" :closeable ="true"></u-tag>
			 	</view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchWord:'',
				searchCase:{
					typeCase:null,
					tagCase:null,
				},
				collType:'',
				collTag:'',
				collTypeOptions:[
					{label: '笔记',value: "1"},
					{label: '图片与视频',value: "2"},
					{label: '文件',value: "3"},
					{label: '链接',value: "4"},
					{label: '位置',value: "5"},
					{label: '聊天记录',value: "6"},
				],
				collTagOptions:[
					{label: '即时通讯',value: "1"},
					{label: '湖南',value: "2"},
					{label: '旅游',value: "3"},
					{label: '标签1',value: "4"},
					{label: '标签2',value: "5"},
					{label: '标签3',value: "6"},
					{label: '标签11',value: "7"},
					{label: '标签12',value: "8"},
					{label: '标签13',value: "9"},
					{label: '标签21',value: "10"},
					{label: '标签22',value: "11"},
					{label: '标签23',value: "12"},
					{label: '标签31',value: "13"},
					{label: '标签32',value: "14"},
				]
			};
		},
		methods:{
			//去添加收藏
			toAddCollection:function(){
				let that=this;
				console.log("去添加收藏");	
				that.$u.route("/pages/my/collection/insert-collection-content");
			},
			search:function(e){
				let that=this;
				console.log("收藏搜索关键字",e);	
			},
			open(index) {
				// 展开某个下来菜单时，先关闭原来的其他菜单的高亮
				// 同时内部会自动给当前展开项进行高亮
				this.$refs.uDropdown.highlight();
			},
			close(index) {
				// 关闭的时候，给当前项加上高亮
				// 当然，您也可以通过监听dropdown-item的@change事件进行处理
				this.$refs.uDropdown.highlight(index);
			},
			//收藏类型筛选
			typeChange:function(value){
				let that=this;
				that.searchCase.typeCase=null;
				for (var i = 0; i < this.collTypeOptions.length; i++) {
					let type= this.collTypeOptions[i];
					if(type.value==value){
						that.searchCase.typeCase=type;
					}
				}
			},
			//收藏标签筛选
			tagChange:function(value){
				let that=this;
				that.searchCase.tagCase=null;
				for (var i = 0; i < this.collTagOptions.length; i++) {
					let tag= this.collTagOptions[i];
					if(tag.value==value){
						that.searchCase.tagCase=tag;
					}
				}
			},
			//关闭标签
			tagClose:function(index){
				let that=this;
				that.$refs.uDropdown.highlight();
				if(index==0){
					that.collType="";
					that.searchCase.typeCase=null;
				}
				if(index==1){
					that.collTag="";
					that.searchCase.tagCase=null;
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
