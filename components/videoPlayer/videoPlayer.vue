<template>
	<view>
		<u-mask :show="previewVideoFlag"  :custom-style="customMaskStyle">
			<view @tap.stop class="playBox"  :style="'height:'+(winHeight/10*9)+'px;width:'+(winWidth-20)+'px;'">
					 <video :style="'height:'+(winHeight/10*8)+'px;width:'+(winWidth-20)+'px'"
							:controls="true" :show-fullscreen-btn="false"  :autoplay="true" 
							:src="previewVideoSrc"  @ended="quitPlay()">
						<u-button hover-class="none"  @click="quitPlay()">关闭</u-button>	
					</video>
					<view class="quitBox">
						<u-button hover-class="none"  @click="quitPlay()">关闭</u-button>
					</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		name:"videoPlayer",
		props:{
			previewVideoFlag:{
				type:Boolean,
				default:false,
				required:true
			},
			previewVideoSrc:{
				type:String,
				default:"",
				required:true
			}
		},
		data() {
			return {
				customMaskStyle:{
					display:"flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					//paddingTop:'100rpx',
					border:'1px solid red',
					width:"100%",
					height:"100%",
				},
				winHeight:0,
				winWidth:0
			};
		},
		created:function(){
			this.winHeight=this.$u.sys().windowHeight;
			this.winWidth=this.$u.sys().windowWidth;
		},
		methods:{
			quitPlay:function(){
				this.$emit("quitPlay");
			}
		}
	}
</script>

<style lang="scss">
	.playBox{
		 display: flex;
		 flex-direction: column;
		 justify-content: center;
		 align-items: center;
	}
	.quitBox{
		width: 100%;
	}
</style>
