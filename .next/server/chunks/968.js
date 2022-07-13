exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 1968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2639);
/* harmony import */ var _styles_form_userList_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);
/* harmony import */ var _styles_form_userList_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_form_userList_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const UserList = ({
  data,
  typeUser
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_styles_form_userList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().userList),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_styles_form_userList_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
        children: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E49\u0E2D\u0E07"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/user/add_user/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
            className: "flex items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: "/svg/add.svg",
                width: 20,
                className: "icon",
                alt: ""
              })
            }), "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E48\u0E32"]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: `gap-5 grid  grid-cols-1 lg:grid-cols-2`,
      children: data && data.length ? data.map((item, key) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_userListItem__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        data: item,
        typeUser: typeUser
      }, key)) : "ไม่พบรายการ"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

/***/ }),

/***/ 2639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1802);
/* harmony import */ var _styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const UserListItem = ({
  data,
  typeUser
}) => {
  const {
    0: dataUsers,
    1: setDataUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
  const {
    id,
    name,
    lname,
    tell,
    line,
    email,
    floor_id
  } = data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().userListItem),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure", {
      className: (_styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        src: `/svg/${typeUser ? "userOrange.svg" : "builder.svg"}`,
        width: 40,
        className: "icon",
        alt: ""
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("figcaption", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            children: ["\u0E0A\u0E31\u0E49\u0E19: ", floor_id]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
            children: ["\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E48\u0E32: ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              children: `${name} `
            })]
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
      href: `/user/${id}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure", {
        className: (_styles_form_userListItem_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          src: "/svg/calculate.svg",
          width: 40,
          className: "icon",
          alt: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("figcaption", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "\u0E04\u0E34\u0E14\u0E04\u0E48\u0E32\u0E44\u0E1F"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListItem);

/***/ }),

/***/ 203:
/***/ ((module) => {

// Exports
module.exports = {
	"userList": "userList_userList__2j7Ym",
	"title": "userList_title__2uStV",
	"list": "userList_list__3-rs4"
};


/***/ }),

/***/ 1802:
/***/ ((module) => {

// Exports
module.exports = {
	"userListItem": "userListItem_userListItem__2Ol1z",
	"item": "userListItem_item__31vKy"
};


/***/ })

};
;