"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./redux/slice/buildingSlice.ts":
/*!**************************************!*\
  !*** ./redux/slice/buildingSlice.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildingAsync\": function() { return /* binding */ buildingAsync; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar buildingAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"building\", /*#__PURE__*/function () {\n  var _ref = (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id, store) {\n    var token, _yield$axios$get, data;\n\n    return _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(id);\n            _context.prev = 1;\n            _context.next = 4;\n            return localStorage.getItem(\"token\");\n\n          case 4:\n            token = _context.sent;\n            console.log(token);\n\n            if (!token) {\n              _context.next = 13;\n              break;\n            }\n\n            _context.next = 9;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.airin1.com/api/\" + \"buildings/\".concat(id), {\n              // headers: {\n              //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE3MjI5MjMsImV4cCI6MTY1NDMxNDkyMywib3RwIjoiIiwidWlkIjo0M30.jb6YzsH43l6zM8JbUUtmJeIwZZOVpZ6uc1PFJ8UDQbA`,\n              // },\n              headers: {\n                Authorization: \"Bearer \"\n              }\n            });\n\n          case 9:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            console.log(data);\n            return _context.abrupt(\"return\", data);\n\n          case 13:\n            _context.next = 19;\n            break;\n\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0.message);\n            throw _context.t0;\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 15]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar initialState = {\n  data: null,\n  loading: false,\n  error: \"\",\n  status: false\n};\nvar buildingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: \"building\",\n  initialState: initialState,\n  reducers: {// signout: (state) => {\n    //   state.building = null;\n    //   state.loading = true;\n    //   state.error = \"\";\n    // },\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(buildingAsync.pending, function (state) {\n      state.loading = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.fulfilled, function (state, action) {\n      state.data = action.payload;\n      state.loading = false;\n      state.status = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.rejected, function (state) {\n      state.data = null;\n      state.loading = false;\n      state.error = \"ไม่เจอข้อมูล\";\n      state.status = false;\n    });\n  }\n}); // export const { signout } = buildingSlice.actions\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildingSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS9idWlsZGluZ1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUcsYUFBYSxHQUFHRixrRUFBZ0IsQ0FDM0MsVUFEMkM7QUFBQSwrVEFFM0MsaUJBQU9HLEVBQVAsRUFBMkJDLEtBQTNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFERjtBQUFBO0FBQUEsbUJBSXdCSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FKeEI7O0FBQUE7QUFJVUMsWUFBQUEsS0FKVjtBQUtJSixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjs7QUFMSixpQkFNT0EsS0FOUDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQU82QlIsZ0RBQUEsQ0FDckJVLDZCQUFBLHVCQUErQ1IsRUFBL0MsQ0FEcUIsRUFFckI7QUFDRTtBQUNBO0FBQ0E7QUFDQVcsY0FBQUEsT0FBTyxFQUFFO0FBQ1BDLGdCQUFBQSxhQUFhO0FBRE47QUFKWCxhQUZxQixDQVA3Qjs7QUFBQTtBQUFBO0FBT2NDLFlBQUFBLElBUGQsb0JBT2NBLElBUGQ7QUFrQk1YLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxJQUFaO0FBbEJOLDZDQW9CYUEsSUFwQmI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCSVgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBTVcsT0FBbEI7QUF2Qko7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FGMkM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBdEM7QUErQlAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CRixFQUFBQSxJQUFJLEVBQUUsSUFEYTtBQUVuQkcsRUFBQUEsT0FBTyxFQUFFLEtBRlU7QUFHbkJDLEVBQUFBLEtBQUssRUFBRSxFQUhZO0FBSW5CQyxFQUFBQSxNQUFNLEVBQUU7QUFKVyxDQUFyQjtBQU1BLElBQU1DLGFBQWEsR0FBR3ZCLDZEQUFXLENBQUM7QUFDaEN3QixFQUFBQSxJQUFJLEVBQUUsVUFEMEI7QUFFaENMLEVBQUFBLFlBQVksRUFBWkEsWUFGZ0M7QUFHaENNLEVBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMUSxHQUhzQjtBQVVoQ0MsRUFBQUEsYUFBYSxFQUFFLHVCQUFDQyxPQUFELEVBQWE7QUFDMUJBLElBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnpCLGFBQWEsQ0FBQzBCLE9BQTlCLEVBQXVDLFVBQUNDLEtBQUQsRUFBVztBQUNoREEsTUFBQUEsS0FBSyxDQUFDVixPQUFOLEdBQWdCLElBQWhCO0FBQ0FVLE1BQUFBLEtBQUssQ0FBQ1QsS0FBTixHQUFjLEVBQWQ7QUFDRCxLQUhELEdBSUVNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnpCLGFBQWEsQ0FBQzRCLFNBQTlCLEVBQXlDLFVBQUNELEtBQUQsRUFBUUUsTUFBUixFQUFtQjtBQUMxREYsTUFBQUEsS0FBSyxDQUFDYixJQUFOLEdBQWFlLE1BQU0sQ0FBQ0MsT0FBcEI7QUFDQUgsTUFBQUEsS0FBSyxDQUFDVixPQUFOLEdBQWdCLEtBQWhCO0FBQ0FVLE1BQUFBLEtBQUssQ0FBQ1IsTUFBTixHQUFlLElBQWY7QUFDQVEsTUFBQUEsS0FBSyxDQUFDVCxLQUFOLEdBQWMsRUFBZDtBQUNELEtBTEQsQ0FKRixFQVVFTSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J6QixhQUFhLENBQUMrQixRQUE5QixFQUF3QyxVQUFDSixLQUFELEVBQVc7QUFDakRBLE1BQUFBLEtBQUssQ0FBQ2IsSUFBTixHQUFhLElBQWI7QUFDQWEsTUFBQUEsS0FBSyxDQUFDVixPQUFOLEdBQWdCLEtBQWhCO0FBQ0FVLE1BQUFBLEtBQUssQ0FBQ1QsS0FBTixHQUFjLGNBQWQ7QUFDQVMsTUFBQUEsS0FBSyxDQUFDUixNQUFOLEdBQWUsS0FBZjtBQUNELEtBTEQsQ0FWRjtBQWdCRDtBQTNCK0IsQ0FBRCxDQUFqQyxFQThCQTs7QUFFQSwrREFBZUMsYUFBYSxDQUFDWSxPQUE3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zbGljZS9idWlsZGluZ1NsaWNlLnRzPzU3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYnVpbGRpbmdBc3luYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwiYnVpbGRpbmdcIixcbiAgYXN5bmMgKGlkOiB7IGlkOiBzdHJpbmcgfSwgc3RvcmUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCArIGBidWlsZGluZ3MvJHtpZH1gLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcFlYUWlPakUyTlRFM01qSTVNak1zSW1WNGNDSTZNVFkxTkRNeE5Ea3lNeXdpYjNSd0lqb2lJaXdpZFdsa0lqbzBNMzAuamI2WXpzSDQzbDZ6TThKYlVVdG1KZUl3WlpPVnBaNnVjMVBGSjhVRFFiQWAsXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIFxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuKTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkYXRhOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IFwiXCIsXG4gIHN0YXR1czogZmFsc2UsXG59O1xuY29uc3QgYnVpbGRpbmdTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJidWlsZGluZ1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgLy8gc2lnbm91dDogKHN0YXRlKSA9PiB7XG4gICAgLy8gICBzdGF0ZS5idWlsZGluZyA9IG51bGw7XG4gICAgLy8gICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyAgIHN0YXRlLmVycm9yID0gXCJcIjtcbiAgICAvLyB9LFxuICB9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXIuYWRkQ2FzZShidWlsZGluZ0FzeW5jLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IFwiXCI7XG4gICAgfSksXG4gICAgICBidWlsZGVyLmFkZENhc2UoYnVpbGRpbmdBc3luYy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IFwiXCI7XG4gICAgICB9KSxcbiAgICAgIGJ1aWxkZXIuYWRkQ2FzZShidWlsZGluZ0FzeW5jLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuZGF0YSA9IG51bGw7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBcIuC5hOC4oeC5iOC5gOC4iOC4reC4guC5ieC4reC4oeC4ueC4pVwiO1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbi8vIGV4cG9ydCBjb25zdCB7IHNpZ25vdXQgfSA9IGJ1aWxkaW5nU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZGluZ1NsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYXhpb3MiLCJidWlsZGluZ0FzeW5jIiwiaWQiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBQX1VSTCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsIm1lc3NhZ2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0dXMiLCJidWlsZGluZ1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/slice/buildingSlice.ts\n");

/***/ })

});