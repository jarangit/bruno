exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 7931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ loginForm)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./service/owner/ownerService.ts

const editOwnerInformation = async (data, token, buildingID) => {
  return external_axios_default().patch(`${"https://api.airin1.com/api/"}buildings/${buildingID}/owner_info`, data, {
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
// EXTERNAL MODULE: ./styles/form/loginForm.module.scss
var loginForm_module = __webpack_require__(2242);
var loginForm_module_default = /*#__PURE__*/__webpack_require__.n(loginForm_module);
// EXTERNAL MODULE: ./utills/getLocalStorage.ts
var getLocalStorage = __webpack_require__(4480);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/form/loginForm.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LoginForm = ({
  data
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: currentBuildingID,
    1: setCurrentBuildingID
  } = (0,external_react_.useState)('');
  const {
    0: isToken,
    1: setIsToken
  } = (0,external_react_.useState)('');
  const {
    0: dataForm,
    1: setdataForm
  } = (0,external_react_.useState)({
    name: "",
    address: "",
    postal_code: "",
    mobile_number: "",
    email: "",
    line_id: "line",
    room_count: 3
  });
  const router = (0,router_.useRouter)();
  const {
    name,
    address,
    postal_code,
    mobile_number,
    email,
    line_id
  } = dataForm;

  function onChange(e) {
    setdataForm(_objectSpread(_objectSpread({}, dataForm), {}, {
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();

    if (isToken) {
      await editOwnerInformation(dataForm, isToken, currentBuildingID);
      setIsLoading(false);
    }

    router.push('/');
  };

  (0,external_react_.useEffect)(() => {
    const token = (0,getLocalStorage/* getFromStorage */.L)("token");
    const buildingID = localStorage.getItem("currentBuildingID");

    if (token && buildingID) {
      setIsToken(token);
      setCurrentBuildingID(buildingID);
    }

    if (data.building_owner) {
      const {
        building_owner
      } = data;
      setdataForm({
        name: building_owner.name,
        address: building_owner.address,
        postal_code: building_owner.postal_code,
        mobile_number: building_owner.mobile_number,
        email: building_owner.email,
        line_id: "line",
        room_count: 3
      });
    } else {
      setdataForm({
        name: "",
        address: "",
        postal_code: "",
        mobile_number: "",
        email: "",
        line_id: "",
        room_count: 0
      });
    }
  }, [data]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (loginForm_module_default()).form,
      onChange: onChange,
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loginForm_module_default()).formItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Owner"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          placeholder: "name",
          className: "mainInput",
          name: "name",
          defaultValue: name ? name : ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loginForm_module_default()).formItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Address"
        }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
          placeholder: "Address",
          className: "mainTextArea",
          rows: 5,
          cols: 5,
          name: "address",
          defaultValue: address ? address : ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loginForm_module_default()).formItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Postal code"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          placeholder: "Postal code",
          className: "mainInput",
          name: "postal_code",
          defaultValue: postal_code ? postal_code : ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loginForm_module_default()).formItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Tel"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          placeholder: "Tel",
          className: "mainInput",
          name: "mobile_number",
          defaultValue: mobile_number ? mobile_number : ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (loginForm_module_default()).formItem,
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          placeholder: "Email",
          className: "mainInput",
          name: "email",
          defaultValue: email ? email : ""
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (loginForm_module_default()).boxBut,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "but_gray",
          type: "submit",
          children: isLoading ? "Loading..." : "บันทึก"
        })
      })]
    })
  });
};

/* harmony default export */ const loginForm = (LoginForm);

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