<template>
	<view>
		<u-navbar   :is-back="true" title="笔记" :title-bold="true" :title-size="34"
					:background="{background:'#f1f1f1'}"
					title-color="#404133" :border-bottom="false"  z-index="1001">
			<view slot="right" class="u-m-r-20" @click="optionNote">
				<u-icon name="more-dot-fill" size="48"></u-icon>
			</view>		
		</u-navbar>
		
		<view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			optionNote:function(){
				let that=this;
				console.log("操作笔记");
			}
		}
	}
</script>

<style lang="scss">

</style>
