(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat-item/inner-chat-item"],{

/***/ 1127:
/*!*******************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inner-chat-item.vue?vue&type=template&id=2658e05f&scoped=true& */ 1128);
/* harmony import */ var _inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inner-chat-item.vue?vue&type=script&lang=js& */ 1130);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inner-chat-item.vue?vue&type=style&index=0&id=2658e05f&scoped=true&lang=scss& */ 1132);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2658e05f",
  null,
  false,
  _inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/chat-item/inner-chat-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1128:
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=template&id=2658e05f&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inner-chat-item.vue?vue&type=template&id=2658e05f&scoped=true& */ 1129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_template_id_2658e05f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1129:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=template&id=2658e05f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uCheckbox: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-checkbox/u-checkbox */ "node-modules/uview-ui/components/u-checkbox/u-checkbox").then(__webpack_require__.bind(null, /*! uview-ui/components/u-checkbox/u-checkbox.vue */ 833))
    },
    uParse: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-parse/u-parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-parse/u-parse")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-parse/u-parse.vue */ 896))
    },
    uImage: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-image/u-image */ "node-modules/uview-ui/components/u-image/u-image").then(__webpack_require__.bind(null, /*! uview-ui/components/u-image/u-image.vue */ 651))
    },
    uLoading: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-loading/u-loading */ "node-modules/uview-ui/components/u-loading/u-loading").then(__webpack_require__.bind(null, /*! uview-ui/components/u-loading/u-loading.vue */ 672))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 679))
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
  var g0 = _vm.item.msgType == 2 ? _vm.item.createTime.substring(10, 16) : null
  var m0 = _vm.item.msgType == 2 ? _vm.parseContent(_vm.item) : null
  var g1 = !(_vm.item.msgType == 2)
    ? _vm.item.createTime && _vm.item.createTime.length
    : null
  var a0 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 1
      ? {
          img: "width:26px;height:26px;position:relative;top: 10rpx;",
        }
      : null
  var m1 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 1
      ? _vm.parseContent(_vm.item)
      : null
  var m2 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 2
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m3 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 2
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m4 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 2
      ? _vm.parseContent(_vm.item)
      : null
  var m5 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m6 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m7 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseContent(_vm.item)
      : null
  var m8 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m9 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m10 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 3
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var g2 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 4
      ? JSON.parse(_vm.item.content)
      : null
  var g3 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 4
      ? JSON.parse(_vm.item.content)
      : null
  var g4 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 5
      ? JSON.parse(_vm.item.content)
      : null
  var g5 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 5
      ? JSON.parse(_vm.item.content)
      : null
  var g6 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 5
      ? JSON.parse(_vm.item.content).fileSuffix.indexOf("xls")
      : null
  var g7 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 5 && !(g6 != -1)
      ? JSON.parse(_vm.item.content)
      : null
  var g8 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 5 &&
    !(g6 != -1) &&
    !(g7.fileSuffix === "doc")
      ? JSON.parse(_vm.item.content)
      : null
  var g9 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 5 &&
    !(g6 != -1) &&
    !(g7.fileSuffix === "doc") &&
    !(g8.fileSuffix === "txt")
      ? JSON.parse(_vm.item.content)
      : null
  var g10 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 5 &&
    !(g6 != -1) &&
    !(g7.fileSuffix === "doc") &&
    !(g8.fileSuffix === "txt") &&
    !(g9.fileSuffix === "ppt")
      ? JSON.parse(_vm.item.content)
      : null
  var g11 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 5 &&
    !(g6 != -1) &&
    !(g7.fileSuffix === "doc") &&
    !(g8.fileSuffix === "txt") &&
    !(g9.fileSuffix === "ppt") &&
    !(g10.fileSuffix === "pdf")
      ? JSON.parse(_vm.item.content).fileType == 7 ||
        JSON.parse(_vm.item.content).fileSuffix === "zip"
      : null
  var g12 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 5 &&
    !(g6 != -1) &&
    !(g7.fileSuffix === "doc") &&
    !(g8.fileSuffix === "txt") &&
    !(g9.fileSuffix === "ppt") &&
    !(g10.fileSuffix === "pdf") &&
    !g11
      ? JSON.parse(_vm.item.content)
      : null
  var g13 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 7
      ? JSON.parse(_vm.item.content).receiveAllFlag == true ||
        _vm.redBagIsReceive(_vm.item) == true
      : null
  var g14 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 7
      ? JSON.parse(_vm.item.content)
      : null
  var g15 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 7
      ? JSON.parse(_vm.item.content)
      : null
  var g16 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 7
      ? JSON.parse(_vm.item.content)
      : null
  var m11 =
    !(_vm.item.msgType == 2) &&
    _vm.item.contentType == 7 &&
    !(g16.receiveAllFlag == true)
      ? _vm.redBagIsReceive(_vm.item) == true && _vm.chatGroupType != 0
      : null
  var m12 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 8
      ? _vm.formatForwardUserInfo(_vm.item)
      : null
  var g17 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 8
      ? JSON.parse(_vm.item.content)
      : null
  var g18 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 8 && g17.avatar != null
      ? JSON.parse(_vm.item.content)
      : null
  var g19 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 9
      ? JSON.parse(_vm.item.content)
      : null
  var g20 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 9
      ? JSON.parse(_vm.item.content)
      : null
  var m13 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 10
      ? _vm.parseChatRecordTitle(_vm.item)
      : null
  var l0 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 10
      ? _vm.__map(
          JSON.parse(_vm.item.content).splice(0, 3),
          function (contentItem, contentIndex) {
            var $orig = _vm.__get_orig(contentItem)
            var m14 = _vm.parseChatRecord(contentItem)
            return {
              $orig: $orig,
              m14: m14,
            }
          }
        )
      : null
  var g21 =
    !(_vm.item.msgType == 2) && _vm.item.contentType == 10
      ? JSON.parse(_vm.item.content).length
      : null
  var a1 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12)
      ? {
          img: "width:26px;height:26px;position:relative;top: 10rpx;",
        }
      : null
  var m15 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12)
      ? _vm.formatComponetContent(_vm.item, 1)
      : null
  var m16 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    _vm.item.contentType == 11
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m17 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    _vm.item.contentType == 11
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m18 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    _vm.item.contentType == 11
      ? _vm.formatComponetContent(_vm.item, 2)
      : null
  var m19 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.formatComponetContent(_vm.item, 2)
      : null
  var m20 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m21 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m22 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.formatComponetContent(_vm.item, 2)
      : null
  var m23 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.parseImgSize(_vm.item, "w")
      : null
  var m24 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  var m25 =
    !(_vm.item.msgType == 2) &&
    (_vm.item.contentType == 11 || _vm.item.contentType == 12) &&
    !(_vm.item.contentType == 11)
      ? _vm.parseImgSize(_vm.item, "h")
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        m0: m0,
        g1: g1,
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
        g2: g2,
        g3: g3,
        g4: g4,
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
        m11: m11,
        m12: m12,
        g17: g17,
        g18: g18,
        g19: g19,
        g20: g20,
        m13: m13,
        l0: l0,
        g21: g21,
        a1: a1,
        m15: m15,
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
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1130:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inner-chat-item.vue?vue&type=script&lang=js& */ 1131);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1131:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _util = _interopRequireDefault(__webpack_require__(/*! @/util/util.js */ 62));
var _htmlParser = _interopRequireDefault(__webpack_require__(/*! @/util/html-parser.js */ 1044));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var videoPlayer = function videoPlayer() {
  __webpack_require__.e(/*! require.ensure | components/videoPlayer/videoPlayer */ "components/videoPlayer/videoPlayer").then((function () {
    return resolve(__webpack_require__(/*! @/components/videoPlayer/videoPlayer.vue */ 756));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default2 = {
  name: "chat-item",
  components: {
    videoPlayer: videoPlayer
  },
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {
          id: '',
          msgType: '',
          userName: '',
          userAvatar: '',
          content: {},
          meFlag: false,
          createTime: ''
        };
      }
    },
    chatGroupType: {
      type: Number,
      default: 1
    },
    showCheck: {
      type: Boolean,
      default: true
    },
    previewSrcArr: {
      type: Array,
      default: []
    }
  },
  data: function data() {
    return {
      currentUserInfo: '',
      previewVideoFlag: false,
      previewVideoSrc: '',
      previewChatRecordFlag: false,
      chatRecotdContentObjStr: ''
    };
  },
  mounted: function mounted() {
    var that = this;
    that.currentUserInfo = that.vuex_userInfo;
  },
  methods: {
    //复选框点击事件
    selectChange: function selectChange(event, msg) {
      var that = this;
      //console.log("event",event);
      if (event.value == true) {
        that.$emit("change", msg, 0);
      } else {
        that.$emit("change", msg, 1);
      }
    },
    //内容格式化
    parseContent: function parseContent(item) {
      var that = this;
      var msgType = item.msgType;
      var contentType = item.contentType;
      //信息类型 1文本
      if (contentType == 1) {
        var content = JSON.parse(item.content);
        var msgStr = content.text;
        var sysType = content.contentType; //内容类型
        var optionType = content.optionType;
        //系统信息
        if (sysType != null && sysType != undefined && sysType == 1) {
          if (msgStr.length > 0) {
            return "群主发布了新的公告";
          } else {
            return "群主作废了群公告";
          }
        }
        //用户撤回信息
        if (optionType == -2) {
          return item.userName + ":撤回了一条消息";
        }
        //红包类型
        if (sysType == 7) {
          //单聊
          if (this.chatGroupType == 0) {
            if (item.fromUserId != this.currentUserInfo.id) {
              return item.userName + "领取了你的红包";
            }
          }
          //群聊
          else {
            if (item.fromUserId != this.currentUserInfo.id) {
              return item.userName + "领取了红包";
            } else {
              return "你领取了红包";
            }
          }
        }
        var transText = _util.default.transform(msgStr, "", "");
        return transText;
        //return parseHtml(transText);
      } else if (contentType == 3) {
        var videoContent = JSON.parse(item.content);
        var subImgInfo = videoContent.subImgInfo;
        if (subImgInfo) {
          that.messageApi.saveLocal(item);
          return subImgInfo.url;
        } else {
          return "";
        }
      } else {
        var msgId = item.id;
        var localSrc = uni.getStorageSync("image" + msgId);
        if (localSrc) {
          return localSrc;
        }
        ;
        that.messageApi.saveLocal(item);
        return JSON.parse(item.content).url;
      }
    },
    //图片信息计算高度
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
    //红包是否领取过
    redBagIsReceive: function redBagIsReceive(item) {
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
    //解析聊天记录类型的标题
    parseChatRecordTitle: function parseChatRecordTitle(item) {
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
          return content.url;
        }
      }
    },
    //预览图片
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
          urls: that.previewSrcArr ? that.previewSrcArr : [src],
          //[src]
          current: src
        });
      }
      return;
    },
    //播放视频
    boFangVideo: function boFangVideo(item) {
      var that = this;
      var videoContent = JSON.parse(item.content);
      var videoSrc = videoContent.url;
      this.previewVideoSrc = videoSrc;
      this.previewVideoFlag = true;
    },
    //关闭播放视频
    stopPlayVideo: function stopPlayVideo() {
      this.previewVideoFlag = false;
    },
    //查看聊天记录
    openChatRecord: function openChatRecord(item) {
      var that = this;
      that.chatRecotdContentObjStr = JSON.stringify(item);
      that.previewChatRecordFlag = true;
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1132:
/*!*****************************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=style&index=0&id=2658e05f&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./inner-chat-item.vue?vue&type=style&index=0&id=2658e05f&scoped=true&lang=scss& */ 1133);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_inner_chat_item_vue_vue_type_style_index_0_id_2658e05f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1133:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/components/chat-item/inner-chat-item.vue?vue&type=style&index=0&id=2658e05f&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/chat-item/inner-chat-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chat-item/inner-chat-item-create-component',
    {
        'components/chat-item/inner-chat-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1127))
        })
    },
    [['components/chat-item/inner-chat-item-create-component']]
]);
