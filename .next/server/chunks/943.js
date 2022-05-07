"use strict";
exports.id = 943;
exports.ids = [943];
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
  try {
    const user = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("https://api.airin1.com/api/" + "login", {
      email,
      password
    }).then(res => {
      console.log(res);

      if (res.data) {
        localStorage.setItem("token", res.data.token);
      }

      return res.data;
    });
    return user;
  } catch (error) {
    console.log(error.message);
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
      state.error = "อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง";
      state.status = false;
    });
  }
});
const {
  signout
} = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ }),

/***/ 7788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ buildingAsync),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const buildingAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("building", async (id, store) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://api.airin1.com/api/" + `buildings/${id}`, {
        // headers: {
        //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE3MjMzOTQsImV4cCI6MTY1NDMxNTM5NCwib3RwIjoiIiwidWlkIjo0M30.RSCEaMKYTpwETHLsmzcMwGwTvrXsgEEryGQwN0SI3bE`,
        // },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return data;
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false
};
const buildingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "building",
  initialState,
  reducers: {// signout: (state) => {
    //   state.building = null;
    //   state.loading = true;
    //   state.error = "";
    // },
  },
  extraReducers: builder => {
    builder.addCase(buildingAsync.pending, state => {
      state.loading = true;
      state.error = "";
    }), builder.addCase(buildingAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.status = true;
      state.error = "";
    }), builder.addCase(buildingAsync.rejected, state => {
      state.data = null;
      state.loading = false;
      state.error = "ไม่เจอข้อมูล";
      state.status = false;
    });
  }
}); // export const { signout } = buildingSlice.actions

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildingSlice.reducer);

/***/ }),

/***/ 1943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store),
/* harmony export */   "CG": () => (/* binding */ useAppSelector),
/* harmony export */   "TL": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slice_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9474);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5694);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slice_buildingSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7788);





const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    auth: _slice_authSlice__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP,
    building: _slice_buildingSlice__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z
  },
  middleware: [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())]
});
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector;
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

/***/ })

};
;