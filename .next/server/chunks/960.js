"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 4497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T3": () => (/* binding */ keepData),
/* harmony export */   "E$": () => (/* binding */ currentBuilding),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export allBuildingsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

// Define the initial state using that type
const initialState = {
  data: [],
  currentBuilding: 0
};
const allBuildingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'allBuildings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepData: (state, action) => {
      state.data = action.payload;
    },
    currentBuilding: (state, action) => {
      state.currentBuilding = action.payload;
    }
  }
});
const {
  keepData,
  currentBuilding
} = allBuildingsSlice.actions; // Other code such as selectors can use the imported `RootState` type

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allBuildingsSlice.reducer);

/***/ }),

/***/ 6413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ buildingListAsync),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const buildingListAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("buildingList", async (id, store) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://api.airin1.com/api/" + `tenants?building_id=${id}`, {
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
  loading: true,
  error: "",
  status: false
};
const buildingListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "buildingList",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(buildingListAsync.pending, state => {
      state.loading = true;
      state.error = "";
    }), builder.addCase(buildingListAsync.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.status = true;
      state.error = "";
    }), builder.addCase(buildingListAsync.rejected, state => {
      state.data = null;
      state.loading = false;
      state.error = "ไม่เจอข้อมูล";
      state.status = false;
    });
  }
}); // export const { signout } = buildingSlice.actions

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildingListSlice.reducer);

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ setLocalStorage)
/* harmony export */ });
const setLocalStorage = (name, data) => {
  if (data) {
    return localStorage.setItem(name, data);
  }
};

/***/ })

};
;