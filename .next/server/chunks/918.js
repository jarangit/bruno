"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 3918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H1": () => (/* binding */ createNewTenants),
/* harmony export */   "VY": () => (/* binding */ deleteTenantService),
/* harmony export */   "dy": () => (/* binding */ getTenant)
/* harmony export */ });
/* unused harmony export getTenantByBuildingId */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const createNewTenants = async (params, token) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://api.airin1.com/api/"}tenants`, params, {
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
const deleteTenantService = async (id, token) => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().delete(`${"https://api.airin1.com/api/"}tenants/${id}`, {
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
const getTenant = async (token, id) => {
  try {
    const {
      data,
      status
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${"https://api.airin1.com/api/"}tenants/${id}`, {
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
const getTenantByBuildingId = async (token, id) => {
  try {
    const {
      data,
      status
    } = await axios.get(`${"https://api-cache.airin1.com/"}tenants?building_id=${id}`, {
      headers: {
        // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTMyMjE2NDgsImV4cCI6MTY1NTgxMzY0OCwib3RwIjoiIiwidWlkIjo0M30.l9BPL7yIAx9xawQfzGACFEdjSCD7BgX8MujixsxpUpM`,
        Authorization: `Bearer ${token}`,
        // withCredentials: true,
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/***/ })

};
;