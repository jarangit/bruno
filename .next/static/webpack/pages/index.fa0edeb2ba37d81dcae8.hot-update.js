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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildingAsync\": function() { return /* binding */ buildingAsync; }\n/* harmony export */ });\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar buildingAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)(\"building\", /*#__PURE__*/function () {\n  var _ref = (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id, store) {\n    var token, _yield$axios$get, data;\n\n    return _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(id);\n            token = localStorage.getItem(\"token\");\n            console.log(token);\n            _context.prev = 3;\n            _context.next = 6;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://api.airin1.com/api/\" + \"buildings/\".concat(id), {\n              headers: {\n                Authorization: \"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE3MjI5MjMsImV4cCI6MTY1NDMxNDkyMywib3RwIjoiIiwidWlkIjo0M30.jb6YzsH43l6zM8JbUUtmJeIwZZOVpZ6uc1PFJ8UDQbA\"\n              } // headers: {\n              //   Authorization: `Bearer ${token}`,\n              // },\n\n            });\n\n          case 6:\n            _yield$axios$get = _context.sent;\n            data = _yield$axios$get.data;\n            console.log(data);\n            return _context.abrupt(\"return\", data);\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](3);\n            console.log(_context.t0.message);\n            throw _context.t0;\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 12]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nvar initialState = {\n  data: null,\n  loading: false,\n  error: \"\",\n  status: false\n};\nvar buildingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: \"building\",\n  initialState: initialState,\n  reducers: {// signout: (state) => {\n    //   state.building = null;\n    //   state.loading = true;\n    //   state.error = \"\";\n    // },\n  },\n  extraReducers: function extraReducers(builder) {\n    builder.addCase(buildingAsync.pending, function (state) {\n      state.loading = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.fulfilled, function (state, action) {\n      state.data = action.payload;\n      state.loading = false;\n      state.status = true;\n      state.error = \"\";\n    }), builder.addCase(buildingAsync.rejected, function (state) {\n      state.data = null;\n      state.loading = false;\n      state.error = \"ไม่เจอข้อมูล\";\n      state.status = false;\n    });\n  }\n}); // export const { signout } = buildingSlice.actions\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildingSlice.reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS9idWlsZGluZ1NsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUcsYUFBYSxHQUFHRixrRUFBZ0IsQ0FDM0MsVUFEMkM7QUFBQSwrVEFFM0MsaUJBQU9HLEVBQVAsRUFBMkJDLEtBQTNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDTUksWUFBQUEsS0FGUixHQUVnQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRmhCO0FBR0VKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaO0FBSEY7QUFBQTtBQUFBLG1CQU0yQk4sZ0RBQUEsQ0FDckJVLDZCQUFBLHVCQUErQ1IsRUFBL0MsQ0FEcUIsRUFFckI7QUFDRVcsY0FBQUEsT0FBTyxFQUFFO0FBQ1BDLGdCQUFBQSxhQUFhO0FBRE4sZUFEWCxDQUlFO0FBQ0E7QUFDQTs7QUFORixhQUZxQixDQU4zQjs7QUFBQTtBQUFBO0FBTVlDLFlBQUFBLElBTlosb0JBTVlBLElBTlo7QUFpQklYLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxJQUFaO0FBakJKLDZDQW1CV0EsSUFuQlg7O0FBQUE7QUFBQTtBQUFBO0FBcUJJWCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFNVyxPQUFsQjtBQXJCSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUYyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF0QztBQTZCUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJGLEVBQUFBLElBQUksRUFBRSxJQURhO0FBRW5CRyxFQUFBQSxPQUFPLEVBQUUsS0FGVTtBQUduQkMsRUFBQUEsS0FBSyxFQUFFLEVBSFk7QUFJbkJDLEVBQUFBLE1BQU0sRUFBRTtBQUpXLENBQXJCO0FBTUEsSUFBTUMsYUFBYSxHQUFHdkIsNkRBQVcsQ0FBQztBQUNoQ3dCLEVBQUFBLElBQUksRUFBRSxVQUQwQjtBQUVoQ0wsRUFBQUEsWUFBWSxFQUFaQSxZQUZnQztBQUdoQ00sRUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxRLEdBSHNCO0FBVWhDQyxFQUFBQSxhQUFhLEVBQUUsdUJBQUNDLE9BQUQsRUFBYTtBQUMxQkEsSUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCekIsYUFBYSxDQUFDMEIsT0FBOUIsRUFBdUMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hEQSxNQUFBQSxLQUFLLENBQUNWLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQVUsTUFBQUEsS0FBSyxDQUFDVCxLQUFOLEdBQWMsRUFBZDtBQUNELEtBSEQsR0FJRU0sT0FBTyxDQUFDQyxPQUFSLENBQWdCekIsYUFBYSxDQUFDNEIsU0FBOUIsRUFBeUMsVUFBQ0QsS0FBRCxFQUFRRSxNQUFSLEVBQW1CO0FBQzFERixNQUFBQSxLQUFLLENBQUNiLElBQU4sR0FBYWUsTUFBTSxDQUFDQyxPQUFwQjtBQUNBSCxNQUFBQSxLQUFLLENBQUNWLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQVUsTUFBQUEsS0FBSyxDQUFDUixNQUFOLEdBQWUsSUFBZjtBQUNBUSxNQUFBQSxLQUFLLENBQUNULEtBQU4sR0FBYyxFQUFkO0FBQ0QsS0FMRCxDQUpGLEVBVUVNLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQnpCLGFBQWEsQ0FBQytCLFFBQTlCLEVBQXdDLFVBQUNKLEtBQUQsRUFBVztBQUNqREEsTUFBQUEsS0FBSyxDQUFDYixJQUFOLEdBQWEsSUFBYjtBQUNBYSxNQUFBQSxLQUFLLENBQUNWLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQVUsTUFBQUEsS0FBSyxDQUFDVCxLQUFOLEdBQWMsY0FBZDtBQUNBUyxNQUFBQSxLQUFLLENBQUNSLE1BQU4sR0FBZSxLQUFmO0FBQ0QsS0FMRCxDQVZGO0FBZ0JEO0FBM0IrQixDQUFELENBQWpDLEVBOEJBOztBQUVBLCtEQUFlQyxhQUFhLENBQUNZLE9BQTdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlL2J1aWxkaW5nU2xpY2UudHM/NTcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBidWlsZGluZ0FzeW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgXCJidWlsZGluZ1wiLFxuICBhc3luYyAoaWQ6IHsgaWQ6IHN0cmluZyB9LCBzdG9yZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgY29uc29sZS5sb2codG9rZW4pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMICsgYGJ1aWxkaW5ncy8ke2lkfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwWVhRaU9qRTJOVEUzTWpJNU1qTXNJbVY0Y0NJNk1UWTFORE14TkRreU15d2liM1J3SWpvaUlpd2lkV2xrSWpvME0zMC5qYjZZenNINDNsNnpNOEpiVVV0bUplSXdaWk9WcFo2dWMxUEZKOFVEUWJBYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIGhlYWRlcnM6IHtcbiAgICAgICAgICAvLyAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cbik7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGF0YTogbnVsbCxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBcIlwiLFxuICBzdGF0dXM6IGZhbHNlLFxufTtcbmNvbnN0IGJ1aWxkaW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiYnVpbGRpbmdcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vIHNpZ25vdXQ6IChzdGF0ZSkgPT4ge1xuICAgIC8vICAgc3RhdGUuYnVpbGRpbmcgPSBudWxsO1xuICAgIC8vICAgc3RhdGUubG9hZGluZyA9IHRydWU7XG4gICAgLy8gICBzdGF0ZS5lcnJvciA9IFwiXCI7XG4gICAgLy8gfSxcbiAgfSxcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICBidWlsZGVyLmFkZENhc2UoYnVpbGRpbmdBc3luYy5wZW5kaW5nLCAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgIH0pLFxuICAgICAgYnVpbGRlci5hZGRDYXNlKGJ1aWxkaW5nQXN5bmMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBzdGF0ZS5kYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgICAgfSksXG4gICAgICBidWlsZGVyLmFkZENhc2UoYnVpbGRpbmdBc3luYy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmRhdGEgPSBudWxsO1xuICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmVycm9yID0gXCLguYTguKHguYjguYDguIjguK3guILguYnguK3guKHguLnguKVcIjtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfSxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgeyBzaWdub3V0IH0gPSBidWlsZGluZ1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRpbmdTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImF4aW9zIiwiYnVpbGRpbmdBc3luYyIsImlkIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic3RhdHVzIiwiYnVpbGRpbmdTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/slice/buildingSlice.ts\n");

/***/ })

});