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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildingAsync\": function() { return /* binding */ buildingAsync; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar buildingAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"building\", /*#__PURE__*/function () {\n  var _ref = (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id, store) {\n    var token, _yield$axios$get, data;\n\n    return _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(id);\n            _context.prev = 1;\n            _context.next = 4;\n            return localStorage.getItem(\"token\");\n\n          case 4:\n            token = _context.sent;\n            console.log(token);\n            _context.next = 8;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.airin1.com/api/\" + \"buildings/\".concat(id), {\n              // headers: {\n              //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE3MjI5MjMsImV4cCI6MTY1NDMxNDkyMywib3RwIjoiIiwidWlkIjo0M30.jb6YzsH43l6zM8JbUUtmJeIwZZOVpZ6uc1PFJ8UDQbA`,\n              // },\n              headers: {\n                Authorization: \"Bearer \".concat(token)\n              }\n            });\n\n          case 8:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            console.log(data);\n            return _context.abrupt(\"return\", data);\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0.message);\n            throw _context.t0;\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 14]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar initialState = {\n  data: null,\n  loading: false,\n  error: \"\",\n  status: false\n};\nvar buildingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: \"building\",\n  initialState: initialState,\n  reducers: {// signout: (state) => {\n    //   state.building = null;\n    //   state.loading = true;\n    //   state.error = \"\";\n    // },\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(buildingAsync.pending, function (state) {\n      state.loading = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.fulfilled, function (state, action) {\n      state.data = action.payload;\n      state.loading = false;\n      state.status = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.rejected, function (state) {\n      state.data = null;\n      state.loading = false;\n      state.error = \"ไม่เจอข้อมูล\";\n      state.status = false;\n    });\n  }\n}); // export const { signout } = buildingSlice.actions\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildingSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2UvYnVpbGRpbmdTbGljZS50cz81NzE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGJ1aWxkaW5nQXN5bmMgPSBjcmVhdGVBc3luY1RodW5rKFxuICBcImJ1aWxkaW5nXCIsXG4gIGFzeW5jIChpZDogeyBpZDogc3RyaW5nIH0sIHN0b3JlKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCArIGBidWlsZGluZ3MvJHtpZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgLy8gaGVhZGVyczoge1xuICAgICAgICAgIC8vICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciBleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcFlYUWlPakUyTlRFM01qSTVNak1zSW1WNGNDSTZNVFkxTkRNeE5Ea3lNeXdpYjNSd0lqb2lJaXdpZFdsa0lqbzBNMzAuamI2WXpzSDQzbDZ6TThKYlVVdG1KZUl3WlpPVnBaNnVjMVBGSjhVRFFiQWAsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRhdGE6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbiAgc3RhdHVzOiBmYWxzZSxcbn07XG5jb25zdCBidWlsZGluZ1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImJ1aWxkaW5nXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvLyBzaWdub3V0OiAoc3RhdGUpID0+IHtcbiAgICAvLyAgIHN0YXRlLmJ1aWxkaW5nID0gbnVsbDtcbiAgICAvLyAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgIC8vIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGJ1aWxkaW5nQXN5bmMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmVycm9yID0gXCJcIjtcbiAgICB9KSxcbiAgICAgIGJ1aWxkZXIuYWRkQ2FzZShidWlsZGluZ0FzeW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9IHRydWU7XG4gICAgICAgIHN0YXRlLmVycm9yID0gXCJcIjtcbiAgICAgIH0pLFxuICAgICAgYnVpbGRlci5hZGRDYXNlKGJ1aWxkaW5nQXN5bmMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5kYXRhID0gbnVsbDtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IFwi4LmE4Lih4LmI4LmA4LiI4Lit4LiC4LmJ4Lit4Lih4Li54LilXCI7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH0sXG59KTtcblxuLy8gZXhwb3J0IGNvbnN0IHsgc2lnbm91dCB9ID0gYnVpbGRpbmdTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkaW5nU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImJ1aWxkaW5nQXN5bmMiLCJpZCIsInN0b3JlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUFBfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwibWVzc2FnZSIsImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInN0YXR1cyIsImJ1aWxkaW5nU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJmdWxmaWxsZWQiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slice/buildingSlice.ts\n");

/***/ })

});