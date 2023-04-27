(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chatGroup/chatting"],{

/***/ 225:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/main.js?{"page":"pages%2Fchat%2FchatGroup%2Fchatting"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chatting = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chatGroup/chatting.vue */ 226));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chatting.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 226:
/*!************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatting.vue?vue&type=template&id=790d187c&scoped=true& */ 227);
/* harmony import */ var _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatting.vue?vue&type=script&lang=js& */ 233);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatting.vue?vue&type=style&index=0&id=790d187c&lang=scss&scoped=true& */ 242);
/* harmony import */ var _chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatting.vue?vue&type=style&index=1&lang=css& */ 244);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "790d187c",
  null,
  false,
  _chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chatGroup/chatting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 227:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=template&id=790d187c&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=template&id=790d187c&scoped=true& */ 228);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_template_id_790d187c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 228:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=template&id=790d187c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-navbar/u-navbar */ "node-modules/uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! uview-ui/components/u-navbar/u-navbar.vue */ 665))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 679))
    },
    uLoading: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-loading/u-loading */ "node-modules/uview-ui/components/u-loading/u-loading").then(__webpack_require__.bind(null, /*! uview-ui/components/u-loading/u-loading.vue */ 672))
    },
    uNoticeBar: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-notice-bar/u-notice-bar */ "node-modules/uview-ui/components/u-notice-bar/u-notice-bar").then(__webpack_require__.bind(null, /*! uview-ui/components/u-notice-bar/u-notice-bar.vue */ 889))
    },
    uImage: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-image/u-image */ "node-modules/uview-ui/components/u-image/u-image").then(__webpack_require__.bind(null, /*! uview-ui/components/u-image/u-image.vue */ 651))
    },
    uParse: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-parse/u-parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-parse/u-parse.vue */ 896))
    },
    uButton: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-button/u-button */ "node-modules/uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 658))
    },
    uGrid: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-grid/u-grid */ "node-modules/uview-ui/components/u-grid/u-grid").then(__webpack_require__.bind(null, /*! uview-ui/components/u-grid/u-grid.vue */ 906))
    },
    uGridItem: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-grid-item/u-grid-item */ "node-modules/uview-ui/components/u-grid-item/u-grid-item").then(__webpack_require__.bind(null, /*! uview-ui/components/u-grid-item/u-grid-item.vue */ 913))
    },
    chunLeiPopups: function () {
      return Promise.all(/*! import() | components/chunLei-popups/chunLei-popups */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/chunLei-popups/chunLei-popups")]).then(__webpack_require__.bind(null, /*! @/components/chunLei-popups/chunLei-popups.vue */ 920))
    },
    uPopup: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-popup/u-popup */ "node-modules/uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! uview-ui/components/u-popup/u-popup.vue */ 927))
    },
    uLine: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-line/u-line */ "node-modules/uview-ui/components/u-line/u-line").then(__webpack_require__.bind(null, /*! uview-ui/components/u-line/u-line.vue */ 934))
    },
    lsLoading: function () {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/uni_modules/ls-loading/components/ls-loading/ls-loading.vue */ 235))
    },
    qrInfoPop: function () {
      return __webpack_require__.e(/*! import() | components/qr-info-pop/qr-info-pop */ "components/qr-info-pop/qr-info-pop").then(__webpack_require__.bind(null, /*! @/components/qr-info-pop/qr-info-pop.vue */ 941))
    },
    videoPlayer: function () {
      return __webpack_require__.e(/*! import() | components/videoPlayer/videoPlayer */ "components/videoPlayer/videoPlayer").then(__webpack_require__.bind(null, /*! @/components/videoPlayer/videoPlayer.vue */ 756))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    _vm.loadingmMore == false &&
    _vm.currentChatGroup.advShowFlag == 2 &&
    _vm.currentChatGroup.chatNotice != null &&
    _vm.currentChatGroup.chatNotice.length > 0
  var g1 = g0 ? _vm.currentChatGroup.chatNotice.split(",") : null
  var g2 = _vm.messageList.length
  var l1 = _vm.__map(_vm.messageList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g3 = item.msgType == 2 ? item.createTime.substring(10, 16) : null
    var m0 = item.msgType == 2 ? _vm.parseContent(item) : null
    var g4 = !(item.msgType == 2) ? item.createTime.substring(10, 16) : null
    var a0 =
      item.msgType == 1 && item.contentType == 1
        ? {
            img: "width:26px;height:26px;position:relative;top: 10rpx;",
          }
        : null
    var m1 =
      item.msgType == 1 && item.contentType == 1 ? _vm.parseContent(item) : null
    var m2 =
      item.msgType == 1 && item.contentType == 2
        ? _vm.parseImgSize(item, "w")
        : null
    var m3 =
      item.msgType == 1 && item.contentType == 2
        ? _vm.parseImgSize(item, "h")
        : null
    var m4 =
      item.msgType == 1 && item.contentType == 2 ? _vm.parseContent(item) : null
    var m5 =
      item.msgType == 1 && item.contentType == 3 ? _vm.parseContent(item) : null
    var m6 =
      item.msgType == 1 && item.contentType == 3
        ? _vm.parseImgSize(item, "w")
        : null
    var m7 =
      item.msgType == 1 && item.contentType == 3
        ? _vm.parseImgSize(item, "h")
        : null
    var m8 =
      item.msgType == 1 && item.contentType == 3 ? _vm.parseContent(item) : null
    var m9 =
      item.msgType == 1 && item.contentType == 3
        ? _vm.parseImgSize(item, "w")
        : null
    var m10 =
      item.msgType == 1 && item.contentType == 3
        ? _vm.parseImgSize(item, "h")
        : null
    var m11 =
      item.msgType == 1 && item.contentType == 3
        ? _vm.parseImgSize(item, "h")
        : null
    var g5 =
      item.msgType == 1 && item.contentType == 4
        ? JSON.parse(item.content)
        : null
    var g6 =
      item.msgType == 1 && item.contentType == 4
        ? JSON.parse(item.content)
        : null
    var g7 =
      item.msgType == 1 && item.contentType == 5
        ? JSON.parse(item.content)
        : null
    var g8 =
      item.msgType == 1 && item.contentType == 5
        ? JSON.parse(item.content)
        : null
    var g9 =
      item.msgType == 1 && item.contentType == 5
        ? JSON.parse(item.content).fileSuffix.indexOf("xls")
        : null
    var g10 =
      item.msgType == 1 && item.contentType == 5 && !(g9 != -1)
        ? JSON.parse(item.content)
        : null
    var g11 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc")
        ? JSON.parse(item.content)
        : null
    var g12 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt")
        ? JSON.parse(item.content)
        : null
    var g13 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt")
        ? JSON.parse(item.content)
        : null
    var g14 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf")
        ? JSON.parse(item.content)
        : null
    var g15 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf") &&
      !(g14.fileSuffix === "mp4")
        ? JSON.parse(item.content)
        : null
    var g16 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf") &&
      !(g14.fileSuffix === "mp4") &&
      !(g15.fileType == "ZIP")
        ? JSON.parse(item.content)
        : null
    var g17 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf") &&
      !(g14.fileSuffix === "mp4") &&
      !(g15.fileType == "ZIP") &&
      g16.fileSuffix === "img"
        ? JSON.parse(item.content)
        : null
    var g18 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf") &&
      !(g14.fileSuffix === "mp4") &&
      !(g15.fileType == "ZIP") &&
      !(g16.fileSuffix === "img")
        ? JSON.parse(item.content)
        : null
    var g19 =
      item.msgType == 1 &&
      item.contentType == 5 &&
      !(g9 != -1) &&
      !(g10.fileSuffix === "doc") &&
      !(g11.fileSuffix === "txt") &&
      !(g12.fileSuffix === "ppt") &&
      !(g13.fileSuffix === "pdf") &&
      !(g14.fileSuffix === "mp4") &&
      !(g15.fileType == "ZIP") &&
      !(g16.fileSuffix === "img") &&
      g18.fileType === "img"
        ? JSON.parse(item.content)
        : null
    var m12 =
      item.msgType == 1 && item.contentType == 8
        ? _vm.formatForwardUserInfo(item)
        : null
    var g20 =
      item.msgType == 1 && item.contentType == 8
        ? JSON.parse(item.content)
        : null
    var g21 =
      item.msgType == 1 && item.contentType == 8 && g20.avatar != null
        ? JSON.parse(item.content)
        : null
    var g22 =
      item.msgType == 1 && item.contentType == 9
        ? JSON.parse(item.content)
        : null
    var g23 =
      item.msgType == 1 && item.contentType == 9
        ? JSON.parse(item.content)
        : null
    var g24 =
      item.msgType == 1 && item.contentType == 7
        ? JSON.parse(item.content).receiveAllFlag == true ||
          _vm.isReceive(item) == true
        : null
    var g25 =
      item.msgType == 1 && item.contentType == 7
        ? JSON.parse(item.content)
        : null
    var g26 =
      item.msgType == 1 && item.contentType == 7
        ? JSON.parse(item.content)
        : null
    var g27 =
      item.msgType == 1 && item.contentType == 7
        ? JSON.parse(item.content)
        : null
    var m13 =
      item.msgType == 1 &&
      item.contentType == 7 &&
      !(g27.receiveAllFlag == true)
        ? _vm.isReceive(item) == true && _vm.currentChatGroup.chatGroupType != 0
        : null
    var m14 =
      item.msgType == 1 && item.contentType == 10
        ? _vm.parseChatRecordTitle(item)
        : null
    var l0 =
      item.msgType == 1 && item.contentType == 10
        ? _vm.__map(
            JSON.parse(item.content).splice(0, 3),
            function (contentItem, contentIndex) {
              var $orig = _vm.__get_orig(contentItem)
              var m15 = _vm.parseChatRecord(contentItem)
              return {
                $orig: $orig,
                m15: m15,
              }
            }
          )
        : null
    var g28 =
      item.msgType == 1 && item.contentType == 10
        ? JSON.parse(item.content).length
        : null
    var a1 =
      item.msgType == 1 && (item.contentType == 11 || item.contentType == 12)
        ? {
            img: "width:26px;height:26px;position:relative;top: 10rpx;",
          }
        : null
    var m16 =
      item.msgType == 1 && (item.contentType == 11 || item.contentType == 12)
        ? _vm.formatComponetContent(item, 1)
        : null
    var m17 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      item.contentType == 11
        ? _vm.parseImgSize(item, "w")
        : null
    var m18 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      item.contentType == 11
        ? _vm.parseImgSize(item, "h")
        : null
    var m19 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      item.contentType == 11
        ? _vm.formatComponetContent(item, 2)
        : null
    var m20 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.formatComponetContent(item, 2)
        : null
    var m21 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.parseImgSize(item, "w")
        : null
    var m22 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.parseImgSize(item, "h")
        : null
    var m23 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.formatComponetContent(item, 2)
        : null
    var m24 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.parseImgSize(item, "w")
        : null
    var m25 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.parseImgSize(item, "h")
        : null
    var m26 =
      item.msgType == 1 &&
      (item.contentType == 11 || item.contentType == 12) &&
      !(item.contentType == 11)
        ? _vm.parseImgSize(item, "h")
        : null
    var m27 =
      item.msgType == 1 && item.contentType == 13
        ? _vm.parseVideoContent(item)
        : null
    return {
      $orig: $orig,
      g3: g3,
      m0: m0,
      g4: g4,
      a0: a0,
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
      m11: m11,
      g5: g5,
      g6: g6,
      g7: g7,
      g8: g8,
      g9: g9,
      g10: g10,
      g11: g11,
      g12: g12,
      g13: g13,
      g14: g14,
      g15: g15,
      g16: g16,
      g17: g17,
      g18: g18,
      g19: g19,
      m12: m12,
      g20: g20,
      g21: g21,
      g22: g22,
      g23: g23,
      g24: g24,
      g25: g25,
      g26: g26,
      g27: g27,
      m13: m13,
      m14: m14,
      l0: l0,
      g28: g28,
      a1: a1,
      m16: m16,
      m17: m17,
      m18: m18,
      m19: m19,
      m20: m20,
      m21: m21,
      m22: m22,
      m23: m23,
      m24: m24,
      m25: m25,
      m26: m26,
      m27: m27,
    }
  })
  var m28 =
    !(
      _vm.forbidFlag == true ||
      (_vm.currentChatGroup.chatGroupStatus == 2 &&
        _vm.currentChatGroup.memberType == 0)
    ) && _vm.chatType === "voice"
      ? __webpack_require__(/*! @/static/voice.png */ 229)
      : null
  var m29 =
    !(
      _vm.forbidFlag == true ||
      (_vm.currentChatGroup.chatGroupStatus == 2 &&
        _vm.currentChatGroup.memberType == 0)
    ) && _vm.chatType === "keyboard"
      ? __webpack_require__(/*! @/static/keyboard.png */ 230)
      : null
  var g29 =
    !(
      _vm.forbidFlag == true ||
      (_vm.currentChatGroup.chatGroupStatus == 2 &&
        _vm.currentChatGroup.memberType == 0)
    ) && _vm.chatType === "voice"
      ? _vm.sendStr.length
      : null
  var m30 = !(
    _vm.forbidFlag == true ||
    (_vm.currentChatGroup.chatGroupStatus == 2 &&
      _vm.currentChatGroup.memberType == 0)
  )
    ? __webpack_require__(/*! @/static/emoji.png */ 231)
    : null
  var m31 = !(
    _vm.forbidFlag == true ||
    (_vm.currentChatGroup.chatGroupStatus == 2 &&
      _vm.currentChatGroup.memberType == 0)
  )
    ? __webpack_require__(/*! @/static/add.png */ 232)
    : null
  var g30 = _vm.receiveRedBagList.length
  var l2 =
    g30 > 0
      ? _vm.__map(_vm.receiveRedBagList, function (record, index) {
          var $orig = _vm.__get_orig(record)
          var g31 = record.createTime.substring(5, 16)
          return {
            $orig: $orig,
            g31: g31,
          }
        })
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showRedPopFlag = false
    }
    _vm.e1 = function ($event) {
      _vm.showRedPopFlag = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        l1: l1,
        m28: m28,
        m29: m29,
        g29: g29,
        m30: m30,
        m31: m31,
        g30: g30,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 233:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=script&lang=js& */ 234);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 234:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _environment = _interopRequireDefault(__webpack_require__(/*! @/common/environment.js */ 76));
var _permission = _interopRequireDefault(__webpack_require__(/*! @/util/mobilePermission/permission.js */ 188));
var _util = __webpack_require__(/*! @/util/util.js */ 62);
var _lsLoading = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/ls-loading/components/ls-loading/ls-loading.vue */ 235));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var WEBSOCKET_SERVICE = _environment.default.WEBSOCKET_SERVICE;
var chunLeiPopups = function chunLeiPopups() {
  Promise.all(/*! require.ensure | components/chunLei-popups/chunLei-popups */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/chunLei-popups/chunLei-popups")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/chunLei-popups/chunLei-popups.vue */ 920));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var qrInfoPop = function qrInfoPop() {
  __webpack_require__.e(/*! require.ensure | components/qr-info-pop/qr-info-pop */ "components/qr-info-pop/qr-info-pop").then((function () {
    return resolve(__webpack_require__(/*! @/components/qr-info-pop/qr-info-pop.vue */ 941));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var videoPlayer = function videoPlayer() {
  __webpack_require__.e(/*! require.ensure | components/videoPlayer/videoPlayer */ "components/videoPlayer/videoPlayer").then((function () {
    return resolve(__webpack_require__(/*! @/components/videoPlayer/videoPlayer.vue */ 756));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var previewSrcArr = [];
var _default = {
  components: {
    chunLeiPopups: chunLeiPopups,
    qrInfoPop: qrInfoPop,
    videoPlayer: videoPlayer
  },
  data: function data() {
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
        chatGroupName: '群聊'
      },
      wsOnlion: false,
      //websocket是否在线,
      forbidFlag: false,
      //禁言
      pageNum: 1,
      pageSize: 15,
      messageList: [],
      scrollAnimation: false,
      scrollIntoView: '',
      loadingmMore: false,
      loadingMsg: true,
      //标识是否正在获取数据
      chatType: 'voice',
      // 图标类型 'voice'语音 'keyboard'键盘
      customSendBtnStyle: {
        padding: '10rpx 20rpx'
      },
      sendStr: '',
      //发送的文字信息
      Recorder: uni.getRecorderManager(),
      Audio: uni.createInnerAudioContext(),
      recording: false,
      //标识是否正在录音
      isStopVoice: false,
      //加锁 防止点击过快引起的当录音正在准备(还没有开始录音)的时候,却调用了stop方法但并不能阻止录音的问题
      voiceInterval: null,
      voiceTime: 0,
      //总共录音时长
      canSend: true,
      //是否可以发送
      PointY: 0,
      //坐标位置
      voiceIconText: "正在录音...",
      voiceTitle: '按住 说话',
      AudioExam: null,
      //正在播放音频的实例
      showFunBtn: false,
      //是否展示功能型按钮
      showEmojiBox: false,
      //是否显示表情弹窗
      funList: [{
        id: 1,
        icon: "photo-fill",
        title: "照片",
        uploadType: ["album"]
      }, {
        id: 2,
        icon: "camera-fill",
        title: "视频",
        uploadType: ["camera"]
      }, {
        id: 3,
        icon: "/static/image/chat/video.png",
        title: "视频通话"
      }, {
        id: 4,
        icon: "map-fill",
        title: "位置"
      }, {
        id: 5,
        icon: "/static/image/chat/gird/redbag.png",
        title: "红包"
      }, {
        id: 6,
        icon: "/static/image/chat/gird/zhuanzhang.png",
        title: "个人名片"
      }, {
        id: 7,
        icon: "/static/image/chat/call.png",
        title: "语音通话"
      }, {
        id: 8,
        icon: "/static/image/chat/dir.png",
        title: "文件",
        uploadType: ["camera"]
      }
      /* 		{
      			id:9,
      			icon: "/static/image/chat/gird/collcetion.png",
      			title: "收藏",
      		},
      		{
      			id:10,
      			icon: "/static/image/chat/gird/voiceInput.png",
      			title: "语音输入",
      		}, */],

      addressObj: {
        chooseFlag: false
      },
      showFileRemark: false,
      sendLoading: false,
      //发送视频,图片等信息的时候附带的备注信息
      fileRemarkObj: {
        showFlag: false,
        tag: "图片",
        fileInfo: null
      },
      inputFocusFlag: false,
      windowHeight: 0,
      scrollViewHeight: 600,
      faceList: _util.faceUtils.emojiList(),
      faceMap: _util.faceUtils.faces(),
      connError: false,
      toolTipFlag: false,
      toolTipData: [],
      toolTipX: 0,
      toolTipY: 0,
      currentHandleMsg: {},
      delPopUpObj: {
        isShow: false,
        param: ''
      },
      currentRedBag: {},
      showRedPopFlag: false,
      receiveRedBagList: [],
      qrModelFlag: false,
      qrModelInfo: {},
      previewVideoFlag: false,
      previewVideoSrc: '',
      videoMsgFlag: true,
      autoBackToBottom: true //有信息的时候是否回到底部位置
    };
  },

  created: function created() {
    var scrollViewHeight = this.$u.sys().windowHeight - 160;
    this.windowHeight = this.$u.sys().windowHeight;
    this.scrollViewHeight = scrollViewHeight;
    if (uni.getSystemInfoSync().platform == "android") {
      this.platos = "android";
    } else {
      this.platos = "ios";
    }
    previewSrcArr = [];
  },
  watch: {
    scrollViewHeight: function scrollViewHeight(newVal, oldVal) {
      var that = this;
      if (that.messageList.length > 0) {
        that.scrollIntoView = "msg_" + that.messageList[that.messageList.length - 2].id;
        //console.log("当前位置", that.scrollIntoView);
        that.scrollAnimation = false;
        setTimeout(function () {
          that.scrollAnimation = true;
          that.scrollIntoView = "msg_" + that.messageList[that.messageList.length - 1].id;
          //console.log("最新位置", that.scrollIntoView);
        }, 500);
      }
    },
    messageList: function messageList(newValue, oldValue) {
      //console.log("监听信息记录有变化", newValue.length);
      //多选的时候用vuex里面的信息记录
      this.$u.vuex("vuex_messageList", newValue);
    }
  },
  //监听信息滚动
  onReady: function onReady() {
    var _this = this;
    var that = this;
    uni.onKeyboardHeightChange(function (res) {
      //如果键盘弹起
      if (res.height != 0) {
        _this.showFunBtn = false;
        _this.showEmojiBox = false;
        _this.scrollViewHeight = _this.$u.sys().windowHeight - res.height - 130;
      }
      //键盘收起
      else {
        if (!(_this.showEmojiBox || _this.showFunBtn)) {
          _this.scrollViewHeight = _this.$u.sys().windowHeight - 150;
        }
      }
    });
  },
  //页面加载获取群聊信息
  onLoad: function onLoad(option) {
    var _this2 = this;
    previewSrcArr = [];
    //console.log("聊天界面初始化参数", option);
    this.currentChatGroup.id = option.chatGroupId;
    this.currentChatGroup.id = option.chatGroupId;
    this.getChatGroupInfo(true);
    this.initWebScoket();
    //录音开始事件
    this.Recorder.onStart(function (e) {
      _this2.beginVoice();
    });
    //录音结束事件
    this.Recorder.onStop(function (res) {
      clearInterval(_this2.voiceInterval);
      _this2.handleRecorder(res);
    });

    //音频停止事件
    this.Audio.onStop(function (e) {
      _this2.closeAnmition();
    });

    //音频播放结束事件
    this.Audio.onEnded(function (e) {
      _this2.closeAnmition();
    });
  },
  //页面显示初始化
  onShow: function onShow() {
    this.getChatGroupInfo(false);
  },
  onHide: function onHide() {
    var that = this;
    that.Audio.stop();
  },
  onUnload: function onUnload() {
    var that = this;
    that.scrollIntoView = "";
    that.Audio.stop();
    that.closeWebScoket();
    previewSrcArr = [];
  },
  //监听返回
  onBackPress: function onBackPress(options) {
    this.customBack();
    return true;
  },
  methods: {
    //自定义返回
    customBack: function customBack() {
      var _this3 = this;
      this.Audio.stop();
      //退出聊天界面的时候也需要重置用户的未读信息为已读,因为存储的时候非发送者都是存的未读状态
      var chatGroupId = this.currentChatGroup.id;
      var currentUserId = this.vuex_userInfo.id;
      var paramData = {
        "chatGroupId": chatGroupId,
        "userId": currentUserId
      };
      this.$u.api.chatGroup.clearUnReadNum(paramData).then(function (res) {
        _this3.$u.route({
          url: "pages/chat/chatGroupList",
          type: 'switchTab'
        });
      });
    },
    //跳转群组详情
    toGroupDetail: function toGroupDetail() {
      var that = this;
      if (that.connError) {
        that.globalUtil.utilAlert("您已被踢出群聊");
        return;
      }
      var param = {
        chatGroupId: that.currentChatGroup.id,
        chatGroupType: that.currentChatGroup.chatGroupType
      };
      that.$u.route({
        url: 'pages/chat/chatGroup/chatDetail',
        params: param
      });
      return;
    },
    //获取群组信息
    getChatGroupInfo: function getChatGroupInfo(historyMsgLoadFlag) {
      var _this4 = this;
      var that = this;
      var param = {
        chatGroupId: that.currentChatGroup.id
      };
      that.$u.api.chatGroup.getChatGroupInfo(param).then(function (res) {
        if (res.code == 200) {
          var data = res.data;
          that.currentChatGroup = data.imGroup;
          if (that.currentChatGroup.chatGroupStatus == 2) {
            _this4.forbidFlag = true;
          } else {
            _this4.forbidFlag = false;
          }
          //console.log("群信息", that.currentChatGroup);
          if (historyMsgLoadFlag) {
            console.log("需要重新加载历史记录");
            that.getHistoryMessage();
          }
        } else {
          that.globalUtil.utilAlert("群信息获取失败");
          return;
        }
      });
    },
    //主动关闭websocket
    closeWebScoket: function closeWebScoket() {
      var that = this;
      if (that.timmer) {
        console.log("清除心跳机制");
        clearInterval(that.timmer);
      }
      ;
      that.wsOnlion = false;
      if (!that.socketTask) {
        return;
      }
      that.socketTask.close({
        success: function success(res) {
          that.wsOnlion = false;
          console.log("聊天界面websocket关闭成功", res);
        },
        fail: function fail(err) {
          console.log("聊天界面websocket关闭失败", err);
        }
      });
    },
    // 重连
    reconnect: function reconnect() {
      var that = this;
      if (that.wsOnlion) {
        that.reconnFlag = false;
        return;
      }
      that.reConnTips = "断线重连中...";
      that.reConntask = setTimeout(function () {
        that.wsOnlion = false;
        that.reconnFlag = true;
        that.initWebScoket(that.url);
      }, 3000);
    },
    //初始话websocket服务
    initWebScoket: function initWebScoket() {
      var that = this;
      var userId = that.vuex_userInfo.id;
      var chatGroupId = that.currentChatGroup.id;
      var url = WEBSOCKET_SERVICE + userId + "/" + chatGroupId;
      that.closeWebScoket();
      console.log("webSocket链接地址:" + url);
      that.socketTask = uni.connectSocket({
        url: url,
        success: function success(data) {
          console.log("聊天长连接已建立完成");
        }
      });
      that.socketTask.onOpen(function (res) {
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
        that.socketTask.onMessage(function (res) {
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
      that.socketTask.onError(function (res) {
        console.log('WebSocket链接异常,请检查！');
        that.closeWebScoket();
        //异常断开,重连服务;
        uni.hideKeyboard();
        that.hideDrawer();
        setTimeout(function () {
          that.reconnect();
        }, 500);
      });
      that.socketTask.onClose(function (res) {
        console.log('WebSocket 已关闭！');
        that.wsOnlion = false;
      });
    },
    sendPingPong: function sendPingPong() {
      var that = this;
      that.timmer = setInterval(function () {
        if (that.wsOnlion == true) {
          that.socketTask.send({
            data: 'ping',
            success: function success() {
              //console.log("webscoket发送[心跳]信息成功");
            },
            fail: function fail() {
              //console.log("webscoket发送[心跳]信息失败");
            }
          });
        }
      }, 10000);
    },
    //获取历史消息,带分页
    getHistoryMessage: function getHistoryMessage() {
      var that = this;
      that.messageList = [];
      that.globalUtil.utilLoading("页面加载中...");
      var param = {
        chatGroupId: that.currentChatGroup.id,
        pageNum: 1,
        pageSize: that.pageSize
      };
      that.$u.api.chatGroup.getChatGroupHistoryMessage(param).then(function (res) {
        if (res.code == 200) {
          var data = res.data;
          if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              var contentType = data[i].contentType;
              if (contentType == 4) {
                data[i].anmitionPlay = false;
              }
            }
            //console.log("信息列表",data);
            that.messageList = data.reverse();
            //渲染完成以后让滚动到底部
            setTimeout(function () {
              that.scrollIntoView = "msg_" + that.messageList[that.messageList.length - 1].id;
              uni.hideLoading();
            }, 500);
          }
        } else {
          that.globalUtil.utilAlert("群信息获取失败");
          uni.hideLoading();
          return;
        }
      });
    },
    //向上滑动加载更多历史信息数据
    loadMoreHistoryMsg: function loadMoreHistoryMsg() {
      var that = this;
      /* 防止滑动太快,导致记录重复 */
      if (that.loadingmMore) {
        that.loadingmMore = false;
        console.log("=========防止滑动太快,导致记录重复=============");
        return;
      }
      that.pageNum++;
      var param = {
        chatGroupId: that.currentChatGroup.id,
        pageNum: that.pageNum,
        pageSize: that.pageSize
      };
      console.log("上划加载更多历史数据分页参数", param);
      var oldScrollViewId = that.messageList[0].id;
      that.loadingmMore = true;
      that.$u.api.chatGroup.getChatGroupHistoryMessage(param).then(function (res) {
        if (res.code == 200) {
          var data = res.data;
          if (data != null && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              var contentType = data[i].contentType;
              if (contentType == 4) {
                data[i].anmitionPlay = false;
              }
            }
            var moreData = data.reverse();
            that.messageList = moreData.concat(that.messageList);
            setTimeout(function () {
              that.scrollIntoView = "msg_" + oldScrollViewId;
              setTimeout(function () {
                that.loadingmMore = false;
              }, 500);
            }, 500);
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
      });
    },
    //操作项
    showToolTip: function showToolTip(e, index) {
      if (this.forbidFlag) {
        return;
      }
      this.toolTipX = e.touches[0].clientX;
      this.toolTipY = e.touches[0].clientY;
      this.toolTipFlag = !this.toolTipFlag;
      this.currentHandleMsg = this.messageList[index];
      console.log("this.currentHandleMsg", this.currentHandleMsg);
      this.currentHandleMsg.msgIndex = index;
      var contentType = this.currentHandleMsg.contentType;
      if (this.currentHandleMsg.meFlag == false) {
        this.toolTipData = [{
          id: 1,
          icon: '/static/image/chat/copy.png',
          title: '复制',
          disabled: contentType != 1
        }, {
          id: 2,
          icon: '/static/image/chat/zhuanfa.png',
          title: '转发',
          disabled: false
        }, {
          id: 4,
          icon: '/static/image/chat/revert.png',
          title: '多选',
          disabled: false
        }, {
          id: 5,
          icon: '/static/image/chat/collection.png',
          title: '收藏',
          disabled: false
        }];
        return;
      } else {
        var sendTimeMills = this.globalUtil.parseTime(this.currentHandleMsg.createTime).getTime();
        var nowTimeMills = new Date().getTime();
        var diff = nowTimeMills - sendTimeMills;
        console.log("diff", diff);
        var twoMinutes = 60 * 1000 * 2; //2分钟
        //let twoMinutes = 60 * 1000 * 60 * 24 * 30; //30天
        if (diff > twoMinutes) {
          console.log("不能撤回");
          this.toolTipData = [{
            id: 1,
            icon: '/static/image/chat/copy.png',
            title: '复制',
            disabled: contentType != 1
          }, {
            id: 2,
            icon: '/static/image/chat/zhuanfa.png',
            title: '转发',
            disabled: false
          }, {
            id: 4,
            icon: '/static/image/chat/checkbox.png',
            title: '多选',
            disabled: false
          }, {
            id: 5,
            icon: '/static/image/chat/collection.png',
            title: '收藏',
            disabled: false
          }
          /* 	{id:3,icon:'/static/image/chat/revert.png', title:'撤回',disabled:true}, */];

          return;
        } else {
          this.toolTipData = [{
            id: 1,
            icon: '/static/image/chat/copy.png',
            title: '复制',
            disabled: contentType != 1
          }, {
            id: 2,
            icon: '/static/image/chat/zhuanfa.png',
            title: '转发',
            disabled: false
          }, {
            id: 3,
            icon: '/static/image/chat/revert.png',
            title: '撤回',
            disabled: false
          }, {
            id: 4,
            icon: '/static/image/chat/checkbox.png',
            title: '多选',
            disabled: false
          }, {
            id: 5,
            icon: '/static/image/chat/collection.png',
            title: '收藏',
            disabled: false
          }];
          return;
        }
      }
    },
    tapPopup: function tapPopup(e) {
      var that = this;
      console.log(" that.currentHandleMsg", that.currentHandleMsg);
      //console.log("操作选项",e);
      if (e.title == "撤回") {
        that.revertMsg();
      }
      if (e.title == "复制") {
        var content = that.currentHandleMsg.content;
        if (content.length > 0) {
          var copyContent = JSON.parse(content).text;
          console.log("复制的内容", copyContent);
          var formatStr = this.replaceReseverEmoji(copyContent);
          console.log("复制转义后的内容", formatStr);
          that.globalUtil.uniCopy({
            content: formatStr,
            success: function success(res) {
              uni.showToast({
                title: res,
                icon: 'none'
              });
            },
            error: function error(e) {
              uni.showToast({
                title: e,
                icon: 'none',
                duration: 3000
              });
            }
          });
        }
        that.toolTipFlag = false;
        return;
      }
      if (e.title == "转发") {
        that.toolTipFlag = false;
        that.$u.route({
          url: '/pages/chat/chatGroup/msgForward',
          params: {
            msgList: encodeURIComponent(JSON.stringify([that.currentHandleMsg])),
            sendType: 1,
            //1 单条转发 2多条转发
            fromChatGroupId: that.currentChatGroup.id
          }
        });
        return;
      }
      if (e.title == "多选") {
        that.toolTipFlag = false;
        that.$u.route({
          url: '/pages/chat/chatting/chatting-checkbox',
          params: {
            groupId: that.currentChatGroup.id,
            pageNum: that.pageNum,
            selectMsgId: that.currentHandleMsg.id
          }
        });
        return;
      }
      if (e.title == "收藏") {
        this.globalUtil.utilAlert("已添加到收藏");
      }
    },
    //判断是否可以撤回信息,根据时间推算
    revertMsg: function revertMsg() {
      var that = this;
      that.toolTipFlag = false;
      that.delPopUpObj.isShow = true;
      that.$refs.delPopup.open();
    },
    delPopConfirm: function delPopConfirm() {
      var that = this;
      console.log("打开删除消息弹框", that.currentHandleMsg);
      that.$u.api.chatGroup.revertMessageById(that.currentHandleMsg).then(function (res) {
        console.log("撤回消息成功", res);
        if (res.code == 200) {
          console.log("撤回消息成功", delIndex);
        } else {
          that.globalUtil.utilAlert("撤回信息失败!");
          uni.hideLoading();
          return;
        }
      });
      setTimeout(function () {
        that.delPopCancel();
      }, 500);
    },
    delPopCancel: function delPopCancel() {
      var that = this;
      that.delPopUpObj.isShow = false;
      that.$refs.delPopup.close();
      that.currentHandleMsg = {};
      that.toolTipFlag = false;
    },
    /*----------------------------------------------------录音相关 start-------------------------------------- */
    //准备开始录音
    startVoice: function startVoice(e) {
      if (!this.Audio.paused) {
        //如果音频正在播放 先暂停。
        this.stopAudio(this.AudioExam);
      }
      this.recording = true;
      this.isStopVoice = false;
      this.canSend = true;
      this.voiceIconText = "正在录音...";
      this.PointY = e.touches[0].clientY;
      this.Recorder.start({
        format: 'mp3'
      });
    },
    //录音已经开始
    beginVoice: function beginVoice() {
      var that = this;
      if (that.isStopVoice) {
        that.Recorder.stop();
        return;
      }
      that.voiceTitle = '松开 结束';
      that.voiceInterval = setInterval(function () {
        console.log("that.voiceTime", that.voiceTime);
        if (that.voiceTime > 49) {
          that.voiceIconText = "录音结束倒计时[" + (60 - that.voiceTime) + "]s";
        }
        ;
        if (that.voiceTime == 60) {
          clearInterval(that.voiceInterval);
          that.endVoice();
        }
        that.voiceTime++;
      }, 1000);
    },
    //move 正在录音中
    moveVoice: function moveVoice(e) {
      var PointY = e.touches[0].clientY;
      var slideY = this.PointY - PointY;
      if (slideY > uni.upx2px(120)) {
        this.canSend = false;
        this.voiceIconText = '松开手指 取消发送 ';
      } else if (slideY > uni.upx2px(60)) {
        this.canSend = true;
        this.voiceIconText = '手指上滑 取消发送 ';
      } else {
        this.voiceIconText = '正在录音... ';
      }
    },
    //结束录音
    endVoice: function endVoice() {
      this.isStopVoice = true; //加锁 确保已经结束录音并不会录制
      this.Recorder.stop();
      this.voiceTitle = '按住 说话';
    },
    //录音被打断
    cancelVoice: function cancelVoice(e) {
      console.log("路由被打断", e);
      this.voiceTime = 0;
      this.voiceTitle = '按住 说话';
      this.canSend = false;
      this.Recorder.stop();
    },
    //处理录音文件
    handleRecorder: function handleRecorder(_ref) {
      var _this5 = this;
      var tempFilePath = _ref.tempFilePath,
        duration = _ref.duration;
      if (this.voiceTime < 1) {
        this.voiceIconText = "说话时间过短";
        setTimeout(function () {
          _this5.recording = false;
        }, 500);
        return;
      }
      var contentDuration = this.voiceTime;
      this.voiceTime = 0;
      this.recording = false;
      clearInterval(this.voiceInterval);
      //文件放在自己的服务器
      var uploadFileUrl = this.$u.api.multipartAddress.updload + "/chattingFiles";
      //文件放在阿里云oss
      //let uploadFileUrl= this.$u.api.multipartAddress.uploadAliYun+"/chattingAudio";
      var voiceFile = {
        type: 4,
        //信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
        filePath: tempFilePath,
        uploadUrl: uploadFileUrl,
        contentDuration: Math.ceil(contentDuration)
      };
      console.log("语音文件", voiceFile);
      if (this.canSend) {
        this.uploadFile(voiceFile);
        return;
      } else {
        console.log("=====已经取消发送语音信息====");
        return;
      }
    },
    //控制播放还是暂停音频文件
    handleAudio: function handleAudio(item) {
      this.AudioExam = item;
      this.Audio.paused ? this.playAudio(item) : this.stopAudio(item);
    },
    //播放音频
    playAudio: function playAudio(item) {
      this.Audio.src = JSON.parse(item.content).url;
      this.Audio.hasBeenSentId = item.id;
      this.Audio.play();
      item.anmitionPlay = true;
    },
    //停止音频
    stopAudio: function stopAudio(item) {
      item.anmitionPlay = false;
      this.Audio.src = '';
      this.Audio.stop();
    },
    //关闭动画
    closeAnmition: function closeAnmition() {
      var hasBeenSentId = this.Audio.hasBeenSentId;
      var item = this.messageList.find(function (it) {
        return it.id == hasBeenSentId;
      });
      item.anmitionPlay = false;
    },
    /*-------------------------------------录音相关方法块  end---------------------------------------------------*/
    //添加表情
    addEmoji: function addEmoji(em) {
      this.sendStr += em.alt;
    },
    //输入框失去焦点事件
    onBlur: function onBlur(event) {
      //console.log("失去焦点",event);
      var that = this;
      var text = event.target.value;
      console.log("文字输入事件", text);
      if (text.length < 1 && this.fileRemarkObj.showFlag) {
        uni.showModal({
          title: '是否清除附件',
          success: function success(res) {
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
    confirmSendText: function confirmSendText(e) {
      var that = this;
      that.sendText();
    },
    //发送文本信息
    sendText: function sendText() {
      var that = this;
      if (that.sendStr.length < 1) {
        uni.hideKeyboard();
        that.globalUtil.utilAlert("不能发送空字符串");
        return;
      }
      //如果文字中有表情,需要转换处理
      var formatStr = this.replaceEmoji(this.sendStr);
      var content = {
        "text": formatStr //文本内容
      };
      //判断是不是图文结合的
      var showFlag = this.fileRemarkObj.showFlag;
      var fileInfo = this.fileRemarkObj.fileInfo;
      if (showFlag && fileInfo) {
        that.sendComponentMsg(formatStr);
      } else {
        that.sendMsg(1, 1, content);
      }
    },
    delSendStr: function delSendStr() {
      if (this.sendStr.length > 0) {
        this.sendStr = this.sendStr.substring(0, this.sendStr.length - 4);
      }
    },
    replaceEmoji: function replaceEmoji(str) {
      var _this6 = this;
      var replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, function (item, index) {
        for (var i = 0; i < _this6.faceList.length; i++) {
          var row = _this6.faceList[i];
          for (var j = 0; j < row.length; j++) {
            var EM = row[j];
            if (EM.alt == item) {
              //在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径
              //比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
              // let onlinePath = 'https://s2.ax1x.com/2019/04/12/'
              // let imgstr = '<img alt="'+EM.alt+'" src="'+onlinePath+this.onlineEmoji[EM.url]+'">';
              var imgstr = "face" + EM.alt;
              console.log("imgstr: " + imgstr);
              return imgstr;
            }
          }
        }
      });
      //console.log("replacedStr", replacedStr);
      return replacedStr;
    },
    replaceReseverEmoji: function replaceReseverEmoji(str) {
      var replacedStr = str.replace(/face\[([^\s\[\]]+?)]/g, function (face) {
        var alt = face.replace(/^face/g, '');
        return alt;
      });
      console.log("replacedStr", replacedStr);
      return replacedStr;
    },
    //发送消息
    sendMsg: function sendMsg(msgType, contentType, contentObj) {
      var that = this;
      that.autoBackToBottom = true;
      that.$u.api.sys.checkLoginStatus({}).then(function (res) {
        //console.log("登录状态",res);
        if (res.code == 200) {
          var msg = {
            messageType: msgType == null ? 1 : msgType,
            //信息类型0:系统信息   1表示用户信息
            fromUserId: that.vuex_userInfo.id,
            //发送信息的人
            chatGroupId: that.currentChatGroup.id,
            //聊天群聊id
            platFrom: 1,
            //手机端
            contentType: contentType,
            //信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
            content: JSON.stringify(contentObj)
          };
          if (that.wsOnlion == true) {
            that.socketTask.send({
              data: JSON.stringify(msg),
              success: function success() {
                console.log("webscoket发送信息成功");
                that.sendStr = "";
              },
              fail: function fail() {
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
      });
    },
    //接收到信息,渲染到信息面板上去,
    // 不能滚动到底部
    msgToScreen: function msgToScreen(res) {
      var that = this;
      if (res != null && res.data != null && res.data.length > 0) {
        var msgFromServer = JSON.parse(res.data);
        console.log("收到服务端的信息", msgFromServer);
        //群聊被解散
        if (msgFromServer.messageType == -1) {
          that.closeWebScoket();
          that.globalUtil.utilAlert("群聊已经被解散");
          that.$u.route({
            url: "pages/chat/chatGroupList",
            type: 'switchTab'
          });
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
        var msgType = msgFromServer.msgType;
        var content = msgFromServer.content;
        //系统消息
        if (msgType == 2) {
          var contentObj = JSON.parse(content);
          var currentUserId = that.vuex_userInfo.id;
          console.log("系统消息", contentObj);
          if (contentObj.contentType == 2 && contentObj.delMember == currentUserId) {
            contentObj.text = "您已经被剔除群聊!";
            msgFromServer.content = JSON.stringify(contentObj);
            that.messageList.push(msgFromServer);
            that.closeWebScoket();
            that.connError = true;
          }
          //红包信息
          if (contentObj.contentType == 7 || contentObj.contentType == 14) {
            console.log("收到红包信息了", msgFromServer);
            that.messageList.push(msgFromServer);
            var messageId = contentObj.messageId;
            var redBagContent = contentObj.redBagContent;
            if (messageId != null && redBagContent != null && redBagContent != undefined) {
              that.messageList.map(function (item) {
                var mid = item.id;
                if (mid == messageId) {
                  console.log("原来的红包", item);
                  item.content = JSON.stringify(redBagContent);
                }
              });
            }
          }
          //撤回信息
          if (contentObj.optionType == -2) {
            var revertMsg = contentObj.delMsg;
            var _delIndex = -1;
            console.log("有人撤回了一条信息", contentObj);
            for (var i = 0; i < that.messageList.length; i++) {
              var messageItem = that.messageList[i];
              if (revertMsg.id == messageItem.id) {
                _delIndex = i;
              }
            }
            if (_delIndex != -1) {
              that.messageList.splice(_delIndex, 1);
            }
            var userName = msgFromServer.meFlag ? "我" : contentObj.optionUserName;
            msgFromServer.userName = userName;
            msgFromServer.content = JSON.stringify(contentObj);
            that.messageList.push(msgFromServer);
          }
          //禁言
          if (contentObj.optionType == -3) {
            console.log("群主已禁言", msgFromServer);
            that.messageList.push(msgFromServer);
            //that.forbidFlag = true;
            if (that.currentChatGroup.memberType == 0) {
              that.forbidFlag = true;
            }
          }
          if (contentObj.optionType == -4) {
            console.log("解除全体禁言", msgFromServer);
            that.messageList.push(msgFromServer);
            that.forbidFlag = false;
          }
        } else {
          var _userName = msgFromServer.meFlag ? "我" : msgFromServer.userName;
          msgFromServer.userName = _userName;
          that.saveLocal(msgFromServer);
          that.messageList.push(msgFromServer);
        }
        var fromUserId = msgFromServer.fromUserId;
        var chatGroupId = msgFromServer.chatGroupId;
        if (fromUserId != that.vuex_userInfo.id) {
          that.globalUtil.palyMsgTipSelected(that, chatGroupId);
        }
        if (msgFromServer.msgType == 2) {
          var _that = this;
          var param = {
            chatGroupId: _that.currentChatGroup.id
          };
          _that.$u.api.chatGroup.getChatGroupInfo(param).then(function (res) {
            if (res.code == 200) {
              var data = res.data;
              _that.currentChatGroup = data.imGroup;
              if (_that.currentChatGroup.chatGroupStatus == 2 && _that.currentChatGroup.memberType == 0) {
                _that.forbidFlag = true;
              } else {
                _that.forbidFlag = false;
              }
            } else {
              _that.globalUtil.utilAlert("获取最新群信息失败");
              //return;
            }
          });
        }

        if (that.autoBackToBottom == true) {
          that.$nextTick(function () {
            setTimeout(function () {
              that.scrollIntoView = "msg_" + msgFromServer.id;
              console.log("that.scrollIntoView", that.scrollIntoView);
            }, 200);
          });
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
    parseContent: function parseContent(item) {
      var that = this;
      var msgType = item.msgType; //1用户信息 2系统信息
      var contentType = item.contentType; //文本信息
      if (contentType == 1) {
        //防止json解析失败
        if (msgType == 2) {
          //console.log("===================",item.content.indexOf("\\n"));
          item.content = item.content.replace(/\s+/g, " ");
        }
        var content = JSON.parse(item.content);
        var msgStr = content.text;
        var sysType = content.contentType;
        var optionType = content.optionType;
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
        if (msgType != 2) {
          var transText = this.globalUtil.transform(msgStr, "", "");
          return transText;
        } else {
          //console.log("系统信息",msgStr);
          return msgStr;
        }
      }
      //图片信息
      else if (contentType == 2) {
        var msgId = item.id;
        var localSrc = uni.getStorageSync("image" + msgId);
        if (localSrc) {
          return localSrc;
        }
        var url = JSON.parse(item.content).url;
        if (url) {
          if (previewSrcArr.indexOf(url) == -1) {
            previewSrcArr.unshift(url);
          }
          ;
          that.saveLocal(item);
        }
        return url;
      } else if (contentType == 3) {
        var _msgId = item.id;
        var _localSrc = uni.getStorageSync("image" + _msgId);
        if (_localSrc) {
          return _localSrc;
        }
        ;
        var videoContent = JSON.parse(item.content);
        var subImgInfo = videoContent.subImgInfo;
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
    parseVideoContent: function parseVideoContent(item) {
      var content = JSON.parse(item.content);
      var totalTime = content.totalTime;
      if (totalTime == 0) {
        return "通话未接通";
      } else {
        var timeDuring = this.globalUtil.formatSeconds(totalTime);
        return "通话时长 " + timeDuring;
      }
    },
    //格式化组合信息内容
    formatComponetContent: function formatComponetContent(item, type) {
      var that = this;
      if (type == 1) {
        var msgStr = JSON.parse(item.content).textDesc;
        var transText = this.globalUtil.transform(msgStr, "", "");
        return transText;
      }
      if (type == 2) {
        var content = JSON.parse(item.content);
        if (item.contentType == 12) {
          var subImgInfo = content.fileInfo.subImgInfo;
          if (subImgInfo) {
            return subImgInfo.url;
          } else {
            return "";
          }
        }
        if (item.contentType == 11) {
          var url = content.url;
          if (previewSrcArr.indexOf(url) == -1) {
            previewSrcArr.unshift(url);
          }
          ;
          return content.url;
        }
      }
    },
    showNotice: function showNotice() {
      var that = this;
      console.log("查看群公告");
    },
    parseShowTime: function parseShowTime(item) {
      if (item.createTime == null) {
        return false;
      }
      var crteateTimeStr = item.createTime.replace(/-/g, "/"); //时间转换
      var createTime = new Date(crteateTimeStr).getTime();
      var nowTime = new Date().getTime();
      var during = nowTime - createTime;
      if (during > 1000 * 60 * 3) {
        return true;
      } else {
        return false;
      }
      //Date.now()-new Date(create_time)>3*60*60*1000
    },

    //内容转换(暂时不用)
    transformContent: function transformContent(message) {
      var contentStr = message.content;
      var contentObj = JSON.parse(contentStr);
      var text = contentObj.text;
      var fileSuffix = contentObj.fileSuffix;
      var fileSize = contentObj.fileSize;
      //信息内容转换
      var transText = this.globalUtil.transform(text, fileSize, fileSuffix);
      contentObj.text = transText;
      message.content = JSON.stringify(contentObj);
    },
    parseImgSize: function parseImgSize(item, type) {
      if (type == "h") {
        var height = JSON.parse(item.content).height;
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
        var width = JSON.parse(item.content).width;
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
    switchChatType: function switchChatType(type) {
      var that = this;
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
          _permission.default.requestAndroid("android.permission.RECORD_AUDIO"); //Android请求录音权限
        } else {
          _permission.default.requestIOS("record"); //ios请求录音权限
        }
      }
    },
    //切换功能性按钮
    changeDrawer: function changeDrawer() {
      var that = this;
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
    changeEmojiBox: function changeEmojiBox() {
      var that = this;
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
    scrollViewScrolling: function scrollViewScrolling(e) {
      this.toolTipFlag = false;
      //console.log("监听到滚动了---scrollTop-------",e.detail.scrollTop);
      //console.log("监听到滚动了---scrollHeight-------",e.detail.scrollHeight);
      var scrollTop = e.detail.scrollTop;
      var scrollHeight = e.detail.scrollHeight;
      var precent = (scrollTop / scrollHeight).toFixed(2);
      //console.log("precent",Number(precent));
      if (Number(precent) < 0.5) {
        this.autoBackToBottom = false;
      } else {
        this.autoBackToBottom = true;
      }
      //this.$forceUpdate();
    },
    //触摸页面
    hideDrawer: function hideDrawer() {
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
    clickGrid: function clickGrid(index) {
      var that = this;
      if (that.connError) {
        that.globalUtil.utilAlert("您已被踢出群聊");
        return;
      }
      var id = that.funList[index].id;
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
        var chatGroupType = that.currentChatGroup.chatGroupType;
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
        var _that2 = this;
        uni.chooseLocation({
          success: function success(res) {
            _that2.addressObj = res;
            _that2.addressObj.chooseFlag = true;
            _that2.sendLocation(_that2.addressObj);
          },
          fail: function fail() {
            _that2.address = {};
            _that2.address.chooseFlag = false;
          }
        });
        return;
      } else if (id == 5) {
        var _chatGroupType = that.currentChatGroup.chatGroupType;
        if (_chatGroupType == 0) {
          this.$u.route({
            url: '/pages/chat/redbag/redbag',
            params: {
              chatGroupId: this.currentChatGroup.id
            },
            animationType: 'slide-in-bottom'
          });
        } else {
          this.$u.route({
            url: '/pages/chat/redbag/redbagForGroup',
            params: {
              currentChatGroup: JSON.stringify(this.currentChatGroup)
            },
            animationType: 'slide-in-bottom'
          });
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
        });
        return;
      } else if (id == 7) {
        console.log("语音通话");
        var _chatGroupType2 = that.currentChatGroup.chatGroupType;
        if (_chatGroupType2 == 0) {
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
    launchSingleCalling: function launchSingleCalling(type) {
      var _this7 = this;
      var that = this;
      var remoteUserIds = [];
      var chatGroupId = that.currentChatGroup.id;
      var param = {
        chatGroupId: that.currentChatGroup.id
      };
      that.$u.api.chatGroup.getChatGroupTrcMembers(param).then(function (res) {
        if (res.code == 200) {
          var groupMemberList = res.data;
          if (groupMemberList.length > 0) {
            for (var i = 0; i < groupMemberList.length; i++) {
              var trcUserId = groupMemberList[i].trcRemoteUserId;
              remoteUserIds.push(trcUserId);
            }
          }
          console.log("remoteUserIds", remoteUserIds);
          var callResult = _this7.trcApi.singleCall(remoteUserIds[0], type);
          that.trcApi.listenCallStatus({
            onError: function onError(res) {
              console.log(res);
            },
            onCallReceived: function onCallReceived(res) {
              console.log(res);
            },
            onCallCancelled: function onCallCancelled(res) {
              console.log(res);
            },
            onCallBegin: function onCallBegin(res) {
              console.log(res);
            },
            onCallEnd: function onCallEnd(res) {
              console.log(res);
            }
          });
        } else {
          that.globalUtil.utilAlert("音视频通话远程用户信息获取失败");
          return;
        }
      });
    },
    onCallEnd: function onCallEnd(res) {
      var that = this;
      var result = "";
      var callRole = "";
      if (that.platos == "ios") {
        result = res.data;
        callRole = result[3];
      } else {
        result = res;
        callRole = res.callRole;
      }
      if (callRole == 0) {
        var param = {
          roomID: '',
          type: '1',
          //1是音频 2是视频
          totalTime: 0,
          //通话时长
          targetUserID: '',
          //对方userId
          fromUserId: '',
          callRole: 0 //0 是主叫 1被叫
        };

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
        var videoMsgTimmer = setTimeout(function () {
          that.videoMsgFlag = true;
          clearTimeout(videoMsgTimmer);
        }, 3000);
        //that.sendMsg(1, 13, param);
      }
    },

    //发送位置
    sendLocation: function sendLocation(addressObj) {
      var that = this;
      console.log("that.address", that.addressObj);
      that.sendMsg(1, 9, that.addressObj);
    },
    //重置复合信息
    resetComponentInfo: function resetComponentInfo() {
      var that = this;
      that.fileRemarkObj.fileInfo = null;
      that.fileRemarkObj.showFlag = false;
      that.fileRemarkObj.tag = "";
    },
    //选照片 or 拍照
    chooseImage: function chooseImage() {
      var _this8 = this;
      var that = this;
      uni.chooseImage({
        count: 6,
        sizeType: ['original'],
        //可以指定是原图还是压缩图，默认二者都有
        success: function success(res) {
          for (var i = 0; i < res.tempFilePaths.length; i++) {
            uni.getImageInfo({
              src: res.tempFilePaths[i],
              success: function success(image) {
                image.type = 2; ///信息内容类型   1-文本 2-图片 3-视频  4-语音信息 5-文件 6-其他
                image.filePath = image.path;
                //文件放在自己服务器
                var uploadFileUrl = _this8.$u.api.multipartAddress.updload;
                //文件放在阿里云oss
                //let uploadFileUrl= this.$u.api.multipartAddress.uploadAliYun;
                image.uploadUrl = uploadFileUrl + "/chattingFiles";
                var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
                var maxH = uni.upx2px(350); //350是定义消息图片最大高度
                if (image.width > maxW || image.height > maxH) {
                  var scale = image.width / image.height;
                  image.width = scale > 1 ? maxW : maxH * scale;
                  image.height = scale > 1 ? maxW / scale : maxH;
                }
                //如果是多张直接发送
                if (res.tempFilePaths.length > 1) {
                  setTimeout(function () {
                    that.uploadFile(image);
                  }, 1500);
                } else {
                  //如果只有一张,提示是否加备注
                  //图片信息
                  uni.showModal({
                    title: '是否立即发送?',
                    confirmText: '立即发送',
                    cancelText: '图文发送',
                    success: function success(res) {
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
        fail: function fail() {
          console.log("选择图片上传发送异常");
        }
      });
    },
    //选择视频或者 拍摄视频
    chooseVideo: function chooseVideo() {
      var that = this;
      uni.chooseVideo({
        sourceType: ['camera', 'album'],
        compressed: false,
        success: function success(res) {
          var video = JSON.parse(JSON.stringify(res));
          delete video.errMsg;
          var tempFilePath = video.tempFilePath;
          console.log("tempFilePath", tempFilePath);
          if (!tempFilePath) {
            that.globalUtil.utilAlert("失败!");
            return;
          }
          //获取视频第一帧图片
          if (that.platos == 'ios') {
            that.globalUtil.iosCreateVideoThumbnail(that, {
              tempFilePath: tempFilePath,
              success: function success(result) {
                console.log("获取到视频的第一帧信息", result);
                video.subImgInfo = result.result;
              },
              fail: function fail(result) {
                console.log("ios获取视频第一帧信息失败");
              }
            });
          }
          if (that.platos == 'android') {
            //console.log("安卓获取视频第一帧");
            that.globalUtil.androidCreateVideoThumbnail(that, {
              tempFilePath: tempFilePath,
              success: function success(result) {
                console.log("安卓获取视频第一帧信息", result);
                video.subImgInfo = result.result;
              },
              fail: function fail(result) {
                console.log("安卓获取视频第一帧信息失败");
              }
            });
          }
          that.sendVideoMsg(video, tempFilePath);
        }
      });
    },
    //发送视频信息
    sendVideoMsg: function sendVideoMsg(video, tempFilePath) {
      var that = this;
      //处理视频
      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
      var maxH = uni.upx2px(350); //350是定义消息图片最大高度
      if (video.width > maxW || video.height > maxH) {
        var scale = video.width / video.height;
        video.width = scale > 1 ? maxW : maxH * scale;
        video.height = scale > 1 ? maxW / scale : maxH;
      }
      //console.log("选择的视频结果",video);
      var obj = {
        type: "video",
        filePath: tempFilePath,
        savePath: "/chattingFiles" //文件存放目录
      };

      uni.showModal({
        title: '是否立即发送?',
        confirmText: '立即发送',
        cancelText: '视频图文发送',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            uni.showLoading({
              title: '视频处理中',
              mask: true
            });
            that.globalUtil.globalUpload(that, {
              param: obj,
              success: function success(res1) {
                //console.log("上传视频成功",res1);
                if (res1.code == 1) {
                  video = Object.assign(video, res1.result);
                  console.log("发送视频信息对象", video);
                  that.sendMsg(1, 3, video);
                }
                ;
                uni.hideLoading();
              },
              fail: function fail(res1) {
                uni.hideLoading();
                that.globalUtil.utilAlert("上传视频失败!");
                console.log("上传视频失败", res1);
              },
              complete: function complete(res1) {
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
    sendComponentMsg: function sendComponentMsg(textDesc) {
      var that = this;
      var tag = that.fileRemarkObj.tag;
      var fileInfo = that.fileRemarkObj.fileInfo;
      var tempFilePath = fileInfo.filePath;
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
        title: '发送中'
      });
      if (fileInfo.type == 2) {
        delete fileInfo.orientation;
        delete fileInfo.errMsg;
        delete fileInfo.path;
      }
      var obj = {
        textDesc: textDesc,
        fileInfo: fileInfo
      };
      var param = {
        type: fileInfo.type,
        filePath: tempFilePath,
        savePath: "/chattingFiles" //文件存放目录
      };

      console.log("上传组合信息的文件,参数", param);
      that.globalUtil.globalUpload(that, {
        param: param,
        success: function success(res1) {
          if (res1.code == 1) {
            obj = Object.assign(obj, res1.result);
            console.log("发送组合信息", obj);
            if (obj.type == 2) {
              that.sendMsg(1, 11, obj); //图文
            } else {
              that.sendMsg(1, 12, obj); //视频图文
            }

            that.resetComponentInfo();
          }
          ;
          uni.hideLoading();
        },
        fail: function fail(res1) {
          that.resetComponentInfo();
          uni.hideLoading();
          that.globalUtil.utilAlert("发送失败!");
          console.log("组合信息上传文件失败", res1);
        },
        complete: function complete(res1) {
          that.resetComponentInfo();
          uni.hideLoading();
          that.globalUtil.utilAlert("发送失败!");
          console.log("组合信息上传文件失败", res1);
        }
      });
    },
    //选择文件
    chooseFile: function chooseFile() {
      var that = this;
      that.$u.route({
        url: '/pages/chat/chooseFileList/chooseFileList',
        params: {
          chatGroupId: that.currentChatGroup.id
        }
      });
    },
    //上传文件到服务器
    uploadFile: function uploadFile(obj) {
      var _this9 = this;
      var that = this;
      console.log("上传文件的参数", obj);
      if (that.connError) {
        that.globalUtil.utilAlert("您已被踢出群聊");
        return;
      }
      var uploadUrl = obj.uploadUrl;
      var filePath = obj.filePath;
      var isSuccess = false;
      var sizeError = 0;
      if (uploadUrl && filePath) {
        var msg = {};
        var uploadTask = uni.uploadFile({
          url: uploadUrl,
          filePath: filePath,
          name: 'fileName',
          header: {
            'Access-Control-Allow-Origin': '*',
            'TOKEN_OA': that.vuex_token
          },
          success: function success(uploadFileRes) {
            if (uploadFileRes.statusCode == 200 && uploadFileRes.data.length > 0) {
              var resObj = JSON.parse(uploadFileRes.data);
              console.log("文件上传响应回调数据", resObj);
              if (resObj.code == 200) {
                //文件放在自己的服务器
                var _url = that.$u.api.multipartAddress.getFileByPath + resObj.data;
                //文件放在阿里云服务器
                // let _url=resObj.data;
                msg.url = _url;
                var suffix = resObj.data.substring(resObj.data.lastIndexOf('.') + 1, resObj.data.length);
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
          fail: function fail() {
            if (isSuccess == false && sizeError == 1) {
              uni.showModal({
                title: '提示:',
                confirmText: '我知道了',
                cancelText: '重新上传',
                confirmColor: '#007AFF',
                cancelColor: '#48CC94',
                content: "【失败! 文件上传不允许超出300M...】",
                success: function success(res) {
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
        uploadTask.onProgressUpdate(function (res) {
          if (res.totalBytesExpectedToSend > 314572800) {
            sizeError = 1;
            uploadTask.abort();
            return;
          } else {
            msg.fileSize = _this9.globalUtil.byteConvert(res.totalBytesExpectedToSend);
          }
        });
      } else {
        this.globalUtil.utilAlert("上传文件的参数丢失");
        console.log("上传文件的参数丢失");
        return;
      }
    },
    openLocation: function openLocation(item) {
      var that = this;
      var contentObj = JSON.parse(item.content);
      uni.openLocation({
        latitude: contentObj.latitude,
        longitude: contentObj.longitude,
        name: contentObj.name,
        address: contentObj.address,
        success: function success() {
          console.log('success');
        }
      });
    },
    showTimeJudge: function showTimeJudge(item, index) {
      var dayTime = item.createTime.substring(5, 10);
      var firstTime = this.messageList[0].createTime.substring(5, 10);
      if (firstTime == dayTime) {
        return false;
      }
      if (this.messageList.length > 0 && index > 0) {
        var lastDayTime = this.messageList[index - 1].createTime.substring(5, 10);
        if (dayTime == lastDayTime) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    },
    openRedBag: function openRedBag(item, index) {
      var that = this;
      var conentStr = this.messageList[index].content;
      var contentObj = JSON.parse(conentStr);
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
    openSingleGroupRedBag: function openSingleGroupRedBag(item, contentObj, index) {
      var _this10 = this;
      var that = this;
      if (contentObj.fromUser == this.vuex_userInfo.id) {
        console.log("自己不能领取自己发出的红包");
        contentObj.avatar = item.userAvatar;
        that.showRedPopFlag = true;
        that.currentRedBag = contentObj;
        that.currentRedBag.redBagNums = 1;
        return;
      } else {
        if (contentObj.receiveAllFlag == false) {
          that.$u.api.chatGroup.receviceRedBag(item).then(function (res) {
            if (res.code == 200) {
              console.log("红包已被领取");
              contentObj.receiveAllFlag = true;
              _this10.messageList[index].content = JSON.stringify(contentObj);
            }
          });
        } else {
          console.log("红包已经被领取");
          contentObj.avatar = item.userAvatar;
          this.showRedPop(contentObj);
        }
      }
    },
    //是否领取过
    isReceive: function isReceive(item) {
      var that = this;
      var contentObj = JSON.parse(item.content);
      var receiveUsers = contentObj.receiveUsers;
      if (receiveUsers != null && receiveUsers != undefined) {
        for (var i = 0; i < receiveUsers.length; i++) {
          var receiveInfo = receiveUsers[i];
          var receiveUserId = receiveInfo.userId;
          if (receiveUserId == that.vuex_userInfo.id) {
            //that.globalUtil.utilAlert("您已经领取过红包~");
            return true;
          }
        }
      }
      ;
      return false;
    },
    //领取群聊红包
    openGroupRedBag: function openGroupRedBag(item, contentObj, index) {
      var _this11 = this;
      var that = this;
      var receiveUsers = contentObj.receiveUsers;
      if (receiveUsers != null && receiveUsers != undefined) {
        for (var i = 0; i < receiveUsers.length; i++) {
          var receiveInfo = receiveUsers[i];
          var receiveUserId = receiveInfo.userId;
          if (receiveUserId == that.vuex_userInfo.id) {
            contentObj.avatar = item.userAvatar;
            this.showRedPop(contentObj);
            return;
          }
        }
      }
      if (contentObj.receiveAllFlag == false) {
        that.$u.api.chatGroup.receviceRedBagForGroup(item).then(function (res) {
          console.log("领取群聊红包结果", res);
          if (res.code == 200) {
            if (res.data == 1) {
              //contentObj.receiveAllFlag=true;
              if (contentObj.receiveUsers != null && contentObj.receiveUsers != undefined) {
                contentObj.receiveUsers.push({
                  userId: _this11.vuex_userInfo.id
                });
              } else {
                contentObj.receiveUsers = [{
                  userId: _this11.vuex_userInfo.id
                }];
              }
              _this11.messageList[index].content = JSON.stringify(contentObj);
            }
            if (res.data == -1) {
              that.globalUtil.utilAlert("您已经领取过红包~");
              contentObj.receiveAllFlag = true;
              _this11.messageList[index].content = JSON.stringify(contentObj);
              return;
            }
            if (res.data == -2 || res.data == -3) {
              if (res.data == -2) {
                that.globalUtil.utilAlert("手速太慢,红包已被领完~");
              }
              contentObj.receiveAllFlag = true;
              _this11.messageList[index].content = JSON.stringify(contentObj);
              return;
            }
          }
        });
      } else {
        console.log("手速太慢.红包已经被领完");
        //that.globalUtil.utilAlert("手速太慢.红包已经被领完");
        contentObj.avatar = item.userAvatar;
        this.showRedPop(contentObj);
        return;
      }
    },
    showRedPop: function showRedPop(contentObj) {
      var that = this;
      //that.globalUtil.utilAlert("您已经领取过红包~");
      that.receiveRedBagList = [];
      that.currentRedBag = {};
      that.$u.api.chatGroup.getRedBagReceiveList(contentObj).then(function (res) {
        console.log("获取红包领取记录", res);
        if (res.code == 200) {
          that.showRedPopFlag = true;
          that.currentRedBag = contentObj;
          console.log("currentRedBag.avatar", that.currentRedBag.avatar);
          that.receiveRedBagList = res.data;
        }
      });
    },
    previewFile: function previewFile(item) {
      var fileObj = JSON.parse(item.content);
      var url = fileObj.url;
      if (url) {
        console.log("url", url);
        if (fileObj.fileType == "img") {
          uni.previewImage({
            urls: [url]
          });
          return;
        } else if (fileObj.fileSuffix === 'mp4') {
          this.previewVideoSrc = url;
          this.previewVideoFlag = true;
          return;
        } else {
          uni.downloadFile({
            url: url,
            success: function success(res) {
              var filePath = res.tempFilePath;
              uni.openDocument({
                filePath: filePath,
                showMenu: true,
                success: function success(res) {
                  console.log('打开文档成功');
                },
                error: function error(_error) {
                  console.log("文件打开失败", _error);
                  this.globalUtil.utilAlert("暂不支持查看");
                  return;
                }
              });
            }
          });
        }
      }
    },
    showPic: function showPic(item) {
      var that = this;
      //console.log("item",item);
      var content = JSON.parse(item.content);
      var src = content.url;
      //console.log("src", src);
      var subType = content.subContentType;
      if (subType) {
        uni.previewImage({
          urls: [src],
          longPressActions: {
            itemList: ['保存图片', '识别二维码'],
            success: function success(data) {
              //console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
              if (data.tapIndex == 0) {
                uni.downloadFile({
                  url: src,
                  //仅为示例，并非真实的资源
                  success: function success(res) {
                    if (res.statusCode === 200) {
                      console.log('下载成功', res.tempFilePath);
                      var filePath = res.tempFilePath;
                      uni.saveImageToPhotosAlbum({
                        filePath: filePath,
                        success: function success() {
                          that.globalUtil.utilAlert("保存成功");
                        },
                        complete: function complete(res) {
                          console.log("保存到相册结果", res);
                        }
                      });
                    }
                  }
                });
              }
              if (data.tapIndex == 1) {
                console.log("识别二维码", content);
                var qrInfo = content.qrInfo;
                if (qrInfo && qrInfo.length > 0) {
                  var qrObj = JSON.parse(qrInfo);
                  var businessCode = qrObj.businessCode;
                  console.log("businessCode", businessCode);
                  var valueInfo = qrObj.qrValue;
                  if (businessCode) {
                    //这里识别到二维码信息
                    console.log("这里识别到二维码信息", valueInfo);
                    //这里关闭
                    uni.closePreviewImage({
                      success: function success() {
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
            fail: function fail(err) {
              console.log(err.errMsg);
            }
          }
        });
      } else {
        uni.previewImage({
          urls: previewSrcArr.length > 0 ? previewSrcArr : [src],
          //[src]
          current: src,
          loop: false
        });
      }
      return;
    },
    //播放视频
    boFangVideo: function boFangVideo(item) {
      var that = this;
      var msgId = item.id;
      var localSrc = uni.getStorageSync("video" + msgId);
      if (localSrc) {
        console.log("视频本地缓存", localSrc);
        this.previewVideoSrc = localSrc;
        this.previewVideoFlag = true;
      } else {
        var videoContent = JSON.parse(item.content);
        var videoSrc = videoContent.url;
        this.previewVideoSrc = videoSrc;
        this.messageApi.setVideoLocalSrc(videoSrc, msgId);
        this.previewVideoFlag = true;
      }
    },
    //关闭播放视频
    stopPlayVideo: function stopPlayVideo() {
      this.previewVideoFlag = false;
    },
    //查看群成员信息
    showPersonalInfo: function showPersonalInfo(item) {
      var _this12 = this;
      var that = this;
      var groupUserId = item.fromUserId;
      console.log("群成员信息", item);
      if (item.meFlag == true) {
        return;
      }
      //根据userId去查询是否是好友
      var param = {
        groupUserId: groupUserId
      };
      that.$u.api.imUser.getGroupMemberInfo(param).then(function (res) {
        if (res.code == 200) {
          var groupUserInfo = res.data;
          console.log("查询群成员信息结果", groupUserInfo);
          if (groupUserInfo.isFriend) {
            that.$u.route({
              url: 'pages/chat/friends/friendHome',
              params: {
                friendId: groupUserId
              }
            });
          } else {
            console.log("不是朋友关系");
            _this12.$u.route({
              url: 'pages/chat/friends/newFriendInfo',
              params: {
                newFriendInfo: encodeURIComponent(JSON.stringify(groupUserInfo)),
                fromPage: 1
              }
            });
          }
        }
      });
    },
    formatForwardUserInfo: function formatForwardUserInfo(item) {
      var that = this;
      var forwardUser = JSON.parse(item.content);
      var currentUserId = that.vuex_userInfo.id;
      if (forwardUser.id == currentUserId) {
        return "我";
      } else {
        return forwardUser.userName;
      }
    },
    //解析聊天记录类型的标题
    parseChatRecordTitle: function parseChatRecordTitle(item) {
      //console.log("item",item);
      var title = "聊天记录";
      var titleSet = new Set();
      var obj = JSON.parse(item.content);
      for (var i = 0; i < obj.length; i++) {
        var userName = obj[i].userName;
        titleSet.add(userName);
      }
      var userNames = Array.from(titleSet);
      if (userNames.length < 3) {
        return userNames.join("与") + "的聊天记录";
      } else {
        return title;
      }
    },
    //解析群聊记录
    parseChatRecord: function parseChatRecord(content) {
      var userName = content.userName;
      var contentType = content.contentType;
      var innerContent = content.content;
      var str = userName + ": [不可识别的信息类型]";
      switch (contentType) {
        case 1:
          var text = JSON.parse(innerContent).text;
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
    openChatRecord: function openChatRecord(item, index) {
      var that = this;
      var navbarTitle = this.parseChatRecordTitle(item);
      console.log("查看聊天记录", item);
      that.$u.route({
        url: '/pages/chat/chatting/chat-record-content',
        params: {
          chatRecordContentObj: encodeURIComponent(JSON.stringify(item)),
          navbarTitle: navbarTitle
        },
        animationType: 'slide-in-bottom'
      });
    },
    showUserInfoFromForward: function showUserInfoFromForward(item) {
      var _this13 = this;
      var that = this;
      console.log("群成员信息", item);
      var fromUserId = item.fromUserId;
      var groupUserId = JSON.parse(item.content).id;
      //如果是自己,就不用处理了
      if (fromUserId == groupUserId) {
        return;
      }
      var currentUserId = that.vuex_userInfo.id;
      if (groupUserId == currentUserId) {
        return;
      }
      var param = {
        groupUserId: groupUserId
      };
      //根据userId去查询是否是好友
      that.$u.api.imUser.getGroupMemberInfo(param).then(function (res) {
        if (res.code == 200) {
          var groupUserInfo = res.data;
          console.log("查询群成员信息结果", groupUserInfo);
          if (groupUserInfo.isFriend) {
            that.$u.route({
              url: 'pages/chat/friends/friendHome',
              params: {
                friendId: groupUserId
              }
            });
          } else {
            console.log("不是朋友关系");
            _this13.$u.route({
              url: '/pages/chat/friends/newFriendInfo',
              params: {
                newFriendInfo: encodeURIComponent(JSON.stringify(groupUserInfo)),
                fromPage: 1
              }
            });
          }
        }
      });
    },
    closeAdvFlag: function closeAdvFlag() {
      var that = this;
      var param = {
        chatGroupId: that.currentChatGroup.id,
        hiddenFlag: 0
      };
      that.$u.api.chatGroup.updateMyChatGroupInfo(param).then(function (res) {
        if (res.code == 200) {
          console.log("关闭公告");
          that.currentChatGroup.advShowFlag = 0;
        } else {
          that.globalUtil.utilAlert("error");
          return;
        }
      });
    },
    loginOut: function loginOut() {
      var _this14 = this;
      var that = this;
      that.closeWebScoket();
      //调用service请求后台的接口
      this.$u.api.sys.loginOut({}).then(function (res) {
        uni.hideLoading();
        if (res.code == 200) {
          _this14.globalUtil.clearVuex(that);
          setTimeout(function () {
            that.$u.route({
              type: 'reLaunch',
              url: "/pages/index/login",
              params: {}
            });
          }, 500);
          return;
        } else {
          //密码错误提示
          _this14.globalUtil.utilAlert(res.message, "none");
          return;
        }
      }).catch(function (res) {
        _this14.globalUtil.utilAlert("后台请求失败,请联系管理员!");
      });
    },
    closeQRModel: function closeQRModel() {
      this.qrModelInfo = {};
      this.qrModelFlag = false;
    },
    //将图片，视频信息放入缓存中
    saveLocal: function saveLocal(messageObj) {
      var that = this;
      var msgId = messageObj.id;
      var contentType = messageObj.contentType;
      var contentObj = JSON.parse(messageObj.content);
      switch (contentType + '') {
        case "2":
          var url = contentObj.url;
          that.messageApi.setImageLocalSrc(url, msgId);
          break;
        case "3":
          var subImgInfo = contentObj.subImgInfo;
          if (subImgInfo) {
            var _url2 = subImgInfo.url;
            that.messageApi.setImageLocalSrc(_url2, msgId);
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
      }
      ;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 235:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ls-loading.vue?vue&type=template&id=39e67dfa&scoped=true& */ 236);
/* harmony import */ var _ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ls-loading.vue?vue&type=script&lang=js& */ 238);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ls-loading.vue?vue&type=style&index=0&id=39e67dfa&scoped=true&lang=css& */ 240);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39e67dfa",
  null,
  false,
  _ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/ls-loading/components/ls-loading/ls-loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 236:
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=template&id=39e67dfa&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ls-loading.vue?vue&type=template&id=39e67dfa&scoped=true& */ 237);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_template_id_39e67dfa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 237:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=template&id=39e67dfa&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 238:
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ls-loading.vue?vue&type=script&lang=js& */ 239);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 239:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var combLoader = function combLoader() {
  __webpack_require__.e(/*! require.ensure | uni_modules/ls-loading/components/ls-loading/components/comb-loader */ "uni_modules/ls-loading/components/ls-loading/components/comb-loader").then((function () {
    return resolve(__webpack_require__(/*! ./components/comb-loader.vue */ 948));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var riseLoader = function riseLoader() {
  __webpack_require__.e(/*! require.ensure | uni_modules/ls-loading/components/ls-loading/components/rise-loader */ "uni_modules/ls-loading/components/ls-loading/components/rise-loader").then((function () {
    return resolve(__webpack_require__(/*! ./components/rise-loader.vue */ 955));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var progressLoader = function progressLoader() {
  __webpack_require__.e(/*! require.ensure | uni_modules/ls-loading/components/ls-loading/components/progress-loader */ "uni_modules/ls-loading/components/ls-loading/components/progress-loader").then((function () {
    return resolve(__webpack_require__(/*! ./components/progress-loader.vue */ 962));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var jumpLoader = function jumpLoader() {
  __webpack_require__.e(/*! require.ensure | uni_modules/ls-loading/components/ls-loading/components/jump-loader */ "uni_modules/ls-loading/components/ls-loading/components/jump-loader").then((function () {
    return resolve(__webpack_require__(/*! ./components/jump-loader.vue */ 969));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  name: 'ls-loading',
  components: {
    combLoader: combLoader,
    riseLoader: riseLoader,
    progressLoader: progressLoader,
    jumpLoader: jumpLoader
  },
  props: {
    // 是否预留出标题栏的高度
    nav: {
      type: Boolean,
      default: false
    },
    // 是否预留出tabBar的高度
    tab: {
      type: Boolean,
      default: false
    },
    // 加载中的文字
    text: {
      type: String,
      default: '正在加载'
    },
    // embed 是否为嵌入模式
    embed: {
      type: Boolean,
      default: false
    },
    // 加载中文字大小
    fontSize: {
      type: [String, Number],
      default: 58
    },
    // 动画类型 twinkle|focus|rise|jump|progress
    animation: {
      type: String,
      default: 'twinkle'
    },
    // 底层颜色
    underColor: {
      type: String,
      default: '#e8e7e8'
    },
    // 高亮部分颜色
    highlightColor: {
      type: String,
      default: '#00bfff'
    }
  },
  data: function data() {
    return {
      topSize: ''
    };
  },
  computed: {
    bottomSize: function bottomSize() {
      return this.tab ? '50px' : '0';
    }
  },
  created: function created() {
    var _this = this;
    setTimeout(function () {
      var res = uni.getSystemInfoSync();
      _this.topSize = _this.nav ? "".concat(res.statusBarHeight + 44, "px") : "0px";
    }, 1);
  },
  methods: {
    defThouch: function defThouch(e) {
      // 阻止点击穿透
    },
    defMove: function defMove(e) {
      // 阻止滚动穿透
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 240:
/*!***********************************************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=style&index=0&id=39e67dfa&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ls-loading.vue?vue&type=style&index=0&id=39e67dfa&scoped=true&lang=css& */ 241);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ls_loading_vue_vue_type_style_index_0_id_39e67dfa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 241:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/uni_modules/ls-loading/components/ls-loading/ls-loading.vue?vue&type=style&index=0&id=39e67dfa&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 242:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=style&index=0&id=790d187c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=style&index=0&id=790d187c&lang=scss&scoped=true& */ 243);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_0_id_790d187c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 243:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=style&index=0&id=790d187c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 244:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chatting.vue?vue&type=style&index=1&lang=css& */ 245);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chatting_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 245:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chatGroup/chatting.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[225,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/chatGroup/chatting.js.map