"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/air/[air]",{

/***/ "./pages/user/air/[air].tsx":
/*!**********************************!*\
  !*** ./pages/user/air/[air].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/form */ \"./components/form/index.tsx\");\n/* harmony import */ var _data_usersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/usersData */ \"./data/usersData.js\");\n/* harmony import */ var _styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/page/airDetailPage.module.scss */ \"./styles/page/airDetailPage.module.scss\");\n/* harmony import */ var _styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/pages/user/air/[air].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AirDetailPage = function AirDetailPage(props) {\n  _s();\n\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (router) {\n      var id = router.query.air;\n      console.log(router);\n      var findUser = _data_usersData__WEBPACK_IMPORTED_MODULE_3__.usersData.find(function (item) {\n        return item.id === parseInt(id);\n      });\n      setData(findUser);\n    }\n  }, [router]);\n  console.log({\n    \"this get data air page id \": data\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"box_black\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n        src: \"/svg/follwer.svg\",\n        width: 30,\n        className: \"icon\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n        children: \"\\u0E23\\u0E32\\u0E22\\u0E01\\u0E32\\u0E23 AIR\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().box_grid),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_2__.AirRegisterForm, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_2__.AirRegisterForm, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AirDetailPage, \"uKc4MJThIMWmKuMfmEadRZa0giM=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = AirDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AirDetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AirDetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2Fpci9bYWlyXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWdCQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBa0I7QUFBQTs7QUFFdEMsTUFBTUMsTUFBTSxHQUFHVCxrRUFBUyxFQUF4Qjs7QUFDQSxrQkFBd0JHLCtDQUFRLEVBQWhDO0FBQUEsTUFBT08sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUFULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlPLE1BQUosRUFBWTtBQUNWLFVBQU1HLEVBQU8sR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEdBQTdCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBRUEsVUFBTVEsUUFBUSxHQUFHWiwyREFBQSxDQUFlLFVBQUNjLElBQUQ7QUFBQSxlQUFlQSxJQUFJLENBQUNQLEVBQUwsS0FBWVEsUUFBUSxDQUFDUixFQUFELENBQW5DO0FBQUEsT0FBZixDQUFqQjtBQUNBRCxNQUFBQSxPQUFPLENBQUNNLFFBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNSLE1BQUQsQ0FSTSxDQUFUO0FBU0FNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUUsa0NBQThCTjtBQUFoQyxHQUFaO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFSixxRkFBaEI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFLLEVBQUUsRUFBbkM7QUFBdUMsaUJBQVMsRUFBRyxNQUFuRDtBQUEwRCxXQUFHLEVBQUM7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUssZUFBUyxFQUFFQSx3RkFBaEI7QUFBQSw4QkFDRTtBQUFBLCtCQUFLLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLCtCQUFLLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQTdCRDs7R0FBTUM7VUFFV1A7OztLQUZYTztBQStCTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL2Fpci9bYWlyXS50c3g/NDM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBaXJSZWdpc3RlckZvcm0gfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvcm0nXG5pbXBvcnQgeyB1c2Vyc0RhdGEgfSBmcm9tICcuLi8uLi8uLi9kYXRhL3VzZXJzRGF0YSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3BhZ2UvYWlyRGV0YWlsUGFnZS5tb2R1bGUuc2NzcydcblxuXG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5pbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBhbnksXG4gIGZuYW1lOiBzdHJpbmcsXG4gIGxuYW1lOiBzdHJpbmcsXG4gIGVtYWlsOiBzdHJpbmcsXG4gIHRlbGw6IHN0cmluZyxcbiAgZm9vbDogc3RyaW5nLFxuICBsaW5lOiBzdHJpbmcsXG59XG5cbmNvbnN0IEFpckRldGFpbFBhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VXNlcj4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlcikge1xuICAgICAgY29uc3QgaWQ6IGFueSA9IHJvdXRlci5xdWVyeS5haXI7XG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuXG4gICAgICBjb25zdCBmaW5kVXNlciA9IHVzZXJzRGF0YS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSlcbiAgICAgIHNldERhdGEoZmluZFVzZXIpXG4gICAgfVxuICB9LCBbcm91dGVyXSlcbiAgY29uc29sZS5sb2coeyBcInRoaXMgZ2V0IGRhdGEgYWlyIHBhZ2UgaWQgXCI6IGRhdGEgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm94X2JsYWNrJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9zdmcvZm9sbHdlci5zdmdcIiB3aWR0aD17MzB9IGNsYXNzTmFtZSA9IFwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMz7guKPguLLguKLguIHguLLguKMgQUlSPC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9ncmlkfT5cbiAgICAgICAgPGRpdj48QWlyUmVnaXN0ZXJGb3JtIC8+PC9kaXY+XG4gICAgICAgIDxkaXY+PEFpclJlZ2lzdGVyRm9ybSAvPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWlyRGV0YWlsUGFnZSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWlyUmVnaXN0ZXJGb3JtIiwidXNlcnNEYXRhIiwic3R5bGVzIiwiQWlyRGV0YWlsUGFnZSIsInByb3BzIiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJpZCIsInF1ZXJ5IiwiYWlyIiwiY29uc29sZSIsImxvZyIsImZpbmRVc2VyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsInRpdGxlIiwiYm94X2dyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/air/[air].tsx\n");

/***/ })

});