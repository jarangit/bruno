"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_user_userCardDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/userCardDetail */ \"./components/user/userCardDetail.tsx\");\n/* harmony import */ var _data_usersData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/usersData */ \"./data/usersData.js\");\n/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tab/tab */ \"./components/tab/tab.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/pages/user/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar UserDetailPage = function UserDetailPage(props) {\n  _s();\n\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (router) {\n      var _id = router.query.id;\n      var findUser = _data_usersData__WEBPACK_IMPORTED_MODULE_3__.usersData.find(function (item) {\n        return item.id === parseInt(_id);\n      });\n      setData(findUser);\n    }\n  }, [router]);\n\n  var _ref = data || {},\n      id = _ref.id,\n      fname = _ref.fname,\n      lname = _ref.lname,\n      tell = _ref.tell,\n      line = _ref.line,\n      email = _ref.email,\n      fool = _ref.fool;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    children: [data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_user_userCardDetail__WEBPACK_IMPORTED_MODULE_2__.default, {\n      id: id,\n      fname: fname || \"\",\n      lname: lname || \"\",\n      email: email || \"\",\n      tell: tell || \"\",\n      line: line || \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_tab_tab__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UserDetailPage, \"uKc4MJThIMWmKuMfmEadRZa0giM=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n\n_c = UserDetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserDetailPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserDetailPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQWFBLElBQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUV2QyxNQUFNQyxNQUFNLEdBQUdULGtFQUFTLEVBQXhCOztBQUNBLGtCQUF3QkcsK0NBQVEsRUFBaEM7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQVQsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSU8sTUFBSixFQUFZO0FBQ1YsVUFBTUcsR0FBTyxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUQsRUFBN0I7QUFDQSxVQUFNRSxRQUFRLEdBQUdULDJEQUFBLENBQWUsVUFBQ1csSUFBRDtBQUFBLGVBQWVBLElBQUksQ0FBQ0osRUFBTCxLQUFZSyxRQUFRLENBQUNMLEdBQUQsQ0FBbkM7QUFBQSxPQUFmLENBQWpCO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0csUUFBRCxDQUFQO0FBQ0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ0wsTUFBRCxDQU5NLENBQVQ7O0FBUUEsYUFBc0RDLElBQUksSUFBSSxFQUE5RDtBQUFBLE1BQVFFLEVBQVIsUUFBUUEsRUFBUjtBQUFBLE1BQVlNLEtBQVosUUFBWUEsS0FBWjtBQUFBLE1BQW1CQyxLQUFuQixRQUFtQkEsS0FBbkI7QUFBQSxNQUEwQkMsSUFBMUIsUUFBMEJBLElBQTFCO0FBQUEsTUFBZ0NDLElBQWhDLFFBQWdDQSxJQUFoQztBQUFBLE1BQXNDQyxLQUF0QyxRQUFzQ0EsS0FBdEM7QUFBQSxNQUE2Q0MsSUFBN0MsUUFBNkNBLElBQTdDOztBQUVBLHNCQUNFO0FBQUEsZUFDR2IsSUFBSSxpQkFDSCw4REFBQyxvRUFBRDtBQUNFLFFBQUUsRUFBRUUsRUFETjtBQUVFLFdBQUssRUFBRU0sS0FBSyxJQUFJLEVBRmxCO0FBR0UsV0FBSyxFQUFFQyxLQUFLLElBQUksRUFIbEI7QUFJRSxXQUFLLEVBQUVHLEtBQUssSUFBSSxFQUpsQjtBQUtFLFVBQUksRUFBRUYsSUFBSSxJQUFJLEVBTGhCO0FBTUUsVUFBSSxFQUFFQyxJQUFJLElBQUk7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBV0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0E5QkQ7O0dBQU1kO1VBRVdQOzs7S0FGWE87QUFnQ04sK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9baWRdLnRzeD8wM2JjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJOYXZJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGFiL3RhYk5hdkl0ZW0nXG5pbXBvcnQgVGFiQ29udGVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RhYi90YWJDb250ZW50J1xuaW1wb3J0IFVzZXJDYXJkRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlci91c2VyQ2FyZERldGFpbCdcbmltcG9ydCB7IHVzZXJzRGF0YSB9IGZyb20gJy4uLy4uL2RhdGEvdXNlcnNEYXRhJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90YWIvdGFiJ1xudHlwZSBQcm9wcyA9IHt9XG5cbmludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IGFueSxcbiAgZm5hbWU6IHN0cmluZyxcbiAgbG5hbWU6IHN0cmluZyxcbiAgZW1haWw6IHN0cmluZyxcbiAgdGVsbDogc3RyaW5nLFxuICBmb29sOiBzdHJpbmcsXG4gIGxpbmU6IHN0cmluZyxcbn1cblxuY29uc3QgVXNlckRldGFpbFBhZ2UgPSAocHJvcHM6IFByb3BzKSA9PiB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8VXNlcj4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlcikge1xuICAgICAgY29uc3QgaWQ6IGFueSA9IHJvdXRlci5xdWVyeS5pZDtcbiAgICAgIGNvbnN0IGZpbmRVc2VyID0gdXNlcnNEYXRhLmZpbmQoKGl0ZW06IGFueSkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKVxuICAgICAgc2V0RGF0YShmaW5kVXNlcilcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKVxuXG4gIGNvbnN0IHsgaWQsIGZuYW1lLCBsbmFtZSwgdGVsbCwgbGluZSwgZW1haWwsIGZvb2wgfSA9IGRhdGEgfHwge31cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YSAmJiAoXG4gICAgICAgIDxVc2VyQ2FyZERldGFpbFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBmbmFtZT17Zm5hbWUgfHwgXCJcIn1cbiAgICAgICAgICBsbmFtZT17bG5hbWUgfHwgXCJcIn1cbiAgICAgICAgICBlbWFpbD17ZW1haWwgfHwgXCJcIn1cbiAgICAgICAgICB0ZWxsPXt0ZWxsIHx8IFwiXCJ9XG4gICAgICAgICAgbGluZT17bGluZSB8fCBcIlwifVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxUYWJzIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRldGFpbFBhZ2UiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDYXJkRGV0YWlsIiwidXNlcnNEYXRhIiwiVGFicyIsIlVzZXJEZXRhaWxQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJkYXRhIiwic2V0RGF0YSIsImlkIiwicXVlcnkiLCJmaW5kVXNlciIsImZpbmQiLCJpdGVtIiwicGFyc2VJbnQiLCJmbmFtZSIsImxuYW1lIiwidGVsbCIsImxpbmUiLCJlbWFpbCIsImZvb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

});