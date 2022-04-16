(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/layout/menu.module.scss
var menu_module = __webpack_require__(869);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/layout/menu.tsx






const Menu = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (menu_module_default()).menu,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          className: (menu_module_default()).menuSelector,
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "\u0E2D\u0E32\u0E04\u0E32\u0E23"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "\u0E0A\u0E31\u0E49\u0E19"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
          className: (menu_module_default()).menuSelector,
          children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "\u0E0A\u0E31\u0E49\u0E19"
          }), /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: "1",
            children: "item"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: (menu_module_default()).li_inputSearch,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/svg/search.svg",
          alt: "",
          width: 20
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          className: (menu_module_default()).inputSearch,
          placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E0A\u0E31\u0E49\u0E19,\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E48\u0E32"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (menu_module_default()).logo,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "BRUNO"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (menu_module_default()).menuRigth,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (menu_module_default()).menuItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/svg/user.svg",
              alt: "",
              width: 20
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Owner Information"
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/setting",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (menu_module_default()).menuItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/svg/gear.svg",
              alt: "",
              width: 20
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Unit Price Setting "
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const menu = (Menu);
;// CONCATENATED MODULE: ./components/layout/layout.tsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(menu, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "container",
      children: children
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 869:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": "menu_menu__1WHIe",
	"li_inputSearch": "menu_li_inputSearch__PTQvs",
	"menuItem": "menu_menuItem__1n_S_",
	"inputSearch": "menu_inputSearch__34N82",
	"menuSelector": "menu_menuSelector__E0S_4",
	"logo": "menu_logo__sAbwI",
	"menuRigth": "menu_menuRigth__3inJb"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(6326)));
module.exports = __webpack_exports__;

})();