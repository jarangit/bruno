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

/***/ "./components/form/signinForm.tsx":
/*!****************************************!*\
  !*** ./components/form/signinForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/slice/authSlice */ \"./redux/slice/authSlice.ts\");\n/* harmony import */ var _styles_form_signinForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/form/signinForm.module.scss */ \"./styles/form/signinForm.module.scss\");\n/* harmony import */ var _styles_form_signinForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_form_signinForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/user/Documents/dev/fl/bruno/me/components/form/signinForm.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar SigninForm = function SigninForm(props) {\n  _s();\n\n  var dataToken = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.auth.accessToken;\n  });\n  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.auth;\n  });\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = (0,_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {\n      var email, password;\n      return _Users_user_Documents_dev_fl_bruno_me_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              email = data.email, password = data.password;\n              _context.next = 3;\n              return dispatch((0,_redux_slice_authSlice__WEBPACK_IMPORTED_MODULE_5__.siginAsync)({\n                email: email,\n                password: password\n              }));\n\n            case 3:\n              if (user.status == true) {\n                router.push('/');\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (user.status == true) {\n      router.push('/');\n    }\n  }, [user]);\n  console.log(user.loading);\n  return (\n    /*#__PURE__*/\n\n    /* \"handleSubmit\" will validate your inputs before invoking \"onSubmit\" */\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit(onSubmit),\n      className: (_styles_form_signinForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().rootForm),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h3\", {\n        children: \"Bruno\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", _objectSpread({\n        placeholder: \"E-mail\"\n      }, register(\"email\")), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this), errors.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n        children: \"This field is required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 24\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", _objectSpread({\n        placeholder: \"Password\"\n      }, register(\"password\", {\n        required: true\n      })), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, _this), errors.password && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n        children: \"This field is required\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 27\n      }, _this), user.error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        style: {\n          fontSize: \"10px\",\n          color: \"red\"\n        },\n        children: user.error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        className: (_styles_form_signinForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().but),\n        children: user.loading ? \"Loading\" : \"Signin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this)\n  );\n};\n\n_s(SigninForm, \"AuY2rUouhlcxiqGwRUuPOvd/iHk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm];\n});\n\n_c = SigninForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"SigninForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQTNCLFNBQVo7QUFBQSxrQkFDR3JCLElBQUksQ0FBQ21CO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFFM0IsZ0ZBQWpDO0FBQUEsa0JBQThDUSxJQUFJLENBQUNnQixPQUFMLEdBQWUsU0FBZixHQUEyQjtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFvQkQsQ0F6Q0Q7O0dBQU10QjtVQUNjSixzREFDTEEsc0RBQ0VHLG9EQUNFSixzREFDZ0REOzs7S0FMN0RNO0FBMkNOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9zaWduaW5Gb3JtLnRzeD9jMTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1Ym1pdEhhbmRsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzaWdpbkFzeW5jIH0gZnJvbSAnLi4vLi4vcmVkdXgvc2xpY2UvYXV0aFNsaWNlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZm9ybS9zaWduaW5Gb3JtLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG50eXBlIFByb3BzID0ge31cbnR5cGUgSW5wdXRzID0ge1xuICBlbWFpbDogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nLFxufTtcblxuY29uc3QgU2lnbmluRm9ybSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgZGF0YVRva2VuID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGguYWNjZXNzVG9rZW4pXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYXV0aClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybTxJbnB1dHM+KCk7XG4gIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPElucHV0cz4gPSBhc3luYyAoZGF0YTogYW55KSA9PiB7XG4gICAgbGV0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhXG4gICAgYXdhaXQgZGlzcGF0Y2goc2lnaW5Bc3luYyh7IGVtYWlsLCBwYXNzd29yZCB9KSlcbiAgICBpZiAodXNlci5zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyLnN0YXR1cyA9PSB0cnVlKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9LCBbdXNlcl0pXG5cbiAgY29uc29sZS5sb2codXNlci5sb2FkaW5nKTtcblxuICByZXR1cm4gKFxuICAgIC8qIFwiaGFuZGxlU3VibWl0XCIgd2lsbCB2YWxpZGF0ZSB5b3VyIGlucHV0cyBiZWZvcmUgaW52b2tpbmcgXCJvblN1Ym1pdFwiICovXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17c3R5bGVzLnJvb3RGb3JtfT5cbiAgICAgIDxoMz5CcnVubzwvaDM+XG4gICAgICB7LyogcmVnaXN0ZXIgeW91ciBpbnB1dCBpbnRvIHRoZSBob29rIGJ5IGludm9raW5nIHRoZSBcInJlZ2lzdGVyXCIgZnVuY3Rpb24gKi99XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J0UtbWFpbCcgey4uLnJlZ2lzdGVyKFwiZW1haWxcIil9IC8+XG4gICAgICB7ZXJyb3JzLmVtYWlsICYmIDxzcGFuPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L3NwYW4+fVxuXG4gICAgICB7LyogaW5jbHVkZSB2YWxpZGF0aW9uIHdpdGggcmVxdWlyZWQgb3Igb3RoZXIgc3RhbmRhcmQgSFRNTCB2YWxpZGF0aW9uIHJ1bGVzICovfVxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgIHsvKiBlcnJvcnMgd2lsbCByZXR1cm4gd2hlbiBmaWVsZCB2YWxpZGF0aW9uIGZhaWxzICAqL31cbiAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvc3Bhbj59XG4gICAgICB7dXNlci5lcnJvciAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IFwiMTBweFwiLCBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICB7dXNlci5lcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT17c3R5bGVzLmJ1dH0+e3VzZXIubG9hZGluZyA/IFwiTG9hZGluZ1wiIDogXCJTaWduaW5cIn08L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluRm9ybVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRm9ybSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzaWdpbkFzeW5jIiwic3R5bGVzIiwidXNlUm91dGVyIiwiU2lnbmluRm9ybSIsInByb3BzIiwiZGF0YVRva2VuIiwic3RhdGUiLCJhdXRoIiwiYWNjZXNzVG9rZW4iLCJ1c2VyIiwicm91dGVyIiwiZGlzcGF0Y2giLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInN0YXR1cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibG9hZGluZyIsInJvb3RGb3JtIiwicmVxdWlyZWQiLCJlcnJvciIsImZvbnRTaXplIiwiY29sb3IiLCJidXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/form/signinForm.tsx\n");

/***/ })

});