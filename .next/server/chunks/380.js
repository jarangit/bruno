"use strict";
exports.id = 380;
exports.ids = [380];
exports.modules = {

/***/ 2393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kP": () => (/* binding */ keepDataPdf),
/* harmony export */   "M8": () => (/* binding */ keepStartDate),
/* harmony export */   "sc": () => (/* binding */ keepEndDate),
/* harmony export */   "vu": () => (/* binding */ keepUserName),
/* harmony export */   "M": () => (/* binding */ keepTotal),
/* harmony export */   "U4": () => (/* binding */ keepAddress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export pdfSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 // Define a type for the slice state

// Define the initial state using that type
const initialState = {
  data: null,
  startDate: '',
  endDate: '',
  total: 0,
  userName: '',
  address: ''
};
const pdfSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'pdfData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepDataPdf: (state, action) => {
      state.data = action.payload;
    },
    keepStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    keepEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    keepUserName: (state, action) => {
      state.userName = action.payload;
    },
    keepTotal: (state, action) => {
      state.total = action.payload;
    },
    keepAddress: (state, action) => {
      state.address = action.payload;
    }
  }
});
const {
  keepDataPdf,
  keepStartDate,
  keepEndDate,
  keepUserName,
  keepTotal,
  keepAddress
} = pdfSlice.actions; // Other code such as selectors can use the imported `RootState` type

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pdfSlice.reducer);

/***/ }),

/***/ 4480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getFromStorage)
/* harmony export */ });
const getFromStorage = data => {
  if (data) {
    return localStorage.getItem(data);
  }
};

/***/ })

};
;