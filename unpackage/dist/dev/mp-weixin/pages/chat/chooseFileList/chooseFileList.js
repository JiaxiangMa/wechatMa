(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chooseFileList/chooseFileList"],{

/***/ 348:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/main.js?{"page":"pages%2Fchat%2FchooseFileList%2FchooseFileList"} ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chooseFileList = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chooseFileList/chooseFileList.vue */ 349));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chooseFileList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 349:
/*!***********************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseFileList.vue?vue&type=template&id=b10110de&scoped=true& */ 350);
/* harmony import */ var _chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseFileList.vue?vue&type=script&lang=js& */ 352);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chooseFileList.vue?vue&type=style&index=0&id=b10110de&lang=scss&scoped=true& */ 354);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b10110de",
  null,
  false,
  _chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chooseFileList/chooseFileList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 350:
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=template&id=b10110de&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chooseFileList.vue?vue&type=template&id=b10110de&scoped=true& */ 351);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_template_id_b10110de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 351:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=template&id=b10110de&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uSubsection: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-subsection/u-subsection */ "node-modules/uview-ui/components/u-subsection/u-subsection").then(__webpack_require__.bind(null, /*! uview-ui/components/u-subsection/u-subsection.vue */ 1011))
    },
    uButton: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-button/u-button */ "node-modules/uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 658))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 679))
    },
    uEmpty: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-empty/u-empty */ "node-modules/uview-ui/components/u-empty/u-empty").then(__webpack_require__.bind(null, /*! uview-ui/components/u-empty/u-empty.vue */ 707))
    },
    uModal: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-modal/u-modal */ "node-modules/uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! uview-ui/components/u-modal/u-modal.vue */ 840))
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
  var g0 = _vm.currentTab === 0 ? _vm.chatSelectedFiles.length : null
  var g1 = _vm.currentTab === 0 ? _vm.chatSelectedFiles.length : null
  var g2 = _vm.currentTab === 1 ? _vm.sysSelectedFiles.length : null
  var g3 = _vm.currentTab === 1 ? _vm.sysSelectedFiles.length : null
  var g4 = _vm.currentTab === 0 && _vm.chatFileList.length > 0
  var g5 = _vm.currentTab === 1 && _vm.sysFileList.length > 0
  var g6 =
    (_vm.chatFileList.length < 1 && _vm.currentTab === 0) ||
    (_vm.currentTab === 1 && _vm.sysFileList.length < 1)
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.sendModalShowFlag = true
    }
    _vm.e1 = function ($event) {
      _vm.sendModalShowFlag = true
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 352:
/*!************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chooseFileList.vue?vue&type=script&lang=js& */ 353);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 353:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      chatGroupId: "",
      platFromType: 0,
      //0安卓以外其他 ,1安卓
      pageNum: 1,
      pageSize: 10,
      winHeight: 0,
      currentTab: 0,
      subList: [{
        name: '聊天中的文件'
      }, {
        name: '手机系统文件'
      }],
      popCustomStyle: {
        height: '210upx',
        marginTop: '140upx',
        textAlign: 'center',
        paddingRight: '20upx',
        paddingLeft: '20upx',
        backgroundColor: "#f3f4f6"
        //borderBottom:'1px solid red'
      },

      //搜索词
      searchWords: '',
      //系统中的文件
      sysFileList: [],
      //文件列表
      chatFileList: [],
      //已经选择的聊天中的文件
      chatSelectedFiles: [],
      //已经选择的系统中的文件
      sysSelectedFiles: [],
      //列表锚点
      scrollViewId: '',
      //内容为空展示
      emptyMode: 'list',
      //发送文件确认框标志
      sendModalShowFlag: false,
      maxFileSize: 314572800
    };
  },
  onLoad: function onLoad(option) {
    var that = this;
    console.log("option==", option);
    this.chatGroupId = option.chatGroupId;
    if (this.chatGroupId == null || this.chatGroupId == undefined) {
      this.globalUtil.utilAlert("请选择群组!");
      uni.navigateBack();
      return;
    }
    if (uni.getSystemInfoSync().platform === "android") {
      this.platFromType = 1;
      this.title = "聊天中的文件";
    } else {
      this.platFromType = 0;
    }
    var winHeight = uni.getSystemInfoSync().windowHeight;
    this.winHeight = winHeight - 90;
    var currentUserId = that.vuex_userInfo.id;
    that.sysFileList = [];
    that.sysSelectedFiles = [];
    that.chatFileList = [];
    that.getServerFiles();
  },
  onShow: function onShow() {
    var that = this;
    that.emptyMode = "list";
  },
  methods: {
    /* 获取聊天中的文件 */
    getServerFiles: function getServerFiles() {
      var _this = this;
      var param = {
        pageNum: 1,
        pageSize: 10
      };
      this.$u.api.sys.getSysFiles(param).then(function (res) {
        console.log("获取文件列表结果", res);
        if (res.code == 200) {
          var list = res.data.records;
          if (list != null && list.length > 0) {
            _this.chatFileList = list;
          }
        }
      });
    },
    //切换方式
    sectionChange: function sectionChange(index) {
      var that = this;
      this.currentTab = index;
      if (this.currentTab == 1) {
        //系统文件
        that.selectedAndroidFile();
      }
      //聊天中个文件
      else {
        that.getServerFiles();
      }
    },
    //选择文件类型
    selectedAndroidFile: function selectedAndroidFile() {
      var _this2 = this;
      var that = this;
      that.sysFileList = [];
      //读取手机内存文件
      if (uni.getSystemInfoSync().platform === "android") {
        var plugin = uni.requireNativePlugin('GuoWei-SelectFileModule');
        plugin.chooseFile({
          count: 10
        }, function (result) {
          var filePathArr = result.files;
          if (filePathArr && filePathArr.length > 0) {
            for (var i = 0; i < filePathArr.length; i++) {
              var fileObj = filePathArr[i];
              var fileSuffix = fileObj.suffix.slice(1, fileObj.suffix.length);
              var filePath = fileObj.url;
              var name = fileObj.name;
              var msg = {
                "fileSuffix": fileSuffix,
                "fileName": name,
                "filePath": filePath
              };
              var size = fileObj.size;
              if (size) {
                var fileSize = _this2.globalUtil.byteConvert(size);
                fileObj.fileSize = fileSize;
              }
              var suffix = fileSuffix.toString().toUpperCase();
              if (suffix == "JPG" || suffix == "JPEG" || suffix == "PNG" || suffix == "GIF") {
                msg.type = "img";
                msg.width = 350;
                msg.height = 350;
                msg.fileType = "img";
              } else if (suffix == "ZIP" || fileSuffix == "RAR") {
                msg.fileType = "ZIP";
              } else {
                msg.type = "file";
              }
              msg.isChecked = false;
              var param = Object.assign(fileObj, msg);
              delete param.url;
              delete param.suffix;
              delete param.name;
              //console.log("fileObj",param);
              that.sysFileList.push(param);
            }
            //console.log("sysFileList",that.sysFileList)
          } else {
            _this2.globalUtil.utilAlert("没有选中的文件!", "none");
            return;
          }
        });
      } else {
        this.globalUtil.utilAlert("系统不支持!", "warning");
        return;
      }
    },
    //搜索聊天中的文件
    searchChattingFiles: function searchChattingFiles() {
      var that = this;
      that.emptyMode = "search";
      var searchWords = that.searchWords;
      var currentUserId = that.vuex_userInfo.id;
    },
    //获取聊天中的文件(阿里云)
    getChatFileList: function getChatFileList() {
      var _this3 = this;
      var that = this;
      that.chatFileList = [];
      var param = {
        prefixDir: 'chattingFiles/2022/05',
        nextMarker: ''
      };
      if (that.chatFileList.length > 0) {
        param.nextMarker = that.chatFileList[that.chatFileList.length - 1].id;
      }
      console.log("获取聊天中的文件的参数", param);
      this.$u.api.sys.getChatFileList(param).then(function (res) {
        console.log("聊天中的文件", res);
        if (res != null && res.data != null && res.code === 200) {
          var list = res.data;
          if (list.length > 0) {
            that.chatFileList = that.chatFileList.concat(list);
            uni.hideLoading();
          } else {
            _this3.globalUtil.utilAlert("暂无更多记录!", "warning");
            uni.hideLoading();
          }
          console.log("聊天中的文件列表", that.chatFileList);
          return;
        } else {
          uni.hideLoading();
        }
      }).catch(function (res) {
        console.log("获取群聊文件出发异常", res);
        uni.hideLoading();
      });
    },
    //选择聊天中的文件
    chooseFile: function chooseFile(fileObj, key) {
      var that = this;
      var index;
      if (that.chatSelectedFiles.length >= 9) {
        index = that.chatSelectedFiles.findIndex(function (obj) {
          return obj.id === fileObj.id;
        });
      }
      if (index === -1) {
        this.globalUtil.utilAlert("最多能勾选9个", 'warning');
        return;
      }
      that.chatFileList[key].isChecked = !this.chatFileList[key].isChecked;
      //如果选中的列表为空,并且当前点击的文件isChecked等于true,就放入已选择的列表中
      if (that.chatSelectedFiles.length === 0) {
        if (fileObj.isChecked === true) {
          that.chatSelectedFiles.push(fileObj);
        }
      } else {
        var j = -1;
        for (var i = 0; i < that.chatSelectedFiles.length; i++) {
          if (fileObj.id === that.chatSelectedFiles[i].id) {
            //当存在，再次点击说明需要取消选中
            if (fileObj.isChecked === false) {
              //说明是选中的状态
              j = i;
              break;
            }
          }
        }
        if (j !== -1) {
          //表示先获取这个元素的下标，然后从这个下标开始计算，删除长度为1的元素
          that.chatSelectedFiles.splice(j, 1);
          // this.chatSelectedFiles.pop(j);
        } else {
          that.chatSelectedFiles.push(fileObj);
        }
      }
    },
    //选择系统中的文件
    chooseSysFile: function chooseSysFile(fileObj, key) {
      var that = this;
      var index;
      if (that.sysSelectedFiles.length >= 9) {
        index = that.sysSelectedFiles.findIndex(function (obj) {
          return obj.fileName === fileObj.fileName;
        });
      }
      if (index === -1) {
        this.globalUtil.utilAlert("最多能勾选9个", 'warning');
        return;
      }
      that.sysFileList[key].isChecked = !this.sysFileList[key].isChecked;
      //如果选中的列表为空,并且当前点击的文件isChecked等于true,就放入已选择的列表中
      if (that.sysSelectedFiles.length === 0) {
        if (fileObj.isChecked === true) {
          that.sysSelectedFiles.push(fileObj);
        }
      } else {
        var j = -1;
        for (var i = 0; i < that.sysSelectedFiles.length; i++) {
          if (fileObj.fileName === that.sysSelectedFiles[i].fileName) {
            //当存在，再次点击说明需要取消选中
            if (fileObj.isChecked === false) {
              //说明是选中的状态
              j = i;
              break;
            }
          }
        }
        if (j !== -1) {
          //表示先获取这个元素的下标，然后从这个下标开始计算，删除长度为1的元素
          that.sysSelectedFiles.splice(j, 1);
          // this.chatSelectedFiles.pop(j);
        } else {
          that.sysSelectedFiles.push(fileObj);
        }
      }
    },
    //发送文件
    sendFiles: function sendFiles() {
      var _this4 = this;
      var that = this;
      var sendFiles = [];
      //发送聊天中的文件
      if (that.currentTab === 0) {
        that.sendChattingFile();
        return;
      }
      //发送系统文件
      if (that.currentTab === 1) {
        var _ret = function () {
          var sendFiles = that.sysFileList;
          if (sendFiles.length < 1) {
            _this4.globalUtil.utilAlert("发送文件为空!", "error");
            return {
              v: void 0
            };
          }
          console.log("发送系统文件", sendFiles);
          var sum = sendFiles.length - 1;
          var _loop = function _loop(i) {
            setTimeout(function () {
              var item = sendFiles[i];
              item.type = "file";
              item.savePath = "/chattingFiles";
              that.sendSysFile(item, i, sum);
            }, 500);
          };
          for (var i = 0; i < sendFiles.length; i++) {
            _loop(i);
          }
        }();
        if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
      }
    },
    /*发送手机文件*/
    sendSysFile: function sendSysFile(item, index, max) {
      var that = this;
      that.globalUtil.globalUpload(that, {
        param: item,
        success: function success(res1) {
          if (res1.code == 1) {
            //console.log("上传文件结果",res1);
            var param = {
              sendFiles: [res1.result],
              chatGroupId: that.chatGroupId
            };
            that.$u.api.chatGroup.sendGroupFile(param).then(function (res) {
              if (res.code == 200) {
                if (res.data > 0) {
                  if (index == max) {
                    uni.navigateBack({
                      delta: 1,
                      animationType: 'pop-out',
                      animationDuration: 200
                    });
                  } else {
                    that.globalUtil.utilAlert("第" + (index + 1) + "份文件发送完成");
                  }
                }
              } else {
                that.globalUtil.utilAlert("第" + (index + 1) + "份文件发送失败");
                console.log("发送失败", res.message);
              }
            });
          }
          ;
        },
        fail: function fail(res1) {
          that.globalUtil.utilAlert("第" + (index + 0) + "份上传文件失败!");
        }
      });
    },
    /*发送聊天中的文件*/
    sendChattingFile: function sendChattingFile() {
      var that = this;
      var sendFiles = that.chatSelectedFiles;
      if (sendFiles.length > 0 && sendFiles.length < 10) {
        var param = {
          sendFiles: sendFiles,
          chatGroupId: that.chatGroupId
        };
        that.$u.api.chatGroup.sendGroupFile(param).then(function (res) {
          uni.hideLoading();
          if (res.code == 200) {
            if (res.data > 0) {
              uni.navigateBack({
                delta: 1,
                animationType: 'pop-out',
                animationDuration: 200
              });
            }
          } else {
            that.globalUtil.utilAlert(res.message);
            return;
          }
        });
      } else if (sendFiles.length > 9) {
        this.globalUtil.utilAlert("最多能选择9个!", "warning");
        return;
      } else {
        this.globalUtil.utilAlert("发送文件为空!", "error");
        return;
      }
    },
    //取消发送
    cancelSendFile: function cancelSendFile() {
      var that = this;
      that.sendModalShowFlag = false;
    },
    //下拉翻页加载列表
    loadMore: function loadMore() {
      var that = this;
    },
    //下载并打开文件
    downloadFile: function downloadFile(fileItem) {
      var fileSuffix = fileItem.fileSuffix;
      var fileType = fileItem.fileType;
      var fileUrl = fileItem.fileUrl == null ? fileItem.url : fileItem.fileUrl;
      if (fileUrl.length < 1) {
        return;
      }
      if (fileSuffix === "img" || fileType == 1) {
        // 预览图片
        uni.previewImage({
          urls: [fileUrl],
          indicator: "none"
        });
      } else {
        uni.downloadFile({
          url: fileUrl,
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
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 354:
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=style&index=0&id=b10110de&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chooseFileList.vue?vue&type=style&index=0&id=b10110de&lang=scss&scoped=true& */ 355);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chooseFileList_vue_vue_type_style_index_0_id_b10110de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 355:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/maxiaozha/Documents/HBuilderProjects/仿微信聊天app/pages/chat/chooseFileList/chooseFileList.vue?vue&type=style&index=0&id=b10110de&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[348,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/chooseFileList/chooseFileList.js.map