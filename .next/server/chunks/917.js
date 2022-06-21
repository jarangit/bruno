exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getALlBuildings),
/* harmony export */   "T": () => (/* binding */ editUnitPrice)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getALlBuildings = async token => {
  try {
    const {
      data,
      status
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://api.airin1.com/api/"}buildings`, {
      headers: {
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
        Authorization: `Bearer ${token}`,
        // withCredentials: true,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const editUnitPrice = async (token, buildingID, data) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${"https://api.airin1.com/api/"}buildings/${buildingID}/unit_price`, data, {
    headers: {
      // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
      Authorization: `Bearer ${token}`,
      // withCredentials: true,
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }).then(res => {
    console.log(res.data);
  });
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;