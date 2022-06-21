exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 3855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "do": () => (/* reexport */ airRegisteFormr)
});

// UNUSED EXPORTS: LoginForm, UserList, UserListItem

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/form/airRegisterForm.module.scss
var airRegisterForm_module = __webpack_require__(5275);
var airRegisterForm_module_default = /*#__PURE__*/__webpack_require__.n(airRegisterForm_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/form/airRegisteFormr.tsx

 // import { airData } from '../../data/airData'





const AirRegisterForm = ({
  title,
  data,
  airSelected
}) => {
  const {
    0: showMore,
    1: setShowMore
  } = (0,external_react_.useState)(false);

  const onSelect = id => {
    if (id) {
      airSelected.push(id);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (airRegisterForm_module_default()).title,
      children: title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: (airRegisterForm_module_default()).box_form,
      children: [data && data.length ? data.map((item, key) => key <= `${showMore ? 100 : 9}` && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (airRegisterForm_module_default()).form_item,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          className: "container_label",
          children: [item.name, /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "checkbox" // disabled={item.status === "on" ? true : false}
            // defaultChecked={item.status === "on" ? true : false}
            ,
            onChange: () => onSelect(item.id),
            value: item.name
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "checkmark"
          })]
        })
      }, key)) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center",
        children: "\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 Air"
      }), data && data.length > 10 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full text-center cursor-pointer",
        onClick: () => setShowMore(!showMore),
        children: showMore ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "rotate-180",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: `/svg/arrowDown.svg`,
              alt: "",
              width: 10,
              height: 10
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Hidden"
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: "Show more"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: `/svg/arrowDown.svg`,
              alt: "",
              width: 10,
              height: 10
            })
          })]
        })
      }) : null]
    })]
  });
};

/* harmony default export */ const airRegisteFormr = (AirRegisterForm);
// EXTERNAL MODULE: ./components/form/loginForm.tsx + 1 modules
var loginForm = __webpack_require__(7931);
// EXTERNAL MODULE: ./components/form/userList.tsx
var userList = __webpack_require__(1968);
// EXTERNAL MODULE: ./components/form/userListItem.tsx
var userListItem = __webpack_require__(2639);
;// CONCATENATED MODULE: ./components/form/index.tsx





/***/ }),

/***/ 5275:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "airRegisterForm_title__1E3v1",
	"box_form": "airRegisterForm_box_form__2v5bv",
	"form_item": "airRegisterForm_form_item__2e2di"
};


/***/ })

};
;