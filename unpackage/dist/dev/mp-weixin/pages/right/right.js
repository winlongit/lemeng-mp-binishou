(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/right/right"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/workspace/uniapp/lemeng-mp/pages/right/right.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























































































































var _pdlist = _interopRequireDefault(__webpack_require__(/*! @/common/pdlist.js */ "E:\\workspace\\uniapp\\lemeng-mp\\common\\pdlist.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var MescrollUni = function MescrollUni() {return Promise.all(/*! import() | components/mescroll-uni/mescroll-uni */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mescroll-uni/mescroll-uni")]).then(__webpack_require__.bind(null, /*! @/components/mescroll-uni/mescroll-uni.vue */ "E:\\workspace\\uniapp\\lemeng-mp\\components\\mescroll-uni\\mescroll-uni.vue"));};var _default =

{
  name: 'right',
  components: {
    MescrollUni: MescrollUni },

  data: function data() {
    return {
      mescroll: null, //mescroll实例对象
      pdList: [], // 数据列表
      index: 2,
      avatar: [
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'],

      // 下拉刷新的配置
      downOption: {
        use: true, // 是否启用下拉刷新; 默认true
        auto: true // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
      },
      // 上拉加载的配置
      upOption: {
        use: true, // 是否启用上拉加载; 默认true
        auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        isLock: false, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 10 // 每页数据的数量,默认10
        },
        noMoreSize: 3, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
        empty: {
          tip: '暂无相关数据' } } };



  },
  //注册滚动到底部的事件,用于上拉加载
  onReachBottom: function onReachBottom() {
    this.mescroll && this.mescroll.onReachBottom();
  },
  //注册列表滚动事件,用于下拉刷新
  onPageScroll: function onPageScroll(e) {
    this.mescroll && this.mescroll.onPageScroll(e);
  },
  methods: {
    $_click: function $_click(itemname) {
      console.log(itemname);
    },
    // mescroll组件初始化的回调,可获取到mescroll对象
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    // 下拉刷新的回调
    downCallback: function downCallback(mescroll) {
      mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
    },
    /*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
    upCallback: function upCallback(mescroll) {var _this = this;
      //联网加载数据
      this.getListDataFromNet(
      mescroll.num,
      mescroll.size,
      function (curPageData) {
        //curPageData=[]; //打开本行注释,可演示列表无任何数据empty的配置

        //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        console.log('mescroll.num=' + mescroll.num + ', mescroll.size=' + mescroll.size + ', curPageData.length=' + curPageData.length);

        //方法一(推荐): 后台接口有返回列表的总页数 totalPage
        //mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)

        //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
        //mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)

        //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        //mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

        //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
        mescroll.endSuccess(curPageData.length);

        //设置列表数据
        if (mescroll.num == 1) _this.pdList = []; //如果是第一页需手动制空列表
        _this.pdList = _this.pdList.concat(curPageData); //追加新数据
      },
      function () {
        //联网失败的回调,隐藏下拉刷新的状态
        mescroll.endErr();
      });

    },
    /*联网加载列表数据
       在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
       请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
       实际项目以您服务器接口返回的数据为准,无需本地处理分页.
       * */
    getListDataFromNet: function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
      //延时一秒,模拟联网
      // setTimeout(()=> {
      // 	try{
      // 		//模拟分页数据
      // 		var listData=[];
      // 		for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
      // 			if(i==mockData.length) break;
      // 			listData.push(mockData[i]);
      // 		}
      // 		//联网成功的回调
      // 		successCallback && successCallback(listData);
      // 	} catch (e) {
      // 		//联网失败的回调
      // 		errorCallback && errorCallback();
      // 	}
      // },1000)
      this.$api.
      get('/task/getTask', { noncestr: Date.now() }).
      then(function (res) {
        console.log('request success', res);
        uni.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true });

        // 模拟分页数据
        var listData = [];
        for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
          if (i == _pdlist.default.length) break;
          listData.push(_pdlist.default[i]);
        }
        //联网成功的回调
        successCallback && successCallback(listData);
      }).
      catch(function (err) {
        console.log('request fail', err);
        errorCallback && errorCallback();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=template&id=6c85ff4d&name=right&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/workspace/uniapp/lemeng-mp/pages/right/right.vue?vue&type=template&id=6c85ff4d&name=right& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue":
/*!***********************************************************!*\
  !*** E:/workspace/uniapp/lemeng-mp/pages/right/right.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right.vue?vue&type=template&id=6c85ff4d&name=right& */ "E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=template&id=6c85ff4d&name=right&");
/* harmony import */ var _right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right.vue?vue&type=script&lang=js& */ "E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__["render"],
  _right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/workspace/uniapp/lemeng-mp/pages/right/right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** E:/workspace/uniapp/lemeng-mp/pages/right/right.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=template&id=6c85ff4d&name=right&":
/*!*****************************************************************************************************!*\
  !*** E:/workspace/uniapp/lemeng-mp/pages/right/right.vue?vue&type=template&id=6c85ff4d&name=right& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./right.vue?vue&type=template&id=6c85ff4d&name=right& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\workspace\\uniapp\\lemeng-mp\\pages\\right\\right.vue?vue&type=template&id=6c85ff4d&name=right&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_right_vue_vue_type_template_id_6c85ff4d_name_right___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\workspace\\uniapp\\lemeng-mp\\main.js?{\"page\":\"pages%2Fright%2Fright\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/right/right.js.map