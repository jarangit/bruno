"use strict";
exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 1852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "So": () => (/* binding */ authenticateUser)
});

// UNUSED EXPORTS: authenticationReducer, authenticationSlice, error, selectAuthentication, start, success

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./service/service.ts
const setTokens = authRes => {
  console.log(authRes);
  localStorage.setItem('user', JSON.stringify(authRes.user));
  localStorage.setItem('token', JSON.stringify(authRes.token));
  localStorage.setItem('refreshToken', JSON.stringify(authRes.refreshToken));
};
const removeTokens = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('token');
};
const getAccessToken = () => {
  var _localStorage$getItem;

  return (_localStorage$getItem = localStorage.getItem('token')) === null || _localStorage$getItem === void 0 ? void 0 : _localStorage$getItem.slice(1, -1);
};
const getUser = () => localStorage.getItem('user');
const setUser = user => localStorage.setItem('user', JSON.stringify(user));
const getRefreshToken = () => localStorage.getItem('refresh_token');
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./redux/slice/loginSlice.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  isProcessingRequest: false
};
const authenticationSlice = (0,toolkit_.createSlice)({
  name: "authentication",
  initialState,
  reducers: {
    start: state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessingRequest: true
      });
    },
    success: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessingRequest: false
      });
    },
    error: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        isProcessingRequest: false
      });
    }
  }
});
const authenticateUser = userData => async dispatch => {
  console.log(userData);
  console.log({
    "this url": process.env.API_URL
  });

  try {
    const {
      email,
      password
    } = userData;
    const register = external_axios_default().post("https://api.airin1.com/api/" + "login", {
      email: email,
      password: password
    }).then(res => {
      const {
        token
      } = res.data;
      console.log(res.data);
      setTokens(res.data); // dispatch(success(res.data));
    });
    console.log(register); // history.push('/v1');
  } catch (err) {
    console.log(err); // dispatch(error(err));
  }
};
const {
  start,
  success,
  error
} = authenticationSlice.actions;
const selectAuthentication = state => state.authentication;
const authenticationReducer = authenticationSlice.reducer; // function authenticate(userData: any) {
//   throw new Error("Function not implemented.");
// }
// function setTokens(data: any) {
//   throw new Error("Function not implemented.");
// }

/***/ })

};
;