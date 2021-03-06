"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 9474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* binding */ siginAsync),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export signout */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8993);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  user: null,
  loading: false,
  error: "",
  status: false
};
const siginAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("signin", async ({
  email,
  password
}, store) => {
  const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_2___default())();

  try {
    const user = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://api.airin1.com/api/" + "login", {
      email,
      password
    }).then(res => {
      if (res.data) {
        const token = res.data.token;
        cookies.set("token", token, {
          path: "/"
        });
        localStorage.setItem("token", res.data.token);
      }

      return res.data;
    });
    return user;
  } catch (error) {
    throw error;
  }
});
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState,
  reducers: {
    signout: state => {
      state.user = null;
      state.loading = true;
      state.error = "";
    }
  },
  extraReducers: builder => {
    builder.addCase(siginAsync.pending, state => {
      state.loading = true;
      state.error = "";
    }), builder.addCase(siginAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.status = true;
      state.error = "";
    }), builder.addCase(siginAsync.rejected, state => {
      state.user = null;
      state.loading = false;
      state.error = "??????????????? ???????????? ???????????????????????? ??????????????????????????????";
      state.status = false;
    });
  }
});
const {
  signout
} = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ })

};
;