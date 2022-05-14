exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 1706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2242);
/* harmony import */ var _styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LoginForm = ({
  data
}) => {
  // const {data} = useAppSelector(state => state.building)
  // console.log(data.building_owner);
  console.log(data);
  const {
    0: dataForm,
    1: setdataForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    owner: "",
    address: "",
    pastal_code: "",
    tel: "",
    email: ""
  });
  const {
    owner,
    address,
    pastal_code,
    tel,
    email
  } = dataForm;

  function onChange(e) {
    setdataForm(_objectSpread(_objectSpread({}, dataForm), {}, {
      [e.target.name]: e.target.value
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data) {
      const {
        building_owner
      } = data;
      console.log(building_owner);
      setdataForm({
        owner: building_owner.name,
        address: building_owner.address,
        pastal_code: building_owner.postal_code,
        tel: building_owner.mobile_number,
        email: building_owner.email
      });
    }
  }, [data]); // console.log(dataForm);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
    className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().form),
    onChange: onChange,
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        children: "Owner"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "text",
        placeholder: "Owner",
        className: "mainInput",
        name: "owner",
        defaultValue: owner
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        children: "Address"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("textarea", {
        placeholder: "Address",
        className: "mainTextArea",
        rows: 5,
        cols: 5,
        name: "address",
        defaultValue: address
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        children: "Postal code"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "text",
        placeholder: "Postal code",
        className: "mainInput",
        name: "pastal_code",
        defaultValue: pastal_code
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        children: "Tel"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "text",
        placeholder: "Tel",
        className: "mainInput",
        name: "tel",
        defaultValue: tel
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().formItem),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("label", {
        children: "Email"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
        type: "text",
        placeholder: "Email",
        className: "mainInput",
        name: "email",
        defaultValue: email
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_styles_form_loginForm_module_scss__WEBPACK_IMPORTED_MODULE_2___default().boxBut),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        className: "but_gray",
        type: "submit",
        children: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 2242:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "loginForm_form__2TQH8",
	"formItem": "loginForm_formItem__3_Q8Q",
	"boxBut": "loginForm_boxBut__3NBwF"
};


/***/ })

};
;