<template xlang="wxml" minapp="mpvue">
	<view></view>
</template>
<script>
export default {
	name: 'tki-file-manager',
	props: {},
	data() {
		return {
		}
	},
	methods: {
		_openFile() {
				// #ifdef APP-PLUS
				if (plus.os.name.toLowerCase() != "android") {
					uni.showModal({
						title: '提示',
						content: '仅支持Android平台',
						success: function (res) {}
					});
					return false
				}
				let that = this
				// java 代码来自 http://www.cnblogs.com/panhouye/archive/2017/04/23/6751710.html
				let main = plus.android.runtimeMainActivity();
				let Intent = plus.android.importClass("android.content.Intent");
			
				// 
				let fileIntent = new Intent(Intent.ACTION_GET_CONTENT)
				//fileIntent.setType(“image/*”);//选择图片
				//fileIntent.setType(“audio/*”); //选择音频
				//fileIntent.setType(“video/*”); //选择视频 （mp4 3gp 是android支持的视频格式）
				//fileIntent.setType(“video/*;image/*”);//同时选择视频和图片
				fileIntent.setType("*/*"); //无类型限制
				////关键！多选参数
				fileIntent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
				fileIntent.addCategory(Intent.CATEGORY_OPENABLE);
				main.startActivityForResult(fileIntent, 1);
				// 获取回调
				main.onActivityResult = function (requestCode, resultCode, data) {
					let Activity = plus.android.importClass("android.app.Activity");
					let ContentUris = plus.android.importClass("android.content.ContentUris");
					let ClipData=plus.android.importClass("android.content.ClipData");
					let Cursor = plus.android.importClass("android.database.Cursor");
					let Uri = plus.android.importClass("android.net.Uri");
					let Build = plus.android.importClass("android.os.Build");
					let Environment = plus.android.importClass("android.os.Environment");
					let DocumentsContract = plus.android.importClass("android.provider.DocumentsContract");
					let MediaStore = plus.android.importClass("android.provider.MediaStore");
					// 给系统导入 contentResolver
					let contentResolver = main.getContentResolver()
					plus.android.importClass(contentResolver);
					let pathList=[];
					if (resultCode == Activity.RESULT_OK) {
						if (data.getData() != null) {	
							// 返回路径
							let path = '';
							let uri = data.getData();
							//console.log("uri",uri);
							if ("file" == uri.getScheme().toLowerCase()) { //使用第三方应用打开
								path = uri.getPath();
							}
							if (Build.VERSION.SDK_INT > Build.VERSION_CODES.KITKAT) { //4.4以后
							//console.log("安卓4.4以后获取路径")	
								path = getPath(this, uri);
							} else { //4.4以下下系统调用方法
							 // console.log("安卓4.4一下获取路径")	
								path = getRealPathFromURI(uri)
							}
							// 回调
							//console.log("====单选====path===",path);
							//that.$emit('result', path)
							if(path!=null&&path!=undefined){
								pathList.push(path);
							};
							
						}	 
				        else{
							let clipData = data.getClipData();
							if (clipData != null) {
								let fileCount= clipData.getItemCount();
								for (let i=0;i<fileCount;i++) {
									let item = clipData.getItemAt(i);
									let uri = item.getUri();
									let path="";
									 //使用第三方应用打开
									if ("file" == uri.getScheme().toLowerCase()) { 
										//console.log("file");
										path = uri.getPath();
									}
									//4.4以后
									if (Build.VERSION.SDK_INT > Build.VERSION_CODES.KITKAT) { 
									   // console.log("安卓4.4以后获取路径")	
										path = getPath(this, uri);
									}
									//4.4以下下系统调用方法
									else { 
									  console.log("安卓4.4一下获取路径")	
									  path = getRealPathFromURI(uri);
									}
									//console.log("===多选=== path====",path);
									if(path!=null&&path!=undefined){
										pathList.push(path);
									}
								} 
							}
						}
						console.log("选中的文件列表",pathList);
						if(pathList.length>0){
							that.$emit('result', pathList);
						}
						else{
						    uni.showToast({
						    	title:"文件被限制访问,请选择其他目录文件",
								icon:'none',
								duration:2000	
						    })
							return;
						}
					}
					// 4.4 以上 从Uri 获取文件绝对路径
					function getPath(context, uri) {
						let isKitKat = Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT;
						let scheme = uri.getScheme().toLowerCase();
						console.log("isKitKat",isKitKat);
						console.log("scheme",scheme);
						if (isKitKat && DocumentsContract.isDocumentUri(context, uri)) {
							// ExternalStorageProvider
							if (isExternalStorageDocument(uri)) {
								let docId = DocumentsContract.getDocumentId(uri);
								let split = docId.split(":");
								let type = split[0];
								// 如果是手机内部存储
								if ("primary" == type.toLowerCase()) {
									return Environment.getExternalStorageDirectory() + "/" + split[1];
								} else {
									return '/storage/' + type + "/" + split[1];
								}
							}
							// DownloadsProvider
							else if (isDownloadsDocument(uri)) {
								let id = DocumentsContract.getDocumentId(uri);
								console.log("DownloadsProvider",id);
								let split = id.split(":");
								return split[1]
								// console.log(id)
								// let contentUri = ContentUris.withAppendedId(Uri.parse("content://downloads/public_downloads"), id);
								// return getDataColumn(context, contentUri, null, null);
							}
							// MediaProvider
							else if (isMediaDocument(uri)) {
								let docId = DocumentsContract.getDocumentId(uri);
								let split = docId.split(":");
								let type = split[0];
								let contentUri = null;
								if ("image" == type.toLowerCase()) {
									contentUri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
								} else if ("video" == type.toLowerCase()) {
									contentUri = MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
								} else if ("audio" == type.toLowerCase()) {
									contentUri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
								}
								let selection = "_id=?";
								let selectionArgs = [split[1]];
								return getDataColumn(context, contentUri, selection, selectionArgs);
							}
						}
						// MediaStore (and general)
						else if ("content" == scheme) {
							console.log("===========MediaStore==============");
							return getDataColumn(context, uri, null, null);
						}
						// File
						else if ("file" == scheme) {
							console.log("===========File==============");
							return uri.getPath();
						}
					}
					// 4.4 以下 获取 绝对路径
					function getRealPathFromURI(uri) {
						let res = null
						let proj = [MediaStore.Images.Media.DATA];
						console.log("proj",proj);
						let cursor = contentResolver.query(uri, proj, null, null, null);
						if (null != cursor && cursor.moveToFirst()) {						;
							let column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
							res = cursor.getString(column_index);
							cursor.close();
						}
						return res;
					}
					// 通过uri 查找出绝对路径
					function getDataColumn(context, uri, selection, selectionArgs) {
						let cursor = null;
						let column = "_data";
						let projection = [column];
						// let contentResolver = context.getContentResolver()
						// plus.android.importClass(contentResolver);
						console.log("===contentResolver",contentResolver);
						cursor = contentResolver.query(uri, projection, selection, selectionArgs, null);
						if (cursor != null && cursor.moveToFirst()) {
							let column_index = cursor.getColumnIndexOrThrow(column);
							return cursor.getString(column_index);
						}
					}
					function isExternalStorageDocument(uri) {
						return "com.android.externalstorage.documents" == uri.getAuthority() ? true : false
					}
					function isDownloadsDocument(uri) {
						return "com.android.providers.downloads.documents" == uri.getAuthority() ? true : false
					}
					function isMediaDocument(uri) {
						return "com.android.providers.media.documents" == uri.getAuthority() ? true : false
					}
				}
				// #endif
				// #ifndef APP-PLUS
				uni.showModal({
					title: '提示',
					content: '仅支持Android平台',
					success: function (res) {
			
					}
				});
				// #endif
			
			
		},
	},
	onLoad() {
		// plus.io.resolveLocalFileSystemURL( '/storage/emulated/0', function(fs) {
		// 	var directoryReader = fs.createReader();
		// 	directoryReader.readEntries(function(entries) {
		// 		var i;
		// 		for (i = 0; i < entries.length; i++) {
		// 			console.log(entries[i].name);
		// 		}
		// 	}, function(e) {
		// 		console.log("Read entries failed: " + e.message);
		// 	});
		// }, function(e) {
		// 	console.log("Request file system failed: " + e.message);
		// });
	}
}
</script>