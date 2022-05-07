"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

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
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2744);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const buildingAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("building", async (id, store) => {
  try {
    console.log("call building function");
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
  reducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE]: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload);
    } // signout: (state) => {
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

/***/ })

};
;