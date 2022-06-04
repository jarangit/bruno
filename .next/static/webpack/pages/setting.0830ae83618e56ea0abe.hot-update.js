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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_charts_LineChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/charts/LineChart */ \"./components/charts/LineChart.tsx\");\n/* harmony import */ var _components_table_settingTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/settingTable */ \"./components/table/settingTable.tsx\");\n/* harmony import */ var _redux_slice_buildingSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/slice/buildingSlice */ \"./redux/slice/buildingSlice.ts\");\n/* harmony import */ var _styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/page/settingPage.module.scss */ \"./styles/page/settingPage.module.scss\");\n/* harmony import */ var _styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _utills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utills */ \"./utills/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/pages/setting.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Setting = function Setting(props) {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.building;\n  }),\n      data = _useSelector.data;\n\n  var allData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.allBuildings;\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      isToken = _useState[0],\n      setIsToken = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),\n      currentBId = _useState2[0],\n      setCurrentBId = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var token = localStorage.getItem(\"token\");\n    var currentBuildingID = (0,_utills__WEBPACK_IMPORTED_MODULE_7__.getFromStorage)(\"currentBuildingID\");\n\n    if (token && currentBuildingID) {\n      dispatch((0,_redux_slice_buildingSlice__WEBPACK_IMPORTED_MODULE_6__.buildingAsync)(Number(currentBuildingID)));\n      setIsToken(token);\n      setCurrentBId(currentBuildingID);\n    } else {\n      router.push('/signin');\n      return;\n    }\n  }, [allData.currentBuilding]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n        src: \"svg/arrowLeft.svg\",\n        className: \"icon\",\n        width: 40,\n        style: {\n          margin: \"0px\"\n        },\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n      className: \"box_black\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"img\", {\n          src: \"/svg/gear.svg\",\n          alt: \"\",\n          width: 20,\n          className: \"icon\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n          children: \"Unit Price Setting \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().boxGraph),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().boxGrapgL),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: (_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bath),\n            children: [\"\\u0E2A\\u0E01\\u0E38\\u0E25\\u0E40\\u0E07\\u0E34\\u0E19\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n              children: \"THB\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n              children: \"Price/Time Zone\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n          className: \"\".concat((_styles_page_settingPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().graph), \" relative\"),\n          children: data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_charts_LineChart__WEBPACK_IMPORTED_MODULE_4__.LineChart, {\n            dataGraph: data.unit_price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this) : null\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n        children: data && isToken && currentBId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_table_settingTable__WEBPACK_IMPORTED_MODULE_5__.default, {\n          data: data.unit_price || [],\n          token: isToken,\n          currentBId: currentBId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, _this) : \"no data\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Setting, \"Nc62MP7mTu5fKEDtkJbS67rK/pU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c = Setting;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Setting);\n\nvar _c;\n\n$RefreshReg$(_c, \"Setting\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQVMsWUFBS0EsbUZBQUwsY0FBZDtBQUFBLG9CQUNHUSxJQUFJLGdCQUNILDhEQUFDLG1FQUFEO0FBQVcscUJBQVMsRUFBRUEsSUFBSSxDQUFDb0I7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERyxHQUVEO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQTZCRTtBQUFBLGtCQUNHcEIsSUFBSSxJQUFJRyxPQUFSLElBQW1CRSxVQUFuQixnQkFDQyw4REFBQyxtRUFBRDtBQUFjLGNBQUksRUFBRUwsSUFBSSxDQUFDb0IsVUFBTCxJQUFtQixFQUF2QztBQUEyQyxlQUFLLEVBQUVqQixPQUFsRDtBQUEyRCxvQkFBVSxFQUFFRTtBQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUEwQ0QsQ0FqRUQ7O0dBQU1YO1VBRWFQLHNEQUNGSixvREFDRUssc0RBQ0RBOzs7S0FMWk07QUFrRU4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZy50c3g/OGEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1RodW5rQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jaGFydHMvTGluZUNoYXJ0J1xuaW1wb3J0IFNldHRpbmdUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlL3NldHRpbmdUYWJsZSdcbmltcG9ydCB7IGJ1aWxkaW5nQXN5bmMgfSBmcm9tICcuLi9yZWR1eC9zbGljZS9idWlsZGluZ1NsaWNlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2Uvc2V0dGluZ1BhZ2UubW9kdWxlLnNjc3NcIlxuaW1wb3J0IHsgZ2V0RnJvbVN0b3JhZ2UgfSBmcm9tICcuLi91dGlsbHMnXG50eXBlIFByb3BzID0ge31cblxuY29uc3QgU2V0dGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYnVpbGRpbmcpXG4gIGNvbnN0IGFsbERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYWxsQnVpbGRpbmdzKVxuICBjb25zdCBbaXNUb2tlbiwgc2V0SXNUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY3VycmVudEJJZCwgc2V0Q3VycmVudEJJZF0gPSB1c2VTdGF0ZSgpXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKVxuICAgIGNvbnN0IGN1cnJlbnRCdWlsZGluZ0lEID0gZ2V0RnJvbVN0b3JhZ2UoXCJjdXJyZW50QnVpbGRpbmdJRFwiKVxuICAgIGlmICh0b2tlbiAmJiBjdXJyZW50QnVpbGRpbmdJRCkge1xuICAgICAgZGlzcGF0Y2goYnVpbGRpbmdBc3luYyhOdW1iZXIoY3VycmVudEJ1aWxkaW5nSUQpKSlcbiAgICAgIHNldElzVG9rZW4odG9rZW4pXG4gICAgICBzZXRDdXJyZW50QklkKGN1cnJlbnRCdWlsZGluZ0lEKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0sIFthbGxEYXRhLmN1cnJlbnRCdWlsZGluZyxdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgPGltZyBzcmM9XCJzdmcvYXJyb3dMZWZ0LnN2Z1wiIGNsYXNzTmFtZT0naWNvbicgd2lkdGg9ezQwfSBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0gYWx0PVwiXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3hfYmxhY2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZ2Vhci5zdmdcIiBhbHQ9XCJcIiB3aWR0aD17MjB9IGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgIDxwPlVuaXQgUHJpY2UgU2V0dGluZyA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JhcGh9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94R3JhcGdMfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJhdGh9PlxuICAgICAgICAgICAgICDguKrguIHguLjguKXguYDguIfguLTguJlcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgVEhCXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFByaWNlL1RpbWUgWm9uZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ3JhcGh9IHJlbGF0aXZlYH0+XG4gICAgICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICAgICAgPExpbmVDaGFydCBkYXRhR3JhcGg9e2RhdGEudW5pdF9wcmljZX0gLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2RhdGEgJiYgaXNUb2tlbiAmJiBjdXJyZW50QklkID8gKFxuICAgICAgICAgICAgPFNldHRpbmdUYWJsZSBkYXRhPXtkYXRhLnVuaXRfcHJpY2UgfHwgW119IHRva2VuPXtpc1Rva2VufSBjdXJyZW50QklkPXtjdXJyZW50QklkfSAvPlxuICAgICAgICAgICkgOiBcIm5vIGRhdGFcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1xuXG5cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkxpbmVDaGFydCIsIlNldHRpbmdUYWJsZSIsImJ1aWxkaW5nQXN5bmMiLCJzdHlsZXMiLCJnZXRGcm9tU3RvcmFnZSIsIlNldHRpbmciLCJwcm9wcyIsImRpc3BhdGNoIiwicm91dGVyIiwic3RhdGUiLCJidWlsZGluZyIsImRhdGEiLCJhbGxEYXRhIiwiYWxsQnVpbGRpbmdzIiwiaXNUb2tlbiIsInNldElzVG9rZW4iLCJjdXJyZW50QklkIiwic2V0Q3VycmVudEJJZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRCdWlsZGluZ0lEIiwiTnVtYmVyIiwicHVzaCIsImN1cnJlbnRCdWlsZGluZyIsIm1hcmdpbiIsInRpdGxlIiwiYm94R3JhcGgiLCJib3hHcmFwZ0wiLCJiYXRoIiwiZ3JhcGgiLCJ1bml0X3ByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/setting.tsx\n");

/***/ })

});