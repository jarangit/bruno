"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/setting",{

/***/ "./pages/setting.tsx":
/*!***************************!*\
  !*** ./pages/setting.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_charts_LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/charts/LineChart */ \"./components/charts/LineChart.tsx\");\n/* harmony import */ var _components_table_settingTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/settingTable */ \"./components/table/settingTable.tsx\");\n/* harmony import */ var _redux_slice_buildingSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slice/buildingSlice */ \"./redux/slice/buildingSlice.ts\");\n/* harmony import */ var _styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/page/settingPage.module.scss */ \"./styles/page/settingPage.module.scss\");\n/* harmony import */ var _styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/pages/setting.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Setting = function Setting(props) {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.building;\n  }),\n      data = _useSelector.data;\n\n  console.log(data.unit_price);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var token = localStorage.getItem(\"token\");\n\n    if (token) {\n      dispatch((0,_redux_slice_buildingSlice__WEBPACK_IMPORTED_MODULE_6__.buildingAsync)(38));\n    } else {\n      router.push('/signin');\n      return;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n        src: \"svg/arrowLeft.svg\",\n        className: \"icon\",\n        width: 40,\n        style: {\n          margin: \"0px\"\n        },\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: \"box_black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n          src: \"/svg/gear.svg\",\n          alt: \"\",\n          width: 20,\n          className: \"icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n          children: \"Unit Price Setting \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().boxGraph),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().boxGrapgL),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n            className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bath),\n            children: [\"\\u0E2A\\u0E01\\u0E38\\u0E25\\u0E40\\u0E07\\u0E34\\u0E19\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n              children: \"THB\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"p\", {\n              children: \"Price/Time Zone\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().graph),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_4__.LineChart, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_table_settingTable__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Setting, \"zYrteywoVCwsqvwX2O1UHZ8m7tc=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c = Setting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Setting);\n\nvar _c;\n\n$RefreshReg$(_c, \"Setting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Zy50c3g/OGEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1RodW5rQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBMaW5lQ2hhcnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2NoYXJ0cy9MaW5lQ2hhcnQnXG5pbXBvcnQgU2V0dGluZ1RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUvc2V0dGluZ1RhYmxlJ1xuaW1wb3J0IHsgYnVpbGRpbmdBc3luYyB9IGZyb20gJy4uL3JlZHV4L3NsaWNlL2J1aWxkaW5nU2xpY2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZS9zZXR0aW5nUGFnZS5tb2R1bGUuc2Nzc1wiXG50eXBlIFByb3BzID0ge31cblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qge2RhdGF9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmJ1aWxkaW5nKVxuICBjb25zb2xlLmxvZyhkYXRhLnVuaXRfcHJpY2UpO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRpc3BhdGNoKGJ1aWxkaW5nQXN5bmMoMzgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0sIFtdKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgIDxpbWcgc3JjPVwic3ZnL2Fycm93TGVmdC5zdmdcIiBjbGFzc05hbWU9J2ljb24nIHdpZHRoPXs0MH0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19IGFsdD1cIlwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm94X2JsYWNrJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3ZnL2dlYXIuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9ezIwfSBjbGFzc05hbWU9XCJpY29uXCIgLz5cbiAgICAgICAgICA8cD5Vbml0IFByaWNlIFNldHRpbmcgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyYXBofT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveEdyYXBnTH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iYXRofT5cbiAgICAgICAgICAgICAg4Liq4LiB4Li44Lil4LmA4LiH4Li04LiZXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIFRIQlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBQcmljZS9UaW1lIFpvbmVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JhcGh9PlxuICAgICAgICAgICAgICA8TGluZUNoYXJ0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZXR0aW5nVGFibGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xuXG5cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJMaW5lQ2hhcnQiLCJTZXR0aW5nVGFibGUiLCJidWlsZGluZ0FzeW5jIiwic3R5bGVzIiwiU2V0dGluZyIsInByb3BzIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJzdGF0ZSIsImJ1aWxkaW5nIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1bml0X3ByaWNlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIm1hcmdpbiIsInRpdGxlIiwiYm94R3JhcGgiLCJib3hHcmFwZ0wiLCJiYXRoIiwiZ3JhcGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/setting.tsx\n");

/***/ })

});