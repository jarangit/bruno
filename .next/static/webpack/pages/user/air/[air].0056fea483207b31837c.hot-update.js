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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/form */ \"./components/form/index.tsx\");\n/* harmony import */ var _data_usersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/usersData */ \"./data/usersData.js\");\n/* harmony import */ var _styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/page/airDetailPage.module.scss */ \"./styles/page/airDetailPage.module.scss\");\n/* harmony import */ var _styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/pages/user/air/[air].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar AirDetailPage = function AirDetailPage(_ref) {\n  _s();\n\n  var dataAitList = _ref.dataAitList;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (router) {\n      var id = router.query.air;\n      console.log(router);\n      var findUser = _data_usersData__WEBPACK_IMPORTED_MODULE_3__.usersData.find(function (item) {\n        return item.id === parseInt(id);\n      });\n      setData(findUser);\n    }\n  }, [router]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"box_black\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n        src: \"/svg/follwer.svg\",\n        width: 30,\n        className: \"icon\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n        children: \"\\u0E23\\u0E32\\u0E22\\u0E01\\u0E32\\u0E23 AIR\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: (_styles_page_airDetailPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().box_grid),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_2__.AirRegisterForm, {\n          title: \"Registered points\",\n          data: dataAitList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_form__WEBPACK_IMPORTED_MODULE_2__.AirRegisterForm, {\n          title: \"Un Registered points\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      style: {\n        textAlign: \"center\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        className: \"but_gray\",\n        children: \"\\u0E1A\\u0E31\\u0E19\\u0E17\\u0E36\\u0E01\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AirDetailPage, \"uKc4MJThIMWmKuMfmEadRZa0giM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = AirDetailPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AirDetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AirDetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2Fpci9bYWlyXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQW1CQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUVoRCxNQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQXhCOztBQUNBLGtCQUF3QkcsK0NBQVEsRUFBaEM7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU8sTUFBSixFQUFZO0FBQ1YsVUFBTUcsRUFBTyxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsR0FBN0I7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFFQSxVQUFNUSxRQUFRLEdBQUdaLDJEQUFBLENBQWUsVUFBQ2MsSUFBRDtBQUFBLGVBQWVBLElBQUksQ0FBQ1AsRUFBTCxLQUFZUSxRQUFRLENBQUNSLEVBQUQsQ0FBbkM7QUFBQSxPQUFmLENBQWpCO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ00sUUFBRCxDQUFQO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ1IsTUFBRCxDQVJNLENBQVQ7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVILHFGQUFoQjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLGtCQUFUO0FBQTRCLGFBQUssRUFBRSxFQUFuQztBQUF1QyxpQkFBUyxFQUFDLE1BQWpEO0FBQXdELFdBQUcsRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSyxlQUFTLEVBQUVBLHdGQUFoQjtBQUFBLDhCQUNFO0FBQUEsK0JBQUssOERBQUMsNkRBQUQ7QUFBaUIsZUFBSyxFQUFDLG1CQUF2QjtBQUEyQyxjQUFJLEVBQUlFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLCtCQUFLLDhEQUFDLDZEQUFEO0FBQWlCLGVBQUssRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBVUU7QUFBSyxXQUFLLEVBQUU7QUFBRWUsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQS9CRDs7R0FBTWhCO1VBRVdQOzs7S0FGWE87O0FBaUNOLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvYWlyL1thaXJdLnRzeD80Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFpclJlZ2lzdGVyRm9ybSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZm9ybSdcbmltcG9ydCB7IHVzZXJzRGF0YSB9IGZyb20gJy4uLy4uLy4uL2RhdGEvdXNlcnNEYXRhJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvcGFnZS9haXJEZXRhaWxQYWdlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgYmFzZVVybCwgZmVjdGhBcGkgfSBmcm9tICcuLi8uLi8uLi91dGlsbHMvZmVjdGhBcGknXG5cblxuXG50eXBlIFByb3BzID0ge1xuICBkYXRhQWl0TGlzdDogW11cbn1cblxuaW50ZXJmYWNlIFVzZXIge1xuICBpZDogYW55LFxuICBmbmFtZTogc3RyaW5nLFxuICBsbmFtZTogc3RyaW5nLFxuICBlbWFpbDogc3RyaW5nLFxuICB0ZWxsOiBzdHJpbmcsXG4gIGZvb2w6IHN0cmluZyxcbiAgbGluZTogc3RyaW5nLFxufVxuXG5jb25zdCBBaXJEZXRhaWxQYWdlID0gKHsgZGF0YUFpdExpc3QgfTogUHJvcHMpID0+IHtcbiBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VXNlcj4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlcikge1xuICAgICAgY29uc3QgaWQ6IGFueSA9IHJvdXRlci5xdWVyeS5haXI7XG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuXG4gICAgICBjb25zdCBmaW5kVXNlciA9IHVzZXJzRGF0YS5maW5kKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSlcbiAgICAgIHNldERhdGEoZmluZFVzZXIpXG4gICAgfVxuICB9LCBbcm91dGVyXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3hfYmxhY2snPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3N2Zy9mb2xsd2VyLnN2Z1wiIHdpZHRoPXszMH0gY2xhc3NOYW1lPVwiaWNvblwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMz7guKPguLLguKLguIHguLLguKMgQUlSPC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF9ncmlkfT5cbiAgICAgICAgPGRpdj48QWlyUmVnaXN0ZXJGb3JtIHRpdGxlPVwiUmVnaXN0ZXJlZCBwb2ludHNcIiBkYXRhID0ge2RhdGFBaXRMaXN0fSAvPjwvZGl2PlxuICAgICAgICA8ZGl2PjxBaXJSZWdpc3RlckZvcm0gdGl0bGU9XCJVbiBSZWdpc3RlcmVkIHBvaW50c1wiIC8+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0X2dyYXknID7guJrguLHguJnguJfguLbguIE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFpckRldGFpbFBhZ2VcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBhcmlMaXN0ID0gYXdhaXQgZmVjdGhBcGkoXG4gICAgYCR7YmFzZVVybH0vZGV2aWNlcz9idWlsZGluZ19pZD0zOGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGFBaXRMaXN0OiBhcmlMaXN0XG4gICAgfVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWlyUmVnaXN0ZXJGb3JtIiwidXNlcnNEYXRhIiwic3R5bGVzIiwiQWlyRGV0YWlsUGFnZSIsImRhdGFBaXRMaXN0Iiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJpZCIsInF1ZXJ5IiwiYWlyIiwiY29uc29sZSIsImxvZyIsImZpbmRVc2VyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsInRpdGxlIiwiYm94X2dyaWQiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/air/[air].tsx\n");

/***/ })

});