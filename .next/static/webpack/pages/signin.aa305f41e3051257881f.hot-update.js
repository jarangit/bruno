"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./redux/slice/authSlice.ts":
/*!**********************************!*\
  !*** ./redux/slice/authSlice.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"siginAsync\": function() { return /* binding */ siginAsync; },\n/* harmony export */   \"signout\": function() { return /* binding */ signout; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar initialState = {\n  user: null,\n  loading: false,\n  error: \"\",\n  status: false\n};\nvar siginAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"signin\", /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref, store) {\n    var email, password, user;\n    return _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            email = _ref.email, password = _ref.password;\n            _context.prev = 1;\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"https://api.airin1.com/api/\" + \"login\", {\n              email: email,\n              password: password\n            }).then(function (res) {\n              console.log(res);\n\n              if (res.data) {\n                localStorage.setItem(\"token\", JSON.stringify(res.data.token));\n              }\n\n              return res.data;\n            });\n\n          case 4:\n            user = _context.sent;\n            return _context.abrupt(\"return\", user);\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            console.log(_context.t0.message);\n            throw _context.t0;\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nvar authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: \"auth\",\n  initialState: initialState,\n  reducers: {\n    signout: function signout(state) {\n      state.user = null;\n      state.loading = true;\n      state.error = \"\";\n    }\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(siginAsync.pending, function (state, action) {\n      state.loading = true;\n      state.error = \"\";\n    }), builder.addCase(siginAsync.fulfilled, function (state, action) {\n      state.user = action.payload;\n      state.loading = false;\n      state.status = true;\n      state.error = \"\";\n    }), builder.addCase(siginAsync.rejected, function (state, action) {\n      state.user = null;\n      state.loading = false;\n      state.error = \"อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง\";\n      state.status = false;\n    });\n  }\n});\nvar signout = authSlice.actions.signout;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFLLE1BQVIsRUFBbUI7QUFDdERMLE1BQUFBLEtBQUssQ0FBQzNCLElBQU4sR0FBYSxJQUFiO0FBQ0EyQixNQUFBQSxLQUFLLENBQUMxQixPQUFOLEdBQWdCLEtBQWhCO0FBQ0EwQixNQUFBQSxLQUFLLENBQUN6QixLQUFOLEdBQWMsZ0NBQWQ7QUFDQXlCLE1BQUFBLEtBQUssQ0FBQ3hCLE1BQU4sR0FBZSxLQUFmO0FBRUQsS0FORCxDQVZGO0FBaUJEO0FBNUIyQixDQUFELENBQTdCO0FBZ0NPLElBQVF1QixPQUFSLEdBQW9CSCxTQUFTLENBQUNhLE9BQTlCLENBQVFWLE9BQVI7O0FBRVAsK0RBQWVILFNBQVMsQ0FBQ2MsT0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2UvYXV0aFNsaWNlLnRzPzgyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbiAgc3RhdHVzOiBmYWxzZVxufTtcbnR5cGUgVXNlciA9IHtcbiAgZW1haWw6IGFueTtcbiAgcGFzc3dvcmQ6IGFueTtcbn07XG5leHBvcnQgY29uc3Qgc2lnaW5Bc3luYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gIFwic2lnbmluXCIsXG4gIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9OiBVc2VyLCBzdG9yZSkgPT4ge1xuICAgIFxuICAgIHRyeSB7XG4gXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTCArIFwibG9naW5cIiwge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEudG9rZW4pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiB1c2VyO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG4pO1xuXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYXV0aFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgc2lnbm91dDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgIH0sXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKHNpZ2luQXN5bmMucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgIH0pLFxuICAgICAgYnVpbGRlci5hZGRDYXNlKHNpZ2luQXN5bmMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgICAgfSksXG4gICAgICBidWlsZGVyLmFkZENhc2Uoc2lnaW5Bc3luYy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUudXNlciA9IG51bGw7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBcIuC4reC4teC5gOC4oeC4pSDguKvguKPguLfguK0g4Lij4Lir4Lix4Liq4Lic4LmI4Liy4LiZIOC5hOC4oeC5iOC4luC4ueC4geC4leC5ieC4reC4h1wiO1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSBmYWxzZTtcblxuICAgICAgfSk7XG4gIH0sXG59KTtcblxuXG5leHBvcnQgY29uc3QgeyBzaWdub3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNyZWF0ZUFzeW5jVGh1bmsiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdGF0dXMiLCJzaWdpbkFzeW5jIiwic3RvcmUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUFBfVVJMIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsIm1lc3NhZ2UiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzaWdub3V0Iiwic3RhdGUiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwiYWN0aW9uIiwiZnVsZmlsbGVkIiwicGF5bG9hZCIsInJlamVjdGVkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/slice/authSlice.ts\n");

/***/ })

});